function doPromo() {
  try {
    const message = "Promotional offer details are now available.";
    console.log(message);
    alert(message);
  } catch (error) {
    console.error("Promo action failed:", error);
  }
}