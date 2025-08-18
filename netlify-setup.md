# Netlify Deployment Setup for EPCA React App

## ✅ What's Already Configured

1. **Netlify Functions** - Serverless functions to handle form submissions
2. **Netlify.toml** - Configuration for redirects and build settings
3. **Email Templates** - Beautiful HTML emails for each form type
4. **CORS Handling** - Proper cross-origin request handling

## 🚀 Deployment Steps

### 1. Environment Variables in Netlify Dashboard

Set these environment variables in your Netlify site settings:

```
RESEND_API_KEY=your_resend_api_key_here
FROM_EMAIL=noreply@epca.net.au
TO_EMAIL=contact@epca.net.au
```

### 2. Build Settings

In Netlify dashboard, set:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Functions directory**: `netlify/functions`

### 3. Development vs Production

The app automatically detects the environment:
- **Development**: Uses Express server at `localhost:3001`
- **Production**: Uses Netlify Functions at `/api/*`

## 📁 File Structure

```
netlify/
├── functions/
│   ├── package.json          # Dependencies for functions
│   ├── utils/
│   │   └── emailTemplates.js  # Shared email templates
│   ├── test-drive.js         # Test drive endpoint
│   ├── product-enquiry.js    # Product enquiry endpoint
│   ├── feasibility-study.js  # Feasibility study endpoint
│   ├── enquiry.js           # General enquiry endpoint
│   └── mailing-list.js      # Mailing list endpoint
└── netlify.toml             # Netlify configuration
```

## 🔧 Local Development

For local development, you can still use the Express server:

```bash
# Terminal 1: Start React app
npm run dev

# Terminal 2: Start Express server
cd server
npm run dev
```

## 📝 Next Steps

1. **Update remaining forms** to use the same URL pattern as Test Drive
2. **Test locally** with the Express server
3. **Deploy to Netlify** and test the functions
4. **Set up custom domain** and update CORS if needed

## 🔍 Testing Functions Locally

Install Netlify CLI:
```bash
npm install -g netlify-cli
```

Run functions locally:
```bash
netlify dev
```

This will run both your React app and Netlify Functions on the same domain.