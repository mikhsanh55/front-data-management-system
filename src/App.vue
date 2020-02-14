<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  created() {

  	let user = JSON.parse(localStorage.user), currentPath = this.$router.currentRoute.path

    if(currentPath != '/login' && currentPath != '/forgot-password') {
      	setInterval(() => {
      		fetch(localStorage.base_api + 'karyawan/' + user.id_karyawan, {
      			method:'POST',
      			headers: {
      				'Authorization': 'bearer ' + localStorage.token
      			}
      		} )
      		.then(res => {
      			if(res.status == 401) {
                  this.$router.replace('/login')              
    				return false
      			}
      		})
      		.catch(e => console.error(e))
      	}, 60000)
    }
  }
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>
