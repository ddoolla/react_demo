import {useNavigate} from "react-router-dom";

const BackButton = () => {
    const nav = useNavigate();

    return (
        <div>
            <button onClick={() => nav(-1)}>back</button>
        </div>
    )
}

export default BackButton;