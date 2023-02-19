import { logIn } from '../../apis/authRequest.js';

const login = (FormData) => async (dispatch) => {
    dispatch({ type: 'AUTH_START' })
    try {
        const { data } = await logIn(FormData);
        dispatch({ type: 'AUTH_SUCCESS', data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: 'AUTH_FAIL' })
    }
}
export default login; 