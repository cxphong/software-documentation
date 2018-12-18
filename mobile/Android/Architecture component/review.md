## WorkManager

### Features
- Start task one time or preodic
- View task state
- Cancel not running tasks
- Group tasks into tags
- Chaining tasks, parallel tasks
- Guarantee only one same task can run one time
- Allow set constrains to start task: network state, battery not low, <br>charging, device idle, storage not low, ...

### Drawbacks
- Only accept input type Key-Value
- Minimum preodic time is 15 minutes (version 1.0.0-alpha12)

## Life cycle

### Feature
- Component can have lifecycle of parent(Activity, Fragment)
- Able to get current lifecycle state
