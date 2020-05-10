<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Detail</b> Barang
			</CCardHeader>
			<CCardBody>
				<CRow class="mx-auto d-flex justify-content-center">
					<CCol sm="12" class="mt-4 d-flex justify-content-center">
						<img :src="base_uri + product.foto" style="border-radius:50%;width:70px;height: 70px;" />
					</CCol>
				</CRow>
				<br>
				<CRow class="mx-auto d-flex justify-content-center">
					<CCol md="8" sm="12" class="mt-4">
						<table class="table table-bordered table-striped">
							<tr>
								<th class="w-50">Kode Barang</th>
								<td>{{product.kode_barang}}</td>
							</tr>
							<tr>
								<th class="w-50">Nama Barang</th>
								<td>{{product.nama_barang}}</td>
							</tr>
							<tr v-if="data.level == 1 || data.level == 2 || data.level == 5">
								<th class="w-50">Nama Vendor</th>
								<td> {{product.nama_vendor}} </td>
							</tr>
							<tr>
								<th class="w-50">Nama Instansi</th>
								<td> {{product.nama_instansi}} </td>
							</tr>
							<tr>
								<th class="w-50">Spesifikasi Barang</th>
								<td>{{product.spesifikasi}}</td>
							</tr>			
							<tr>
								<th class="w-50">Harga Jual</th>
								<td>{{product.harga_jual | formatRupiah}}</td>
							</tr>
							<tr v-if="data.level == 1 || data.level == 2 || data.level == 5">
								<th class="w-50">Harga Dasar</th>
								<td> {{product.harga_dasar | formatRupiah}} </td>
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
	import mixins from '@/mixins/currency.js'
	import {getDatas} from '@/containers/global-function.js'
	export default {
		name:'DetailListHarga',
		mixins:[mixins],
		data() {
			return {
				data:'',
				product:{
					kode_barang:null,
					nama_barang:null,
					nama_vendor:null,
					nama_instansi:null,
					spesifikasi:null,
					harga_jual:null,
					harga_dasar:null,
					satuan:null,
					keterangan:null,
					exp:null,
					stock:null
				},
				base_uri:localStorage.base_uri	
			}
		},
		filters: {
			formatRupiah(angka)  {
				let angkaToString = angka.toString().replace(/[^, \d]/g, "").toString(),
			        split = angkaToString.split(","),
			        sisa = split[0].length % 3,
			        rupiah = split[0].substr(0, sisa),
			        ribuan = split[0].substr(sisa).match(/\d{3}/gi),
			        separator = ''

			    if(ribuan && ribuan.length != null) {
			      separator = sisa ? "." : ""
			      rupiah += separator + ribuan.join(".")
			    }
			    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah

			    return rupiah
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
				getDatas(this, localStorage.base_api + 'barang/' + this.$route.params.id, options)
				.then(res => {
					
					
					getDatas(this, localStorage.base_api + 'vendors/' + res.id_vendor, options)
					.then(vendor => {
						res.nama_instansi = vendor.nama_instansi
						this.product = res
					})
					.catch(e => console.error('Nama Instansi ' + e))
				})
				.catch(e => {
					alert('Cannot get data!')
					console.log(e)
					return false
				})
			}
		},
		created() {
			if(localStorage.level == 3 ) {
				this.$router.push('/')
			}
			this.getData()
			this.data = JSON.parse(localStorage.user)
		}
	}
</script>