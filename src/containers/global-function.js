export function exportExcel(self, url, data, options, filename) {
	return new Promise((resolve, reject) => {
		self.$http.post(url, data, options)
		.then(res => {
			const url = URL.createObjectURL(new Blob([res.data], {
			    type: 'application/vnd.ms-excel'
			}))
			const link = document.createElement('a')
			link.href = url
			link.setAttribute('download', filename)
			document.body.appendChild(link)
			link.click()
		})
		.then(() => {
			resolve()
		})
		.catch(e => {
			reject(e)
		})
	})
		
}

export function exportPDF(self, url, options, filename, method = 'get') {
	return new Promise((resolve, reject) => {
		if(method == 'get')
			self.$http.get(url, options)
			.then(res => {
				const url = URL.createObjectURL(new Blob([res.data], {
				    type: 'application/pdf'
				}))
				const link = document.createElement('a')
				link.href = url
				link.setAttribute('download', filename)
				document.body.appendChild(link)
				link.click()
			})
			.then(() => {
				resolve()
			})
			.catch(e => {
				reject(e)
			})
		else
			self.$http.post(url, options)
			.then(res => {
				const url = URL.createObjectURL(new Blob([res.data], {
				    type: 'application/pdf'
				}))
				const link = document.createElement('a')
				link.href = url
				link.setAttribute('download', filename)
				document.body.appendChild(link)
				link.click()
			})
			.then(() => {
				resolve()
			})
			.catch(e => {
				reject(e)
			})
	})
}
export function checkPO(self) {
	return new Promise((resolve, reject) => {
		self.$http.get(localStorage.base_api + 'po', {
			headers: {
				'Authorization': 'bearer ' + localStorage.token
			}
		})
		.then(res => {
			let data = [], notif = []
			// console.log(res.data)
			for(let i = 0;i < res.data.length;i++) {
			
				let datePO = new Date(res.data[i].date_line)
				let notifPO = new Date( datePO.setDate( datePO.getDate() - 2 ) )
				data.push( {
					date:notifPO,
					data:res.data[i],
					link:'po/detail/' + res.data[i].id
				} )
				
			}

			for(let j = 0;j < data.length;j++) {
				let currentDate = new Date()
				let notifPO = new Date(data[j].date)
				if(currentDate == notifPO) {
					notif.push({
						date:data[j].date,
						data:data[j]
					})
				}
			}
			localStorage.setItem('notif', JSON.stringify(data))
			return data
		})
		.then(notif => resolve(notif))
		.catch(e => reject(e))
	})
}

export function getOrderBarang() {
	return new Promise((resolve, reject) => {
		let arr = []
		fetch(localStorage.base_api + 'order/barang/po', {
			
			headers: {
				'Authorization': 'bearer ' + localStorage.token
			}
		})
		.then(res => res.json())
		.then(res => {
			console.warn('ORDER BARANG')
			console.log(res)
			res.forEach((item, i) => {
				fetch(localStorage.base_api + 'po/' + item.id_po, {
					method:'post',
					headers: {
						'Authorization': 'bearer ' + localStorage.token
					}
				})
				.then(res => res.json())
				.then(res => {
					console.warn('PO')
					console.log(res)
				})
			})
				
		})
	})
}

// CRUD FUNCTIONS SECTION

/* digunakan untuk get data lebih dari 1 url
 *
 */
export function fetchAll(urls, options) {
	return new Promise((resolve, reject) => {
		let i = -1
		Promise.all( urls.map(url => {
			i++
			return fetch(url, options[i]) 
		}) )
		.then(res => 
			Promise.all(res.map(r => r.json()))
		)
		.then(results => {
			resolve(results)
		})
		.catch(e => reject(e))
	})
}

/* digunakan untuk get data dengan id dan data all
 *
 */
export function getDatas(self, url, options, method) {
	return new Promise((resolve, reject) => {
		fetch(url, options)
		.then(res => {
			if(res.status == 401) {
				self.$swal('Maaf sesi login kamu sudah habis', 'silahkan login lagi yah...', 'warning')
				setTimeout(() => {
					self.$swal.close()
					self.$store.dispatch('logout')
					.then(() => self.$router.replace('/login'))
				}, 1500)
				return false
			}
			else if(res.status == 500) {
				self.$swal('Tidak bisa mengambil data', 'Mohon hubungi pengembangnya...', 'error')
				setTimeout(() => {
					self.$swal.close()
				}, 1500)
				return false	
			}
			else {
				return res.json()
			}
		})
		.then(res => resolve(res))
		.catch(e => reject(e))
	})
}

export function postData(self, url, data, options) {
	return new Promise((resolve, reject) => {
		fetch(url, data, options)
		.then(res => {
			if(res.status == 401) {
				self.$swal('Maaf sesi login kamu sudah habis', 'silahkan login lagi yah...', 'warning')
				setTimeout(() => {
					self.$swal.close()
					self.$store.dispatch('logout')
					.then(() => self.$router.replace('/login'))
				}, 1500)
				return false
			}
			else if(res.status == 500) {
				self.$swal('Tidak bisa menambah data', 'Mohon hubungi pengembangnya...', 'error')
				setTimeout(() => {
					self.$swal.close()
				}, 1500)
				return false	
			}
			else {
				return res.json()
			}
		})
		.then(res => resolve(res))
		.catch(e => reject(e))
	})
}
/* digunakan untuk delete data by id
 *
 */
export function deleteData(self, url, options) {
	return new Promise((resolve, reject) => {
		fetch(url, options)
		.then(res => {
			if(res.status == 401) {
				self.$swal('Maaf sesi login kamu sudah habis', 'silahkan login lagi yah...', 'warning')
				setTimeout(() => {
					self.$swal.close()
					self.$store.dispatch('logout')
					.then(() => self.$router.replace('/login'))
				}, 1500)
				return false
			}
			else if(res.status == 500) {
				self.$swal('Tidak bisa menghapus data', 'Mohon hubungi pengembangnya...', 'error')
				setTimeout(() => {
					self.$swal.close()
				}, 1500)
				return false	
			}
			else {
				return res.json()
			}
		})
		.then(res => resolve(res))
		.catch(e => reject(e))
	})
}