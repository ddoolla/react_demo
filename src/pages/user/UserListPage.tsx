import {fetchUsers} from "../../features/user/userSlice.ts";
import {useEffect} from "react";
import {useAppDispatch} from "../../app/withTypes.ts";
import UserList from "../../features/user/ui/UserList.tsx";

const UserListPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return <div>
        <h2>사용자 목록 페이지</h2>
        <UserList />
    </div>
}

export default UserListPage;