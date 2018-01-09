

var $urlQuery = window.location.search.substring(1);

var $projectName = $urlQuery.split("?").toString();

$projectName = $projectName.replace("%20", " ");
$('.prototype-main-header').html($projectName);
$('.intro-prototype-name').html($projectName);


$( document ).ready(function() {
	var $newUser = localStorage.getItem("newuser");
    if ($newUser == "" || $newUser == undefined || $newUser == null) {
    	
	} else {
		$('.intro-screen').hide();
	}
});



function loadScreenList($projectName) {
    $('.user-screen').remove();

    var filter = '({project_name} = "' + $projectName + '" )';

    base($apiTableName).select({
        filterByFormula: filter, //Filter the results by project
        sort: [ //Sort the results by position 
            {field: 'position', direction: 'asc'}
        ]
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {


            var $screenName = record.get('screen_name');           
            var $AttachmentImage = record.get('image-url');
  
            var $upDirectionButton = record.get('up-direction');
            var $downDirectionButton = record.get('down-direction');
            var $leftDirectionButton = record.get('left-direction');
            var $rightDirectionButton = record.get('right-direction');
            var $backDirectionButton = record.get('back-direction');
            var $okDirectionButton = record.get('ok-direction');
            
            var $screenInfo = $('<div class="user-screen clearfix" data-load-up="' + $upDirectionButton + '"  data-load-down="' + $downDirectionButton + '"  data-load-left="' + $leftDirectionButton + '"  data-load-right="' + $rightDirectionButton + '"  data-load-back="' + $backDirectionButton + '"  data-load-ok="' + $okDirectionButton + '">');

            if ($AttachmentImage != undefined) {
                $screenInfo.append($('<img src="/uploads/' + $AttachmentImage + '" alt="' + record.get('screen_name') + '" class=""/>'));
            }

            // $screenInfo.append($('<div>').text(record.get('position')));
            // $screenInfo.append($('<div>').text(record.get('up-direction')));
            // $screenInfo.append($('<div>').text(record.get('down-direction')));

            // var x = $('<button>').text('Delete').click(function() {
            //     deleteArtist(record);
            // });
            $screenInfo.attr('id', record.getId());

            $('#screens').append($screenInfo);

        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

    }, function done(err) {
        if (err) { console.error(err); return; }

        else {
        	$('#screens div.user-screen:first-child').addClass('screen-loaded');
        }
    });
}



function loadAllScreenList($projectName) {
    $('.all-user-screen').remove();

    var filter = '({project_name} = "' + $projectName + '" )';

    base($apiTableName).select({
        filterByFormula: filter, //Filter the results by project
        sort: [ //Sort the results by position 
            {field: 'position', direction: 'asc'}
        ]
    }).eachPage(function page(records, fetchNextPage) {

        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {

            var $screenName = record.get('screen_name');           
            var $AttachmentImage = record.get('image-url');
  
            var $upDirectionButton = record.get('up-direction');
            var $downDirectionButton = record.get('down-direction');
            var $leftDirectionButton = record.get('left-direction');
            var $rightDirectionButton = record.get('right-direction');
            var $backDirectionButton = record.get('back-direction');
            var $okDirectionButton = record.get('ok-direction');
            
            var $screenInfo = $('<a href="" class="all-user-screen clearfix">');

            if ($AttachmentImage != undefined) {
                $screenInfo.append($('<img src="/uploads/' + $AttachmentImage + '" alt="' + record.get('screen_name') + '" class=""/>'));
                $screenInfo.append($('<span>' + $screenName + '</span>'));
            }

            // $screenInfo.append($('<div>').text(record.get('position')));
            // $screenInfo.append($('<div>').text(record.get('up-direction')));
            // $screenInfo.append($('<div>').text(record.get('down-direction')));

            // var x = $('<button>').text('Delete').click(function() {
            //     deleteArtist(record);
            // });
            $screenInfo.attr('id', record.getId());

            $('#all-screens').append($screenInfo);

        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

    }, function done(err) {
        if (err) { console.error(err); return; }

        else {
        	$('#all-screens a.all-user-screen:first-child').addClass('screen-loaded');
        }
    });
}



$( ".get-started-btn" ).on( "click", function(e) {
	e.preventDefault();
	localStorage.setItem("newuser", "no");
	$('.intro-screen').fadeOut();
});

$(document).on('click', '.modal-select-close', function () {
    event.preventDefault();
    $('.modal').removeClass('active');
});

$(document).on('click', '.view_screens', function () {
    event.preventDefault();
    $('.all_projects_modal').addClass('active');
    
});

$( ".full_screen" ).on( "click", function(e) {
	e.preventDefault();
	// $('body').toggleClass('preview-mode'); 

	var el = document.documentElement,
      rfs = el.requestFullscreen
        || el.webkitRequestFullScreen
        || el.mozRequestFullScreen
        || el.msRequestFullscreen 
    ;
    rfs.call(el);
});


$(document).on('click', '.all-user-screen', function (e) {
	e.preventDefault();
	
	var $currentAllScreen = $(this).attr("id");

	var $CurrentNewScreenID = "#" + $currentAllScreen;

	$('#screens .screen-loaded').hide();

	$('.screen-loaded').removeClass('screen-loaded');

	$('#screens ' + $CurrentNewScreenID).addClass('screen-loaded');
	$('#all-screens ' + $CurrentNewScreenID).addClass('screen-loaded');

	$('#screens ' + $CurrentNewScreenID).show();

	$('.modal').removeClass('active');
});



loadAllScreenList($projectName);
loadScreenList($projectName);

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
    escape: 27 // Escape
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
      // addHistory(e);
      switchScreen(e, 'ok');
      break;
    }
    case pressedKey.back: {
      switchScreen(e, 'back');
      break;
    }
    case pressedKey.back2: {
      switchScreen(e, 'back');
      break;
    }
    case pressedKey.escape: {
      // $('body').toggleClass('preview-mode');
      break;
    }
    /////END OF NEEDING TO FINISH CODE 

  } // switch

}); // .on pressedKeydown



if (document.addEventListener)
{
    document.addEventListener('webkitfullscreenchange', exitHandler, false);
    document.addEventListener('mozfullscreenchange', exitHandler, false);
    document.addEventListener('fullscreenchange', exitHandler, false);
    document.addEventListener('MSFullscreenChange', exitHandler, false);
}

function exitHandler()
{
    if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== null)
    {
        $('body').toggleClass('preview-mode');
    }
}



function switchScreen(e, pressedKey) {
  // Read from the data attributes of this table which table to jump to for this direction
  var $currentScreen = $('#screens .screen-loaded').attr("id");
  var $loadScreen = $('#screens .screen-loaded').data( 'load-' + pressedKey );

  var $newScreenID = "#" + $loadScreen;

  if ( $loadScreen == undefined || $loadScreen == "undefined" || $loadScreen == ""   ) {
    $('.non-clickable').fadeIn('fast', function() {
        $('.non-clickable').fadeOut();
    });
    $("audio").remove();
    var $successAudio = new Audio('edge.mp3');
    $successAudio.play();
  }

  else {
      $('#screens ' + $newScreenID).addClass("screen-loading").fadeIn('fast', function() {
        $('#screens .screen-loaded').hide();
        $('.screen-loaded').removeClass('screen-loaded');
        $('#screens ' + $newScreenID).addClass('screen-loaded');
        $('#screens ' + $newScreenID).removeClass('screen-loading');

        $('#all-screens ' + $newScreenID).addClass('screen-loaded');
        $('#all-screens ' + $newScreenID).removeClass('screen-loading');
      });
  }

} // switchScreen

