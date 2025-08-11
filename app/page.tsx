import { ArrowRight, Minus } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="container mx-auto px-8 py-6 flex items-center justify-between">
          <div className="text-2xl font-light tracking-wide text-black">Design for Startups</div>
          <div className="hidden md:flex items-center space-x-12">
            <a href="#services" className="text-gray-600 hover:text-black transition-colors font-light scroll-smooth">
              Services
            </a>
            <a href="#approach" className="text-gray-600 hover:text-black transition-colors font-light scroll-smooth">
              Approach
            </a>
            <a href="#investment" className="text-gray-600 hover:text-black transition-colors font-light scroll-smooth">
              Investment
            </a>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-light px-8 bg-transparent"
            >
              <a href="#investment">Begin</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-32 px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <h1 className="text-7xl md:text-8xl font-extralight text-black leading-none tracking-tight">
              Bespoke
              <br />
              <span className="font-light">Brand Identity</span>
            </h1>
            <div className="w-24 h-px bg-black mx-auto"></div>
            <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We craft distinctive brand identities for visionary startups. From concept to execution, every detail is
              meticulously designed.
            </p>
            <div className="pt-8">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-900 text-white font-light px-12 py-4 text-lg transition-all duration-300"
              >
                <a href="#investment" className="flex items-center">
                  Start Your Journey
                  <ArrowRight className="ml-3 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-extralight text-black mb-6">Our Craft</h2>
            <div className="w-16 h-px bg-black mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-16">
              <div className="group">
                <div className="flex items-start space-x-6">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <h3 className="text-2xl font-light text-black mb-4">Visual Identity</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Distinctive logos and visual systems that embody your startup's essence. Every mark is crafted
                      with precision and purpose.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-6">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <h3 className="text-2xl font-light text-black mb-4">Digital Assets</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Comprehensive asset libraries optimized for digital platforms. Ready for seamless implementation
                      across all touchpoints.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-6">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <h3 className="text-2xl font-light text-black mb-4">Brand Language</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Articulate messaging frameworks that resonate with your audience. Every word carefully chosen to
                      reflect your vision.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-16">
              <div className="group">
                <div className="flex items-start space-x-6">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <h3 className="text-2xl font-light text-black mb-4">Design Systems</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Cohesive visual languages with typography, color, and spatial relationships. Foundations for
                      consistent brand expression.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-6">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <h3 className="text-2xl font-light text-black mb-4">Technical Guidance</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Strategic technology recommendations aligned with your brand vision. Bridging design intent with
                      technical execution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-6">
                  <div className="w-2 h-2 bg-black rounded-full mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <h3 className="text-2xl font-light text-black mb-4">Brand Strategy</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Comprehensive brand positioning and strategic direction. From conception to market presence, we
                      guide every step.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-32 px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-extralight text-black mb-12">Our Approach</h2>
          <div className="w-16 h-px bg-black mx-auto mb-16"></div>

          <div className="space-y-24">
            <div>
              <h3 className="text-3xl font-light text-black mb-8">Discover</h3>
              <p className="text-xl font-light text-gray-600 leading-relaxed max-w-2xl mx-auto">
                We begin by understanding your vision, values, and aspirations. Every great brand starts with a profound
                understanding of purpose.
              </p>
            </div>

            <div className="flex justify-center">
              <Minus className="w-8 h-px text-gray-300" />
            </div>

            <div>
              <h3 className="text-3xl font-light text-black mb-8">Design</h3>
              <p className="text-xl font-light text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Through iterative refinement, we craft visual and verbal expressions that authentically represent your
                startup's unique character.
              </p>
            </div>

            <div className="flex justify-center">
              <Minus className="w-8 h-px text-gray-300" />
            </div>

            <div>
              <h3 className="text-3xl font-light text-black mb-8">Deliver</h3>
              <p className="text-xl font-light text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Complete brand systems ready for implementation. Every asset, guideline, and specification meticulously
                prepared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section id="investment" className="py-32 px-8 bg-black text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-extralight mb-12">Investment</h2>
          <div className="w-16 h-px bg-white mx-auto mb-16"></div>

          <div className="space-y-12">
            <div>
              <div className="text-6xl font-extralight mb-4">$1,000</div>
              <div className="text-xl font-light text-gray-300 mb-12">Monthly Partnership</div>
            </div>

            <div className="max-w-md mx-auto space-y-6 text-left">
              <div className="flex items-center space-x-4">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <span className="font-light">Complete visual identity system</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <span className="font-light">Comprehensive digital asset library</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <span className="font-light">Brand language and messaging framework</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <span className="font-light">Design system and style guidelines</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <span className="font-light">Technical implementation guidance</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <span className="font-light">Ongoing strategic support</span>
              </div>
            </div>

            <div className="pt-12">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-light px-12 py-4 text-lg bg-transparent"
              >
                <a href="#contact" className="flex items-center">
                  Begin Partnership
                  <ArrowRight className="ml-3 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-6xl font-extralight text-black mb-12 leading-tight">Ready to Begin?</h2>
          <div className="w-24 h-px bg-black mx-auto mb-16"></div>
          <p className="text-xl font-light text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            Join a select group of visionary startups who have transformed their presence through exceptional brand
            design.
          </p>
          <div className="space-y-6">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-900 text-white font-light px-16 py-4 text-lg transition-all duration-300"
            >
              <a href="#contact">Schedule Consultation</a>
            </Button>
            <div>
              <button className="text-gray-600 hover:text-black font-light underline underline-offset-4 transition-colors">
                View Selected Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 bg-gray-50">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extralight text-black mb-6">Begin Your Journey</h2>
            <div className="w-16 h-px bg-black mx-auto mb-8"></div>
            <p className="text-xl font-light text-gray-600 leading-relaxed">
              Share your vision with us. We'll respond within 24 hours to discuss how we can bring your brand to life.
            </p>
          </div>

          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-light text-gray-600 mb-3">Name</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 bg-transparent py-3 focus:border-black focus:outline-none transition-colors font-light"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-light text-gray-600 mb-3">Email</label>
                <input
                  type="email"
                  className="w-full border-b border-gray-300 bg-transparent py-3 focus:border-black focus:outline-none transition-colors font-light"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-light text-gray-600 mb-3">Company</label>
              <input
                type="text"
                className="w-full border-b border-gray-300 bg-transparent py-3 focus:border-black focus:outline-none transition-colors font-light"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-light text-gray-600 mb-3">Tell us about your vision</label>
              <textarea
                rows={4}
                className="w-full border-b border-gray-300 bg-transparent py-3 focus:border-black focus:outline-none transition-colors font-light resize-none"
                required
              ></textarea>
            </div>

            <div className="text-center pt-8">
              <Button
                type="submit"
                size="lg"
                className="bg-black hover:bg-gray-900 text-white font-light px-16 py-4 text-lg transition-all duration-300"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-2xl font-light tracking-wide text-black mb-8 md:mb-0">Design for Startups</div>
            <div className="flex space-x-12 text-gray-600 font-light">
              <a href="#" className="hover:text-black transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-12 pt-12 text-center">
            <p className="text-gray-500 font-light">© 2024 Design for Startups. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
