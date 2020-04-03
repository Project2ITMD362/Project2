$('.slider').each(function() {             
  var $this   = $(this);                    
  var $group  = $this.find('.slide-group'); 
  var $slides = $this.find('.slide');       
  var buttonArray  = [];                   
  var currentIndex = 0;                     
  var timeout;                              

  function move(newIndex) {          
    var animateLeft, slideLeft;      

    

    
    if ($group.is(':animated') || currentIndex === newIndex) {  
      return;
    }

    buttonArray[currentIndex].removeClass('active'); 
    buttonArray[newIndex].addClass('active');        

    if (newIndex > currentIndex) {   
      slideLeft = '100%';            
      
    } else {                       
      slideLeft = '-100%';           
       
    }
    
    $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );

    $group.animate( {left: animateLeft}, function() {    
      $slides.eq(currentIndex).css( {display: 'none'} );   
      $slides.eq(newIndex).css( {left: 0} ); 
      $group.css( {left: 0} );               
      currentIndex = newIndex;               
    });
  }

  $.each($slides, function(index) {
    
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex) {    
      $button.addClass('active');    
    }
    $button.on('click', function() { 
      move(index);                   
    }).appendTo('.slide-buttons');   
    buttonArray.push($button);      
  });

                  


});