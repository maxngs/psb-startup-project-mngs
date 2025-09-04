document.addEventListener('DOMContentLoaded', function() {

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Modal logic
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.getElementById('close-modal');

    window.openModal = function(contentId) {
        const content = getModalContent(contentId);
        modalBody.innerHTML = content;
        modal.classList.remove('hidden');
    }

    const closeModal = () => {
        modal.classList.add('hidden');
        modalBody.innerHTML = '';
    }

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // --- CONTENT FOR THE MODAL (VERBATIM FROM THE REPORT) ---
    function getModalContent(id) {
        // Shared Tailwind classes for styling
        const h3Class = "class='text-3xl lg:text-4xl font-black text-hiry-blue mb-8'";
        const h4Class = "class='text-xl lg:text-2xl font-bold text-hiry-light-blue mt-8 mb-4'";
        const pClass = "class='text-base lg:text-lg text-gray-200 leading-relaxed mb-4'";
        const listClass = "class='list-disc list-inside pl-4 space-y-3'";
        const liClass = "class='text-base lg:text-lg text-gray-200 leading-relaxed'";
        const nestedListClass = "class='list-disc list-inside pl-8 mt-2 space-y-2'";

        switch(id) {
            case 'summary':
              return `
                  <h3 ${h3Class}>Pitch du Projet</h3>

                  <div class="video-container">
                      <iframe
                          width="560"
                          height="315"
                          src="video/HIRY - Présentation The Project.mp4"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen>
                      </iframe>
                  </div>
              `;
            case 'profil':
                return `
                    <h3 ${h3Class}>Présentation du Porteur de Projet</h3>
                    <h4 ${h4Class}>Formation</h4>
                    <p ${pClass}>
                        Je suis actuellement en Master entrepreneuriat & business développement à la Paris School of Business, une formation qui me dote des compétences nécessaires pour être polyvalent(e) et gérer diverses tâches au sein d'une entreprise, un atout majeur pour tout entrepreneur.
                    </p>
                    <h4 ${h4Class}>Expérience professionnelle</h4>
                    <p ${pClass}>
                        J'ai eu la chance de travailler en tant que vendeur cycle chez Intersport, une expérience qui m'a permis de développer des compétences commerciales et de vente essentielles pour un entrepreneur.  De plus, à travers mes stages, j'ai délibérément exploré différents départements d'entreprise pour comprendre leur fonctionnement global, toujours dans l'optique d'acquérir les connaissances et compétences indispensables à la gestion d'une entreprise.
                    </p>
                `;
            case 'techSkills':
                 return `
                    <h3 ${h3Class}>Compétences Techniques</h3>
                     <h4 ${h4Class}>Formation Complémentaire</h4>
                    <p ${pClass}>
                        En parallèle de mes études à la PSB, j'ai eu l'opportunité fin 2024 de suivre une formation intensive au Wagon, où j'ai acquis des compétences solides en développement web et en intelligence artificielle.
                    </p>
                    <h4 ${h4Class}>Objectif</h4>
                    <p ${pClass}>
                        L'objectif de cette formation était de me permettre de créer un MVP (Minimum Viable Product) de ma plateforme HIRY de manière autonome et de ne pas être freiné(e) par un manque de compétences techniques.
                    </p>
                `;
            case 'strengths':
                return `
                    <h3 ${h3Class}>Points Forts</h3>
                    <ul ${listClass}>
                        <li ${liClass}><strong>Polyvalence et Transversalité:</strong> Grâce à mon Master en entrepreneuriat et mes expériences variées, je possède une vision 360° des fonctions d'une entreprise, essentielle pour la gestion d'un projet tel que HIRY. </li>
                        <li ${liClass}><strong>Compétences Techniques:</strong> Ma formation au Wagon en développement web et IA est un atout majeur.  Elle me permet de construire le cœur technologique de HIRY de manière autonome, de comprendre les enjeux techniques et de ne pas dépendre entièrement de ressources externes pour le développement initial. </li>
                        <li ${liClass}><strong>Sens Commercial et Relationnel:</strong> Mon expérience en vente m'a permis de développer des compétences clés en matière de communication, de persuasion et de compréhension des besoins clients, fondamentales pour le succès de HIRY. </li>
                        <li ${liClass}><strong>Vision Stratégique et Innovation:</strong> J'ai une vision claire et disruptive du marché de l'emploi, et je suis capable de traduire cette vision en un projet concret et innovant. </li>
                        <li ${liClass}><strong>Détermination et Autonomie:</strong> Mon approche proactive de l'apprentissage (formation complémentaire) et mon désir de tester chaque département d'entreprise démontrent ma détermination et mon autonomie à mener ce projet à bien. </li>
                    </ul>
                `;
            case 'origin':
                return `
                    <h3 ${h3Class}>Origine du Projet</h3>
                    <p ${pClass}>
                        L'idée de HIRY est née de l'observation des frustrations et inefficiences persistantes sur le marché de l'emploi actuel, où le cadre formalisé du recours au CV et à la lettre de motivation limite la pleine expression des compétences et la rencontre des talents.  Les candidats se sentent souvent réduits à un document qui ne reflète pas l'étendue de leurs aptitudes et de leur personnalité, tandis que les entreprises peinent à identifier les profils réellement adaptés à leurs besoins au-delà des descriptions standardisées.
                    </p>
                    <h4 ${h4Class}>L'opportunité</h4>
                    <p ${pClass}>
                        L'opportunité réside dans l'évolution rapide des usages numériques et la maturité croissante des technologies d'intelligence artificielle.  HIRY se positionne comme un atout majeur en offrant une approche disruptive et innovante qui répond aux attentes des nouvelles générations et aux exigences d'agilité des entreprises en matière de recrutement.
                    </p>
                `;
            case 'goals':
                return `
                    <h3 ${h3Class}>Les Objectifs du Projet</h3>
                    <p ${pClass}>
                        L'objectif fondamental de HIRY est de fluidifier et de rendre plus juste le marché du travail.  Sur le plan personnel, ma motivation est de créer une valeur sociétale significative en aidant les individus à s'épanouir professionnellement en valorisant leur potentiel, et en permettant aux entreprises de construire des équipes plus performantes grâce à un recrutement plus pertinent et efficace.
                    </p>
                     <p ${pClass}>Plus largement, HIRY vise à :</p>
                    <ul ${listClass}>
                        <li ${liClass}><strong>Libérer le potentiel des candidats:</strong> Leur permettre de se présenter de manière authentique et de valoriser leurs compétences au-delà des cadres traditionnels, grâce à un profil multimédia et une analyse fine par l'IA. </li>
                        <li ${liClass}><strong>Optimiser le recrutement pour les entreprises:</strong> Réduire le temps et les coûts de recrutement tout en améliorant la qualité des embauches par un rapprochement fondé sur l'analyse fine des compétences professionnelles. </li>
                        <li ${liClass}><strong>Favoriser l'égalité des chances:</strong> En se basant sur les compétences réelles plutôt que sur des critères parfois discriminants ou incomplets. </li>
                        <li ${liClass}><strong>Créer une plateforme ludique et engageante:</strong> Rendre le processus de recherche et d'offre d'emploi plus agréable et moins fastidieux pour toutes les parties. </li>
                    </ul>
                `;
            case 'progress':
                return `
                    <h3 ${h3Class}>Stade d'Avancement</h3>
                    <h4 ${h4Class}>Ce qui a été fait :</h4>
                    <ul ${listClass}>
                        <li ${liClass}><strong>Conceptualisation détaillée :</strong> Définition de la vision, des objectifs, des fonctionnalités clés et de la proposition de valeur unique de HIRY. </li>
                        <li ${liClass}><strong>Étude de marché approfondie:</strong> Réalisation d'une étude de marché rigoureuse pour valider le besoin réel et l'opportunité d'une solution telle que HIRY. </li>
                        <li ${liClass}><strong>Élaboration d'un MVP fonctionnel:</strong> Création d'un Minimum Viable Product (MVP) sous la forme d'un formulaire Tally.  Ce MVP a été construit et optimisé grâce à l'entraînement d'une intelligence artificielle sur les meilleurs modèles de personnalité, de valeurs, de comportements et de compétences, permettant une première approche disruptive de l'évaluation des profils. </li>
                        <li ${liClass}><strong>Présence digitale initiale:</strong> Création des pages de réseaux sociaux pour commencer à bâtir une communauté et une visibilité pour HIRY. </li>
                        <li ${liClass}><strong>Landing page opérationnelle:</strong> Une landing page a été conçue et est actuellement en ligne, servant de point d'entrée et de présentation du projet. </li>
                        <li ${liClass}><strong>Intégration à un incubateur:</strong> J'ai eu la chance de rejoindre un incubateur reconnu qui m'apporte un soutien significatif et un accompagnement stratégique pour le développement de HIRY. </li>
                    </ul>
                `;
            case 'nextSteps':
                return `
                    <h3 ${h3Class}>Ce qui reste à faire</h3>
                    <ul ${listClass}>
                        <li ${liClass}><strong>Déploiement et tests du MVP:</strong> Mettre en ligne le MVP actuel et lancer les premières phases de tests utilisateurs pour recueillir des retours concrets et initier les premières itérations. </li>
                        <li ${liClass}><strong>Optimisation du MVP pour la levée de fonds:</strong> Apporter les modifications et améliorations nécessaires au MVP pour atteindre une version "finale" plus robuste et démonstrative.  Cette étape est cruciale pour préparer une levée de fonds visant à accélérer le développement complet de la plateforme et le déploiement d'une stratégie de communication et d'acquisition massive d'utilisateurs (candidats) et de clients (entreprises). </li>
                        <li ${liClass}><strong>Développement de la plateforme complète:</strong> Après la levée de fonds, le développement des fonctionnalités avancées (profils multimédia complets, moteur de matching IA affiné, tableaux de bord entreprise, messagerie, etc.) sera accéléré. </li>
                        <li ${liClass}><strong>Stratégie d'acquisition et de croissance:</strong> Mise en œuvre des campagnes marketing et commerciales pour attirer un volume important de candidats et d'entreprises sur la plateforme. </li>
                    </ul>
                `;
            case 'market':
                return `
                    <h3 ${h3Class}>Approche Générale du Marché</h3>
                    <h4 ${h4Class}>Description du marché</h4>
                    <p ${pClass}>Le marché de l'emploi est un écosystème vaste et complexe, caractérisé par une tension constante entre l'offre et la demande.  Historiquement, il a été dominé par des processus rigides centrés sur le CV et la lettre de motivation, ne permettant pas toujours une évaluation exhaustive des compétences réelles et des "soft skills". </p>
                    <h4 ${h4Class}>Caractéristiques actuelles</h4>
                    <p ${pClass}>Forte digitalisation, accélération des carrières, importance croissante de la marque employeur, pénurie de talents sur certains secteurs, et l'émergence de nouvelles attentes des employés (flexibilité, sens, valeurs). </p>
                    <h4 ${h4Class}>Perspectives</h4>
                    <p ${pClass}>Le marché est en pleine transformation, poussé par l'adoption massive des technologies d'IA, l'essor du télétravail et une quête de plus de transparence et d'équité.  La personnalisation de l'expérience candidat et la capacité à identifier rapidement les compétences clés sont devenues primordiales. </p>
                `;
            case 'competition':
                return `
                    <h3 ${h3Class}>Caractéristiques de l'Offre</h3>
                    <h4 ${h4Class}>Concurrence directe (plateformes de recrutement classiques)</h4>
                    <ul ${listClass}>
                        <li ${liClass}><strong>LinkedIn Jobs:</strong> Réseau professionnel dominant, forte base d'utilisateurs.  Limites: approche axée sur le CV, moins de place pour le multimédia et l'évaluation fine des compétences au-delà des mots-clés. </li>
                        <li ${liClass}><strong>WTTJ, HelloWork, Indeed, Monster, APEC:</strong> Grandes bases de données d'offres et de CV.  Limites: Modèles traditionnels, peu d'innovation sur la mise en relation, expérience utilisateur souvent standardisée et peu engageante. </li>
                    </ul>
                    <h4 ${h4Class}>Concurrence indirecte</h4>
                     <ul ${listClass}>
                        <li ${liClass}><strong>Cabinets de recrutement et de chasse de têtes:</strong> Approche humaine et personnalisée, mais coûts élevés et processus souvent longs.</li>
                        <li ${liClass}><strong>Solutions ATS (Applicant Tracking Systems):</strong> Outils de gestion de candidatures pour les entreprises.</li>
                        <li ${liClass}><strong>Réseaux sociaux généralistes (Facebook, Instagram, TikTok):</strong> De plus en plus utilisés pour la marque employeur et la diffusion d'offres, mais sans moteur de matching structuré.</li>
                    </ul>
                `;
            case 'hiryStrength':
                return `
                    <h3 ${h3Class}>Points forts de HIRY face à la concurrence</h3>
                    <ul ${listClass}>
                        <li ${liClass}><strong>Approche disruptive sans CV/lettre de motivation:</strong> HIRY se distingue en sortant du cadre formalisé, ce qui libère le potentiel des candidats.</li>
                        <li ${liClass}><strong>Profil multimédia innovant :</strong> Valorisation des compétences par l'image, le son et la vidéo, en phase avec les habitudes de consommation modernes. </li>
                        <li ${liClass}><strong>Analyse fine des compétences par l'IA:</strong> Le moteur de matching de HIRY, propulsé par l'IA, permet une réconciliation efficiente de l'offre et de la demande fondée sur une analyse précise des compétences professionnelles recherchées et offertes. </li>
                        <li ${liClass}><strong>Expérience utilisateur ludique et efficace:</strong> Tant pour les candidats que pour les entreprises, la plateforme est conçue pour être rapide, simple, ludique et efficace. </li>
                        <li ${liClass}><strong>Focus sur l'authenticité:</strong> Permet aux candidats de montrer leur personnalité et leurs "soft skills" de manière plus concrète. </li>
                        <li ${liClass}><strong>Potentiel de réduction des biais:</strong> L'IA centrée sur les compétences peut aider à réduire les discriminations inconscientes. </li>
                    </ul>
                `;
            case 'environment':
                 return `
                    <h3 ${h3Class}>Cadre Légal et Réglementaire</h3>
                    <ul ${listClass}>
                        <li ${liClass}><strong>RGPD (GDPR):</strong> La protection des données personnelles est une priorité absolue.  HIRY devra garantir une conformité totale avec le RGPD, notamment concernant la collecte, le stockage et l'utilisation des données des utilisateurs. </li>
                        <li ${liClass}><strong>Législation du travail et du recrutement:</strong> Respect des lois anti-discrimination, des règles de non-discrimination à l'embauche et des droits des candidats. </li>
                        <li ${liClass}><strong>Réglementation sur l'IA:</strong> L'évolution rapide des régulations autour de l'IA (ex: Al Act européen) devra être suivie de près pour assurer une utilisation éthique et responsable des algorithmes de matching. </li>
                    </ul>
                `;
            case 'targets':
                return `
                    <h3 ${h3Class}>Choix des Segments de Clientèle</h3>
                    <h4 ${h4Class}>Candidats cibles</h4>
                    <p ${pClass}>HIRY ciblera en priorité les jeunes diplômés et les actifs en début de carrière, ainsi que les personnes en reconversion professionnelle. </p>
                    <p ${pClass}><strong>Pourquoi ces choix?</strong> Ces segments sont particulièrement réceptifs à l'innovation et aux formats multimédia.  Les jeunes diplômés cherchent à se démarquer au-delà d'un CV souvent peu rempli, tandis que les personnes en reconversion ont besoin de valoriser des compétences transférables qui ne sont pas toujours évidentes sur un parcours académique linéaire. </p>
                     <h4 ${h4Class}>Entreprises cibles</h4>
                    <p ${pClass}>Nous nous concentrerons sur les start-ups et PME innovantes, ainsi que sur les entreprises des secteurs en tension (notamment la tech, le numérique, et les services à forte valeur ajoutée). </p>
                    <p ${pClass}><strong>Pourquoi ces choix?</strong> Ces entreprises sont par nature plus ouvertes aux nouvelles méthodes de recrutement.  Les start-ups et PME ont un besoin d'agilité et de rapidité, et sont souvent à la recherche de profils non conventionnels ou avec des "soft skills" spécifiques. </p>
                `;
            case 'positioning':
                return `
                    <h3 ${h3Class}>Positionnement Stratégique</h3>
                    <p ${pClass}>HIRY se positionne comme la plateforme de recrutement innovante et humaine qui révèle les talents au-delà du CV, grâce à la puissance de l'IA et l'impact du multimédia.  Notre proposition de valeur repose sur l'efficacité du matching par compétences, la valorisation authentique des individus, et la modernisation de l'expérience de recrutement pour tous les acteurs.  Nous nous différencions par notre approche disruptive qui met fin à la dictature du CV, offrant une solution plus juste, plus rapide et plus engageante. </p>
                `;
            case 'mix':
                return `
                    <h3 ${h3Class}>Marketing-Mix</h3>
                    <h4 ${h4Class}>Produit (Product)</h4>
                    <p ${pClass}>La plateforme elle-même, avec son interface intuitive, ses profils multimédia et son IA de matching, est au cœur de notre offre.  Elle répond directement au besoin de transparence, d'authenticité et d'efficacité sur le marché de l'emploi. </p>
                    <h4 ${h4Class}>Prix (Price)</h4>
                    <p ${pClass}>La gratuité pour les candidats est un choix stratégique pour massifier l'audience et créer un effet de réseau, essentiel pour la valeur de la plateforme.  Le modèle freemium/abonnement pour les entreprises assure la monétisation tout en permettant une découverte progressive de HIRY, avec une tarification compétitive face aux alternatives. </p>
                    <h4 ${h4Class}>Distribution (Place)</h4>
                    <p ${pClass}>Une présence exclusive en ligne (web et mobile) garantit une accessibilité maximale, en phase avec les habitudes numériques de nos cibles. </p>
                    <h4 ${h4Class}>Communication (Promotion)</h4>
                    <p ${pClass}>La stratégie de communication sera majoritairement digitale, exploitant les réseaux sociaux, le SEO/SEA, le content marketing et les partenariats stratégiques.  Le slogan "RIGHT PERSON. RIGHT MOMENT. RIGHT COMPANY." sera au cœur de toutes nos campagnes, soulignant notre promesse de la bonne adéquation. </p>
                `;
            case 'communication':
                return `
                    <h3 ${h3Class}>Politique Commerciale et de Communication</h3>
                     <h4 ${h4Class}>Moyens à mettre en œuvre</h4>
                     <ul ${listClass}>
                        <li ${liClass}><strong>Moyens humains:</strong> Équipe marketing et communication (interne ou externe), équipe commerciale pour le démarchage B2B, community managers. </li>
                        <li ${liClass}><strong>Moyens techniques:</strong> Plateforme de marketing automation, CRM, outils d'analyse de données (Google Analytics), outils de création de contenu multimédia. </li>
                     </ul>
                    <h4 ${h4Class}>Partenaires sollicités</h4>
                    <ul ${listClass}>
                        <li ${liClass}><strong>Incubateur actuel:</strong> Pour l'accompagnement stratégique et les mises en relation. </li>
                        <li ${liClass}><strong>Écoles et universités:</strong> Pour l'acquisition de candidats (jeunes diplômés). </li>
                        <li ${liClass}><strong>Organismes de formation professionnelle:</strong> Pour les candidats en reconversion. </li>
                        <li ${liClass}><strong>Chambres de Commerce et d'Industrie (CCI):</strong> Pour accéder à un réseau d'entreprises. </li>
                        <li ${liClass}><strong>Média spécialisés RH et Tech & Influenceurs RH / Carrière.</strong> </li>
                    </ul>
                `;

                case 'marketHypotheses':
            return `
                <h3 ${h3Class}>Hypothèses et Méthode d'Étude de Marché</h3>

                <h4 ${h4Class}>Produit ou service pré-ciblé</h4>
                <p ${pClass}>Le service pré-ciblé est une plateforme de recrutement innovante axée sur l'analyse des compétences par l'IA et la promotion de profils multimédia, visant à dépasser les limites du CV et de la lettre de motivation traditionnels. Il s'agit de réconcilier l'offre et la demande d'emploi de manière efficiente, en valorisant le potentiel des candidats au-delà des cases traditionnelles et en optimisant les processus de recrutement pour les entreprises.</p>

                <h4 ${h4Class}>Marché pré-ciblé</h4>
                <p ${pClass}>Le marché pré-ciblé est celui de l'emploi et du recrutement, un secteur en pleine mutation, poussé par les évolutions technologiques (IA, multimédia) et les changements d'attitudes des nouvelles générations face au travail. Ce marché englobe à la fois les candidats en recherche d'emploi ou d'évolution professionnelle et les entreprises de toutes tailles cherchant à recruter des talents adaptés.</p>

                <h4 ${h4Class}>Méthodes choisies pour réaliser l’étude de marché</h4>
                <ul ${listClass}>
                    <li ${liClass}><strong>Étude documentaire :</strong> Analyse approfondie de rapports sectoriels, d'articles spécialisés sur l'évolution du marché du travail, les tendances RH, l'adoption de l'IA dans le recrutement, et les statistiques de l'emploi en France et à l'international. Cette méthode a permis de cerner les principales caractéristiques du marché, son historique et ses perspectives.</li>
                    <li ${liClass}><strong>Étude de concurrence :</strong> Identification et analyse des plateformes de recrutement existantes (généralistes et spécialisées), des réseaux sociaux professionnels, des cabinets de recrutement traditionnels et des solutions d'IA appliquées aux RH. L'objectif était de comprendre leurs points forts et points faibles, leurs modèles économiques et leurs positionnements.</li>
                    <li ${liClass}><strong>Questionnaires et entretiens :</strong> Réalisation de questionnaires en ligne auprès d'un échantillon de candidats pour comprendre leurs frustrations face aux méthodes de recrutement actuelles et leurs attentes vis-à-vis d'une nouvelle solution. Des entretiens qualitatifs ont également été menés avec des professionnels des RH et des recruteurs pour valider le besoin côté entreprise et affiner la proposition de valeur.</li>
                    <li ${liClass}><strong>Veille technologique :</strong> Suivi constant des avancées en matière d'intelligence artificielle et de traitement du langage naturel (NLP) pour évaluer la faisabilité technique et l'intégration des API Google Gemini dans la solution HIRY.</li>
                </ul>
            `;

        case 'marketAnalysis':
            return `
                <h3 ${h3Class}>Approche Générale du Marché</h3>

                <h4 ${h4Class}>Description du marché</h4>
                <p ${pClass}>Le marché de l'emploi est un écosystème vaste et complexe, caractérisé par une tension constante entre l'offre et la demande. Historiquement, il a été dominé par des processus rigides centrés sur le CV et la lettre de motivation, ne permettant pas toujours une évaluation exhaustive des compétences réelles et des "soft skills".</p>

                <ul ${listClass}>
                    <li ${liClass}><strong>Caractéristiques actuelles :</strong> Forte digitalisation, accélération des carrières, importance croissante de la marque employeur, pénurie de talents sur certains secteurs, et l'émergence de nouvelles attentes des employés (flexibilité, sens, valeurs).</li>
                    <li ${liClass}><strong>Perspectives :</strong> Le marché est en pleine transformation, poussé par l'adoption massive des technologies d'IA, l'essor du télétravail et une quête de plus de transparence et d'équité. La personnalisation de l'expérience candidat et la capacité à identifier rapidement les compétences clés sont devenues primordiales.</li>
                </ul>

                <h4 ${h4Class}>Sources</h4>
                <p ${pClass}>Mon analyse s'appuie sur une observation directe des difficultés rencontrées par mes pairs et des professionnels, des articles de fond de XERFI, du cabinet PageGroup, des rapports de l'APEC, de l'INSEE, de France Travail, ainsi que des statistiques de l'Eurostat.</p>
            `;

        case 'demandAnalysis':
            return `
                <h3 ${h3Class}>Caractéristiques de la Demande</h3>

                <h4 ${h4Class}>Volume et évolution de la demande</h4>
                <ul ${listClass}>
                    <li ${liClass}>Le marché du recrutement en France et à l'échelle mondiale est massif et en constante évolution. La demande de solutions de recrutement efficaces est très élevée, tant du côté des candidats (plusieurs millions de personnes en recherche d'emploi ou en transition professionnelle) que des entreprises (des millions d'offres d'emploi par an).</li>
                    <li ${liClass}>La demande est en forte croissance pour des solutions qui offrent une meilleure adéquation entre les profils et les postes, et qui réduisent les biais inhérents aux méthodes traditionnelles. On observe une lassitude face aux processus longs et impersonnels.</li>
                </ul>

                <h4 ${h4Class}>Tendances de consommation</h4>
                <ul ${listClass}>
                    <li ${liClass}><strong>Numérisation accrue :</strong> La recherche d'emploi et le recrutement se font majoritairement en ligne.</li>
                    <li ${liClass}><strong>Importance du visuel et de l'interactivité :</strong> Les utilisateurs sont habitués aux contenus multimédia (vidéos, sons, images) et attendent des expériences plus engageantes.</li>
                    <li ${liClass}><strong>Quête de sens et d'authenticité :</strong> Les candidats cherchent des entreprises qui correspondent à leurs valeurs et à leur personnalité. Ils veulent pouvoir exprimer qui ils sont vraiment.</li>
                    <li ${liClass}><strong>Flexibilité et agilité :</strong> Les entreprises ont besoin de processus de recrutement plus rapides et plus adaptables.</li>
                    <li ${liClass}><strong>Transparence et équité :</strong> Une demande croissante pour des processus de recrutement plus justes et objectifs, basés sur les compétences réelles.</li>
                    <li ${liClass}><strong>Recours à l'IA :</strong> Une acceptation croissante de l'IA comme outil d'aide à la décision, à condition qu'elle soit éthique et transparente.</li>
                </ul>

                <h4 ${h4Class}>Types de clientèle (segmentation)</h4>
                <ul ${listClass}>
                    <li ${liClass}><strong>Candidats (Persona "Le Talent à Révéler") :</strong>
                        <ul ${nestedListClass}>
                            <li ${liClass}>Jeunes diplômés/actifs en début de carrière : Nés avec le numérique, ils sont à l'aise avec les contenus multimédia et attendent des plateformes modernes et intuitives. Ils veulent se démarquer au-delà de leur manque d'expérience formelle.</li>
                            <li ${liClass}>Personnes en reconversion professionnelle : Leurs compétences sont souvent transversales et peu visibles via un CV classique. HIRY leur permet de valoriser ces compétences transférables.</li>
                            <li ${liClass}>Profils créatifs et techniques (développeurs, designers, etc.) : Ceux qui ont souvent des portfolios visuels ou des projets concrets à présenter.</li>
                            <li ${liClass}>Personnes issues de la diversité : Cherchant à minimiser les biais liés au nom, à l'origine ou au parcours scolaire traditionnel.</li>
                        </ul>
                    </li>
                    <li ${liClass}><strong>Entreprises (Persona "L'Employeur Innovant") :</strong>
                        <ul ${nestedListClass}>
                             <li ${liClass}>Start-ups et PME innovantes : Elles sont agiles, ouvertes aux nouvelles technologies et cherchent à recruter rapidement des profils adaptés à leur culture d'entreprise. Elles sont souvent confrontées à la difficulté d'attirer des talents face aux grands groupes.</li>
                             <li ${liClass}>ETI : Celles qui ont des volumes de recrutement importants et qui cherchent à optimiser leurs processus et à moderniser leur image employeur. Elles ont besoin de solutions scalables et performantes.</li>
                             <li ${liClass}>Entreprises axées sur les compétences (non les diplômes) : Celles qui valorisent les "soft skills" et les compétences comportementales en plus des compétences techniques.</li>
                             <li ${liClass}>Secteurs en tension : Tech, santé, services à la personne, où la rapidité et la pertinence du matching sont cruciales.</li>
                        </ul>
                    </li>
                     <li ${liClass}><strong>Prescripteurs (partenaires qui peuvent renvoyer des clients) :</strong>
                        <ul ${nestedListClass}>
                            <li ${liClass}>Écoles et universités (partenariats pour l'insertion des jeunes diplômés).</li>
                            <li ${liClass}>Organismes de formation professionnelle (pour la valorisation des compétences post-formation).</li>
                            <li ${liClass}>Missions Locales et Pôle Emploi (pour l'accompagnement des demandeurs d'emploi).</li>
                            <li ${liClass}>Cabinets de conseil en recrutement et RH (pour l'intégration d'outils innovants).</li>
                            <li ${liClass}>Chambres de Commerce et d'Industrie (CCI) et organisations patronales (pour toucher les entreprises).</li>
                            <li ${liClass}>Associations professionnelles et incubateurs (comme celui que tu as rejoint !).</li>
                            <li ${liClass}>Influenceurs RH et experts du recrutement.</li>
                        </ul>
                    </li>
                </ul>
            `;

        case 'competitionAndEnv':
            return `
                <h3 ${h3Class}>Caractéristiques de l'Offre & de l'Environnement</h3>

                <h4 ${h4Class}>Concurrence directe et indirecte</h4>
                 <ul ${listClass}>
                    <li ${liClass}><strong>Concurrence directe (plateformes de recrutement classiques) :</strong>
                        <ul ${nestedListClass}>
                            <li ${liClass}>LinkedIn Jobs : Réseau professionnel dominant, forte base d'utilisateurs. Limites : approche axée sur le CV, moins de place pour le multimédia et l'évaluation fine des compétences au-delà des mots-clés.</li>
                            <li ${liClass}>WTTJ, HelloWork, Indeed, Monster, APEC : Grandes bases de données d'offres et de CV. Limites : Modèles traditionnels, peu d'innovation sur la mise en relation, expérience utilisateur souvent standardisée et peu engageante.</li>
                            <li ${liClass}>Job boards spécialisés (ex: LesJeudis.com pour la tech, ou jobteaser pour les étudiants) : Ciblage précis mais moins de visibilité pour les profils transversaux.</li>
                        </ul>
                    </li>
                    <li ${liClass}><strong>Concurrence indirecte :</strong>
                        <ul ${nestedListClass}>
                            <li ${liClass}>Cabinets de recrutement et de chasse de têtes : Approche humaine et personnalisée, mais coûts élevés et processus souvent longs. HIRY peut être un complément technologique pour eux.</li>
                            <li ${liClass}>Solutions ATS (Applicant Tracking Systems) : Outils de gestion de candidatures pour les entreprises. HIRY peut s'intégrer ou se positionner en amont de ces outils.</li>
                            <li ${liClass}>Réseaux sociaux généralistes (Facebook, Instagram, TikTok) : De plus en plus utilisés pour la marque employeur et la diffusion d'offres, mais sans moteur de matching structuré.</li>
                        </ul>
                    </li>
                </ul>

                <h4 ${h4Class}>Points forts de HIRY face à la concurrence</h4>
                <ul ${listClass}>
                    <li ${liClass}><strong>Approche disruptive sans CV/lettre de motivation :</strong> HIRY se distingue en sortant du cadre formalisé, ce qui libère le potentiel des candidats.</li>
                    <li ${liClass}><strong>Profil multimédia innovant :</strong> Valorisation des compétences par l'image, le son et la vidéo, en phase avec les habitudes de consommation modernes.</li>
                    <li ${liClass}><strong>Analyse fine des compétences par l'IA :</strong> Le moteur de matching de HIRY, propulsé par l'IA, permet une réconciliation efficiente de l'offre et de la demande fondée sur une analyse précise des compétences professionnelles recherchées et offertes.</li>
                    <li ${liClass}><strong>Expérience utilisateur ludique et efficace :</strong> Tant pour les candidats que pour les entreprises, la plateforme est conçue pour être rapide, simple, ludique et efficace.</li>
                    <li ${liClass}><strong>Focus sur l'authenticité :</strong> Permet aux candidats de montrer leur personnalité et leurs "soft skills" de manière plus concrète.</li>
                    <li ${liClass}><strong>Potentiel de réduction des biais :</strong> L'IA centrée sur les compétences peut aider à réduire les discriminations inconscientes.</li>
                </ul>

                <h4 ${h4Class}>Points faibles à surveiller</h4>
                <ul ${listClass}>
                    <li ${liClass}><strong>Notoriété initiale :</strong> En tant que nouvel acteur, HIRY devra bâtir sa réputation et sa base d'utilisateurs face à des géants établis.</li>
                    <li ${liClass}><strong>Coût de l'acquisition :</strong> Attirer suffisamment de candidats et d'entreprises pour créer un effet de réseau demande un investissement marketing.</li>
                    <li ${liClass}><strong>Acceptation du changement :</strong> Convaincre les acteurs traditionnels d'adopter une approche "sans CV" peut prendre du temps.</li>
                    <li ${liClass}><strong>Développement et maintenance de l'IA :</strong> Nécessite des ressources techniques et une veille constante pour maintenir la performance et l'éthique.</li>
                </ul>

                <h4 ${h4Class}>Caractéristiques de L’environnement</h4>
                <ul ${listClass}>
                    <li ${liClass}><strong>Cadre légal et réglementaire :</strong>
                        <ul ${nestedListClass}>
                            <li ${liClass}>RGPD (GDPR) : La protection des données personnelles est une priorité absolue. HIRY devra garantir une conformité totale avec le RGPD.</li>
                            <li ${liClass}>Législation du travail et du recrutement : Respect des lois anti-discrimination.</li>
                            <li ${liClass}>Réglementation sur l'IA : L'évolution rapide des régulations (ex: AI Act européen) devra être suivie de près.</li>
                        </ul>
                    </li>
                     <li ${liClass}><strong>Facteurs externes et évolution des technologies :</strong>
                        <ul ${nestedListClass}>
                            <li ${liClass}>Évolution démographique et sociétale : Les nouvelles générations (Gen Z, Millennials) ont des attentes différentes.</li>
                            <li ${liClass}>Accélération technologique : L'avancée rapide de l'IA et du NLP offre des opportunités constantes d'innovation.</li>
                            <li ${liClass}>Crises économiques/sanitaires : Peuvent impacter le volume de recrutement mais aussi accélérer la digitalisation.</li>
                            <li ${liClass}>Conscience éthique : Forte demande pour des outils plus équitables et moins biaisés.</li>
                        </ul>
                    </li>
                </ul>
            `;

            case 'targets':
                return `
                    <h3 ${h3Class}>Choix des Segments de Clientèle</h3>

                    <h4 ${h4Class}>Candidats cibles</h4>
                    <p ${pClass}>HIRY ciblera en priorité les jeunes diplômés et les actifs en début de carrière, ainsi que les personnes en reconversion professionnelle.</p>
                    <p ${pClass}><strong>Pourquoi ces choix?</strong> Ces segments sont particulièrement réceptifs à l'innovation et aux formats multimédia. Les jeunes diplômés cherchent à se démarquer au-delà d'un CV souvent peu rempli, tandis que les personnes en reconversion ont besoin de valoriser des compétences transférables qui ne sont pas toujours évidentes sur un parcours académique linéaire. Le format multimédia et l'analyse par l'IA leur offriront une opportunité unique de montrer leur potentiel et leur personnalité.</p>

                    <h4 ${h4Class}>Entreprises cibles</h4>
                    <p ${pClass}>Nous nous concentrerons sur les start-ups et PME innovantes, ainsi que sur les entreprises des secteurs en tension (notamment la tech, le numérique, et les services à forte valeur ajoutée).</p>
                    <p ${pClass}><strong>Pourquoi ces choix?</strong> Ces entreprises sont par nature plus ouvertes aux nouvelles méthodes de recrutement. Les start-ups et PME ont un besoin d'agilité et de rapidité, et sont souvent à la recherche de profils non conventionnels ou avec des "soft skills" spécifiques. Les secteurs en tension souffrent de la pénurie de talents et sont donc prêts à explorer des solutions alternatives pour trouver les bons profils rapidement.</p>
                `;

            case 'positioning':
                return `
                    <h3 ${h3Class}>Positionnement Stratégique</h3>
                    <p ${pClass}>HIRY se positionne comme la plateforme de recrutement innovante et humaine qui révèle les talents au-delà du CV, grâce à la puissance de l'IA et l'impact du multimédia.</p>
                    <p ${pClass}>Notre proposition de valeur repose sur l'efficacité du matching par compétences, la valorisation authentique des individus, et la modernisation de l'expérience de recrutement pour tous les acteurs.</p>
                    <p ${pClass}>Nous nous différencions par notre approche disruptive qui met fin à la dictature du CV, offrant une solution plus juste, plus rapide et plus engageante.</p>
                `;

            case 'mix':
                return `
                    <h3 ${h3Class}>Marketing-Mix</h3>

                    <h4 ${h4Class}>Politique marketing générale</h4>
                    <ul ${listClass}>
                        <li ${liClass}><strong>Nom: HIRY</strong> - Simple, mémorable et distinctif. Il évoque l'idée de "hiring" (recrutement) tout en ayant une sonorité douce et moderne, facile à prononcer dans plusieurs langues pour une future expansion. C'est la combinaison de "hire in a hurry".</li>
                        <li ${liClass}><strong>Message et slogan:</strong> Notre message sera axé sur la "révélation des compétences" et la "fin des préjugés du CV". Notre slogan est axé sur l'adéquation parfaite et l'efficacité du matching: "RIGHT PERSON. RIGHT MOMENT. RIGHT COMPANY.".</li>
                    </ul>

                    <h4 ${h4Class}>Cohérence du Marketing-Mix</h4>
                    <p ${pClass}>La cohérence est fondamentale. Le produit (plateforme innovante par l'IA et le multimédia) est conçu pour les attentes modernes des candidats (recherche d'authenticité, de fluidité) et des entreprises (efficacité, recrutement par compétences). La politique de prix (gratuité candidat, freemium entreprise) favorise l'adoption et la création d'une masse critique d'utilisateurs, nécessaire pour que le lieu de distribution (plateforme en ligne) soit pertinent. Enfin, la communication martèle le message du slogan "RIGHT PERSON. RIGHT MOMENT. RIGHT COMPANY.", qui est le cœur de notre positionnement et de notre proposition de valeur.</p>
                `;

            case 'communication':
                return `
                    <h3 ${h3Class}>Politique Commerciale et de Communication</h3>

                    <h4 ${h4Class}>Moyens à mettre en œuvre</h4>
                    <ul ${listClass}>
                        <li ${liClass}><strong>Moyens humains:</strong> Équipe marketing et communication (interne ou externe), équipe commerciale pour le démarchage B2B, community managers.</li>
                        <li ${liClass}><strong>Moyens techniques:</strong> Plateforme de marketing automation, CRM, outils d'analyse de données (Google Analytics), outils de création de contenu multimédia.</li>
                    </ul>

                    <h4 ${h4Class}>Partenaires sollicités</h4>
                    <ul ${listClass}>
                        <li ${liClass}><strong>Incubateur actuel:</strong> Pour l'accompagnement stratégique et les mises en relation avec des entreprises et des investisseurs.</li>
                        <li ${liClass}><strong>Écoles et universités:</strong> Pour l'acquisition de candidats (jeunes diplômés) et la promotion de HIRY auprès des futurs talents.</li>
                        <li ${liClass}><strong>Organismes de formation professionnelle:</strong> Pour les candidats en reconversion et la valorisation de leurs nouvelles compétences.</li>
                        <li ${liClass}><strong>Chambres de Commerce et d'Industrie (CCI):</strong> Pour accéder à un réseau d'entreprises et organiser des événements.</li>
                        <li ${liClass}><strong>Média spécialisés RH et Tech:</strong> Pour des relations presse, des articles sponsorisés ou des interviews (ex: Cadremploi, Les Echos Start, Maddyness, FrenchWeb).</li>
                        <li ${liClass}><strong>Influenceurs RH / Carrière:</strong> Pour amplifier le message de HIRY sur les réseaux sociaux.</li>
                        <li ${liClass}><strong>Agences de communication digitale:</strong> Pour le support sur les campagnes SEO/SEA, social media et content marketing si besoin.</li>
                    </ul>
                `;

            case 'risks':
                return `
                    <h3 ${h3Class}>Étude des Risques</h3>
                    <h4 ${h4Class}>Risques liés à l'environnement général</h4>
                    <p ${pClass}><strong>Contexte réglementaire IA:</strong> L'évolution rapide de la législation autour de l'intelligence artificielle (ex: l'Al Act européen) pourrait imposer des contraintes techniques ou éthiques.  <strong>➔ Stratégie:</strong> Veille juridique constante pour anticiper les évolutions. </p>
                    <h4 ${h4Class}>Risques liés au marché</h4>
                    <p ${pClass}><strong>Forte concurrence:</strong> Le marché du recrutement est saturé par des acteurs établis.  <strong>➔ Stratégie:</strong> Différenciation forte et communication claire sur la proposition de valeur unique de HIRY (sans CV, IA, multimédia). </p>
                    <h4 ${h4Class}>Risques liés aux outils opérationnels</h4>
                    <p ${pClass}><strong>Dépendance à Google Gemini API:</strong> Tout changement dans la politique de Google pourrait perturber le fonctionnement de HIRY.  <strong>➔ Stratégie:</strong> À terme, envisager l'intégration d'autres APIs d'IA ou le développement de modèles propriétaires. </p>
                `;
            case 'skillsGained':
                return `
                    <h3 ${h3Class}>Compétences Entrepreneuriales sur lesquelles j'estime avoir progressé</h3>
                    <ul ${listClass}>
                        <li ${liClass}><strong>Vision stratégique et innovation:</strong> J'ai considérablement progressé dans ma capacité à transformer une idée disruptive en une vision claire et un projet structuré.  La conceptualisation détaillée de HIRY, de sa proposition de valeur unique (dépasser le CV, IA, multimédia) à la définition de ses segments cibles, témoigne de cette maturité. </li>
                        <li ${liClass}><strong>Compétences techniques et product management:</strong> Ma formation complémentaire au Wagon en développement web et IA a été un accélérateur majeur.  J'ai acquis la capacité de construire un MVP fonctionnel de manière autonome, ce qui me rend moins dépendant(e) et plus agile dans le développement produit. </li>
                        <li ${liClass}><strong>Analyse de marché et définition de cible:</strong> L'étude de marché que j'ai menée m'a permis de mieux comprendre les besoins des candidats et des entreprises, d'identifier la concurrence et de valider la pertinence de HIRY. </li>
                        <li ${liClass}><strong>Gestion de projet et organisation:</strong> La structuration du projet HIRY, de la planification du MVP à l'identification des prochaines étapes, montre une amélioration de mes compétences en gestion de projet. </li>
                        <li ${liClass}><strong>Développement commercial et persuasion:</strong> Mon expérience en vente chez Intersport m'a apporté des bases solides en matière de communication et de persuasion, compétences clés pour présenter HIRY. </li>
                        <li ${liClass}><strong>Détermination et Résilience:</strong> Ma capacité à chercher des solutions (comme la formation au Wagon) et à persévérer démontre une forte détermination et une résilience croissante face aux défis. </li>
                    </ul>
                `;
            case 'skillsToImprove':
                return `
                    <h3 ${h3Class}>Domaines de compétences qui restent à approfondir</h3>
                    <ul ${listClass}>
                        <li ${liClass}><strong>Gestion financière et levée de fonds:</strong> C'est un domaine où je dois encore consolider mes connaissances. La préparation d'un plan financier robuste et la maîtrise des mécanismes de la levée de fonds sont des compétences cruciales à affiner. </li>
                        <li ${liClass}><strong>Scalabilité et croissance à grande échelle:</strong> La gestion d'une croissance rapide et la mise à l'échelle technique et opérationnelle de HIRY représentent un défi pour lequel je dois encore développer mon expertise. </li>
                        <li ${liClass}><strong>Management d'équipe:</strong> La constitution et le management d'une équipe technique et commerciale plus large, avec la gestion des ressources humaines, est un domaine où je devrai monter en compétences. </li>
                        <li ${liClass}><strong>Maîtrise des aspects juridiques et contractuels avancés:</strong> La négociation de contrats complexes avec des partenaires, des investisseurs ou des employés demandera une compréhension plus fine des implications légales. </li>
                        <li ${liClass}><strong>Optimisation marketing à fort budget:</strong> La mise en œuvre de campagnes marketing d'acquisition à grande échelle est une compétence que je devrai développer à mesure que HIRY grandira. </li>
                    </ul>
                `;
            case 'legal':
                return `
                    <h3 ${h3Class}>Statut Juridique</h3>
                    <h4 ${h4Class}>Statut juridique actuel : SASU</h4>
                    <p ${pClass}>
                       <strong>Raison du choix:</strong> J'ai opté pour la SASU dans la phase de démarrage du projet, car elle est parfaitement adaptée à un entrepreneur individuel.  Ce statut offre une grande flexibilité en matière de gestion et d'organisation, et surtout, il permet de limiter la responsabilité de l'associé unique au montant de ses apports.  C'est un cadre sécurisant pour lancer l'activité sans engager mon patrimoine personnel.
                    </p>
                     <h4 ${h4Class}>Statut juridique envisagé à terme : SAS</h4>
                    <p ${pClass}>
                       <strong>Raison du choix:</strong> L'objectif est de faire évoluer la SASU vers une SAS lorsque HIRY accueillera de nouveaux associés (investisseurs ou collaborateurs clés).  La SAS offre une flexibilité de la gouvernance, facilitant l'entrée de nouveaux actionnaires et la mise en place de pactes d'associés.  Elle est également très appréciée par les investisseurs lors des levées de fonds.
                    </p>
                `;
            default:
                return "<h3>Contenu non trouvé</h3><p>Veuillez sélectionner une autre catégorie.</p>";
        }
    }
});
