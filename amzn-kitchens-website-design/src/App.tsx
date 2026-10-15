import { useState } from "react";
import { Footer, Header, useHashRoute } from "./components/Layout";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

export default function App() {
  const route = useHashRoute();
  const [query, setQuery] = useState("");
  const match = route.match(/^product\/(.+)$/);

  return (
    <div className="flex min-h-screen flex-col bg-black font-[Manrope,system-ui,sans-serif] antialiased">
      <Header query={query} setQuery={setQuery} />
      {match ? <ProductPage id={decodeURIComponent(match[1])} /> : <Home query={query} />}
      <div className="flex-1" />
      <Footer />
    </div>
  );
}
