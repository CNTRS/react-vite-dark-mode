import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Container from './Container';
import { DarkModeProvider } from './context/DarkModeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <DarkModeProvider>
            <Container />
        </DarkModeProvider>
    </React.StrictMode>,
);
