<template>
  <div class="details container-fluid">
    <div class="row">
      <h1 class="title mt-4 col-12 text-center">Technical Bug Details</h1>
    </div>
    <div class="row my-5">
      <div class="col-10 offset-1">
        <table class="table table-hover table-bordered shadow">
          <thead class="thead-dark">
            <tr>
              <th>Created By</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date Created</th>
              <th>Last Activity</th>
              <th># of Notes</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody :class="log.closed ? 'table-secondary' :'table-success'">
            <tr>
              <td>{{log.creator}}</td>
              <td>{{log.title}}</td>
              <td>{{log.description}}</td>
              <td>{{log.createdAt | formatTime}}</td>
              <td v-if="allNotes.length != 0">{{allNotes[allNotes.length - 1].updatedAt | formatTime}}</td>
              <td v-else="">{{log.updatedAt | formatTime}}</td>
              <td>{{allNotes.length}}</td>
              <td>{{log.closed ? 'Closed' : 'Active / '}} <button @click="close" v-show="!log.closed"
                  class="btn btn-sm btn-danger close-btn px-1 py-0 shadow-lg mb-1" value="Closed">Close</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-4" v-show="!log.closed">
        <h5 class="text-center mt-3">Creat a note for this bug</h5>
        <form @submit.prevent="addNote" class="mb-5">
          <div class="form-goup my-4 col-12 d-flex justify-content-center">
            <input required v-model="newNote.creator" type="text" class="form-control name shadow" id
              placeholder=" *Name...">
            <input required v-model="newNote.content" type="text" class="form-control ml-2 description shadow" id
              placeholder=" *Description...">
            <button type="submit" class="btn btn-outline-dark shadow ml-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
    <notes class="row"></notes>
  </div>
</template>

<script>
  import Notes from "@/components/Notes.vue";
  import Moment from 'moment'

  export default {
    name: "bugDetails",
    mounted() {
      this.$store.state.activeLog;
      this.$store.dispatch("getAllNotes");
    },
    props: [],
    data() {
      return {
        newNote: {
          creator: "",
          content: "",
          flagged: "pending"
        },
        flags: ["pending", "completed", "rejected"]
      };
    },
    computed: {
      log() {
        return this.$store.state.activeLog;
      },
      allNotes() {
        return this.$store.state.allNotes;
      }
      // logger() {
      //   if (!this.$store.state.activeLog._id) {
      //     return this.$store.state.logs.find(l => {
      //       return l._id == this.$route.params.id;
      //     });
      //   }
      // }
    },
    methods: {
      addNote() {
        this.$store.dispatch('newNote', this.newNote);
      },
      close() {
        this.$store.dispatch('close', this.$store.state.activeLog._id)
      }

    },
    components: {
      Notes
    },
    filters: {
      formatTime(date) {
        return Moment(String(date)).format('MM/DD/YYYY, LT')
      }
    }


  };
</script>

<style scoped>
  .close-btn {
    font-size: 0.7rem;
  }
</style>