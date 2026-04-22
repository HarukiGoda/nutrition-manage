"use client"

import { PFCRadarChart } from "@/components/pfc-radar-chart"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@workspace/ui/components/chart"
import {
  Banana,
  BananaIcon,
  CookingPot,
  CookingPotIcon,
  ForkKnifeCrossedIcon,
  PlusCircle,
  PlusCircleIcon,
  PlusIcon,
} from "lucide-react"

export default function Page() {
  const pfcData = {
    protein: { target: 100, actual: 80 },
    fat: { target: 120, actual: 110 },
    carbs: { target: 250, actual: 300 },
  }

  return (
    <div className="m-4 grid grid-cols-2 md:grid-cols-4">
      <div className="ml-2 col-span-full"><h1 className="text-primary font-semibold ">Home</h1>
      <p className="text-primary/80 text-xs">{(new Date()).toDateString()}</p></div>
      
      {/* today's pfc radar chart */}
      <Card className="col-span-2 m-2 h-fit md:h-auto">
        <CardContent className="-my-4 grid grid-cols-2">
          <div className="-ml-5 w-[calc(100%+4rem)] col-span-1">
            <PFCRadarChart pfc={pfcData} />
          </div>
          <CardDescription className="col-span-1 my-auto ml-auto font-semibold text-nowrap text-primary">
            <p className="text-xs">タンパク質</p>
            <p className="text-xl">
              {pfcData.protein.actual}g / {pfcData.protein.target}g{" "}
            </p>

            <p className="text-xs">脂質</p>
            <p className="text-xl">
              {pfcData.fat.actual}g / {pfcData.fat.target}g{" "}
            </p>

            <p className="text-xs">炭水化物</p>
            <p className="text-xl">
              {pfcData.carbs.actual}g / {pfcData.carbs.actual}g{" "}
            </p>
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="col-span-1 m-2 aspect-square">
        <CardContent>
          <CardTitle className="text-md -mt-2 flex w-full items-center">
            <CookingPotIcon className="h-fit w-4" />
            <p className="pl-1">自炊</p>
          </CardTitle>
          <CardDescription className="aspect-square flex items-center">
            <PlusCircle className="h-12 w-full" />
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="col-span-1 m-2 aspect-square">
        <CardContent>
          <CardTitle className="text-md -mt-2 flex w-full items-center">
            <BananaIcon className="h-fit w-4" />
            <p className="pl-1">間食</p>
          </CardTitle>
          <CardDescription className="aspect-square flex items-center">
            <PlusCircle className="h-12 w-full" />
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}
