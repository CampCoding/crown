"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Mail, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import NetworkGrid from "../layout/NetworkGrid";
import Particles from "../Particles";
import AnimateSvg from "../AnimateSvg";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  tag: string;
  experience: string;
  accent: string;
};

// 👑 Crown Agency Team
const teamMembers: TeamMember[] = [
  {
    name: "Omar Khaled",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=900&auto=format&fit=crop",
    bio: "Builds visual stories that turn simple brands into memorable experiences.",
    tag: "Brand Strategy",
    experience: "9+ Years",
    accent: "from-blue-600 to-cyan-500",
  },
  {
    name: "Nour Hassan",
    role: "Product Designer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop",
    bio: "Designs clean interfaces with sharp UX logic and premium interaction details.",
    tag: "UI / UX",
    experience: "7+ Years",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    name: "Youssef Adel",
    role: "Frontend Engineer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=900&auto=format&fit=crop",
    bio: "Turns complex ideas into smooth, fast, responsive digital products.",
    tag: "Next.js",
    experience: "6+ Years",
    accent: "from-cyan-500 to-blue-400",
  },
  {
    name: "Mariam Samir",
    role: "Marketing Lead",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=900&auto=format&fit=crop",
    bio: "Creates campaigns that feel human, look premium, and convert with purpose.",
    tag: "Growth",
    experience: "8+ Years",
    accent: "from-blue-400 to-cyan-600",
  },
  {
    name: "Ahmed Mostafa",
    role: "Motion Designer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=900&auto=format&fit=crop",
    bio: "Adds movement, emotion, and energy to every product story.",
    tag: "Motion",
    experience: "5+ Years",
    accent: "from-blue-700 to-indigo-500",
  },
];

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-(--black)! py-30! text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 mt-1 max-w-3xl text-center">
          <h2 className="relative inline-block text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Our{" "}
            <span className="text-primary">
              Creative
              <AnimateSvg
                path="M61.9499 126.019C129.419 134.323 205.111 131.946 269.179 107.397C287.878 100.232 312.661 88.4955 307.573 64.3267C301.574 35.835 261.103 20.5501 236.856 13.8731C190.969 1.23754 142.979 0.450446 96.0779 7.22801C75.3721 10.2202 54.4734 14.7152 35.0413 22.6512C24.1049 27.1176 1.84994 37.8503 3.04637 53.0054C3.93896 64.3117 19.7218 75.4778 28.068 80.8164C50.3829 95.0898 77.4888 103.502 102.805 110.596C157.283 125.862 212.697 134.798 268.687 142.263"
                viewBox="0 0 110 20"
                className="absolute bottom-12 left-16 w-16 h-3"
                strokeColor="#fff"
                strokeWidth={6}
                animationDuration={1.5}
              />
            </span>{" "}
            <span className="relative inline-block">Team</span>
          </h2>

          <p className="mx-auto mt-1 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            A small team with big energy — strategy, design, code, and motion
            working together like a clean business machine, the heart of Crown
            Agency.
          </p>
        </div>

        {/* Swiper */}
        <div className="relative my-5!">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            speed={850}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 160,
              modifier: 2.4,
              slideShadows: false,
            }}
            navigation={{
              prevEl: ".team-swiper-prev",
              nextEl: ".team-swiper-next",
            }}
            pagination={{
              clickable: true,
              el: ".team-swiper-pagination",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 18,
              },
              640: {
                slidesPerView: 1.35,
                spaceBetween: 22,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 26,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="!overflow-visible"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.name} className="!h-auto">
                <article className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.09]">
                  {/* Glow */}
                  <div
                    className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${member.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40`}
                  />

                  <div className="relative overflow-hidden rounded-[1.5rem]">
                    <div className="relative h-[390px] w-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role} at Crown Agency`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#050711] via-[#050711]/20 to-transparent" />

                      <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
                        {member.experience}
                      </div>

                      <div
                        className={`absolute right-4 top-4 rounded-full bg-gradient-to-r ${member.accent} px-4 py-2 text-xs font-bold text-white shadow-lg`}
                      >
                        {member.tag}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-2xl font-black tracking-tight">
                        {member.name}
                      </h3>

                      <p
                        className={`mt-1 w-fit bg-gradient-to-r ${member.accent} bg-clip-text text-sm font-bold text-transparent`}
                      >
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div className="relative p-4">
                    <p className="min-h-[72px] text-sm leading-7 text-white/60">
                      {member.bio}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex gap-3">
                        <a
                          href="#"
                          aria-label={`${member.name} LinkedIn`}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                        >
                          {/* <Linkedin className="h-4 w-4" /> */}
                        </a>

                        <a
                          href="#"
                          aria-label={`${member.name} Email`}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                      </div>

                      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/60">
                        Available
                      </span>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Particles
            particleCount={300}
            speed={0.1}
            sizeRandomness={7}
            particleColors={["#0072ed", "#ffffff"]}
          />
          <NetworkGrid />
        </div>
      </div>

      <style jsx global>{`
        .team-swiper-pagination .swiper-pagination-bullet {
          width: 9px;
          height: 9px;
          background: rgba(255, 255, 255, 0.35);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .team-swiper-pagination .swiper-pagination-bullet-active {
          width: 30px;
          border-radius: 999px;
          background: linear-gradient(90deg, #67e8f9, #f0abfc, #fdba74);
        }
      `}</style>
    </section>
  );
}
