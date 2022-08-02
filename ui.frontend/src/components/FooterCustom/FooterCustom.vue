<template>
    <footer>
        <p>created by {{txt}} - {{companyName}}</p>
    </footer>
</template>

<script>

export default {
  name: 'FooterCustom',
  props: {
    txt: {
      type: String
    },
    companyName: {
      type: String
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;700&family=Space+Mono:wght@400;700&display=swap');
footer{
    align-content: center;
    text-align: center;
    font-family: Montserrat;
    font-size: 18px;
    line-height: 20px;
    color: #bdbdbd
}
</style>
