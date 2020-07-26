'use strict'

class Register {

  get validateAll() {
    return true
  }

  get rules() {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required'
    }
  }

  get messages() {
    return {
      'username.unique': 'Este nome de usuário já está registrado',
      'username.required': 'O nome de usuário é obrigatório',
      'email.required': 'O e-mail é obrigatório',
      'email.email': 'O e-mail deve ser válido',
      'email.unique': 'Este e-mail já está registrado',
      'password.required': 'A senha é obrigatório'
    }
  }

}

module.exports = Register
