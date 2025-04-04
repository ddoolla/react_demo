import {useAppSelector} from "../../../app/withTypes.ts";
import {selectUsers} from "../userSlice.ts";
import {STATUS} from "../../../common/constant/status.ts";
import UserListItem from "./UserListItem.tsx";
import {useNavigate} from "react-router-dom";

const UserList = () => {
    const nav = useNavigate();
    const users = useAppSelector(selectUsers);
    const status = useAppSelector(state => state.users.status)

    if (status === STATUS.LOADING) {
        return <div>loading...</div>
    }

    const listItems = users.map((user) => {
        return <UserListItem key={user.id} user={user}/>
    });

    return (
        <div>
            <div>{listItems}</div>
        </div>
    )
}

export default UserList;