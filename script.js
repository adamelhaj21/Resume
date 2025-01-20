function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const button = document.querySelector(`button[onclick="toggleSection('${sectionId}')"]`);

    if (section.style.display === "block") {
        section.style.display = "none";
        button.textContent = button.textContent.replace("▲", "▼");
    } else {
        section.style.display = "block";
        button.textContent = button.textContent.replace("▼", "▲");
    }
}