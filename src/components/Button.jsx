export const Button = ({ onClick, type, children, disabled, aria }) => {
    let buttonClasses = "uppercase font-bold text-sm  rounded w-max ";

    switch (type) {
        case "primary":
            buttonClasses +=
                " py-2 px-4 text-white bg-gradient-to-r from-primary-400 to-primary-600 hover:from-primary-600 hover:to-primary-900 active:from-primary-600 active:to-primary-800 focus:from-primary-600 focus:to-primary-800 focus:outline-none focus:ring focus:ring-primary-200";
            break;
        case "secondary":
            buttonClasses +=
                "py-2 px-4 border-2 border-primary-800 text-primary-800 hover:bg-primary-100 active:bg-primary-100 focus:bg-primary-10 focus:outline-none focus:ring focus:ring-primary-400";
            break;
        case "tertiary":
            buttonClasses += "rounded-full  text-text-default hover:scale-125 ";
            break;
        case "danger-primary":
            buttonClasses +=
                " py-2 px-4 border-2 border-danger-500 text-danger-500 hover:bg-danger-100 active:bg-danger-100 focus:bg-danger-100 focus:outline-none focus:ring focus:ring-danger-300";
            break;

        default:
            break;
    }

    if (disabled) {
        buttonClasses += " opacity-50 cursor-not-allowed ";
    }

    return (
        <button
            onClick={onClick}
            className={buttonClasses}
            disabled={disabled}
            aria-label={aria}
        >
            {children}
        </button>
    );
};
