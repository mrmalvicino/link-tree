import React, { useState } from "react";

export function LinkEntry({ text, url, icon, textSize = "1.4rem" }) {
    const [copied, setCopied] = useState(false);
    const [hovered, setHovered] = useState(false);

    const props = {
        style: {
            height: "40px",
            fontSize: textSize,
            color: "#fafafa",
            textDecoration: "none",
            transition: "transform 0.1s ease-in-out",
            transform: hovered ? "scale(1.1)" : "scale(1)"
        },
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false)
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