<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Detail</b> Order Barang
			</CCardHeader>
			<CCardBody>
				<CRow class="mx-auto d-flex justify-content-center">
					<CCol sm="12" md="8" class="mt-4">
						<table class="table table-bordered table-striped">
							<tr>
								<th class="w-50">Kode Barang</th>
								<td>{{order_barang.kode_barang}}</td>
							</tr>
							<tr>
								<th class="w-50">Nama Barang</th>
								<td>{{order_barang.nama_barang}}</td>
							</tr>
							<tr>
								<th class="w-50">Nama Vendor</th>
								<td>{{order_barang.nama_vendor}}</td>
							</tr>
							<tr>
								<th class="w-50">Spesifikasi</th>
								<td>{{order_barang.spesifikasi}}</td>
							</tr>
							<tr>
								<th class="w-50">Harga Jual</th>
								<td>{{order_barang.harga_jual | formatRupiah}}</td>
							</tr>
							<tr>
								<th class="w-50">Satuan</th>
								<td>{{order_barang.satuan}}</td>
							</tr>
							<tr>
								<th class="w-50">Keterangan</th>
								<td>{{order_barang.keterangan}}</td>
							</tr>
						</table>
					</CCol>
				</CRow>
			</CCardBody>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	import {getDatas} from '@/containers/global-function.js'
	export default {
		name: 'DetailOrderBarangPesanan',
		data() {
			return {
				order_barang: {},
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
		created() {
			if(localStorage.level != 1 && localStorage.level != 2) {
				this.$router.push('/')
			}
			getDatas(this, localStorage.base_api + 'order/barang/po/' + this.$route.params.id, {method:'post', headers:{'Authorization': 'bearer ' + localStorage.token}}, 'post')
			.then(res => {
				// getDatas(this, localStorage.base_api + 'barang/' + res.id_barang, {method: 'post', headers: {'Authorization' : 'bearer ' + localStorage.token}}, 'post')
				// .then(res => {
					this.order_barang = res
				// })
				// .catch(e => console.error(e))
			})
			.catch(e => console.error(e))
		}
	}
</script>