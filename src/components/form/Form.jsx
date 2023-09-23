import { DropDown } from "./DropDown";
import { FormInput } from "./FormInput";
import { GradientPicker } from "./GradientPicker";

import { Button } from "../Button";

import { cardVendors, inputs } from "../../config/config";
import { hasDatePassed } from "../../utils/helpers";

import { useSelector } from "react-redux";

export const Form = ({
    formData,
    setFormData,
    handleSubmit,
    isDatePassed,
    setIsDatePassed,
}) => {
    const {
        user: { first, last },
    } = useSelector((state) => state.cards);

    const onChange = (e) => {
        const elem = e.target;
        console.log("change", elem.name);

        if (elem.name === "date") {
            const pickedDate = new Date(elem.value);
            const currentDate = new Date();
            const isDatePassed = hasDatePassed(pickedDate, currentDate);
            console.log("isDatePassed", isDatePassed);
            setIsDatePassed(isDatePassed);
        }

        setFormData({ ...formData, [elem.name]: elem.value });
    };

    return (
        <div className="w-full py-8 bg-primary-500 shadow-2xl rounded-xl max-w-md bg-gradient-to-t from-transparent-2 to-transparent-0">
            <h2 className="font-bold text-center mt-4 uppercase ">
                Add new card
            </h2>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 px-8 pt-6  "
            >
                <FormInput
                    label="card holder name"
                    key={crypto.randomUUID()}
                    disabled
                    value={first + " " + last}
                />
                {inputs.map((input) => {
                    if (input.name === "date") {
                        return (
                            <FormInput
                                key={input.id}
                                {...input}
                                value={formData[input.name]}
                                onChange={onChange}
                                valid={!isDatePassed}
                            />
                        );
                    }
                    if (input.name === "gradient") {
                        console.log("hje", input);
                        return (
                            <div key={input.id}>
                                <p>{input.label}</p>

                                <div className="flex gap-10">
                                    {input.options.map((option) => {
                                        console.log(option);
                                        return (
                                            <FormInput
                                                key={option}
                                                type={input.type}
                                                value={option}
                                                name={input.name}
                                                label={option}
                                                required={input.required}
                                                checked={
                                                    formData[input.name] ===
                                                    option
                                                }
                                                onChange={onChange}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    }
                    return (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={formData[input.name]}
                            onChange={onChange}
                        />
                    );
                })}
                {
                    // <GradientPicker />
                }{" "}
                <DropDown
                    optionsObj={{ filter: "vendor", arr: cardVendors }}
                    isReq={true}
                    onChange={onChange}
                />
                <div className="self-center">
                    <Button type="primary">Add card</Button>
                </div>
            </form>
        </div>
    );
};
