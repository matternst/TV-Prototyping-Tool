


<main class="main prototype" role="main" style="<?php if($image = $page->image()): ?> background-image: url(<?php echo $image->url() ?>); <?php endif ?>">

<?php foreach(page()->children()->visible() as $project): ?>
  <?php if($image = $project->images()->sortBy('sort', 'asc')->first()): ?>
    <img id="<?php echo $project->slug() ?>" src="<?php echo $image->url() ?>" alt="<?php echo $project->title()->html() ?>" data-load-up="<?php echo $project->ButtonUp() ?>" data-load-down="<?php echo $project->ButtonDown() ?>" data-load-left="<?php echo $project->ButtonLeft() ?>" data-load-right="<?php echo $project->ButtonRight() ?>" data-load-ok="<?php echo $project->ButtonOk() ?>" data-load-back="<?php echo $project->ButtonBack() ?>" data-load-fade="<?php echo $project->FadeOutScreen() ?>" data-load-fadetime="<?php echo $project->FadeOutTime() ?>" class="screen-image">
  <?php endif ?>
<?php endforeach ?>

<!-- <?php if($image = $page->image()): ?>
	<img src="<?php echo $image->url() ?>" alt="" class="loader">
<?php endif ?> -->

<div class="loader-screen" style="background-color:#<?php echo $page->parent()->bgColor()?>;">
	<div class="loader-screen-content">
	<?php if($image = $page->parent()->image()): ?>
		<img src="<?php echo $image->url() ?>" alt="" class="loader-logo">
	<?php endif ?>

	<h3>As a user I want to <?php echo $page->usecase() ?></h3>
	</div>
</div>

<!-- <div class="screen-info">
<?php foreach(page()->children() as $note): ?>

	<div class="screen-info-content <?php echo $note->slug() ?>">
	
	<h3><?php echo $note->title() ?></h3>
	<p><?php echo $note->screennotes()->kirbytext() ?></p>

	</div>

<?php endforeach ?>
</div> -->


<span class="non-clickable"></span>

    <div class="video-bg">
    	<iframe width="" height="" src="http://www.youtube.com/embed/<?php echo $page->VideoURL() ?>?modestbranding=1&autoplay=1&controls=0&fs=0&loop=1&rel=0&showinfo=0&disablekb=1&start=<?php echo $page->VideoBGTime() ?>" frameborder="0"></iframe>
    </div>

</main>






