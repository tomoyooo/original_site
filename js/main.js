(function() {
  'use strict';

  var card = document.getElementsByClassName('card');
  var btn = document.getElementsByClassName('btn');

  for(let i = 0; i < btn.length; i++){
  
    //クリックイベントでアラートを表示する
    btn[i].addEventListener('click', () => {
      card[i].className = 'card open'
      
  }, false);
    
  }   
    

})();