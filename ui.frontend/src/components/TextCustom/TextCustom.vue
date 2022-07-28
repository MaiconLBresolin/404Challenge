<template>
    <p> {{text}} </p>
</template>

<script>
export default {
  name: 'TextCustom',
  props: {
    text: {
      type: String
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;700&family=Space+Mono:wght@400;700&display=swap');
p{
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.035em;
}
</style>
