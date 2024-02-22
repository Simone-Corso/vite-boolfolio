<script>

  import AppHeader from './components/AppHeader.vue';

  export default{ components: { AppHeader }
}
</script>

<template>
<AppHeader/>
<route-view></route-view>
</template>

<style lang="scss">
@use './style/general.scss' as *;

</style>
