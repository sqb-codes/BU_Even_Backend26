import axios from "axios"
// Auth API URL
const API_URL = "http://localhost:9090/api/auth/"

export const registerUser = async (user) => {
    try {
        const response = await axios.post(API_URL + "register", user);
        console.log(response.data);
    } catch (error) {
        console.error("Error while doing register...");
    }
}

