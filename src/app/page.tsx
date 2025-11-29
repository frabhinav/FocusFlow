"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Brain,
  Check,
  Menu,
  Shield,
  Star,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gradient">
                FocusFlow
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Pricing
              </a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started Free
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-1 -mr-1 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
            <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
              <a
                href="#features"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <Button
                className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started Free
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Work in Deep Focus.
            <br />
            <span className="text-gradient">Powered by AI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            FocusFlow blocks distractions, tracks your productivity patterns,
            and uses AI to help you enter flow state faster than ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Watch Demo
            </Button>
          </div>
          <div className="mt-16">
            <p className="text-sm text-gray-500 mb-4">
              Trusted by 50,000+ professionals
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-12 w-32 bg-gray-200 border-2 border-dashed rounded-xl"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Stay Focused
            </h2>
            <p className="text-xl text-gray-600">
              AI-powered tools that adapt to how you work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Brain className="h-12 w-12 text-blue-600" />,
                title: "AI Focus Coach",
                desc: "Real-time suggestions based on your work patterns and energy levels",
              },
              {
                icon: <Shield className="h-12 w-12 text-purple-600" />,
                title: "Smart Distraction Blocker",
                desc: "Automatically blocks social media and news during deep work sessions",
              },
              {
                icon: <Zap className="h-12 w-12 text-indigo-600" />,
                title: "Flow State Analytics",
                desc: "Track when you're most productive and optimize your schedule",
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="p-8 hover:shadow-xl transition-shadow border-0 bg-gray-50"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Loved by Thousands
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "My productivity doubled in the first week. I finally finish what I start.",
                author: "Sarah Chen",
                role: "Software Engineer at TechCorp",
                rating: 5,
              },
              {
                quote:
                  "The AI coach feels like having a personal productivity mentor 24/7.",
                author: "Michael Roberts",
                role: "Freelance Designer",
                rating: 5,
              },
              {
                quote: "Best focus app I've ever used. Worth every penny.",
                author: "Emily Zhang",
                role: "Product Manager",
                rating: 5,
              },
            ].map((t, i) => (
              <Card key={i} className="p-8 bg-white">
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Start free. Upgrade when you're ready.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Free",
                price: "$0",
                period: "forever",
                features: [
                  "Basic focus tracking",
                  "Distraction blocking",
                  "Daily reports",
                  "Up to 3 focus sessions/day",
                ],
                cta: "Stay Free",
                popular: false,
              },
              {
                name: "Pro",
                price: "$12",
                period: "per month",
                features: [
                  "AI Focus Coach",
                  "Unlimited sessions",
                  "Advanced analytics",
                  "Priority support",
                  "Team features",
                ],
                cta: "Start Pro Trial",
                popular: true,
              },
              {
                name: "Team",
                price: "$18",
                period: "per user/month",
                features: [
                  "Everything in Pro",
                  "Team dashboards",
                  "Admin controls",
                  "SAML SSO",
                  "Dedicated support",
                ],
                cta: "Contact Sales",
                popular: false,
              },
            ].map((plan) => (
              <Card
                key={plan.name}
                className={`p-8 relative ${
                  plan.popular ? "border-2 border-blue-600 shadow-xl" : "border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-500"> {plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8 text-left">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        : ""
                    }`}
                    size="lg"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">
                FocusFlow
              </h3>
              <p className="text-gray-400">
                AI-powered productivity for the modern professional.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            © 2025 FocusFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
