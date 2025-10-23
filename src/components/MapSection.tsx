"use client";

import React from "react";

export default function MapSection() {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <h2 className="text-white text-lg font-semibold bg-gray-800 px-4 py-2">
        Map Sighting
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019050126128!2d-122.41941548468106!3d37.77492977975825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809caaaaaaa%3A0x7b3bca5cc6bdf0c0!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1708250000000!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
