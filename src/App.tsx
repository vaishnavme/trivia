import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Navbar } from "./components";
import React from "react";

function App() {
    return (
        <div>
            <Navbar/>
            <div className="p-4 mt-16 md:ml-20">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;