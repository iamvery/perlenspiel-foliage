// game.js for Perlenspiel 2.3

/*
Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
Perlenspiel is Copyright © 2009-12 Worcester Polytechnic Institute.
This file is part of Perlenspiel.

Perlenspiel is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Perlenspiel is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You may have received a copy of the GNU Lesser General Public License
along with Perlenspiel. If not, see <http://www.gnu.org/licenses/>.
*/

// The following comment lines are for JSLint. Don't remove them!

/*jslint nomen: true, white: true */
/*global PS */

var CLOCK_SPEED = 60; // miliseconds

var Chance = function(probability, random){
  random = random || Math.random

  return {
    fate: function(){
      return random() <= probability
    },
  }
}

var SEED_TYPES = ['seed', 'seedling', 'plant', 'dying_plant', 'dead']

var SEED        = SEED_TYPES[0];
var SEEDLING    = SEED_TYPES[1];
var PLANT       = SEED_TYPES[2];
var DYING_PLANT = SEED_TYPES[3];
var DEAD        = SEED_TYPES[4];

var SEED_DRAWERS = {};

SEED_DRAWERS[SEED] = function(x, y){
  PS.BeadGlyph(x, y, '.');
  PS.BeadGlyphColor(x, y, PS.COLOR_BLACK);
};

SEED_DRAWERS[SEEDLING] = function(x, y){
  PS.BeadGlyph(x, y, 0);
  PS.BeadColor(x, y, PS.COLOR_YELLOW);
};

SEED_DRAWERS[PLANT] = function(x, y){
};

SEED_DRAWERS[DYING_PLANT] = function(x, y){
};

SEED_DRAWERS[DEAD] = function(x, y){
};

var Seed = function(x, y, type, fate){
  fate = fate || new Chance(0.1).fate

  function is(is_type){
    return(type == is_type)
  }

  function age(){
    if (!is(DEAD) && fate()){
      var current_index = SEED_TYPES.indexOf(type);
      type = SEED_TYPES[++current_index];
    }
  }

  function draw(){
    var drawer = SEED_DRAWERS[type];
    if (drawer) drawer(x,y);
  }

  return {
    x: x,
    y: y,

    is: is,
    age: age,
    draw: draw,
  };
}

var SEEDS = [];

// This is a template for creating new Perlenspiel games
// All of the functions below MUST exist, or the engine will stop and complain!

// PS.Init ()
// Initializes the game
// This function normally includes a call to PS.GridSize (x, y)
// where x and y are the desired initial dimensions of the grid
// options = a table with optional parameters; see documentation for details

PS.Init = function (options)
{
	"use strict";

	// change to the grid dimensions you want

	PS.GridSize ( 8, 8 );
	
    // Put any other init code here

  PS.Clock(CLOCK_SPEED);
};

// PS.Click (x, y, data)
// This function is called whenever a bead is clicked
// It doesn't have to do anything
// x = the x-position of the bead on the grid
// y = the y-position of the bead on the grid
// data = the data value associated with this bead, 0 if none has been set
// options = a table with optional parameters; see documentation for details

PS.Click = function (x, y, data, options)
{
	"use strict";
		
	// put code here for bead clicks
};

// PS.Release (x, y, data)
// This function is called whenever a mouse button is released over a bead
// It doesn't have to do anything
// x = the x-position of the bead on the grid
// y = the y-position of the bead on the grid
// data = the data value associated with this bead, 0 if none has been set
// options = a table with optional parameters; see documentation for details

PS.Release = function (x, y, data, options)
{
	"use strict";

	// Put code here for when the mouse button is released over a bead	
};

// PS.Enter (x, y, button, data)
// This function is called whenever the mouse moves over a bead
// It doesn't have to do anything
// x = the x-position of the bead on the grid
// y = the y-position of the bead on the grid
// data = the data value associated with this bead, 0 if none has been set
// options = a table with optional parameters; see documentation for details

PS.Enter = function (x, y, data, options)
{
	"use strict";

	// Put code here for when the mouse enters a bead	
};

// PS.Leave (x, y, data)
// This function is called whenever the mouse moves away from a bead
// It doesn't have to do anything
// x = the x-position of the bead on the grid
// y = the y-position of the bead on the grid
// data = the data value associated with this bead, 0 if none has been set
// options = a table with optional parameters; see documentation for details

PS.Leave = function (x, y, data, options)
{
	"use strict";
	
	// Put code here for when the mouse leaves a bead	
};

// PS.KeyDown (key, shift, ctrl)
// This function is called whenever a key on the keyboard is pressed
// It doesn't have to do anything
// key = the ASCII code of the pressed key, or one of the following constants:
// Arrow keys = PS.ARROW_UP, PS.ARROW_DOWN, PS.ARROW_LEFT, PS.ARROW_RIGHT
// Function keys = PS.F1 through PS.F1
// shift = true if shift key is held down, false otherwise
// ctrl = true if control key is held down, false otherwise
// options = a table with optional parameters; see documentation for details

PS.KeyDown = function (key, shift, ctrl, options)
{
	"use strict";

	// Put code here for when a key is pressed	
};

// PS.KeyUp (key, shift, ctrl)
// This function is called whenever a key on the keyboard is released
// It doesn't have to do anything
// key = the ASCII code of the pressed key, or one of the following constants:
// Arrow keys = PS.ARROW_UP, PS.ARROW_DOWN, PS.ARROW_LEFT, PS.ARROW_RIGHT
// Function keys = PS.F1 through PS.F12
// shift = true if shift key is held down, false otherwise
// ctrl = true if control key is held down, false otherwise
// options = a table with optional parameters; see documentation for details

PS.KeyUp = function (key, shift, ctrl, options)
{
	"use strict";
	
	// Put code here for when a key is released	
};

// PS.Wheel (dir)
// This function is called whenever the mouse wheel moves forward or backward
// It doesn't have to do anything
// dir = PS.FORWARD if mouse wheel moves forward, PS.BACKWARD if backward
// options = a table with optional parameters; see documentation for details

PS.Wheel = function (dir, options)
{
	"use strict";

	// Put code here for when mouse wheel is moved
};

// PS.Tick ()
// This function is called on every clock tick
// if a timer has been activated with a call to PS.Timer()
// It doesn't have to do anything
// options = a table with optional parameters; see documentation for details

PS.Tick = function (options)
{
	"use strict";

	// Put code here to handle clock ticks
};
