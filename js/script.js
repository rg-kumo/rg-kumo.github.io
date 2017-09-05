/* more read */
function read (){
	const text = '<div class="2015">					<h2>2015</h2><br>					<ul>						<li><span class="font-author">Shigeya Suzuki</span>, Rodney VAN METER, "Classification of Quantum Repeater Attacks", NDSS Workshop on Security of Emerging Networking Technologies (SENT) Co-located with Network and Distributed System Security (NDSS) Symposium, 2015</li>					</ul><br>				</div>				<div class="2014">					<h2>2014</h2><br>					<ul>						<li>津崎 善晴, 岡部 寿男, 新 麗, 林 達也, 岡田 耕司, <span class="font-author">鈴木 茂哉</span>, 中村 修, "LACCOONS: ネットワーク仕様定義による広域分散ネットワークの自動運用管理システム", 第36回インターネット技術第163委員会(ITRC)研究会CIS分科会(鳥取), 2015年11月.</li><br>						<li>ロドニー バンミータ, <span class="font-author">鈴木 茂哉</span>, 永山 翔太, "量子計算: 新情報技術の必要性と可能性", KEIO SFC JOURNAL 第13巻2号, pp.7-18, Mar. 2014.</li><br>						<li><span class="font-author">Shigeya Suzuki</span>, Yuki Sato, Takahiro Yokoishi, Jin Mitsugi, "A Cost Effective and Sustainable Relief Material Supply Visibility System for Devastated Areas" In proceedings of Internet of Things (WF-IoT), 2014 IEEE World Forum on, Seoul, Korea, pp.271-276, March 2014.</li><br>						<li>Jin Mitsugi, Yuki Sato, Miyuki Ozawa, <span class="font-author">Shigeya Suzuki</span>, "An Integrated Device and Service Discovery with UPnP and ONS to Facilitate the Composition of Smart Home Applications", In proceedings of Internet of Things (WF-IoT), 2014 IEEE World Forum on, Seoul, Korea, pp.400-404, March 2014.</li><br>					</ul><br>				</div>				<div class="2013">					<h2>2013</h2>					<ul>						<li><span class="font-author">Nakajima, Hirotaka</span>, Isshiki, Masao; Takefuji, Yoshiyasu, "WebSocket proxy system for mobile devices," Consumer Electronics (GCCE), 2013 IEEE 2nd Global Conference on , vol., no., pp.315,317, 1-4 Oct. 2013.</li><br>						<li>松谷 健史, 空閑 洋平, ロドニーバンミーター, <span class="font-author">鈴木 茂哉</span>, 吉藤 英明, 村井 純, "全行程のパイプライン化による低遅延 IP パケット転送方式", 電子情報通信学会 論文誌 (Vol.J96-B(10), pp.1095-1103, Oct. 2013.)</li>					</ul><br>				</div>				<div class="2012">						<h2>2012</h2><br>						<ul>							<li><span class="font-author">鈴木 茂哉</span>, 石原 知洋, ビル マニング, 村井 純, "DNSSECリソースレコードを用いたアドホックネットワークノード間公開鍵認証方式", 情報処理学会論文誌 (Vol.53 No.1 385-402 (Jan. 2012))</li>						</ul><br>					</div>				<div class="2010">					<h2>2010</h2>					<ul>						<li>Yamada, Ikuya, Yamaki, Wataru, <span class="font-author">Nakajima, Hirotaka</span>, and Takefuji, Yoshiyasu. "Phroni: Augmenting Wikipedia Using Mashups." In AI Mashup Challenge 2010, in ESWC 2010: 7th Extended Semantic Web Conference (Heraklion, Greece 2010)</li><br>						<li>Yamada, Ikuya, Yamaki, Wataru, <span class="font-author">Nakajima, Hirotaka</span>, and Takefuji, Yoshiyasu. Ousia Weaver: A tool for creating and publishing mashups as impressive Web pages. In MEM 2010: 3rd Workshop on Mashups, Enterprise Mashups and Lightweight Composition on the Web, in WWW 2010: Proceedings of the 18th International World Wide Web Conference (Raleigh, North Carolina, USA 2010)</li><br>					</ul><br>				</div>';
	document.getElementById("more").innerHTML = text;
};

$(document).ready(function(e) {
	$('.with-hover-text, .regular-link').click(function(e){
		e.stopPropagation();
	});
	
	/***************
	* = Hover text *
	* Hover text for the last slide
	***************/
	$('.with-hover-text').hover(
		function(e) {
			$(this).css('overflow', 'visible');
			$(this).find('.hover-text')
				.show()
				.css('opacity', 0)
				.delay(200)
				.animate(
					{
						paddingTop: '25px',
						opacity: 1
					},
					'fast',
					'linear'
				);
		},
		function(e) {
			var obj = $(this);
			$(this).find('.hover-text')
				.animate(
					{
						paddingTop: '0',
						opacity: 0
					},
					'fast',
					'linear',
					function() {
						$(this).hide();
						$( obj ).css('overflow', 'hidden');
					}
				);
		}
	);
	
	var img_loaded = 0;
	var j_images = [];
	
	/*************************
	* = Controls active menu *
	* Hover text for the last slide
	*************************/
	$(function() {
		var pause = 10;
		$(document).scroll(function(e) {
			delay(function() {
				
				var tops = [];
				
				$('.story').each(function(index, element) {
					tops.push( $(element).offset().top - 200 );
				});
	
				var scroll_top = $(this).scrollTop();
				
				var lis = $('.nav > li');
				
				for ( var i=tops.length-1; i>=0; i-- ) {
					if ( scroll_top >= tops[i] ) {
						menu_focus( lis[i], i+1 );
						break;
					}
				}
			},
			pause);
		});
		$(document).scroll();
	});
});

