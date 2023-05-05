import axios from 'axios';

const state = {
  user: null,
  loginError: null
};

const mutations = {
  setUser(state, user) {
    state.user = user;
    state.loginError = null;
  },
  setLoginError(state, error) {
    state.loginError = error;
  }
};

const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await axios.post('/api/auth/login', credentials);
      const user = response.data.user;
      commit('setUser', user);
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    } catch (error) {
      commit('setLoginError', error.response.data.message);
      return false;
    }
  },
  logout({ commit }) {
    commit('setUser', null);
    localStorage.removeItem('user');
  }
};

const getters = {
  user: state => state.user,
  loginError: state => state.loginError
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
