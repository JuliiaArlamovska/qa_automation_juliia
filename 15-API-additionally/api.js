// This file contains a function that makes an API call
// to an invalid URL to demonstrate error handling in API requests.
import axios from 'axios';

export async function fetchWithWrongUrl() {
    try {
        await axios.get('https://jsonplaceholder.typicode.com/invalid-url-12345');
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}


export async function fetchPostsWithSpecificHeaders(id) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        params: {
            userId: id
        }
    });
    return response;
}