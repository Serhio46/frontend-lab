export class Cacher {
	constructor(name) {
		this.name = name;
	}

	withCache(func) {
		let cache = new Map();
		return function (num) {
			if (cache.has(num)) {
				console.log('cache')
				return cache.get(num);
			}
			let result = func(num);
			cache.set(num, result);
			console.log('set')
			return result;
		};
	};
};

