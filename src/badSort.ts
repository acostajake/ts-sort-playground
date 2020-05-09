class BadSorter {
	// *** Can get verbose easily and require many checks later
	constructor(public collection: number[] | string) {}

	badSort(): void {
		const { length } = this.collection;

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				// methods avail for collection are restricted to whatever is shared in types specified in constructor
				// type guard dictates an value type and enables all type methods
				// *** Can get verbose quickly, best practice to extract functionality
				if (this.collection instanceof Array) {
					// methods on collection are all array methods
					if (this.collection[j] > this.collection[j + 1]) {
						let temp = this.collection[j];
						this.collection[j] = this.collection[j + 1];
						this.collection[j + 1] = temp;
					}
				}
			}
		}
	}
}

const badSorter = new BadSorter([5, 1, 12, -6]);

badSorter.badSort();
console.log(badSorter.collection);
