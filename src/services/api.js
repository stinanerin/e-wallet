import axios from "axios";

export const api = axios.create();

export const fetchData = async (route, params) => {
    try {
        const res = await api.get(route, { params });

        if (res.status !== 200) throw new Error();
        // console.log("New api request", res.request.responseURL);

        return {
            acknowledged: true,
            data: res.data,
        };
    } catch (error) {
        //todo
        console.log(error);
        return {
            acknowledged: false,
            error,
        };
    }
};
