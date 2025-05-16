import TitleHeader from "../../components/TitleHeader.tsx";
import {SubmitHandler, useForm} from "react-hook-form";

type Inputs = {
    example: string;
    exampleRequired: string;
}

const RhfEx01 = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<Inputs>();

    // SubmitHandler 타입 지정
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    console.log(watch("example"));

    return (
        <div>
            <TitleHeader title={"react-hook-form ex01"}/>
            <div>
                {/* handleSubmit 이 onSubmit 을 호출하여 Inputs 를 검증 */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        {/* input 필드를 register 함수를 호출하여 훅에 등록 */}
                        <input defaultValue="test" {...register("example")} />
                    </div>
                    <div>
                        {/* rules 에 required 검증 규칙 포함 */}
                        <input {...register("exampleRequired", {required: true})} />
                        {/* 검증 실패 시 errors 반환 */}
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default RhfEx01;