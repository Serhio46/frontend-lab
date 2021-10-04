export class Cacher {

	withCache(func) {

		const hash = (arguments) => [].join.call(arguments);
		const cache = new Map();

		return function () {
			const key = hash(arguments);
			if (cache.has(key)) {
				return cache.get(key);
			}
			const result = func(...arguments);
			cache.set(key, result);
			return result;
		};
	};
};

