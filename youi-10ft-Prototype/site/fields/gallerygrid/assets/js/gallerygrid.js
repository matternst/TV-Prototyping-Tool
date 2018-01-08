/* Some vars, outside the scoop */

  var gallerygrid__sizes = [];
  var gallerygrid__debuging = 1;

/* Main function, triggered when the "field" is loaded */

;$.fn.gallerygridfield = function() {

/* Set some vars */

  var plugin_id = "gallerygrid";

  var gallerygrid__keyword = "/content/";
  var gallerygrid__image_source = "ul.nav.nav-list.sidebar-list > li > a.draggable.ui-draggable.ui-draggable-handle";
  var gallerygrid__image_wrapper = ".nav-list.sidebar-list:last-of-type";
  var gallerygrid__image_holder = ".nav-list.sidebar-list li a.draggable";
  var gallerygrid__toggle_wrapper = ".hgroup-option-right";

  var gallerygrid__size = /=75/g;

  var gallerygrid_mode;
  var gallerygrid_icon;
  var gallerygrid_state;
  var gallerygrid_disabled;

  gallerygrid__sizes["s"] = 50;
  gallerygrid__sizes["m"] = 75;
  gallerygrid__sizes["l"] = 400;

/* Get some preferences */

  if(localStorage.getItem(plugin_id + "_state") != null) {
    gallerygrid_state = localStorage.getItem(plugin_id + "_state");
  } else {
    gallerygrid_state = "grid";
  }

  gallerygrid__debug("state : " + gallerygrid_state);

/* Show some debug-info in the console */

  function gallerygrid__debug(msg) {
    if(window.console && gallerygrid__debuging) {
      console.log("[gallerygrid] " + msg);
    }
  }

/* Remove the field; it's only a function wrapper */

  $("div.field-gallerygrid").remove();

/* Initialize the timer; check if desired elements do exist */

  var gallerygrid__timer = setInterval(function() {
    gallerygrid__checker();
  }, 1000);

  function gallerygrid__checker() {

    if($(gallerygrid__image_source).length) {
      clearInterval(gallerygrid__timer);

        if(!$("#gallerygrid_toggle").length) {
          gallerygrid__set_toggle();
          gallerygrid__get_image_src();
        }

      gallerygrid__debug("all routines stopped");
    }

    gallerygrid__debug("checking for context menu");
  }

/* ------------------------------------------ */
/* Create toggle-button */
/* ------------------------------------------ */

  function gallerygrid__set_toggle() {

    gallerygrid_icon = gallerygrid_state == "grid"?"fa-toggle-on":"fa-toggle-off";

    $(gallerygrid__image_wrapper).prev("h2").find(gallerygrid__toggle_wrapper).prepend("<a href=\"#\" id=\"gallerygrid_toggle\"><i class=\"icon icon-left fa " + gallerygrid_icon + "\"></i><span>Grid</span></a>");

      $("#gallerygrid_toggle").on("click", function(e) {
        e.preventDefault();

        gallerygrid_disabled = $("i", this).hasClass("fa-toggle-on")?true:false;

          gallerygrid_icon = gallerygrid_disabled?"fa-toggle-off":"fa-toggle-on";
          gallerygrid_mode = gallerygrid_disabled?"gallerygrid_disabled":"gallerygrid_enabled";
          gallerygrid_state = gallerygrid_disabled?"list":"grid";

        localStorage.setItem(plugin_id + "_state", gallerygrid_state);
        $(gallerygrid__image_wrapper).removeClass("gallerygrid_enabled gallerygrid_disabled").addClass(gallerygrid_mode);
        $("i", this).removeClass("fa-toggle-on fa-toggle-off").addClass(gallerygrid_icon);
      });
  }

/* ------------------------------------------ */
/* Get and set all image sources */
/* ------------------------------------------ */

  function gallerygrid__get_image_src() {

    gallerygrid_mode = gallerygrid_state == "grid"?"gallerygrid_enabled":"gallerygrid_disabled";

    $(gallerygrid__image_wrapper).addClass(gallerygrid_mode + " gallerygrid_size_" + kirbyGalleryGrid);

/* Get the source for every images in the list */

    $(gallerygrid__image_holder).each(function(index) {

      gallerygrid__image_source = $(this).data("url");

/* When no thumbnail exist */

      if(gallerygrid__image_source == null) {
        $("i", this).addClass("gallerygrid__no_image_source");

      } else {

/* Resize the preview image */

        gallerygrid__image_source = gallerygrid__image_source.replace(gallerygrid__size, "=" + gallerygrid__sizes[kirbyGalleryGrid]);

/* Place the thumbnail inside the element */

        $("i", this).css({"background-image" : "url('" + gallerygrid__image_source + "')"});
      }

      gallerygrid__debug("image : " + gallerygrid__image_source );
    });
  }

  gallerygrid__debug("initialized")

};