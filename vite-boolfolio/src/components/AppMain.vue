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
            axios.get('/api/projects'{

            })
        }
    },

    created(){
        this.getProjects();
    }

}
</script>
<style lang="">
    
</style>