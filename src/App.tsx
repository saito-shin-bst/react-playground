import { AppHeader } from "./components/layout/AppHeader";
import { AppSidebar } from "./components/layout/AppSidebar";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<SidebarProvider className="w-full h-full">
				<AppSidebar />
				<main className="min-h-screen w-full bg-background">
					<AppHeader />
					<div className="flex flex-col items-center justify-center p-4">
						<h1 className="text-2xl font-bold">ようこそ</h1>
					</div>
				</main>
			</SidebarProvider>
		</ThemeProvider>
	);
}

export default App;
