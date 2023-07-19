import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/className";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/ThemeProvider/router";
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from "widgets/Sidebar";
import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App;