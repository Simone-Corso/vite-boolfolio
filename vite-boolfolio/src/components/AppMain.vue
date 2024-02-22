<template lang="">
    <main class="container">
        <div class="row">
            <div class="col-12">
                <h1>
                    Un altro project:
                </h1>
            </div>
        </div>
    
</main>
</template>
<script>
import axios from 'axios';

   

export default {
    name: 'AppMain',
    data(){
        
    },

    methods:{
        getProjects(){
            axios.get('http://127.0.0.1:8000/api/projects',{
                params: {
                }
            })
            .then(function(response){
                console.log(response);
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
<style lang="">
    
</style>