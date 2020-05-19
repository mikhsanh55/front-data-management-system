<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Daftar</b> Vendor</p>
			</CCardHeader>
			<CCardBody>
				<CRow>
					<CCol sm="12">
						<button @click="storeExcel" class="float-right mb-4 ml-2 btn btn-success"><small> <i class="fa fa fa-file-excel-o mr-1"></i> Export .xlsx</small></button>		
						<router-link v-if="data.level != 2" to="/vendor/add" class="float-right mb-4 btn btn-primary"><small> <i class="fa fa-plus mr-1"></i> Tambah Vendor</small></router-link>	
						<v-client-table
						:data="vendor"
						:columns="tableFields"
						:options="tableOptions"
						id="vendor_table"
						>
							<div slot="foto" slot-scope="props">
								<img :src="props.row.foto" />
							</div>
							<div slot="aksi" slot-scope="props" class="d-flex justify-content-center">
								<router-link :to="'/vendor/detail/' + props.row.id" class="btn btn-dark btn-sm mr-2" title="edit user">
									Detail
								</router-link>
								<router-link v-if="data.level != 2" :to="'/vendor/edit/' + props.row.id" class="btn btn-primary btn-sm mr-2" title="edit asset">
									Edit
								</router-link>
								<button v-if="data.level != 2" title="hapus data vendor" class="btn btn-danger btn-sm" @click="deleteVendor(props.row.id)">Hapus</button>
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
	import {exportExcel, getDatas} from '@/containers/global-function.js'
	export default {
		name:"Vendor",
		data() {
			return {
				exportLabel: 'Mulai Export',
				modal:false,
				date:{from:null},
				id:0,
				data:JSON.parse(localStorage.user),
				smallModal:false,
				tableFields: [
					'no', 'nama', 'email', 'wa_hp', 'nama_instansi',
					'karakteristik_perusahaan', 'alamat', 'aksi'
				],
				tableOptions: {
					perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
					headings: {
						no: 'No',
						nama: 'Nama Vendor',
						email: 'Email',
						wa_hp: 'Whatsapp',
						nama_instansi: 'Perusahaan',
						karakteristik_perusahaan: 'Karakteristik Perusahaan',
						alamat: 'Alamat',
						aksi: 'Aksi'
					},
					sortable: ['no', 'nama'],
					columnsClasses: {
						no:'text-center align-middle',
						nama:'align-middle',
						email:'align-middle',
						wa_hp:'text-center align-middle',
						nama_instansi:'align-middle',
						karakteristik_perusahaan: 'align-middle',
						alamat:'text-center align-middle',
						aksi:'text-center align-middle'
					}
				},
				vendor: []
			}
		},
		methods: {
			storeExcel() {
				this.$swal('Mohon tunggu...', '', 'info')
				exportExcel(this, localStorage.base_api + 'excel/vendor', {from:null, to:null}, {
					responseType: 'blob',
					headers: {
						'Authorization' : 'bearer ' + localStorage.token
					}
				}, 'vendor.xls')
				.then(() => {
					this.$swal.close()
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
			getData() {
				getDatas(this, localStorage.base_api + 'vendors', {
					method: 'post',
					headers: {
						'Authorization': 'bearer ' + localStorage.getItem('token')
					}
				})
				.then(res => {
					this.vendor = res
					for(let i = 0;i < this.vendor.length;i++) {
						this.vendor[i].no = i+1
					}
				})
				.catch(e => {
					if(e.response.status == 401) {
	                  this.$store.dispatch('logout')
	                  .then(() => {
	                    let path = window.location.href
	                    path = path.split('/')
	                    localStorage.setItem('prevPath', path[path.length - 1])
	                    this.$swal('Sesi login kamu sudah habis', 'login lagi yah...', 'warning')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    	this.$router.replace({path: '/login'})
	                    }, 1500)
	                    
	                  })
	                  .catch(e => {
	                    this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    }, 1500)
	                    return false
	                  })
	                }
	                else {
	                  this.label = 'Update Barang'
	                  console.log(e)
	                  this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    }, 1500)
	                  return false 
	                }
				})
			},
			deleteVendor(id) {
				this.$swal({
			        title: 'Kamu yakin? :(',
			        text: 'Kamu akan akan menghapus data ini permanen',
			        icon: 'warning',
			        buttons: true,
			        dangerMode: true
			      })
				.then((deleted) => {
					if(deleted) {
						this.$http.delete(localStorage.base_api + 'vendors/' + id, {
							headers: {
								'Authorization': 'bearer ' + localStorage.getItem('token')
							},
							redirect:'follow'
						})
						.then(() => {
							this.$swal('Data berhasil dihapus', '', 'success')
							this.getData()
							setTimeout(() => this.$swal.close(), 1500)
							
							return true
						})
						.catch(e => {
							this.$swal('Tidak bisa menghapus data', 'hubungi pengembangnya...', 'danger')
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
						
			}
		},
		created() {
			if(this.data.level == 3 || this.data.level == 4 || this.data.level == 6 || this.data.level == 7 ) {
				this.$router.push('/')
			}
			this.getData()
		},
	}
</script>
<style>	
	#vendor_table .form-inline label {
		display: none;
	}	
	#vendor_table {
		width: 100%;
	}
	#vendor_table .form-inline label {
		display: none;	
	}	
	#vendor_table .form-inline input[type=text] {
		width: 130%;
	}
	#vendor_table .form-inline {
		margin:0;
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