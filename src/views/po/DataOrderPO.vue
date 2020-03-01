<template>
	<div>
		<CRow>
			<CCard class="w-100">
				<CCardHeader>
					<b>Data</b> Order Barang
				</CCardHeader>
				<CCardBody>
					<CRow>
						<CCol sm="12">
							<button @click="modal = true" class="float-right mb-4 ml-2 btn btn-success"><small> <i class="fa fa fa-file-excel-o mr-1"></i> Export .xlsx</small></button>		

							<v-client-table
							:data="dataOrder"
							:columns="tableFields"
							:options="tableOptions"
							id="order_po_table"

							>
								<div slot="aksi" slot-scope="props">
									<div v-if="data.level != 2">
										<router-link :to="'/po/data-order-barang/detail/'+props.row.id" class="btn btn-dark btn-sm">
											Detail
										</router-link>
									</div>
								</div>
							</v-client-table>
						</CCol>
					</CRow>
				</CCardBody>
			</CCard>
		</CRow>
		<CModal
	      :show.sync="modal"
	      :no-close-on-backdrop="true"
	      title="Export Data ke Excel"
	      size="sm"
	      color="dark"
	    >	
	      <CInput
		      type="date"
		      label="Dari"
		      horizontal
		      v-model="date.from"
	       />	
	       <CInput
		      type="date"
		      label="Sampai"
		      horizontal
		      v-model="date.to"
	       />	
	      <template #header>
	        <h6 class="modal-title">Export Data ke Excel</h6>
	        <CButtonClose @click="modal = false" class="text-white"/>
	      </template>
	      <template #footer>
	        <CButton @click="storeExcel" color="success">{{exportLabel}}</CButton>
	      </template>
	    </CModal>
	</div>
</template>
<script type="text/javascript">
	import {exportExcel, getOrderBarang, getDatas} from '@/containers/global-function.js'
	export default {
		name: 'DataOrderPO',
		data() {
			return {
				exportLabel: 'Mulai Export',
				data:'',
				date:{from:null, to:null},
				modal:false,
				dataOrder:[],
				tableFields: ['no', 'kode_barang', 'nama_barang', 'spesifikasi', 'qty', 'keterangan', 'aksi'],
				tableOptions: {
					perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
					headings: {
						no: 'No',
						kode_barang: 'Kode Barang',
						nama_barang: 'Nama Barang',
						spesifikasi: 'Spesifikasi Barang',
						qty:'Quantity',
						keterangan: 'Keterangan',
						aksi: 'Aksi'
					},
					sortable: ['no', 'nama_barang', 'qty'],
					filterable: ['nama_barang',  'qty','kode_barang', 'spesifikasi', 'keterangan'],
					columnsClasses: {
						no: 'text-center align-middle',
						kode_barang: 'align-middle',
						nama_barang: 'align-middle',
						spesifikasi: 'align-middle',
						qty: 'text-center align-middle',
						keterangan: 'align-middle',
						aksi: 'text-center align-middle',
					}
				}
			}
		},
		methods: {
			storeExcel() {
				if(this.date.from == null || this.date.to == null)  {
					this.$swal('Tanggal tidak boleh kosong', '', 'warning')
					setTimeout(() => {
						this.$swal.close()
						return false
					}, 2000)
					
					this.exportLabel = 'Mulai Export'
					return false
				}
				this.exportLabel = 'Loading...'
				exportExcel(this,localStorage.base_api + 'excel/order/barang', {from:this.date.from, to:this.date.to}, {
					responseType: 'blob',
					headers: {
						'Authorization' : 'bearer ' + localStorage.token
					}
				}, 'order barang.xls')
				.then(() => {
					this.modal = false
					this.exportLabel = 'Mulai Export'
				})
				.catch(e => {
					this.exportLabel = 'Mulai Export'
					console.log(e)
					this.$swal('Tidak bisa mengambil data', '', 'error')
					setTimeout(() => {
						this.$swal.close()
						this.modal = false
					}, 2000)
					return false
				})
			}	
		},
		created() {
			if(localStorage.level != 1 && localStorage.level != 2) {
				this.$router.push('/')
			}
			getDatas(this, localStorage.base_api + 'order/barang/po', {headers:{'Authorization' : 'bearer ' + localStorage.token}}, 'get')
			.then(res => {
				let data = res
				data.forEach((item, i) => {
					i += 1
					item.no = i++
					// getDatas(this, localStorage.base_api + 'barang/' + item.id_barang, {method:'post', headers:{'Authorization':'bearer ' + localStorage.token}}, 'post')
					// .then(res => {
						
					// 	let obj = {}
					// 	obj.id = item.id
					// 	obj.qty = item.qty
					// 	obj.no = i++
					// 	obj.kode_barang = res.kode_barang
					// 	obj.nama_barang = res.nama_barang
					// 	obj.spesifikasi_barang = res.spesifikasi
					// 	obj.keterangan = res.keterangan
					// 	arr.push(obj)
					// })

				})
				
				return data
			})
			.then(res => {
				this.dataOrder = res
			})
			.catch(e => console.error(e))
		},
		mounted() {
			this.data = this.$store.getters.userData
		}
	}
</script>
<style>
	#order_po_table .form-inline label {
		display: none;	
	}	
	/*#order_po_table .form-inline {
		margin:0;
		padding: 0;
		display: flex;
		width: 100%;
		justify-content: flex-start;
	}*/
	.VuePagination {
		margin-top: 20px;	
		display: flex;
		justify-content: center;
	}
</style>