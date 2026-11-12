import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  className?: string;
  starClassName?: string;
}

export function StarRating({ rating, className, starClassName }: StarRatingProps) {
  return (
    <div
      className={cn("flex items-center gap-1", className)}
      role="img"
      aria-label={`Note : ${rating} sur 5 étoiles`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          className={cn(
            "h-4 w-4",
            index < rating ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200",
            starClassName
          )}
        />
      ))}
    </div>
  );
}
