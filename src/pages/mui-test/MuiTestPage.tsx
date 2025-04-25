import {useNavigate} from "react-router-dom";

const MuiTestPage = () => {
    const nav = useNavigate();
    return (
        <div>
            <h1>Mui Test</h1>
            <hr/>
            <div>
                <h2>Layout</h2>
                <div>
                    <button onClick={() => nav("/mui/layout/box")}>Box</button>
                </div>
            </div>
        </div>
    )
}

export default MuiTestPage;