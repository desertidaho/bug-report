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
    addLog({ commit, dispatch }, payload) {
      _sandbox.post('', payload)
        .then(res => {
          dispatch('getAllLogs')
        })
        .catch(err => {
          console.log(err)
        })
    },
    getAllLogs({ commit, dispatch }) {
      _sandbox.get('')
        .then(res => {
          commit('setLogs', res.data.results)
        })
        .catch(err => {
          console.log(err)
        })
    },
    setActive({ commit, dispatch }, log) {
      commit('setActiveLog', log)
    },
    getActiveLog({ commit, dispatch }, id) {
      _sandbox.get(`${id}`)
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
    getAllNotesAfterRefresh({ commit, dispatch }, id) {
      _sandbox.get(`${id}/notes`)
        .then(res => {
          commit('addNote', res.data.results)
        })
    },
    closeLog({ commit, dispatch }, id) {
      _sandbox.delete(`${id}`)
        .then(res => {
          commit('setActiveLog', res.data.results)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteNote({ commit, dispatch }, noteId) {
      let postId = this.state.activeLog._id
      _sandbox.delete(`${postId}/notes/${noteId}`)
        .then(res => {
          this.dispatch('getAllNotes')
        })
    },
    editNote({ commit, dispatch }, { noteId, payload }) {
      let postId = this.state.activeLog._id
      _sandbox.put(`${postId}/notes/${noteId}`, { "flagged": payload })
        .then(res => {
          this.dispatch('getAllNotes')
        })
    }
  }
})
