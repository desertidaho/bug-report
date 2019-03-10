<template>
  <div class="home container-fluid">
    <div class="row">
      <h1 class="title mt-4 col-12 text-center">Technical Bugs <img class="mb-2" src="../../public/img/spy-bug.png"
          alt=""></h1>
    </div>
    <div class="row">
      <div class="col-12 mt-3">
        <h5 class="text-center mt-4">Report a new bug</h5>
        <form @submit.prevent="addLog" class="mb-5">
          <div class="form-goup my-4 col-12 d-flex justify-content-center">
            <input required v-model="newLog.creator" type="text" class="form-control name shadow" id
              placeholder=" *Name...">
            <input required v-model="newLog.title" type="text" class="form-control form-title ml-2 shadow" id
              placeholder=" *Title...">
            <input required v-model="newLog.description" type="text" class="form-control ml-2 description shadow" id
              placeholder=" *Description...">
            <button type="submit" class="btn btn-outline-dark shadow ml-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
    <BugLog></BugLog>
  </div>
</template>

<script>
  import BugLog from '@/components/BugLog.vue'

  export default {
    name: 'home',
    mounted() {
      this.$store.dispatch('getAllLogs')
    },
    data() {
      return {
        newLog: {
          creator: '',
          title: '',
          description: ''
        }
      }
    },
    components: {
      BugLog
    },
    methods: {
      addLog() {
        this.$store.dispatch('addLog', this.newLog)
        //this.form.reset()
      }
    }
  }
</script>

<style scoped>
  .title {
    text-shadow: 0.3px 0.3px rgb(243, 132, 5);
    font-family: 'Orbitron', sans-serif;
  }

  img {
    width: 4vw;
    height: 9vh;
  }

  .name {
    width: 15vw !important;
  }

  .form-title {
    width: 20vw !important;
  }

  .description {
    width: 40vw !important;
  }

  input {
    border: 1px solid rgb(44, 44, 44);
  }

  input[type="text"].form-control::-webkit-input-placeholder {
    font-weight: 500;
    color: rgb(66, 123, 247);
  }
</style>