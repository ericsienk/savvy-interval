export enum IntervalState {
  Continue = "CONTINUE",
  Stop = "STOP",
}

export type Interval = () =>
  | Promise<number | IntervalState | void>
  | number
  | IntervalState
  | void;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async (callback: Interval, ms: number = 0) => {
  let loopDelay = Math.abs(ms);
  while (true) {
    const response = await callback();
    if (response === IntervalState.Stop) {
      return;
    }

    await delay(
      !isNaN(Number(response)) ? Math.abs(Number(response)) : loopDelay
    );
  }
};
