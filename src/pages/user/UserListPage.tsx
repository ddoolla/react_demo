import UserList from "../../features/user/ui/UserList.tsx";
import {useAppDispatch} from "../../app/withTypes.ts";
import {useEffect} from "react";
import {fetchUsers} from "../../features/user/userSlice.ts";
import {useLocation, useNavigate} from "react-router-dom";

const UserListPage = () => {
    const nav = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);

    useEffect(() => {
        if (location.state?.message) {
            alert(location.state.message);
            // 새로고침 시 중복 메시지 방지 (history 수정)
            window.history.replaceState({}, document.title);
        }
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <div>
                <button onClick={() => nav("/")}>
                    Home
                </button>&nbsp;
                <button onClick={() => nav("/users/form")}>
                    Form
                </button>
            </div>
            <UserList/>
        </div>
    )
}

export default UserListPage;