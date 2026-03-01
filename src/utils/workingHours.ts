import { business } from '../data/business';

/**
 * Day names mapped to numbers (0 = Sunday, 1 = Monday, etc.)
 */
const dayMap: Record<string, number> = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

/**
 * Interface for working hours status response
 */
export interface WorkingHoursStatus {
  isOpen: boolean;
  currentDay: string;
  hoursText: string;
  statusBadge: {
    text: string;
    variant: 'success' | 'error' | 'warning';
  };
}

/**
 * Converts a time string (HH:MM) to minutes since midnight
 */
function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

/**
 * Checks if the business is currently open based on Asia/Kolkata timezone
 * @returns {boolean} True if business is currently open
 */
export function isBusinessOpen(): boolean {
  const now = new Date();

  // Get current time in Asia/Kolkata timezone
  const kolkataTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));

  const currentDayName = kolkataTime.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'Asia/Kolkata' });
  const currentMinutes = kolkataTime.getHours() * 60 + kolkataTime.getMinutes();

  // Find schedule for current day
  const todaySchedule = business.workingHours.schedule.find(
    (s) => s.day === currentDayName
  );

  if (!todaySchedule || !todaySchedule.open || !todaySchedule.close) {
    return false;
  }

  const openMinutes = timeToMinutes(todaySchedule.open);
  const closeMinutes = timeToMinutes(todaySchedule.close);

  return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
}

/**
 * Gets the current working hours status for the business
 * @returns {WorkingHoursStatus} Object with isOpen, currentDay, hoursText, and statusBadge
 */
export function getWorkingHoursStatus(): WorkingHoursStatus {
  const now = new Date();

  // Get current time in Asia/Kolkata timezone
  const kolkataTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));

  const currentDayName = kolkataTime.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'Asia/Kolkata' });
  const currentMinutes = kolkataTime.getHours() * 60 + kolkataTime.getMinutes();

  // Find schedule for current day
  const todaySchedule = business.workingHours.schedule.find(
    (s) => s.day === currentDayName
  );

  let isOpen = false;
  let hoursText = 'Closed today';
  let statusBadgeText = 'Closed';
  let statusBadgeVariant: 'success' | 'error' | 'warning' = 'error';

  if (todaySchedule && todaySchedule.open && todaySchedule.close) {
    const openMinutes = timeToMinutes(todaySchedule.open);
    const closeMinutes = timeToMinutes(todaySchedule.close);

    isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

    // Format hours text
    const formatTime = (time: string) => {
      const [hours, minutes] = time.split(':').map(Number);
      const period = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours % 12 || 12;
      return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
    };

    hoursText = `${formatTime(todaySchedule.open)} - ${formatTime(todaySchedule.close)} IST`;

    if (isOpen) {
      statusBadgeText = 'Open Now';
      statusBadgeVariant = 'success';
    } else if (currentMinutes < openMinutes) {
      statusBadgeText = 'Opens Soon';
      statusBadgeVariant = 'warning';
    } else {
      statusBadgeText = 'Closed';
      statusBadgeVariant = 'error';
    }
  }

  return {
    isOpen,
    currentDay: currentDayName,
    hoursText,
    statusBadge: {
      text: statusBadgeText,
      variant: statusBadgeVariant,
    },
  };
}
