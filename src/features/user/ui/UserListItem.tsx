import {User} from "../user.ts";

const UserListItem = ({user}: {user: User}) => {
    return (
        <div>
            <div>{user.id}</div>
            <div>{user.name}</div>
        </div>
    )
}

export default UserListItem;