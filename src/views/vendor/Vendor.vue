<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Daftar</b> Vendor</p>
			</CCardHeader>
			<CCardBody>
				<CRow>
					<CCol sm="12">
						<button @click="modal = true" class="float-right mb-4 ml-2 btn btn-light"><small> <i class="fa fa fa-file-excel-o mr-1"></i> Export .xlsx</small></button>		
						<router-link v-if="data.level != 2" to="/vendor/add" class="float-right mb-4 btn btn-light"><small> <i class="fa fa-plus mr-1"></i> Tambah Vendor</small></router-link>	
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
								<router-link :to="'/vendor/detail/' + props.row.id" class="text-dark btn btn-secondary btn-sm mr-2" title="edit user">
									<i class="fa fa-eye"></i>
								</router-link>
								<router-link v-if="data.level != 2" :to="'/vendor/edit/' + props.row.id" class="text-primary btn btn-secondary btn-sm mr-2" title="edit asset">
									<i class="fa fa-edit"></i>
								</router-link>
								<button v-if="data.level != 2" title="hapus data vendor" class="text-danger btn btn-secondary btn-sm" @click="deleteVendor(props.row.id)"><i class="fa fa-trash" ref="id" :id="props.row.id"></i></button>
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
<script type="text/javascript">
	import {exportExcel} from '@/containers/global-function.js'
	export default {
		name:"Vendor",
		data() {
			return {
				exportLabel: 'Mulai Export',
				modal:false,
				date:null,
				id:0,
				data:'',
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
				if(this.date == null)  {
					this.$swal('Tanggal tidak boleh kosong', '', 'warning')
					setTimeout(() => {
						this.$swal.close()
						return false
					}, 2000)
					this.exportLabel = 'Mulai Export'
					return false
				}
				this.exportLabel = 'Loading...'
				exportExcel(this, 'https://young-temple-67589.herokuapp.com/api/excel/vendor', {date:this.date}, {
					responseType: 'blob',
					headers: {
						'Authorization' : 'bearer ' + localStorage.token
					}
				}, 'vendor.xls')
				.then(() => {
					this.modal = false
					this.exportLabel = 'Mulai Export'
				})
			},
			getData() {
				this.$http.get('https://young-temple-67589.herokuapp.com/api/vendor', {
					headers: {
						'Authorization': 'bearer ' + localStorage.getItem('token')
					}
				})
				.then(res => {
					console.log(res.data)
					this.vendor = res.data
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
						this.$http.delete('https://young-temple-67589.herokuapp.com/api/vendor/' + id, {
							headers: {
								'Authorization': 'bearer ' + localStorage.getItem('token')
							},
							redirect:'follow'
						})
						.then(() => {
							this.getData()
							this.$swal.close()
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
			this.getData()
		},
		mounted() {
			this.data = this.$store.getters.userData
			console.log(this.data)
		}
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