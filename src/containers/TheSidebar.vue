<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show.sync="show"
  >
    <CSidebarBrand 
      :imgFull="{ width: 118, height: 36, alt: 'Logo', src: 'img/brand/ALKES.png'}"
      :imgMinimized="{ width: 118, height: 36, alt: 'Logo', src: 'img/brand/ALKES.png'}"
      :wrappedInLink="{ href: '/', target: '_self'}"
      class="pt-3 pb-3"
    />
    <CRenderFunction flat :content-to-render="nav"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="minimize = !minimize"
    />
  </CSidebar>
</template>
  
<script>
import nav from './_nav.js'
export default {
  name: 'TheSidebar',
  data () {
    return {
      menu:JSON.parse(localStorage.menu),
      minimize: false,
      nav: [{
        _name:'CSidebarNav',
        _children:JSON.parse(localStorage.menu)
      }],
      show: 'responsive'
    }
  },
  mounted () {
    
    this.$root.$on('toggle-sidebar', () => {
      const sidebarOpened = this.show === true || this.show === 'responsive'
      this.show = sidebarOpened ? false : 'responsive'
    })
    this.$root.$on('toggle-sidebar-mobile', () => {
      const sidebarClosed = this.show === 'responsive' || this.show === false
      this.show = sidebarClosed ? true : 'responsive'
    })
  },
}
</script>
