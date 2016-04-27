(function(){
	var iNow=0;
	var timer;
	var oLoad=document.getElementById('load');
	var oLoad_img=oLoad.getElementsByTagName('img')[0];
	timer=setInterval(function(){
		iNow++;
		if(iNow==10){
		move(oLoad,{opacity:0});
		}else if(iNow==16){
			oLoad.style.display='none';
			/*oLoad_img.parentNode.removeChild(oLoad);*///
			clearInterval(timer);
			
		}
	},200);
	
})();
var na=window.navigator.userAgent;
var re=/chrome/gi;
if(!re.test(na))
{ 
  alert('请用最新版chrome浏览器查看');

}else{
(function(){
	function rnd(m,n){
	  return parseInt(Math.random()*((m+1)-n))+n;
	}

function createList(){
					var R=6;
					var C=10;
					for(var a=0;a<R;a++){
						for(var b=0;b<C;b++){
							var oS=document.createElement('span');
							oS.style.width=aA[0].offsetWidth/C+'px';
							oS.style.height=aA[0].offsetHeight/R+'px';
							aA[0].appendChild(oS);
							oS.style.left=b*oS.offsetWidth+'px';
							oS.style.top=a*oS.offsetHeight+'px';
							oS.style.backgroundPosition=-b*oS.offsetWidth+'px '+-a*oS.offsetHeight+'px';		
						}		
					}			
				} //创建span
	function explore(obj){
					var aS=aA[0].getElementsByTagName('span');
					for(var i=0;i<aS.length;i++){
						aS[i].style.WebkitTransition='1s all ease';
						var x=(aS[i].offsetLeft+aS[i].offsetWidth/2)-aA[0].offsetWidth/2;
						var y=(aS[i].offsetTop+aS[i].offsetHeight/2)-aA[0].offsetWidth/2;
						aS[i].style.WebkitTransform='perspective(1000px) translate('+x+'px,'+y+'px) rotateY('+rnd(-360,360)+'deg) rotateX('+rnd(-360,360)+'deg)';
						aS[i].style.opacity=0;				
					}
					function fnEnd(){
						aS[aS.length-1].removeEventListener('transitionend',fnEnd,false);
						aA[0].href='#';
						for(var i=0;i<aS.length;i++){
							(function(index){
								aS[i].style.WebkitTransition='none';
								aS[i].style.WebkitTransform='';
								aS[i].style.backgroundImage='url(img/'+(iNow%4+1)+'.png)';
								move(aS[index],{opacity:1},{duration:30,complete:function(){
									if(index==aA.length){
										if(obj)obj.className='active';
										bOk=false;	
									}	
								}});
							})(i);
						}
					}
					aS[aS.length-1].addEventListener('transitionend',fnEnd,false);	
				}//爆炸;

					
					
	//创建完成;
	var oBanner=document.getElementById('banner');
	var oDot_wrap=document.getElementById('dot_Wrap');
	var Roll_wrap=document.getElementById('roll_wrap');
	var aA=Roll_wrap.getElementsByTagName('a');
	var zA=oDot_wrap.getElementsByTagName('a');
	var iNow=0;
	var form=0;
	var timer=null;
		createList();
		explore();
		var bOk = false
		for(var i=0;i<zA.length;i++){
			zA[i].index=i;
			zA[i].onclick=function(){
				if(bOk)return;
					bOk = true;
					
					iNow=this.index;
					for(var i=0;i<zA.length;i++){
					zA[i].className='';
					}
					explore(zA[iNow]);
					
					
			};
			
			
		}
		
		
})();

(function(){
		function a2d(n){
		return n*180/Math.PI;
	}
	
	function hoverDir(obj,ev){
		var x = obj.offsetLeft+obj.offsetWidth/2 - ev.pageX;  
		var y = obj.offsetTop+obj.offsetHeight/2 - ev.pageY; 
		return Math.round((a2d(Math.atan2(y,x))+180)/90)%4;
	}
	//封装开始
	function coll(obj){
		obj.onmouseover = function(ev){
			var oS = obj.children[0];	
			var oEvent = ev||event;
			var oFrom = oEvent.fromElement||oEvent.relatedTarget;
			if(obj.contains(oFrom)){
				return;
			}
			var dir = hoverDir(obj,oEvent);
			
			//上 3 右 0 下 1 左2
			switch(dir){
				case 0:
					oS.style.left = '484px';
					oS.style.top = '0';
				break;
				case 1:
					oS.style.left = '0';
					oS.style.top = '400px';
				break;
				case 2:
					oS.style.left = '-484px';
					oS.style.top = '0';
				break;
				case 3:
					oS.style.left = '0';
					oS.style.top = '-400px';
				break;
			};
			move(oS,{left:0,top:0},{duration:1000});
		};
		
		obj.onmouseout = function(ev){
				var oS = obj.children[0];	
				var oEvent = ev||event;
				var oTo =oEvent.toElement||oEvent.relatedTarget;
				if(obj.contains(oTo)){
					return;
				}
				var dir = hoverDir(obj,oEvent);
				
				//上 3 右 0 下 1 左2
				switch(dir){
					case 0:
						move(oS,{left:'484',top:'0'},{duration:1000});
					break;
					case 1:
						
						move(oS,{left:'0',top:'400'},{duration:1000});
	
					break;
					case 2:
						move(oS,{left:'-484',top:'0'},{duration:1000});
					break;
					case 3:
						move(oS,{left:'0',top:'-400'},{duration:1000});
					break;
				};
		};
	}
	var oUl=document.getElementById('ul');
	var aLi=oUl.children;
	for(var i=0;i<aLi.length;i++){
		coll(aLi[i]);
		
	}
})();
}