<template>
	<div>
		<CRow>
			<CCol sm="12">
				<CCard>
					<CCardHeader>
						<b>Order</b> Barang
					</CCardHeader>
					<CCardBody>
						<CForm class="mt-4">
							<CRow class="mx-auto d-flex justify-content-center">
                    			<CCol md="8" sm="12">
				                    <CSelect
				                    	placeholder="Pilih Barang"
				                        :label="labelBarang"
				                        horizontal
				                        v-model="rpo.id_barang"
				                        :options="barang"
				                        @update:value="assignNamaBarang"
				                      /> 
				                      
				                    <CTextarea
			                            label="Spesifikasi Barang"
			                            :description="validator.spesifikasi_barang_msg"
			                            :is-valid="validator.spesifikasi_barang"
			                            @input="rpo.spesifikasi_barang.length < 1 ? validator.spesifikasi_barang = false : validator.spesifikasi_barang = true"
			                            horizontal
			                            rows="3"
			                            v-model="rpo.spesifikasi_barang"
			                            readonly
			                          />  

			                        <CInput
			                            type="number"
			                            :description="validator.qty_msg"
			                            :is-valid="validator.qty"
			                            autocomplete="qty"
			                            label="Quantity"
			                            horizontal
			                            placeholder="Masukan Quantity"
			                            v-model="rpo.qty"
			                          />
			                        <CInput
			                        	type="text"
			                        	label="Satuan"
			                        	placeholder="Masukan Satuan"
			                        	horizontal
			                        	v-model="rpo.satuan"
			                        	readonly
			                         />    
			                        <CInput
			                        	type="text"  
			                        	:description="validator.harga_jual_msg"
			                        	:is-valid="validator.harga_jual"
			                        	autocomplete="harga_jual"
			                        	label="Harga Jual Satuan"
			                        	horizontal
			                        	placeholder="Masukan Harga Jual Satuan"
			                        	v-model="rpo.harga_jual"
			                          />
			                        <CInput
				                        type="number"
				                        :description="validator.tax_msg"
				                        :is-valid="validator.tax"
				                        @input="rpo.tax.length < 1 ? validator.tax = false : validator.tax = true"
				                        autocomplete="tax"
				                        label="Pajak (%)"
				                        horizontal
				                        placeholder="Masukan Tax Rate"
				                        v-model="rpo.tax"
				                      />
				                      <CInput
				                        type="number"
				                        :description="validator.disc_msg"
				                        :is-valid="validator.disc"
				                        @input="rpo.disc.length < 1 ? validator.disc = false : validator.disc = true"
				                        autocomplete="disc"
				                        label="Disc %"
				                        horizontal
				                        placeholder="Masukan disc"
				                        v-model="rpo.disc"
				                      />  
				                      <div class="d-flex justify-content-end mt-4">
	                    				<button class="btn btn-primary" @click.prevent="addToTable"><i class="fa fa-plus mr-2"></i>{{label}}</button>
	                    			</div>
                    			</CCol>
                    			<CCol md="2" sm="12">
                    				<div>
                    					<button class="btn btn-success" @click.prevent="openBarangModal = true"><i class="fa fa-search mr-1"></i>Cari Barang</button>
                    				</div>
                    			</CCol>
                    			
                    		</CRow>
						</CForm>
						<br>
						<hr class="text-center w-75">
						<br>
						<CRow>
							<CCol sm="12">
								<v-client-table
								:data="order_barang"
								:columns="tableFields"
								:options="tableOptions"
								id="request-table"
								 class="m-4"
								>
									<div slot="aksi" slot-scope="props">
										<button class="btn btn-secondary text-danger m-1"  @click="deleteFromTable(props.row.id)"><i class="fa fa-trash"></i></button>				
									</div>
								</v-client-table>
								<div class="d-flex justify-content-end">
								<div></div>	
								<table class="table table-bordered table-striped m-2 mr-3 justify-content-end w-50">
									<tr>
										<th class="w-50 text-right">Sub Total</th>
										<td>{{rpo.sub_total | formatRupiah}}</td>
									</tr>
									<tr>
										<th class="w-50 text-right" >Discount</th>
										<td>{{rpo.disc}}</td>
									</tr>
									<tr>
										<th class="w-50 text-right">Tax Rate (%)</th>
										<td>{{rpo.tax_rate}}</td>
									</tr>
									<tr>
										<th class="w-50 text-right">Sales Fee</th>
										<td>{{rpo.sales_fee | formatRupiah}}</td>
									</tr>
									<tr>
										<th class="w-50 text-right">Other Cost</th>
										<td>{{rpo.other | formatRupiah}}</td>
									</tr>
									<tr>
										<th class="w-50 text-right" >Grand Total</th>
										<td>{{(rpo.sub_total - rpo.disc + rpo.tax_rate + rpo.sales_fee + rpo.other) | formatRupiah}}</td>
									</tr>
								</table>
								</div>
							</CCol>
						</CRow>
					</CCardBody>
					<CCardFooter class="m-4 d-flex justify-content-end">
						<router-link to="/po" class="btn btn-primary" :disabled="isEmpty" ><i class="fa fa-cart-plus mr-2"></i> Selesai </router-link>
					</CCardFooter>
				</CCard>
			</CCol>
		</CRow>
		<CModal
	      :show.sync="openBarangModal"
	      :no-close-on-backdrop="true"
	      title="Cari Barang"
	      size="lg"
	      color="dark"
	    >	
	      <CInput
		    type="text"
            description="Ketik minimal 3 huruf untuk melihat hasil"
            label="Cari Barang"
            horizontal
            placeholder="Masukan nama barang"
            v-model="barangKeyword"
            class="m-4"
	       />	
	       <v-client-table
			:data="searchBarang"
			:columns="searchBarangFields"
			:options="searchBarangOptions"
			id="search-barang-table"
			 class="m-4"
			>
				<div slot="aksi" slot-scope="props">
					<button class="btn btn-primary" @click="selectBarang(props.row.id, props.row.nama_barang)">Pilih</button>
				</div>
			</v-client-table>
	      <template #header>
	        <h6 class="modal-title">Cari Barang</h6>
	        <CButtonClose @click="openBarangModal = false" class="text-white"/>
	      </template>
	    </CModal>
	</div>
