

function ranker(favoriteFood, favoriteColor){
    var ranking = 5

    if( favoriteFood == 'sushi'){
        ranking = ranking + 4
    }
    if( favoriteFood == 'ramen'){
        ranking = ranking + 2
    }

    if( favoriteColor == 'blue' ){
        ranking = ranking + 3
    }

    if( favoriteColor == 'green' ){
        ranking = ranking + 1
    }

    if( favoriteColor == 'red' ){
        ranking = ranking - 7
    }

    return ranking
}


// it defines a test; just copy and paste this part and the end
it('my test', function(){

    var score = 'wtf'
    
    score = ranker('sushi', 'blue')
    console.log(score)

    score = ranker('crayons', 'red')
    console.log(score)
}) // end of test