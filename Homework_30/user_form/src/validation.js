export const validateData = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required'
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }

    if (!values.phone) {
        errors.phone = 'Required';
    } else if (
        !/^[(]?[0-9]{12}[)]?$/i.test(values.phone)
    ) {
        errors.phone = 'Invalid phone number: must include only numbers, length must be 12'
    }

    return errors;
}