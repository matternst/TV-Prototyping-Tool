<?php snippet('header') ?>
<div class="default-bg" style="background-color:#<?php echo $page->bgColor()?>;">>
	<div class="intro-screen-content">
		<?php if($image = $page->image()): ?>
			<img src="<?php echo $image->url() ?>" alt="" class="loader-logo">
		<?php endif ?>
		<h1>Welcome to the You.i prototyping area for the <?php echo $page->title()->html() ?></h1>
		<p>You should have been sent a link to view your protypes. If not, let us know and we can re-send</p>
	</div>
</div>
<?php snippet('footer') ?>

