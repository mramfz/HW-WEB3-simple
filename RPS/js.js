var output = document.getElementById('output');
var html = "";
var draw = 0;
var winp1 = 0;
var winp2 = 0;
var player1;
var player2;    
// var player1 = prompt('ROCK!? PAPER!? SCISSOR!?');
//         player1 = player1.toLowerCase();
// while(player1 != 'rock' &&  player1 != 'paper' && player1 != 'scissor'){
//     var player1 = prompt('try a correct word pls')
//     if (player1,toLowerCase()=='exit'){
//         break;
//     }
// }
//                                                                         //player 2 is cpu!!! completly random whitout AI!!!
// var player2 = Math.floor(Math.random()*3);

// switch (player2) {
//     case 0:
//         player2 = 'rock'
//         break;
//     case 1:
//         player2 = 'scissor'
//         break;    
//     case 2:
//         player2 = 'paper'
//         break;
// }

// output.innerHTML += '<div>  player 1 : ' + player1  + '</div>';
// output.innerHTML += '<div> player 2 :'  + player2  + '</div>';


// if (player2 == player1){
//     output.innerHTML += '<div> the result is: ' + 'draw' + '</div>';
//     draw++;
// }
// else if(player1== 'rock'){
//     if(player2 =='scissor'){
//         output.innerHTML += '<div> the result is: ' + 'Player 1 won ' + '</div>';
//         winp1++;
//     }
//     else {
//         output.innerHTML += '<div> the result is: ' + 'player 2 won ' + '</div>';
//         winp2++;
//     }
// }
// else if (player1 == 'paper' ) {
//     if(player2=='rock'){
//         output.innerHTML += '<div> the result is: ' + 'player 1 won ' + '</div>';
//         winp1++
//     }else{
//         output.innerHTML += '<div> the result is: ' + 'player 2 won ' + '</div>';
//         winp2++;
//     }
//  }
//  else if (player1== 'scissor'){
//      if(player2=='rock'){
//         output.innerHTML += '<div> the result is: ' + 'player 2 won ' + '</div>';
//         winp2++;
//      }
//      else{
//         output.innerHTML += '<div> the result is: ' + 'player 1 won ' + '</div>';
//         winp1++
//      }

//  }



///////////////////////////////////////////////////////////////////////////////////////////////


//play again
    output.innerHTML += '<div>' + 'click if you want to play ' + '</div>';
    document.getElementById("playAgain").onclick = function(){
        player1 = prompt('ROCK!? PAPER!? SCISSOR!?');
        player1 = player1.toLowerCase();
while(player1 != 'rock' &&  player1 != 'paper' && player1 != 'scissor'){
     player1 = prompt('try a correct word pls')
    if (player1.toLowerCase()=='exit'){
        break;
    }
}
                                                                        //player 2 is cpu!!! completly random whitout AI!!!
player2 = Math.floor(Math.random()*3);

switch (player2) {
    case 0:
        player2 = 'rock'
        break;
    case 1:
        player2 = 'scissor'
        break;    
    case 2:
        player2 = 'paper'
        break;
}




if (player2 == player1){
    output.innerHTML += '<div> the result is: ' + 'draw' + '</div>';
    draw++;
}
else if(player1== 'rock'){
    if(player2 =='scissor'){
        output.innerHTML += '<div> the result is: ' + 'Player 1 won ' + '</div>';
        winp1++;
    }
    else {
        output.innerHTML += '<div> the result is: ' + 'player 2 won ' + '</div>';
        winp2++;
    }
}
else if (player1 == 'paper' ) {
    if(player2=='rock'){
        output.innerHTML += '<div> the result is: ' + 'player 1 won ' + '</div>';
        winp1++
    }else{
        output.innerHTML += '<div> the result is: ' + 'player 2 won ' + '</div>';
        winp2++;
    }
 }
 else if (player1== 'scissor'){
     if(player2=='rock'){
        output.innerHTML += '<div> the result is: ' + 'player 2 won ' + '</div>';
        winp2++;
     }
     else{
        output.innerHTML += '<div> the result is: ' + 'player 1 won ' + '</div>';
        winp1++;
     }
     
    

 }
        
output.innerHTML += '<div>  player 1 : ' + player1  + '</div>';
output.innerHTML += '<div> player 2 :'  + player2  + '</div>';
output.innerHTML += '<div>' + 'player 1 total wins ' + winp1 + ' </div>';
output.innerHTML += '<div>' + 'player 2 total wins ' + winp2 + ' </div>';
output.innerHTML += '<div>' + 'draws!: ' + draw + ' </div>';
output.innerHTML += '<div>' + '<br> ' + ' </div>';
output.innerHTML += '<div>' + '<br> ' + ' </div>';

    }
    
