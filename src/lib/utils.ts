import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

export function calculateStreak(logs: { log_date: string; completed: boolean }[]): number {
  if (!logs.length) return 0;
  
  // Sort logs by date (newest first)
  const sortedLogs = [...logs].sort((a, b) => 
    new Date(b.log_date).getTime() - new Date(a.log_date).getTime()
  );
  
  let streak = 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  let currentDate = new Date(today);
  
  // Check if the most recent log is from today or yesterday
  const mostRecentLog = sortedLogs[0];
  const mostRecentDate = new Date(mostRecentLog.log_date);
  mostRecentDate.setHours(0, 0, 0, 0);
  
  // If the most recent log is not from today or yesterday, and it's completed, start from that date
  if (mostRecentDate.getTime() !== today.getTime()) {
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (mostRecentDate.getTime() !== yesterday.getTime() && !mostRecentLog.completed) {
      return 0;
    }
    
    currentDate = new Date(mostRecentDate);
  }
  
  // Iterate through dates, checking for completed logs
  for (let i = 0; i < sortedLogs.length; i++) {
    const log = sortedLogs[i];
    const logDate = new Date(log.log_date);
    logDate.setHours(0, 0, 0, 0);
    
    // If this log is for the current date we're checking and it's completed
    if (logDate.getTime() === currentDate.getTime() && log.completed) {
      streak++;
      
      // Move to the previous day
      currentDate.setDate(currentDate.getDate() - 1);
    } else if (logDate.getTime() === currentDate.getTime() && !log.completed) {
      // If there's an incomplete log for this date, the streak is broken
      break;
    } else if (logDate.getTime() < currentDate.getTime()) {
      // If we've moved past the current date without finding a log, the streak is broken
      break;
    }
    // If the log date is in the future relative to currentDate, keep looking for the right log
  }
  
  return streak;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function calculateXP(tasks: any[], habits: any[], habitLogs: any[]): number {
  let totalXP = 0;
  
  // XP for completed tasks
  const completedTasks = tasks.filter(task => task.status === 'completed');
  totalXP += completedTasks.length * 15;
  
  // XP for habit completions with streak multipliers
  habits.forEach(habit => {
    const habitLogsForHabit = habitLogs.filter(log => 
      log.habit_id === habit.id && log.completed
    );
    
    const streak = calculateStreak(habitLogsForHabit);
    let multiplier = 1;
    
    if (streak >= 7) {
      multiplier = 2;
    } else if (streak >= 3) {
      multiplier = 1.5;
    }
    
    totalXP += habitLogsForHabit.length * 10 * multiplier;
  });
  
  // Apply daily XP cap (100 XP)
  return Math.min(totalXP, 100);
}

export function getTierInfo(xp: number): { level: number; name: string; nextThreshold: number; progress: number } {
  const tiers = [
    { level: 1, name: 'Seed', threshold: 0 },
    { level: 2, name: 'Seedling', threshold: 350 },
    { level: 3, name: 'Sapling', threshold: 600 },
    { level: 4, name: 'Evergreen', threshold: 1200 },
    { level: 5, name: 'Young Tree', threshold: 2000 },
    { level: 6, name: 'Mature Tree', threshold: 3500 },
    { level: 7, name: 'Oak', threshold: 5500 },
    { level: 8, name: 'Redwood', threshold: 8000 },
    { level: 9, name: 'Ancient Forest', threshold: 12000 },
    { level: 10, name: 'World Tree', threshold: 20000 },
  ];
  
  let currentTier = tiers[0];
  let nextTier = tiers[1];
  
  for (let i = tiers.length - 1; i >= 0; i--) {
    if (xp >= tiers[i].threshold) {
      currentTier = tiers[i];
      nextTier = tiers[i + 1] || tiers[i];
      break;
    }
  }
  
  const currentThreshold = currentTier.threshold;
  const nextThreshold = nextTier.threshold;
  const progress = nextThreshold > currentThreshold 
    ? Math.min(100, Math.floor(((xp - currentThreshold) / (nextThreshold - currentThreshold)) * 100))
    : 100;
  
  return {
    level: currentTier.level,
    name: currentTier.name,
    nextThreshold,
    progress
  };
}
