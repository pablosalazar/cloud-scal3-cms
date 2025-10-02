import { Check, Cpu, Play } from "lucide-react";
import Image from "next/image";

interface PersonaData {
  id: string;
  title: string;
  description: string;
  mainVideo: {
    thumbnail: string;
    label: string;
  };
}

interface PersonaContentProps {
  persona: PersonaData;
}

const tasks = ["Allocations", "Savings", "Management", "Approvals"];

export function PersonaContent({ persona }: PersonaContentProps) {
  return (
    <div className="flex gap-16 items-center bg-surface-2 p-10 rounded-4xl">
      {/* Left Side - Info */}
      <div className="flex flex-col gap-8 max-w-[40%]">
        {/* Icon */}
        <div className={`bg-white p-3 w-fit rounded-2xl mb-4`}>
          <Cpu size={28} color="black" />
        </div>

        {/* Title */}
        <h3 className=" font-bold text-4xl text-white">{persona.title}</h3>

        {/* Description */}
        <p className="font-normal text-xl text-[#babfc3] leading-[1.62]">
          {persona.description}
        </p>
      </div>

      {/* Right Side - Media */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Main Video */}
        <div className="relative w-full h-[300px] rounded-xl overflow-hidden bg-gradient-to-t from-black/60 via-transparent to-transparent">
          <Image
            src={persona.mainVideo.thumbnail}
            alt="Day in Life"
            className="w-full h-full object-cover"
            width={100}
            height={200}
          />

          {/* Play Button */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-black/50 backdrop-blur-sm rounded-full border-3 border-black/30 flex items-center justify-center cursor-pointer hover:bg-black/70 transition-colors">
            <Play color="white" />
          </div>

          {/* Video Label */}
          <span className="absolute bottom-5 left-1/2 transform -translate-x-1/2 font-onest font-normal text-[27.182px] text-white">
            {persona.mainVideo.label}
          </span>
        </div>

        {/* Thumbnail Grid */}
        <div className="flex gap-4">
          <div className="flex-1 h-[289px] bg-[#373636] rounded-xl text-white p-4 ">
            <h3 className="font-bold text-3xl text-[var(--blue)] mb-4">
              Financial Scope
            </h3>
            <h3 className="font-bold text-3xl text-[#73FFA8] mb-4">$$$$$</h3>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="150"
              viewBox="0 0 300 150"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M299.203 0.398438C250.592 4.44935 247.582 101.431 199.469 112.6C159.794 121.81 139.703 69.528 99.7344 75.1992C56.3819 81.3506 42.509 135.83 0 150H299.203V0.398438Z"
                fill="url(#paint0_linear_1517_99)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1517_99"
                  x1="149.602"
                  y1="-240.088"
                  x2="149.602"
                  y2="150"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#97F4BA" />
                  <stop offset="1" stopColor="#373636" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex-1 h-[289px] bg-[#373636] rounded-xl text-white p-4 ">
            <h3 className="font-bold text-3xl text-[var(--blue)] mb-4">
              Tasks
            </h3>
            <ul className="space-y-4">
              {tasks.map((task) => (
                <li key={task} className="flex gap-2 items-center text-2xl">
                  <Check className="text-[var(--green)]" />
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
