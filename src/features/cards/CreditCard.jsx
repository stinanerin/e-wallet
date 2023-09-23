import chipSvg from "../../assets/icons/chip2.svg";
import signalSvg from "../../assets/icons/signal.svg";

import {
    determineVendorSVG,
    splitArrIntoChunks,
    generateDisplayFormat,
    formatDate,
    getGradientClass,
} from "../../utils/helpers";

export const CreditCard = ({
    date,
    card_number,
    vendor,
    user: { first, last },
    useDisplayFormat = false,
    gradient,
}) => {
    const formattedNumber = useDisplayFormat
        ? generateDisplayFormat(card_number, 16)
        : card_number?.split("");

    const formattedDate = date ? formatDate(date) : "XX / XX";
    const gradientClass = getGradientClass(gradient);

    return (
        <div
            className={`w-full  max-w-96 h-56 font-credit px-4 py-6 rounded-xl shadow-2xl max-w-md bg-gradient-25 ${gradientClass}  ${
                !useDisplayFormat
                    ? "transition-transform transform sm:hover:scale-105 "
                    : ""
            } `}
        >
            <div className="h-[65px]">
                <div className="flex justify-between svg-icon">
                    <img src={signalSvg} alt="#" className="w-7 " />
                    {vendor && (
                        <img
                            src={determineVendorSVG(vendor)}
                            alt="#"
                            className="h-7 "
                        />
                    )}
                </div>
                <img src={chipSvg} alt="#" className="w-7 mb-3 mt-1" />
            </div>

            <p className="text-2xl text-text-contrast flex gap-3">
                {splitArrIntoChunks(formattedNumber, 4).map((chunk, i) => {
                    return <span key={chunk + i}>{chunk}</span>;
                })}
            </p>
            <div className="flex justify-between mt-6">
                <div>
                    <p className="uppercase text-xs text-text-contrast font-bold ">
                        Card holder name
                    </p>
                    <p className="uppercase text-sm text-text-contrast ">
                        {first + " " + last}
                    </p>
                </div>
                <div>
                    <p className="uppercase text-xs text-text-contrast font-bold ">
                        valid thru
                    </p>
                    <p className="uppercase text-sm text-text-contrast text-end">
                        {formattedDate}
                    </p>
                </div>
            </div>
        </div>
    );
};
