import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout";
import { AdminLayout } from "@/components/admin-layout";
import { ThemeProvider } from "@/components/theme-provider";

// Public Pages
import { Home } from "@/pages/home";
import { News } from "@/pages/news";
import { NewsArticlePage } from "@/pages/news-article";
import { Games } from "@/pages/games";
import { Guides } from "@/pages/guides";
import { Cheats } from "@/pages/cheats";
import { Vehicles } from "@/pages/vehicles";
import { Weapons } from "@/pages/weapons";
import { Maps } from "@/pages/maps";
import { Gear } from "@/pages/gear";
import { About } from "@/pages/about";
import { Contact } from "@/pages/contact";
import { PrivacyPolicy } from "@/pages/privacy";
import { Terms } from "@/pages/terms";
import { Disclaimer } from "@/pages/disclaimer";
import { CookiePolicy } from "@/pages/cookie-policy";
import { DMCA } from "@/pages/dmca";
import { Search } from "@/pages/search";
import { CategoryPage } from "@/pages/category";
import { TagPage } from "@/pages/tag";

// Admin Pages
import { AdminLogin } from "@/pages/secure-admin-portal/login";
import { AdminDashboard } from "@/pages/secure-admin-portal/dashboard";
import { AdminArticles } from "@/pages/secure-admin-portal/articles";
import { AdminArticleEditor } from "@/pages/secure-admin-portal/article-editor";
import { AdminCategories } from "@/pages/secure-admin-portal/categories";
import { AdminTags } from "@/pages/secure-admin-portal/tags";
import { AdminMedia } from "@/pages/secure-admin-portal/media";
import { AdminSettings } from "@/pages/secure-admin-portal/settings";
import { AdminHomepage } from "@/pages/secure-admin-portal/homepage";

// GTA SEO Pages
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
import { GTA6EditionsPage } from "@/pages/gta6/editions";
import { GTA6OnlinePage } from "@/pages/gta6/online";
import { GTA6MapSizePage } from "@/pages/gta6/map-size";
import { GTA6StoryPage } from "@/pages/gta6/story";
import { GTA6EasterEggsPage } from "@/pages/gta6/easter-eggs";
import { GTA6DownloadSizePage } from "@/pages/gta6/download-size";

import { GTA5MoneyCheatPage } from "@/pages/gta5/money-cheat";
import { GTA5BestCarsPage } from "@/pages/gta5/best-cars";
import { GTA5OnlineMoneyPage } from "@/pages/gta5/online-money";
import { GTA5SysReqPage } from "@/pages/gta5/system-requirements";
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

function PublicRoutes() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/category/:slug" component={CategoryPage} />
        <Route path="/tag/:slug" component={TagPage} />
        
        <Route path="/news" component={News} />
        <Route path="/news/:slug" component={NewsArticlePage} />
        
        <Route path="/guides" component={Guides} />
        <Route path="/guides/:slug" component={NewsArticlePage} />
        
        <Route path="/games" component={Games} />
        <Route path="/cheats" component={Cheats} />
        <Route path="/vehicles" component={Vehicles} />
        <Route path="/weapons" component={Weapons} />
        <Route path="/maps" component={Maps} />
        <Route path="/gear" component={Gear} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/terms" component={Terms} />
        <Route path="/disclaimer" component={Disclaimer} />
        <Route path="/cookie-policy" component={CookiePolicy} />
        <Route path="/dmca" component={DMCA} />

        <Route path="/gta6/release-date" component={GTA6ReleaseDatePage} />
        <Route path="/gta6/characters" component={GTA6CharactersPage} />
        <Route path="/gta6/map" component={GTA6MapPage} />
        <Route path="/gta6/map-size" component={GTA6MapSizePage} />
        <Route path="/gta6/price" component={GTA6PricePage} />
        <Route path="/gta6/platforms" component={GTA6PlatformsPage} />
        <Route path="/gta6/gameplay" component={GTA6GameplayPage} />
        <Route path="/gta6/system-requirements" component={GTA6SysReqPage} />
        <Route path="/gta6/trailer" component={GTA6TrailerPage} />
        <Route path="/gta6/pre-order" component={GTA6PreOrderPage} />
        <Route path="/gta6/trailer-music" component={GTA6TrailerMusicPage} />
        <Route path="/gta6/editions" component={GTA6EditionsPage} />
        <Route path="/gta6/online" component={GTA6OnlinePage} />
        <Route path="/gta6/story" component={GTA6StoryPage} />
        <Route path="/gta6/easter-eggs" component={GTA6EasterEggsPage} />
        <Route path="/gta6/download-size" component={GTA6DownloadSizePage} />

        <Route path="/gta5/money-cheat" component={GTA5MoneyCheatPage} />
        <Route path="/gta5/best-cars" component={GTA5BestCarsPage} />
        <Route path="/gta5/online-money" component={GTA5OnlineMoneyPage} />
        <Route path="/gta5/system-requirements" component={GTA5SysReqPage} />

        <Route path="/gta-games-in-order" component={GTAGamesInOrderPage} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function AdminRoutes() {
  return (
    <AdminLayout>
      <Switch>
        <Route path="/secure-admin-portal/dashboard" component={AdminDashboard} />
        <Route path="/secure-admin-portal/articles" component={AdminArticles} />
        <Route path="/secure-admin-portal/articles/new" component={AdminArticleEditor} />
        <Route path="/secure-admin-portal/articles/:id/edit" component={AdminArticleEditor} />
        <Route path="/secure-admin-portal/categories" component={AdminCategories} />
        <Route path="/secure-admin-portal/tags" component={AdminTags} />
        <Route path="/secure-admin-portal/media" component={AdminMedia} />
        <Route path="/secure-admin-portal/settings" component={AdminSettings} />
        <Route path="/secure-admin-portal/homepage" component={AdminHomepage} />
        <Route component={NotFound} />
      </Switch>
    </AdminLayout>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/secure-admin-portal" component={AdminLogin} />
      <Route path="/secure-admin-portal/*" component={AdminRoutes} />
      <Route path="/*" component={PublicRoutes} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;