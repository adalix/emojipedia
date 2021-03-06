import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEmoji(emoji) {
  return (
    <Entry
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      description={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEmoji)}

        {/* <Card
          emoji="ðª"
          name="Tense Biceps"
          meaning="âYou can do that!â or âI feel strong!â Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
        />
        <Card
          emoji="ðª"
          name="Tense Biceps"
          meaning="âYou can do that!â or âI feel strong!â Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
        />
        <Card
          emoji="ðª"
          name="Tense Biceps"
          meaning="âYou can do that!â or âI feel strong!â Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
        /> */}
      </dl>
    </div>
  );
}

export default App;
