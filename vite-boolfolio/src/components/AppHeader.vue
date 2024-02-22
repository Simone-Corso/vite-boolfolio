<template lang="">
    <header>
        <nav class="navbar navbar-expand-lg ">
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="(link,index) in linkItems" :key="index">
          <router-link :to="{name: link.routeName}" class="nav-link active">
            {{link.label}}
            
          </router-link>
        </li>
      </ul>
    </div>
</nav>
    </header>
</template>
<script>
export default {
    data(){ 
      return {
        linkItems: [
          {
            label: 'home',
            routeName: 'home'
          },
          {
            label: 'project',
            routeName: 'project'
          },
          {
            label: 'categories',
            routeName: 'categories'
          }
        ]
      }
      
    }
}
</script>
<style scoped>
  
.navbar{
  background-color: darkcyan;
}

.lora-uniquifier{
  font-family: "Lora", serif;
  font-optical-sizing: auto;
  font-weight: weight ;
  font-style: normal;
}


</style>