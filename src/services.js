// const baseUrl = "https://search.outdoorsy.com/rentals";
const baseUrl = 'http://localhost:3030';

export const getAll = () => {
    return fetch(`${baseUrl}/data/vehicles`)
        .then(res => res.json())
};