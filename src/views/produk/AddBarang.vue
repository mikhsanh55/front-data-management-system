<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Tambah</b> Barang
			</CCardHeader>
			<CCardBody>
				<CForm class="mt-4">
					<CRow class="mx-auto d-flex justify-content-center">
						<CCol md="8" sm="12">
							<CSelect
				                label="Vendor"
				                horizontal
				                :options="vendor"
				                v-model="barang.id_vendor"
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
		                        type="text"
		                        :description="validator.harga_dasar_msg"
		                        :is-valid="validator.harga_dasar"
		                        @input="barang.harga_dasar.length < 1 ? validator.harga_dasar = false : validator.harga_dasar = true"
		                        autocomplete="harga_dasar"
		                        label="Harga Dasar Barang"
		                        horizontal
		                        placeholder="Masukan Harga Dasar Barang"
		                        v-model="barang.harga_dasar"
		                      />  
		                    <CInput
		                        type="text"
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

						</CCol>
						<CCol md="2" sm="12">
	        				<div>
	        					<button class="btn btn-success" @click.prevent="openVendorModal = true"><i class="fa fa-search mr-1"></i>Cari Vendor</button>
	        				</div>
	        			</CCol>
					</CRow>
				</CForm>
			</CCardBody>
			<CCardFooter class="d-flex justify-content-center mt-4">
				<CButton type="submit" color="primary" @click.prevent="addBarang">
					<i class="fa fa-plus mr-1"></i>{{label}}
				</CButton>
			</CCardFooter>
		</CCard>
		<CModal
	      :show.sync="openVendorModal"
	      :no-close-on-backdrop="true"
	      title="Cari vendor"
	      size="lg"
	      color="dark"
	    >	
	      <CInput
		    type="text"
            description="Ketik minimal 3 huruf untuk melihat hasil"
            label="Cari vendor"
            horizontal
            placeholder="Nama barang"
            v-model="vendorKeyword"
            class="m-4"
	       />	
	       <v-client-table
			:data="searchVendor"
			:columns="searchVendorFields"
			:options="searchVendorOptions"
			id="search-vendor-table"
			 class="m-4"
			>
				<div slot="aksi" slot-scope="props">
					<button class="btn btn-primary" @click="assignVendor(props.row.id)">Pilih</button>
				</div>
			</v-client-table>
	      <template #header>
	        <h6 class="modal-title">Cari Vendor</h6>
	        <CButtonClose @click="openVendorModal = false" class="text-white"/>
	      </template>
	    </CModal>
	</div>
