<template>
  <q-layout view="lHh Lpr lFf">
    <q-header >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
     </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div  class="text-h3 ml-3"> RFLP </div>      
        <div  class="text-subtitle"> Hikousen Label Print system</div>
        <div  class="text-subtitle"> {{ todaysDate }}</div>
      </div>

    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item
              to="/"
              exact 
              clickable 
              v-ripple>
              <q-item-section avatar>
                <q-icon name="check" />
              </q-item-section>

              <q-item-section>
                todo
              </q-item-section>
            </q-item>

            <q-item
              to="/help" 
              exact 
              clickable 
              v-ripple>
              <q-item-section avatar>
                <q-icon name="help" />
              </q-item-section>

              <q-item-section>
                Help
              </q-item-section>
            </q-item>

            <q-item
              to="/ajax" 
              exact 
              clickable 
              v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                Ajax
              </q-item-section>
            </q-item>

            <q-item
              to="/sqljs" 
              exact 
              clickable 
              v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                SqlJs
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="80px" class="q-mb-sm">
              <img src="~assets/animal_kaeru.png">
            </q-avatar>
            <div class="text-weight-bold">satoshi ono </div>
            <div>@gamasenninn</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
        <router-view v-slot="{Component}">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
    </q-page-container>

</q-layout>
</template>


<script>
import { defineComponent, ref } from 'vue'
//import EssentialLink from 'components/EssentialLink.vue'
import { date } from 'quasar'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    //EssentialLink
  },
  computed:{
    todaysDate(){
      //return "2022-01-01"
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'YYYY-MM-DD HH:mm:ss')
    }
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
