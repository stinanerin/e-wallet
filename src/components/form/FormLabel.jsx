export const FormLabel = ({ htmlFor, type, children }) => {
    return (
        <label
            htmlFor={htmlFor}
            className={` ${
                type === "radio"
                    ? "sr-only "
                    : "block uppercase text-text-default text-xs font-bold mb-2"
            } `}
        >
            {children}
        </label>
    );
};
