<?php 




return function($site, $pages, $page) {

  // fetch the basic set of pages
  $prototypes = $site->children()->visible()->flip();

  // fetch all tags
  $tags = $prototypes->pluck('tags', ',', false);

  // fetch current page tag
  $pagetag = $page->tags()->pluck('tags', ',', true);

  return compact('prototypes', 'tags', 'tag', 'pagetag');

};

?>