import {useNavigate} from "react-router-dom";

const Home = () => {
    const nav = useNavigate();

    return (
        <div>
            <h2>Home</h2>
            <button onClick={() => nav("/user/list")}>
                사용자 목록
            </button>
        </div>
    )
}

export default Home;
