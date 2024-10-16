// src/utils/fileUtils.js

/**
 * Function to download a file and optionally open it in a new tab.
 * @param {string} fileUrl - The URL of the file to download.
 * @param {string} fileName - The name to be used for the downloaded file.
 * @param {boolean} openInNewTab - Whether to open the file in a new tab.
 */
export const downloadAndOpenFile = (
  fileUrl,
  fileName,
  openInNewTab = false
) => {
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  if (openInNewTab) {
    window.open(fileUrl, "_blank");
  }
};
