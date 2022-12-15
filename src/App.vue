<template>
  <v-app>
    <v-main>
      <TopMenu/>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TopMenu from './components/TopMenu.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
    TopMenu
  },

  data: () => ({
    //
  }),

  methods: {
    
  }
}
</script>
