import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Public folder eke thiyena PDF file eka read karaganna
    const filePath = path.join(process.cwd(), 'public', 'checklist.pdf');

    // File eka thiyenawada balanna
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'PDF file not found on server' }, { status: 500 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    // Email eka yawanna saha PDF eka attach karanna
    const data = await resend.emails.send({
      from: 'NexusLabs <onboarding@resend.dev>', 
      to: [email],
      subject: 'Your 2026 SaaS UI/UX Optimization Checklist',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2>Thanks for downloading! 🚀</h2>
          <p>Hi there,</p>
          <p>Here is your exclusive <strong>2026 SaaS UI/UX Optimization Checklist</strong> attached to this email.</p>
          <p>If you have any questions or need help scaling your digital product, feel free to reply to this email or visit our website.</p>
          <br/>
          <p>Best regards,<br/><strong>Senithu Nethviru</strong><br/>Founder & Lead Architect, NexusLabs</p>
        </div>
      `,
      attachments: [
        {
          filename: '2026-SaaS-UI-UX-Checklist.pdf',
          content: fileBuffer,
        },
      ],
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}