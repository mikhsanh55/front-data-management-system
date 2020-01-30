<template>
	<div>
		<CCard>
			<CCardHeader>
				<CRow>
					<CCol sm="12">
						Profile
					</CCol>
				</CRow>
			</CCardHeader>
			<CCardBody>
				<CRow>
					<CCol sm="12">
						<CForm>
						<table class="table table-borderless">
							<tr>
								<td>Foto Profile</td>
								<td><img src="https://i.pravatar.cc/48?img=2" /></td>
							</tr>
							<tr>
								<td>Nama</td>
								<td>Ikhsan Hamidan</td>
							</tr>
							<tr>
								<td>No Pegawai</td>
								<td>1942809</td>
							</tr>
							<tr>
								<td>Username</td>
								<td>mikhsanh</td>
							</tr>
							<tr>
								<td>Password</td>
								<td><input type="password" name="password1" class="form-control"></td>
							</tr>
							<tr>
								<td>Confirm Password</td>
								<td><input type="password" name="password2" class="form-control"></td>
							</tr>
							<tr>
								<td>Alamat</td>
								<td>Bandung</td>
							</tr>
						</table>
						<div class="text-center mx-auto">
							<button type="submit" class="btn btn-success">Ubah</button>
						</div>
						</CForm>
					</CCol>
				</CRow>
			</CCardBody>
		</CCard>
	</div>
</template>
<script >
	export default {
		name:"Profile",
		data() {
			return {}
		},
		methods: {
			getData() {
				this.$http.post('https://young-temple-67589.herokuapp.com/api/profil', {
					headers: {
						'Authorization':'bearer ' + localStorage.getItem('token')
					},
					redirect:'follow'
				})
				.then(res => {
					console.log(res.data)
				})
				.catch(e => {
					console.error(e.response)
					return false
				})

			}
		},
		created() {
			this.getData()
		}
	}
</script>