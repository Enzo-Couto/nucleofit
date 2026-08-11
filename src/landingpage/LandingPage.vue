<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import ProblemsSection from './components/ProblemsSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import DemoSection from './components/DemoSection.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import CTASection from './components/CTASection.vue'
import FAQSection from './components/FAQSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <Navbar />

    <main>
      <HeroSection />
      <ProblemsSection />
      <FeaturesSection />
      <DemoSection />
      <BenefitsSection />
      <CTASection />
      <FAQSection />
    </main>

    <FooterSection />
  </div>
</template>