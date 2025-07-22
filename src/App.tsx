import { Route, Routes } from "react-router-dom";
import { AppHeader } from "./components/layout/AppHeader";
import { AppSidebar } from "./components/layout/AppSidebar";
import { ThemeProvider } from "./components/providers/ThemeProvider";
import { SidebarProvider } from "./components/ui/sidebar";
import { BasicPhilosophyPage } from "./pages/BasicPhilosophyPage";
import { HomePage } from "./pages/HomePage";
import { WhyReactPage } from "./pages/BasicPhilosophy/WhyReactPage";
import { ReactPrinciplePage } from "./pages/BasicPhilosophy/ReactPrinciplePage";
import {
	RenderCyclePage,
	StatePage,
	EventsPage,
	ConstraintsPage,
	VirtualDomPage,
	LifecyclePage,
	ComponentTypesPage,
	NextStepsPage,
} from "./pages/BasicPhilosophy";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<SidebarProvider className="w-full h-full">
				<AppSidebar />
				<main className="min-h-screen w-full bg-background">
					<AppHeader />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/basic-philosophy" element={<BasicPhilosophyPage />} />
						<Route path="/basic-philosophy/why-react" element={<WhyReactPage />} />
						<Route path="/basic-philosophy/react-principle" element={<ReactPrinciplePage />} />
						<Route path="/basic-philosophy/render-cycle" element={<RenderCyclePage />} />
						<Route path="/basic-philosophy/state" element={<StatePage />} />
						<Route path="/basic-philosophy/events" element={<EventsPage />} />
						<Route path="/basic-philosophy/constraints" element={<ConstraintsPage />} />
						<Route path="/basic-philosophy/virtual-dom" element={<VirtualDomPage />} />
						<Route path="/basic-philosophy/lifecycle" element={<LifecyclePage />} />
						<Route path="/basic-philosophy/component-types" element={<ComponentTypesPage />} />
						<Route path="/basic-philosophy/next-steps" element={<NextStepsPage />} />
					</Routes>
				</main>
			</SidebarProvider>
		</ThemeProvider>
	);
}

export default App;
