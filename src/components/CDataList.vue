<template>
	<div class="form-group d-flex align-items-center">
		<label v-if="label" :class="labelClasses" class=" align-self-middle mr-4">
			{{label}}
		</label>
		<input :list="idList" :name="idList" class="form-control"  @change="onSelect($event)" :value="defaultVal" @focus="defaultVal = ''" />
		<datalist :id="idList">
			<option
			v-for="(option, key) in options" 
			:value="option.label"
			:selected="option.label === label"
			:data-key="key"
			:data-value="option.value"
			:key="key"> {{option.label}} </option>				
		</datalist>
	</div>
</template>
<script type="text/javascript">
	// import {selectProps as props} from './custom-form-props'
	export default {
		name: 'CDataList',
		props: {
			label: String,
			value: [String, Number, Boolean],
			idList: String,
			labelClasses: [String, Object],
			listClasses: [String, Object],
			options: [Array, Object],
			placeholder: String	
		},
		data() {
			return {
				defaultVal: ''
			}
		},
		methods: {
			onSelect: function(e) {
				// const optionIndex = e.target.selectedOptions[0].dataset.key,
				// 	option = this.options[optionIndex],
				// 	value = option.value
				const value = e.target.value,
					options = e.srcElement
					this.$emit('update:value', e)			
			}
		},
		created () {
			this.defaultVal = this.placeholder
		}
	}
</script>