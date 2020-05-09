// unnecessary if using abstract class
// interface Sortable {
// 	length: number;
// 	compare(leftIndex: number, rightIndex: number): boolean;
// 	swap(leftIndex: number, rightIndex: number): void;
// }

// abstract keyword references methods not defined in this class, but will be implemented by child classes
// entails strong coupling, Sorter is useless without child classes, and classes cannot work without Sorter
export abstract class Sorter {
	abstract compare(leftIndex: number, rightIndex: number): boolean;
	abstract swap(leftIndex: number, rightIndex: number): void;
	// as a getter, define as property
	abstract length: number;

	sort(): void {
		const { length } = this;

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				// uses methods defined in class
				if (this.compare(j, j + 1)) {
					this.swap(j, j + 1);
				}
			}
		}
	}
}
