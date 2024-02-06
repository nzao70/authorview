 function reloadScript() {
                                    const currentPage = document.querySelector("#pageTitle").innerText;
                                    const listContainer = document.getElementById('listContainerchap');

                                    listContainer.innerHTML = '';

                                    for (let i = 1; i <= 3; i++) {
                                        const linkText = 'Tome-' + i;// tome ou chapitre 
                                        const isActive = currentPage === linkText;

                                        if (isActive) {
                                            listContainer.innerHTML += '<li style="color: red;">' + linkText + '</li>';
                                        } else {
                                            // activateFunction(\'Tome' + i + '\') active la fonction Tome1_enable() modifie bien tome en chapitre ou volume ou tome
                                            listContainer.innerHTML += '<li class="serie-button" id="bt' + i + '" onclick="activateFunction(\'Tome' + i + '\')"><a href="#">' + linkText + '</a></li>';
                                        }
                                    }
                                }

                                document.addEventListener('DOMContentLoaded', reloadScript);
