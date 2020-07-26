'use strict'

class Register {

  get validateAll() {
    return true
  }

  get rules() {
    return {
      email: 'required|email|unique:users',
      password: 'required'
    }
  }

  get messages() {
    return {
      'email.required': 'O e-mail é obrigatório',
      'email.email': 'O e-mail deve ser válido',
      'email.unique': 'Este e-mail já esta registrado',
      'password.required': 'A senha é obrigatório'
    }
  }

}

module.exports = Register
