CREATE TABLE public.uilisateur (
id INT primary key,
nom VARCHAR(30),
prenom VARCHAR(30),
courriel VARCHAR(255),
cle_api VARCHAR(30),
password VARCHAR(100)
);
CREATE TABLE public.taches (
id INT primary key,
utilisateur_id INT,
titre VARCHAR(100),
description VARCHAR(100),
date_debut DATE,
date_echeance DATE,
complete SMALLINT,
FOREIGN KEY (utilisateur_id) REFERENCES uilisateur (id)
);
CREATE TABLE public.sous_taches (
id INT primary key,
tache_id INT,
titre VARCHAR(100),
complete SMALLINT,
FOREIGN KEY (tache_id) REFERENCES taches (id)
);
