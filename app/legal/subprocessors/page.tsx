export default function Subprocessors() {
  return (
    <>
      <h1>Subprocessors</h1>
      <p className="lead">Last updated: December 25, 2025</p>
      
      <p>
        ADAS Inc. uses certain third-party subprocessors to assist in providing our services. 
        A subprocessor is a third party data processor engaged by ADAS, who has or potentially will have access to or process Service Data (which may contain Personal Data).
      </p>

      <h2>Infrastructure & Storage</h2>
      <div className="not-prose overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 font-semibold">Name</th>
              <th className="py-2 font-semibold">Purpose</th>
              <th className="py-2 font-semibold">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">Amazon Web Services (AWS)</td>
              <td className="py-2">Cloud Infrastructure & Storage</td>
              <td className="py-2">USA, EU</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Google Cloud Platform</td>
              <td className="py-2">AI/ML Processing</td>
              <td className="py-2">USA</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Cloudflare</td>
              <td className="py-2">CDN & Security</td>
              <td className="py-2">Global</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8">Customer Support & Communication</h2>
      <div className="not-prose overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 font-semibold">Name</th>
              <th className="py-2 font-semibold">Purpose</th>
              <th className="py-2 font-semibold">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">Intercom</td>
              <td className="py-2">Customer Support Chat</td>
              <td className="py-2">USA</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">SendGrid</td>
              <td className="py-2">Transactional Emails</td>
              <td className="py-2">USA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8">Updates</h2>
      <p>
        As our business grows and evolves, the subprocessors we engage may also change. 
        We will provide notice of any new subprocessors to the extent required under the Agreement, 
        along with posting such updates here.
      </p>
    </>
  );
}
