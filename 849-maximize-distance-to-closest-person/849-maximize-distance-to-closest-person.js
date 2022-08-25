/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let seatsLength = seats.length
    let firstDistance = -1
    let lastDistance = -1
    let pointer = 0
    let maxDistance = 0;
    for (i=0; i<seatsLength; i++) {
        if(seats[i] == 1) {
            maxDistance = Math.max(i-pointer, maxDistance)
           pointer = i
            if(firstDistance==-1) {
                firstDistance = pointer-0
            }
         }
        if(i==seatsLength-1) {
            lastDistance = seatsLength-1-pointer
        }
    }
    return Math.max(lastDistance, firstDistance, parseInt(maxDistance/2) )
    
};