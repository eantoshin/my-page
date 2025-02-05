interface TimeConfig {
  readonly basicDelay: number;
  readonly typingDuration: number;
}

const time: TimeConfig = {
  basicDelay: 500,
  typingDuration: 2000,
} as const;

export default time;
