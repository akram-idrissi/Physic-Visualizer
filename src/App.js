import { React, createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./components/context";
import Collection from "./components/collection";
import About from "./components/about";
import "./App.css";
import Landing from "./components/landing";

const Context = createContext();

const App = () => {
    return (
        <main className="container">
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />}></Route>
                    <Route exact path="/about" element={<About />}></Route>
                    <Route path="/collections" element={<Collection />}></Route>
                </Routes>
            </Router>
        </main>
    );
};

export default App;
