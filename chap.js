var spanItem = document.getElementById("spanItem");

        function nextPage() {

            var currentText = spanItem.innerText;
            var currentChapter = parseInt(currentText.split("-")[1]);

            
            if (currentChapter < 3) {// nombre de tome ou chapitre (pour cette exemple 3)
                var newChapter = currentChapter + 1;
                activateFunction('Tome' + newChapter);
            }

        }

        function previousPage() {

            var currentText = spanItem.innerText;
            var currentChapter = parseInt(currentText.split("-")[1]);

            if (currentChapter > 1) {
                var newChapter = currentChapter - 1;
                activateFunction('Tome' + newChapter);
            }

        }

        document.getElementById('btPrev').addEventListener('click', previousPage);
        document.getElementById('btNext').addEventListener('click', nextPage);
// --------------------------------------------------------------------------------------------------------------


function test_enable() {
                        var bt1Text = document.getElementById('bt1').innerText;

                        document.getElementById('pageTitle').innerText = bt1Text;
                        document.getElementById('listItem').innerText = bt1Text;
                        document.getElementById('spanItem').innerText = bt1Text;
  // ------------------------------------------------------

                        generateVideo('<div class="page-break no-gaps">\
                    <video id="video" controls src="../image/lecteur.mp4"></video>\
                    </div>\
                    ');
  // ------------------------------------------------------

                        generateVideo('<div class="page-break no-gaps">\
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dQGFXJkI-EU?si=Jn20oLgf466Hnyg_"\
                        title="YouTube video player" frameborder="0"\
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"\
                        allowfullscreen></iframe>\
                </div>\ ');
// ------------------------------------------------------
                        generateVideo(' <div class="page-break no-gaps">\
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/noY1oTYvkRo?si=p7P_QvmTckmYhEda"\
                        title="YouTube video player" frameborder="0"\
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"\
                        allowfullscreen></iframe>\
                </div>\ ');
  // ------------------------------------------------------

                        generateAudio('<div class="page-break">\
                    <div class="cop">-JBUHVFF <br>\
                        -ddcvvdsfik qhcquDQO Z <br>\
                        -scnjzfhb QSCVGSvu <br>\
                        -sqzvjfehbbcsq xvbshsssssssssssssssssssssssss <br>\
                        -qscndzjhfvb chhhhhhhhhhhhhhhhhhhhhhhh<br>\
                        <audio id="audioPlayer" controls>\
                            <source src="../image/Kendrick Lamar, SZA - All The Stars.mp3" type="audio/mp3">\
                        </audio>\
                        <button id="bt1audio">←Précédent</button>\
                        <button id="bt1audio2">Suivant→</button>\
                    </div>\
                </div>');



                        document.getElementById('bt1audio').addEventListener('click', prevAudio);
                        document.getElementById('bt1audio2').addEventListener('click', nextAudio);

                        var audioPlayer = document.getElementById('audioPlayer');
                        var audioFiles = ['../image/Kendrick Lamar, SZA - All The Stars.mp3', 'https://ia801405.us.archive.org/18/items/zero-project-whispering-iceland/ZeroProject-WhisperingIceland.mp3'];
                        var currentAudioIndex = 0;

                        function playCurrentAudio() {
                            audioPlayer.src = audioFiles[currentAudioIndex];
                            audioPlayer.play();
                        }

                        function nextAudio() {
                            if (currentAudioIndex < audioFiles.length - 1) {
                                currentAudioIndex++;
                                playCurrentAudio();
                            } else {
                                console.log('Tous les fichiers audio ont été lus.');
                            }
                        }

                        function prevAudio() {
                            if (currentAudioIndex > 0) {
                                currentAudioIndex--;
                                playCurrentAudio();
                            } else {
                                console.log('Vous êtes déjà au premier fichier audio.');
                            }
                        }

                        audioPlayer.addEventListener('ended', function () {
                            nextAudio();
                        });

                        playCurrentAudio(); // Commencer la lecture du premier fichier audio // Commencer la lecture du premier fichier audio
  // ------------------------------------------------------


                        generateImages('../image/chapitre 0/', 3);
  // ------------------------------------------------------


                        generateVideo(' <div class="page-break no-gaps">\
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8O6XYSIREjE?si=KXAJ9VmPm3tTkwR2"\
                        title="YouTube video player" frameborder="0"\
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"\
                        allowfullscreen></iframe>\
                </div>\ ');
  // ------------------------------------------------------


                        generateVideo(' <div class="page-break no-gaps">\
                    <video id="video" controls src="../image/app.mp4"></video>\
                </div>\ ');
  // ------------------------------------------------------

                        generateImages2('../image/chapitre 0/', 7);
  // ------------------------------------------------------

                        const customImageList = [
                            'https://s22.anime-sama.me/s1/scans/Vagabond/180/1.jpg',
                            'https://s22.anime-sama.me/s1/scans/My%20Hero%20Academia/412/01.jpg',
                            'https://s22.anime-sama.me/s1/scans/My%20Hero%20Academia/412/05.jpg',
                            'https://s22.anime-sama.me/s1/scans/Sakamoto%20Days/150/02.jpg'
                        ];
                        generateCustomImages(customImageList);
  // ------------------------------------------------------
                        reloadScript();
                    }

                    // désactivé-------------------------
                    function test_disable() {
                        document.querySelector('.slam').innerHTML = '';
                    }
// --------------------------------------------------------------------------------------------------------------

 // function generateAudio(audioHtml) {
                    //     document.querySelector('.slam').insertAdjacentHTML('beforeend', audioHtml);
                    // }


                    // // généré video
                    // function generateVideo(videoHTML) {
                    //     document.querySelector('.slam').insertAdjacentHTML('beforeend', videoHTML);
                    // }


                    // // généré image disocier
                    // function generateCustomImages(imageList) {

                    //     imageList.forEach((imageUrl, index) => {
                    //         const imgElement = document.createElement('div');
                    //         imgElement.className = 'page-break no-gaps';
                    //         imgElement.innerHTML = `<img src="${imageUrl}" alt="Image ${index + 1}">`;
                    //         document.querySelector('.slam').appendChild(imgElement);
                    //     });
                    // }

                    // // généré image en suite de 1 a totalImages
                    // function generateImages(baseURL, totalImages) {
                    //     for (let i = 1; i <= totalImages; i++) {
                    //         const imgElement = document.createElement('div');
                    //         imgElement.className = 'page-break no-gaps';
                    //         imgElement.innerHTML = `<img id="image-${i}" src="${baseURL}${i}.jpg">`;
                    //         document.querySelector('.slam').appendChild(imgElement);
                    //     }
                    // }


                    // // généré image en suite de 4 a totalImages
                    // function generateImages2(baseURL, totalImages) {
                    //     for (let i = 4; i <= totalImages; i++) {
                    //         const imgElement = document.createElement('div');
                    //         imgElement.className = 'page-break no-gaps';
                    //         imgElement.innerHTML = `<img id="image-${i}" src="${baseURL}${i}.jpg">`;
                    //         document.querySelector('.slam').appendChild(imgElement);
                    //     }
                    // }
