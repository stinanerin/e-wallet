import amex from "./../assets/logos/amex.svg";
import mastercard from "./../assets/logos/mastercard.svg";
import visa from "./../assets/logos/visa.svg";

export const splitArrIntoChunks = (arr, chunkSize) => {
    const resultArray = arr.reduce((acc, curr, i) => {
        const index = Math.floor(i / chunkSize);
        if (!acc[index]) {
            acc[index] = [];
        }
        acc[index].push(curr);
        return acc;
    }, []);

    return resultArray;
};

export const blockInvalidChar = (string) => {
    const cleansedValue = string.replace(/\D/g, "");
    return cleansedValue;
};

export const generateDisplayFormat = (inputArray, maxLength, chunkNum) => {
    console.log(inputArray);
    const arr = inputArray ? [...inputArray] : [];
    while (arr.length < maxLength) {
        arr.push("X");
    }
    if (chunkNum) return splitArrIntoChunks(arr, 4);
    return arr;
};

export const determineVendorSVG = (vendor) => {
    switch (vendor) {
        case "Amex":
            return amex;
        case "Visa":
            return visa;

        case "MasterCard":
            return mastercard;
        default:
            return null;
    }
};

export const formatDate = (inputDate) => {
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const date = new Date(inputDate);
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${month} / ${year}`;
};
