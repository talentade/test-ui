import $ from 'jquery';

$(function () {

  $(document).keyup(function (e) {
 //  	var str = $("#v-code").val();
 //  	if(e.which == 8 && str.length) {
 //  		str = str.slice(0, str.length - 1);
 //  		$("#v-code").val(str);
 //  	} else {
	//   	var val = String.fromCharCode(e.which);
	//         val = val.replace(/[^\d+]+/gi, '');
	//         if(val.length && str.length < 4) {
	//         	$("#v-code").val(str+""+val);
	//         }
	// }
	var _vl = $("#v-code").val().trim();
		_vl = _vl.replace(/[^\d+]+/g, '');
	$("#v-code").val(_vl);
	_vl.length && _vl.length > 0 && $(".v-code:eq(0)").val(_vl.split("")[0]) || $(".v-code:eq(0)").val("");
	_vl.length && _vl.length > 1 && $(".v-code:eq(1)").val(_vl.split("")[1]) || $(".v-code:eq(1)").val("");
	_vl.length && _vl.length > 2 && $(".v-code:eq(2)").val(_vl.split("")[2]) || $(".v-code:eq(2)").val("");
	_vl.length && _vl.length > 3 && $(".v-code:eq(3)").val(_vl.split("")[3]) || $(".v-code:eq(3)").val("");
  });

});