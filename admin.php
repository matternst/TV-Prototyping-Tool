<!DOCTYPE html>
<html>
  <head>
    <title>TV Prototyping</title>
    <meta charset='utf-8'>
    <meta content='Description' name=''>
    <meta content='1 day' name='revisit-after'>
    <meta content='width=device-width, initial-scale=1' name='viewport'>
    <link rel="shortcut icon" href="favicon.ico?v=5" type="image/x-icon">
    <!-- Fonts -->
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,400italic,300italic,100italic,700italic,700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Inconsolata:400,700' rel='stylesheet' type='text/css'>
    <!-- Styles -->
    <link href="stylesheets/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="stylesheets/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <link href="stylesheets/style.css" rel="stylesheet" type="text/css" />
    <!-- HTML5 fallbacks -->
    <!--[if lt IE 9]>
    <script src="javascripts/html5shiv.js" type="text/javascript"></script>
    <script src="javascripts/respond.min.js" type="text/javascript"></script>
    <![endif]-->
  </head>
  <body>
    <div>
      <section class="clearfix main-section">


        <div class="modal all_projects_modal">
            <a href="" class="modal-select-close modal-close">X</a>

            <div class="new_project_title">
              <label>Enter the name of your new prototype</label>
              <input id="new-project-input" placeholder="Prototype Title">
              <button class="button-prototype-cancel">Cancel</button>
              <button class="button-prototype-create">Create</button>
            </div>

            <h1>All Prototypes</h1>
            <div id="all-project-list"></div>

            <div class="new_project_name_item clearfix">
                <a href="" class="new_project_name_link">New Prototype</a>
            </div>
        </div>

        <div class="modal settings_modal">
            <a href="" class="modal-select-close modal-close">X</a>
            <h1>Prototype Settings</h1>
        </div>


        <div class="screen-select-modal">
          <h5>Select a Screen</h5>
          <a href="" class="button-select-close modal-close">X</a>
          <div class="clear-button-select">No Screen</div>
          <div id="mapping-select"></div>
        </div>

        <div class='project-list'>
          <header>
              <input value="" id="sharable_link_id" />
              <a class='brand' href='index.html'>
                TV Prototype
              </a>
              <nav class="main-nav">
                <a href="" class="all_projects">All Projects</a>
                <a href="" class="view_prototype" target="_blank">View Prototype</a>
                <a href="" class="share_prototype">Sharable Link</a>
                <a href="" class="settings">Settings</a>
              </nav>
          </header>

            <h2 class="project-header">Project Name</h2>
            <div id="screens"></div>

            <div class="new-screen-button clearfix" id="">
              <div class="new-screen-button-image"></div>
              <div class="screen-list-item-metadata">
                <h1>New Screen</h1>
              </div>
              <div class="new-screen-add-icon">
                <img src="images/add.png" alt="add new screen">
              </div>
            </div>
        </div>

        <div class="screen-details-bg">
        
          <div class="default-screen-info">
            <h1>Select a screen to edit</h1>
            <p>This default state could include the sharable URL, link to the prototype etc</p>
          </div>

          <div id="screen-info">
            <input value="" id="screen-input-title" placeholder="New Screen Title">

            <div class="image-upload">
              <img src="images/upload_icon.png">

               <?PHP
                if(!empty($_FILES['uploaded_file']))
                {
                  $path = "uploads/";
                  $path = $path . basename( $_FILES['uploaded_file']['name']);
                  if(move_uploaded_file($_FILES['uploaded_file']['tmp_name'], $path)) {
                    // echo "The file ".  basename( $_FILES['uploaded_file']['name']). 
                    // " has been uploaded";
                  } else{
                      // echo "There was an error uploading the file, please try again!";
                  }
                }
              ?>

              <form enctype="multipart/form-data" action="admin.php" method="POST">
                <span class="selected-image-url" id="fileLabel">
                  No Image Uploaded
                </span>
                <input type="file" id="selected-image" name="uploaded_file" class="selected-image-url-button" onchange="fileUpload()"></input>
                <input  class="screen-action-button" id="screen-create-btn" type="submit" value="Save"></input>
              </form>


              <!-- <form enctype="multipart/form-data" action="admin.php" method="POST" id="image-upload-form">
                <span class="selected-image-url" id="fileLabel">
                  No Image Uploaded
                </span>
                <input type="file" id="selected-image" name="uploaded_file" class="selected-image-url-button" onchange="fileUpload()"></input>

                <button class="screen-action-button" type="button" data-screen-id="" id="screen-save-btn" type="submit" value="Upload">Save</button>

                <button class="screen-action-button" type="button" data-screen-id="" onclick="screenCreate(this)" id="screen-create-btn" type="submit" value="Upload">Create</button>

              </form> -->

            </div>
            <div class="button-index">
              <div class="button-remote">
                <span class="button-remote-button button-remote-up"></span>
                <span class="button-remote-button button-remote-left"></span>
                <span class="button-remote-button button-remote-right"></span>
                <span class="button-remote-button button-remote-down"></span>
                <span class="button-remote-button button-remote-back"></span>
                <span class="button-remote-button button-remote-ok"></span>
              </div>
              <h5>Button Mapping</h5>
            </div>

            <div class="screen-direction" id="screen-up">
              <input>
              <img src="images/placeholder.png" alt="Placeholder Text">
              <span>Select a Screen</span>
            </div>
            <div class="screen-direction" id="screen-left">
              <input>
              <img src="images/placeholder.png" alt="Placeholder Text">
              <span>Select a Screen</span>
            </div>
            <div class="screen-direction" id="screen-right">
              <input>
              <img src="images/placeholder.png" alt="Placeholder Text">
              <span>Select a Screen</span>
            </div>
            <div class="screen-direction" id="screen-down">
              <input>
              <img src="images/placeholder.png" alt="Placeholder Text">
              <span>Select a Screen</span>
            </div>
            <div class="screen-direction" id="screen-back">
              <input>
              <img src="images/placeholder.png" alt="Placeholder Text">
              <span>Select a Screen</span>
            </div>
            <div class="screen-direction" id="screen-ok">
              <input>
              <img src="images/placeholder.png" alt="Placeholder Text">
              <span>Select a Screen</span>
            </div>

          </div>          
        </div>
      </section>
      
      <footer>
        
      </footer>
    </div>
    <script src="javascripts/jquery.min.js" type="text/javascript"></script>
    <script src="javascripts/waypoints.min.js" type="text/javascript"></script>
    <script src="javascripts/airtable.browser.js" type="text/javascript"></script>
    <script src="javascripts/admin-functions.js" type="text/javascript"></script>
  </body>
</html>
