<template>
  <div class="details container-fluid">
    <div class="row">
      <h1 class="title mt-4 col-12 text-center">Buggy Details</h1>
    </div>
    <div class="row my-5">
      <div class="col-10 offset-1">
        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th>Title</th>
              <th>Created By</th>
              <th>Description</th>
              <th>Status</th>
              <th>Date Created</th>
              <th>Last Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{log.title}}</td>
              <td>{{log.creator}}</td>
              <td>{{log.description}}</td>
              <td>{{log.closed ? 'Closed' : 'Active'}}</td>
              <td>{{log.createdAt}}</td>
              <td>{{log.updatedAt}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-4">
        <form @submit.prevent="addNote" class="mb-5">
          <div class="form-goup my-4 col-12 d-flex justify-content-center">
            <input
              required
              v-model="newNote.creator"
              type="text"
              class="form-control name shadow"
              id
              placeholder=" *Name..."
            >
            <input
              required
              v-model="newNote.content"
              type="text"
              class="form-control ml-2 description shadow"
              id
              placeholder=" *Description..."
            >
            <button type="submit" class="btn btn-outline-dark shadow ml-2">Submit Note</button>
          </div>
        </form>
      </div>
    </div>
    <notes class="row"></notes>
  </div>
</template>

<script>
import Notes from "@/components/Notes.vue";

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
      this.$store.dispatch("newNote", this.newNote);
    }
  },
  components: {
    Notes
  }
};
</script>