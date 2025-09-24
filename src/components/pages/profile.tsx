"use client"

import { useState } from "react"
import { IconArrowRight, IconHighlight, IconColorPalette, IconCube, IconDevices, IconCursorClick } from "@intentui/icons"
import { instrumentSans } from "@/lib/primitive"
import { TextField } from "@/components/ui/text-field"
import { Button } from "@/components/ui/button"
import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/field"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Badge } from "../ui/badge"

interface ProfileProps {
  messages?: any
}

export default function Profile({ messages }: ProfileProps) {
  const [activeTab, setActiveTab] = useState("profile")
  const [selectedPlan, setSelectedPlan] = useState("free")
  const [currentPlan, setCurrentPlan] = useState("platinum")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const menuItems = [
    { id: "profile", label: messages?.profile?.profile || "Profile", icon: <IconHighlight className="size-4" /> },
    { id: "settings", label: messages?.profile?.settings || "Settings", icon: <IconColorPalette className="size-4" /> },
    { id: "security", label: messages?.profile?.security || "Security", icon: <IconCube className="size-4" /> },
    { id: "billing", label: messages?.profile?.billing || "Billing", icon: <IconDevices className="size-4" /> },
    { id: "notifications", label: messages?.profile?.notifications || "Notifications", icon: <IconCursorClick className="size-4" /> },
  ]

  const handleLogout = () => {
    localStorage.setItem('isConnected', 'false')
    window.location.href = '/'
  }

  const handleConfirmPlan = () => {
    setCurrentPlan(selectedPlan)
    setIsDialogOpen(false)
  }

  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="w-full max-w-[600px] h-[380px] bg-white dark:bg-neutral-900 flex overflow-hidden">
        {/* Sidebar - 1/3 de la largeur */}
        <div className="w-1/3 dark:bg-neutral-800 border-r border-neutral-200 dark:border-neutral-700 p-4">
          <div className="mb-6">
            <h2 className={`text-lg font-semibold text-neutral-900 dark:text-neutral-100 ${instrumentSans.className}`}>
              {messages?.profile?.title || "Account"}
            </h2>
          </div>
          
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? "bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-100"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-6">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              <IconArrowRight className="size-4" />
              {messages?.profile?.logout || "Logout"}
            </button>
          </div>
        </div>

        {/* Contenu principal - 2/3 de la largeur */}
        <div className="flex-1 p-6 overflow-y-auto">
          {activeTab === "profile" && (
            <div>
              <h3 className={`text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 ${instrumentSans.className}`}>
                {messages?.profile?.profileInformation || "Profile Information"}
              </h3>
              <div className="space-y-4">
                <TextField
                  label={messages?.profile?.fullName || "Full Name"}
                  placeholder="John Doe"
                  defaultValue="John Doe"
                />
                <TextField
                  label={messages?.profile?.email || "Email"}
                  placeholder="john@example.com"
                  defaultValue="john@example.com"
                  type="email"
                />
                <TextField
                  label={messages?.profile?.phone || "Phone"}
                  placeholder="+1 (555) 123-4567"
                  defaultValue="+1 (555) 123-4567"
                  type="tel"
                />
                <Button>
                  {messages?.profile?.saveChanges || "Save Changes"}
                </Button>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div>
              <h3 className={`text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 ${instrumentSans.className}`}>
                {messages?.profile?.accountSettings || "Account Settings"}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>{messages?.profile?.emailNotifications || "Email notifications"}</Label>
                  <Checkbox defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>{messages?.profile?.smsNotifications || "SMS notifications"}</Label>
                  <Checkbox />
                </div>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div>
              <h3 className={`text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 ${instrumentSans.className}`}>
                {messages?.profile?.securitySettings || "Security Settings"}
              </h3>
              <div className="space-y-4">
                <TextField
                  label={messages?.profile?.currentPassword || "Current Password"}
                  type="password"
                  placeholder="Enter current password"
                />
                <TextField
                  label={messages?.profile?.newPassword || "New Password"}
                  type="password"
                  placeholder="Enter new password"
                />
                <Button>
                  {messages?.profile?.updatePassword || "Update Password"}
                </Button>
              </div>
            </div>
          )}

          {activeTab === "billing" && (
            <div>
                <h3 className={`text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 ${instrumentSans.className}`}>
                    {messages?.profile?.billingInformation || "Billing Information"}
                </h3>
                <div className="space-y-4">
                    {/* Carte du plan actuel */}
                    <div className="p-6 bg-gradient-to-br from-neutral-50 to-violet-50 dark:from-neutral-900/20 dark:to-violet-900/20 border border-neutral-200 dark:border-neutral-700 rounded-xl">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                                {currentPlan === "free" ? messages?.profile?.freePlan || "Free Plan" : currentPlan === "gold" ? messages?.profile?.goldPlan || "Gold Plan" : messages?.profile?.platinumPlan || "Platinum Plan"}
                            </span>
                            <Badge variant="secondary" className="rounded-full bg-white text-neutral-900 dark:text-neutral-100">
                                {messages?.profile?.currentPlan || "Current Plan"}
                            </Badge>
                        </div>
                                                    <div className="mb-4">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                                        {currentPlan === "free" ? "$0" : currentPlan === "gold" ? "$29" : "$59"}
                                    </span>
                                    <span className="text-neutral-700 dark:text-neutral-300">{messages?.profile?.month || "/month"}</span>
                                </div>
                                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                                    {currentPlan === "free" ? messages?.profile?.foreverFree || "Forever free" : messages?.profile?.billedAnnually || "Billed annually • Save 20%"}
                                </p>
                            </div>
                                                    <div>
                                {currentPlan === "free" ? (
                                    <>
                                        <div className="flex items-center gap-2 text-xs text-neutral-800 dark:text-neutral-200">
                                            <div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
                                            <span>3 {messages?.profile?.projects || "projects"}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-neutral-800 dark:text-neutral-200">
                                            <div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
                                            <span>{messages?.profile?.basicSupport || "Basic support"}</span>
                                        </div>
                                    </>
                                ) : currentPlan === "gold" ? (
                                    <>
                                        <div className="flex items-center gap-2 text-xs text-neutral-800 dark:text-neutral-200">
                                            <div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
                                            <span>{messages?.profile?.unlimitedProjects || "Unlimited projects"}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-neutral-800 dark:text-neutral-200">
                                            <div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
                                            <span>{messages?.profile?.prioritySupport || "Priority support"}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-neutral-800 dark:text-neutral-200">
                                            <div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
                                            <span>{messages?.profile?.advancedAnalytics || "Advanced analytics"}</span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex items-center gap-2 text-xs text-neutral-800 dark:text-neutral-200">
                                            <div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
                                            <span>{messages?.profile?.everythingInGold || "Everything in Gold"}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-neutral-800 dark:text-neutral-200">
                                            <div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
                                            <span>{messages?.profile?.teamCollaboration || "Team collaboration"}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-neutral-800 dark:text-neutral-200">
                                            <div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
                                            <span>{messages?.profile?.customIntegrations || "Custom integrations"}</span>
                                        </div>
                                    </>
                                )}
                            </div>
                    </div>

                    {/* Bouton d'upgrade */}
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button intent="primary">
                                {messages?.profile?.upgradePlan || "Upgrade Plan"}
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                            <DialogHeader>
                                <DialogTitle className="text-xl font-bold">{messages?.profile?.chooseYourPlan || "Choose Your Plan"}</DialogTitle>
                            </DialogHeader>
                            
                            <div className="space-y-3">
                                {/* Plan Gratuit */}
                                <div 
                                    className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                                        selectedPlan === "free" 
                                            ? "border-2 border-blue-400 dark:border-blue-500 shadow-lg scale-[1.02]" 
                                            : "border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-600"
                                    }`}
                                    onClick={() => setSelectedPlan("free")}
                                >
                                    <div className="bg-gradient-to-br from-neutral-50 to-blue-50 dark:from-neutral-800/50 dark:to-blue-900/20 p-4 rounded-lg -m-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">{messages?.profile?.freePlan || "Free Plan"}</h4>
                                                <Badge variant="secondary" className="rounded-full bg-white text-neutral-900 dark:text-neutral-100">
                                                    {messages?.profile?.currentPlan || "Current Plan"}
                                                </Badge>
                                            </div>
                                            <span className="text-sm text-neutral-500 dark:text-neutral-400">$0{messages?.profile?.month || "/month"}</span>
                                        </div>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">{messages?.profile?.perfectForGettingStarted || "Perfect for getting started"}</p>
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                                <span>3 {messages?.profile?.projects || "projects"}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                                <span>{messages?.profile?.basicSupport || "Basic support"}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {selectedPlan === "free" && (
                                        <div className="absolute bottom-2 right-2">
                                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Plan Gold */}
                                <div 
                                    className={`p-4 rounded-lg cursor-pointer transition-all duration-200 relative ${
                                        selectedPlan === "gold" 
                                            ? "border-2 border-amber-400 dark:border-amber-500 shadow-lg scale-[1.02]" 
                                            : "border border-neutral-200 dark:border-neutral-700 hover:border-amber-300 dark:hover:border-amber-600"
                                    }`}
                                    onClick={() => setSelectedPlan("gold")}
                                >
                                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/10 dark:to-yellow-900/10 p-4 rounded-lg -m-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">{messages?.profile?.goldPlan || "Gold Plan"}</h4>
                                            </div>
                                            <span className="text-sm font-medium text-amber-700 dark:text-amber-300">$29{messages?.profile?.month || "/month"}</span>
                                        </div>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">{messages?.profile?.mostPopularChoice || "Most popular choice"}</p>
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                                                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                                                <span>{messages?.profile?.unlimitedProjects || "Unlimited projects"}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                                                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                                                <span>{messages?.profile?.prioritySupport || "Priority support"}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                                                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                                                <span>{messages?.profile?.advancedAnalytics || "Advanced analytics"}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {selectedPlan === "gold" && (
                                        <div className="absolute bottom-2 right-2">
                                            <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Plan Platinum */}
                                <div 
                                    className={`p-4 rounded-lg cursor-pointer transition-all duration-200 relative ${
                                        selectedPlan === "platinum" 
                                            ? "border-2 border-slate-400 dark:border-slate-500 shadow-lg scale-[1.02]" 
                                            : "border border-neutral-200 dark:border-neutral-700 hover:border-slate-300 dark:hover:border-slate-600"
                                    }`}
                                    onClick={() => setSelectedPlan("platinum")}
                                >
                                    <div className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-800/50 dark:to-gray-900/20 p-4 rounded-lg -m-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">{messages?.profile?.platinumPlan || "Platinum Plan"}</h4>
                                            <span className="text-sm text-neutral-500 dark:text-neutral-400">$59{messages?.profile?.month || "/month"}</span>
                                        </div>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">{messages?.profile?.forPowerUsersTeams || "For power users & teams"}</p>
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                                                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                                                <span>{messages?.profile?.everythingInGold || "Everything in Gold"}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                                                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                                                <span>{messages?.profile?.teamCollaboration || "Team collaboration"}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                                                <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                                                <span>{messages?.profile?.customIntegrations || "Custom integrations"}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {selectedPlan === "platinum" && (
                                        <div className="absolute bottom-2 right-2">
                                            <div className="w-5 h-5 bg-slate-500 rounded-full flex items-center justify-center">
                                                <div className="w-2 h-1 bg-white rounded-full"></div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <DialogFooter>
                                <Button intent="primary" onClick={handleConfirmPlan}>
                                    {messages?.profile?.confirm || "Confirm"} {selectedPlan === "free" ? messages?.profile?.freePlan || "Free Plan" : selectedPlan === "gold" ? messages?.profile?.goldPlan || "Gold Plan" : messages?.profile?.platinumPlan || "Platinum Plan"}
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div>
              <h3 className={`text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 ${instrumentSans.className}`}>
                {messages?.profile?.notificationPreferences || "Notification Preferences"}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">{messages?.profile?.productUpdates || "Product updates"}</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 bg-neutral-100 border-neutral-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-neutral-800 focus:ring-2 dark:bg-neutral-700 dark:border-neutral-600" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">{messages?.profile?.marketingEmails || "Marketing emails"}</span>
                  <input type="checkbox" className="w-4 h-4 text-blue-600 bg-neutral-100 border-neutral-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-neutral-800 focus:ring-2 dark:bg-neutral-700 dark:border-neutral-600" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}