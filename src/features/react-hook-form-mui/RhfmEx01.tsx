import {FormContainer, FormErrorProvider, PasswordElement, TextFieldElement} from "react-hook-form-mui";
import {Box, Button} from "@mui/material";
import TitleHeader from "../../components/TitleHeader.tsx";

const RhfmEx01 = () => {

    return (
        <div>
            <TitleHeader title={"react-hook-form-mui ex01"}/>
            <div>
                <FormContainer
                    defaultValues={{name: ''}}
                    onSuccess={data => console.log(data)}
                >
                    <TextFieldElement name="name" label="Name" required/>
                    <FormErrorProvider onError={error => {
                        console.log('you can hook your own error message', error);
                        if (error.type === 'required') {
                            return 'custom required';
                        }
                        if (error?.type === 'pattern') return '올바른 이메일 형식을 입력해주세요.';
                        return error?.message;
                    }}>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                            <TextFieldElement
                                name={'name'}
                                label={'Name'}
                                required
                                variant={'outlined'}
                                margin={'dense'}
                                placeholder={'이름을 입력해주세요.'}
                                onChange={() => console.log('onChange')}
                            />
                            <TextFieldElement name={'email'} type="email" label={'Email'} required variant={'outlined'} margin={'dense'} />
                            <PasswordElement margin={'dense'} label={'Password'} required name={'password'} />

                        </Box>
                    </FormErrorProvider>
                    <Button type={'submit'} color={'primary'}>
                        Submit
                    </Button>
                </FormContainer>
            </div>
        </div>
    )
}

export default RhfmEx01;