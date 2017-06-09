/*
*cnode 首页
*/
(function($){
	var home = {
		init: function(){
			this.flag 	= false;
			this.index  = 0;
			this.tab    = '';
			this.ajax();
			this.eventBind();
			this.scroll();
		},
		eventBind: function(){
			var _this   = this;
				dom 	= $('.js_nav'),
				li 		= dom.find('li'),
				falg 	= true;
			li.on('click',function(){
				$(window).scrollTop(0);
				$(this).addClass('on').siblings().removeClass('on');
				_this.tab = $(this).attr('data-tab');
				_this.index = 0;
				_this.ajax({
					tab:_this.tab,
					page:_this.index
				})
			});
		},
		ajax: function(obj){
			var _this  = this,
					config = {
					page: 0,
					tab: 'all',
					limit: 10,
					append: false
				},
				parent 	= $('.js-list');
			$.toast({
				'text':'加载中....',
				'delay':500
			});

			if(obj && $.isPlainObject(obj)){
				$.extend(config , obj);
			};
			$.ajax({
				type: 'GET',
				url:'https://cnodejs.org/api/v1/topics?limit='+ config.limit +'&tab='+ config.tab +'&page='+ config.page,
				contentType:'application/json; charset=utf-8',
				beforeSend: function(){
					_this.flag = true;
				},
				success: function(data){
					_this.flag = false;

					if(data.success){
						if(data.data.length > 0){
							if(config.append){
								parent.append(_this.template(data.data));
							}else{
								parent.html(_this.template(data.data));
							}
						}else{
							alert('数据已加载完毕！');
						}
					}	
				}
			});
		},
		template: function(data){
			var html 	= '',
				len  	= data.length;
			for(var i=0;i < len;i++){
				var label ='';
				if(data[i].top || data[i].good){
					if(data[i].top){
						label += '<span class="put-top ui-border-radius">置顶</span>';
					};
					if(data[i].good){
						label += '<span class="put-good ui-border-radius">精华</span>';
					};
				}else{
					switch (data[i].tab) {
						case 'ask':
							label += '<span class="topiclist-tab ui-border-radius">问答</span>';
							break;
						case 'share':
							label += '<span class="topiclist-tab ui-border-radius">分享</span>';
							break;
						case 'job':
							label += '<span class="topiclist-tab ui-border-radius">招聘</span>';
							break;
					}
				};
				html+='<li class="item ui-border-b">' +
					'<a href="/details">' +
						'<div class="item-hd">' +
							'<div class="user-avatar">' +
								'<img src="' + data[i].author.avatar_url + '" />' +
							'</div>' +
							'<div class="user-info">' +
								'<p class="user-name">'+ data[i].author.loginname +'</p>' +
								'<p class="create-at">2小时前</p>' +
							'</div>' +
						'</div>' +
						'<div class="item-bd">' +
							'<h2>'+ label + data[i].title +'</strong></h2>' +
						'</div>' +
						'<div class="item-ft">' +
								'<span class="replies ui-border-r"><i class="iconfont icon-browse"></i>'+ data[i].reply_count +'</span>' +
								'<span class="visits ui-border-r"><i class="iconfont icon-huifu"></i>'+ data[i].visit_count +'</span>' +
								'<span class="last-active-time"><i class="iconfont icon-shijian"></i>2小时前</span>' +
						'</div>' +
					'</a>' +
				'</li>';
			}
			return html;
		},
		scroll: function(tab){
			var _this 		= this;
			$(window).scroll(function(){
				var winH 		= $(window).height(),
					scrollTop 	= $(document).scrollTop(),
					docH 		= $(document).height();
					parent 	= $('.js-list');
				if(docH <= parseInt(winH + scrollTop)){
					if(!_this.flag){
						_this.index ++;
						_this.ajax({
							tab:_this.tab,
							page:_this.index,
							append: true
						});
					}
				}
			});
		}
	}
	home.init();
})(window.jQuery || $);