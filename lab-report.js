let n = parseInt(prompt("Enter Total Process:"));
let at = [], bt = [], rt = [];

for (let i = 0; i < n; i++) {
  at[i] = parseInt(prompt(`Enter Arrival Time for Process ${i + 1}:`));
  bt[i] = parseInt(prompt(`Enter Burst Time for Process ${i + 1}:`));
  rt[i] = bt[i]; // Remaining time
}

let timeQuantum = parseInt(prompt("Enter Time Quantum:"));
let time = 0, remain = n, flag = 0, count = 0;
let wait_time = 0, turnaround_time = 0;

console.log("\n\nProcess\t| Turnaround Time | Waiting Time\n");

while (remain !== 0) {
  if (rt[count] <= timeQuantum && rt[count] > 0) {
    time += rt[count];
    rt[count] = 0;
    flag = 1;
  } else if (rt[count] > 0) {
    rt[count] -= timeQuantum;
    time += timeQuantum;
  }

  if (rt[count] === 0 && flag === 1) {
    remain--;
    let turnaround = time - at[count];
    let waiting = turnaround - bt[count];
    console.log(`P[${count + 1}]\t|\t${turnaround}\t|\t${waiting}`);
    wait_time += waiting;
    turnaround_time += turnaround;
    flag = 0;
  }

  if (count === n - 1) {
    count = 0;
  } else if (at[count + 1] <= time) {
    count++;
  } else {
    count = 0;
  }
}

console.log(`\nAverage Waiting Time = ${(wait_time / n).toFixed(2)}`);
console.log(`Average Turnaround Time = ${(turnaround_time / n).toFixed(2)}`);
