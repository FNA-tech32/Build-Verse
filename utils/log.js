export const displayFancyLogs = () => {
  console.log(
    "%c  ____        _ _     _ __     __               \n | __ ) _   _(_) | __| |\\ \\   / /__ _ __ ___  ___ \n |  _ \\| | | | | |/ _` | \\ \\ / / _ \\ '__/ __|/ _ \\\n | |_) | |_| | | | (_| |  \\ V /  __/ |  \\__ \\  __/\n |____/ \\__,_|_|_|\\__,_|   \\_/ \\___|_|  |___/\\___|\n",
    "color: #6b17e8;"
  );

  console.log(
    "%c Welcome to Build Verse :)",
    "color: #6b17e8; padding: 6px;"
  );

  // Easter egg hint
  console.log(
    "%c 💡 Psst! There's a secret hiding in plain sight. Follow your heart, it might lead to something... interesting.",
    "color: #6b17e8; font-style: italic; padding: 6px;"
  );
};
