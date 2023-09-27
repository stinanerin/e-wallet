import { DropDown } from "./DropDown";
import { FormInput } from "./FormInput";
import { GradientPicker } from "./GradientPicker";

import { Button } from "../Button";

import { cardVendors, inputs } from "../../config/config";
import { hasDatePassed, blockInvalidChar } from "../../utils/helpers";

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

        if (elem.name === "date") {
            const pickedDate = new Date(elem.value);
            const currentDate = new Date();

            const isDatePassed = hasDatePassed(pickedDate, currentDate);
            setIsDatePassed(isDatePassed);
        }
        if (elem.type === "text") {
            const inputConfig = inputs.find(
                (input) => input.name === elem.name
            );

            if (inputConfig && inputConfig.numericOnly) {
                const cleansedValue = blockInvalidChar(elem.value);
                setFormData({ ...formData, [elem.name]: cleansedValue });
                return;
            }
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
                        return (
                            <GradientPicker
                                key={input.name}
                                {...input}
                                formData={formData}
                                onChange={onChange}
                            />
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
