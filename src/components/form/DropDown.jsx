export const DropDown = ({ optionsObj, isReq, onChange }) => {
    const { filter, arr } = optionsObj;

    return (
        <>
            <label
                className="block uppercase text-text text-xs font-bold mb-2"
                htmlFor={`filterBy${filter}`}
            >
                Choose {filter}:
            </label>
            <select
                name={filter}
                id={`filterBy${filter}`}
                className="rounded-md bg-elem_bg py-1 px-2 w-full text-text text-sm shadow-md"
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
