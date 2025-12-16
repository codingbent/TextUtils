export default function About(props) {
    const myStyle = {
        color: props.mode === "dark" ? "white" : "#042743",
        backgroundColor:
            props.mode === "dark" ? "rgba(36, 74, 104, 0.9)" : "white",
    };

    return (
        <div className="container my-4" style={myStyle}>
            <h2 className="mb-4">About This Project</h2>

            <div className="accordion" id="accordionExample">
                {/* Feature 1 */}
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            style={myStyle}
                        >
                            📄 Text Analysis & Transformation
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            This project allows users to analyze and manipulate
                            text efficiently. Users can convert text to
                            uppercase or lowercase, remove extra spaces, copy
                            text to the clipboard, and clear the text instantly.
                            It also provides a real-time summary including word
                            count and character count.
                        </div>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            style={myStyle}
                        >
                            🎓 Educational Purpose
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            This project is developed strictly for educational
                            and learning purposes. It helps beginners understand
                            React concepts such as state management, props,
                            event handling, conditional rendering, and component
                            reusability. It is not intended for commercial or
                            production use.
                        </div>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            style={myStyle}
                        >
                            🌐 User Friendly & Responsive
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            The application is fully responsive and works across
                            modern browsers. It supports light and dark modes
                            for better user experience and demonstrates how UI
                            themes can be managed dynamically in React.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
