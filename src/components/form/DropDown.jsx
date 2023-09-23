import { FormLabel } from "./FormLabel";

export const DropDown = ({ optionsObj, isReq, onChange }) => {
    const { filter, arr } = optionsObj;

    return (
        <>
            <FormLabel htmlFor={`filterBy${filter}`}>
                Choose {filter}:
            </FormLabel>

            <select
                name={filter}
                id={`filterBy${filter}`}
                className="border-0 rounded-md bg-elem_bg py-1 px-2 w-full text-text text-sm shadow-md  focus:outline-none focus:ring focus:ring-primary-600"
                onChange={onChange}
                required={isReq}
            >
                <option key={"all"} value="">
                    All
                </option>
                {arr.map((opt, index) => {
                    return <option key={opt + index}>{opt}</option>;
                })}
            </select>
        </>
    );
};
