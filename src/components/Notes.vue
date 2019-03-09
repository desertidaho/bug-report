<template>
  <div>
    <div class="Notes col-4 offset-4" v-for="note in allNotes" :key="note">
      <div class="card mb-4 shadow">
        <div class="card-body bg-warning">
          <h6 class="card-subtitle"><b>Created by:</b> {{note.creator}}</h6>
          <h6 class="card-subtitle"><b>Comments:</b> {{note.content}}</h6>
          <h6 class="card-subtitle"><b>Note created:</b> {{note.createdAt | formatTime}}</h6>
          <h6 class="card-subtitle"><b>Last activity:</b> {{note.updatedAt | formatTime}}</h6>
          <h6 class="card-subtitle"><b>Status:</b> {{note.flagged}}</h6>
          <button class="btn btn-sm btn-outline-dark shadow mt-2 delete-btn"
            @click="deleteNote(`${note._id}`)">Delete</button>
        </div>
      </div>
    </div>
    <!-- <select v-model="newNote.flagged" class="ml-2">
              <option :value="flagged" v-for="flagged in flags" :key="flagged">{{flagged}}</option>
    </select>-->
  </div>
</template>

<script>
  import Moment from 'moment'

  export default {
    name: "Notes",
    mounted() { },
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
    line-height: 2rem;
  }

  .delete-btn {
    float: right;
  }
</style>