#!/bin/bash

# Ensure dist directory exists
mkdir -p dist

# Build Tailwind CSS
# We build it directly to dist/output.css
./node_modules/.bin/tailwindcss -i ./src/input.css -o ./dist/output.css --minify

# Copy Assets
cp -r images dist/
cp cities.json dist/

# Copy HTML and adjust CSS path
# In development (root), CSS is at ./dist/output.css
# In production (dist), CSS is at ./output.css
sed 's|./dist/output.css|./output.css|g' index.html > dist/index.html

echo "Build complete! Content is in 'dist/'"
