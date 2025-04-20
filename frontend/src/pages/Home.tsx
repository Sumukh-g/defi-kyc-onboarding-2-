
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Globe, Shield } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-defi-secondary bg-clip-text text-transparent">
                Decentralized Identity & DeFi Wallet for Everyone
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Scan your ID, verify once, access everything.
              </p>
              <Link to="/create-wallet">
                <Button size="lg" className="text-lg px-8 py-6 rounded-xl bg-gradient-to-r from-primary to-defi-secondary hover:opacity-90 transition-opacity">
                  Get Started
                </Button>
              </Link>
            </div>
            
            <div className="w-full max-w-4xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-defi-primary/20 to-defi-secondary/20 blur-3xl rounded-3xl -z-10"></div>
              <div className="relative bg-card border border-border rounded-3xl p-8 shadow-lg overflow-hidden">
                <div className="absolute top-0 right-0 h-64 w-64 bg-defi-secondary/10 rounded-full -mr-32 -mt-32 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 h-64 w-64 bg-defi-primary/10 rounded-full -ml-32 -mb-32 blur-2xl"></div>
                
                <div className="w-full h-60 md:h-80 bg-muted rounded-xl relative">
                  {/* This would be a hero image or animation in a real implementation */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="h-24 w-24 md:h-32 md:w-32 rounded-full bg-gradient-to-r from-defi-primary to-defi-secondary flex items-center justify-center mb-4">
                      <div className="h-20 w-20 md:h-28 md:w-28 rounded-full bg-card flex items-center justify-center">
                        <div className="h-16 w-16 md:h-24 md:w-24 rounded-full bg-gradient-to-r from-defi-primary/20 to-defi-secondary/20 flex items-center justify-center">
                          <div className="h-12 w-12 md:h-20 md:w-20 rounded-full bg-card flex items-center justify-center">
                            <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-defi-secondary bg-clip-text text-transparent">DW</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base">Secure. Decentralized. Yours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our decentralized wallet combines security, convenience, and global accessibility in one seamless package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast KYC</h3>
              <p className="text-muted-foreground">
                One-time verification using government ID. Quick, secure, and hassle-free onboarding process.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Blockchain Security</h3>
              <p className="text-muted-foreground">
                Your identity and assets are secured with cutting-edge blockchain technology and cryptographic protocols.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Access</h3>
              <p className="text-muted-foreground">
                Access financial services from anywhere in the world. Banking for the unbanked, inclusive by design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-defi-primary to-defi-secondary rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Create your decentralized wallet today and join thousands of users accessing the future of finance.
            </p>
            <Link to="/create-wallet">
              <Button size="lg" className="bg-white text-defi-primary hover:bg-white/90 transition-colors">
                Create Your Wallet
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
