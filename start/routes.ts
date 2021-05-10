import Route from '@ioc:Adonis/Core/Route'
import { User } from '../interfaces/user.interface'
import { createNewUser, createUsersTable } from '../libs/dynamodb.lib'

Route.post('/users/create-table', async () => {
  await createUsersTable()
  return 'Users table created'
})

Route.post('/users/create', async ({ request }) => {
  const body = request.body()
  const user: User = {
    firstname: body.firstname,
    lastname: body.lastname,
  }
  await createNewUser(user)
  return {
    status: 'User created',
    user,
  }
})
