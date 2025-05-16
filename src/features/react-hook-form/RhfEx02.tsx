import TitleHeader from "../../components/TitleHeader.tsx";
import {SubmitHandler, useForm} from "react-hook-form";

/**
 * 필드 등록
 * 1. form 인터페이스 정의
 * 2. useForm 훅을 호출하여 register, handleSubmit 을 가져옴
 * 3. handleSubmit 에 전달할 서브밋 콜백 함수 정의 (onSubmit)
 *    -> 매개변수 타입을 SubmitHandler<IFormInput> 또는 직접 data: IFormInput 으로 정의
 * 4. form - onSubmit 이벤트에 handleSubmit(onSubmit) 설정한다.
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