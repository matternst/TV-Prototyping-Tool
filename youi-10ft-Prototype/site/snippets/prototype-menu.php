





<nav role="navigation" class="tag-navigation">
  <ul class="tags">

<li class="nav-title">Other Prototypes</li>

<?php
$siblings = $page->siblings($self = true)->visible();

foreach($siblings as $sibling): ?>

 <li> <a href="<?php echo $sibling->url() ?>"><?php echo $sibling->title()->html() ?></a></li>
<?php endforeach ?>
  </ul>
</nav>
