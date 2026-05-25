import { create } from 'zustand';

const TURN_DURATION = 10; // 10 seconds per turn

const useTimerStore = create((set, get) => ({
  timeLeft: TURN_DURATION,
  isRunning: false,
  isUrgent: false, // When 5 seconds or less
  intervalId: null,
  
  startTimer: () => {
    // Clear any existing timer
    const existingInterval = get().intervalId;
    if (existingInterval) {
      clearInterval(existingInterval);
    }
    
    set({ timeLeft: TURN_DURATION, isRunning: true, isUrgent: false });
    
    const intervalId = setInterval(() => {
      const { timeLeft, isRunning } = get();
      
      if (!isRunning) {
        clearInterval(intervalId);
        return;
      }
      
      if (timeLeft <= 1) {
        clearInterval(intervalId);
        set({ timeLeft: 0, isRunning: false });
        // Trigger time's up callback
        const onTimeUp = get().onTimeUp;
        if (onTimeUp) onTimeUp();
        return;
      }
      
      const newTime = timeLeft - 1;
      set({ 
        timeLeft: newTime,
        isUrgent: newTime <= 5 
      });
    }, 1000);
    
    set({ intervalId });
  },
  
  stopTimer: () => {
    const { intervalId } = get();
    if (intervalId) {
      clearInterval(intervalId);
    }
    set({ isRunning: false, intervalId: null });
  },
  
  resetTimer: () => {
    const { intervalId } = get();
    if (intervalId) {
      clearInterval(intervalId);
    }
    set({ 
      timeLeft: TURN_DURATION, 
      isRunning: false, 
      isUrgent: false,
      intervalId: null 
    });
  },
  
  setOnTimeUp: (callback) => set({ onTimeUp: callback }),
  
  onTimeUp: null,
}));

export default useTimerStore;