import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Star, ArrowRight, Code, MessageSquare, Palette, Zap, Cog, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0F1419]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#1A1F26] shadow-lg border-b border-[#2A3038]">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src="/images/logo.jpeg" alt="Meta Morphosis" className="h-10 w-auto" />
            <span className="text-xl font-bold text-white">Meta Morphosis</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-[#E8EAED] hover:text-[#FF6B35] transition">Services</a>
            <a href="#portfolio" className="text-[#E8EAED] hover:text-[#FF6B35] transition">Portfolio</a>
            <a href="#video" className="text-[#E8EAED] hover:text-[#FF6B35] transition">Video</a>
            <a href="#testimonials" className="text-[#E8EAED] hover:text-[#FF6B35] transition">Testimonials</a>
            <a href="#process" className="text-[#E8EAED] hover:text-[#FF6B35] transition">Process</a>
            <a href="#contact" className="text-[#E8EAED] hover:text-[#FF6B35] transition">Contact</a>
          </div>
          <Button className="btn-primary">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F1419] via-[#1A1F26] to-[#0F1419] pt-20 pb-32">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="up" delay={0}>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-6xl md:text-7xl font-bold leading-tight text-white">
                    Transform Your <span className="text-gradient">Business</span>
                  </h1>
                  <p className="text-xl text-[#9CA3AF]">
                    From Caterpillar to Butterfly: Your Digital Metamorphosis Starts Here
                  </p>
                </div>
                <p className="text-lg text-[#C5C7CB] leading-relaxed">
                  We craft digital experiences that evolve your business. Through innovative web design, intelligent AI solutions, and strategic branding, we guide you through complete transformation.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button className="btn-primary text-lg px-8 py-6">Start a Project</Button>
                  <Button className="btn-outline text-lg px-8 py-6">View Portfolio</Button>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={200}>
              <div className="relative h-96 md:h-full">
                <img src="/images/portfolio-accent.jpg" alt="Digital Transformation" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-20 bg-gradient-to-b from-[#0F1419] to-[#1A1F26]">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4 text-white">See Our Work in Action</h2>
              <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
                Watch how we transform businesses through innovative digital solutions
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={200}>
            <div className="max-w-4xl mx-auto">
              <div className="video-container bg-black rounded-2xl overflow-hidden shadow-2xl border border-[#2A3038]">
                <video 
                  controls 
                  autoPlay 
                  muted 
                  loop
                  className="w-full h-full"
                >
                  <source src="/videos/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#0F1419]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection direction="left">
              <div>
                <h2 className="text-5xl font-bold mb-6 text-white">Our Story</h2>
                <p className="text-[#C5C7CB] text-lg mb-4">
                  Meta Morphosis was born from a simple belief: every business has the potential to transform. Like the butterfly emerging from its chrysalis, companies can evolve into their best selves through strategic digital innovation.
                </p>
                <p className="text-[#C5C7CB] text-lg mb-4">
                  Founded by a team of digital strategists, designers, and developers, we've spent years perfecting the art of digital transformation. We don't just build websites—we architect complete digital ecosystems.
                </p>
                <p className="text-[#C5C7CB] text-lg">
                  Our mission is to be the catalyst for your business evolution, combining cutting-edge technology with creative vision to deliver measurable results.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={200}>
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#1B5E20] p-12 rounded-2xl text-white space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Our Mission</h3>
                  <p>To empower businesses through innovative digital solutions that drive growth, engagement, and lasting impact.</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">Our Vision</h3>
                  <p>To be the trusted partner in digital transformation, recognized for delivering exceptional results and fostering meaningful client relationships.</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">Our Differentiators</h3>
                  <ul className="space-y-2">
                    <li>✓ End-to-end digital solutions</li>
                    <li>✓ AI-powered innovation</li>
                    <li>✓ Data-driven strategy</li>
                    <li>✓ Dedicated support</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Achievement Stats */}
          <AnimatedSection direction="up">
            <div className="grid md:grid-cols-4 gap-8 pt-12 border-t border-[#2A3038]">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#FF6B35] mb-2">150+</div>
                <p className="text-[#9CA3AF]">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#1B5E20] mb-2">98%</div>
                <p className="text-[#9CA3AF]">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#00897B] mb-2">50+</div>
                <p className="text-[#9CA3AF]">Team Members</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#FF6B35] mb-2">8+</div>
                <p className="text-[#9CA3AF]">Years Experience</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-[#1A1F26] to-[#0F1419]">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 text-white">Our Services</h2>
              <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
                Comprehensive digital solutions designed to accelerate your transformation journey
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <AnimatedSection direction="up" delay={0}>
              <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border border-[#2A3038] bg-[#1A1F26]">
                <div className="w-14 h-14 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Code className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Web Design & Development</h3>
                <p className="text-[#9CA3AF] mb-4">
                  Stunning, responsive websites built with modern technologies. From concept to deployment, we create digital experiences that convert visitors into customers.
                </p>
                <ul className="space-y-2 text-sm text-[#C5C7CB]">
                  <li>✓ Responsive Design</li>
                  <li>✓ Performance Optimization</li>
                  <li>✓ E-commerce Solutions</li>
                </ul>
              </Card>
            </AnimatedSection>

            {/* Service 2 */}
            <AnimatedSection direction="up" delay={100}>
              <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border border-[#2A3038] bg-[#1A1F26]">
                <div className="w-14 h-14 bg-[#1B5E20] rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">AI Chatbots & Voice Agents</h3>
                <p className="text-[#9CA3AF] mb-4">
                  Intelligent conversational AI that enhances customer engagement. Our chatbots and voice agents provide 24/7 support and personalized interactions.
                </p>
                <ul className="space-y-2 text-sm text-[#C5C7CB]">
                  <li>✓ Natural Language Processing</li>
                  <li>✓ Multi-channel Integration</li>
                  <li>✓ Custom Training</li>
                </ul>
              </Card>
            </AnimatedSection>

            {/* Service 3 */}
            <AnimatedSection direction="up" delay={200}>
              <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border border-[#2A3038] bg-[#1A1F26]">
                <div className="w-14 h-14 bg-[#00897B] rounded-lg flex items-center justify-center mb-6">
                  <Palette className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Branding & Identity</h3>
                <p className="text-[#9CA3AF] mb-4">
                  Comprehensive brand strategy and visual identity that resonates with your audience. We craft brands that tell compelling stories and drive loyalty.
                </p>
                <ul className="space-y-2 text-sm text-[#C5C7CB]">
                  <li>✓ Logo Design</li>
                  <li>✓ Brand Guidelines</li>
                  <li>✓ Visual Strategy</li>
                </ul>
              </Card>
            </AnimatedSection>

            {/* Service 4 */}
            <AnimatedSection direction="up" delay={300}>
              <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border border-[#2A3038] bg-[#1A1F26]">
                <div className="w-14 h-14 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-6">
                  <Zap className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Digital Marketing Assets</h3>
                <p className="text-[#9CA3AF] mb-4">
                  Strategic content and marketing materials that amplify your message. From social media to email campaigns, we create assets that engage and convert.
                </p>
                <ul className="space-y-2 text-sm text-[#C5C7CB]">
                  <li>✓ Content Strategy</li>
                  <li>✓ Social Media Design</li>
                  <li>✓ Campaign Materials</li>
                </ul>
              </Card>
            </AnimatedSection>

            {/* Service 5 */}
            <AnimatedSection direction="up" delay={400}>
              <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border border-[#2A3038] bg-[#1A1F26]">
                <div className="w-14 h-14 bg-[#1B5E20] rounded-lg flex items-center justify-center mb-6">
                  <Cog className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Automation & AI Optimization</h3>
                <p className="text-[#9CA3AF] mb-4">
                  Streamline operations with intelligent automation. We implement AI-powered solutions that reduce manual work and increase efficiency across your business.
                </p>
                <ul className="space-y-2 text-sm text-[#C5C7CB]">
                  <li>✓ Workflow Automation</li>
                  <li>✓ Process Optimization</li>
                  <li>✓ Data Analytics</li>
                </ul>
              </Card>
            </AnimatedSection>

            {/* Service 6 */}
            <AnimatedSection direction="up" delay={500}>
              <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border border-[#2A3038] bg-[#1A1F26]">
                <div className="w-14 h-14 bg-[#00897B] rounded-lg flex items-center justify-center mb-6">
                  <ArrowRight className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Consulting & Strategy</h3>
                <p className="text-[#9CA3AF] mb-4">
                  Expert guidance on your digital transformation journey. Our consultants work with you to develop strategies aligned with your business goals.
                </p>
                <ul className="space-y-2 text-sm text-[#C5C7CB]">
                  <li>✓ Digital Strategy</li>
                  <li>✓ Technology Assessment</li>
                  <li>✓ Roadmap Development</li>
                </ul>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-[#0F1419]">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 text-white">Featured Projects</h2>
              <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
                Real transformations. Real results. See how we've helped businesses evolve.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            {/* Project 1 */}
            <AnimatedSection direction="up" delay={0}>
              <Card className="p-8 border border-[#2A3038] bg-gradient-to-r from-[#1A1F26] to-[#0F1419] hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-white">E-Commerce Platform Redesign</h3>
                    <p className="text-[#C5C7CB] mb-6">
                      Transformed a legacy e-commerce platform into a modern, high-performance marketplace that increased conversions by 45%.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="font-semibold text-white">Challenge</p>
                        <p className="text-[#9CA3AF]">Outdated UX, slow performance, poor mobile experience</p>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Solution</p>
                        <p className="text-[#9CA3AF]">Complete redesign with React, optimized database, mobile-first approach</p>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Results</p>
                        <p className="text-[#9CA3AF]">45% increase in conversions, 60% faster load times, 3x mobile traffic</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF8A50] rounded-lg h-64 flex items-center justify-center text-white text-center">
                    <div className="text-6xl">🛒</div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            {/* Project 2 */}
            <AnimatedSection direction="up" delay={100}>
              <Card className="p-8 border border-[#2A3038] bg-gradient-to-r from-[#0F1419] to-[#1A1F26] hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] rounded-lg h-64 flex items-center justify-center text-white text-center order-2 md:order-1">
                    <div className="text-6xl">🤖</div>
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-3xl font-bold mb-4 text-white">AI Customer Support System</h3>
                    <p className="text-[#C5C7CB] mb-6">
                      Implemented an intelligent chatbot system that reduced support costs by 60% while improving customer satisfaction scores.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="font-semibold text-white">Challenge</p>
                        <p className="text-[#9CA3AF]">High support costs, long response times, inconsistent service quality</p>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Solution</p>
                        <p className="text-[#9CA3AF]">Custom AI chatbot with NLP, multi-channel integration, human handoff</p>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Results</p>
                        <p className="text-[#9CA3AF]">60% cost reduction, 95% customer satisfaction, 24/7 availability</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            {/* Project 3 */}
            <AnimatedSection direction="up" delay={200}>
              <Card className="p-8 border border-[#2A3038] bg-gradient-to-r from-[#1A1F26] to-[#0F1419] hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-white">Brand Identity & Website Launch</h3>
                    <p className="text-[#C5C7CB] mb-6">
                      Complete brand overhaul including logo design, visual identity, and custom website that established market leadership.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="font-semibold text-white">Challenge</p>
                        <p className="text-[#9CA3AF]">Weak brand presence, outdated website, unclear market positioning</p>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Solution</p>
                        <p className="text-[#9CA3AF]">Strategic branding, modern design system, responsive website</p>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Results</p>
                        <p className="text-[#9CA3AF]">Brand recognition increased 200%, website traffic up 150%</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#00897B] to-[#00695C] rounded-lg h-64 flex items-center justify-center text-white text-center">
                    <div className="text-6xl">🎨</div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            {/* Project 4 */}
            <AnimatedSection direction="up" delay={300}>
              <Card className="p-8 border border-[#2A3038] bg-gradient-to-r from-[#0F1419] to-[#1A1F26] hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF8A50] rounded-lg h-64 flex items-center justify-center text-white text-center order-2 md:order-1">
                    <div className="text-6xl">📊</div>
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-3xl font-bold mb-4 text-white">Marketing Automation Platform</h3>
                    <p className="text-[#C5C7CB] mb-6">
                      Built a comprehensive marketing automation system that increased lead generation by 200% and improved conversion rates.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="font-semibold text-white">Challenge</p>
                        <p className="text-[#9CA3AF]">Manual marketing processes, low lead quality, poor tracking</p>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Solution</p>
                        <p className="text-[#9CA3AF]">Custom automation platform with CRM integration and analytics</p>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Results</p>
                        <p className="text-[#9CA3AF]">200% more leads, 35% higher conversion rate, 50% time savings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            {/* Project 5 */}
            <AnimatedSection direction="up" delay={400}>
              <Card className="p-8 border border-[#2A3038] bg-gradient-to-r from-[#1A1F26] to-[#0F1419] hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-white">Mobile App Development</h3>
                    <p className="text-[#C5C7CB] mb-6">
                      Developed a cross-platform mobile application that became the market leader in its category with 500K+ downloads.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="font-semibold text-white">Challenge</p>
                        <p className="text-[#9CA3AF]">No mobile presence, competitors gaining market share</p>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Solution</p>
                        <p className="text-[#9CA3AF]">Native iOS and Android apps with real-time sync and offline support</p>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Results</p>
                        <p className="text-[#9CA3AF]">500K+ downloads, 4.8 star rating, market leader status</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] rounded-lg h-64 flex items-center justify-center text-white text-center">
                    <div className="text-6xl">📱</div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            {/* Project 6 */}
            <AnimatedSection direction="up" delay={500}>
              <Card className="p-8 border border-[#2A3038] bg-gradient-to-r from-[#0F1419] to-[#1A1F26] hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-[#00897B] to-[#00695C] rounded-lg h-64 flex items-center justify-center text-white text-center order-2 md:order-1">
                    <div className="text-6xl">⚙️</div>
                  </div>
                  <div className="order-1 md:order-2">
                    <h3 className="text-3xl font-bold mb-4 text-white">Enterprise Workflow Automation</h3>
                    <p className="text-[#C5C7CB] mb-6">
                      Streamlined complex business processes through intelligent automation, reducing manual work by 80%.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="font-semibold text-white">Challenge</p>
                        <p className="text-[#9CA3AF]">Manual processes, data silos, inefficient workflows</p>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Solution</p>
                        <p className="text-[#9CA3AF]">Enterprise automation platform with AI-powered decision making</p>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Results</p>
                        <p className="text-[#9CA3AF]">80% manual work reduction, 40% cost savings, 3x productivity</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-[#1A1F26] to-[#0F1419]">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 text-white">Client Testimonials</h2>
              <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
                Hear from businesses that have undergone their digital metamorphosis
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <AnimatedSection direction="up" delay={0}>
              <Card className="p-8 border border-[#2A3038] bg-[#1A1F26] hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-[#FF6B35] text-[#FF6B35]" />
                  ))}
                </div>
                <p className="text-[#C5C7CB] mb-6 text-lg">
                  "Meta Morphosis transformed our online presence completely. Their team understood our vision and delivered beyond expectations. The results speak for themselves—our revenue increased by 150% in the first year."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#1B5E20] rounded-full"></div>
                  <div>
                    <p className="font-semibold text-white">Sarah Johnson</p>
                    <p className="text-sm text-[#9CA3AF]">CEO, TechStart Inc.</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            {/* Testimonial 2 */}
            <AnimatedSection direction="up" delay={100}>
              <Card className="p-8 border border-[#2A3038] bg-[#1A1F26] hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-[#FF6B35] text-[#FF6B35]" />
                  ))}
                </div>
                <p className="text-[#C5C7CB] mb-6 text-lg">
                  "Working with Meta Morphosis was a game-changer for our customer support. Their AI chatbot handles 80% of our inquiries, and our team can focus on complex issues. Highly recommended!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1B5E20] to-[#00897B] rounded-full"></div>
                  <div>
                    <p className="font-semibold text-white">Michael Chen</p>
                    <p className="text-sm text-[#9CA3AF]">Operations Director, Global Services</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            {/* Testimonial 3 */}
            <AnimatedSection direction="up" delay={200}>
              <Card className="p-8 border border-[#2A3038] bg-[#1A1F26] hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-[#FF6B35] text-[#FF6B35]" />
                  ))}
                </div>
                <p className="text-[#C5C7CB] mb-6 text-lg">
                  "The branding work Meta Morphosis did for us perfectly captured our company's essence. Our new brand identity has helped us attract premium clients and establish market authority."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00897B] to-[#FF6B35] rounded-full"></div>
                  <div>
                    <p className="font-semibold text-white">Emma Rodriguez</p>
                    <p className="text-sm text-[#9CA3AF]">Founder, Creative Agency Pro</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            {/* Testimonial 4 */}
            <AnimatedSection direction="up" delay={300}>
              <Card className="p-8 border border-[#2A3038] bg-[#1A1F26] hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-[#FF6B35] text-[#FF6B35]" />
                  ))}
                </div>
                <p className="text-[#C5C7CB] mb-6 text-lg">
                  "Their automation solutions saved us thousands of hours annually. The team was professional, responsive, and truly invested in our success. They're partners, not just vendors."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#00897B] rounded-full"></div>
                  <div>
                    <p className="font-semibold text-white">David Thompson</p>
                    <p className="text-sm text-[#9CA3AF]">VP Operations, Enterprise Corp</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="py-20 bg-[#0F1419]">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 text-white">Technologies & Tools</h2>
              <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
                We leverage the latest technologies to deliver cutting-edge solutions
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="bg-gradient-to-br from-[#1A1F26] to-[#0F1419] p-8 rounded-lg border border-[#2A3038]">
                <h3 className="text-2xl font-bold mb-6 text-[#FF6B35]">Frontend</h3>
                <div className="space-y-3">
                  <p className="text-[#C5C7CB]">React • Next.js • Vue.js • TypeScript • Tailwind CSS • Framer Motion</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={100}>
              <div className="bg-gradient-to-br from-[#1A1F26] to-[#0F1419] p-8 rounded-lg border border-[#2A3038]">
                <h3 className="text-2xl font-bold mb-6 text-[#1B5E20]">Backend</h3>
                <div className="space-y-3">
                  <p className="text-[#C5C7CB]">Node.js • Python • PostgreSQL • MongoDB • Firebase • AWS</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <div className="bg-gradient-to-br from-[#1A1F26] to-[#0F1419] p-8 rounded-lg border border-[#2A3038]">
                <h3 className="text-2xl font-bold mb-6 text-[#00897B]">AI & Automation</h3>
                <div className="space-y-3">
                  <p className="text-[#C5C7CB]">OpenAI • TensorFlow • Machine Learning • NLP • RPA • Zapier</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-b from-[#1A1F26] to-[#0F1419]">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 text-white">Our Process</h2>
              <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
                A proven methodology that ensures your success
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {[
              { step: "01", title: "Discovery", desc: "We dive deep into understanding your business, goals, and challenges through comprehensive research and stakeholder interviews." },
              { step: "02", title: "Strategy", desc: "Our team develops a detailed roadmap aligned with your objectives, identifying opportunities and defining success metrics." },
              { step: "03", title: "Design", desc: "We create compelling visual designs and user experiences that resonate with your audience and drive engagement." },
              { step: "04", title: "Build", desc: "Our developers bring designs to life with clean, efficient code and best practices, ensuring performance and scalability." },
              { step: "05", title: "Delivery", desc: "We deploy your solution with thorough testing, documentation, and training to ensure smooth implementation." },
              { step: "06", title: "Improvement", desc: "Post-launch, we monitor performance, gather feedback, and continuously optimize for better results." }
            ].map((item, index) => (
              <AnimatedSection key={index} direction="up" delay={index * 100}>
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-[#FF6B35] text-white font-bold text-2xl">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-[#9CA3AF] text-lg">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF6B35] to-[#1B5E20] text-white">
        <div className="container text-center">
          <AnimatedSection direction="up">
            <h2 className="text-5xl font-bold mb-6">Ready for Your Transformation?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Like the butterfly emerging from its chrysalis, your business is ready to evolve. Let's start your digital metamorphosis today.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button className="bg-white text-[#FF6B35] hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                Start Your Project
              </Button>
              <Button className="border-2 border-white text-white hover:bg-white hover:text-[#FF6B35] px-8 py-6 text-lg font-semibold">
                Schedule a Consultation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0F1419]">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
              <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
                Common questions about our services and process
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How long does a typical project take?",
                a: "Project timelines vary based on scope and complexity. A website redesign typically takes 8-12 weeks, while custom applications may take 3-6 months. We provide detailed timelines during the discovery phase."
              },
              {
                q: "What is your pricing model?",
                a: "We offer flexible pricing options including project-based, time-and-materials, and retainer models. Pricing depends on project scope, complexity, and your specific requirements. We provide transparent quotes after initial consultation."
              },
              {
                q: "Do you provide ongoing support?",
                a: "Yes, we offer comprehensive post-launch support including maintenance, updates, monitoring, and optimization. We can structure this as a retainer or hourly support package based on your needs."
              },
              {
                q: "Can you work with our existing systems?",
                a: "Absolutely. We specialize in integrating with existing platforms and systems. Our team assesses your current infrastructure and develops solutions that work seamlessly with your existing tools."
              },
              {
                q: "How do you ensure project success?",
                a: "We use a proven methodology combining discovery, strategy, design, development, and continuous improvement. Regular communication, clear milestones, and performance metrics ensure we stay aligned with your goals."
              },
              {
                q: "What if we need to make changes during the project?",
                a: "We build flexibility into our process. We use agile methodologies that allow for adjustments and refinements throughout development. Change requests are documented and managed to ensure project success."
              }
            ].map((item, index) => (
              <AnimatedSection key={index} direction="up" delay={index * 50}>
                <div className="border border-[#2A3038] rounded-lg overflow-hidden bg-[#1A1F26]">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 flex items-center justify-between hover:bg-[#252B33] transition"
                  >
                    <h3 className="text-lg font-semibold text-white text-left">{item.q}</h3>
                    <ChevronDown
                      size={24}
                      className={`text-[#FF6B35] transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6 text-[#C5C7CB]">
                      {item.a}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-[#1A1F26] to-[#0F1419]">
        <div className="container">
          <AnimatedSection direction="up">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 text-white">Get In Touch</h2>
              <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
                Let's discuss how we can help transform your business
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <AnimatedSection direction="up" delay={0}>
              <Card className="p-8 border border-[#2A3038] bg-[#1A1F26] text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#FF6B35] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
                <p className="text-[#9CA3AF]">hello@metamorphosis.io</p>
                <p className="text-[#9CA3AF]">support@metamorphosis.io</p>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={100}>
              <Card className="p-8 border border-[#2A3038] bg-[#1A1F26] text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#1B5E20] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Phone</h3>
                <p className="text-[#9CA3AF]">+1 (555) 123-4567</p>
                <p className="text-[#9CA3AF]">+1 (555) 987-6543</p>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <Card className="p-8 border border-[#2A3038] bg-[#1A1F26] text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#00897B] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Location</h3>
                <p className="text-[#9CA3AF]">123 Innovation Street</p>
                <p className="text-[#9CA3AF]">San Francisco, CA 94105</p>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="up" delay={300}>
            <div className="bg-gradient-to-br from-[#1A1F26] to-[#0F1419] p-12 rounded-lg border border-[#2A3038]">
              <h3 className="text-2xl font-bold mb-4 text-white">Quick Contact Form</h3>
              <p className="text-[#9CA3AF] mb-6">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="px-4 py-3 border border-[#2A3038] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] bg-[#0F1419] text-white placeholder-[#9CA3AF]" />
                <input type="email" placeholder="Your Email" className="px-4 py-3 border border-[#2A3038] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] bg-[#0F1419] text-white placeholder-[#9CA3AF]" />
                <input type="text" placeholder="Company" className="px-4 py-3 border border-[#2A3038] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] bg-[#0F1419] text-white placeholder-[#9CA3AF]" />
                <input type="text" placeholder="Phone" className="px-4 py-3 border border-[#2A3038] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] bg-[#0F1419] text-white placeholder-[#9CA3AF]" />
                <textarea placeholder="Tell us about your project" rows={4} className="md:col-span-2 px-4 py-3 border border-[#2A3038] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35] bg-[#0F1419] text-white placeholder-[#9CA3AF]"></textarea>
                <Button className="btn-primary md:col-span-2 text-lg">Send Message</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0D11] text-[#E8EAED] py-12 border-t border-[#2A3038]">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/images/logo.jpeg" alt="Meta Morphosis" className="h-8 w-auto" />
                <span className="font-bold text-lg text-white">Meta Morphosis</span>
              </div>
              <p className="text-[#9CA3AF]">
                Transforming businesses through innovative digital solutions.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-[#9CA3AF]">
                <li><a href="#services" className="hover:text-[#FF6B35] transition">Web Design</a></li>
                <li><a href="#services" className="hover:text-[#FF6B35] transition">AI Solutions</a></li>
                <li><a href="#services" className="hover:text-[#FF6B35] transition">Branding</a></li>
                <li><a href="#services" className="hover:text-[#FF6B35] transition">Automation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-[#9CA3AF]">
                <li><a href="#" className="hover:text-[#FF6B35] transition">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-[#FF6B35] transition">Portfolio</a></li>
                <li><a href="#" className="hover:text-[#FF6B35] transition">Blog</a></li>
                <li><a href="#contact" className="hover:text-[#FF6B35] transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-[#9CA3AF] hover:text-[#FF6B35] transition">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-[#9CA3AF] hover:text-[#FF6B35] transition">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-[#9CA3AF] hover:text-[#FF6B35] transition">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#2A3038] pt-8 text-center text-[#9CA3AF]">
            <p>&copy; 2024 Meta Morphosis. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
