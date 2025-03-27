"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { Card } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Slider } from "./ui/slider"
import TCOChart from "./TCOCalculator/tco-chart"
import CostSavingsCard from "./TCOCalculator/cost-saving-card"

export default function TCOCalculator() {
  // Diesel truck state
  const [dieselPrice, setDieselPrice] = useState(1.1)
  const [dieselConsumption, setDieselConsumption] = useState(84)
  const [dieselMaintenanceCost, setDieselMaintenanceCost] = useState(106)
  const [dieselPurchaseCost, setDieselPurchaseCost] = useState(2800000)

  // Electric truck state
  const [electricityPrice, setElectricityPrice] = useState(135)
  const [energyConsumption, setEnergyConsumption] = useState(123)
  const [electricMaintenanceCost, setElectricMaintenanceCost] = useState(77)
  const [electricPurchaseCost, setElectricPurchaseCost] = useState(3300000)

  // Common inputs
  const [operatingHours, setOperatingHours] = useState(6000)
  const [years, setYears] = useState(10)

  // Calculated results
  const [tcoData, setTcoData] = useState({
    dieselCosts: [],
    electricCosts: [],
    cumulativeDieselCosts: [],
    cumulativeElectricCosts: [],
    breakEvenYear: 0,
    totalSavings: 0,
    operationalSavings: 0,
    maintenanceSavings: 0,
    roi: 0,
  })

  const calculateTCO = useCallback(() => {
    const dieselCosts = []
    const electricCosts = []
    const cumulativeDieselCosts = []
    const cumulativeElectricCosts = []

    // Initial costs (year 0)
    dieselCosts.push(dieselPurchaseCost)
    electricCosts.push(electricPurchaseCost)
    cumulativeDieselCosts.push(dieselPurchaseCost)
    cumulativeElectricCosts.push(electricPurchaseCost)

    // Annual costs for each year
    for (let year = 1; year <= years; year++) {
      // Diesel annual costs
      const dieselFuelCost = dieselPrice * dieselConsumption * operatingHours
      const dieselAnnualCost = dieselFuelCost + dieselMaintenanceCost * operatingHours
      dieselCosts.push(dieselAnnualCost)

      // Electric annual costs
      // Convert MWh price to kWh price (divide by 1000)
      const electricityCostPerKWh = electricityPrice / 1000
      const electricityCost = electricityCostPerKWh * energyConsumption * operatingHours
      const electricAnnualCost = electricityCost + electricMaintenanceCost * operatingHours
      electricCosts.push(electricAnnualCost)

      // Cumulative costs
      cumulativeDieselCosts.push(cumulativeDieselCosts[year - 1] + dieselAnnualCost)
      cumulativeElectricCosts.push(cumulativeElectricCosts[year - 1] + electricAnnualCost)
    }

    // Calculate break-even point
    let breakEvenYear = 0
    let electricityCostPerKWh
    for (let year = 0; year <= years; year++) {
      if (cumulativeDieselCosts[year] >= cumulativeElectricCosts[year]) {
        breakEvenYear = year
        break
      }
    }

    // If no break-even within analysis period
    if (breakEvenYear === 0 && cumulativeDieselCosts[years] < cumulativeElectricCosts[years]) {
      breakEvenYear = -1 // Indicates no break-even
    }

    // Calculate savings
    const totalSavings = cumulativeDieselCosts[years] - cumulativeElectricCosts[years]
    electricityCostPerKWh = electricityPrice / 1000
    const annualOperationalSavings =
      dieselPrice * dieselConsumption * operatingHours - electricityCostPerKWh * energyConsumption * operatingHours
    const annualMaintenanceSavings = (dieselMaintenanceCost - electricMaintenanceCost) * operatingHours

    // Calculate ROI
    const additionalInvestment = electricPurchaseCost - dieselPurchaseCost
    const roi = additionalInvestment !== 0 ? (totalSavings / Math.abs(additionalInvestment)) * 100 : 0;

    setTcoData({
      dieselCosts,
      electricCosts,
      cumulativeDieselCosts,
      cumulativeElectricCosts,
      breakEvenYear,
      totalSavings,
      operationalSavings: annualOperationalSavings,
      maintenanceSavings: annualMaintenanceSavings,
      roi,
    })
  }, [
    dieselPrice,
    dieselConsumption,
    operatingHours,
    dieselMaintenanceCost,
    dieselPurchaseCost,
    electricityPrice,
    energyConsumption,
    electricMaintenanceCost,
    electricPurchaseCost,
    years,
  ])

  const tcoInputs = useMemo(
    () => ({
      dieselPrice,
      dieselConsumption,
      operatingHours,
      dieselMaintenanceCost,
      dieselPurchaseCost,
      electricityPrice,
      energyConsumption,
      electricMaintenanceCost,
      electricPurchaseCost,
      years,
    }),
    [
      dieselPrice,
      dieselConsumption,
      operatingHours,
      dieselMaintenanceCost,
      dieselPurchaseCost,
      electricityPrice,
      energyConsumption,
      electricMaintenanceCost,
      electricPurchaseCost,
      years,
    ],
  )

  // Calculate TCO whenever inputs change
  useEffect(() => {
    calculateTCO()
  }, [calculateTCO])

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Total Cost of Ownership Calculator</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Compare the long-term costs of diesel vs. electric mining trucks and discover your potential savings
        </p>
      </div>

      <div className="flex flex-col space-y-8">
        {/* Top section with inputs and chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Inputs */}
          <div className="lg:col-span-1">
            <Tabs defaultValue="diesel" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="diesel">Diesel Truck</TabsTrigger>
                <TabsTrigger value="electric">Electric Truck</TabsTrigger>
              </TabsList>

              <TabsContent value="diesel" className="pt-4">
                <Card className="p-4 h-[500px]">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="diesel-price">Diesel Price ($/L)</Label>
                      <div className="flex items-center gap-2">
                        <Slider
                          id="diesel-price"
                          min={0.5}
                          max={3}
                          step={0.01}
                          value={[dieselPrice]}
                          onValueChange={(value) => setDieselPrice(value[0])}
                        />
                        <Input
                          type="number"
                          value={dieselPrice}
                          onChange={(e) => setDieselPrice(Number(e.target.value))}
                          className="w-20"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="diesel-consumption">Diesel Consumption (L/hr)</Label>
                      <div className="flex items-center gap-2">
                        <Slider
                          id="diesel-consumption"
                          min={10}
                          max={150}
                          step={1}
                          value={[dieselConsumption]}
                          onValueChange={(value) => setDieselConsumption(value[0])}
                        />
                        <Input
                          type="number"
                          value={dieselConsumption}
                          onChange={(e) => setDieselConsumption(Number(e.target.value))}
                          className="w-20"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="diesel-maintenance">Maintenance Cost ($/hr)</Label>
                      <div className="flex items-center gap-2">
                        <Slider
                          id="diesel-maintenance"
                          min={50}
                          max={200}
                          step={1}
                          value={[dieselMaintenanceCost]}
                          onValueChange={(value) => setDieselMaintenanceCost(value[0])}
                        />
                        <Input
                          type="number"
                          value={dieselMaintenanceCost}
                          onChange={(e) => setDieselMaintenanceCost(Number(e.target.value))}
                          className="w-20"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="diesel-purchase">Purchase Cost ($million)</Label>
                      <div className="flex items-center gap-2">
                        <Slider
                          id="diesel-purchase"
                          min={1}
                          max={5}
                          step={0.1}
                          value={[dieselPurchaseCost / 1000000]}
                          onValueChange={(value) => setDieselPurchaseCost(value[0] * 1000000)}
                        />
                        <Input
                          type="number"
                          value={(dieselPurchaseCost / 1000000).toFixed(1)}
                          onChange={(e) => setDieselPurchaseCost(Number(e.target.value) * 1000000)}
                          className="w-20"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="electric" className="pt-4">
                <Card className="p-4 h-[500px]">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="electricity-price">Electricity Price ($/MWh)</Label>
                      <div className="flex items-center gap-2">
                        <Slider
                          id="electricity-price"
                          min={50}
                          max={250}
                          step={5}
                          value={[electricityPrice]}
                          onValueChange={(value) => setElectricityPrice(value[0])}
                        />
                        <Input
                          type="number"
                          value={electricityPrice}
                          onChange={(e) => setElectricityPrice(Number(e.target.value))}
                          className="w-20"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="energy-consumption">Energy Consumption (kWh/hr)</Label>
                      <div className="flex items-center gap-2">
                        <Slider
                          id="energy-consumption"
                          min={50}
                          max={250}
                          step={5}
                          value={[energyConsumption]}
                          onValueChange={(value) => setEnergyConsumption(value[0])}
                        />
                        <Input
                          type="number"
                          value={energyConsumption}
                          onChange={(e) => setEnergyConsumption(Number(e.target.value))}
                          className="w-20"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="electric-maintenance">Maintenance Cost ($/hr)</Label>
                      <div className="flex items-center gap-2">
                        <Slider
                          id="electric-maintenance"
                          min={25}
                          max={150}
                          step={1}
                          value={[electricMaintenanceCost]}
                          onValueChange={(value) => setElectricMaintenanceCost(value[0])}
                        />
                        <Input
                          type="number"
                          value={electricMaintenanceCost}
                          onChange={(e) => setElectricMaintenanceCost(Number(e.target.value))}
                          className="w-20"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="electric-purchase">Purchase/Retrofit Cost ($million)</Label>
                      <div className="flex items-center gap-2">
                        <Slider
                          id="electric-purchase"
                          min={1}
                          max={10}
                          step={0.1}
                          value={[electricPurchaseCost / 1000000]}
                          onValueChange={(value) => setElectricPurchaseCost(value[0] * 1000000)}
                        />
                        <Input
                          type="number"
                          value={(electricPurchaseCost / 1000000).toFixed(1)}
                          onChange={(e) => setElectricPurchaseCost(Number(e.target.value) * 1000000)}
                          className="w-20"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Chart */}
          <div className="lg:col-span-2">
            <Card className="p-6 h-[500px]">
              <h2 className="text-xl font-semibold mb-4">Total Cost of Ownership Comparison</h2>
              <TCOChart
                years={years}
                cumulativeDieselCosts={tcoData.cumulativeDieselCosts}
                cumulativeElectricCosts={tcoData.cumulativeElectricCosts}
              />
            </Card>
          </div>
        </div>
        <Card className="p-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="operating-hours">Annual Operating Hours (hrs)</Label>
                <div className="flex items-center gap-2">
                  <Slider
                    id="operating-hours"
                    min={1000}
                    max={8760}
                    step={100}
                    value={[operatingHours]}
                    onValueChange={(value) => setOperatingHours(value[0])}
                  />
                  <Input
                    type="number"
                    value={operatingHours}
                    onChange={(e) => setOperatingHours(Number(e.target.value))}
                    className="max-w-20"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="analysis-period">Analysis Period (Years)</Label>
                <div className="flex items-center gap-2">
                  <Slider
                    id="analysis-period"
                    min={1}
                    max={20}
                    step={1}
                    value={[years]}
                    onValueChange={(value) => setYears(value[0])}
                  />
                  <Input
                    type="number"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="max-w-20"
                  />
                </div>
              </div>
            </div>
          </Card>
        {/* Bottom section with cards */}
        <div className="space-y-4">
          {/* Top row of cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CostSavingsCard
              title="Total Savings"
              value={tcoData.totalSavings}
              description={`Over ${years} years`}
              positive={tcoData.totalSavings > 0}
            />
            <CostSavingsCard
              title="Break-Even Point"
              value={tcoData.breakEvenYear}
              description={tcoData.breakEvenYear > 0 ? `Year ${tcoData.breakEvenYear}` : "No break-even in analysis period"}
              isYear={true}
              positive={tcoData.breakEvenYear > 0}
            />
            <CostSavingsCard
              title="Return on Investment"
              value={tcoData.roi}
              description="Additional investment return"
              isPercentage={true}
              positive={tcoData.roi > 0}
            />
          </div>

          {/* Bottom row of cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CostSavingsCard
              title="Annual Operational Savings"
              value={tcoData.operationalSavings}
              description="Fuel vs. Electricity costs"
              positive={tcoData.operationalSavings > 0}
            />
            <CostSavingsCard
              title="Annual Maintenance Savings"
              value={tcoData.maintenanceSavings}
              description="Reduced maintenance costs"
              positive={tcoData.maintenanceSavings > 0}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

