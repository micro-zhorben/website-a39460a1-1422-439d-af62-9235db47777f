import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coffee, Heart } from "lucide-react";

interface CoffeeCardProps {
  name: string;
  description: string;
  roastLevel: string;
  origin: string;
  flavorNotes: string[];
  onLike?: () => void;
  onSelect?: () => void;
}

export function CoffeeCard({
  name,
  description,
  roastLevel,
  origin,
  flavorNotes,
  onLike,
  onSelect,
}: CoffeeCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <Typography.H3>{name}</Typography.H3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onLike}
            className="text-foreground"
          >
            <Heart className="h-5 w-5" />
          </Button>
        </div>
        <Badge variant="secondary">{roastLevel}</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <Typography.P>{description}</Typography.P>
        <div className="space-y-2">
          <Typography.Small className="text-muted-foreground">
            Origin: {origin}
          </Typography.Small>
          <div className="flex flex-wrap gap-2">
            {flavorNotes.map((note) => (
              <Badge key={note} variant="outline" className="text-foreground">
                {note}
              </Badge>
            ))}
          </div>
        </div>
        <Button
          className="w-full"
          onClick={onSelect}
        >
          <Coffee className="mr-2 h-4 w-4" />
          Select This Coffee
        </Button>
      </CardContent>
    </Card>
  );
}