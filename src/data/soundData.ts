export interface SoundType {
  id: number
  title: string
  icon: any
  soundPath: string
  isPremium: boolean
}

const soundData: SoundType[] = [
  {
    id: 1,
    title: "Rain",
    icon: "☔️",
    soundPath: "/sounds/alarm_clock.mp3",
    isPremium: false
  },
  {
    id: 2,
    title: "Buzzer",
    icon: "🌊",
    soundPath: "/sounds/buzzer_clock.mp3",
    isPremium: false
  }
]

export { soundData }
