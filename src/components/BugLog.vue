<template>
  <div class="Buglog">
    <div class="row">
      <div class="col-10 offset-1 mt-3">
        <table class="table table-hover shadow-lg">
          <thead class="thead-dark">
            <tr>
              <th>Created By</th>
              <th>Title</th>
              <th>Date Created</th>
              <th>Last Activity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody v-for="log in allLogs" :key="log.id" :class="log.closed ? 'table-danger' :'table-success'">
            <tr @click="setActive(log); $router.push({name: 'bugDetails', params:{id: log._id}})">
              <td>{{log.creator}}</td>
              <td>{{log.title}}</td>
              <td>{{log.createdAt | formatTime}}</td>
              <td>{{log.updatedAt | formatTime}}</td>
              <td>{{log.closed ? 'Closed' : 'Active'}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import Moment from 'moment'

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
    components: {},
    filters: {
      formatTime(date) {
        return Moment(String(date)).format('DD/MM/YYYY, HH:MM')
      }
    }

  };
</script>

<style>
  table {
    width: 100%;
  }
</style>