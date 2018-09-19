import batchjobsComponent from './batchjobs.component';

const batchjobsModule = angular.module('app.batchjobs', []);

// loading components, services, directives, specific to this module.
batchjobsModule.component('batchjobs', batchjobsComponent);

// export this module
export default batchjobsModule;
