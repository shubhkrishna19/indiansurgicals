interface WorkingDay {
  day: string;
  open?: string;
  close?: string;
}

const publishedSchedule: WorkingDay[] = [];

export interface WorkingHoursStatus {
  isOpen: boolean;
  currentDay: string;
  hoursText: string;
  statusBadge: {
    text: string;
    variant: "success" | "error" | "warning";
  };
}

function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function getTodaySchedule(): { currentDayName: string; currentMinutes: number; todaySchedule?: WorkingDay } {
  const now = new Date();
  const kolkataTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  const currentDayName = kolkataTime.toLocaleDateString("en-US", {
    weekday: "long",
    timeZone: "Asia/Kolkata",
  });
  const currentMinutes = kolkataTime.getHours() * 60 + kolkataTime.getMinutes();
  const todaySchedule = publishedSchedule.find((schedule) => schedule.day === currentDayName);

  return { currentDayName, currentMinutes, todaySchedule };
}

export function isBusinessOpen(): boolean {
  const { currentMinutes, todaySchedule } = getTodaySchedule();
  if (!todaySchedule?.open || !todaySchedule.close) {
    return false;
  }

  const openMinutes = timeToMinutes(todaySchedule.open);
  const closeMinutes = timeToMinutes(todaySchedule.close);
  return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
}

export function getWorkingHoursStatus(): WorkingHoursStatus {
  const { currentDayName, todaySchedule } = getTodaySchedule();

  if (!todaySchedule?.open || !todaySchedule.close) {
    return {
      isOpen: false,
      currentDay: currentDayName,
      hoursText: "Public contact hours are being finalized.",
      statusBadge: {
        text: "Hours pending",
        variant: "warning",
      },
    };
  }

  const openMinutes = timeToMinutes(todaySchedule.open);
  const closeMinutes = timeToMinutes(todaySchedule.close);
  const { currentMinutes } = getTodaySchedule();
  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${minutes.toString().padStart(2, "0")} ${period}`;
  };

  return {
    isOpen,
    currentDay: currentDayName,
    hoursText: `${formatTime(todaySchedule.open)} - ${formatTime(todaySchedule.close)} IST`,
    statusBadge: {
      text: isOpen ? "Open now" : "Closed",
      variant: isOpen ? "success" : "error",
    },
  };
}
