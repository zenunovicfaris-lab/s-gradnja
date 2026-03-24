import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, phone, service, message } = body as {
    name: string
    email: string
    phone: string
    service: string
    message: string
  }

  if (!name || !email) {
    return NextResponse.json(
      { error: 'Ime i email su obavezni.' },
      { status: 400 }
    )
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: 'Unesite ispravnu email adresu.' },
      { status: 400 }
    )
  }

  // TODO: Dodati Nodemailer/Resend za slanje emaila na info@s-gradnja.ba
  console.log('Nova poruka od:', name, { email, phone, service, message })

  return NextResponse.json({ ok: true, message: 'Upit primljen!' })
}
