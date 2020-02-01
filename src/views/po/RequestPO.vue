<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Data</b> Request Barang
			</CCardHeader>
			<CCardBody>
				<CRow>
					<CCol sm="12">
						<button @click="modal = true" class="float-right mb-4 ml-2 btn btn-light"><small> <i class="fa fa fa-file-excel-o mr-1"></i> Export .xlsx</small></button>	
						<router-link to="/po/data-request-barang/add" class="float-right mb-4 btn btn-light"><small> <i class="fa fa-plus mr-1"></i> Tambah Request Barang</small></router-link>				
						<v-client-table
						:data="request_po"
						:columns="tableFields"
						:options="tableOptions"
						id="table-request-barang"
						>
							<div slot="status" slot-scope="props">
								<small class="btn btn-sm btn-primary" v-if="props.row.status == 1">Request</small>
								<small class="btn btn-sm btn-warning" v-else-if="props.row.status == 2">Proses</small>
								<small class="btn btn-sm btn-warning" v-else-if="props.row.status == 3">Dikirim</small>
								<small class="btn btn-sm btn-success" v-else-if="props.row.status == 4">Selesai</small>
								<small class="btn btn-sm btn-danger" v-else-if="props.row.status == 5">Batal</small>
							</div>
							<div slot="aksi" slot-scope="props">
								<router-link :to="'/po/data-request-barang/' + props.row.id" class="text-dark btn btn-secondary btn-sm m-1">
									<i class="fa fa-eye"></i>
								</router-link>
								<router-link :to="'/po/data-request-barang/edit/' + props.row.id" class="text-primary btn btn-secondary btn-sm m-1">
									<i class="fa fa-edit"></i>
								</router-link>
								<button class="text-danger btn btn-secondary btn-sm m-1" @click="confirmRequestPO(props.row.id)">
									<i class="fa fa-trash"></i>
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
	import {exportExcel} from '@/containers/global-function.js'
	export default {
		name: 'RequestPO',
		data() {
			return {
				exportLabel: 'Mulai Export',
				modal:false,
				date:{from:null, to:null},
				tableFields: ['no', 'date', 'nama_barang', 'qty', 'keterangan', 'status', 'aksi'],
				tableOptions: {
					perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
					headings: {
						no:'No',
						date:'Tanggal',
						nama_barang: 'Nama Barang',
						qty: 'Kuantitas',
						keterangan: 'Keterangan',
						status: 'Status',
						aksi: 'Aksi'
					},
					sortable: ['no', 'nama_barang', 'jumlah'],
					filterable: ['no'],
					columnsClasses: {
						no: 'text-center align-middle',
						qty: 'text-center align-middle',
						date: 'text-center align-middle',
						nama_barang: 'align-middle',
						keterangan: 'align-middle',
						status: 'text-center align-middle',
						aksi: 'text-center align-middle'
					},

				},
				request_po:[]
			}
		},
		methods:{
			
			getData() {
				let headers = new Headers()
				headers.append('Authorization', 'bearer ' + localStorage.token)
				let options = {
					method: 'GET',
					headers,
					redirect:'follow'
				}
				fetch('https://young-temple-67589.herokuapp.com/api/request/barang', options)
				.then(res => res.json())
				.then(res => {

					if(res.status_code == 500) {
						alert('Ada sedikit kendala di server, mohon hubungi pengembangnya yah :)')
						return false
					}
						
					if(res.errcode == 40001) {
						alert('Sesi Login kamu sudah habis!')
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
		                    alert('An error occured when get data :(')
		                    return false
		                  })
						return false
					}	

					if(res.length > 0)
						this.request_po = res
						for(let i=0;i <= res.length;i++) {
							this.request_po[i].no = i+1
						}
				})
				.catch(e => {
					// if(e.response.status == 401 || e.errcode == 40001) {
					// 	this.$store.dispatch('logout')
					// 	.then(() => {
					// 		let path = window.location.href
					// 		path = path.split('/')
					// 		localStorage.setItem('prevPath', path[path.length - 1])
					// 		alert('Session Login kamu sudah habis! silahkan login kembali')
									
					// 	})
					// 	.then(() => {
					// 		this.$router.replace({path: '/login'})
					// 	})
					// 	.catch(e => {
					// 		alert('An error occured when get data :(')
					// 		return false
					// 	})
	
					// }
					// else if(e.response.status == 500) {
					// 	alert('Ada sedikit kendala di server, mohon hubungi pengembangnya yah :)')
					// }
					// else {
					// 	alert('Maaf ada sedikit error')
					// }
					console.error(e)
					return false
				})
			},
			confirmRequestPO(id) {
				this.id = id
				this.smallModal = true
			},
			deleteRequestPO() {
				this.$http.delete('https://young-temple-67589.herokuapp.com/api/request/barang/' + this.id, {
					headers: {
						'Authorization': 'bearer ' + localStorage.token
					}
				})
				.then(res => {
					alert(res.data.message)
					this.smallModal = false
					this.getData()
				})
				.catch(e => {
					alert('Maaf tidak bisa menghapus datanya :(')
					return false
				})
			},
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
				exportExcel(this, 'https://young-temple-67589.herokuapp.com/api/excel/request/barang', {from:this.date.from, to:this.date.to}, {
					responseType: 'blob',
					headers: {
						'Authorization' : 'bearer ' + localStorage.token
					}
				}, 'Request Barang.xls')
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
		},
		created() {
			this.getData()
		}
	}
</script>

<style>
	#table-request-barang {
		width: 100%;
	}
	#table-request-barang .form-inline label {
		display: none;	
	}	
	#table-request-barang .form-inline input[type=text] {
		width: 130%;
	}
	#table-request-barang .form-inline {
		
		padding: 0;
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