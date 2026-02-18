const axios = require('axios');
const jsonData = require('./env.json');
const fs = require('fs');
const { expect } = require('@jest/globals');

test("Get users post details", async () => {
    var response = await axios.get(`${jsonData.baseUrl}/posts/1`,
        {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
    console.log(response.data)
    expect(response.status).toBe(200)
    expect(response.data).toHaveProperty('userId')
    expect(response.data).toHaveProperty('id')
    expect(response.data).toHaveProperty('title')
    expect(response.data).toHaveProperty('body')  
})

test("Create a new post", async () => {
    var response = await axios.post(`${jsonData.baseUrl}/posts`,
        {
            title: 'AQA post',
            body: 'API testing with Jest and Axios',
            userId: 13
        },
        {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }
    )
    console.log(response.data)
    expect(response.status).toBe(201)
    expect(response.data.userId).toBe(13)
    expect(response.data).toHaveProperty('id')
    expect(response.data.title).toBe('AQA post')
    expect(response.data).toHaveProperty('body')  
})