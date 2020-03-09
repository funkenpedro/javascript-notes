//CommonJS modules are for Node

//Move objects into modules to organize them.

const _radius = new WeakMap();

class Circle {
	constructor(radius){
		_radius.set(this, radius);
		}
	}
	draw(){
		console.log()
	}
	
module.exports.Circle = Circle;
or 
module.exports.Square = Square;

or 
module.exports = Circle; (if there is only 1)


+++++++++++++++++++++++++++++++++
index.js

const Circle = require('./circleModule') 
	// './' refers to current folder
	// _radius is not available in this file
	// it is not part of the public interface
	
const c = new Circle(10);
c.draw();