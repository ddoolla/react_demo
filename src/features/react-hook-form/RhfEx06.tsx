import TitleHeader from "../../components/TitleHeader.tsx";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {Checkbox} from "@mui/material";

/**
 * 외부 라이브러리 사용 시 Controller 컴포넌트 사용 예제
 * (물론 가능한 경우 Controller 안쓰고 요소에 직접 참조를 전달할 수도 있다. 근데 대부분 Controller 써야 한다고 함)
 */

interface IFormInput {
    TextField: string;
    MyCheckbox: boolean;
}

const RhfEx06 = () => {
    const {handleSubmit, control, reset} = useForm<IFormInput>({
        defaultValues: {
            MyCheckbox: false,
        }
    });

    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    return (
        <div>
            <TitleHeader title={'react-hook-form ex06'} />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name={"MyCheckbox"}
                        control={control}
                        rules={{ required: true }}
                        render={({field}) => <Checkbox {...field} checked={field.value}/>}
                    />
                    <input type="submit"/>
                    <button
                        type="button"
                        onClick={() =>
                        reset({
                            MyCheckbox: false,
                        })}
                    >Reset</button>
                </form>
            </div>
        </div>
    )
}

export default RhfEx06;