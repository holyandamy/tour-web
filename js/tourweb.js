 $(function(){
		$(window).scroll(function(){//���¹�����ͼƬ�����ԭ����ɫ����
			var t=$(this).scrollTop();
			var wH=$(document).height();
			var oArr1=["./img/bg/main-bg01.jpg",
				"./img/bg/main-bg02.jpg",
				"./img/bg/main-bg03.jpg",
				"./img/bg/main-bg04.jpg",
				"./img/bg/main-bg05.jpg",
				"./img/bg/main-bg06.jpg"
			];
			var  oArr2=[".bg1",".bg2",".bg3",".bg4",".bg5",".bg6"];
			function bg(e){
				$(".floatLeft div").removeClass("active");
				$(oArr2[e]).addClass("active");
				$("#main").css({backgroundImage:"url("+oArr1[e]+")",backgroundSize:"100%"});
			}
			if(t>0&&t<wH*0.15){
				bg(0);
			}
			else if(t<wH*0.3&&t>wH*0.15){
				bg(1);
				}
			else if(t<wH*0.45&&t>wH*0.3){
				bg(2);
			}
			else if(t<wH*0.6&&t>wH*0.45){
				bg(3);
			}
			else if(t<wH*0.75&&t>wH*0.6){
				bg(4);
			}
			else if(t<wH*0.9&&t>wH*0.75){
				bg(5);
			}
		});
	 	$("#div div").mouseover(function(){
				var $this=$(this);
				$this.animate({width:"26px",height:"26px",borderRadius:"13px"},30).siblings().css({width:"20px",height:"20px"});
		});
		//$("#div div").mouseout(function(){
		//	var $this=$(this);
		//	$this.animate({width:"60px",height:"60px"},30);
		//}); 
	   //�ֲ�
		var i=-1;
		var $dot=$(".dot a");
	    var $div1= $(".div1-left-img");
		$dot.mouseover(function (){//��������ֲ�ֹͣ��ִ��hover
			 clearInterval(timer);
			 var index=$(this).index();
			 $dot.removeClass("active2");
			 $(this).addClass("active2");
			 $div1.css({display:"none"});
			 $div1.eq(index).css({display:"block"});
		})
		$dot.mouseout(function (){//����뿪����ʼ�ֲ�
			 timer=setInterval(ss,2000);
			 
		});
			 timer=setInterval(ss,2000);//���ö�ʱ�����ֲ���ʼ
		function ss(){//�ֲ�����
			 i<$dot.length-1?(i++,start()):(i=0,start());
		}
		function start(){//start����
		  $dot.removeClass("active2").eq(i).addClass("active2");
		  $div1.css({display:"none"});
		  $div1.eq(i).css({display:"block"});
		}
		//���Ұ�ť��ͼƬ�л�
		var j=0;
		$(".div2-wtt-L").mousedown(function(){
			 j<$(".div2-wtt-one ul li").length-1?j++:j=$(".div2-wtt-one ul li").length-1;
			 $(".div2-wtt-one ul").animate({left:-(j*581)+"px"},500);
			 return false;
		})
		$(".div2-wtt-R").mousedown(function(){
			  j<=0?j=0:j--;
			 $(".div2-wtt-one ul").animate({left:-j*581+"px"},500);
			 return false;
		})
		//�ֲ�
		var n=0;
		var $dta=$(".div5-dot a");
		$dta.mouseover(function (){//��������ֲ�ֹͣ��ִ��hover
			clearInterval(tim);
			var index=$(this).index();
		   $dta.removeClass("active5");
		   $(this).addClass("active5");
		   $(".div5-img ul").animate({left:-index*410+"px"},500);
		})
		$dta.mouseout(function (){//����뿪����ʼ�ֲ�
			tim=setInterval(TT,2000);
		 });
			tim=setInterval(TT,2000);//���ö�ʱ�����ֲ���ʼ
			function TT(){//�ֲ�����
				n<$dta.length-1?(n++,move()):(n=0,moveTo());
			}
			function move(){//move����
			   $dta.removeClass("active5").eq(n).addClass("active5");
			   $(".div5-img ul").animate({left:-n*410+"px"},500);
			} 
			function moveTo(){//move����
			   $dta.removeClass("active5").eq(n).addClass("active5");
			   $(".div5-img ul").animate({left:-n*410+"px"},1);
			} 
    });