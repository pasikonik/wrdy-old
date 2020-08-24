const JSONAPISerializer = require('jsonapi-serializer').Serializer

const UserSerializer = new JSONAPISerializer('users', {
  attributes: ['email'],
})

export default UserSerializer
