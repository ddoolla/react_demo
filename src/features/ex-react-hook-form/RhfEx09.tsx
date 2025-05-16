import TitleHeader from "../../components/TitleHeader.tsx";
import {Control, useFieldArray, useForm, useWatch} from "react-hook-form";

/**
 * useFieldArray 예제
 */
type FormValues = {
    cart: {
        name: string;
        price: number;
        quantity: number;
    }[];
}
/**
 * form 내부가 아닌 별도의 컴포넌트에서 useWatch 를 통해 자동으로 리렌더링 된다.
 * 여기서는 cart 배열이 변경될 때마다 Total 컴포넌트가 리렌더링 된다.
 * (control 객체를 통해 상태를 추적)
 */
const Total = ({ control }: { control: Control<FormValues> }) => {
    const formValues = useWatch({
        name: "cart",
        control
    });
    const total = formValues.reduce(
        (acc, current) => acc + (current.price || 0) * (current.quantity || 0),
        0
    );
    return <p>Total Amount: {total}</p>;
};

const RhfEx09 = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormValues>({
        defaultValues: {
            cart: [{name: 'test', quantity: 1, price: 23}]
        },
        mode: 'onBlur'
    });

    // cart 배열 생성
    const {fields, append, remove} = useFieldArray({
        name: 'cart',
        control,
    });

    const onSubmit = (data: FormValues) => console.log(data);

    return (
        <div>
            <TitleHeader title={'react-hook-form ex09'}/>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {fields.map((field, index) => {
                        return (
                            <div key={field.id}>
                                <section className={"section"} key={field.id}>
                                    <input
                                        placeholder="name"
                                        {...register(`cart.${index}.name` as const, {
                                            required: true,
                                        })}
                                        className={errors?.cart?.[index]?.name ? 'error' : ''}
                                    />
                                    <input
                                        placeholder="quantity"
                                        type="number"
                                        {...register(`cart.${index}.quantity` as const, {
                                            valueAsNumber: true,
                                            required: true
                                        })}
                                        className={errors?.cart?.[index]?.quantity ? "error" : ""}
                                    />
                                    <input
                                        placeholder="value"
                                        type="number"
                                        {...register(`cart.${index}.price` as const, {
                                            valueAsNumber: true,
                                            required: true
                                        })}
                                        className={errors?.cart?.[index]?.price ? "error" : ""}
                                    />
                                    <button type="button" onClick={() => remove(index)}>
                                        DELETE
                                    </button>
                                </section>
                            </div>
                        );
                    })}
                    <Total control={control} />

                    <button
                        type="button"
                        onClick={() =>
                            append({
                                name: "",
                                quantity: 0,
                                price: 0
                            })
                        }
                    >
                        APPEND
                    </button>
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

export default RhfEx09;