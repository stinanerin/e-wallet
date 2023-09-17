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
