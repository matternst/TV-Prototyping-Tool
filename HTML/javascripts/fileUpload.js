

function fileUploadNoSubmit() {
    var form = document.getElementById('file-form');
    form.onsubmit = function(event) {
        event.preventDefault();
        return;
    }
}

function fileUploadSubmit() {

    var form = document.getElementById('file-form');
    var fileSelect = document.getElementById('myfile');
    var uploadButton = document.getElementById('submit');
    var statusDiv = document.getElementById('status');

    form.onsubmit = function(event) {
        event.preventDefault();

        statusDiv.innerHTML = 'Uploading.......';

        // Get the files from the input
        var files = fileSelect.files;

        // Create a new FormData object.
        var formData = new FormData();

        //Grab just one file, since we are not allowing multiple file uploads
        var file = files[0]; 

        //Check the file type
        if (!file.type.match('image.*')) {
            var $alertMessage = 'This file is not an image. Sorry, it cannot be uploaded. Try again with a valid image.';
            alertNotification($alertMessage);
            return;
        }

        if (file.size >= 2000000 ) {
            var $alertMessage = 'This file is larger than 2MB. Sorry, it cannot be uploaded.';
            alertNotification($alertMessage);
            return;
        }

         // Add the file to the request.
        formData.append('myfile', file, file.name);

        // Set up the AJAX request.
        var xhr = new XMLHttpRequest();

        // Open the connection.
        xhr.open('POST', 'fileUpload.php', true);


        // Set up a handler for when the request finishes.
        xhr.onload = function () {
          if (xhr.status === 200) {

            var $alertMessage = 'The file uploaded successfully.......';
            alertNotification($alertMessage);


            var $dataScreenIdDiv = document.getElementById("submit");
            var $dataScreenId = $dataScreenIdDiv.getAttribute("data-screen-id");

            if ($dataScreenId == "") {
                screenCreate();
            } else {
                screenUpdate($dataScreenId);
            }
            

          } else {
            var $alertMessage = 'An error occurred while uploading the file. Try again';
            alertNotification($alertMessage);
          }
        };

        // Send the Data.
        xhr.send(formData);
    }
}

$(document).on('click', '#submit', function () {

    if ($('#myfile').val() == "") {
        fileUploadNoSubmit();

        var $dataScreenIdDiv = document.getElementById("submit");
        var $dataScreenId = $dataScreenIdDiv.getAttribute("data-screen-id");
        if ($dataScreenId == "") {
                screenCreate();
            } else {
                screenUpdate($dataScreenId);
            }
    } else {
        fileUploadSubmit();
        $('.new-screen-button').removeClass('active');
        $('.new-screen-list-item').fadeOut('fast');
    }
});


function screenUpdate($dataScreenId) {
   
    // var $newScreenName = $("#" + $dataScreenId).find( "input.screen-name" ).val();
    var $newScreenName = $("#screen-input-title").val();
    var $newUpVal = $("#screen-up input").val();
    var $newLeftVal = $("#screen-left input").val();
    var $newRightVal = $("#screen-right input").val();
    var $newDownVal = $("#screen-down input").val();
    var $newBackVal = $("#screen-back input").val();
    var $newOkVal = $("#screen-ok input").val();
    var $newscreenURL = $("#fileLabel").html();

    if ( $newscreenURL == "No Image Uploaded") {
        $newscreenURL = "";
    } else {
        $newscreenURL = $newscreenURL;
    }

    base($apiTableName).update($dataScreenId, {
        "screen_name": $newScreenName,
        "up-direction": $newUpVal,
        "left-direction": $newLeftVal,
        "right-direction": $newRightVal,
        "down-direction": $newDownVal,
        "back-direction": $newBackVal,
        "ok-direction": $newOkVal,
        "image-url": $newscreenURL

    }, function(err, record) {
        if (err) { console.error(err); return; }
    });

    $('.project-list').removeClass('hide-list');
    $('.screen-select-modal').removeClass('active');
    $('#screen-info').removeClass('active');
    $('.button-select-list').remove();
    $('.screen-direction').removeClass('active');
    $('.button-remote-button').removeClass('hover');
    $('.button-remote-button').removeClass('selected');

    $('#screen-info').fadeOut( "fast", function() {
        clearScreenDetails();
        $('.default-screen-info').fadeIn("slow");
    });

    $testProjectName = localStorage.getItem("projectname");
    // loadScreenList($testProjectName);

    $('#screens').fadeOut('fast');
    setTimeout(function(){
        loadScreenList($testProjectName);
        $('#screens').fadeIn('fast');
    }, 400);

    

}


//** 
//CREATE SCREEN DATA
//** 

function screenCreate() {

    if ($("#screen-input-title").val() == "") {
        alert();
    }
    else {
        var $newProjectName = $(".project-header").html();
        var $newScreenName = $("#screen-input-title").val();
        var $newUpVal = $("#screen-up input").val();
        var $newLeftVal = $("#screen-left input").val();
        var $newRightVal = $("#screen-right input").val();
        var $newDownVal = $("#screen-down input").val();
        var $newBackVal = $("#screen-back input").val();
        var $newOkVal = $("#screen-ok input").val();
        var $newscreenURL = $("#fileLabel").html();

        if ( $newscreenURL == "No Image Uploaded") {
            $newscreenURL = "";
        } else {
            $newscreenURL = $newscreenURL;
        }

        base($apiTableName).create({
            "project_name": $newProjectName,
            "screen_name": $newScreenName,
            "up-direction": $newUpVal,
            "left-direction": $newLeftVal,
            "right-direction": $newRightVal,
            "down-direction": $newDownVal,
            "back-direction": $newBackVal,
            "ok-direction": $newOkVal,
            "image-url": $newscreenURL

        }, function(err, record) {
            if (err) { console.error(err); return; }
        });

        $('.project-list').removeClass('hide-list');
        $('.screen-select-modal').removeClass('active');
        $('#screen-info').removeClass('active');
        $('.button-select-list').remove();
        $('.screen-direction').removeClass('active');
        $('.button-remote-button').removeClass('hover');
        $('.button-remote-button').removeClass('selected');

        $('#screen-info').fadeOut( "fast", function() {
            clearScreenDetails();
            $('.default-screen-info').fadeIn("slow");
        });

        $testProjectName = localStorage.getItem("projectname");
        loadScreenList($testProjectName);
    }
}





// $(document).ready(function(){
     
//     var divProgressBar=$("#divProgressBar");
//     var status=$("#status");
     
//     $("#uploadForm").ajaxForm({
         
//         dataType:"json",
         
//         beforeSend:function(){
//             divProgressBar.css({});
//             divProgressBar.width(0);
//         },
         
//         uploadProgress:function(event, position, total, percentComplete){
//             var pVel=percentComplete+"%";
//             divProgressBar.width(pVel);
//         },
         
//         complete:function(data){
//             status.html(data.responseText);
//         }
//     });
// });



$(document).on('click', '.mass-upload-button', function () {
    event.preventDefault();
    $('.mass-file-upload').fadeIn();
});
