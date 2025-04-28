import {useAppDispatch, useAppSelector} from "../app/withTypes.ts";
import {useEffect} from "react";
import {fetchUserById, selectUserById} from "../features/user/userSlice.ts";
import {STATUS} from "../common/constant/status.ts";
import {useNavigate} from "react-router-dom";

const useUser = (userId: number) => {
    const nav = useNavigate();
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => selectUserById(state, userId));
    const status = useAppSelector(state => state.users.status);

    useEffect(() => {
        dispatch(fetchUserById(userId));
    }, [dispatch, userId]);

    /**
     * BrowserRouter 의 업데이트는 컴포넌트의 렌더링이 완료되었을 때 가능하다.
     * navigate() 를 호출하면 내부적으로 BrowserRouter 의 상태를 변경하기 때문에
     * 렌더링이 완료된 이후에 호출해야 한다. (마운트 시)
     * deps 값을 넣어주지 않으면 새로고침 하지 않는 한 다시 실행되지 않는다.
     */
    useEffect(() => {
        if (status === STATUS.ERROR) {
            window.alert(`User Not Found ${userId}`);
            nav("/users", {replace: true});
        }
    }, [nav, status, userId]);

    return {user, status};
}

export default useUser;