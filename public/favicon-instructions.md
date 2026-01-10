# Favicon Setup Instructions

## Files to place in /public/:

1. `favicon.ico` - Main favicon (required)
2. `apple-touch-icon.png` - iOS homescreen icon (180x180)
3. `favicon-32x32.png` - Modern browsers (32x32)
4. `favicon-16x16.png` - Modern browsers (16x16)

## How to generate:

1. Go to https://favicon.io
2. Upload your MAX MOTION logo
3. Download the generated package
4. Copy the files to /public/ folder
5. Replace the existing favicon.ico

## After updating:

Restart your dev server to see the new favicon:
```bash
npm run dev
```

The favicon will appear in:
- Browser tabs
- Bookmarks
- Browser history
- Mobile home screens (when bookmarked)
