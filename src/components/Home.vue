<template>
  <v-container>
    <v-row>
      <v-col>
        <v-avatar size="500">
          <v-img src="/images/portfolio-pic.webp"></v-img>
        </v-avatar>
      </v-col>
      <v-col>
        <h1>
          I'm Sean Benson, a Vue.js Developer and <br />
          Neural Engineer
        </h1>
        <p>
          With expertise in building responsive user interfaces using Vue.js and
          a background in neural engineering from Imperial College London, I
          deliver polished, user-centric web applications that stand out through
          thoughtful design and seamless functionality. My interdisciplinary
          experience in software development, data analysis, and machine
          learning provides me with a unique perspective to approach frontend
          challenges, enabling me to create intuitive digital experiences that
          effectively meet business objectives while laying groundwork for
          future growth.
        </p>
      </v-col>
    </v-row>
    <h1>My Services</h1>
    <v-row>
      <v-col cols="12" md="4">
        <v-card height="100%">
          <v-card-text>
            <h2>Web Development</h2>
            <p>
              I transform your ideas into fully functional websites that not
              only look great but also perform exceptionally well. From simple
              landing pages to complex e-commerce platforms, I deliver custom
              solutions that align perfectly with your brand and business
              objectives.
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card height="100%">
          <v-card-text>
            <h2>UI/UX Design</h2>
            <p>
              I create intuitive and visually appealing user interfaces that
              make navigation effortless and engaging. My design process focuses
              on understanding your users' needs and behaviors to craft
              experiences that delight visitors and convert them into loyal
              customers.
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card height="100%">
          <v-card-text>
            <h2>Custom Web Application Development</h2>
            <p>
              I build specialized web applications tailored to your specific
              business requirements. Whether you need an internal tool to
              streamline operations or a customer-facing application that solves
              unique problems, I develop scalable solutions using modern
              technologies and best practices.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <v-card height="100%">
          <v-card-text>
            <h2>Website Maintenance & Support</h2>
            <p>
              I provide comprehensive maintenance services to ensure your
              website remains secure, up-to-date, and performing optimally. This
              includes regular updates, security patches, performance
              monitoring, and technical support to address issues promptly and
              minimize downtime.
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card height="100%">
          <v-card-text>
            <h2>Performance Optimization</h2>
            <p>
              I enhance your website's speed, search engine visibility, and
              overall performance to drive more traffic and increase
              conversions. Through advanced optimization techniques, I'll
              identify and fix bottlenecks, implement SEO best practices, and
              fine-tune your site for maximum efficiency.
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card height="100%">
          <v-card-text>
            <h2>Cloud Microservice Integration</h2>
            <p>
              I offer expert guidance on digital strategy, technology selection,
              and project planning to help you make informed decisions. Drawing
              from extensive industry experience, I provide valuable insights
              that save you time and resources while positioning your digital
              presence for long-term success.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <div class="d-flex justify-center align-center">
      <h1>My Projects</h1>
    </div>
      <v-row justify="center">
        <v-col cols="12"><a href="https://scbenson.github.io/business-languages/" target="_blank" style="text-decoration: none; display: block;"><v-img src="/images/hero-background.webp" height="500" width="500" class="project-item rounded-lg overflow-hidden"></v-img></a></v-col>
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
.carousel-container {
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
}
.testimonial-card {
  width: 350px;
  height: 200px;
  border-radius: 8px;
  transition: transform 0.3s;
}

.testimonial-carousel {
  border-radius: 8px;
  overflow: hidden;
  background-color: #2f2e2e;
}

.project-item{
  transition: transform 0.3s ease;
}

.project-item:hover{
  transform: translateY(-10px);
}
</style>
