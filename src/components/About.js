export default function About(props) {
    const myStyle = {
        color: props.mode === "dark" ? "white" : "#042743",
        backgroundColor:
            props.mode === "dark" ? "rgba(36, 74, 104, 0.9)" : "white",
        borderRadius: "10px",
        padding: "20px",
    };

    return (
        <div className="container my-5">
            <div style={myStyle}>
                <h2 className="mb-4 text-center">About TextUtils</h2>

                {/* Project Description */}
                <section className="mb-4">
                    <h4>📘 Project Overview</h4>
                    <p>
                        TextUtils is a simple yet powerful text utility web
                        application built using React. It allows users to
                        analyze, transform, and manage text efficiently through
                        an easy-to-use interface.
                    </p>
                </section>

                {/* Features */}
                <section className="mb-4">
                    <h4>⚙️ Key Features</h4>
                    <ul>
                        <li>Convert text to Uppercase and Lowercase</li>
                        <li>Remove extra spaces from text</li>
                        <li>Copy text to clipboard</li>
                        <li>Clear text instantly</li>
                        <li>Real-time word and character count</li>
                        <li>Light & Dark mode support</li>
                    </ul>
                </section>

                {/* Educational Purpose */}
                <section className="mb-4">
                    <h4>🎓 Educational Purpose</h4>
                    <p>
                        This project is developed strictly for educational and
                        learning purposes. It helps beginners understand core
                        React concepts such as state management using hooks,
                        props, event handling, conditional rendering, routing,
                        and reusable components.
                    </p>
                    <p>
                        This application is{" "}
                        <strong>
                            not intended for commercial or production use
                        </strong>
                        .
                    </p>
                </section>

                {/* Technology Stack */}
                <section className="mb-4">
                    <h4>🛠️ Technologies Used</h4>
                    <ul>
                        <li>React.js</li>
                        <li>React Router</li>
                        <li>Bootstrap</li>
                        <li>JavaScript (ES6)</li>
                        <li>HTML & CSS</li>
                    </ul>
                </section>

                {/* Footer Note */}
                <section className="text-center mt-4">
                    <small>
                        Developed as a learning project to practice modern React
                        development.
                    </small>
                </section>
            </div>
        </div>
    );
}
