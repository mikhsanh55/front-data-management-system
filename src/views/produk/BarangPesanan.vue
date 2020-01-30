<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Data</b> Barang Pesanan
			</CCardHeader>
			<CCardBody>
				<CRow>
					<CCol sm="12">
						<button @click="modal = true" class="float-right mb-4 ml-2 btn btn-light"><small> <i class="fa fa fa-file-excel-o mr-1"></i> Export .xlsx</small></button>		
						<v-client-table
							:data="barangPesanan"
							:columns="tableFields"
							:options="tableOptions"
							id="barang-pesanan-table"
						>
							<div slot="aksi" slot-scope="props">
								<button class="btn btn-danger btn-sm" @click="storePDF(props.row.id)">
									<i class="fa fa-file-pdf-o"></i>
								</button>
								<router-link :to="'/barang-pesanan/edit/' + props.row.id" class="btn btn-edit btn-sm">
									<i class="fa fa-edit"></i>
								</router-link>

								<button class="btn btn-danger btn-sm" @click="confirmBarangPesanan(props.row.id)">
									<i class="fa fa-trash"></i>
								</button>
							</div>
						</v-client-table>
					</CCol>
				</CRow>
			</CCardBody>
		</CCard>
		<CModal
		  title="Hapus Barang Pesanan"
		  size="sm"
		  color="danger"
		  :show.sync="smallModal"
		>
				Kwitansi ini akan dihapus secara permanen?
				<template #footer>
			       <CButton @click="deleteBarangPesanan()" color="danger">Hapus</CButton>
			       <CButton @click="smallModal = false" color="secondary">Batal</CButton>
			    </template>
		</CModal>
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
		      v-model="date"
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
<script>
	import {exportExcel, importPDF} from '@/containers/global-function.js'
	export default {
		name: 'BarangPesanan',
		data() {
			return {
				exportLabel: 'Mulai Export',
				modal:false,
				date:null,
				smallModal:false,
				barangPesanan:[],
				id:0,
				tableFields: [
					'no', 'kode_barang', 'nama_barang', 'aksi', 'jumlah', 'tanggal', 'alasan', 'tipe'
				],
				tableOptions: {
					perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
					headings: {
						no: 'No',
						kode_barang: 'Kode Barang',
						nama_barang: 'Nama Barang',
						jumlah: 'Jumlah',
						tanggal: 'Tanggal',
						alasan: 'Alasan',
						tipe: 'Tipe',
						aksi: 'Aksi'
					},
					sortable: ['no', 'nama_barang'],
					columnsClasses: {
						no:'text-center align-middle',
						kode_barang:'align-middle',
						nama_barang:'align-middle',
						alasan:'text-center align-middle',
						jumlah:'text-center align-middle',
						tanggal:'text-center align-middle',
						tipe:'text-center align-middle',
						aksi:'text-center align-middle'
					}
				}
			}
		},
		methods: {
			storePDF(id) {
				this.$swal({
					title: 'Mohon tunggu...',
					showCloseButton:false,
					showCancelButton:false,
				})
				
				exportPDF(this, 'https://young-temple-67589.herokuapp.com/api/pdf/barang/pesanan', {
					responseType: 'blob',
					headers: {
						'Authorization' : 'bearer ' + localStorage.token
					}
				}, 'barang pesanan.pdf')
				.then(() => {
					this.$swal.close()
				})
				.catch(e => {
					console.log(e)
					this.$swal('Tidak bisa mengambil data', '', 'error')
					setTimeout(() => {
						this.$swal.close()
						this.modal = false
					}, 2000)
					return false
				})
			},
			getData() {
				this.$http.get('https://young-temple-67589.herokuapp.com/api/barang/pesanan', {
					headers: {
						'Authorization': 'bearer ' + localStorage.token
					},
					redirect: 'follow'
				})
				.then(res => {
					console.log(res.data)
					if(res.data.length > 0)
						this.barangPesanan = res.data
						for(let i = 0;i < this.barangPesanan.length;i++) {
							this.barangPesanan[i].nod = i+1
						}
				})
				.catch(e => {
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
	                    alert('An error occured when get data :(')
	                    return false
	                  })
	                }
	                else {
	                  console.log(e)
	                  alert('Ada sedikit error, harap hubungi pengembang softwarenya yah :)')
	                  return false 
	                }
					console.log(e.response)
					return false
				})
			},
			confirmBarangPesanan(id){
				this.id = id
			},
			deleteBarangPesanan() {
				this.$http.delete('https://young-temple-67589.herokuapp.com/api/barang/pesanan/' + this.id, {
					headers: {
						'Authorization':'bearer ' + localStorage.getItem('token')
					},
					redirect:'follow'
				})
				.then(res => {

					alert(res.data.message)
					this.smallModal = false
					this.getData()
				})
				.catch(e => {
					this.smallModal = false
					alert('Ada sedikit error, harap hubungi pengembang softwarenya yah :)')
					console.error(e.response)
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
				exportExcel(this, 'https://young-temple-67589.herokuapp.com/api/excel/barang/pesanan', {date:this.date}, {
					responseType: 'blob',
					headers: {
						'Authorization' : 'bearer ' + localStorage.token
					}
				}, 'barang pesanan.xls')
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
			this.getData()
		}
	}
</script>
<style type="text/css">
	#barang-pesanan-table .form-inline label {
		display: none;
	}
	.VuePagination {
		margin-top: 20px;	
		display: flex;
		justify-content: center;
	}
</style>