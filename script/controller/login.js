$(function() {
	$('#btn-submit').on('click', function() {
		if ($('#username').val() == "") {
			$.alert({
				title: '提示',
				content: '用户名不能为空!'
			});
		} else if ($('#userpswd').val() == "") {
			$.alert({
				title: '提示!',
				content: '密码不能为空!'
			});
		} else {
			location.href = 'index.jsp';
		}
	});
});