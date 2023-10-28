const API_BASE_URL = 'https://653cfcf8d5d6790f5ec87b64.mockapi.io/todos/todos';

export const fetchTodos = () => {
    return fetch(API_BASE_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch((error) => {
            throw error;
        });
};
