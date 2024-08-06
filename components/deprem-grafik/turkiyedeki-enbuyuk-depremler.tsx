"use client";

import { SehirlerPros, sehirler } from "@/data/sehir";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function TurkiyedekiEnbuyukDepremler() {
  const chartData = sehirler
    .sort((a, b) => b.deprem - a.deprem)
    .map((item: SehirlerPros) => {
      return {
        name: item.name,
        deprem: item.deprem,
        year: item.year,
      };
    });

  return (
    <Card className="w-full rounded-none sm:rounded-lg">
      <CardHeader>
        <CardTitle className="text-xl">Türkiyede Olmuş En Büyük Depremler</CardTitle>
        <CardDescription className="font-extrabold italic tracking-wider">1930 - 2023</CardDescription>
      </CardHeader>
      <CardContent className="p-1 sm:p-6 sm:pt-0 w-full">
        <ChartContainer config={chartConfig} className="sm:min-h-[330px] sm:h-[380px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
            barCategoryGap="5%"
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="deprem" type="number" hide />
            <ChartTooltip cursor={true} content={<ChartTooltipContent indicator="line" />} />
            <Bar dataKey="deprem" layout="vertical" fill="var(--color-desktop)" radius={4}>
              <LabelList
                dataKey="name"
                position="insideLeft"
                offset={8}
                className="fill-white font-semibold"
                fontSize={14}
              />

              <LabelList
                dataKey="year"
                position="insideRight"
                offset={8}
                className="fill-white font-semibold"
                fontSize={14}
              />
              <LabelList
                dataKey="deprem"
                position="right"
                offset={5}
                className="fill-foreground font-bold"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
