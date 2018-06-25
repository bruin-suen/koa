
/**
 * ====================================
 *
 * CO模块
 * 		思路：
 * 			generator 函数体可以停在yield语句处，直到下一次next()
 * 			co模块的思路就是利用generator的这个特性，
 * 			将异步操作跟在yield后面，当异步操作完成并返回结果后
 * 			再出发下一次next()
 *
 * 	yield 只能yield对象、数组、Promise、Generator、...
 *
 * 	不能yield 字符串、Boolean、...
 *
 * ====================================
 */

const co = require('co');
const fetch = require('node-fetch');

// co(function *(){
//
// 	const res = yield fetch('https://api.douban.com/v2/movie/1291843');
//
// 	const movie = yield res.json();
// 	const summary = movie.summary;
//
// 	console.log('summary', summary);
// });


/**
 * ====================================
 *
 * 使用run替换掉co, 理解co执行过程
 *
 * ====================================
 */
function run (generator) {
	// 先拿到跌代替
	const iterator = generator();
	// 调用迭代器的next()
	const it = iterator.next();
	const promise = it.value;

	// 通过promise的then继续向下迭代
	promise.then(data => {

		const it2 = iterator.next(data);
		const promise2 = it2.value;

		promise2.then(data2 => {
			iterator.next(data2);
		});
	})
}

run(function *(){

	const res = yield fetch('https://api.douban.com/v2/movie/1291843');

	const movie = yield res.json();
	const summary = movie.summary;

	console.log('summary', summary);
})