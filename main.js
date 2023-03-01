function rectanglePerimeter(length, width) {
    return 2 * (length + width);
    
    let length = 5;
    let width = 10;
    let perimeter = rectanglePerimeter(length, width);
    console.log(perimeter); // Output: 30
 
}

function checkEquality(num1, num2) {
    return num1 === num2;

    let num1 = 10;
    let num2 = 5;
    let result = checkEquality(num1, num2);
    console.log(result); // Output: false
 
    let num3 = 10;
    let num4 = 10;
    let result2 = checkEquality(num3, num4);
    console.log(result2); // Output: true

}
  
function getDayOfWeek(dayNum) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayNum];

    let dayNum = 2;
    let dayOfWeek = getDayOfWeek(dayNum);
    console.log(dayOfWeek); // Output: "Tuesday"

}
  