import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
  { name: 'eliasallex', email: 'eliasallex@gmail.com' }
]

export default {
  async index (request: Request, response: Response): Promise<unknown> {
    return response.json(users)
  },

  async create (request: Request, response: Response): Promise<unknown> {
    // const { name, email } = request.body
    // console.log('======>', name, email)

    EmailService.sendMail(
      {
        name: 'eliasallex',
        email: 'eliasallex@gmail.com'
      },
      {
        body: 'Seja bem-vindo',
        subject: 'Bem-vindo ao sistema'
      })

    return response.json('Email enviado')
  }
}
