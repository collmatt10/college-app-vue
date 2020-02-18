<template>
  <div>
    Test Login <br>
    <button @click="getCourses()
  </div>
</template>

<script>
export default{
  name:'Example', //vue and npm run watch is not working
  components:{

  },
  data(){
    return{
      email:"test@test.com",
      password:"secret",
      name:"",
      courses:[]
    }
  },
  methods:{
    login(){
      let app = this;
      axios.post('/api/login',{
        email:this.email,
        password:this.password
        })
    },
    getCourses(){
      axios.get('/api/courses',{
        headers:{ Authorization: 'Bearer ' + token }
        })
      .then(function(response){
        console.log(response.data);
        })
      .catch(function(error){
        console.log(error);
        })
    }
  }
}
</script>

<style>

</style>
