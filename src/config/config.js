export const months = [
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

export const cardVendors = ["Amex", "Visa", "MasterCard"];

export const gradientMappings = {
    "gradient-1": "from-danger-500 to-violet-500",
    "gradient-2": "from-blue-500 to-green-500",
    "gradient-default": "from-grey-400 to-grey-600",
};

const gradientOpt = Object.keys(gradientMappings);
console.log("gradientMappings", gradientMappings);
console.log("gradientOpt", gradientOpt);

export const inputs = [
    {
        id: crypto.randomUUID(),
        name: "card_number",
        type: "text",
        placeholder: "XXXX XXXX XXXX XXXX",
        errorMessage: "Card number must be 16 digits.",
        label: "Card number",
        maxLength: 16,
        pattern: "[0-9]{16}",
        required: true,
    },
    {
        id: crypto.randomUUID(),
        name: "cvc",
        type: "text",
        placeholder: "XXX",
        errorMessage: "CVC must be 3 digits.",
        pattern: "[0-9]{3}",
        maxLength: 3,
        label: "cvc",
        required: true,
    },
    {
        id: crypto.randomUUID(),
        name: "date",
        type: "date",
        errorMessage: "Date can't have passed.",
        placeholder: "date",
        required: true,
        label: "Date",
    },
    {
        id: crypto.randomUUID(),
        name: "gradient",
        type: "radio",
        errorMessage: "Please select a gradient",
        label: "Select Gradient",
        options: gradientOpt,
        required: true,
    },
];
