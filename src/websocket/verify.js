import { useEffect, useState } from "react";
import axios from "axios";

const VerifyPayment = () => {
  const [status, setStatus] = useState("verifying"); 

  useEffect(() => {
    const verify = async () => {
      try {
        // Get reference from URL
        const query = new URLSearchParams(window.location.search);
        const reference = query.get("reference");

        if (!reference) {
          setStatus("failed");
          return;
        }

        // Call backend to verify payment
        const res = await axios.post(
          `https://styyze-server.onrender.com/api/payment/verify/${ reference }`
        );

        if (res.data.success) {
          setStatus("success");
        } else {
          setStatus("failed");
        }

      } catch (error) {
        console.error("Verification error:", error);
        setStatus("failed");
      }
    };

    verify();
  }, []);

  return (
    <div className="UserProfileForm">
      {status === "verifying" && <h2>Verifying payment...</h2>}
      {status === "success" && <h2> Payment Successful!</h2>}
      {status === "failed" && <h2>Payment Failed or Could Not Be Verified</h2>}
    </div>
  );
};

export default VerifyPayment;