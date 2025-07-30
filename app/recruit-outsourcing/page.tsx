"use client"

import Link from "next/link"

export default function RecruitOutsourcing() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4 md:px-8 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#696969] mb-6 text-center">
          【業務委託募集】アニメ制作セレクション業務
        </h1>
        <p className="text-lg text-[#696969] mb-8 text-center">
          株式会社CrestLabでは、アニメ制作の新しい形を共に創る業務委託メンバーを募集しています。<br />
          本募集は「業務委託」としての契約となり、柔軟な働き方・リモートワークが可能です。<br />
          クリエイターが創作に集中できる環境づくりに共感いただける方のご応募をお待ちしています。
        </p>
        <div className="flex justify-center mb-8">
          {/* <img src="/wantedly-logo.png" alt="Wantedlyロゴ" style={{ maxWidth: '320px', width: '100%', height: 'auto' }} /> */}
        </div>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#696969] mb-4">募集要項</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">仕事内容</h3>
            <p className="mb-2">私たちは、クリエイターが創作にもっと集中できる世界を目指して、従来のアニメ制作フローに、柔軟で効率的な新しい仕組みを導入しています。</p>
            <p className="mb-2">このプロジェクトでは、作業負荷の高い一部工程を支援する仕組みを構築し、クリエイターが「本当にやりたいこと」に向き合える環境づくりを進めています。</p>
            <p className="mb-2">あなたにお願いしたいのは、最新の制作フローで生成された大量の素材の中から、"作品の顔"となるカットを選び抜くという大切な役割。</p>
            <p className="mb-2">ただの検品ではなく、「クオリティを見極め、作品の完成度を決める」創作の一翼を担うポジションです。</p>
            <h4 className="font-semibold mt-4 mb-1">具体的な業務内容</h4>
            <ul className="list-disc pl-6 text-gray-700 mb-2">
              <li>朝6時に数百枚〜数千枚の中割イラストをアップいたします。その中割素材の中から、タイムシートに沿った作品にふさわしいフレームを選定する"セレクション業務"を行っていただきます。</li>
              <li>選び抜いた素材をフォルダに振り分け、簡単なレポートを記録</li>
              <li>イラストの一部レタッチ</li>
              <li>セレクション後のイラストを10時までに制作チームへ納品</li>
            </ul>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#696969] mb-4">求める人材</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">歓迎資格・経験</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-2">
              <li>Clip Studioの使用経験がある方</li>
              <li>アニメーター／動画マン／作画監督／仕上げ いずれかの実務経験</li>
            </ul>
            <h3 className="text-lg font-semibold mb-1 mt-4">求める人物像</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>朝の時間を活かして、集中して作業ができる方</li>
              <li>納期（朝10時）をしっかり守れる責任感のある方</li>
              <li>作画・動画の経験を活かして働きたい方</li>
              <li>チャットやスプレッドシートでしっかり報告できる方</li>
              <li>新しいアニメ制作の形にワクワクできる方</li>
            </ul>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#696969] mb-4">勤務時間・曜日</h2>
          <p className="mb-2">想定勤務時間：平日6時〜10時頃、および21時〜22時頃</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#696969] mb-4">休暇・休日</h2>
          <p className="mb-2">本業務は業務委託契約のため、勤務日・勤務時間・休暇等は原則として委託者の裁量により決定いただきます。</p>
          <p className="mb-2">ただし、納期や納品時間（例：朝10時までの提出）を遵守いただく必要があります。</p>
          <p className="mb-2">業務遂行が困難な場合は、事前にご相談いただければ調整可能です。</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#696969] mb-4">勤務地</h2>
          <p className="mb-2">基本的にリモートワーク（在宅）で業務を完結いただけます。</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#696969] mb-4">報酬</h2>
          <p className="mb-2">報酬は日額制で、業務実施日ごとに委託費が発生します。</p>
          <p className="mb-2">日額報酬例：1日あたり10,000円〜11,000円（スキルに応じて決定）</p>
          <p className="mb-2">月あたりの稼働日数に応じて、月額報酬の目安は20万〜22万円程度となります（稼働日数に応じて変動）。</p>
          <p className="mb-2">※日によって依頼自体が発生しないケースがございます。</p>
          <p className="mb-2">※報酬額はスキル・経験・業務範囲によりご相談のうえ決定します。</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#696969] mb-4">その他</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-2">
            <li>雇用形態: 業務委託</li>
            <li>給与・報酬: 10,000円 (日給)</li>
            <li>職歴: アニメーター: 1年 (望ましい)</li>
            <li>タグ: <span className="inline-block bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE] text-white px-2 py-1 rounded ml-1 mr-1">急募</span> <span className="inline-block bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE] text-white px-2 py-1 rounded">フルリモート</span></li>
          </ul>
        </section>
        <section className="mb-4">
          <h2 className="text-2xl font-bold text-[#696969] mb-4">応募方法</h2>
          <p className="mb-4">下記お問合せフォームから必要事項をご記載ください。</p>
          <div className="flex justify-center">
            <a
              href="https://forms.gle/1UroMk9c2gswiEwP7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-lg font-bold text-white rounded-md bg-gradient-to-r from-[#9AECEA] to-[#F6B7EE] shadow-lg hover:opacity-90 transition-opacity duration-300 text-center"
            >
              問い合わせフォームはこちら
            </a>
          </div>
        </section>
      </div>
    </main>
  )
} 