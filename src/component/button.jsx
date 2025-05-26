import React from 'react';
import './button.css';

export default function Button({ text = "Кнопка", className = "" }) {
    return (
        <button className={`button ${className}`}>{text}</button>
    );
}