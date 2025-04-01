import { LinkEntry } from "./LinkEntry";

export function LinkTree() {
    return (
        <div className="fluo-box col-flex">
            <h1 style={{ fontSize: "35px" }}>{`<M.R.Malvicino/>`}</h1>
            <div className="col-flex mb-2">
                <LinkEntry text="Portfolio" url="https://mrmalvicino.com" icon="briefcase" />
                <LinkEntry text="LinkedIn" url="https://www.linkedin.com/in/mrmalvicino/" icon="linkedin" />
                <LinkEntry text="GitHub" url="https://www.github.com/mrmalvicino/" icon="github" />
                <LinkEntry text="Telegram" url="https://t.me/mrmalvicino" icon="telegram" />
                <LinkEntry text="Discord" url="https://discord.gg/ApMy5pMwaP" icon="discord" />
            </div>
            <LinkEntry text="mrmalvicino@gmail.com" textSize="1.4rem" />
        </div>
    )
}