<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Daftar</b> Sales</p>
			</CCardHeader>
			<CCardBody>
				<CRow>
					<CCol sm="12">
						
						<v-client-table
						:data="sales"
						:columns="tableFields"
						:options="tableOptions"
						id="sales_table">
							<div slot="aksi" slot-scope="props" class="d-flex justify-content-center">
								<!-- <router-link :to="'/sales/detail/' + props.row.id" class="text-dark btn btn-secondary btn-sm mr-2" title="Detail sales">
										<i class="fa fa-eye"></i>
								</router-link>
								<router-link v-if="data.level != 2" :to="'/sales/edit/' + props.row.id" class="text-primary btn btn-secondary btn-sm mr-2">
									<i class="fa fa-edit"></i>
								</router-link> -->
								<button v-if="data.level != 2" class="btn btn-danger btn-sm" ref="el" :id="props.row.id" @click="deleteSales(props.row.id)">Hapus</button>
							</div>
						</v-client-table>
					</CCol>
				</CRow>
			</CCardBody>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	import {getDatas} from '@/containers/global-function.js'
	export default {
		name:'Sales',
		data() {
			return {
				sales: [],
				id:1,
				data:'',
				tableFields: ['no', 'no_karyawan', 'nama_karyawan', 'email', 'wa_hp', 'aksi'],
				tableOptions: {
					perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
					headings: {
						no: 'No',
						no_karyawan: 'No Karyawan',
						nama_karyawan: 'Nama Karyawan',
						email: 'Email',
						aksi: 'Aksi'
					},
					sortable:['no', 'email', 'wa_hp'],
					filterable:['email'],
					columnsClasses: {
						no:'text-center align-middle',
						no_pegawai:'align-middle',
						nama_pegawai:'align-middle',
						email:'align-middle',
						aksi:'text-center align-middle'
					}
				}
			}
		},
		methods: {
			getData() {
				getDatas(this,localStorage.base_api + 'sales', {
					method: 'post',
					headers: {
						'Authorization': 'bearer ' + localStorage.getItem('token')
					},
					redirect:'follow'
				})
				.then(response => {
					this.sales = response
					for(let i = 0;i < this.sales.length;i++) {
						this.sales[i].no = i+1;
					}
				})
				.catch(e => {
					if(e.response.status == 401) {
		                  this.$store.dispatch('logout')
		                  .then(() => {
		                    let path = window.location.href
		                    path = path.split('/')
		                    localStorage.setItem('prevPath', path[path.length - 1])
		                    this.$swal('Sesi login kamu sudah habis', 'login kagi yah...', 'warning')
		                    setTimeout(() => {
		                    	this.$swal.close()
		                    	this.$router.replace({path: '/login'})
		                    }, 1500)
		                    
		                  })
		                  .catch(e => {
		                    this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
		                    setTimeout(() => {
		                    	this.$swal.close()
		                    	this.$router.replace({path: '/login'})
		                    }, 1500)
		                    return false
		                  })
		                }
		                else {
		                	this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
		                    setTimeout(() => {
		                    	this.$swal.close()
		                    	this.$router.replace({path: '/login'})
		                    }, 1500)
							this.label = 'Update Karyawan'
							console.log(e)
							return false
						}
	      			return false
				})
			},
			deleteSales(id) {
				this.$swal({
			        title: 'Kamu yakin? :(',
			        text: 'Kamu akan akan menghapus data ini permanen',
			        icon: 'warning',
			        buttons: true,
			        dangerMode: true
			      })
				.then((deleted) => {
					if(deleted) {
						this.$http.delete(localStorage.base_api + 'sales/' + id, {
							headers: {
								'Authorization': 'bearer ' + localStorage.getItem('token')
							},
							redirect:'follow'
						})
						.then(res => {

							this.smallModal = false
							this.getData()
						})
						.catch(e => {
							console.error(e.response)
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
			                else if (e.response.status === 500) {
								this.smallModal = false
								alert('Something wrong with the server')
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
			if(localStorage.level != 1 && localStorage.level != 2) {
				this.$router.push('/')
			}
			this.getData()
		},
		mounted() {
			this.data = JSON.parse(localStorage.user)
		}
	}
</script>
<style>
	#sales_table .form-inline label {
		display: none;
	}	
	.VuePagination {
		margin-top: 20px;	
		display: flex;
		justify-content: center;
	}
</style>