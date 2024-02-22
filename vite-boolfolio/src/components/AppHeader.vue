<template lang="">
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <route-link :to="{name: 'home'}" class="nav-link active">
            home
          </route-link>
        </li>
        <li class="nav-item">
          <route-link :to="{name: 'project'}" class="nav-link active">
            Project
          </route-link>
        </li>
        <li class="nav-item">
          <route-link :to="{name: 'categories'}"class="nav-link active">
            Categories
          </route-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>