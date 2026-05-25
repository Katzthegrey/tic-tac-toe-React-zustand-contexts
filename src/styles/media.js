const sizes = {
  xs: 360,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const media = {
  down: {
    xs: `@media (max-width: ${sizes.xs}px)`,
    sm: `@media (max-width: ${sizes.sm}px)`,
    md: `@media (max-width: ${sizes.md}px)`,
    lg: `@media (max-width: ${sizes.lg}px)`,
    xl: `@media (max-width: ${sizes.xl}px)`,
  },
  up: {
    sm: `@media (min-width: ${sizes.sm + 1}px)`,
    md: `@media (min-width: ${sizes.md + 1}px)`,
    lg: `@media (min-width: ${sizes.lg + 1}px)`,
    xl: `@media (min-width: ${sizes.xl + 1}px)`,
  },
  between: {
    smMd: `@media (min-width: ${sizes.sm + 1}px) and (max-width: ${sizes.md}px)`,
    mdLg: `@media (min-width: ${sizes.md + 1}px) and (max-width: ${sizes.lg}px)`,
  },
};

export default media;
