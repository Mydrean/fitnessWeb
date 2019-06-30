
		//3
		function hb(hbtn,cssname,offset){
		    var a,b,c,d;
		    d=$('.hbtn').offset().top; //元素相对于窗口的距离
		    console.log(d)
		    a=eval(d + offset);
		    b=$(window).scrollTop(); //监控窗口已滚动的距离;
		    c=$(window).height();  //浏览器窗口的高度
		    if(b+c>d+200){
		        $(('.hbtn')).addClass((cssname));
		        }
		    }
		     
			$(document).ready(function(e) {
				$(window).scroll(function(){
				    hb(".hbtn",'hbt',500);
				    }
			    )
			});
			
		//4
		function gdjz(box4,cssname,offset){
		    var a,b,c,d;
		    d=$('.box4').offset().top; //元素相对于窗口的距离
		    console.log(d)
		    a=eval(d + offset);
		    b=$(window).scrollTop(); //监控窗口已滚动的距离;
		    c=$(window).height();  //浏览器窗口的高度
		    if(b+c>d){
		        $(('.box4')).addClass((cssname));
		        }
		    }
		     
			$(document).ready(function(e) {
				$(window).scroll(function(){
				    gdjz(".box4",'xz',500);
				    }
			    )
			});
			
		//5
		function b5tn(b5lf,cssname,offset){
		    var a,b,c,d;
		    d=$('.b5lf').offset().top; //元素相对于窗口的距离
		    console.log(d)
		    a=eval(d + offset);
		    b=$(window).scrollTop(); //监控窗口已滚动的距离;
		    c=$(window).height();  //浏览器窗口的高度
		    if(b+c>d+200){
		        $(('.b5lf')).addClass((cssname));
		        }
		    }
		     
			$(document).ready(function(e) {
				$(window).scroll(function(){
				    b5tn(".b5lf",'b5',500);
				    }
			    )
			});
			
		//5-1
		function b5tn2(b5rt,cssname,offset){
		    var a,b,c,d;
		    d=$('.b5rt>img').offset().top; //元素相对于窗口的距离
		    console.log(d)
		    a=eval(d + offset);
		    b=$(window).scrollTop(); //监控窗口已滚动的距离;
		    c=$(window).height();  //浏览器窗口的高度
		    if(b+c>d+200){
		        $(('.b5rt>img')).addClass((cssname));
		        }
		    }
		     
			$(document).ready(function(e) {
				$(window).scroll(function(){
				    b5tn2(".b5rt>img",'b5img',500);
				    }
			    )
			});
		
		//6
		function b6tn(hbtn6,cssname,offset){
		    var a,b,c,d;
		    d=$('.hbtn6').offset().top; //元素相对于窗口的距离
		    console.log(d)
		    a=eval(d + offset);
		    b=$(window).scrollTop(); //监控窗口已滚动的距离;
		    c=$(window).height();  //浏览器窗口的高度
		    if(b+c>d+200){
		        $(('.hbtn6')).addClass((cssname));
		        }
		    }
		     
			$(document).ready(function(e) {
				$(window).scroll(function(){
				    b6tn(".hbtn6",'hb6',500);
				    }
			    )
			});
		//7
		function b7dh(box7,cssname,offset){
		    var a,b,c,d;
		    d=$('.box7').offset().top; //元素相对于窗口的距离
		    console.log(d)
		    a=eval(d + offset);
		    b=$(window).scrollTop(); //监控窗口已滚动的距离;
		    c=$(window).height();  //浏览器窗口的高度
		    if(b+c>d){
		        $(('.box7')).addClass((cssname));
		        }
		    }
		     
			$(document).ready(function(e) {
				$(window).scroll(function(){
				    b7dh(".box7",'boxdh',500);
				    }
			    )
			});