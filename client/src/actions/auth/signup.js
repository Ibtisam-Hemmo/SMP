import axios from 'axios';
import swal from 'sweetalert';

import { signup } from '../../apis/authRequest.js';

const signUp = (FormData, navigate) => async (dispatch) => {
    dispatch({ type: 'AUTH_START' })
    try {
        const { data } = await signup(FormData);
        dispatch({ type: 'AUTH_SUCCESS', data: data })
        navigate("../home", { replace: true })
    } catch (error) {
        if (axios.isAxiosError(error)) swal(error.response?.data?.msg);
        else console.log('error: ', error);
        dispatch({ type: 'AUTH_FAIL' })
    }
}
export default signUp;
