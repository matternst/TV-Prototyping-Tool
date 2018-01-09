
//** 
//CLEAR SCREEN
//** 
function clearScreenList() {
    $('.screen-list-item').remove();
    $('#screen-input-title').val("");
}

function clearScreenDetails() {
    $('#screen-input-title').val("");
    $('.screen-direction span').html('Select Screen');
    $('.screen-direction input').val("");
    $('.screen-direction img').attr('src', 'images/placeholder.png');
    $('.button-remote-button').removeClass('active');
    $('.button-remote-button').removeClass('hover');
    $('.selected-image-url').html('No Image Uploaded');
    $('#submit').attr("data-screen-id", "");

}

var $windowWidth = $(window).width();
var $windowHeight = $(window).height();
$('.screen-details-bg').css("height", $windowHeight);
$('.project-list').css("height", $windowHeight);
$('.screen-select-modal').css("height", $windowHeight);
$('.project-list').css("width", $windowWidth - 400);

window.onresize = function(event) {
    var $windowWidth = $(window).width();
    var $windowHeight = $(window).height();
    $('.screen-details-bg').css("height", $windowHeight);
    $('.project-list').css("width", $windowWidth - 400);
};


$(".screen-direction").mouseover(function(){
    $('.button-remote-button').removeClass('hover');

    if ($(this).attr('id') == 'screen-up') {
        $('.button-remote-up').addClass('hover');
    }
    else if ($(this).attr('id') == 'screen-left') {
        $('.button-remote-left').addClass('hover');
    }
    else if ($(this).attr('id') == 'screen-right') {
        $('.button-remote-right').addClass('hover');
    }
    else if ($(this).attr('id') == 'screen-down') {
        $('.button-remote-down').addClass('hover');
    }
    else if ($(this).attr('id') == 'screen-back') {
        $('.button-remote-back').addClass('hover');
    }
    else if ($(this).attr('id') == 'screen-ok') {
        $('.button-remote-ok').addClass('hover');
    }
});

$(".screen-direction").mouseout(function(){
    $('.button-remote-button').removeClass('hover');
});





//** 
//SELECT PROJECT
//** 


var $testProjectName = '';  //NEEDS TO BE DYNAMIC BASED ON PROJECT SELECTED

$(document).on('click', '.share_prototype', function () {
    event.preventDefault();

    $('#sharable_link_id').select();
    document.execCommand('copy');

    var $alertMessage = 'A sharable URL has been copied to your clipboard';
    alertNotification($alertMessage);

});





//** 
//DISPlAY SCREENS
//** 


//Set the  filterbyFormula as a variable 

