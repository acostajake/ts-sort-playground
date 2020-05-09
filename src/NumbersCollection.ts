import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
	constructor(public data: number[]) {
		super();
	}

	// get keyword allows length to be referenced as a property rather than having to call each time
	// i.e. collection.length allowed instead of collection.length() outside of class
	get length(): number {
		return this.data.length;
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		return this.data[leftIndex] > this.data[rightIndex];
	}

	swap(leftIndex: number, rightIndex: number): void {
		const temp = this.data[leftIndex];
		this.data[leftIndex] = this.data[rightIndex];
		this.data[rightIndex] = temp;
	}
}
