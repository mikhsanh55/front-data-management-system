<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Daftar</b> Asset</p>
			</CCardHeader>
			<CCardBody>
				<CRow>
					<CCol sm="12">
						<router-link v-if="data.level != 2" to="/asset/add" class="float-right mb-4 btn btn-primary"><small> <i class="fa fa-plus mr-1"></i> Tambah Asset</small></router-link>	
						<v-client-table
						:data="assets"
						:columns="tableFields"
						:options="tableOptions"
						id="asset_table"
						>
							<div slot="aksi" slot-scope="props" class="d-flex justify-content-center">
								<!-- <router-link :to="'/asset/detail/' + props.row.id" class="btn btn-primary btn-sm mr-2" title="detail asset">
									<i class="fa fa-eye"></i>
								</router-link> -->
								<router-link v-if="data.level != 2" :to="'/asset/edit/' + props.row.id" class="btn btn-primary btn-sm mr-2" title="edit asset">
									Edit
								</router-link>
								<button v-if="data.level != 2" title="hapus asset" class="btn btn-danger btn-sm" @click="deleteAsset(props.row.id)">Hapus</button>
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
		name:"Asset",
		data() {
			return {
				id:1,
				data:'',
				smallModal:false,
				tableFields: [
					'no', 'kode', 'deskripsi_barang', 'tanggal_beli', 'tanggal_expired', 'aksi'
				],
				base_api:localStorage.base_api,
				tableOptions: {
					perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
					headings: {
						no: 'No',
						kode: 'Kode Asset',
						deskripsi_barang: 'Deskripsi',
						tanggal_beli: 'Tanggal Beli',
						tanggal_expired: 'Tanggal Expired',
						aksi: 'Aksi'
					},
					sortable: ['no', 'kode_karyawan', 'tgl_beli', 'tgl_expired'],
					columnsClasses: {
						no:'text-center align-middle',
						kode:'align-middle',
						deskripsi_barang:'align-middle',
						aksi:'text-center align-middle',
						tanggal_expired:'text-center align-middle',
						tanggal_beli:'text-center align-middle',
					}
				},
				assets: []
			}
		},
		methods: {
			getData() {
				getDatas(this, this.base_api + 'asset', {
					method: 'post',
					headers: {
						'Authorization':'bearer ' + localStorage.getItem('token'),
						'Access-Control-Allow-Origin' : localStorage.base_uri
					},
				})
				.then(res => {
						this.assets = res
						for(let i = 0;i < this.assets.length;i++) {
							this.assets[i].no = i+1
						}
				})
				.catch(e => {
					this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'error')
                    setTimeout(() => {
                    	this.$swal.close()
                    }, 1500)
					console.log(e)
					return false
				})
			},
			deleteAsset(id) {
				this.$swal({
			        title: 'Kamu yakin? :(',
			        text: 'Kamu akan akan menghapus data ini permanen',
			        icon: 'warning',
			        buttons: true,
			        dangerMode: true
			      })
				.then((deleted) => {
					if(deleted) {
						this.$http.delete(this.base_api + 'asset/' + id, {
							headers: {
								'Authorization':'bearer ' + localStorage.token
							},
							redirect:'follow'
						})
						.then(res => {
							this.$swal('Data berhasil dihapus', '', 'success')
							setTimeout(() => this.$swal.close(), 1500)
							
							this.getData()
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
						this.$swal.close()
					}
				})
						
			}
		},
		created() {
			if(localStorage.level != 1 && localStorage.level != 2 && localStorage.level != 7 && localStorage.level != 3) {
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
	#asset_table .form-inline label {
		display: none;
	}	
	#asset_table {
		width: 100%;
	}
	#asset_table .form-inline label {
		display: none;	
	}	
	#asset_table .form-inline input[type=text] {
		width: 130%;
	}
	#asset_table .form-inline {
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