export default function SLA() {
  return (
    <>
      <h1>Service Level Agreement (SLA)</h1>
      <p className="lead">Last updated: December 25, 2025</p>
      
      <h2>1. Service Commitment</h2>
      <p>
        ADAS Inc. will use commercially reasonable efforts to make the ADAS Platform available with a Monthly Uptime Percentage 
        of at least 99.9% during any monthly billing cycle (the "Service Commitment").
      </p>

      <h2>2. Definitions</h2>
      <ul>
        <li>
          <strong>"Monthly Uptime Percentage"</strong> is calculated by subtracting from 100% the percentage of minutes during the month in which the ADAS Platform was "Unavailable."
        </li>
        <li>
          <strong>"Unavailable"</strong> means that all connection requests to the ADAS Platform failed during a 1-minute interval.
        </li>
      </ul>

      <h2>3. Service Credits</h2>
      <p>
        Service Credits are calculated as a percentage of the total charges paid by you for the ADAS Platform for the billing cycle in which the error occurred.
      </p>
      
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-left border-collapse border rounded-lg">
          <thead>
            <tr className="bg-muted">
              <th className="p-3 border">Monthly Uptime Percentage</th>
              <th className="p-3 border">Service Credit Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Less than 99.9% but equal to or greater than 99.0%</td>
              <td className="p-3 border">10%</td>
            </tr>
            <tr>
              <td className="p-3 border">Less than 99.0% but equal to or greater than 95.0%</td>
              <td className="p-3 border">25%</td>
            </tr>
            <tr>
              <td className="p-3 border">Less than 95.0%</td>
              <td className="p-3 border">100%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>4. SLA Exclusions</h2>
      <p>
        The Service Commitment does not apply to any unavailability, suspension, or termination of the ADAS Platform performance issues:
      </p>
      <ul>
        <li>Caused by factors outside of our reasonable control, including any force majeure event or Internet access or related problems beyond the demarcation point of ADAS Platform.</li>
        <li>That result from any actions or inactions of you or any third party.</li>
        <li>That result from your equipment, software or other technology and/or third party equipment, software or other technology.</li>
        <li>Arising from our suspension and termination of your right to use the ADAS Platform in accordance with the Agreement.</li>
      </ul>

      <h2>5. Credit Request and Payment Procedures</h2>
      <p>
        To receive a Service Credit, you must submit a claim by opening a case in the ADAS Support Center. 
        To be eligible, the credit request must be received by us by the end of the second billing cycle after which the incident occurred.
      </p>
    </>
  );
}
