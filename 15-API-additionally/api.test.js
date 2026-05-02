// api.test.js
// This file contains a test that verifies the error handling of the fetchWithWrongUrl function

import { fetchWithWrongUrl } from './api.js';


test('Verifies that an error is thrown when URL is incorrect', async () => {

    await expect(fetchWithWrongUrl()).rejects.toThrow('Failed to fetch data');
});


import { fetchPostsWithSpecificHeaders } from './api.js';

test('перевірка заголовка Content-type та параметрів запиту', async () => {
    const testId = 1;
    const response = await fetchPostsWithSpecificHeaders(testId);

    // Перевіряємо статус відповіді
    expect(response.status).toBe(200);

    // Перевіряємо, що заголовок у нашому запиті відповідає очікуваному
    expect(response.config.headers['Content-Type']).toBe('application/json; charset=UTF-8');

    // Перевіряємо, що параметр userId передано правильно
    expect(response.config.params.userId).toBe(testId);
});