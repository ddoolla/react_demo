import {useNavigate} from "react-router-dom";
import {GENDER} from "../../../common/constant/gender.ts";
import {NewUser} from "../user.ts";
import {useAppDispatch} from "../../../app/withTypes.ts";
import {saveNewUser} from "../userSlice.ts";

const UserForm = () => {
    const nav = useNavigate();

    const dispatch = useAppDispatch();

    const initialUser:NewUser = {
        nickName: "test",
        password: "test",
        name: "test",
        gender: GENDER.MALE,
        hobby: "test",
    }
    dispatch(saveNewUser(initialUser));

    return (
        <div>
            <h2>userForm</h2>
            <div>
                <form>
                </form>
            </div>
            <div>
                <button onClick={() => nav("/user/list")}>
                    list
                </button>
            </div>
        </div>
    )
}

export default UserForm;