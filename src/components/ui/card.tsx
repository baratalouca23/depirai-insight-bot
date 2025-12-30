import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-300 ease-out group",
  {
    variants: {
      variant: {
        default: "",
        interactive: "hover:shadow-lg hover:-translate-y-1.5 hover:border-primary/40 cursor-pointer hover:shadow-primary/5",
        glow: "hover:shadow-[0_8px_40px_-8px_hsl(var(--primary)/0.25)] hover:-translate-y-1.5 hover:border-primary/50",
        elevated: "shadow-md hover:shadow-xl hover:-translate-y-2",
        neon: "border-primary/30 hover:border-primary/60 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] hover:-translate-y-1.5",
        cyber: "bg-gradient-to-br from-card to-card/80 border-border/50 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1.5 backdrop-blur-sm",
        glass: "bg-card/60 backdrop-blur-md border-border/40 hover:bg-card/80 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1.5",
        spotlight: "spotlight hover:shadow-xl hover:-translate-y-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ variant, className }))} {...props} />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight transition-colors duration-300 group-hover:text-primary", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground transition-colors duration-300", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants };
