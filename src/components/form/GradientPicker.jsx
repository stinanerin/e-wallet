import { FormLabel } from "./FormLabel";
import { FormInput } from "./FormInput";

export const GradientPicker = ({
    formData,
    onChange,
    id,
    label,
    type,
    name,
    required,
    options,
}) => {
    return (
        <div key={id}>
            <FormLabel>{label}</FormLabel>
            <div className="flex gap-10">
                {options.map((option) => {
                    console.log(option);
                    return (
                        <FormInput
                            key={option}
                            type={type}
                            value={option}
                            name={name}
                            label={option}
                            required={required}
                            checked={formData[name] === option}
                            onChange={onChange}
                        />
                    );
                })}
            </div>
        </div>
    );
};
