import Label from "./Label";

export default {
  title: "Componentes/Label",
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
