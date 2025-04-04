import UserEditForm from "../../features/user/ui/UserEditForm.tsx";
import {useNavigate, useParams} from "react-router-dom";
import useUser from "../../hooks/useUser.tsx";

const UserEditPage = () => {
    const nav = useNavigate();
    const params = useParams();
    const userId = Number(params.id);
    const {user, status} = useUser(userId);

    return (
        <div>
            <h2>Edit User - {userId}</h2>
            <div>
                <button onClick={() => nav(-1)}>
                    back
                </button>
            </div>
            <div>
                <UserEditForm curUser={user} status={status}/>
            </div>
        </div>
    )
}

export default UserEditPage;
