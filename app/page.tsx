import { EnhancedMouseTrail } from "@/components/enhanced-mouse-trail"
import { FireGlobe } from "@/components/fire-globe"
import { FloatingElements } from "@/components/floating-elements"
import { InteractiveGrid } from "@/components/interactive-grid"
import { NavigationHeader } from "@/components/navigation-header"
import { LoadingScreen } from "@/components/loading-screen"
import { ParticleSystem } from "@/components/particle-system"
import { SoundEffects } from "@/components/sound-effects"
import { ThemeToggle } from "@/components/theme-toggle"
import { ScrollAnimations } from "@/components/scroll-animations"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { StatsSection } from "@/components/stats-section"
import { ProjectsSection } from "@/components/projects-section"
import { ResearchSection } from "@/components/research-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Navigation */}
      <NavigationHeader />

      <main className="relative">
        {/* Interactive background elements */}
        <InteractiveGrid />
        <FireGlobe />
        <FloatingElements />
        <EnhancedMouseTrail />
        <ParticleSystem />

        {/* Main content sections with scroll animations */}
        <ScrollAnimations>
          <section id="hero">
            <HeroSection />
          </section>
        </ScrollAnimations>

        <ScrollAnimations>
          <section id="about">
            <AboutSection />
          </section>
        </ScrollAnimations>

        <ScrollAnimations>
          <section id="skills">
            <SkillsSection />
          </section>
        </ScrollAnimations>

        <ScrollAnimations>
          <section id="stats">
            <StatsSection />
          </section>
        </ScrollAnimations>

        <ScrollAnimations>
          <section id="projects">
            <ProjectsSection />
          </section>
        </ScrollAnimations>

        <ScrollAnimations>
          <section id="research">
            <ResearchSection />
          </section>
        </ScrollAnimations>

        <ScrollAnimations>
          <section id="testimonials">
            <TestimonialsSection />
          </section>
        </ScrollAnimations>

        <ScrollAnimations>
          <section id="contact">
            <ContactSection />
          </section>
        </ScrollAnimations>

        {/* Interactive Controls */}
        <SoundEffects />
        <ThemeToggle />
      </main>
    </>
  )
}
