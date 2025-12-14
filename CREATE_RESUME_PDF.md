# How to Create Your Resume PDF

I've created an HTML version of your resume at `src/assets/resume.html`. 

## Option 1: Convert HTML to PDF (Recommended)

### Using Browser (Easiest):
1. Open `src/assets/resume.html` in your browser
2. Press `Ctrl+P` (or Cmd+P on Mac) to print
3. Select "Save as PDF" as the destination
4. Save it as `resume.pdf` in the `src/assets/` folder
5. Replace the existing empty `resume.pdf` file

### Using Online Converter:
1. Open `src/assets/resume.html` in your browser
2. Use an online HTML to PDF converter like:
   - https://www.ilovepdf.com/html-to-pdf
   - https://www.freepdfconvert.com/html-to-pdf
3. Upload the HTML file or paste the URL
4. Download the PDF
5. Save it as `resume.pdf` in `src/assets/` folder

## Option 2: Use Your Original Resume PDF

If you already have a PDF version of your resume:
1. Copy your resume PDF file
2. Paste it into `src/assets/` folder
3. Rename it to exactly: `resume.pdf`
4. Replace the existing file

## After Adding the PDF:

1. **Restart Angular Dev Server**:
   ```bash
   # Stop server (Ctrl+C)
   npm start
   ```

2. **Test**: Click "Download Resume" or "View Resume" buttons

## File Location:
- ✅ Correct: `src/assets/resume.pdf`
- ✅ HTML version: `src/assets/resume.html` (for reference)

The HTML file contains all your resume information formatted nicely. Just convert it to PDF using one of the methods above!

