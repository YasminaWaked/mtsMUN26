import React, { useRef } from 'react';
import '../CSS/CommitteeContent.css'

interface CommiteeCardProps {
    committeeName: string;
    committeeLogo: string;
    category: 'beginner' | 'intermediate' | 'advanced';
    agenda1: string;
    agenda2: string;
    learnMore: string;
}

const CommitteeContent: React.FC<CommiteeCardProps> = ({
    committeeName,
    committeeLogo,
    category,
    agenda1,
    agenda2,
    learnMore 

}) => {
    return (
        <div className='commitee-card'>
            <div className='committee-row'>
                <img 
                    src={committeeLogo}
                    alt={committeeName}
                />

                <p className={`committee-category ${category}`}>
                {category}
                </p>
            </div>
            

            <h2 className='committee-name'>{committeeName}</h2>

            <div className='committee-agendas'>
                <p>Agendas: </p>
                <p>{agenda1}</p>
                <p>{agenda2 ?? ''}</p>
            </div>

            <div className='committee-buttons'>
                <a href= ''>
                    Register
                </a>
                <a href={learnMore}>
                    Learn More
                </a>
            </div>

        </div>
    );
};

export default CommitteeContent