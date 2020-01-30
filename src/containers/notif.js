export default class Notif {

	constructor() {
		this.notif = []
		localStorage.setItem('notif', JSON.stringify(this.notif))
	}

	dispatch() {
		return localStorage.notif
	}

	add(obj) {
		let ntf = JSON.parse(localStorage.getItem('notif'))
		ntf.push(obj)
		localStorage.setItem('notif', JSON.stringify(ntf))
	}

	remove(obj) {
		let ntf = JSON.parse(localStorage.getItem('notif'))
		ntf.splice(obj.index - 1, 1)
		localStorage.setItem('notif', JSON.stringify(ntf))
		return localStorage.notif
	}
}