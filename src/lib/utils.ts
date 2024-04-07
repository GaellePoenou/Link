import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${formattedDate} at ${time}`;
}

export const multiFormatDate = (timestamp: string = ""): string => {
  const timestampNum = Math.round(new Date(timestamp).getTime() / 1000);
  const date: Date = new Date(timestampNum * 1000);
  const now: Date = new Date();

  const diff: number = now.getTime() - date.getTime();
  const diffInSeconds: number = diff / 1000;
  const diffInMinutes: number = diffInSeconds / 60;
  const diffInHours: number = diffInMinutes / 60;
  const diffInDays: number = diffInHours / 24;

  switch (true) {
    case Math.floor(diffInDays) >= 30:
      return formatDate(timestamp);
    case Math.floor(diffInDays) === 1:
      return `il y a ${Math.floor(diffInDays)} jour`;
    case Math.floor(diffInDays) > 1 && diffInDays < 30:
      return `il y a ${Math.floor(diffInDays)} jours`;
    case Math.floor(diffInHours) >= 1:
      return `il y a ${Math.floor(diffInHours)} heures`;
    case Math.floor(diffInMinutes) >= 1:
      return `il y a ${Math.floor(diffInMinutes)} minutes`;
    default:
      return "À l'instant";
  }
};



export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};