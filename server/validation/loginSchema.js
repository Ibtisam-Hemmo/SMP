import yup from 'yup';

const loginSchema = (username, password) => {
    const schema = yup.object().shape({
        username: yup.string().required('Username is required'),
        password: yup
            .string()
            .required('Password is required'),
    });
    return schema.validateSync({ username, password }, { abortEarly: false })
}
export default loginSchema;
