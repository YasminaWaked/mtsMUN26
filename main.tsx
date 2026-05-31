import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Committees from './pages/Committees';
import Gallery from './pages/Gallery';
import ChairRegistration from './pages/ChairRegistration';
import DelegateRegistration from './pages/DelegateRegistration';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chair-registration" element={<ChairRegistration />} />
        <Route path="/delegate-registration" element={<DelegateRegistration />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);