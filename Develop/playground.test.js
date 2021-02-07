
function promptCritera(){
    var min = window.prompt("Minimum number of things?")
    var max = window.prompt("Minimum number of things?")

    var uppercase = window.confirm("You wanna do uppercase?")
    var lowercase = window.confirm("You wanna do lowercase?")
    var numbers = window.confirm("You wanna do numbers?")
    var special = window.confirm("You wanna do special?")
    return generatePassword(min, max, uppercase, lowercase, numbers, special )
}



function randomWholeNumber(min, max){
    var bounds = max - min 
    var decimal = Math.random()
    var rand = min + Math.floor(decimal * bounds)
    return rand
}


function generatePassword(min, max, useUpper, useLower, useNumbers, useSpecial ){
    var password = ""

    //math floor -- math random *127 -- +1

    // let min = 8
    // let max = 32
    
    // get a random number between 0 and (max - min)
    let length = randomWholeNumber(min, max)
    


    var options = []

    if( useLower ){
        let offset = 97 // 97 = a
        for(let i = 0; i < 26; i++ ){
            options.push(String.fromCharCode(offset + i))
        }
    }

    if( useUpper ){
        let offset = 97 // 97 = a
        for(let i = 0; i < 26; i++ ){
            options.push(String.fromCharCode(offset + i).toUpperCase())
        }
    }
    

    if( useSpecial ){
        // magic for..of loop (goes through each letter)
        // (not the same as for..in loop)
        for(let specialChar of '!@#$%^&*()' ){
            options.push(specialChar)
        }
    }


    if( useNumbers ){
        // magic for..of loop (goes through each letter)
        // (not the same as for..in loop)
        for(let number of '0123456789' ){
            options.push(number)
        }
    }
    

    




    for (let i = 0; i < length; i++) {
        // now that I have an array options, i just need a random character in the options
        let index = randomWholeNumber(0, options.length)
        let char = options[index]
        password = password + char 
    }

    return password
}




// it defines a test; just copy and paste this part and the end
it('my test', function(){


    // var generated = 'huh?' 
    
    generated = generatePassword(8, 50, true, true, true, true)
    console.log(generated)

    generated = generatePassword(8, 500, true, true, true, true)
    console.log(generated)

    // generated = generatePassword(8, 32)
    // console.log(generated)

    // generated = generatePassword(8, 128)
    // console.log(generated)


}) // end of test