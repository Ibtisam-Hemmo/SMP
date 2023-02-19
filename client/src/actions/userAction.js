import { UpdateUser } from "../apis/userReduest";

export const updateUser = (id, formData) => async (dispatch) => {
    dispatch({ type: "UPDATING_START" })
    try {
        const { data } = await UpdateUser(id, formData);
        dispatch({ type: "UPDATING_SUCCESS", data: data })
    }
    catch (error) {
        dispatch({ type: "UPDATING_FAIL" })
    }
}
