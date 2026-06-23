import { useState } from "react";
import { FaEnvelope } from "react-icons/fa6";

const EMAIL = "oigresrol20@gmail.com";

function EmailSocialLink({ fill, className = "" }) {
    const [showEmail, setShowEmail] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setShowEmail((prev) => !prev);
    };

    return (
        <a
            href="#"
            className={`social-email-link ${showEmail ? "show-email" : ""} ${className}`.trim()}
            onClick={handleClick}
            aria-label={EMAIL}
        >
            <FaEnvelope fill={fill ?? "currentColor"} />
            <span className="social-email-tooltip">{EMAIL}</span>
        </a>
    );
}

export default EmailSocialLink;