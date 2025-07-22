import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { Link, useLocation } from "react-router-dom";

export const AppSidebar = () => {
	const pathname = useLocation();

	return (
		<Sidebar>
			<div className="w-full h-full py-2 pl-5 flex flex-col gap-3">
				<SidebarHeader>
					<div className="flex items-center justify-start">
						<h1 className="text-2xl font-bold">React Playground</h1>
					</div>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupContent>
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton asChild>
										<Link
											to="/"
											className={`${
												pathname.pathname === "/"
													? "bg-gray-200 text-gray-800"
													: ""
											}`}
										>
											ホーム
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>

								<Collapsible defaultOpen className="group/collapsible">
									<SidebarMenuItem>
										<CollapsibleTrigger asChild>
											<SidebarMenuButton
												asChild
												className={`${
													pathname.pathname === "/basic-philosophy"
														? "bg-gray-200 text-gray-800"
														: ""
												}`}
											>
												<Link to="/basic-philosophy">基本理念編</Link>
											</SidebarMenuButton>
										</CollapsibleTrigger>
										<CollapsibleContent>
											<SidebarMenuSub>
												<SidebarMenuSubItem>
													<SidebarMenuSubButton
														asChild
														className={`${
															pathname.pathname ===
															"/basic-philosophy/why-react"
																? "bg-gray-200 text-gray-800"
																: ""
														}`}
													>
														<Link
															to="/basic-philosophy/why-react"
															className="text-xs"
														>
															なぜReactが生まれたのか
														</Link>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
												<SidebarMenuSubItem>
													<SidebarMenuSubButton
														asChild
														className={`${
															pathname.pathname ===
															"/basic-philosophy/react-principle"
																? "bg-gray-200 text-gray-800"
																: ""
														}`}
													>
														<Link
															to="/basic-philosophy/react-principle"
															className="text-xs"
														>
															Reactの主義
														</Link>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
												<SidebarMenuSubItem>
													<SidebarMenuSubButton
														asChild
														className={`${
															pathname.pathname ===
															"/basic-philosophy/render-cycle"
																? "bg-gray-200 text-gray-800"
																: ""
														}`}
													>
														<Link
															to="/basic-philosophy/render-cycle"
															className="text-xs"
														>
															Reactの描画サイクル
														</Link>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
												<SidebarMenuSubItem>
													<SidebarMenuSubButton
														asChild
														className={`${
															pathname.pathname ===
															"/basic-philosophy/state"
																? "bg-gray-200 text-gray-800"
																: ""
														}`}
													>
														<Link
															to="/basic-philosophy/state"
															className="text-xs"
														>
															状態（State）とは何か
														</Link>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
												<SidebarMenuSubItem>
													<SidebarMenuSubButton
														asChild
														className={`${
															pathname.pathname ===
															"/basic-philosophy/events"
																? "bg-gray-200 text-gray-800"
																: ""
														}`}
													>
														<Link
															to="/basic-philosophy/events"
															className="text-xs"
														>
															イベント処理とReact
														</Link>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
												<SidebarMenuSubItem>
													<SidebarMenuSubButton
														asChild
														className={`${
															pathname.pathname ===
															"/basic-philosophy/constraints"
																? "bg-gray-200 text-gray-800"
																: ""
														}`}
													>
														<Link
															to="/basic-philosophy/constraints"
															className="text-xs"
														>
															Reactの制約と理由
														</Link>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
												<SidebarMenuSubItem>
													<SidebarMenuSubButton
														asChild
														className={`${
															pathname.pathname ===
															"/basic-philosophy/virtual-dom"
																? "bg-gray-200 text-gray-800"
																: ""
														}`}
													>
														<Link
															to="/basic-philosophy/virtual-dom"
															className="text-xs"
														>
															Virtual DOMの仕組み
														</Link>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
												<SidebarMenuSubItem>
													<SidebarMenuSubButton
														asChild
														className={`${
															pathname.pathname ===
															"/basic-philosophy/lifecycle"
																? "bg-gray-200 text-gray-800"
																: ""
														}`}
													>
														<Link
															to="/basic-philosophy/lifecycle"
															className="text-xs"
														>
															コンポーネントの生存期間
														</Link>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
												<SidebarMenuSubItem>
													<SidebarMenuSubButton
														asChild
														className={`${
															pathname.pathname ===
															"/basic-philosophy/component-types"
																? "bg-gray-200 text-gray-800"
																: ""
														}`}
													>
														<Link
															to="/basic-philosophy/component-types"
															className="text-xs"
														>
															関数 vs クラスコンポーネント
														</Link>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
												<SidebarMenuSubItem>
													<SidebarMenuSubButton
														asChild
														className={`${
															pathname.pathname ===
															"/basic-philosophy/next-steps"
																? "bg-gray-200 text-gray-800"
																: ""
														}`}
													>
														<Link
															to="/basic-philosophy/next-steps"
															className="text-xs"
														>
															次のステップへ
														</Link>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
											</SidebarMenuSub>
										</CollapsibleContent>
									</SidebarMenuItem>
								</Collapsible>

								<SidebarMenuItem>
									<SidebarMenuButton asChild>
										<Link to="/features">機能編</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
								<SidebarMenuItem>
									<SidebarMenuButton asChild>
										<Link to="/practice">実践編</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
				<SidebarFooter />
			</div>
		</Sidebar>
	);
};
