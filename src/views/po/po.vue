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
							<button @click="modal = true" class="float-right mb-4 ml-2 btn btn-light"><small> <i class="fa fa fa-file-excel-o mr-1"></i> Export .xlsx</small></button>		
							<router-link v-if="data.level != 2 && data.level != 6 && data.level != 3" to="/po/add" class="float-right mb-4 btn btn-light"><small> <i class="fa fa-plus mr-1"></i> Tambah PO</small></router-link>		

								<v-client-table
								:data="po"
								:columns="tableFields"
								:options='tableOptions'

								id="po_table">
									<!-- <td slot="other" slot-scope="props">
										<div>{{props.row.other == null ? '-' : props.row.other}}</div>
									</td> -->
									<td slot="status" slot-scope="props" class="d-flex justify-content-center">
										
											<span  v-if="props.row.status == 1" class="badge badge-primary">Request</span>
											<span  v-else-if="props.row.status == 2" class="badge badge-warning">Proses</span>
											<span  v-else-if="props.row.status == 3" class="badge badge-warning">Pengiriman</span>
											<span  v-else-if="props.row.status == 4" class="badge badge-success">Selesai</span>
											<span  v-else-if="props.row.status == 5" class="badge badge-danger">Batal</span>
										
									</td>
									<td slot="aksi" slot-scope="props" class="d-flex justify-content-center">
										
											<router-link title="detail po" :to="'/po/detail/' + props.row.id" class="text-dark btn btn-secondary mr-2 btn-sm">
												<i class="fa fa-eye"></i>
											</router-link>

											<router-link title="order po" class="btn btn-secondary btn-sm mr-2" :to="'/po/order-barang/' + props.row.id">
												<i class="fa fa-shopping-cart "></i>
											</router-link>
											<router-link v-if="data.level != 2" title="edit po" :to="'/po/edit/' + props.row.id" class="text-primary btn btn-secondary btn-sm mr-2"><i class="fa fa-edit"></i>
											</router-link>
											<button  v-if="data.level != 2" title="export pdf" class="text-danger btn btn-secondary btn-sm mr-2" @click="confirmPDF(props.row.id)"><i class="fa fa-file-pdf-o" ref="id" :id="props.row.id"></i></button>
											<button  v-if="data.level != 2 && data.level != 6 && data.level != 3" title="hapus po" class="text-danger btn btn-secondary btn-sm" @click="deletePO(props.row.id)"><i class="fa fa-trash" ref="id" :id="props.row.id"></i></button>
										
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
	import {exportExcel, exportPDF} from '@/containers/global-function.js'
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
					'nod', 'sales', 'konsumen', 'no', 'status','aksi'
			    ],
			    tableOptions : {
			    	perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
			    	headings : {
			    		nod: 'No',
			    		sales: 'Nama Sales',
			    		konsumen: 'Nama Konsumen',
			    		no: 'No PO',
			    		status: 'Status',
			    		aksi: 'Aksi'
			    	},
			    	sortable:['nod', 'sales', 'konsumen'],
			    	filterable:['nod', 'sales', 'konsumen', 'no', 'status'],
			    	columnsClasses: {
			    		nod:'text-center align-middle',
			    		sales:'align-middle',
			    		konsumen:'align-middle',
			    		no:'align-middle',
			    		status:'text-center align-middle',
			    		aksi:'text-center align-middle'
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
			storePDF() {
				let url = '', filename = 'po.pdf'
				switch(this.pdf.type) {
					case 'po':
						url = 'https://young-temple-67589.herokuapp.com/api/pdf/po/' + this.id
						break
					case 'surat-jalan':
						url = 'https://young-temple-67589.herokuapp.com/api/pdf/po/jalan/' + this.id	
						filename = 'Surat Jalan.pdf'
						break
					case 'invoice':
						url = 'https://young-temple-67589.herokuapp.com/api/pdf/po/invoice/' + this.id	 
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
				}, filename, 'post')
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
				let headers = new Headers()
				headers.append('Authorization', 'bearer ' + localStorage.getItem('token'))
				let options = {
					method:'GET',
					headers,
					redirect:'follow'
				}
				fetch('https://young-temple-67589.herokuapp.com/api/po', options)
				.then(res => res.json())
				.then(res => {
					if(res.length > 0) {
						this.po = res
						for(let i = 0;i < this.po.length;i++) {
							this.po[i].nod = i+1
						}
					}
				})
				.catch(e => {
					console.error('ADa error')
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
				exportExcel(this, 'https://young-temple-67589.herokuapp.com/api/excel/po', {from:this.date.from, to:this.date.to}, {
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
			      		this.$http.delete('https://young-temple-67589.herokuapp.com/api/po/' + id, {
							headers: {
								'Authorization': 'bearer ' + localStorage.token
							}
						})
						.then(() => {
							this.$swal('Data Purchase Order berhasil dihapus', 'Mohon tunggu sebentar...', 'success')
							setTimeout(() => {
								this.$swal.close()
								this.getData()
							}, 1500)
							
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
			this.getData()
		},
		mounted() {
			this.data = this.$store.getters.userData
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