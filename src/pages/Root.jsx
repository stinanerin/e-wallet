import { Outlet } from "react-router-dom";
import { Header } from "../components/layout/Header";
export const Root = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
};
