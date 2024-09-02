<template>
    <div>
      <h2>{{ projectName }}</h2>
      <Whiteboard />
    </div>
  </template>
  
  <script>
  import Whiteboard from '@/components/Whiteboard.vue';
  
  // export default {
  //   name: 'Project',
  //   components: {
  //     Whiteboard
  //   },
  //   data() {
  //     return {
  //       projectId: this.$route.params.projectId,
  //       projectName: '' // Holds the name of the project
  //     };
  //   },
  //   created() {
  //     // Fetch project details (e.g., name) based on projectId
  //     // You might need to implement this logic using Google Drive API or any other method
  //     this.fetchProjectDetails();
  //   },
  //   methods: {
  //     fetchProjectDetails() {
  //       // Call a method to fetch project details based on projectId
  //       // For example, fetch project name from Google Drive based on projectId
  //     }
  //   }
  // }


  export default {
    name: 'Project',
    components: {
      Whiteboard
    }
  }
  </script>
  
  <style scoped>
  /* Add your view-specific styles here */
  </style>
  