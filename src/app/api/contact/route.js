import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const requiredFields = [
    "name",
    "email",
    "phone",
    "linkedin",
    "business",
    "message",
];

const escapeHtml = (value) =>
    String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

// Simple rate limiting: store IPs with timestamp (in production, use Redis)
const rateLimitMap = new Map();

const checkRateLimit = (ip, maxRequests = 5, windowMs = 60000) => {
    const now = Date.now();
    const userRequests = rateLimitMap.get(ip) || [];

    // Filter out old requests outside the window
    const recentRequests = userRequests.filter(time => now - time < windowMs);

    if (recentRequests.length >= maxRequests) {
        return false;
    }

    recentRequests.push(now);
    rateLimitMap.set(ip, recentRequests);
    return true;
};

const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

const validatePhone = (phone) => {
    // Basic international phone format
    const phonePattern = /^[\d\s\-\+\(\)]{7,}$/;
    return phonePattern.test(phone);
};

const generateEmailHTML = (data) => {
    const accentColor = "#2563eb"; // Professional blue
    const lightBg = "#f8fafc";
    const borderColor = "#e2e8f0";

    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f1f5f9;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 20px 0;">
            <tr>
                <td align="center">
                    <!-- Main container -->
                    <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                        
                        <!-- Header -->
                        <tr>
                            <td style="background: linear-gradient(135deg, ${accentColor} 0%, #1e40af 100%); padding: 40px 30px; text-align: center;">
                                <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">New Contact Submission</h1>
                                <p style="margin: 8px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">From: Eves Against The Odds</p>
                            </td>
                        </tr>
                        
                        <!-- Metadata -->
                        <tr>
                            <td style="padding: 24px 30px; background-color: ${lightBg}; border-bottom: 1px solid ${borderColor};">
                                <table width="100%" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td style="color: #64748b; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Received</td>
                                        <td align="right" style="color: #1e293b; font-size: 13px; font-weight: 500;">${new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        
                        <!-- Content -->
                        <tr>
                            <td style="padding: 30px;">
                                <!-- Contact Information Section -->
                                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                                    <tr>
                                        <td>
                                            <h2 style="margin: 0 0 20px 0; color: #0f172a; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid ${accentColor}; padding-bottom: 10px;">Submitter Information</h2>
                                        </td>
                                    </tr>
                                </table>
                                
                                <!-- Contact Details Grid -->
                                <table width="100%" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td width="50%" valign="top" style="padding-right: 15px; margin-bottom: 20px;">
                                            <p style="margin: 0 0 6px 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</p>
                                            <p style="margin: 0; color: #0f172a; font-size: 15px; font-weight: 500; line-height: 1.5;">${data.name}</p>
                                        </td>
                                        <td width="50%" valign="top" style="padding-left: 15px; margin-bottom: 20px;">
                                            <p style="margin: 0 0 6px 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                                            <p style="margin: 0; color: #0f172a; font-size: 15px; font-weight: 500; line-height: 1.5;">
                                                <a href="mailto:${data.email}" style="color: ${accentColor}; text-decoration: none;">${data.email}</a>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="50%" valign="top" style="padding-right: 15px; margin-bottom: 20px;">
                                            <p style="margin: 0 0 6px 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</p>
                                            <p style="margin: 0; color: #0f172a; font-size: 15px; font-weight: 500; line-height: 1.5;">
                                                <a href="tel:${data.phone}" style="color: ${accentColor}; text-decoration: none;">${data.phone}</a>
                                            </p>
                                        </td>
                                        <td width="50%" valign="top" style="padding-left: 15px; margin-bottom: 20px;">
                                            <p style="margin: 0 0 6px 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">LinkedIn</p>
                                            <p style="margin: 0; color: #0f172a; font-size: 15px; font-weight: 500; line-height: 1.5;">
                                                <a href="${data.linkedin}" target="_blank" style="color: ${accentColor}; text-decoration: none; word-break: break-all;">View Profile</a>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2" style="margin-bottom: 20px;">
                                            <p style="margin: 0 0 6px 0; color: #64748b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Business / Startup</p>
                                            <p style="margin: 0; color: #0f172a; font-size: 15px; font-weight: 500; line-height: 1.5;">${data.business}</p>
                                        </td>
                                    </tr>
                                </table>
                                
                                <!-- Message Section -->
                                <div style="margin-top: 30px; padding-top: 30px; border-top: 1px solid ${borderColor};">
                                    <h2 style="margin: 0 0 16px 0; color: #0f172a; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid ${accentColor}; padding-bottom: 10px;">Message</h2>
                                    <div style="background-color: ${lightBg}; padding: 16px; border-radius: 6px; border-left: 4px solid ${accentColor};">
                                        <p style="margin: 0; color: #0f172a; font-size: 14px; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word;">${data.message}</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        
                        <!-- Footer -->
                        <tr>
                            <td style="padding: 24px 30px; background-color: ${lightBg}; border-top: 1px solid ${borderColor}; text-align: center;">
                                <p style="margin: 0; color: #64748b; font-size: 12px; line-height: 1.5;">
                                    This is an automated email from your contact form. 
                                    <br />
                                    <strong>Reply directly to this email</strong> to respond to the submitter.
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    `;
};

export async function POST(request) {
    try {
        // Get client IP for rate limiting
        const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
            request.headers.get('x-real-ip') ||
            'unknown';

        // Check rate limiting
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { message: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }

        const body = await request.json();

        // Validate required fields
        const missingField = requiredFields.find((field) => !body?.[field]?.trim());
        if (missingField) {
            return NextResponse.json(
                {
                    message: `"${missingField}" is required.`,
                    field: missingField
                },
                { status: 400 }
            );
        }

        // Validate email
        if (!validateEmail(body.email)) {
            return NextResponse.json(
                {
                    message: "Please enter a valid email address.",
                    field: "email"
                },
                { status: 400 }
            );
        }

        // Validate phone
        if (!validatePhone(body.phone)) {
            return NextResponse.json(
                {
                    message: "Please enter a valid phone number.",
                    field: "phone"
                },
                { status: 400 }
            );
        }

        // Check environment variables
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error("Email service not configured");
            return NextResponse.json(
                { message: "Email service is temporarily unavailable. Please try again later." },
                { status: 503 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const recipient = process.env.SMTP_USER;
        const sender = process.env.SMTP_USER;

        // Sanitize data
        const safeData = Object.fromEntries(
            Object.entries(body).map(([key, value]) => [key, escapeHtml(value)])
        );

        // Send email
        await transporter.sendMail({
            from: `"EATO Contact Form" <${sender}>`,
            to: recipient,
            replyTo: body.email,
            subject: `[New Inquiry] ${body.name} - ${body.business}`,
            text: [
                "=== New Contact Form Submission ===",
                "",
                `Full Name: ${body.name}`,
                `Email: ${body.email}`,
                `Phone: ${body.phone}`,
                `LinkedIn: ${body.linkedin}`,
                `Business: ${body.business}`,
                "",
                "Message:",
                body.message,
                "",
                "---",
                `Submitted on: ${new Date().toLocaleString()}`,
            ].join("\n"),
            html: generateEmailHTML(safeData),
        });

        // Verify email was sent
        console.log(`Contact form submitted by ${body.name} (${body.email})`);

        return NextResponse.json(
            {
                message: "Thank you! Your inquiry has been submitted successfully. We'll get back to you soon.",
                success: true
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Contact form error:", {
            message: error.message,
            code: error.code,
            timestamp: new Date().toISOString(),
        });

        return NextResponse.json(
            {
                message: "We encountered an error sending your message. Please try again later or contact us directly.",
                error: process.env.NODE_ENV === 'development' ? error.message : undefined
            },
            { status: 500 }
        );
    }
}