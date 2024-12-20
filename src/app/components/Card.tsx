"use client";
import React, { useState } from "react";
import Image from "next/image";

interface CardProps {
  name: string;
  set: string;
  cost: number;
  power: number;
  hp: number;
  type: string;
  traits: string[];
  rarity: string;
  frontArt: string;
}

export default function Card({
  name,
  set,
  cost,
  power,
  hp,
  type,
  traits,
  rarity,
  frontArt,
}: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="card border border-gray-400 rounded-lg p-4 m-2 flex bg-gray-800 text-white shadow-lg hover:transform hover:translate-x-[-10px] hover:translate-y-[-10px] hover:shadow-[0px_0px_7px_7px_rgba(255,255,255,1)] cursor-pointer"
        onClick={openModal}
      >
        {/* Left Image Section */}
        <div className="w-40 h-40 flex-shrink-0 mr-4">
          <Image
            src={frontArt}
            alt={name}
            width={150}
            height={150}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-sm">Set: {set}</p>
          <p className="text-sm">Type: {type}</p>
          <p className="text-sm">Cost: {cost}</p>
          <p className="text-sm">Power: {power}</p>
          <p className="text-sm">HP: {hp}</p>
          <p className="text-sm">Traits: {traits.join(", ")}</p>
          <p className="text-sm">Rarity: {rarity}</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 m-10">
          <div className="bg-[#0a0a0a] rounded-lg shadow-lg p-6 w-96 relative shadow-[0px_0px_15px_15px_rgba(255,255,255,1)]">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-300 hover:text-gray-900"
              onClick={closeModal}
            >
              ✖
            </button>

            <Image
              src={frontArt}
              alt={name}
              width={300}
              height={300}
              className="w-full h-auto object-cover rounded-lg mt-6 mb-4"
            />
            <h2 className="text-2xl font-bold mb-4">{name}</h2>
            <p className="text-sm">Set: {set}</p>
            <p className="text-sm">Type: {type}</p>
            <p className="text-sm">Cost: {cost}</p>
            <p className="text-sm">Power: {power}</p>
            <p className="text-sm">HP: {hp}</p>
            <p className="text-sm">Traits: {traits.join(", ")}</p>
            <p className="text-sm">Rarity: {rarity}</p>
          </div>
        </div>
      )}
    </>
  );
}
