$(document).ready(function($) {
	
	$('#submit').on('click', function() {
		submit(1, $('#txadvice').val());
		$('.ui.modal').modal('show');
	});

	$('#submit-success').on('click', function() {
		$('.feedback-block')[0].innerHTML = '<p><i class="checkmark icon"></i>谢谢您的反馈。</p>';
	});

	function submit(type, text) {
		var AD = AV.Object.extend('Advice');
		var ad = new AD();
		ad.set('type', type);
		ad.set('advice', text);
		ad.save();
		$('#txadvice').val('');
	}
});