import Navbar from "@/components/Navbar";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container-max px-5 sm:px-6 lg:px-8 pt-28 pb-20">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-8">Terms & Conditions</h1>
        <div className="prose prose-sm sm:prose-base max-w-3xl text-muted-foreground space-y-6">
          <p className="text-sm text-muted-foreground/60">Last updated: March 1, 2025</p>

          <h2 className="text-xl font-bold text-primary mt-8">1. Agreement to Terms</h2>
          <p>By accessing and using the Sales Offshore website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.</p>

          <h2 className="text-xl font-bold text-primary mt-8">2. Services</h2>
          <p>Sales Offshore provides outsourced sales staffing and management services. The specific scope of services will be outlined in individual service agreements between Sales Offshore and the client.</p>

          <h2 className="text-xl font-bold text-primary mt-8">3. Client Obligations</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate and complete information as required</li>
            <li>Cooperate with Sales Offshore personnel during onboarding and ongoing operations</li>
            <li>Make timely payments as outlined in the service agreement</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-8">4. Payment Terms</h2>
          <p>Payment terms will be specified in individual service agreements. Late payments may be subject to additional fees as outlined in your contract.</p>

          <h2 className="text-xl font-bold text-primary mt-8">5. Confidentiality</h2>
          <p>Both parties agree to maintain the confidentiality of proprietary information shared during the course of the business relationship. This obligation survives the termination of any agreement.</p>

          <h2 className="text-xl font-bold text-primary mt-8">6. Limitation of Liability</h2>
          <p>Sales Offshore shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use our services.</p>

          <h2 className="text-xl font-bold text-primary mt-8">7. Termination</h2>
          <p>Either party may terminate the service agreement with written notice as specified in the individual contract. Upon termination, all outstanding obligations remain in effect.</p>

          <h2 className="text-xl font-bold text-primary mt-8">8. Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of the Philippines, without regard to its conflict of law provisions.</p>

          <h2 className="text-xl font-bold text-primary mt-8">9. Contact</h2>
          <p>For questions about these Terms & Conditions, contact us at:</p>
          <p><strong>Email:</strong> info@salesoffshoreph.com</p>
          <p><strong>Phone:</strong> +1 (617) 272-2261</p>
        </div>
      </div>
    </div>
  );
}
