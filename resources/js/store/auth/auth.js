import auth from '~/api/auth.js'

export default 
{
    state: 
    {
        token:  null,
        user:   null,
        logged: false
	},

	getters: 
	{
        token:  state => state.token,
        user:   state => state.user,
        logged: state => state.logged,
	},

	mutations: 
	{
		setToken (state, token)
		{
			state.token = token
		},
		setuser(state, user)
		{
			state.user  = user
		},
		setlogged(state, logged)
		{
			state.logged = logged;
		},
    },

    actions:
    {
        login( { commit }, credentials)
        {
            return new Promise((resolve, reject) => 
            {
                auth.login(credentials).then(response => 
                {
                    commit('setToken', response.data.token)
                    commit('setuser', response.data.user)
                    commit('setlogged', true)
                    
                    resolve(response)

                }).catch(error => 
                {
                    reject(error)
                })
            })
        }


    }
}
