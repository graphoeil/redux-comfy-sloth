// Imports
import axios from "axios";
import { products_url as url } from "../../utils/constants";

// Thunk
export const fetchProductsThunkFn = async(_, thunkAPI) => {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error){
		console.log(error);
	}
};