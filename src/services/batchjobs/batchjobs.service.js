export default class BatchjobsService {
	constructor(
		$http
	) {
		'ngInject';
		this.$http = $http;
	}

	get = () => {
		return this.$http.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				return response.data;
			});
	};
}
