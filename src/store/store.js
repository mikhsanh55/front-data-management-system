import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
let store = new Vuex.Store({
	state: {
		status: '',
		token: localStorage.getItem('token') || undefined,
		token_expired: '',
		user: [],
		data:[],
		menu: []
	},
	mutations: {
		auth_request(state) {
			state.status = 'loading'
		},
		auth_success(state, data) {
			state.status = 'success'
			state.user = data
			if(localStorage.level == 1 || localStorage.level == 2) { //Direktur dan Manager

				state.menu = [
					{
				        _name: 'CSidebarNavItem',
				        name: 'Dashboard',
				        to: '/dashboard',
				        icon: 'cil-speedometer',
				        badge: {
				          color: 'info',
				          text: 'INFO'
				  	   }
			        },
					{ // Menu Marketing
					_name: 'CSidebarNavTitle', 
					_children:['Marketing']
					},
					{
			          _name: 'CSidebarNavItem',
			          name: 'Purchase Order',
			          to: '/po',
			          icon: 'cil-dollar'
			        },
			        {
			          _name: 'CSidebarNavItem',
			          name: 'Sales',
			          to: '/sales',
			          icon: 'cil-user'
			        },
			        {
			          _name: 'CSidebarNavItem',
			          name: 'Konsumen',
			          to: '/konsumen',
			          icon: 'cil-user'
			        },
			        {
			          _name: 'CSidebarNavItem',
			          name: 'Data Stok Barang',
			          to: '/barang',
			          icon: 'cil-layers'
			        },
			        { // Menu Gudang Logistik
			        	_name: 'CSidebarNavTitle', 
						_children:['Gudang Logistik']
			        },
				        {
				          _name:'CSidebarNavItem',
				          name:'Stock In Out',
				          to:'/stock-in-out',
				          icon: 'cil-pencil'
				        },
			            {
			        	  _name: 'CSidebarNavItem',
				          name: 'Request Barang',
				          to: '/data-request-barang',
				          icon: 'cil-pencil'
				        },
				        {
				          _name: 'CSidebarNavItem',
				          name: 'Data Stok Barang',
				          to: '/barang',
				          icon: 'cil-layers'
				        },	
				        {
				          _name: 'CSidebarNavItem',
				          name: 'Purchase Order',
				          to: '/po',
				          icon: 'cil-dollar'
				        },
			        { // Menu Pengadaan/Pembeliaan
			          _name: 'CSidebarNavTitle', 
					  _children:['Pengadaan/Pembeliaan']
			        },
				        {
				          _name: 'CSidebarNavItem',
				          name: 'Data Stok Barang',
				          to: '/barang',
				          icon: 'cil-layers'
				        },
				        {
				          _name: 'CSidebarNavItem',
					      name: 'Order Barang',
					      to: '/po/data-order-barang',
					      icon: 'cil-pencil'
				        },
				        {
				          _name:'CSidebarNavItem',
				          name:'Barang Pesanan',
				          to:'/barang-pesanan',
				          icon: 'cil-pencil'
				        },
				        {
				          _name: 'CSidebarNavItem',
				          name: 'Vendor',
				          to: '/vendor',
				          icon: 'cil-puzzle'
				        },
				        {
			        	  _name: 'CSidebarNavItem',
				          name: 'Request Barang',
				          to: '/data-request-barang',
				          icon: 'cil-pencil'
				        },
			        {
			          _name: 'CSidebarNavTitle',
			          _children:['Admin Umum']
			        },
				        {
				          _name: 'CSidebarNavItem',
				          name: 'Purchase Order',
				          to: '/po',
				          icon: 'cil-dollar'
				        },
				        {
				          _name: 'CSidebarNavItem',
				          name: 'Kwitansi',
				          to: '/kwitansi',
				          icon: 'cil-file'
				        },
				        {
				          _name: 'CSidebarNavItem',
				          name: 'Kurir',
				          to: '/kurir',
				          icon: 'cil-cursor'
				        },
			        {
			          _name: 'CSidebarNavTitle',
			          _children: ['Management Office']
			        },
				        {
				          _name: 'CSidebarNavItem',
				          name: 'Karyawan',
				          to: '/karyawan',
				          icon: 'cil-user'
				        },
				        {
				          _name: 'CSidebarNavItem',
				          name: 'User',
				          to: '/user',
				          icon: 'cil-people'
				        },
				        {
				          _name: 'CSidebarNavItem',
				          name: 'Asset',
				          to: '/asset',
				          icon: 'cil-file'
				        }
			        
				]
				localStorage.setItem('menu', JSON.stringify(state.menu))
			}
			else if(localStorage.level == 7) { //Marketing
				state.menu = [

					{
				        _name: 'CSidebarNavItem',
				        name: 'Dashboard',
				        to: '/dashboard',
				        icon: 'cil-speedometer',
					        badge: {
					          color: 'primary',
					          text: 'NEW'
					        }
				        },
			        {
				        _name: 'CSidebarNavItem',
				        name: 'Konsumen',
				        to: '/konsumen',
				        icon: 'cil-user'
			        },
			        {
				          _name: 'CSidebarNavItem',
				          name: 'Karyawan',
				          to: '/karyawan',
				          icon: 'cil-user'
			        },
			        {
				          _name: 'CSidebarNavItem',
				          name: 'Data Stok Barang',
				          to: '/barang',
				          icon: 'cil-layers'
			        },
			        {
				          _name: 'CSidebarNavItem',
				          name: 'Purchase Order',
				          to: '/po',
				          icon: 'cil-dollar'
			        }
				]
				localStorage.setItem('menu', JSON.stringify(state.menu))
			}
			else if(localStorage.level == 6) { // SPV
				state.menu = [

			        {
				          _name: 'CSidebarNavItem',
				          name: 'Purchase Order',
				          to: '/po',
				          icon: 'cil-dollar'
			        },
			        {
			        	  _name: 'CSidebarNavItem',
				          name: 'Request Barang',
				          to: '/data-request-barang',
				          icon: 'cil-pencil'
			        },
			        {
				          _name: 'CSidebarNavItem',
				          name: 'Data Stok Barang',
				          to: '/barang',
				          icon: 'cil-layers'
			        },
				]
				localStorage.setItem('menu', JSON.stringify(state.menu))	
			}
			else if(localStorage.level == 5) { // Pembelian
				state.menu = [

			        {
			        	  _name: 'CSidebarNavItem',
				          name: 'Request Barang',
				          to: '/data-request-barang',
				          icon: 'cil-pencil'
			        },
			        {
				          _name: 'CSidebarNavItem',
				          name: 'Data Stok Barang',
				          to: '/barang',
				          icon: 'cil-layers'
			        },
			        {
			        	_name:'CSidebarNavItem',
			        	name:'Barang Pesanan',
			        	to:'/barang-pesanan',
			        	icon: 'cil-pencil'
			        },
			        {
				          _name: 'CSidebarNavItem',
				          name: 'Vendor',
				          to: '/vendor',
				          icon: 'cil-puzzle'
			        }
				]
				localStorage.setItem('menu', JSON.stringify(state.menu))	
			}
			else if(localStorage.level == 4) { // Admin Stok
				state.menu = [
					{
			          _name: 'CSidebarNavItem',
			          name: 'Stock In Out',
			          to: '/stock-in-out',
			          icon: 'cil-puzzle'
			        },
			        {
			          _name: 'CSidebarNavItem',
			          name: 'Data Stok Barang',
			          to: '/barang',
			          icon: 'cil-layers'
			        }
				]
				localStorage.setItem('menu', JSON.stringify(state.menu))	
			}
			else if(localStorage.level == 3) { // Admin Umum
				state.menu = [

			        {
			        	  _name: 'CSidebarNavItem',
				          name: 'Purchase Order',
				          to: '/po',
				          icon: 'cil-dollar'
			        },
			        {
			        	  _name: 'CSidebarNavItem',
				          name: 'Kwitansi',
				          to: '/kwitansi',
				          icon: 'cil-file'		
			        }
				]
				localStorage.setItem('menu', JSON.stringify(state.menu))	
			}

		},
		auth_error(state) {
			state.status = 'error'
		},
		logout(state) {
			fetch(localStorage.base_api + 'auth/logout', {
				method:'post',
				headers: {
					'Authorization':'bearer ' + localStorage.token
				},
				redirect:'follow'
			})
			.then(res => {
				if(res.status == 200) {
					return res.json()		
				}
				else {
					console.error('Cannot logout')
					return false
				}
			})
			.then(res => {
				localStorage.removeItem('token')
				localStorage.removeItem('token-xx')
				localStorage.removeItem('expires_in')
				localStorage.removeItem('menu')
				localStorage.removeItem('user')
				localStorage.removeItem('level')
				localStorage.removeItem('notif')
				var cookies = document.cookie.split(";");
			    for (var i = 0; i < cookies.length; i++) {
			        var cookie = cookies[i];
			        var eqPos = cookie.indexOf("=");
			        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
			        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
			    }
				state.status = ''
				state.token = ''
			}).catch(e => {
				if(e.response) {
					console.error(e.response.data.message)
				}
			})
		},
		assign(state, data) {
			state.data = data
		},
		setTokenExpired(state, dateObj) {
			state.token_expired = dateObj
			localStorage.setItem('token-xx', state.token_expired)
		}
	},
	actions: {
		create_menu({commit}, user) {
			return new Promise((resolve, reject) => {
				try {
					commit('c_menu', user)
					resolve()
				}
				catch(e) {
					reject(e)
				}
			})
		},
		get_userdata({commit}, user) {
			return new Promise((resolve, reject) => {
				try {
					commit('auth_success', user)
					resolve(user)
				}
				catch(e) {
					reject(e)
				}

			})
		},
		filterMenu({commit}, data) {
			return new Promise((resolve, reject) => {
				commit('auth_success', data)
				setTimeout(function() {
					resolve()
				}, 2000)
			})
		},
		login({commit, dispatch}, user) {
			return new Promise((resolve, reject) => {
				commit('auth_request')
				axios({
					url:localStorage.base_api + 'auth/login',
					data:user,
					method: 'POST'
				})
				.then(res => {
					res = res.data
					const exp = res.expires_in
					const t = res.access_token
					localStorage.setItem('token', t)
					localStorage.setItem('expires_in', exp)
					if(localStorage.getItem('expires_in') != '')
						Date.prototype.addHours = function(h) {
							this.setHours(this.getHours() + h)
							return this
						}
						commit('setTokenExpired', new Date().addHours( localStorage.getItem('expires_in') / 3600 ))
						
			            fetch(localStorage.base_api + 'auth/me', {
			              headers: {
			                'Authorization': 'bearer ' + localStorage.getItem('token'),
			                'Access-Control-Allow-Origin': '*'
			              }
			            })
			            .then(res => {
			            	if(res.status == 200) {
			            		return res.json()
			            	}
			            	else {
			            		this.$swal('Tidak bisa login', 'Mohon hubungi pengembangnya', 'error')
			            		setTimeout(() => this.$swal.close(), 1500)
			            		return false
			            	}
			            })
			            .then(res => {
			            	localStorage.setItem('level', res.level)
			            	
			            	dispatch('filterMenu', res)
			            	.then(() => {
			            		localStorage.setItem('user', JSON.stringify(res))
			            	})
			            	.then(() => {
			            		resolve(res)
			            	})
			            	.catch(e => {
			            		console.error('Error ASW')
			            		console.error(e.response)
			            		return false
			            	})
			            }).catch(function (e) {
							reject(e)
			            } )
					
				})
				.catch(err => {
					commit('auth_error')
					localStorage.removeItem('token')
					reject(err)
				})
			})
		},
		logout({commit}) {
			return new Promise((resolve, reject) => {
				
				commit('logout')
				setTimeout(() => {
					resolve()	
				}, 1500)
				
			})
		},
		fetchUser({commit}) {
			return new Promise((res) => {
				res()
			})
		}
	},
	getters: {
		isLoggedIn : state => !!state.token,
		authStatus : state => state.status,
		userData : state => state.user,
		menu : state => state.menu
	}
})
export default store