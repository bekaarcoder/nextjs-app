import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

const home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("http://localhost:3000/api/books");
      let json = await response.json();
      setBooks(json);
    };
    fetchBooks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <div className="row">
              {books && books.length > 0 ? (
                books.map((book) => (
                  <div
                    className="col-md-4 d-flex justify-content-center my-3"
                    key={book.id}
                  >
                    <div className="card w-75">
                      <Link href={`/books/${book.id}`}>
                        <a>
                          <img
                            src={book.image}
                            className="card-img-top"
                            width="250"
                          />
                        </a>
                      </Link>

                      <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <h6 className="card-subtitle text-muted">
                          {book.author}
                        </h6>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-md-12">
                  <p className="lead">Loading books...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
