import React from 'react';
import AppHeader from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import AppButtons from "./components/Buttons/Buttons";
import './index.css'


export default function App() {
    return (
        <div>
            <AppHeader />
            <Drawer />
            <div className="container">
                <AppButtons />
            </div>
        </div>
    );
}
