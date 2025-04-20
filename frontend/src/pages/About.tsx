
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BadgeCheck, Goal, HandCoins, UsersRound } from "lucide-react";

const About = () => {
  // Mock team members data
  const teamMembers = [
    {
      name: "Alex Rivera",
      role: "Founder & CEO",
      bio: "Blockchain expert with 10+ years in fintech",
      avatar: ""
    },
    {
      name: "Sophia Chen",
      role: "CTO",
      bio: "Security specialist and former cryptography researcher",
      avatar: ""
    },
    {
      name: "Marcus Johnson",
      role: "Product Lead",
      bio: "UX specialist focused on accessibility and inclusion",
      avatar: ""
    },
    {
      name: "Elena Patel",
      role: "Blockchain Developer",
      bio: "Smart contract expert and DeFi innovator",
      avatar: ""
    }
  ];

  const sdgAlignments = [
    {
      goal: "No Poverty",
      description: "By giving people a wallet to receive funds and grow savings",
      icon: HandCoins
    },
    {
      goal: "Zero Hunger",
      description: "By enabling access to relief, aid, and food subsidies",
      icon: Goal
    },
    {
      goal: "Decent Work & Growth",
      description: "By opening up global economic participation",
      icon: BadgeCheck
    },
    {
      goal: "Reduced Inequality",
      description: "By banking the unbanked with digital identity",
      icon: UsersRound
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Infinite: Banking the Unbanked</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            We believe that with just a government-issued ID, any human on Earth should be able to join the digital economy. 
            Even if they can't read, write, or visit a bank — they should still be able to own a wallet, receive aid, and participate in modern finance.
          </p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">The Global Financial Inclusion Challenge</h2>
          
          <div className="space-y-6 text-muted-foreground">
            <p>
              According to the World Bank's 2022 Global Findex Report, over 1.4 billion people worldwide are unbanked — 
              they have no access to formal financial services like savings, credit, or insurance.
            </p>
            <p>
              Of these, an estimated 600 to 850 million people lack a government-issued ID, making it impossible to open 
              even a basic bank account due to strict KYC (Know Your Customer) requirements.
            </p>
            <p>
              However, 600 to 800 million people in remote or underserved regions have government-issued IDs but lack 
              access, digital literacy, or awareness to onboard into the global financial system.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Solution</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "No Paperwork", description: "Digital verification eliminates physical documentation" },
              { title: "No Banking App", description: "Direct access without traditional banking infrastructure" },
              { title: "No Financial Knowledge", description: "Intuitive design for universal accessibility" },
              { title: "Self-Custodied Wallet", description: "Full control and ownership of digital identity" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignments */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Sustainable Development Goals Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sdgAlignments.map((sdg, index) => {
              const Icon = sdg.icon;
              return (
                <div 
                  key={index} 
                  className="bg-card border border-border rounded-xl p-8 flex items-center space-x-4 hover:shadow-md transition-shadow"
                >
                  <Icon className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{sdg.goal}</h3>
                    <p className="text-muted-foreground">{sdg.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4 border-2 border-primary">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="bg-gradient-to-r from-defi-primary to-defi-secondary text-white text-lg">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 bg-gradient-to-r from-defi-primary to-defi-secondary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed opacity-90">
            To create a more inclusive financial system where everyone, regardless of background or circumstance, 
            has access to secure banking and identity services through decentralized technology.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
