<template>
  <div class="Buglog">
    <div class="row">
      <div class="col-10 offset-1 mt-3">
        <table class="table table-hover shadow-lg">
          <thead class="thead-dark">
            <tr>
              <th>Created By</th>
              <th>Title</th>
              <th>When Created</th>
              <th>Status</th>
              <th>When Closed</th>
            </tr>
          </thead>
          <tbody v-for="log in allLogs" :key="log.id" :class="log.closed ? 'table-warning' :'table-success'">
            <tr @click="setActive(log); $router.push({name: 'bugDetails', params:{id: log._id}})">
              <td>{{log.creator}}</td>
              <td>{{log.title}}</td>
              <td>{{log.createdAt | formatTime}}</td>
              <td>{{log.closed ? 'Closed' : 'Active'}}</td>
              <td><span v-if="log.closed">{{log.updatedAt | formatTime}}</span></td>
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
        return Moment(String(date)).format('MM/DD/YYYY, LT')
      }
    }

  };
</script>

<style>
  table {
    width: 100%;
  }
</style>