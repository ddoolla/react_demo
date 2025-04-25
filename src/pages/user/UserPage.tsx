import {useNavigate, useParams} from "react-router-dom";
import UserInfo from "../../features/user/ui/UserInfo.tsx";
import useUser from "../../hooks/useUser.tsx";
import {useAppDispatch} from "../../app/withTypes.ts";
import {deleteUser} from "../../features/user/userSlice.ts";

const UserPage = () => {
    const nav = useNavigate();
    const params = useParams();
    const dispatch = useAppDispatch();
    const userId = Number(params.id);
    const {user, status} = useUser(userId);

    const onClickDeleteButton = async () => {
        if (window.confirm("Delete User?")) {
            try {
                await dispatch(deleteUser(userId)).unwrap();
                nav("/user/list", {state: {message: "Delete Success"}});
            } catch (error) {
                nav("/user/list", {state: {message: "Delete Fail"}});
            }
        }
    }

    return (
        <div>
            <h2>UserDetail - {params.id}</h2>
            <div>
                <button onClick={() => nav("/user/list")}>
                    list
                </button>&nbsp;
                <button onClick={() => nav(`/user/${userId}/edit`)}>
                    edit
                </button>&nbsp;
                <button onClick={onClickDeleteButton}>
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