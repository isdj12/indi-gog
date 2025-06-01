import React from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css';

export default function Profile() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    };

    return (
        <div className="profile-square" onClick={handleClick}>
            <span className="profile-text">
                Войти
            </span>
        </div>
    );
} 