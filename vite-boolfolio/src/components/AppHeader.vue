<template lang="">
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="link in linkItems">
          <router-link :to="{name: link.routeName}" class="nav-link active">
            {{link.label}}
            
          </router-link>
        </li>
      </ul>
    </div>
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
<style lang="">
    
</style>