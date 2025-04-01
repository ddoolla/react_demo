import {fetchUsers} from "../../features/user/userSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../app/store.ts";
import {useEffect} from "react";

const UserList = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const ids = useSelector((state: RootState) => state.users.ids)
    console.log("ids", ids);

    return <div>UserList</div>
}

export default UserList;