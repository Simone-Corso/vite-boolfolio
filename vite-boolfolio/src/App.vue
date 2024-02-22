<script>

  import AppHeader from './components/AppHeader.vue';
  

  export default{ components: { AppHeader}
}
</script>

<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
<AppHeader/>
<router-view></router-view>

</template>

<style lang="scss">
@use './style/general.scss' as *;

</style>
