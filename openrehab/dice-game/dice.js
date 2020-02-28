/*
	
 */
var user_score = 0;
function roll1() {
	n = Math.floor((Math.random()*6)+1);
	$("#cube1").attr('class', 'show-d' + n);
	console.log('dice1 is: ' + n);
	return n;
}

function roll2(n2) {
	$("#cube2").attr('class', 'show-d' + n2);
	console.log('dice2 is: ' + n2);
	var n1 = roll1();

	if (n1==n2)
		$("#result").text('Draw');
	else if (n1>n2)
	{
		$("#result").text('Computer Win');
		user_score--;
		$("#score").text('Your score: ' + user_score);
	}
	else
	{
		$("#result").text('You Win');
		user_score++;
		$("#score").text('Your score: ' + user_score);
		playWinner();
	}
}

function resetGame(){
	user_score = 0;
	$("#result").text('');
	$("#score").text('Your score: 0');	
}