<template>
    <img :src="srcImg" :alt="imgDesc"/>
</template>

<script>
export default {
  name: 'ImageCustom',
  props: {
    srcImg: {
      type: String
    },
    imgDesc: {
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
