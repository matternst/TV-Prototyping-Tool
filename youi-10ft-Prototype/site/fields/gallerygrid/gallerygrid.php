<?php

class GalleryGridField extends BaseField {

  static public $assets = array(
    "css" => array("gallerygrid.min.css"),
    "js" => array("gallerygrid.min.js")
  );

  public function content() {

/* Get preferences, if any... */

    if(!c::get("kirbyGalleryGrid")) {
      $kirbyGalleryGrid = "m";
    } else {
      $kirbyGalleryGrid = c::get("kirbyGalleryGrid");
    }

/* Write down the jumplist */

    return "<script>var kirbyGalleryGrid = \"$kirbyGalleryGrid\";</script><i id=\"gallerygrid\" data-field=\"gallerygridfield\"></i>";

  }

/* #ID the parent-wrapper (.js manipulation) */

  public function element() {
    $element = parent::element();
    $element->addClass("field-gallerygrid");
    return $element;
  }
}

?>