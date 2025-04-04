import {useNavigate, useParams} from "react-router-dom";
import UserInfo from "../../features/user/ui/UserInfo.tsx";

const UserPage = () => {
    const nav = useNavigate();
    const params = useParams();

    return (
        <div>
            <h2>UserDetail - {params.id}</h2>
            <div>
                <button onClick={() => nav("/user/list")}>
                    list
                </button>&nbsp;
                <button onClick={() => nav("/user/list")}>
                    edit
                </button>&nbsp;
                <button onClick={() => nav("/user/list")}>
                    delete
                </button>
            </div>
            <div>
                <UserInfo id={Number(params.id)}/>
            </div>
        </div>
    )
};

export default UserPage;