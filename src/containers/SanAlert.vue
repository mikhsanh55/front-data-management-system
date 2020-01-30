<template>
	<div class="container bg-secondary" id="san-alert">
		<p> {{msg}} </p>
		<button class="btn btn-sm btn-primary">OK</button>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'SanAlert',
		props: {
			msg:String
		}
	}
</script>
