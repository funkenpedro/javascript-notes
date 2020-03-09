
++ file is Circle.js

const _radius = new WeakMap();

export class Circle{
	constructor(radius){
		
		
	}
	
}


++index.js

import {Circle} from './circle';
const c = new Circle(10);
c.draw(|);

//for whatever reason,this import has a problem so in index.html
//include: 
<script type = "module" src="index.js"></script>
and change the above './circle' to './circle.js'
