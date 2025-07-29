// pdf-generator.mjs - ES Module version
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function convertHtmlToPdf() {
  try {
    console.log('🚀 Starting PDF generation...');
    
    // Launch browser
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    
    // Read HTML file
    const htmlPath = path.join(__dirname, 'public', '5-ways-boost-social-media-engagement.html');
    console.log('📄 Reading HTML file from:', htmlPath);
    
    if (!fs.existsSync(htmlPath)) {
      throw new Error(`HTML file not found at: ${htmlPath}`);
    }
    
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    console.log('✅ HTML content loaded successfully');
    
    // Set content
    await page.setContent(htmlContent, {
      waitUntil: 'networkidle0'
    });
    
    console.log('🎨 Generating PDF...');
    
    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px'
      },
      preferCSSPageSize: true
    });
    
    // Save PDF with updated name
    const pdfPath = path.join(__dirname, 'public', '6-ways-boost-social-media-engagement.pdf');
    fs.writeFileSync(pdfPath, pdfBuffer);
    
    console.log('✅ PDF generated successfully: 6-ways-boost-social-media-engagement.pdf');
    console.log('📍 Saved to:', pdfPath);
    
    await browser.close();
    
  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    process.exit(1);
  }
}

// Run the function
convertHtmlToPdf();
