'use client';
import { Recipe, mockRecipes } from '@/app/data/MockRecipes';
import React from 'react';

interface RecipePageDetails {
    params: {
        id: string;
    }
}

const RecipePage: React.FC<RecipePageDetails> = ({ params }) => {
    const { id } = params;
    const recipe = mockRecipes.find((r) => r.id === Number(id));

    if (!recipe) {
        return <div>Recipe not found</div>
    }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.imageUrl}
        alt={recipe.title}
        className="w-full h-64 object-cover mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipePage;
