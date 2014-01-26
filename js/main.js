//json
 $.getJSON("https://preview-ignis.kurtosysweb.com/KAPI/Wrapper.aspx?provider=156live&datasource=472ee85f-f533-43b1-a80e-929457ad812c&params=%3CParameters%3E%3CParameter%20Name=%22CompanyID%22%20Type=%22StringShort%22%20Value=%22238%22/%3E%3CParameter%20Name=%22Category%22%20Type=%22StringShort%22%20Value=%22%22/%3E%3CParameter%20Name=%22Filter2%22%20Type=%22StringShort%22%20Value=%22%22/%3E%3CParameter%20Name=%22Filter3%22%20Type=%22StringShort%22%20Value=%22%22/%3E%3CParameter%20Name=%22Universe%22%20Type=%22StringShort%22%20Value=%22%22/%3E%3C/Parameters%3E").done(function(data) {
	//this is for print header only one time per table
	var headerPrinted=false;
	
	$.each(data.Tables, function(id, obj){
						
			var divResponsive=$('<div></div>').addClass("table-responsive");
			var table=$("<table></table>").addClass("table tablesorter table-striped table-bordered table-hover table-full-width").attr('id','tb'+obj.Name)
			var tbody=$("<tbody></tbody>");
			var thead=$("<thead></thead>");
			var trhead=$('<tr></tr>');
			var tr;
			
			$.each(obj.Rows, function(k, v){
			
				tr=$('<tr></tr>');
			
				$.each(v, function(key, val){
					//this prints header only one time per table
					if(!headerPrinted) $('<th class="center"></th>').text(key).appendTo(trhead);	
					
					$('<td></td>').text(val).appendTo(tr);
					$(tbody).append(tr);
				});	
				headerPrinted=true;				
				$(thead).append(trhead);
			});
			
			headerPrinted=false;
			
		$(table).append(thead).append(tbody);
		
		$(divResponsive).append(table);
		
		$("#dvTablesJson").append('<p><span>'+obj.Name+'</span> <span>Rows: '+obj.RowCount+'</span> <span>Fields: '+obj.FieldsCount+'</span> </p>').append(divResponsive);
		
		//this make sorting possible
		 $('#tb'+obj.Name).tablesorter(); 
    });
  }).fail(function() {
    $("#tbJsonTest").append("<p>Sorry, there was a problem loading json. Please, try again later.</p>")
  });
    



//responsive text
$("#preuba").fitText(1.2, {minFontSize: '34px', maxFontSize: '114px'});
$("#aCompany").fitText(1.2, { minFontSize: '20px', maxFontSize: '40px' });

//slider
$(function() {
			
				var Page = (function() {

					var $navArrows = $( '#nav-arrows' ),
						$nav = $( '#nav-dots > span' ),
						slitslider = $( '#slider' ).slitslider( {
							onBeforeChange : function( slide, pos ) {

								$nav.removeClass( 'nav-dot-current' );
								$nav.eq( pos ).addClass( 'nav-dot-current' );

							}
						} ),

						init = function() {

							initEvents();
							
						},
						initEvents = function() {

							// add navigation events
							$navArrows.children( ':last' ).on( 'click', function() {

								slitslider.next();
								return false;

							} );

							$navArrows.children( ':first' ).on( 'click', function() {
								
								slitslider.previous();
								return false;

							} );

							$nav.each( function( i ) {
							
								$( this ).on( 'click', function( event ) {
									
									var $dot = $( this );
									
									if( !slitslider.isActive() ) {

										$nav.removeClass( 'nav-dot-current' );
										$dot.addClass( 'nav-dot-current' );
									
									}
									
									slitslider.jump( i + 1 );
									return false;
								
								} );
								
							} );

						};

						return { init : init };

				})();

				Page.init();

				/**
				 * Notes: 
				 * 
				 * example how to add items:
				 */

				/*
				
				var $items  = $('<div class="sl-slide sl-slide-color-2" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1"><div class="sl-slide-inner bg-1"><div class="sl-deco" data-icon="t"></div><h2>some text</h2><blockquote><p>bla bla</p><cite>Margi Clarke</cite></blockquote></div></div>');
				
				// call the plugin's add method
				ss.add($items);

				*/
			
			});