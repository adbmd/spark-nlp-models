/* Responsive menu
	 ========================================================*/
jQuery(document).ready(function($) {
	jQuery('#responsive_menu').click(function(e) {
      e.preventDefault();
      jQuery(this).toggleClass('close');
      jQuery('.top_navigation').toggleClass('open');
	});
	jQuery('#aside_menu').click(function(e) {
      e.preventDefault();
      jQuery(this).toggleClass('close');
      jQuery('.aside-menu').toggleClass('open');
	});
});
