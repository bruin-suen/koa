/**
 * ======================================
 *
 * 通过迭代器理解Generator Function函数
 *
 * ======================================
 */

function makeIterator (arr) {
	let nextIndex = 0;

	// 返回迭代器对象
	return {

		// next() 方法返回的结果对象
		next: () => {

			if (nextIndex < arr.length){
				return {
					value: arr[nextIndex++],
					done: false
				}
			} else {
				return {
					done: true
				}
			}
		}
	}
}

const it = makeIterator(['吃饭', '睡觉', '打豆豆']);
// console.log('1 >> ' + it.next().value);
// console.log('2 >> ' + it.next().value);
// console.log('3 >> ' + it.next().value);
// console.log('4 >> ' + it.next().done);




/**
 * ======================================
 *
 * 生成器
 * 		通过生成器来简化迭代器的创建过程。
 *
 * ======================================
 */
function *makeIterator (arr) {

	for(let i = 0; i < arr.length; i++){
		yield arr[i]   // 当前循环的值给迭代下去
	}
}

const gen = makeIterator(['吃饭', '睡觉', '打豆豆']);
console.log('1 >> ' + gen.next().value);
console.log('2 >> ' + gen.next().value);
console.log('3 >> ' + gen.next().value);
console.log('4 >> ' + gen.next().done);