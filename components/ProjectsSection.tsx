'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '@/data/projects';

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const currentProject = projectsData[currentIndex];

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
    setAnimKey((prev) => prev + 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    setAnimKey((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    setAnimKey((prev) => prev + 1);
  };

  return (
    <section id="ruang-karya" className="min-h-screen text-zinc-100 py-24 px-6 font-sans relative z-10">
      {/* Background Watermark */}
      <div className="absolute bottom-10 right-10 text-[10vw] font-black text-white/[0.03] select-none pointer-events-none">
        PROJECTS
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="fade-left duration-800 mb-20 space-y-4">
          <h2 className="text-5xl font-black tracking-tighter uppercase">
            Ruang / <span className="text-zinc-500">Karya</span>
          </h2>

          <div className="flex items-center gap-4">
            <div className="h-[1px] w-20 bg-white" />
            <p className="text-[10px] font-mono tracking-[0.4em] text-zinc-500 uppercase">
              Project_Archive_Display
            </p>
          </div>
        </div>

        <div className="fade-bot duration-1000 border border-zinc-800 z-10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* LEFT PROJECT VIEW */}
            <div
              id="main-project-view"
              key={animKey}
              className="lg:col-span-7 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-zinc-800 backdrop-blur-sm bg-zinc-950/50 z-20 project-entrance"
            >
              <div className="space-y-6">
                {/* IMAGE */}
                <div className="relative aspect-video w-full overflow-hidden border border-zinc-800 group bg-zinc-900">
                  <Image
                    id="main-img"
                    src={currentProject.image}
                    alt={currentProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 650px"
                    referrerPolicy="no-referrer"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                </div>

                {/* TITLE & DESCRIPTION */}
                <div>
                  <h2 id="main-title" className="text-3xl font-bold tracking-tight text-white">
                    {currentProject.title}
                  </h2>

                  <p id="main-desc" className="text-zinc-400 mt-4 text-sm leading-relaxed max-w-xl">
                    {currentProject.desc}
                  </p>
                </div>

                {/* STACK */}
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                    <span>Stack Distribution</span>
                    <span id="main-tech-list">{currentProject.tech}</span>
                  </div>

                  <div className="h-1 w-full overflow-hidden flex bg-zinc-900" suppressHydrationWarning>
                    <div
                      id="tech-bar-1"
                      className="h-full bg-white transition-all duration-500"
                      style={{ width: currentProject.percent[0] || '60%' }}
                      suppressHydrationWarning
                    />
                    <div
                      id="tech-bar-2"
                      className="h-full bg-zinc-400 transition-all duration-500"
                      style={{ width: currentProject.percent[1] || '30%' }}
                      suppressHydrationWarning
                    />
                    <div
                      id="tech-bar-3"
                      className="h-full bg-zinc-700 transition-all duration-500"
                      style={{ width: currentProject.percent[2] || '10%' }}
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4 pt-4">
                  <a
                    id="main-link-code"
                    href={currentProject.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-zinc-700 text-zinc-300 py-3 hover:bg-zinc-800 transition-all text-xs uppercase tracking-widest font-bold"
                  >
                    Source Code
                  </a>

                  <a
                    id="main-link-live"
                    href={currentProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-white text-black py-3 hover:bg-zinc-200 transition-all text-xs uppercase tracking-widest font-bold"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT CATALOG */}
            <div className="lg:col-span-5 flex flex-col bg-zinc-950/50 backdrop-blur-sm border-t lg:border-t-0 border-zinc-800">
              {/* CATALOG HEADER */}
              <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                  Project Catalog
                </span>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous Project"
                    className="px-3 py-1 border border-zinc-800 text-zinc-400 hover:bg-zinc-950 transition-colors text-xs bg-zinc-900 cursor-pointer flex items-center justify-center"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next Project"
                    className="px-3 py-1 border border-zinc-800 text-zinc-400 hover:bg-zinc-950 transition-colors text-xs bg-zinc-900 cursor-pointer flex items-center justify-center"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* PROJECT LIST */}
              <div
                id="project-list"
                className="flex-1 overflow-y-auto max-h-[600px] p-6 space-y-4 custom-scrollbar"
              >
                {projectsData.map((proj, index) => {
                  if (index === currentIndex) return null;

                  return (
                    <div
                      key={proj.title}
                      onClick={() => handleSelect(index)}
                      className="group p-4 border border-zinc-800 bg-zinc-900 rounded-lg hover:border-zinc-400 transition-all cursor-pointer overflow-hidden list-entrance"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="relative w-20 h-14 shrink-0 overflow-hidden rounded border border-zinc-800 bg-zinc-950">
                          <Image
                            src={proj.image}
                            alt={proj.title}
                            fill
                            sizes="80px"
                            referrerPolicy="no-referrer"
                            className="object-cover group-hover:scale-105 transition-transform grayscale opacity-90"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-white uppercase truncate">
                            {proj.title}
                          </h4>
                          <p className="text-[10px] text-zinc-500 line-clamp-1 mt-1">
                            {proj.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
