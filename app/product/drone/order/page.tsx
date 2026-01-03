'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, Zap, Shield, Cpu, Camera, Battery } from 'lucide-react'

type DroneModel = 'x1-basic' | 'x1-pro' | 'x1-enterprise'
type ColorOption = 'carbon-black' | 'arctic-white' | 'stealth-grey'
type SensorPackage = 'standard' | 'thermal' | 'lidar' | 'multispectral'
type PayloadOption = 'none' | 'delivery-box' | 'survey-camera' | 'sprayer'

interface DroneConfiguration {
  model: DroneModel
  color: ColorOption
  sensors: SensorPackage
  payload: PayloadOption
  batteryPack: 'standard' | 'extended'
  warranty: '1-year' | '3-year' | '5-year'
}

const MODEL_PRICES = {
  'x1-basic': 12999,
  'x1-pro': 24999,
  'x1-enterprise': 49999,
}

const ADDON_PRICES = {
  sensors: { standard: 0, thermal: 3500, lidar: 8500, multispectral: 6500 },
  payload: { none: 0, 'delivery-box': 1200, 'survey-camera': 2800, sprayer: 4500 },
  battery: { standard: 0, extended: 1800 },
  warranty: { '1-year': 0, '3-year': 2500, '5-year': 5000 },
}

