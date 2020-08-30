<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      v-c-emit-root-event:toggle-sidebar-mobile
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      v-c-emit-root-event:toggle-sidebar
    />
    <CHeaderBrand
      class="mx-auto d-lg-none pt-2 pd-2" 
      src="img/brand/icommits.png"
      width="36"
      height="36"
      alt="Icommits Logo"
    />
    
    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/dashboard">
          Dashboard
        </CHeaderNavLink>
      </CHeaderNavItem>
      <!-- <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/users" exact>
          Users
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink>
          Settings
        </CHeaderNavLink>
      </CHeaderNavItem> -->
    </CHeaderNav>
    <CHeaderNav class="mr-4" >
      <!-- <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/dashboard">
          Dashboard
        </CHeaderNavLink>
        
      </CHeaderNavItem> -->
      
      <CHeaderNavItem class="d-md-down-none mx-2" v-if="data.level == 7">
        <CHeaderNavLink to="/notification">
          <span v-if="jumlahNotif > 0" class="badge badge-primary rounded-circle">{{jumlahNotif}}</span>
          <CIcon name="cil-bell" />
        </CHeaderNavLink>
      </CHeaderNavItem>
      <TheHeaderDropdownAccnt/>
      <!--<CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-list"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-envelope-open"/>
        </CHeaderNavLink>
      </CHeaderNavItem> -->
    </CHeaderNav>
    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0"/>
    </CSubheader>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'
import {checkPO, getDatas} from '@/containers/global-function.js'  
export default {
  name: 'TheHeader',
  data() {
    return {
      data: JSON.parse(localStorage.user),
      jumlahNotif: 0
    }
  },
  components: {
    TheHeaderDropdownAccnt
  },
  created () {
    checkPO(this)
    .then(notif => {
      this.jumlahNotif = notif.length
    })
    .catch(e => {
      if(e.response)
        console.error(e.response)
    })
  }
}
</script>
<style type="text/css" scoped>
  .c-header {
    display: flex;
    justify-content: flex-end;
  }
  .c-header-nav {
  }
</style>