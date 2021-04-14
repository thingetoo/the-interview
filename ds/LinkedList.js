// Reversing a linked list

function reverse(list) {
  let previousNode = null;
  let currentNode = list.head; // The current node
  let nextNode = null; // The next node in the list

  //Reversal
  while (currentNode != null) {
    nextNode = currentNode.nextElement;
    currentNode.nextElement = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }

  //Set the last element as the new head node
  list.head = previousNode;

}

/*
- Store the current node’s nextElement in next (line 22)
- Set current node’s nextElement to previous (reversal) (line 23)
- Make the current node the new previous so that it can be used for the next iteration (line 24)
- Use next to move on to the next node (line 25)
 */

// Detecting cycles

function detectLoop(list){
  let onestep = list.getHead();
  let twostep = list.getHead();
  while(onestep!=null && twostep!=null && twostep.nextElement!=null){
    onestep = onestep.nextElement // Moves one node at a time
    twostep = twostep.nextElement.nextElement // Moves two nodes at a time
    if (onestep == twostep){ // Loop exists
      return true;
    }
  }
  return false;
}

// Fast and slow pointer