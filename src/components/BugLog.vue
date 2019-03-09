<template>
  <div class="Buglog">
    <div class="row">
      <div class="col-10 offset-1 mt-5">
        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th>Title</th>
              <th>Created By</th>
              <th>Status</th>
              <th>Date Created</th>
              <th>Last Activity</th>
            </tr>
          </thead>
          <tbody v-for="log in allLogs" :key="log.id">
            <tr @click="setActive(log); $router.push({name: 'bugDetails', params:{id: log._id}})">
              <td>{{log.title}}</td>
              <td>{{log.creator}}</td>
              <td>{{log.closed ? 'Closed' : 'Active'}}</td>
              <td>{{log.createdAt}}</td>
              <td>{{log.updatedAt}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BugLog",
  props: [],
  data() {
    return {};
  },
  computed: {
    allLogs() {
      return this.$store.state.logs;
    }
  },
  methods: {
    setActive(log) {
      this.$store.dispatch("setActive", log);
    }
  },
  components: {}
};
</script>

<style>
table {
  width: 100%;
}
</style>
