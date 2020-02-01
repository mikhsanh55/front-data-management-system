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