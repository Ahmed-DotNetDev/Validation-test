function myFunction() {
    let Check;
    let age = Number(document.getElementById("age").value);
    if (isNaN(age) || age>100) {
        Check = "Invalid Input !";
    } else {
        Check = (age < 18) ? "Too young to vote" : "Old enough to vote";
    }
    document.getElementById("demo").innerHTML = Check;
}
