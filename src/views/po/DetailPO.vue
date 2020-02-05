<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Data</b> Purchase Order
			</CCardHeader>
			<CCardBody>
				<CRow class="mx-auto d-flex justify-content-center">
					<CCol sm="8" class="mt-4">
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
								<th class="w-50">TOP</th>
								<td>{{po.jatuh_tempo}}</td>
							</tr>
							<tr>
								<th class="w-50">Keterangan</th>
								<td>{{po.keterangan}}</td>
							</tr>
							<tr>
								<th class="w-50">Tax Rate (%)</th>
								<td>{{po.tax_rate}}</td>
							</tr>
							<tr>
								<th class="w-50">Sales Fee</th>
								<td>{{po.sales_fee}}</td>
							</tr>
							<tr>
								<th class="w-50">Other Cost</th>
								<td>{{po.other}}</td>
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
								<td>
									<CSelect
			                            horizontal
			                            v-model="detailpo.status"
			                            :options="status"
			                            @update:value="assignStatus"
			                          />  
								</td>
							</tr>
							<tr>
								<th class="w-50">Sub Total</th>
								<td>Rp {{po.sub_total | formatMoney }}</td>
							</tr>
							<tr>
								<th class="w-50">Discount</th>
								<td></td>
							</tr>
							<tr>
								<th class="w-50">Sales Tax Rate</th>
								<td> {{po.sales_tax_rate}} </td>
							</tr>
							<tr>
								<th class="w-50">Grand Total</th>
								<td></td>
							</tr>
						</table>
					</CCol>
				</CRow>
				<CRow>
					<CCol sm="10" class="d-flex justify-content-end mt-4 mb-4">
						<button class="btn btn-light" @click="updateStatus"><i class="fa fa-edit mr-2"></i> {{label}} </button>
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
									<img :src="'https://young-temple-67589.herokuapp.com/' + props.row.foto" style="border-radius:50%;" />
								</div>
							</div>
						</v-client-table>
					</CCol>
				</CRow>
			</CCardBody>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	import {getDatas, getOrderBarang} from '@/containers/global-function.js'
	export default {
		name: 'DetailPO',
		data() {
			return {
				status: [],
				label: 'Update Status PO',
				data:this.$store.getters.userData,
				tableFields:['no', 'foto', 'kode_barang', 'nama_barang', 'spesifikasi'],
				tableOptions: {
					perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
			    	headings: {
			    		no:'No',
			    		foto:'Foto',
			    		kode_barang:'Kode Barang',
			    		nama_barang:'Nama Barang',
			    		spesifikasi:'Spesifikasi Barang'
			    	},
			    	sortable:['nama_barang'],
			    	filterable:['nama_barang', 'kode_barang', 'spesifikasi', 'no'],
			    	columnsClasses: {
			    		no:'text-center align-middle',
			    		foto: 'text-center align-middle',
			    		kode_barang:'align-middle',
			    		nama_barang:'align-middle',
			    		spesifikasi:'align-middle',
			    	}
				},
				po_barang:[],
				info_po:'',
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
					disc:0
				}	
			}
		},
		methods: {
			assignStatus(val) {
				this.detailpo.status = val
			},
			updateStatus() {
				this.label = 'Loading...'
				
				this.$http.post('https://young-temple-67589.herokuapp.com/api/po/edit/' + this.$route.params.id, this.detailpo, {
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
				let headers = new Headers()
				headers.append('Authorization', 'bearer ' + localStorage.token)
				let options = {
					method: 'POST',
					headers,
					redirect: 'follow'
				}

				fetch('https://young-temple-67589.herokuapp.com/api/po/' + this.$route.params.id, options)
				.then(res => res.json())
				.then(res => {
					console.log(res)
					this.po = res
					this.detailpo.status = res.status
				})
				.catch(e => {
					console.error(e)
					return false
				})
			},

		    getDataTable() {
		    	return new Promise((resolve, reject) => {
					getDatas(this, 'https://young-temple-67589.herokuapp.com/api/order/barang/po/detail/' + this.$route.params.id, {
						method:'post',
						headers: {
							'Authorization':'bearer ' + localStorage.token
						}
					}, 'post')
					.then(res => {
						let arr = []
						this.info_po = res
						this.info_po.forEach((item, i) => {
							getDatas(this, 'https://young-temple-67589.herokuapp.com/api/barang/' + item.id_barang, { method:'POST', headers:{'Authorization': 'bearer ' + localStorage.token}}, 'POST')
							.then(res => {
								
								item.nama_barang = res.nama_barang
								item.kode_barang = 
								item.spesifikasi = res.spesifikasi
								item.foto = 
								arr.push({
									no:++i,
									foto:'https://young-temple-67589.herokuapp.com/' + res.foto,
									kode_barang:res.kode_barang,
									nama_barang: res.nama_barang,
									spesifikasi: res.spesifikasi,
									stock:res.stock
								})
								this.po.sub_total += res.harga_jual
								this.po.sales_tax_rate += 0
							
							})
							
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
			formatMoney: function(amount, decimalCount = 2, decimal = ".", thousands = ",") {
			  try {
			    decimalCount = Math.abs(decimalCount);
			    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

			    const negativeSign = amount < 0 ? "-" : "";

			    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
			    let j = (i.length > 3) ? i.length % 3 : 0;

			    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
			  } catch (e) {
			    console.log(e)
			  }
			}
		},
		created() {
			this.getData()
			this.getDataTable()
			.then(res => {
				this.po_barang = res
			})

			// getOrderBarang()
			// contoh aja
			this.data = this.$store.getters.userData
			if(this.data.level == 6) {
				this.status = [
					{label: 'Request', value: 1},
					{label: 'Proses', value: 2},
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