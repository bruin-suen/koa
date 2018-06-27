/**
 * ===============================================
 *
 * 使用child_process建立子进程
 *
 * ===============================================
 */

const cp = require('child_process');
const { resolve } = require('path');

;(async () => {
	const crawler = resolve(__dirname, './crawler');
	let child = cp.fork(crawler, []);
	let invoked = false;

	child.on('error', err => {
		if(invoked) return;

		invoked = true;
		console.log(err);
	});

	child.on('exit', code => {
		if(invoked) return;

		invoked = false;

		let err = code === 0 ? null : new Error('exit code' + code);

		console.log(err);
	});

	child.on('message', data => {
		let result = data.result;

		console.log(result);
	});
})();