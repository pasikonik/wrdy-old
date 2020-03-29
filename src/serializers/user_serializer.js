import { Serializer } from 'jsonapi-serializer'

const UserSerializer = new Serializer('users', {
  attributes: ['email'],
})

export default UserSerializer
