document.addEventListener('DOMContentLoaded', () => {
    
    // Tab-Umschaltung
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Alle Tabs und Buttons zurücksetzen
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Klick-Ziel aktivieren
            button.classList.add('active');
            const targetElement = document.getElementById(targetTab);
            if (targetElement) {
                targetElement.classList.add('active');
            }
        });
    });

    // Accordion-Umschaltung
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            accordionItem.classList.toggle('active');

            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                }
            });
        });
    });
});
