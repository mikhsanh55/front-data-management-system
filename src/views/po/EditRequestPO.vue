<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Edit</b> Request Barang
			</CCardHeader>
			<CCardBody>
				<CForm class="mt-4">
					<CRow class="mx-auto d-flex justify-content-center">
						<CCol sm="8">
							<CSelect
								label="Barang"
								horizontal
								v-model="request_po.id_barang"
								:options="barang"
								@update:value="assignBarang"
							/>
							<CInput
								type="date"
								label="Tanggal"
								horizontal
								v-model="request_po.date"
								:description="validator.date_msg"
		                        :is-valid="validator.date"
							/>
							<CInput
								type="number"
								label="Quantity"
								horizontal
								v-model="request_po.qty"
								:description="validator.qty_msg"
								:is-valid="validator.qty"
							/>
							<CTextarea
								label="Keterangan"
								:description="validator.keterangan_msg"
								:is-valid="validator.keterangan"
								horizontal
								rows="3"
								v-model="request_po.keterangan"
							/>
							<CSelect
								label="Status"
								horizontal
								v-model="request_po.status"
								:options="status"
								@update:value="assignStatus"
							/>

						</CCol>
					</CRow>
				</CForm>
			</CCardBody>

			<CCardFooter class="d-flex justify-content-center mt-4">
				<CButton type="submit" color="light" @click.prevent="updateRequestPO">
					<i class="fa fa-edit mr-2"></i>{{label}}
				</CButton>
			</CCardFooter>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	import {getDatas} from '@/containers/global-function.js'
	export default {
		name: 'EditRequestPO',
		data() {
			return {
				statusselected:4,
				barang:[],
				status:[
					{
						value:1,
						label:'Request'
						
					},
					{
						value:2,
						label:'Proses'
						
					},
					{
						value:3,
						label: 'Dikirim'
						
					},
					{
						value:4,
						label: 'Selesai'
						
					},
					{
						value:5,
						label: 'Batal'
						
					}
				],
				errors: [],
				label: 'Simpan Perubahan',
				validator: {
					date:null,
					qty:null,
					keterangan:null,
					date_msg:null,
					qty_msg:null,
					keterangan_msg:null
				},
				request_po: {
					id_barang:null,
					date:null,
					qty:null,
					keterangan:null,
					status:null,
				},
				
			}
		},
		methods: {
			getData() {
				let headers = new Headers()
				headers.append('Authorization', 'bearer ' + localStorage.token)
				let options = {
					method:'POST',
					headers,
					redirect:'follow'
				}

				getDatas(localStorage.base_api + 'request/barang/detail/' + this.$route.params.id, options)
				.then(res => {
					
					console.log(res)
					this.request_po = res
					
				})
				.catch(e => {
					this.$swal('Mohon maaf tidak bisa meng-update data', 'Mohon hubungi pengembang...', 'error')
	                setTimeout(() => {
	                	this.$swal.close()
	                	return false
	                })
					console.error(e)
					return false
				})
			},
			assignStatus(val) {
				this.request_po.status = val
				console.log(this.request_po.status)
			},
			assignBarang(val) {
				this.request_po.id_barang = val
			},
			updateRequestPO() {
				this.label = 'Loading...'
				this.errors = []

				if(!this.request_po.date) {
					this.validator.date = false
		            this.validator.date_msg = 'Harap isi tanggal'
		            this.errors.push('date karyawan kosong')
				}

				if(!this.request_po.qty) {
					this.validator.qty = false
		            this.validator.qty_msg = 'Harap isi kuantitas barang'
		            this.errors.push('qty karyawan kosong')
				}

				if(!this.request_po.keterangan) {
					this.validator.keterangan = false
		            this.validator.keterangan_msg = 'Harap isi keterangan'
		            this.errors.push('keterangan karyawan kosong')
				}

				if(!this.errors.length) {
					this.$http.post(localStorage.base_api + 'request/barang/edit/' + this.$route.params.id, this.request_po, {
						headers: {
							'Authorization': 'bearer ' + localStorage.token
						},
						redirect: 'follow'
					})
					.then(res => {
						this.label = 'Simpan Perubahan'
						this.$swal(res.data.message, 'Mohon tunggu sebentar...', 'success')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    	this.$router.push('/data-request-barang')
	                    }, 1500)
						
					})
					.catch(e => {
						this.$swal('Mohon maaf tidak bisa meng-update data', 'Mohon hubungi pengembang...', 'error')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    	return false
	                    })
					})
				}
				else {
					this.label = 'Simpan Perubahan'
					console.log(this.errors)
	         		window.scrollBy({ 
		              top: -500, // could be negative value
		              left: 0, 
		              behavior: 'smooth' 
		            })
		            return false
				}
			}
		},
		created() {

			if(localStorage.level != 1 && localStorage.level != 2 && localStorage.level != 6 && localStorage.level != 5) {
				this.$router.push('/')
			}
			this.$http.get(localStorage.base_api + 'barang', {
				headers: {
					'Authorization': 'bearer ' + localStorage.token
				}
			})
			.then(res => {
				for(let i = 0;i < res.data.length;i++) {
      				let obj = {}
      				obj.value = res.data[i].id
      				obj.label = res.data[i].nama_barang
      				this.barang.push(obj)
      			}
			})
			.then(() => {
				// this.getData()
				// this.$swal('NGETEH ASW', '', 'info')
				fetch(localStorage.base_api + 'request/barang/' + this.$route.params.id, {
					method:'post',
					headers: {
						'Authorization': 'bearer ' + localStorage.token
					}
				})
				.then(res => res.json())
				.then(res => {
					this.request_po = res
					console.warn(res.status)
				})
				.catch(e => {
					console.error('DUDE ' + e)
					return false
				})
				// let headers = new Headers()
				// headers.append('Authorization', 'bearer ' + localStorage.token)
				// let options = {
				// 	method:'POST',
				// 	headers,
				// 	redirect:'follow'
				// }

				// getDatas(localStorage.base_api + 'request/barang/' + this.$route.params.id, options)
				// .then(res => {
					
				// 	console.log(res)
				// 	this.request_po = res
					
				// })
				// .catch(e => {
				// 	this.$swal('Mohon maaf tidak bisa meng-update data', 'Mohon hubungi pengembang...', 'error')
	   //              setTimeout(() => {
	   //              	this.$swal.close()
	   //              	return false
	   //              })
				// 	console.error(e)
				// 	return false
				// })
				
			})
			.catch(e => {
				console.error(e)
				this.$swal('Tidak bisa mengambil data barang', 'Mohon hubungi pengembangnya...', 'error')
				setTimeout(() => {this.$swal.close()}, 1500)
				return false
			} )
		}
	}
</script>