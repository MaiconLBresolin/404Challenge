<template>
    <main>
        <div class="mainLeft">
            <ImageCustom :srcImg="imgUrl" :imgDesc="altImg"/>
        </div>
        <div class="mainRight">
            <TitleCustom :titleTxt="titleMsg" :fontFamily="titleFont"/>
            <TextCustom :txtMsg="txtMain" :fontFamily="txtFont" />
            <ButtonCustom :txtButton="btnText" :fontFamily="btnFont" />
        </div>
    </main>
</template>

<script>
import ImageCustom from '@/components/ImageCustom/ImageCustom'
import TitleCustom from '@/components/TitleCustom/TitleCustom'
import TextCustom from '@/components/TextCustom/TextCustom'
import ButtonCustom from '@/components/ButtonCustom/ButtonCustom'

export default {
  name: 'MainCustom',
  components: {
    ImageCustom,
    TitleCustom,
    TextCustom,
    ButtonCustom
  },
  props: {
    imgUrl: {
      type: String
    },
    titleMsg: {
      type: String
    },
    txtMain: {
      type: String
    },
    btnText: {
      type: String
    },
    titleFont: {
      type: String
    },
    txtFont: {
      type: String
    },
    btnFont: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
body, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  main{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 100%;
    margin-top: 80px;
    gap: 10vw;
    padding-bottom: 20px;
    @media (max-width: 768px) {
      flex-flow: column nowrap;
      margin: 0 auto;
      width: 94%;
      padding-bottom: 0px;
    }

    .mainLeft{
      height: 100%;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      @media (max-width: 768px) {
        width: 100%;
        margin-top: 50px;
      }
    }

    .mainRight{
      width: 50%;
      display: flex;
      flex-flow: column nowrap;
      align-content: center;
      gap: 40px;
      @media (max-width: 768px) {
        margin-left: 30px;
        width: 95%;
      }
    }
  }
</style>
