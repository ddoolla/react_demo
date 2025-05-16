import TitleHeader from "../../components/TitleHeader.tsx";
import {Controller, SubmitHandler, useForm, useWatch} from "react-hook-form";
import {Checkbox, TextField} from "@mui/material";

/**
 * 외부 라이브러리 사용 시 Controller 컴포넌트 사용 예제
 * (물론 가능한 경우 Controller 안쓰고 요소에 직접 참조를 전달할 수도 있다. 근데 대부분 Controller 써야 한다고 함)
 */

interface IFormInput {
    name: string;
    email: string;
    MyCheckbox: boolean;
}

const RhfEx06 = () => {
    const {
        handleSubmit,
        control,
        reset,
        watch,
        formState: {errors},
    } = useForm<IFormInput>({
        // mode: "onChange", // 입력하면서 바로 검증
        // reValidateMode: "onBlur", // 변경된 항목에 대해 blur 시 재검증
        defaultValues: {
            name: '',
            email: '',
            MyCheckbox: false,
        }
    });

    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    const showExtra = watch('MyCheckbox');
    const showExtra2 = useWatch({control, name: 'MyCheckbox'}) // 성능상 조금 더 좋다고 ?..

    return (
        <div>
            <TitleHeader title={'react-hook-form ex06'} />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Controller
                            name={"name"}
                            control={control}
                            rules={{ required: "이름을 입력해 주세요." }}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    label="name"
                                    error={!!errors.name}
                                    helperText={errors.name?.message}
                                />
                            )}
                        />
                    </div>
                    <div>
                        <Controller
                            name={"email"}
                            control={control}
                            rules={{
                                required: "이메일은 필수입니다.",
                                pattern: {
                                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: "유효한 이메일 형식이 아닙니다."
                                },
                            }}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    label="email"
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                            )}
                        />
                    </div>
                    <div>
                        <Controller
                            name={"MyCheckbox"}
                            control={control}
                            rules={{ required: true }}
                            render={({field}) => (
                                <Checkbox
                                    {...field}
                                    checked={field.value}
                                />
                            )}
                        />
                        {showExtra && <p>Watch: hello!</p>}
                        {showExtra2 && <p>useWatch: hello!</p>}
                    </div>
                    <input type="submit"/>
                    <button
                        type="button"
                        onClick={() => reset({name: '', email: '', MyCheckbox: false,})}>Reset</button>
                </form>
            </div>
        </div>
    )
}

export default RhfEx06;