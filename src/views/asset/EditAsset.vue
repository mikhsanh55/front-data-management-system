<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Edit</b> Asset</p>
			</CCardHeader>
			<CCardBody>
				<CForm class="mt-4">
					<CRow class="mx-auto d-flex justify-content-center">
						<CCol sm="12" md="8">
							  <p v-show="validMsg == true" class="alert alert-success">
		                        <small>Asset berhasil diperbaharui!</small>
		                      </p>    
		                      <input type="hidden" name="id" :id="asset.id" ref="id">
		                    <CInput
		                        type="text"
		                        :description="validator.kode_msg"
		                        :is-valid="validator.kode"
		                        @input="asset.kode.length < 1 ? validator.kode = false : validator.kode = true"
		                        autocomplete="kode"
		                        label="Kode Asset"
		                        horizontal
		                        placeholder="Masukan Kode Asset"
		                        v-model="asset.kode"
		                      />
		                    <CTextarea
		                    	:description="validator.deskripsi_barang_msg"
		                        :is-valid="validator.deskripsi_barang"
		                        @input="asset.deskripsi_barang.length < 1 ? validator.deskripsi_barang = false : validator.deskripsi_barang = true"
		                        label="Masukan Deskripsi Asset"
		                        placeholder="Masukan Deskripsi Asset"
		                        horizontal
		                        rows="3"
		                        v-model="asset.deskripsi_barang"
		                      />  
		                    <CSelect
				                label="Karyawan"
				                horizontal
				                
				                :options="karyawan"
				                @update:value="assignKaryawan"
				                v-model="asset.id_karyawan"
				              />  
    	                    <!-- <CSelect
				                label="Jabatan"
				                horizontal
				                v-model="jabatanselected"
				                :options="jabatan"
				                @update:value="assignJabatan"
				              />   -->
		                    <CInput
	                        	type="date"
		                        :description="validator.tanggal_beli_msg"
		                        :is-valid="validator.tanggal_beli"
		                        @input="asset.tanggal_beli.length < 1 ? validator.tanggal_beli = false : validator.tanggal_beli = true"
		                        autocomplete="tanggal_beli"
		                        label="Tanggal Beli"
		                        horizontal
		                        placeholder="Masukan Tanggal Beli"
		                        v-model="asset.tanggal_beli"
		                      />
		                      <CInput
	                        	type="date"
		                        :description="validator.tanggal_expired_msg"
		                        :is-valid="validator.tanggal_expired"
		                        @input="asset.tanggal_expired.length < 1 ? validator.tanggal_expired = false : validator.tanggal_expired = true"
		                        autocomplete="tanggal_expired"
		                        label="Tanggal Expired"
		                        horizontal
		                        placeholder="Masukan Tanggal Expired"
		                        v-model="asset.tanggal_expired"
		                      />
						</CCol>
					</CRow>
				</CForm>
			</CCardBody>
			<CCardFooter class="d-flex justify-content-center mt-4">
				<CButton type="submit" color="primary" @click.prevent="updateAsset">
					<i class="fa fa-edit mr-2"></i>{{label}}
				</CButton>
			</CCardFooter>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	import {getDatas} from '@/containers/global-function.js'
	export default {
		name:"EditAsset",
		data() {
			return {
				label: 'Simpan Perubahan',
				karyawanselected:1,
				base_api: localStorage.base_api,
				validator: {
					kode:null,
					kode_msg:null,
					deskripsi_barang: null,
					deskripsi_barang_msg:null,
					tanggal_beli:null,
					tanggal_beli_msg:null,
					tanggal_expired:null,
					tanggal_expired_msg:null
				},
				asset: {
					kode:null,
					deskripsi_barang:null,
					id_karyawan:null,
					id:null,
					tanggal_beli:"0000-00-00",
					tanggal_expired:"0000-00-00"
				},
				validMsg:false,
				karyawan: [],
				errors:[]
			}
		},
		methods: {
			getKaryawan() {
				let headers = new Headers()
				headers.append('Authorization', 'bearer ' + localStorage.getItem('token'))
				let options = {
					method:'post',
					headers,
					redirect:'follow'
				}
				getDatas(this, this.base_api + 'karyawan', options)
				.then(res => {
					for(let i = 0;i < res.length;i++) {
	      				let obj = {}
	      				obj.value = res[i].id
	      				obj.label = res[i].nama_karyawan
	      				this.karyawan.push(obj)
	      			}
				})
				.then(() => {
					this.getData()
				})
				.catch(e => {
					this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'error')
                    setTimeout(() => {
                    	this.$swal.close()
                    }, 1500)
	      			console.error(e)
	      			return false
				})
			},
			assignJabatan(val) {
				this.asset.jabatan = val
			},
			assignKaryawan(val) {
				this.asset.id = val
			},
			getData() {
				let headers = new Headers()
				headers.append('Authorization', 'bearer ' + localStorage.token)
				let options = {
					method:'POST',
					headers,
					redirect:'follow'
				}
				getDatas(this, this.base_api + 'assets/' + this.$route.params.id, options)
				.then(res => {
					this.jabatanselected = res.jabatan
					this.karyawanselected = res.id
					this.asset = res
				})
				.catch(e => {
					
					if(e.response.status == 401) {
	                  this.$store.dispatch('logout')
	                  .then(() => {
	                    let path = window.location.href
	                    path = path.split('/')
	                    localStorage.setItem('prevPath', path[path.length - 1])
	                    this.$swal('Sesi login kamu sudah habis', 'login kagi yah...', 'warning')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    	this.$router.replace({path: '/login'})
	                    }, 1500)
	                    
	                  })
	                  .catch(e => {
	                    this.$swal('Tidak bisa mengambil data', 'hubungi pengembangnya...', 'error')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    }, 1500)
	                    return false
	                  })
	                }
	                else if(e.response.status == 500) {
						this.$swal('Tidak bisa mengambil data', 'hubungi pengembangnya...', 'error')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    }, 1500)
					}
					console.log(e.response)
					return false
				})
			},
			updateAsset() {
				this.errors = []
				if(!this.asset.kode) {
					this.validator.kode = false
		            this.validator.kode_msg = 'Harap isi kode asset'
		            this.errors.push('kode asset kosong')
				}
				if(!this.asset.tanggal_beli || this.asset.tanggal_beli == '0000-00-00') {
					this.validator.tanggal_beli = false
		            this.validator.tanggal_beli_msg = 'Harap isi tanggal beli'
		            this.errors.push('tgl_beli karyawan kosong')
				}
				if(!this.asset.tanggal_expired || this.asset.tanggal_expired == '0000-00-00') {
					this.validator.tanggal_expired = false
		            this.validator.tgl_expired_msg = 'Harap isi tanggal kadaluarsa'
		            this.errors.push('tgl_expired karyawan kosong')
				}
				if(!this.errors.length) {
					this.label = 'Loading...'
					let formData = new FormData()
					formData.append('kode', this.asset.kode)
					formData.append('id_karyawan', this.asset.id_karyawan)
					formData.append('deskripsi_barang', this.asset.deskripsi_barang)
					formData.append('tanggal_beli', this.asset.tanggal_beli)
					formData.append('tanggal_expired', this.asset.tanggal_expired)
					// formData.append('jabatan', this.asset.jabatan)
					this.$http.post(this.base_api + 'assets/edit/' + this.$route.params.id, formData, {
						headers : {
							'Authorization': 'bearer ' + localStorage.token
						}
					})
					.then(res => {
						this.label = 'Simpan Perubahan'
						this.$swal('Update data asset berhasil', 'Mohon tunggu sebentar...', 'success')
						setTimeout(() => {
							this.$swal.close()
							this.$router.push({path: '/asset'})
						}, 1500)
						
					})
					.catch(e => {
						this.label = 'Simpan Perubahan'
						if(e.response.status == 401) {
		                  this.$store.dispatch('logout')
		                  .then(() => {
		                    let path = window.location.href
		                    path = path.split('/')
		                    localStorage.setItem('prevPath', path[path.length - 1])
		                    this.$swal('Sesi login kamu sudah habis', 'login kagi yah...', 'warning')
		                    setTimeout(() => {
		                    	this.$swal.close()
		                    	this.$router.replace({path: '/login'})
		                    }, 1500)
		                    
		                  })
		                  .catch(e => {
		                    this.$swal('Gagal edit data', 'hubungi pengembangnya...', 'error')
		                    setTimeout(() => {
		                    	this.$swal.close()
		                    }, 1500)
		                    return false
		                  })
		                }
		                else {
		                	this.$swal('Gagal edit data', 'hubungi pengembangnya...', 'error')
		                    setTimeout(() => {
		                    	this.$swal.close()
		                    }, 1500)
							this.label = 'Simpan Perubahan'
							console.log(e)
							return false
						}

						return false
					})
				}
				else {
					window.scrollBy({ 
		              top: -250, // could be negative value
		              left: 0, 
		              behavior: 'smooth' 
		            })
		            return false
				}
			}
		},
		created() {
			if(localStorage.level != 1 && localStorage.level != 2 && localStorage.level != 7 && localStorage.level != 3) {
				this.$router.push('/')
			}
			this.getKaryawan()
		}
	}
</script>