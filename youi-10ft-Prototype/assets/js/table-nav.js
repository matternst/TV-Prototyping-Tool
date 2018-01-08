
// Place any jQuery/helper plugins in here.
$(document).ready(function() {
  $('main img:first-child').addClass('screen-loaded');
  $('.screen-loaded').css("display", "block");
  var delay=2000; //1.5 seconds   

  var pageFade = $('.screen-loaded').data( 'load-fade' );
  var timeFade = $('.screen-loaded').data( 'load-fadetime' );

  var currentScreen = $('.screen-loaded').attr("id");
  var newScreenID = "#" + currentScreen;
  var imageAlt = $(newScreenID).attr("alt");
  $(".screen-title").append(imageAlt);
  
  $('header h5').css('display','none');

  if ( !$('.intro-screen').length ) {
      $('.loader-screen').css("display", "none");
      $('header h5').css('display','block');
  }

  else {
    $( ".get-started-btn" ).on( "click", function(e) {
      e.preventDefault();
      
      var delay=2500; //1.5 seconds

      $('.intro-screen').fadeOut();
      
      setTimeout(function() {
        $('.loader-screen').fadeOut('slow', function() {});
        $('header h5').fadeIn('slow', function() {});
      }, delay);
    });
  }

  $( ".screen-menu" ).on( "click", function(e) {
    e.preventDefault();
    
    $('.main-navigation').fadeIn(); 
    
  }); 

  $( ".release-notes" ).on( "click", function(e) {
    e.preventDefault();
    
    $('.release-note-screen').fadeIn(); 
    
  });

  $( ".full-screen-btn" ).on( "click", function(e) {
    e.preventDefault();
    
    $('html').toggleClass('preview-mode'); 
    
  });


  $( ".screen-info-btn" ).on( "click", function(e) {
    e.preventDefault();
    var currentScreen = $('.screen-loaded').attr("id");
    var currentScreenClass = "." + currentScreen

    $(currentScreenClass).toggleClass('currentScreenClass-active'); 
    $('.screen-info-btn').toggleClass('screen-info-btn-active');
  });  


  $( ".tag-menu" ).on( "click", function(e) {
    e.preventDefault();
    
    $('.tag-menu').toggleClass('tag-menu-open');
    $('.tag-navigation').toggleClass('tag-navigation-open');
  }); 

  
  $( ".nav-close" ).on( "click", function(e) {
    e.preventDefault();
    $('.overlay').fadeOut(); 
    
  });  

  $('.menu li').on( "click", function(e) {
    e.preventDefault();
    var selectedScreen = this.id.replace('nav-','');
    loadScreen(e, selectedScreen);
  });  
  


  if ( timeFade.length == '0' ) {
    
  }
  else {
    var fadeDelay = timeFade * 1000;
    var newScreenFade = "#" + pageFade;

    setTimeout(function() {
      $(newScreenFade).addClass("screen-loading").fadeIn('fast', function() {
        $('.screen-loaded').fadeOut();
        $('.screen-loaded').removeClass('screen-loaded');
        $(newScreenFade).addClass('screen-loaded');
        $(newScreenFade).removeClass('screen-loading');
      });
    }, fadeDelay);
  }



  $(document).on( 'keydown', function(e){
    e.preventDefault();
    var pressedKey = {
      left: 37, // a
      up: 38, // w
      right: 39, // d
      down: 40, // s
      select: 13, //return
      back: 66, // b - Keyboard
      back2: 112, // Back button remote
    };

    

    // Each keypress, get the currently selected cell
    var td = $( 'td.selected' );

    // Do different things depending on which key was pressed
    switch ( e.which ) {

      // a
      case pressedKey.left: {
        switchScreen(e, 'left');
        break;
      }
      // d
      case pressedKey.right: {
        switchScreen(e, 'right');
        break;
      }
      // w
      case pressedKey.up: {
        switchScreen(e, 'up');
        break;
      }
      // s
      case pressedKey.down: {
        switchScreen(e, 'down');
        break;
      }
      case pressedKey.select: {
        addHistory(e);
        switchScreen(e, 'ok');
        break;
      }






      //////NEED TO FINISH THIS CODE - WRITE THE STRING OF PAST SCREENS TO AN ARRAY THEN SUBMIT THAT ARRAY TO LOCAL STORAGE
      case pressedKey.back: {
        switchScreen(e, 'back');


        // var loadScreenBack = $('.screen-loaded').data( 'load-back');

        // if ( !loadScreenBack.length == '0' ) {
        //   alert('Back Identified');
        //   switchScreen(e, 'back');

        //   var prevScreens = localStorage.getItem('previousscreens');

        //   var newprevScreens = prevScreens + "," + prevScreen

        //   localStorage.setItem('previousscreens', newprevScreens);
    
        // }

        // else if ( !loadScreenBack.length == '0' ) {

        //   alert('Back history');

        // }

        // else if ( loadScreenBack.length == '0' ) {
        //   if ( $('main img:first-child').hasClass('screen-loaded') ) {

        //   }
        //   else {
        //     $('main img:first-child').addClass("screen-loading").fadeIn('fast', function() {
        //       $('.screen-loaded').hide();
        //       $('.screen-loaded').removeClass('screen-loaded');
        //       $('main img:first-child').addClass('screen-loaded');
        //       $('main img:first-child').removeClass('screen-loading');
        //     });
        //   }
        // }
        // else {}
        
        break;
      }
      /////END OF NEEDING TO FINISH CODE 







      case pressedKey.back2: {
        switchScreen(e, 'back');
        break;
      }
    } // switch

  }); // .on pressedKeydown


  function switchScreen(e, pressedKey) {
    // Read from the data attributes of this table which table to jump to for this direction
    var currentScreen = $('.screen-loaded').attr("id");
    var loadScreen = $('.screen-loaded').data( 'load-' + pressedKey );
    var newScreenID = "#" + loadScreen;

    if ( loadScreen.length == '0') {
      $('.non-clickable').fadeIn('fast', function() {
          $('.non-clickable').fadeOut();
      });
      $("audio").remove();
      var successAudio = new Audio('edge.mp3');
      successAudio.play();
    }

    else {
        $(newScreenID).addClass("screen-loading").fadeIn('fast', function() {
        $('.screen-loaded').hide();
        $('.screen-loaded').removeClass('screen-loaded');
        $(newScreenID).addClass('screen-loaded');
        $(newScreenID).removeClass('screen-loading');
      });

    var imageAlt = $(newScreenID).attr("alt");
   
    $(".screen-title").html("");
    $(".screen-title").append(imageAlt);
    
        $('.currentScreenClass-active').removeClass('currentScreenClass-active'); 
    $('.screen-info-btn-active').removeClass('screen-info-btn-active');
    }

  } // switchScreen






  ///////NEED TO FINISH CODE HERE - ADD AN ARRAY TO LOCAL STORAGE INSTEAD OF THIS SHIT
  function addHistory(e) {
    var prevScreen = $('.screen-loaded').attr("id");
    var prevScreens = localStorage.getItem('previousscreens');

    var newprevScreens = prevScreens + "," + prevScreen

    localStorage.setItem('previousscreens', newprevScreens);

  }
  ///////END OF NEEDING TO WRITE CODE
  






  function loadScreen(e, selectedScreen) {
    
    var newScreenID = "#" + selectedScreen;
    
    $(newScreenID).show();
    $('.screen-loaded').hide();
    
    $('.screen-loaded').removeClass('screen-loaded');
    $(newScreenID).addClass('screen-loaded');

    $('.main-navigation').fadeOut(); 

    var imageAlt = $(newScreenID).attr("alt");
   
    $(".screen-title").html("");
    $(".screen-title").append(imageAlt);
       
  } // loadScreen



}); // On ready
