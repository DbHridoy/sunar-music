import { Switch, Route, Router as WouterRouter } from "wouter";
import "@/app/globals.css";

import HomePage from "@/app/page";
import LibraryPage from "@/app/library/page";
import PricingPage from "@/app/pricing/page";
import NotFound from "@/pages/not-found";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/library" component={LibraryPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <div className="bg-fx" aria-hidden="true" />
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <AppRoutes />
      </WouterRouter>
    </>
  );
}

export default App;
