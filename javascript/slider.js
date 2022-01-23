var x=0;
const leftslider=()=>{
    if(x>1){
       x--;
       var image=`./images/s${x}.webp`;
       console.log(image);
       document.getElementById('slidersrc').setAttribute("src",image);
   }
   
}
const rightslider=()=>{
    if(x<11){
        x++ 
        var image=`./images/s${x}.webp`;
        console.log(image);
        document.getElementById('slidersrc').setAttribute("src",image);          ;
    }
  
}
const leftslider1=()=>{
    if(x>1){
       x--;
       var image=`./images/s${x}.webp`;
       console.log(image);
       document.getElementById('slidersrc1').setAttribute("src",image);
   }
   
}
const rightslider1=()=>{
    if(x<11){
        x++ 
        var image=`./images/s${x}.webp`;
        console.log(image);
        document.getElementById('slidersrc1').setAttribute("src",image);          ;
    }
  
}

var moblienavbardisplay='none';
const moblienavbar=()=>{
    if(moblienavbardisplay==='none'){
        moblienavbardisplay='block';
        document.getElementById('moblienav1').style.display=moblienavbardisplay;
       
    }
    else{
        moblienavbardisplay='none';
        document.getElementById('moblienav1').style.display=moblienavbardisplay;
       
    }
    console.log(moblienavbardisplay)
  
}


