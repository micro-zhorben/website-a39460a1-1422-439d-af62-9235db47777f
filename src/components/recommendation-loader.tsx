import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Coffee } from "lucide-react";

export function RecommendationLoader() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center space-y-4 p-8">
        <div className="animate-pulse">
          <Coffee className="h-12 w-12 text-primary" />
        </div>
        <Typography.H3>Brewing Your Recommendations</Typography.H3>
        <Typography.Muted>
          Our AI is analyzing your preferences to find the perfect coffee match...
        </Typography.Muted>
      </CardContent>
    </Card>
  );
}