import axiosInstance from "@/utils/axios";
const axios = axiosInstance;

export const driverDetail = (id) => async (dispatch) => {
  try {
    console.log(id);
    dispatch({ type: "driverDetailRequest" });
    const { data } = await axios.get(`/driver-details/${id}`);
    console.log("API Response Data Driver Detail:", data); // Check API response structure
    dispatch({ type: "driverDetailSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "driverDetailFail",
      payload: error.response?.data?.message || "Something went wrong",
    });
  }
};
