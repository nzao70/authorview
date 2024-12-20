function copyText(button) {
            // Récupérer le texte du bouton
            const textToCopy = button.innerText;

            // Copier le texte dans le presse-papier
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    alert(`Texte copié : "${textToCopy}"`);
                })
                .catch(err => {
                    console.error('Erreur lors de la copie :', err);
                });
        }
  
