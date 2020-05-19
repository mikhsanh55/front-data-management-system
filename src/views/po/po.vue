<template>
	<div>
		<CRow>
			<CCard class="w-100">
				<CCardHeader>
					<b>Data</b> Purchase Order
				</CCardHeader>
				<CCardBody>
					<CRow>
						<CCol sm="12">
							<button @click="modal = true" class="float-right mb-4 ml-2 btn btn-success"><small> <i class="fa fa fa-file-excel-o mr-1"></i> Export PO</small></button>		
							<router-link v-if="data.level != 2 && data.level != 6 && data.level != 3" to="/po/add" class="float-right mb-4 btn btn-primary"><small> <i class="fa fa-plus mr-1"></i> Tambah PO</small></router-link>		

								<v-client-table
								:data="po"
								:columns="tableFields"
								:options='tableOptions'

								id="po_table">
									<!-- <td slot="other" slot-scope="props">
										<div>{{props.row.other == null ? '-' : props.row.other}}</div>
									</td> -->
									<td slot="aksi" slot-scope="props" class="d-flex justify-content-center align-items-center">
											<span  v-if="props.row.status == 1" class="badge mr-2 align-middle ml-2 badge-primary">Request</span>
											<span  v-else-if="props.row.status == 2" class="badge mr-2 align-middle ml-2 badge-warning">Proses</span>
											<span  v-else-if="props.row.status == 3" class="badge mr-2 align-middle ml-2 badge-warning">Pengiriman</span>
											<span  v-else-if="props.row.status == 4" class="badge mr-2 align-middle ml-2 badge-success">Selesai</span>
											<span  v-else-if="props.row.status == 5" class="badge mr-2 align-middle ml-2 badge-danger">Batal</span>
											<router-link title="detail po" :to="'/po/detail/' + props.row.id" class="btn btn-dark mr-2 btn-sm">
												Detail
											</router-link>

											<router-link title="order po" class="btn btn-warning btn-sm mr-2" :to="'/po/order-barang/' + props.row.id">
												Order
											</router-link>
											<router-link v-if="data.level != 2" title="edit po" :to="'/po/edit/' + props.row.id" class="btn btn-primary btn-sm mr-2">Edit
											</router-link>
											<button  v-if="data.level != 2" title="export pdf" class="btn btn-outline-danger btn-sm mr-2" @click="confirmPDF(props.row.id)">PDF</button>
											<button v-if="data.level != 2 && data.level != 6 && data.level != 3" title="hapus po" class="btn btn-danger btn-sm" @click="deletePO(props.row.id)">Hapus</button>
										
									</td>
								</v-client-table>
						</CCol>				
					</CRow>
				</CCardBody>
			</CCard>
		</CRow>
		<CModal
	      :show.sync="modal_pdf"
	      :no-close-on-backdrop="true"
	      title="Export Data ke Excel"
	      size="sm"
	      color="dark"
	    >	
	      <CSelect
		      label="Jenis Dokumen"
		      horizontal
		      :options="pdf"
		      v-model="pdf_data.type"
		      @update:value="assignPDF"
	       />	
	      <CInput
	      	  label="Nama Perusahaan"
	      	  horizontal
	      	  v-model="pdf_data.nama"
	      	  placeholder="Contoh company"
	       /> 
	      <CInput
	          label="Tanggal"
	      	  type="date"
	      	  horizontal
	      	  v-model="pdf_data.tanggal"
	       /> 
	      <template #header>
	        <h6 class="modal-title">Export Data ke PDF</h6>
	        <CButtonClose @click="modal_pdf = false" class="text-white"/>
	      </template>
	      <template #footer>
	        <CButton @click="storePDF" color="success">{{exportLabel}}</CButton>
	      </template>
	    </CModal>
		<CModal
	      :show.sync="modal"
	      :no-close-on-backdrop="true"
	      title="Export Data ke Excel"
	      size="sm"
	      color="dark"
	    >	
	      <CInput
		      type="date"
		      label="Dari"
		      horizontal
		      v-model="date.from"
	       />	
	       <CInput
		      type="date"
		      label="Sampai"
		      horizontal
		      v-model="date.to"
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
	import {exportExcel, exportPDF, getDatas, deleteData} from '@/containers/global-function.js'
	export default {
		name: 'Purchase Order',
		data() {
			return {
				exportLabel: 'Mulai Export',
				pdf_data: {type:'po', tanggal:'', nama:''},
				pdf: [
					{
						label:'Purchase Order',
						value:'po'
					},
					{
						label: 'Surat Jalan',
						value:'surat-jalan'
					},
					{
						label: 'Invoice',
						value:'invoice'
					}
				],
				date: {
					from:null,
					to:null
				},
				modal_pdf:false,
				modal:false,
				id:0,
				data:'',
				po:[],
				tableFields : [ 
					'nod', 'no_invoice', 'no_surat_jalan', 'no', 'date', 'tgl_po_masuk', 'date_line', 'konsumen',  'aksi'
			    ],
			    tableOptions : {
			    	perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
			    	headings : {
			    		nod: 'No',
			    		no_invoice: 'No Invoice',
			    		no_surat_jalan: 'No Surat Jalan',
			    		date: 'Tanggal PO',
			    		tgl_po_masuk: 'Tanggal PO Masuk',
			    		date_line: 'Tanggal Pengiriman',
			    		konsumen: 'Nama Konsumen',
			    		no: 'No PO',
			    		aksi: 'Aksi'
			    	},
			    	sortable:['nod', 'no_invoice', 'no_surat_jalan', 'konsumen', 'date', 'date_line', 'tgl_po_masuk'],
			    	filterable:['nod', 'konsumen', 'no',  'date', 'date_line', 'tgl_po_masuk'],
			    	columnsClasses: {
			    		nod:'text-center align-middle',
			    		konsumen:'align-middle',
			    		no:'align-middle',
			    		aksi:'text-center align-middle',
			    		date:'text-center align-middle',
			    		date_line:'text-center align-middle',
			    		tgl_po_masuk:'text-center align-middle',
			    		no_invoice:'text-center align-middle',
			    		no_surat_jalan:'text-center align-middle',
			    	}
			    },
			    id:0
			}
		},
		methods: {
			confirmPDF(id) {
				this.id = id
				this.modal_pdf = true
			},
			assignPDF(val) {
				this.pdf.type = val
			},
			getData() {
				getDatas(this, localStorage.base_api + 'po', {
					headers: {
						'Authorization': 'bearer ' + localStorage.token
					},
					method:'post',
					redirect: 'follow'
				}, 'post')
				.then(res => {
					this.po = res
					this.po.forEach((item, i) => {
						let dates = item.date.split('-'),
						dateline = item.date_line.split('-'),
						tgl_po_masuk = item.tgl_po_masuk.split(' ')
						tgl_po_masuk = tgl_po_masuk[0]
						tgl_po_masuk = tgl_po_masuk.split('-')
						item.nod = i + 1
						item.date = `${dates[2]}-${dates[1]}-${dates[0]}`
						item.date_line = `${dateline[2]}-${dateline[1]}-${dateline[0]}`
						item.tgl_po_masuk = `${tgl_po_masuk[2]}-${tgl_po_masuk[1]}-${tgl_po_masuk[0]}`

					})
				})
				.catch(e => {
					console.error(e)
					return false
				})
			},
			storePDF() {
				let url =  localStorage.base_api + 'pdf/po/' + this.id, filename = 'po.pdf'
				switch(this.pdf.type) {
					case 'po':
						url = localStorage.base_api + 'pdf/po/' + this.id
						break
					case 'surat-jalan':
						url = localStorage.base_api + 'pdf/po/jalan/' + this.id	
						filename = 'Surat Jalan.pdf'
						break
					case 'invoice':
						url = localStorage.base_api + 'pdf/po/invoice/' + this.id	 
						filename = 'Invoice.pdf'
						break
				}

				if(this.pdf.date == '') {
					alert('Harap isi tanggal')
					return false
				}

				this.$swal({
					title: 'Mohon tunggu...',
					showCloseButton:false,
					showCancelButton:false,
				})
				
				exportPDF(this, url, {
					responseType: 'blob',
					method:'post',
					headers: {
						'Authorization' : 'bearer ' + localStorage.token
					}
				}, filename, 'post', this.pdf_data)
				.then(() => {
					this.$swal.close()
				})
				.catch(e => {
					
					if(e.response) {
						console.warn(e.response)
						console.log(e.response)
						if(e.response.status == 400) {
							this.$swal('Gagal mengambil data', '', 'error')
							setTimeout(() => {
								this.$swal.close()
								this.modal = false
							}, 2000)	
						}
						else {
							this.$swal(e.response.data.message, '', 'error')
							setTimeout(() => {
								this.$swal.close()
								this.modal = false
							}, 2000)		
						}
						
					}
					else if(e.request) {
						console.log(e.request)
					}
					return false
				})
			},
			storeExcel() {
				if(this.date.from == null && this.date.to == null)  {
					this.$swal('Tanggal tidak boleh kosong', '', 'warning')
					setTimeout(() => {
						this.$swal.close()
						return false
					}, 2000)
					
					this.exportLabel = 'Mulai Export'
				}

				if(this.date.from == null && this.date.to != null) {
					this.date.from = this.date.to
				}

				if(this.date.from != null && this.date.to == null) {
					this.date.to = this.date.from
				}

				this.exportLabel = 'Loading...'
				exportExcel(this, localStorage.base_api + 'excel/po', {from:this.date.from, to:this.date.to}, {
					responseType: 'blob',
					headers: {
						'Authorization' : 'bearer ' + localStorage.token
					}
				}, 'po.xls')
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
			deletePO(id) {
				this.$swal({
			        title: 'Kamu yakin? :(',
			        text: 'Kamu akan akan menghapus data ini permanen',
			        icon: 'warning',
			        buttons: true,
			        dangerMode: true
			      })
			      .then((deleted) => {
			      	if(deleted) {
			      		deleteData(this, localStorage.base_api + 'po/' + id, {
			      			method: 'delete',
			      			headers: {
			      				'Authorization': 'bearer ' + localStorage.token
			      			},
			      			redirect: 'follow'
			      		})
			      		.then(() => {
							this.$swal('Data Purchase Order berhasil dihapus', 'Mohon tunggu sebentar...', 'success')
							setTimeout(() => {
								this.$swal.close()
								this.getData()
							}, 1500)
							
						})
						.catch(e => {
							this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'error')
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
						
			},
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
		created() {
			if(localStorage.level == 5 || localStorage.level == 4) {
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
	#po_table {
		width: 100%;
	}
	#po_table .form-inline label {
		display: none;	
	}	
	#po_table .form-inline input[type=text] {
		width: 130%;
	}
	#po_table .form-inline {
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