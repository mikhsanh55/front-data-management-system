
<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Daftar</b> Barang</p>
			</CCardHeader>
			<CCardBody>
				<CRow>
					<CCol sm="12">

						<button @click="modal = true" class="float-right mb-4 ml-2 btn btn-light"><small> <i class="fa fa fa-file-excel-o mr-1"></i> Export .xlsx</small></button>		
						<router-link v-if="data.level != 2 && data.level != 7 && data.level != 6" to="/barang/add" class="float-right mb-4 btn btn-light"><small> <i class="fa fa-plus mr-1"></i> Tambah Barang</small></router-link>			
						
							<v-client-table
							v-if="data.level != 6 && data.level !=4"
							:data="tableItem"	
							:columns="tableFields"
							:options="tableOptions"
							id="barang_table"
							>
							<div slot="foto" slot-scope="props">
									<img :src="'https://young-temple-67589.herokuapp.com/' + props.row.foto"  height="50" width="70" />
								
							</div>
							<div slot="aksi" slot-scope="props" class="d-flex justify-content-center">
								<router-link :to="'/barang/detail/' + props.row.id" class="text-dark btn btn-secondary btn-sm mr-2">
									<i class="fa fa-eye"></i>
								</router-link>
								<router-link v-if="data.level != 2 && data.level != 7 && data.level != 6" :to="'/barang/edit/' + props.row.id" class="btn btn-secondary btn-sm mr-2 text-primary">
									<i class="fa fa-edit"></i>
								</router-link>
								<button v-if="data.level != 2 && data.level != 7 && data.level != 6" title="hapus data karyawan" class="text-danger btn btn-secondary btn-sm" @click="deleteBarang(props.row.id)"><i class="fa fa-trash" ref="id" :id="props.row.id"></i></button>

							</div>
							<div slot="harga" slot-scope="props">
								{{props.row.harga_jual | formatRupiah}}
							</div>
							</v-client-table>
						
							<v-client-table
							v-else
							:data="tableItem"
							:columns="spvFields"
							:options="spvOptions"
							id="barang_table"
							>
							<div slot="foto" slot-scope="props">
								<div v-if="'https://young-temple-67589.herokuapp.com/' +props.row.foto == true" class="mx-auto d-flex justify-content-center">
									<img :src="'https://young-temple-67589.herokuapp.com/' + props.row.foto" style="border-radius:50%;" />
								</div>
								<div v-else class="mx-auto d-flex justify-content-center">
									<img class="img-thumbnail" src="./../../assets/img/avatar/default.svg" style="border-radius:50%;width:35px;height: 35px;" />
								</div>
							</div>
							<div slot="aksi" slot-scope="props" class="d-flex justify-content-center">
								<router-link :to="'/barang/detail/' + props.row.id" class="text-dark btn btn-secondary btn-sm mr-2">
									<i class="fa fa-eye"></i>
								</router-link>
								<router-link v-if="data.level != 2 && data.level != 6 && data.level != 4" :to="'/barang/edit/' + props.row.id" class="btn btn-secondary btn-sm mr-2 text-primary">
									<i class="fa fa-edit"></i>
								</router-link>
								<button v-if="data.level != 2 && data.level != 6 && data.level != 4" title="hapus data karyawan" class="text-danger btn btn-secondary btn-sm" @click="deleteBarang(props.row.id)"><i class="fa fa-trash" ref="id" :id="props.row.id"></i></button>

							</div>
							<div slot="harga" slot-scope="props">
								{{props.row.harga_jual | formatRupiah}}
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
	import CTableWrapper from '@/views/base/Table.vue'
	import {exportExcel} from '@/containers/global-function.js'
	export default {
		name:'ListHarga',
		data() {
			return {
				modal: false,
				date:{from:null, to:null},
				exportLabel: 'Mulai Export',
				id:0,
				smallModal:false,
				data:'',
				products:[],
				tableItem:[],
				spvFields: [
					'no', 'foto', 'kode_barang', 'nama_barang', 'spesifikasi', 'aksi'
				],
				tableFields: [
					'no', 'foto', 'kode_barang', 'nama_barang', 'spesifikasi', 'harga_jual', 'aksi'
			    ],
			    spvOptions: {
			    	perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
			    	headings: {
			    		no:'No',
			    		foto:'Foto',
			    		kode_barang:'Kode Barang',
			    		nama_barang:'Nama Barang',
			    		spesifikasi:'Spesifikasi Barang',
			    		aksi:'Aksi'
			    	},
			    	sortable:['nama_barang'],
			    	filterable:['nama_barang', 'kode_barang', 'spesifikasi', 'no'],
			    	columnsClasses: {
			    		no:'text-center align-middle',
			    		foto:'text-center align-middle m-auto',
			    		kode_barang:'align-middle',
			    		nama_barang:'align-middle',
			    		spesifikasi:'align-middle',
			    		aksi:'text-center align-middle'
			    	}
			    },
			    tableOptions: {
			    	perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
			    	headings: {
			    		no:'No',
			    		foto:'Foto',
			    		kode_barang:'Kode Barang',
			    		nama_barang:'Nama Barang',
			    		spesifikasi:'Spesifikasi Barang',
			    		harga_jual:'Harga Jual',
			    		aksi:'Aksi'
			    	},
			    	sortable:['no', 'kode_barang', 'spesifikasi', 'nama_barang', 'harga_jual'],
			    	filterable:['no', 'kode_barang', 'spesifikasi', 'nama_barang', 'harga_jual'],
			    	columnsClasses: {
			    		no:'text-center align-middle',
			    		kode_barang:'align-middle',
			    		nama_barang:'align-middle',
			    		spesifikasi:'align-middle',
			    		harga_jual:'text-center align-middle',
			    		aksi:'text-center align-middle'
			    	}
			    }
			}
		},
		components: {
			CTableWrapper
		},
		methods: {
			
			deleteBarang(id) {
				this.$swal({
			        title: 'Kamu yakin? :(',
			        text: 'Kamu akan akan menghapus data ini permanen',
			        icon: 'warning',
			        buttons: true,
			        dangerMode: true
			      })
				.then((deleted) => {
					if(deleted) {
						this.$http.delete('https://young-temple-67589.herokuapp.com/api/barang/' + id, {
							headers: {
								'Authorization': 'bearer ' + localStorage.getItem('token')
							},
							redirect:'follow'
						})
						.then(res => {							
							this.$swal(res.data.message, 'Mohon tunggu sebentar...', 'success')
							setTimeout(() => {
								this.getData()
								this.$swal.close()
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
			                    this.$swal('Sesi login kamu sudah habis', 'login lagi yah :)', 'warning')
			                    setTimeout(() => {
			                    	this.$swal.close()
			                    	this.$router.replace({path: '/login'})
			                    }, 1500)
			                    
			                  })
			                  .catch(e => {
			                    this.$swal('Maaf tidak bisa hapus data', 'hubungi pengembangnya :)', 'warning')
			                    setTimeout(() => {
			                    	this.$swal.close()
			                    }, 1500)
			                    return false
			                  })
			                }
			                else if (e.response.status === 500) {
								this.$swal('Maaf tidak bisa hapus data', 'hubungi pengembangnya :)', 'warning')
			                    setTimeout(() => {
			                    	this.$swal.close()
			                    }, 1500)
								return false
							}
							return false
						})		
					}
					else {
						this.$swal.close()
					}
				})
				
			},
			checkImage(src) {
				let image = new Image()
				image.onload = () => true
				image.onerror = () => false
				image.src = src
			},
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
				exportExcel(this, 'https://young-temple-67589.herokuapp.com/api/excel/barang', {from:this.date.from, to:this.date.to}, {
					responseType: 'blob',
					headers: {
						'Authorization' : 'bearer ' + localStorage.token
					}
				}, 'barang.xls')
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

				this.$http.get('https://young-temple-67589.herokuapp.com/api/barang', {
					headers: {
						'Authorization': 'bearer ' + localStorage.getItem('token')
					},
					redirect:'follow'
				})
				.then(response => {
					this.tableItem = response.data
					for(let i = 0;i < this.tableItem.length;i++) {
						this.tableItem[i].no = i+1;
					}
				})    
				.catch(e => {
					console.log(e)
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
		                    alert('An error occured when get data :(')
		                    return false
		                  })

					}
					else if(e.response.status == 500) {
						alert('Ada sedikit masalah disisi server, Mohon hubungi pengembangnya yah :)')
					}
					console.log(e.response)
					return false
				})
			}
		},
		filters: {
			formatRupiah: function(angka, prefix){

				let number_string = angka.toString().replace(/[^,\d]/g, '').toString(),
				split   		= number_string.split(','),
				sisa     		= split[0].length % 3,
				rupiah     		= split[0].substr(0, sisa),
				ribuan     		= split[0].substr(sisa).match(/\d{3}/gi),
				separator ='';
	 
				// tambahkan titik jika yang di input sudah menjadi angka ribuan
				if(ribuan){
					separator = sisa ? '.' : '';
					rupiah += separator + ribuan.join('.');
				}
	 
				rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
				return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
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
	#barang_table {
		width: 100%;
	}
	#barang_table .form-inline label {
		display: none;	
	}	
	#barang_table .form-inline input[type=text] {
		width: 130%;
	}
	#barang_table .form-inline {
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