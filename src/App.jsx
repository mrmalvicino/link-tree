import './App.css'
import { LinkTree } from "./LinkTree";
import { MatrixRain } from "./MatrixRain";

export function App() {
    return (
        <div className="app-container">
            <MatrixRain />
            <LinkTree />
        </div>
    )
}