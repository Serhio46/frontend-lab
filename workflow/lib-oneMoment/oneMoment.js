class OneMoment {
	constructor(date) {
		if (date instanceof Date) {
			this.date = date;
		} else if (typeof date === 'number') {
			this.date = new Date(date);
		} else if (date === undefined) {
			this.date = new Date();
		}
	}

	static parse(date, format) {
		if (format === 'DD-MM-YYYY') {
			const rightFormat = date.split('-').reverse().join('-');
			return new this(Date.parse(rightFormat));
		} else if (format === 'MMDDYYYY') {
			const rightFormat = `${date.slice(-4)}-${date.slice(0, 2)}-${date.slice(2, 4)}`;
			return new this(Date.parse(rightFormat));
		} console.log('Wrong format');
	}

	format(format) {

		//In this case, I declared variables here, although globally it is better to introduce and operate with them in the constructor if there are more methods? Right?
		const year = this.date.getFullYear();
		const day = this.date.getDate();
		const month = this.date.getMonth() + 1;

		const dayDD = (day < 10) ? `0${day}` : day;
		const monthDD = (month < 10) ? `0${month}` : month;

		switch (format) {
			case 'YYYY/MM/DD':
				return `${year}/${dayDD}/${monthDD}`;
				break;
			case 'MM-YYYY':
				return `${monthDD}-${year}`;
				break;
			case 'D/M/YYYY':
				return `${day}/${month}/${year}`
		}
	}

	fromNow() {
		const gap = Date.now() - this.date;
		const res = ((gap) => {
			const gapi = gap / (365 * 24 * 60 * 60 * 1000);
			if (gapi > 1) {
				return `${Math.round(gapi)} years ago`
			} else (gapi < 1)
			return `in ${Math.round(gapi * 365)} days`;
		});
		return res(gap);
	}

	toDate() {
		return this.date
	}
};


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = OneMoment;
} else {
	window.OneMoment = OneMoment;
}

