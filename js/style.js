		//jq实现基本逻辑
        //入口函数
		$(function(){
			//封装主菜单选择模块,降低用户使用难度，提升用户体验。
			function Hideorshow(id1,id2,id3,id4){
				$(id1).click(function(){
					$(id2).hide(1000);
					$(id3).show(1000,function(){
						$(id4).show(1000);
					});
				});
			};
			//封装淡入淡出函数
           function slideToggle(id1,id2){
            $(id1).click(function(){
            	$(id2).show(1000);
            	$(id2).hide(5000);
            });
            };
            //封装隐藏模块
    		function Hide(id1,id2){
            $(id1).click(function(){
            	$(id2).hide(1000);
            });
            };
            //封装显示模块
            function Show(id1,id2,action){
            $(id1).click(function(){
            	$(id2).show(1000);
            });
            };
            //伪造表单重置
            $("#btn2").click(function(){
                //文本框的值只能用val（），不能用text（）。
                $('#name').val("");
                $('#needtime').val("");
                $('#yanzheng').text("");
                $('#yanzhengtime').text("");
            });
            //实验一输入验证
         	$('#name').blur(function(){
         		var name = $('#name').val();
         		if(name ==""){
         			//jq转dom对象并设置按钮为不可操作
         			$('#btn1')[0].disabled = true;
         			$('#yanzheng').text("❌  进程名不能为空！");
         			$('#yanzheng').css({
         			"color":"red",
         			"opacity": "0.9"
         		});
         		}
         		else {
         			//jq转dom对象并设置按钮为不可操作
         			$('#btn1')[0].disabled = true;
         			$('#yanzheng').text("✅ 输入正确！");
         			$('#yanzheng').css({
         			"color":"green",
         			"opacity": "1"
         	});;
         		};
         	});
         	$('#needtime').blur(function(){
         		var time = $('#needtime').val();
         		//判断是否是正整数
         		if(isNaN(time)||time%1!=0||time<=0){
         		//jq转dom对象并设置按钮为不可操作
         		$('#btn1')[0].disabled = true;
         		$('#yanzhengtime').text("❌  时间片数只能是整正数！");
         		$('#yanzhengtime').css({
         			"color":"red",
         			"opacity": "0.9"
         	});
         	}
         		//判断是否为空
         		else if(time == "") {
         		//jq转dom对象并设置按钮为不可操作
         		$('#btn1')[0].disabled = true;
         		$('#yanzhengtime').text("❌  时间片数不能为空！");
         		$('#yanzhengtime').css({
         			"color":"red",
         			"opacity": "0.9"
         	});
         	}
         		else {
         		//jq转dom对象并设置按钮为不可操作
         		$('#btn1')[0].disabled = true;
         		$('#yanzhengtime').text("✅ 输入正确！");
         		$('#yanzhengtime').css({
         			"color":"green",
         			"opacity": "1"
         	});
         	};
         	//验证数据是否正确（透明度如果都为1则为正确，录入按钮变为可操作，否则不可操作。）
         		var timeOpacity = $('#yanzhengtime').css("opacity");
         		var nameOpacity = $('#yanzheng').css("opacity");
         		if(timeOpacity==nameOpacity==1)
         		{  //jq转dom对象并设置按钮为可操作
         			$('#btn1')[0].disabled = false;
         		}
         	});
            //调用函数
            Hideorshow("li:eq(1)",".li1",".li2","#two");
            Hideorshow("li:eq(0)",".li2",".li1","#inf");
         	Show("#btn1","#one");
         	slideToggle("#btn1","#h5");
         	Show("#lunzhuan","#lzxs");
         	Show("#youxian","#yxxs");
         	Hide("#youxian","#lzxs");
         	Hide("#lunzhuan","#yxxs");
            //初始化数组
            var data = [{
            	"name":yxname,
            	"needtime":yxneedtime,
            	"cputime":cputime,

            }];
            //优先数算法逻辑实现
                $("#btn1").click(function(){	
                   var yxneedtime = $('#needtime').val();
                   var yxneedtimemodel = $('#needtime').val()
                   var yxname = $('#name').val();
                   var cputime = 0;
                   $('#name').val("");
                   $('#needtime').val("");
	               $('#yanzheng').text("");
	               $('#yanzhengtime').text("");
	               var timer =null;
	               timer = setInterval(function(){
	                yxneedtime--;
	                cputime++;
	                console.log(yxname+"执行完还需要的时间:"+yxneedtime);
	                console.log(yxname+"累积占用cpu的时间："+cputime);
	                if(yxneedtime<=0) {
	                	console.log("我执行完了");
	                	console.log(yxname+"累积占用cpu的时间："+cputime);
	                	clearInterval(timer);
	                }
	               }, 1000);
		           console.log("优先数需要时间："+yxneedtime); 
		           console.log("优先数mingzi："+yxname); 
		           console.log(data[0]);
                })    ;	
		});