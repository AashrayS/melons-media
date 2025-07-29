// Lead Magnet Utilities
export const submitLeadMagnetEmail = async (email: string) => {
  try {
    // In a real implementation, you would send this to your backend
    // For now, we'll simulate the process and store in localStorage
    
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

    return { success: true, message: 'Email captured successfully!' };
  } catch (error) {
    console.error('Lead magnet submission error:', error);
    return { success: false, message: 'Something went wrong. Please try again.' };
  }
};

export const downloadPDF = () => {
  const link = document.createElement('a');
  link.href = '/5-ways-boost-social-media-engagement.html';
  link.download = '5-ways-boost-social-media-engagement.html';
  link.target = '_blank';
  link.click();
};

// Email integration helpers (for future use with services like ConvertKit, Mailchimp, etc.)
export const integrateWithEmailService = async (email: string, service: 'convertkit' | 'mailchimp' | 'other') => {
  // Placeholder for email service integration
  switch (service) {
    case 'convertkit':
      // return await submitToConvertKit(email);
      break;
    case 'mailchimp':
      // return await submitToMailchimp(email);
      break;
    default:
      // return await submitToCustomService(email);
      break;
  }
  
  // For now, just use the local storage method
  return await submitLeadMagnetEmail(email);
};
