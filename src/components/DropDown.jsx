export const DropDown = ({ optionsObj, setSelectedValue }) => {
    const { filter, arr } = optionsObj;

    const handleFilter = (e) => {
        let selectedOption = e.target.value;
        if (selectedOption === "All") selectedOption = "";
        setSelectedValue(selectedOption);
    };

    return (
        <div className="flex flex-col">
            <label
                className="uppercase text-text text-sm font-bold mb-2"
                htmlFor={`filterBy${filter}`}
            >
                {filter}:
            </label>
            <select
                id={`filterBy${filter}`}
                className="rounded-md bg-elem_bg py-1 px-2 sm:w-3/4"
                onChange={handleFilter}
            >
                <option key={"all"}>All</option>
                {arr.map((opt, index) => {
                    return <option key={opt + index}>{opt}</option>;
                })}
            </select>
        </div>
    );
};
