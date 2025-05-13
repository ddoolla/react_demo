import TitleHeader from "../../components/TitleHeader.tsx";
import {Path, SubmitHandler, useForm, UseFormRegister} from "react-hook-form";
import * as React from "react";

/**
 * 기존 폼 통합 예제
 */

interface IFormValues {
    "First Name": string;
    Age: number;
}

type InputProps = {
    label: Path<IFormValues>; // 타입 안정성 때문에 Path 써줘야하는 듯
    register: UseFormRegister<IFormValues>;
    required: boolean;
}

// 기존에 존재하는 컴포넌트라 가정
const Input = ({label, register, required}: InputProps) => (
    <>
        <label>{label}</label>
        <input type="text" {...register(label, {required})} />
    </>
);

// React.forwardRef 를 사용하여 참조 전달 가능
const Select = React.forwardRef<
    HTMLSelectElement,
    {label: string} & ReturnType<UseFormRegister<IFormValues>> // 타입 인터섹션
>(({onChange, onBlur, name, label}, ref) => (
    <>
        <label>{label}</label>
        <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
            <option value="20">20</option>
            <option value="30">30</option>
        </select>
    </>
));

const RhfEx04 = () => {
    const {register, handleSubmit} = useForm<IFormValues>();
    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <div>
            <TitleHeader title={'react-hook-form ex04'}/>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Input label={"First Name"} register={register} required />
                    </div>
                    <div>
                        <Select label={"Age"} {...register("Age")} />
                    </div>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default RhfEx04;

