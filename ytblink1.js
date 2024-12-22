
            document.addEventListener("DOMContentLoaded", function () {
            const links = [
            "https://heidi-17455.kxcdn.com/photos/3c88e2d4-a19f-4672-af8c-a649ca59d44a/small",

            "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-04/240419-donald-trump-court-ac-958p-e498bf.jpg",

            "https://www.lexpress.fr/resizer/v2/T46Z5JCGXNCBJHLD5DPJY3G4NE.jpg?auth=08feed476ff24e3483e162dbacd0e68e9d610661ba03b3a6b35f0348245be3e8&width=1200&height=630&quality=85&focal=559%2C229",
                        
            "https://cdn.firstcuriosity.com/wp-content/uploads/2023/03/08163924/Adobe_Express_20230308_1123510_1-696x522.jpg",

            "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/03/931/523/Disney-LGBT-protest.jpg?ve=1&tl=1",

            "https://www.parismuseescollections.paris.fr/sites/default/files/styles/pm_notice/public/atoms/images/BAL/lpdp_46736-10.jpg?itok=vTRXlEmz",

            "https://www.parismuseescollections.paris.fr/sites/default/files/styles/pm_recherche_mosaique/public/atoms/images/BAL/lpdp_46723-1.jpg?itok=F_-snzup",

            "https://www.scienceshumaines.com/sites/default/files/1555320214_GENOCIDE.png",

            "https://uploads.monsiteradio.com/article/images/102-39240-conquistadors-massacre.png",

            "https://www.lafriquedesidees.org/wp-content/uploads/2012/04/traite_negriere-300x202-1920X553.jpg",

            "https://upload.wikimedia.org/wikipedia/commons/e/e3/March%C3%A9_aux_esclaves_de_Zanzibar.JPG",

            "https://www.yadvashem.org/sites/default/files/styles/main_image_1block/public/138FO8__0.jpg?itok=wg94W6si",

            "https://www.retronews.fr/sites/default/files/jewish_refugees_at_croydon_airport_1939.jpg",

            "https://www.retronews.fr/sites/default/files/styles/extra_large/public/1_-_guerinenallemagne.jpg?itok=xMwuIhoT",

            "https://lh5.googleusercontent.com/proxy/NGOyDtllhtad_UzBq8bqjoCIYhLOgfn6fusrXOrqSBhDL6xmuAy4X2UDtAqJLT0Dzjm6xRkikZd4SmqKzuGUXCw_0_o-futyxw01gw",

"https://i.imgflip.com/5lc1pb.jpg",
"https://img.20mn.fr/zfLEIzmESc-q-XqM5DbC-Ck/1444x920_san-antonio-spurs-french-forward-center-01-victor-wembanyama-celebrates-after-winning-the-nba-basketball-game-between-the-houston-rockets-and-the-san-antonio-spurs-at-the-at-t-center-in-san-antonio-texas-on-october-27-2023-photo-by-chandan-khanna-afp",
"https://media.sudouest.fr/20993336/1000x500/20240810222109-7351812.jpg?v=1723326321",
"https://s.rfi.fr/media/display/d0006b6e-483a-11ef-94a8-005056bf30b7/w:980/p:16x9/e2febca5b8c5fa99d1a598de93fee472350a7dcb.jpg",
"https://www.youtube.com/watch?v=iD1aeJ50cMA&embeds_referring_euri=https%3A%2F%2Fwww.canva.com%2F&source_ve_path=MjM4NTE",
"https://www.youtube.com/watch?v=5w3iiJTjCSk&embeds_referring_euri=https%3A%2F%2Fwww.canva.com%2F&source_ve_path=MjM4NTE",
"https://www.ecranlarge.com/content/uploads/2022/10/peacemaker-photo-john-cena-1453052.jpg",
"https://www.comicsuniverse.it/wp-content/uploads/2023/02/Fn149yCaIAA5uj9-2-1.jpeg",
"https://images.thedirect.com/media/article_full/james-gunn-dc-show.jpg",
"https://image.jeuxvideo.com/medias-md/173332/1733317719-9292-card.jpg",
"https://static.hitek.fr/img/actualite/ill_m/2140262202/40947_supermanlegacycircecreaturecommandos.png",
"https://m.media-amazon.com/images/M/MV5BYmU3MzYzOWEtOTdkZi00YzA1LTliMzQtNDdiZDBjY2FiNmFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
"https://www.lescomics.fr/wp-content/uploads/2022/03/the-batman-2022-i120267.jpg",
"https://www.dcplanet.fr/wp-content/uploads/2022/11/the-penguin.jpg",
"https://static.wikia.nocookie.net/lunivers-cinematique-dc/images/9/91/Creature_Commandos08.jpg/revision/latest/scale-to-width-down/1200?cb=20241016173826&path-prefix=fr",
"https://batman-univers.fr/wp-content/uploads/2024/12/Superman-2025-James-Gunn-clarifie-les-reshoots.jpg",
"https://resize.prod.femina.ladmedia.fr/rblr/1200,806/img/var/2024-10/the-batman.jpg",
"https://3238leblogdemarvelll-1278.kxcdn.com/wp-content/uploads/2022/02/the-batman-banniere-scaled.jpg",
"https://www.youtube.com/watch?v=rUG1TssM7U8&embeds_referring_euri=https%3A%2F%2Fwww.canva.com%2F&source_ve_path=MjM4NTE",
"https://www.youtube.com/watch?v=0CsuJoumqAk",
"https://www.youtube.com/watch?v=uhUht6vAsMY",
"https://www.youtube.com/watch?v=zWTbLZCR84k&embeds_referring_euri=https%3A%2F%2Fwww.canva.com%2F&source_ve_path=MjM4NTE",
"https://images.cinefil.com/stars/1056866.webp",
"https://www.tomsguide.fr/content/uploads/sites/2/2022/06/maxresdefault-4-1024x576.jpg",
"https://upload.wikimedia.org/wikipedia/en/d/d6/Superman_Man_of_Steel.jpg",
"https://blog.teufelaudio.fr/wp-content/uploads/2022/07/Teufel-Blog-Titelbild-DC-comics-filme.jpg",
"https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-04/Christian-Bale-oblige-de-redevenir-Batman.jpg",
"https://www.numerama.com/wp-content/uploads/2022/08/leslie-grace-batgirl-annule-hbo-warner.jpg",
"https://braindamaged.fr/wp-content/uploads/2017/04/thor-3-ragnarok-combat-epique-entre-thor-et-hulk-bande-annonce-une.jpg",
"https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png",
"https://media.lesechos.com/api/v1/images/view/63c7df54137527545063d671/1280x720/0703223937387-web-tete.jpg",
"https://seb117.fr/img/blog/guide-achat-nouveau-telephone.jpg",
"https://img.passeportsante.net/1200x675/2021-05-03/i103409-cerveau.jpg",
"https://www.youtube.com/watch?v=hI9GyhX7yHM",
"https://www.youtube.com/watch?v=QcnR_VGMBS0",
"https://www.youtube.com/watch?v=UjfQV-Oemsc&embeds_referring_euri=https%3A%2F%2Fwww.canva.com%2F&source_ve_path=MjM4NTE",
"https://www.youtube.com/watch?v=Fc3XAK55WM4&embeds_referring_euri=https%3A%2F%2Fwww.canva.com%2F&source_ve_path=MjM4NTE",
                        
        ];

        const gallery = document.getElementById('gallery');

        links.forEach(link => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'thumbnail';

            const img = document.createElement('img');
            if (link.includes('youtube.com')) {
                const videoId = new URL(link).searchParams.get('v');
                img.src = `https://img.youtube.com/vi/${videoId}/0.jpg`;
            } else {
                img.src = link;
            }
            img.alt = 'Thumbnail';

            thumbnail.appendChild(img);
            thumbnail.onclick = () => window.open(link, '_blank');

            gallery.appendChild(thumbnail);
        });

});
