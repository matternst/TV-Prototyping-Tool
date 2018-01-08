<div class="overlay main-navigation">

<h5>All PROTOTYPE SCREENS</h5>

<a href="" class="nav-close">CLOSE</a>

  <ul class="menu cf">

    <?php foreach(page()->children()->visible() as $project): ?>
      <li id="nav-<?php echo $project->slug() ?>" >
        <a href="<?php echo $project->url() ?>">
            <?php if($image = $project->images()->sortBy('sort', 'asc')->first()): ?>
            <img src="<?php echo $image->url() ?>" alt="<?php echo $project->title()->html() ?>">
          <?php endif ?>

          <?php echo $project->title()->html() ?>
          </a>
      </li>
    
  <?php endforeach ?>
  </ul>

</div>
