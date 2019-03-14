$(document).foundation();
$(document).ready(function () {

	//photo
	$('a[data-rel^=lightcase]').lightcase({
		showSequenceInfo: false,
		showCaption: false
	});

	//form submit
	$(document).on('submit', 'form[data-rel=tolightcase],form[data-rel=lightcase]', function (event) {
		event.preventDefault();
		var $this = $(this);
		$this.lightcase('start', {
			href: $this.attr('action'),
			type: 'ajax',
			ajax: {
				width: 550,
				type: $this.attr('method'),
				href: $this.attr('action'),
				dataType: 'html',
				data: $this.serialize()
			},
			onFinish: {
				baz: function () {
					lightcase.resize();
					$this.get(0).reset();
				}
			}
		});
	});

	//formData with file attach to lightcase
	$(document).on('submit', 'form[data-rel=tolightcase2]', function (event) {
		event.preventDefault();
		var $this = $(this);

		var formData = new FormData($($this)[0]);

		$.ajax({
			type: $this.attr('method'),
			url: $this.attr('action'),
			data: formData,
			processData: false,
			contentType: false,
			dataType: "html",
			success: function (data) {
				var response = data;
				$("#response").remove();
				$('body').append('<div id="response" style="display:none">');
				$("#response").html(data);

				lightcase.start({
					href: '#response',
					maxWidth: 550,
					height: 'auto',
					onFinish: {
						baz: function () {
							lightcase.resize();
							$this.get(0).reset();
						}
					}
				});
			}
		});
	});


	//form open
	$('a.buildform').lightcase({
		// Would be called immediately after lightcase is initialized
		type: 'ajax',
		forceHeight: 'true',
		maxWidth: 800,
		width: 800,
		onFinish: {
			baz: function () {
				lightcase.resize();
			}
		}
	});

});
