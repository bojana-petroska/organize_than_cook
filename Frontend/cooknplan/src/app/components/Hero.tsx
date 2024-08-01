import React from 'react';
import { mockRecipes } from '../data/MockRecipes';

export const Hero: React.FC = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">plan and cook your next meal</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockRecipes.map(recipe => (
                <div key={recipe.id} href={`/recipe/${recipe.id}`} className="bg-white rounded shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                    <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-48 object-cover"></img>
                    <div className="p-4">
                    <h2 className="text-xl font-bold">{recipe.title}</h2>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
