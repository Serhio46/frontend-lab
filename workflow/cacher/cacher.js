export class Cacher {

	withCache(func) {

		const hash = (args) => args.join();
		const cache = new Map();

		return function (...args) {
			const key = hash(args);
			if (cache.has(key)) {
				return cache.get(key);
			}
			const result = func(...args);
			cache.set(key, result);
			return result;
		};
	};
};

