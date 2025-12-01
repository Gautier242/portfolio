# Quick Guide: How to Replace Portfolio Images

## What I Just Did

I replaced 3 images for you:
1. **MIT/ISS project** → `ISS.png`
2. **SWOT project** → `swot_all_longer.gif` (animated!)
3. **Rover/PIML project** → `piml.png`

## How to Replace the Remaining Images

### Step 1: Copy Your Image to the Assets Folder

```bash
# From the portfolio directory:
cp /path/to/your/image.jpg assets/p-PROJECT-NAME.jpg
```

### Step 2: Update the HTML File

Open `index.html` and find the image reference. Change the file extension to match your new image:

**Example:** To replace the MEGS-AI image:
```html
<!-- OLD (placeholder SVG): -->
<img src="assets/p-megsai.svg" alt="MEGS-AI">

<!-- NEW (your image): -->
<img src="assets/p-megsai.jpg" alt="MEGS-AI">
```

### Step 3: Push to GitHub

```bash
git add assets/ index.html
git commit -m "Add MEGS-AI project image"
git push origin main
```

Your site updates automatically in 1-2 minutes!

## Images Still Needing Replacement

Here are the placeholder images you can replace:

| Project | Current File | Where to Replace |
|---------|-------------|------------------|
| MEGS-AI | `p-megsai.svg` | Line 36 & 88 in index.html |
| SuNeRFs | `p-sunerf.svg` | Line 37 & 98 in index.html |
| Lunar FM | `p-moonfm.svg` | Line 38 & 107 in index.html |
| HWO | `p-hwo.svg` | Line 39 & 78 in index.html |
| Starship | `p-starship.svg` | Line 40 & 127 in index.html |
| ESA VNIR | `p-esa-spectra.svg` | Line 41 & 117 in index.html |

## Supported Image Formats

- **PNG** - Best for screenshots, diagrams
- **JPG** - Best for photos
- **GIF** - For animations (like the SWOT example!)
- **SVG** - For vector graphics

## Quick One-Liner Example

Replace the HWO image with your own:
```bash
cp ~/my-images/hwo-project.png assets/p-hwo.png
# Then edit index.html to change .svg to .png
git add assets/p-hwo.png index.html
git commit -m "Add HWO image"
git push
```

## Tips

- Keep images under 2MB for fast loading (except GIFs can be larger)
- Recommended size: ~400x300px or similar aspect ratio
- The carousel will automatically resize them to fit
- You can mix formats (some PNG, some JPG, some GIF)
