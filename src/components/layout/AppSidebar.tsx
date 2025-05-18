import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
} from "@/components/ui/sidebar";
import viteLogo from "/vite.svg";

export const AppSidebar = () => {
	return (
		<Sidebar>
			<div className="w-full h-full py-2 pl-5 flex flex-col gap-3">
				<SidebarHeader>
					<div className="flex items-center justify-start">
						<img src={viteLogo} alt="OmoiCode" width={32} height={32} />
						<h1 className="text-2xl font-bold ml-4">OmoiCode</h1>
					</div>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup />
					<SidebarGroup />
				</SidebarContent>
				<SidebarFooter />
			</div>
		</Sidebar>
	);
};
