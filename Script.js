//write first method
    function sleep_in (weekday,vacation) {
        if(weekday && vacation){
            return true;
        }
        if (weekday){
            return false;
        } else {
            return true;
        }

    }
     function nextOne(a_smile, b_smile) {
            if(a_smile != b_smile){
                return false;
            } else {
                return true;
            }
    }

    function string_times(word, number){
        var together = "";
        for(var i = 0; i < number; i++){
            together += word;
        }
        return together;
    }


        function front_times(word, number){
            var front = word.substring(0,3);
            var answer = "";
            for(var i = 0; i < number; i++){
                answer += front;
            }

            return answer;


        }

        function string_bits(word) {
            var answer = "";
            for (var i = 0; i < word.length; i = i + 2) {
                answer = answer + word[i];
            }
            return answer;
        }

        function caughtSpeeding(speed, birthday) {

            if(birthday == true){
                speed = speed - 5;
            }
            if(speed <= 60){
                return 0;
            }
            if(speed > 61 && speed <= 81){
                return 1;
            }
            if(speed >= 81){
                return 2;
            }
}

        function fizz_buzz(Int){
    var number = Int;
    var Fizz = "Fizz";
    var Buzz = "Buzz";
    var FizzBuzz = "FizzBuzz";
    if(number %3 == 0 && number %5 == 0){
        return FizzBuzz;
    }

    if(number %3 == 0){
        return Fizz;
    }
    if(number %5 == 0){
        return Buzz;

    }else{
        return Int + "!";
    }


}

        function teaParty(tea, candy){
            if(candy < 5 || tea < 5){
                return 0;
            }
            if (candy / tea >= 2 || tea / candy >= 2) {
                return 2;
            }

            if(candy >= 5 && tea >= 5){
                return 1;
            }

        }

        function blackjack(firstnumber, secondnumber){
            if(firstnumber > 21 && secondnumber <= 21){
                return secondnumber;
            }
            if(secondnumber > 21 && firstnumber <= 21){
                return firstnumber;
            }
            if(firstnumber > 21 && secondnumber > 21){
                return 0;
            }
            if(21 - firstnumber < 21 - secondnumber) {
                return firstnumber;
            }else{
                return secondnumber;
            }

        }

         function loneSum(a, b, c) {
    var none = "";

    if(a == c && b == c){
        return 0 + none;
    }
    if(a == c && b != c){
        return b + none;
    }
    if(b == c && a != b){
        return a + none;
    }
    if (a == b && b != c) {
        return c + none;
    }

    return a + b + c;

}



}


 function tester() {

    document.getElementById("output").innerHTML = sleep_in(false, false);
    document.getElementById("output2").innerHTML = nextOne(true, true);
    documnet.getElementById("output3").innerHTML = string_times("bros", 4);
    document.getElementById("output4").innerHTML = front_times("jagwire", 4);
    document.getElementById("output5").innerHTML = string_bits("brother");
    document.getElementById("output6").innerHTML = caughtSpeeding("64, false")
    document.getElementById("output7").innerHTML = fizz_buzz(7);
    document.getElementById("output8").innerHTML = teaParty(6, 6);
    document.getElementById("output9").innerHTML = blackjack(21, 30);
    document.getElementById("output10").innerHTML = loneSum(12, 25, 12);
}
