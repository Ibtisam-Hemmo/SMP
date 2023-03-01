import axios from 'axios';
import swal from 'sweetalert';
import { logIn, logOut } from '../../apis/authRequest.js';

const login = (FormData, navigate) => async (dispatch) => {
    dispatch({ type: 'AUTH_START' })
    try {
        const { data } = await logIn(FormData);
        dispatch({ type: 'AUTH_SUCCESS', data: data, rememberMe: FormData.rememberMe })
        navigate("/home", { replace: true })
    } catch (error) {
        if (axios.isAxiosError(error)) {
            swal(error.response?.data?.msg)
        } else {
            console.log(error);
        }
        dispatch({ type: 'AUTH_FAIL' })
    }
}
export default login;

export const logout = (navigate) => async (dispatch) => {
    try {
        await logOut();
        dispatch({ type: 'LOG_OUT' });
        localStorage.removeItem('user'); 
        navigate('/login', { replace: true }); 
    } catch (error) {
        console.log(error);
    }

}


