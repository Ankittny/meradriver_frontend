import axiosInstance from "@/utils/axios";

export const driverRegister = (values) => async (dispatch) => {
  try {
    dispatch({ type: "driverRegisterRequest" });

    const { data } = await axiosInstance.post(
      "/driver-register-enquiry",
      values
    );

    dispatch({ type: "driverRegisterSuccess", payload: data });
    return data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Something went wrong";
    dispatch({ type: "driverRegisterFail", payload: errorMessage });
    throw new Error(errorMessage);
  }
};
