import axiosInstance from "@/utils/axios";
const axios = axiosInstance;

export const verifyDriver = () => async (dispatch) => {
  try {
    dispatch({ type: "verifyDriverRequest" });
    const { data } = await axios.get("/verfied-user-list");

    console.log("API Response Data:", data); // Check API response structure
    dispatch({ type: "verifyDriverSuccess", payload: data }); // Pass full response to reducer
  } catch (error) {
    dispatch({
      type: "verifyDriverFail",
      payload: error.response?.data?.message || "Something went wrong",
    });
  }
};
