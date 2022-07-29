<template>
    <button>{{text}}</button>
</template>

<script>
export default {
  name: 'ButtonCustom',
  props: {
    text: {
      type: String
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;700&family=Space+Mono:wght@400;700&display=swap');
button{
    font-family: 'Space Mono';
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    width: 216px;
    height: 50px;
    background: #333333;
}
</style>
