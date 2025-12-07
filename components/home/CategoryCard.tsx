import React from 'react';

// Define the shape of the category object
interface Category {
  img: string;
  label: string;
  qty: string | number;
}

// Define the props for the component
interface CategoryCardProps {
  category: Category;
  className?: string; // Allow passing extra classes (like margins) from parent
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, className = '' }) => {
  return (
    <div className={`group rounded-xl overflow-clip scroll-fade-up ${className}`}>
      {/* Image Container */}
      <div className="h-[250px] overflow-clip">
        {/* Using standard <img> tag for direct compatibility. 
          For better performance in Next.js, consider using <Image fill ... /> 
        */}
        <img
          src={category.img}
          alt={category.label}
          className="w-full h-full object-cover aspect-auto group-hover:scale-110 duration-500"
        />
      </div>

      {/* Text Content */}
      <div className="p-5 bg-gray-50 text-center font-semibold group-hover:bg-[#ec6b81] space-y-1 duration-500">
        <p className="text-sm text-gray-600 group-hover:text-gray-100 capitalize">
          {category.qty} products
        </p>
        <p className="text-2xl group-hover:text-white capitalize">
          {category.label}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;