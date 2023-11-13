export const sumbitRegistrationData = (values, navigate) => {
    const user = {
        email: values.email,
        username: values.name,
        password: values.password,
    };

    if (values.existingUser) {
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
    } else {
        localStorage.setItem(values.email, JSON.stringify(user));
        alert('Sign up successful!');
        navigate('/empty-page');
    }
}