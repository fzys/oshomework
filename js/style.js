		//jq实现基本逻辑
        //入口函数
		$(function(){
            //初始化数组
            var data = [];
            var dataFished = [];
            var dataNotChanged=[];
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
                $('#number').val("");
                $('#yanzheng').text("");
                $('#yanzhengtime').text("");
                $('#yanzhengnumber').text("");
            });
            //重置全部进程权限判定
            $("#btn3").click(function(){
                if(confirm("确定要重置全部进程？")){
                //点击是的时候刷新页面，暂时不能写。
                $('#number')[0].parentNode.style.display = 'block';
                $('#name').val("");
                $('#needtime').val("");
                $('#number').val("");
                $('#yanzheng').text("");
                $('#yanzhengnumber').text("");
                $('#yanzhengtime').text("");
                $("#yxsf").empty();
                $("#lzsf").empty();
                data =[];
                dataFished = [];
                }
            });
            //验证进程数是否符合要求
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
                    "opacity": "0.8"
            });
            var timeOpacity = $('#yanzhengtime').css("opacity");
            var nameOpacity = $('#yanzheng').css("opacity");
            var numberOpacity = $('#yanzhengnumber').css("opacity");
             if(timeOpacity==0.8&&nameOpacity==0.8&&numberOpacity==0.8)
            {  //jq转dom对象并设置按钮为可操作
                    $('#btn1')[0].disabled = false;
                };
            };
        });
            //验证进程名是否符合要求
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
         			"opacity": "0.8"
         	});;
         	};
                var timeOpacity = $('#yanzhengtime').css("opacity");
                var nameOpacity = $('#yanzheng').css("opacity");
                var numberOpacity = $('#yanzhengnumber').css("opacity");
                //验证数据是否正确（透明度如果都为0.8则为正确，录入按钮变为可操作，否则不可操作。）
                if(timeOpacity==0.8&&nameOpacity==0.8&&numberOpacity==0.8)
                {  //jq转dom对象并设置按钮为可操作
                    $('#btn1')[0].disabled = false;
                }
         	});
            // 验证进程需要时间是否符合要求
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
         			"opacity": "0.8"
         	});
         	};
                var timeOpacity = $('#yanzhengtime').css("opacity");
                var nameOpacity = $('#yanzheng').css("opacity");
                var numberOpacity = $('#yanzhengnumber').css("opacity");
                //验证数据是否正确（透明度如果都为0.8则为正确，录入按钮变为可操作，否则不可操作。）
                if(timeOpacity==0.8&&nameOpacity==0.8&&numberOpacity==0.8)
                {  //jq转dom对象并设置按钮为可操作
                    $('#btn1')[0].disabled = false;
                }
         	});
            //调用函数
            Hideorshow("li:eq(1)",".li1",".li2","#two");
            Hideorshow("li:eq(0)",".li2",".li1","#inf");
         	// Show("#lunzhuan","#lzxs");
         	// Show("#youxian","#yxxs");
         	// Hide("#youxian","#lzxs");
         	// Hide("#lunzhuan","#yxxs");
            //录入各进程并排序
                $("#btn1").click(function(){
                   $('#btn1')[0].disabled = true;
                   var yxnumber = $('#number').val();
                   // console.log("yxnumber:"+yxnumber);
                   var yxneedtime = $('#needtime').val();
                   var priority =50-yxneedtime;
                   var state = 'R';
                   var yxname = $('#name').val();
                   var cputime = 0;
                   $('#name').val("");
                   $('#needtime').val("");
                   $('#yanzhengtime').css("opacity", "0.9");
                   $('#yanzheng').css("opacity","0.9");
	               $('#yanzheng').text("");
	               $('#yanzhengtime').text("");
                   $('#yanzhengnumber').text("");
                 data.push({
                    "name": yxname,
                    "yxneedtime":yxneedtime,
                    "cputime":cputime,
                    "priority":priority,
                    "state":state

                   });
                 console.log("datalength:"+data.length);
              // //降序排序
              //   data.sort(function(a,b){
              //       return b.priority-a.priority;
              //     });
              //  for(var i=0;i<data.length;i++){
              //   if(i ==0){
              //       // console.log("i'm borther");
              //      data[i].state ="R";
              //   }
              //   else if(data[i].yxneedtime ==0){
              //       // console.log("woshi erge");
              //       data[i].state = "F";
              //   }
              //   else {
              //       // console.log("woshi sandi");
              //       data[i].state = "W";
              //   }
               // console.log(data[i].name+"的优先数长度:"+data[i].priority);
               // console.log("第"+(i+1)+"个进程：名称："+data[i].name+",需要时间："+data[i].yxneedtime+",占用时间："+data[i].cputime+",优先数："+data[i].priority+",状态："+data[i].state);
               // }
                  if(data.length<yxnumber){
                   // console.log(data.length);
                   $('#number')[0].parentNode.style.display = 'none';
                   $('#titleinf').text("请填写第"+(data.length+1)+"个进程信息：");
                   alert("录入成功，请继续输入第"+(data.length+1)+"个进程信息！");
                   }
                   if(data.length==yxnumber) {
                    // yxnumber=$('#number').val("1");
                    // console.log(yxnumber);
                    $('#number')[0].parentNode.style.display = 'none';
                    // $('#name')[0].disabled = true;
                    // $("#btn3")[0].parentNode.nextSibling.style.display="none";
                    $('#titleinf').text("若要重新录入进程请点击红色按钮，若要追加请直接在下方追加：");
                    $('#h5').show(1000);
                    $('#h5').hide(3000);
                    $("#one").show(1000);
                   };
               });
                //优先数算法逻辑实现
                $("#youxian").click(function(){
                   if(confirm("执行后无法再选择其它算法，且追加无效，是否执行？")){
                     clearInterval(timer);
                    $("#lzxs").hide(1000);
                    $("#yxxs").show(1000);
                    // $('#yxsf').empty();
                    var timer = null;
                    for(var i = 0;i<data.length;i++) {
                        console.log("第"+(i+1)+"个进程："+data[i].name+","+data[i].yxneedtime);
                    }
                    timer = setInterval(function(){
                    //降序排序
                    data.sort(function(a,b){
                        return b.priority-a.priority;
                        });
                    for(var i=0;i<data.length;i++){
                        if(i == 0){
                        console.log("i'm borther");
                        data[i].state ="R";
                        $("#yxsf").append('<span>🏃 名称：'+data[i].name+",需要时间："+data[i].yxneedtime+",占用时间："+data[i].cputime+",优先数："+data[i].priority+",状态："+data[i].state+'</span><br/>');
                            if(data[0].yxneedtime<=0){
                                data[0].state='F';
                                dataFished.push(data[0]);
                                for(var i = 0;i<dataFished.length;i++){
                                $("#yxsf").append('<span>🚥 第'+(i+1)+"个完成进程名称："+dataFished[i].name+",需要时间："+dataFished[i].yxneedtime+",占用时间："+dataFished[i].cputime+",优先数："+dataFished[i].priority+",状态："+dataFished[i].state+'</span><br/>');       
                        }
                            data.shift();
                        }
                        else {
                            data[0].yxneedtime--;
                            data[0].priority--;
                            data[0].cputime++;
                            }
                        }
                        else {
                            console.log("woshi sandi");
                            data[i].state = "W";
                            $("#yxsf").append('<span>🐂  第'+i+"个就绪进程名称："+data[i].name+",需要时间："+data[i].yxneedtime+",占用时间："+data[i].cputime+",优先数："+data[i].priority+",状态："+data[i].state+'</span><br/>');
                        }
                    }
                    },0);
                }
                });
                //轮转算法逻辑实现
                $("#lunzhuan").click(function(){
                   if(confirm("执行后无法再选择其它算法，且追加无效，是否执行？")){
                     clearInterval(timer);
                    $("#yxxs").hide(1000);
                    $("#lzxs").show(1000);
                    // $('#yxsf').empty();
                    var timer = null;
                    for(var i = 0;i<data.length;i++) {
                        console.log("第"+(i+1)+"个进程："+data[i].name+","+data[i].yxneedtime);
                    }
                    timer = setInterval(function(){
                    //降序排序
                    data.sort(function(a,b){
                            return b.priority-a.priority;
                          });
                       for(var i=0;i<data.length;i++){
                        if(i == 0){
                        console.log("i'm borther");
                        data[i].state ="R";
                        $("#yxsf").append('<span>🏃 名称：'+data[i].name+",需要时间："+data[i].yxneedtime+",占用时间："+data[i].cputime+",优先数："+data[i].priority+",状态："+data[i].state+'</span><br/>');
                            if(data[0].yxneedtime<=0){
                                data[0].state='F';
                                dataFished.push(data[0]);
                                for(var i = 0;i<dataFished.length;i++){
                                $("#yxsf").append('<span>🚥 第'+(i+1)+"个完成进程名称："+dataFished[i].name+",需要时间："+dataFished[i].yxneedtime+",占用时间："+dataFished[i].cputime+",优先数："+dataFished[i].priority+",状态："+dataFished[i].state+'</span><br/>');
                            }
                                data.shift();
                    }
                    else {
                        data[0].yxneedtime--;
                        data[0].priority--;
                        data[0].cputime++;
                    }
                        }
                        else {
                           
                            console.log("woshi sandi");
                            data[i].state = "W";
                            $("#yxsf").append('<span>🐂  第'+i+"个就绪进程名称："+data[i].name+",需要时间："+data[i].yxneedtime+",占用时间："+data[i].cputime+",优先数："+data[i].priority+",状态："+data[i].state+'</span><br/>');
                        }
                    }
                    },0);
                }
                });
            // }
		  });
