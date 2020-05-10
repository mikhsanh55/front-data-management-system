export default {
	methods: {
		toRupiah(angka) {
			let angkaToString = angka.toString().replace(/[^, \d]/g, "").toString(),
		        split = angkaToString.split(","),
		        sisa = split[0].length % 3,
		        rupiah = split[0].substr(0, sisa),
		        ribuan = split[0].substr(sisa).match(/\d{3}/gi),
		        separator = ''

		    if(ribuan && ribuan.length != null) {
		      separator = sisa ? "." : ""
		      rupiah += separator + ribuan.join(".")
		    }
		    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah

		    return rupiah
		},
		toFloatRupiah(angka) {
			angka = angka.split(".")
			// if(typeof angka == "object") {
		      for (var i = 0; i < angka.length; i++) {
		        if(angka[i].includes(',')) {
		          angka[i] = angka[i].replace(/,/g, ".")
		        }
		      }   
		    // }
		    return angka.join("")
		}
	}
}