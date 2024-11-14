import React from 'react';

const ImageWithOverlay = ({
  src,
  alt = "",
  className = "",
  imageClassName = "",
  overlayClassName = "",
  height = "h-[500px]",
  overlay = "bg-black/50",
  children,
  objectFit = "object-cover",
  objectPosition = "object-center",
  ...props
}) => {
  const baseClasses = "relative w-full overflow-hidden";
  const imageClasses = `w-full ${height} ${objectFit} ${objectPosition}`;
  const overlayClasses = `absolute inset-0 ${overlay}`;

  return (
    <div className={`${baseClasses} ${className}`} {...props}>
      <img
        src={src}
        alt={alt}
        className={`${imageClasses} ${imageClassName}`}
      />
      {(overlay || children) && (
        <div className={`${overlayClasses} ${overlayClassName}`}>
          {children}
        </div>
      )}
    </div>
  );
};

// Optional gradient overlay component
ImageWithOverlay.Gradient = ({
  direction = "to-r",
  from = "from-black",
  to = "to-transparent",
  opacity = "opacity-60",
  className = "",
  ...props
}) => {
  return (
    <div
      className={`absolute inset-0 bg-gradient-${direction} ${from} ${to} ${opacity} ${className}`}
      {...props}
    />
  );
};

export default ImageWithOverlay;