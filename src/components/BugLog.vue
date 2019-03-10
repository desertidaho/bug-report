<template>
  <div class="Buglog">
    <div class="row my-0">
      <div class="col-10 offset-1 d-flex justify-content-center mb-1">
        <button class="btn btn-sm btn-outline-secondary shadow" @click="sortName">Sort Name</button>
        <button class="btn btn-sm btn-outline-secondary shadow ml-2" @click="sortStatus">Sort Status</button>
        <button class="btn btn-sm btn-outline-secondary shadow ml-2" @click="sortDate">Sort Date</button>
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1 mt-2 px-0">
        <table class="table table-hover table-bordered shadow-lg text-center">
          <thead class="thead-dark">
            <tr>
              <th id="creator">Name</th>
              <th id="title">Title</th>
              <th id="created">Created</th>
              <th id="status">Status</th>
              <th id="closed">Closed</th>
            </tr>
          </thead>
          <tbody v-for="log in allLogs" :key="log.id" :class="log.closed ? 'table-warning' :'table-primary'">
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
      },
      sortName() {
        let logs = this.$store.state.logs
        logs.sort((a, b) => a.creator.localeCompare(b.creator));
      },
      sortStatus() {
        let logs = this.$store.state.logs
        logs.sort((a, b) => a.closed - b.closed)
      },
      sortDate() {
        return this.$store.dispatch('getAllLogs');
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