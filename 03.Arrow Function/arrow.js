/**
 * ===================================
 *
 * 箭头函数
 *
 * ===================================
 */
const arrow = function (param) {};

const arrow2 = (param) => {};

const arrow3 = param => {};

const arrow4 = param => console.log(param);

const arrow5 = param => ({param: param});

const arrow6 = (param1, param2) => {}

// {id: 1, movie: xxx}

const arrow7 = ({id, movie}) => {
	console.log(id, movie);
};


const luke = {
	id: 2,
	say: function(){
		setTimeout(function(){
			console.log('id: ' + this.id);
		}, 50);
	},
	sayWithThis: function(){
		let that = this;

		setTimeout(function(){
			console.log('this id: ' + that.id);
		}, 500)
	},
	sayWidthArrow: function(){
		setTimeout(() => {
			console.log('arrow id: ' + this.id);
		}, 1500)
	},
	sayWithGlobalArrow: () => {
		setTimeout(() => {
			console.log('global arrow id: ' + this.id);
		}, 2000);
	}
};

luke.say();  // undefind
luke.sayWithThis(); // 2
luke.sayWidthArrow(); // 2
luke.sayWithGlobalArrow();  // undefind