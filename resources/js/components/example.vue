<template>
<div>
Test Login<br>
<button @click="login()">Login</button> <button @click="logout()"> Logout</button>
<br>
Test courses <br>
<button @click="getCourses()">Get courses</button>
<example />
</div>
</template>

<script>
import Example from './components/example'
export default {
name: 'example',
components:{
  example
},
data(){
return{

  }
},
methods:{
  login(){
    let app = this;
    axios.post('/api/login',{
      email:"",
      password:"",
      courses: []
  })
},
mounted() {
  if (localStorage.getItem('token')!== null){
    this.$router.replace({name: "home"});
    console.log("USER LOGGED IN");
  }
},

    .then(function (response){
      console.log(response.data)
      app.name = response.data.name;
      app.email = response.data.email;
      localStorage.setItem('token', response.data.token)
    })
    .catch(function(error)){
      console.log(error);
      }

  },
  getCourses(){
    let token = localStorage.getItem('token');
    axios.get('/api/courses', {
      headers: { Authorization: "Bearer " + token}
    })
    .then(function(response){
      console.log(response);
     app.courses = response.data.data;
    })
    .catch(function(error)){
      console.log(error);
      }
    },
    logout() {
        let token = localStorage.getItem('token');
      axios.get('/api/logout', {
        headers: { Authorization: "Bearer " + token}
      })
      .then(function(response){

      })
      .catch(function(error)){
        console.log(error);
      });
        console.log("USER LOGGED OUT");
          localStorage.removeItem('token');
    }
  }
}
</script>

<style>

</style>
