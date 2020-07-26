'use strict'

class Authenticate {

  get validateAll() {
    return true
  }

  get rules () {
    return {
      email: 'required|email',
      password: 'required'
    }
  }

  get messages () {
    return {
      'email.required': 'O e-mail é obrigatório',
      'email.email': 'O e-mail deve ser válido',
      'password.required': 'A senha é obrigatório'
    }
  }

}

module.exports = Authenticate
