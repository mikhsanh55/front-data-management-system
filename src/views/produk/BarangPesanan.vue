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
						<router-link v-if="data.level != 2" to="/barang-pesanan/add" class="float-right mb-4 btn btn-light"><small> <i class="fa fa-plus mr-1"></i> Tambah Barang Pesanan</small></router-link>	
						<v-client-table
							:data="barangPesanan"
							:columns="tableFields"
							:options="tableOptions"
							id="barang-pesanan-table"
						>
							<div slot="aksi" slot-scope="props">
								<router-link title="Order Barang Pesanan" :to="'/barang-pesanan/order/' + props.row.id" class="btn btn-secondary text-dark btn-sm mr-2">
									<i class="fa fa-shopping-cart"></i>
								</router-link>
								<button title="Export PDF" class="btn btn-secondary text-danger btn-sm mr-2" @click="storePDF(props.row.id)">
									<i class="fa fa-file-pdf-o"></i>
								</button>
								<router-link title="Edit Barang Pesanan" :to="'/barang-pesanan/edit/' + props.row.id" class="btn btn-secondary text-primary btn-sm mr-2">
									<i class="fa fa-edit"></i>
								</router-link>
								<button title="Hapus Barang Pesanan" class="btn btn-secondary text-danger btn-sm mr-2" @click="deleteBarangPesanan(props.row.id)">
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
<script>
	import {exportExcel, exportPDF} from '@/containers/global-function.js'
	export default {
		name: 'BarangPesanan',
		data() {
			return {
				exportLabel: 'Mulai Export',
				modal:false,
				date:{from:null, to:null},
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
						tanggal_pesanan: 'Tanggal_pesanan',
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
			storePDF(id) {
				this.$swal({
					title: 'Mohon tunggu...',
					showCloseButton:false,
					showCancelButton:false,
				})
				
				exportPDF(this, 'https://young-temple-67589.herokuapp.com/api/pdf/barang/pesanan/' + id, {
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
			      		this.$http.delete('https://young-temple-67589.herokuapp.com/api/barang/pesanan/' + id, {
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
				exportExcel(this, 'https://young-temple-67589.herokuapp.com/api/excel/barang/pesanan', {from:this.date.from, to:this.date.to}, {
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