import { NumbersCollection } from './NumbersCollection';
import { CharsCollection } from './CharsCollection';
import { LinkedList } from './LinkedList';

const charCollection = new CharsCollection('AdoceRbvdr');
charCollection.sort();
console.log(charCollection.data);

const numsCollection = new NumbersCollection([5, 1, 12, -6]);
numsCollection.sort();
console.log(numsCollection.data);

const linkedList = new LinkedList();
linkedList.addNode(30);
linkedList.addNode(3);
linkedList.addNode(-9);
linkedList.addNode(11);
linkedList.sort();
linkedList.print();
