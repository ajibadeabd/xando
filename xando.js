let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let myTurn = document.getElementById('myTurn');
let yourTurn = document.getElementById('yourTurn');
let turn = document.getElementById('turn');
let can = document.getElementById('can');


//function result(){



//      if(
//    (one.value=='x'  && two.value=="x" && three.value=="x" && four.value!="x")  
//      (four.value=="x"  && five.value=="x"&& six.value=="x") ||
//      ( seven.value=="x" && eight.value=="x" &&nine.value=='x')||
//      (one.value=='x'  && four.value=="x" && seven.value=="x")  ||
//      (two.value=="x"  && five.value=="x"&& eight.value=="x") ||
//      (three.value=="x" && six.value=="x" &&nine.value=='x') ||
//      (one.value=='x'  && five.value=="x" && nine.value=="x")  ||
//      (two.value=="x"  && five.value=="x"&& eight.value=="x") ||
//      ( three.value=="x" && five.value=="x" && seven.value=='x')
    
//         document.getElementById('answer').innerHTML = 'youve won';
//         console.log ('youve won')
//     }else{
//        console.log('input the normal thing na') 
//        document.getElementById('answer').innerHTML = 'input the normal thing na';
//     }
// }



let  play =  'computer'||'user'

yourTurn.onclick = yourTurn = ()=>{
    play='user'
    turn.innerHTML="it user's turn";
    console.log(play);
    one.innerHTML=''; two.innerHTML="";  three.innerHTML="" ; 
     four.innerHTML="" ;  five.innerHTML=""; six.innerHTML="";
   seven.innerHTML="";eight.innerHTML="";nine.innerHTML='';
   yourTurn.onclick = yourTurn = ()=>{}
   yourTurn.removeEventListener('click',yourTurn)
    }    


