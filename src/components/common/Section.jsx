import React from 'react';

const Section = ({
  children,
  className = "",
  bgColor = "bg-white",
  containerWidth = "max-w-7xl",
  spacing = "py-20",
  title,
  subtitle,
  titleColor = "text-gray-900",
  subtitleColor = "text-gray-600",
  titleAlign = "text-center",
  titleSize = "text-4xl",
  subtitleSize = "text-xl",
  titleMaxWidth = "max-w-4xl",
  withContainer = true,
  ...props
}) => {
  const sectionClasses = `${bgColor} ${spacing} ${className}`;
  const containerClasses = `container mx-auto px-4 ${containerWidth}`;
  const titleClasses = `${titleSize} font-bold ${titleColor} ${titleAlign} mb-4`;
  const subtitleClasses = `${subtitleSize} ${subtitleColor} ${titleAlign} mb-12`;

  const content = (
    <>
      {(title || subtitle) && (
        <div className={`${titleMaxWidth} mx-auto mb-12`}>
          {title && <h2 className={titleClasses}>{title}</h2>}
          {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
        </div>
      )}
      {children}
    </>
  );

  return (
    <section className={sectionClasses} {...props}>
      {withContainer ? (
        <div className={containerClasses}>{content}</div>
      ) : (
        content
      )}
    </section>
  );
};

export default Section;