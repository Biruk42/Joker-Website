import React from "react";

const Videos = () => (
  <section className="bg-black/95 py-16 pt-24">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-green-500 mb-6">Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/zAGVQLHvwOY"
            title="Joker Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"></iframe>
        </div>
        {/* Add more video embeds as needed */}
      </div>
    </div>
  </section>
);

export default Videos;
