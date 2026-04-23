"use client"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@workspace/ui/components/chart"
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts"

const chartConfig = {
  ratio: {
    label: "達成率",
  },
  target: {
    label: "目標",
  },
  actual: {
    label: "現在",
  },
} satisfies ChartConfig

export function PFCRadarChart({
  ...props
}: {
  pfc: {
    protein: {
      target: number
      actual: number
    }
    fat: {
      target: number
      actual: number
    }
    carbs: {
      target: number
      actual: number
    }
  }
}) {
  const data = Object.keys(props.pfc).map((k) => ({
    nutrient: k[0]?.toUpperCase() + k.slice(1),
    target: `${props.pfc[k as keyof typeof props.pfc].target}g`,
    actual: `${props.pfc[k as keyof typeof props.pfc].actual}g`,
    ratio:
      (props.pfc[k as keyof typeof props.pfc].actual /
        props.pfc[k as keyof typeof props.pfc].target) *
      100,
    base: 100,
  }))
  return (
    <ChartContainer config={chartConfig} className="-mb-10 h-55 w-full">
      <ResponsiveContainer>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="nutrient" />
          {/* <PolarRadiusAxis
            className="text-muted-foreground"
            dataKey="ratio"
            domain={[0, 100]}
            tickFormatter={(v) => `${v}%`}
            angle={90}
          /> */}
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Radar
            dataKey="base"
            fill="var(--color-cyan-800)"
            fillOpacity={0.5}
          />
          <Radar
            name="達成率"
            dataKey="ratio"
            fill="var(--color-cyan-500)"
            fillOpacity={0.8}
          />
          <Radar
            name=""
            dataKey="target"
            className="hidden"
            fill="none"
            fillOpacity={0}
          />
          <Radar
            name=""
            dataKey="actual"
            className="hidden"
            fill="none"
            fillOpacity={0}
          />
        </RadarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
