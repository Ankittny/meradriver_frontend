import axiosInstance from "@/utils/axios";
const axios = axiosInstance;
export const hireDriver = (values) => async (dispatch) => {
  try {
    dispatch({ type: "HireDriverRequest" });

    const { data } = await axios.post("/driver-hiring-leads", values);

    dispatch({
      type: "HireDriverSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "HireDriverFailure",
      payload: error.response?.data?.message || "Something went wrong",
    });
  }
};
