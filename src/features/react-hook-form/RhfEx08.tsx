import TitleHeader from "../../components/TitleHeader.tsx";
import {SubmitHandler, useForm} from "react-hook-form";

/**
 * 에러 처리 예제
 */
interface formValues {
    name: string;
    mail: string;
}

const RhfEx08 = () => {
    const {register, formState: {errors}, handleSubmit} = useForm<formValues>();
    const onSubmit: SubmitHandler<formValues> = (data) => console.log(data);

    return (
        <div>
            <TitleHeader title={'react-hook-form ex08'}/>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input
                            {...register("name", {required: true, minLength: 2})}
                            aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name?.type === "required" && (
                            <p>이름을 입력해 주세요.</p>
                        )}
                        {errors.name?.type === "minLength" && (
                            <p>두 글자 이상 입력해 주세요.</p>
                        )}
                    </div>
                    <div>
                        <input
                            {...register("mail", {
                                required: "이메일 주소를 입력해 주세요.",
                                pattern: {
                                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    message: "유효한 이메일 형식이 아닙니다."
                                }
                            })}
                            aria-invalid={errors.mail ? "true" : "false"}
                        />
                        {errors.mail && <p>{errors.mail.message}</p>}
                    </div>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default RhfEx08;