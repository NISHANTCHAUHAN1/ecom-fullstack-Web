import React from "react";

/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 py-10 mx-auto">
          <h1 className=" text-center text-3xl font-bold text-black">
            Testimonial
          </h1>
          <h2 className=" text-center text-2xl font-semibold mb-10">
            What our <span className="text-blue-gray-900">customers</span> are
            saying
          </h2>

          <div className="flex flex-wrap -m-4">
            {/* Testimonial 1 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGlqiOP9XB5rpL15HARFivK8GecYq5h-zpuEpL8sDOpY6OUQw_"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                  non laudantium reiciendis corrupti? Sint eveniet tempore
                  maiores ipsam at non tenetur illo explicabo qui voluptate.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-blue-gray-900 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Manoj Magar
                </h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9-bVwkL7fav9VIJucXLXgOq67672Fx9M4Uxvp2FKhBgxTG2PL"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt aliquid inventore id accusantium quae adipisci rem.
                  Facere sequi assumenda, voluptas quidem alias impedit
                  accusantium?
                </p>
                <span className="inline-block h-1 w-10 rounded bg-blue-gray-900 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  Nishchay
                </h2>
                <p className="text-gray-500">UI Develeoper</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT4y9o5N3SaX8OpmM6j4cJ2SUcl7d_FKa0AnHGczMnMVPQNVsKg"
                />
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime nihil assumenda explicabo modi a ab voluptatum
                  voluptates ad illo. Perspiciatis distinctio praesentium ad.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-blue-gray-900 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                  kishan gupta
                </h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
