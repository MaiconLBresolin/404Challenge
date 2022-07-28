<template>
    <h1> {{text}} </h1>
</template>

<script>
export default {
  name: 'TitleCustom',
  props: {
    text: {
      type: String
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;700&family=Space+Mono:wght@400;700&display=swap');
h1{
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 95px;
    letter-spacing: -0.035em;
}
</style>
