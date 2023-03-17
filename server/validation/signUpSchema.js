import yup from 'yup';
import { customError } from '../utils/index.js';

const signUpSchema = async (data) => {
    const { username, password, email, firstName, lastName } = data;
    const schema = yup.object().shape({
        username: yup.string().required('Username is required'),
        email: yup.string().email().required('Email is required'),
        firstName: yup.string().required('firstName is required'),
        lastName: yup.string().required('lastName is required'),
        password: yup
            .string()
            .required('Password is required')
    });
    try {
        await schema.validate({ username, password, email, firstName, lastName }, { abortEarly: false });
        return;
    } catch (err) {
        throw new customError(400, err.errors);
    }

}
export default signUpSchema;
