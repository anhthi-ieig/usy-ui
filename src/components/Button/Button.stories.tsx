import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";
import { IButtonProps } from "./Button.interfaces";

export default {
  title: "Usy UI/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: IButtonProps) => (
  <Button {...args} />
);

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: "Hello World",
};
