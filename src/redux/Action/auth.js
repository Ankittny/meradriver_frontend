import axiosInstance from "@/utils/axios";

export const driverRegister = (values) => async (dispatch) => {
  try {
    dispatch({ type: "driverRegisterRequest" });

    const { data } = await axiosInstance.post("/driver-register-enquiry", values);

    dispatch({ type: "driverRegisterSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "driverRegisterFail",
      payload: error.response?.data?.message || "Something went wrong",
    });
  }
};
