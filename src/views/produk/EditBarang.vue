<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Edit</b> Barang
			</CCardHeader>
			<CCardBody>
				<CForm class="mt-4">
					<CRow class="mx-auto d-flex justify-content-center">
						<CCol sm="8">
							<CSelect
				                label="Pilih Vendor"
				                horizontal
				                v-model="barang.id_vendor"
				                :options="vendor"
				                @update:value="assignVendor"
				              />  
							<CInput
		                        type="text"
		                        :description="validator.kode_barang_msg"
		                        :is-valid="validator.kode_barang"
		                        @input="barang.kode_barang.length < 1 ? validator.kode_barang = false : validator.kode_barang = true"
		                        autocomplete="kode_barang"
		                        label="Kode Barang"
		                        horizontal
		                        placeholder="Masukan Kode Barang"
		                        v-model="barang.kode_barang"
		                      />
		                    <CInput
		                        type="text"
		                        :description="validator.nama_barang_msg"
		                        :is-valid="validator.nama_barang"
		                        @input="barang.nama_barang.length < 1 ? validator.nama_barang = false : validator.nama_barang = true"
		                        autocomplete="nama_barang"
		                        label="Nama Barang"
		                        horizontal
		                        placeholder="Masukan Nama Barang"
		                        v-model="barang.nama_barang"
		                      />
		                    <CInput
		                        type="text"
		                        :description="validator.spesifikasi_msg"
		                        :is-valid="validator.spesifikasi"
		                        @input="barang.spesifikasi.length < 1 ? validator.spesifikasi = false : validator.spesifikasi = true"
		                        autocomplete="spesifikasi"
		                        label="Spesifikasi Barang"
		                        horizontal
		                        placeholder="Masukan Spesifikasi Barang"
		                        v-model="barang.spesifikasi"
		                      />  
		                    <CInput
		                        type="number"
		                        :description="validator.harga_jual_msg"
		                        :is-valid="validator.harga_jual"
		                        @input="barang.harga_jual.length < 1 ? validator.harga_jual = false : validator.harga_jual = true"
		                        autocomplete="harga_jual"
		                        label="Harga Jual Barang"
		                        horizontal
		                        placeholder="Masukan Harga Jual Barang"
		                        v-model="barang.harga_jual"
		                      />
		                    <CInput
		                        type="text"
		                        :description="validator.satuan_msg"
		                        :is-valid="validator.satuan"
		                        @input="barang.satuan.length < 1 ? validator.satuan = false : validator.satuan = true"
		                        autocomplete="satuan"
		                        label="Satuan Barang"
		                        horizontal
		                        placeholder="Masukan Satuan Barang"
		                        v-model="barang.satuan"
		                      />
		                    <CInput
		                        type="date"
		                        :description="validator.exp_msg"
		                        :is-valid="validator.exp"
		                        @input="barang.exp.length < 1 ? validator.exp = false : validator.exp = true"
		                        autocomplete="exp"
		                        label="Tanggal Kadaluarsa Barang"
		                        horizontal
		                        placeholder="Masukan tanggal kadaluarsa Barang"
		                        v-model="barang.exp"
		                      />  
		                    <CTextarea
		                        label="Masukan Keterangan"
		                        :description="validator.keterangan_msg"
			                    :is-valid="validator.keterangan"
			                    @input="barang.keterangan.length < 1 ? validator.keterangan = false : validator.keterangan = true"
		                        horizontal
		                        rows="3"
		                        v-model="barang.keterangan"
		                      />    
		                    <CInputFile
				              	class="mt-4 mb-4"
				                label="Foto Barang"
				                horizontal
				                @change="handleFile"
				                id="file"
				                ref="file"
				              />

				            <div v-if="barang.foto != null">
		                        <img :src="'https://young-temple-67589.herokuapp.com/' + barang.foto" width="80" height="80" />
		                      </div>    

						</CCol>
					</CRow>
				</CForm>
			</CCardBody>
			<CCardFooter class="d-flex justify-content-center mt-4">
				<CButton type="submit" color="light" @click="updateBarang">
					<i class="fa fa-edit mr-2"></i>{{label}}
				</CButton>
			</CCardFooter>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'AddBarang',
		data() {
			return {
				vendorselected:1,
				vendor: [],
				validator: {
					kode_barang:null,
					kode_barang_msg:null,
					nama_barang:null,
					nama_barang_msg:null,
					spesifikasi:null,
					spesifikasi_msg:null,
					satuan:null,
					satuan_msg:null,
				},
				barang: {
					id_vendor:1,
					kode_barang:null,
					nama_barang:null,
					foto:null,
					spesifikasi:null,
					harga_jual:null,
					harga_dasar:null,
					satuan:null,
					exp:null,
					keterangan:null
				},
				errors: [],
				label: 'Simpan Perubahan'
			}
		},
		methods: {
			getData() {
		        let headers = new Headers()
		        headers.append('Authorization', 'bearer ' + localStorage.getItem('token'))
		        let options = {
		          method:'POST',
		          headers,
		          redirect:'follow'
		        }
		        fetch("https://young-temple-67589.herokuapp.com/api/barang/" + this.$route.params.id, options)
		        .then(response => response.json())
		        .then(result => {
		          this.barang = result
		        })
		        .catch(error => {
		        	this.$swal('Tidak bisa mengambil data', 'hubungi pengembanya', 'danger')
                    setTimeout(() => {
                      this.$swal.close()
                    }, 2000)
		        })
		      },
			handleFile(file, e) {
	         file = file[0]
	         let extension = file.name.substring(file.name.lastIndexOf('.')+1),
	         valid_extension = ['gif', 'png', 'jpg', 'jpeg'],
	         f = file
	         if(valid_extension.includes(extension) == false) {
		          this.$swal('File tidak valid', 'harap upload gambar yah', 'danger')
	                setTimeout(() => {
	                  this.$swal.close()
	                }, 2000)
		          e.target.value = ''
		          return false
		         }
		         else {
		          console.log(f)
		          this.barang.foto = f
		         }
		     },
	         assignVendor(val) {
	         	this.barang.id_vendor = val
	         },
	         updateBarang() {
	         	this.label = 'Loading...'
	         	this.errors = []
	         	if(!this.barang.kode_barang) {
	         		this.validator.kode_barang = false
		            this.validator.kode_barang_msg = 'Harap isi kode barang'
		            this.errors.push('kode_barang karyawan kosong')
	         	}

	         	if(!this.barang.nama_barang) {
	         		this.validator.nama_barang = false
		            this.validator.nama_barang_msg = 'Harap isi nama barang'
		            this.errors.push('nama_barang karyawan kosong')
	         	}

	         	if(!this.barang.spesifikasi) {
	         		this.validator.spesifikasi = false
		            this.validator.spesifikasi_msg = 'Harap isi spesifikasi barang'
		            this.errors.push('spesifikasi karyawan kosong')
	         	}

	         	if(!this.barang.harga_jual) {
	         		this.validator.harga_jual = false
		            this.validator.harga_jual_msg = 'Harap isi harga jual barang'
		            this.errors.push('harga_jual karyawan kosong')
	         	}

	         	if(!this.barang.satuan) {
	         		this.validator.satuan = false
		            this.validator.satuan_msg = 'Harap isi satuan barang'
		            this.errors.push('satuan karyawan kosong')
	         	}
	         	if(!this.barang.exp) {
	         		this.validator.exp = false
		            this.validator.exp_msg = 'Harap isi tanggal kadaluarsa barang'
		            this.errors.push('exp karyawan kosong')
	         	}

	         	if(!this.errors.length) {
	         		
	         		this.barang.harga_dasar = this.barang.harga_jual
	         		this.$http.post('https://young-temple-67589.herokuapp.com/api/barang/edit/' + this.$route.params.id, this.barang, {
	         			headers: {
	         				'Authorization':'bearer ' + localStorage.token
	         			},
	         		})
	         		.then(res => {
	         			this.label = 'Simpan Perubahan Hilih'
	         			this.$swal('Data berhasil diupdate', 'Mohon tunggu sebentar...', 'success')
	                    setTimeout(() => {
	                      this.$swal.close()
	                      setTimeout(() => {
	                      	this.$swal.close()
	                      	this.$router.push({path: '/barang'})
	                      }, 1500)
	                      
	                    }, 2000)
	         		})
	         		.catch(e => {
	         			if(e.response.status == 401) {
		                  this.$store.dispatch('logout')
		                  .then(() => {
		                    let path = window.location.href
		                    path = path.split('/')
		                    localStorage.setItem('prevPath', path[path.length - 1])
		              		this.$swal('Sesi login kamu udah habis', 'Login lagi yah', 'warning')
		                    setTimeout(() => {
		                      this.$swal.close()
		                      this.$router.push({path: '/login'})
		                    }, 2000)      
		                  })
		                  .catch(e => {
		                    this.$swal('Tidak bisa update data', 'Harap hubungi pengembanya', 'danger')
		                    setTimeout(() => {
		                      this.$swal.close()
		                    }, 2000)
		                    return false
		                  })
		                }
		                else {
		                  this.label = 'Simpan Perubahan'
		                  console.log(e)
		                  this.$swal('Tidak bisa update data', 'Harap hubungi pengembanya', 'danger')
		                    setTimeout(() => {
		                      this.$swal.close()
		                    }, 2000)
		                  return false 
		                }
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
	         getVendor() {
	         	this.$http.get('https://young-temple-67589.herokuapp.com/api/vendor', {
					headers: {
						'Authorization': 'bearer ' + localStorage.token
					}
				})
				.then(res => {
					for(let i = 0;i < res.data.length;i++) {
						let obj = {}
						obj.value = res.data[i].id
						obj.label = res.data[i].nama
						this.vendor.push(obj)
					}
					console.log(this.vendor)
					
				})
				.then(() => {
					this.getData()
				})
				.catch(e => {
					if(e.response.status == 401) {
	                  this.$store.dispatch('logout')
	                  .then(() => {
	                    let path = window.location.href
	                    path = path.split('/')
	                    localStorage.setItem('prevPath', path[path.length - 1])
	                    this.$swal('Sesi login kamu udah habis', 'login lagi yah', 'warning')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    	this.$router.replace({path: '/login'})
	                    }, 1500)
	                    return false
	                    
	                  })
	                  .catch(e => {
	                    this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    }, 1500)
	                    return false
	                  })
	                }
	                else if (e.response.status === 500) {
						this.$swal('Tidak bisa ambil data', 'hubungi pengembangnya...', 'danger')
	                    setTimeout(() => {
	                    	this.$swal.close()
	                    }, 1500)
	                    return false
					}
				})
	         }
		},
		created() {
			this.getVendor()
		}
	}
</script>