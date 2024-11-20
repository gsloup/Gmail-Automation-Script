function autoDeleteOldEmails() {
  // Categories to clean up.  Can test your listed categories in your gmail's search bar
  const categories = ["category:social", "category:promotions"];
  const date = new Date();
  date.setMonth(date.getMonth() - 3); // Emails older than 3 months

  const formattedDate = Utilities.formatDate(date, Session.getScriptTimeZone(), "yyyy/MM/dd");

  categories.forEach(category => {
    const searchQuery = `${category} before:${formattedDate}`;
    const threads = GmailApp.search(searchQuery);

    // Any email returned from your searchQuery will be moved to your "trash".  Any email moved to that folder will auto-erase after 30 days.
    threads.forEach(thread => {
      thread.moveToTrash();
    });
  });
}
