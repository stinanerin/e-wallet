import amex from "./../assets/logos/amex.svg";
import mastercard from "./../assets/logos/mastercard.png";
import visa from "./../assets/logos/visa.svg";

import { months, gradientMappings } from "../config/config";

export const getGradientClass = (selectedGradient) => {
    switch (selectedGradient) {
        case "gradient-1":
            return gradientMappings["gradient-1"];
        case "gradient-2":
            return gradientMappings["gradient-2"];
        // Add more cases for other gradient options
        default:
            return gradientMappings["gradient-default"];
    }
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
    const date = new Date(inputDate);
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${month} / ${year}`;
};

export const hasDatePassed = (d1, d2) => {
    // Create a new date of the existing dates to cancel out the time
    return new Date(d1.toDateString()) < new Date(d2.toDateString());
};
