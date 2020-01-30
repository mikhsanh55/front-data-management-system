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
							<button @click="modal = true" class="float-right mb-4 ml-2 btn btn-light"><small> <i class="fa fa fa-file-excel-o mr-1"></i> Export .xlsx</small></button>		

							<v-client-table
							:data="dataOrder"
							:columns="tableFields"
							:options="tableOptions"
							id="order_po_table"

							>
								<div slot="aksi" slot-scope="props">
									<div v-if="data.level != 2">
										<router-link :to="'/po/data-order-barang/'+props.row.id" class="text-dark btn btn-secondary btn-sm">
											<i class="fa fa-eye"></i>
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
		      label="Tanggal"
		      horizontal
		      v-model="date.from"
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
	import {exportExcel, getOrderBarang} from '@/containers/global-function.js'
	export default {
		name: 'DataOrderPO',
		data() {
			return {
				exportLabel: 'Mulai Export',
				data:'',
				date:{from:null},
				modal:false,
				dataOrder:[],
				tableFields: ['no', 'kode_barang', 'nama_barang', 'spesifikasi_barang', 'qty', 'tanggal', 'keterangan', 'status', 'aksi'],
				tableOptions: {
					perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
					headings: {
						no: 'No',
						kode_barang: 'Kode Barang',
						nama_barang: 'Nama Barang',
						spesifikasi_barang: 'Spesifikasi Barang',
						qty:'Quantity',
						tanggal: 'Tanggal',
						keterangan: 'Keterangan',
						status: 'Status',
						aksi: 'Aksi'
					},
					sortable: ['no', 'nama_barang', 'status', 'qty'],
					filterable: ['no'],
					columnsClasses: {
						no: 'text-center align-middle',
						kode_barang: 'align-middle',
						nama_barang: 'align-middle',
						spesifikasi_barang: 'align-middle',
						qty: 'text-center align-middle',
						tanggal: 'text-center align-middle',
						keterangan: 'align-middle',
						status: 'text-center align-middle',
						aksi: 'text-center align-middle',
					}
				}
			}
		},
		methods: {
			getData() {
				let headers = new Headers()
				headers.append('Authorization', localStorage.token)
				let options = {
					method: 'GET',
					headers,
					redirect:'follow'
				}
				fetch('https://young-temple-67589.herokuapp.com/api/order/barang/po', {
					headers: {
						'Authorization': 'bearer ' + localStorage.token
					}
				})
				.then(res => res.json())
				.then(res => {
					console.log(res)
					this.dataOrder = res
				})
				.catch(e => {
					this.$swal(e.response.message, 'hubungi pengembangnya...', 'danger')
                    setTimeout(() => {
                    	this.$swal.close()
                    }, 1500)
                    return false
				})
			},
			storeExcel() {
				if(this.date == null)  {
					this.$swal('Tanggal tidak boleh kosong', '', 'warning')
					setTimeout(() => {
						this.$swal.close()
						return false
					}, 2000)
					
					this.exportLabel = 'Mulai Export'
				}
				this.exportLabel = 'Loading...'
				exportExcel(this, 'https://young-temple-67589.herokuapp.com/api/excel/order/barang', {from:this.date.from, to:this.date.from}, {
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
			},
			getDataTable() {
		    	return new Promise((resolve, reject) => {
				    this.$http.post('https://young-temple-67589.herokuapp.com/api/order/barang/po/detail/' + this.$route.params.id, {
						headers:{
							'Authorization':'bearer ' + localStorage.token
						}
					})
					.then(res => {
						let arr = []
						this.info_po = res.data
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
		    }
			
		},
		created() {
			this.getData()
			getOrderBarang()
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