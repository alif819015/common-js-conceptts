function greeting(greetingHandler,name){
    greetingHandler(name);
}
// const name = 'Rushi';
// const number = [45,55];
function greetingHandler(name){
    console.log('Good Morning', name);
}
function greetingEvening(name){
    console.log('Good Evening',name);
}
function greetingNight(nam){
    console.log('Good Night', nam)
}


greeting(greetingHandler, 'Mahmud Hasan.');
greeting(greetingHandler, 'Rushi.');
greeting(greetingEvening, 'My Jan');
greeting(greetingNight, 'Ekra')

function submitHandler(){
    confirm.log('submit button clickd')
}
document.getElementById('btn-submit').addEventListener('click', submitHandler)