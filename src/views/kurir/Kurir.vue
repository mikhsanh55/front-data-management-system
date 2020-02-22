<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Daftar</b> Kurir</p>
			</CCardHeader>
			<CCardBody>
				<CRow>
					<CCol sm="12">
						<v-client-table
						:data="kurir"
						:columns="tableFields"
						:options="tableOptions"
						id="kurir_table"
						>
							<div slot="foto" slot-scope="props">
								<img :src="props.row.foto" />
							</div>
							<div slot="aksi" slot-scope="props" class="d-flex justify-content-center">
								<!-- <router-link :to="'/kurir/detail/' + props.row.id" class="btn btn-primary btn-sm mr-2" title="detail kurir">
									<i class="fa fa-eye"></i>
								</router-link> --><!-- 
								<router-link v-if="data.level != 2" :to="'/kurir/edit/' + props.row.id" class="btn btn-primary btn-sm mr-2" title="edit kurir">
									<i class="fa fa-edit"></i>
								</router-link> -->
								<button v-if="data.level != 2" title="hapus data kurir" class="btn btn-danger btn-sm" @click="deleteKurir(props.row.id)">Hapus</button>
							</div>
						</v-client-table>
					</CCol>
				</CRow>
			</CCardBody>
		</CCard>
		<CModal
		  title="Hapus Data Kurir"
		  size="sm"
		  color="danger"
		  :show.sync="smallModal"
		>
				Data Kurir ini akan dihapus secara permanen?
				<template #footer>
			       <CButton @click="deleteKurir()" color="danger">Hapus</CButton>
			       <CButton @click="smallModal = false" color="secondary">Batal</CButton>
			    </template>
		</CModal>
	</div>
</template>
<script type="text/javascript">
	import {getDatas} from '@/containers/global-function.js'
	export default {
		name:"Kurir",
		data() {
			return {
				id:0,
				smallModal:false,
				data:'',
				tableFields: [
					'no', 'no_karyawan', 'nama_karyawan', 'email', 'wa_hp', 'aksi'
				],
				tableOptions: {
					perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
					headings: {
						no: 'No',
						no_karyawan: 'No Kurir',
						nama_karyawan: 'Nama Kurir',
						email: 'Email',
						wa_hp: 'No Hp/WA',
						aksi: 'Aksi'
					},
					sortable: ['no', 'no_karyawan', 'nama_karyawan'],
					columnsClasses: {
						no:'text-center align-middle',
						no_karyawan:'align-middle',
						nama_karyawan:'align-middle',
						email:'align-middle',
						wa_hp:'text-center align-middle',
						aksi:'text-center align-middle',
					}
				},
				kurir: []
			}
		},
		methods: {
			getData() {
				getDatas(this, localStorage.base_api + 'kurir', {
					headers: {
						'Authorization': 'bearer ' + localStorage.getItem('token')
					},
					redirect:'follow'
				})
				.then(res => {
					this.kurir = res
					for(let i = 0;i < this.kurir.length;i++) {
						this.kurir[i].no = i+1
					}
					console.log(res)
				})
				.catch(e => {
					console.error(e)
					this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'error')
                    setTimeout(() => {
                    	this.$swal.close()
                    }, 1500)
					return false
				})
			},
			deleteKurir(id) {
				this.$swal({
			        title: 'Kamu yakin? :(',
			        text: 'Kamu akan akan menghapus data ini permanen',
			        icon: 'warning',
			        buttons: true,
			        dangerMode: true
			      })
				.then((deleted) => {
					if(deleted) {
						this.$http.delete(localStorage.base_api + 'karyawan/' + id, {
							headers: {
								'Authorization': 'bearer ' + localStorage.token
							}
						})
						.then(() => {
							this.$swal('data user berhasil dihapus', 'Mohon tunggu sebentar...', 'success')
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
									this.$swal('Sesi login kamu sudah habis', 'login lagi yah...', 'warning')
				                    setTimeout(() => {
				                    	this.$swal.close()
				                    	this.$router.replace({path: '/login'})
				                    }, 1500)
									
								})
								.catch(e => {
									console.log(e)
									this.$swal('Tidak bisa hapus data', 'hubungi pengembangnya...', 'error')
				                    setTimeout(() => {
				                    	this.$swal.close()
				                    }, 1500)
									return false
								})
							}
							else {
								this.$swal('Tidak bisa hapus data', 'hubungi pengembangnya...', 'error')
			                    setTimeout(() => {
			                    	this.$swal.close()
			                    }, 1500)
								console.log(e)
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
			if(localStorage.level != 1 && localStorage.level != 2 ) {
				this.$router.push('/')
			}
			this.getData()
		},
		mounted() {
			this.data = this.$store.getters.userData
		}
	}
</script>
<style>
	#kurir_table .form-inline label {
		display: none;
	}
	.VuePagination {
		margin-top: 20px;	
		display: flex;
		justify-content: center;
	}
</style>