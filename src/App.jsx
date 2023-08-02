import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./_app.scss";

function App() {
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1 className="mt-5">Vite + React</h1>
        </>
    );
}

export default App;
