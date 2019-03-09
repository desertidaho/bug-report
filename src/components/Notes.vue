<template>
  <div>
    <div class="Notes col-6 offset-3" v-for="note in allNotes" :key="note">
      <div class="card mb-4 shadow-sm">
        <div class="card-body bg-warning">
          <h5 class="card-title">Created by {{note.creator}}</h5>
          <h6 class="card-subtitle mb-2">Note comments: {{note.content}}</h6>
          <h6 class="card-subtitle mb-2">Note created: {{note.createdAt | formatTime}}</h6>
          <h6 class="card-subtitle mb-2">Last activity: {{note.updatedAt | formatTime}}</h6>
          <h6 class="card-subtitle mb-2">Status: {{note.flagged}}</h6>
          <a href="#" class="card-link">Delete</a>
          <a href="#" class="card-link">Please work</a>
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
    methods: {},
    components: {},
    filters: {
      formatTime(date) {
        return Moment(String(date)).format('MM/DD/YYYY, LT')
      }
    }

  };
</script>