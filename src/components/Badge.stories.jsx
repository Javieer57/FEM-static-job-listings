import Badge from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    pseudo: { disabled: true },
  },
};

export const New = {
  args: {
    text: "isNew",
  },
};

export const Featured = {
  args: {
    text: "featured",
  },
};
