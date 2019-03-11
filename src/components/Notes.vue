<template>
  <div>
    <div class="Notes col-4 offset-4" v-for="note in allNotes" :key="note.id">
      <div class="card mb-4 shadow">
        <div class="card-body"
          :class="note.flagged == 'pending' ? 'bg-warning' : note.flagged == 'completed' ? 'bg-success' : 'bg-secondary'">
          <h6 class="card-subtitle"><b>Created by:</b> {{note.creator}}</h6>
          <h6 class="card-subtitle"><b>Comments:</b> {{note.content}}</h6>
          <h6 class="card-subtitle"><b>Note created:</b> {{note.createdAt | formatTime}}</h6>
          <h6 class="card-subtitle"><b>Last activity:</b> {{note.updatedAt | formatTime}}</h6>
          <h6 v-show="note.flagged == 'pending'" class="card-subtitle"><b>Status:</b> Pending</h6>
          <h6 v-show="note.flagged == 'completed'" class="card-subtitle"><b>Status:</b> Completed</h6>
          <h6 v-show="note.flagged == 'rejected'" class="card-subtitle"><b>Status:</b> Rejected</h6>
          <h6 v-show="note.flagged == 'pending'"><b>Change Status:</b> <a href=""
              @click="changeStatus(note._id, 'completed')" class="ml-1">Completed, </a> <a href=""
              @click="changeStatus(note._id, 'rejected')" class="ml-1">Rejected</a></h6>
          <button class="btn btn-sm btn-outline-dark shadow delete-btn"
            @click="deleteNote(`${note._id}`)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Moment from 'moment'

  export default {
    name: "Notes",
    mounted() {

    },
    props: [],
    data() {
      return {};
    },
    computed: {
      allNotes() {
        return this.$store.state.allNotes;
      }
    },
    methods: {
      deleteNote(noteId) {
        this.$store.dispatch('deleteNote', noteId)
      },
      changeStatus(noteId, payload) {
        this.$store.dispatch('editNote', { noteId, payload })
      }
    },
    components: {},
    filters: {
      formatTime(date) {
        return Moment(String(date)).format('MM/DD/YYYY, LT')
      }
    }
  };
</script>

<style scoped>
  .card {
    border: 2px solid rgb(90, 89, 89);
  }

  h6 {
    margin-bottom: 1.1rem;
  }

  .delete-btn {
    float: right;
  }
</style>