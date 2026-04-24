"use client"

import { PFCRadarChart } from "@/components/pfc-radar-chart"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  BananaIcon,
  CalendarCheckIcon,
  CookingPotIcon,
  FlameIcon,
  PlusCircle,
} from "lucide-react"

export default function Page() {
  const pfcData = {
    protein: { target: 100, actual: 80 },
    fat: { target: 120, actual: 110 },
    carbs: { target: 250, actual: 300 },
  }

  return (
    <div className="m-4 grid grid-cols-2 md:grid-cols-4">
      <div className="col-span-full ml-2">
        <h1 className="font-semibold text-primary">Home</h1>
        <p className="text-xs text-primary/80">{new Date().toDateString()}</p>
      </div>

      {/* today's pfc radar chart */}
      <Card className="col-span-2 m-2 h-fit md:h-auto">
        <CardContent className="-my-4 grid grid-cols-2">
          <div className="col-span-1 -ml-5 w-[calc(100%+4rem)]">
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
          <CardDescription className="flex aspect-square items-center">
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
          <CardDescription className="flex aspect-square items-center">
            <PlusCircle className="h-12 w-full" />
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="col-span-1 m-2">
        <CardContent>
          <CardTitle className="text-md -mt-2 flex w-full items-center">
            <CalendarCheckIcon />
            <p className="pl-1">週間記録</p>
          </CardTitle>
          <CardDescription className="mt-12 grid grid-cols-7 gap-1">
            {["日", "月", "火", "水", "木", "金", "土"].map((d) => (
              <div key={d}>
                <div className="aspect-square h-fit w-6 rounded-full bg-amber-600 py-0.5 text-center font-semibold text-primary">
                  {d}
                </div>
              </div>
            ))}

            <div className="col-span-full mt-8">
              今週は 7 / 7 日目標のタンパク質摂取量を達成することができました。
            </div>
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="col-span-1 m-2">
        <CardContent>
          <CardTitle className="text-md -mt-2 flex w-full items-center">
            <FlameIcon />
            <p className="pl-1">カロリー</p>
          </CardTitle>
          <CardDescription className="">
            <div className="mt-10 text-xl font-semibold text-primary">
              {" "}
              <span className="text-cyan-600">2300</span> / 2500 KCal
            </div>
            <div className="mt-4 text-xs text-primary/80">昨日</div>
            <div className="text-md font-semibold text-primary">
              {" "}
              <span className="text-amber-600">2700</span> / 2500 KCal
            </div>
            <div className="text-xs text-primary/80">一昨日</div>
            <div className="text-md font-semibold text-primary">
              {" "}
              <span className="text-cyan-600">2300</span> / 2500 KCal
            </div>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}
