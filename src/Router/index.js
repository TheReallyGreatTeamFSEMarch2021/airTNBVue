import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router)

//defining routes for web application
export default new Router({
    mode: 'history',
    routes: [
        {
            //Listing Show Page
            path: '/listings/:id',
            name: 'ListingShow',
            component: () => import('@/components/ListingShow/ListingShow')
          },
          {
            // Listing Index Page
            path: '/',
            name: 'ListingIndexPage',
            component: () => import('@/components/ListingIndex/ListingIndex')
          }
    ]
})