<?php if(!defined('KIRBY')) exit ?>

title: Screen
pages: false
files:
  sortable: true

fields:
  gallerygrid:
    type: gallerygrid
  title:
    label: Screen Title
    type:  text

  pageSettings:
    label: Button Mapping
    type: headline
  ButtonUp:
    label: Up Arrow
    type: select 
    width: 1/2
    default: None
    options: siblings
  ButtonDown:
    label: Down Arrow
    type: select 
    width: 1/2
    default: None
    options: siblings
  ButtonLeft:
    label: Left Arrow
    type: select 
    width: 1/2
    default: None
    options: siblings
  ButtonRight:
    label: Right Arrow
    type: select 
    width: 1/2
    default: None
    options: siblings
  ButtonOk:
    label: OK/Select
    type: select 
    width: 1/2
    default: None
    options: siblings
  ButtonBack:
    label: Back
    type: select 
    width: 1/2
    default: None
    options: siblings

  pageMisc:
    label: Misc Settings
    type: headline
  FadeOutScreen:
    label: Select Screen to fade to ...
    type: select 
    width: 2/3
    default: None
    options: siblings
  FadeOutTime:
    label: Fade Screen after .. seconds (00)
    type:  text
    width: 1/3
