
var pm2 = require('pm2');

pm2.connect(function(err) {

	var processes = [];

	pm2.list(function(err, process_list) {

		if (err) console.log(err);

		process_list.forEach(function(element, index) {
			//console.log(element);
			processes.push({
				env: element.pm2_env.NODE_ENV,
				seed: element.pm2_env.SEED,
				name: element.pm2_env.name,
				pm_id: element.pm2_env.pm_id,
				status: element.pm2_env.status
			});
		});

		console.log(processes);

		pm2.disconnect(function() { process.exit(0) });
	});

});
