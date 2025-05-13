import {useNavigate} from "react-router-dom";

interface BasicButtonProps {
    text: string;
    url: string;
}

const BasicButton = ({text, url}: BasicButtonProps) => {
    const nav = useNavigate();

    return (
        <div>
            <button
                onClick={() => nav(url)}>{text}</button>
        </div>
    )
}

export default BasicButton;