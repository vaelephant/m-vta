import Head from 'next/head'
import { useState, useEffect } from 'react';
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'; // 导入太阳和月亮图标



export default function Home() {
  const [darkMode, setDarkMode] = useState(true); // 默认设置为 true

  useEffect(() => {
    // 当页面加载时设置 dark mode
    document.documentElement.classList.add('dark');
  }, []); // 空数组表示仅在组件挂载时执行一次

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <button onClick={toggleDarkMode} className="fixed top-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md shadow-md z-50">
        {darkMode ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
      </button>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
