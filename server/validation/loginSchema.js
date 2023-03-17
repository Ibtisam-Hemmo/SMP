import yup from 'yup';
import { customError } from '../utils/index.js';

const loginSchema = async (username, password) => {
    const schema = yup.object().shape({
        username: yup.string().required('Username is required'),
        password: yup
            .string()
            .required('Password is required'),
    });
    try {
        await schema.validate({ username, password }, { abortEarly: false })
        return;
    } catch (err) {
        throw new customError(400, err.errors);
    }
}
export default loginSchema;
