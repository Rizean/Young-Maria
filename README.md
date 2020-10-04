# Young-Maria - Refactored
This is a fork/refactor of [Young-Maria](https://github.com/MariaMod/Young-Maria)

## Notes
* This is very much and early WIP refactor. I have completed a lot of the refactoring, but more is still needed but less urgent. Due to the size of this something things just quickly got tossed into a folder/file that may not make sense. 
Some file naming is off, for example a lot of the widgets are camel case and should be pascal case as they are really more like a class than an instance. In other words still a lot to do but less worried about it as I'm sure as I go
through and DRY up the code as well as convert more of the code to ES6 JS that the over all structure will get simpler/cleaner.
* I have years of coding experience but zero experience with Twine.js and/or SugarCube. As a professional coder I took one look at the twine editor and said no. It's a fine tool for the target audience.
* Twee2 has some issues, and it looks like the project has been abandoned. For now, I am working around the issues, but I may rewrite it from scratch. Once I get deeper in and have a clue what I can/can't do with Twine.js/SugarCube I should then know if I want to rewrite Twee2 or maybe Twee3.

## Goals
* Completely refactor Young-Maria and have it merged upstream
* Build a framework to make it easier to build `Mature` Twine.js games. As tribute to the original author I'm planing to call it Maria.js or something like that.


## Build/Run
* From project root: `https://github.com/Rizean/Young-Maria`
* Open `YoungMaria8.0.0_Offline.tw2.html` in a Modern browser


## Ideas
### Tech
* Really need to look at improving/replacing Twee2 or adding a preprocessor to deal with `::StoryIncludes` and having to use full absolute paths vs relative paths. Using the full paths is getting old quick, and I have an IDE that makes easy.
* Change how energy is updated/checked to make it easier to apply global adjustments - Would like to add a setting to cut energy use in half like the money setting
* DRY/Make reusable code for clothing - it should be very easy to add new clothing
* Enable location based selfies
* Maybe add the ability to care laptop?
* Add backpack/purse
* Code Preprocessor? Maybe add depending on how easy/hard it is to make reusable code.
* Reactjs?
* Server? What would the server do? Multiplayer is possible but that is a long way off.

### Jobs
* BabySitter
* Maid

### Family/Character Traits - Random and/or Earn from actions
* Nudist - Family ok with nudity
* Exhibitionist - Low requirements for clothing
* Voyeur / Voyeurism
* Dominant/Submissive / Master/Slave
* Shibari
* Masochist/Sadist
* Humiliation
* Roleplay
* Predicament bondage
* Power exchange
* Blackmail
* Risky
* CheapDrunk - get drunk easier and stay drunk longer

### Places
* Apartment - Cant pay rent you have to PAY / Spy Cam ie BlackMail
* Backyard - for nudity play
* Dark Ally

### Toys / Items
* Mom's vib panties - take and leads to seen with mom or dad
* Buy playboy for brother
* more clothing in general
 
### Scenes
* At beach shower after swimming
  * Clothes taken have to try and sneak home
  * Uninvited guest
* Steal from store with success/failure events

### Characters
* Police Officer - can catch you nude and/or drunk or skipping school