</template>
<script type="text/javascript">
	import mixins from '@/mixins/currency.js'
	import {getDatas} from '@/containers/global-function.js'
	export default {
		name:'AddBarang',
		mixins:[mixins],
		data() {
			return {
				vendorDetail: [],
				openVendorModal:false,
				vendorKeyword:null,
				searchVendor:[], //store array search vendor in modal
				searchVendorFields: ['nama', 'email', 'wa_hp', 'nama_instansi', 'aksi'],
				searchVendorOptions: {
					headings: {
						nama: 'Nama',
						email: 'Email',
						wa_hp: 'Whatsapp',
						nama_instansi: 'Perusahaan',
						aksi: 'Aksi'
					},
					sortable: ['nama', 'email', 'wa_hp', 'nama_instansi'],
					filterable: ['nama', 'email', 'wa_hp', 'nama_instansi'],
					columnsClasses: {
						nama: 'align-middle',
						email: 'align-middle',
						wa_hp: 'align-middle text-center',
						nama_instansi: 'align-middle',
					}
				},
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
					harga_dasar:null,
					harag_dasar_msg:null,
					harga_jual:null,
					harga_jual_msg:null
				},
				barang: {
					id_vendor:null,
					kode_barang:null,
					nama_barang:null,
					foto:null,
					spesifikasi:null,
					harga_dasar:null,
					harga_jual:null,
					satuan:null,
					exp:null,
					keterangan:null
				},
				errors: [],
				label: 'Tambah Barang'
			}
		},
		watch: {
			vendorKeyword: function(val) {
				if(val.length >= 3) {
					let s = this.vendorDetail.filter(item => item.nama.toLowerCase().indexOf(val) > -1)
					if(s.length > 0) {
						this.searchVendor = s
					}
					else {
						this.searchVendor = []
					}
				}
			},
			'barang.harga_dasar': function(val) {
				this.barang.harga_dasar = this.toRupiah(val)
			},
			'barang.harga_jual': function(val) {
				this.barang.harga_jual = this.toRupiah(val)	
			}
		},
		methods: {
			getVendor() {
				this.vendor.push({value: '000', label: 'Pilih Vendor'})
				getDatas(this, localStorage.base_api + 'vendors', {
					method: 'post',
					headers: {
						'Authorization': 'bearer ' + localStorage.getItem('token')
					}
				})
				.then(res => {
					this.vendorDetail = res
					for(let i = 0;i < res.length;i++) {
						let obj = {}
						obj.value = res[i].id
						obj.label = res[i].nama_instansi
						this.vendor.push(obj)
					}
					
				})
				.catch(e => {
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
	                else if (e.response.status === 500) {
						this.smallModal = false
						alert('Something wrong with the server')
						return false
					}
				})
			},
			handleFile(file, e) {
	         file = file[0]
	         let extension = file.name.substring(file.name.lastIndexOf('.')+1),
	         valid_extension = ['gif', 'png', 'jpg', 'jpeg']
		        if(valid_extension.includes(extension) == false) {
		          this.$swal('File tidak valid', 'harap upload gambar yah :)', 'warning')
		          setTimeout(() => {
		            this.$swal.close()
		          }, 2000)
		          e.target.value = ''
		          return false
		         }
		         else {
		          this.barang.foto = file
		         }
	         },
	         assignVendor(val) {
	         	if(this.openVendorModal == true)
	         		this.openVendorModal = false
	         	this.barang.id_vendor = val
	         },
	         addBarang() {
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
	         	if(!this.barang.harga_dasar) {
	         		this.validator.harga_dasar = false
		            this.validator.harga_dasar_msg = 'Harap isi harga dasar barang'
		            this.errors.push('harga_dasar karyawan kosong')
	         	}
	         	if(!this.barang.keterangan) {
	         		this.validator.keterangan = false
		            this.validator.keterangan_msg = 'Harap isi keterangan barang'
		            this.errors.push('keterangan karyawan kosong')
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

	         	if(!this.barang.id_vendor || this.barang.id_vendor == '000') {
	         		this.errors.push('Pilih vendor!')
	         		this.$swal('Harap pilih vendor', '', 'warning')
					setTimeout(() => this.$swal.close(), 1500)
	         	}
	         	if(!this.errors.length) {
	         		// convert harga jual dan harga dasar ke float
	         		
	         		let formData = new FormData()
	         		formData.append('id_vendor', this.barang.id_vendor)
	         		formData.append('kode_barang', this.barang.kode_barang)
	         		formData.append('nama_barang', this.barang.nama_barang)
	         		formData.append('spesifikasi', this.barang.spesifikasi)
	         		formData.append('harga_jual', this.toFloatRupiah(this.barang.harga_jual))
	         		formData.append('harga_dasar', this.toFloatRupiah(this.barang.harga_dasar))
	         		formData.append('satuan', this.barang.satuan)
	         		formData.append('exp', this.barang.exp)
	         		formData.append('keterangan', this.barang.keterangan)
	         		if(this.barang.foto != null) {
	         			formData.append('foto', this.barang.foto)
	         		}
	         		this.label = 'Loading...'
	         		this.$http.post(localStorage.base_api + 'tambah/barang', formData, {
	         			headers: {
	         				'Authorization':'bearer ' + localStorage.token
	         			},
	         			redirect:'follow'
	         		})
	         		.then(res => {
	         			this.label = 'Tambah Barang'
	         			this.$swal(res.data.message, 'hubungi pengembangya', 'success')
	                    setTimeout(() => {
	                      this.$swal.close()
	                      this.$router.push({path: '/barang'})
	                    }, 2000)
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
			                    }, 2000)
			                    
			                  })
			                  .catch(e => {
			                    
			                    this.$swal('Tidak bisa menambah data', 'hubungi pengembanya', 'danger')
			                    setTimeout(() => {
			                      this.$swal.close()
			                    }, 2000)
			                    return false
			                  })
	         			}
	         			else {
	         				this.label = 'Tambah Barang'
	         				console.error(e)	
	         				this.$swal('Tidak bisa menambah data', 'hubungi pengembanya', 'danger')
		                    setTimeout(() => {
		                      this.$swal.close()
		                    }, 2000)
	         				return false
	         			}
	         			return false
	         		})
	         	}
	         	else {
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
			if(localStorage.level == 3 ) {
				this.$router.push('/')
			}
			this.getVendor()
		}
	}
</script>