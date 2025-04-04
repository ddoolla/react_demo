import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {EditUser, User} from "../user.ts";
import {GENDER} from "../../../common/constant/gender.ts";
import {STATUS, Status} from "../../../common/constant/status.ts";
import {useAppDispatch} from "../../../app/withTypes.ts";
import {updateUser} from "../userSlice.ts";

interface UserEditFormParams {
    curUser: User;
    status: Status;
}

const UserEditForm = ({curUser, status}: UserEditFormParams) => {
    const nav = useNavigate();
    const dispatch = useAppDispatch();
    const [input, setInput] = useState<EditUser | null>(null);

    /**
     * UserEditPage 에서 useUser 훅에서 마운트 시 데이터를 가져오기 때문에
     * 데이터를 가져오기 전까지 curUser 는 undefined 값이기 때문에 useEffect 내에서 초기화 처리
     */
    useEffect(() => {
        if (curUser) {
            setInput({
                password: "",
                ...curUser
            })
        }
    }, [curUser]);

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setInput({
            ...input,
            [name]: value
        });
    }
    const onClickSubmitButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const userId = curUser.id;
        await dispatch(updateUser({id: userId, updateData: input!}));
        nav(`/user/${userId}`, {replace: true});
    }

    if (!curUser) {
        return <div>User Not Found</div>
    }

    if (!input || status === STATUS.LOADING) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h3>User Edit Form</h3>
            <div>
                <form method="POST">
                    <div>
                        nickName: {curUser.nickName}
                    </div>
                    <div>
                        password:
                        <input type="password" name="password" value={input.password}
                               onChange={onChangeInput}
                               autoComplete="current-password"/>
                    </div>
                    <div>
                        name:
                        <input type="text" name="name" value={input.name}
                               onChange={onChangeInput}/>
                    </div>
                    <div>
                        gender:
                        <label>
                            <input type="radio" name="gender" value={GENDER.MALE}
                                   onChange={onChangeInput}
                                   checked={input.gender === GENDER.MALE}/> MALE
                        </label>
                        <label>
                            <input type="radio" name="gender" value={GENDER.FEMALE}
                                   onChange={onChangeInput}
                                   checked={input.gender === GENDER.FEMALE}/> FEMALE
                        </label>
                    </div>
                    <div>
                        hobby:
                        <input type="text" name="hobby" value={input.hobby}
                               onChange={onChangeInput}/>
                    </div>
                    <div>
                        <button onClick={onClickSubmitButton}>edit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserEditForm;