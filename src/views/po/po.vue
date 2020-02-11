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
							<button @click="modal = true" class="float-right mb-4 ml-2 btn btn-light"><small> <i class="fa fa fa-file-excel-o mr-1"></i> Export PO</small></button>		
							<router-link v-if="data.level != 2 && data.level != 6 && data.level != 3" to="/po/add" class="float-right mb-4 btn btn-light"><small> <i class="fa fa-plus mr-1"></i> Tambah PO</small></router-link>		

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
											<router-link title="detail po" :to="'/po/detail/' + props.row.id" class="text-dark btn btn-secondary mr-2 btn-sm">
												<i class="fa fa-eye"></i>
											</router-link>

											<router-link title="order po" class="btn btn-secondary btn-sm mr-2" :to="'/po/order-barang/' + props.row.id">
												<i class="fa fa-shopping-cart "></i>
											</router-link>
											<router-link v-if="data.level != 2" title="edit po" :to="'/po/edit/' + props.row.id" class="text-primary btn btn-secondary btn-sm mr-2"><i class="fa fa-edit"></i>
											</router-link>
											<button  v-if="data.level != 2" title="export pdf" class="text-danger btn btn-secondary btn-sm mr-2" @click="confirmPDF(props.row.id)"><i class="fa fa-file-pdf-o" ref="id" :id="props.row.id"></i></button>
											<button v-if="data.level != 2 && data.level != 6 && data.level != 3" title="hapus po" class="text-danger btn btn-secondary btn-sm" @click="deletePO(props.row.id)"><i class="fa fa-trash" ref="id" :id="props.row.id"></i></button>
										
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
		      type="date"
		      label="Jenis Dokumen"
		      horizontal
		      :options="pdf"
		      v-model="pdf.type"
		      @update:value="assignPDF"
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
		name: 'PO',
		data() {
			return {
				exportLabel: 'Mulai Export',
				pdf: {type:'po'},
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
					'nod', 'no', 'date', 'tgl_po_masuk', 'date_line', 'sales', 'konsumen',  'aksi'
			    ],
			    tableOptions : {
			    	perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
			    	headings : {
			    		nod: 'No',
			    		sales: 'Nama Sales',
			    		date: 'Tanggal PO',
			    		tgl_po_masuk: 'Tanggal PO Masuk',
			    		date_line: 'Tanggal Pengiriman',
			    		konsumen: 'Nama Konsumen',
			    		no: 'No PO',
			    		aksi: 'Aksi'
			    	},
			    	sortable:['nod', 'sales', 'konsumen', 'date', 'date_line', 'tgl_po_masuk'],
			    	filterable:['nod', 'sales', 'konsumen', 'no',  'date', 'date_line', 'tgl_po_masuk'],
			    	columnsClasses: {
			    		nod:'text-center align-middle',
			    		sales:'align-middle',
			    		konsumen:'align-middle',
			    		no:'align-middle',
			    		aksi:'text-center align-middle',
			    		date:'text-center align-middle',
			    		date_line:'text-center align-middle',
			    		tgl_po_masuk:'text-center align-middle'
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
					method:'get',
					redirect: 'follow'
				}, 'get')
				.then(res => {
					this.po = res
					this.po.forEach((item, i) => {
						let dates = item.date.split('-'),
						dateline = item.date_line.split('-'),
						tgl_po_masuk = item.tgl_po_masuk.split('-')

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

				this.$swal({
					title: 'Mohon tunggu...',
					showCloseButton:false,
					showCancelButton:false,
				})
				
				exportPDF(this, url, {
					responseType: 'blob',
					headers: {
						'Authorization' : 'bearer ' + localStorage.token
					}
				}, filename, 'get')
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
			storeExcel() {
				if(this.date.from == null && this.date.to == nul)  {
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