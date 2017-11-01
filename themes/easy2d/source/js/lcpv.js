$(document).ready(function($) {
	var query = new AV.Query('site_pv');
	var url = window.location.pathname;
	query.equalTo('url', url);
	query.find().then(rets => {
		if (rets.length == 0) {
			var PV = AV.Object.extend('site_pv');
			var pv = new PV();
			pv.set('url', url);
			pv.set('pv', 1);
			pv.save();
		} else {
			rets[0].increment('pv', 1);
			rets[0].save();
		}
	});
});