import { ModeToggle } from "../ModeToggle";
import { SidebarTrigger } from "../ui/sidebar";

export const AppHeader = () => {
	return (
		<header className="w-full h-16 p-4 bg-background">
			<div className="flex items-center justify-between">
				<SidebarTrigger variant="outline" size="icon" className="size-9" />
				<ModeToggle />
			</div>
		</header>
	);
};
