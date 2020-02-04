<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Daftar</b> Kwitansi</p>
			</CCardHeader>
			<CCardBody>
				<CRow>
					<CCol sm="12">
						<router-link v-if="data.level != 2" to="/kwitansi/add" class="float-right mb-4 btn btn-light"><small> <i class="fa fa-plus mr-1"></i> Tambah Kwitansi</small></router-link>	
						<v-client-table
						:data="kwitansi"
						:columns="tableFields"
						:options="tableOptions"
						id="kwitansi_table"
						>
							<div slot="foto" slot-scope="props">
								<img :src="props.row.foto" />
							</div>
							<div slot="aksi" slot-scope="props" class="d-flex justify-content-center">
								<!-- <router-link :to="'/kwitansi/detail/' + props.row.id" class="btn btn-primary btn-sm mr-2" title="detail kwitansi">
									<i class="fa fa-eye"></i>
								</router-link> -->
								<button v-if="data.level != 2" title="export pdf" class="text-danger btn btn-secondary btn-sm mr-2" @click="storePDF(props.row.id)"><i class="fa fa-file-pdf-o" ref="id" :id="props.row.id"></i></button>
								<router-link v-if="data.level != 2" :to="'/kwitansi/edit/' + props.row.id" class="text-primary btn btn-secondary btn-sm mr-2" title="edit kwitansi">
									<i class="fa fa-edit"></i>
								</router-link>
								<button v-if="data.level != 2" title="hapus data kwitansi" class="text-danger btn btn-secondary btn-sm" @click="deleteKwitansi(props.row.id)"><i class="fa fa-trash" ref="id" :id="props.row.id"></i></button>
							</div>
						</v-client-table>
					</CCol>
				</CRow>
			</CCardBody>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	import {exportPDF} from '@/containers/global-function.js'
	export default {
		name:"Kwitansi",
		data() {
			return {
				id:0,
				data:'',
				smallModal:false,
				tableFields: [
					'nod', 'no', 'terima_dari', 'uang',  'aksi'
				],
				tableOptions: {
					perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
					headings: {
						nod: 'No',
						no: 'No Kwitansi',
						terima_dari: 'Penerima',
						uang: 'Uang Terbilang',
						aksi: 'Aksi'
					},
					sortable: ['no', 'terima_dari'],
					columnsClasses: {
						nod:'text-center align-middle',
						no:'align-middle',
						terima_dari:'align-middle',
						uang:'text-center align-middle',
						aksi:'text-center align-middle'
					}
				},
				kwitansi: []
			}
		},
		methods: {
			storePDF(id) {
				this.$swal({
					title: 'Mohon tunggu...',
					showCloseButton:false,
					showCancelButton:false,
				})
				
				exportPDF(this, 'https://young-temple-67589.herokuapp.com/api/pdf/kwitansi/' + id, {
					responseType: 'blob',
					headers: {
						'Authorization' : 'bearer ' + localStorage.token
					}
				}, 'kwitansi.pdf')
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
				this.$http.get('https://young-temple-67589.herokuapp.com/api/kwitansi', {
					headers: {
						'Authorization':'bearer ' + localStorage.getItem('token')
					},
					redirect:'follow'
				})
				.then(res => {
					console.log(res.data)
					if(res.data.length > 0)
						this.kwitansi = res.data
						for(let i = 0;i < this.kwitansi.length;i++) {
							this.kwitansi[i].nod = i+1
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
	                  console.log(e)
	                  this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    	this.$router.replace({path: '/login'})
	                    }, 1500)
	                  return false 
	                }
					console.log(e.response)
					return false
				})
			},
			deleteKwitansi(id) {
				
				this.$http.delete('https://young-temple-67589.herokuapp.com/api/kwitansi/' + id, {
					headers: {
						'Authorization':'bearer ' + localStorage.getItem('token')
					},
					redirect:'follow'
				})
				.then(res => {

					this.$swal('Data kwitansi berhasil dihapus', 'Mohon tunggu sebentar...', 'success')
					setTimeout(() => {
						this.$swal.close()
						this.getData()	
					}, 1500)
					
				})
				.catch(e => {
					
					this.$swal('Tidak bisa menghapus data', 'hubungi pengembangnya...', 'danger')
                    setTimeout(() => {
                    	this.$swal.close()
                    }, 1500)
					console.error(e.response)
					return false
				})
			}
		},
		created() {
			this.getData()
		},
		mounted() {
			this.data = this.$store.getters.userData
		}
	}
</script>
<style>
	#kwitansi_table .form-inline label {
		display: none;
	}	
	#kwitansi_table {
		width: 100%;
	}
	#kwitansi_table .form-inline label {
		display: none;	
	}	
	#kwitansi_table .form-inline input[type=text] {
		width: 130%;
	}
	#kwitansi_table .form-inline {
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