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
			console.log(data)
			if(data.level == 1 || data.level == 2) {

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
			          name: 'Barang',
			          to: '/barang',
			          icon: 'cil-drop'
			        },
			        {
			        	  _name: 'CSidebarNavItem',
				          name: 'Request Barang',
				          to: '/data-request-barang',
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
			          name: 'Purchase Order',
			          to: '/po',
			          icon: 'cil-pencil'
			        },
			        {
			        	_name: 'CSidebarNavItem',
				          name: 'Order Barang',
				          to: '/po/data-order-barang',
				          icon: 'cil-pencil'
			        },
			        {
			        	_name:'CSidebarNavItem',
			        	name:'Stock In Out',
			        	to:'/stock-in-out',
			        	icon: 'cil-pencil'
			        },
			        {
			          _name: 'CSidebarNavItem',
			          name: 'User',
			          to: '/user',
			          icon: 'cil-puzzle'
			        },
			        {
			          _name: 'CSidebarNavItem',
			          name: 'Sales',
			          to: '/sales',
			          icon: 'cil-chart-pie'
			        },
			        {
			          _name: 'CSidebarNavItem',
			          name: 'Kwitansi',
			          to:'/kwitansi',
			          icon: 'cil-pencil'
			        },
			        {
			          _name: 'CSidebarNavItem',
			          name: 'Vendor',
			          to: '/vendor',
			          icon: 'cil-chart-pie'
			        },
			        {
			          _name: 'CSidebarNavItem',
			          name: 'Asset',
			          to: '/asset',
			          icon: 'cil-chart-pie'
			        },
			        {
			          _name: 'CSidebarNavItem',
			          name: 'Kurir',
			          to: '/kurir',
			          icon: 'cil-puzzle'
			        }
				]
				localStorage.setItem('menu', JSON.stringify(state.menu))
			}
			else if(data.level == 7) {
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
				          name: 'Barang',
				          to: '/barang',
				          icon: 'cil-drop'
			        },
			        {
				          _name: 'CSidebarNavItem',
				          name: 'Purchase Order',
				          to: '/po',
				          icon: 'cil-pencil'
			        }
				]
				localStorage.setItem('menu', JSON.stringify(state.menu))
			}
			else if(data.level == 6) {
				state.menu = [

			        {
				          _name: 'CSidebarNavItem',
				          name: 'Purchase Order',
				          to: '/po',
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
				          name: 'Barang',
				          to: '/barang',
				          icon: 'cil-drop'
			        },
				]
				localStorage.setItem('menu', JSON.stringify(state.menu))	
			}
			else if(data.level == 5) {
				state.menu = [

			        {
			        	  _name: 'CSidebarNavItem',
				          name: 'Request Barang',
				          to: '/data-request-barang',
				          icon: 'cil-pencil'
			        },
			        {
				          _name: 'CSidebarNavItem',
				          name: 'Barang',
				          to: '/barang',
				          icon: 'cil-drop'
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
				          icon: 'cil-pencil'
			        }
				]
				localStorage.setItem('menu', JSON.stringify(state.menu))	
			}
			else if(data.level == 4) {
				state.menu = [
					{
			          _name: 'CSidebarNavItem',
			          name: 'Stock In Out',
			          to: '/stock-in-out',
			          icon: 'cil-puzzle'
			        },
			        {
				          _name: 'CSidebarNavItem',
				          name: 'Barang',
				          to: '/barang',
				          icon: 'cil-drop'
			        }
				]
				localStorage.setItem('menu', JSON.stringify(state.menu))	
			}
			else if(data.level == 3) {
				state.menu = [

			        {
			        	  _name: 'CSidebarNavItem',
				          name: 'Purchase Order',
				          to: '/po',
				          icon: 'cil-pencil'
			        },
			        {
				          _name: 'CSidebarNavItem',
				          name: 'Karyawan',
				          to: '/karyawan',
				          icon: 'cil-drop'
			        },
			        {
				          _name: 'CSidebarNavItem',
				          name: 'Asset',
				          to: '/asset',
				          icon: 'cil-drop'
			        },
			        {
			        	  _name: 'CSidebarNavItem',
				          name: 'Kwitansi',
				          to: '/kwitansi',
				          icon: 'cil-drop'		
			        }
				]
				localStorage.setItem('menu', JSON.stringify(state.menu))	
			}

		},
		auth_error(state) {
			state.status = 'error'
		},
		logout(state) {
			state.status = ''
			state.token = ''
			localStorage.removeItem('token')
			localStorage.removeItem('token-xx')
			localStorage.removeItem('expires_in')
			localStorage.removeItem('menu')
			localStorage.removeItem('user')
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
					url:'https://young-temple-67589.herokuapp.com/api/auth/login',
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
						axios.get('https://young-temple-67589.herokuapp.com/api/auth/me', {
			              headers: {
			                'Authorization': 'bearer ' + localStorage.getItem('token'),
			                'Access-Control-Allow-Origin': '*'
			              }
			            }).then(res => {
			            	localStorage.setItem('level', res.data.level)
			            	
			            	dispatch('filterMenu', res.data)
			            	.then(() => {
			            		localStorage.setItem('user', JSON.stringify(res.data))
			            	})
			            	.then(() => {
			            		resolve(res.data)
			            	})
			            	.catch(e => {
			            		console.error('Error ASW')
			            		console.error(e.response)
			            		return false
			            	})
			            }).catch(e => reject(e))
					
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
				resolve()
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