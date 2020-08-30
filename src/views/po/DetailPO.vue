<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Data</b> Purchase Order
			</CCardHeader>
			<CCardBody>
				<CRow class="mx-auto d-flex justify-content-center">
					<CCol md="8" sm="12" class="mt-4">
						<table class="table table-bordered table-striped">
							<tr>
								<th class="w-50">Nama Sales</th>
								<td>{{po.nama_sales}}</td>
							</tr>
							<tr>
								<th class="w-50">Nama Konsumen</th>
								<td>{{po.nama_konsumen}}</td>
							</tr>
							<tr>
								<th class="w-50">Nama Kurir</th>
								<td>{{po.nama_kurir}}</td>
							</tr>
							<tr>
								<th class="w-50">No PO</th>
								<td>{{po.no_po}}</td>
							</tr>
							<tr>
								<th class="w-50">Tanggal PO Masuk</th>
								<td>{{po.tgl_po_masuk}}</td>
							</tr>
							<tr>
								<th class="w-50">Tanggal PO</th>
								<td>{{po.date}}</td>
							</tr>
							<tr>
								<th class="w-50">Tanggal Pengiriman</th>
								<td>{{po.date_line}}</td>
							</tr>
							<tr>
								<th class="w-50">Tanggal Kontrabon</th>
								<td>{{po.jatuh_tempo}}</td>
							</tr>
							<tr>
								<th class="w-50">Keterangan</th>
								<td>{{po.keterangan}}</td>
							</tr>
							
							<tr>
								<th class="w-50">No Surat Jalan</th>
								<td>{{po.no_surat_jalan}}</td>
							</tr>
							<tr>
								<th class="w-50">No Invoice</th>
								<td>{{po.no_invoice}}</td>
							</tr>
							<tr>
								<th class="w-50">Catatan</th>
								<td>{{po.catatan}}</td>
							</tr>
							<tr>
								<th class="w-50">Status</th>
								<td v-if="detailpo.status != 4">
									<CSelect
			                            horizontal
			                            v-model="detailpo.status"
			                            :options="status"
			                            @update:value="assignStatus"
			                          />  
								</td>
								<td v-else>
									Sukses
								</td>
							</tr>
							
						</table>
					</CCol>
				</CRow>
				<CRow>
					<CCol md="10" sm="12" class="d-flex justify-content-end mt-4 mb-4">
						<button class="btn btn-primary" @click="updateStatus"><i class="fa fa-edit mr-2"></i> {{label}} </button>
					</CCol>
					
				</CRow>
				<hr class="text-center w-75">
				<br>
				<CRow>
					<CCol sm="12">
						<v-client-table
						:data="po_barang"
						:columns="tableFields"
						:options="tableOptions"
						id="barang_tables"
						 class="m-4"
						>
							<div slot="foto" slot-scope="props">
								<div class="mx-auto d-flex justify-content-center">
									<img :src="'https://api.sabalkes.com/' + props.row.foto" style="border-radius:50%;" width="50" height="50" />
								</div>
								<div slot="harga_jual" slot-scope="props">
									{{props.row.harga_jual | formatRp}}
								</div>
								<div slot="qty" slot-scope="props">
									{{props.row.qty}}
								</div>
								<div slot="total" slot-scope="props">
									{{props.row.total | formatRp}}
								</div>
							</div>
						</v-client-table>
						<div class="d-flex justify-content-end">
						<div></div>	
						<table class="table table-bordered table-striped m-2 mr-3 justify-content-end w-50">
							<tr>
								<th class="w-50 text-right">Sub Total</th>
								<td>{{po.sub_total | formatRp}}</td>
							</tr>
							<tr>
								<th class="w-50 text-right" >Discount</th>
								<td>{{po.disc}}</td>
							</tr>
							<tr>
								<th class="w-50 text-right">Tax Rate (%)</th>
								<td>{{po.tax_rate | formatRp}}</td>
							</tr>
							<tr>
								<th class="w-50 text-right">Sales Fee</th>
								<td>{{po.sales_fee | formatRp}}</td>
							</tr>
							<tr>
								<th class="w-50 text-right">Other Cost</th>
								<td>{{po.other | formatRp}}</td>
							</tr>
							<tr>
								<th class="w-50 text-right" >Grand Total</th>
								<td>{{ (po.sub_total - po.disc + po.tax_rate + po.sales_fee + po.other) | formatRp}}</td>
							</tr>
						</table>
						</div>
					</CCol>
				</CRow>
			</CCardBody>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	import {getDatas, getOrderBarang} from '@/containers/global-function.js'
	import mixins from '@/mixins/currency.js'
	export default {
		name: 'DetailPO',
		mixins:[mixins],
		data() {
			return {
				status: [],
				label: 'Update Status PO',
				data:this.$store.getters.userData,
				tableFields:['no', 'foto', 'kode_barang', 'nama_barang', 'spesifikasi', 'harga_jual', 'qty', 'disc', 'tax', 'total'],
				tableOptions: {
					perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
			    	headings: {
			    		no:'No',
			    		foto:'Foto',
			    		kode_barang:'Kode Barang',
			    		nama_barang:'Nama Barang',
			    		spesifikasi:'Spesifikasi Barang',
			    		harga_jual: 'Harga Jual',
			    		qty: 'Kuantitas',
			    		disc: 'Diskon',
			    		tax: 'Tax',
			    		total: 'Total'
			    	},
			    	sortable:['nama_barang', 'qty'],
			    	filterable:['nama_barang', 'kode_barang', 'spesifikasi', 'harga_jual', 'no', 'disc', 'tax', 'total', 'qty'],
			    	columnsClasses: {
			    		no:'text-center align-middle',
			    		foto: 'text-center align-middle',
			    		kode_barang:'align-middle',
			    		nama_barang:'align-middle',
			    		spesifikasi:'align-middle',
			    		harga_jual: 'align-middle',
			    		qty: 'text-center align-middle',
			    		disc:'align-middle',
			    		tax:'align-middle',
			    		total:'align-middle'
			    	}
				},
				po_barang:[],
				info_po:[],
				info_barang_po:[],
				detailpo: {
					status:2,
					level:0
				},
				po:{
					nama_sales:null,
					nama_konsumen:null,
					nama_kurir:null,
					no_po:null,
					date:null,
					date_line:null,
					jatuh_tempo: null,
					keterangan:null,
					tax_rate: null,
					sales_fee:null,
					other: null,
					no_surat_jalan: null,
					no_invoice: null,
					status:null,
					catatan: null,
					tgl_po_masuk: null,
					sub_total:0,
					sales_tax_rate:0,
					disc:0,
					tax:0,
					grand_total:0
				}	
			}
		},
		methods: {
			assignStatus(val) {
				this.detailpo.status = val
			},
			updateStatus() {
				this.label = 'Loading...'
				
				this.$http.post(localStorage.base_api + 'po/edit/' + this.$route.params.id, this.detailpo, {
		            headers: {
		              'Authorization': 'bearer ' + localStorage.token
		            },
		            redirect:'follow'
		        })
		        .then(() => {
		        	this.label = 'Update Status PO'
		        	this.$swal('Status berhasil diupdate', 'Mohon tunggu sebentar...', 'success')
		        	setTimeout(() => this.$swal.close(), 1500)
		        	this.getData()
		        })	
		        .catch(e => {
		        	this.label = 'Update Status PO'
		        	console.error(e)
		        	this.$swal('Status gagal diupdate', 'Hubungi pengembangnya...', 'error')
		        	setTimeout(() => this.$swal.close, 1500)
		        	return false
		        })
			},
			getData() {
				getDatas(this, localStorage.base_api + 'po/' + this.$route.params.id, {
					method: 'POST',
					headers: {
						'Authorization' :'bearer ' + localStorage.token
					},
					redirect: 'follow'
				}, 'post')
				.then(res => {
					this.po = res
					this.po.sub_total = 0
					this.po.sales_tax_rate = 0
					this.po.disc = 0
					this.po.tax = 0
					this.po.tax_rate = 0
					this.po.grand_total = 0
					this.detailpo.status = res.status
					getDatas(this, localStorage.base_api + 'karyawan/' + res.id_kurir, {
						method: 'POST',
						headers: {
							'Authorization' : 'bearer ' + localStorage.token
						},
						redirect: 'follow'
					}, 'post')
					.then(res => {
						this.po.nama_kurir = res.nama_karyawan
					})
				})
				.catch(e => {
					console.error(e)
					return false
				})
			},
		    getDataTable() {
		    	return new Promise((resolve, reject) => {
					getDatas(this,localStorage.base_api + 'order/barang/po/detail/' + this.$route.params.id, {
						method:'post',
						headers: {
							'Authorization':'bearer ' + localStorage.token
						}
					}, 'post')
					.then(res => {
						let arr = []
						this.info_po = res
						// this.po.sub_total = 0
						// this.po.disc = 0
						// this.po.tax = 0
						// this.po.sales_tax_rate = 0
						// this.po.grand_total = 0
						this.info_po.forEach((item, i) => {
							let hargaJual = item.harga_jual === null ? 0 : item.harga_jual
							let total = item.qty * hargaJual, 
							disc = item.disc,
							tax = item.tax,
							hsd = (item.harga * item.qty) - (item.harga * (item.disc/100) * item.qty)
							arr.push({
								no:++i,
								total:this.toRupiah(total),
								disc: disc,
								qty:item.qty,
								tax: tax,
								foto:item.foto,
								kode_barang:item.kode_barang,
								nama_barang: item.nama_barang,
								spesifikasi: item.spesifikasi,
								harga_jual: this.toRupiah(hargaJual)
							})
							this.po.sub_total += parseInt(total) 
							this.po.disc += parseInt(item.harga_jual * item.qty * (disc/100))
							this.po.tax_rate += parseInt(hsd * (item.tax/100))
						})

						resolve(arr)
						// this.$http.post('https://young-temple-67589.herokuapp.com/api/barang/' + res.data.id_barang, {
						// 	headers: {
						// 		'Authorization': localStorage.token
						// 	}
						// })
						// .then(res => {
						// 	this.hasil.push(res.data)
						// 	resolve(this.hasil)
						// })
						// .catch(e => {
						// 	reject(e)
						// })
					})
					.catch(e => {
						reject(e)
					})	
		    	})
		    },
		},
		filters: {
			formatRp(angka)  {
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
			if(localStorage.level == 5 || localStorage.level == 4) {
				this.$router.push('/')
			}

			this.getData()
			this.getDataTable()
			.then(res => {
				console.warn(res)
				this.po_barang = res
			})

			// getOrderBarang()
			// contoh aja
			this.data = JSON.parse(localStorage.user)
			if(this.data.level == 6) {
				this.status = [
					{label: 'Request', value: 1},
					{label: 'Proses', value: 2},
					{label: 'Batal', value: 5},
				]
				this.detailpo.level = 6
			}
			else if(this.data.level == 3) {
				this.status = [
					{label: 'Request', value: 1},
					{label: 'Pengiriman', value: 3},
					{label: 'Selesai', value: 4}
				]
				this.detailpo.level = 3
			}
			else {
				this.status = [
					{label: 'Request', value: 1},
					{label: 'Proses', value: 2},
					{label: 'Pengiriman', value: 3},
					{label: 'Selesai', value: 4},
					{label: 'Batal', value: 5},
				]
				this.detailpo.level = this.data.level	
			}
		}
	}	

</script>
<style type="text/css">
	#barang_tables .form-inline label {
		display: none;	
	}
</style>