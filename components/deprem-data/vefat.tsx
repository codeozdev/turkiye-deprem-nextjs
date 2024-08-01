"use client";

import { TrendingUp } from "lucide-react";
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { DieProps } from "@/data/wiki";
import { SehirTypes } from "@/data/sehir";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

interface DepremDataProps {
  sehir: SehirTypes;
  depremData: DieProps;
}

export default function Vefat({ sehir, depremData }: DepremDataProps) {
  const chartData = [{ browser: "safari", visitors: depremData.die, fill: "var(--color-safari)" }];

  return (
    <Card className="flex flex-col h-[387px]">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-center">Hayatını Kaybeden</CardTitle>
        <CardDescription>{sehir.year}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <RadialBarChart data={chartData} endAngle={depremData.getDiePercentage()} innerRadius={80} outerRadius={140}>
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="visitors" background />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-4xl font-bold">
                          {chartData[0].visitors.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                          Hayatını kaybeden
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Nüfus{"'"}un %{depremData.getDiePercentagediger().toFixed(3)} hayatını kaybetti{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
