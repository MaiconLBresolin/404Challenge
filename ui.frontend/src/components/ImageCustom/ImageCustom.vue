<template>
    <img :src="src" />
</template>

<script>
export default {
  name: 'ImageCustom',
  props: {
    src: {
      type: String
    }
  }
}
</script>

<style scoped>
/* .imgSpace {
    height: 100%;
    width: 50%;
} */
img{
    width: 40vw;
}
</style>
