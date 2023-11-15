export const submitRegistrationData = (values, navigate) => {
    const user = {
        email: values.email,
        username: values.name,
        password: values.password,
    };

    if (localStorage.getItem(user.email) === null) {
        localStorage.setItem(values.email, JSON.stringify(user));
        alert('Sign up successful!');
    } else {
        const storedUser = localStorage.getItem(values.email);
        if (storedUser) {
            const storedUserData = JSON.parse(storedUser);
            if (storedUserData.password === values.password) {
                alert('Sign in successful!');
            } else {
                alert('Incorrect password. Please try again.');
            }
        } else {
            alert('User not found. Please sign up.');
        }
    }

    navigate('/welcome');
}