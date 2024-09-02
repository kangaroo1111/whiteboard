// router/index.js

import {createApp} from 'vue';
import {createRouter, createMemoryHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Project from '../views/Project.vue';
import ProjectListView from '../views/ProjectListView.vue'

// const app =createApp({})


const routes = [
  { path: '/', component: Home },
  {path: '/projects', component: ProjectListView},
  { path: '/project/:projectId', component: Project, props: true }
];

const router = createRouter({
  history: createMemoryHistory(process.env.BASE_URL),
  //base: process.env.BASE_URL,
  routes
});

//app.use(router)

export default router;
