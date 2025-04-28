import {useNavigate} from "react-router-dom";
import {GENDER} from "../../../common/constant/gender.ts";
import {NewUser} from "../user.ts";
import {useAppDispatch} from "../../../app/withTypes.ts";
import {saveNewUser} from "../userSlice.ts";
import {useState} from "react";

const UserForm = () => {
    const nav = useNavigate();
    const dispatch = useAppDispatch();
    const [input, setInput] = useState<NewUser>({
        nickName: "",
        password: "",
        name: "",
        gender: GENDER.MALE,
        hobby: ""
    });

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
        await dispatch(saveNewUser(input));
        nav("/users", {
            replace: true,
            state: {message: "Create Success"}
        });
    }

    return (
        <div>
            <h3>User Create Form</h3>
            <div>
                <form method="POST">
                    <div>
                        nickName:
                        <input type="text" name="nickName" value={input.nickName}
                               autoComplete={"username"}
                               onChange={onChangeInput}/>
                    </div>
                    <div>
                        password:
                        <input type="password" name="password" value={input.password}
                               autoComplete={"current-password"}
                               onChange={onChangeInput}/>
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
                        <button onClick={onClickSubmitButton}>submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserForm;