import { createStore } from 'vuex'

type TUser = {
  id: number
  name: string
  email: string
  phone?: string
  aboutSelf?: string
}
export interface IState {
  users: TUser[]
  filteredUsers: TUser[]
  selectedUser: TUser | null
}

export default createStore({
  state(): IState {
    return {
      users: [],
      filteredUsers: [],
      selectedUser: null
    }
  },

  mutations: {
    setUsers(state, users: TUser[]) {
      state.users = users
    },
    setFilteredUsers(state, users: TUser[]) {
      state.filteredUsers = users
    },
    setSelectedUser(state, user: TUser) {
      state.selectedUser = user
    }
  },

  getters: {
    filteredUsers: (state) => (names: string[]) => {
      const filteredUsers = state.users.filter((value) =>
        names.some((name) => value.name.toLowerCase().includes(name))
      )
      return filteredUsers
    }
  },

  actions: {
    fetchUsers(context) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users: Array<any>) => {
          const shortenedUsers = users.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email
          }))
          console.log(shortenedUsers)

          context.commit('setUsers', shortenedUsers)
        })
    },
    searchUsers({ commit, state }, names: string[]) {
      const filteredUsers = state.users.filter((value) =>
        names.some((name) => value.name.toLowerCase().includes(name))
      )

      commit('setFilteredUsers', filteredUsers)
    }
  }
})
