<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Detail</b> Barang
			</CCardHeader>
			<CCardBody>
				<CRow class="mx-auto d-flex justify-content-center">
					<CCol sm="12" class="mt-4">
						<div v-if="product.foto" class="mx-auto d-flex justify-content-center">
							<img :src="product.foto" style="border-radius:50%;width:70px;height: 70px;" />
						</div>
						<div v-else class="mx-auto d-flex justify-content-center">
							<img class="img-thumbnail" src="./../../assets/img/avatar/default.svg" style="border-radius:50%;width:70px;height: 70px;" />
						</div>
					</CCol>
				</CRow>
				<br>
				<CRow class="mx-auto d-flex justify-content-center">
					<CCol sm="8" class="mt-4">
						<table class="table table-bordered table-striped">
							<tr>
								<th class="w-50">Kode Barang</th>
								<td>{{product.kode_barang}}</td>
							</tr>
							<tr>
								<th class="w-50">Nama Barang</th>
								<td>{{product.nama_barang}}</td>
							</tr>
							<tr>
								<th class="w-50">Nama Vendor</th>
								<td> {{product.nama_vendor}} </td>
							</tr>
							<tr>
								<th class="w-50">Spesifikasi Barang</th>
								<td>{{product.spesifikasi}}</td>
							</tr>	
							<tr>
								<th class="w-50">Harga Jual</th>
								<td>{{product.harga_jual}}</td>
							</tr>
							<tr>
								<th class="w-50">Harga Dasar</th>
								<td> {{product.harga_dasar}} </td>
							</tr>
							<tr>
								<th class="w-50">Satuan</th>
								<td> {{product.satuan}} </td>
							</tr>
							<tr>
								<th class="w-50">Keterangan</th>
								<td> {{product.keterangan}} </td>
							</tr>
							<tr>
								<th class="w-50">Tanggal Kadaluwarsa</th>
								<td> {{product.exp}} </td>
							</tr>
							<tr>
								<th class="w-50">Stock</th>
								<td> {{product.stock}} </td>
							</tr>
						</table>
					</CCol>
				</CRow>
			</CCardBody>
		</CCard>
		
			
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'DetailListHarga',
		data() {
			return {
				product:[]	
			}
		},
		methods: {
			getData() {
				let headers = new Headers()
				headers.append('Authorization', 'bearer ' + localStorage.getItem('token'))
				headers.append('Access-Control-Allow-Origin', '*')
				headers.append('Access-Control-Allow-Methods', '*')
				headers.append('Access-Control-Allow-Headers', '*')
				let options = {
					method:'POST',
					headers,
					redirect:'follow'
				}
				fetch('https://young-temple-67589.herokuapp.com/api/barang/' + this.$route.params.id, options)
				.then(res => res.json())
				.then(res => {
					console.log(res)
					this.product = res
				})
				.catch(e => {
					alert('Cannot get data!')
					console.log(e)
					return false
				})
				// this.$http.post('https://young-temple-67589.herokuapp.com/api/barang/' + this.$route.params.id, {
				// 	headers: {
				// 		'Authorization':'bearer ' + localStorage.getItem('token')
				// 	},
				// 	redirect:'follow'
				// })
				// .then(res => {
				// 	this.product = res.data
				// 	console.log(res)
				// })
				// .catch(e => {
				// 	console.log(e)
				// })
			}
		},
		filters: {
			// formatRupiah: function(angka, prefix){
			// 	let number_string = angka.toString().replace(/[^,\d]/g, ''),
			// 	split   		= number_string.split(','),
			// 	sisa     		= split[0].length % 3,
			// 	rupiah     		= split[0].substr(0, sisa),
			// 	ribuan     		= split[0].substr(sisa).match(/\d{3}/gi),
			// 	separator ='';
	 
			// 	// tambahkan titik jika yang di input sudah menjadi angka ribuan
			// 	if(ribuan){
			// 		separator = sisa ? '.' : '';
			// 		rupiah += separator + ribuan.join('.');
			// 	}
	 
			// 	rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
			// 	return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
			// }
		},
		created() {
			this.getData()
		}
	}
</script>