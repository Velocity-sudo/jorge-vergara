document.addEventListener('DOMContentLoaded', () => {
    // FAQ Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all others
            faqItems.forEach(other => other.classList.remove('active'));

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Sticky CTA Visibility (Optional logic if we want to hide it at very top, but prompt says "Sticky button in mobile" usually implies always visible or after hero)
    // For now, let's keep it always visible on mobile, or maybe add a scroll listener to show it after Hero.
    // Prompt says: "Barra/ botón sticky en mobile ("QUIERO PAGAR MENOS")"
    
    // Modal Logic
    const openButtons = document.querySelectorAll('[data-action="open-modal"]');
    const modal = document.getElementById('application-modal');
    const closeButton = document.querySelector('.close-modal');

    function openModal() {
        if (modal) {
            modal.classList.add('visible');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    }

    function closeModal() {
        if (modal) {
            modal.classList.remove('visible');
            document.body.style.overflow = '';
        }
    }

    openButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Check if we should redirect or open modal
            // Prompt says: "Acción final recomendada: Formulario corto"
            // For GHL, typically we want to jump to the #apply section or open a popup.
            // Let's scroll to #apply if it exists, otherwise open modal.
            
            const applySection = document.querySelector('#apply');
            if (applySection) {
                applySection.scrollIntoView({ behavior: 'smooth' });
            } else {
                openModal();
            }
        });
    });

    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // Close on outside click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Form Submission Handling (Placeholder)
    const form = document.getElementById('application-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate submission
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Enviando...';
            
            // Track event (Placeholder)
            console.log('Form submitted: lead_submit');
            if (window.location.href.includes('gtm')) {
                // Tracking code would go here
            }

            setTimeout(() => {
                // Success state
                form.innerHTML = `
                    <div class="text-center">
                        <h3 class="text-accent mb-1">¡Recibido!</h3>
                        <p>Te contactaremos en breve si calificas.</p>
                        <a href="[CALENDAR_URL_AQUI]" class="btn btn-primary mt-2">Agendar Ahora (Opcional)</a>
                    </div>
                `;
            }, 1500);
        });
    }

    // Video Play Tracking
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', () => {
            console.log('Video clicked');
            // Here you would replace the placeholder with the actual iframe
            // videoPlaceholder.innerHTML = '<iframe ...></iframe>';
        });
    }
});
