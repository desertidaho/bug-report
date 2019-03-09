<template>
  <div class="Buglog">
    <div class="row">
      <div class="col-10 offset-1 mt-3">
        <table class="table table-hover table-bordered shadow-lg text-center">
          <thead class="thead-dark">
            <tr>
              <th id="creator">Created By</th>
              <th id="title">Title</th>
              <th id="created">When Created</th>
              <th id="status">Status</th>
              <th id="closed">When Closed</th>
            </tr>
          </thead>
          <tbody v-for="log in allLogs" :key="log.id" :class="log.closed ? 'table-secondary' :'table-success'">
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

<style scoped>
  table {
    table-layout: fixed;
    white-space: normal !important;
  }

  td {
    word-wrap: break-word;
  }

  #creator {
    width: 14vw;
  }

  #title {
    width: 25vw;
  }

  #status {
    width: 10vw;
  }

  #created,
  #closed {
    width: 17vw;
  }
</style>