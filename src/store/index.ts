import { createStore } from 'vuex'

export interface IState {
  users: {
    id: number
    name: string
    email: string
  }[]
  selectedUser: {
    id: number
    name: string
    email: string
    phone: string
    aboutSelf: string
  } | null
}

export const store = createStore({
  state(): IState {
    return {
      users: [],
      selectedUser: null
    }
  },

  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setSelectedUser(state, user) {
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
          context.commit('setUsers', shortenedUsers)
        })
    }
  }
})
