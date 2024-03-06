import { OrganizationProfile } from "@clerk/nextjs";
import React from "react";

function SettingsPage() {
  return (
    <div className="w-auto h-full">
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              border: "none",
              boxShadow: "none",
              width: "100%",
              height: "100%",
            },
            card: {
              border: "1px solid #e5e5e5",
              boxShadow: "none",
              width: "100%",
              height: "100%",
            },
          },
        }}
      />
    </div>
  );
}

export default SettingsPage;
