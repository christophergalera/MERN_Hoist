// 1.
console.log(hello);                                   
var hello = 'world';    
// 1. prediction - undefined because variable not declared before console log
var hello
console.log(hello);
hello = 'world'

//2.
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//2. prediction - magnet
function test(){
    var needle= 'magnet';
    console.log(needle);
}
var needle 
needle = 'haystack'
test();

//3. 
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
print();
console.log(brendan);
//3. prediction - only okay only okay
function print(){
    brendan = 'only okay';
    console.log(brendan)
}
var brendan ;
brendan = 'super cool';
print();
console.log(brendan);

//4.
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//4. prediction - chicken half-chicken
function eat(){
    var food
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
var food 
food = 'chicken'
console.log(food);
eat()

//5.
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//5.  predictoin - chicken fish fish fish **mean is not a function 
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();
console.log(food);
console.log(food);

//6. 
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//Predicton - undefined, rock, r&b, disco
function rewind() {
    var genre
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
var genre
console.log(genre);
genre = "disco";
rewind();
console.log(genre);

//7. 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//7. Prediction - san jose , undefined , seattle , burbank, san jose 
function learn() {
    var dojo
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);

//8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//prediction - Chicago 65 ; error - dojo is a constant and cannot be changed
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));