var $dom = prism.$injector.get('ux-controls.services.$dom');
var $http = prism.$injector.get('$http');

var pdfButton = {
  id: 'exportAll',
  caption: 'export all dashboards',
  desc: 'export dashboards qa\'s plugin',
  execute: function () {
    $dom.modal({
      scope:{
        pdfDash: function(){
          console.log('it works');
        },
      },
      templateUrl: '/plugins/exportDashes/pdfWizard.html',
    });
  },
  title: 'dashboards to pdf',
  tooltip: 'export all dashboards to pdf',
};


prism.on('beforemenu',function (event, args) {
  if (args.settings.name == 'dashboard') {
    args.settings.items.push(pdfButton);
  }

});
