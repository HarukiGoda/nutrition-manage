export const dynamic = "force-static"

import { Button } from "@workspace/ui/components/button"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-svh max-w-svw">
      <div className="bg-secondary p-6">
        <h1 className="text-center text-xl font-bold text-primary">
          トレーナー向けの栄養管理アプリ
        </h1>
        <p className="mt-4 text-muted-foreground">
          このアプリは有酸素トレーナー向けの栄養管理アプリです。自炊からプロテイン、おやつ等の間食まで気軽に記録し振り返すことができます。また食事内容を分析し、足りない栄養や補うための食事についてアドバイスを得ることができます。
        </p>

        <div className="mx-auto mt-4 w-fit">
          <Link href="/app/home">
            <Button variant="outline" className="p-5">
              登録なしで試してみる
            </Button>
          </Link>
        </div>
      </div>

      <div className="p-6 text-muted-foreground">
        <h3 className="text-center text-xl font-bold text-primary/80">
          あなたの未来を変える
        </h3>
        <p>
          未来を変えるためには小さな一歩から。アカウント登録なしで始められます。運動を始めようと思っているそこのあなたもまずはこのアプリから始めてみましょう
        </p>
        <div className="mx-auto mt-4 w-fit">
          <Link href="/app/home">
            <Button className="bg-background p-5 text-lg text-primary/80">
              登録なしで試してみる
            </Button>
          </Link>
        </div>
      </div>

      <div className="p-6">
        <h5 className="text-center text-xs text-muted-foreground">
          あくまでも栄養管理アプリ
        </h5>
        <h3 className="text-center text-xl font-bold text-primary/80">
          邪魔な広告無駄な機能一切なし
        </h3>
        <p className="text-lg text-muted-foreground">
          邪魔な広告、無駄な機能、栄養管理に必要のないものは一切ありません。あなたの目標に合わせ、必要なものだけを提供します。
        </p>

        <div className="mx-auto mt-4 w-fit">
          <Link href="/app/home">
            <Button className="bg-background p-5 text-lg font-bold text-muted-foreground">
              登録なしで試してみる
            </Button>
          </Link>
        </div>
      </div>

      <div className="px-6">
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
          <div className="mt-6" key={title}>
            <h3 className="my-1 text-lg font-bold text-primary/80">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
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
  )
}
