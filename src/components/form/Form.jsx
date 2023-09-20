import { DropDown } from "./DropDown";
import { FormInput } from "./FormInput";
import { Button } from "../Button";

import { cardVendors, inputs } from "../../config/config";
import { blockInvalidChar } from "../../utils/helpers/";

import { useSelector } from "react-redux";

export const Form = ({ formData, setFormData, handleSubmit }) => {
    // const {
    //     user: { first, last },
    // } = useSelector((state) => state.cards);

    const onChange = (e) => {
        const elem = e.target;
        // console.log("change", elem.name);

        setFormData({ ...formData, [elem.name]: elem.value });
    };

    return (
        <div className="bg-primary-500 shadow-2xl rounded max-w-lg ">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col  gap-4 bg-gradient-to-t from-transparent-2 to-transparent-0  px-8 pt-6 pb-8 my-4 "
            >
                {inputs.map((input) => {
                    return (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={formData[input.name]}
                            onChange={onChange}
                        />
                    );
                })}
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