var delay = (function(){
	var timer = 0;
	return function(callback, ms){
		clearTimeout (timer);
		timer = setTimeout(callback, ms);
	};
})();

function menu_focus( element, i ) {
	if ( $(element).hasClass('active') ) {
		if ( i == 6 ) {
			if ( $('.navbar').hasClass('inv') == false )
				return;
		} else {
			return;
		}
	}
	
	enable_arrows( i );
		
	if ( i == 1 || i == 6 )
		$('.navbar').removeClass('inv');
	else
		$('.navbar').addClass('inv');
	
	$('.nav > li').removeClass('active');
	$(element).addClass('active');
	
	var icon = $(element).find('.icon');
	
	var left_pos = icon.offset().left - $('.nav').offset().left;
	var el_width = icon.width() + $(element).find('.text').width() + 10;
	
	$('.active-menu').stop(false, false).animate(
		{
			left: left_pos,
			width: el_width
		},
		1500,
		'easeInOutQuart'
	);
}

function enable_arrows( dataslide ) {
	$('#arrows div').addClass('disabled');
	if ( dataslide != 1 ) {
		$('#arrow-up').removeClass('disabled');
	}
	if ( dataslide != 6 ) {
		$('#arrow-down').removeClass('disabled');
	}
	if ( dataslide == 3 ) {
		$('#arrow-left').removeClass('disabled');
		$('#arrow-right').removeClass('disabled');
	}
}

/*************
* = Parallax *
*************/
jQuery(document).ready(function ($) {
	//Cache some variables
	var links = $('.nav').find('li');
	slide = $('.slide');
	button = $('.button');
	mywindow = $(window);
	htmlbody = $('html,body');
	
	//Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
	//easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
	function goToByScroll(dataslide) {
		var offset_top = ( dataslide == 1 ) ? '0px' : $('.slide[data-slide="' + dataslide + '"]').offset().top;
		
		htmlbody.stop(false, false).animate({
			scrollTop: offset_top
		}, 1500, 'easeInOutQuart');
	}
	
	//When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
	links.click(function (e) {
		e.preventDefault();
		dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
		$(".nav-collapse").collapse('hide');
	});
	
	//When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
	$('.navigation-slide').click(function (e) {
		e.preventDefault();
		dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
		$(".nav-collapse").collapse('hide');
	});
});

/***************
* = Menu hover *
***************/
jQuery(document).ready(function ($) {
	//Cache some variables
	var menu_item = $('.nav').find('li');
	
	menu_item.hover(
		function(e) {
			var icon = $(this).find('.icon');
			
			var left_pos = icon.offset().left - $('.nav').offset().left;
			var el_width = icon.width() + $(this).find('.text').width() + 10;
			
			var hover_bar = $('<div class="active-menu special-active-menu"></div>')
				.css('left', left_pos)
				.css('width', el_width)
				.attr('id', 'special-active-menu-' + $(this).data('slide') );
			
			$('.active-menu').after( hover_bar );
		},
		function(e) {
			$('.special-active-menu').remove();
		}
	);
});

/******************
* = Arrows click  *
******************/
jQuery(document).ready(function ($) {
	//Cache some variables
	var arrows = $('#arrows div');
	
	arrows.click(function(e) {
		e.preventDefault();
		
		if ( $(this).hasClass('disabled') )
			return;
		
		var slide = null;
		var datasheet = $('.nav > li.active').data('slide');
		var offset_top = false;
		var offset_left = false;
		
		
		switch( $(this).attr('id') ) {
			case 'arrow-up':
				offset_top = ( datasheet - 1 == 1 ) ? '0px' : $('.slide[data-slide="' + (datasheet-1) + '"]').offset().top;
				break;
			case 'arrow-down':
				offset_top = $('.slide[data-slide="' + (datasheet+1) + '"]').offset().top;
				break;
			case 'arrow-left':
				offset_left = $('#slide-3 .row').offset().left + 452;
				if ( offset_left > 0 ) {
					offset_left = '0px';
				}
				break;
			case 'arrow-right':
				offset_left = $('#slide-3 .row').offset().left - 452;
				if ( offset_left < $('body').width() - $('#slide-3 .row').width() ) {
					offset_left = $('body').width() - $('#slide-3 .row').width();
				}
				break;
		}
		
		if ( offset_top != false ) {
			htmlbody.stop(false, false).animate({
				scrollTop: offset_top
			}, 1500, 'easeInOutQuart');
		}
		
		if ( offset_left != false ) {
			if ( $('#slide-3 .row').width() != $('body').width() ) {
				$('#slide-3 .row').stop(false, false).animate({
					left: offset_left
				}, 1500, 'easeInOutQuart');
			}
		}
	});
});