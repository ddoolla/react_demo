/**
 * useFormContext 예제
 *
 * 중첩 구조에서 컨텍스트를 prop 으로 전달하기 편리하다.
 * from 을 FormProvider 컴포넌트로 감싸야 한다.
 *
 */
import TitleHeader from "../../components/TitleHeader.tsx";
import {FormProvider, useForm, useFormContext} from "react-hook-form";
import {useEffect} from "react";

interface FormValues {
    name: string,
    email: string,
}

function NestedInput() {
    const {register} = useFormContext();
    return <input {...register("name")} />
}

const RhfEx10 = () => {
    const methods = useForm<FormValues>();
    const onSubmit = (data: FormValues) => console.log(data);
    const {register, reset} = methods;

    useEffect(() => {
        reset({
            name: "data"
        })
    }, [reset]); // 'methods' 를 deps 에 넣으면 안된다!

    return (
        <div>
            <TitleHeader title={'react-hook-form ex10'}/>
            <div>
                <FormProvider {...methods}>
                    {/* 컨텍스트로 methods 가 모두 전달된다. */}
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <div>
                            <NestedInput />
                        </div>
                        <div>
                            <input {...register(("email"))} />
                        </div>
                        <div>
                            <input type="submit" />
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    )
}

export default RhfEx10;
