import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("Enter Your Text");

    const handleonchange = (event) => {
        setText(event.target.value);
    };
    const converttouppercase = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted To Uppercase", "Success");
    };
    const converttolowercase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted To Lowercase", "Success");
    };
    const removespace = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(""));
    };
    const cleartext = () => {
        let newtext = "";
        setText(newtext);
        props.showAlert("Text Cleared", "Success");
    };
    const copytext = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard", "Success");
    };
    return (
        <>
            <div
                className="container my-5"
                style={{ color: props.mode === "dark" ? "white" : "#042743" }}
            >
                <div className="card shadow-lg border-0">
                    <div
                        className="card-body"
                        style={{
                            backgroundColor:
                                props.mode === "dark" ? "#0f172a" : "white",
                        }}
                    >
                        {/* Heading */}
                        <h2 className="card-title text-center mb-4">
                            ✨ {props.heading}
                        </h2>

                        {/* Textarea */}
                        <textarea
                            className="form-control mb-4"
                            id="exampleFormControlTextarea1"
                            rows="8"
                            value={text}
                            onChange={handleonchange}
                            style={{
                                backgroundColor:
                                    props.mode === "dark" ? "#1e293b" : "white",
                                color:
                                    props.mode === "dark" ? "white" : "#042743",
                            }}
                        ></textarea>

                        {/* Buttons */}
                        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                            <button
                                disabled={text.length === 0}
                                className="btn btn-primary"
                                onClick={converttouppercase}
                            >
                                Uppercase
                            </button>

                            <button
                                disabled={text.length === 0}
                                className="btn btn-success"
                                onClick={converttolowercase}
                            >
                                Lowercase
                            </button>

                            <button
                                disabled={text.length === 0}
                                className="btn btn-warning text-dark"
                                onClick={removespace}
                            >
                                Remove Spaces
                            </button>

                            <button
                                disabled={text.length === 0}
                                className="btn btn-secondary"
                                onClick={copytext}
                            >
                                Copy
                            </button>

                            <button
                                disabled={text.length === 0}
                                className="btn btn-danger"
                                onClick={cleartext}
                            >
                                Clear
                            </button>
                        </div>

                        {/* Summary */}
                        <div className="row text-center mb-4">
                            <div className="col-md-6 mb-2">
                                <div className="p-3 rounded bg-primary text-white">
                                    <h5>Words</h5>
                                    <p className="fs-4 mb-0">
                                        {
                                            text
                                                .split(" ")
                                                .filter(
                                                    (element) =>
                                                        element.length !== 0
                                                ).length
                                        }
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 mb-2">
                                <div className="p-3 rounded bg-success text-white">
                                    <h5>Characters</h5>
                                    <p className="fs-4 mb-0">{text.length}</p>
                                </div>
                            </div>
                        </div>

                        {/* Preview */}
                        <div>
                            <h4>Preview</h4>
                            <p className="border rounded p-3">
                                {text.length > 0 ? text : "Nothing to preview"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
