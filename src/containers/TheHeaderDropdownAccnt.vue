<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            src="img/avatars/6.jpg"
            class="c-avatar-img "
          />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>Account</strong>
    </CDropdownHeader>
    <!-- <CDropdownItem>
      <CIcon name="cil-bell"/> Updates
      <CBadge color="info" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-envelope-open" /> Messages
      <CBadge color="success" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-task" /> Tasks
      <CBadge color="danger" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-comment-square" /> Comments
      <CBadge color="warning" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem> -->
    <!-- <CDropdownHeader
      tag="div"
      class="text-center"
      color="light"
    >
      <strong>Settings</strong>
    </CDropdownHeader> -->
    <CDropdownItem>
      <router-link to="/profile">
        <CIcon name="cil-user" /> Profil
      </router-link>
    </CDropdownItem>
    <CDropdownItem v-if="data.level == 7">
      <router-link to="/notification"  :disabled="jumlahNotif > 0 ? true : false" class="d-block w-100">
      <CIcon name="cil-bell"/> Notifikasi
      
        <CBadge :color="jumlahNotif > 0 ? 'info' : 'secondary'" class="text-right ml-4" >{{ jumlahNotif }}</CBadge>
      </router-link>
    </CDropdownItem>
    <CDropdownItem>
      <span @click="logout">
        <CIcon name="cil-lock-locked" /> Keluar
      </span>
    </CDropdownItem>
    <!-- <CDropdownItem>
      <CIcon name="cil-settings" /> Settings
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-dollar" /> Payments
      <CBadge color="secondary" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-file" /> Projects
      <CBadge color="primary" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem>
      <CIcon name="cil-shield-alt" /> Lock Account
    </CDropdownItem> -->
    
  </CDropdown>
</template>

<script>
import {checkPO} from '@/containers/global-function.js'  
export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      jumlahNotif: 0,
      data:''
    }
  },
  methods: {
    logout() {
      this.$swal({
        title: 'Kamu yakin? :(',
        text: 'Kamu akan keluar dari aplikasi yang nyaman ini',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
      .then((out) => {
        if(out) {
          this.$store.dispatch('logout')
          .then(() => this.$swal.close())
          .then(() => this.$router.replace('/login'))
        }
        else {
          this.$swal.close()
        }
      })
    }
  },
  created() {
    checkPO(this)
    .then(res => {
      this.jumlahNotif = res.length
    })
    .catch(e => console.error('Notif error ' + e))
  },
  mounted() {
      this.data = this.$store.getters.userData
      console.log(this.data)
    }
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>