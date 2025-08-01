"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Calendar, TrendingUp } from "lucide-react"

const newsData = [
  {
    id: 1,
    title: "CrestLabがNTTドコモからスピンアウトしました！",
    description: "株式会社NTTドコモ（以下、ドコモ）は、NTTドコモグループ※1の新規事業創出プログラム「docomo STARTUPTM」を通じて社員が発案した、AIを活用した次世代のアニメ制作支援基盤「ANICRATM（読み：アニクラ）」を、スピンアウト※2することを決定しました。「ANICRA」を開発・運営する株式会社CrestLab（読み：クレストラボ、以下、CrestLab）の代表取締役社長は、ドコモ社員の坂東 裕太が務め、2025年8月1日（金曜）から事業を開始します。",
    date: "2025.08.01",
    image: "/anicra-product.png", // フォールバック用の画像
    url: "https://www.docomo.ne.jp/info/news_release/2025/08/01_00.html",
    featured: true,
    fallbackColor: "from-blue-600 to-blue-800",
    fallbackText: "NTTドコモ"
  },
  {
    id: 2,
    title: "シードラウンドの資金調達を実施しました！",
    description: "2025年8月1日、アニメ制作工程のDXを推進する株式会社CrestLab（本社：東京都千代田区、代表取締役：坂東裕太）は、AIアニメ制作支援基盤「ANICRA™（アニクラ）」の開発と提供体制の強化に向けて、シードラウンドでの資金調達を実施したことをお知らせいたします。本ラウンドでは、East Ventures（本社：東京都港区）、株式会社NTTドコモ（本社：東京都千代田区）、株式会社コルク（本社：東京都渋谷区）の3社を含む複数のベンチャーキャピタル・個人投資家からの出資を受けています。",
    date: "2025.08.01",
    image: "/anicra-seed-funding.png", // CrestLab発信記事用の新しい画像
    url: "https://prtimes.jp/main/html/rd/p/000000001.000166859.html",
    featured: false,
    fallbackColor: "from-purple-600 to-pink-600",
    fallbackText: "CrestLab"
  }
]

export default function NewsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            NEWS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto"></div>
        </motion.div>

                {/* News Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
          {newsData.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full flex flex-col transform perspective-1000 group-hover:rotate-y-3 group-hover:scale-105 group-hover:shadow-2xl group-hover:rotate-x-2 group-hover:translate-z-10">
                  {/* Card Header */}
                  <div className="relative aspect-video overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-gray-900/10 z-20"></div>
                    
                    {/* News image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          // 画像読み込みエラー時のフォールバック
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.parentElement?.querySelector('.fallback') as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className={`fallback absolute inset-0 bg-gradient-to-br ${news.fallbackColor} flex items-center justify-center`} style={{ display: 'none' }}>
                        <div className="text-white text-center">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <ExternalLink className="w-8 h-8" />
                          </div>
                          <p className="text-sm font-medium">{news.fallbackText}</p>
                        </div>
                      </div>
                    </div>



                    {/* Date Badge */}
                    <div className="absolute top-4 right-4 z-30">
                      <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {news.date}
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {news.featured && (
                      <div className="absolute bottom-4 left-4 z-30">
                        <span className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          FEATURED
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-grow min-h-[180px]">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors duration-300">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {news.description}
                    </p>
                    
                    {/* Read More */}
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-cyan-600 text-sm font-medium group-hover:text-pink-600 transition-colors duration-300">
                        記事を読む
                      </span>
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <ExternalLink className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
} 