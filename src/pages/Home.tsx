import {useNavigate} from "react-router-dom";
import {FormContainer, FormErrorProvider, PasswordElement, TextFieldElement} from "react-hook-form-mui";
import { Button } from "@mui/material";

const Home = () => {
    const nav = useNavigate();

    return (
        <div>
            <h2>Home</h2>
            <button onClick={() => nav("/users")}>
                User List
            </button>&nbsp;
            <button onClick={() => nav("/mui/test")}>
                MUI test
            </button>
            <FormContainer
                defaultValues={{name: ''}}
                onSuccess={data => console.log(data)}
            >
                <TextFieldElement name="name" label="Name" required/>
                <FormErrorProvider onError={error => {
                    console.log('you can hook your own error message', error);
                    if (error.type === 'required') {
                        return 'ㅇㅇㅇㅇㅇㅇ';
                    }
                    if (error?.type === 'pattern') return '올바른 이메일 형식을 입력해주세요.';
                    return error?.message;
                }}>
                        <TextFieldElement name={'name'} label={'Name'} required variant={'outlined'} margin={'dense'} />
                        <TextFieldElement name={'email'} type="email" label={'Email'} required variant={'outlined'} margin={'dense'} />
                    <PasswordElement margin={'dense'} label={'Password'} required name={'password'} />
                </FormErrorProvider>
                <Button type={'submit'} color={'primary'}>
                    Submit
                </Button>
            </FormContainer>
        </div>
    )
}

export default Home;
