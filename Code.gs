function autoDeleteOldEmails() {
  // Categories to clean up
  const categories = ["category:social", "category:promotions"];
  const date = new Date();
  date.setMonth(date.getMonth() - 3); // Emails older than 3 months

  const formattedDate = Utilities.formatDate(date, Session.getScriptTimeZone(), "yyyy/MM/dd");

  categories.forEach(category => {
    const searchQuery = `${category} before:${formattedDate}`;
    const threads = GmailApp.search(searchQuery);

    threads.forEach(thread => {
      thread.moveToTrash();
    });
  });
}
