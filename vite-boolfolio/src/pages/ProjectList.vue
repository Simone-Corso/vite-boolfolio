<template lang="">
    <main class="container">
        <div class="row">
            <div class="col-12">
                <h1>
                    I tuoi progetti:
                </h1>
                <ul>
                    <li v-for="project in projects" :key="project.id">
                        {{ project.title }} -- {{project.type}}
                        <img :src="project.thumb" alt="" class="image-project">
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

.image-project{
    height: 100px;

}
    
</style>