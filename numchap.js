function reloadScript() {
                                    const currentPage = document.querySelector("#pageTitle").innerText;
                                    const listContainer = document.getElementById('listContainerchap');

                                    listContainer.innerHTML = '';

                                    for (let i = 1; i <= 5; i++) {
                                        const linkText = 'Chapitre-' + i;// Chapitre ou chapitre 
                                        const isActive = currentPage === linkText;

                                        if (isActive) {
                                            listContainer.innerHTML += '<li style="color: red;">' + linkText + '</li>';
                                        } else {
                                            // activateFunction(\'Chapitre' + i + '\') active la fonction Chapitre1_enable() modifie bien Chapitre en chapitre ou volume ou Chapitre
                                            listContainer.innerHTML += '<li class="serie-button" id="bt' + i + '" onclick="activateFunction(\'Chapitre' + i + '\')"><a href="#">' + linkText + '</a></li>';
                                        }
                                    }
                                }

                                document.addEventListener('DOMContentLoaded', reloadScript);

                                document.addEventListener('DOMContentLoaded', reloadScript);
