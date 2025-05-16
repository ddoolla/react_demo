import {useController, UseControllerProps, useForm} from "react-hook-form";
import TitleHeader from "../../components/TitleHeader.tsx";

/**
 * useController 훅 사용 예제
 */
type FormValues = {
    FirstName: string;
}

const Input = (props: UseControllerProps<FormValues>) => {
    const {field, fieldState} = useController(props);

    return (
        <div>
            <input {...field} placeholder={props.name} />
            <p>{fieldState.isTouched && "Touched"}</p>
            <p>{fieldState.isDirty && "Dirty"}</p>
            <p>{fieldState.invalid ? "invalid" : "valid"}</p>
        </div>
    )
}

const RhfEx07 = () => {
    const {handleSubmit, control} = useForm<FormValues>({
        defaultValues: {
            FirstName: "",
        },
        mode: "onChange",
    });

    const onSubmit = (data: FormValues) => console.log(data);

    return (
        <div>
            <TitleHeader title={'react-hook-form ex07'} />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input control={control} name="FirstName" rules={{required: true}} />
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default RhfEx07;