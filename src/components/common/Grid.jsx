import React from 'react';

const Grid = ({
  children,
  className = "",
  as: Component = "div",
  cols = {
    default: 1,
    sm: null,
    md: null,
    lg: null,
    xl: null
  },
  gap = {
    x: 4,
    y: 4
  },
  responsive = true,
  alignItems = "stretch",
  justifyItems = "stretch",
  ...props
}) => {
  const generateGridCols = () => {
    const classes = [];
    
    if (cols.default) {
      classes.push(`grid-cols-${cols.default}`);
    }
    if (cols.sm) {
      classes.push(`sm:grid-cols-${cols.sm}`);
    }
    if (cols.md) {
      classes.push(`md:grid-cols-${cols.md}`);
    }
    if (cols.lg) {
      classes.push(`lg:grid-cols-${cols.lg}`);
    }
    if (cols.xl) {
      classes.push(`xl:grid-cols-${cols.xl}`);
    }
    
    return classes.join(' ');
  };

  const baseClasses = [
    'grid',
    generateGridCols(),
    `gap-x-${gap.x}`,
    `gap-y-${gap.y}`,
    `items-${alignItems}`,
    `justify-items-${justifyItems}`,
    responsive ? 'grid-flow-row-dense' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={baseClasses} {...props}>
      {children}
    </Component>
  );
};

// Predefined layouts
Grid.TwoColumns = ({ children, ...props }) => (
  <Grid
    cols={{ default: 1, md: 2 }}
    gap={{ x: 8, y: 8 }}
    {...props}
  >
    {children}
  </Grid>
);

Grid.ThreeColumns = ({ children, ...props }) => (
  <Grid
    cols={{ default: 1, md: 2, lg: 3 }}
    gap={{ x: 8, y: 8 }}
    {...props}
  >
    {children}
  </Grid>
);

Grid.FourColumns = ({ children, ...props }) => (
  <Grid
    cols={{ default: 1, sm: 2, lg: 4 }}
    gap={{ x: 8, y: 8 }}
    {...props}
  >
    {children}
  </Grid>
);

Grid.AutoFit = ({ 
  children, 
  minChildWidth = "16rem",
  ...props 
}) => (
  <div 
    className={`grid gap-8 grid-cols-[repeat(auto-fit,minmax(${minChildWidth},1fr))]`}
    {...props}
  >
    {children}
  </div>
);

export default Grid;