<template>
  <v-container>
    <div class="d-flex justify-center">
      <h1>Let's get in touch!</h1>
    </div>
    <v-row>
      <v-col md="6">
        <v-card>
          <v-card-title>Send me a message</v-card-title>
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field placeholder="First Name"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field placeholder="Email"></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <v-text-field placeholder="Subject"></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <v-textarea
                    placeholder="Type your message here..."
                  ></v-textarea>
                </v-col> </v-row
            ></v-container>
            <v-btn></v-btn>
          </v-form>
        </v-card>
      </v-col>
      <v-col md="6"><v-card></v-card></v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style scoped></style>
