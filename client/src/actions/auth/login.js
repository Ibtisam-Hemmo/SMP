import { logIn } from '../../apis/authRequest.js';

const login = (FormData, navigate) => async (dispatch) => {
    dispatch({ type: 'AUTH_START' })
    try {
        const { data } = await logIn(FormData);
        dispatch({ type: 'AUTH_SUCCESS', data: data })
        navigate("../home", { replace: true });
    } catch (error) {
        console.log(error)
        dispatch({ type: 'AUTH_FAIL' })
    }
}
export default login; 

export const logout = () => async (dispatch) =>{
    dispatch({type:'LOG_OUT'})
}
