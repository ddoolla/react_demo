import {useAppSelector} from "../../../app/withTypes.ts";
import {selectUserById} from "../userSlice.ts";

interface UserInfoProps {
    id: number;
}

const UserInfo = ({ id }: UserInfoProps) => {
    const user = useAppSelector(state => selectUserById(state, id));
    return (
        <div>
            <h2>사용자 정보 상세보기</h2>
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