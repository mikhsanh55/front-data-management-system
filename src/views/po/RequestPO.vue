<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Data</b> Request Barang
			</CCardHeader>
			<CCardBody>
				<CRow>
					<CCol sm="12">
						<button @click="modal = true" class="float-right mb-4 ml-2 btn btn-success"><small> <i class="fa fa fa-file-excel-o mr-1"></i> Export .xlsx</small></button>	
						<router-link v-if="data.level == 1 || data.level == 2 || data.level == 6" to="/data-request-barang/add" class="float-right mb-4 ml-2 btn btn-primary"><small> <i class="fa fa-plus mr-1"></i> Tambah Request Barang</small></router-link>	
						
						<v-client-table
						:data="request_po"
						:columns="tableFields"
						:options="tableOptions"
						id="table-request-barang"
						>
							<div slot="status" slot-scope="props">
								<small class="badge badge-primary" v-if="props.row.status == 1">Request</small>
								<small class="badge badge-warning" v-else-if="props.row.status == 2">Proses</small>
								<small class="badge badge-warning" v-else-if="props.row.status == 3">Dikirim</small>
								<small class="badge badge-success" v-else-if="props.row.status == 4">Selesai</small>
								<small class="badge badge-danger" v-else-if="props.row.status == 5">Batal</small>
							</div>
							<div slot="aksi" slot-scope="props">
								<router-link :to="'/data-request-barang/' + props.row.id" class="btn btn-dark btn-sm m-1">
									Detail
								</router-link>
								<router-link :to="'/data-request-barang/edit/' + props.row.id" class="btn btn-primary btn-sm m-1">
									Edit
								</router-link>
								<button class="btn btn-danger btn-sm m-1" @click="deleteRequestPO(props.row.id)">
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
		name: 'RequestPO',
		data() {
			return {
				exportLabel: 'Mulai Export',
				modal:false,
				data:JSON.parse(localStorage.user),
				date:{from:null, to:null},
				tableFields: ['no', 'date', 'nama_barang', 'qty', 'satuan', 'keterangan', 'status', 'aksi'],
				tableOptions: {
					perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
					headings: {
						no:'No',
						date:'Tanggal',
						nama_barang: 'Nama Barang',
						qty: 'Kuantitas',
						satuan: 'Satuan',
						keterangan: 'Keterangan',
						status: 'Status',
						aksi: 'Aksi'
					},
					sortable: ['no', 'nama_barang', 'jumlah', 'satuan'],
					filterable: ['no', 'nama_barang', 'qty', 'keterangan', 'status', 'satuan'],
					columnsClasses: {
						no: 'text-center align-middle',
						qty: 'text-center align-middle',
						satuan: 'text-center align-middle',
						date: 'text-center align-middle',
						nama_barang: 'align-middle',
						keterangan: 'align-middle',
						status: 'text-center align-middle',
						aksi: 'text-center align-middle'
					}

				},
				request_po:[]
			}
		},
		methods:{
			
			getData() {
				let headers = new Headers()
				headers.append('Authorization', 'bearer ' + localStorage.token)
				let options = {
					method: 'post',
					headers,
					redirect:'follow'
				}
				getDatas(this, localStorage.base_api + 'request/barang', options)
				.then(res => {
					this.request_po = res
					res.forEach((item, i) => {
						let dates = item.date.split('-')
						item.no = ++i
						item.date = `${dates[2]}-${dates[1]}-${dates[0]}`
					})
				})
				.catch(e => {
					console.error(e)
					return false
				})
			},
			deleteRequestPO(id) {
				this.$swal({
			        title: 'Kamu yakin? :(',
			        text: 'Kamu akan akan menghapus data ini permanen',
			        icon: 'warning',
			        buttons: true,
			        dangerMode: true
			      })
				.then((del) => {
					if(del) {
						this.$http.delete(localStorage.base_api + 'request/barang/' + id, {
							headers: {
								'Authorization': 'bearer ' + localStorage.token
							}
						})
						.then(res => {
							this.$swal(res.data.message, '', 'success')
							this.$swal.close()
							this.getData()
						})
						.catch(e => {
							this.$swal('Tidak bisa menghapus data', 'Hubungi pengembangnya...', 'error')
							setTimeout(() => {
								this.$swal.close()	
							}, 1500)
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
				exportExcel(this, localStorage.base_api + 'excel/request/barang', {from:this.date.from, to:this.date.to}, {
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