export const ErrorMessage = ({ children }) => {
    return (
        <p className="uppercase text-danger-600 text-xs font-bold mt-2 ">
            {children}
        </p>
    );
};
