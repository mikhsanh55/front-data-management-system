<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Daftar</b> Karyawan</p>
			</CCardHeader>
			<CCardBody>
				<CRow>
					<CCol sm="12">
						<button v-if="data.level == 3  || data.level == 2 || data.level == 1 " @click="storeExcel" class="float-right mb-4 ml-2 btn btn-light"><small> <i class="fa fa fa-file-excel-o mr-1"></i> Export .xlsx</small></button>		
						<router-link v-if="data.level != 2 && data.level != 7" to="/karyawan/add" class="float-right mb-4 btn btn-light"><small> <i class="fa fa-plus mr-1"></i> Tambah Karyawan</small></router-link>		
						<v-client-table
						:data="karyawan"
						:columns="tableFields"
						:options="tableOptions"
						id="karyawan_table"
						>
							<div slot="foto" slot-scope="props">
								<img :src="props.row.foto" />
							</div>
							<div slot="jk" slot-scope="props">
								<p v-if="props.row.jk == 1">Laki - laki</p>
								<p v-else >Perempuan</p>
							</div>
							<div slot="aksi" slot-scope="props" class="d-flex justify-content-center">
								<router-link  :to="'/karyawan/detail/' + props.row.id" class="text-dark btn btn-secondary btn-sm mr-2" title="Detail karyawan">
									<i class="fa fa-eye"></i>
								</router-link>
								<router-link v-if="data.level != 2 && data.level != 7" :to="'/karyawan/edit/' + props.row.id" class="text-primary btn btn-secondary btn-sm mr-2" title="Edit data karyawan">
									<i class="fa fa-edit"></i>
								</router-link>
								<button v-if="data.level != 2 && data.level != 7" title="hapus data karyawan" class="text-danger btn btn-secondary btn-sm" @click="deleteKaryawan(props.row.id)"><i class="fa fa-trash" ref="id" :id="props.row.id"></i></button>
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
	import {exportExcel} from '@/containers/global-function.js'
	export default {
		name:"Karyawan",
		data() {
			return {
				modal:false,
				date:{from:null},
				exportLabel: 'Mulai Export',
				id:0,
				data:'',
				api_url:'',
				smallModal:false,
				tableFields: [
					'no', 'no_karyawan', 'nama_karyawan', 'email', 'wa_hp', 'aksi'
				],
				tableOptions: {
					perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
					headings: {
						no: 'No',
						no_karyawan: 'No Karyawan',
						nama_karyawan: 'Nama Karyawan',
						email: 'Email',
						wa_hp: 'No HP/WA',
						aksi: 'Aksi'
					},
					sortable: ['no', 'no_karyawan'],
					columnsClasses: {
						no:'text-center align-middle',
						no_karyawan: 'align-middle',
						email: 'align-middle',
						wa_hp:'text-center align-middle',
						aksi:'text-center align-middle',
					}
				},
				karyawan: []
			}
		},
		methods: {
			storeExcel() {
				if(this.date.from == null)  {
					this.$swal('Tanggal tidak boleh kosong', '', 'warning')
					setTimeout(() => {
						this.$swal.close()
						return false
					}, 2000)
					this.exportLabel = 'Mulai Export'
					return false
				}
				this.exportLabel = 'Loading...'
				exportExcel(this, 'https://young-temple-67589.herokuapp.com/api/excel/karyawan', {from:this.date.from, to:this.date.from}, {
					responseType: 'blob',
					headers: {
						'Authorization' : 'bearer ' + localStorage.token
					}
				}, 'karyawan.xls')
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
			getData() {
				if(this.data.level == 7) {
					this.api_url = 'https://young-temple-67589.herokuapp.com/api/sales'
					console.log(this.data.level)
				}
				else {
					this.api_url = 'https://young-temple-67589.herokuapp.com/api/karyawan'	
					console.log(this.data.level)
				}
				let headers = new Headers()
				headers.append('Authorization', 'bearer ' + localStorage.getItem('token'))
				let options = {
					method:'GET',
					headers,
					redirect:'follow'
				}
				fetch(this.api_url, options)
				.then(res => res.json())
				.then(res => {
					console.log(res)
					this.karyawan = res
					for(let i = 0;i < this.karyawan.length;i++) {
						this.karyawan[i].no = i+1
					}
				})
				.catch(e => {
					if(e.response.status == 401) {
	                  this.$store.dispatch('logout')
	                  .then(() => {
	                    let path = window.location.href
	                    path = path.split('/')
	                    localStorage.setItem('prevPath', path[path.length - 1])
	                    this.$swal('Sesi login kamu habis :(', 'login lagi yah :)', 'warning')
	                    setTimeout(() => {
	                      this.$swal.close()
	                      this.$router.replace({path: '/login'})
	                    }, 2000)
	                    
	                  })
	                  .catch(e => {
	                    this.$swal('Maaf tidak bisa hapus data :(', 'hubungi pengembangnya yah :)', 'danger')
	                    setTimeout(() => {
	                      this.$swal.close()
	                    }, 2000)
	                    return false
	                  })
	                }
	                else if(e.response.status == 500) {
						this.$swal('Maaf tidak bisa hapus data :(', 'hubungi pengembangnya yah :)', 'danger')
	                    setTimeout(() => {
	                      this.$swal.close()
	                    }, 2000)
					}
					console.log(e.response)
					return false
				})
			},
			deleteKaryawan(id) {
				this.$swal({
			        title: 'Kamu yakin? :(',
			        text: 'Kamu akan akan menghapus data ini permanen',
			        icon: 'warning',
			        buttons: true,
			        dangerMode: true
			      })
				.then((deleted) => {
					if(deleted) {
						this.$http.delete('https://young-temple-67589.herokuapp.com/api/karyawan/' + id, {
							headers: {
								'Authorization': 'bearer ' + localStorage.getItem('token')
							},
							redirect:'follow'
						})
						.then(res => {
							this.$swal(res.data.message, '', 'success')
							setTimeout(() => {
								this.$swal.close()	
								this.getData()
							}, 1500)
						})
						.catch(e => {
							console.error(e.response)
							if(e.response.status == 401) {
			                  this.$store.dispatch('logout')
			                  .then(() => {
			                    let path = window.location.href
			                    path = path.split('/')
			                    localStorage.setItem('prevPath', path[path.length - 1])
			                    this.$swal('Sesi login kamu hais :(', 'login lagi yah :)', 'warning')
			                    setTimeout(() => {
			                      this.$swal.close()
			                      this.$router.replace({path: '/login'})
			                    }, 2000)
			                    
			                  })
			                  .catch(e => {
			                    // alert('An error occured when get data :(')
			                    this.$swal('Maaf tidak bisa hapus data :(', 'hubungi pengembangnya yah :)', 'danger')
			                    setTimeout(() => {
			                      this.$swal.close()
			                    }, 2000)
			                    return false
			                  })
			                }
			                else if (e.response.status === 500) {
								this.$swal('Maaf tidak bisa hapus data :(', 'hubungi pengembangnya yah :)', 'danger')
			                    setTimeout(() => {
			                      this.$swal.close()
			                    }, 2000)
								return false
							}
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
			this.data = this.$store.getters.userData
			setTimeout(() => {
				this.getData()	
			}, 500)
			
		},
		mounted() {
			
		}
	}
</script>
<style>
	#karyawan_table {
		width: 100%;
	}
	#karyawan_table .form-inline label {
		display: none;	
	}	
	#karyawan_table .form-inline input[type=text] {
		width: 130%;
		margin-bottom: 20px;
	}
	#karyawan_table .form-inline {
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