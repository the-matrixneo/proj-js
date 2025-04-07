let age = 15
if (age < 6){
 message = `free ticket`
}
else if ( age<18)
{
    message = `child discount`
}
else if ( age < 27)
 {
    message =`student discount`
}
else if ( age < 67)
{
    message = `full price`
}
else 
{
   message = `senoir citizen discount`
}
console.log(message)