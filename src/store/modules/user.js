import api from '../../lib/api';

const UserModule = {
  actions: {
    async register(context, params) {
      try {
        await api.post('/register', params);
        context.dispatch('retrieveToken', params);
      } catch (error) {
        console.error(error);
      }
    }
  }
};

export default UserModule;