myTurn.onclick  = myTurn = ()=>{
    play='computer'
    turn.innerHTML="it computer's turn";
    console.log(play);
    one.innerHTML=''; two.innerHTML="";  three.innerHTML="" ; 
    four.innerHTML="" ;  five.innerHTML=""; six.innerHTML="";
  seven.innerHTML="";eight.innerHTML="";nine.innerHTML='';
  
} 

 fn =(n)=>{
     

 
    if(play=='user' && turn.innerHTML=="it user's turn"){
       n.innerHTML='x';
     //  yourTurn.innerHTML="";
       //myTurn.innerHTML="";
       if(((one.innerHTML=='x'  && two.innerHTML=="x" && three.innerHTML=="x" )||  
       (four.innerHTML=="x"  && five.innerHTML=="x"&& six.innerHTML=="x") ||
       ( seven.innerHTML=="x" && eight.innerHTML=="x" &&nine.innerHTML=='x')||
       (one.innerHTML=='x'  && four.innerHTML=="x" && seven.innerHTML=="x")  ||
       (two.innerHTML=="x"  && five.innerHTML=="x"&& eight.innerHTML=="x") ||
       (three.innerHTML=="x" && six.innerHTML=="x" &&nine.innerHTML=='x') ||
       (one.innerHTML=='x'  && five.innerHTML=="x" && nine.innerHTML=="x")  ||
       (two.innerHTML=="x"  && five.innerHTML=="x"&& eight.innerHTML=="x") ||
       ( three.innerHTML=="x" && five.innerHTML=="x" && seven.innerHTML=='x'))){
         turn.innerHTML="user wins"

            can.innerHTML=1
            
    }else if(((one.innerHTML=='o'  && two.innerHTML=="o" && three.innerHTML=="o")||  
    (four.innerHTML=="o"  && five.innerHTML=="o"&& six.innerHTML=="o") ||
    ( seven.innerHTML=="o" && eight.innerHTML=="o" &&nine.innerHTML=='o')||
    (one.innerHTML=='o'  && four.innerHTML=="o" && seven.innerHTML=="o")  ||
    (two.innerHTML=="o"  && five.innerHTML=="o"&& eight.innerHTML=="o") ||
    (three.innerHTML=="o" && six.innerHTML=="o" &&nine.innerHTML=='o') ||
    (one.innerHTML=='o'  && five.innerHTML=="o" && nine.innerHTML=="o")  ||
    (two.innerHTML=="o"  && five.innerHTML=="o"&& eight.innerHTML=="o") ||
    ( three.innerHTML=="o" && five.innerHTML=="o" && seven.innerHTML=='o'))){
        turn.innerHTML="computer wins"
        }else if(one.innerHTML!=''  && two.innerHTML!="" && three.innerHTML!=""&&  
        four.innerHTML!=""  && five.innerHTML!=""&& six.innerHTML!="" &&
         seven.innerHTML!="" && eight.innerHTML!="" &&nine.innerHTML!=''&&
        one.innerHTML!=''  && four.innerHTML!="" && seven.innerHTML!=""){
            turn.innerHTML="it a draw";
        }
        else{
       turn.innerHTML="it computer's turn";
       play='computer' ;}
    //i want to remove the event listener but it not going



    //please he lp me withy bthis
      //  n.onclick = fn =(n)=>{ n.removeEventListener('click',fn)};
          
    }
 else if( play=='computer' && turn.innerHTML=="it computer's turn"){
    n.innerHTML='o';
    //myTurn.innerHTML="";
    //yourTurn.innerHTML="";
    if(((one.innerHTML=='x'  && two.innerHTML=="x" && three.innerHTML=="x" )||  
    (four.innerHTML=="x"  && five.innerHTML=="x"&& six.innerHTML=="x") ||
    ( seven.innerHTML=="x" && eight.innerHTML=="x" &&nine.innerHTML=='x')||
    (one.innerHTML=='x'  && four.innerHTML=="x" && seven.innerHTML=="x")  ||
    (two.innerHTML=="x"  && five.innerHTML=="x"&& eight.innerHTML=="x") ||
    (three.innerHTML=="x" && six.innerHTML=="x" &&nine.innerHTML=='x') ||
    (one.innerHTML=='x'  && five.innerHTML=="x" && nine.innerHTML=="x")  ||
    (two.innerHTML=="x"  && five.innerHTML=="x"&& eight.innerHTML=="x") ||
    ( three.innerHTML=="x" && five.innerHTML=="x" && seven.innerHTML=='x'))){
turn.innerHTML="user wins";
 }else if(((one.innerHTML=='o'  && two.innerHTML=="o" && three.innerHTML=="o")||  
  (four.innerHTML=="o"  && five.innerHTML=="o"&& six.innerHTML=="o") ||
  ( seven.innerHTML=="o" && eight.innerHTML=="o" &&nine.innerHTML=='o')||
  (one.innerHTML=='o'  && four.innerHTML=="o" && seven.innerHTML=="o")  ||
  (two.innerHTML=="o"  && five.innerHTML=="o"&& eight.innerHTML=="o") ||
  (three.innerHTML=="o" && six.innerHTML=="o" &&nine.innerHTML=='o') ||
  (one.innerHTML=='o'  && five.innerHTML=="o" && nine.innerHTML=="o")  ||
  (two.innerHTML=="o"  && five.innerHTML=="o"&& eight.innerHTML=="o") ||
  ( three.innerHTML=="o" && five.innerHTML=="o" && seven.innerHTML=='o'))){
     turn.innerHTML="computer wins"
     }
     else if(one.innerHTML!=''  && two.innerHTML!="" && three.innerHTML!=""&&  
        four.innerHTML!=""  && five.innerHTML!=""&& six.innerHTML!="" &&
         seven.innerHTML!="" && eight.innerHTML!="" &&nine.innerHTML!=''&&
        one.innerHTML!=''  && four.innerHTML!="" && seven.innerHTML!=""){
            turn.innerHTML="it a draw";
        }else{
     turn.innerHTML="it user's turn";
     play='user' ;
} //i want to remove the event listener but it not going



//please he lp me withy bthis
  //  n.onclick = fn =(n)=>{ n.removeEventListener('click',fn)};
    
   }else{

    turn.innerHTML='choose who to start';
}

}

