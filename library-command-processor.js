function library(books) 
{
    //брой книги и заглавията им
    const numberBooks = parseInt(books[0]);
    const titles = books.slice(1, numberBooks + 1);

    //стъпка/индекс на преминаване
    let commandIndex = numberBooks + 1;

    //итерираме
    while (commandIndex < books.length) 
    {
        const command = books[commandIndex];

        //команда Lend
        if (command === "Lend") 
        {
            if (titles.length > 0) 
            {
                const lentBook = titles.shift();
                console.log(`${lentBook} book lent!`);
            } 
            else 
            {
                console.log("The library is empty");
            }
        }

        //команда Return
        else if (command.startsWith("Return")) 
        {
            const bookTitle = command.split(" ").slice(1).join(" ");
            titles.unshift(bookTitle);
        }

        //команда Exchange
        else if (command.startsWith("Exchange")) 
        {
            const [, startIndex, endIndex] = command.split(" ").map(Number);

            if (!isNaN(startIndex) && !isNaN(endIndex) && startIndex >= 0 && startIndex < titles.length && endIndex >= 0 && endIndex < titles.length) 
            {
                [titles[startIndex], titles[endIndex]] = [titles[endIndex], titles[startIndex]];
                console.log("Exchanged!");
            }
        }

        //команда Stop
        else if (command === "Stop") 
        {
            break;
        }

        commandIndex++;
    }

    //останалите книги
    if (titles.length > 0) 
    {
        console.log("Books left: " + titles.join(", "));
    } 
    else 
    {
        console.log("The library is empty");
    }
}

library(['3', 'Harry Potter', 'The Lord of the Rings', 'The Hunger Games', 'Lend', 'Stop', 'Exchange 0 1']);
library(['5', 'The Catcher in the Rye', 'To Kill a Mockingbird', 'The Great Gatsby', '1984', 'Animal Farm', 'Return Brave New World', 'Exchange 1 4', 'Stop']);
library(['3', 'The Da Vinci Code', 'The Girl with the Dragon Tattoo', 'The Kite Runner', 'Lend', 'Lend', 'Lend', 'Stop']);
