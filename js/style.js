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
            $('#number').blur(function(){
                var number = $('#number').val();
                //判断是否是正整数
                if(isNaN(number)||number%1!=0||number<=0){
                //jq转dom对象并设置按钮为不可操作
                $('#btn1')[0].disabled = true;
                $('#yanzhengnumber').text("❌  进程数只能是整正数！");
                $('#yanzhengnumber').css({
                    "color":"red",
                    "opacity": "0.9"
            });
            }
                //判断是否为空
                else if(number == "") {
                //jq转dom对象并设置按钮为不可操作
                $('#btn1')[0].disabled = true;
                $('#yanzhengnumber').text("❌  进程数不能为空！");
                $('#yanzhengnumber').css({
                    "color":"red",
                    "opacity": "0.9"
            });
            }
                else {
                //jq转dom对象并设置按钮为不可操作
                $('#btn1')[0].disabled = true;
                $('#yanzhengnumber').text("✅ 输入正确！");
                $('#yanzhengnumber').css({
                    "color":"green",
                    "opacity": "1"
            });
            };        
        });
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
         		if(isNaN(time)||time%1!=0||time<=0||time>50){
         		//jq转dom对象并设置按钮为不可操作
         		$('#btn1')[0].disabled = true;
         		$('#yanzhengtime').text("❌  需要时间片数只能是不大于50的整正数！");
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
                var numberOpacity = $('#yanzhengnumber').css("opacity");
         		if(timeOpacity==nameOpacity==numberOpacity==1)
         		{  //jq转dom对象并设置按钮为可操作
         			$('#btn1')[0].disabled = false;
         		}
         	});
            //调用函数
            Hideorshow("li:eq(1)",".li1",".li2","#two");
            Hideorshow("li:eq(0)",".li2",".li1","#inf");
         	Show("#lunzhuan","#lzxs");
         	Show("#youxian","#yxxs");
         	Hide("#youxian","#lzxs");
         	Hide("#lunzhuan","#yxxs");
            //初始化数组
            var data = []; 
            //优先数算法逻辑实现
                $("#btn1").click(function(){	
                   $('#btn1')[0].disabled = true;
                   var yxnumber = $('#number').val();
                   var yxneedtime = $('#needtime').val();
                   var yxneedtimemodel = $('#needtime').val()
                   var yxname = $('#name').val();
                   var cputime = 0;
                   $('#number').val("");
                   $('#name').val("");
                   $('#needtime').val("");
	               $('#yanzheng').text("");
	               $('#yanzhengtime').text("");
                   $('#yanzhengnumber').text("");
                   //定时器
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
                   data.push({
                    "name": yxname,
                    "yxneedtime":yxneedtime,
                    "cputime":cputime
                   });
                  if(data.length<1){
                   $('#titleinf').text("请填写第"+(data.length+1)+"个进程信息：");
                   alert("录入成功，请继续输入第"+(data.length+1)+"个进程信息！");
                   }
                   if(data.length=1) {
                    $('#titleinf').text("请填写您要输入的进程信息：");
                    $('#h5').show(1000);
                    $('#h5').hide(3000);
                    $("#one").show(1000);
                
                   }
                });
		});