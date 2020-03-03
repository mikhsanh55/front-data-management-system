<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Daftar</b> User</p>
			</CCardHeader>
			<CCardBody>
				<CRow>
					<CCol sm="12">
						<router-link v-if="data.level != 2" to="/user/add" class="float-right mb-4 btn btn-primary"><small> <i class="fa fa-plus mr-1"></i> Tambah User</small></router-link>	
						<v-client-table
						:data="user"
						:columns="tableFields"
						:options="tableOptions"
						id="user_table"
						>
							<div slot="foto" slot-scope="props">
								<img :src="props.row.foto" />
							</div>
							<div slot="aksi" slot-scope="props" class="d-flex justify-content-center">
								<router-link :to="'/user/detail/' + props.row.id" class="btn btn-dark btn-sm mr-2" title="detail user">
									Detail
								</router-link>
								<router-link v-if="data.level != 2" :to="'/user/edit/' + props.row.id" class="btn btn-primary btn-sm mr-2" title="edit user">
									Edit
								</router-link>
								<button v-if="data.level != 2" title="hapus data kwitansi" class="btn btn-danger btn-sm" @click="deleteUser(props.row.id)">Hapus</button>
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
		name:"User",
		data() {
			return {
				smallModal:false,
				data:'',
				tableFields: [
					'no', 'nama', 'email', 'level', 'aksi'
				],
				tableOptions: {
					perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
					headings: {
						no: 'No',
						nama: 'Nama Karyawan',
						email: 'Email',
						level: 'Jabatan',
						aksi: 'Aksi'
					},
					sortable: ['no', 'email'],
					columnsClasses: {
						no:'text-center align-middle',
						nama:'align-middle',
						email:'align-middle',
						level:'text-center align-middle',
						aksi:'text-center align-middle'
					}
				},
				user: []
			}
		},
		methods: {
			getData() {
				let header = new Headers()
				header.append('Authorization', 'bearer ' + localStorage.getItem('token'))
				let options = {
					method: 'GET',
					headers: header,
					redirect: 'follow'
				}

				getDatas(this, localStorage.base_api + 'user', options)
				.then(res => {
					if(res.errcode == 40001) {
					  this.$store.dispatch('logout')
	                  .then(() => {
	                    	this.$swal('Sesi login kamu sudah habis', 'login lagi yah', 'warning')
	                    	setTimeout(() => {
	                    		this.$swal.close()
	                    		this.$router.replace({path: '/login'})
	                    	}, 1500)
	                  })  
	                  .catch(e => {
	                    this.$swal('Maaf tidak bisa mengambil data', 'hubungi pengembangnya yah', 'danger')
	                    	setTimeout(() => {
	                    		this.$swal.close()
	                    	}, 1500)
	                    return false
	                  })

					}
					else {
						this.user = res
						this.user.forEach((item, i) => {
							item.no = i+1
						})
					}
						
				})
				.catch(e => {
					console.log(e)
					return false
				})
			},
			deleteUser(id) {
				this.$swal({
			        title: 'Kamu yakin? :(',
			        text: 'Kamu akan akan menghapus data ini permanen',
			        icon: 'warning',
			        buttons: true,
			        dangerMode: true
			      })
				.then((deleted) => {
					if(deleted)	 {
						this.$http.delete(localStorage.base_api + 'user/' + id, {
							headers: {
								'Authorization':'bearer ' + localStorage.token
							}
						})
						.then(res => {

							this.$swal(res.data.message, 'Mohon tunggu sebentar...', 'success')
							setTimeout(() => {
								this.getData()
								this.$swal.close()
							}, 1500)
						})
						.catch(e => {
							this.$swal('', 'Mohon tunggu sebentar...', 'success')
							setTimeout(() => {
								this.getData()
								this.$swal.close()
							}, 1500)
							this.smallModal = false
							console.error(e)
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
			if(localStorage.getItem('token') == undefined || localStorage.getItem('token') == null) {
				this.$router.replace('/login')
			}
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
	#user_table .form-inline label {
		display: none;
	}	
	#user_table {
		width: 100%;
	}
	#user_table .form-inline label {
		display: none;	
	}	
	#user_table .form-inline input[type=text] {
		width: 130%;
	}
	#user_table .form-inline {
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
	#user_table select {
		margin-top: 15px;
		margin-bottom:20px;
	}
</style>