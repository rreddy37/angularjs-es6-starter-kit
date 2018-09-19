export default class HomeController {
	constructor($log) {
		'ngInject';
		this.$log = $log;
	}

	$onInit = () => {
		this.heading = 'Welcome to Batch Job Processing';
		this.$log.info('Activated Home View.');
	};
}
