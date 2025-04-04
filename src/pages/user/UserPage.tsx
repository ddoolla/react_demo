import {useNavigate, useParams} from "react-router-dom";
import UserInfo from "../../features/user/ui/UserInfo.tsx";
import useUser from "../../hooks/useUser.tsx";

const UserPage = () => {
    const nav = useNavigate();
    const params = useParams();
    const userId = Number(params.id);
    const {user, status} = useUser(userId);

    return (
        <div>
            <h2>UserDetail - {params.id}</h2>
            <div>
                <button onClick={() => nav("/user/list")}>
                    list
                </button>&nbsp;
                <button onClick={() => nav(`/user/edit/${userId}`)}>
                    edit
                </button>&nbsp;
                <button onClick={() => nav("/user/list")}>
                    delete
                </button>
            </div>
            <div>
                <UserInfo user={user} status={status} />
            </div>
        </div>
    )
};

export default UserPage;