export const sendRequest = (data) => {

    const url = '';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Сетевой запрос завершился неудачей');
            }
            return response.json();
        })
        .then((data) => console.log(data))
        .catch((error) => console.log(error.message));
};
