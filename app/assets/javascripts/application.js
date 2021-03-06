// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets

$('a[data-popup]').on('click', function(e) { window.open($(this).attr('href')); e.preventDefault(); });

$(document).ready(function() {
  $('#copy-message').click(function() {
    clipboard.copy($('#message').val());
    $('#copy-message').tooltip('show');
  });

  $('#sign-toggle').click(function() {
    $('.sign-modal').modal('toggle');
    setTimeout(function() {
        $(".sign-modal .modal-body").html("<%= j render(:file => 'welcome/index.html.erb') %>");
    }, 1000);
  });
});
