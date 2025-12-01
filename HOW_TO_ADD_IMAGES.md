# How to Add Your Own Images to the Portfolio

## The Fix Applied
I fixed the gallery image sizing issue by adding the missing CSS carousel styles. The images will now display at 30% width (about 3 visible at a time) instead of full size.

## How to Replace Placeholder Images with Your Own

### Option 1: Using Git (Recommended)
1. Place your image files in the `assets/` folder on your computer
2. Name them to match the existing files (or update the HTML references):
   - `p-mit-fibers.svg` (or .jpg, .png)
   - `p-hwo.svg`
   - `p-starship.svg`
   - `p-esa-spectra.svg`
   - etc.

3. Commit and push to GitHub:
   ```bash
   git add assets/
   git commit -m "Add project images"
   git push origin main
   ```

4. GitHub Pages will automatically update in 1-2 minutes

### Option 2: Using GitHub Web Interface
1. Go to https://github.com/Gautier242/portfolio
2. Navigate to the `assets/` folder
3. Click "Add file" → "Upload files"
4. Drag and drop your images
5. Click "Commit changes"
6. Your site will update automatically

## Image Format Tips
- SVG files are best for graphics/diagrams (scalable, small file size)
- JPG/PNG work great for photos
- Keep images under 500KB each for fast loading
- Recommended dimensions: 400x300px or similar aspect ratio

## Current Placeholder Images
I created simple placeholder SVGs for the missing images. Replace these with your actual project images when ready.

## Testing Locally
To preview changes before pushing:
1. Open `index.html` in your browser
2. Check that images display correctly
3. Then push to GitHub when satisfied
