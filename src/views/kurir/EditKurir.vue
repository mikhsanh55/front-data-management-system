<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Edit</b> Kurir</p>
			</CCardHeader>
			<CCardBody>
				<CForm class="mt-4">
					<CRow class="mx-auto d-flex justify-content-center">
						<CCol sm="8">
							  <p v-show="validMsg == true" class="alert alert-success">
		                        <small>Update Data Kurir berhasil!</small>
		                      </p>    

		                    <CInput
		                        type="text"
		                        description="Masukan Nomer Kurir"
		                        autocomplete="no_kurir"
		                        label="Nomer Kurir"
		                        horizontal
		                        placeholder="Masukan Nomer Kurir"
		                        v-model="kurir.no_kurir"
		                      />
		                      <CInput
		                        type="text"
		                        description="Masukan Nama Kurir"
		                        autocomplete="nama_kurir"
		                        label="Nama Kurir"
		                        horizontal
		                        placeholder="Masukan Nama Kurir"
		                        v-model="kurir.nama_kurir"
		                      />
		                      <CSelect
				                label="Jenis Kelamin"
				                horizontal
				                :options="jk"
				                v-model="kurir.jk"
				              />

				              <CInput
		                        type="email"
		                        description="Masukan Email"
		                        autocomplete="email`"
		                        label="Nama email"
		                        horizontal
		                        placeholder="Masukan email"
		                        v-model="kurir.email"
		                      />  
		                      <CInput
		                        type="text"
		                        description="Masukan Whatsapp"
		                        autocomplete="whatsapp"
		                        label="Whatsapp"
		                        horizontal
		                        placeholder="Masukan Whatsapp"
		                        v-model="kurir.whatsapp"
		                      />

		                      <CInput
		                        type="text"
		                        description="Masukan KTP"
		                        autocomplete="ktp"
		                        label="KTP"
		                        horizontal
		                        placeholder="Masukan KTP"
		                        v-model="kurir.ktp"
		                      />
		                      <CTextarea
		                        label="Masukan Alamat"
		                        placeholder="Masukan Alamat"
		                        horizontal
		                        rows="3"
		                        v-model="kurir.alamat"
		                      />  
		                      <CInput
		                        type="date"
		                        description="Masukan Tanggal Masuk Kurir"
		                        autocomplete="tgl_masuk"
		                        label="Tanggal Masuk Kurir"
		                        horizontal
		                        placeholder="Masukan Tanggal Masuk Kurir"
		                        v-model="kurir.tgl_masuk"
		                      />
		                      <CInput
		                        type="text"
		                        description="Masukan NPWP"
		                        autocomplete="npwp"
		                        label="NPWP"
		                        horizontal
		                        placeholder="Masukan NPWP"
		                        v-model="kurir.npwp"
		                      />
		                      <CInput
		                        type="date"
		                        description="Masukan No Rekening"
		                        autocomplete="no_rekening"
		                        label="No Rekening"
		                        horizontal
		                        placeholder="Masukan No Rekening"
		                        v-model="kurir.no_rekening"
		                      />

		                      <CSelect
				                label="Jabatan"
				                horizontal
				                :options="jabatan"
				                v-model="kurir.jabatan"
				              />
	                        
						</CCol>
					</CRow>
				</CForm>
			</CCardBody>
			<CCardFooter class="d-flex justify-content-center mt-4">
				<CButton type="submit" color="primary" @click.prevent="addKurir">
					Tambah Kurir
				</CButton>
			</CCardFooter>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	import {getDatas} from '@/containers/global-function.js'
	export default {
		name:"EditKurir",
		data() {
			return {
				kurir: {
					no_kurir:null,
					nama_kurir:null,
					jk:null,
					email:null,
					whatsapp:null,
					ktp:null,
					alamat:null,
					tgl_masuk:null,
					npwp:null,
					no_rekening:null,
					jabatan:null
				},
				jk: [
					{
						value:1,
						label: 'Laki-laki'
					},
					{
						value:0,
						label: 'Perempuan'
					}
				],
				jabatan: [
					{
						value:0,
						label: 'Kurir Daerah'
					},
					{
						value:1,
						label: 'Kurir Nasional'
					}
				],
				validMsg:false,
				errors:[]
			}
		},
		methods: {
			getData() {
				let headers = new Headers()
				headers.append('Authorization', 'bearer ' + localStorage.token)
				let options = {
					method: 'POST',
					headers,
					redirect:'follow'
				}
				getDatas(this, 'https://young-temple-67589.herokuapp.com/api/kurir/' + this.$route.params.id, options)
				.then(res => {
					console.log(res.data)
					this.kurir = res.data
				})
				.catch(e => {
					console.log(e)
					return false
				})
			},
			addKurir() {
				this.errors = []
				if(!this.kurir.no_kurir) {
					this.errors.push('Nomer Kurir Wajib diisi')
				}
				if(!this.kurir.nama_kurir) {
					this.errors.push('Nama Kurir Wajib diisi')
				}
				if(!this.kurir.jk) {
					this.errors.push('Jenis kelamin Wajib diisi')
				}
				if(!this.kurir.email) {
					this.errors.push('Email Wajib diisi')
				}
				if(!this.kurir.whatsapp) {
					this.errors.push('Whatsapp Wajib diisi')
				}
				if(!this.kurir.ktp) {
					this.errors.push('Alamat Wajib diisi')
				}
				if(!this.kurir.tgl_masuk) {
					this.errors.push('Tanggal Masuk Wajib diisi')
				}
				if(!this.kurir.npwp) {
					this.errors.push('Nomer NPWP Wajib diisi')
				}
				if(!this.kurir.no_rekening) {
					this.errors.push('Nomer rekening Wajib diisi')
				}
				if(!this.kurir.jabatan) {
					this.errors.push('Jabatan Wajib diisi')
				}

				if(!this.errors.length) {
					this.$http.post('http://localhost:3000/kurir', this.kurir)
					.then(() => {
						this.$router.push('/kurir')
					})
					.catch(e => {
						console.log(e)
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
			this.getData()
		}
	}
</script>