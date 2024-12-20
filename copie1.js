function copyText(text) {
            // Copier le texte dans le presse-papier
            navigator.clipboard.writeText(text)
                .then(() => {
                    alert(`Texte copié : "${text}"`);
                })
                .catch(err => {
                    console.error('Erreur lors de la copie :', err);
                });
        }
  
