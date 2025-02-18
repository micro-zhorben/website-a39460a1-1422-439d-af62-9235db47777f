import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { PreferenceForm } from "@/components/preference-form";
import { RecommendationLoader } from "@/components/recommendation-loader";
import { CoffeeCard } from "@/components/coffee-card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Coffee, ArrowLeft } from "lucide-react";

type CoffeeRecommendation = {
  name: string;
  description: string;
  roastLevel: string;
  origin: string;
  flavorNotes: string[];
};

export function Home() {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<CoffeeRecommendation[]>([]);
  const [showForm, setShowForm] = useState(true);

  const handlePreferenceSubmit = async (values: any) => {
    setLoading(true);
    setShowForm(false);

    // Simulate API call
    setTimeout(() => {
      setRecommendations([
        {
          name: "Ethiopian Yirgacheffe",
          description: "A bright and complex coffee with floral notes and citrus undertones. Perfect for those who enjoy a lighter, more nuanced cup.",
          roastLevel: "Light",
          origin: "Ethiopia",
          flavorNotes: ["Floral", "Citrus", "Bergamot"],
        },
        {
          name: "Colombian Supremo",
          description: "A well-balanced coffee with caramel sweetness and a nutty finish. Medium roasted to perfection.",
          roastLevel: "Medium",
          origin: "Colombia",
          flavorNotes: ["Caramel", "Nuts", "Chocolate"],
        },
      ]);
      setLoading(false);
    }, 2000);
  };

  const handleReset = () => {
    setShowForm(true);
    setRecommendations([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Coffee className="h-6 w-6 text-primary" />
            <Typography.H3>AI Coffee Recommender</Typography.H3>
          </div>
          <ModeToggle />
        </div>
      </header>

      <main className="container py-8">
        {showForm ? (
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <Typography.H1>Find Your Perfect Coffee Match</Typography.H1>
              <Typography.Lead>
                Let our AI help you discover new coffee experiences tailored to your taste
              </Typography.Lead>
            </div>
            <PreferenceForm onSubmit={handlePreferenceSubmit} />
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={handleReset}
                className="text-foreground"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Preferences
              </Button>
              <Typography.H2>Your Recommended Coffees</Typography.H2>
            </div>

            {loading ? (
              <RecommendationLoader />
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {recommendations.map((coffee, index) => (
                  <CoffeeCard
                    key={index}
                    {...coffee}
                    onLike={() => console.log("Liked:", coffee.name)}
                    onSelect={() => console.log("Selected:", coffee.name)}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}