import axios from 'axios';

export default {
  user: {
    login: (info) => axios.post('http://localhost:8080/api/auth', {info}).then((res) => res.data.user),
  },
};
