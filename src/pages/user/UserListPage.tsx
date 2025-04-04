import UserList from "../../features/user/ui/UserList.tsx";
import {useAppDispatch} from "../../app/withTypes.ts";
import {useEffect} from "react";
import {fetchUsers} from "../../features/user/userSlice.ts";
import {useNavigate} from "react-router-dom";

const UserListPage = () => {
    const nav = useNavigate();
    // 훅으로 만들어서 users, status 반환해서 props 로 넘기는 방법으로 개선?
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch]);

    return (
        <div>
            <h2>User List</h2>
            <div>
                <button onClick={() => nav("/")}>
                    Home
                </button>&nbsp;
                <button onClick={() => nav("/user/form")}>
                    Form
                </button>
            </div>
            <UserList/>
        </div>
    )
}

export default UserListPage;