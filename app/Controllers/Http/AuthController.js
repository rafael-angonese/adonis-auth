'use strict'

const User = use('App/Models/User')

class AuthController {

    async register({ request }) {
        const data = request.only(['username', 'email', 'password'])

        const user = await User.create(data)

        return user
    }

    async authenticate({ request, auth }) {

        const { email, password } = request.all()

        let token = await auth.attempt(email, password)

        token.user = await User.query().select('username', 'email').where('email', email).fetch()

        return token

    }

}

module.exports = AuthController
