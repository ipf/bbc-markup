;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
  $.fn.foundationButtons          ? $doc.foundationButtons() : null;
  $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
  $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
  $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
  $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
  $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
  $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
  $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;

  $('input, textarea').placeholder();

  // UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
  // $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
  // $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
  // $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
  // $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

  // Hide address bar on mobile devices
  if (Modernizr.touch) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);


var data = [
	{
		label: 'Geo Location Data',
		children: [
			{
				label: 'child1',
				children: [
					{
						label: 'child1'
					},
					{
						label: 'child2'
					}
				]
			},
			{
				label: 'child2'
			}
		]
	},
	{
		label: 'Business Data',
		children: [
			{ label: 'child3' }
		]
	},
	{
		label: 'Government',
		children: [
			{ label: 'child3' }
		]
	},
	{
		label: 'Education',
		children: [
			{ label: 'child3' }
		]
	}
];

var $tree = $('#tree1');

$tree.tree({
	data: data,
	autoOpen: false,
	dragAndDrop: true
});
// bind 'tree.click' event
$tree.bind(
	'tree.click',
	function(event) {
		var node = event.node;
		if (node.is_open) {
			$tree.tree('closeNode', node);
		} else {
			$tree.tree('openNode', node);
		}
	}
);

var data = [
	{id: 0, date: '2011-01-01', x: 1, y: 2, z: 3, country: 'DE', geo: {lat:52.56, lon:13.40} },
	{id: 1, date: '2011-02-02', x: 2, y: 4, z: 24, country: 'UK', geo: {lat:54.97, lon:-1.60}},
	{id: 2, date: '2011-03-03', x: 3, y: 6, z: 9, country: 'US', geo: {lat:40.00, lon:-75.5}},
	{id: 3, date: '2011-04-04', x: 4, y: 8, z: 6, country: 'UK', geo: {lat:57.27, lon:-6.20}},
	{id: 4, date: '2011-05-04', x: 5, y: 10, z: 15, country: 'UK', geo: {lat:51.58, lon:0}},
	{id: 5, date: '2011-06-02', x: 6, y: 12, z: 18, country: 'DE', geo: {lat:51.04, lon:7.9}}
];

var dataset = new recline.Model.Dataset({
	records: data
});

var $el = $('.mygrid');
var grid = new recline.View.SlickGrid({
	model: dataset,
	el: $el
});
grid.visible = true;
grid.render();