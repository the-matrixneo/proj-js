function addFavoriteBook(bookname)
{
    if(!bookname.includes("great"));
    { addFavoriteBook.push(bookname);

    }

   function printFavoriteBooks(){
        console.log(`Favorite Books: ${favouritebooks.lenght}`);
        
    };
    for(let bookname of favouritebooks)
{
    console.log(bookname);
}   
}
var favourite =[];
addfavoriteBook(`a lala book`);
addfavoriteBook(`a great lover book`);
addfavoriteBook(`a gratest book`);
