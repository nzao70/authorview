function copyText(text) {
            // Copier le texte dans le presse-papier
            navigator.clipboard.writeText(text)
                .catch(err => {
                    console.error('Erreur lors de la copie :', err);
                });
        }
  
