import { Card, CardContent } from "../ui/card"
import { ArrowUpRight, ArrowDownRight, Clock } from "lucide-react"

export default function CostSavingsCard({
  title,
  value,
  description,
  isPercentage = false,
  isYear = false,
  positive = true,
}) {
  const formattedValue = isPercentage
    ? `${Math.abs(value).toFixed(1)}%`
    : isYear
      ? value === -1
        ? "N/A"
        : value.toString()
      : new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(Math.abs(value))

  return (
    <Card className={`border-l-4 ${positive ? "border-l-green-500" : "border-l-red-500"}`}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{formattedValue}</h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
          <div className={`p-2 rounded-full ${positive ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
            {isYear && value === -1 ? (
              <Clock className="h-5 w-5" />
            ) : positive ? (
              <ArrowUpRight className="h-5 w-5" />
            ) : (
              <ArrowDownRight className="h-5 w-5" />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

