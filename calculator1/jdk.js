var screen = document.getElementById('screen');
 buttons = document.querySelectorAll('button');
 var screenV = ''
 for(item of buttons ){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('button text is ', buttonText);
        if(buttonText == 'x'){
            buttonText = '*';
            screenV += buttonText;
            screen.value = screenV;

        }

        else if( buttonText == 'c'){
            screenV = '';
            screen.value = screenV;


        }
        else if( buttonText == '='){
            screen.value = eval(screenV);
            
        }
        else{
            screenV += buttonText;
            screen.value = screenV;
        }





    });

 }
window.onerror = function(){
    alert('plese input valid expration') 
}
 