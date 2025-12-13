# EmailJS Setup Guide

This portfolio uses EmailJS to send contact form emails without a backend server. Follow these steps to configure it:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Create an Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use these template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name (Kishore)
4. Copy your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key**

## Step 5: Update the Contact Component

Open `src/app/contact/contact.component.ts` and replace:

- `YOUR_PUBLIC_KEY` with your EmailJS Public Key
- `YOUR_SERVICE_ID` with your Service ID
- `YOUR_TEMPLATE_ID` with your Template ID

Example:
```typescript
await emailjs.send(
  'service_abc123',      // Your Service ID
  'template_xyz789',     // Your Template ID
  templateParams
);
```

## Step 6: Initialize EmailJS (Optional)

If you want to initialize EmailJS with your public key, uncomment and update this line in `ngOnInit()`:

```typescript
emailjs.init('YOUR_PUBLIC_KEY');
```

## Security Note

The Public Key is safe to expose in frontend code. EmailJS uses it to identify your account, but it doesn't grant full access. Your private API keys remain secure.

## Testing

1. Fill out the contact form
2. Submit it
3. Check your email inbox for the message
4. Check the EmailJS dashboard for delivery status

## Troubleshooting

- **Form not sending**: Check browser console for errors
- **Emails not received**: Check spam folder and EmailJS dashboard
- **Rate limit**: Free tier allows 200 emails/month

For more help, visit [EmailJS Documentation](https://www.emailjs.com/docs/)




