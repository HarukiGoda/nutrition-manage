"use client"

import { PFCRadarChart } from "@/components/pfc-radar-chart"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@workspace/ui/components/card"
import { TypographyH3, TypographyP } from "@workspace/ui/components/typography"
import {
  BananaIcon,
  CalendarCheckIcon,
  CookingPotIcon,
  FlameIcon,
  PlusCircle,
  Refrigerator,
} from "lucide-react"

export default function Page() {
  const pfcData = {
    protein: { target: 100, actual: 80 },
    fat: { target: 120, actual: 110 },
    carbs: { target: 250, actual: 300 },
  }

  return (
    <div className="m-4 grid grid-cols-2 gap-2.5 md:grid-cols-4">
      <div className="col-span-full ml-2">
        <TypographyH3>Home</TypographyH3>
        <p className="text-xs text-primary/80">{new Date().toDateString()}</p>
      </div>
      {/* today's pfc radar chart */}
      <Card className="col-span-2 h-fit md:h-auto">
        <CardContent className="-my-4 flex h-full">
          <div className="-mx-16 h-[calc(100%+4rem)] w-[calc(100%+4rem)]">
            <PFCRadarChart pfc={pfcData} />
          </div>
          <CardDescription className="my-auto ml-auto w-fit font-semibold text-nowrap text-primary">
            <TypographyH3 className="text-xs md:text-lg">
              タンパク質
            </TypographyH3>
            <p className="text-xl">
              {pfcData.protein.actual} / {pfcData.protein.target}g{" "}
            </p>

            <TypographyH3 className="text-xs md:text-lg">脂質</TypographyH3>
            <p className="text-xl">
              {pfcData.fat.actual} / {pfcData.fat.target}g{" "}
            </p>

            <TypographyH3 className="text-xs md:text-lg">炭水化物</TypographyH3>
            <p className="text-xl">
              {pfcData.carbs.actual} / {pfcData.carbs.target}g{" "}
            </p>
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="col-span-1">
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
      <Card className="col-span-1">
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
      <Card className="col-span-1">
        <CardContent>
          <CardTitle className="text-md -mt-2 flex w-full items-center">
            <Refrigerator className="h-fit w-4" />
            <p className="pl-1">在庫管理</p>
          </CardTitle>
          <CardDescription className="flex aspect-square items-center">
            <PlusCircle className="h-12 w-full" />
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="col-span-1">
        <CardContent>
          <CardTitle className="text-md -mt-2 flex w-full items-center">
            <FlameIcon />
            <p className="pl-1">カロリー</p>
          </CardTitle>
          <CardDescription className="text-balance">
            <div className="mt-4 text-xl font-semibold text-primary">
              <span className="text-cyan-600">2300</span> / 2500 KCal
            </div>
            <div className="mt-4 text-xs text-primary/80">昨日</div>
            <div className="text-md font-semibold text-primary">
              <span className="text-amber-600">2700</span> / 2500 KCal
            </div>
            <div className="text-xs text-primary/80">一昨日</div>
            <div className="text-md font-semibold text-primary">
              <span className="text-cyan-600">2300</span> / 2500 KCal
            </div>
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="col-span-1">
        <CardContent>
          <CardTitle className="text-md -mt-2 flex w-full items-center">
            <CalendarCheckIcon />
            <p className="pl-1">週間記録</p>
          </CardTitle>
          <CardDescription className="mt-4 grid grid-cols-7 gap-1">
            {["日", "月", "火", "水", "木", "金", "土"].map((d) => (
              <div key={d}>
                <div className="aspect-square h-fit w-6 rounded-full bg-amber-600 py-0.5 text-center font-semibold text-primary">
                  {d}
                </div>
              </div>
            ))}

            <TypographyP className="col-span-full text-balance text-primary">
              連続して記録している日数: <span className="font-semibold">3</span>
              日
            </TypographyP>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  )
}
