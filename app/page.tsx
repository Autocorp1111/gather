'use client';

import { useState } from 'react';

type Tab = 'home' | 'browse' | 'orders' | 'profile';

export default function Gather() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [showSheet, setShowSheet] = useState(false);
  const [selectedProducer, setSelectedProducer] = useState<any>(null);

  const producers = [
    { id: 1, name: "Stone Hollow Farm", location: "Accord, NY", distance: "3.2 mi", image: "https://images.unsplash.com/photo-1500076656116-558758c979e2", tags: ["Eggs", "Greens", "Honey"] },
    { id: 2, name: "Wild Roots Farm", location: "New Paltz, NY", distance: "5.8 mi", image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399", tags: ["Root vegetables", "Apples"] },
    { id: 3, name: "Blueberry Hill", location: "High Falls, NY", distance: "2.1 mi", image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad", tags: ["Berries", "Flowers"] },
  ];

  const openProducer = (producer: any) => {
    setSelectedProducer(producer);
    setShowSheet(true);
  };

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
          <div className="px-4 py-1.5 rounded-2xl glass border border-[#D4C9B5] text-sm flex items-center gap-x-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span className="font-medium text-sm">Accord, NY</span>
          </div>
        </div>
      </div>

      {/* HOME TAB */}
      {activeTab === 'home' && (
        <>
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
                    <button onClick={() => setActiveTab('browse')} className="px-8 py-4 rounded-2xl bg-[#5C4636] text-white font-semibold active:scale-[0.985] native-press">
                      Browse harvest
                    </button>
                    <button className="px-7 py-4 rounded-2xl glass border border-[#D4C9B5] font-medium native-press">
                      Meet producers
                    </button>
                  </div>
                </div>
                <div className="relative h-[320px] md:h-auto">
                  <img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=900&h=700&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="Fresh produce" />
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="max-w-[1140px] mx-auto px-6 pb-12">
            <div className="flex justify-between items-baseline mb-5 px-1">
              <div className="text-2xl font-semibold tracking-tight">What’s in season</div>
              <button onClick={() => setActiveTab('browse')} className="text-sm text-[#A67C5D]">See all →</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {['Vegetables', 'Fruit', 'Dairy & Eggs', 'Bread & Pantry', 'Meat & Fish'].map((cat, i) => (
                <div key={i} onClick={() => setActiveTab('browse')} className="market-card glass rounded-3xl p-6 border border-[#D4C9B5] cursor-pointer native-press">
                  <div className="text-[#A67C5D] text-3xl mb-4">{['🥕','🍎','🧀','🍞','🥩'][i]}</div>
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
              <button onClick={() => setActiveTab('browse')} className="text-sm text-[#A67C5D]">All producers →</button>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {producers.map((farm, i) => (
                <div key={i} onClick={() => openProducer(farm)} className="market-card glass rounded-3xl overflow-hidden border border-[#D4C9B5] cursor-pointer native-press">
                  <img src={farm.image} className="w-full h-44 object-cover" alt={farm.name} />
                  <div className="p-6">
                    <div className="font-semibold text-xl">{farm.name}</div>
                    <div className="text-sm text-[#8A8F7E]">{farm.location} • {farm.distance}</div>
                    <div className="mt-4 flex gap-2">
                      {farm.tags.map((tag: string, idx: number) => (
                        <span key={idx} className="produce-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* BROWSE TAB */}
      {activeTab === 'browse' && (
        <div className="max-w-[1140px] mx-auto px-6 pt-8">
          <div className="text-3xl font-semibold tracking-tight mb-6">This week’s harvest</div>
          <div className="space-y-4">
            {producers.map((p, i) => (
              <div key={i} onClick={() => openProducer(p)} className="glass rounded-3xl p-6 border border-[#D4C9B5] flex gap-6 cursor-pointer native-press">
                <img src={p.image} className="w-24 h-24 rounded-2xl object-cover" alt={p.name} />
                <div className="flex-1">
                  <div className="font-semibold text-xl">{p.name}</div>
                  <div className="text-sm text-[#8A8F7E]">{p.location} • {p.distance}</div>
                  <div className="mt-3 flex gap-2">
                    {p.tags.map((tag: string, idx: number) => <span key={idx} className="produce-tag">{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ORDERS TAB */}
      {activeTab === 'orders' && (
        <div className="max-w-[1140px] mx-auto px-6 pt-8">
          <div className="text-3xl font-semibold tracking-tight mb-6">My Orders</div>
          <div className="glass rounded-3xl p-8 text-center border border-[#D4C9B5]">
            <div className="text-[#8A8F7E]">No active orders yet.</div>
            <button onClick={() => setActiveTab('browse')} className="mt-4 px-6 py-3 rounded-2xl bg-[#5C4636] text-white text-sm font-medium">
              Start browsing
            </button>
          </div>
        </div>
      )}

      {/* PROFILE TAB */}
      {activeTab === 'profile' && (
        <div className="max-w-[1140px] mx-auto px-6 pt-8">
          <div className="text-3xl font-semibold tracking-tight mb-8">Maya Torres</div>
          <div className="space-y-3">
            <div className="glass rounded-3xl p-6 border border-[#D4C9B5]">My Favorites</div>
            <div className="glass rounded-3xl p-6 border border-[#D4C9B5]">Past Orders</div>
            <div className="glass rounded-3xl p-6 border border-[#D4C9B5]">Settings</div>
          </div>
        </div>
      )}

      {/* Producer Sheet */}
      {showSheet && selectedProducer && (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-end" onClick={() => setShowSheet(false)}>
          <div className="glass w-full rounded-t-3xl p-8 border-t border-[#D4C9B5]" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between mb-6">
              <div>
                <div className="font-semibold text-2xl">{selectedProducer.name}</div>
                <div className="text-[#8A8F7E]">{selectedProducer.location} • {selectedProducer.distance}</div>
              </div>
              <button onClick={() => setShowSheet(false)} className="text-3xl text-[#8A8F7E]">×</button>
            </div>
            <img src={selectedProducer.image} className="w-full h-64 object-cover rounded-2xl mb-6" alt="" />
            <div className="flex gap-2 mb-8">
              {selectedProducer.tags.map((tag: string, i: number) => <span key={i} className="produce-tag text-sm px-4 py-1">{tag}</span>)}
            </div>
            <button className="w-full py-4 rounded-2xl bg-[#5C4636] text-white font-semibold">Reserve produce</button>
          </div>
        </div>
      )}

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
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`flex flex-col items-center gap-y-1 px-6 py-2 rounded-2xl transition-colors ${activeTab === tab.id ? 'text-[#5C4636] font-semibold' : 'text-[#8A8F7E]'}`}
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
