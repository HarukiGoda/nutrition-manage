export const dynamic = "force-static"

import { Button } from "@workspace/ui/components/button"
import {
  TypographyH1,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@workspace/ui/components/typography"
import Link from "next/link"

export default function Page() {
  return (
    <>
      <div className="w-svw bg-secondary p-16">
        <div className="mx-auto max-w-4xl p-4">
          <TypographyH1>あなたの栄養管理をシンプルに</TypographyH1>
          <TypographyP className="text-center">
            このアプリは有酸素トレーナー向けの栄養管理アプリです。自炊からプロテイン、おやつ等の間食まで気軽に記録し振り返すことができます。また食事内容を分析し、足りない栄養や補うための食事についてアドバイスを得ることができます。
          </TypographyP>

          <div className="mx-auto mt-4 w-fit">
            <Link href="/app/home">
              <Button variant="outline" className="p-5">
                登録なしで試してみる
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto grid min-h-svh grid-cols-1 gap-12 p-12 text-center">
        <div className="mx-auto max-w-4xl p-4">
          <TypographyH3>あなたの未来を変える</TypographyH3>
          <TypographyP>
            未来を変えるためには小さな一歩から。アカウント登録なしで始められます。運動を始めようと思っているそこのあなたもまずはこのアプリから始めてみましょう
          </TypographyP>
          <div className="mx-auto mt-4 w-fit">
            <Link href="/app/home">
              <Button className="bg-background p-5 text-lg text-primary/80">
                登録なしで試してみる
              </Button>
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-4xl p-4">
          <TypographyH4>あくまでも栄養管理アプリ</TypographyH4>
          <TypographyH3>邪魔な広告無駄な機能一切なし</TypographyH3>
          <TypographyP>
            邪魔な広告、無駄な機能、栄養管理に必要のないものは一切ありません。あなたの目標に合わせ、必要なものだけを提供します。
          </TypographyP>

          <div className="mx-auto mt-4 w-fit">
            <Link href="/app/home">
              <Button className="bg-background p-5 text-lg font-bold text-muted-foreground">
                登録なしで試してみる
              </Button>
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-4xl p-4">
          {[
            [
              "自炊でも正確な栄養管理",
              "自炊に使った食材から正確な栄養素を分析します。食材の在庫を登録することで、あなたに足りない栄養を補う食事をおすすめすることができます。",
            ],
            [
              "長期的な分析と目標管理",
              "その日だけではなく、長期的な栄養と体重管理をするためのツールを提供します。短期的だけでなく、長期的な目線を提供することでよりよいモチベーション管理をすることができます。",
            ],
            [
              "最適な食材とサプリを見つける",
              "日々の食事を分析し、あなたに足りない栄養素を見つけることで、最適な食材、プロテインやサプリをおすすめします。あなたの目標に合わせ、よりフィットしたものを提供します",
            ],
          ].map(([title, description]) => (
            <div className="mt-6 text-left" key={title}>
              <TypographyH3>{title}</TypographyH3>
              <TypographyP>{description}</TypographyP>
            </div>
          ))}
        </div>
        <Link href="/app/home">
          <div className="mx-auto mt-4 w-fit">
            <Button variant="outline" className="p-5">
              登録なしで試してみる
            </Button>
          </div>
        </Link>
      </div>
    </>
  )
}
