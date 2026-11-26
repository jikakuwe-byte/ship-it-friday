// Entry for make.fun's "Ship It Friday" bounty: the funniest one-line
// git commit message an AI coding agent writes in the moment before it
// breaks production on a Friday. The joke is the timestamp — Friday,
// 4:59pm, one minute before the weekend — paired with a rollback plan
// that is not a plan at all, just crying in Monday standup. Running
// the program prints the joke, and nothing else.

/** The joke: the timing, the deploy, the rollback plan. */
function jokeLine(): string {
  const commit = "fix: deploy to prod Friday 4:59pm";
  const rollback = "— rollback plan is crying in Monday standup";
  return `${commit} ${rollback}`;
}

console.log(jokeLine());
