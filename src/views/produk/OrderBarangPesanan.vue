<template>
	<div>
		<CRow>
			<CCol sm="12">
				<CCard>
					<CCardHeader>
						<b>Order</b> Barang Pesanan
					</CCardHeader>
					<CCardBody>
						<CForm class="mt-4">
							<CRow class="mx-auto d-flex justify-content-center">
                    			<CCol sm="8">
				                    <CSelect
				                    	placeholder="Pilih Barang"
				                        :label="labelBarang"
				                        horizontal
				                        v-model="order_barang_pesanan.nama_barang"
				                        :options="barang"
				                        @update:value="assignNamaBarang"
				                      />    

				                    <CInput
			                            type="text"
			                            :description="validator.kode_barang_msg"
			                            :is-valid="validator.kode_barang"
			                            autocomplete="kode_barang"
			                            label="Kode Barang"
			                            horizontal
			                            placeholder="Masukan Quantity"
			                            v-model="order_barang_pesanan.kode_barang"
			                            readonly
			                          />  

				                    <CTextarea
			                            label="Spesifikasi Barang"
			                            horizontal
			                            rows="3"
			                            v-model="order_barang_pesanan.spesifikasi_barang"
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
			                            v-model="order_barang_pesanan.qty"
			                          />  
			                        <CInput
			                        	type="text"  
			                        	:description="validator.satuan_msg"
			                        	:is-valid="validator.satuan"
			                        	autocomplete="satuan"
			                        	label="Satuan"
			                        	horizontal
			                        	placeholder="Masukan Satuan"
			                        	v-model="order_barang_pesanan.satuan"
			                        	readonly
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
								:data="order_barang_table"
								:columns="tableFields"
								:options="tableOptions"
								id="request-table"
								 class="m-4"
								>
									<div slot="aksi" slot-scope="props">
										<button class="btn btn-secondary text-danger m-1"  @click="deleteFromTable(props.row.id)"><i class="fa fa-trash"></i></button>				
									</div>
								</v-client-table>
							</CCol>
						</CRow>
					</CCardBody>
					<CCardFooter class="m-4 d-flex justify-content-end">
						<router-link to="/barang-pesanan" class="btn btn-light text-primary" ><i class="fa fa-cart-plus mr-2"></i> Selesai </router-link>
					</CCardFooter>
				</CCard>
			</CCol>
		</CRow>
	</div>
</template>
<script type="text/javascript">
	import {getDatas, getOrderBarang} from '@/containers/global-function.js'
	export default {
		name:'OrderBarangPesanan',
		data() {
			return {
				labelBarang: 'Pilih Barang',
				label: 'Tambah',
				errors:[],
				tableFields: ['no', 'kode_barang', 'nama_barang', 'spesifikasi_barang',  'qty','satuan', 'aksi'],
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
						satuan: 'Satuan',
						aksi: 'Aksi'
					},
					sortable: ['no', 'kode_barang', 'nama_barang', 'qty'],
					filterable:['no', 'kode_barang', 'nama_barang', 'spesifikasi_barang', 'qty', 'satuan'],
					columnsClasses: {
						no:'text-center align-middle',
						kode_barang:'align-middle',
						nama_barang:'align-middle',
						spesifikasi_barang:'align-middle',
						qty:'text-center align-middle',
						satuan:'text-center align-middle',
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
					satuan:null,
					satuan_msg:null
				},
				order_barang_pesanan: {
					id_barang_pesanan:null,
					id_barang:1,
					nama_barang:null,
					spesifikasi_barang:null,
					qty:0,
					tanggal:null,
					harga_jual:null,
					status:1,
					kode_barang: null,
					tax:null,
					sub_total:0,
					satuan:null
				},
				order_barang_table:[]
			}
		},
		methods: {
			assignNamaBarang(val,i) {
				this.order_barang_pesanan.id_barang = val
				this.order_barang_pesanan.nama_barang = i.target.selectedOptions[0].innerHTML
				for(let i = 0;i < this.barangs.length;i++) {
					if(this.barangs[i].id == val) {
						this.order_barang_pesanan.kode_barang = this.barangs[i].kode_barang
						this.order_barang_pesanan.spesifikasi_barang = this.barangs[i].spesifikasi
						this.order_barang_pesanan.satuan = this.barangs[i].satuan
						return
					}
				}
			},
		    deleteFromTable(id) {
		    	this.$swal('Mohon tunggu', '', 'info')
	    		this.$http.delete('https://young-temple-67589.herokuapp.com/api/order/barang/pesanan/'+id, this.order_barang_pesanan, {
		    		headers: {
		    			'Authorization': 'bearer ' + localStorage.token
		    		}
		    	})
		    	.then(res => {
		    		this.$swal.close()
		    		this.getDataTable()
		    	})
		    },
		    addToTable() {
		    	this.errors = []

		    	if(!this.order_barang_pesanan.qty) {
		    		this.validator.qty = false
	                this.validator.qty_msg = 'Harap isi qty barang'
	                this.errors.push('qty kosong')
		    	}

		    	if(!this.errors.length){
					this.label = 'Loading...'
					this.order_barang_pesanan.id_po = this.$route.params.id

					// Contoh dulu
					this.order_barang_pesanan.id_pesanan = 1
					this.order_barang_pesanan.tax = 10
					this.order_barang_pesanan.disc = 10
					// this.order_barang_pesanan.total = Math.round(((this.order_barang_pesanan.harga_jual * this.order_barang_pesanan.qty) + this.order_barang_pesanan.tax / 100) - (this.order_barang_pesanan.disc / 100 * (this.order_barang_pesanan.harga_jual * this.order_barang_pesanan.qty)))
		    	
			    	this.$http.post('https://young-temple-67589.herokuapp.com/api/order/barang/pesanan', this.order_barang_pesanan, {
			    		headers: {
			    			'Authorization': 'bearer ' + localStorage.token
			    		}
			    	})
			    	.then((res) => {
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
		    getDataTable() {
			    	// Get semua barang pesanan
				getDatas(this, 'https://young-temple-67589.herokuapp.com/api/order/barang/pesanan/detail/' + this.$route.params.id, {method:'post',headers: {'Authorization': 'bearer ' + localStorage.token}}, 'post')
				.then(res => {

					res.forEach((item, i) => {
						getDatas(this, 'https://young-temple-67589.herokuapp.com/api/barang/' + item.id_barang, {method:'post', headers:{'Authorization': 'bearer ' + localStorage.token}}, 'post')
						.then(res => {
							let obj = {
								no:++i,
								kode_barang:res.kode_barang,
								nama_barang:res.nama_barang,
								spesifikasi_barang:res.spesifikasi,
								qty:item.qty,
								satuan:res.satuan
							}	

							this.order_barang_table.push(obj)
						})
					})
				})
				.catch(e => console.error(e))	
		    }
		},
		created() {
			// Get Semua Barang untuk obral
			getDatas(this, 'https://young-temple-67589.herokuapp.com/api/barang', {headers: {'Authorization': 'bearer ' + localStorage.token}}, 'post')
			.then(res => {
				this.barangs = res
				// this.barangs.forEach((item, i) => {
				// 	item.id_po = 
				// })
				for (let i = 0;i < res.length;i++) {
					let obj = {}
					obj.label = res[i].nama_barang
					obj.value = res[i].id
					this.barang.push(obj)
				}
			})
			.catch(e => {
				console.error(e)
				return false
			})

			this.getDataTable()
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