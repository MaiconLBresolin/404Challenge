<template>
    <header>
      <p :style="{ 'font-family': fontFamily}">{{ txt }}</p>
    </header>
</template>

<script>
export default {
  name: 'HeaderCustom',
  props: {
    txt: {
      type: String
    },
    fontFamily: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;700&family=Space+Mono:wght@400;700&display=swap');
p {
    font-family: Inconsolata;
    font-size: 24px;
    line-height: 25px;
    letter-spacing: -0.1em;
    text-align: left;
    margin: 2vw 0 0 2vw;
    padding-left: 30px;
}
</style>
