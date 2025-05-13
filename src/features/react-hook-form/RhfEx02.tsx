import TitleHeader from "../../components/TitleHeader.tsx";
import {SubmitHandler, useForm} from "react-hook-form";

/**
 * 필드 등록
 * 1. form 인터페이스 정의
 * 2. useForm 훅을 호출하여 register, handleSubmit 을 가져옴
 * 3. 서브밋 함수(onSubmit)를 SubmitHandler 타입으로 정의
 * 4. form - onSubmit 에 handleSubmit(onSubmit) 설정한다.
 *    제출 시 handleSubmit 이 onSubmit 을 호출하여 form 인터페이스에 정의된
 *    input 타입들을 검증한다.
 * 5. input 필드에 register 을 등록한다
 */
enum GenderEnum {
    female = "female",
    male = "male",
    other = "other"
}

interface IFormInput {
    firstName: string;
    gender: GenderEnum;
}

const RhfEx02 = () => {
    const {register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => {console.log(data)}

    return (
        <div>
            <TitleHeader title={'react-hook-form ex02'} />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>First Name</label>
                        <input type="text" {...register("firstName")} />
                    </div>
                    <div>
                        <label>Gender Selection</label>
                        <select {...register("gender")}>
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default RhfEx02;