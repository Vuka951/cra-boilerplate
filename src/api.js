import axios from 'axios';

export default {
  user: {
    login: (info) => axios.post('http://localhost:8080/api/auth', {info}).then((res) => res.data.user),
    signup: (user) => axios.post('http://localhost:8080/api/users', {user}).then((res) => res.data.user),
    confirm: (token) => axios.post('http://localhost:8080/api/auth/confirmation', {token}).then((res) => res.data.user),
    resetPasswordRequest: (email) => axios.post('http://localhost:8080/api/auth/reset_password', {email}),
    validateToken: (token) => axios.post('http://localhost:8080/api/auth/validate_token', {token}),
    resetPassword: (data) => axios.post('http://localhost:8080/api/auth/resetting_password', {data}),
  },
};
