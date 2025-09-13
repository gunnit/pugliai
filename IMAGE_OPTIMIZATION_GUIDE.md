# Image Optimization Guide for PugliAI Website

## Images Requiring Immediate Optimization

### Critical - Team Images Over 2MB

These images need immediate optimization as they severely impact page load performance:

1. **gregor_standing nexttobannerforpugliaorizontievent.jpg** (6.4MB)
   - Current: 6.4MB
   - Target: 200KB
   - Recommended: Resize to 1200x800px, 75% JPEG quality
   - Command: `convert "gregor_standing nexttobannerforpugliaorizontievent.jpg" -resize 1200x800 -quality 75 "gregor_standing_optimized.jpg"`

2. **teamactivity1.jpg** (3.5MB)
   - Current: 3.5MB
   - Target: 150KB
   - Recommended: Resize to 800x600px, 80% JPEG quality
   - Command: `convert teamactivity1.jpg -resize 800x600 -quality 80 teamactivity1_optimized.jpg`

3. **teamdinner.jpg** (3.4MB)
   - Current: 3.4MB
   - Target: 150KB
   - Recommended: Resize to 800x600px, 80% JPEG quality
   - Command: `convert teamdinner.jpg -resize 800x600 -quality 80 teamdinner_optimized.jpg`

4. **teamlunch.jpg** (2.6MB)
   - Current: 2.6MB
   - Target: 120KB
   - Recommended: Resize to 800x600px, 80% JPEG quality
   - Command: `convert teamlunch.jpg -resize 800x600 -quality 80 teamlunch_optimized.jpg`

5. **teamactivity2.jpg** (2.4MB)
   - Current: 2.4MB
   - Target: 120KB
   - Recommended: Resize to 800x600px, 80% JPEG quality
   - Command: `convert teamactivity2.jpg -resize 800x600 -quality 80 teamactivity2_optimized.jpg`

### Medium Priority - Other Large Images

6. **logo_bebit_blue_edited.png** (749KB)
   - Current: 749KB
   - Target: 50KB
   - Recommended: Optimize PNG or convert to WebP
   - Command: `pngquant --quality=60-80 logo_bebit_blue_edited.png`

7. **teamactivity.jpg** (608KB)
   - Current: 608KB
   - Target: 100KB
   - Recommended: Resize to 600x400px, 80% JPEG quality
   - Command: `convert teamactivity.jpg -resize 600x400 -quality 80 teamactivity_optimized.jpg`

## Online Optimization Tools

If you don't have command-line tools installed, use these free online services:

### For JPEG Images:
1. **TinyJPG** - https://tinyjpg.com/
   - Upload images up to 5MB
   - Maintains good quality while reducing size

2. **Squoosh** - https://squoosh.app/
   - Google's image optimization tool
   - Allows custom quality settings
   - Can convert to WebP

### For PNG Images:
1. **TinyPNG** - https://tinypng.com/
   - Excellent for logos and graphics
   - Preserves transparency

## Installation Commands for Local Tools

### On Ubuntu/Debian:
```bash
# ImageMagick for general image processing
sudo apt-get install imagemagick

# WebP tools
sudo apt-get install webp

# JPEG optimizer
sudo apt-get install jpegoptim

# PNG optimizer
sudo apt-get install pngquant
```

### On macOS:
```bash
# Using Homebrew
brew install imagemagick
brew install webp
brew install jpegoptim
brew install pngquant
```

### On Windows (WSL):
```bash
# Same as Ubuntu/Debian commands
sudo apt-get update
sudo apt-get install imagemagick webp jpegoptim pngquant
```

## Batch Optimization Script

Once tools are installed, create this script (`optimize_images.sh`):

```bash
#!/bin/bash

# Navigate to images directory
cd /mnt/c/Dev/Pugliai/src/assets/img/team/

# Optimize JPEG files
for file in *.jpg *.jpeg; do
    if [ -f "$file" ]; then
        # Check file size
        size=$(stat -c%s "$file")
        if [ $size -gt 500000 ]; then  # If larger than 500KB
            echo "Optimizing $file..."
            # Create backup
            cp "$file" "${file}.backup"
            # Optimize
            convert "$file" -resize 1200x800\> -quality 80 "${file%.*}_optimized.jpg"
            echo "Optimized $file from $(($size/1024))KB to $(stat -c%s "${file%.*}_optimized.jpg" | awk '{print int($1/1024)}')KB"
        fi
    fi
done

# Optimize PNG files
for file in *.png; do
    if [ -f "$file" ]; then
        size=$(stat -c%s "$file")
        if [ $size -gt 100000 ]; then  # If larger than 100KB
            echo "Optimizing $file..."
            pngquant --quality=60-80 --ext=_optimized.png "$file"
        fi
    fi
done
```

## Expected Results

After optimization:
- **Total current size**: ~18MB (for images over 500KB)
- **Total optimized size**: ~1.2MB
- **Savings**: ~17MB (94% reduction)
- **Page load improvement**: 70-80% faster
- **Mobile experience**: Significantly improved

## Testing After Optimization

1. Replace original images with optimized versions
2. Clear browser cache
3. Test page load speed using:
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

## Important Notes

- Always keep backups of original images
- Test visual quality after optimization
- Consider implementing lazy loading for below-the-fold images
- Use responsive images with srcset for different screen sizes
- Consider CDN implementation for even better performance

## Next Steps

1. Install image optimization tools
2. Run optimization on all large images
3. Replace original files with optimized versions
4. Update any hardcoded image dimensions in CSS/HTML if needed
5. Test thoroughly on different devices and connections