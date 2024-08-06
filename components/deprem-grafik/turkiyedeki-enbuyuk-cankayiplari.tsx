"use client";

import { TurkiyeDepremTarihiProps, turkiyeDepremTarihi } from "@/data/turkiye-deprem-tarihi";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function TurkiyedekiEnbuyukCankayiplari() {
  const chartData = turkiyeDepremTarihi
    .sort((a, b) => b.die - a.die)
    .slice(0, 4)
    .filter((item, index, self) => self.findIndex((t) => t.name === item.name) === index)
    .map((item: TurkiyeDepremTarihiProps) => {
      return {
        name: item.name,
        vefat: item.die.toLocaleString("tr-TR"),
      };
    });

  return (
    <Card className="w-full rounded-none sm:rounded-lg">
      <CardHeader>
        <CardTitle className="text-xl">En Çok Can Kaybı Yaşanan İller</CardTitle>
        <CardDescription className="font-extrabold italic tracking-wider">1930 - 2023</CardDescription>
      </CardHeader>
      <CardContent>
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
            <CartesianGrid horizontal={true} />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="vefat" type="number" />
            <ChartTooltip cursor={true} content={<ChartTooltipContent indicator="line" />} />
            <Bar dataKey="vefat" layout="vertical" fill="var(--color-desktop)" radius={4}>
              <LabelList
                dataKey="name"
                position="insideLeft"
                offset={8}
                className="fill-white font-semibold"
                fontSize={14}
              />
              <LabelList
                dataKey="vefat"
                position="right"
                offset={6}
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
