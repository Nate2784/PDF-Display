
document.getElementById("download-btn").addEventListener("click", function () {
    var link = document.createElement("a");
    link.href = "document/WINGU-AFRICA_ADDIS.pdf"; // Ensure the path is correct
    link.download = "WINGU-AFRICA_ADDIS.pdf"; // Set the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Auto-download when page loads
// window.onload = function () {
//     if (!document.cookie.includes("downloaded=true")) {
//         var link = document.createElement("a");
//         link.href = "document/WINGU-AFRICA_ADDIS.pdf";
//         link.download = "WINGU-AFRICA_ADDIS.pdf";
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);

//         // Set cookie to prevent future downloads
//         document.cookie = "downloaded=true; max-age=86400"; // Expires in 24 hours
//     }
// };