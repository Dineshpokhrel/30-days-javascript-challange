// Day 17: Data Structures

// Activity 1: Linked List

// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove() {
        if (!this.head) return null;
        if (!this.head.next) {
            const value = this.head.value;
            this.head = null;
            return value;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        const value = current.next.value;
        current.next = null;
        return value;
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display(); // Logs 1, 2, 3
console.log(list.remove()); // Logs 3
list.display(); // Logs 1, 2

// Activity 2: Stack

// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Logs 3
console.log(stack.peek()); // Logs 2

// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
function reverseStringUsingStack(str) {
    const stack = new Stack();
    for (let char of str) {
        stack.push(char);
    }
    let reversedStr = '';
    while (stack.items.length) {
        reversedStr += stack.pop();
    }
    return reversedStr;
}

console.log(reverseStringUsingStack('hello')); // Logs 'olleh'

// Activity 3: Queue

// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Logs 1
console.log(queue.front()); // Logs 2

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
function simulatePrinterQueue(jobs) {
    const printerQueue = new Queue();
    jobs.forEach(job => printerQueue.enqueue(job));
    while (printerQueue.items.length) {
        console.log(`Printing job: ${printerQueue.dequeue()}`);
    }
}

simulatePrinterQueue(['Job1', 'Job2', 'Job3']); // Logs 'Printing job: Job1', 'Printing job: Job2', 'Printing job: Job3'

// Activity 4: Binary Tree

// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node = this.root) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.inOrderTraversal(); // Logs 5, 10, 15

// Activity 5: Graph (Optional)

// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1);
        }
    }

    bfs(startingNode) {
        let visited = new Set();
        let queue = [startingNode];

        while (queue.length) {
            let currentNode = queue.shift();

            if (!visited.has(currentNode)) {
                console.log(currentNode);
                visited.add(currentNode);
                let neighbors = this.adjacencyList.get(currentNode);
                neighbors.forEach(neighbor => {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor);
                    }
                });
            }
        }
    }

    bfsShortestPath(start, end) {
        let queue = [[start]];
        let visited = new Set();

        while (queue.length) {
            let path = queue.shift();
            let node = path[path.length - 1];

            if (!visited.has(node)) {
                let neighbors = this.adjacencyList.get(node);
                for (let neighbor of neighbors) {
                    let newPath = [...path, neighbor];
                    queue.push(newPath);
                    if (neighbor === end) {
                        return newPath;
                    }
                }
                visited.add(node);
            }
        }
        return null;
    }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.bfs('A'); // Logs A, B, C, D

// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
console.log(graph.bfsShortestPath('A', 'D')); // Logs [ 'A', 'B', 'D' ]
