import React, { useState } from "react";

export function LinkEntry({ text, url, icon, textSize = "1.6rem" }) {
    const [copied, setCopied] = useState(false);

    const props = {
        style: {
            fontSize: textSize,
            color: "#fafafa",
            textDecoration: "none"
        }
    }

    const handleClick = (event) => {
        if (!url) {
            event.preventDefault();

            navigator.clipboard.writeText(text)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                })
                .catch(err => {
                    console.error("Error: ", err);
                });
        }
    };

    return (
        <a href={url || "#"} onClick={(e) => handleClick(e, text, url)} {...props} target="_blank" rel="noopener noreferrer">
            {icon && <i className={`bi bi-${icon}`} style={{ verticalAlign: "middle", marginRight: "10px" }}></i>}
            <span>{text}</span>
            {copied && <i className="bi bi-check" style={{ verticalAlign: "middle", color: "#0f0" }}></i>}
        </a>
    )
}