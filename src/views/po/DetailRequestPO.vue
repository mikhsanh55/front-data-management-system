<template>
	<div>
		<CCard>
			<CCardHeader>
				<b>Detail</b> Request Barang
			</CCardHeader>
			<CCardBody>
				<CRow class="mx-auto d-flex justify-content-center">
					<CCol sm="8" class="mt-4">
						<table class="table table-bordered table-striped">
							<tr>
								<th class="w-50">Tanggal</th>
								<td>{{request_po.date}}</td>
							</tr>
							<tr>
								<th class="w-50">Quantity</th>
								<td> {{request_po.qty}} </td>
							</tr>
							<tr>
								<th class="w-50">Keterangan</th>
								<td>{{request_po.keterangan}}</td>
							</tr>	
							<tr>
								<th class="w-50">Status</th>
								<td v-if="request_po.status == 1">Request</td>
								<td v-else-if="request_po.status == 2">Proses</td>
								<td v-else-if="request_po.status == 3">Dikirim</td>
								<td v-else-if="request_po.status == 4">Sukses</td>
								<td v-else-if="request_po.status == 5">Batal</td>
							</tr>
							
						</table>
					</CCol>
				</CRow>
			</CCardBody>
		</CCard>
	</div>
</template>
<script type="text/javascript">
	import {getDatas} from '@/containers/global-function.js'
	export default {
		name: 'DetailRequestPO',
		data() {
			return {
				request_po: [],
			}
		},
		methods: {
			getData() {
				let headers = new Headers()
				headers.append('Authorization', 'bearer ' + localStorage.token)
				let options = {
					method:'POST',
					headers,
					redirect: 'follow'
				}

				getDatas(this, localStorage.base_api + 'request/barang/' + this.$route.params.id, options)
				.then(res => {
					this.request_po = res
				})
				.catch(e => {
					alert('Tidak bisa mengambil data, hubungi pengembangnya yah')
					console.error(e)
					return false
				})
			}
		},
		created() {
			if(localStorage.level != 1 && localStorage.level != 2 && localStorage.level != 6 && localStorage.level != 5) {
				this.$router.push('/')
			}
			this.getData()
		}
	}
</script>