<template>
  <div class="full-page-wrapper">
    <Header/>

    <v-container color="primary" fluid class="pa-0 ma-0 about-container">
      <div id="photo-container" ref="photoContainer" class="avatar-position">
        <v-avatar id="photo" size="300">
          <v-img src="/images/portfolio-pic.webp" alt="Sean Benson"></v-img>
        </v-avatar>
      </div>
      
      <p id="intro" ref="introText" class="intro-text text-white">
        I'm Sean Benson,<br> <span class="spaced-intro">a Vue.js Developer</span>
      </p>

      <v-btn 
          variant="outlined"
          color="white"
          size="large"
          class="contact-button">Let's Meet</v-btn>

      <p class="slogan text-white">I make <br> <span class="spaced-slogan">Websites</span></p>
      
    </v-container>
  </div>
</template>

<script setup>
import Header from '@/components/layout/header/Header.vue';
</script>



<style scoped>

.full-page-wrapper{
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: rgb(var(--v-theme-primary));
}

.about-container {
  height: calc(100vh - 56px);
  width: 100vw;
  position: relative;
  overflow: hidden;
  flex: 1;
}



/* Initial centered position of the photo */
.avatar-position{
  position: absolute;
  left: 600px;
  top: 150px;
}




/* Intro text styling */
.intro-text {
  position: absolute;
  right: 500px;
  top: 150px;
  white-space: nowrap;
  width: 400px;
  font-size: 40px;
  line-height: 1.5;
  font-weight: 300;
}

.spaced-intro{
  margin-left: 60px;
  display: block;
}
.spaced-slogan {
  margin-left: 100px;
  display: block;
}

.slogan{
  position: absolute;
  bottom: 220px;
  left: 500px;
  line-height: 1.5; 
  font-size: 82px;
  font-weight: 100;
  font-family: "PlayfairDisplay", serif !important;
}

.contact-button{
  position: absolute;
  top: 450px;
  right: 650px;
  background-color: transparent !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  border-radius: 12px !important;
  color: white !important;
  font-weight: 500 !important;
  font-size: 18px;
  text-transform: none !important;
  letter-spacing: 0.5px !important;
  padding: 20px 32px !important;
  transition: all 0.3s ease !important;
  height: 60px;
}

.contact-button:hover {
  background-color: #007AFF !important; /* Apple blue */
  border-color: #007AFF !important;
  color: white !important;
  transform: translateY(-1px) !important;
  box-shadow: 0 8px 25px rgba(0, 122, 255, 0.3) !important;
}

.contact-button:active {
  transform: translateY(0) !important;
}


</style>