'use strict'

const { test, trait } = use('Test/Suite')('User')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')

trait('Test/ApiClient')

test('is should return user created', async ({ assert, client }) => {
    
    const response = await client
        .post('/register')
        .send({
            username: 'rafaell',
            email: 'rafaell_angonese@unochapeco.edu.br',
            password: '123456'
        })
        .end()

    response.assertStatus(200)
    assert.exists(response.body.username)

})