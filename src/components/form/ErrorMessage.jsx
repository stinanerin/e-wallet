export const ErrorMessage = ({ children }) => {
    return (
        <p className="uppercase text-danger-700 text-xs font-bold mt-2 ">
            {children}
        </p>
    );
};
