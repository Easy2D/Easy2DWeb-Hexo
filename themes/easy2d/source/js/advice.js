$(document).ready(function($) {

	$('.coupled.modal').modal({
		allowMultiple: false
	});

	$('.second.modal').modal('attach events', '.first.modal .submit.button');

	$('#qnice').on('click', function() {
		submit(0, '');
		$('.index-advice-buttons').transition({
			animation: 'fade',
			onComplete: function() {
				$('.index-advice-buttons')[0].innerHTML = '<p><i class="checkmark icon"></i>谢谢您的支持！</p>';
				$('.index-advice-buttons').transition('fade');
			}
		});
	});
	$('#qadvice').on('click', function() {
		$('.first.modal').modal('show');
	});
	
	$('#cancel-sub').on('click', function() {
		$('.first.modal').modal('hide');
	});
	
	$('#submit').on('click', function() {
		submit(1, $('#txadvice').val());
	});

	$('#submit-success').on('click', function() {
		$('.index-advice-buttons')[0].innerHTML = '<p><i class="checkmark icon"></i>谢谢您的反馈。</p>';
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