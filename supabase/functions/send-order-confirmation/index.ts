import { serve } from "https://deno.land/std@0.192.0/http/server.ts"
import { Resend } from "https://esm.sh/resend"

const resend = new Resend(Deno.env.get("RESEND_API_KEY"))

serve(async (req: any) => {
  try {
    const {
      orderId,
      customerEmail,
      adminEmail,
      total,
      contactNumber,
      shippingAddress,
    } = await req.json()

    if (!customerEmail || !orderId) {
      return new Response("Missing required fields", { status: 400 })
    }

    /* ---------------- CUSTOMER EMAIL ---------------- */
    await resend.emails.send({
      from: "MML Gems & Jewellers <orders@mmlgemsandjewellers.com>",
      to: customerEmail,
      subject: "Order Confirmation – MML Gems & Jewellers",
      html: `
        <h2>Thank you for your inquiry</h2>
        <p>We have received your order request.</p>

        <p><strong>Order ID:</strong> ${orderId}</p>
        <p><strong>Total Value:</strong> USD ${total.toFixed(2)}</p>
        <p><strong>Shipping Address:</strong><br/>${shippingAddress}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>

        <br/>
        <p>
          Our team will contact you shortly to confirm availability,
          pricing, and delivery details.
        </p>

        <p>
          Regards,<br/>
          <strong>MML Gems & Jewellers</strong><br/>
          Colombo, Sri Lanka
        </p>
      `,
    })

    /* ---------------- ADMIN EMAIL ---------------- */
    await resend.emails.send({
      from: "MML Gems & Jewellers <orders@mmlgemsandjewellers.com>",
      to: adminEmail,
      subject: `New Order Confirmation Required – ${orderId}`,
      html: `
        <h2>New Order Received</h2>

        <p><strong>Order ID:</strong> ${orderId}</p>
        <p><strong>Total Value:</strong> USD ${total.toFixed(2)}</p>
        <p><strong>Customer Email:</strong> ${customerEmail}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>

        <p><strong>Shipping Address:</strong><br/>${shippingAddress}</p>

        <br/>
        <p>Please follow up with the customer to finalize this order.</p>
      `,
    })

    return new Response(
        JSON.stringify({ success: true }),
        { headers: { "Content-Type": "application/json" } }
    )
  } catch (error) {
    return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500 }
    )
  }
})
