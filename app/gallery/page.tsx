import fs from "fs/promises"
import path from "path"
import Image from "next/image"
import MasonryGallery from "@/components/masonry-gallery"
import { siteConfig } from "@/content/site"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

// Generate on each request so newly added images in public/ appear without a rebuild
export const dynamic = "force-dynamic"

async function getImagesFrom(dir: string) {
  const abs = path.join(process.cwd(), "public", dir)
  try {
    const entries = await fs.readdir(abs, { withFileTypes: true })
    return entries
      .filter((e) => e.isFile())
      .map((e) => `/${dir}/${e.name}`)
      .filter((p) => p.match(/\.(jpe?g|png|webp|gif)$/i))
      .sort((a, b) => {
        // Extract numeric part from filename for proper numerical sorting
        const numA = parseInt(a.match(/\/(\d+)\./)?.[1] || "0", 10)
        const numB = parseInt(b.match(/\/(\d+)\./)?.[1] || "0", 10)
        return numA - numB
      })
  } catch {
    return []
  }
}

export default async function GalleryPage() {
  const mobileImages = await getImagesFrom("mobile-background")
  const desktopImages = await getImagesFrom("desktop-background")
  const allImages = [...mobileImages, ...desktopImages]
  const images = allImages.map((src) => {
    const category = src.includes("mobile-background") ? "mobile" as const : "desktop" as const
    return { src, category }
  })

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#8B1E1E]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(243,198,108,0.42)_0%,_transparent_52%)] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(243,198,108,0.3)_0%,_transparent_55%)] opacity-80" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05]" />
      </div>

      {/* Flower decoration - top left corner */}
      <div className="absolute left-0 top-0 z-0 pointer-events-none">
        <Image
          src="/decoration/flower-decoration-left-bottom-corner2.png"
          alt="Flower decoration"
          width={300}
          height={300}
          className="w-auto h-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] opacity-65 scale-y-[-1]"
          priority={false}
          style={{ filter: "brightness(0) saturate(100%) invert(22%) sepia(48%) saturate(1813%) hue-rotate(344deg) brightness(89%) contrast(90%)" }}
        />
      </div>

      {/* Flower decoration - top right corner */}
      <div className="absolute right-0 top-0 z-0 pointer-events-none">
        <Image
          src="/decoration/flower-decoration-left-bottom-corner2.png"
          alt="Flower decoration"
          width={300}
          height={300}
          className="w-auto h-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] opacity-65 scale-x-[-1] scale-y-[-1]"
          priority={false}
          style={{ filter: "brightness(0) saturate(100%) invert(22%) sepia(48%) saturate(1813%) hue-rotate(344deg) brightness(89%) contrast(90%)" }}
        />
      </div>

      {/* Flower decoration - left bottom corner */}
      <div className="absolute left-0 bottom-0 z-0 pointer-events-none">
        <Image
          src="/decoration/flower-decoration-left-bottom-corner2.png"
          alt="Flower decoration"
          width={300}
          height={300}
          className="w-auto h-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] opacity-65"
          priority={false}
          style={{ filter: "brightness(0) saturate(100%) invert(22%) sepia(48%) saturate(1813%) hue-rotate(344deg) brightness(89%) contrast(90%)" }}
        />
      </div>

      {/* Flower decoration - right bottom corner */}
      <div className="absolute right-0 bottom-0 z-0 pointer-events-none">
        <Image
          src="/decoration/flower-decoration-left-bottom-corner2.png"
          alt="Flower decoration"
          width={300}
          height={300}
          className="w-auto h-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] opacity-65 scale-x-[-1]"
          priority={false}
          style={{ filter: "brightness(0) saturate(100%) invert(22%) sepia(48%) saturate(1813%) hue-rotate(344deg) brightness(89%) contrast(90%)" }}
        />
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="text-center mb-6 sm:mb-8 md:mb-10 px-3 sm:px-4">
          {/* Decorative element above title */}
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="w-8 sm:w-12 md:w-16 h-px bg-[#F3C66C]/45" />
            <div className="w-1.5 h-1.5 bg-[#F3C66C] rounded-full shadow-[0_0_14px_rgba(243,198,108,0.7)]" />
            <div className="w-1.5 h-1.5 bg-[#F3C66C]/60 rounded-full" />
            <div className="w-1.5 h-1.5 bg-[#F3C66C] rounded-full" />
            <div className="w-8 sm:w-12 md:w-16 h-px bg-[#F3C66C]/45" />
          </div>

          <h1
            className={`${montserrat.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#FEF7DB] mb-2 sm:mb-3 md:mb-4`}
            style={{
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              textShadow: "0 4px 18px rgba(0,0,0,0.8)",
            }}
          >
            Our Love Story Gallery
          </h1>
          <p
            className={`${montserrat.className} text-xs sm:text-sm md:text-base lg:text-lg text-[#FDEFD0] font-normal max-w-xl mx-auto leading-relaxed px-2`}
          >
            Every photograph tells a story of {siteConfig.couple.groomNickname} & {siteConfig.couple.brideNickname}&apos;s journey to forever
          </p>

          {/* Decorative element below subtitle */}
          <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
            <div className="w-1.5 h-1.5 bg-[#F3C66C] rounded-full" />
            <div className="w-1.5 h-1.5 bg-[#F3C66C]/60 rounded-full" />
            <div className="w-1.5 h-1.5 bg-[#F3C66C] rounded-full" />
          </div>
        </div>

        {images.length === 0 ? (
          <div className={`${montserrat.className} text-center text-[#FDEFD0]`}>
            <p className="font-normal">
              No images found. Add files to{" "}
              <code className="px-2 py-1 bg-[#FDF6EA]/90 rounded border border-[#E0C5A2] text-[#3C2A25]">
                public/mobile-background or public/desktop-background
              </code>
              .
            </p>
          </div>
        ) : (
          <MasonryGallery images={images} />
        )}
      </section>
    </main>
  )
}


