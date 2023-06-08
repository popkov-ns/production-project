import React, { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/className";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import './styles/index.scss';

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О компании</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage />}/>
                    <Route path={'/about'} element={<AboutPage />}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;