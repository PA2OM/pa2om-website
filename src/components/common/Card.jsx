import React from 'react';

const Card = ({
  children,
  className = "",
  hover = false,
  padding = "p-6",
  shadow = "shadow-lg",
  image,
  imageAlt = "",
  imageHeight = "h-48",
  title,
  subtitle,
  ...props
}) => {
  const baseClasses = "bg-white rounded-lg overflow-hidden";
  const hoverClasses = hover ? "transition-transform duration-300 hover:scale-105" : "";
  const shadowClasses = shadow ? `${shadow} hover:shadow-xl` : "";

  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${shadowClasses} ${className}`}
      {...props}
    >
      {image && (
        <div className={`w-full ${imageHeight} relative`}>
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className={padding}>
        {title && (
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
        )}
        {subtitle && (
          <p className="text-gray-600 text-sm mb-4">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
};

export default Card;