const links = [
            "https://www.youtube.com/watch?v=qFk_8btS1VU&t=3s",

            "https://www.youtube.com/watch?v=o4NL3NueCl0",

            "https://www.youtube.com/watch?v=U_M_uvDChJQ",

            "https://photos.tf1.fr/1200/720/la-culture-le-pdg-de-disney-veut-mettre-fin-a-lideologie-woke-dans-ses-films-1f62b2-14f0cf-0@1x.jpg",

            "https://heidi-17455.kxcdn.com/photos/3c88e2d4-a19f-4672-af8c-a649ca59d44a/small",

            "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-04/240419-donald-trump-court-ac-958p-e498bf.jpg",

            "https://www.lexpress.fr/resizer/v2/T46Z5JCGXNCBJHLD5DPJY3G4NE.jpg?auth=08feed476ff24e3483e162dbacd0e68e9d610661ba03b3a6b35f0348245be3e8&width=1200&height=630&quality=85&focal=559%2C229",

            "https://img.20mn.fr/BFtIwe4STuqzO40TX4uOwyk/1444x920_mandatory-credit-photo-by-al-diaz-tns-via-zuma-press-wire-shutterstock-14721823a-former-president-donald-trump-seen-golfing-in-doral-florida-on-oct-27-2022-authorities-said-sunday-sept-15-2024-that-they-detained-a-gunman-who-wanted-to-assassinate-the-former-president-using-an-assault-style-rifle-at-his-west-palm-beach-golf-course-usa-news-15-sep-2024-shutterstock-editorial-usa-news-14721823a-2409160440",

            "https://cdn.firstcuriosity.com/wp-content/uploads/2023/03/08163924/Adobe_Express_20230308_1123510_1-696x522.jpg",

            "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/03/931/523/Disney-LGBT-protest.jpg?ve=1&tl=1",

            "https://images.thedirect.com/media/article_full/disney-woke.jpg",

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

            "https://www.humanite.fr/wp-content/uploads/2023/06/312008.HR_.jpg?w=1024",

            "https://static1.purepeople.com/articles/3/52/47/3/@/384217-l-humoriste-et-acteur-francais-gad-580x0-3.jpg",

            "https://cdn1.regie-agricole.com/ulf/CMS_Content/2/articles/804506/211012FAI_017-k2r-U206460639994sB-860x420@lafranceagricole.fr-1000x562.jpg",

            "https://french-iceberg.com/wp-content/uploads/2023/06/roman-frayssinet.jpg",

            "https://i.ytimg.com/vi/tyTzVcjBQVg/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AGsB4AC0AWKAgwIABABGHIgRihGMA8=&rs=AOn4CLDvZNyaPQwhX7dSDaFGCeBy_6MheQ",

            "https://photos.tf1info.fr/images/613/345/export_85sv9booqm8xu-416940-0@1x.jpeg",

            "https://img.20mn.fr/soMWRBjOQaKNwoGrImS-Sg/1444x920_dieudonne-20-mai-2017",

            "https://mobile-img.lpcdn.ca/lpca/924x/r3996/cd552176a6cd3c62a693446bb710a400.jpeg",

            "https://i.ytimg.com/vi/f2HKP4_m83w/maxresdefault.jpg",

            "https://cdn-s-www.ledauphine.com/images/21777614-FCB2-4294-A0F6-EC7F43BEC3B1/NW_detail/ce-geste-dont-la-paternite-est-attribuee-a-l-humoriste-dieudonne-dechaine-les-passions-et-s-est-meme-invite-sur-le-compte-facebook-de-la-liste-d-opposition-de-mistral-crestois-via-le-profil-d-un-fan-crestois-1389295092.jpg",

            "https://media.letelegramme.fr/api/v1/images/view/637cf7134e02fc0b1d761162/web_golden_xl/637cf7134e02fc0b1d761162.1",

            "https://images.midilibre.fr/api/v1/images/view/5b471ad23e45460b45352e88/large/image.jpg",

            "https://www.youtube.com/results?search_query=macron+comique"
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
