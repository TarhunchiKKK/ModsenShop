import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    const name: string = "";
    return <h1>Hello</h1>;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
