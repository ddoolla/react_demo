import {useAppDispatch, useAppSelector} from "../../../app/withTypes.ts";
import {fetchUserById, selectUserById} from "../userSlice.ts";
import {STATUS} from "../../../common/constant/status.ts";
import {useEffect} from "react";

interface UserInfoProps {
    id: number;
}

const UserInfo = ({ id }: UserInfoProps) => {
    const user = useAppSelector(state => selectUserById(state, id));
    const status = useAppSelector(state => state.users.status)

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchUserById(id));
    }, [dispatch, id]);

    if (status === STATUS.LOADING) {
        return <div>loading...</div>
    }

    if (status === STATUS.ERROR) {
        return <div>User Data Not Found</div>
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