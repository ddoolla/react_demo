import {Status, STATUS} from "../../../common/constant/status.ts";
import {User} from "../user.ts";

interface UserInfoProps {
    user: User;
    status: Status;
}

const UserInfo = ({ user, status }: UserInfoProps) => {

    if (!user) {
        return <div>User Not Found</div>
    }

    if (status === STATUS.LOADING) {
        return <div>loading...</div>
    }

    return (
        <div>
            <h2>User Info</h2>
            <div>
                <div>id: {user.id}</div>
                <div>nickName: {user.nickName}</div>
                <div>name: {user.name}</div>
                <div>gender: {user.gender}</div>
                <div>hobby: {user.hobby}</div>
                <div>createdAt: {user.createdAt}</div>
            </div>
        </div>
    )
}

export default UserInfo;