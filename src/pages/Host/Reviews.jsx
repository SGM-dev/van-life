import Rating from "../../assets/rating.png";
import { BsStarFill } from "react-icons/bs";

function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
  ];

  return (
    <main className=" justify-center py-6 font-inter">
      <div className="flex items-end">
        <h1 className=" text-3xl font-bold text-black-910">Reviews</h1>
        <p className="ml-2 text-base font-medium text-gray-510">
          Last{" "}
          <span className=" font-bold underline underline-offset-auto">
            30 days
          </span>
        </p>
      </div>
      <img src={Rating} alt="Review graph" className="mt-8 max-h-52" />
      {reviewsData.map((review) => (
        <div
          key={review.id}
          className=" flex flex-col gap-2 text-pretty border-b-2 py-3"
        >
          <div className="flex">
            {[...Array(review.rating)].map((_, i) => (
              <BsStarFill key={i} className="mr-1 text-xl text-orange-430" />
            ))}
          </div>
          <div className="flex gap-2 text-base">
            <p className=" font-medium">{review.name}</p>
            <p className=" text-gray-510">{review.date}</p>
          </div>
          <p className="text-base font-medium">{review.text}</p>
        </div>
      ))}
    </main>
  );
}

export default Reviews;
