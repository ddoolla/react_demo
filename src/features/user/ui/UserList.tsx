import {useAppSelector} from "../../../app/withTypes.ts";
import {selectUsers} from "../userSlice.ts";
import {STATUS} from "../../../common/constant/status.ts";
import UserListItem from "./UserListItem.tsx";

const UserList = () => {
    const users = useAppSelector(selectUsers);
    const loadingStatus = useAppSelector(state => state.users.status)

    if (loadingStatus === STATUS.LOADING) {
        return <div>loading...</div>
    }

    const listItems = users.map((user) => {
        return <UserListItem key={user.id} user={user}/>
    });

    return <div>{listItems}</div>
}

export default UserList;