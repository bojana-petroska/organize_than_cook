export interface Recipe {
  id: number;
  title: string;
  imageUrl: string;
  instructions: string;
  ingredients: { 
    item: string;
    quantity: number; 
  }[];
}

export const mockRecipes: Recipe[] = [
  {
    id: 1,
    title: 'Spaghetti Bolognese',
    imageUrl: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Spaghetti-Bolognese-tall-FS-0204.jpg',
    instructions: '1. Heat oil in a pan. 2. Add onions and garlic, cook until softened. 3. Add ground beef and cook until browned. 4. Stir in tomato sauce and simmer for 20 minutes. 5. Cook spaghetti according to package instructions and serve with sauce.',
    ingredients: [
      { item: 'Spaghetti', quantity: 200 }, // 200 grams
      { item: 'Ground beef', quantity: 300 }, // 300 grams
      { item: 'Tomato sauce', quantity: 1 }, // 1 cup
      { item: 'Onion', quantity: 1 }, // 1 medium
      { item: 'Garlic cloves', quantity: 2 }, // 2 cloves
      { item: 'Olive oil', quantity: 2 } // 2 tablespoons
    ],
  },
  {
    id: 2,
    title: 'Chicken Curry',
    imageUrl: 'https://i1.wp.com/www.valerieskeepers.com/wp-content/uploads/2015/09/Butter-Chicken.jpg',
    instructions: '1. Marinate chicken with yogurt and spices. 2. Cook onions, garlic, and ginger in a pan. 3. Add marinated chicken and cook until done. 4. Stir in curry sauce and simmer for 15 minutes. 5. Serve with rice or naan.',
    ingredients: [
      { item: 'Chicken', quantity: 500 }, // 500 grams
      { item: 'Yogurt', quantity: 200 }, // 200 grams
      { item: 'Onion', quantity: 1 }, // 1 medium
      { item: 'Garlic cloves', quantity: 3 }, // 3 cloves
      { item: 'Ginger', quantity: 1 }, // 1 inch piece
      { item: 'Curry powder', quantity: 2 }, // 2 tablespoons
      { item: 'Tomato paste', quantity: 2 } // 2 tablespoons
    ],
  },
  {
    id: 3,
    title: 'Vegetable Stir Fry',
    imageUrl: 'https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2021/04/vegetable-stir-fry-resize-16.jpg',
    instructions: '1. Heat oil in a pan. 2. Add vegetables and stir-fry until tender. 3. Stir in sauce and cook for an additional 5 minutes. 4. Serve with rice or noodles.',
    ingredients: [
      { item: 'Bell peppers', quantity: 2 }, // 2 peppers
      { item: 'Broccoli florets', quantity: 200 }, // 200 grams
      { item: 'Carrots', quantity: 2 }, // 2 medium
      { item: 'Soy sauce', quantity: 3 }, // 3 tablespoons
      { item: 'Sesame oil', quantity: 1 }, // 1 tablespoon
      { item: 'Garlic cloves', quantity: 2 } // 2 cloves
    ],
  },
  {
    id: 4,
    title: 'Burrito',
    imageUrl: 'https://dinnerthendessert.com/wp-content/uploads/2018/08/Beef-Burrito-3.jpg',
    instructions: '1. Cook beef with spices until browned. 2. Warm tortillas. 3. Fill tortillas with beef, beans, rice, and cheese. 4. Roll up and serve with salsa.',
    ingredients: [
      { item: 'Tortillas', quantity: 4 }, // 4 tortillas
      { item: 'Ground beef', quantity: 300 }, // 300 grams
      { item: 'Black beans', quantity: 1 }, // 1 can (400 grams)
      { item: 'Cooked rice', quantity: 1 }, // 1 cup
      { item: 'Cheddar cheese', quantity: 100 }, // 100 grams
      { item: 'Salsa', quantity: 1 } // 1 cup
    ],
  },
  {
    id: 5,
    title: 'Risotto Verde',
    imageUrl: 'https://www.foodgal.com/wp-content/uploads/2016/04/GreenRisottoOverhead-683x1024.jpg',
    instructions: '1. Cook onions in oil until translucent. 2. Add rice and cook for 2 minutes. 3. Gradually add broth, stirring continuously until rice is tender. 4. Stir in peas and Parmesan cheese, cook until heated through.',
    ingredients: [
      { item: 'Arborio rice', quantity: 200 }, // 200 grams
      { item: 'Vegetable broth', quantity: 1 }, // 1 liter
      { item: 'Green peas', quantity: 100 }, // 100 grams
      { item: 'Parmesan cheese', quantity: 50 }, // 50 grams
      { item: 'Onion', quantity: 1 }, // 1 medium
      { item: 'Olive oil', quantity: 2 } // 2 tablespoons
    ],
  },
  {
    id: 6,
    title: 'Lentil Soup',
    imageUrl: 'https://www.cookingclassy.com/wp-content/uploads/2017/01/lentil-soup-2.jpg',
    instructions: '1. Sauté onions, carrots, and celery. 2. Add lentils and broth, and simmer until lentils are tender. 3. Stir in spices and cook for additional 5 minutes.',
    ingredients: [
      { item: 'Lentils', quantity: 200 }, // 200 grams
      { item: 'Vegetable broth', quantity: 1 }, // 1 liter
      { item: 'Carrots', quantity: 2 }, // 2 medium
      { item: 'Celery stalks', quantity: 2 }, // 2 stalks
      { item: 'Onion', quantity: 1 }, // 1 medium
      { item: 'Olive oil', quantity: 2 } // 2 tablespoons
    ],
  },
];
