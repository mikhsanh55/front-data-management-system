<template>
	<div>
		<CCard>
			<CCardHeader>
				<p><b>Detail</b> Karyawan</p>
			</CCardHeader>
			<CCardBody>
				<CForm class="mt-4">
					<CRow class="mx-auto d-flex justify-content-center">
						<CCol sm="12">

							<div v-if="karyawan.foto" class="mx-auto d-flex justify-content-center">
								<img :src="karyawan.foto" style="border-radius:50%;width:70px;height: 70px;" />
							</div>
							<div v-else class="mx-auto d-flex justify-content-center">
								<img class="img-thumbnail" src="./../../assets/img/avatar/default.svg" style="border-radius:50%;width:70px;height: 70px;" />
							</div>
						</CCol>
					</CRow>
					<CRow class="mx-auto d-flex justify-content-center">
						<CCol sm="6" class="mt-4">
							<table class="table table-bordered mt-4">
								<tr>
									<th width="50%">No Karyawan</th>
									<td>{{karyawan.no_karyawan == null ? 'Belum ada' : karyawan.no_karyawan}}</td>
								</tr>
								<tr>
									<th width="50%">Nama Karyawan</th>
									<td>{{karyawan.nama_karyawan == null ? 'Belum ada' : karyawan.nama_karyawan}}</td>
								</tr>

								<tr>
									<th width="50%">Email</th>
									<td>{{karyawan.email == null ? 'Belum ada' : karyawan.email}}</td>
								</tr>
								<tr>
									<th width="50%">No Hp/WA</th>
									<td>{{karyawan.whatsapp == null ? 'Belum ada' : karyawan.whatsapp}}</td>
								</tr>
								<tr>
									<th width="50%">Jenis Kelamin</th>
									<td>{{karyawan.jk == null ? 'Belum ada' : karyawan.jk == 1 ? 'Laki-laki' : 'Perempuan' }}</td>
								</tr>
								<tr>
									<th width="50%">KTP</th>
									<td>{{karyawan.ktp == null ? 'Belum ada' : karyawan.ktp}}</td>
								</tr>

								<tr>
									<th width="50%">No Rekening</th>
									<td>{{karyawan.no_rekening == null ? 'Belum ada' : karyawan.no_rekening}}</td>
								</tr>
								<tr>
									<th width="50%">NPWP</th>
									<td>{{karyawan.npwp == null ? 'Belum ada' : karyawan.npwp}}</td>
								</tr>

								<tr>
									<th width="50%">Alamat Karyawan</th>
									<td>{{karyawan.alamat == null ? 'Belum ada' : karyawan.alamat}}</td>
								</tr>
								<tr>
									<th width="50%">Tanggal Masuk Kerja</th>
									<td>{{karyawan.tgl_masuk_kerja == null ? 'Belum ada' : karyawan.tgl_masuk_kerja}}</td>
								</tr>
								<tr>
									<th width="50%">Jabatan</th>
									<td>
										{{karyawan.nama_jabatan == null ? 'Belum ada' : karyawan.nama_jabatan}}
									</td>
								</tr>

							</table> 	
						</CCol> 
					</CRow>
				</CForm>
			</CCardBody>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	export default {
		name:'DetailKaryawan',
		data() {
			return {
				image:0,
				karyawan: {
					id:0,
					no_karyawan:null,
					nama_karyawan:null,
					foto: null,
					ktp:null,
					email:null,
					wa_hp:null,
					alamat:null,
					tgl_masuk_kerja:null,
					npwp:null,
					no_rekening:null,
					nama_jabatan:null		
				}
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
				fetch('https://young-temple-67589.herokuapp.com/api/karyawan/' + this.$route.params.id, options)
				.then(res => res.json())
				.then(res => {
					console.log(res)
					
					this.karyawan = res
					this.karyawan.foto = 'https://young-temple-67589.herokuapp.com/' + res.foto
				})
				.catch(e => {
					alert('Cannot get data!')
					console.error(e)
					return false
				})
			}
		},
		created() {
			this.getData()
		}
	}
</script>