import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/about";
import Landing from "./components/home/landing";
import Collection from "./components/collection/collection";

import "./normalize.css";
import "./all.css";
import { ContextProvider } from "./context/context";
import Visualization from "./components/visualization";

const App = () => {
    return (
        <ContextProvider>
            <main className="container">
                <Router>
                    <Routes>
                        <Route path="/" element={<Landing />}></Route>
                        <Route
                            path="/visualize/:name"
                            element={<Visualization />}
                        ></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route
                            path="/collections"
                            element={<Collection />}
                        ></Route>
                    </Routes>
                </Router>
            </main>
        </ContextProvider>
    );
};

export default App;
