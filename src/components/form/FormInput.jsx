import { useEffect } from "react";
import { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { FormLabel } from "./FormLabel";

import { getGradientClass } from "../../utils/helpers";

export const FormInput = (props) => {
    const [blur, setBlur] = useState(false);
    const [showError, setShowError] = useState(false);

    const {
        type,
        valid,
        disabled,
        label,
        errorMessage,
        onChange,
        ...inputProps
    } = props;

    // console.log("valid", valid);
    console.log("type", type);

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
            <FormLabel htmlFor={inputProps.id} type={type}>
                {label}
            </FormLabel>
            <input
                className={`${
                    blur
                        ? " invalid:border-danger-600 invalid:text-danger-600 focus:invalid:border-danger-600 focus:invalid:ring-danger-600 "
                        : ""
                }  ${
                    type === "radio"
                        ? " text-primary-600 bg-gradient-25 " +
                          getGradientClass(label)
                        : " rounded-md w-full text-text-default "
                }
      uppercase border-0  bg-elem_bg py-1 px-2   text-sm shadow-md  disabled:opacity-50 focus:outline-none focus:ring focus:ring-primary-600 `}
                {...inputProps}
                type={type}
                maxLength={inputProps.maxLength}
                onBlur={handleBlur}
                onChange={onChange}
                disabled={disabled}
            />
            {showError && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </div>
    );
};
