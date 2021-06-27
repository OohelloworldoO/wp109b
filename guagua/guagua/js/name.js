var box=document.getElementById('box');
        var btn=document.getElementById('btn');
        var btn1=document.getElementById('btn1');
        var btn2=document.getElementById('btn2');
        var bbt=document.getElementById('bbt');
        var luck=document.getElementById('luck');
        var mask=document.getElementById('mask');
        var divs=box.getElementsByTagName('div');
        var k=[];
        for(var i=0;i<divs.length;i++){
            divs[i].index=i;
            divs[i].ondblclick=edit;
        }
        var html;
        var t=0;
        function type() {
            if (t <= html.length) {
                luck.children[0].innerText = html.substring(0, t++);
                setTimeout(type, 400);
            }
            else{
                t=0;
            }
        }
        function start(){
            btn.disabled=true;
            btn1.disabled=true;
            btn2.disabled=true;
            var cut=setInterval(toggle,100);
            mask.style.transform="scale(1)";
            setTimeout(function(){
                clearInterval(cut);
                var l=document.querySelector('.light');
                k.push(l.index);
                console.log(k);
                luck.style="top: 200px;";
                html="恭喜"+l.innerText+"成為天選者";
                type();
                btn.disabled=false;
                btn1.disabled=false;
                btn2.disabled=false;
            },2000);
        }
        bbt.onclick=function(){
            luck.style="top: -200px;";
            mask.style.transform="scale(0)";
        }
        var j;
        function toggle(){
            for(var i=0;i<divs.length;i++){
                    divs[i].className="";
            }
            j=Math.floor(Math.random()*divs.length);
            var qc=k.some(value=>{
                return value==j;
                });
                if(qc){
                if(k.length>=divs.length){
                    alert("全部都點過了");
                    k=[];
                }
                toggle();
                }else
                divs[j].className="light";
        }
        
        function edit(){
            var str = this.innerHTML;
            this.innerHTML = '<input type="text" />';
            var input = this.children[0];
            input.value = str;
            input.select();
            input.onblur=function(){
                this.parentNode.innerText=this.value;
            }
        }
        function adddiv(){
            var div=document.createElement('div');
            div.innerText="點即可改名";
            box.appendChild(div);
            divs=box.getElementsByTagName('div');
            for(var i=0;i<divs.length;i++){
                divs[i].index=i;
                divs[i].ondblclick=edit;
            }
        }
        function remove(){
            divs[divs.length-1].remove();
            divs=box.getElementsByTagName('div');
            for(var i=0;i<divs.length;i++){
                divs[i].index=i;
                divs[i].ondblclick=edit;
            }
        }