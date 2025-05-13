import {useNavigate} from "react-router-dom";
import TitleHeader from "../../components/TitleHeader.tsx";

const RhfmTestPage = () => {
    const nav = useNavigate();
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 2}}>
            <TitleHeader title={"react-hook-form-mui test"}/>
            <div>
                <button onClick={() => nav('/react-hook-form-mui/ex01')}>ex01</button>
            </div>
        </div>
    )
}

export default RhfmTestPage;