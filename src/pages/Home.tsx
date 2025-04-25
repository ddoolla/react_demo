import {useNavigate} from "react-router-dom";

const Home = () => {
    const nav = useNavigate();

    return (
        <div>
            <h2>Home</h2>
            <button onClick={() => nav("/user/list")}>
                User List
            </button>&nbsp;
            <button onClick={() => nav("/mui/test")}>
                MUI test
            </button>
        </div>
    )
}

export default Home;
