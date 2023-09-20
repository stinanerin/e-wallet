import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { AddCard } from "./pages/AddCard";
import { NotFound } from "./pages/NotFound";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path="add" element={<AddCard />} />
                <Route path="/*" element={<NotFound />} />
            </Route>
        )
    );
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
