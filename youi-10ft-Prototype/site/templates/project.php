<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
  <meta name="description" content="<?php echo $site->description()->html() ?>">
  <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">

<!--   <?php echo css('assets/css/main.css') ?>
 -->  <?php echo css('assets/css/fonts.css') ?>
 <?php echo css('assets/css/youi-base.css') ?>

</head>
<body class="lander-bg">
  <main class="main home-main" role="main">
    <div class="text signup-container">
		<img src="assets/images/youi-logo.png" alt="You.i TV">
      	<h1><?php echo $page->title()->html() ?></h1>
      	<h3><?php echo $page->text()->html() ?></h3>
    </div>
  </main>
<?php snippet('footer') ?>