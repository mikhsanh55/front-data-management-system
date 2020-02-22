<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Tambah</b> Request Barang
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
				<CButton type="submit" color="primary" @click.prevent="addRequestPO">
					<i class="fa fa-plus mr-2"></i>{{label}}
				</CButton>
			</CCardFooter>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'AddRequestPO',
		data() {
			return {
				statusselected:1,
				barang:[],
				status:[
					{
						value:'000',
						label:'Pilih Status'
					},
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
				label: 'Tambah Request Barang',
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
			assignBarang(val) {
				this.request_po.id_barang = val
				console.warn(val)
			},
			assignStatus(val) {
				this.request_po.status = val
				console.log(this.request_po.status)
			},
			addRequestPO() {
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

				if(!this.request_po.id_barang || this.request_po.id_barang == '000') {
					this.errors.push('Harap pilih barang')
					this.$swal('Harap pilih barang', '', 'warning')
					setTimeout(() => this.$swal.close(), 1500)
				}
				if(!this.request_po.status || this.request_po.status == '000') {
					this.errors.push('Harap pilih status')
					this.$swal('Harap pilih status', '', 'warning')
					setTimeout(() => this.$swal.close(), 1500)
				}

				if(!this.errors.length) {
					this.$http.post(localStorage.base_api + 'request/barang', this.request_po, {
						headers: {
							'Authorization': 'bearer ' + localStorage.token
						},
						redirect: 'follow'
					})
					.then(res => {
						this.label = 'Tambah Request Barang'
						console.log(res)
						this.$swal('Penambahan Request Barang berhasil', 'Mohon tunggu sebentar', 'success')
						setTimeout(() => {
							this.$swal.close()
							this.$router.push('/data-request-barang')
						}, 1500)
						
					})
					.catch(e => {
						this.$swal('Penambahan Request Barang gagal', 'Mohon tunggu sebentar', 'error')
						setTimeout(() => this.$swal.close(), 1500)
						return false
					})
				}
				else {
					this.label = 'Tambah Request Barang'
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
			this.barang.push({value:'000', label:'Pilih Barang'})
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
      			this.request_po.id_barang = this.barang[0].id
			})
			.catch(e => {
				this.$swal('Tidak bisa mengambil data barang', 'Mohon hubungi pengembangnya...', 'error')
				setTimeout(() => {this.$swal.close()}, 1500)
				return false
			} )
		}
	}
</script>