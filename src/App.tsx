import './styles/index.scss';

import React, {Suspense, useContext, useState} from "react";
import {Link, Route, Routes} from 'react-router-dom';

import {AboutPagesAsync} from "./pages/AboutPage/AboutPages.async";
import {MainPagesAsync} from "./pages/MainPage/MainPages.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {

    const { theme, setTheme} = useContext(ThemeContext);

    const toggleTheme  = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
    }

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Тема</button>
            <Link to={'/'}>main </Link>
            <Link to={'/about'}>about</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPagesAsync/>}/>
                    <Route path={'/'} element={<MainPagesAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;