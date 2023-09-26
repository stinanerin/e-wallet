import { Link } from "react-router-dom";

export const FancyLink = ({ children, route, textSize }) => {
    const textSizeClasses = {
        xs: "text-xs",
        sm: "",
        md: "text-md",
        lg: "text-sm sm:text-lg",
        xl: "text-xl",
        xxl: "text-2xl sm:text-3xl",
    };

    const textSizeClass = textSizeClasses[textSize] || textSizeClasses["xxl"];

    return (
        <div className="relative  ">
            <Link
                to={route}
                className={`font-display max-w-sm  font-bold leading-tight ${textSizeClass}`}
            >
                <span className="link link-underline link-underline-color uppercase">
                    {" "}
                    {children}
                </span>
            </Link>
        </div>
    );
};
