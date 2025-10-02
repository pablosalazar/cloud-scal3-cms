import { Play } from "lucide-react";
import { VideoData } from "./types";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface VideoCardProps {
  videoData: VideoData;
}

export function VideoCard({ videoData }: VideoCardProps) {
  return (
    <div
      className={`relative h-full p-3 rounded-4xl border-3 border-[var(--surface-2)] flex-shrink-0`}
    >
      {/* Media Container */}
      <div className="relative w-full overflow-hidden rounded-4xl mb-3">
        <video
          controls
          className="w-full h-full object-cover"
          poster={`https://img.youtube.com/vi/${videoData.id}/hqdefault.jpg`}
        >
          <source src={videoData.src} type="video/mp4" />
        </video>

        <Dialog>
          <DialogTrigger asChild>
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-all cursor-pointer">
              <Play className="text-white ml-1" size={24} />
            </button>
          </DialogTrigger>
          <DialogContent className="!max-w-5xl w-full p-0">
            <DialogTitle className="sr-only">{videoData.title}</DialogTitle>
            <div className="relative aspect-video">
              <iframe
                src={`${videoData.src}?autoplay=1&rel=0`}
                title={videoData.title}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <h4 className="text-xl leading-[1.2] mb-6">{videoData.title}</h4>
    </div>
  );
}
