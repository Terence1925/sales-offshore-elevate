import Navbar from "@/components/Navbar";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container-max px-5 sm:px-6 lg:px-8 pt-28 pb-20">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-8">Privacy Policy</h1>
        <div className="prose prose-sm sm:prose-base max-w-3xl text-muted-foreground space-y-6">
          <p className="text-sm text-muted-foreground/60">Last updated: March 1, 2025</p>

          <h2 className="text-xl font-bold text-primary mt-8">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, company name, and any other information you choose to provide.</p>

          <h2 className="text-xl font-bold text-primary mt-8">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to your inquiries and provide customer service</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-8">3. Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you.</p>

          <h2 className="text-xl font-bold text-primary mt-8">4. Data Security</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights.</p>

          <h2 className="text-xl font-bold text-primary mt-8">5. Cookies</h2>
          <p>We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>

          <h2 className="text-xl font-bold text-primary mt-8">6. Third-Party Links</h2>
          <p>Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies.</p>

          <h2 className="text-xl font-bold text-primary mt-8">7. Contact Us</h2>
          <p>If you have any questions regarding this privacy policy, you may contact us at:</p>
          <p><strong>Email:</strong> info@salesoffshoreph.com</p>
          <p><strong>Phone:</strong> +1 (617) 272-2261</p>
        </div>
      </div>
    </div>
  );
}
