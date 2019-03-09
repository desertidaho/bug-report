import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const _sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/brett/bugs'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logs: [],
    activeLog: {},
    allNotes: []

  },
  mutations: {
    setLogs(state, data) {
      state.logs = data
    },
    setActiveLog(state, log) {
      state.activeLog = log
    },
    addNote(state, data) {
      state.allNotes = data
    }

  },
  actions: {
    //creates new bug log report
    addLog({ commit, dispatch }, payload) {
      _sandbox.post('', payload)
        .then(res => {
          dispatch('getAllLogs')
        })
        .catch(err => {
          console.log(err)
        })
    },
    //get all bug reports
    getAllLogs({ commit, dispatch }, payload) {
      _sandbox.get('')
        .then(res => {
          commit('setLogs', res.data.results)
        })
        .catch(err => {
          console.log(err)
        })
    },
    //set active log
    setActive({ commit, dispatch }, log) {
      commit('setActiveLog', log)
    },
    getActiveLog({ commit, dispatch }, payload) {
      _sandbox.get(':id')
        .then(res => {
          commit('setActiveLog', res.data.results)
        })
        .catch(err => {
          console.log(err)
        })
    },
    newNote({ commit, dispatch }, payload) {
      let id = this.state.activeLog._id
      _sandbox.post(`${id}/notes`, payload)
        .then(res => {
          this.dispatch('getAllNotes')
        })
    },
    getAllNotes({ commit, dispatch }) {
      let id = this.state.activeLog._id
      _sandbox.get(`${id}/notes`)
        .then(res => {
          commit('addNote', res.data.results)
        })
    },
    //close a bug report
    close({ commit, dispatch }, id) {
      _sandbox.delete(`${id}`)
        .then(res => {
          commit('setActiveLog', res.data.results)
        })
        .catch(err => {
          console.log(err)
        })
    }


  }
})
