<template>
  <v-app>
    <v-main>
      <TopMenu/>
      <MainPage/>
      <BootemContent/>
    </v-main>
  </v-app>
</template>

<script>
// Pages
import MainPage from './components/MainPage.vue'

// /layout
import TopMenu from './components/common/TopMenu.vue'
import BootemContent from './components/common/BottomContent.vue'

export default {
  name: 'App',

  components: {
    MainPage,

    TopMenu,
    BootemContent
  },

  data: () => ({
    //
  }),

  methods: {
    
  }
}
</script>
