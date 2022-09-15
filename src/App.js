import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collection from "./components/collection";
import Landing from "./components/home/landing";
import About from "./components/about";
import "./App.css";

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
