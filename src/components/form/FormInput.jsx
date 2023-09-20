import { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";

export const FormInput = (props) => {
    const [blur, setBlur] = useState(false);

    const { disabled, label, errorMessage, onChange, ...inputProps } = props;

    const handleBlur = () => {
        setBlur(true);
    };

    // todo input dropdown focus state

    const showError = () => {
        if (inputProps.pattern) {
            const pattern = new RegExp(inputProps.pattern);
            if (blur && !pattern.test(inputProps.value)) {
                return true;
            }
        }
        return false;
    };

    return (
        <div className="formInput">
            <label className="block uppercase text-text-default text-xs font-bold mb-2 ">
                {label}
            </label>
            <input
                className="uppercase rounded-md bg-elem_bg py-1 px-2 w-full text-text-default text-sm shadow-md disabled:text-text-low-contrast"
                {...inputProps}
                maxLength={inputProps.maxLength}
                // onChange={onChange}
                onBlur={handleBlur}
                onChange={onChange}
                disabled={disabled}
                // onFocus={() =>
                //     inputProps.name === "confirmPassword" && setFocused(true)
                // }
                // focused={focused.toString()}
            />
            {showError() && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </div>
    );
};
