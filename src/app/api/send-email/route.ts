// app/api/send-email/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message, budget, lang } = await req.json();

  try {
    // 1. Enviar correo al administrador
    const adminEmail = await resend.emails.send({
      from: "Gio Form <onboarding@resend.dev>",
      to: ["giovanniantoniovazquezrangel@gmail.com"],
      subject: `💻 Nueva solicitud de cotización de ${name}`,
      replyTo: email,
      html: `
        <div style="max-width:600px;margin:0 auto;padding:0;border:1px solid #e0e0e0;border-radius:8px;font-family:sans-serif;background-color:#ffffff;overflow:hidden;">
          <div style="background: linear-gradient(135deg, #7f00ff, #e100ff); padding:40px 20px; text-align:center; color:white; position:relative;">
            <h1 style="margin:0; font-size:28px; letter-spacing:2px;">💼 CHAMBA</h1>
          </div>
          <div style="padding:20px; position:relative;">
            <h2 style="color:#2d2d2d; margin-top:0;">💻 Nueva cotización recibida</h2>
            <p style="font-size:16px; color:#555;">Hola Gio,</p>
            <p style="font-size:16px; color:#555;">Has recibido una nueva solicitud de cotización con los siguientes detalles:</p>
            <table style="width:100%; margin-top:20px;">
              <tr>
                <td style="padding:8px 0;"><strong>👤 Nombre:</strong></td>
                <td style="padding:8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;"><strong>📧 Email:</strong></td>
                <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#3b82f6;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding:8px 0;"><strong>💰 Presupuesto:</strong></td>
                <td style="padding:8px 0;">${budget}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; vertical-align:top;"><strong>📝 Mensaje:</strong></td>
                <td style="padding:8px 0;">${message}</td>
              </tr>
            </table>
            <p style="margin-top:30px; font-size:14px; color:#999;">Este correo fue generado automáticamente desde el formulario de cotización.</p>
          </div>
        </div>
      `,
    });

    // 2. Determinar idioma del cliente
    const isSpanish = lang === "es";

    // 3. HTML del email de confirmación
    const confirmationHtml = isSpanish
      ? `
        <div style="max-width:600px;margin:0 auto;padding:0;border:1px solid #e0e0e0;border-radius:8px;font-family:'Segoe UI', sans-serif;background-color:#ffffff;overflow:hidden;">
          <div style="background: linear-gradient(135deg, #7f00ff, #e100ff); padding:40px 20px; text-align:center; color:white;">
            <h1 style="margin:0; font-size:28px;">🙌 ¡Gracias por tu mensaje!</h1>
          </div>
          <div style="padding:24px;">
            <p style="font-size:16px; color:#333; margin:0 0 16px;">Hola <strong>${name}</strong>,</p>
            <p style="font-size:16px; color:#555; margin:0 0 16px;">Hemos recibido tu solicitud de cotización. En breve me pondré en contacto contigo para darte seguimiento.</p>
            <div style="margin:24px 0; padding:16px; background:#f9f9f9; border-left:4px solid #7f00ff;">
              <h3 style="margin:0 0 12px; font-size:18px; color:#7f00ff;">🧾 Resumen de tu solicitud</h3>
              <table style="width:100%; font-size:15px; color:#444;">
                <tr><td style="padding:6px 0;"><strong>👤 Nombre:</strong></td><td style="padding:6px 0;">${name}</td></tr>
                <tr><td style="padding:6px 0;"><strong>📧 Email:</strong></td><td style="padding:6px 0;">${email}</td></tr>
                <tr><td style="padding:6px 0;"><strong>💰 Presupuesto:</strong></td><td style="padding:6px 0;">${budget}</td></tr>
                <tr><td style="padding:6px 0; vertical-align:top;"><strong>📝 Mensaje:</strong></td><td style="padding:6px 0;">${message}</td></tr>
              </table>
            </div>
            <p style="font-size:15px; color:#555;">Si tienes alguna duda adicional o deseas agregar más detalles, puedes responder directamente a este correo.</p>
            <p style="font-size:15px; color:#999; margin-top:40px; text-align:center;">— Gio Vazquez</p>
          </div>
        </div>
      `
      : `
        <div style="max-width:600px;margin:0 auto;padding:0;border:1px solid #e0e0e0;border-radius:8px;font-family:'Segoe UI', sans-serif;background-color:#ffffff;overflow:hidden;">
          <div style="background: linear-gradient(135deg, #7f00ff, #e100ff); padding:40px 20px; text-align:center; color:white;">
            <h1 style="margin:0; font-size:28px;">🙌 Thank you for your message!</h1>
          </div>
          <div style="padding:24px;">
            <p style="font-size:16px; color:#333; margin:0 0 16px;">Hi <strong>${name}</strong>,</p>
            <p style="font-size:16px; color:#555; margin:0 0 16px;">We've received your quote request. I will contact you shortly to follow up.</p>
            <div style="margin:24px 0; padding:16px; background:#f9f9f9; border-left:4px solid #7f00ff;">
              <h3 style="margin:0 0 12px; font-size:18px; color:#7f00ff;">🧾 Summary of your request</h3>
              <table style="width:100%; font-size:15px; color:#444;">
                <tr><td style="padding:6px 0;"><strong>👤 Name:</strong></td><td style="padding:6px 0;">${name}</td></tr>
                <tr><td style="padding:6px 0;"><strong>📧 Email:</strong></td><td style="padding:6px 0;">${email}</td></tr>
                <tr><td style="padding:6px 0;"><strong>💰 Budget:</strong></td><td style="padding:6px 0;">${budget}</td></tr>
                <tr><td style="padding:6px 0; vertical-align:top;"><strong>📝 Message:</strong></td><td style="padding:6px 0;">${message}</td></tr>
              </table>
            </div>
            <p style="font-size:15px; color:#555;">If you have any additional questions or would like to provide more details, you can reply to this email.</p>
            <p style="font-size:15px; color:#999; margin-top:40px; text-align:center;">— Gio Vazquez</p>
          </div>
        </div>
      `;

    // 4. Enviar confirmación al cliente
    const confirmationEmail = await resend.emails.send({
      from: "Gio Form <onboarding@resend.dev>",
      to: [email],
      subject: isSpanish
        ? "🎉 ¡Hemos recibido tu solicitud!"
        : "🎉 We’ve received your request!",
      html: confirmationHtml,
    });

    return NextResponse.json({ success: true, adminEmail, confirmationEmail });
  } catch (error) {
    console.error("Error al enviar correos:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
