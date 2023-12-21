// PrivacyPolicy.js
import React from 'react';
import '../Assets/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>

      <p>
        Welcome to the Privacy Policy of the Staff Scheduling Application. This page informs you of our policies
        regarding the collection, use, and disclosure of personal information when you use our service.
      </p>

      <h2>Information Collection and Use</h2>

      <p>
        We collect several types of information for various purposes to provide and improve our service to you.
        Types of data collected include personal information such as your name, email address, and phone number.

        We may use your personal information to contact you with newsletters, marketing, or promotional materials and
        other information that may be of interest to you. You may opt out of receiving any, or all, of these
        communications from us by following the unsubscribe link or instructions provided in any email we send.
      </p>

      <h2>Log Data</h2>

      <p>
        We want to inform you that whenever you visit our service, we collect information that your browser sends to
        us that is called Log Data. This Log Data may include information such as your computer’s Internet Protocol
        ("IP") address, browser version, pages of our service that you visit, the time and date of your visit, the
        time spent on those pages, and other statistics.
      </p>

      {/* Add more sections as needed based on your privacy policy */}

      <h2>Changes to This Privacy Policy</h2>

      <p>
        We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically
        for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
        These changes are effective immediately after they are posted on this page.
      </p>

      <h2>Contact Us</h2>

      <p>
        If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
      </p>

      <p>Last updated: [2022]</p>
    </div>
  );
};

export default PrivacyPolicy;
