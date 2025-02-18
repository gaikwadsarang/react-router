import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="data:image/jpeg;base64,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"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
