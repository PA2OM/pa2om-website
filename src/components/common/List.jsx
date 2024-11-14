import React from 'react';

const bulletStyles = {
  dot: "•",
  dash: "—",
  arrow: "→",
  check: "✓",
  none: ""
};

const List = ({
  items = [],
  className = "",
  bulletStyle = "dot",
  bulletColor = "text-blue-500",
  textColor = "text-gray-600",
  spacing = "space-y-2",
  textSize = "text-sm",
  bulletSize = "text-sm",
  customBullet,
  renderItem,
  ...props
}) => {
  const getBullet = () => {
    if (customBullet) return customBullet;
    return bulletStyles[bulletStyle] || bulletStyles.dot;
  };

  return (
    <ul className={`${spacing} ${className}`} {...props}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          {bulletStyle !== 'none' && (
            <span className={`${bulletColor} ${bulletSize} mr-2 flex-shrink-0`}>
              {getBullet()}
            </span>
          )}
          <span className={`${textColor} ${textSize}`}>
            {renderItem ? renderItem(item, index) : item}
          </span>
        </li>
      ))}
    </ul>
  );
};

// Specialized variants
List.Checklist = (props) => (
  <List bulletStyle="check" bulletColor="text-green-500" {...props} />
);

List.NumberedList = ({ items, ...props }) => (
  <List
    items={items}
    bulletStyle="none"
    renderItem={(item, index) => (
      <div className="flex items-start">
        <span className="text-blue-500 mr-2 font-medium">{index + 1}.</span>
        <span>{item}</span>
      </div>
    )}
    {...props}
  />
);

List.ArrowList = (props) => (
  <List bulletStyle="arrow" bulletColor="text-blue-500" {...props} />
);

export default List;