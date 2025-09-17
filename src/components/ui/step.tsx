import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";
import { CheckCircle2, Circle } from "lucide-react";

interface StepProps {
  title: string;
  stepNumber: number;
  isActive?: boolean;
  isCompleted?: boolean;
  children: React.ReactNode;
  badges?: Array<{ text: string; variant?: "default" | "secondary" | "destructive" | "outline" }>;
}

export function Step({
  title,
  stepNumber,
  isActive = false,
  isCompleted = false,
  children,
  badges = []
}: StepProps) {
  return (
    <Card className={cn(
      "w-full transition-all duration-300",
      isActive && "ring-2 ring-primary/20 shadow-lg border-primary/30",
      isCompleted && "border-green-200 bg-green-50/30 dark:bg-green-950/20 dark:border-green-800"
    )}>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3">
          <div className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-colors",
            isCompleted
              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
              : isActive
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
          )}>
            {isCompleted ? (
              <CheckCircle2 className="h-5 w-5" />
            ) : (
              stepNumber
            )}
          </div>
          <span className={cn(
            "text-lg font-semibold",
            isActive && "text-primary",
            isCompleted && "text-green-700 dark:text-green-300"
          )}>
            {title}
          </span>
        </CardTitle>
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {badges.map((badge, index) => (
              <Badge
                key={index}
                variant={badge.variant || "secondary"}
                className="text-xs"
              >
                {badge.text}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}

interface StepperProps {
  children: React.ReactNode;
  currentStep?: number;
}

export function Stepper({ children, currentStep = 0 }: StepperProps) {
  return (
    <div className="space-y-6">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<StepProps>(child) && child.type === Step) {
          return React.cloneElement(child, {
            isActive: index === currentStep,
            isCompleted: index < currentStep,
            ...child.props,
          } as StepProps);
        }
        return child;
      })}
    </div>
  );
}