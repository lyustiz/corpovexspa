export default {
    
    login (credentials) 
    {
      return axios.post('/login', credentials)
    },

    logout () 
    {
      return axios.post('/logout')
    },

    remember (email) 
    {
      return axios.post('/password/email', { 'email': email })
    },

    reset (user) 
    {
      return axios.post('/password/reset', {
        'email': user.email,
        'password': user.password,
        'password_confirmation': user.password_confirmation,
        'token': user.token
      })
    }
  }