import yup from 'yup';

const signUpSchema = (data) => {
    const { username, firstName, lastName, password, confirmPass } = data;
    const schema = yup.object().shape({
        username: yup.string().required('Username is required'),
        firstName: yup.string().required('firstName is required'),
        lastName: yup.string().required('lastName is required'),
        password: yup
            .string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
        confirmPass: yup.string()
            .valid(yup.ref('password'))
            .required('Password and confirm Password must be the same'),
    });
    return schema.validateSync(
        { username, firstName, lastName, password, confirmPass },
        { abortEarly: false }
    )
}
export default signUpSchema;