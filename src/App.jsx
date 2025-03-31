import './App.css'
import { LinkEntry } from "./LinkEntry";

export function App() {
    return (
        <section className="fluo-box col-flex">
            <h1>M.R.Malvicino</h1>
            <div className="col-flex">
                <LinkEntry text="Portfolio" url="https://mrmalvicino.com" icon="briefcase" />
                <LinkEntry text="LinkedIn" url="https://www.linkedin.com/in/mrmalvicino/" icon="linkedin" />
                <LinkEntry text="Telegram" url="https://t.me/mrmalvicino" icon="telegram" />
            </div>
        </section>
    )
}