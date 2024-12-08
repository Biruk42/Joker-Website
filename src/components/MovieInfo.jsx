import React from 'react';
import { motion } from 'framer-motion';

const MovieInfo = () => {
  const movieDetails = [
    { label: 'Director', value: 'Todd Phillips' },
    { label: 'Starring', value: 'Joaquin Phoenix' },
    { label: 'Music', value: 'Hildur Guðnadóttir' },
    { label: 'Release Date', value: 'October 4, 2019' }
  ];

  return (
    <section className="bg-black/95 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-300 space-y-8"
        >
          <h2 className="text-3xl font-bold text-green-500 mb-6">About the Film</h2>
          
          <p className="text-lg leading-relaxed">
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. 
            Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile 
            attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck 
            begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {movieDetails.map((detail, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-4">
                <h3 className="text-green-500 font-semibold">{detail.label}</h3>
                <p className="text-gray-300">{detail.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MovieInfo;