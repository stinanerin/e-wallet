import chipSvg from "../../assets/icons/chip2.svg";
import signalSvg from "../../assets/icons/signal.svg";

import { determineVendorSVG, splitArrIntoChunks } from "../../utils/helpers";

export const CreditCard = ({
    date: { month, year },
    number,
    vendor,
    user: { first, last },
}) => {
    return (
        <div className=" px-4 py-6 bg-gray-400 rounded shadow-lg mb-5 max-w-md ">
            <div className="flex justify-between svg-icon">
                <img src={signalSvg} alt="#" className="w-7 " />

                <img
                    src={determineVendorSVG(vendor)}
                    alt="#"
                    className="w-10 "
                />
            </div>

            <img src={chipSvg} alt="#" className="w-7 mb-3 mt-1" />

            <p className="text-2xl text-text-contrast flex gap-3">
                {splitArrIntoChunks(number, 4).map((chunk, i) => {
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
                        {month}/{year}
                    </p>
                </div>
            </div>
        </div>
    );
};
