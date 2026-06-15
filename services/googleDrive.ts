const API_KEY = import.meta.env.VITE_GOOGLE_API;
const FOLDER_ID = import.meta.env.VITE_GOOGLE_FOLDER_ID;

type DriveFile = {
  id: string;
  name: string;
  mimeType: string;
};

type MasonryImage = {
  id: string;
  img: string;
  url: string;
};

let cache: MasonryImage[] | null = null;

export async function getDriveImages(): Promise<MasonryImage[]> {
  // Don't hit the API again if we've already loaded once
  if (cache) return cache;

  // Fetch the folders inside the gallery folder
  const folderRes = await fetch(
    `https://www.googleapis.com/drive/v3/files` +
      `?q='${FOLDER_ID}'+in+parents` +
      `&fields=files(id,name,mimeType)` +
      `&supportsAllDrives=true` +
      `&includeItemsFromAllDrives=true` +
      `&key=${API_KEY}`
  );

  const folderData = await folderRes.json();

  const folders: DriveFile[] = folderData.files.filter(
    (file: DriveFile) =>
      file.mimeType === "application/vnd.google-apps.folder"
  );

  // Fetch every folder simultaneously
  const imageResponses = await Promise.all(
    folders.map(async (folder) => {
      const res = await fetch(
        `https://www.googleapis.com/drive/v3/files` +
          `?q='${folder.id}'+in+parents+and+mimeType+contains+'image/'` +
          `&fields=files(id,name)` +
          `&supportsAllDrives=true` +
          `&includeItemsFromAllDrives=true` +
          `&key=${API_KEY}`
      );

      return res.json();
    })
  );

  const images: MasonryImage[] = [];

  for (const response of imageResponses) {
    if (!response.files) continue;

    for (const file of response.files) {
      images.push({
        id: file.id,
        img: `https://lh3.googleusercontent.com/d/${file.id}=w2000`,
        url: `https://drive.google.com/file/d/${file.id}/view`
      });
    }
  }

  // Shuffle the images so folders aren't grouped together
  images.sort(() => Math.random() - 0.5);

  cache = images;

  return images;
}