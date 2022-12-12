const shw=()=>{
    let a=document.getElementById('m1').value;
    let b=document.getElementById('m2').value;
    let c=document.getElementById('m3').value;
    let d=document.getElementById('m4').value;
    let e=document.getElementById('m5').value;
    // console.log(a,b,c,d,e)
    let ma1=Number(a)
    let ma2=Number(b)
    let ma3=Number(c)
    let ma4=Number(d)
    let ma5=Number(e)
    console.log(ma1+ma2+ma3+ma4+ma5)
    let total=ma1+ma2+ma3+ma4+ma5
    document.getElementById('tal').value=total
    let p1=total/500*100;
    console.log(p1)

    document.getElementById('per').value=p1 
    if(total<=175){
        document.getElementById('fail').style.display="block"
        document.getElementById('pass').style.display="none"
    }
    else{
        document.getElementById('fail').style.display="none"
        document.getElementById('pass').style.display="block"
    }
}