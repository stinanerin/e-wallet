import amex from "./../assets/logos/amex.svg";
import mastercard from "./../assets/logos/mastercard.png";
import visa from "./../assets/logos/visa.svg";

import { months, gradientMappings } from "../config/config";

export const getGradientClass = (selectedGradient) => {
    if (!selectedGradient) return gradientMappings["gradient-default"];

    return gradientMappings[selectedGradient];
};

export const blockInvalidChar = (string) => {
    const cleansedValue = string.replace(/\D/g, "");
    return cleansedValue;
};

export const splitArrIntoChunks = (arr, chunkSize) => {
    // console.log(arr);
    if (!arr) return [];
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

export const generateDisplayFormat = (inputArray, maxLength, chunkNum) => {
    // console.log(inputArray);
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
    const date = new Date(inputDate);
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${month} / ${year}`;
};

export const hasDatePassed = (d1, d2) => {
    // Create a new date of the existing dates to cancel out the time
    return new Date(d1.toDateString()) < new Date(d2.toDateString());
};

export const userPrefersDarkMode = () => {
    if (window.matchMedia) {
        console.log("hej");
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            console.log("user prefers dark mdoe");
            return true;
        }
    }
    return false;
};
