<template>
  <v-container>
    <div class="d-flex justify-center align-center">
      <h1 id="projects">My Projects</h1>
    </div>
      <v-row class="project-list">
        <v-col cols="12">
          <a href="https://scbenson.github.io/business-languages/" target="_blank" style="text-decoration: none; display: block-inline;">
            <v-img src="/images/hero-background.webp" height="500" width="500" class="project-item rounded-lg overflow-hidden"></v-img>
          </a>
        </v-col>
      </v-row>
    
    <h1>Testimonials</h1>
    <p>Read what my customers think of my work</p>
    <div class="carousel-container">
      <v-carousel
        height="300"
        hide-delimiter-background
        show-arrows="hover"
        :continuous="false"
        class="testimonial-carousel"
      >
        <v-carousel-item>
          <div class="d-flex justify-center align-center h-100">
            <v-card
              class="testimonial-card mx-auto"
              max-width="350"
              elevation="4"
            >
              <div class="d-flex">
                <v-avatar size="50" class="ma-3">
                  <v-img src="/images/donal.webp"></v-img>
                </v-avatar>
                <p class="mt-3 pl-1">
                  Donal O'Riada <br />
                  <span class="text-grey">Business Owner</span>
                </p>
              </div>
              <v-card-text>
                <p class="text-body-1 text-left">
                  Sean exactly captured the look and feel that I wanted my
                  business website to look like.
                </p>
              </v-card-text>
            </v-card>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="d-flex justify-center align-center h-100">
            <v-card
              class="testimonial-card mx-auto"
              max-width="350"
              elevation="4"
            >
              <v-avatar size="50">
                <v-img src="/images/donal.webp"></v-img>
              </v-avatar>
              <v-card-text>
                <p class="text-body-1 text-center">
                  Sean exactly captured the look and feel of the business that I
                  was going for.
                </p>
              </v-card-text>
            </v-card>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </v-container>
</template>

<script setup></script>

<style scoped>

</style>
