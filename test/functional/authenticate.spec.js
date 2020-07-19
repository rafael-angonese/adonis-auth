'use strict'

const { test, trait } = use('Test/Suite')('Auth')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')

trait('Test/ApiClient')

test('is should return user created', async ({ assert, client }) => {
    const user = await User.create({
        username: "Rafael",
        email: 'rafael_angonese@unochapeco.edu.br',
        password: '123456'
    })

    const response = await client
        .post('/authenticate')
        .send({
            email: 'rafael_angonese@unochapeco.edu.br',
            password: '123456'
        })
        .end()

    response.assertStatus(200)
    assert.exists(response.body.token)

})