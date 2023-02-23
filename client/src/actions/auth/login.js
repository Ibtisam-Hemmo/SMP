import axios from 'axios';
import swal from 'sweetalert';

import { logIn } from '../../apis/authRequest.js';

const login = (FormData) => async (dispatch) => {
    dispatch({ type: 'AUTH_START' })
    try {
        const { data } = await logIn(FormData);
        dispatch({ type: 'AUTH_SUCCESS', data: data })
    } catch (error) {
        if (error.response?.data) {
            // const errorResponse = error.response.data;
            // const regex = /<pre>(.*?)<\/pre>/s;
            // const matches = errorResponse.match(regex);
            // const errorMessage = matches ? matches[1].trim() : 'Unknown error';
            // console.log('err', errorMessage);
            console.log('err', error);
        } else {
            console.log(error);
        }
        dispatch({ type: 'AUTH_FAIL' })
    }
}
export default login;

export const logout = () => async (dispatch) => {
    dispatch({ type: 'LOG_OUT' })
}
