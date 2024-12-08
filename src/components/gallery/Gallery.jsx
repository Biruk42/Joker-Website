import React from "react";

const Gallery = () => (
  <section className="bg-black/95 py-16 pt-24">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-green-500 mb-6">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <img
          src="/images/jok-1.jpg"
          alt="Gallery Image 1"
          className="w-full h-auto"
        />
        <img
          src="/images/jok-2.jpg"
          alt="Gallery Image 2"
          className="w-full h-auto"
        />
        <img
          src="/images/jok-3.jpg"
          alt="Gallery Image 3"
          className="w-full h-auto"
        />
        <img
          src="/images/jok-1.jpg"
          alt="Gallery Image 1"
          className="w-full h-auto"
        />
        <img
          src="/images/jok-2.jpg"
          alt="Gallery Image 2"
          className="w-full h-auto"
        />
        <img
          src="/images/jok-3.jpg"
          alt="Gallery Image 3"
          className="w-full h-auto"
        />
        <img
          src="/images/jok-1.jpg"
          alt="Gallery Image 1"
          className="w-full h-auto"
        />
        <img
          src="/images/jok-2.jpg"
          alt="Gallery Image 2"
          className="w-full h-auto"
        />
        <img
          src="/images/jok-3.jpg"
          alt="Gallery Image 3"
          className="w-full h-auto"
        />
      </div>
    </div>
  </section>
);

export default Gallery;
