import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

// Import the SVG file
import MonogramSVG from 'assets/monogram.svg';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  // No changes needed here
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <div className={classes(styles.monogram, className)} ref={ref} {...props}>
      {/* Render the imported SVG */}
      <MonogramSVG aria-hidden="true" />
    </div>
  );
});
