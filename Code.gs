function autoDeleteOldEmails() {
  // Categories to clean up.  Can test any queries inside your gmail's search bar.
  const categories = ["category:social", "category:promotions"];
  const date = new Date();
  date.setMonth(date.getMonth() - 3); // Emails older than 3 months

  const formattedDate = Utilities.formatDate(date, Session.getScriptTimeZone(), "yyyy/MM/dd");

  let totalDeletedEmails = 0;

  categories.forEach(category => {
    const searchQuery = `${category} before:${formattedDate}`;
    const threads = GmailApp.search(searchQuery);

    // Move threads to Trash and update count
    threads.forEach(thread => {
      thread.moveToTrash();
    });
    totalDeletedEmails += threads.length;
  });
  console.log(`Total emails moved to Trash: ${totalDeletedEmails}`);
}
