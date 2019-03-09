<template>
  <div>
    <div class="Notes col-10 offset-1" v-for="note in allNotes" :key="note">
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">Created by {{note.creator}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{note.content}}</h6>
          <h6 class="card-subtitle mb-2 text-muted">{{note.createdAt}}</h6>
          <h6 class="card-subtitle mb-2 text-muted">{{note.updatedAt}}</h6>
          <h6 class="card-subtitle mb-2 text-muted">{{note.flagged}}</h6>
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
export default {
  name: "Notes",
  mounted() {},
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
  components: {}
};
</script>