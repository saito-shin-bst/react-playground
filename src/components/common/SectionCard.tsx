import { Card } from "@/components/ui/card";
import type React from "react";

interface SectionCardProps {
	title: string;
	children: React.ReactNode;
	className?: string;
}

export const SectionCard: React.FC<SectionCardProps> = ({
	title,
	children,
	className = "",
}) => {
	return (
		<Card className={`p-6 ${className}`}>
			<h2 className="text-2xl font-semibold mb-4">{title}</h2>
			<div className="space-y-4">{children}</div>
		</Card>
	);
};
