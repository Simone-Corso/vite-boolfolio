<template lang="">
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(link,index) in linkItems" :key="index">
            <router-link :to="{ name: link.routeName }" class="nav-link active">
              <span class="nav-link-text">{{ link.label }}</span>
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
  background-color: rgb(110, 105, 105);
  border-radius: 20px;
  width: 90%;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  
}

.nav-link-text {
  color: white;
}

header{
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  
  
}


</style>