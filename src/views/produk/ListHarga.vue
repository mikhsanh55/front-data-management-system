
<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Daftar</b> Barang</p>
			</CCardHeader>
			<CCardBody>
				<CRow>
					<CCol sm="12">

						<button v-if="data.level == 5 || data.level == 2 || data.level == 1 || data.level == 3" @click="storeExcel" class="float-right mb-4 ml-2 btn btn-success"><small> <i class="fa fa fa-file-excel-o mr-1"></i> Export .xlsx</small></button>		
						<router-link v-if="data.level != 7 && data.level != 6 && data.level != 4 " to="/barang/add" class="float-right mb-4 btn btn-primary"><small> <i class="fa fa-plus mr-1"></i> Tambah Produk Baru</small></router-link>			
						
							<v-client-table
							v-if="data.level != 6 && data.level !=4"
							:data="tableItem"	
							:columns="tableFields"
							:options="tableOptions"
							id="barang_table"
							>
							<!-- <div slot="foto" slot-scope="props">
									<img :src="uri + props.row.foto"  height="50" width="70" />
								
							</div> -->
							<div slot="aksi" slot-scope="props" class="d-flex justify-content-center">
								<router-link :to="'/barang/detail/' + props.row.id" class="btn btn-dark btn-sm mr-2">
									Detail
								</router-link>
								<router-link  v-if="data.level != 2 && data.level != 6 && data.level != 4 && data.level != 7" :to="'/barang/edit/' + props.row.id" class="btn btn-primary btn-sm mr-2">
									Edit
								</router-link>
								<button v-if="data.level != 2 && data.level != 7 && data.level != 6" title="hapus data karyawan" class="btn btn-danger btn-sm" @click="deleteBarang(props.row.id)">Hapus</button>

							</div>
							<div slot="harga" slot-scope="props">
								{{ props.row.harga_jual | formatRupiah}}
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
									<div v-if="uri +props.row.foto == true" class="mx-auto d-flex justify-content-center">
										<img :src="uri + props.row.foto" style="border-radius:50%;" />
									</div>
									<div v-else class="mx-auto d-flex justify-content-center">
										<img class="img-thumbnail" src="./../../assets/img/avatar/default.svg" style="border-radius:50%;width:35px;height: 35px;" />
									</div>
								</div>
								
								<!-- convert harga jual to rupiah -->
								<div slot="harga_jual" slot-scope="props" class="text-left">
									{{ props.row.harga_jual | formatRupiah }}
								</div>

								<div slot="aksi" slot-scope="props" class="d-flex justify-content-center">
									<router-link :to="'/barang/detail/' + props.row.id" class="btn btn-dark btn-sm mr-2">
										Detail
									</router-link>
									<router-link  v-if="data.level != 2 && data.level != 6 && data.level != 4" :to="'/barang/edit/' + props.row.id" class="btn btn-primary btn-sm mr-2">
										Edit
									</router-link>
									<button v-if="data.level != 2 && data.level != 6 && data.level != 4" title="hapus data karyawan" class="btn btn-danger btn-sm" @click="deleteBarang(props.row.id)">Hapus</button>
									

								</div>
							</v-client-table>
						

					</CCol>
				</CRow>
			</CCardBody>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	import CTableWrapper from '@/views/base/Table.vue'
	import mixins from '@/mixins/currency.js'
	import {exportExcel, getDatas} from '@/containers/global-function.js'
	export default {
		name:'ListHarga',
		mixins:[mixins],
		data() {
			return {
				modal: false,
				uri:localStorage.base_uri,
				date:{from:null, to:null},
				exportLabel: 'Mulai Export',
				id:0,
				smallModal:false,
				data:JSON.parse(localStorage.user),
				products:[],
				tableItem:[],
				spvFields: [
					'no', 'kode_barang', 'nama_barang', 'spesifikasi', 'stock', 'satuan', 'aksi'
				],
				tableFields: [
					'no',  'kode_barang', 'nama_barang', 'spesifikasi', 'stock', 'satuan', 'harga_jual', 'aksi'
			    ],
			    spvOptions: {
			    	perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
			    	headings: {
			    		no:'No',
			    		kode_barang:'Kode Barang',
			    		nama_barang:'Nama Barang',
			    		spesifikasi:'Spesifikasi Barang',
			    		stock: 'Stok',
			    		satuan: 'Satuan',
			    		aksi:'Aksi'
			    	},
			    	sortable:['nama_barang'],
			    	filterable:['nama_barang', 'kode_barang', 'spesifikasi', 'no', 'satuan', 'stock'],
			    	columnsClasses: {
			    		no:'text-center align-middle',
			    		kode_barang:'align-middle',
			    		nama_barang:'align-middle',
			    		spesifikasi:'align-middle',
			    		stock:'text-center align-middle',
			    		satuan: 'text-center align-middle',
			    		aksi:'text-center align-middle'
			    	}
			    },
			    tableOptions: {
			    	perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
			    	headings: {
			    		no:'No',
			    		kode_barang:'Kode Barang',
			    		nama_barang:'Nama Barang',
			    		spesifikasi:'Spesifikasi Barang',
			    		stock:'Stok',
			    		satuan: 'Satuan',
			    		harga_jual:'Harga Jual',
			    		aksi:'Aksi'
			    	},
			    	sortable:['no', 'kode_barang', 'spesifikasi', 'nama_barang', 'harga_jual', 'stock', 'satuan'],
			    	filterable:['no', 'kode_barang', 'spesifikasi', 'nama_barang', 'harga_jual', 'stock', 'satuan'],
			    	columnsClasses: {
			    		no:'text-center align-middle',
			    		kode_barang:'align-middle',
			    		nama_barang:'align-middle',
			    		spesifikasi:'align-middle',
			    		stock:'text-center align-middle',
			    		harga_jual:'text-center align-middle',
			    		stock:'text-center align-middle',
			    		satuan: 'text-center align-middle',
			    		aksi:'text-center align-middle'
			    	}
			    }
			}
		},
		components: {
			CTableWrapper
		},
		filter: {
			formatRupiah(angka)  {
				let angkaToString = angka.toString().replace(/[^, \d]/g, "").toString(),
			        split = angkaToString.split(","),
			        sisa = split[0].length % 3,
			        rupiah = split[0].substr(0, sisa),
			        ribuan = split[0].substr(sisa).match(/\d{3}/gi),
			        separator = ''

			    if(ribuan && ribuan.length != null) {
			      separator = sisa ? "." : ""
			      rupiah += separator + ribuan.join(".")
			    }
			    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah

			    return rupiah
			}
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
						this.$http.delete(localStorage.base_api + 'barang/' + id, {
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
				this.exportLabel = 'Loading...'
				this.$swal('Mohon tunggu', '', 'info')
				exportExcel(this, localStorage.base_api + 'excel/barang', {from:this.date.from, to:this.date.from}, {
					responseType: 'blob',
					headers: {
						'Authorization' : 'bearer ' + localStorage.token
					}
				}, 'barang.xls')
				.then(() => {
					this.$swal.close()
					this.exportLabel = 'Mulai Export'
				})
				.catch(e => {
					this.$swal.close()
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
				getDatas(this, localStorage.base_api + 'barang', {
					method: 'post',
					headers: {
						'Authorization': 'bearer ' + localStorage.getItem('token')
					},
					redirect:'follow'
				})
				.then(response => {
					this.tableItem = response
					for(let i = 0;i < this.tableItem.length;i++) {
						this.tableItem[i].no = i+1;
					}
				})    
				.catch(e => {
					console.log(e)
					return false
				})
			}
		},
		created() {
			if(localStorage.level == 3 ) {
				this.$router.push('/')
			}
			this.getData()
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
		margin-bottom: 25px;
	}
	#barang_table .form-inline {
		margin:0;
		padding: 0;
		display: flex;
		width: 100%;
		justify-content: flex-start;
	}
	#barang_table select {
		margin-bottom:20px;
	}
	.VuePagination {
		margin-top: 20px;	
		display: flex;
		justify-content: center;
	}
</style>