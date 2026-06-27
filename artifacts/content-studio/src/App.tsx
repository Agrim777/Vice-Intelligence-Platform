import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout";

import { Home } from "@/pages/home";
import { News } from "@/pages/news";
import { Games } from "@/pages/games";
import { Guides } from "@/pages/guides";
import { Cheats } from "@/pages/cheats";
import { Vehicles } from "@/pages/vehicles";
import { Weapons } from "@/pages/weapons";
import { Maps } from "@/pages/maps";
import { Gear } from "@/pages/gear";

import { Home as AdminHome } from "@/pages/admin/home";
import { Generate } from "@/pages/generate";
import { BulkGenerate } from "@/pages/bulk-generate";
import { Articles } from "@/pages/articles";
import { ArticleDetail } from "@/pages/article-detail";

// GTA 6 dedicated pages
import { GTA6ReleaseDatePage } from "@/pages/gta6/release-date";
import { GTA6CharactersPage } from "@/pages/gta6/characters";
import { GTA6MapPage } from "@/pages/gta6/map";
import { GTA6PricePage } from "@/pages/gta6/price";
import { GTA6PlatformsPage } from "@/pages/gta6/platforms";
import { GTA6GameplayPage } from "@/pages/gta6/gameplay";
import { GTA6SysReqPage } from "@/pages/gta6/system-requirements";
import { GTA6TrailerPage } from "@/pages/gta6/trailer";
import { GTA6PreOrderPage } from "@/pages/gta6/pre-order";
import { GTA6TrailerMusicPage } from "@/pages/gta6/trailer-music";

// GTA 5 dedicated pages
import { GTA5MoneyCheatPage } from "@/pages/gta5/money-cheat";
import { GTA5BestCarsPage } from "@/pages/gta5/best-cars";
import { GTA5OnlineMoneyPage } from "@/pages/gta5/online-money";
import { GTA5SysReqPage } from "@/pages/gta5/system-requirements";

// Misc SEO pages
import { GTAGamesInOrderPage } from "@/pages/gta-games-in-order";

import NotFound from "@/pages/not-found";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function Router() {
  return (
    <Layout>
      <Switch>
        {/* Public gamer site */}
        <Route path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/games" component={Games} />
        <Route path="/guides" component={Guides} />
        <Route path="/cheats" component={Cheats} />
        <Route path="/vehicles" component={Vehicles} />
        <Route path="/weapons" component={Weapons} />
        <Route path="/maps" component={Maps} />
        <Route path="/gear" component={Gear} />

        {/* GTA 6 SEO pages */}
        <Route path="/gta6/release-date" component={GTA6ReleaseDatePage} />
        <Route path="/gta6/characters" component={GTA6CharactersPage} />
        <Route path="/gta6/map" component={GTA6MapPage} />
        <Route path="/gta6/price" component={GTA6PricePage} />
        <Route path="/gta6/platforms" component={GTA6PlatformsPage} />
        <Route path="/gta6/gameplay" component={GTA6GameplayPage} />
        <Route path="/gta6/system-requirements" component={GTA6SysReqPage} />
        <Route path="/gta6/trailer" component={GTA6TrailerPage} />
        <Route path="/gta6/pre-order" component={GTA6PreOrderPage} />
        <Route path="/gta6/trailer-music" component={GTA6TrailerMusicPage} />

        {/* GTA 5 SEO pages */}
        <Route path="/gta5/money-cheat" component={GTA5MoneyCheatPage} />
        <Route path="/gta5/best-cars" component={GTA5BestCarsPage} />
        <Route path="/gta5/online-money" component={GTA5OnlineMoneyPage} />
        <Route path="/gta5/system-requirements" component={GTA5SysReqPage} />

        {/* Misc SEO pages */}
        <Route path="/gta-games-in-order" component={GTAGamesInOrderPage} />

        {/* Admin / Content Studio */}
        <Route path="/admin" component={AdminHome} />
        <Route path="/admin/generate" component={Generate} />
        <Route path="/admin/bulk" component={BulkGenerate} />
        <Route path="/admin/articles" component={Articles} />
        <Route path="/admin/articles/:id" component={ArticleDetail} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
