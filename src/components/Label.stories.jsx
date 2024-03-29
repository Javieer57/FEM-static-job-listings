import Label from "./Labels";

export default {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  args: {
    text: "HTML",
  },
};

export const Default = {};

export const Hover = {
  parameters: {
    pseudo: { hover: true },
  },
};
