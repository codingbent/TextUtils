import "./App.css";
import React, { useState } from "react";
import About from "./components/About.js";
import Nav from "./components/Nav.js";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    var [mode, setMode] = useState("light");

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null, null);
        }, 3000);
    };

    const removebodyclasses = () => {
        document.body.classList.remove("bg-danger");
        document.body.classList.remove("bg-success");
        document.body.classList.remove("bg-primary");
        document.body.classList.remove("bg-warning");
        document.body.classList.remove("bg-light");
        document.body.classList.remove("bg-dark");
    };
    const removetextcolor = () => {
        document.body.classList.remove("text-white");
        document.body.classList.remove("text-black");
    };
    const togglemode = (cls) => {
        removebodyclasses();
        removetextcolor();
        document.body.classList.add(`bg-${cls}`);
        if (cls === "dark") {
            document.body.classList.add("text-white");
        } else {
            document.body.classList.add("text-black");
        }
        setMode(cls);
    };

    return (
        <>
            <Router>
                <Nav title="TextUtils" mode={mode} togglemode={togglemode} />
                <Alert alert={alert} />
                <div className="container my-3">
                    <Routes>
                        <Route
                            path="/about"
                            element={<About mode={mode} />}
                        ></Route>
                        <Route
                            path="/"
                            element={
                                <TextForm
                                    showAlert={showAlert}
                                    heading="Enter text to analyze"
                                    mode={mode}
                                />
                            }
                        />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
