import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
	title: "UI/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: "default",
		children: "ボタン",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "セカンダリ",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		children: "アウトライン",
	},
};

export const Destructive: Story = {
	args: {
		variant: "destructive",
		children: "デストラクティブ",
	},
};

export const Ghost: Story = {
	args: {
		variant: "ghost",
		children: "ゴースト",
	},
};

export const Link: Story = {
	args: {
		variant: "link",
		children: "リンク",
	},
};

export const Small: Story = {
	args: {
		size: "sm",
		children: "小さいボタン",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
		children: "大きいボタン",
	},
};
