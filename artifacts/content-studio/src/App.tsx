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
