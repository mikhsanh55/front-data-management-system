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
                    			<CCol sm="8">
				                    <CSelect
				                    	placeholder="Pilih Barang"
				                        :label="labelBarang"
				                        horizontal
				                        v-model="rpo.nama_barang"
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
			                        	type="number"  
			                        	:description="validator.harga_jual_msg"
			                        	:is-valid="validator.harga_jual"
			                        	autocomplete="harga_jual"
			                        	label="Harga Jual Satuan"
			                        	horizontal
			                        	placeholder="Masukan Harga Jual Satuan"
			                        	v-model="rpo.harga_jual"
			                        	readonly
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
                    			</CCol>
                    			<CCol sm="8" class="d-flex justify-content-end mt-4">
                    				<button class="btn btn-light text-primary" @click.prevent="addToTable"><i class="fa fa-plus mr-2"></i>{{label}}</button>
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
										<button class="btn btn-secondary text-danger m-1"  @click="deleteFromTable(props)"><i class="fa fa-trash"></i></button>				
									</div>
								</v-client-table>
							</CCol>
						</CRow>
					</CCardBody>
					<CCardFooter class="m-4 d-flex justify-content-end">
						<button class="btn btn-light text-primary" :disabled="isEmpty" ><i class="fa fa-cart-plus mr-2"></i> Selesai </button>
					</CCardFooter>
				</CCard>
			</CCol>
		</CRow>
	</div>
</template>
<script type="text/javascript">
	import {getDatas, getOrderBarang} from '@/containers/global-function.js'
	export default {
		name:'OrderPO',
		data() {
			return {
				labelBarang: 'Pilih Barang',
				isEmpty:true,
				label: 'Tambah',
				errors:[],
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
					status:1,
					kode_barang: null,
					tax:null,
					disc:null,
					total:null,
					sub_total:0
				},
				order_barang:[]
			}
		},
		computed: {
			search() {
				return this.barang
			}
		},
		methods: {
			assignNamaBarang(val,i) {
				this.rpo.id_barang = val
				this.rpo.nama_barang = i.target.selectedOptions[0].innerHTML

				for(let i = 0;i < this.barangs.length;i++) {
					if(this.barangs[i].id == val) {
						this.rpo.harga_jual = this.barangs[i].harga_jual
						this.rpo.spesifikasi_barang = this.barangs[i].spesifikasi
						this.rpo.kode_barang = this.barangs[i].kode_barang
						this.rpo.tax = this.barangs[i].tax
						return
					}
				}
			},
			getRequest(url) {
				return new Promise((resolve, reject) => {
					this.$http.get(url, {
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
		    deleteFromTable(e) {
		    	// console.log(e.index - 1)
		    	this.order_barang.splice(e.index-1, 1)
		    	// let order_barang = JSON.parse(localStorage.getItem('order_barang'))
		    	// order_barang.splice(e.index)
		    	localStorage.setItem('order_barang', JSON.stringify(this.order_barang))
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
					this.label = 'Loading...'
					this.rpo.id_po = this.$route.params.id
					this.rpo.total = Math.round(((this.rpo.harga_jual * this.rpo.qty) + this.rpo.tax / 100) - (this.rpo.disc / 100 * (this.rpo.harga_jual * this.rpo.qty)))
		    	
			    	this.$http.post('https://young-temple-67589.herokuapp.com/api/order/barang/po', this.rpo, {
			    		headers: {
			    			'Authorization': 'bearer ' + localStorage.token
			    		}
			    	})
			    	.then((res) => {
			    		this.rpo = {
							id_po:null,
							id_barang:1,
							nama_barang:null,
							spesifikasi_barang:null,
							qty:0,
							tanggal:null,
							harga_jual:null,
							status:1,
							kode_barang: null,
							tax:null,
							disc:null,
							total:null,
							sub_total:0
						}		
			    		this.label = 'Tambah'
			    		this.getDataTable()
			    	})
			    	.catch(e => {
			    		this.label = 'Tambah'
			    		if(e.response) {
			    			for(let er in e.response.data.errmsg) {
			    				alert(e.response.data.errmsg[er][0])
			    			}
			    		}
			    		
			    		console.error(e.response)
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
		    	this.getRequest('https://young-temple-67589.herokuapp.com/api/barang').then((data) => {

		    		if(data.length < 1){
		    			alert('Mohon maaf belum ada barang masuk untuk saat ini, silahkan tambah dulu barangnya yah')
		    			return false
		    		}
		    		else {
		    			this.barangs = data
			    		for(let i = 0;i < data.length;i++) {
			    			let obj = {}
			    			obj.value = data[i].id
			    			obj.label = data[i].nama_barang

			    			self.barang.push(obj)
			    			
			    		}	
		    		}
		    	}) 
		    	.catch(e => console.error(e))
		    },
		    getDataTable() {
		    	return new Promise((resolve, reject) => {
				    this.$http.post('https://young-temple-67589.herokuapp.com/api/order/barang/po/detail/' + this.$route.params.id, {
						headers:{
							'Authorization':'bearer ' + localStorage.token
						}
					})
					.then(res => {
						let arr = []
						arr = res.data
						arr.forEach((item, i) => {
							getDatas(this, 'https://young-temple-67589.herokuapp.com/api/barang/' + item.id_barang, { method:'POST', headers:{'Authorization': 'bearer ' + localStorage.token}}, 'POST')
							.then(res => {
								delete item.id
								delete item.id_po
								delete item.id_barang
								delete item.id_pesanan
								delete item.created_at
								delete item.deleted_at
								item.no = ++i
								item.kode_barang = res.kode_barang
								item.nama_barang = res.nama_barang
								item.spesifikasi_barang = res.spesifikasi
								item.harga_jual = Number(res.harga_jual)
								item.total = ((item.harga_jual * item.qty) + item.tax) - (item.disc * (item.harga_jual * item.qty))
								this.order_barang.push(item)
							})
							.catch(e => console.error(e))
						})

						return arr
					})
					.then(res => {
						resolve(res)
						console.log(res)
					})
					.catch(e => {
						reject(e)
					})	
		    	})
		    }
		},
		created() {
			this.fetchAll()
			this.getDataTable()
			.then((res) => {
			})
			.catch(e => console.error(e))
		}
	}
</script>
<style>
	#request-table .form-inline label {
		display: none;
	}	
	.VuePagination {
		margin-top: 20px;	
		display: flex;
		justify-content: center;
	}
</style>