import {useNavigate, useParams} from "react-router-dom";
import UserInfo from "../../features/user/ui/UserInfo.tsx";

const UserDetailPage = () => {
    const nav = useNavigate();
    const params = useParams();

    return (
        <div>
            <h2>UserDetail - {params.id}</h2>
            <div>
                <button onClick={() => nav("/user/list")}>
                    list
                </button>
            </div>
            <div>
                <UserInfo id={Number(params.id)}/>
            </div>
        </div>
    )
};

export default UserDetailPage;