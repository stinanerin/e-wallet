export const DropDown = ({ optionsObj, isReq, setSelectedValue }) => {
    const { filter, arr } = optionsObj;
    const handleFilter = (e) => {
        let selectedOption = e.target.value;
        if (selectedOption === "All") selectedOption = "";
        setSelectedValue(selectedOption);
    };

    return (
        <>
            <label
                className="block uppercase text-text text-xs font-bold mb-2"
                htmlFor={`filterBy${filter}`}
            >
                {filter}:
            </label>
            <select
                id={`filterBy${filter}`}
                className="rounded-md bg-elem_bg py-1 px-2 w-full text-text text-sm shadow-md"
                onChange={handleFilter}
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
