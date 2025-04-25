import {useNavigate} from "react-router-dom";

const BoxPage = () => {
    const nav = useNavigate();
    return (
        <div>
            <h1>Box</h1>
            <button onClick={() => nav(-1)}>back</button>
            <hr/>
            <div>

            </div>
        </div>
    )
}

export default BoxPage;