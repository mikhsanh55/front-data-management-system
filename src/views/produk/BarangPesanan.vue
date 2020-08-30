<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Data</b> Barang Pesanan
			</CCardHeader>
			<CCardBody>
				<CRow>
					<CCol sm="12">
						<button @click="modal = true" class="float-right mb-4 ml-2 btn btn-success"><small> <i class="fa fa fa-file-excel-o mr-1"></i> Export .xlsx</small></button>		
						<router-link v-if="data.level != 2" to="/barang-pesanan/add" class="float-right mb-4 btn btn-primary"><small> <i class="fa fa-plus mr-1"></i> Tambah Barang Pesanan</small></router-link>	
						<v-client-table
							:data="barangPesanan"
							:columns="tableFields"
							:options="tableOptions"
							id="barang-pesanan-table"
						>
							<div slot="aksi" slot-scope="props">
								<router-link title="Order Barang Pesanan" :to="'/barang-pesanan/order/' + props.row.id" class="btn btn-warning text-dark btn-sm mr-2">
									Order
								</router-link>
								<button title="Export PDF" class="btn btn-outline-danger btn-sm mr-2" @click="confirmPDF(props.row.id)">
									PDF
								</button>
								<router-link title="Edit Barang Pesanan" :to="'/barang-pesanan/edit/' + props.row.id" class="btn btn-primary btn-sm mr-2">
									Edit
								</router-link>
								<button title="Hapus Barang Pesanan" class="btn btn-danger btn-sm mr-2" @click="deleteBarangPesanan(props.row.id)">
									Hapus
								</button>
							</div>
						</v-client-table>
					</CCol>
				</CRow>
			</CCardBody>
		</CCard>
		<!-- Modal PDF -->
		<CModal
		  :show.sync="modalPDF"
		  :no-close-on-backdrop="true"
	      title="Export Data ke PDF"
	      size="sm"
	      color="dark"
		>
			<CInput 
				type="text"
				label="Nama Perusahaan"
				placeholder="Perusahaan"
				v-model="pdf.nama_perusahaan"
				horizontal
			/>
			<CInput
				type="date"
				label="Tanggal"
				v-model="pdf.date"
				horizontal
			 />
			 <template #header>
		        <h6 class="modal-title">Export Data ke PDF</h6>
		        <CButtonClose @click="modalPDF = false" class="text-white"/>
		      </template>
		      <template #footer>
		        <CButton @click="storePDF" :disabled="exportDisabled" color="success">{{exportLabel}}</CButton>
		      </template>

		</CModal>

		<!-- Modal Excel -->
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
<script>
	import {exportExcel, exportPDF, getDatas} from '@/containers/global-function.js'
	export default {
		name: 'BarangPesanan',
		data() {
			return {
				exportLabel: 'Mulai Export',
				exportDisabled: false,
				modal:false,
				modalPDF:false,
				date:{from:null, to:null},
				pdf:{id:'', date:'', nama_perusahaan: ''},
				data:'',
				smallModal:false,
				barangPesanan:[],
				id:0,
				tableFields: [
					'nod', 'no', 'tanggal_pesanan', 'keterangan', 'aksi'
				],
				tableOptions: {
					perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
					headings: {
						nod: 'No',
						no:'No Pesanan',
						tanggal_pesanan: 'Tanggal Pesanan',
						keterangan: 'Keterangan',
						aksi: 'Aksi'
					},
					sortable: ['nod', 'no', 'tanggal_pesanan', 'keterangan'],
					columnsClasses: {
						nod:'text-center align-middle',
						no:'text-center align-middle',
						tanggal_pesanan:'text-center align-middle',
						keterangan:'align-middle',
						aksi:'text-center align-middle'
					}
				}
			}
		},
		methods: {
			confirmPDF(id) {
				this.pdf.id = id
				this.modalPDF = true
			},
			storePDF() {
				// set loading
				this.exportDisabled = true
				this.exportLabel = 'Loading...'

				if(this.pdf.date == '') {
					// set loading
					this.exportDisabled = false
					this.exportLabel = 'Mulai Export'
					alert('Harap isi salah satu tanggal')
					return false
				}

				this.$swal({
					title: 'Mohon tunggu...',
					showCloseButton:false,
					showCancelButton:false,
				})
				
				exportPDF(this, localStorage.base_api + 'pdf/pesanan/barang/' + this.pdf.id, {
					responseType: 'blob',
					headers: {
						'Authorization' : 'bearer ' + localStorage.token
					}
				}, 'barang pesanan.pdf', 'post', this.pdf)
				.then(() => {
					this.exportDisabled = false
					this.exportLabel = 'Export'
					this.$swal.close()
				})
				.catch(e => {
					this.exportDisabled = false
					this.exportLabel = 'Export'
					if(e.response)
						console.log(e.response)
						this.$swal(e.response.data.message, '', 'error')
						setTimeout(() => {
							this.$swal.close()
							this.modal = false
						}, 2000)
					return false
				})
			},
			getData() {
				getDatas(this, localStorage.base_api + 'pesanan/barang', {
					method:'post',
					headers: {
						'Authorization': 'bearer ' + localStorage.token
					},
					redirect: 'follow'
				})
				.then(res => {
					if(res.length > 0)
						this.barangPesanan = res
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
			deleteBarangPesanan(id) {
			      this.$swal({
			        title: 'Kamu yakin? :(',
			        text: 'Data akan dihapus secara permanen',
			        icon: 'warning',
			        buttons: true,
			        dangerMode: true
			      })
			      .then((del) => {
			      	if(del)	{
			      		this.$http.delete(localStorage.base_api + 'pesanan/barang/' + id, {
							headers: {
								'Authorization':'bearer ' + localStorage.getItem('token')
							},
							redirect:'follow'
						})
						.then(res => {

							this.$swal('Barang Pesanan berhasil dihapus', 'Mohon tunggu sebentar...', 'success')
							setTimeout(() => this.$swal.close(), 1500)
							this.getData()
						})
						.catch(e => {
							this.smallModal = false
							this.$swal('Barang Pesanan gagal dihapus', 'Hubungi pengembangnya...', 'error')
							setTimeout(() => this.$swal.close(), 1500)
							console.error(e.response)
							return false
						})
			      	}
			      	else {
			      		this.$swal.close()
			      	}
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
				exportExcel(this, localStorage.base_api + 'excel/pesanan/barang', {from:this.date.from, to:this.date.to}, {
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
			if(localStorage.level != 1 && localStorage.level != 2 && localStorage.level != 5 ) {
				this.$router.push('/')
			}
			this.getData()
			this.data = this.$store.getters.userData
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