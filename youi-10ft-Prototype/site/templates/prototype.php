<?php snippet('header') ?>

<?php if($user = $site->user() and $user->hasRole('admin')): ?>
	
	<?php snippet('editor-header') ?>

<?php else: ?>

	<?php snippet('editor-header') ?>
	<?php snippet('client-header') ?>
	
<?php endif ?>


<?php snippet('screens') ?>
 
<?php snippet('screen-menu') ?>

<?php snippet('prototype-menu') ?>

<?php snippet('release-notes') ?>

<?php snippet('footer') ?>