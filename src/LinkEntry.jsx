export function LinkEntry({ text, url, icon }) {
    const props = {
        style: {
            fontSize: "1.6rem",
            color: "#fafafa",
            textDecoration: "none"
        }
    }

    return (
        <a href={url} {...props}>
            <i className={`bi bi-${icon}`} style={{ verticalAlign: "middle" }}></i>
            <span>{` `}</span>
            <span>{text}</span>
        </a>
    )
}