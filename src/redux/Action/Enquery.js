import axiosInstance from "@/utils/axios";
const axios = axiosInstance;


export const enquery = (values) => async (dispatch) => {
try {
    dispatch({type:"EnqueryRequest"});
    
    const {data} = await axios.post("/driver-enquiry",values)

    dispatch({ type: "EnquerySuccess", payload: data });
} catch (error) {
    dispatch({
      type: "EnqueryFail",
      payload: error.response?.data?.message || "Something went wrong",
    });
}
}
