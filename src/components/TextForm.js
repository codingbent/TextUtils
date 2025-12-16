import React, { useState } from "react";
import "./TextForm.css";

export default function TextForm(props) {
    const [text, setText] = useState("");

    const wordCount =
        text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;

    return (
        <div className="textutils-wrapper">
            {/* Heading */}
            <h2 className="app-title">TextUtils</h2>
            <p className="app-subtitle">
                Analyze and transform text instantly
            </p>

            {/* Textarea */}
            <textarea
                className="text-box"
                placeholder="Start typing here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows="5"
            />

            {/* Buttons */}
            <div className="btn-group">
                <button
                    className="custom-btn"
                    disabled={!text}
                    onClick={() => setText(text.toUpperCase())}
                >
                    Uppercase
                </button>

                <button
                    className="custom-btn"
                    disabled={!text}
                    onClick={() => setText(text.toLowerCase())}
                >
                    Lowercase
                </button>

                <button
                    className="custom-btn"
                    disabled={!text}
                    onClick={() =>
                        setText(text.replace(/\s+/g, " ").trim())
                    }
                >
                    Remove Spaces
                </button>

                <button
                    className="custom-btn"
                    disabled={!text}
                    onClick={() => navigator.clipboard.writeText(text)}
                >
                    Copy
                </button>

                <button
                    className="custom-btn danger"
                    disabled={!text}
                    onClick={() => setText("")}
                >
                    Clear
                </button>
            </div>

            {/* Stats */}
            <div className="stats">
                <span>{wordCount} words</span>
                <span>{text.length} characters</span>
            </div>

            {/* Preview */}
            <div className="preview">
                <h4>Preview</h4>
                <div className="preview-box">
                    {text || "Nothing to preview..."}
                </div>
            </div>
        </div>
    );
}
