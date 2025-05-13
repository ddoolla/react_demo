import {useNavigate} from "react-router-dom";

const HomeButton = () => {
    const nav = useNavigate();

    return (
        <div>
            <button onClick={() => nav('/')}>home</button>
        </div>
    )
}

export default HomeButton;