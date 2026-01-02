import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");

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
        <div className="container my-4" style={{ maxWidth: "820px" }}>
            {/* Title */}
            <h2
                className="mb-1"
                style={{ color: props.mode === "dark" ? "white" : "#111" }}
            >
                {props.heading}
            </h2>
            <p
                className="text-muted mb-3"
                style={{ color: props.mode === "dark" ? "white" : "#111" }}
            >
                Convert, clean, and analyze your text instantly
            </p>

            {/* Textarea */}
            <textarea
                className="form-control mb-3"
                id="exampleFormControlTextarea1"
                rows="6"
                value={text}
                placeholder="Enter Your Text"
                onChange={handleonchange}
                style={{
                    backgroundColor: "white",
                    color: "#111",
                    borderRadius: "10px",
                    border: "1px solid #ccc",
                }}
            ></textarea>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-2 mb-4">
                <button
                    disabled={text.length === 0}
                    className="btn btn-light border"
                    onClick={converttouppercase}
                >
                    Uppercase
                </button>

                <button
                    disabled={text.length === 0}
                    className="btn btn-light border"
                    onClick={converttolowercase}
                >
                    Lowercase
                </button>

                <button
                    disabled={text.length === 0}
                    className="btn btn-light border"
                    onClick={removespace}
                >
                    Remove Spaces
                </button>

                <button
                    disabled={text.length === 0}
                    className="btn btn-light border"
                    onClick={copytext}
                >
                    Copy
                </button>

                <button
                    disabled={text.length === 0}
                    className="btn btn-outline-danger"
                    onClick={cleartext}
                >
                    Clear
                </button>
            </div>

            {/* Stats */}
            <div
                className="d-flex gap-4 mb-3"
                style={{ color: props.mode === "dark" ? "white" : "#111" }}
            >
                <span>
                    <strong>
                        {
                            text
                                .split(" ")
                                .filter((element) => element.length !== 0)
                                .length
                        }
                    </strong>{" "}
                    words
                </span>
                <span>
                    <strong>{text.length}</strong> characters
                </span>
            </div>

            {/* Preview */}
            <div>
                <h5 style={{ color: props.mode === "dark" ? "white" : "#111" }}>
                    Preview
                </h5>
                <div
                    style={{
                        backgroundColor: "white",
                        border: "1px dashed #ccc",
                        borderRadius: "8px",
                        padding: "10px",
                        minHeight: "60px",
                        color: "#111",
                    }}
                >
                    {text.length > 0 ? text : "Nothing to preview"}
                </div>
            </div>
        </div>
    );
}
