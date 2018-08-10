$(document).foundation();
$(document).ready(function () {
	
	//photo
	$('a[data-rel^=lightcase]').lightcase({showSequenceInfo: false, showCaption:false});
	
	//form submit
	$(document).on('submit','form[data-rel=tolightcase],form[data-rel=lightcase]', function (event) {
		event.preventDefault();
		var $this = $(this);
		$this.lightcase('start', {
			href : $this.attr('action'),
			type: 'ajax',
			ajax : {
				width : 550,
				type : $this.attr('method'),
				href : $this.attr('action'),
				dataType : 'html',
				data : $this.serialize()
			},
			onFinish : {
				baz: function() {
					lightcase.resize();
					$this.get(0).reset();
				}
			}
		});
	});
	
	//form open
	$('a.buildform').lightcase({
		// Would be called immediately after lightcase is initialized
		type: 'ajax',
		forceHeight: 'true',
		maxWidth:800,
		width : 800,
		onFinish : {
			baz: function() {
			lightcase.resize();
			}
		}
	});
	
});