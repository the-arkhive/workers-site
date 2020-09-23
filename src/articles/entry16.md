---
title: 'Quarantine'
description: 'Spring and Summer, 2020 - Did a lot of drawing while the world was shut down'
preview: '/img/thumbnail/quarantine-series.png'
orientation: ''
layout: articles.hbs
index: 16
---
## Quarantine
### Spring and Summer, 2020

#### Project Overview
My goal was to incorporate machining processes into printmaking to allow for rapid generation of complex and intricate pieces. The current prints for the [Paradise Made](#paradise-made-full-plate) project were made with this process on the laser cutter. This section serves to document and explain the testing of the laser in order to get it ready for work like this.

This laser cutter was set up at the Experimental Printmaking Institute (EPI) as part of their effort to bring non-traditional processes into printmaking. We wanted to etch our masters onto plexiglass with a laser cutter to better incorporate complex digital imagery into largely analog printmaking. EPI sourced a 50 Watt Voccell CO2 laser that we built the process for etching plexiglass around.

#### Technical Specifications
[LightBurn](https://lightburnsoftware.com/) was used instead of the proprietary Voccell software that controls the [50 Watt Voccell CO2 laser](https://voccell.com/wp/techspecs/). The machine needed to easily incorporate various graphics file formats while maintaining layer hierarchy - and LightBurn addressed those needs. The Voccell software package is also Windows-only and EPI is primarily a MacOS space.

Preliminary tests were done at low power with paper instead of plexiglass to ensure that the machine (excepting the laser) was functioning properly. The first test print can be seen below in the [Paradise Made](#paradise-made-full-plate) entry. With only being on paper this test doesn’t show a ton of detail, there is potential in areas like the text and the figure in the middle.

#### Tuning the Laser
The laser has 2 main parameters that affect a cut: speed and power. Power determines the raw cutting strength of the laser as a percentage of full possible laser output. Speed determines how power is distributed along a cut path. Low power at low speeds can do similar things as high power at high speed, but using higher power can cause distortions in the cut and the precision of the cut edges suffer. To assess speed and power relationships I developed a series of testing swatches to qualitatively evaluate how speed and power adjustments effect the final cut. Gradient testing was done using the original [Paradise Made](https://github.com/thomas-williams/portfolio/blob/master/pictures/paradise_made/milton_comic_cover.tif?raw=true) image file and a few other generated gradients.

![test-grid-1](https://raw.githubusercontent.com/thomas-williams/portfolio/master/pictures/laser-cutter/test-grid-1.jpeg)

![test-grid-2](https://raw.githubusercontent.com/thomas-williams/portfolio/master/pictures/laser-cutter/test-grid-2.jpeg)

A final variable we did not account for during initial testing was the variable distance the laser travels from it’s source as the cutting head moves; cuts made farther away from the source of the laser were shallower given the same speed and power settings. This is tied to the alignment of the mirrors that move the laser around the machine. The main mirror assembly is shown below, both installed and isolated.

![mirror-focusing](https://raw.githubusercontent.com/thomas-williams/portfolio/master/pictures/laser-cutter/mirror-focusing.jpeg)

![mirror-assembly](https://raw.githubusercontent.com/thomas-williams/portfolio/master/pictures/laser-cutter/mirror-assembly.jpeg)

Given a properly aligned mirror assembly, cutting power should not inversely scale with distance. The laser’s lack of accuracy was also due to a poorly aligned beam-combining lens that merges the cutting beam with a standard red laser to visually track the cutting beam. After removing the mirror assembly it was clear the Voccell laser was not made to the tolerances required by our project. Walking near the laser or leaning on the table it was on could cause the mirror assembly to wobble, throwing everything out of alignment and weakening the cutting beam. All screws were greased and any stationary parts were also taped in place. The stationary mirrors were focused working away from the laser tube, making sure the red laser and cutting laser were aligned at each mirror. By simply putting a piece of tape on the mirror and briefly pulsing the laser you can compare the burn spot to the red laser location.

> DISCLAIMER: WHILE DOING THIS YOU ARE POINTING AN INVISIBLE CUTTING LASER AROUND THE ROOM. WEAR APPROPRIATE PROTECTIVE EQUIPMENT AND SHIELD OTHERS FROM THE LASER'S BEAM. IF YOU CAN'T FIND THE CUTTING LASER'S BURN SPOT THAT MEANS IT MIGHT HAVE HIT SOMEWHERE BEHIND THE MIRROR IT WAS SUPPOSED TO HIT. DO NOT STAND BEHIND THE MIRROR YOU ARE AIMING AT.

The mirror that moves along the short axis of the cutting bed needs to be perfectly parallel to the edge of the cutting area as the laser moves during a cut. There will be a diagram showing this below. A transparent guide is place in the laser path at the top corner of the short axis and the mirror is positioned at the bottom. By placing the guide where the mirror would be at top and aiming the laser to hit both the guide and the mirror at the lower corner is can be made perfectly parallel to the axis of movement.

Small scale tests on paper show promise that the laster cutter is more stable, accurate, and precise following the mirror adjustment. Similar cuts were made at all four corners of the cut bed and compared (Figure 8).

My work with laser cutters is very much on going, and I will continue to update my process here.