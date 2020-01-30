<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Data</b> Konsumen
			</CCardHeader>
			<CCardBody>
				<CRow>
					
					<CCol sm="12">
						<button @click="modal = true" class="float-right mb-4 ml-2 btn btn-light"><small> <i class="fa fa fa-file-excel-o mr-1"></i> Export .xlsx</small></button>		
						<router-link v-if="data.level != 2" to="/konsumen/add" class="float-right mb-4 btn btn-light"><small> <i class="fa fa-plus mr-1"></i> Tambah Konsumen</small></router-link>		
						<v-client-table
						:data="tableItem"
						:columns="tableFields"
						:options="tableOptions"
						id="konsumen_table"
						>
						<div slot="aksi" slot-scope="props" class="d-flex justify-content-center">
							<router-link :to="'/konsumen/detail/' + props.row.id" class="text-dark btn btn-secondary btn-sm mr-2" title="Detail Konsumen">
									<i class="fa fa-eye"></i>
								</router-link>
							<router-link v-if="data.level != 2" :to="'/konsumen/edit/' + props.row.id" class="text-primary btn btn-secondary btn-sm mr-2">
								<i class="fa fa-edit"></i>
							</router-link>
							<button v-if="data.level != 2" class="text-danger btn btn-secondary btn-sm" ref="el" :id="props.row.id" @click="deleteKonsumen(props.row.id)"><i class="fa fa-trash" ></i></button>
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
<script>
	import {exportExcel} from '@/containers/global-function.js'
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
			    		alamat:'Alamat Instansi',
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
			    	}
			    }
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
				exportExcel(this, 'https://young-temple-67589.herokuapp.com/api/excel/konsumen', {from:this.date.from, to:this.date.from}, {
					responseType: 'blob',
					headers: {
						'Authorization' : 'bearer ' + localStorage.token
					}
				}, 'konsumen.xls')
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
			          this.$http.delete('https://young-temple-67589.herokuapp.com/api/konsumen/' + id, {
							headers: {
								'Authorization': 'bearer ' + localStorage.getItem('token'),
								'Access-Control-Allow-Origin':'*',
								'Access-Control-Allow-Headers':'*'
							}
						})
						.then(res => {	

							if(res.data.status == true)
								alert(res.data.message)
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

				this.$http.get('https://young-temple-67589.herokuapp.com/api/konsumen', {
					headers: {
						'Authorization': 'bearer ' + localStorage.getItem('token'),
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Headers': '*'
					}
				})
				.then(response => {
					this.tableItem = response.data
					for(let i = 0;i < this.tableItem.length;i++) {
						this.tableItem[i].no = i+1
					}
					console.log(response.data)
					
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
		},
		mounted() {
			this.data = this.$store.getters.userData
			console.log(this.data)
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
</style>

