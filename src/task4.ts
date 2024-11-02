{
    // task 4
    interface Book {
        title: string;
        author: string;
        pages: number;
        genre: string;
    }

    interface Magazine {
        title: string;
        issue: number;
        publisher: string;
        publisherDate: string;
    }

    type Publication = Book | Magazine;

    type CombinePublication = Book & Magazine;

    const myBook: Publication = {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        pages: 200,
        genre: "Fantasy",
    };

    const myMagazine: Publication = {
        title: "The Daily Bugle",
        issue: 12,
        publisher: "ABC Publications",
        publisherDate: "July 15, 2022",
    };

    const myCombinationPublication: CombinePublication = {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        pages: 200,
        genre: "Fantasy",
        issue: 12,
        publisher: "ABC Publications",
        publisherDate: "July 15, 2022",
    };

    console.log("myBook", myBook);
    console.log("myMagazine", myMagazine);
    console.log("myCombinationPublication", myCombinationPublication);
}
