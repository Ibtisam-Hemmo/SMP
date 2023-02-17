import { signup } from '../../apis/authRequest.js';

const signUp = (FormData) => async (dispatch) => {
    dispatch({ type: 'AUTH_START' })
    try {
        const { data } = await signup(FormData);
        dispatch({ type: 'AUTH_SUCCESS', data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: 'AUTH_FAIL' })
    }
}
export default signUp;
