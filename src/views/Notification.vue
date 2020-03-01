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
							<div v-if="datas.length > 0">
							<table class="table table-borderless w-100">

								<tr v-for="(d,i) in datas" class="d-flex">
									<td class="m-4" style="font-size: 50px;"><i class="fa fa-file text-secondary"></i></td>
									<td class="flex-grow-1">
										<span class="badge badge-warning mt-2 mb-3 p-1">H-2 Pengiriman Barang</span>
										<p class="p-0"><b>Pengiriman PO dengan kode {{d.data.no}}</b></p>
										<p>Pengiriman barang akan dilakukan pada tanggal {{d.data.date_line}}</p>
										<a href="#">
										<b class="mt-3">
											
											<!-- <span @click.prevent="processNotif(i, d.data.data.id)" style="color:#e74c3c;" >Lihat</span> -->
											<span @click="processNotif(d.data.no, d.link)" class="text-primary link-notif" :data-link="d.link">Lihat</span>
										</b>

										</a>
									</td>
									<td class="flex-shrink-2">
										<b>{{d.date}}</b>
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
				datas:JSON.parse(localStorage.notif)
			}
		},
		methods: {
			processNotif(nopo, dateline, link) {
				// this.datas.splice(i, 1)
				// localStorage.setItem('notif', JSON.stringify(this.datas))
				// setTimeout(() => this.$router.push('/po/detail/' + dest), 2000)
				this.$http.post(localStorage.base_uri + 'notif/notif.php', {nopo, dateline}, {
					headers: {
						'Access-Control-Allow-Origin': '*'
					}
				})
				.then(res => {
					if(res.status == true) {
						return true
					}
					else {
						return false
					}
				})
				.catch(e => {
					if(e.response)
						console.error(e.response)
					return false
				})
			}
		},
		created() {
			if(this.datas.length > 0)
				this.datas.forEach((item, i) => {
					let date = item.date.split('T'),
					real_date = date[0].split('-'),
					date_line = item.data.date_line.split('-')
					item.date = `${real_date[2]} - ${real_date[1]} - ${real_date[0]}` 
					item.data.date_line = `${date_line[2]} - ${date_line[1]} - ${date_line[0]}`
					// if(this.processNotif(item.data.no, item.data.date_line,  item.link) == true) {
					// 	item.recentViewed = true
					// }
					// else {
					// 	item.recentViewed = false
					// }
					
				})
		}
	}
</script>