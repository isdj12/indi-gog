import React from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css';

export default function Profile() {
    const navigate = useNavigate();

    const goToFhod = () => {
        navigate('/fhod');
    };

    return (
        <div className="profile-square" onClick={goToFhod} title="Перейти к Fhod">
            <span className="profile-text">Fhod</span>
        </div>
    );
} 