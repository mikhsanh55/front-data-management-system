<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Data</b> Stock In Out
			</CCardHeader>
			<CCardBody>
				<CRow>
					<CCol sm="12">
						<button v-if="data.level == 5 || data.level == 2 || data.level == 1 || data.level == 3 || data.level == 4" @click="modal = true" class="float-right mb-4 ml-2 btn btn-success"><small> <i class="fa fa fa-file-excel-o mr-1"></i> Export .xlsx</small></button>
						<router-link to="/stock-in-out/add" class="float-right mb-4 btn btn-primary"><small> <i class="fa fa-plus mr-1"></i> Tambah Stock In Out</small></router-link>			
						<v-client-table
							:data="stockinout"
							:columns="tableFields"
							:options="tableOptions"
							id="stockinout-table"
						>
							<div slot="type" slot-scope="props">
								<small v-if="props.row.type == 1" class="badge badge-success">In</small>
								<small v-else-if="props.row.type == 2" class="badge badge-primary">Out</small>
								<small v-if="props.row.type == 3" class="badge badge-danger">Habis</small>
							</div>
							<div slot="aksi" slot-scope="props">
								<router-link :to="'/stock-in-out/edit/' + props.row.id" class="btn btn-primary btn-sm mr-2 mb-2">
									Edit
								</router-link>
								<button class="btn btn-danger btn-sm" @click="deleteStockInOut(props.row.id)">
									Hapus
								</button>
							</div>
						</v-client-table>
					</CCol>
				</CRow>
			</CCardBody>
		</CCard>
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
	import {exportExcel, getDatas} from '@/containers/global-function.js'
	export default {
		name:'StockInOut',
		data() {
			return {
				smallModal:false,
				id:0,
				stockinout:[],
				exportLabel: 'Mulai Export',
				modal:false,
				data:JSON.parse(localStorage.user),
				date:{from:null, to:null},
				// tableFields: [
				// 	'no', 'kode_barang', 'nama_barang', 'spesifikasi', 'jumlah', 'tanggal', 'keterangan', 'status', 'aksi'
				// ],
				tableFields: ['no','nama_barang', 'type', 'spesifikasi',  'qty', 'satuan', 'tanggal', 'alasan', 'aksi'],
				tableOptions: {
					perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
					headings: {
						no: 'No',
						nama_barang: 'Nama Barang',
						tanggal: 'Tanggal',
						type: 'Tipe',
						spesifikasi: 'Spesifikasi',
						qty: 'Quantity',
						satuan: 'Satuan',
						alasan: 'Alasan',
						aksi: 'Aksi'
					},
					sortable: ['no', 'nama_barang', 'qty', 'satuan', 'spesifikasi'],
					filterable: ['no', 'nama_barang', 'qty', 'satuan', 'spesifikasi'],
					columnsClasses: {
						no:'text-center align-middle',
						type:'align-middle',
						spesifikasi:'align-middle',
						nama_barang:'align-middle',
						qty:'text-center align-middle',
						satuan:'text-center align-middle',
						tanggal:'text-center align-middle',
						alasan:'text-center align-middle',
						aksi:'text-center align-middle',
					}
				},
			}
		},
		methods: {
			getData() {
				getDatas(this, localStorage.base_api + 'stock', {
					method: 'post',
					headers: {
						'Authorization': 'bearer ' + localStorage.token
					}
				})
				.then(res => {
						let index = 0
						this.stockinout = res
						this.stockinout.forEach((r) => {
							r.no = index + 1
							index++
						})
				})
				.catch(e => {	
					
					if(e.response.status == 401) {
						
						setTimeout(() => {
							this.$swal.close()
							this.$store.dispatch('logout')
			                  .then(() => {
			                    let path = window.location.href
			                    path = path.split('/')
			                    localStorage.setItem('prevPath', path[path.length - 1])
			                    this.$swal('Sesi login kamu sudah habis', 'login lagi yah :)', 'warning')
			                    setTimeout(() => {
			                    	this.$swal.close()
			                    	this.$router.replace({path: '/login'})
			                    }, 1500)
			                    
			                  })
			                  .catch(e => {
			                    this.$swal('Maaf tidak bisa hapus data', 'hubungi pengembangnya :)', 'warning')
			                    setTimeout(() => {
			                    	this.$swal.close()
			                    }, 1500)
			                    return false
			                  })
						}, 1500)
					}	
					
					else {
						this.$swal('Terdapat  error di aplikasi', 'Mohon hubungi pengembangnya yah...', 'error')
						setTimeout(() => {
							this.$swal.close()
							return false
						}, 1500)
					}
					console.error(e)
					return false
				})
			},
			deleteStockInOut(id) {
				this.$swal({
			        title: 'Kamu yakin? :(',
			        text: 'Kamu akan akan menghapus data ini permanen',
			        icon: 'warning',
			        buttons: true,
			        dangerMode: true
			      })
				.then((del) => {
					if(del) {
						this.$http.delete(localStorage.base_api + 'stock/' + id, {
							headers: {
								'Authorization':'bearer ' + localStorage.getItem('token')
							},
							redirect:'follow'
						})
						.then(res => {
							this.$swal('Stock in out berhasil dihapus', 'Mohon tunggu sebentar...', 'success')
							setTimeout(() => {
								this.$swal.close()	
							}, 1500)
							this.getData()
						})
						.catch(e => {
							this.$swal.close()
							if(e.response.status == 401) {
			                  this.$store.dispatch('logout')
			                  .then(() => {
			                    let path = window.location.href
			                    path = path.split('/')
			                    localStorage.setItem('prevPath', path[path.length - 1])
			                    alert('Session Login kamu sudah habis! silahkan login kembali')
			                    
			                  })
			                  .then(() => {
			                    this.$router.replace({path: '/login'})
			                  })
			                  .catch(e => {
			                    this.$swal('Ada sedikit error, harap hubungi pengembang softwarenya yah :)', 'Mohon tunggu sebentar...', 'error')
			                    return false
			                  })
			                }
			                else {
			                  console.log(e)
			                  this.$swal('Ada sedikit error, harap hubungi pengembang softwarenya yah :)', 'Mohon tunggu sebentar...', 'error')
			                  return false 
			                }
							return false
						})
					}
					else {
						this.$swal.close()
					}
				})
						
			},
			storeExcel() {
				this.exportLabel = 'Loading...'
				exportExcel(this, localStorage.base_api + 'excel/stock', {from:this.date.from, to:this.date.to}, {
					responseType: 'blob',
					headers: {
						'Authorization' : 'bearer ' + localStorage.token
					}
				}, 'Stock In Out.xls')
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
			if(localStorage.level != 1 && localStorage.level != 2 && localStorage.level != 4 ) {
				this.$router.push('/')
			}
			this.getData()
		}
	}
</script>
<style type="text/css">
	#stockinout-table {
		width: 100%;
	}
	#stockinout-table .form-inline label {
		display: none;	
	}	
	#stockinout-table .form-inline input[type=text] {
		width: 130%;
	}
	#stockinout-table .form-inline {
		
		display: flex;
		width: 100%;
		justify-content: flex-start;
	}
	.VuePagination {
		margin-top: 20px;	
		display: flex;
		justify-content: center;
	}
</style>