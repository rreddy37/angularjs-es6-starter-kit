export default class BatchJobsController {
	constructor(
		$log
	) {
		'ngInject';

		this.$log = $log;
	}

	$onInit = () => {
		this.$log.info('Activated BatchJobs View.');
		$('.hide-right-panel').click(function() {
			$('.middle-container').removeClass('col-8').addClass('col-10');
			$('.right-panel').addClass('d-none');
			$('.hide-right-panel').addClass('d-none');
			$('.show-right-panel').removeClass('d-none');
		});
		$('.show-right-panel').click(function() {
			$('.middle-container').removeClass('col-10').addClass('col-8');
			$('.right-panel').removeClass('d-none');
			$('.hide-right-panel').removeClass('d-none');
			$('.show-right-panel').addClass('d-none');
		});
	};
}
