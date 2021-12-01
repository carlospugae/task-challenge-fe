import { QueryClient, QueryClientProvider } from "react-query";
import Header from "components/Header";
import Footer from "components/Footer";

import Home from "screens/Home";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="h-screen flex flex-col font-sans leading-6">
      <div className="flex flex-1 flex-col bg-gray-100">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  </QueryClientProvider>
);

export default App;
