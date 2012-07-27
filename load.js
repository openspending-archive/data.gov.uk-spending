(function () {
  var osPrefix = 'openspendingjs/';
  yepnope({
    load: [
      'style.css',
      osPrefix+'lib/vendor/jquery.js',
      osPrefix+'lib/vendor/base64.js',
      osPrefix+'lib/vendor/accounting.min.js',
      osPrefix+'lib/vendor/underscore.js',
      osPrefix+'lib/vendor/handlebars.js',
      osPrefix+'lib/vendor/bootstrap.js',
      osPrefix+'lib/boot.js',
      osPrefix+'lib/utils/utils.js',
      osPrefix+'lib/vendor/datatables/js/jquery.dataTables.js',
      osPrefix+'lib/vendor/datatables/dataTables.bootstrap.js',
      osPrefix+'app/data_table/openspending.data_table.js',
      osPrefix+'app/faceter/openspending.faceter.js',
      osPrefix+'app/browser/openspending.browser.js'
    ],
    complete: function() {
        OpenSpending.scriptRoot = osPrefix;
        OpenSpending.localeGroupSeparator = ",";
        OpenSpending.localeDecimalSeparator = ".";

        var b = new OpenSpending.Browser(
          document.getElementById('openspending_browser'),
          "ukgov-25k-spending",
          {'source': 'http://openspending.org'}
        );
        b.init();
    }
  });

}());
