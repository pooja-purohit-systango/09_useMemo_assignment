import axios from "axios";

export const getData = async() => {
    try {
        const response = await axios.get ('https://67eb8197aa794fb3222a7963.mockapi.io/users/users');

        console.log('response from getData axios', response)
        return response.data;
    }
    catch(error) 
    {
        console.log("error occurred.....")
        throw new error;
    }
}