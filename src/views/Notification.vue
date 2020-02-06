<template>
	<CRow>
		<CCol sm="12">
			<CCard>
				<CCardHeader>
					<b>Notifikasi</b>
				</CCardHeader>
				<CCardBody>
					<CRow>
						<CCol sm="12" md="12">
							<div v-if="datas != null">
							<table class="table table-borderless w-100">

								<tr v-for="(d,i) in datas" class="d-flex">
									<td class="m-4" style="font-size: 20px;"><i class="fa fa-file text-secondary"></i></td>
									<td class="flex-grow-1">
										<span class="badge badge-warning mt-2 mb-3 p-1">H-2 Pengiriman Barang</span>
										<p class="p-0"><b>Pengiriman PO dengan kode 001 dua hari lagi</b></p>
										<a href="#">
										<b class="mt-3">
											
											<span @click.prevent="processNotif(i, d.data.data.id)" style="color:#e74c3c;" >Lihat</span>
										</b>
										</a>
									</td>
									<td class="flex-shrink-2">
										<i class="fa fa-"></i>
										{{d.data.data.date_line}}
									</td>

								</tr>
							</table>
							</div>
							<div v-else class="d-flex justify-content-center">
								<h3 class="text-secondary">Belum ada Notifikasi</h3>	
							</div>
						</CCol>
					</CRow>
				</CCardBody>
			</CCard>
		</CCol>
	</CRow>
</template>
<script type="text/javascript">
	export default {
		name: 'Notification',
		data() {
			return {
				datas:null
			}
		},
		methods: {
			processNotif(i, dest) {
				this.datas.splice(i, 1)
				localStorage.setItem('notif', JSON.stringify(this.datas))
				setTimeout(() => this.$router.push('/po/detail/' + dest), 2000)
			}
		},
		created() {

			if(JSON.parse(localStorage.notif).length != 0) {
				this.datas = JSON.parse(localStorage.notif)
				console.log(this.datas)
			}
			else {
				this.datas = null
			}
		}
	}
</script>