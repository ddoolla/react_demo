import TitleHeader from "../../components/TitleHeader.tsx";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {TextField} from "@mui/material";

/**
 * 외부 UI 라이브러리 통합 예제
 * input 을 예로 들면, MUI 같은 경우 TextField 컴포넌트 내부에 Input 이 사용되어
 * input 에 직접 ref 를 전달할 수 없다.
 * 이런 경우 Controller 컴포넌트를 사용해야 한다.
 */

interface IFormInput {
    firstName: string;
    lastName: string;
    iceCreamType: {label: string, value: string};
}

const RhfEx05 = () => {
    const {control, handleSubmit} = useForm<IFormInput>({
        defaultValues: {
            firstName: "",
            lastName: "",
            iceCreamType: {},
        }
    });

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    }

    return (
        <div>
            <TitleHeader title={'react-hook-form ex05'} />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* MUI */}
                    <Controller
                        name="firstName"
                        control={control}
                        render={({field}) => <TextField {...field} />}
                    />
                    {/* ... */}
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default RhfEx05;