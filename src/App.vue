<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  created() {

  	let user = JSON.parse(localStorage.user), currentPath = this.$router.currentRoute.path
    if(currentPath != '/login' && currentPath != '/forgot-password')
      	setInterval(() => {
      		fetch(localStorage.base_api + 'karyawan/' + user.id_karyawan, {
      			method:'POST',
      			headers: {
      				'Authorization': 'bearer ' + localStorage.token
      			}
      		} )
      		.then(res => {
      			if(res.status == 401) {
      				this.$swal('Maaf sesi login kamu sudah habis', 'silahkan login lagi yah...', 'warning')
    				setTimeout(() => {
    					this.$swal.close()
    					this.$store.dispatch('logout')
    					.then(() => {
                if(currentPath != '/login')
                  this.$router.replace('/login')
              
              })
    				}, 1500)
    				return false
      			}
      		})
      		.catch(e => console.error(e))
      	}, 60000)
  }
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>
