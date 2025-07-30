// Lead Magnet Utilities
export const submitLeadMagnetEmail = async (email: string) => {
  try {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email address');
    }

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Store email locally (in production, send to your email service)
    const existingEmails = JSON.parse(localStorage.getItem('leadMagnetEmails') || '[]');
    const newEntry = {
      email,
      timestamp: new Date().toISOString(),
      source: 'lead-magnet'
    };
    
    if (!existingEmails.find((entry: any) => entry.email === email)) {
      existingEmails.push(newEntry);
      localStorage.setItem('leadMagnetEmails', JSON.stringify(existingEmails));
    }

    // TODO: In production, send email to your backend
    // await sendEmailToBackend(email);

    // Send email notification to your company email
    await sendEmailNotification(email);

    return { success: true, message: 'Email captured successfully!' };
  } catch (error) {
    console.error('Lead magnet submission error:', error);
    return { success: false, message: 'Something went wrong. Please try again.' };
  }
};

export const sendEmailNotification = async (userEmail: string) => {
  try {
    // In production, this would call your backend to send notification
    // For now, we'll log it and store it
    console.log(`New lead captured: ${userEmail}`);
    
    // TODO: Replace with actual email service integration
    // Example with EmailJS or similar service:
    /*
    await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      to_email: 'water@melonsmedia.social',
      user_email: userEmail,
      message: `New lead magnet download from: ${userEmail}`,
      timestamp: new Date().toISOString()
    });
    */
    
    return { success: true };
  } catch (error) {
    console.error('Failed to send notification:', error);
    return { success: false };
  }
};

export const downloadPDF = () => {
  // Create a dedicated PDF download window with the print-optimized version
  const pdfWindow = window.open('/6-ways-boost-social-media-engagement-print.html', '_blank', 'width=900,height=700');
  
  if (pdfWindow) {
    // Wait for the content to fully load before triggering print
    pdfWindow.addEventListener('load', () => {
      setTimeout(() => {
        // Focus the window and trigger print
        pdfWindow.focus();
        pdfWindow.print();
        
        // Optional: Show instructions if needed
        console.log('PDF print dialog opened. All 6 strategies should be visible.');
      }, 1500); // Reduced delay since print version loads faster
    });
    
    // Fallback in case load event doesn't fire
    setTimeout(() => {
      if (pdfWindow && !pdfWindow.closed) {
        try {
          pdfWindow.focus();
          pdfWindow.print();
        } catch (e) {
          console.log('Print dialog triggered via fallback');
        }
      }
    }, 2500);
  } else {
    // Popup blocked fallback - show instructions
    alert('Please allow popups for this site to download the PDF, or click OK to open the guide in a new tab.');
    window.open('/6-ways-boost-social-media-engagement-print.html', '_blank');
  }
};

// Alternative PDF download method using fetch and blob
export const downloadPDFBlob = async () => {
  try {
    const response = await fetch('/5-ways-boost-social-media-engagement.html');
    const htmlContent = await response.text();
    
    // Create a blob and download link
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.href = url;
    link.download = '6-ways-boost-social-media-engagement.html';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Download failed:', error);
    // Fallback to direct link
    window.open('/5-ways-boost-social-media-engagement.html', '_blank');
  }
};

// Email integration helpers (for future use with services like ConvertKit, Mailchimp, etc.)
export const integrateWithEmailService = async (email: string, service: 'convertkit' | 'mailchimp' | 'emailjs' | 'other') => {
  switch (service) {
    case 'emailjs':
      // Example EmailJS integration
      try {
        // You'll need to install emailjs: npm install @emailjs/browser
        /*
        const emailjs = await import('@emailjs/browser');
        await emailjs.send(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          {
            to_email: 'water@melonsmedia.social',
            user_email: email,
            message: `New lead magnet download from: ${email}`,
            timestamp: new Date().toISOString()
          },
          'YOUR_PUBLIC_KEY'
        );
        */
        return { success: true };
      } catch (error) {
        console.error('EmailJS integration failed:', error);
        return { success: false };
      }
    case 'convertkit':
      // ConvertKit API integration
      try {
        /*
        const response = await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            api_key: 'YOUR_API_KEY',
            email: email
          })
        });
        */
        return { success: true };
      } catch (error) {
        console.error('ConvertKit integration failed:', error);
        return { success: false };
      }
    default:
      return await submitLeadMagnetEmail(email);
  }
};
