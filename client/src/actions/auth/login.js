import axios from 'axios';
import swal from 'sweetalert';

import { logIn } from '../../apis/authRequest.js';

const login = (FormData) => async (dispatch) => {
    dispatch({ type: 'AUTH_START' })
    try {
        const { data } = await logIn(FormData);
        dispatch({ type: 'AUTH_SUCCESS', data: data })
    } catch (error) {
        if (axios.isAxiosError(error)) swal(error.response?.data?.msg);
        else console.log('error: ', error);
        dispatch({ type: 'AUTH_FAIL' })
    }
}
export default login;

export const logout = () => async (dispatch) => {
    dispatch({ type: 'LOG_OUT' })
}
