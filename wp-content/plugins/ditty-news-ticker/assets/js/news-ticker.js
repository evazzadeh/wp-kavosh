/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright ه© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright ه© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */




/**
 * Ditty News Ticker
 * Date: 6/12/2013
 *
 * @author Metaphor Creations
 * @version 1.1.7
 *
 **/

( function($) {

	var methods = {

		init : function( options ) {

			return this.each( function(){

				// Create default options
				var settings = {
					id										: '',
					type									: 'scroll',
					scroll_direction			: 'left',
					scroll_speed					: 10,
					scroll_pause					: 0,
					scroll_spacing				: 40,
					scroll_units					: 10,
					rotate_type						: 'fade',
					auto_rotate						: 0,
					rotate_delay					: 10,
					rotate_pause					: 0,
					rotate_speed					: 10,
					rotate_ease						: 'easeOutExpo',
					nav_reverse						: 0,
					before_change					: function(){},
					after_change					: function(){},
					after_load						: function(){}
				};

				// Useful variables. Play carefully.
        var vars = {
        	id							: settings.id,
	        tick_count			: 0,
	        current_tick		: 0,
	        reverse					: 0,
	        running					: 0
        };

				// Add any set options
				if (options) {
					$.extend(settings, options);
				}

				// Create variables
				var $ticker = $(this).find('.mtphr-dnt-tick-contents'),
						$nav_prev = $(this).find('.mtphr-dnt-nav-prev'),
						$nav_next = $(this).find('.mtphr-dnt-nav-next'),
						$nav_controls = $(this).find('.mtphr-dnt-control-links'),
						ticker_width = $ticker.outerWidth(),
						ticker_height = 0,
						ticks = [],
						ticker_scroll,
						ticker_scroll_resize = true,
						ticker_delay,
						rotate_adjustment = settings.rotate_type,
						after_change_timeout,
						ticker_pause = false,
						offset = 20,
						touch_down_x,
						touch_down_y,
						touch_link = '',
						touch_target = '';

				// Add the vars
				$ticker.data('ditty:vars', vars);

				// Save the tick count & total
				vars.tick_count = $ticker.find('.mtphr-dnt-tick').length;

				// Start the first tick
				if( vars.tick_count > 0 ) {

					// Setup a ticker scroll
					if( settings.type == 'scroll' ) {
						mtphr_dnt_scroll_setup();

					// Setup a ticker rotator
					} else if( settings.type == 'rotate' ) {
						mtphr_dnt_rotator_setup();
					}
		    }



		    /**
		     * Setup the ticker scroll
		     *
		     * @since 1.1.0
		     */
		    function mtphr_dnt_scroll_setup() {

		    	var $first = $ticker.find('.mtphr-dnt-tick:first');
		    	if( $first.attr('style') ) {
			    	var style = $first.attr('style');
			    	var style_array = style.split('width:');
			    	ticker_scroll_resize = (style_array.length > 1) ? false : true;
		    	}

		    	// Loop through the tick items
					$ticker.find('.mtphr-dnt-tick').each( function(index) {

						// Find the greatest tick height
						if( $(this).outerHeight() > ticker_height ) {
							ticker_height = $(this).outerHeight();
						}

						if( settings.scroll_direction == 'up' || settings.scroll_direction == 'down' ) {
							$(this).css('height', 'auto');
						}
					});

					// Set the ticker height
					$ticker.css('height',ticker_height+'px');

		    	// Loop through the tick items
					$ticker.find('.mtphr-dnt-tick').each( function(index) {

						// Make sure the ticker is visible
						$(this).show();

						// Add the tick data
						var tick = [{'headline':$(this)}];

						// Add the tick to the array
						ticks.push(tick);
					});

					// Set the initial position of the ticks
					mtphr_dnt_scroll_reset_ticks();

					// Start the scroll loop
					mtphr_dnt_scroll_loop();

					// Clear the loop on mouse hover
					$ticker.hover(
					  function () {
					  	if( settings.scroll_pause ) {
					    	clearInterval( ticker_scroll );
					    }
					  },
					  function () {
					  	if( settings.scroll_pause ) {
					    	mtphr_dnt_scroll_loop();
					    }
					  }
					);
		    }

		    /**
		     * Create the ticker scroll loop
		     *
		     * @since 1.0.8
		     */
		    function mtphr_dnt_scroll_loop() {

			    // Start the ticker timer
			    clearInterval( ticker_scroll );
					ticker_scroll = setInterval( function() {

						for( var i=0; i<vars.tick_count; i++ ) {

							if( ticks[i][0].visible == true ) {

								var pos = 'reset';

								if( settings.scroll_direction == 'left' || settings.scroll_direction == 'right' ) {

									pos = (settings.scroll_direction == 'left') ? mtphr_dnt_scroll_left(i) : mtphr_dnt_scroll_right(i);
									if( pos == 'reset' ) {
										pos = ticks[i][0].reset;
										ticks[i][0].headline.stop(true,true).css('left',pos+'px');
									} else {
										ticks[i][0].headline.stop(true,true).animate( {
											left: pos+'px'
										}, 100, 'linear' );
									}
								} else {

									pos = (settings.scroll_direction == 'up') ? mtphr_dnt_scroll_up(i) : mtphr_dnt_scroll_down(i);
									if( pos == 'reset' ) {
										pos = ticks[i][0].reset;
										ticks[i][0].headline.stop(true,true).css('top',pos+'px');
									} else {
										ticks[i][0].headline.stop(true,true).animate( {
											top: pos+'px'
										}, 100, 'linear' );
									}
								}

								ticks[i][0].position = pos;
							}
						}
			    }, 100);
		    }

		    /**
		     * Scroll the ticker left
		     *
		     * @since 1.0.0
		     */
		    function mtphr_dnt_scroll_left( i ) {

			    // Find the new position
					var pos = parseFloat(ticks[i][0].position - settings.scroll_speed);

					// Reset the tick if off the screen
					if( pos < -(ticks[i][0].width+offset) ) {
						pos = mtphr_dnt_scroll_check_current(i);
					} else if( pos < parseFloat(ticker_width-ticks[i][0].width-settings.scroll_spacing) ) {
						mtphr_dnt_scroll_check_next(i);
					}

					return pos;
		    }

		    /**
		     * Scroll the ticker right
		     *
		     * @since 1.0.0
		     */
		    function mtphr_dnt_scroll_right( i ) {

			    // Find the new position
					var pos = ticks[i][0].position + settings.scroll_speed;

					// Reset the tick if off the screen
					if( pos > ticker_width+offset ) {
						pos = mtphr_dnt_scroll_check_current(i);
					} else if( pos > settings.scroll_spacing ) {
						mtphr_dnt_scroll_check_next(i);
					}

					return pos;
		    }

		    /**
		     * Scroll the ticker up
		     *
		     * @since 1.0.0
		     */
		    function mtphr_dnt_scroll_up( i ) {

			    // Find the new position
					var pos = ticks[i][0].position - settings.scroll_speed;

					// Reset the tick if off the screen
					if( pos < -(ticks[i][0].height+offset) ) {
						pos = mtphr_dnt_scroll_check_current(i);
					} else if( pos < ticker_height-ticks[i][0].height-settings.scroll_spacing ) {
						mtphr_dnt_scroll_check_next(i);
					}

					return pos;
		    }

		    /**
		     * Scroll the ticker down
		     *
		     * @since 1.0.0
		     */
		    function mtphr_dnt_scroll_down( i ) {

			    // Find the new position
					var pos = ticks[i][0].position + settings.scroll_speed;

					// Reset the tick if off the screen
					if( pos > ticker_height+offset ) {
						pos = mtphr_dnt_scroll_check_current(i);
					} else if( pos > settings.scroll_spacing ) {
						mtphr_dnt_scroll_check_next(i);
					}

					return pos;
		    }

		    /**
		     * Check the current tick position
		     *
		     * @since 1.0.0
		     */
		    function mtphr_dnt_scroll_check_current( i ) {

					if( vars.tick_count > 1 ) {
						ticks[i][0].visible = false;
					}

					return 'reset';
		    }

		    /**
		     * Check the next tick visibility
		     *
		     * @since 1.0.0
		     */
		    function mtphr_dnt_scroll_check_next( i ) {

					if( i==(vars.tick_count-1) ) {
						ticks[0][0].visible = true;
					} else {
						ticks[(i+1)][0].visible = true;
					}
		    }

		    /**
		     * Resize the scroll ticks
		     *
		     * @since 1.1.0
		     */
		    function mtphr_dnt_scroll_resize_ticks() {

			    for( var i=0; i<vars.tick_count; i++ ) {

				    // Set the tick position
						var position;

						var $tick = ticks[i][0].headline;

						switch( settings.scroll_direction ) {
							case 'left':
								position = ticker_width+offset;
								if( ticks[i][0].visible == false ) {
									$tick.css('left',position+'px');
								}
								break;

							case 'right':
								position = parseInt('-'+($tick.outerWidth()+offset));
								if( ticks[i][0].visible == false ) {
									$tick.css('left',position+'px');
								}
								break;

							case 'up':
								if( ticker_scroll_resize ) {
									$tick.css('width',ticker_width);
								}
								position = parseInt(ticker_height+offset);
								if( ticks[i][0].visible == false ) {
									$tick.css('top',position+'px');
								}
								break;

							case 'down':
								if( ticker_scroll_resize ) {
									$tick.css('width',ticker_width);
								}
								position = parseInt('-'+($tick.outerHeight()+offset));
								if( ticks[i][0].visible == false ) {
									$tick.css('top',position+'px');
								}
								break;
						}

						// Adjust the tick data
						ticks[i][0].width = $tick.outerWidth();
						ticks[i][0].height = $tick.outerHeight();
						if( ticks[i][0].visible == false ) {
							ticks[i][0].position = position;
						}
						ticks[i][0].reset = position;
			    }
		    }

		    /**
		     * Reset the scroller for vertical scrolls
		     *
		     * @since 1.1.0
		     */
		    function mtphr_dnt_scroll_reset_ticks() {

		    	for( var i=0; i<vars.tick_count; i++ ) {

		    		var $tick = ticks[i][0].headline;

						switch( settings.scroll_direction ) {
							case 'left':
								position = ticker_width+offset;
								$tick.stop(true,true).css('left',position+'px');
								break;

							case 'right':
								position = parseInt('-'+($tick.outerWidth()+offset));
								$tick.stop(true,true).css('left',position+'px');
								break;

							case 'up':
								if( ticker_scroll_resize ) {
									$tick.css('width',ticker_width);
								}
								position = parseInt(ticker_height+offset);
								$tick.stop(true,true).css('top',position+'px');
								break;

							case 'down':
								if( ticker_scroll_resize ) {
									$tick.css('width',ticker_width);
								}
								position = parseInt('-'+($tick.outerHeight()+offset));
								$tick.stop(true,true).css('top',position+'px');
								break;
						}

						ticks[i][0].width = $tick.outerWidth();
						ticks[i][0].height = $tick.outerHeight();
						ticks[i][0].position = position;
						ticks[i][0].reset = position;
						ticks[i][0].visible = false;

						// Reset the current tick
						vars.current_tick = 0;

						// Set the first tick visibility
						ticks[vars.current_tick][0].visible = true;
			    }
		    }




		    /**
		     * Setup the ticker rotator
		     *
		     * @since 1.0.8
		     */
		    function mtphr_dnt_rotator_setup() {

		    	// Loop through the tick items
					$ticker.find('.mtphr-dnt-tick').each( function(index) {

						// Add the tick to the array
						ticks.push($(this));

					});

					// Resize the ticks
					mtphr_dnt_rotator_resize_ticks();

					// Find the rotation type and create the dynamic rotation init function
					var rotate_init_name = 'mtphr_dnt_rotator_'+settings.rotate_type+'_init';
					var mtphr_dnt_rotator_type_init = eval('('+rotate_init_name+')');
					mtphr_dnt_rotator_type_init( $ticker, ticks, parseInt(settings.rotate_speed*100), settings.rotate_ease );
					mtphr_dnt_rotator_update_links( 0 );

					// Start the rotator rotate
					if( settings.auto_rotate ) {
						mtphr_dnt_rotator_delay();
					}

					// Clear the loop on mouse hover
					$ticker.hover(
					  function (e) {
					  	if( settings.auto_rotate && settings.rotate_pause && !vars.running ) {
					    	clearInterval( ticker_delay );
					    }
					  },
					  function () {
					  	if( settings.auto_rotate && settings.rotate_pause  && !vars.running ) {
					    	mtphr_dnt_rotator_delay();
					    }
					  }
					);
		    }

		    /**
		     * Create the ticker rotator loop
		     *
		     * @since 1.0.0
		     */
		    function mtphr_dnt_rotator_delay() {

			    // Start the ticker timer
			    clearInterval( ticker_delay );
					ticker_delay = setInterval( function() {

						// Find the new tick
			    	var new_tick = parseInt(vars.current_tick + 1);
						if( new_tick == vars.tick_count ) {
							new_tick = 0;
						}

						mtphr_dnt_rotator_update( new_tick );

			    }, parseInt(settings.rotate_delay*1000));
		    }

		    /**
		     * Create the rotator update call
		     *
		     * @since 1.1.7
		     */
		    function mtphr_dnt_rotator_update( new_tick ) {

		    	if( vars.current_tick != new_tick ) {

			    	// Clear the interval
			    	if( settings.auto_rotate ) {
				    	clearInterval( ticker_delay );
				    }

			    	// Trigger the before change callback
	          settings.before_change.call( this, $ticker );

	          // Set the running variable
	          vars.running = 1;

				    // Rotate the current tick out
						mtphr_dnt_rotator_out( new_tick );

						// Rotate the new tick in
						mtphr_dnt_rotator_in( new_tick );

						// Set the current tick
						vars.current_tick = new_tick;

						// Trigger the after change callback
						after_change_timeout = setTimeout( function() {

							settings.after_change.call( this, $ticker );

							// Reset the rotator type & variables
							rotate_adjustment = settings.rotate_type;
							vars.reverse = 0;
							vars.running = 0;

							// Restart the interval
							if( settings.auto_rotate ) {
					    	mtphr_dnt_rotator_delay();
					    }

						}, parseInt(settings.rotate_speed*100) );
					}
		    }

		    /**
		     * Update the control links
		     *
		     * @since 1.0.0
		     */
		    function mtphr_dnt_rotator_update_links( new_tick ) {

			    if( $nav_controls ) {
          	$nav_controls.children('a').removeClass('active');
          	$nav_controls.children('a[href="'+new_tick+'"]').addClass('active');
          }
		    }

		    /**
		     * Create the rotator in function calls
		     *
		     * @since 1.0.0
		     */
		    function mtphr_dnt_rotator_in( new_tick ) {

		    	// Update the links
		    	mtphr_dnt_rotator_update_links( new_tick );

			    // Find the rotation type and create the dynamic rotation in function
					var rotate_in_name = 'mtphr_dnt_rotator_'+rotate_adjustment+'_in';
					var mtphr_dnt_rotator_type_in = eval('('+rotate_in_name+')');
					mtphr_dnt_rotator_type_in( $ticker, $(ticks[new_tick]), $(ticks[vars.current_tick]), parseInt(settings.rotate_speed*100), settings.rotate_ease );
		    }

		    /**
		     * Create the rotator out function calls
		     *
		     * @since 1.0.0
		     */
		    function mtphr_dnt_rotator_out( new_tick ) {

			    // Find the rotation type and create the dynamic rotation out function
					var rotate_out_name = 'mtphr_dnt_rotator_'+rotate_adjustment+'_out';
					var mtphr_dnt_rotator_type_out = eval('('+rotate_out_name+')');
					mtphr_dnt_rotator_type_out( $ticker, $(ticks[vars.current_tick]), $(ticks[new_tick]), parseInt(settings.rotate_speed*100), settings.rotate_ease );
		    }

		    /**
		     * Resize the rotator ticks
		     *
		     * @since 1.0.8
		     */
		    function mtphr_dnt_rotator_resize_ticks() {

			    for( var i=0; i<vars.tick_count; i++ ) {

				    // Set the width of the tick
				    $(ticks[i]).width( ticker_width+'px' );
			    }

			    // Resize the ticker
			    var h = $(ticks[vars.current_tick]).outerHeight();
					$ticker.stop().css( 'height', h+'px' );
		    }




		    /**
		     * Rotator fade scripts
		     *
		     * @since 1.0.0
		     */
				function mtphr_dnt_rotator_fade_init( $ticker, ticks, rotate_speed, ease ) {

					// Get the first tick
					$tick = ticks[0];

					// Find the width of the tick
					var w = $tick.parents('.mtphr-dnt-rotate').outerWidth();
					var h = $tick.outerHeight();

					// Set the height of the ticker
					$ticker.css( 'height', h+'px' );

					// Set the initial position of the width & make sure it's visible
					$tick.show();
			  }

				// Show the new tick
				function mtphr_dnt_rotator_fade_in( $ticker, $tick, $prev, rotate_speed, ease ) {
			    $tick.fadeIn( rotate_speed );

			    var h = $tick.outerHeight();

					// Resize the ticker
					$ticker.stop().animate( {
						height: h+'px'
					}, rotate_speed, ease, function() {
					});
			  }

			  // Hide the old tick
			  function mtphr_dnt_rotator_fade_out( $ticker, $tick, $next, rotate_speed, ease ) {
			    $tick.fadeOut( rotate_speed );
			  }




			  /**
		     * Rotator slide left scripts
		     *
		     * @since 1.0.0
		     */
				function mtphr_dnt_rotator_slide_left_init( $ticker, ticks, rotate_speed, ease ) {

					// Get the first tick
					$tick = ticks[0];

					// Find the dimensions of the tick
					var w = $tick.parents('.mtphr-dnt-rotate').outerWidth();
					var h = $tick.outerHeight();

					// Set the height of the ticker
					$ticker.css( 'height', h+'px' );

					// Set the initial position of the width & make sure it's visible
					$tick.css( 'left', 0 );
					$tick.show();

					// If there are any images, reset height after loading
					if( $tick.find('img').length > 0 ) {

						$tick.find('img').each( function(index) {

							jQuery(this).load( function() {

								// Find the height of the tick
								var h = $tick.outerHeight();

								// Set the height of the ticker
								$ticker.css( 'height', h+'px' );
							});
						});
					}
			  }

				// Show the new tick
				function mtphr_dnt_rotator_slide_left_in( $ticker, $tick, $prev, rotate_speed, ease ) {

					// Find the dimensions of the tick
					var w = $tick.parents('.mtphr-dnt-rotate').outerWidth();
					var h = $tick.outerHeight();

					// Set the initial position of the width & make sure it's visible
					$tick.css( 'left', parseFloat(w+offset)+'px' );
					$tick.show();

					// Resize the ticker
					$ticker.stop().animate( {
						height: h+'px'
					}, rotate_speed, ease, function() {
					});

					// Slide the tick in
					$tick.stop().animate( {
						left: '0'
					}, rotate_speed, ease, function() {
					});
			  }

			  // Hide the old tick
			  function mtphr_dnt_rotator_slide_left_out( $ticker, $tick, $next, rotate_speed, ease ) {

			    // Find the dimensions of the tick
					var w = $tick.parents('.mtphr-dnt-rotate').outerWidth();
					var h = $tick.outerHeight();

					// Slide the tick in
					$tick.stop().animate( {
						left: '-'+parseFloat(w+offset)+'px'
					}, rotate_speed, ease, function() {
						// Hide the tick
						$tick.hide();
					});
			  }




			  /**
			   * Rotator slide right scripts
			   *
			   * @since 1.0.0
			   */
				function mtphr_dnt_rotator_slide_right_init( $ticker, ticks, rotate_speed, ease ) {

					// Get the first tick
					$tick = ticks[0];

					// Find the dimensions of the tick
					var w = $tick.parents('.mtphr-dnt-rotate').outerWidth();
					var h = $tick.outerHeight();

					// Set the height of the ticker
					$ticker.css( 'height', h+'px' );

					// Set the initial position of the width & make sure it's visible
					$tick.css( 'left', 0 );
					$tick.show();

					// If there are any images, reset height after loading
					if( $tick.find('img').length > 0 ) {

						$tick.find('img').each( function(index) {

							jQuery(this).load( function() {

								// Find the height of the tick
								var h = $tick.outerHeight();

								// Set the height of the ticker
								$ticker.css( 'height', h+'px' );
							});
						});
					}
			  }

				// Show the new tick
				function mtphr_dnt_rotator_slide_right_in( $ticker, $tick, $prev, rotate_speed, ease ) {

					// Find the dimensions of the tick
					var w = $tick.parents('.mtphr-dnt-rotate').outerWidth();
					var h = $tick.outerHeight();

					// Set the initial position of the width & make sure it's visible
					$tick.css( 'left', '-'+parseFloat(w+offset)+'px' );
					$tick.show();

					// Resize the ticker
					$ticker.stop().animate( {
						height: h+'px'
					}, rotate_speed, ease, function() {
					});

					// Slide the tick in
					$tick.stop().animate( {
						left: '0'
					}, rotate_speed, ease, function() {
					});
			  }

			  // Hide the old tick
			  function mtphr_dnt_rotator_slide_right_out( $ticker, $tick, $next, rotate_speed, ease ) {

			    // Find the dimensions of the tick
					var w = $tick.parents('.mtphr-dnt-rotate').outerWidth();
					var h = $tick.outerHeight();

					// Slide the tick in
					$tick.stop().animate( {
						left: parseFloat(w+offset)+'px'
					}, rotate_speed, ease, function() {
						// Hide the tick
						$tick.hide();
					});
			  }




			  /**
			   * Rotator slide down scripts
			   *
			   * @since 1.0.0
			   */
				function mtphr_dnt_rotator_slide_down_init( $ticker, ticks, rotate_speed, ease ) {

					// Get the first tick
					$tick = ticks[0];

					// Find the height of the tick
					var h = $tick.outerHeight();

					// Set the height of the ticker
					$ticker.css( 'height', h+'px' );

					// Set the initial position of the width & make sure it's visible
					$tick.css( 'top', 0 );
					$tick.show();

					// If there are any images, reset height after loading
					if( $tick.find('img').length > 0 ) {

						$tick.find('img').each( function(index) {

							jQuery(this).load( function() {

								// Find the height of the tick
								var h = $tick.outerHeight();

								// Set the height of the ticker
								$ticker.css( 'height', h+'px' );
							});
						});
					}
			  }

				// Show the new tick
				function mtphr_dnt_rotator_slide_down_in( $ticker, $tick, $prev, rotate_speed, ease ) {

					// Find the height of the tick
					var h = $tick.outerHeight();

					// Set the initial position of the width & make sure it's visible
					$tick.css( 'top', '-'+parseFloat(h+offset)+'px' );
					$tick.show();

					// Resize the ticker
					$ticker.stop().animate( {
						height: h+'px'
					}, rotate_speed, ease, function() {
					});

					// Slide the tick in
					$tick.stop().animate( {
						top: '0'
					}, rotate_speed, ease, function() {
					});
			  }

			  // Hide the old tick
			  function mtphr_dnt_rotator_slide_down_out( $ticker, $tick, $next, rotate_speed, ease ) {

			    // Find the height of the next tick
					var h = $next.outerHeight();

					// Slide the tick in
					$tick.stop().animate( {
						top: parseFloat(h+offset)+'px'
					}, rotate_speed, ease, function() {
						// Hide the tick
						$tick.hide();
					});
			  }




			  /**
			   * Rotator slide up scripts
			   *
			   * @since 1.0.0
			   */
				function mtphr_dnt_rotator_slide_up_init( $ticker, ticks, rotate_speed, ease ) {

					// Get the first tick
					$tick = ticks[0];

					// Find the height of the tick
					var h = $tick.outerHeight();

					// Set the height of the ticker
					$ticker.css( 'height', h+'px' );

					// Set the initial position of the width & make sure it's visible
					$tick.css( 'top', 0 );
					$tick.show();

					// If there are any images, reset height after loading
					if( $tick.find('img').length > 0 ) {

						$tick.find('img').each( function(index) {

							jQuery(this).load( function() {

								// Find the height of the tick
								var h = $tick.outerHeight();

								// Set the height of the ticker
								$ticker.css( 'height', h+'px' );
							});
						});
					}
			  }

				// Show the new tick
				function mtphr_dnt_rotator_slide_up_in( $ticker, $tick, $prev, rotate_speed, ease ) {

					// Find the height of the tick
					var h = $tick.outerHeight();

					// Set the initial position of the width & make sure it's visible
					$tick.css( 'top', parseFloat($prev.outerHeight()+offset)+'px' );
					$tick.show();

					// Resize the ticker
					$ticker.stop().animate( {
						height: h+'px'
					}, rotate_speed, ease, function() {
					});

					// Slide the tick in
					$tick.stop().animate( {
						top: '0'
					}, rotate_speed, ease, function() {
					});
			  }

			  // Hide the old tick
			  function mtphr_dnt_rotator_slide_up_out( $ticker, $tick, $next, rotate_speed, ease ) {

			    // Find the height of the next tick
					var h = $tick.outerHeight();

					// Slide the tick in
					$tick.stop().animate( {
						top: '-'+parseFloat(h+offset)+'px'
					}, rotate_speed, ease, function() {
						// Hide the tick
						$tick.hide();
					});
			  }




		    /**
		     * Navigation clicks
		     *
		     * @since 1.0.0
		     */
		    if( $nav_prev && settings.type == 'rotate' ) {

		    	$nav_prev.bind('click', function( e ) {
		    		e.preventDefault();

		    		if(vars.running) return false;

			    	// Find the new tick
			    	var new_tick = parseInt(vars.current_tick-1);
						if( new_tick < 0 ) {
							new_tick = vars.tick_count-1;
						}
						if( settings.nav_reverse ) {
							if( settings.rotate_type == 'slide_left' ) {
								rotate_adjustment = 'slide_right';
							} else if( settings.rotate_type == 'slide_right' ) {
								rotate_adjustment = 'slide_left';
							} else if( settings.rotate_type == 'slide_down' ) {
								rotate_adjustment = 'slide_up';
							} else if( settings.rotate_type == 'slide_up' ) {
								rotate_adjustment = 'slide_down';
							}
							vars.reverse = 1;
						}
						mtphr_dnt_rotator_update( new_tick );
		    	});

		    	$nav_next.bind('click', function(e) {
		    		e.preventDefault();

		    		if(vars.running) return false;

			    	// Find the new tick
			    	var new_tick = parseInt(vars.current_tick + 1);
						if( new_tick == vars.tick_count ) {
							new_tick = 0;
						}
						mtphr_dnt_rotator_update( new_tick );
		    	});
		    }




		    /**
		     * Nav controls
		     *
		     * @since 1.0.2
		     */
		    if( $nav_controls && settings.type == 'rotate' ) {

			    $nav_controls.children('a').bind('click', function( e ) {
		    		e.preventDefault();

		    		// Find the new tick
			    	var new_tick = parseInt( $(this).attr('href') );

		    		if(vars.running) return false;
		    		if(new_tick == vars.current_tick) return false;

			    	var reverse = ( new_tick < vars.current_tick ) ? 1 : 0;

		    		if( settings.nav_reverse && reverse ) {
							if( settings.rotate_type == 'slide_left' ) {
								rotate_adjustment = 'slide_right';
							} else if( settings.rotate_type == 'slide_right' ) {
								rotate_adjustment = 'slide_left';
							} else if( settings.rotate_type == 'slide_down' ) {
								rotate_adjustment = 'slide_up';
							} else if( settings.rotate_type == 'slide_up' ) {
								rotate_adjustment = 'slide_down';
							}
							vars.reverse = 1;
						}
						mtphr_dnt_rotator_update( new_tick );
		    	});
		    }




		    /**
		     * Resize listener
		     * Reset the ticker width
		     *
		     * @since 1.0.9
		     */
		    $(window).resize( function() {

			    // Resize the tickers if the width is different
			    if( $ticker.outerWidth() != ticker_width ) {

				    ticker_width = $ticker.outerWidth();

				    if( settings.type == 'scroll' ) {
				    	if( settings.scroll_direction=='up' || settings.scroll_direction=='down' ) {
				    		if( ticker_scroll_resize ) {
				    			mtphr_dnt_scroll_reset_ticks();
				    		} else {
					    		mtphr_dnt_scroll_resize_ticks();
				    		}
				    	} else {
					    	mtphr_dnt_scroll_resize_ticks();
				    	}
				    } else if( settings.type == 'rotate' ) {
					    mtphr_dnt_rotator_resize_ticks();
				    }
			    }
		    });




		    // Trigger the afterLoad callback
        settings.after_load.call(this, $ticker);

			});
		}
	};





	/**
	 * Setup the class
	 *
	 * @since 1.0.0
	 */
	$.fn.ditty_news_ticker = function( method ) {

		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call(arguments, 1) );
		} else if ( typeof method === 'object' || !method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist in ditty_news_ticker' );
		}
	};

})( jQuery );