$().ready(function() {
	$("#ggg").validate({
	
		rules: {
			"name": {
				required: true,
				minlength: 10
			},
			"phone": {
				required: true,
				maxlength: 10
			},
            "ngaysinh":{
            required: true,
            },
            "feedback": {
				required: true,
			},
		}
	});
});