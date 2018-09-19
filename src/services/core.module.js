import routerHelperService from './router-helper/router-helper.service';
import userService from './user/user.service';
import batchjobsService from './batchjobs/batchjobs.service';

const coreModule = angular.module('app.core', [
	'ui.router'
]);

// inject services, config, filters and re-usable code
// which can be shared via all modules
coreModule.config(routerHelperService);

coreModule.service('userService', userService);
coreModule.service('batchjobsService', batchjobsService);

export default coreModule;
