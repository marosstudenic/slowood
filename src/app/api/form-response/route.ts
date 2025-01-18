import { sendEmail } from "@/app/actions/sendMail";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  console.log('req', req)
  const { name, email, phone, message } = await req.json();

  try {
    await sendEmail({ name, email, phone, message });
    return new Response(JSON.stringify({ message: 'Email bol odoslaný' }), { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error: 'Opravedlňujeme sa, nastala chyba na našej strane, skúste nám zavolať na uvedené číslo' }), { status: 500 });
  }
}