import type React from "react";

interface PageLayoutProps {
	children: React.ReactNode;
	className?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
	children,
	className = "",
}) => {
	return (
		<div className={`container mx-auto py-8 px-4 max-w-4xl ${className}`}>
			{children}
		</div>
	);
};
