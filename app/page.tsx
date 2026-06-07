'use client';

import { useState } from 'react';

export default function GatherHome() {
  const [activeTab, setActiveTab] = useState<'home' | 'browse' | 'orders' | 'profile'>('home');

  return (
    <div className="min-h-screen pb-20 bg-[#F7F2E9]">
      {/* Header */}
      <div className="sticky top-0 z-40 glass border-b border-[#D4C9B5]">
        <div className="max-w-[1140px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-x-3">
            <div className="w-10 h-10 bg-[#5C4636] rounded-2xl flex items-center justify-center">
              <span className="text-white text-2xl font-semibold tracking-tighter">G</span>
            </div>
            <div>
              <div className="font-semibold text-2xl tracking-tight">Gather</div>
              <div className="text-[10px] text-[#8A8F7E] -mt-1">Hudson Valley</div>
            </div>
          </div>

          <div className="flex items-center gap-x-2">
            <div className="px-4 py-1.5 rounded-2xl glass border border-[#D4C9B5] text-sm flex items-center gap-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="font-medium text-sm">Accord, NY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-[1140px] mx-auto px-6 pt-8 pb-10">
        <div className="glass rounded-3xl overflow-hidden border border-[#D4C9B5]">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-12">
              <div className="text-xs tracking-[2px] text-[#8A8F7E] mb-4">THIS WEEK • HUDSON VALLEY</div>
              <div className="text-[56px] md:text-[64px] leading-none tracking-[-2.5px] heading-serif">
                Fresh food.<br />Direct from<br />the farms.
              </div>
              <p className="mt-6 text-lg text-[#5C4636]/80 max-w-[340px]">
                Reserve what’s in season before it disappears.
              </p>
              <div className="flex gap-3 mt-8">
                <button 
                  onClick={() => setActiveTab('browse')}
                  className="px-8 py-4 rounded-2xl bg-[#5C4636] text-white font-semibold active:scale-[0.985] native-press"
                >
                  Browse harvest
                </button>
                <button className="px-7 py-4 rounded-2xl glass border border-[#D4C9B5] font-medium native-press">
                  Meet producers
                </button>
              </div>
            </div>
            <div className="relative h-[320px] md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=900&h=700&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover"
                alt="Fresh farm produce"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-[1140px] mx-auto px-6 pb-12">
        <div className="flex justify-between items-baseline mb-5 px-1">
          <div className="text-2xl font-semibold tracking-tight">What’s in season</div>
          <button className="text-sm text-[#A67C5D]">See all →</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {['Vegetables', 'Fruit', 'Dairy & Eggs', 'Bread & Pantry', 'Meat & Fish'].map((cat, i) => (
            <div key={i} className="market-card glass rounded-3xl p-6 border border-[#D4C9B5] cursor-pointer native-press">
              <div className="text-[#A67C5D] text-3xl mb-4">
                {i === 0 && '🥕'}
                {i === 1 && '🍎'}
                {i === 2 && '🧀'}
                {i === 3 && '🍞'}
                {i === 4 && '🥩'}
              </div>
              <div className="font-semibold text-xl">{cat}</div>
              <div className="text-xs text-[#8A8F7E] mt-0.5">{(28 + i * 7)} listings</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Producers */}
      <div className="max-w-[1140px] mx-auto px-6 pb-10">
        <div className="flex justify-between items-baseline mb-6 px-1">
          <div className="text-2xl font-semibold tracking-tight">From farms near you</div>
          <button className="text-sm text-[#A67C5D]">All producers →</button>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            { name: "Stone Hollow Farm", location: "Accord, NY", img: "https://images.unsplash.com/photo-1500076656116-558758c979e2" },
            { name: "Wild Roots Farm", location: "New Paltz, NY", img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399" },
            { name: "Blueberry Hill", location: "High Falls, NY", img: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad" }
          ].map((farm, i) => (
            <div key={i} className="market-card glass rounded-3xl overflow-hidden border border-[#D4C9B5] cursor-pointer native-press">
              <img src={farm.img} className="w-full h-44 object-cover" alt={farm.name} />
              <div className="p-6">
                <div className="font-semibold text-xl">{farm.name}</div>
                <div className="text-sm text-[#8A8F7E]">{farm.location}</div>
                <div className="mt-4 flex gap-2">
                  <span className="produce-tag">Eggs</span>
                  <span className="produce-tag">Greens</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bottom-nav z-50">
        <div className="max-w-[1140px] mx-auto px-6 h-20 flex items-center justify-around text-sm">
          {[
            { id: 'home', label: 'Home', icon: 'fa-home' },
            { id: 'browse', label: 'Browse', icon: 'fa-search' },
            { id: 'orders', label: 'Orders', icon: 'fa-receipt' },
            { id: 'profile', label: 'Profile', icon: 'fa-user' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex flex-col items-center gap-y-1 px-6 py-2 rounded-2xl transition-colors ${
                activeTab === tab.id ? 'text-[#5C4636] font-semibold' : 'text-[#8A8F7E]'
              }`}
            >
              <i className={`fa-solid ${tab.icon} text-xl`}></i>
              <span className="text-xs">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
