export const handleInstantScroll = (event, targetId) => {
  event.preventDefault();
  const element = document.getElementById(targetId);
  const headerOffset = 80; // Adjust based on your header height
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "auto", // Scrolls instantly without smooth animation
  });
};
