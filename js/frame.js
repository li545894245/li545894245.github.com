
	var oFrame=document.getElementById('frame');
	var aFrame_tab=oFrame.getElementsByTagName('div');
	var aFrame_btn=document.getElementById('frame_btn');
	var aSbtn=aFrame_btn.children;
	var iNow=0;
	var timer=null;
	function next(){
		iNow++;
		if(iNow==aSbtn.length){
			iNow=0;
		}
		show();
	}
	function show(){
			var fx = Tween.Sine.easeInOut;
			for(var i=0;i<aSbtn.length;i++){//  complete
				move(aFrame_tab[i],{marginLeft:-1500,opacity:0},{easing:fx});
				aFrame_tab[i].style.display='none';
				aSbtn[i].className='';
				}
				aSbtn[iNow].className='on_btn';
				move(aFrame_tab[iNow],{marginLeft:0,opacity:1},{easing:fx});
				aFrame_tab[iNow].style.display='block';
			}
	for(var i=0;i<aSbtn.length;i++){
		aSbtn[i].index=i;
		aSbtn[i].onclick=function(){
			iNow=this.index;
			show();
		}
	};
	clearInterval(timer);
	timer=setInterval(next,4700);
	oFrame.onmouseover=function(){
		clearInterval(timer);
	};
	
	oFrame.onmouseout=function(){
		timer=setInterval(next,4700);
	};
