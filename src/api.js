import axios from 'axios';

export default {
  user: {
    login: (info) => axios.post('/api/auth', {info}).then((res) => res.data.user),
  },
};
