import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://mos-media-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;