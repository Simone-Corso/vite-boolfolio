<template lang="">
    <main class="container">
        <div class="row">
            <div class="col-12">
                <ul>
                    <li v-for="project in projects" :key="project.id">
                        <div class="project-image">
                            <h2>{{ project.title }}</h2>
                                <img :src="project.thumb" alt="" class="image-project">
                                <p>{{ project.description }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    
</main>
</template>
<script>
import axios from 'axios';

   

export default {
    name: 'ProjectList',
    data(){
       return {
        projects: [],
       }
    },

    methods:{
        getProjects(){
            axios.get('http://127.0.0.1:8000/api/project',{
                params: {
                }
            })
            .then((response)=>{
                console.log(response);
                this.projects = response.data.result.data;
            })
            .catch(function(error){
                console.log(error);
            })
            .finally(function(){

            });
        }
    },

    created(){
        this.getProjects();
    }

}
</script>
<style scoped>

.project-image {
  float: left;
  margin-right: 20px;
}

.project-info {
  margin-top: 20px;
}

.image-project {
  width: 150px;
  height: 150px;
  border-radius: 20px;
  transition: box-shadow 0.2s ease-in-out;
}

ul{
    list-style-type: none;
}

.image-project {
  transition: transform 0.2s ease-in-out;
}

.image-project:hover {
  transform: scale(1.05);
}
    
</style>