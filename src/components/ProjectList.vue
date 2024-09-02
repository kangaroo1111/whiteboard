<template>
    <div>
      <h2>Your Projects</h2>
      <ul>
        <li v-for="project in projects" :key="project.id">
          <router-link :to="'/project/' + project.id">{{ project.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectList',
    data() {
      return {
        projects: [] // Holds the user's projects fetched from Google Drive
      };
    },
    created() {
      // Fetch user's projects from Google Drive API when the component is created
      this.fetchProjects();
    },
    methods: {
      fetchProjects() {
        // Call Google Drive API to fetch user's projects
        // Use googleDriveService.js or any other appropriate method for this
      },
      newProject() {
        //Create a project file and save to google drive
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  