import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, company, email, message } = req.body

  if (!name || !company || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `CrestLab Web <${process.env.GMAIL_USER}>`,
      to: 'info@crestlab-inc.com',
      subject: 'CrestLab Webサイトからのお問い合わせ',
      text: `【お名前】${name}\n【会社名】${company}\n【メールアドレス】${email}\n【メッセージ】\n${message}`,
    })
    res.status(200).json({ message: 'メール送信に成功しました' })
  } catch (error) {
    console.error('メール送信エラー:', error);
    res.status(500).json({ message: 'メール送信に失敗しました', error })
  }
} 