import {User} from "../user.ts";
import {useNavigate} from "react-router-dom";

interface UserListItemProps {
    user: User;
}

const UserListItem = ({user}: UserListItemProps) => {
    const nav = useNavigate();

    return (
        <div>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>
                <button onClick={() => nav("/user/" + user.id)}>
                    Detail
                </button>
            </div>
        </div>
    )
}

export default UserListItem;