</template>
<script type="text/javascript">
	import mixins from '@/mixins/currency.js'
	import {getDatas, getOrderBarang} from '@/containers/global-function.js'
	export default {
		name:'OrderPO',
		mixins:[mixins],
		data() {
			return {
				barangKeyword:null,
				openBarangModal:false, // For Modal Barang
				labelBarang: 'Pilih Barang',
				isEmpty:true,
				label: 'Tambah',
				errors:[],
				searchBarangFields: ['kode_barang', 'nama_barang', 'stock', 'satuan', 'aksi'],
				searchBarangOptions: {
					headings: {
						kode_barang: 'Kode',
						nama_barang: 'Nama',
						stock: 'Stok',
						satuan: 'Satuan',
						aksi: 'Aksi'
					},
					sortable: ['kode_barang', 'nama_barang', 'stock', 'satuan'],
					filterable: ['kode_barang', 'nama_barang', 'stock', 'satuan'],
					columnsClasses: {
						kode_barang:'align-middle',
						nama_barang:'align-middle',
						stock:'text-center align-middle',
						satuan:'text-center align-middle',
						aksi:'text-center align-middle',
					}
				},
				tableFields: ['no', 'kode_barang', 'nama_barang', 'spesifikasi_barang', 'harga_jual', 'qty', 'tax', 'disc', 'total', 'aksi'],
				tableOptions:{
					perPage:10,
					pagination:{chunk:10, dropdown:false, edge:true, nav:'fixed'},
					headings:{	
						no:'No',
						kode_barang: 'Kode Barang',
						nama_barang: 'Nama Barang',
						spesifikasi_barang: 'Spesifikasi',
						harga_jual: 'Harga Jual',
						qty: 'qty',
						tax: 'Pajak %',
						disc: 'disc %',
						total: 'Total',
						aksi: 'Aksi'
					},
					sortable: ['no', 'kode_barang', 'nama_barang', 'qty'],
					filterable:['no', 'kode_barang', 'nama_barang', 'spesifikasi_barang', 'harga_jual', 'qty', 'tax', 'disc', 'total'],
					columnsClasses: {
						no:'text-center align-middle',
						kode_barang:'align-middle',
						nama_barang:'align-middle',
						spesifikasi_barang:'align-middle',
						harga_jual:'text-center align-middle',
						qty:'text-center align-middle',
						tax:'text-center align-middle',
						disc:'text-center align-middle',
						total:'text-center align-middle',
						aksi:'text-center align-middle',
					}
					
				},
				searchBarang:[],
				barang: [],
				barangs:[],
				validator:{
					harga_jual:null,
					harga_jual_msg:null,
					spesifikasi_barang:null,
					spesifikasi_barang_msg:null,
					qty:null,
					qty_msg:null,
					tanggal:null,
					tanggal_msg:null
				},
				rpo: {
					id_po:null,
					id_barang:1,
					nama_barang:null,
					spesifikasi_barang:null,
					qty:0,
					tanggal:null,
					harga_jual:null,
					satuan:null,
					status:1,
					kode_barang: null,
					tax_rate:0,
					total:0,
					sub_total:0,
					sales_fee:0,
					other:0,
					sub_total:0,
					sales_tax_rate:0,
					disc:0,
					tax:0,
					grand_total:0
					
				},
				order_barang:[]
			}
		},
		watch: {
			'rpo.harga_jual': function(val) {
				this.rpo.harga_jual = this.toRupiah(val)
			},
			barangKeyword: function(val) {
				if(val.length >= 3)
					if(val != null || val != '') {
						let s = this.barangs.filter(item => item.nama_barang.toLowerCase().indexOf(val) > -1)
						if(s.length > 0) {
							this.searchBarang = s
						}
						else {
							this.searchBarang = []
						}
					}
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
			selectBarang(id_barang, nama_barang) {
				this.assignNamaBarang(id_barang, nama_barang)
				this.openBarangModal = false
			},
			assignNamaBarang(val,i) {
				this.rpo.id_barang = val
				this.rpo.nama_barang = typeof i == 'object' ? i.target.selectedOptions[0].innerHTML : i

				for(let i = 0;i < this.barangs.length;i++) {
					if(this.barangs[i].id == val) {
						this.rpo.satuan = this.barangs[i].satuan
						this.rpo.harga_jual = this.barangs[i].harga_jual
						this.rpo.spesifikasi_barang = this.barangs[i].spesifikasi
						this.rpo.kode_barang = this.barangs[i].kode_barang
					}
				}
			},
			getRequest(url) {
				return new Promise((resolve, reject) => {
					this.$http.post(url, {
	                  headers: {
			            'Authorization': 'bearer ' + localStorage.getItem('token')
			          },
			          redirect:'follow'
			        })
			        .then(response => {
			          resolve(response.data)
			        })
			        .catch(e => {
			          alert('Ada sedikit error saat ambil data!')
			          console.log(e)
			          reject(e)
			          return false
			        })	
				})
		        
		    },
		    deleteFromTable(i) {
		    	this.$swal('Mohon tunggu', '', 'info')
		    	this.$http.delete(localStorage.base_api + 'order/barang/po/' + i, {
		    		headers: {
		    			'Authorization' : 'bearer ' + localStorage.token
		    		}
		    	}).then(() => {
		    		this.barang = []
		    		this.order_barang = []
		    		this.fetchAll()
					this.getDataTable()
					this.$swal.close()
		    	})
		    	.catch(e => {
		    		this.$swal('Tidak bisa menghapus data', 'mohon hubungi pengembangnya', 'error')
		    		console.error(e)
		    	})
		    },
		    addToTable() {
		    	this.errors = []
		    	if(!this.rpo.spesifikasi_barang) {
		    		this.validator.spesifikasi_barang = false
	                this.validator.spesifikasi_barang_msg = 'Harap isi Spesifikasi barang'
	                this.errors.push('spesifikasi_barang kosong')	
		    	}

		    	if(!this.rpo.qty) {
		    		this.validator.qty = false
	                this.validator.qty_msg = 'Harap isi qty barang'
	                this.errors.push('qty kosong')
		    	}

		    	if(!this.errors.length){
		    		// convert harga jual formatted to number
		    		this.rpo.harga_jual = this.toFloatRupiah(this.rpo.harga_jual)
					this.label = 'Loading...'
					this.rpo.id_po = this.$route.params.id
					this.rpo.total = Math.round(((this.rpo.harga_jual * this.rpo.qty) + this.rpo.tax / 100) - (this.rpo.disc / 100 * (this.rpo.harga_jual * this.rpo.qty)))
		    	
			    	this.$http.post(localStorage.base_api + 'order/barang/po', this.rpo, {
			    		headers: {
			    			'Authorization': 'bearer ' + localStorage.token
			    		}
			    	})
			    	.then((res) => {
			    		this.order_barang = []
			    		this.rpo = {
							id_po:null,
							id_barang:1,
							nama_barang:null,
							spesifikasi_barang:null,
							qty:0,
							tanggal:null,
							satuan:null,
							harga_jual:null,
							status:1,
							kode_barang: null,
							tax_rate:0,
							total:0,
							sub_total:0,
							sales_fee:0,
							other:0,
							sub_total:0,
							sales_tax_rate:0,
							disc:0,
							tax:0,
							grand_total:0
						}		
			    		this.label = 'Tambah'
			    		this.getDataTable()
			    		window.scrollBy({ 
				            top: 1000, // could be negative value
				            left: 0, 
				            behavior: 'smooth' 
				          })
			    	})
			    	.catch(e => {
			    		this.label = 'Tambah'
			    		if(e.response) {
			    			console.error(e)
			    			this.$swal(e.response.data.message, '', 'warning')
			    			this.getDataTable()
			    			setTimeout(() => {
			    				this.$swal.close()
			    			}, 1500)
			    		}
			    		console.error(e)
			    		return false
			    	})	
		    	}
		    	else {
		    		console.log(this.errors)
		    		window.scrollBy({ 
			            top: -500, // could be negative value
			            left: 0, 
			            behavior: 'smooth' 
			          })
			          return false
		    	}
		    	
		    },
		    fetchAll() {
		    	
		    	let 
		    	self = this,
		    	arr = []
		    	getDatas(this, localStorage.base_api + 'barang', {
					method: 'post',
					headers: {
						'Authorization': 'bearer ' + localStorage.getItem('token')
					},
					redirect:'follow'
				})
		    	.then((data) => {

		    		if(data.length < 1){
		    			alert('Mohon maaf belum ada barang masuk untuk saat ini, silahkan tambah dulu barangnya yah')
		    			return false
		    		}
		    		else {
		    			this.barangs = data
			    		data.forEach((item, i) => {
			    			let obj = {}
			    			obj.label = `${item.nama_vendor} - ${item.nama_barang}`
			    			obj.value = item.id
			    			self.barang.push(obj)

			    		})
			    			
			    			// let obj = {}
			    			// obj.value = data[i].id
			    			// obj.label = data[i].nama_barang
			    			// self.barang.push(obj)
			    		
		    		}
		    	}) 
		    	.catch(e => {
		    		console.error(e)
					this.$swal('Tidak bisa mengambil data barang', 'Mohon hubungi pengembangnya', 'error')
					setTimeout(() => this.$swal.close(), 1500)
					return false
		    	})
		    },
		    getDataTable() {
		    	this.order_barang = []
		    	getDatas(this, localStorage.base_api + 'order/barang/po/detail/' + this.$route.params.id, {method:'post',headers: {'Authorization': 'bearer ' + localStorage.token}}, 'post')
				.then(res => {
					res.forEach((item, i) => {
							let obj = {
								id:item.id,
								no:++i,
								qty: item.qty,
								tax: item.tax,
								disc: item.disc,
								kode_barang:item.kode_barang,
								nama_barang:item.nama_barang,
								spesifikasi_barang:item.spesifikasi,
								harga_jual: item.harga_jual,
								total: (item.harga_jual * item.qty)
							}	
							this.order_barang.push(obj)
							this.rpo.sub_total += parseInt(item.harga_jual * item.qty)
							this.rpo.disc += parseInt(item.harga_jual * item.qty * (item.disc/100))
							this.rpo.tax_rate += parseInt(item.harga_jual * item.qty * (item.tax/100))
					})
				})
				.catch(e => {
					console.error(e)
					this.$swal('Tidak bisa mengambil data barang', 'Mohon hubungi pengembangnya', 'error')
					setTimeout(() => this.$swal.close(),1500)
					return false
				})	
			}
					
		},
		created() {
			if(localStorage.level == 5 || localStorage.level == 4) {
				this.$router.push('/')
			}
			this.fetchAll()
			this.getDataTable()
		}
	}
</script>
<style>
	#search-barang-table .form-inline input[type=text] {
		display: none;
	}
	#search-barang-table .form-inline label, #request-table .form-inline label {
		display: none;
	}	
	.VuePagination {
		margin-top: 20px;	
		display: flex;
		justify-content: center;
	}
</style>