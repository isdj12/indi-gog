import React from 'react';
import './button.css';

export default function Button({ text = "Кнопка", className = "", href = "" }) {
    const handleClick = () => {
        if (href) {
            window.open(href, '_blank', 'noopener,noreferrer');
        }
    };
    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={`button ${className}`} onClick={handleClick}>
                {text}
            </a>
        );
    }
    return (
        <button className={`button ${className}`}>{text}</button>
    );
}