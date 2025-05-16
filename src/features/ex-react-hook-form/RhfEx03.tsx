import TitleHeader from "../../components/TitleHeader.tsx";
import {SubmitHandler, useForm} from "react-hook-form";

/**
 * 검증 적용 방법 예제
 *
 * 검증 rule 리스트
 * required
 * min
 * max
 * minLength
 * maxLength
 * pattern
 * validate
 *
 * 나머지 https://react-hook-form.com/docs/useform/register 참조
 */

interface IFormInput {
    firstName: string;
    lastName: string;
    age: number;
}

const RhfEx03 = () => {
    const {register, handleSubmit} = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    return (
        <div>
            <TitleHeader title={'react-hook-form ex03'}/>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>first name</label>
                        <input type="text" {...register("firstName", {required: true, maxLength: 20})} />
                    </div>
                    <div>
                        <label>last name</label>
                        <input type="text" {...register("lastName", {pattern: /^[A-Za-z]+$/i})} />
                    </div>
                    <div>
                        <label>age</label>
                        <input type="number" {...register("age", {min: 18, max: 99})} />
                    </div>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default RhfEx03;