function loadScreenList($testProjectName) {
    clearScreenList();

    $('.project-header').html($testProjectName);

    $( document ).ready(function() {
        var $getUrl = window.location;
        var $baseUrl = $getUrl.protocol + "//" + $getUrl.host + "/";

        $('.view_prototype').attr('href', 'index.html?' + $testProjectName);
        $('#sharable_link_id').val($baseUrl + 'index.html?' + $testProjectName);

    });

    var filter = '({project_name} = "' + $testProjectName + '" )';


    base($apiTableName).select({
        filterByFormula: filter, //Filter the results by project
        sort: [ //Sort the results by position 
            {field: 'position', direction: 'asc'}
        ]
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {

            var $screenName = record.get('screen_name');
            // var $AttachmentImage = record.get('Attachments');

            var $AttachmentImage = record.get('image-url');

            var $screenInfo = $('<div class="screen-list-item clearfix">');

            var $upDirectionButton = record.get('up-direction');
            var $downDirectionButton = record.get('down-direction');
            var $leftDirectionButton = record.get('left-direction');
            var $rightDirectionButton = record.get('right-direction');
            var $backDirectionButton = record.get('back-direction');
            var $okDirectionButton = record.get('ok-direction');
            

            function checkButtonUp() {
                
                if( !$upDirectionButton ) {
                    return '';
                } else {
                    return ' active';
                }

            }
            function checkButtonDown() {
                if( !$downDirectionButton ) {
                    return '';
                } else {
                    return ' active';
                }
            }
            function checkButtonLeft() {
                if( !$leftDirectionButton ) {
                    return '';
                } else {
                    return ' active';
                }
            }
            function checkButtonRight() {
                if( !$rightDirectionButton ) {
                    return '';
                } else {
                    return ' active';
                }
            }
            function checkButtonBack() {
                if( !$backDirectionButton ) {
                    return '';
                } else {
                    return ' active';
                }
            }
            function checkButtonOk() {
                if( !$okDirectionButton ) {
                    return '';
                } else {
                    return ' active';
                }
            }

            //OLD CODE REFERENCING AIRTABLE ATTACHMENTS
            // if ($AttachmentImage == undefined) {
            //     $screenInfo.append($('<div class="new-screen-button-image"></div>'));   
            //     $screenInfo.append($('<div class="screen-list-item-metadata no-image"><h1>'+record.get('screen_name')+'</h1> <h5>No Image</h5></div>'));             
            // } else {
            //     $screenInfo.append($('<img src="'+ $AttachmentImage[0].url + '" alt="' + record.get('screen_name') + '" class="screen-list-image"/>'));
            //     $screenInfo.append($('<div class="screen-list-item-metadata"><h1>'+record.get('screen_name')+'</h1> <h5>'+$AttachmentImage[0].filename+'</h5></div>'));
            // }


            if ($AttachmentImage == undefined) {
                $screenInfo.append($('<div class="new-screen-button-image"></div>'));   
                $screenInfo.append($('<div class="screen-list-item-metadata no-image"><h1>'+record.get('screen_name')+'</h1> <h5>No Image</h5></div>'));             
            } else {
                $screenInfo.append($('<img src="/uploads/'+ $AttachmentImage + '" alt="' + record.get('screen_name') + '" class="screen-list-image"/>'));
                $screenInfo.append($('<div class="screen-list-item-metadata"><h1>'+record.get('screen_name')+'</h1> <h5>'+$AttachmentImage+'</h5></div>'));
            }


            $screenInfo.append($('<div class="screen-list-item-remote"><span class="screen-list-item-button' + checkButtonUp() + '" id="screen-list-item-remote-up"></span><span class="screen-list-item-button' + checkButtonLeft() + '" id="screen-list-item-remote-left"></span><span class="screen-list-item-button' + checkButtonRight() + '" id="screen-list-item-remote-right"></span><span class="screen-list-item-button' + checkButtonDown() + '" id="screen-list-item-remote-down"></span><span class="screen-list-item-button' + checkButtonBack() + '" id="screen-list-item-remote-back"></span><span class="screen-list-item-button' + checkButtonOk() + '" id="screen-list-item-remote-ok"></span></div>'));

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
    });
}



//** 
//DISPLAY PROJECT LIST
//** 

function displayAllProjects() {

    $('.project_name_item').remove();
    $('.all_projects_modal h1').hide();
    $('.all_projects_modal p').hide();

    base($apiTableName).select({
        }).eachPage(function page(records, fetchNextPage) {

            var $lastProjectArray = [];
            
            if ( localStorage.getItem("projectname") == null || localStorage.getItem("projectname") == undefined ||localStorage.getItem("projectname") == "") {
                
            } else {

                $('.all_projects_modal h1').show();
                $('.all_projects_modal p').show();

                var $currentProjectTitle = localStorage.getItem("projectname");
                $lastProjectArray.push($currentProjectTitle);

                var $projectList = $('<div class="project_name_item clearfix">');
                $projectList.append($('<a href="" class="edit-prototype">Edit Prototype</a>'));
                $projectList.append($('<a href="" class="delete-prototype">Delete Prototype</a>'));
                $projectList.append($('<span class="project_name_link">'+$currentProjectTitle+'</span>'));
                $('#all-project-list').append($projectList);
            }
            
            records.forEach(function(record) {
                var $projectName = record.get('project_name');
                if ( $.inArray( $projectName, $lastProjectArray ) > -1 ) {
                    return;
                }
                else {
                    if ( $projectName == null || $projectName == undefined || $projectName == "") {
                        return;
                    } else {
                        var $projectList = $('<div class="project_name_item clearfix">');
                        $projectList.append($('<a href="" class="edit-prototype">Edit Prototype</a>'));
                        $projectList.append($('<a href="" class="delete-prototype">Delete Prototype</a>'));
                        $projectList.append($('<a href="" class="project_name_link">'+record.get('project_name')+'</a>'));
                        $projectList.attr('id', record.getId());
                        $('#all-project-list').append($projectList);
                        $lastProjectArray.push($projectName);
                    }
                }
            });

            if ($(".project_name_item").length == false){
                $('.modal-select-close').hide();
                $('.all_projects_modal h1').html('Lets Get Started');
                $(".all_projects-header").append("<p>Lets get started by creating a new prototype below. You can then start adding screens and defining flows.</p>");
                $('.all_projects_modal h1').fadeIn('fast');
                $('.new_project_name_item').css('float','none');
                $('.new_project_name_item').css('margin','0 auto');
            } else {
                $('.all_projects_modal h1').show();
                $('.all_projects_modal p').show();
            }   

            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
    });
}


$(document).on('click', '.all_projects', function () {
    event.preventDefault();
    $('.project_name_item').remove();
    displayAllProjects();
});


$(document).on('click', '.edit-prototype', function () {
    event.preventDefault();

    $testProjectName = $(this).siblings('.project_name_link').html();
    loadScreenList($testProjectName);

    $('.project-header').html($testProjectName);
    $('.modal').removeClass('active');

    localStorage.setItem("projectname", $testProjectName);

    displayAllProjects();
});



$(document).on('click', '.cancel-modal', function () {
    event.preventDefault();
    $('.confirm-modal').fadeOut('fast');
});

$(document).on('click', '.delete-prototype', function () {
    event.preventDefault();
    $('.delete-prototype-modal').fadeIn('fast');
    $selectedProjectName = $(this).siblings('.project_name_link').html();
    $('.confirm-modal-container h2').html('Deleting ' + $selectedProjectName);
    $(this).parent().addClass('prototype-selected');
});




$(document).on('click', '#delete-prototype', function () {
    event.preventDefault();

    var $deleteProjectName = $('.prototype-selected .project_name_link').html();
    var filter = '({project_name} = "' + $deleteProjectName + '" )';

    function deletePrototype(_callback) {
        base($apiTableName).select({
            filterByFormula: filter //Filter the results by project
        }).eachPage(function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.

            records.forEach(function(record) {
                $dataScreenId = record.getId();
                base($apiTableName).destroy($dataScreenId, function(err, deletedRecord) {
                    if (err) { console.error(err); return; }
                });   
            });
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
        _callback();
    }

    deletePrototype(function() {
        localStorage.clear("projectname");
        setTimeout(displayAllProjects, 400);
        $('.confirm-modal').fadeOut('fast');
    });    
    
});








$(document).on('click', '.screen-list-item', function () {

    $('#screen-delete-button').html('Delete');
    $('#submit').html('Save');

    if($(this).hasClass('active') ) {
        $('#screen-info').fadeOut( "fast", function() {
            $('.default-screen-info').fadeIn("fast");
            $('.screen-list-item').removeClass('active');
            clearScreenDetails();
        });
    } else {
        var $selectedScreen = this.getAttribute("id");     

        $('.screen-list-item').removeClass('active');
        $(this).addClass('active');
        $('.new-screen-list-item').removeClass('active');
        $('.new-screen-button').removeClass('active');
        $('.new-screen-list-item').fadeOut('fast');


        clearScreenDetails();
    

        $('.default-screen-info').fadeOut( "fast", function() {
            $('#screen-info').fadeIn("fast");
        });

        base($apiTableName).find($selectedScreen, function(err, record) {

            var $screenName = record.get('screen_name');

            // var $AttachmentImage = record.get('Attachments');

            var $AttachmentImage = record.get('image-url');

            

            $("#screen-input-title").val($screenName);
            $(".selected-image-url").html($AttachmentImage);

            if ($AttachmentImage != undefined) {
                $('#clear-uploaded-image').addClass('active');
            } else {

            }

            $('#submit').attr("data-screen-id", $selectedScreen);

            // $(".selected-image-url").html($AttachmentImage[0].filename);
            
            var $upDirectionID = record.get('up-direction');
            var $downDirectionID = record.get('down-direction');
            var $leftDirectionID = record.get('left-direction');
            var $rightDirectionID = record.get('right-direction');
            var $backDirectionID = record.get('back-direction');
            var $okDirectionID = record.get('ok-direction');

            if( !$upDirectionID) {

                //NEED TO ADD LOGIC IF THE BUTTON REFERENCE SCREEN NO LONGER EXISTS


            } else {

                base($apiTableName).find($upDirectionID, function(err, record) {
                    if (record == undefined) {
                        return;
                    } else {
                        $('#screen-up span').text('Up - ' + record.get('screen_name'));
                        $('#screen-up input').val($upDirectionID);

                        var $DirectionAttachmentImage = record.get('image-url');

                        if ( $DirectionAttachmentImage == undefined ) {
                            $DirectionAttachmentImage = "/images/placeholder.png";
                        } else {
                            $DirectionAttachmentImage = "/uploads/" + $DirectionAttachmentImage;
                        }
                        
                        $('#screen-up img').attr("src", $DirectionAttachmentImage);

                        if (err) { console.error(err); return; }

                    }
                    
                });
                $('.button-remote-up').addClass('active');
            }

            if( !$downDirectionID ) {
               
            } else {
                base($apiTableName).find($downDirectionID, function(err, record) {
                    if (record == undefined) {
                        return;
                    } else {
                        $('#screen-down span').text('Down - ' + record.get('screen_name'));
                        $('#screen-down input').val($downDirectionID);

                        var $DirectionAttachmentImage = record.get('image-url');
                        if ( $DirectionAttachmentImage == undefined ) {
                            $DirectionAttachmentImage = "/images/placeholder.png"
                        } else {
                            $DirectionAttachmentImage = "/uploads/" + $DirectionAttachmentImage;
                        }

                        $('#screen-down img').attr("src", $DirectionAttachmentImage);
                        if (err) { console.error(err); return; }
                    }
                });
                $('.button-remote-down').addClass('active');
            }

            if( !$leftDirectionID ) {
               
            } else {
                base($apiTableName).find($leftDirectionID, function(err, record) {
                    if (record == undefined) {
                        return;
                    } else {
                        $('#screen-left span').text('Left - ' + record.get('screen_name'));
                        $('#screen-left input').val($leftDirectionID);

                        var $DirectionAttachmentImage = record.get('image-url');
                        if ( $DirectionAttachmentImage == undefined ) {
                            $DirectionAttachmentImage = "/images/placeholder.png"
                        } else {
                            $DirectionAttachmentImage = "/uploads/" + $DirectionAttachmentImage;
                        }

                        $('#screen-left img').attr("src", $DirectionAttachmentImage);
                        if (err) { console.error(err); return; }
                    }
                });
                $('.button-remote-left').addClass('active');
            }

            if( !$rightDirectionID ) {
               
            } else {
                base($apiTableName).find($rightDirectionID, function(err, record) {
                    if (record == undefined) {
                        return;
                    } else {
                        $('#screen-right span').text('Right - ' + record.get('screen_name'));
                        $('#screen-right input').val($rightDirectionID);

                        var $DirectionAttachmentImage = record.get('image-url');
                        if ( $DirectionAttachmentImage == undefined ) {
                            $DirectionAttachmentImage = "/images/placeholder.png"
                        } else {
                            $DirectionAttachmentImage = "/uploads/" + $DirectionAttachmentImage;
                        }

                        $('#screen-right img').attr("src", $DirectionAttachmentImage);
                        if (err) { console.error(err); return; }
                    }
                });
                $('.button-remote-right').addClass('active');
            }

            if( !$backDirectionID ) {
               
            } else {
                base($apiTableName).find($backDirectionID, function(err, record) {
                    if (record == undefined) {
                        return;
                    } else {
                        $('#screen-back span').text('Back - ' + record.get('screen_name'));
                        $('#screen-back input').val($backDirectionID);

                        var $DirectionAttachmentImage = record.get('image-url');
                        if ( $DirectionAttachmentImage == undefined ) {
                            $DirectionAttachmentImage = "/images/placeholder.png"
                        } else {
                            $DirectionAttachmentImage = "/uploads/" + $DirectionAttachmentImage;
                        }

                        $('#screen-back img').attr("src", $DirectionAttachmentImage);
                        if (err) { console.error(err); return; }
                    }
                });
                $('.button-remote-back').addClass('active');
            }

            if( !$okDirectionID ) {
               
            } else {
                base($apiTableName).find($okDirectionID, function(err, record) {
                    if (record == undefined) {
                        return;
                    } else {
                        $('#screen-ok span').text('Ok - ' + record.get('screen_name'));
                        $('#screen-ok input').val($okDirectionID);

                        var $DirectionAttachmentImage = record.get('image-url');
                        if ( $DirectionAttachmentImage == undefined ) {
                            $DirectionAttachmentImage = "/images/placeholder.png"
                        } else {
                            $DirectionAttachmentImage = "/uploads/" + $DirectionAttachmentImage;
                        }

                        $('#screen-ok img').attr("src", $DirectionAttachmentImage);
                        if (err) { console.error(err); return; }
                    }
                });
                $('.button-remote-ok').addClass('active');
            }

            if (err) { console.error(err); return; }
        });
    }
});




$(document).on('click', '.new-screen-button', function () {
    event.preventDefault();
    clearScreenDetails();

    $('.screen-list-item').removeClass('active');
    $('.new-screen-list-item').fadeIn('fast');
    $('.new-screen-list-item').addClass('active');
    $('.default-screen-info').fadeOut( "fast", function() {
    $('#screen-info').fadeIn("fast");
    $('.new-screen-button').addClass('active');

    $('#screen-delete-button').html('Cancel');
    $('#submit').html('Create');

    });
});





//** 
//Select Button Mapping Screen
//** 

$(document).on('click', '.screen-direction', function () {
    $('.project-list').addClass('hide-list');
    $('.screen-select-modal').addClass('active');
    $('#screen-info').addClass('active');

    $('.button-remote-button').removeClass('selected');

    if ($(this).attr('id') == 'screen-up') {
        $('.button-remote-up').addClass('selected');
    }
    else if ($(this).attr('id') == 'screen-left') {
        $('.button-remote-left').addClass('selected');
    }
    else if ($(this).attr('id') == 'screen-right') {
        $('.button-remote-right').addClass('selected');
    }
    else if ($(this).attr('id') == 'screen-down') {
        $('.button-remote-down').addClass('selected');
    }
    else if ($(this).attr('id') == 'screen-back') {
        $('.button-remote-back').addClass('selected');
    }
    else if ($(this).attr('id') == 'screen-ok') {
        $('.button-remote-ok').addClass('selected');
    }

    $('.screen-direction').removeClass('active');
    $(this).addClass('active');


    $('#mapping-select').animate({ opacity:'0' },function(){
       $('.button-select-list').remove();

       var filter = '({project_name} = "' + $testProjectName + '" )';

        base($apiTableName).select({

        filterByFormula: filter, //Filter the results by project
        sort: [ //Sort the results by position 
            {field: 'position', direction: 'asc'}
        ]
        }).eachPage(function page(records, fetchNextPage) {

            // This function (`page`) will get called for each page of records.

            records.forEach(function(record) {

                // var $AttachmentImage = record.get('Attachments');
                
                var $AttachmentImage = record.get('image-url');


                var $screenMapping = $('<div class="button-select-list clearfix">');

                //Old Code referencing AirTable Attachments
                // if ($AttachmentImage == undefined) {
                //     $screenMapping.append('<div class="screen-placeholder">No Image</div>');
                // } else {
                //     $screenMapping.append($('<img src="/uploads/'+ $AttachmentImage[0].url + '" alt="' + record.get('screen_name') + '" class="direction-list-image"/>'));
                // }

                if ($AttachmentImage == undefined) {
                    $screenMapping.append('<div class="screen-placeholder">No Image</div>');
                } else {
                    $screenMapping.append($('<img src="/uploads/'+ $AttachmentImage + '" alt="' + record.get('screen_name') + '" class="direction-list-image"/>'));
                }

                $screenMapping.append($('<h6>'+record.get('screen_name')+'</h6>'));

                // });
                $screenMapping.attr('id', record.getId());

                $('#mapping-select').append($screenMapping);

            });

            fetchNextPage();

        }, function done(err) {
            if (err) { console.error(err); return; }
        });


        $('#mapping-select').animate({
            opacity:'1'
        },function(){
            var $currentSelectedScreen = $('.screen-direction.active').find("input").val();

            if ($currentSelectedScreen == "") {

            } else {
                $('.button-select-list').removeClass('active');
                $('#' + $currentSelectedScreen + '.button-select-list').addClass('active');
                // $.getElementById('#' + $currentSelectedScreen).scrollIntoView();
            }

            
        });


    });


    
    
});

function closeModal() {
    event.preventDefault();
    $('.project-list').removeClass('hide-list');
    $('.screen-select-modal').removeClass('active');
    $('#screen-info').removeClass('active');
    $('.button-select-list').remove();
    $('.screen-direction').removeClass('active');
    $('.button-remote-button').removeClass('hover');
    $('.button-remote-button').removeClass('selected');
}

$(document).on('click', '.button-select-close', function () {
    closeModal();
});

$(document).on('click', '.button-select-list', function () {
    var $selectedMappingID = $(this).closest('.button-select-list').attr('id');
    var $selectedMappingImg = $(this).find('img').attr('src')
    var $selectMappingTitle = $(this).find('h6').html();

    $('.screen-direction.active').find('span').html($selectMappingTitle);
    $('.screen-direction.active img').attr('src', 'images/placeholder.png');
    $('.screen-direction.active img').attr('src', $selectedMappingImg);
    $('.screen-direction.active input').val($selectedMappingID);

    $('.clear-button-select').removeClass('active');
    $('.button-select-list').removeClass('active');
    $(this).addClass('active');
});

$(document).on('click', '.clear-button-select', function () {
    $('.screen-direction.active img').attr('src', 'images/placeholder.png');
    $('.screen-direction.active input').val('');
    $('.screen-direction.active span').html('Select Screen');

    $('.clear-button-select').removeClass('active');
    $('.button-select-list').removeClass('active');
    $(this).addClass('active');
});





//** 
//DELETE IMAGE
//** 
$(document).on('click', '#clear-uploaded-image', function () {
    event.preventDefault();
    $('.selected-image-url').html('No Image Uploaded');
    $('#clear-uploaded-image').removeClass('active');
});








//** 
//DISPLAY MODAL
//** 

$(document).on('click', '.modal-select-close', function () {
    event.preventDefault();
    $('.modal').removeClass('active');
    $('.all_projects_modal').removeClass('hide-content');
});

$(document).on('click', '.new_project_name_item', function () {
    event.preventDefault();
    $('.all_projects_modal').addClass('hide-content');
});





//** 
//CREATE NEW PROTOTYPE PROJECT
//** 

$(document).on('click', '.button-prototype-cancel', function () {
    $('.all_projects_modal').removeClass('hide-content');
    $('.new_project_title').removeClass('error');
});

$(document).on('click', '.button-prototype-create', function () {
    
    if ($('#new-project-input').val().length == 0 || $('#new-project-input').val() == "Prototype Title") {
        $('.new_project_title').addClass('error');
    } else {
        localStorage.setItem("projectname", $('#new-project-input').val());

        var $testProjectName = $('#new-project-input').val();
        loadScreenList($testProjectName);

        $('.all_projects_modal').removeClass('hide-content');
        $('.modal').removeClass('active');

    }

    
    
});



window.fileUpload = function(){
    var a = document.getElementById('myfile');
    if(a.value != "") {
        var theSplit = a.value.split('\\');
        fileLabel.innerHTML = theSplit[theSplit.length-1];
    }
    $('#clear-uploaded-image').removeClass('active');
};



//** 
//MAIN NAV
//** 

$(document).on('click', '.all_projects', function () {
    event.preventDefault();
    $('.all_projects_modal').addClass('active');
});

$(document).on('click', '.settings', function () {
    event.preventDefault();
    $('.settings_modal').addClass('active');
});



//** 
//DELETE SCREEN
//** 



$(document).on('click', '#screen-delete-button', function () {
    event.preventDefault();
    
    var $dataScreenIdDiv = document.getElementById("submit");
    var $dataScreenId = $dataScreenIdDiv.getAttribute("data-screen-id");

    if ($dataScreenId == "") {
        $('.new-screen-list-item').removeClass('active');
        $('.new-screen-list-item').fadeOut('fast');
        $('.new-screen-button').removeClass('active');

    } else {
        base($apiTableName).destroy($dataScreenId, function(err, deletedRecord) {
            if (err) { console.error(err); return; }
        });
    }
    $('.project-list').removeClass('hide-list');
    $('.screen-select-modal').removeClass('active');
    $('#screen-info').removeClass('active');
    $('.button-select-list').remove();
    $('.screen-direction').removeClass('active');
    $('.button-remote-button').removeClass('hover');
    $('.button-remote-button').removeClass('selected');

    $('#screen-info').fadeOut( "fast", function() {
        clearScreenDetails();
        $('.default-screen-info').fadeIn("fast");
    });

    $testProjectName = localStorage.getItem("projectname");
    loadScreenList($testProjectName);
    
});






function alertNotification($alertMessage) { 
    var statusDiv = document.getElementById('status');
    statusDiv.innerHTML = $alertMessage;
    $( ".alert-notification" ).fadeIn( 400 ).delay(3000).fadeOut();    
}


if ( localStorage.getItem("projectname") === null || localStorage.getItem("projectname") === undefined || localStorage.getItem("projectname") === "" ) {
    $('.all_projects_modal').addClass('active');
    displayAllProjects();

} else {
    $testProjectName = localStorage.getItem("projectname");
    loadScreenList($testProjectName); 
}


$( function() {
    $( "#screens" ).sortable();
    $( "#screens" ).disableSelection();
  } );





