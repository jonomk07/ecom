var reviews = [1, 2, 3, 4, 5];
var rating = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var total = 0;
var i = 0;
while (i < rating.length) {
    total += rating[i];
    i++;
    console.log(i);
}
for (i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Review average = " + average);
