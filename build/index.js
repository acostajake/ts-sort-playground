"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharsCollection_1 = require("./CharsCollection");
var LinkedList_1 = require("./LinkedList");
var charCollection = new CharsCollection_1.CharsCollection('AdoceRbvdr');
charCollection.sort();
console.log(charCollection.data);
var numsCollection = new NumbersCollection_1.NumbersCollection([5, 1, 12, -6]);
numsCollection.sort();
console.log(numsCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.addNode(30);
linkedList.addNode(3);
linkedList.addNode(-9);
linkedList.addNode(11);
linkedList.sort();
linkedList.print();