export default function DroneOrderPage() {
  const router = useRouter()
  const [config, setConfig] = useState<DroneConfiguration>({
    model: 'x1-pro',
    color: 'carbon-black',
    sensors: 'standard',
    payload: 'none',
    batteryPack: 'standard',
    warranty: '1-year',
  })

  const calculateTotal = () => {
    let total = MODEL_PRICES[config.model]
    total += ADDON_PRICES.sensors[config.sensors]
    total += ADDON_PRICES.payload[config.payload]
    total += ADDON_PRICES.battery[config.batteryPack]
    total += ADDON_PRICES.warranty[config.warranty]
    return total
  }

  const handleCheckout = () => {
    const orderData = {
      type: 'drone',
      configuration: config,
      total: calculateTotal(),
      currency: 'USD',
    }
    sessionStorage.setItem('pendingOrder', JSON.stringify(orderData))
    router.push('/checkout')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4">Configure Your ADAS X1</Badge>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
            Build Your Perfect Drone
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Customize every aspect of your autonomous drone system. Enterprise-grade hardware, tailored to your mission.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Model Selection */}
            <Card className="backdrop-blur-sm bg-card/95">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Select Model
                </CardTitle>
                <CardDescription>Choose your base configuration</CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-4">
                {(['x1-basic', 'x1-pro', 'x1-enterprise'] as DroneModel[]).map((model) => (
                  <motion.div
                    key={model}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setConfig({ ...config, model })}
                    className={`cursor-pointer p-6 rounded-xl border-2 transition-all ${
                      config.model === model
                        ? 'border-primary bg-primary/10 shadow-lg'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <h3 className="font-bold text-lg mb-2 capitalize">{model.replace('-', ' ')}</h3>
                    <p className="text-3xl font-bold mb-4">${MODEL_PRICES[model].toLocaleString()}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        {model === 'x1-basic' && '30min flight'}
                        {model === 'x1-pro' && '45min flight'}
                        {model === 'x1-enterprise' && '60min flight'}
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        {model === 'x1-basic' && '2km range'}
                        {model === 'x1-pro' && '5km range'}
                        {model === 'x1-enterprise' && '15km range'}
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        {model === 'x1-enterprise' && 'AI Edge Computing'}
                        {model !== 'x1-enterprise' && 'Standard AI'}
                      </li>
                    </ul>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Color Selection */}
            <Card className="backdrop-blur-sm bg-card/95">
              <CardHeader>
                <CardTitle>Color Finish</CardTitle>
                <CardDescription>Choose your drone appearance</CardDescription>
              </CardHeader>
              <CardContent className="flex gap-4">
                {(['carbon-black', 'arctic-white', 'stealth-grey'] as ColorOption[]).map((color) => (
                  <button
                    key={color}
                    onClick={() => setConfig({ ...config, color })}
                    className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                      config.color === color ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                    }`}
                  >
                    <div
                      className={`h-16 rounded-lg mb-3 ${
                        color === 'carbon-black'
                          ? 'bg-gradient-to-br from-zinc-900 to-black'
                          : color === 'arctic-white'
                          ? 'bg-gradient-to-br from-white to-zinc-100 border border-zinc-200'
                          : 'bg-gradient-to-br from-zinc-600 to-zinc-800'
                      }`}
                    />
                    <p className="text-sm font-medium capitalize">{color.replace('-', ' ')}</p>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Sensor Package */}
            <Card className="backdrop-blur-sm bg-card/95">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-primary" />
                  Sensor Package
                </CardTitle>
                <CardDescription>Advanced sensing capabilities</CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                {(['standard', 'thermal', 'lidar', 'multispectral'] as SensorPackage[]).map((sensor) => (
                  <motion.div
                    key={sensor}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setConfig({ ...config, sensors: sensor })}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${
                      config.sensors === sensor
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold capitalize">{sensor}</h4>
                      <span className="text-sm font-bold">
                        {ADDON_PRICES.sensors[sensor] === 0 ? 'Included' : `+$${ADDON_PRICES.sensors[sensor]}`}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {sensor === 'standard' && '4K RGB + obstacle detection'}
                      {sensor === 'thermal' && 'FLIR thermal imaging'}
                      {sensor === 'lidar' && '3D terrain mapping'}
                      {sensor === 'multispectral' && 'NDVI crop analysis'}
                    </p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Payload & Battery */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="backdrop-blur-sm bg-card/95">
                <CardHeader>
                  <CardTitle>Payload System</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {(['none', 'delivery-box', 'survey-camera', 'sprayer'] as PayloadOption[]).map((payload) => (
                    <button
                      key={payload}
                      onClick={() => setConfig({ ...config, payload })}
                      className={`w-full text-left p-3 rounded-lg border transition-all ${
                        config.payload === payload ? 'border-primary bg-primary/10' : 'border-border hover:bg-muted/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="capitalize">{payload.replace('-', ' ')}</span>
                        <span className="text-sm font-medium">
                          {ADDON_PRICES.payload[payload] === 0 ? '—' : `+$${ADDON_PRICES.payload[payload]}`}
                        </span>
                      </div>
                    </button>
                  ))}
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/95">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Battery className="h-5 w-5 text-primary" />
                    Battery & Warranty
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Battery Pack</label>
                    <div className="space-y-2">
                      {(['standard', 'extended'] as const).map((battery) => (
                        <button
                          key={battery}
                          onClick={() => setConfig({ ...config, batteryPack: battery })}
                          className={`w-full text-left p-3 rounded-lg border transition-all ${
                            config.batteryPack === battery
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:bg-muted/50'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="capitalize">{battery}</span>
                            <span className="text-sm font-medium">
                              {ADDON_PRICES.battery[battery] === 0 ? 'Included' : `+$${ADDON_PRICES.battery[battery]}`}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Warranty</label>
                    <select
                      value={config.warranty}
                      onChange={(e) => setConfig({ ...config, warranty: e.target.value as 'standard' | 'extended' | 'premium' })}
                      className="w-full p-3 rounded-lg border border-border bg-background"
                    >
                      <option value="1-year">1 Year (Included)</option>
                      <option value="3-year">3 Year (+$2,500)</option>
                      <option value="5-year">5 Year (+$5,000)</option>
                    </select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Order Summary - Sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="backdrop-blur-sm bg-card/95 border-2">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                  <CardDescription>Your configured drone</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 pb-4 border-b">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Base Model</span>
                      <span className="font-medium">${MODEL_PRICES[config.model].toLocaleString()}</span>
                    </div>
                    {ADDON_PRICES.sensors[config.sensors] > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground capitalize">{config.sensors} sensors</span>
                        <span className="font-medium">+${ADDON_PRICES.sensors[config.sensors]}</span>
                      </div>
                    )}
                    {ADDON_PRICES.payload[config.payload] > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground capitalize">{config.payload.replace('-', ' ')}</span>
                        <span className="font-medium">+${ADDON_PRICES.payload[config.payload]}</span>
                      </div>
                    )}
                    {ADDON_PRICES.battery[config.batteryPack] > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Extended battery</span>
                        <span className="font-medium">+${ADDON_PRICES.battery[config.batteryPack]}</span>
                      </div>
                    )}
                    {ADDON_PRICES.warranty[config.warranty] > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{config.warranty} warranty</span>
                        <span className="font-medium">+${ADDON_PRICES.warranty[config.warranty]}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-3xl font-bold text-primary">${calculateTotal().toLocaleString()}</span>
                  </div>

                  <Button onClick={handleCheckout} size="lg" className="w-full" variant="gradient">
                    Proceed to Checkout
                  </Button>

                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span>30-day money-back guarantee</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Cpu className="h-4 w-4" />
                      <span>Free firmware updates for life</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4" />
                      <span>Ships in 2-3 weeks</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
