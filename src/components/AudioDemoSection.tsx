"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AudioDemoSection() {
  const [activeDemo, setActiveDemo] = useState<number | null>(null);
  const [durations, setDurations] = useState<{ [key: number]: string }>({
    1: "0:00",
    2: "0:00",
    3: "0:00",
    4: "0:00"
  });
  
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});

  const demos = [
    {
      id: 1,
      name: "Anika",
      role: "Bilingual Front Desk Receptionist",
      file: "/audio/ANIKA.mp3",
      type: "Hindi + English",
      color: "from-blue-400 to-indigo-500"
    },
    {
      id: 2,
      name: "Maya",
      role: "Coaching Center Counselor",
      file: "/audio/MAYA.mp3",
      type: "English",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 3,
      name: "Raj",
      role: "Real Estate Executive",
      file: "/audio/RAJ.mp3",
      type: "Hindi",
      color: "from-indigo-400 to-blue-500"
    },
    {
      id: 4,
      name: "Riya",
      role: "Salon & Wellness Agent",
      file: "/audio/RIYA.mp3",
      type: "Hindi",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  // Initialize and load metadata for durations
  useEffect(() => {
    demos.forEach((demo) => {
      const audio = new Audio(demo.file);
      audio.preload = "metadata";
      audio.addEventListener("loadedmetadata", () => {
        const mins = Math.floor(audio.duration / 60);
        const secs = Math.floor(audio.duration % 60).toString().padStart(2, "0");
        setDurations(prev => ({ ...prev, [demo.id]: `${mins}:${secs}` }));
      });
      audio.addEventListener("ended", () => {
        setActiveDemo(null);
      });
      audioRefs.current[demo.id] = audio;
    });

    return () => {
      // Clean up audio references on unmount
      Object.values(audioRefs.current).forEach((audio) => {
        if (audio) {
          audio.pause();
        }
      });
    };
  }, []);

  const handlePlay = (id: number) => {
    const currentAudio = audioRefs.current[id];
    
    if (activeDemo === id) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      setActiveDemo(null);
    } else {
      // Pause any currently playing audio
      if (activeDemo !== null) {
        const prevAudio = audioRefs.current[activeDemo];
        if (prevAudio) {
          prevAudio.pause();
          prevAudio.currentTime = 0;
        }
      }
      
      if (currentAudio) {
        currentAudio.play().catch((err) => console.log("Playback failed: ", err));
        setActiveDemo(id);
      }
    }
  };

  return (
    <section id="demo" className="py-28 bg-white relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/20 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 mb-4 tracking-tight">
            Experience natural AI conversations.
          </h2>
          <p className="text-slate-500 text-lg font-normal">
            Listen to how CallArk handles real-world scenarios with empathy and intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {demos.map((demo) => (
            <Card key={demo.id} className="border-slate-100 bg-white/60 backdrop-blur-sm overflow-hidden group hover:border-blue-100 hover:shadow-[0_16px_36px_-10px_rgba(37,99,235,0.04)] transition-all duration-300">
              <CardContent className="p-0">
                <div className={`h-1.5 bg-gradient-to-r ${demo.color}`} />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-bold font-outfit text-slate-900 text-lg">{demo.name}</h3>
                      <p className="text-xs text-slate-400 mt-1 leading-snug">{demo.role}</p>
                    </div>
                    <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md uppercase tracking-wider shrink-0">
                      {demo.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Button 
                      size="icon" 
                      onClick={() => handlePlay(demo.id)}
                      className={`rounded-full shrink-0 shadow-md transition-all duration-300 ${activeDemo === demo.id ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                    >
                      {activeDemo === demo.id ? (
                        <Square className="w-4 h-4 fill-current" />
                      ) : (
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      )}
                    </Button>
                    
                    <div className="flex-1 flex items-center justify-between h-8 gap-0.5">
                      {/* Animated Waveform */}
                      {[...Array(16)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={activeDemo === demo.id ? {
                            height: ["15%", `${Math.random() * 85 + 15}%`, "15%"]
                          } : {
                            height: "15%"
                          }}
                          transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            delay: i * 0.05,
                            ease: "easeInOut"
                          }}
                          className={`w-1 rounded-full ${activeDemo === demo.id ? 'bg-blue-600' : 'bg-slate-200'}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400 font-semibold tabular-nums">
                      {durations[demo.id]}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
