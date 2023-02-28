import yup from 'yup';

const signUpSchema = (data) => {
    const { username, firstName, lastName, password, confirmPass } = data;
    const schema = yup.object().shape({
        username: yup.string().required('Username is required'),
        firstName: yup.string().required('firstName is required'),
        lastName: yup.string().required('lastName is required'),
        password: yup
            .string()
            .required('Password is required'),
        confirmPass: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });
    return schema.validate(
        { username, firstName, lastName, password, confirmPass },
        { abortEarly: false }
    )
}
export default signUpSchema;
