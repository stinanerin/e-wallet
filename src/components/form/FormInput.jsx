import { useEffect } from "react";
import { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";

export const FormInput = (props) => {
    const [blur, setBlur] = useState(false);
    const [showError, setShowError] = useState(false);

    const { valid, disabled, label, errorMessage, onChange, ...inputProps } =
        props;

    console.log("valid", valid);

    const handleBlur = () => {
        setBlur(true);
    };

    useEffect(() => {
        setShowError(false);

        if (inputProps.pattern) {
            const pattern = new RegExp(inputProps.pattern);
            if (blur && !pattern.test(inputProps.value)) {
                setShowError(true);
            }
        }
        if (blur && valid === false) {
            // if date has passed, input not valid,  display error
            setShowError(true);
        }
    });

    return (
        <div className="formInput">
            <label className="block uppercase text-text-default text-xs font-bold mb-2 ">
                {label}
            </label>
            <input
                className={`${
                    blur
                        ? "invalid:border-danger-600 invalid:text-danger-600 focus:invalid:border-danger-600 focus:invalid:ring-danger-600"
                        : ""
                } 
      uppercase rounded-md bg-elem_bg py-1 px-2 w-full text-text-default text-sm shadow-md disabled:text-text-low-contrast disabled:opacity-50 focus:outline-none focus:ring focus:ring-primary-600`}
                {...inputProps}
                maxLength={inputProps.maxLength}
                onBlur={handleBlur}
                onChange={onChange}
                disabled={disabled}
            />
            {showError && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </div>
    );
};
