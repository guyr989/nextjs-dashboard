import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Collected",
    value: 4250,
    type: "collected",
  },
};

export const Pending: Story = {
  args: {
    title: "Pending",
    value: 3200,
    type: "pending",
  },
};

export const Invoices: Story = {
  args: {
    title: "Total Invoices",
    value: 15,
    type: "invoices",
  },
};

export const Customers: Story = {
  args: {
    title: "Total Customers",
    value: 32,
    type: "customers",
  },
};
