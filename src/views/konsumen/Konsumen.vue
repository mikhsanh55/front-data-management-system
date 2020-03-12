<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Data</b> Konsumen
			</CCardHeader>
			<CCardBody>
				<CRow>
					
					<CCol sm="12">
						<button @click="storeExcel" class="float-right mb-4 ml-2 btn btn-success"><small> <i class="fa fa fa-file-excel-o mr-1"></i> Export .xlsx</small></button>		
						<router-link v-if="data.level != 2 || data.level == 5 || data.level == 1" to="/konsumen/add" class="float-right mb-4 btn btn-primary"><small> <i class="fa fa-plus mr-1"></i> Tambah Konsumen</small></router-link>		
						<v-client-table
						:data="tableItem"
						:columns="tableFields"
						:options="tableOptions"
						id="konsumen_table"
						>
						<div slot="aksi" slot-scope="props" class="d-flex justify-content-center">
							<router-link :to="'/konsumen/detail/' + props.row.id" class="btn btn-dark btn-sm mr-2" title="Detail Konsumen">
									Detail
								</router-link>
							<router-link v-if="data.level != 2" :to="'/konsumen/edit/' + props.row.id" class="btn btn-primary btn-sm mr-2">
								Edit
							</router-link>
							<button v-if="data.level != 2" class="btn btn-danger btn-sm" ref="el" :id="props.row.id" @click="deleteKonsumen(props.row.id)">Hapus</button>
						</div>

						</v-client-table>
					</CCol>
				</CRow>
			</CCardBody>
		</CCard>
	</div>
</template>
<script>
	import {exportExcel, getDatas} from '@/containers/global-function.js'
	export default {
		name: 'Konsumen',
		data () {
			return {
				id:0,
				modal:false,
				date:{from:null},
				exportLabel: 'Mulai Export',
				self:this,
				data:'',
				smallModal: false,
				confirmDelete:false,
				konsumen:[],
				tableItem:[],
				tableFields: [
					'no', 'nama', 'email', 'wa_hp', 'karakteristik_perusahaan', 'alamat', 'aksi'
			    ],
			    tableOptions: {
			    	perPage:10,
			    	pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
			    	headings: {
			    		no:'No',
			    		nama:'Nama',
			    		email:'Email',
			    		wa_hp:'No HP/WA',
			    		karakteristik_perusahaan:'Karakteristik Perusahaan',
			    		alamat:'Alamat Pemesan',
			    		aksi:'Aksi'
			    	},
			    	sortable:['nama', 'no_rekening', 'email'],
			    	filterable:['nama', 'email', 'wa_hp', 'karakteristik_perusahaan', 'alamat'],
			    	columnsClasses: {
			    		no:'text-center align-middle',
			    		nama:'align-middle',
			    		email:'align-middle',
			    		wa_hp:'text-center align-middle',
			    		karakteristik_perusahaan:'align-middle',
			    		alamat:'align-middle',
			    		aksi:'text-center align-middle'
			    	},
			    }
			}
		},
		methods: {
			storeExcel() {
				this.$swal('Mohon tunggu...', '', 'info')
				this.exportLabel = 'Loading...'
				exportExcel(this, localStorage.base_api + 'excel/konsumen', 'from='+null, {
					responseType: 'blob',
					headers: {
						'Authorization' : 'bearer ' + localStorage.token,
						'Access-Control-Allow-Origin' : '*'
					}
				}, 'konsumen.xls')
				.then(() => {
					this.$swal.close()
				})
				.catch(e => {
					this.$swal.close()
					console.log(e)
					this.$swal('Tidak bisa mengambil data', '', 'error')
					setTimeout(() => {
						this.$swal.close()
						this.modal = false
					}, 2000)
					return false
				})
			},
			deleteKonsumen(id) {
				this.$swal({
			        title: 'Kamu yakin? :(',
			        text: 'Kamu akan akan menghapus data ini permanen',
			        icon: 'warning',
			        buttons: true,
			        dangerMode: true
			      })
			      .then((out) => {
			        if(out) {
			          this.$http.delete(localStorage.base_api + 'konsumen/' + id, {
							headers: {
								'Authorization': 'bearer ' + localStorage.getItem('token'),
								'Access-Control-Allow-Origin':'*',
								'Access-Control-Allow-Headers':'*'
							}
						})
						.then(res => {	

							if(res.data.status == true)
								this.$swal(res.data.message, '', 'success')
								setTimeout(() => {
									this.$swal.close()	
									this.getData()
								}, 1500)
						})
						.catch(e => {
							console.log(e)
						})
			        }
			        else {
			          this.$swal.close()
			        }
			      })
						
			},
			getData() {
				getDatas(this, localStorage.base_api + 'konsumen', {
					headers: {
						'Authorization': 'bearer ' + localStorage.getItem('token'),
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Headers': '*'
					}
				})
				.then(response => {
					this.tableItem = response
					for(let i = 0;i < this.tableItem.length;i++) {
						this.tableItem[i].no = i+1
					}
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
					else {
						alert('Ada sedikit masalah di sisi server, harap hubungi pengembangnya :)')
						console.log(e)
						return false
					}
				})
			}
		},
		created() {
			this.getData()
			if(localStorage.level != 1 && localStorage.level != 2 && localStorage.level != 7) {
				this.$router.push('/')
			}
		},
		mounted() {
			this.data = this.$store.getters.userData
		}
	}
</script>

<style>
	#konsumen_table {
		width: 100%;
	}
	#konsumen_table .form-inline label {
		display: none;	
	}	
	#konsumen_table .form-inline input[type=text] {
		width: 130%;
		margin-bottom: 10px;
	}
	#konsumen_table .form-inline {
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
	#konsumen_table select {
		margin-bottom:20px;
	}
</style>

