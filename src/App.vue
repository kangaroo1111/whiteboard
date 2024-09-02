<template>
    <div id="app">
      <router-view></router-view>
    </div>
  </template>
  
  <script>
import { onMounted } from 'vue';

  export default {
    name: 'Whiteboard',
    setup(){
       onMounted(() => {
    // Load Google API client library
    gapi.load('client:auth2', () => {
      // Initialize Google API client
      gapi.client.init({
        apiKey: "AIzaSyA2CrEYdUKsh_jcHv1wi530EJw5f65yarg",
        clientId: "826328240991-h4hvk14s96b9v6tp08d6pqeu0d856ns4.apps.googleusercontent.com",
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
        scope: 'https://www.googleapis.com/auth/drive.file'
      }).then(() => {
        // Google API client is initialized
        console.log('Google API client initialized');
      }, (error) => {
        // Error initializing Google API client
        console.error('Error initializing Google API client:', error);
      });
    });
  });
  }
  }
  </script>
  
  <style>
  /* Add global styles here */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f0f0;
  }
  </style>
  