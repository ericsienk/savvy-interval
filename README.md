# savvy-interval

```typescript
import interval from "savvy-interval";

async function run() {
  let intervalMsTime = 1000;
  let count = 0;

  // provide a callback to get called every interval
  interval(async () => {
    if (count === 1) {
      // return a custom interval time
      return 2000;
    } else if (count === 2) {
      // return a Continue state which uses intervalMsTime
      return IntervalState.Continue;
    } else if (count === 3) {
      // return a Stop State which will stop the interval
      return IntervalState.Stop;
    } else {
      // return undefined which is same as Continue state
      return;
    }

    count++;
  }, intervalMsTime);
}
```
