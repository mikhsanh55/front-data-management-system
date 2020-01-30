<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Detail</b> Konsumen
			</CCardHeader>
			<CCardBody>
				<CRow class="max-auto d-flex justify-content-center mb-4 mt-4">
					<CCol sm="12">
						<div v-if="'https://young-temple-67589.herokuapp.com/' + konsumen.foto" class="mx-auto d-flex justify-content-center">
							<img :src="'https://young-temple-67589.herokuapp.com/' + konsumen.foto" style="border-radius:50%;width:70px;height: 70px;" />
						</div>
						<div v-else class="mx-auto d-flex justify-content-center">
							<img class="img-thumbnail" src="./../../assets/img/avatar/default.svg" style="border-radius:50%;width:70px;height: 70px;" />
						</div>
					</CCol>
				</CRow>
				<CRow class="mx-auto d-flex justify-content-center mt-4">
					<CCol sm="6">
						<table class="table table-bordered table-striped">
							<tr>
								<th width="50%">Nama</th>
								<td>{{konsumen.nama}}</td>
							</tr>
							<tr>
								<th>Email</th>
								<td>{{konsumen.email}}</td>
							</tr>
							<tr>
								<th>No Telp/Hp/WA</th>
								<td>{{konsumen.wa_hp}}</td>
							</tr>
							<tr>
								<th>Respon Konsumen</th>
								<td> {{konsumen.no_rekening}} </td>
							</tr>
							<tr>
								<th>Nama Instansi</th>
								<td> {{konsumen.nama_instansi}} </td>
							</tr>
							<tr>
								<th>Karakteristik Perusahaan</th>
								<td> {{konsumen.karakteristik_perusahaan}} </td>
							</tr>
							<tr>
								<th>Alamat</th>
								<td> {{konsumen.alamat}} </td>
							</tr>
						</table>
					</CCol>
				</CRow>
			</CCardBody>
			<br>
			<br>
		</CCard>

	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'DetailKonsumen',
		data() {
			return {
				image:0,
				konsumen: {
					id:null,
					nama:null,
					email: null,
					wa_hp: null,
					foto: null,
					nama_instansi:null,
					karakteristik_perusahaan:null,
					alamat:null,
					updated_at: null
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
				fetch('https://young-temple-67589.herokuapp.com/api/konsumen/' + this.$route.params.id, options)
				.then(res => res.json())
				.then(res => {
					if(this.checkImage('https://young-temple-67589.herokuapp.com/' + this.konsumen.foto) == true) {
						this.image = 1
					}
					else {
						this.image = 0
					}
					this.konsumen = res
				})
				.catch(e => {
					console.error(e)
					return false
				})
			},
			checkImage(src) {
				let image = new Image()
				image.onload = () => {
					console.log('ada')
					this.image = 1
					return true
				}
				image.onerror = () => {
					console.log('tidak ada')
				 return false}
				image.src = src
			}
		},
		created() {
			this.getData()
		}

	}
</script>