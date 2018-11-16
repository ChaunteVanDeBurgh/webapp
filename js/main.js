$(document).ready(function() {
	var $charCount, maxCharCount;

	$charCount = $("#tweet-modal .char-count")
	maxCharCount = parseInt($charCount.data('max'), 10);
	$("#tweet-modal textarea").on('keyup', function(e) {
		var tweetLength = $(e.currentTarget).val().length;

		$charCount.html(maxCharCount - tweetLength);
	});

	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();

	// Pop Over 

	var popoverContentTemplate = '' +
		'<img src="imgs/breed.jpg" class="img-rounded">' +
		'<div class="info">' +
			'<strong>Dog Breeds</strong>' +
			'<a href="#" class="btn btn-default">' +
			'<span class="glyphicon glyphicon-plus" aria-hidden="true"</span>'

			'Follow' +
			'</a>' +
			'</div>';

	$('[data-toggle="popover"]').popover({
		placement: 'bottom',
		html: true,
		content: function() {
			return popoverContentTemplate;
		}
	});
});