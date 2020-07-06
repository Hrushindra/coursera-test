var age=Number(prompt("Enter your age:"));
if(age<0)
{
	console.log("Age cannot be -ve");
}
if(age===21)
{
	console.log("Welcome, you can have free shots");
}
if(age%2!==0)
{
	console.log("Your age is an odd number");
}
if(age%Math.sqrt(age)===0)
{
	console.log("Your age is a perfect square");
}

console.log("numbers b/w -10 & 19");
var count = -10;
while(count<20){
	console.log(count);
		count++;	
}

console.log("even nos b/w 10-40");
count = 10;
while(count<41){
	if(count%2==0)
	{
		console.log(count);
	}
		count++;	
}

console.log("odd nos b/w 300-333");
count = 300;
while(count<334){
	if(count%2!=0)
	{
		console.log(count);
	}
		count++;	
}

console.log("numbers div by 3 & 5");
count = 5;
while(count<51){
	if(count%3==0)
	{
		console.log(count);
	}
	else if(count%5==0){
		console.log(count);
	}
		count++;	
}