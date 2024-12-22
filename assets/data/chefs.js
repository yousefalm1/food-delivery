const chefs = [
  {
    id: 1,
    name: 'Chef Aya',
    title: 'Executive Chef',
    image:
      'https://cdn.discordapp.com/avatars/690198889982328846/e571154fc9abca7ca1e0abf56ac7e2c7?size=1024',
    bio: 'With over 15 years of culinary expertise, Chef Aya specializes in Asian-Mediterranean fusion cuisine.',
    stats: {
      dishes: 12,
      experience: '15+',
      rating: 4.9,
    },
    specialties: [
      {
        dishId: 11, // Spaghetti Carbonara
        restaurantId: 1,
      },
      {
        dishId: 20, // Butter Chicken
        restaurantId: 4,
      },
    ],
  },
  {
    id: 2,
    name: 'Chef Marco',
    title: 'Head Chef',
    image:
      'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&auto=format&fit=crop',
    bio: 'Passionate about Italian cuisine with a modern twist, Chef Marco brings 20 years of experience from Michelin-starred restaurants.',
    stats: {
      dishes: 15,
      experience: '20+',
      rating: 4.8,
    },
    specialties: [
      {
        dishId: 12, // Margherita Pizza
        restaurantId: 1,
      },
      {
        dishId: 14, // Kung Pao Chicken
        restaurantId: 2,
      },
    ],
  },
];

const influencers = [
  {
    id: 1,
    name: 'Sarah Al-Salem',
    title: 'Food Critic & Influencer',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop',
    bio: 'Kuwait-based food critic and social media influencer, known for discovering hidden culinary gems.',
    stats: {
      followers: '500K+',
      reviews: 200,
      rating: 4.7,
    },
    recommendations: [
      {
        dishId: 23, // Machboos
        restaurantId: 5,
      },
      {
        dishId: 17, // Beef Tacos
        restaurantId: 3,
      },
    ],
  },
];

export { chefs, influencers };
