import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

import { Root } from "./pages/Root";
import { Card } from "./pages/Card";
import { AddCard } from "./pages/AddCard";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Card />} />
                <Route path="add" element={<AddCard />} />
            </Route>
        )
    );
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
