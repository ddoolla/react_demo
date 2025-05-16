import TitleHeader from "../../components/TitleHeader.tsx";
import {useForm} from "react-hook-form";

interface FormInputs {
    firstName: string;
    lastName: string;
}

const RhfEx11 = () => {
    const {
        register,
        trigger,
        formState: { errors },
    } = useForm<FormInputs>();

    return (
        <div>
            <TitleHeader title={'react-hook-form ex10'}/>
            <div>
                <form>
                    <div>
                        <input{...register("firstName", {required: true})}/>
                        {errors.firstName && <p>This field is Required</p>}
                    </div>
                    <div>
                        <input {...register("lastName", {required: true})} />
                        {errors.lastName && <p>This field is Required</p>}
                    </div>
                    <div style={{display: "flex", gap: 10}}>
                        <button
                            type="button"
                            onClick={() => {
                                trigger("lastName")
                            }}
                        >
                            Trigger
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                trigger(["firstName", "lastName"])
                            }}
                        >
                            Trigger Multiple
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                trigger()
                            }}
                        >
                            Trigger All
                        </button>
                        <button
                            type="button"
                            onClick={async () => {
                                console.log("firstName", await trigger("firstName"));
                            }}
                        >
                            Trigger Async First Name Validation
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default RhfEx11