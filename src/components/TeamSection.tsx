"use client";

import React from "react";

const teamMembers = [
  { name: "David Parker", img: "https://randomuser.me/api/portraits/men/1.jpg" },
  { name: "Anita Maxwin", img: "https://randomuser.me/api/portraits/women/2.jpg" },
  { name: "Dexter Morgan", img: "https://randomuser.me/api/portraits/men/3.jpg" },
  { name: "Bruce Banner", img: "https://randomuser.me/api/portraits/men/4.jpg" },
  { name: "Tony Stark", img: "https://randomuser.me/api/portraits/men/5.jpg" },
  { name: "Jessie Jones", img: "https://randomuser.me/api/portraits/women/6.jpg" },
  { name: "Oliver Queen", img: "https://randomuser.me/api/portraits/men/7.jpg" },
  { name: "Natasha Romanov", img: "https://randomuser.me/api/portraits/women/8.jpg" },
  { name: "Ross Racheal", img: "https://randomuser.me/api/portraits/men/9.jpg" },
];

export default function TeamSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <div key={i} className="flex items-center space-x-4 p-4 bg-white shadow rounded-lg">
              <img src={member.img} alt={member.name} className="w-12 h-12 rounded-full" />
              <p className="font-medium">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
