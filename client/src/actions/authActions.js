import axios from 'axios';
import swal from 'sweetalert';
import { signup, logIn, logOut } from '../apis/authRequest';

export const signUp = (FormData, navigate) => async (dispatch) => {
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

export const login = (FormData, navigate) => async (dispatch) => {
    dispatch({ type: 'AUTH_START' })
    try {
        const { data } = await logIn(FormData);
        dispatch({ type: 'AUTH_SUCCESS', data: data, rememberMe: FormData.rememberMe })
        navigate("/home", { replace: true })
    } catch (error) {
        console.log('error: ', error);
        if (axios.isAxiosError(error)) {
            swal(error.response?.data?.msg)
        } else {
            console.log(error);
        }
        dispatch({ type: 'AUTH_FAIL' })
    }
}

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

