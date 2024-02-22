import { createRouter, createWebHistory } from "vue-router";
import HomePageVue from "./pages/HomePage.vue";
import ProjectListVue from "./pages/ProjectList.vue";
import CategoriesListVue from "./pages/CategoriesList.vue";


const router = createRouter ({
    history: createWebHistory(),
    routes : [
        {
            path:'/',
            name: '',
            component: HomePageVue
        },
        {
            path:'/Project',
            name: 'ProjectList',
            component: ProjectListVue
        },
        {
            path:'/Categories',
            name: 'Categories',
            component: CategoriesListVue
        }



    ]



});


export {router}