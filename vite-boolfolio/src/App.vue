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
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@700&family=Montserrat:ital,wght@0,400;0,500;0,700;1,600&family=Open+Sans:wght@400;500;700;800&family=PT+Sans:wght@400;700&family=Roboto&display=swap');

.roboto-regular {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}

</style>
