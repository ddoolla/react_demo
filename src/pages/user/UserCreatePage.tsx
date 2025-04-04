import UserForm from "../../features/user/ui/UserForm.tsx";
import {useNavigate} from "react-router-dom";

const UserCreatePage = () => {
    const nav = useNavigate();

    return (
        <div>
            <h2>New User</h2>
            <div>
                <button onClick={() => nav("/user/list")}>
                    List
                </button>
            </div>
            <UserForm/>
        </div>
    )
}

export default UserCreatePage;
