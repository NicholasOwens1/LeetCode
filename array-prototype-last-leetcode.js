// TODO Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element.
//  If there are no elements in the array, it should return -1.

Array.prototype.last = function(){
    return this.length > 0 ? this[this.length - 1] : -1;
};


/* Return using a ternary. If the length of the array is greater than 0, return the lenght of the array -1, this will
be the last element. If the lenght is not greater than 0, return -1.
 */