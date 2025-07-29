// Simple email notification system
// This simulates sending emails to your company when someone downloads the lead magnet

const fs = require('fs');
const path = require('path');

// In production, you'd use a service like EmailJS, SendGrid, or Nodemailer
// For now, this will log emails to a file

const logEmail = (email) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    email,
    timestamp,
    source: 'lead-magnet-download',
    action: 'pdf-download'
  };

  const logFile = path.join(__dirname, 'lead-emails.json');
  
  try {
    let existingLogs = [];
    if (fs.existsSync(logFile)) {
      const fileContent = fs.readFileSync(logFile, 'utf8');
      existingLogs = JSON.parse(fileContent);
    }
    
    existingLogs.push(logEntry);
    fs.writeFileSync(logFile, JSON.stringify(existingLogs, null, 2));
    
    console.log(`✅ New lead captured: ${email} at ${timestamp}`);
    
    // In production, send email notification to water@melonsmedia.social
    sendNotificationEmail(email);
    
  } catch (error) {
    console.error('❌ Failed to log email:', error);
  }
};

const sendNotificationEmail = (userEmail) => {
  // This is where you'd integrate with your email service
  console.log(`📧 Notification email would be sent to: water@melonsmedia.social`);
  console.log(`📧 New lead magnet download from: ${userEmail}`);
  
  // Example with Nodemailer (commented out - requires setup):
  /*
  const nodemailer = require('nodemailer');
  
  const transporter = nodemailer.createTransporter({
    service: 'gmail', // or your email service
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-password'
    }
  });
  
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'water@melonsmedia.social',
    subject: '🎯 New Lead Magnet Download!',
    html: `
      <h2>New Lead Captured!</h2>
      <p><strong>Email:</strong> ${userEmail}</p>
      <p><strong>Download:</strong> 6 Ways to Boost Social Media Engagement</p>
      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>Action:</strong> Follow up within 24 hours for best results!</p>
    `
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('❌ Email notification failed:', error);
    } else {
      console.log('✅ Email notification sent:', info.response);
    }
  });
  */
};

// Export for use in other files
module.exports = {
  logEmail,
  sendNotificationEmail
};

// Example usage:
if (require.main === module) {
  // Test the email logging
  logEmail('test@example.com');
}
