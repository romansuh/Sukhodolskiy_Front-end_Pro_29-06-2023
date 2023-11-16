export const submitRegistrationData = (values, dispatch, signUpUser, signInUser, navigate) => {
    const user = {
        email: values.email,
        username: values.name,
        password: values.password,
    };

    if (localStorage.getItem(user.email) === null) {
        dispatch(signUpUser(user));
        alert('Sign up successful!');
        navigate('/welcome')
    } else {
        const storedUser = localStorage.getItem(values.email);
        if (storedUser) {
            const storedUserData = JSON.parse(storedUser);
            if (storedUserData.password === values.password) {
                alert('Sign in successful!');
                dispatch(signInUser(storedUser));
                navigate('/welcome');
            } else {
                alert('Incorrect password. Please try again.');
            }
        } else {
            alert('User not found. Please sign up.');
        }

    }
}