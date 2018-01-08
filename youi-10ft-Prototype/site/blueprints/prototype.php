<?php if(!defined('KIRBY')) exit ?>

title: Prototype
pages:
  template: screen
files: true

fields:
  title:
    label: Prototype Title
    type:  text
  pageMisc:
    label: Misc Settings
    type: headline
  VideoURL:
    label: Video ID (eg. nm-m6qurA8c)
    type:  text
    width: 2/3
  VideoBGTime:
    label: Video Start Time (eg. 25)
    type:  text
    width: 1/3
