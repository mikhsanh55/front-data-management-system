<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Daftar</b> Kwitansi</p>
			</CCardHeader>
			<CCardBody>
				<CRow>
					<CCol sm="12">
						<router-link v-if="data.level != 2" to="/kwitansi/add" class="float-right mb-4 btn btn-primary"><small> <i class="fa fa-plus mr-1"></i> Tambah Kwitansi</small></router-link>	
						<v-client-table
						:data="kwitansi"
						:columns="tableFields"
						:options="tableOptions"
						id="kwitansi_table"
						>
							<div slot="foto" slot-scope="props">
								<img :src="props.row.foto" />
							</div>
							<div slot="uang" slot-scope="props">
								{{props.row.uang | formatRupiah}}
							</div>
							<div slot="aksi" slot-scope="props" class="d-flex justify-content-center">
								<!-- <router-link :to="'/kwitansi/detail/' + props.row.id" class="btn btn-primary btn-sm mr-2" title="detail kwitansi">
									<i class="fa fa-eye"></i>
								</router-link> -->
								<button v-if="data.level != 2" title="export pdf" class="btn btn-outline-danger btn-sm mr-2" @click="addIdPDF(props.row.id)">PDF</button>
								<router-link v-if="data.level != 2" :to="'/kwitansi/edit/' + props.row.id" class="btn btn-primary btn-sm mr-2" title="edit kwitansi">
									Edit
								</router-link>
								<button v-if="data.level != 2" title="hapus data kwitansi" class="btn btn-danger btn-sm" @click="deleteKwitansi(props.row.id)">Hapus</button>
							</div>
						</v-client-table>
					</CCol>
				</CRow>
			</CCardBody>
		</CCard>
		<CModal
	      :show.sync="modal"
	      :no-close-on-backdrop="true"
	      title="Export Data ke PDF"
	      size="md"
	      color="dark"
	    >
	    	<input type="hidden" v-model="pdf_data_custom.id">	
	      <CInput
		      type="text"
		      label="Nama Perusahaan"
		      horizontal
		      placeholder="Nama Perusahaan"
		      v-model="pdf_data_custom.nama_perusahaan"
	       />
	       <CInput
		      type="date"
		      label="Tanggal"
		      horizontal
		      v-model="pdf_data_custom.tanggal"
	       />	
	      <template #header>
	        <h6 class="modal-title">Export Data ke Excel</h6>
	        <CButtonClose @click="modal = false" class="text-white"/>
	      </template>
	      <template #footer>
	        <CButton @click="storePDF" color="success">{{exportLabel}}</CButton>
	      </template>
	    </CModal>
	</div>
</template>
<script type="text/javascript">
	import mixins from '@/mixins/currency.js'
	import {exportPDF, getDatas} from '@/containers/global-function.js'
	export default {
		name:"Kwitansi",
		mixins:[mixins],
		data() {
			return {
				exportLabel: 'Export',
				pdf_data_custom: {
					id:1,
					nama_perusahaan:'',
					tanggal:new Date('Y-m-d')
				},
				id:0,
				data:'',
				modal: false,
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
		filters: {
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
			addIdPDF(id) {
				this.pdf_data_custom.id = id
				this.modal = true
			},
			storePDF() {
				this.exportLabel = 'Loading...'
				this.$swal({
					title: 'Mohon tunggu...',
					showCloseButton:false,
					showCancelButton:false,
				})
				var formData = new FormData()
				formData.append('nama_perusahaan', this.pdf_data_custom.nama_perusahaan)
				formData.append('tanggal', this.pdf_data_custom.tanggal)

				exportPDF(this, localStorage.base_api + 'pdf/kwitansi/' + this.pdf_data_custom.id, {
					responseType: 'blob',
					method: 'post',
					headers: {
						'Authorization' : 'bearer ' + localStorage.token
					},
					body: formData
				}, 'kwitansi.pdf', 'post', formData)
				.then(() => {
					this.$swal.close()
					this.exportLabel = 'Export'
				})
				.catch(e => {
					this.exportLabel = 'Export'
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
				getDatas(this, localStorage.base_api + 'kwitansi', {
					method: 'post',
					headers: {
						'Authorization':'bearer ' + localStorage.getItem('token')
					},
					redirect:'follow'
				})
				.then(res => {
					if(res.length > 0)
						this.kwitansi = res
						for(let i = 0;i < this.kwitansi.length;i++) {
							this.kwitansi[i].nod = i+1
						}
				})
				.catch(e => {
					console.error('Kwitansi error ASW')
					console.log(e)
					return false
				})
			},
			deleteKwitansi(id) {
				this.$swal({
			        title: 'Kamu yakin? :(',
			        text: 'Kamu akan akan menghapus data ini permanen',
			        icon: 'warning',
			        buttons: true,
			        dangerMode: true
			      })
				.then((del) => {
					if(del) {
						this.$http.delete(localStorage.base_api + 'kwitansi/' + id, {
							headers: {
								'Authorization':'bearer ' + localStorage.getItem('token')
							},
							redirect:'follow'
						})
						.then(res => {
							this.kwitansi = []
							this.$swal('Data kwitansi berhasil dihapus', 'Mohon tunggu sebentar...', 'success')
							setTimeout(() => {
								this.$swal.close()
								this.getData()	
							}, 1500)
							
						})
						.catch(e => {
							
							this.$swal('Tidak bisa menghapus data', 'hubungi pengembangnya...', 'error')
		                    setTimeout(() => {
		                    	this.$swal.close()
		                    }, 1500)
							console.error(e.response)
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
			if(localStorage.level != 1 && localStorage.level != 2 && localStorage.level != 3) {
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