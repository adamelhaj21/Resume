document.querySelector('.download-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior

    // Get the content you want to convert to PDF
    const content = document.querySelector('.container');

    // Temporarily adjust the container's width to fit the PDF format
    const originalWidth = content.style.width;
    const originalPadding = content.style.padding;

    // Set the width and padding to fit within the PDF's dimensions
    content.style.width = '750px'; // A width that fits well within a letter-sized page
    content.style.padding = '10px'; // Ensure enough padding for content to not touch edges

    // Use html2pdf.js to generate the PDF
    html2pdf()
        .from(content)
        .set({
            margin: [0.2, 0.2, 0.2, 0.2], // Reduced margins to fit more content
            filename: 'Adam_Elhaj_Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 }, // Set quality to slightly lower to avoid large file size
            html2canvas: { scale: 1.2, logging: true, letterRendering: true }, // Scale the canvas for better fit
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' } // Letter format
        })
        .toPdf()
        .save()
        .finally(function() {
            // Restore the original width and padding after generating the PDF
            content.style.width = originalWidth;
            content.style.padding = originalPadding;
        });
});