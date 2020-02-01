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

export function getDatas(self, url, options, method) {
	return new Promise((resolve, reject) => {
		fetch(url, options)
		.then(res => res.json())
		.then(res => resolve(res))
		.catch(e => reject(e))
	})
}

export function checkPO(self) {
	return new Promise((resolve, reject) => {
		self.$http.get('https://young-temple-67589.herokuapp.com/api/po', {
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
					link:'/po/' + res.data[i].id
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
			localStorage.setItem('notif', JSON.stringify(notif))
			return notif
		})
		.then(notif => resolve(notif))
		.catch(e => reject(e))
	})
}

export function getOrderBarang() {
	return new Promise((resolve, reject) => {
		let arr = []
		fetch('https://young-temple-67589.herokuapp.com/api/order/barang/po', {
			
			headers: {
				'Authorization': 'bearer ' + localStorage.token
			}
		})
		.then(res => res.json())
		.then(res => {
			console.warn('ORDER BARANG')
			console.log(res)
			res.forEach((item, i) => {
				fetch('https://young-temple-67589.herokuapp.com/api/po/' + item.id_po, {
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