import React from "react";
import stars from "../../assets/star.png";

const testimony = () => {
  const testimonial = [
    {
      id: "1",
      name: "Henry",
      image: "",
      stars: stars,
      description:
        "wow smooth-motion car rental service you desrve more than five stars. Thank you and the driver is superb, sucha smooth ride.",
      aosDelay: "0",
    },
    {
      id: "2",
      name: "Tonia",
      image: "",
      stars: stars,
      description:
        "I am glad I got to know about Smooth-Motion car rental services.They render the best service just has promised.",
      aosDelay: "500",
    },
    {
      id: "3",
      name: "Dolapo",
      image: "",
      stars: stars,
      description:
        "I just love them. Smooth-Motion car rental is the best car rental services that I have ever come across ",
      aosDelay: "1000",
    },
  ];

  return (
    <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
      <div className="container">
        {/* header */}
        <div className="space-y-4 py-14">
          <p
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl font-serif"
          >
            What Our Clients Say About Us
          </p>
          <p data-aos="fade-up" className="text-center sm:px-44">
            Our Clients has these to say...
          </p>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 text-black dark:text-white">
          {testimonial.map((data) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.name}
                className="card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100
                                dark:bg-white/20 sm:py-12 duration-300 rounded-lg"
              >
                <div className="grid place-item-center">
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="h-20 w-20 rounded-full"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{data.description}</p>
                <p className="font-semibold text-center">{data.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default testimony;
