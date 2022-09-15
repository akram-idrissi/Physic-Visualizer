import { React, createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./about";
import Collection from "./collection";
import Landing from "./landing";

const Context = createContext();

const ContextProvider = () => {
    const [showLanding, setShowLanding] = useState(true);

    <main className="container">
        <Context.Provider value={{ showLanding, setShowLanding }}>
            <Landing />
            <Routes>
                <Route path="/collections" element={<Collection />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Context.Provider>
    </main>;
};

export { Context, ContextProvider };
