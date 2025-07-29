// pdf-generator.js
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function convertHtmlToPdf() {
  try {
    // Launch browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Read HTML file
    const htmlPath = path.join(__dirname, 'public', '5-ways-boost-social-media-engagement.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    
    // Set content
    await page.setContent(htmlContent, {
      waitUntil: 'networkidle0'
    });
    
    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px'
      }
    });
    
    // Save PDF
    const pdfPath = path.join(__dirname, 'public', '5-ways-boost-social-media-engagement.pdf');
    fs.writeFileSync(pdfPath, pdfBuffer);
    
    console.log('PDF generated successfully!');
    await browser.close();
    
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
}

convertHtmlToPdf();

// To run this:
// 1. Install puppeteer: npm install puppeteer
// 2. Run: node pdf-generator.js
