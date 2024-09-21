export const getPostColorFromCategory = (category: string): string => {
  switch (category) {
    case "Sustainability":
      return "lime";
    case "Innovation":
      return "cyan";
    case "Security":
      return "violet";
    default:
      return "fuchsia";
  }
};

export const getColorFromPositionType = (type: string): string => {
  switch (type) {
    case "Full Time":
      return "lime";
    case "Part Time":
      return "cyan";
    case "Contract":
      return "violet";
    default:
      return "fuchsia";
  }
};

export const getColorFromPositionCategory = (category: string): string => {
  switch (category) {
    case "Engineering":
      return "lime";
    case "Product":
      return "cyan";
    case "Marketing":
      return "violet";
    default:
      return "fuchsia";
  }
};
