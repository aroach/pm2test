
var pm2 = require('pm2');

pm2.connect(function(err) {
	pm2.describe( 0, function(err, ret) {
		if (err) console.log(err);
		console.log('======= pm2 describe ==========');
		console.log("ret:");
		//console.log(ret);
		console.log(ret[0].pm2_env.status);
		console.log(ret[0].pm2_env.versioning.revision);

		pm2.disconnect(function() { process.exit(0) });

		//result = ret;

	});
});
