import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

const Book = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Book {id}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
