
//syntax- declare function keyword, name-> greet ()-syntax followed by and next ---> {} insdide th braces we write the logic//

function greet(){
    console.log('hello chinni');
    //no need to add a semicolon at the end of the function//
}

greet()

//functions can have inputs// here rating is the paramater so we are using this inside the logic//
function movieResponse(rating){
    console.log('good' + rating);
}
//Now for 6 is the arugument,  that we use we need to pass the value//
movieResponse(5)
movieResponse(6)

//A function can have multiple parameters//
function movieResponse(rating, Acting){
    console.log('good' + rating + ' ' + Acting);
}

movieResponse(5, 'Normal')
movieResponse(6, 'Superb')

