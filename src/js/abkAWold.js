/*

# 2017/2018 BTL CTS Project, Prof. Charlotte Schubert, Alte Geschichte Leipzig
# Function: knowledge base
# abkAW (ruecker), abkGrLaDGE (dge), abkAWgrkl (ruecker2), abkAWtlg (tlg), ruecker2020 (Rücker neue Liste)

# GPLv3 copyrigth
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/




//-----------------DATA
let inverseabkAWWAkba = {};

let abkAWtlg = {};

let ruecker2020 = {
 "NECTAR.": [
  "Nectarius", 
  {
   "Aug. epist.": "epistulae ad Augustinum"
  }, 
  [
   "300", 
   "397", 
   "episcopus Constantinopolitani?", 
   ""
  ]
 ], 
 "PS. VAL. CEM.": [
  "Pseudo-Valerianus Cemenelensis", 
  {
   "hom.": "homilia in dedicatione ecclesiae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GAVD.": [
  "Gaudentius <Donatista>", 
  {
   "epistularum fragmenta": "epistularum fragmenta"
  }, 
  [
   "350", 
   "450", 
   "Donatistarum episcopus", 
   ""
  ]
 ], 
 "EVTYCH.": [
  "Eutyches", 
  {
   "ars de verbo": "ars de verbo"
  }, 
  [
   "380", 
   "456", 
   "grammaticus", 
   ""
  ]
 ], 
 "FACVND.": [
  "Facundus Hermianensis", 
  {
   "defens.": "pro defensione trium capitulorum vel ad Iustinianum", 
   "c. Moc.": "contra Mocianum", 
   "fid.": "epistola fidei catholicae in defensione trium capitulorum"
  }, 
  [
   "500", 
   "599", 
   "episcopus Africanus", 
   ""
  ]
 ], 
 "VAL. SORAN.": [
  "Q. Valerius Soranus", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-140", 
   "-82", 
   "", 
   ""
  ]
 ], 
 "EXVP.": [
  "Iulius Exuperantius", 
  {
   "opusculum (sc. de Mario; sequitur Sallustium)": "opusculum (sc. de Mario; sequitur Sallustium)"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "GREG. ILIB.": [
  "Gregorius Iliberritanus", 
  {
   "de arca": "de arca Noe", 
   "in eccles.": "fragmenta duo praebentia explanationes in ecclesiasten", 
   "in gen.": "fragmenta praebentia expositiones in genesim", 
   "in cant.": "explanatio in canticum canticorum", 
   "fid.": "de fide"
  }, 
  [
   "330", 
   "393", 
   "episcopus (Luciferianus?)", 
   ""
  ]
 ], 
 "MEN.": [
  "Arrius Menander", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "150", 
   "213", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "POL. SILV.": [
  "Polemius Silvius", 
  {
   "laterculus": "laterculus"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "OPP.": [
  "C. Oppius", 
  {
   "vitarum fragmenta": "vitarum fragmenta"
  }, 
  [
   "-100", 
   "-30", 
   "", 
   ""
  ]
 ], 
 "PS. GARG. MART.": [
  "Pseudo-Gargilius Martialis", 
  {
   "fragmenta, quae in codicibus quibusdam subiunguntur": "fragmenta, quae in codicibus quibusdam subiunguntur", 
   "GARG. MART. med.": "GARG. MART. med."
  }, 
  [
   "200", 
   "299", 
   "", 
   ""
  ]
 ], 
 "OV.": [
  "P. Ovidius Naso", 
  {
   "medic.": "medicaminum faciei femineae quae exstant", 
   "epist.": "epistulae (heroides)", 
   "trist.": "tristia", 
   "Ib.": "Ibis", 
   "am.": "amores", 
   "Med. frg.": "Medeae tragoediae fragmenta", 
   "Pont.": "epistulae ex Ponto", 
   "carm. frg.": "carminum fragmenta", 
   "ars": "ars amatoria", 
   "fast.": "fasti (opus imperfectum)", 
   "rem.": "remedia amoris", 
   "met.": "metamorphoses", 
   "hal.": "halieutica"
  }, 
  [
   "-43", 
   "17", 
   "", 
   ""
  ]
 ], 
 "SALV.": [
  "Salvianus", 
  {
   "eccl.": "ad ecclesiam", 
   "epist.": "epistulae", 
   "gub.": "de gubernatione dei"
  }, 
  [
   "400", 
   "475", 
   "presbyter Massiliensis", 
   ""
  ]
 ], 
 "SCAVR.": [
  "Q. Terentius Scaurus", 
  {
   "app. gramm.": "appendix sive fragmenta Scauro adiuncta", 
   "de orthographia liber": "de orthographia liber"
  }, 
  [
   "50", 
   "150", 
   "", 
   ""
  ]
 ], 
 "PS. TER.": [
  "Pseudo-Terentius", 
  {
   "Andr. alt. exit.": "Andria alter exitus"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "[SALON.]": [
  "Salonius", 
  {
   "[in eccles.]": "in ecclesiasten", 
   "[in prov.]": "in proverbia Salomonis expositiones"
  }, 
  [
   "400", 
   "499", 
   "episcopus Viennensis", 
   ""
  ]
 ], 
 "PAVL. $1": [
  "Paulinus", 
  {
   "epigr.": "epigramma"
  }, 
  [
   "400", 
   "499", 
   "(episcopus Baeterrensis?)", 
   ""
  ]
 ], 
 "PAVL. $3": [
  "Paulinus quidam", 
  {
   "paenit.": "sermo de paenitentia ad monachos"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAVL. $2": [
  "Paulinus quidam", 
  {
   "Faust. Rei. epist.": "epistula ad Faustum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LVCR.": [
  "T. Lucretius Carus", 
  {
   "de rerum natura": "de rerum natura"
  }, 
  [
   "-99", 
   "-53", 
   "", 
   ""
  ]
 ], 
 "GALBA": [
  "Ser. Sulpicius Galba", 
  {
   "ad Ciceronem epistula (Cic. fam.)": "ad Ciceronem epistula (Cic. fam.)"
  }, 
  [
   "-100", 
   "-1", 
   "Pr\u00e4tor 54 v. Chr.", 
   ""
  ]
 ], 
 "SACERD.": [
  "Marius Plotius Sacerdos", 
  {
   "artes grammaticae": "artes grammaticae"
  }, 
  [
   "250", 
   "350", 
   "grammaticus", 
   ""
  ]
 ], 
 "MET. CEL.": [
  "Q. Caecilius Metellus Celer", 
  {
   "ad Ciceronem epistula": "ad Ciceronem epistula"
  }, 
  [
   "-100", 
   "-59", 
   "", 
   ""
  ]
 ], 
 "ORIG.": [
  "Origenis", 
  {
   "in I reg.": "homilia in librum I regum", 
   "in Matth.": "commentariorum in Matthaeum quae exstant"
  }, 
  [
   "185", 
   "254", 
   "scriptor ecclesia", 
   "opera ab anonymis e graeco versa"
  ]
 ], 
 "TERT.": [
  "Tertullianus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "150", 
   "250", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "CASS.": [
  "C. Cassius Longinus", 
  {
   "ad Ciceronem epistulae": "ad Ciceronem epistulae"
  }, 
  [
   "-85", 
   "-42", 
   "Caesaris interfector", 
   ""
  ]
 ], 
 "APIC.": [
  "Apicius", 
  {
   "exc.": "excerpta a Vinidario quodam (sed non e nostra decem librorum collectione) servata codice Salmasiano", 
   "pim.": "brevis pimentorum", 
   "de re coquinaria": "de re coquinaria", 
   "cib.": "brevis ciborum"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "SVEIVS": [
  "Sueius", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "CALP. $1": [
  "L. Calpurnius Piso Frugi (Censorius)", 
  {
   "hist.": "annalium fragmenta"
  }, 
  [
   "-180", 
   "-120", 
   "historicus", 
   ""
  ]
 ], 
 "NIL.": [
  "N(e)ilus von Ankyra", 
  {
   "magist.": "de magistris et discipulis", 
   "octo vit. vers. A": "de octo vitiis generalibus, versio A"
  }, 
  [
   "399", 
   "499", 
   "", 
   "operum, quae Nilo cuidam (Ancyrano?) aut Euagrio Pontico ascribuntur, versiones lat."
  ]
 ], 
 "PS. MAR. VICTORIN.": [
  "Pseudo-Marius Victorinus", 
  {
   "Aelius Festus Apthonius (Asmonius?), opus grammaticum (initium periit), quod iam saec. V, ut videtur, cum Marii Victorini artis genuinae fragmento": "Aelius Festus Apthonius (Asmonius?), opus grammaticum (initium periit), quod iam saec. V, ut videtur, cum Marii Victorini artis genuinae fragmento", 
   "verb. script.": "de verbis scripturae", 
   "[hymn.]": "[hymn.]", 
   "ad Iust.": "ad Iustinum Manichaeum", 
   "phys.": "de physicis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "QVADRIG.": [
  "Q. Claudius Quadrigarius", 
  {
   "hist.": "annalium fragm."
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "ANON. $10": [
  "anonymus (AMBROSIAST. ?)", 
  {
   "de trib. mensur.": "de tribus mensuris (sc. Matth. 13,33 memoratis) fragmentum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AVX. $1": [
  "Auxentius <Durostorensis>", 
  {
   "epistulae de Vlfila episcopo quae exstant": "epistulae de Vlfila episcopo quae exstant"
  }, 
  [
   "400", 
   "499", 
   "episcopus Durostorensis Arianus", 
   ""
  ]
 ], 
 "VARRO AT.": [
  "P. Terentius Varro Atacinus", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-82", 
   "-35", 
   "", 
   ""
  ]
 ], 
 "PS. AGENN.": [
  "Pseudo-Agennius", 
  {
   "commenta gromatica": "commenta gromatica"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POMP. TROG.": [
  "Pompeius Trogus", 
  {
   "prol.": "prologi", 
   "Iust.": "fragmenta varia, e. g. fragm. servatum apud IVST.", 
   "anim.": "de animalibus", 
   "hist.": "historiae Philippicae"
  }, 
  [
   "-50", 
   "50", 
   "", 
   "fragmentum servatum apud PLIN. nat."
  ]
 ], 
 "PASCENT.": [
  "Pascentius", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "CAECIN.": [
  "A. Caecina", 
  {
   "ad Ciceronem epistula": "ad Ciceronem epistula"
  }, 
  [
   "-100", 
   "-1", 
   "A. fil.", 
   ""
  ]
 ], 
 "[FAVSTIN.]": [
  "Faustinus", 
  {
   "[pass. dom.]": "homilia de passione domini"
  }, 
  [
   "", 
   "", 
   "", 
   "EVSEB. GALLIC. hom. 13,9"
  ]
 ], 
 "FLORENT. $1": [
  "Florentius", 
  {
   "Lucif. epist.": "epistula ad Luciferum"
  }, 
  [
   "350", 
   "450", 
   "magister officiorum", 
   ""
  ]
 ], 
 "[ANON.] $1": [
  "anonymus", 
  {
   "[in psalm.]": "glossae in psalm."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EVSEB. VERC.": [
  "Eusebius <Vercellensis>", 
  {
   "epist.": "epistulae"
  }, 
  [
   "283", 
   "371", 
   "episcopus", 
   ""
  ]
 ], 
 "FIRM.": [
  "Iulius Firmicus Maternus Siculus", 
  {
   "err.": "de errore profanarum religionum", 
   "math.": "mathesis"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "IVL. VAL.": [
  "Iulius Valerius Alexander Polemius", 
  {
   "Pseudocallisthenis historia Alexandri Magni e graeco versa": "Pseudocallisthenis historia Alexandri Magni e graeco versa"
  }, 
  [
   "250", 
   "350", 
   "", 
   ""
  ]
 ], 
 "PS. CASSIOD.": [
  "Pseudo-Cassiodorus", 
  {
   "rhet.": "rhetorica excerpta", 
   "de orat.": "de oratione et de octo partibus orationis", 
   "pasch.": "computus paschalis"
  }, 
  [
   "500", 
   "599", 
   "", 
   ""
  ]
 ], 
 "VEREC.": [
  "Verecundus", 
  {
   "in cant.": "commentarii super cantica ecclesiastica", 
   "satisfact.": "carmen de satisfactione paenitentiae"
  }, 
  [
   "500", 
   "552", 
   "episcopus Iuncensis", 
   ""
  ]
 ], 
 "VAL. CEM.": [
  "Valerianus Cemenelensis", 
  {
   "hom.": "homiliae", 
   "epist.": "epistula ad monachos"
  }, 
  [
   "400", 
   "460", 
   "episcopus", 
   ""
  ]
 ], 
 "PS. ASCON.": [
  "Pseudo-Asconius", 
  {
   "div. in Caec.": "in divinationem in Q. Caecilium", 
   "Verr.": "in Verrinas (sc. Verr. I. II 1. 2)"
  }, 
  [
   "400", 
   "499", 
   "", 
   "commentarii vel scholia Ciceronis orationum tradita una cum ASCON., sed non ab eo confecta"
  ]
 ], 
 "AEDIT.": [
  "Valerius Aedituus", 
  {
   "epigr.": "epigrammata"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "CVRIVS": [
  "M'. Curius Patrensis (?)", 
  {
   "ad Ciceronem epistula": "ad Ciceronem epistula"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "LAEL.": [
  "C. Laelius Sapiens", 
  {
   "or. frg.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud FEST."
  }, 
  [
   "-200", 
   "-123", 
   "", 
   ""
  ]
 ], 
 "HYD.": [
  "Hydatius Lemicus in Gallaecia", 
  {
   "continuatio chronicorum Hieronymianorum (v. HIER. chron.), vol. II": "continuatio chronicorum Hieronymianorum (v. HIER. chron.), vol. II"
  }, 
  [
   "400", 
   "469", 
   "", 
   ""
  ]
 ], 
 "VESPA": [
  "Vespa", 
  {
   "iudicium coci et pistoris iudice Vulcano": "iudicium coci et pistoris iudice Vulcano"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "POTAM.": [
  "Potamius", 
  {
   "tract. 2": "tractatus 2 (de martyrio Isaiae prophetae)", 
   "tract. 1": "tractatus 1 (de Lazaro)", 
   "epist. ad Athan.": "epistula ad Athanasium", 
   "[Lazar.]": "[Lazar.]", 
   "subst.": "epistula de substantia patris et filii et spiritus sancti"
  }, 
  [
   "300", 
   "399", 
   "episcopus Olisiponensis", 
   ""
  ]
 ], 
 "FAVST.": [
  "Faustus <Manichaeus>", 
  {
   "verba ab Augustino allata": "verba ab Augustino allata"
  }, 
  [
   "350", 
   "399", 
   "", 
   ""
  ]
 ], 
 "NOVIVS": [
  "Novius", 
  {
   "Atell.": "Atellanarum fragmenta"
  }, 
  [
   "-150", 
   "-50", 
   "", 
   ""
  ]
 ], 
 "QVINT.": [
  "M. Fabius Quintilianus", 
  {
   "inst.": "institutio oratoria", 
   "decl.": "declamationes minores"
  }, 
  [
   "35", 
   "96", 
   "", 
   ""
  ]
 ], 
 "LABEO": [
  "M. Antistius Labeo", 
  {
   "dig.": "fragmenta in digesta (et alibi) servata"
  }, 
  [
   "-54", 
   "11", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "CASCELL.": [
  "A. Cascellius", 
  {
   "dicta (ex eius libro bene dictorum?) a scriptoribus servata, e. g. dictum apud MACR. Sat.": "dicta (ex eius libro bene dictorum?) a scriptoribus servata, e. g. dictum apud MACR. Sat."
  }, 
  [
   "-100", 
   "-1", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "EVAGR. PONT.": [
  "Euagrius Ponticus", 
  {
   "rec. W": "versio vel recensio W a Wilmart edita", 
   "sent. virg.": "sententiae ad virginem", 
   "rec. H": "versio vel recensio H iam diu nota", 
   "sent. mon.": "sententiae ad monachos", 
   "rec. A": "recensio A, sc. versio nondum contaminata"
  }, 
  [
   "345", 
   "399", 
   "", 
   "opera e graeco versa"
  ]
 ], 
 "AGREST.": [
  "Agrestius <Lucensis>", 
  {
   "carm.": "carminis de fide ad Avitum episcopum quae exstant"
  }, 
  [
   "400", 
   "499", 
   "episcopus (Lucensis?)", 
   ""
  ]
 ], 
 "RADEGVND.": [
  "Radegundis", 
  {
   "epist. Greg. Tur. Franc.": "epistula ad episcopos"
  }, 
  [
   "520", 
   "587", 
   "", 
   "v. GREG. TVR. Franc."
  ]
 ], 
 "LIBERAT.": [
  "Liberatus", 
  {
   "breviarium causae Nestorianorum et Eutychianorum": "breviarium causae Nestorianorum et Eutychianorum"
  }, 
  [
   "500", 
   "599", 
   "archidiaconus Carthaginiensis", 
   ""
  ]
 ], 
 "SVRA": [
  "Aemilius Sura", 
  {
   "hist.": "de annis populi Romani"
  }, 
  [
   "-250", 
   "-150", 
   "", 
   ""
  ]
 ], 
 "PROBA": [
  "Faltonia Betitia Proba (?)", 
  {
   "cento": "cento Vergilianus de laudibus Christi"
  }, 
  [
   "300", 
   "380", 
   "", 
   ""
  ]
 ], 
 "MONTAN.": [
  "Iulius Montanus", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "VAL. MAX.": [
  "Valerius Maximus", 
  {
   "facta et dicta memorabilia": "facta et dicta memorabilia"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "VIGIL. TRID.": [
  "Vigilius Tridentinus", 
  {
   "ad Simplic.": "epistula ad Simplicianum episcopum Mediolanensem", 
   "ad Ioh.": "epistula ad Iohannem Chrysostomum"
  }, 
  [
   "350", 
   "405", 
   "episcopus", 
   ""
  ]
 ], 
 "SATVRN.": [
  "Claudius Saturninus", 
  {
   "dig.": "fragm. servatum in DIG."
  }, 
  [
   "450", 
   "550", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "AGNELL.": [
  "Agnellus", 
  {
   "epist.": "epistula ad Arminium de ratione fidei"
  }, 
  [
   "487", 
   "570", 
   "episcopus Ravennas", 
   ""
  ]
 ], 
 "AFRIC.": [
  "Sex. Caecilius Africanus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "100", 
   "175", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "CAPREOL.": [
  "Capreolus <Carthaginiensis>", 
  {
   "[epist. 1]": "epistula prior, sc. ad concilium Ephesium", 
   "epist. 2": "epistula altera, sc. ad Vitalem et Tonantium"
  }, 
  [
   "350", 
   "437", 
   "episcopus Carthaginiensis", 
   ""
  ]
 ], 
 "LABEO $1": [
  "Attius Labeo", 
  {
   "(qui vertit) Homeri carmina, fragmentum servatum in SCHOL. Pers. 1,4": "(qui vertit) Homeri carmina, fragmentum servatum in SCHOL. Pers. 1,4"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "IVLIAN.": [
  "Iulianus Aeclanensis", 
  {
   "in Am.": "commentarius in Amos prophetam", 
   "in Os.": "commentarius in Osee prophetam", 
   "verba Iuliani ab Augustino allata": "verba Iuliani ab Augustino allata", 
   "praef. in proph.": "praefatio in prophetas", 
   "epit. in psalm.": "in psalmos epitome q. d.", 
   "frg.": "fragmenta apud Bedam servata (sc. series VIIsq.; cetera fragmenta v. IVLIAN. Aug.), series VIII", 
   "in psalm.": "versionis latinae commentarii Theodori Mopsuesteni in psalmos, quam nunc fere omnes Iuliano tribuunt, reliquiae", 
   "in Iob": "commentarius in Iob", 
   "in Ioel": "commentarius in Ioel prophetam"
  }, 
  [
   "385", 
   "455", 
   "episcopus Pelagianus", 
   ""
  ]
 ], 
 "TRYPH.": [
  "Claudius Tryphoninus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "150", 
   "250", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "TIBERIAN.": [
  "Tiberianus (fortasse C. Annius Tiberianus praef. praet. a. 336)", 
  {
   "carm.": "carmina"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "GRATT.": [
  "Grattius", 
  {
   "cynegetica": "cynegetica"
  }, 
  [
   "-60", 
   "20", 
   "poeta", 
   ""
  ]
 ], 
 "LAVRENT.": [
  "Laurentius (Mellifluus)", 
  {
   "eleem.": "homilia de eleemosyna", 
   "Chan.": "Iohannis Chrysostomi de muliere Chananaea homilia e graeco versa", 
   "paen.": "de paenitentia (de duobus temporibus)"
  }, 
  [
   "400", 
   "499", 
   "episcopus quidam (Novarum in Moesia?)", 
   ""
  ]
 ], 
 "PS. PRISC.": [
  "Pseudo-Priscianus", 
  {
   "de accentibus liber": "de accentibus liber"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "HESYCH. $1": [
  "Hesychius <Hierosolymitanus>", 
  {
   "in lev.": "commentarius in leviticum e graeco versus et retractatus"
  }, 
  [
   "400", 
   "450", 
   "presbyter Hierosolymitanus", 
   ""
  ]
 ], 
 "TARRA": [
  "Tarra Hispanus", 
  {
   "epist.": "epistula ad Reccaredum I regem Visigothorum"
  }, 
  [
   "550", 
   "650", 
   "monachus", 
   ""
  ]
 ], 
 "POLLIO": [
  "C. Asinius Pollio", 
  {
   "carm. frg.": "carminum fragm. servatum apud CHAR. gramm.", 
   "or. frg.": "orationum fragmenta, e. g. fragm. servatum apud CHAR. gramm.", 
   "epistulae ad Ciceronem": "epistulae ad Ciceronem", 
   "hist.": "historiae"
  }, 
  [
   "-76", 
   "5", 
   "", 
   ""
  ]
 ], 
 "ABLAB.": [
  "Ablabius <Constantini Magni Familiaris>", 
  {
   "epigr.": "epigramma"
  }, 
  [
   "250", 
   "338", 
   "Beamter und Vertrauter Konstantins des Gro\u00dfen", 
   ""
  ]
 ], 
 "CYPR.": [
  "Thascius Caecilius Cyprianus", 
  {
   "laps.": "de lapsis", 
   "eleem.": "de opere et eleemosynis", 
   "domin. orat.": "de dominica oratione", 
   "patient.": "de bono patientiae", 
   "idol.": "quod idola dii non sint (opusculum vix genuinum)", 
   "zel.": "de zelo et livore", 
   "testim.": "ad Quirinum vel testimonia (sc. e scripturis sacris excerpta)", 
   "sent. episc.": "sententiae episcoporum de haereticis baptizandis (sc. acta concilii Carthaginiensis kal. Sept. a. 256 habiti, quae postea versa sunt graece)", 
   "praef.": "praefatio", 
   "mortal.": "de mortalitate", 
   "epist. Silvan": "epistula ad Silvanum al.", 
   "ad Donat.": "ad Donatum", 
   "hab. virg.": "de habitu virginum (ad virgines)", 
   "unit. eccl.": "de  catholicae ecclesiae unitate", 
   "Demetr.": "ad Demetrianum (sc. paganum)", 
   "epist. epistulae collectae": "diverse", 
   "Fort.": "ad Fortunatum (de exhortatione martyrii)"
  }, 
  [
   "200", 
   "258", 
   "episcopus Carthaginiensis", 
   ""
  ]
 ], 
 "EGNAT.": [
  "Egnatius", 
  {
   "carminis de rerum natura fragmenta": "carminis de rerum natura fragmenta"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "LVX.": [
  "Luxurius", 
  {
   "anth.": "carmina in anthologiam latinam recepta"
  }, 
  [
   "500", 
   "599", 
   "poeta Carthaginiensis", 
   ""
  ]
 ], 
 "DIDYM.": [
  "Didymus <Claudius>", 
  {
   "metrol. II": "fragmentum operis \u03a0\u03b5\u03c1\u1f76 \u03c4\u1fc6\u03c2 \u03c0\u03b1\u03c1\u1f70 \u1fec\u03c9\u03bc\u03b1\u03af\u03bf\u03b9\u03c2 \u1f00\u03bd\u03b1\u03bb\u03bf\u03b3\u03af\u03b1\u03c2 apud PRISC. fig. num. gramm. III 411sq. servatum"
  }, 
  [
   "-65", 
   "10", 
   "grammaticus graecus", 
   ""
  ]
 ], 
 "PARIS": [
  "Iulius Paris", 
  {
   "epitome Valerii Maximi": "epitome Valerii Maximi"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "PAVL. QVAEST.": [
  "Paulus Quaestor", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "nicht datierbar", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEV. MALAC.": [
  "Severus (Malacitanus?)", 
  {
   "euang.": "euangelia"
  }, 
  [
   "500", 
   "599", 
   "episcopus", 
   ""
  ]
 ], 
 "ANTON.": [
  "Marcus Antonius", 
  {
   "epistulae ad Ciceronem datae": "epistulae ad Ciceronem datae", 
   "orationum edictorumque fragm. servata apud CIC. Phil.": "orationum edictorumque fragm. servata apud CIC. Phil."
  }, 
  [
   "-82", 
   "-30", 
   "triumvir", 
   ""
  ]
 ], 
 "GILD.": [
  "Gildas Sapiens Britannus", 
  {
   "paenit.": "praefatio de paenitentia", 
   "Brit.": "de excidio et conquestu Britanniae", 
   "epist.": "fragmenta epistularum"
  }, 
  [
   "500", 
   "570", 
   "", 
   ""
  ]
 ], 
 "LVCIL. IVN.": [
  "Lucilius Iunior", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "6", 
   "99", 
   "", 
   ""
  ]
 ], 
 "RVFIN.": [
  "Tyrannius (Turranius) Rufinus", 
  {
   "apol. Orig.": "apologeticus Pamphili martyris pro Origene latine versus", 
   "Clement.": "Clementis Romani quae feruntur recognitiones latine versae", 
   "Orig. in Rom.": "Origenis commentarius in Pauli epistulam ad Romanos latine versus", 
   "Adamant.": "libri Adamantii Origenis adversus haereticos latine versi", 
   "sent. Sext.": "Sexti quae feruntur sententiae latine versae", 
   "Orig. princ.": "Origenis libri de principiis latine versi", 
   "symb.": "expositio symboli", 
   "hist. mon.": "de vita sanctorum, i. historia monachorum latine versa", 
   "Orig. in psalm.": "Origenis homiliae in psalmos 36\u201438 latine versae", 
   "apol. adv. Hier.": "apologia adversus Hieronymum", 
   "hist.": "Eusebii historia ecclesiastica translata et continuata", 
   "epil.": "epilogus ipsius Rufini", 
   "Basil. reg.": "Basilii regula latine versa", 
   "patr.": "de benedictionibus patriarcharum", 
   "Basil. hom.": "Basilii homiliae aliquot latine versae", 
   "Orig. in gen.": "Origenis homiliae in heptateuchon (praeter deut.) latine versae", 
   "apol. ad Anast.": "apologia ad Anastasium papam", 
   "epist. Clement.": "epistula Clementis ad Iacobum latine versa", 
   "praef. Rufin.": "praefatio ipsius Rufini", 
   "Hier. adv. Rufin.": "epistulae ad Hieronymum partes apud HIER. adv. Rufin. 3 servatae", 
   "praef. Orig.": "praefatio Origenis", 
   "Greg. Naz. orat.": "Gregorii Nazianzeni orationes latine versae", 
   "Orig. in cant.": "Origenis commentarius in canticum canticorum latine versus"
  }, 
  [
   "345", 
   "412", 
   "presbyter Aquileiensis", 
   ""
  ]
 ], 
 "EVGIPP.": [
  "Eugippius", 
  {
   "reg.": "regula (sc. cento cod. Paris. 12634 traditus, qui nunc Eugippio ascribitur)", 
   "Sev.": "vita Severini (commemoratorium)", 
   "epist. ad Prob.": "epistula ad Probam", 
   "exc. Aug.": "excerpta ex operibus S. Augustini", 
   "epist. ad Pasch.": "epistula ad Paschasium"
  }, 
  [
   "465", 
   "533", 
   "abbas castelli Lucullani prope Neapolim", 
   ""
  ]
 ], 
 "[MAXIM.]": [
  "", 
  {
   "[ad Theoph.]": "[ad Theoph.]"
  }, 
  [
   "", 
   "", 
   "", 
   "MAX. epist."
  ]
 ], 
 "RVT. RVF.": [
  "P. Rutilius Rufus", 
  {
   "or. frg.": "orationum fragmenta, e. g. fragm. servatum apud DIOM. gramm.", 
   "hist.": "de vita sua"
  }, 
  [
   "-158", 
   "-78", 
   "", 
   ""
  ]
 ], 
 "GREG. NYSS.": [
  "Gregorius Nyssenus", 
  {
   "ad Phil.": "epistula ad Philippum monachum de Arianorum oppositionibus e graeco versa"
  }, 
  [
   "335", 
   "394", 
   "", 
   ""
  ]
 ], 
 "PS. LEO M.": [
  "Pseudo-Leo Magnus", 
  {
   "humil.": "epistula ad Demetriadem virginem de vera humilitate"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "LVSC. LANVV.": [
  "Luscius Lanuvinus", 
  {
   "com.": "Thensauri palliatae fragmentum"
  }, 
  [
   "-200", 
   "-100", 
   "comicus", 
   ""
  ]
 ], 
 "[BRVT. ET CASS.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "CASS. Cic. fam."
  ]
 ], 
 "TARR. PAT.": [
  "Tarruntenus (Tarrutenius) Paternus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "OROS.": [
  "Paulus(?) Orosius", 
  {
   "apol.": "liber apologeticus, sc. contra Iohannem episcopum Hierosolymitanum et contra Pelagium", 
   "comm.": "commonitorium ad Augustinum de errore Priscillianistarum et Origenistarum", 
   "hist.": "historiae adversum paganos"
  }, 
  [
   "385", 
   "418", 
   "presbyter Hispanus", 
   ""
  ]
 ], 
 "MVTIAN.": [
  "Mutianus", 
  {
   "Chrysost. hom.": "Iohannis Chrysostomi homiliae in epistulam ad Hebraeos iussu Cassiodori e graeco versae"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "VOLVS.": [
  "Rufius Antonius Agrypnius Volusianus", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "SANTRA": [
  "Santra", 
  {
   "trag.": "tragoediarum fragmenta", 
   "frg. Non.": "pedestrium operum fragmenta"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   "e. g. fragm. servatum apud NON."
  ]
 ], 
 "EPHR.": [
  "Ephraem Syrus", 
  {
   "iudic. et resurr.": "de iudicio dei et resurrectione ... vel de extremo iudicio", 
   "beat.": "de beatitudine animae", 
   "paenit.": "de paenitentia", 
   "de die iudic.": "de die iudicii", 
   "Ioseph": "sermo in Ioseph (sc. patriarcham)", 
   "luctam.": "de luctamine spiritali vel de luctationibus", 
   "compunct.": "de compunctione cordis vel monita"
  }, 
  [
   "306", 
   "373", 
   "", 
   ""
  ]
 ], 
 "CALP.": [
  "T. Calpurnius Siculus", 
  {
   "ecl.": "eclogae (bucolica)"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "LACT.": [
  "L. Cae(ci)lius Firmianus Lactantius", 
  {
   "opif.": "de opificio dei (vel formatione hominis)", 
   "mort. pers.": "de mortibus persecutorum", 
   "Phoen.": "de ave Phoenice (carmen nonnullis spurium)", 
   "epit.": "divinarum institutionum (sc. LACT. inst.) epitome", 
   "ira": "de ira dei", 
   "interpol.": "interpolationes", 
   "inst.": "divinae institutiones", 
   "frg.": "fragmenta operum deperditorum"
  }, 
  [
   "250", 
   "320", 
   "rhetor Africanus", 
   ""
  ]
 ], 
 "VENVL.": [
  "Venuleius Saturninus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "RVFIN. $1": [
  "Rufinus", 
  {
   "commentarii in metra Terentiana et de numeris oratorum": "commentarii in metra Terentiana et de numeris oratorum"
  }, 
  [
   "400", 
   "499", 
   "grammaticus Antiochensis", 
   ""
  ]
 ], 
 "MARCIVS": [
  "(Cn.) Marcius vates", 
  {
   "carm. frg.": "fragmenta carminum, sc. quae inter praecepta numerantur"
  }, 
  [
   "-270", 
   "-200", 
   "", 
   ""
  ]
 ], 
 "CREMVT.": [
  "A. Cremutius Cordus", 
  {
   "annalium fragmenta": "annalium fragmenta"
  }, 
  [
   "-50", 
   "25", 
   "historicus", 
   ""
  ]
 ], 
 "HIER.": [
  "Hieronymus Stridonensis", 
  {
   "in Ioel.": "commentarii in Ioel prophetam", 
   "in Hab.": "commentarii in Habacuc prophetam (divisi in libros duos)", 
   "in eccles.": "commentarii in ecclesiasten", 
   "in Is.": "tractatus duo in Isaiam", 
   "Aug. epist. Divj.": "epistula ad Aurelium episcopum Carthaginiensem nuper reperta", 
   "in psalm. I": "series prior", 
   "interpr. Iob": "interpretatio vetustior libri Iob emendata ab Hieronymo sec. hexapla Origenis (distinguenda a VVLG. Iob)", 
   "in Gal.": "commentarii in epistulam Pauli ad Galatas (divisi in libros tres)", 
   "in psalm. II": "series altera", 
   "in Philem.": "commentarii in epistulam Pauli ad Philemonem", 
   "epist. epistularum corpus ab editoribus compositum": "diverse", 
   "[monogr.]": "[monogr.]", 
   "a. Abr.": "ad annum post natum Abraham 2394 (anni indicantur kat\u00e0 denos in margine sinistra numeris Romanis linea subscripta insignibus)", 
   "epist.": "Hieronymi epistula operi anteposita", 
   "in Mich.": "commentarii in Michaeam prophetam (divisi in libros duos)", 
   "in Zach.": "commentarii in Zachariam prophetam (divisi in libros tres)", 
   "in Soph.": "commentarii in Sophoniam prophetam", 
   "vita": "vitae trium monachorum", 
   "nom. hebr.": "hebraica nomina (liber interpretationis hebraicorum nominum)", 
   "c. Vigil.": "contra Vigilantium presbyterum Gallum", 
   "adv. Iovin.": "adversus Iovinianum", 
   "chron.": "chronicon omnimodae historiae, sc. Eusebii Caesariensis chronicorum pars altera e graeco versa, retractata", 
   "in Os.": "commentarii in Osee prophetam (divisi in libros tres)", 
   "quaest. hebr. in gen.": "quaestiones hebraicae in genesim", 
   "epist. Theod.": "epistula Theodori monachi Tabennensis de pascha e graeco (quod periit) versa", 
   "interpr. Salom. praef.": "interpretatio vetustior librorum Salomonis ab Hieronymo emendata (distinguenda a VVLG.), praefatio Hieronymi (cetera perierunt)", 
   "in Ezech.": "homiliae XIV in Ezechielem (graeca perierunt)", 
   "interpr. par. praef.": "interpretatio vetustior librorum paralipomenon ab Hieronymo emendata (distinguenda a VVLG. par.), praefatio Hieronymi (cetera perierunt)", 
   "in Luc.": "homiliae XXXIX in Lucam (exstant fragmenta graeca)", 
   "in psalm.": "tractatus in psalmos", 
   "adv. Rufin.": "adversus Rufinum libri tres", 
   "Pauli": "vita Pauli Thebaei", 
   "Malchi": "vita Malchi (captivus monachus)", 
   "Orsies. doctr.": "(H)orsiesii abbatis Tabennensis doctrina latine versa", 
   "in Ier.": "commentarii in Ieremiam prophetam imperfecti", 
   "in Am.": "commentarii in Amos prophetam (divisi in libros tres)", 
   "in Matth.": "commentarii in Matthaeum (divisi in libros IV)", 
   "in Nah.": "commentarii in Nahum prophetam", 
   "praef.": "Hieronymi praefatio (non solum regulae, sed totius Pachomianorum corporis)", 
   "virg. Mar.": "adversus Helvidium de Mariae virginitate perpetua", 
   "prol.": "prologus totius operis", 
   "in Marc.": "tractatus in Marci euangelium", 
   "epist. Pachom.": "epistulae Pachomii abbatis Tabennensis e graeco versae", 
   "in Dan.": "commentarii in Danielem prophetam", 
   "Hilar.": "vita Hilarionis", 
   "in Tit.": "commentarii in epistulam Pauli ad Titum", 
   "tract.": "tractatus vel sermones ab Hieronymo habiti", 
   "[prol. gal.]": "prologus galeatus q. d.", 
   "psalt. sec. Hebr.": "psalterium sec. (iuxta) Hebraeos, sc. psalmi ex hebr. versi", 
   "lib. 3 praef.": "praefatio libri tertii", 
   "c. Ioh.": "contra Iohannem Hierosolymitanum episcopum", 
   "vir. ill.": "de illustribus viris (de scriptoribus ecclesiasticis)", 
   "c. Lucif.": "altercatio Luciferiani et orthodoxi (dialogus contra Luciferianos)", 
   "euang.": "ad euangelium", 
   "in Eph.": "commentarii in epistulam Pauli ad Ephesios (divisi in libros tres)", 
   "in Ion.": "commentarii in Ionam prophetam", 
   "reg. Pachom.": "regula Pachomii abbatis Tabennensis aliorumque (?) versa e graeco una cum aliis Pachomianis", 
   "praef. Vulg. Dan.": "praefationes ad singulas Vulgatae partes conscriptae", 
   "sit. et. nom.": "de locis (de situ et nominibus locorum hebraicorum)", 
   "in Agg.": "commentarii in Aggaeum prophetam", 
   "in Mal.": "commentarii in Malachiam prophetam", 
   "hom. Orig.": "homiliae Origenis quot e graeco vertit Hieronymus", 
   "in apoc.": "Victorini Poetovionensis commentarius in apocalypsin ab Hieronymo retractatus", 
   "in Abd.": "commentarii (sc. alteri) in Abdiam prophetam", 
   "[mon. Pachom.]": "[mon. Pachom.]", 
   "in cant.": "homiliae duae in canticum canticorum (graeca perierunt)", 
   "Didym. spir.": "Didymi Alexandrini liber de spiritu sancto latine versus", 
   "adv. Pelag.": "dialogus adversus Pelagianos"
  }, 
  [
   "347", 
   "420", 
   "presbyter et abbas Bethlehemiticus", 
   ""
  ]
 ], 
 "CHALC.": [
  "C(h)alcidius", 
  {
   "praef.": "praefatio operis (sc. epistula ad Osium)", 
   "comm.": "commentarius (in Platonis Timaeum)", 
   "transl.": "(Platonis Timaei) translatio"
  }, 
  [
   "300", 
   "399", 
   "christlicher Philosoph", 
   ""
  ]
 ], 
 "ANTHIM.": [
  "Anthimus", 
  {
   "praef.": "praefatio", 
   "de observatione ciborum epistula ad Theodoricum regem Francorum": "de observatione ciborum epistula ad Theodoricum regem Francorum"
  }, 
  [
   "450", 
   "550", 
   "medicus", 
   ""
  ]
 ], 
 "RVT. LVP.": [
  "P. Rutilius Lupus", 
  {
   "schemata dianoeas et lexeos": "schemata dianoeas et lexeos"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "FERREOL.": [
  "Ferreolus", 
  {
   "reg.": "regula monastica"
  }, 
  [
   "530", 
   "581", 
   "episcopus Vceticensis Gallus", 
   ""
  ]
 ], 
 "EVTR.": [
  "Eutropius", 
  {
   "breviarium ab urbe condita": "breviarium ab urbe condita"
  }, 
  [
   "300", 
   "390", 
   "", 
   ""
  ]
 ], 
 "PAMMACH.": [
  "Pammachius et Oceanus", 
  {
   "Hier. epist.": "epistula ad Hieronymum"
  }, 
  [
   "350", 
   "409", 
   "", 
   ""
  ]
 ], 
 "CLOD. LIC.": [
  "C. Clodius Licinus", 
  {
   "fragmenta librorum rerum Romanarum": "fragmenta librorum rerum Romanarum"
  }, 
  [
   "-50", 
   "50", 
   "historicus", 
   ""
  ]
 ], 
 "CASS. FEL.": [
  "Cassius Felix", 
  {
   "de medicina ex Graecis logicae sectae auctoribus liber translatus": "de medicina ex Graecis logicae sectae auctoribus liber translatus"
  }, 
  [
   "400", 
   "499", 
   "medicus", 
   ""
  ]
 ], 
 "HEGES.": [
  "Hegesippus", 
  {
   "historia, sc. Flavii Iosephi de bello Iudaico opus e graeco versum atque retractatum": "historia, sc. Flavii Iosephi de bello Iudaico opus e graeco versum atque retractatum"
  }, 
  [
   "100", 
   "180", 
   "", 
   ""
  ]
 ], 
 "NAEV.": [
  "Cn. Naevius", 
  {
   "carm. frg.": "carminum praeter scaenica (sc. fere belli Punici) fragmenta", 
   "praetext.": "praetextarum fragmenta", 
   "trag.": "tragoediarum fragmenta", 
   "[ep.]": "[ep.]", 
   "com.": "comoediarum fragmenta"
  }, 
  [
   "-265", 
   "-201", 
   "", 
   ""
  ]
 ], 
 "TICID.": [
  "Ticidas", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-100", 
   "-46", 
   "", 
   ""
  ]
 ], 
 "NOVAT.": [
  "Novatus", 
  {
   "sententia de humilitate et oboedientia et de calcanda superbia": "sententia de humilitate et oboedientia et de calcanda superbia"
  }, 
  [
   "100", 
   "151", 
   "catholicus", 
   ""
  ]
 ], 
 "PS. DIOSC.": [
  "Pseudo-Dioscurides", 
  {
   "[Vind.]": "[Vind.]", 
   "herb. fem.": "de herbis femininis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AVDAX $1": [
  "Audax", 
  {
   "de Scauri et Palladii libris excerpta": "de Scauri et Palladii libris excerpta"
  }, 
  [
   "500", 
   "599", 
   "grammaticus", 
   ""
  ]
 ], 
 "PS. HIPPOCR.": [
  "Pseudo-Hippocrates", 
  {
   "ad Antioch.": "epistula (e graeco versa) ad Antiochum regem (epist. Dioclis ad Antigonum regem sec. Paulum Aeginetam al.)", 
   "ad Maecen.": "epistula ad Maecenatem"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "RVSTIC. $1": [
  "Rusticus", 
  {
   "epist. ad Eucher.": "epistula ad Eucherium"
  }, 
  [
   "", 
   "", 
   "presbyter", 
   ""
  ]
 ], 
 "PS. OV.": [
  "Pseudo-Ovidius", 
  {
   "Aen. 12,10": "argumenta decasticha Aeneidos, lib. 12 vers. 10", 
   "buc. georg. 28": "argumenta tetrasticha bucolicon et georgicon, vers. 28 Shackleton Bailey (usque adhuc 24 Riese)", 
   "argum.": "argumenta Vergilii carminum", 
   "epist.": "versus, qui multis Ovidii epistulis heroid. anteponuntur", 
   "Aen. 12 monost.": "eidem argumento praepositum monostichum"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "REPOS.": [
  "Reposianus", 
  {
   "concubitus Martis et Veneris": "concubitus Martis et Veneris"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "[PS. EVSEB. CAES.]": [
  "Pseudo-Eusebius", 
  {
   "[hom.]": "homiliae"
  }, 
  [
   "400", 
   "599", 
   "", 
   "EVSEB. EMES. serm. 29,40"
  ]
 ], 
 "FEST.": [
  "Sex. Pompeius Festus", 
  {
   "epitomae operis de verborum significatu Verrii Flacci (aet. Augusti et Tiberii) quae exstant": "epitomae operis de verborum significatu Verrii Flacci (aet. Augusti et Tiberii) quae exstant"
  }, 
  [
   "150", 
   "199", 
   "", 
   ""
  ]
 ], 
 "PS. PRIMAS.": [
  "Pseudo-Primas", 
  {
   "in Rom.": "commentarius in epistulas Paulinas Primasio perperam attributus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CONSTANT. PORPH.": [
  "Constantinus Porphyrogenitus", 
  {
   "caer. aul. Byz.": "de caerimoniis aulae Byzantinae, ex quo opere graeco (postea retractato) afferimus interdum voces latinas in formulis vetustioribus servatas"
  }, 
  [
   "905", 
   "959", 
   "imperator Byzantinus", 
   ""
  ]
 ], 
 "FAVST. REI.": [
  "Faustus Reiensis", 
  {
   "grat.": "de gratia quae exstant", 
   "[symb.]": "homiliae de symbolo duae", 
   "epist.": "epistulae", 
   "spir.": "de spiritu sancto (opus iam antiquitus etiam Paschasio diacono Romano ascriptum)", 
   "rat. fid.": "de ratione fidei (opusculum olim Fausto ascriptum, nunc plerisque dubium aut spurium)"
  }, 
  [
   "400", 
   "495", 
   "in Gallia Narbonensi civitatis episcopus", 
   ""
  ]
 ], 
 "RVSTIC.": [
  "Rusticus", 
  {
   "[synod. ...]": "synodicon, pars ab ipso Rustico latine versa", 
   "c. aceph.": "contra acephalos disputatio"
  }, 
  [
   "500", 
   "599", 
   "diaconus Romanus", 
   ""
  ]
 ], 
 "LEP.": [
  "M. Aemilius Lepidus", 
  {
   "epistulae": "epistulae"
  }, 
  [
   "-90", 
   "-12", 
   "IIIvir", 
   ""
  ]
 ], 
 "IVSTINVS": [
  "imp. Iustinus", 
  {
   "novell. Iust.": "novellae Iustiniani"
  }, 
  [
   "450", 
   "527", 
   "", 
   ""
  ]
 ], 
 "PS. HYG.": [
  "Pseudo-Hyginus", 
  {
   "mun. castr.": "liber de munitionibus (vel metatione) castrorum q. d. (mutilus)"
  }, 
  [
   "200", 
   "299", 
   "", 
   ""
  ]
 ], 
 "NEMES.": [
  "M. Aurelius Olympius Nemesianus", 
  {
   "cyn.": "cynegeticon quae supersunt", 
   "auc.": "carminis Nemesiano ascripti de aucupio fragmenta", 
   "ecl.": "eclogae (bucolica)", 
   "frg. 1": "fragmentum 1"
  }, 
  [
   "200", 
   "299", 
   "poeta Carthaginiensis", 
   ""
  ]
 ], 
 "AVSPIC.": [
  "Auspicius <Tullensis>", 
  {
   "ad Arbog.": "epistula ad Arbogastem comitem Treverorum"
  }, 
  [
   "400", 
   "499", 
   "episcopus ecclesiae Tullensis", 
   ""
  ]
 ], 
 "VERAN.": [
  "Veranius", 
  {
   "de rebus sacris": "de rebus sacris"
  }, 
  [
   "0", 
   "58", 
   "", 
   ""
  ]
 ], 
 "APRISS.": [
  "Aprissius (?)", 
  {
   "Atellanarum(?) poeta": "Atellanarum(?) poeta"
  }, 
  [
   "-150", 
   "-50", 
   "", 
   "Fragm.: Varro, ling. 6.68"
  ]
 ], 
 "VLFILA": [
  "Vlfila", 
  {
   "fides (ab Auxentio allata)": "fides (ab Auxentio allata)"
  }, 
  [
   "311", 
   "383", 
   "episcopus Arianus Gothorum", 
   ""
  ]
 ], 
 "POMPON. $2": [
  "P. Pomponius Secundus", 
  {
   "praetext.": "fabularum praetextarum fragm. Unicum", 
   "trag.": "tragoediarum fragmenta"
  }, 
  [
   "0", 
   "60", 
   "", 
   ""
  ]
 ], 
 "POMPON. $1": [
  "Sex. Pomponius", 
  {
   "dig.": "fragmenta in digesta servata", 
   "reg. frg.": "fragm. quoddam operis incerti (fortasse regularum)"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "MART. BRAC.": [
  "Martinus <Bracarensis>", 
  {
   "form. vit.": "formula vitae honestae (sequitur Martinus Senecam philosophum)", 
   "superb.": "de superbia", 
   "pasch.": "de pascha", 
   "humil.": "exhortatio humilitatis", 
   "epitaph.": "epitaphium Martini Bracarensis", 
   "sent. patr.": "sententiae patrum Aegyptiorum e graeco collectae et versae", 
   "iact.": "pro repellenda iactantia", 
   "canon.": "canones quorundam conciliorum maximam partem e graeco versi, quos Martinus collegit et retractavit", 
   "refect.": "versus in refectorio", 
   "ira": "de ira", 
   "in bas.": "versus in basilica sancti Martini Turonensis", 
   "corr.": "de correctione rusticorum (epistula ad Polemium)", 
   "trin. mers.": "de trina mersione"
  }, 
  [
   "510", 
   "589", 
   "episcopus primo Dumiensis, postea Bracarensis in Gallaecia", 
   ""
  ]
 ], 
 "ANAST.": [
  "Anastasius I", 
  {
   "epistula ad Simplicianum (Epist. pontif. 276)": "epistula ad Simplicianum (Epist. pontif. 276)"
  }, 
  [
   "350", 
   "401", 
   "papa", 
   ""
  ]
 ], 
 "GAETVL.": [
  "Cn. Cornelius Lentulus Gaetulicus", 
  {
   "carm. frg.": "carminum fragmentum"
  }, 
  [
   "-20", 
   "39", 
   "cos. 26; Verfasser erotischer Gedichte", 
   ""
  ]
 ], 
 "NIGID.": [
  "P. Nigidius Figulus", 
  {
   "Prisc. gramm.": "fragmenta a scriptoribus servata, e. g. fragm. apud PRISC. gramm."
  }, 
  [
   "-100", 
   "-45", 
   "", 
   ""
  ]
 ], 
 "AETNA": [
  "", 
  {
   "Aetna, carmen appendicis Vergilianae": "Aetna, carmen appendicis Vergilianae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FILASTR.": [
  "Filastrius (vel Filaster)", 
  {
   "diversarum haereseon liber (de haeresibus)": "diversarum haereseon liber (de haeresibus)"
  }, 
  [
   "330", 
   "397", 
   "episcopus Brixiensis", 
   ""
  ]
 ], 
 "SVLP. VICT.": [
  "Sulpicius Victor", 
  {
   "rhet.": "institutiones oratoriae"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "MACER": [
  "Aemilius Macer Veronensis", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "-100", 
   "-16", 
   "", 
   ""
  ]
 ], 
 "LYGD.": [
  "Lygdamus (pseudon.)", 
  {
   "elegiae, quae sunt corporis Tibulliani": "elegiae, quae sunt corporis Tibulliani"
  }, 
  [
   "-43", 
   "50", 
   "", 
   ""
  ]
 ], 
 "DOM. AF.": [
  "Cn. Domitius Afer", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst."
  }, 
  [
   "0", 
   "59", 
   "", 
   ""
  ]
 ], 
 "CARBO": [
  "C. Papirius Carbo", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud CIC. de orat.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud CIC. de orat."
  }, 
  [
   "-250", 
   "-119", 
   "", 
   ""
  ]
 ], 
 "LEONIAN.": [
  "Leonianus", 
  {
   "Alc. Avit. epist.": "epistula ad Sapaudum"
  }, 
  [
   "450", 
   "550", 
   "archidiaconus", 
   ""
  ]
 ], 
 "[CAEL.]": [
  "", 
  {
   "[hist.]": "[hist.]"
  }, 
  [
   "", 
   "", 
   "", 
   "COEL. hist."
  ]
 ], 
 "CONSTANTIVS": [
  "Constantius", 
  {
   "epist.": "epistulae, quae vitae praemittuntur", 
   "vita Germ.": "vita Germani episcopi Autissiodorensis", 
   "praef.": "vitae praefatio"
  }, 
  [
   "420", 
   "497", 
   "clericus Lugdunensis", 
   ""
  ]
 ], 
 "PS. TIT.": [
  "Pseudo-Titus", 
  {
   "epist.": "epistula de dispositione sancti\u00admonii"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "PS. DOSITH.": [
  "", 
  {
   "frg. iur.": "fragmentum Dositheanum vel de manumissionibus q. d. iurisconsulti cuiusdam graece et latine servatum inter Pseudodositheana hermeneumata (sc. quae interdum una cum DOSITH. traduntur)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[LIC. EVDOX.]": [
  "Licinia Eudoxia Augusta", 
  {
   "[Leo M. epist.]": "ad Theodosium imperatorem inter Leonis Magni epistulas"
  }, 
  [
   "422", 
   "462", 
   "", 
   "CONC. S II 3,1 p. 15,29"
  ]
 ], 
 "[PS. LACT.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "LACT."
  ]
 ], 
 "VICT. TONN.": [
  "Victor Tonnennensis", 
  {
   "chron.": "chronica"
  }, 
  [
   "500", 
   "599", 
   "episcopus", 
   ""
  ]
 ], 
 "MART.": [
  "M. Valerius Martialis", 
  {
   "epigr.": "epigrammaton (vel spectaculorum) liber"
  }, 
  [
   "40", 
   "104", 
   "ex Hispania Tarraconensi Bilbilitanus", 
   ""
  ]
 ], 
 "ORIENT.": [
  "Orientius", 
  {
   "comm.": "commonitorium", 
   "carm. app.": "carminum minorum, quae Orientio vix recte adscripta sunt, appendix"
  }, 
  [
   "370", 
   "450", 
   "poeta christianus (fortasse episcopus Ausciorum, civitatis Aquitaniae)", 
   ""
  ]
 ], 
 "PACIAN.": [
  "Pacianus", 
  {
   "bapt.": "sermo de baptismo", 
   "epist.": "epistulae contra Novatianos", 
   "paraen.": "paraenesis ad paenitentiam"
  }, 
  [
   "300", 
   "393", 
   "episcopus Barcinonensis", 
   ""
  ]
 ], 
 "FANN.": [
  "C. Fannius M. f.", 
  {
   "orationis c. C. Gracchum fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm.": "orationis c. C. Gracchum fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm.", 
   "hist.": "librorum historicorum (sc. annalium; vix attribuendi sunt alteri C. Fannio) fragmenta"
  }, 
  [
   "-170", 
   "-120", 
   "", 
   ""
  ]
 ], 
 "PS. PETR. CHRYS.": [
  "Pseudo-Petrus Chrysologus", 
  {
   "serm. Migne suppl. 3": "sermones alibi editi, e. g. apud Migne suppl. 3", 
   "serm.": "sermones collectionis Felicianae spurii"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PARM.": [
  "Parmenianus", 
  {
   "fragmenta servata apud AVG. c. Parm.": "fragmenta servata apud AVG. c. Parm."
  }, 
  [
   "300", 
   "399", 
   "episcopus Carthaginiensis", 
   ""
  ]
 ], 
 "PS. CYPR.": [
  "Pseudo-Cyprianus", 
  {
   "pudic.": "de bono pudicitiae", 
   "adv. Iud.": "adversus Iudaeos", 
   "laud. mart.": "de laude martyrii", 
   "pasch.": "de pascha computus", 
   "Iud. incred.": "ad Vigilium episcopum de Iudaica incredulitate (i. Celsi cuiusdam epistula)", 
   "singul. cler.": "de singularitate clericorum", 
   "or.": "orationes (sc. preces, quae sec. exempla quaedam graeca confectae sunt)", 
   "epist. 4": "epistulae quattuor ab Hartel collectae", 
   "aleat.": "de aleatoribus", 
   "mont.": "de montibus Sina et Sion", 
   "exhort. paen.": "exhortatio de paenitentia (sc. collectio locorum e sacris scripturis excerptorum)", 
   "[merced.]": "[merced.]", 
   "[abus.]": "de duodecim abusivis saeculi", 
   "cena": "cena Cypriani q. d.", 
   "ad Novat.": "ad Novatianum", 
   "spect.": "de spectaculis", 
   "tract.": "tractatus de centesima, de sexagesima, de tricesima (sc. mercede; respicitur Matth. 13,8)", 
   "rebapt.": "de rebaptismate"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. SORAN.": [
  "Pseudo-Soranus (scripta perperam Sorano tributa)", 
  {
   "puls.": "de pulsibus (\u03c0\u03b5\u03c1\u1f76 \u03c3\u03c6\u03c5\u03b3\u03bc\u1f78\u03bd) libellus", 
   "praef.": "praefatio", 
   "quaest. med.": "quaestiones medicinales", 
   "epit.": "epitome SORANI in cod. Laurent", 
   "dol. matric.": "capitulum de dolore matricis", 
   "[isag.]": "in artem medendi isagoge"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. TERT.": [
  "Pseudo-Tertullianus", 
  {
   "execr.": "de execrandis gentium diis fragmentum", 
   "haer.": "adversus omnes haereses"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. CHROMAT.": [
  "epistulae Chromatio et Heliodoro suppositae", 
  {
   "[Ps. Hier. epist.]": "inter epistulas Hieronymo suppositas epist."
  }, 
  [
   "600", 
   "625", 
   "", 
   ""
  ]
 ], 
 "CHAR. $1": [
  "Flavius Sosipater Charisius", 
  {
   "artis grammaticae quae exstant": "artis grammaticae quae exstant"
  }, 
  [
   "300", 
   "399", 
   "grammaticus", 
   ""
  ]
 ], 
 "VITR.": [
  "Vitruvius", 
  {
   "de architectura": "de architectura"
  }, 
  [
   "-80", 
   "-15", 
   "", 
   ""
  ]
 ], 
 "AVDAX": [
  "Audax", 
  {
   "epistula ad Augustinum": "epistula ad Augustinum"
  }, 
  [
   "300/399", 
   "400/499", 
   "", 
   ""
  ]
 ], 
 "MACEDON.": [
  "Macedonius", 
  {
   "Aug. epist.": "epistulae ad Augustinum"
  }, 
  [
   "400", 
   "499", 
   "vicarius Africae", 
   ""
  ]
 ], 
 "PS. CENS.": [
  "", 
  {
   "frg.": "fragmentum Censorini quod vocatur (perperam erat librariis genuini opusculi pars)"
  }, 
  [
   "200", 
   "299", 
   "", 
   ""
  ]
 ], 
 "LAEV.": [
  "Laevius", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "100", 
   "99", 
   "poeta", 
   ""
  ]
 ], 
 "VATIN.": [
  "P. Vatinius", 
  {
   "epistulae ad Ciceronem": "epistulae ad Ciceronem"
  }, 
  [
   "-95", 
   "-42", 
   "", 
   ""
  ]
 ], 
 "PS. ATHAN.": [
  "Pseudo-Athanasius", 
  {
   "in symb.": "enarratio in symbolum apostolorum", 
   "Lucif. epist.": "epistulae ad Luciferum", 
   "[pasch.]": "[pasch.]", 
   "ad mon.": "exhortatio ad monachos vel de observationibus monachorum", 
   "epist. Pers.": "epistula ad Persarum episcopum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEM. $1": [
  "Terentius Clemens", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "TARQVIT. PRISC.": [
  "Tarquitius Priscus", 
  {
   "ostentarii arborarii fragmenta servata apud MACR. Sat.": "ostentarii arborarii fragmenta servata apud MACR. Sat."
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "MARCIAN.": [
  "Aelius Marcianus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "150", 
   "250", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "ALBINVS": [
  "Albinus <Epicus>", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "300", 
   "400", 
   "", 
   ""
  ]
 ], 
 "HYG.": [
  "Hyginus", 
  {
   "astr.": "astronomica", 
   "fab.": "fabulae", 
   "geneal.": "genealogiae"
  }, 
  [
   "100", 
   "199", 
   "mythographus", 
   ""
  ]
 ], 
 "HOMER.": [
  "Homerus latinus vel Ilias latina (Baebio) Italico cuidam ascripta (sc. Iliados epitome latina)", 
  {}, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "MACR.": [
  "Macrobius Ambrosius Theodosius", 
  {
   "somn.": "commentarii in Ciceronis somnium Scipionis", 
   "exc. gramm.": "excerpta quaedam ex opere grammatico de differentiis et societatibus graeci latinique verbi", 
   "Sat.": "Saturnaliorum quae exstant"
  }, 
  [
   "385", 
   "430", 
   "vir clarissimus et inlustris", 
   ""
  ]
 ], 
 "PROP.": [
  "Sex. Propertius", 
  {
   "elegiae": "elegiae"
  }, 
  [
   "-48", 
   "-15", 
   "", 
   ""
  ]
 ], 
 "P. SCAEV.": [
  "P. Mucius Scaevola", 
  {
   "fragm. servatum apud CIC. dom.": "fragm. servatum apud CIC. dom."
  }, 
  [
   "-180", 
   "-115", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "POMPIL.": [
  "Pompilius", 
  {
   "trag.": "tragoediae", 
   "[epigr.]": "[epigr.]"
  }, 
  [
   "0", 
   "99", 
   "grammaticus?", 
   "PAPIN. epigr. Varro ling. 7,28 et VARRO Men. 356"
  ]
 ], 
 "[IMP. AVG.]": [
  "", 
  {
   "[Mart.]": "imperatorum Romanorum reliquiae, e. g. Augustus, carmen servatum apud MART."
  }, 
  [
   "-63", 
   "14", 
   "", 
   "AVGVSTVS Mart."
  ]
 ], 
 "[PVP.]": [
  "Pupius", 
  {
   "[epigr.]": "epigramma"
  }, 
  [
   "", 
   "", 
   "", 
   "CARM. Schol. Hor. epist."
  ]
 ], 
 "[EVSEB.]": [
  "Eusebius Pamphili", 
  {
   "[epist. Athan.]": "epistulae duae (sc. ad Alexandrum et ad Euphrationem) e graeco versae (fragmenta), vol. III Opitz"
  }, 
  [
   "260", 
   "340", 
   "episcopus Caesariensis", 
   ""
  ]
 ], 
 "PS. ORSIES.": [
  "Pseudo-(H)orsiesius", 
  {
   "cogit.": "de sex cogitationibus sanctorum libellus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PALLAD.": [
  "Palladius Rutilius Taurus Aemilianus", 
  {
   "opus agriculturae": "opus agriculturae"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "EVSEB. EMES.": [
  "Eusebius <Emesenus>", 
  {
   "serm.": "sermones", 
   "[mart.]": "sermo de martyribus"
  }, 
  [
   "295", 
   "359", 
   "episcopus", 
   "serm. 6,32"
  ]
 ], 
 "TIMAS.": [
  "Timasius et Iacobus", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "Q. CIC.": [
  "Q. Tullius Cicero", 
  {
   "carm. frg.": "carminis fragm.", 
   "epistulae ad Tironem et ad M. fratrem": "epistulae ad Tironem et ad M. fratrem", 
   "pet.": "commentariolum petitionis (sive de petitione consulatus) ad M. fratrem"
  }, 
  [
   "-102", 
   "-43", 
   "Marci frater", 
   ""
  ]
 ], 
 "VAGELL.": [
  "Vagellius", 
  {
   "carm. frg.": "carminum fragm. servatum apud SEN. nat."
  }, 
  [
   "0", 
   "100", 
   "", 
   ""
  ]
 ], 
 "MART. CAP.": [
  "Martianus Minneius Felix Capella Carthaginiensis", 
  {
   "de nuptiis Philologiae et Mercurii": "de nuptiis Philologiae et Mercurii"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "IVST. VRGELL.": [
  "Iustus Vrgellitanus", 
  {
   "ad Serg.": "epistula ad Sergium episcopum", 
   "epist.": "epistulae", 
   "ad Iust.": "epistula ad Iustum diaconum", 
   "in cant.": "in cantica canticorum explicatio mystica (expositio)", 
   "serm.": "sermo in natale sancti Vincentii"
  }, 
  [
   "450", 
   "550", 
   "episcopus Vrgellitanus Hispanus", 
   ""
  ]
 ], 
 "LVCIVS": [
  "Lucius episcopus et socii", 
  {
   "Cypr. epist.": "epistula ad Cyprianum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CIC.": [
  "M. Tullius Cicero", 
  {
   "div.": "de divinatione", 
   "rep. frg.": "librorum de re publica incertorum fragm.", 
   "Arch.": "pro A. Licinio Archia poeta oratio", 
   "Rab. perd.": "pro C. Rabirio perduellionis reo orationis quae exstant", 
   "dom.": "de domo sua ad pontifices oratio", 
   "Rab. Post.": "pro C. Rabirio Postumo oratio", 
   "Planc.": "pro Cn. Plancio oratio", 
   "Q. Rosc.": "pro Q. Roscio Gallo comoedo oratio (mutila)", 
   "orat.": "orator (ad M. Brutum)", 
   "Pis.": "in L. Calpurnium Pisonem oratio", 
   "div. in Caec.": "in Q. Caecilium Nigrum oratio, quae divinatio dicitur", 
   "frg. inc.": "incertorum librorum fragmenta", 
   "Cato": "Cato maior de senectute", 
   "Balb.": "pro L. Cornelio Balbo oratio", 
   "rep.": "librorum de re publica quae exstant", 
   "Quinct.": "pro P. Quinctio oratio", 
   "Vatin.": "in P. Vatinium testem interrogatio", 
   "Deiot.": "pro rege Deiotaro oratio", 
   "Font.": "pro M. Fonteio orationis quae exstant", 
   "Att.": "epistulae ad Atticum", 
   "de orat.": "de oratore", 
   "opt. gen.": "de optimo genere oratorum", 
   "Lael.": "Laelius de amicitia", 
   "Verr.": "in C. Verrem orationes sex", 
   "epist. frg.": "epistularum fragmenta a scriptoribus servata", 
   "Tull.": "pro M. Tullio orationis quae exstant", 
   "ad Q. fr.": "epistulae ad Quintum fratrem", 
   "Phil.": "in M. Antonium orationes Philippicae", 
   "Mur.": "pro L. Murena oratio", 
   "Arat. frg.": "Arateorum fragm.", 
   "Lig.": "pro Q. Ligario oratio", 
   "ac.": "Academici libri ab ipso Cicerone postea retractati", 
   "top.": "topica", 
   "[facet. dict.]": "Ciceronis facete dicta ab aliis collecta", 
   "Marcell.": "pro M. Claudio Marcello oratio", 
   "Flacc.": "pro L. Valerio Flacco oratio", 
   "Mil.": "pro T. Annio Milone oratio", 
   "Caecin.": "pro A. Caecina oratio", 
   "frg.": "incertae sedis fragmenta", 
   "leg. agr.": "de lege agraria orationum quae exstant", 
   "Cluent.": "pro A. Cluentio Habito oratio", 
   "Brut.": "Brutus (sc. de claris oratoribus)", 
   "ad Brut.": "epistulae ad M. Iunium Brutum", 
   "Catil.": "in L. Sergium Catilinam orationes", 
   "Arat.": "Arati Phain\u00f3mena versa atque retractata", 
   "parad.": "paradoxa Stoicorum", 
   "fat.": "de fato quae exstant", 
   "progn. frg.": "prognostica", 
   "p. red. ad Quir.": "post reditum ad Quirites (cum populo gratias egit) oratio", 
   "Tim.": "Timaei Platonici versionis fragmenta", 
   "or. frg.": "orationum deperditarum fragmenta", 
   "fam.": "epistulae ad familiares", 
   "fin.": "de finibus bonorum et malorum", 
   "Manil.": "pro lege Manilia (de imperio Cn. Pompei) oratio", 
   "Cael.": "pro M. Caelio Rufo oratio", 
   "nat. deor.": "de natura deorum", 
   "phil. frg.": "librorum philosophicorum (et aliorum quorundam oratione soluta conscriptorum) deperditorum fragmenta", 
   "Tusc.": "Tusculanae disputationes", 
   "off.": "de officiis", 
   "S. Rosc.": "pro Sex. Roscio Amerino oratio", 
   "Scaur.": "pro M. Aemilio Scauro orationis quae exstant", 
   "leg.": "librorum de legibus quae exstant", 
   "har. resp.": "de haruspicum responso oratio", 
   "Sest.": "pro P. Sestio oratio", 
   "prov.": "de provinciis consularibus oratio", 
   "part.": "partitiones oratoriae", 
   "carm. frg.": "carminum (praeter Aratea) fragmenta vel quae exstant", 
   "inv.": "rhetorici libri qui vocantur de inventione", 
   "Sull.": "pro P. Cornelio Sulla oratio", 
   "p. red. in sen.": "post reditum in senatu (cum senatui gratias egit) oratio", 
   "frg. Hier. epist.": "fragmenta, quibus lacuna inter \u00a75 et 6 hians ex parte saltem expletur, e. g. fragm. servatum apud HIER. epist."
  }, 
  [
   "-106", 
   "-43", 
   "r\u00f6mischer Redner und Schriftsteller, cos. 63 v. Chr.", 
   ""
  ]
 ], 
 "CLEDON.": [
  "Cledonius", 
  {
   "ars grammatica (in Donati artes exstantes)": "ars grammatica (in Donati artes exstantes)"
  }, 
  [
   "400", 
   "499", 
   "grammaticus", 
   ""
  ]
 ], 
 "LVP.": [
  "Lupus", 
  {
   "epist.": "epistula ad Thalasium episcopum Andecavensem"
  }, 
  [
   "383", 
   "487", 
   "episcopus Trecensis et Euphronius episcopus Augustodunensis", 
   ""
  ]
 ], 
 "PAVL. MED.": [
  "Paulinus Mediolanensis", 
  {
   "vita Ambr.": "vita Ambrosii episcopi Mediolanensis", 
   "adv. Cael.": "libellus adversum Caelestium Zosimo papae datus", 
   "[bened. 11,2]": "de benedictionibus patriarcharum libellus"
  }, 
  [
   "350", 
   "450", 
   "diaconus", 
   ""
  ]
 ], 
 "VIGIL. THAPS.": [
  "Vigilius Thapsensis", 
  {
   "c. Eutych.": "contra Eutychetem", 
   "c. Arian.": "contra Arianos, Sabellianos et Photinianos dialogus"
  }, 
  [
   "400", 
   "480", 
   "episcopus", 
   ""
  ]
 ], 
 "MANIL.": [
  "M. Manilius", 
  {
   "astronomica": "astronomica"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "LVCID.": [
  "Lucidus", 
  {
   "Faust. Rei. epist.": "epistula ad Faustum Reiensem et alios"
  }, 
  [
   "400", 
   "499", 
   "presbyter", 
   ""
  ]
 ], 
 "LVCIAN.": [
  "Lucianus", 
  {
   "Cypr. epist.": "epistula ad Celerinum"
  }, 
  [
   "350", 
   "395", 
   "", 
   ""
  ]
 ], 
 "LVCC.": [
  "L. Lucceius", 
  {
   "epistula ad Ciceronem": "epistula ad Ciceronem"
  }, 
  [
   "-100", 
   "-43", 
   "", 
   ""
  ]
 ], 
 "[SISEBVT.]": [
  "Sisebutus", 
  {
   "carmen de eclipsibus solis et lunae": "carmen de eclipsibus solis et lunae"
  }, 
  [
   "550", 
   "621", 
   "rex Gothorum", 
   ""
  ]
 ], 
 "ANIAN.": [
  "An(n)ianus Celedensis", 
  {
   "Chrysost. laud. Paul.": "versio homiliarum 7 Iohannis Chrysostomi super Pauli apostoli laudibus", 
   "Chrysost. hom.": "versio homiliarum 25 priorum Iohannis Chrysostomi in Matthaeum"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "IOVIN.": [
  "Iovinianus", 
  {
   "verba ab Hieronymo allata": "verba ab Hieronymo allata"
  }, 
  [
   "330", 
   "399", 
   "haereticus", 
   ""
  ]
 ], 
 "VOLCAC.": [
  "Volcacius Sedigitus", 
  {
   "carm. frg.": "liber de poetis"
  }, 
  [
   "-200", 
   "-101", 
   "", 
   ""
  ]
 ], 
 "CAELEST.": [
  "Caelestius Pelagianus", 
  {
   "Aug. perf. iust.": "operum reliquiae ab Augustino servatae"
  }, 
  [
   "350", 
   "431", 
   "", 
   ""
  ]
 ], 
 "MALL. THEOD.": [
  "Flavius Mallius Theodorus", 
  {
   "de metris": "de metris"
  }, 
  [
   "350", 
   "450", 
   "grammaticus", 
   ""
  ]
 ], 
 "[VICTORIN.]": [
  "", 
  {
   "[leg. dom.]": "versus Victorini cuiusdam de lege domini"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EVFRAS.": [
  "Eufrasius", 
  {
   "epistula ad Ruricium": "epistula ad Ruricium"
  }, 
  [
   "450", 
   "515", 
   "episcopus Arvernus", 
   ""
  ]
 ], 
 "[REG. FRANC.]": [
  "", 
  {
   "[reg. Franc.]": "generatio regum (Francorum; vulgo 'Fr\u00e4nkische V\u00f6lkertafel')"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[PS. MACAR.]": [
  "Pseudo-Macarius Aegyptius", 
  {
   "[reg.]": "[reg.]", 
   "[epist.]": "epistula ad monachos"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALL.": [
  "Callistratus", 
  {
   "fragmenta in digesta servata": "fragmenta in digesta servata"
  }, 
  [
   "50", 
   "150", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "SEPT. SER.": [
  "Septimius Serenus", 
  {
   "carm. frg.": "opuscula (ruralia)"
  }, 
  [
   "100", 
   "199", 
   "", 
   ""
  ]
 ], 
 "FLORENT.": [
  "Florentinus", 
  {
   "dig.": "fragmenta in digesta (et alibi) servata"
  }, 
  [
   "100", 
   "200", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "[PS. MATTH.]": [
  "Pseudo-Mattheus", 
  {
   "[euang.]": "euangelium apocryphum, sc. liber de ortu beatae Mariae et infantia salvatoris"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRESB.": [
  "presbyteri Romani", 
  {
   "Cypr. epist.": "epistula ad Cyprianum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GRACCHAN.": [
  "M. Iunius Gracchanus", 
  {
   "de potestatibus, fragm. servatum apud PLIN. nat.": "de potestatibus, fragm. servatum apud PLIN. nat."
  }, 
  [
   "-150", 
   "-50", 
   "Antiquar (?)", 
   ""
  ]
 ], 
 "POLYCARP.": [
  "Polycarpus", 
  {
   "ad Philipp.": "epistula ad Philippenses latine versa"
  }, 
  [
   "69", 
   "155", 
   "episcopus Smyrnaei", 
   ""
  ]
 ], 
 "MARCELL. $1": [
  "Flavius Marcellinus", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "413", 
   "tribunus et notarius", 
   ""
  ]
 ], 
 "MARIAN.": [
  "Marianus", 
  {
   "carm. frg.": "carminis, sc. Lupercalium (?), fragmentum"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "MARCELL. $3": [
  "Vlpius Marcellus", 
  {
   "dig.": "fragmenta in digesta (et alibi) servata"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "MARCELL. $2": [
  "M. Claudius Marcellus", 
  {
   "epistula ad Ciceronem": "epistula ad Ciceronem"
  }, 
  [
   "-95", 
   "-45", 
   "cos. 51 v. Chr.", 
   ""
  ]
 ], 
 "[ANON.]": [
  "", 
  {
   "[de grad.]": "[de grad.]"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIRT.": [
  "A. Hirtius", 
  {
   "epistula ad Ciceronem": "epistula ad Ciceronem", 
   "Gall.": "liber 8 Caesaris commentariorum belli Gallici libris septem ab Hirtio additus"
  }, 
  [
   "-90", 
   "-43", 
   "Caesaris familiaris", 
   ""
  ]
 ], 
 "MAR. VICTOR": [
  "Claudius Marius Victor(ius)", 
  {
   "praef.": "praefatio (precatio)", 
   "aleth.": "alethia"
  }, 
  [
   "400", 
   "499", 
   "rhetor Massiliensis", 
   ""
  ]
 ], 
 "VARRO": [
  "M. Terentius Varro Reatinus", 
  {
   "carm. frg.": "carminum fragmenta, e. g. fragm. servatum apud GELL.", 
   "Men.": "saturarum Menippearum fragmenta", 
   "ling.": "de lingua latina", 
   "rust.": "res rusticae", 
   "frg.": "operum pedestrium deperditorum fragmenta, e. g. fragm. servatum apud NON."
  }, 
  [
   "-116", 
   "-27", 
   "", 
   ""
  ]
 ], 
 "ANNIVS": [
  "T. Annius Luscus", 
  {
   "orationis in Ti. Gracchum fragm. servatum apud FEST.": "orationis in Ti. Gracchum fragm. servatum apud FEST."
  }, 
  [
   "-200", 
   "-101", 
   "cos. 153?", 
   ""
  ]
 ], 
 "SECVNDIN.": [
  "Secundinus Manichaeus", 
  {
   "epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "HERMOG.": [
  "Hermogenianus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "250", 
   "350", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "VINC. VICT.": [
  "Vincentius Victor", 
  {
   "fragmenta servata apud AVG. anim.": "fragmenta servata apud AVG. anim."
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "IVVENC.": [
  "C. Vettius Aquilinus Iuvencus", 
  {
   "euangelia": "euangelia"
  }, 
  [
   "250", 
   "350", 
   "presbyter Hispanus", 
   ""
  ]
 ], 
 "PS. OROS.": [
  "Pseudo-Orosius", 
  {
   "epist.": "epistula ad Augustinum de haeresibus"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "PS. RVFIN.": [
  "Pseudo-Rufinus (scripta Rufino vix recte tributa)", 
  {
   "[praef. in\u00a0proph.]": "[praef. in\u00a0proph.]", 
   "Ios. bell. Iud.": "Flavii Iosephi libri de bello Iudaico latine versi", 
   "[in\u00a0Am.]": "commentarii in prophetas minores iam Iuliano episcopo Aeclanensi ascribuntur", 
   "Clement.": "incerti interpretis additamentum ad RVFIN. Clement.", 
   "[in\u00a0Ioel]": "[in\u00a0Ioel]", 
   "[in psalm.]": "commentarius in psalmos", 
   "fid.": "liber de fide", 
   "[in\u00a0Os.]": "[in\u00a0Os.]"
  }, 
  [
   "350", 
   "450", 
   "", 
   "IVLIAN. in Am."
  ]
 ], 
 "GREG. TVR.": [
  "(Georgius Florentius) Gregorius Turonensis", 
  {
   "Franc.": "historiae, sc. historia Francorum", 
   "glor. conf.": "in gloria confessorum (e numero librorum 7 miraculorum)", 
   "[Thom.]": "[Thom.]", 
   "vit. patr.": "de vita patrum", 
   "in psalm.": "tractatus psalterii (commentarii in psalmos) fragmenta", 
   "glor. mart.": "in gloria martyrum (e numero librorum 7 miraculorum)", 
   "Mart.": "de virtutibus Martini (sc. episcopi Turonensis; opus e numero librorum 7 miraculorum)", 
   "Iul.": "de virtutibus Iuliani (e numero librorum 7 miraculorum)", 
   "Andr.": "de miraculis Andreae apostoli", 
   "stell.": "de cursu stellarum ratio, qualiter ad officium (sc. monasticum) implendum debeat observari", 
   "dorm.": "passio martyrum VII dormientium apud Ephesum"
  }, 
  [
   "538", 
   "594", 
   "episcopus", 
   ""
  ]
 ], 
 "CONSENT.": [
  "Consentius", 
  {
   "epistulae ad Augustinum": "epistulae ad Augustinum"
  }, 
  [
   "400", 
   "499", 
   "presbyter", 
   ""
  ]
 ], 
 "AVR.": [
  "Aurelius Carthaginiensis", 
  {
   "epist.": "epistula ad omnes episcopos per Byzacenam et Arzugitanam provinciam constitutos"
  }, 
  [
   "350", 
   "430", 
   "episcopus", 
   ""
  ]
 ], 
 "PS. VEN. FORT.": [
  "Pseudo-Venantius Fortunatus", 
  {
   "[vita Remed.]": "vita Remedii", 
   "carm. app.": "carminum spuriorum appendix", 
   "vita Med.": "vita Medardi"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CET. FAV.": [
  "M. Cetius Faventinus", 
  {
   "artis architectonicae privatis usibus adbreviatus liber (sc. epitome Vitruvii)": "artis architectonicae privatis usibus adbreviatus liber (sc. epitome Vitruvii)"
  }, 
  [
   "200", 
   "299", 
   "", 
   ""
  ]
 ], 
 "FEL.": [
  "Felix Manichaeus", 
  {
   "verba ab Augustino allata": "verba ab Augustino allata"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "[GALL. PLAC.]": [
  "Aelia Galla Placidia Augusta", 
  {
   "[Leo M. epist.]": "epistulae duae, sc. inter Leonis Magni epistulas"
  }, 
  [
   "390", 
   "450", 
   "", 
   "CONC. S II 3,1"
  ]
 ], 
 "MET. NVM.": [
  "Q. Caecilius Metellus Numidicus", 
  {
   "or. frg.": "orationum fragmenta a scriptoribus servata"
  }, 
  [
   "-150", 
   "-91", 
   "", 
   "e. g. fragm. apud GELL."
  ]
 ], 
 "PHILARG.": [
  "Iunius Philargyrius (Filagrius?)", 
  {
   "praef. rec. I": "praefatio sive vita Vergiliana (recensio I)", 
   "Verg. ecl.": "explanatio in bucolica Vergilii"
  }, 
  [
   "400", 
   "499", 
   "grammaticus", 
   ""
  ]
 ], 
 "AQVILA $1": [
  "Aquila Romanus", 
  {
   "de figuris sententiarum et elocutionis": "de figuris sententiarum et elocutionis"
  }, 
  [
   "200", 
   "299", 
   "rhetor", 
   ""
  ]
 ], 
 "[PS. PHOEBAD.]": [
  "", 
  {
   "[fid.]": "[fid.]"
  }, 
  [
   "", 
   "", 
   "", 
   "GREG. ILIB. fid."
  ]
 ], 
 "VRAN.": [
  "Vranius", 
  {
   "epist.": "epistula de obitu Paulini Nolani"
  }, 
  [
   "350", 
   "450", 
   "presbyter", 
   ""
  ]
 ], 
 "HILARVS": [
  "Hilarus", 
  {
   "ad Pulch.": "epistula, quam scripsit Hilarus tunc diaconus ad Pulcheriam Augustam (exstat versio graeca)", 
   "Victor. pasch.": "epistula, quam scripsit Hilarus tunc archidiaconus ad Victorium Aquitanum"
  }, 
  [
   "400", 
   "468", 
   "papa", 
   ""
  ]
 ], 
 "FLAV.": [
  "Flavius", 
  {
   "hymn.": "hymnus"
  }, 
  [
   "500", 
   "591", 
   "episcopus Cabilonensis?", 
   ""
  ]
 ], 
 "[EGID. MESS.]": [
  "", 
  {
   "[libell.]": "libellus vel epistula petitoria ab (A)egidio et Messiano oblata Symmacho papae"
  }, 
  [
   "", 
   "", 
   "", 
   "EPIST. Arel. 29"
  ]
 ], 
 "PS. HOR.": [
  "Pseudo-Horaz", 
  {
   "versus spurii HOR. sat.": "versus spurii HOR. sat."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEO M.": [
  "Leo Magnus", 
  {
   "epist. epistulae": "diverse", 
   "serm. app.": "sermonum (sc. spuriorum) appendix", 
   "[epist. app. 8]": "appendix ad Leonis epistulas a Migne editas, pars octava (de conc. Constantinop. a. 450)", 
   "serm.": "sermones"
  }, 
  [
   "400", 
   "461", 
   "papa", 
   ""
  ]
 ], 
 "CVRIO AVUS": [
  "C. Scribonius Curio avus", 
  {
   "orationis pro Fulvio fragm. servatum apud CIC. inv.": "orationis pro Fulvio fragm. servatum apud CIC. inv."
  }, 
  [
   "-150", 
   "-50", 
   "Altersgenosse des C. Sempronius Gracchus; 120 v. Chr. Praetor", 
   ""
  ]
 ], 
 "[IVLIAN.]": [
  "Iulianus", 
  {
   "[Leo M. epist. app. 6 p. 1244B]": "epistula ad Leonem imperatorem e graeco versa, edita in appendice ad Leonis Magni epistulas"
  }, 
  [
   "400", 
   "499", 
   "episcopus Coensis", 
   "CONC. S II 5 p. 66,39"
  ]
 ], 
 "VICT. VIT.": [
  "Victor Vitensis", 
  {
   "historia persecutionis Africanae provinciae": "historia persecutionis Africanae provinciae", 
   "[not.]": "[not.]"
  }, 
  [
   "400", 
   "490", 
   "episcopus", 
   ""
  ]
 ], 
 "PHILOCAL.": [
  "Furius Dionysius Philocalus (Fil-)", 
  {
   "fast. Dec. 31": "fasti ad diem 31 mensis Decembris (codicibus traditi)"
  }, 
  [
   "300", 
   "399", 
   "", 
   "(Inscr. Ital. XIII 2 p. 261)"
  ]
 ], 
 "CEREAL.": [
  "Cerealis <Castelloripensis>", 
  {
   "contra Maximinum Arianum": "contra Maximinum Arianum"
  }, 
  [
   "400", 
   "480", 
   "episcopus Castelloripensis", 
   ""
  ]
 ], 
 "BIBAC.": [
  "M. Furius Bibaculus", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "-103", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "VERVS": [
  "imp. Verus", 
  {
   "Fronto": "epistulae ad Frontonem"
  }, 
  [
   "150", 
   "219", 
   "", 
   ""
  ]
 ], 
 "SCROFA": [
  "Cn. Tremelius Scrofa", 
  {
   "de agri cultura": "de agri cultura"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   "cuiusdam de agri cultura operis fragm. servatum apud COLVM."
  ]
 ], 
 "[EVTYCH.]": [
  "", 
  {
   "epistulae, quam Eutyches haereticus ad Leonem Magnum miserat,versio altera": "epistulae, quam Eutyches haereticus ad Leonem Magnum miserat,versio altera"
  }, 
  [
   "", 
   "", 
   "", 
   "CONC. S II 4 p. 150,33"
  ]
 ], 
 "MAVRIC.": [
  "Iunius Mauricianus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "CASSIAN.": [
  "Iohannes Cassianus", 
  {
   "c. Nest.": "de incarnatione domini contra Nestorium", 
   "inst.": "de institutis coenobiorum et de octo principalium vitiorum remediis", 
   "conl.": "conlationes (sc. dialogi cum monachis Aegyptiis)"
  }, 
  [
   "360", 
   "435", 
   "presbyter Massiliensis", 
   ""
  ]
 ], 
 "PETRON. BONON.": [
  "Petronius", 
  {
   "serm.": "sermones duo"
  }, 
  [
   "350", 
   "450", 
   "episcopus Bononiensis (an Veronensis?)", 
   ""
  ]
 ], 
 "LVTAT.": [
  "Q. Lutatius Catulus pater", 
  {
   "epigr.": "epigrammata"
  }, 
  [
   "-150", 
   "-87", 
   "", 
   ""
  ]
 ], 
 "SVLPICIA $1": [
  "Sulpicia", 
  {
   "sat.": "satira q. d. sive conquestio de statu rei publicae et temporibus Domitiani"
  }, 
  [
   "401", 
   "500", 
   "<Satirica>", 
   ""
  ]
 ], 
 "SVLPICIA $2": [
  "Sulpicia", 
  {
   "elegiae una cum TIB. traditae": "elegiae una cum TIB. traditae"
  }, 
  [
   "-100", 
   "-1", 
   "Dichterin im Corpus Tibullianum", 
   ""
  ]
 ], 
 "AVGVRIN.": [
  "Sentius Augurinus", 
  {
   "carm.": "carmen"
  }, 
  [
   "50", 
   "150", 
   "", 
   ""
  ]
 ], 
 "RVRIC.": [
  "Ruricius", 
  {
   "epist.": "epistulae"
  }, 
  [
   "450", 
   "508", 
   "episcopus Lemovicinus", 
   ""
  ]
 ], 
 "EVOD.": [
  "Euodius <Uzalitanus>", 
  {
   "fid.": "de fide contra Manichaeos", 
   "Aug. epist.": "epistulae ad Augustinum datae", 
   "epist. ad Val.": "epistula ad Valentinum abbatem Hadrumetinum"
  }, 
  [
   "350", 
   "424", 
   "episcopus Vzalitanus Africae proconsularis", 
   ""
  ]
 ], 
 "MESSALLA $1": [
  "M. Valerius Messalla Corvinus", 
  {
   "or. frg.": "orationum fragmenta a scriptoribus servata"
  }, 
  [
   "-64", 
   "8", 
   "", 
   "e. g. fragm. apud FEST."
  ]
 ], 
 "POMP. $1": [
  "Pompeius (Maurus)", 
  {
   "commentum artis Donati": "commentum artis Donati"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "CONSENT. $1": [
  "Consentius", 
  {
   "artis grammaticae quae exstant": "artis grammaticae quae exstant"
  }, 
  [
   "400", 
   "499", 
   "grammaticus", 
   ""
  ]
 ], 
 "ANVLIN.": [
  "Anul(l)inus", 
  {
   "epistula ad Constantinum Magnum": "epistula ad Constantinum Magnum"
  }, 
  [
   "150", 
   "250", 
   "procos. Africae", 
   ""
  ]
 ], 
 "PLIN. $3": [
  "", 
  {
   "phys.": "physica Plinii q. d."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLIN. $2": [
  "Plinius Secundus <Iunior>", 
  {
   "med.": "de medicina libri III"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLIN. $1": [
  "C. Plinius Caecilius Secundus (vulgo Plinius minor)", 
  {
   "epist.": "epistulae", 
   "paneg.": "panegyricus"
  }, 
  [
   "61", 
   "115", 
   "", 
   ""
  ]
 ], 
 "CONSTANT.": [
  "imp. Constantinus Magnus", 
  {
   "epist. ad Opt. Porf.": "epistula ad Optatianum Porfyrium (spuria sec. Polara)"
  }, 
  [
   "270", 
   "337", 
   "", 
   ""
  ]
 ], 
 "PERS.": [
  "A. Persius Flaccus", 
  {
   "saturae": "saturae"
  }, 
  [
   "34", 
   "62", 
   "", 
   ""
  ]
 ], 
 "FRONTO $1": [
  "", 
  {
   "carm. frg.": "Frontonis cuiusdam fragm. carminis servatum apud CONSENT. gramm. V"
  }, 
  [
   "", 
   "", 
   "anderer Autor als M. Cornelius Fronto (?)", 
   ""
  ]
 ], 
 "LAVREA": [
  "Tullius Laurea", 
  {
   "epigr.": "epigramma in fontes salubres Ciceronianos"
  }, 
  [
   "-100", 
   "-1", 
   "Ciceronis libertus", 
   ""
  ]
 ], 
 "IOH. TOMIT.": [
  "Iohannes Tomitanus", 
  {
   "haer.": "de duabus haeresibus Nestorianorum et Eutychianistarum"
  }, 
  [
   "450", 
   "550", 
   "episcopus Scytha", 
   ""
  ]
 ], 
 "EVSEB. CAES.": [
  "Eusebius Pamphili Caesariensis", 
  {
   "ad Carp.": "epistula ad Carpianum bis e graeco versa"
  }, 
  [
   "260", 
   "340", 
   "episcopus", 
   ""
  ]
 ], 
 "HADR.": [
  "imp. Hadrianus", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "76", 
   "138", 
   "", 
   ""
  ]
 ], 
 "DYNAM.": [
  "Dynamius", 
  {
   "vita Max.": "vita sancti Maximi episcopi Reiensis"
  }, 
  [
   "450", 
   "550", 
   "patricius", 
   ""
  ]
 ], 
 "PS. CAES. AREL.": [
  "", 
  {
   "vid.": "de viduitate servanda"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "HIPPOCR.": [
  "Hippocrates Cos corpusque Hippocratici", 
  {
   "[cib.]": "[cib.]", 
   "mul.": "de morbis mulierum", 
   "progn.": "prognosticum", 
   "aer.": "de aere aquis locis", 
   "[diaet.]": "[diaet.]", 
   "num. sept.": "de numeris septenariis", 
   "aphor.": "aphorismi", 
   "vict.": "de victu"
  }, 
  [
   "-460", 
   "-370", 
   "medicus", 
   "scripta e graeco versa"
  ]
 ], 
 "PS. AVR. VICT.": [
  "Pseudo-Aurelius Victor", 
  {
   "orig.": "origo gentis Romanae"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "CAES. AREL.": [
  "Caesarius Arelatensis", 
  {
   "reg. mon.": "regula monachorum", 
   "testam.": "testamentum", 
   "epist. de hum.": "epistula de humilitate ad monachos", 
   "reg. virg.": "regula virginum", 
   "[suggest.]": "suggestio", 
   "[libell.]": "libellus Symmacho papae oblatus (sc. epistula altera petitoria) nunc non nisi altera nota notatur", 
   "grat.": "sententia de gratia (contra eos, qui dicunt quare aliis det deus gratiam, aliis non det)", 
   "serm.": "sermones (quos Caesarius magna ex parte e scriptoribus vetustioribus excerpsit)", 
   "serm. Misc. Dekkers": "sermo, quem praebent Miscellanea Dekkers", 
   "in apoc.": "in Iohannis apocalypsim expositio", 
   "epist. ad virg.": "epistulae ad virgines (sc. sanctimoniales)", 
   "brev.": "breviarium adversus haereticos", 
   "serm. app.": "sermonum appendix (frustula dubia)", 
   "trin.": "de mysterio sanctae trinitatis (opusculum in fine mutilum)", 
   "epist. ad Ruric.": "epistula ad Ruricium episcopum"
  }, 
  [
   "470", 
   "542", 
   "episcopus", 
   ""
  ]
 ], 
 "MAECEN.": [
  "C. Cilnius Maecenas", 
  {
   "carm. frg.": "carminum fragmenta", 
   "epist.": "fragmenta operum oratione soluta conscriptorum a scriptoribus servata, e. g. fragm. apud SEN. epist."
  }, 
  [
   "-70", 
   "-8", 
   "", 
   ""
  ]
 ], 
 "VITAL.": [
  "Vitalis et Tonantius (vix Constantius)", 
  {
   "epist.": "epistula ad Capreolum episcopum Carthaginiensem"
  }, 
  [
   "350", 
   "450", 
   "monachi Hispani", 
   ""
  ]
 ], 
 "PROSP.": [
  "Prosper Tiro Aquitanus", 
  {
   "epigr.": "epigrammata ex sententiis Augustini", 
   "sent.": "liber sententiarum (sc. ex Augustini operibus delibatarum)", 
   "chron. I": "epitoma chronicorum, vol. I", 
   "auct. de grat.": "praeteritorum sedis apostolicae episcoporum auctoritates de gratia dei", 
   "resp. ad Gall.": "pro Augustino responsiones ad capitula obiectionum Gallorum calumniantium", 
   "epitaph.": "epitaphium Nestorianae et Pelagianae haereseon", 
   "in psalm.": "expositio in psalmos 100\u2014150", 
   "resp. ad Vinc.": "pro Augustino responsiones ad capitula obiectionum Vincentianarum", 
   "c. coll.": "de gratia dei et libero arbitrio contra collatorem", 
   "epist. 2,20": "epistula ad Rufinum quendam", 
   "carm. de ingrat.": "carmen de ingratis", 
   "epist. 1,9": "epistula ad Augustinum", 
   "resp. ad Gen.": "pro Augustino responsiones ad excerpta Genuensium", 
   "epigr. in obtrect. Aug.": "epigrammata in obtrectatorem Augustini"
  }, 
  [
   "390", 
   "455", 
   "", 
   ""
  ]
 ], 
 "APP. CLAVD.": [
  "Appius Claudius Caecus", 
  {
   "carm. frg.": "carminum (sc. sententiarum) fragmenta"
  }, 
  [
   "-340", 
   "-273", 
   "", 
   ""
  ]
 ], 
 "VIRG.": [
  "Virgilius Maro", 
  {
   "epist.": "epistulae", 
   "epit.": "epitomae"
  }, 
  [
   "600", 
   "699", 
   "grammaticus", 
   ""
  ]
 ], 
 "TVRN.": [
  "Turnus", 
  {
   "sat. frg.": "saturarum fragm."
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "TAVRENT.": [
  "Taurentius", 
  {
   "ad Ruric. epist.": "epistula 3 inter epistulas ad Ruricium scriptas"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "PS. PROSP.": [
  "Pseudo-Prosper", 
  {
   "vocat. gent.": "de vocatione omnium gentium libri", 
   "carm. de prov.": "carmen de providentia dei", 
   "conf.": "confessio", 
   "[prom.]": "[prom.]"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EVAGR. GALL.": [
  "Euagrius Gallus", 
  {
   "alterc.": "altercatio legis inter Simonem Iudaeum et Theophilum Christianum"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "L. CAES.": [
  "L. Iulius Caesar", 
  {
   "Prisc. gramm.": "de auguralibus, fragmenta servata apud PRISC., e. g. gramm."
  }, 
  [
   "-110", 
   "-43", 
   "", 
   ""
  ]
 ], 
 "AVFVST.": [
  "Aufustius", 
  {
   "fragmenta a scriptoribus servata, e. g. fragm. apud PAVL. FEST.": "fragmenta a scriptoribus servata, e. g. fragm. apud PAVL. FEST."
  }, 
  [
   "-100", 
   "-1", 
   "grammaticus", 
   ""
  ]
 ], 
 "AVG.": [
  "Aurelius Augustinus", 
  {
   "gen. ad litt. imperf.": "de genesi ad litteram imperfectus liber", 
   "c. Iulian.": "contra Iulianum (sc. Aeclanensem episcopum Pelagianum eiusque libros ad Turbantium)", 
   "quaest. Dulc.": "de octo Dulcitii quaestionibus", 
   "in Gal.": "expositio epistulae ad Galatas", 
   "c. Priscill.": "ad Orosium contra Priscillianistas et Origenistas", 
   "c. Gaud.": "contra Gaudentium Donatistarum episcopum", 
   "un. eccl.": "epistula ad catholicos de secta Donatistarum (vulgo: de unitate ecclesiae)", 
   "serm.": "sermones genuini", 
   "c. Pelag.": "contra duas epistulas Pelagianorum (sc. Iuliani Aeclanensis episcopi et sociorum eius)", 
   "c. Iulian. op. imperf.": "opus imperfectum contra Iulianum (sc. Aeclanensem episcopum Pelagianum eiusque libros ad Florum)", 
   "catech. rud.": "de catechizandis rudibus", 
   "c. Faust.": "contra Faustum Manichaeum", 
   "in Rom.": "expositio quarundam propositionum ex epistula ad Romanos", 
   "c. Parm.": "contra epistulam Parmeniani", 
   "c. Arian.": "contra sermonem Arianorum", 
   "psalm. c. Don.": "psalmus contra partem Donati (sc. psalmus abecedarius)", 
   "urb. exc.": "de excidio urbis Romae", 
   "in Matth.": "quaestiones XVI in Matthaeum (sc. quae in codicibus sequuntur quaest. euang.)", 
   "fid. et symb.": "de fide et symbolo", 
   "util. cred.": "de utilitate credendi", 
   "bon. viduit.": "de bono viduitatis (epistula ad Iulianam viduam)", 
   "grat. Christ.": "de gratia Christi  (= contra Pelagium et Caelestium de gratia Christi et de peccato originali)", 
   "nupt. et concup.": "de nuptiis et concupiscentia ad Valerium", 
   "gen. ad litt.": "de genesi ad litteram", 
   "corrept.": "de correptione et gratia", 
   "immort.": "de immortalitate animae", 
   "nat. et grat.": "de natura et gratia", 
   "epist. Divj.": "epistulae collectionis a Divjak repertae", 
   "trin.": "de trinitate", 
   "op monach.": "de opere monachorum", 
   "perf. iust.": "de perfectione iustitiae hominis", 
   "mag.": "de magistro", 
   "cur. mort.": "de cura pro mortuis gerenda", 
   "c. Secundin.": "contra Secundinum Manichaeum eiusque epistulam", 
   "pat.": "de patientia", 
   "adv. Iud.": "adversus Iudaeos", 
   "in Rom. imperf.": "epistulae ad Romanos inchoata expositio (sc. imperfecta)", 
   "[bapt. c. Don.]": "de baptismo contra Donatistas tractatus", 
   "soliloq.": "soliloquia", 
   "pecc. mer.": "de peccatorum meritis et remissione", 
   "praed. sanct.": "de praedestinatione sanctorum", 
   "anim.": "de anima et eius origine (vel de natura et origine animae, sc. contra Vincentium Victorem)", 
   "spec.": "speculum (sc. praecepta e scripturis sacris excerpta; incipit: Quis ignorat)", 
   "cons. euang.": "de consensu euangelistarum", 
   "mor. Manich.": "de moribus Manichaeorum", 
   "contin.": "de continentia", 
   "pecc. orig.": "de peccato originali (= contra Pelagium et Caelestium de gratia Christi et de peccato originali)", 
   "c. Adim.": "contra Adimantum Manichaei discipulum", 
   "retract.": "retractationes", 
   "de mend.": "de mendacio", 
   "ord.": "de ordine", 
   "c. Maximin.": "contra Maximinum Arianorum episcopum", 
   "c. Emer.": "gesta cum Emerito Donatistarum episcopo", 
   "quaest. hept.": "quaestionum in heptateuchum", 
   "fid. et op.": "de fide et operibus", 
   "dialect.": "de dialectica", 
   "divers. quaest.": "de diversis quaestionibus", 
   "quaest. euang.": "quaestiones euangeliorum (sc. sec. Matthaeum et Lucam)", 
   "mus.": "de musica", 
   "epist. epistularum corpus ab editoribus compositum paulatimque auctum, a Maurinis in hunc ordinem redactum": "diverse", 
   "un. bapt.": "de unico baptismo contra Petilianum", 
   "c. epist. fund.": "contra epistulam Manichaei, quam vocant fundamenti", 
   "grat.": "de gratia et libero arbitrio", 
   "coll. c. Maximin.": "collatio cum Maximino Arianorum episcopo", 
   "conf.": "confessiones", 
   "mor. eccl.": "de moribus ecclesiae catholicae", 
   "spir. et litt.": "de spiritu et littera", 
   "c. mend.": "contra mendacium (sc. ad Consentium)", 
   "virg.": "de sancta virginitate", 
   "coll. c. Don.": "breviculus collationis cum Donatistis", 
   "bon. coniug.": "de bono coniugali", 
   "serm ad. Caesar.": "sermo ad Caesareensis ecclesiae plebem", 
   "de duab. anim.": "de duabus animabus (sc. contra Manichaeos)", 
   "lib. arb.": "de libero arbitrio", 
   "bapt.": "de baptismo (sc. contra Donatistas)", 
   "quaest. Simpl.": "de diversis quaestionibus ad Simplicianum", 
   "haer.": "de haeresibus ad Quodvultdeum", 
   "enchir.": "enchiridion vel ad Laurentium de fide, spe et caritate", 
   "in euang. Ioh.": "in Iohannis euangelium tractatus", 
   "gramm.": "ars sancti Augustini pro fratrum mediocritate breviata", 
   "vera relig.": "de vera religione", 
   "anth.": "anthologiae latinae carmina ea, quae non sine causa Augustino ascribuntur", 
   "adv. Don.": "post collationem adversus Donatistas (vel contra partem Donati post gesta)", 
   "loc. hept.": "locutiones in heptateuchum", 
   "rhet.": "de rhetorica", 
   "c. Cresc.": "contra Cresconium grammaticum partis Donati", 
   "c. Petil.": "contra litteras Petiliani (sc. Donatistae)", 
   "c. acad.": "contra academicos", 
   "mor.": "libri duo de moribus contra Manichaeos conscripti", 
   "octo quaest.": "de octo quaestionibus ex veteri testamento", 
   "persev.": "de dono perseverantiae", 
   "gest. Pelag.": "de gestis Pelagii", 
   "in psalm.": "in psalmos enarrationes (sc. sermones) quot in unum collectae sunt (aliae latent inter serm.)", 
   "beat. vit.": "de beata vita", 
   "div. daem.": "de divinatione daemonum", 
   "util. ieiun.": "de utilitate ieiunii", 
   "symb.": "de symbolo sermo ad catechumenos", 
   "doctr. christ.": "de doctrina christiana", 
   "adult. coniug.": "ad Pollentium de adulterinis coniugiis", 
   "nat. bon.": "de natura boni (sc. adversus Manichaeos)", 
   "quant. anim.": "de animae quantitate", 
   "gramm. V 524,36": "regulae (excerptae ex Augustini de grammatica libro deperdito?), vol. V p. 524 lin. 36 Keil", 
   "civ.": "de civitate dei", 
   "in epist. Ioh.": "in epistulam Iohannis ad Parthos tractatus", 
   "fid. invis.": "de fide rerum invisibilium", 
   "c. Fel.": "contra Felicem Manichaeum", 
   "in Iob": "adnotationes in Iob", 
   "de serm. dom.": "de sermone domini in monte", 
   "c. Fort.": "contra Fortunatum Manichaeum disputatio", 
   "gen. c. Manich.": "de genesi contra Manichaeos", 
   "c. adv. leg.": "contra adversarium legis et prophetarum", 
   "discipl.": "de disciplina christiana", 
   "agon.": "de agone christiano"
  }, 
  [
   "354", 
   "430", 
   "episcopus Hipponensis", 
   ""
  ]
 ], 
 "[BAVDON.]": [
  "Baudonivia", 
  {
   "vita S. Radegundis": "vita S. Radegundis"
  }, 
  [
   "550", 
   "650", 
   "", 
   ""
  ]
 ], 
 "DIOSC.": [
  "Pedianius Dioscurides", 
  {
   "gr.": "voces latinae, quae Dioscuridi graeco interpositae sunt", 
   "Vind.": "recensio Vindobonensis", 
   "de materia medica (opus graece conscriptum)": "de materia medica (opus graece conscriptum)", 
   "epist.": "epistula Dioscuridis libro 1 praemissa"
  }, 
  [
   "0", 
   "99", 
   "versio (immo retractatio) latina integra (Dioscorides Longobardus q. d.)", 
   ""
  ]
 ], 
 "ANNIAN.": [
  "Annianus", 
  {
   "carm. frg.": "Faliscorum carminum fragmenta"
  }, 
  [
   "100", 
   "199", 
   "", 
   ""
  ]
 ], 
 "SEV.": [
  "Severus", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "episcopus Milevitanus", 
   ""
  ]
 ], 
 "PS. EPHR.": [
  "Pseudo-Ephraem Syrus", 
  {
   "paenit.": "de paenitentia", 
   "serm. Cas. III": "sermo in transfigurationem domini, editus in Bibliothecae Casinensis vol. 3"
  }, 
  [
   "600", 
   "699", 
   "", 
   ""
  ]
 ], 
 "EVCHER.": [
  "Eucherius <Lugdunensis>", 
  {
   "form.": "formulae spiritalis intellegentiae", 
   "instr.": "instructiones", 
   "epist. ad Val.": "epistula paraenetica ad Valerianum cognatum de contemptu mundi et saecularis philosophiae", 
   "laud. her.": "de laude (h)eremi", 
   "[hom.]": "homiliae apud Migne 50 Eucherio tributae", 
   "epist. ad Salv.": "epistula ad Salvium episcopum", 
   "pass. Acaun.": "passio Acaunensium martyrum (sc. legionis Thebaeorum)"
  }, 
  [
   "400", 
   "450", 
   "episcopus Lugdunensis", 
   ""
  ]
 ], 
 "GRAEC.": [
  "Graecus", 
  {
   "ad Ruric. epist.": "epistula ad Ruricium"
  }, 
  [
   "400", 
   "499", 
   "episcopus Massiliensis", 
   ""
  ]
 ], 
 "PRISCILL.": [
  "Priscillianus", 
  {
   "can.": "canones in epistulas Paulinas (a Peregrino quodam episcopo retractati)", 
   "epist.": "epistulae fragm. servatum apud OROS. comm.", 
   "tract.": "tractatus"
  }, 
  [
   "340", 
   "385", 
   "episcopus haereticus Abilensis", 
   ""
  ]
 ], 
 "CLEM.": [
  "Clemens Romanus", 
  {
   "ad. Cor.": "epistula ad Corinthios genuina (sc. prior) e graeco versa"
  }, 
  [
   "50", 
   "97", 
   "papa", 
   ""
  ]
 ], 
 "HORTENS.": [
  "Q. Hortensius Hortalus", 
  {
   "or. frg.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm."
  }, 
  [
   "-114", 
   "-50", 
   "orator", 
   ""
  ]
 ], 
 "HIL.": [
  "Hilarius", 
  {
   "Aug. epist.": "epistulae ad Augustinum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[PAVL. STEPH.]": [
  "", 
  {
   "[reg.]": "[reg.]"
  }, 
  [
   "", 
   "", 
   "", 
   "REGVLA Paul. Steph."
  ]
 ], 
 "CLAVD. MAM.": [
  "Mamertus Claudianus", 
  {
   "epist.": "epistulae duae", 
   "anim.": "de statu animae"
  }, 
  [
   "400", 
   "473", 
   "presbyter Viennensis", 
   ""
  ]
 ], 
 "ENNOD.": [
  "Magnus Felix Ennodius", 
  {
   "carm.": "carmina", 
   "dict.": "dictiones", 
   "opusc.": "opuscula miscella", 
   "epist.": "epistulae"
  }, 
  [
   "473", 
   "521", 
   "episcopus Ticinensis", 
   ""
  ]
 ], 
 "DIDYM. $1": [
  "Didymus <Alexandrinus>", 
  {
   "theophan.": "opus quoddam de theophania (fragmentum; graecum periit)"
  }, 
  [
   "-50", 
   "50", 
   "opera latine versa (4. Jh. n. Chr.)", 
   ""
  ]
 ], 
 "[RAVENN.]": [
  "", 
  {
   "Ravennatis anonymi cosmographia": "Ravennatis anonymi cosmographia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FAV.": [
  "Favorinus <Arelatensis>", 
  {
   "orationis fragm. servatum apud GELL.": "orationis fragm. servatum apud GELL."
  }, 
  [
   "50", 
   "150", 
   "quidam vetus orator (de nomine certatur)", 
   ""
  ]
 ], 
 "SCAVR. $1": [
  "M. Aemilius Scaurus", 
  {
   "or. frg.": "orationum fragmenta, e. g. fragm. servatum apud CHAR. gramm.", 
   "hist.": "de vita sua"
  }, 
  [
   "-50", 
   "34", 
   "", 
   ""
  ]
 ], 
 "GREG. ANTIOCH.": [
  "Gregorius Antiochenus", 
  {
   "bapt.": "sermo de baptismo Christi e graeco versus"
  }, 
  [
   "300", 
   "399", 
   "presbyter", 
   ""
  ]
 ], 
 "ANTHIAN.": [
  "Furius Anthianus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "200", 
   "299", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "THEOD.": [
  "imp. Theodosius I", 
  {
   "epist. ad Auson.": "epistula ad Ausonium"
  }, 
  [
   "347", 
   "395", 
   "", 
   ""
  ]
 ], 
 "BITHYN.": [
  "Pompeius Bithynicus", 
  {
   "ad Ciceronem epistula": "ad Ciceronem epistula"
  }, 
  [
   "-108", 
   "-48", 
   "", 
   ""
  ]
 ], 
 "TERT. $1": [
  "Q. Septimius Florens Tertullianus Carthaginiensis", 
  {
   "scorp.": "scorpiace", 
   "virg. vel.": "de virginibus velandis", 
   "idol.": "de idololatria", 
   "monog.": "de monogamia", 
   "orat.": "de oratione", 
   "ieiun.": "de ieiunio adversus psychicos", 
   "Scap.": "ad Scapulam", 
   "frg.": "deperditorum operum fragmenta, e. g. fragm. servatum apud FVLG. serm. ant.", 
   "coron.": "de corona", 
   "adv. Iud.": "adversus Iudaeos", 
   "cult. fem.": "de cultu feminarum", 
   "patient.": "de patientia", 
   "spect.": "de spectaculis", 
   "mart.": "ad martyras", 
   "bapt.": "de baptismo", 
   "uxor.": "ad uxorem", 
   "anim.": "de anima", 
   "adv. Hermog.": "adversus Hermogenem", 
   "adv. Prax.": "adversus Praxean", 
   "apol.": "apologeticum", 
   "resurr.": "de resurrectione mortuorum", 
   "paenit.": "de paenitentia", 
   "pall.": "de pallio", 
   "pudic.": "de pudicitia", 
   "carn.": "de carne Christi", 
   "praescr.": "de praescriptione haereticorum", 
   "test. anim.": "de testimonio animae", 
   "castit.": "de exhortatione castitatis", 
   "nat.": "ad nationes", 
   "adv. Marc.": "adversus Marcionem", 
   "adv. Val.": "adversus Valentinianos", 
   "fug.": "de fuga in persecutione"
  }, 
  [
   "150", 
   "220", 
   "", 
   ""
  ]
 ], 
 "VINDIC.": [
  "Vindicianus (Afer)", 
  {
   "epit. alt.": "expositionis membrorum epitome anonyma altera uberior", 
   "epist. ad Valent.": "epistula ad imp. Valentinianum", 
   "gyn.": "eiusdem expositionis epitome anonyma (quae gynaecia vocatur)", 
   "med.": "medicorum placita", 
   "epist. ad Pentad.": "epistula ad Pentadium nepotem suum"
  }, 
  [
   "350", 
   "450", 
   "medicus", 
   ""
  ]
 ], 
 "LIC. IMBR.": [
  "Licinius Imbrex", 
  {
   "com.": "comoediarum fragmentum"
  }, 
  [
   "-200", 
   "-101", 
   "", 
   ""
  ]
 ], 
 "EVSTATH.": [
  "Eustathius <Africanus>", 
  {
   "Basilii Magni in hexaemeron homiliarum versio latina": "Basilii Magni in hexaemeron homiliarum versio latina"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "ARIVS": [
  "Ar(r)ius", 
  {
   "ad Euseb.": "ad Eusebium Nicomediensem epistula ter latine versa"
  }, 
  [
   "256", 
   "336", 
   "haeresiarcha", 
   ""
  ]
 ], 
 "DON.": [
  "Aelius Donatus", 
  {
   "Phorm.": "in Phormionis", 
   "Ter.": "commentum Terentii certe non ita a Donato conscriptum", 
   "mai.": "ars maior q. d.", 
   "epist.": "epistula ad L. Munatium vitae Vergilii in cod. Paris. praemissa", 
   "min.": "ars minor q. d.", 
   "vita Verg.": "vita Vergilii", 
   "Verg. ecl. praef.": "praefatio commentarii in Vergilii eclogas deperditi, quae sequitur in codicibus vitam Vergilii", 
   "de com.": "excerpta de comoedia q. d.", 
   "vita Ter.": "vita Terentii in codicibus commento Terentii praemissa", 
   "Phorm. praef.": "in Phormionem commenti praefatio"
  }, 
  [
   "320", 
   "380", 
   "grammaticus", 
   ""
  ]
 ], 
 "ANON. $1": [
  "anonymus", 
  {
   "de decem virg.": "quaestionum de euangeliis fragmentum de decem virginibus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. $2": [
  "anonymus (AMBROSIAST. ?)", 
  {
   "de mach. bell.": "de machinis bellicis (immo de rebus bellicis)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. $3": [
  "anonymus", 
  {
   "in Matth.": "fragmentum Matth. 24,20\u201444 exponens"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. $4": [
  "anonymus", 
  {
   "med. ed. Piechotta": "fragmentum operis ad medicinam pertinentis codice Vossiano Q. 9 saec. VI servatum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. $5": [
  "", 
  {
   "in Rom.": "in epistulam ad Romanos", 
   "in Hebr.": "in epistulam ad Hebraeos"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. $6": [
  "anonymus (AMBROSIAST. ?)", 
  {
   "de Petro apost.": "de Petro apostolo Christum negante fragmentum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. $7": [
  "anonymus", 
  {
   "c. philos.": "contra philosophos (i. e. altercationes Augustini et philosophorum paganorum)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. $8": [
  "anonymus", 
  {
   "proph.": "prophetiae ex omnibus libris (fere veteris et novi testamenti) collectae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. $9": [
  "anonymus", 
  {
   "de taxone": "de taxone"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AVR. VICT.": [
  "Sex. Aurelius Victor Afer", 
  {
   "Caes.": "historiae abbreviatae (vulgo: liber de Caesaribus)"
  }, 
  [
   "320", 
   "390", 
   "", 
   ""
  ]
 ], 
 "VERAN. $1": [
  "Veranus", 
  {
   "sententia de castitate sacerdotum": "sententia de castitate sacerdotum"
  }, 
  [
   "550", 
   "600", 
   "episcopus (sive Cabellitanus sive Lugdunensis)", 
   ""
  ]
 ], 
 "GAVDENT.": [
  "Gaudentius <Brixiensis)", 
  {
   "serm. praef.": "sermonum ab ipso Gaudentio collectorum praefatio ad Benivolum", 
   "serm.": "sermones et tractatus"
  }, 
  [
   "350", 
   "406", 
   "episcopus Brixiensis", 
   ""
  ]
 ], 
 "[L. CRASS.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "CRASS."
  ]
 ], 
 "POSTVM.": [
  "A. Postumius Albinus", 
  {
   "hist.": "annales"
  }, 
  [
   "-200", 
   "-101", 
   "", 
   ""
  ]
 ], 
 "FAVSTIN.": [
  "Faustinus Luciferianus", 
  {
   "fid.": "fides Theodosio imperatori oblata", 
   "trin.": "de trinitate (de fide contra Arianos)"
  }, 
  [
   "300", 
   "399", 
   "presbyter Romanus", 
   ""
  ]
 ], 
 "LAEL. FEL.": [
  "Laelius Felix", 
  {
   "fragm. servatum apud GELL.": "fragm. servatum apud GELL."
  }, 
  [
   "50", 
   "150", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "PS. QVINT.": [
  "Pseudo-Quintilianus", 
  {
   "decl.": "declamationes maiores"
  }, 
  [
   "100", 
   "199", 
   "", 
   ""
  ]
 ], 
 "MONTAN. $1": [
  "Montanus Toletanus", 
  {
   "epist.": "epistulae"
  }, 
  [
   "450", 
   "531", 
   "episcopus", 
   ""
  ]
 ], 
 "PS. IVVENC.": [
  "Pseudo-Iuvencus", 
  {
   "praef. pr.": "praefatio (sc. prior)"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "PRISC.": [
  "Priscianus", 
  {
   "rhet.": "praeexercitamina (praeexercitamenta?), sc. progymn\u00e1smata Hermogenis latine versa", 
   "III\u00a0430\u2014440": "=\u00a0PRISC. rhet.", 
   "II. \u00a0III\u00a01\u2014377:\u00a0": "institutiones grammaticae (interpolationes aliquot afferuntur nota PS. PRISC., e. g. PS. PRISC. gramm. II 193)", 
   "periheg.": "\u03c0\u03b5\u03c1\u03b9\u03ae\u03b3\u03b7\u03c3\u03b9\u03c2 Dionysii latine versa", 
   "Anast.": "carmen de laude Anastasii imperatoris", 
   "III\u00a0418\u2014429:": "de metris fabularum Terentii", 
   "III\u00a0443\u2014456:": "institutio de nomine et pronomine et verbo", 
   "III\u00a0459\u2014515:": "partitiones XII versuum Aeneidos prin\u00ad", 
   "gramm.": "gramm.", 
   "[metrol. II 86,1]": "[metrol. II 86,1]", 
   "III\u00a0405:": "epistula ad Symmachum", 
   "[fig. num. gramm. III 417]": "[fig. num. gramm. III 417]", 
   "III\u00a0406\u2014417:": "de figuris numerorum (olim PRISC. fig. num. vel PRISC. metrol.)"
  }, 
  [
   "450", 
   "550", 
   "grammaticus", 
   ""
  ]
 ], 
 "IVNIL.": [
  "Iunil(li)us Africanus", 
  {
   "instituta regularia divinae legis": "instituta regularia divinae legis"
  }, 
  [
   "500", 
   "553", 
   "", 
   ""
  ]
 ], 
 "OPT. PORF.": [
  "Publilius Optatianus Porfyrius", 
  {
   "[epigr. frg.]": "[epigr. frg.]", 
   "carm.": "carmen", 
   "[schol. carm.]": "[schol. carm.]", 
   "epist. ad Constant.": "epistula ad Constantinum Magnum"
  }, 
  [
   "260", 
   "335", 
   "", 
   "qui carmina figurata q. d. vel technopaegnia composuit"
  ]
 ], 
 "PATRIC.": [
  "Magonus Sucatus Patricius", 
  {
   "epist.": "epistula ad milites Corotici sive epistularum", 
   "dict.": "dicta Patricii", 
   "conf.": "confessio sive epistularum", 
   "frg. 3": "epistularum deperditarum fragm. 3"
  }, 
  [
   "400", 
   "461", 
   "apostolus Hibernorum", 
   ""
  ]
 ], 
 "[PS. ANTON. MVSA]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "PS. HIPPOCR. ad Maecen."
  ]
 ], 
 "MOD.": [
  "Modestinus", 
  {
   "anth.": "carmen in anthologiam latinam receptum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOPHIL.": [
  "Theophilus", 
  {
   "inst. Iust.": "institutionum Iustiniani (INST. Iust.) paraphrasis graeca"
  }, 
  [
   "500", 
   "550", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "STILO": [
  "L. Aelius Stilo Praeconinus", 
  {
   "fragmenta, e. g. fragm. servatum apud FEST.": "fragmenta, e. g. fragm. servatum apud FEST."
  }, 
  [
   "-154", 
   "-74", 
   "grammaticus", 
   ""
  ]
 ], 
 "IVV.": [
  "D. Iunius Iuvenalis", 
  {
   "saturarum libri V": "saturarum libri V"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "[SPART.]": [
  "Aelius Spartianus, e numero scriptorum historiae Augustae fictorum", 
  {}, 
  [
   "117", 
   "284", 
   "", 
   "HIST. AVG."
  ]
 ], 
 "[TREB.]": [
  "Trebellius Pollio, e numero scriptorum historiae Augustae fictorum", 
  {}, 
  [
   "117", 
   "285", 
   "", 
   "HIST. AVG."
  ]
 ], 
 "ARNOB. IVN.": [
  "Arnobius iunior", 
  {
   "in Luc.": "expositiunculae in euangelium (Iohannis Matthaei Lucae)", 
   "in psalm.": "commentarii in psalmos", 
   "ad Greg.": "liber ad Gregoriam in palatio constitutam", 
   "confl.": "conflictus (sc. altercatio) Arnobii catholici cum Serapione Aegyptio haeretico"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "EVGRAPH.": [
  "Eugraphius", 
  {
   "Ter. Ad.": "commentum Terentii, in Adelphorum"
  }, 
  [
   "500", 
   "599", 
   "", 
   ""
  ]
 ], 
 "[FLAVIAN. ]": [
  "Flavianus", 
  {
   "Leo M. epist.": "epistulae duae ad Leonem Magnum bis e graeco versae, sc. inter illius epistulas"
  }, 
  [
   "400", 
   "449", 
   "episcopus Constantinopolitani", 
   "CONC. S II ..."
  ]
 ], 
 "CLAVD. DON.": [
  "Ti. Claudius Donatus", 
  {
   "epil.": "epilogi fragmentum", 
   "Aen.": "interpretationes Vergilianae, sc. Aeneidos", 
   "prooem.": "prooemium"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "PS. MAVRIC.": [
  "(Pseudo-) Mauricius", 
  {
   "strat.": "strategicon"
  }, 
  [
   "539", 
   "602", 
   "vix imperator Byzantinus", 
   ""
  ]
 ], 
 "CANDID.": [
  "Candidus <Arianus>", 
  {
   "gen. div.": "liber de generatione divina (sc. epistula prior sec. Henry/Hadot)"
  }, 
  [
   "350", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. CYRILL.": [
  "", 
  {
   "rec. II 8": "recensio II cap. 8", 
   "prol.": "prologus vel praefatio de ratione paschae Cyrillo Alexandrino perperam ascripta", 
   "rec. I 6": "recensio I cap. 6"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SVET.": [
  "C. Suetonius Tranquillus", 
  {
   "Otho": "de vita Caesarum lib. VII 2: Otho", 
   "Claud.": "de vita Caesarum lib. V: divus Claudius", 
   "Aug.": "de vita Caesarum lib. II: divus Augustus", 
   "Dom.": "de vita Caesarum lib. VIII 3: Domitianus", 
   "vita Crispi": "vita Passieni Crispi", 
   "vita Hor.": "vita Horatii", 
   "Nero": "de vita Caesarum lib. VI: Nero", 
   "Tit.": "de vita Caesarum lib. VIII 2: divus Titus", 
   "gramm.": "de grammaticis et rhetoribus cap. 1\u201424", 
   "vita Lucani": "vita Lucani", 
   "Vesp.": "de vita Caesarum lib. VIII 1: divus Vespasianus", 
   "rhet.": "de grammaticis et rhetoribus", 
   "Galba": "de vita Caesarum lib. VII 1: Galba", 
   "Vit.": "de vita Caesarum lib. VII 3: Vitellius", 
   "Cal.": "de vita Caesarum lib. IV: C. Caligula", 
   "vita Plin.": "vita Plinii maioris", 
   "Iul.": "de vita Caesarum lib. I: divus Iulius", 
   "[vita Verg.]": "[vita Verg.]", 
   "Tib.": "de vita Caesarum lib. III: Tiberius", 
   "vita Ter.": "vita Terentii", 
   "frg.": "fragmenta varia"
  }, 
  [
   "70", 
   "122", 
   "", 
   ""
  ]
 ], 
 "HESYCH.": [
  "Hesychius", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "433", 
   "episcopus Salonitanus", 
   ""
  ]
 ], 
 "FAV. EVL.": [
  "Favonius Eulogius", 
  {
   "disputatio de somnio Scipionis": "disputatio de somnio Scipionis"
  }, 
  [
   "350", 
   "450", 
   "rhetor Carthaginiensis", 
   ""
  ]
 ], 
 "FORTVN. AQVIL.": [
  "Fortunatianus <Aquileiensis>", 
  {
   "in euang.": "commentarii in euangelia (usque adhuc: in Matthaeum)"
  }, 
  [
   "300", 
   "400", 
   "episcopus Aquileiensis", 
   ""
  ]
 ], 
 "AVRELIAN.": [
  "Aurelianus", 
  {
   "reg. mon.": "regula ad monachos", 
   "reg. virg.": "regula ad virgines", 
   "app.": "appendix"
  }, 
  [
   "523", 
   "551", 
   "episcopus Arelatensis", 
   ""
  ]
 ], 
 "MESSALLA": [
  "M. Valerius Messalla Rufus", 
  {
   "fam. frg.": "de familiis", 
   "ausp. frg. Macr. Sat.": "de auspiciis"
  }, 
  [
   "-103", 
   "-26", 
   "augur", 
   "fragmenta a scriptoribus servata, e. g. fragm. apud MACR. Sat."
  ]
 ], 
 "VICTOR CAP.": [
  "Victor Capuanus", 
  {
   "frg. Spicil. Solesm. I": "fragmenta, e. g. fragm. editum apud Pitra, Spicilegium Solesmense I", 
   "harm. euang. praef.": "in harmoniam euangeliorum q. d. praefatio"
  }, 
  [
   "500", 
   "599", 
   "episcopus", 
   ""
  ]
 ], 
 "PASCHAS. $1": [
  "Paschasius Dumiensis", 
  {
   "verba patr.": "verba sive apopthegmata patrum"
  }, 
  [
   "500", 
   "584", 
   "", 
   ""
  ]
 ], 
 "MVMM.": [
  "Mummius", 
  {
   "Atell.": "Atellanarum fragmenta"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "HOR.": [
  "Q. Horatius Flaccus", 
  {
   "carm. saec.": "carmen saeculare", 
   "ars": "de arte poetica (epistula ad Pisones)", 
   "carm.": "carmina", 
   "epist.": "epistulae", 
   "epod.": "epodi (iambi)", 
   "sat.": "saturae (sermones)"
  }, 
  [
   "-65", 
   "-8", 
   "", 
   ""
  ]
 ], 
 "BENED.": [
  "Benedictus Nursinus", 
  {
   "reg.": "regula monachorum"
  }, 
  [
   "480", 
   "547", 
   "", 
   ""
  ]
 ], 
 "PASSIEN.": [
  "C. Sallustius Crispus Passienus", 
  {
   "or. frg.": "orationis fragm. servatum apud QVINT. inst."
  }, 
  [
   "-86", 
   "-34", 
   "", 
   ""
  ]
 ], 
 "SEV. MINOR.": [
  "Severus Minoricensis", 
  {
   "epistula ad omnem ecclesiam": "epistula ad omnem ecclesiam"
  }, 
  [
   "350", 
   "450", 
   "episcopus", 
   ""
  ]
 ], 
 "SVLLA": [
  "L. Cornelius Sulla", 
  {
   "hist.": "commentarii rerum gestarum"
  }, 
  [
   "-138", 
   "-78", 
   "", 
   ""
  ]
 ], 
 "GARG. MART.": [
  "Q. Gargilius Martialis", 
  {
   "med.": "medicinae ex oleribus et pomis", 
   "cur. boum": "curae boum", 
   "fragmenta ex eius opere vel operibus excerpta": "fragmenta ex eius opere vel operibus excerpta", 
   "pom.": "de arboribus pomiferis fragmenta codice Neapolitano rescripto servata (vel de hortis)"
  }, 
  [
   "200", 
   "299", 
   "Garten- und Arzneischriftsteller", 
   ""
  ]
 ], 
 "LIC. MVC.": [
  "C. Licinius Mucianus", 
  {
   "operis, quo mirabilia et al. narrantur, fragm. servatum apud PLIN. nat.": "operis, quo mirabilia et al. narrantur, fragm. servatum apud PLIN. nat."
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "[PS. MAR. MERC.]": [
  "Pseudo-Marius Mercator", 
  {
   "[Nest. epist.]": "Nestorii epistulae tres"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PASCASIN.": [
  "Pasc(h)asinus", 
  {
   "epist.": "epistula ad Leonem Magnum"
  }, 
  [
   "400", 
   "499", 
   "episcopus Lilybaetanus", 
   ""
  ]
 ], 
 "ASCON.": [
  "Q. Asconius Pedianus", 
  {
   "tog. cand.": "orationum Ciceronis enarrationis quae exstant (sc. in exstantes orationes pro T. Annio Milone, in L. Calpurnium Pisonem, pro Aemilio Scauro; in deperditas Corn(elianas duas), tog. cand.), in orationem in toga candida deperditam"
  }, 
  [
   "-9", 
   "76", 
   "", 
   ""
  ]
 ], 
 "PAVLA": [
  "Paula et Eustochium", 
  {
   "Hier. epist.": "epistula ad Marcellam"
  }, 
  [
   "368", 
   "420", 
   "", 
   ""
  ]
 ], 
 "PS. VICT. VIT.": [
  "Pseudo-Victor Vitensis", 
  {
   "hom.": "homilia de Cypriano episcopo", 
   "pass.": "passio septem monachorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COTTA": [
  "C. Aurelius Cotta", 
  {
   "orationis cuiusdam fragm. servatum apud CHAR. gramm.": "orationis cuiusdam fragm. servatum apud CHAR. gramm."
  }, 
  [
   "-124", 
   "-73", 
   "", 
   ""
  ]
 ], 
 "ISAAC": [
  "Isaac Iudaeus", 
  {
   "fid.": "de trinitate (fides Isatis; opusculum mutilum)"
  }, 
  [
   "840", 
   "932", 
   "Isaak (ben Salomon) Israeli, medicus et philosopus", 
   ""
  ]
 ], 
 "SEXTIL.": [
  "Sextilius Ena", 
  {
   "carm. frg.": "carminum fragm. servatum apud SEN. suas."
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "[HIL.]": [
  "", 
  {
   "[Leo M. epist.]": "[Leo M. epist.]"
  }, 
  [
   "", 
   "", 
   "", 
   "HILARVS ad Pulch."
  ]
 ], 
 "AMM.": [
  "Ammianus Marcellinus Antiochenus", 
  {
   "res gestae": "res gestae"
  }, 
  [
   "325", 
   "400", 
   "", 
   ""
  ]
 ], 
 "PIVS": [
  "imp. Antoninus Pius", 
  {
   "Fronto": "epistulae ad Frontonem"
  }, 
  [
   "86", 
   "161", 
   "", 
   ""
  ]
 ], 
 "GRAN. LIC.": [
  "Granius Licinianus", 
  {
   "operis historici fragmenta codice rescripto servata": "operis historici fragmenta codice rescripto servata"
  }, 
  [
   "100", 
   "199", 
   "historicus", 
   ""
  ]
 ], 
 "PS. MAX. TAVR.": [
  "Pseudo-Maximus", 
  {
   "bapt. 3": "de baptismo tractatus III", 
   "serm. app. 31": "sermones appendicis apud Migne 57 exstantis", 
   "serm. 113": "sermones CXVI apud Migne collecti", 
   "hom.": "homiliae", 
   "serm. Rev. B\u00e9n\u00e9d. 97,1987": "sermones III, quos edidit \u00c9taix", 
   "[serm. 7,4 M.]": "[serm. 7,4 M.]", 
   "sermones (a Mutzenbecher editi)": "sermones (a Mutzenbecher editi)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EVAGR.": [
  "Euagrius Antiochenus", 
  {
   "vita Anton.": "versio vel retractatio vitae Antonii monachi ab Athanasio"
  }, 
  [
   "300", 
   "393", 
   "", 
   ""
  ]
 ], 
 "PAVL. PETRIC.": [
  "Paulinus Petricordiae", 
  {
   "praef.": "praefatio", 
   "visit. nepot.": "de visitatione nepotuli sui", 
   "carm. praef.": "praefatio ad carmina minora", 
   "orant.": "de orantibus", 
   "Mart.": "de vita Martini episcopi"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "ARBON.": [
  "Arb(r)onius Silo (sc. pater)", 
  {
   "carm. frg.": "carminum fragmentum"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "VICTORIN. POETOV.": [
  "Victorinus Poetovionensis", 
  {
   "in apoc.": "commentarius in apocalypsin", 
   "fabr. mund.": "tractatus de fabrica mundi"
  }, 
  [
   "250", 
   "304", 
   "episcopus", 
   ""
  ]
 ], 
 "CYPR. GALL.": [
  "Cyprianus Gallus", 
  {
   "iud.": "heptateuchos q. d., sc. veteris testamenti libri nonnulli versibus redditi (servatus est heptateuchos, sc. gen., exod., lev., num., deut., Ios., iud. [mutil. in fine])", 
   "frg.": "deperditorum carminum fragmenta, quae quidem Peiper Cypriano Gallo ascripsit (partim falso)", 
   "[cena]": "cena Cypriani q. d. (v. PS. CYPR. cena) versibus reddita"
  }, 
  [
   "350", 
   "450", 
   "poeta", 
   ""
  ]
 ], 
 "PETR.": [
  "Petrus diaconus et alii", 
  {
   "Fulg. Rusp. epist.": "epistula ad Fulgentium et coepiscopos"
  }, 
  [
   "1107", 
   "1159", 
   "", 
   ""
  ]
 ], 
 "[PROCOP.]": [
  "", 
  {
   "[Ps. Hier. epist.]": "versio lat. epistulae Procopii Gazaei ad Hieronymum quendam (inter S. Hieronymi epistulas perperam receptae) olim iuxta textum gr. edita non iam affertur"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PORC. LIC.": [
  "Porcius Licinus", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-150", 
   "-50", 
   "", 
   ""
  ]
 ], 
 "EVCLID.": [
  "Euclides", 
  {
   "elem.": "elementa e graeco versa"
  }, 
  [
   "-299", 
   "-200", 
   "geometres", 
   ""
  ]
 ], 
 "[VICTORIN.] $2": [
  "", 
  {
   "[vita dom.]": "carmen de nativitate, vita, passione et resurrectione domini"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAESELL.": [
  "L. Caesellius Vindex", 
  {
   "fragmenta a scriptoribus servata, e. g. fragm. apud GELL.": "fragmenta a scriptoribus servata, e. g. fragm. apud GELL."
  }, 
  [
   "50", 
   "150", 
   "grammaticus", 
   ""
  ]
 ], 
 "MARTYR.": [
  "Martyrius", 
  {
   "de B muta et V vocali": "de B muta et V vocali"
  }, 
  [
   "450", 
   "550", 
   "Adamantii filius", 
   ""
  ]
 ], 
 "[VICTORIN.] $1": [
  "", 
  {
   "[Macc.]": "[Macc.]"
  }, 
  [
   "", 
   "", 
   "", 
   "PS. HIL. Macc. rec. B"
  ]
 ], 
 "SOL.": [
  "C. Iulius Solinus", 
  {
   "collectanea rerum memorabilium": "collectanea rerum memorabilium"
  }, 
  [
   "250", 
   "350", 
   "", 
   ""
  ]
 ], 
 "EPIPHAN. SCHOL.": [
  "Epiphanius Scholasticus", 
  {
   "Phil. Carp. in cant.": "Philonis Carpasiotae commentarius in canticum canticorum e graeco versus", 
   "Didym. in Iudam": "Didymi Alexandrini in epistulas canonicas (sc. catholicas q. d.) brevis enarratio e graeco versa atque retractata, in epistulae Iudae"
  }, 
  [
   "500", 
   "599", 
   "", 
   "versiones librorum graecorum iussu Cassiodori factae"
  ]
 ], 
 "SEV. NICAN.": [
  "Sevius Nicanor", 
  {
   "sat. frg.": "saturae fragm. servatum apud SVET. gramm."
  }, 
  [
   "-300", 
   "-101", 
   "", 
   ""
  ]
 ], 
 "SASERN.": [
  "Sasernae", 
  {
   "de agri cultura fragmenta, quae servavit VARRO rust.": "de agri cultura fragmenta, quae servavit VARRO rust."
  }, 
  [
   "-200", 
   "-101", 
   "pater et filius", 
   ""
  ]
 ], 
 "CASS. SEV.": [
  "Cassius Severus", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst."
  }, 
  [
   "-50", 
   "32", 
   "", 
   ""
  ]
 ], 
 "THESS. TRALL.": [
  "Thessalus <Trallianus>", 
  {
   "plant.": "de plantis duodecim signis et septem planetis subiectis (qui floruit aet. Neronis) tributi versio lat. antiqua"
  }, 
  [
   "0", 
   "99", 
   "medicus", 
   ""
  ]
 ], 
 "PS. DIONYS. ALEX.": [
  "(Pseudo-) Dionysius Alexandrinus", 
  {
   "epist.": "epistula"
  }, 
  [
   "", 
   "265", 
   "", 
   ""
  ]
 ], 
 "PLANC.": [
  "L. Munatius Plancus", 
  {
   "epistulae fere ad Ciceronem": "epistulae fere ad Ciceronem"
  }, 
  [
   "-87", 
   "-15", 
   "", 
   "v. CIC. fam."
  ]
 ], 
 "FENEST.": [
  "Fenestella", 
  {
   "fragmenta a scriptoribus servata": "fragmenta a scriptoribus servata"
  }, 
  [
   "-52", 
   "35", 
   "historicus", 
   ""
  ]
 ], 
 "TITVLVS": [
  "", 
  {
   "Hor. carm. 1,16 rec. Ps": "titulus recensionis Ps ad HOR. carm. 1,16", 
   "Mart.": "titulus vel lemma ad MART."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MANICH.": [
  "Manichaeus", 
  {
   "sc. operum a Mani eiusque sectatoribus anon. conscriptorum vel versorum fragmenta a scriptoribus servata, e. g. fragm. apud AVG. c. epist. fund.": "sc. operum a Mani eiusque sectatoribus anon. conscriptorum vel versorum fragmenta a scriptoribus servata, e. g. fragm. apud AVG. c. epist. fund."
  }, 
  [
   "216", 
   "277", 
   "", 
   ""
  ]
 ], 
 "PHILAGR.": [
  "Philagrius", 
  {
   "med.": "de medicina, versio Latina"
  }, 
  [
   "200", 
   "299", 
   "<Epirotes> medicus", 
   "fragmenta latina in Alexandri Tralliani versione latina"
  ]
 ], 
 "CHROMAT.": [
  "Chromatius", 
  {
   "serm.": "sermones", 
   "in Matth.": "tractatus in Matthaeum", 
   "[beat.]": "sermo de octo beatitudinibus"
  }, 
  [
   "345", 
   "407", 
   "episcopus Aquileiensis", 
   ""
  ]
 ], 
 "RABIR.": [
  "Rabirius", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "COMM.": [
  "Commodianus <Gazaeus>", 
  {
   "apol.": "carmen apologeticum q. d. (carmen de duobus populis)", 
   "instr.": "instructiones per litteras versuum primas (sc. acrostichidibus ornatae)"
  }, 
  [
   "200", 
   "299", 
   "poeta", 
   ""
  ]
 ], 
 "AVIAN.": [
  "Avianus", 
  {
   "praef.": "fabularum praefatio, sc. epistula dedicatoria", 
   "fab.": "fabulae", 
   "[apol.]": "fabularum apologi (olim etiam prologi nominabantur)"
  }, 
  [
   "250", 
   "350", 
   "poeta", 
   ""
  ]
 ], 
 "MAX. MADAVR.": [
  "Maximus Madaurensis", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "grammaticus paganus", 
   ""
  ]
 ], 
 "PS. IOH. MED.": [
  "(Pseudo-) Iohannes <Mediocris>", 
  {
   "hom.": "collectio homiliarum 31 per Chrysostomicarum editiones dispersarum"
  }, 
  [
   "", 
   "", 
   "episcopus Neapolitanus", 
   ""
  ]
 ], 
 "PAVL.": [
  "Iulius Paulus", 
  {
   "dig.": "fragmenta in digestis aliisve collectionibus servata", 
   "sent.": "sententiae"
  }, 
  [
   "150", 
   "250", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "CATO $1": [
  "M. Porcius Cato (sc. Vticensis)", 
  {
   "ad Ciceronem epistula": "ad Ciceronem epistula"
  }, 
  [
   "-95", 
   "-46", 
   "Urenkel des M. P. Cato Censorius, Gegner Caesars", 
   ""
  ]
 ], 
 "CORN. SEV.": [
  "Cornelius Severus", 
  {
   "carm. frg.": "carminum vel carminis fragmenta"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "CAES.": [
  "C. Iulius Caesar", 
  {
   "civ.": "commentarii belli civilis", 
   "carm. in Ter.": "carminum fragmentum, sc. versus in Terentium Afrum", 
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud GELL.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud GELL.", 
   "anal.": "de analogia, fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm.", 
   "Anticat.": "Anticato, fragmenta a scriptoribus servata, e. g. fragm. apud GELL.", 
   "epistulae una cum Ciceronis ad Atticum epistulis servatae": "epistulae una cum Ciceronis ad Atticum epistulis servatae", 
   "Gall.": "commentarii belli Gallici"
  }, 
  [
   "-100", 
   "-44", 
   "", 
   ""
  ]
 ], 
 "NERAT.": [
  "L. Neratius Priscus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "50", 
   "133", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "PS. PAVL. NOL.": [
  "Pseudo-Paulinus Nolanus", 
  {
   "exc. Bob.": "excerpta Bobiensia", 
   "epist. app.": "appendix epistularum Paulino Nolano suppositarum", 
   "carm.": "carmina spuria inter PAVL. NOL. carm.", 
   "carm. app.": "appendix carminum Paulino Nolano suppositorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IOH. MAXENT.": [
  "Iohannes Maxentius", 
  {
   "[c. Nest.]": "contra Nestorianos capitula", 
   "[fid.]": "professio brevissima catholicae fidei", 
   "[profess.]": "de Christo professio, sc. libelli fidei pars posterior (pars prior notabatur 'epist. ')", 
   "[ad Horm.]": "ad epistulam Hormisdae papae responsio", 
   "[epist.]": "epistula ad legatos sedis apostolicae, sc. libelli fidei pars prior (pars posterior notabatur 'profess. ')", 
   "[adunat.]": "adunationis ratio verbi dei ad propriam carnem", 
   "[dial.]": "dialogus contra Nestorianos", 
   "[c. Aceph.]": "contra Acephalos"
  }, 
  [
   "450", 
   "550", 
   "monachus Scytha", 
   "Conc. S IV 2 p. 14,22"
  ]
 ], 
 "NVMITOR.": [
  "Numitorius", 
  {
   "carm. frg.": "carminum (antibucolicon) fragmenta"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "PS. HIER.": [
  "Pseudo-Hieronymus", 
  {
   "[expos. in Ioh.]": "expositio (in) quattuor euangel., in Iohannem", 
   "chron. exord.": "exordium q. d. in uno alterove codice post HIER. chron. praef. insertum", 
   "praef. com.": "epistula ad Constantium, sc. praefatio lectionarii cuiusdam", 
   "[ad mon.]": "homilia ad monachos", 
   "tract.": "tractatus de psalm. 50", 
   "in Rom.": "ad Pelagii commentarium in Pauli apostoli epistulam ad Romanos", 
   "[in Iob]": "[in Iob]", 
   "Salom.": "explanatio de Salomone", 
   "doctr.": "homilia, 'in qua corruptio Doctrinae Apostolorum vituperatur'", 
   "Victorin. Poetov. in apoc.": "Victorini Poetovionensis commentarius in apocalypsin ab Hieronymo retractatus, recensio posterior", 
   "[in Marc.]": "commentarius in euangelium secundum Marcum", 
   "fid.": "fides Hieronymi", 
   "mon. Pachom.": "monita sancti Pachomii", 
   "epist. epistulae": "diverse", 
   "indic. de haer.": "indiculus de haeresibus", 
   "[expos. interl. in Ioh.]": "[expos. interl. in Ioh.]", 
   "monogr.": "de monogramma Christi"
  }, 
  [
   "400", 
   "599", 
   "", 
   ""
  ]
 ], 
 "PORPH.": [
  "Pomponius Porphyrio", 
  {
   "vita Hor.": "vita Horatii", 
   "commentum in HOR., e. g. in sat.": "commentum in HOR., e. g. in sat."
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "ASELL.": [
  "Sempronius Asellio", 
  {
   "hist.": "rerum gestarum fragmenta"
  }, 
  [
   "-159", 
   "-91", 
   "", 
   ""
  ]
 ], 
 "SEVERIN.": [
  "Severinus", 
  {
   "doctr.": "doctrina de sapientia"
  }, 
  [
   "301", 
   "399", 
   "episcopus (von K\u00f6ln?)", 
   ""
  ]
 ], 
 "DORCAT.": [
  "Dorcatius", 
  {
   "carm. frg.": "carminum fragmentum unicum"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "[VIGIL.]": [
  "", 
  {
   "[reg.]": "[reg.]"
  }, 
  [
   "", 
   "", 
   "", 
   "REGVLA orient."
  ]
 ], 
 "PS. PHILO": [
  "Pseudo-Philo", 
  {
   "antiq.": "libri antiquitatum biblicarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "STEPHAN.": [
  "Stephanus Larissenus et alii", 
  {
   "libelli tres ad Bonifatium papam": "libelli tres ad Bonifatium papam"
  }, 
  [
   "450", 
   "550", 
   "episcopus", 
   ""
  ]
 ], 
 "AT. CAP.": [
  "C. Ateius Capito", 
  {
   "fragmenta": "fragmenta"
  }, 
  [
   "-50", 
   "22", 
   "iurisconsultus", 
   "quibus scriptores ea tradentes Atei nomen addunt, e. g. fragm. apud MACR. Sat."
  ]
 ], 
 "LEPOR.": [
  "Leporius", 
  {
   "libellus emendationis (satisfactionis)": "libellus emendationis (satisfactionis)"
  }, 
  [
   "350", 
   "450", 
   "monachus Gallus", 
   ""
  ]
 ], 
 "ALBINOV.": [
  "Albinovanus <Pedo>", 
  {
   "carm.": "carminis fragmentum"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "NEPOTIAN.": [
  "Ianuarius Nepotianus", 
  {
   "epitomae Valerii Maximi quae exstant": "epitomae Valerii Maximi quae exstant"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "SEN.": [
  "L. Annaeus Seneca", 
  {
   "contr.": "controversiae", 
   "suas.": "suasoriarum liber"
  }, 
  [
   "-55", 
   "39", 
   "(Seneca rhetor, philosophi pater)", 
   ""
  ]
 ], 
 "BRVT. $1": [
  "D. Iunius Brutus Albinus", 
  {
   "epistulae ad Ciceronem, Brutum et Cassium": "epistulae ad Ciceronem, Brutum et Cassium"
  }, 
  [
   "-81", 
   "-43", 
   "", 
   ""
  ]
 ], 
 "BRVT. $2": [
  "M. Iunius Brutus", 
  {
   "de iure civili, fragm. servatum apud CIC. de orat.": "de iure civili, fragm. servatum apud CIC. de orat."
  }, 
  [
   "-200", 
   "-101", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "SCIP. MIN.": [
  "P. Cornelius Scipio Aemilianus Africanus minor", 
  {
   "or. frg.": "orationum fragmenta, e. g. fragm. servatum apud ISID. orig."
  }, 
  [
   "-185", 
   "-129", 
   "", 
   ""
  ]
 ], 
 "THEODERIC.": [
  "Theodericus", 
  {
   "praecept.": "praeceptum (sive edictum contra sacerdotes substantiae ecclesiae alienatores)"
  }, 
  [
   "451", 
   "526", 
   "rex Ostrogothorum", 
   ""
  ]
 ], 
 "GAIVS": [
  "Gaius", 
  {
   "dig.": "fragmenta operum (praeter inst.) in digesta servata", 
   "inst.": "institutiones", 
   "[epit.]": "[epit.]"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "[PS. THEOD.]": [
  "", 
  {
   "[hom.]": "homiliarum 5 et 6 Theodoto episcopo Ancyrano ascriptarum versio latina"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NEMES. $1": [
  "Nemesianus et socii", 
  {
   "Cypr. epist.": "epistula ad Cyprianum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. VARRO": [
  "Pseudo-Varro", 
  {
   "sent.": "sententiae"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "CALV.": [
  "C. Licinius Macer Calvus", 
  {
   "carm. frg.": "carminum fragmenta", 
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst."
  }, 
  [
   "-82", 
   "-47", 
   "", 
   ""
  ]
 ], 
 "EVSEB. MED.": [
  "Eusebius <Mediolanensis>", 
  {
   "epistula ad Leonem Magnum": "epistula ad Leonem Magnum"
  }, 
  [
   "400", 
   "475", 
   "episcopus", 
   ""
  ]
 ], 
 "AVIEN.": [
  "Rufius Festus Avien(i)us", 
  {
   "orb. terr.": "orbis terrae descriptio", 
   "carm. ad Flav.": "carmen ad Flavianum Myrmeicum", 
   "carm. ad Nort.": "carmen de se ad deam Nortiam", 
   "Arat.": "Arati Phain\u00f3mena latine versa et retractata", 
   "ora": "de ora maritima"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "ARRVNT.": [
  "L. Arruntius", 
  {
   "belli Punici historiarum fragmenta": "belli Punici historiarum fragmenta"
  }, 
  [
   "-100", 
   "-1", 
   "cos. 22", 
   ""
  ]
 ], 
 "THEOPHIL. ALEX.": [
  "Theophilus Alexandrinus", 
  {
   "praef.": "praefatio in computum paschalem (de observatione sanctae paschae)", 
   "epist.": "epistula ad imp. Theodosium"
  }, 
  [
   "350", 
   "412", 
   "episcopus", 
   ""
  ]
 ], 
 "IVL. HON.": [
  "Iulius Honorius", 
  {
   "cosmogr.": "cosmographia, sc. explanatio orbis terrarum depicti a discipulo quodam edita"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "LVCIL.": [
  "C. Lucilius", 
  {
   "saturarum fragmenta": "saturarum fragmenta"
  }, 
  [
   "-180", 
   "-103", 
   "", 
   ""
  ]
 ], 
 "RVST. HELP.": [
  "Rustic(i)us Helpidius (Domnulus)", 
  {
   "benef.": "carmen de Christi Iesu beneficiis", 
   "hist. testam.": "historiarum testamenti veteris et novi tristicha"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "PELAG.": [
  "scripta nonnulla Pelagio haeretico tributa", 
  {
   "[in Rom. prol.]": "[in Rom. prol.]", 
   "frg. Migne suppl. 1": "operum deperditorum fragm. apud Migne suppl. 1", 
   "Aug. grat. Christ.": "operum deperditorum fragmenta apud scriptores servata, e. g. fragm. servatum apud AVG. grat. Christ.", 
   "in Rom.": "expositio in epistulam Pauli ad Romanos", 
   "epist. ad Demetr.": "epistula ad Demetriadem", 
   "[in I Cor. argum.]": "[in I Cor. argum.]", 
   "[in Tit. argum.]": "[in Tit. argum.]", 
   "[indur.]": "[indur.]", 
   "[argum.]": "[argum.]"
  }, 
  [
   "", 
   "", 
   "", 
   "PRAEF. bibl. in epist. Paul."
  ]
 ], 
 "SEDAT.": [
  "Sedatus", 
  {
   "ad Ruric. epist.": "epistula 8 inter epistulas ad Ruricium scriptas", 
   "serm.": "sermones tres"
  }, 
  [
   "450", 
   "550", 
   "episcopus Nemausensis", 
   ""
  ]
 ], 
 "VIB. SEQ.": [
  "Vibius Sequester", 
  {
   "geogr.": "de fluminibus, fontibus, lacubus eqs. libellus geographicus"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "LICENT.": [
  "Licentius", 
  {
   "carm. ad Aug.": "carmen ad Augustinum"
  }, 
  [
   "370", 
   "450", 
   "Augustini familiaris", 
   ""
  ]
 ], 
 "PONTIAN.": [
  "Pontianus", 
  {
   "epist.": "epistula ad imp. Iustinianum"
  }, 
  [
   "500", 
   "599", 
   "episcopus Africanus", 
   ""
  ]
 ], 
 "CATVLL.": [
  "C. Valerius Catullus Veronensis", 
  {
   "carmina": "carmina"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "BALB.": [
  "L. Cornelius Balbus Gaditanus (sc. maior)", 
  {
   "ad Ciceronem epistulae": "ad Ciceronem epistulae"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "[ZACCH.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "CONSVLT. Zacch."
  ]
 ], 
 "SVLP. ALEX.": [
  "Sulpicius Alexander", 
  {
   "historia, fragm. servatum apud GREG. TVR. Franc.": "historia, fragm. servatum apud GREG. TVR. Franc."
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "DIOSC. $1": [
  "Dioscorus", 
  {
   "epistula ad Augustinum": "epistula ad Augustinum"
  }, 
  [
   "3/400", 
   "3/499", 
   "", 
   ""
  ]
 ], 
 "CASSIVS": [
  "Cassius quidam (Cassius Severus?)", 
  {
   "verba servata apud QVINT. inst.": "verba servata apud QVINT. inst."
  }, 
  [
   "-50", 
   "32", 
   "", 
   ""
  ]
 ], 
 "FELIX $1": [
  "Felix et socii", 
  {
   "epistula ad Cyprianum": "epistula ad Cyprianum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TREBAT.": [
  "C. Trebatius Testa", 
  {
   "de religionibus, de civili iure al. , fragmenta, e. g. fragm. servatum apud GELL.": "de religionibus, de civili iure al. , fragmenta, e. g. fragm. servatum apud GELL."
  }, 
  [
   "-84", 
   "4", 
   "", 
   ""
  ]
 ], 
 "MOD. $1": [
  "Herennius Modestinus", 
  {
   "dig.": "fragmenta in collectionibus antiquis (praecipue DIG.) servata", 
   "frg.": "fragmenta aliter servata"
  }, 
  [
   "185", 
   "250", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "[PS. HIL. AREL.]": [
  "Pseudo-Hilarius Arelatensis", 
  {
   "[in epist. canon.]": "tractatus in septem epistulas canonicas"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "BASIL.": [
  "Basilius Magnus", 
  {
   "hom.": "homiliae duae codicis Paris", 
   "[ad fil.]": "[ad fil.]", 
   "ad mon.": "admonitio ad monachos"
  }, 
  [
   "330", 
   "379", 
   "", 
   "PS. BASIL. ad fil."
  ]
 ], 
 "GVNDOB.": [
  "Gundobadus", 
  {
   "Alc. Avit. epist.": "epistula ad Alcimum Avitum"
  }, 
  [
   "474", 
   "516", 
   "Burgundionum rex", 
   ""
  ]
 ], 
 "MAX. TAVR.": [
  "Maximus (sc. maior) Taurinensis", 
  {
   "[hom. app.]": "homiliae tres appendicis", 
   "[serm. app.]": "[serm. app.]", 
   "[serm. 17]": "[serm. 17]", 
   "serm. Rev. B\u00e9n\u00e9d. 97,1987 p. 40": "sermonis genuini (?) fragm. nunc initio donatum, p. 40 Rev. B\u00e9n\u00e9d.", 
   "[cap. euang.]": "[cap. euang.]", 
   "[c. pag.]": "[c. pag.]", 
   "[serm. 113]": "[serm. 113]", 
   "[c. Iud.]": "[c. Iud.]", 
   "sermones (a Mutzenbecher collecti)": "sermones (a Mutzenbecher collecti)", 
   "[bapt.]": "[bapt.]", 
   "[hom.]": "[hom.]"
  }, 
  [
   "350", 
   "420", 
   "episcopus", 
   ""
  ]
 ], 
 "ROMVL.": [
  "Romulus (fiktiver Verfasser)", 
  {
   "Aesopus latinus": "Aesopus latinus", 
   "epist. Romul.": "epistula Romuli", 
   "epist. Aesop.": "epistula Aesopi", 
   "fab. 98,6 rec. vet.": "fabula 98 \u00a76 recensionis veteris"
  }, 
  [
   "399", 
   "499", 
   "", 
   ""
  ]
 ], 
 "ANON.": [
  "anonymus", 
  {
   "epistula ad Augustinum": "epistula ad Augustinum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TVBERO": [
  "Q. Aelius Tubero", 
  {
   "ad C. Oppium libri fragm. servatum apud GELL.": "ad C. Oppium libri fragm. servatum apud GELL.", 
   "hist.": "historiae"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "GRACCH. $1": [
  "Gracchus", 
  {
   "trag.": "tragoediarum fragmenta"
  }, 
  [
   "-50", 
   "50", 
   "poeta", 
   ""
  ]
 ], 
 "PS. NICET.": [
  "", 
  {
   "pasch.": "operis de ratione paschae recensio A"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LIV.": [
  "T. Livius Patavinus", 
  {
   "operis maximi historici ('ab urbe condita') quae exstant": "operis maximi historici ('ab urbe condita') quae exstant"
  }, 
  [
   "-59", 
   "17", 
   "", 
   ""
  ]
 ], 
 "VEG.": [
  "P. (Flavius) Vegetius Renatus", 
  {
   "mil.": "epitoma rei militaris", 
   "mulom.": "digesta artis mulomedicinae"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "PS. VERG.": [
  "", 
  {
   "Aen.": "versus Vergilii Aeneidos libro 1 praefixi"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "AVX.": [
  "Auxentius <Mediolanensis>", 
  {
   "epistula ad imperatores Valentinianum et Valentem": "epistula ad imperatores Valentinianum et Valentem"
  }, 
  [
   "300", 
   "374", 
   "episcopus Mediolanensis", 
   ""
  ]
 ], 
 "VEL.": [
  "Velius Longus", 
  {
   "de orthographia": "de orthographia"
  }, 
  [
   "50", 
   "150", 
   "grammaticus", 
   ""
  ]
 ], 
 "GRILL.": [
  "Grillius", 
  {
   "frg. Courc.": "fragmentum a Courcelle Grillio ascriptum", 
   "commentarii in CIC. inv. quae exstant": "commentarii in CIC. inv. quae exstant"
  }, 
  [
   "400", 
   "499", 
   "scriptor rhetoricus", 
   ""
  ]
 ], 
 "CINNA": [
  "C. Helvius Cinna", 
  {
   "carm.": "carmina"
  }, 
  [
   "-100", 
   "-44", 
   "", 
   ""
  ]
 ], 
 "PALLAD. $2": [
  "Palladius", 
  {
   "hist. mon.": "historiae monachorum sive Lausiacae latine versae"
  }, 
  [
   "364", 
   "430", 
   "episcopus Helenopolitanus", 
   ""
  ]
 ], 
 "PS. CELS.": [
  "Pseudo-Celsus", 
  {
   "epist.": "epistula ad Pullium Natalem"
  }, 
  [
   "-25", 
   "50", 
   "", 
   ""
  ]
 ], 
 "PALLAD. $1": [
  "Palladius", 
  {
   "c. Ambr. fol.": "contra Ambrosium fragmenta"
  }, 
  [
   "330", 
   "399", 
   "episcopus Ratiarensis", 
   ""
  ]
 ], 
 "NERO": [
  "imp. Nero", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "37", 
   "68", 
   "", 
   ""
  ]
 ], 
 "PS. PACIAN.": [
  "PS.-Pacianus", 
  {
   "sim. carn.": "liber de similitudine carnis peccati"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEP. $1": [
  "M. Aemilius Lepidus Porcina", 
  {
   "or. frg.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud PRISC. gramm. II"
  }, 
  [
   "-200", 
   "-101", 
   "", 
   ""
  ]
 ], 
 "APOLLIN.": [
  "Apollinaris <Valentinus>", 
  {
   "epistulae ad Alcimum Avitum": "epistulae ad Alcimum Avitum"
  }, 
  [
   "453", 
   "520", 
   "Valentiae episcopus frater Aviti", 
   ""
  ]
 ], 
 "[LVCVLENT.]": [
  "Luculentius", 
  {
   "commentarii in aliquot novi testamenti partes (immo collectio homiliarum de lectionibus liturgicis)": "commentarii in aliquot novi testamenti partes (immo collectio homiliarum de lectionibus liturgicis)"
  }, 
  [
   "850", 
   "950", 
   "", 
   ""
  ]
 ], 
 "PS. HOS.": [
  "", 
  {
   "sent.": "sententiae (doctrina) de observatione disciplinae dominicae Hosio (Ossio) episcopo suppositae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VLP.": [
  "Domitius Vlpianus", 
  {
   "reg.": "liber singularis regularum", 
   "dig.": "fragmenta in digestis aliisve collectionibus servata", 
   "frg. Spicil. Solesm. I": "fragmenta varia, e. g. fragm. editum apud Pitra, Spicilegium Solesmense I", 
   "frg. Vind.": "institutionum fragmenta Vindobonensia", 
   "disp. frg. IIB": "disputationum fragmenta Argentoratensia"
  }, 
  [
   "150", 
   "228", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "EPIPHAN.": [
  "Epiphanius <Constantiensis>", 
  {
   "[in cant.]": "[in cant.]", 
   "Avell.": "operis de XII gemmis rationalis summi sacerdotis epitoma latina (ne graecum quidem opus integrum exstat) magna ex parte servata in collect. Avellana", 
   "de mensur.": "de mensuris et ponderibus quae latine exstant"
  }, 
  [
   "315", 
   "403", 
   "episcopus Salaminis Cypri", 
   ""
  ]
 ], 
 "CORNVT.": [
  "L. Annaeus Cornutus", 
  {
   "fragmenta grammatica a scriptoribus servata, e. g. fragm. apud GELL.": "fragmenta grammatica a scriptoribus servata, e. g. fragm. apud GELL."
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "PS. AVG.": [
  "Pseudo-Augustinus", 
  {
   "or. trin.": "oratio in librum de trinitate", 
   "solut.": "solutiones diversarum quaestionum ab haereticis (sc. Arianis) obiectarum", 
   "sent.": "liber sententiarum XXI", 
   "[dial. quaest.]": "dialogus quaestionum", 
   "alterc.": "altercatio ecclesiae et synagogae", 
   "c. Fulg.": "contra Fulgentium Donatistam", 
   "[temp. barb.]": "[temp. barb.]", 
   "orat.": "sermo de oratione et eleemosyna", 
   "c. Felician.": "contra Felicianum Arianum de unitate trinitatis", 
   "reg.": "regulae monasticae", 
   "[catacl.]": "[catacl.]", 
   "frg. Migne": "fragmenta operis cuiusdam de unitate patris et filii et spiritus sancti servata ab Hincmaro", 
   "serm.": "sermones Augustino suppositi, qui ante a. 600 ab anonymis conscripti sunt", 
   "symb. Caspari Anecd.": "expositio super symbolum", 
   "[de esu agni]": "sermo de esu agni", 
   "epist. app.": "epistularum spuriarum appendix", 
   "[de Rustic.]": "sermo de Rusticiano subdiacono", 
   "quaest. test.": "quaestionum veteris et novi testamenti conscriptarum ab AMBROSIAST. recensiones duae (utraque contaminata; recensio q. d. tertia medii est aevi)", 
   "[de IV. fer.]": "[de IV. fer.]", 
   "[neoph. 4 ]": "ad neophytos sermones 2\u20144", 
   "[carit.]": "sermonis de caritate fragmentum", 
   "[neoph. 1]": "ad neophytos sermo primus", 
   "un. trin.": "de unitate sanctae trinitatis", 
   "[in Matth.]": "[in Matth.]", 
   "spec.": "de divinis scripturis sive speculum (incipit: In deuteronomio: audi Israhel, dominus deus tuus)", 
   "hypomn.": "hypomnesticon (vulgo hypognosticon) contra Pelagianos sive Caelestianos haereticos", 
   "praed. dei": "de praedestinatione dei", 
   "haer. app.": "appendix Augustini operis genuini de haeresibus", 
   "test. fid.": "testimonia fidei", 
   "[c. Iud. pag. Ar.]": "[c. Iud. pag. Ar.]", 
   "[in apoc.]": "[in apoc.]", 
   "comm.": "commonitorium, quomodo sit agendum cum Manichaeis qui convertuntur", 
   "[eleem.]": "sermo de generalitate eleemosynarum", 
   "categ.": "categoriae decem ex Aristotele decerptae vel tractatus de categoriis Aristotelis (paraphrasis q. d. Themistiana)", 
   "vit. christ.": "de vita christiana (Pelagii?)", 
   "praed. et grat.": "de praedestinatione et gratia", 
   "coll. c. Pasc.": "collatio cum Pascentio Ariano", 
   "[haer.]": "[haer.]", 
   "[symb.]": "[symb.]", 
   "[cant. nov.]": "[cant. nov.]", 
   "cons. mort.": "sermones de consolatione mortuorum", 
   "sobr.": "de sobrietate et castitate"
  }, 
  [
   "1050", 
   "1150", 
   "", 
   ""
  ]
 ], 
 "PAPIN. $1": [
  "Papinius", 
  {
   "epigr.": "epigrammation quod servavit VARRO ling."
  }, 
  [
   "40", 
   "96", 
   "", 
   ""
  ]
 ], 
 "PS. THOM.": [
  "Pseudo-Thomas", 
  {
   "apoc.": "apocalypsis", 
   "euang.": "euangelium sive tractatus de pueritia Iesu"
  }, 
  [
   "", 
   "", 
   "apostolus", 
   ""
  ]
 ], 
 "DARES": [
  "Dares Phrygius", 
  {
   "de excidio Troiae historia e graeco (quod periit) versa atque retractata": "de excidio Troiae historia e graeco (quod periit) versa atque retractata"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "OP.": [
  "Arianus qu\u012bdam???", 
  {
   "imperf. in Matth.": "opus imperfectum in Matthaeum, quod Iohannis Chrysostomi nomine traditum est (vix e graeco versum)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POSSID.": [
  "Possidius", 
  {
   "indic.": "indiculum operum Augustini", 
   "vita Aug.": "vita Augustini"
  }, 
  [
   "370", 
   "437", 
   "episcopus Calamensis", 
   ""
  ]
 ], 
 "STAT.": [
  "P. Papinius Statius", 
  {
   "Theb.": "Thebais", 
   "Ach.": "Achilleis", 
   "bell. Germ. frg.": "de bello Germanico fragm.", 
   "silv.": "silvae"
  }, 
  [
   "40", 
   "96", 
   "", 
   ""
  ]
 ], 
 "SORAN.": [
  "Soranus", 
  {
   "app.": "appendix de pessariis", 
   "gynaecia a Mustione latine versa": "gynaecia a Mustione latine versa"
  }, 
  [
   "50", 
   "150", 
   "medicus", 
   ""
  ]
 ], 
 "FORTVN. $1": [
  "Consult(i)us Fortunatianus", 
  {
   "ars rhetorica": "ars rhetorica"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "ABK\u00fcRZUNG TLL": [
  "Name", 
  {
   "Abk\u00fcrzung Werk": "Werk", 
   "Unterwerke - Abk\u00fcrzung": "Unterwerke"
  }, 
  [
   "Datierung: start_year", 
   "Datierung: end_year", 
   "Notizen", 
   "Zusatz"
  ]
 ], 
 "VIB. CRISP.": [
  "Q. Vibius Crispus", 
  {
   "or. frg.": "orationum fragmenta, e. g. fragm. servatum apud QVINT. inst."
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "VAL. ANT.": [
  "Valerius Antias", 
  {
   "hist.": "annales"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "VAL. $1": [
  "C. Aburnius Valens", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "M'. MANIL.": [
  "M'. Manilius", 
  {
   "fragm. quod servavit VARRO rust.": "fragm. quod servavit VARRO rust."
  }, 
  [
   "-200", 
   "-100", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "SERG.": [
  "Sergius (?)", 
  {
   "de littera, de syllaba, de pedibus, de accentibus, de distinctione": "de littera, de syllaba, de pedibus, de accentibus, de distinctione"
  }, 
  [
   "400", 
   "499", 
   "grammaticus", 
   ""
  ]
 ], 
 "PHOC.": [
  "Phocas (Focas)", 
  {
   "carm. de Verg.": "carmen de vita Vergilii", 
   "ars (sive de nomine et verbo)": "ars (sive de nomine et verbo)"
  }, 
  [
   "547", 
   "610", 
   "grammaticus", 
   ""
  ]
 ], 
 "GALEN.": [
  "Gal(i)enus", 
  {
   "alfab.": "alfabetum q. d. ad Patern(ian)um (inscribitur etiam liber pigmentorum, de qualitate herbarum aromatum seu animalium, Galeni de simplicibus medicinis ad Paternianum, al. )"
  }, 
  [
   "129", 
   "215", 
   "", 
   ""
  ]
 ], 
 "HOS. GETA": [
  "Hosidius Geta", 
  {
   "Med.": "Medea tragoedia (cento Vergilianus)"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "VICTRIC.": [
  "Victricius", 
  {
   "de laude sanctorum": "de laude sanctorum"
  }, 
  [
   "340", 
   "407", 
   "episcopus Rotomagensis", 
   ""
  ]
 ], 
 "PROCL.": [
  "Proclus", 
  {
   "laud. Mar.": "oratio de laudibus Mariae latine versa"
  }, 
  [
   "390", 
   "447", 
   "episcopus Constantinopolis", 
   ""
  ]
 ], 
 "EVANTH.": [
  "Euanthius", 
  {
   "de com.": "de comoedia vel de fabula"
  }, 
  [
   "250", 
   "350", 
   "", 
   ""
  ]
 ], 
 "PS. CATO": [
  "Pseudo-Cato", 
  {
   "monost.": "monosticha", 
   "praef.": "praefatio (epistula)", 
   "dist.": "disticha (sc. hexametrorum paria) vel dicta Catonis", 
   "Mus.": "de Musis", 
   "brev. sent.": "breves sententiae"
  }, 
  [
   "500", 
   "599", 
   "", 
   ""
  ]
 ], 
 "SERV.": [
  "Servius", 
  {
   "vita Verg.": "vita Vergilii", 
   "auct. ...": "additamenta alterius recensionis (maxime ex Ael. Donato suppletae, ut vid.), quae Servius Danielis sive auctus vocatur", 
   "scripta grammatica varia": "scripta grammatica varia", 
   "Aen.": "commentarius in Vergilii opera"
  }, 
  [
   "350", 
   "450", 
   "grammaticus", 
   ""
  ]
 ], 
 "NON.": [
  "Nonius Marcellus", 
  {
   "de compendiosa doctrina": "de compendiosa doctrina"
  }, 
  [
   "250", 
   "350", 
   "ex Africa Thubursicensis", 
   ""
  ]
 ], 
 "ARATOR": [
  "Arator", 
  {
   "ad Parth.": "epistula ad Parthenium", 
   "ad Flor.": "epistula ad Florianum", 
   "act.": "historia apostolica (de actibus apostolorum)", 
   "ad Vigil.": "epistula ad Vigilium papam"
  }, 
  [
   "450", 
   "550", 
   "poeta", 
   ""
  ]
 ], 
 "CAECIL.": [
  "Caecilius Statius Insuber Gallus", 
  {
   "com.": "comoediarum (sc. palliatarum) fragmenta"
  }, 
  [
   "-220", 
   "-168", 
   "", 
   ""
  ]
 ], 
 "SYAGR.": [
  "Syagrius Gallaeciae", 
  {
   "reg.": "regulae definitionum prolatae contra haereticos"
  }, 
  [
   "400", 
   "487", 
   "episcopus", 
   ""
  ]
 ], 
 "COLVM.": [
  "L. Iunius Moderatus Columella", 
  {
   "arb.": "de arboribus", 
   "de re rustica": "de re rustica"
  }, 
  [
   "0", 
   "99", 
   "ex Hispania Baetica Gaditanus", 
   ""
  ]
 ], 
 "SAB.": [
  "Mas(s)urius Sabinus", 
  {
   "fragmenta varia, e. g. fragm. servatum apud GELL.": "fragmenta varia, e. g. fragm. servatum apud GELL.", 
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "-50", 
   "50", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "IREN.": [
  "Irenaeus", 
  {
   "opus adversus haereses (sc. gnosticas) e graeco versum": "opus adversus haereses (sc. gnosticas) e graeco versum"
  }, 
  [
   "135", 
   "200", 
   "episcopus Lugdunensis", 
   ""
  ]
 ], 
 "OPPIVS": [
  "Oppius", 
  {
   "de silvestribus arboribus librum, fragmenta servata apud MACR. Sat.": "de silvestribus arboribus librum, fragmenta servata apud MACR. Sat."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SVLPICIA": [
  "Sulpicia", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "0", 
   "99", 
   "Caleni uxor", 
   ""
  ]
 ], 
 "MEMM.": [
  "C. Memmius", 
  {
   "carm. frg.": "carminum fragmentum", 
   "or. frg.": "orationum fragmenta a scriptoribus servata"
  }, 
  [
   "-150", 
   "-99", 
   "praet. 104.", 
   ""
  ]
 ], 
 "MARCELL. $4": [
  "Marcellus <Empiricus>; Marcellus Burdigalensis", 
  {
   "med. praef.": "Marcelli praefatio", 
   "med.": "de medicamentis", 
   "med. carm.": "carmen in fine operis positum", 
   "med. de mens.": "de mensuris et ponderibus medicinalibus"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "TITIVS": [
  "C. Titius", 
  {
   "or. frg.": "fragm. orationis de lege Fannia servatum apud MACR. Sat."
  }, 
  [
   "-200", 
   "-100", 
   "", 
   ""
  ]
 ], 
 "HIL. AREL.": [
  "Hilarius Arelatensis", 
  {
   "epist. ad Eucher.": "epistula ad Eucherium episcopum Lugdunensem", 
   "vita Honorat.": "sermo de vita Honorati episcopi Arelatensis"
  }, 
  [
   "401", 
   "449", 
   "episcopus", 
   ""
  ]
 ], 
 "LIC. RVF.": [
  "(M. Cn.) Licin(n)ius Rufinus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "185", 
   "235", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "VERGIN.": [
  "L. Verginius Rufus", 
  {
   "epigr.": "epigramma"
  }, 
  [
   "14", 
   "97", 
   "", 
   ""
  ]
 ], 
 "[ROG.]": [
  "", 
  {
   "[de Germ.]": "[de Germ.]"
  }, 
  [
   "", 
   "", 
   "", 
   "LEX de Germ."
  ]
 ], 
 "ASTER.": [
  "Asterius <Ansedunensis>", 
  {
   "ad Renat.": "liber ad Renatum monachum"
  }, 
  [
   "350", 
   "431", 
   "episcopus; Hieronymi familiaris", 
   ""
  ]
 ], 
 "PAVL. PELL.": [
  "Paulinus Pellaeus", 
  {
   "praef.": "praefatio", 
   "orat.": "oratio", 
   "[praef.]": "[praef.]", 
   "euch.": "carmen, Eucharisticos deo sub ephemeridis meae textu"
  }, 
  [
   "376", 
   "459", 
   "", 
   ""
  ]
 ], 
 "PS. DAMAS.": [
  "Pseudo-Damasus", 
  {
   "epigr.": "epigrammata"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "CLAVD.": [
  "Claudius Claudianus", 
  {
   "carm. min": "carmina minora", 
   "carm. min. app.": "carminum minorum appendix (sc. qua spuria vel suspecta continentur)", 
   "rapt. Pros.": "de raptu Proserpinae fragmentum", 
   "carminum maiorum series": "carminum maiorum series"
  }, 
  [
   "370", 
   "404", 
   "", 
   ""
  ]
 ], 
 "CALID.": [
  "M. Calidius", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud FEST.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud FEST."
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "[FORTVN.]": [
  "", 
  {
   "[in Matth.]": "[in Matth.]"
  }, 
  [
   "", 
   "", 
   "", 
   "FORTVN. AQVIL. in euang."
  ]
 ], 
 "MELA": [
  "Pomponius Mela", 
  {
   "de chorographia": "de chorographia"
  }, 
  [
   "0", 
   "99", 
   "ex Hispania Tingenteritanus", 
   ""
  ]
 ], 
 "POMPON.": [
  "L. Pomponius Bononiensis", 
  {
   "Atell.": "fabularum Atellanarum fragmenta", 
   "[sat. frg.]": "[sat. frg.]"
  }, 
  [
   "-150", 
   "-50", 
   "", 
   ""
  ]
 ], 
 "[PS. FAVST. REI.]": [
  "", 
  {
   "[symb.]": "tractatus de symbolo in codice vix recte Fausto vel Faustino tributus"
  }, 
  [
   "500", 
   "599", 
   "", 
   "EVSEB. GALLIC. hom. app."
  ]
 ], 
 "PLAVT.": [
  "Titus Macc(i)us Plautus", 
  {
   "Aul.": "Aulularia", 
   "Cas.": "Casina", 
   "Cist.": "Cistellaria", 
   "Pseud.": "Pseudolus", 
   "frg. inc.": "incertarum fabularum fragmenta", 
   "Truc.": "Truculentus", 
   "Merc.": "Mercator", 
   "Capt.": "Captivi", 
   "Mil.": "Miles gloriosus", 
   "Poen.": "Poenulus", 
   "Vid.": "Vidularia", 
   "Bacch.": "Bacchides", 
   "Curc.": "Curculio", 
   "Men.": "Menaechmi", 
   "Persa": "Persa", 
   "Trin.": "Trinummus", 
   "Epid.": "Epidicus", 
   "Asin.": "Asinaria", 
   "Rud.": "Rudens", 
   "Stich.": "Stichus", 
   "Most.": "Mostellaria", 
   "Amph.": "Amphitruo", 
   "Achar. frg.": "Acharistio (fragmentum)"
  }, 
  [
   "-254", 
   "-184", 
   "", 
   ""
  ]
 ], 
 "LEANDER": [
  "", 
  {
   "reg.": "regula (de institutione virginum et contemptu mundi)", 
   "hom.": "homilia in concilio Toletano III dicta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NOVATIAN.": [
  "Novatianus", 
  {
   "Cypr. epist.": "epistulae ad Cyprianum", 
   "cib. Iud.": "de cibis Iudaicis", 
   "trin.": "de trinitate"
  }, 
  [
   "200", 
   "258", 
   "presbyter Romanus", 
   ""
  ]
 ], 
 "CAES. STRAB.": [
  "C. Iulius Caesar Strabo (Vopiscus?)", 
  {
   "trag.": "tragoediarum fragmenta", 
   "orationum fragm. servatum apud PRISC. gramm.": "orationum fragm. servatum apud PRISC. gramm."
  }, 
  [
   "-130", 
   "-87", 
   "", 
   ""
  ]
 ], 
 "SVLP. RVF.": [
  "Ser. Sulpicius Rufus", 
  {
   "epistulae ad Ciceronem, v. CIC. fam.": "epistulae ad Ciceronem, v. CIC. fam.", 
   "or. frg.": "orationis fragm. servatum apud QVINT. inst.", 
   "frg.": "fragmenta varia, e. g. fragm. servatum apud GELL."
  }, 
  [
   "-106", 
   "-43", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "AFRAN.": [
  "L. Afranius", 
  {
   "com.": "comoediarum (sc. togatarum) fragmenta"
  }, 
  [
   "-150", 
   "-51", 
   "", 
   ""
  ]
 ], 
 "PETRON.": [
  "Petronius (Arbiter)", 
  {
   "satyrica": "satyrica"
  }, 
  [
   "14", 
   "66", 
   "", 
   ""
  ]
 ], 
 "EVSEB. GALLIC.": [
  "Eusebius Gallicanus", 
  {
   "app.": "appendix, sc. 'sermones extravagantes, qui eundem ortum habere videntur'", 
   "hom.": "sc. collectio Gallicana homiliarum, quae in nonnullis codicibus variis Eusebiis ascribitur"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "BRVT.": [
  "M. Iunius Brutus", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.", 
   "epistulae servatae inter epistulas Ciceronis ad Brutum datas": "epistulae servatae inter epistulas Ciceronis ad Brutum datas"
  }, 
  [
   "-85", 
   "-42", 
   "Caesaris interfector", 
   ""
  ]
 ], 
 "SCAEV. $1": [
  "(Q.) Cervidius Scaevola", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "CIC. FIL.": [
  "M. Tullius Cicero", 
  {
   "epistulae inter patris epistulas servatae, v. CIC. fam.": "epistulae inter patris epistulas servatae, v. CIC. fam."
  }, 
  [
   "-65", 
   "-1", 
   "M. filius", 
   ""
  ]
 ], 
 "CHILP.": [
  "Chilpericus", 
  {
   "hymn. Medard.": "hymnus in S. Medardum"
  }, 
  [
   "535", 
   "584", 
   "rex Merovingorum", 
   ""
  ]
 ], 
 "ARVS.": [
  "Arusianus Messius", 
  {
   "opus grammaticum, sc. exempla elocutionum ex Vergilio Sallustio Terentio Cicerone digesta per litteras alphabeti": "opus grammaticum, sc. exempla elocutionum ex Vergilio Sallustio Terentio Cicerone digesta per litteras alphabeti"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "OBSEQ.": [
  "Iulius Obsequens", 
  {
   "prodigiorum libri quae exstant": "prodigiorum libri quae exstant"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "NEBRID.": [
  "Nebridius", 
  {
   "Aug. epist.": "epistulae ad Augustinum"
  }, 
  [
   "300", 
   "390", 
   "grammaticus, Augustinus amicus", 
   ""
  ]
 ], 
 "PRISC. LYD.": [
  "Priscianus Lydus", 
  {
   "solut.": "solutionum ad Chosroem liber latine versus"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "CORNIF.": [
  "Q. Cornificius", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "", 
   "41", 
   "", 
   ""
  ]
 ], 
 "ACAC.": [
  "Acacius <Constantinopolitanus>", 
  {
   "epist. Ver.": "ad Simplicium papam epistula, cuius versio latina collectione Veronensi servatur"
  }, 
  [
   "400", 
   "489", 
   "Patriarch von Konstantinopel", 
   ""
  ]
 ], 
 "CAEL. AVR.": [
  "Caelius Aurelianus", 
  {
   "diaet. pass.": "de speciali significatione diaeticarum passionum fragmentum", 
   "chron.": "tardae vel chronicae passiones", 
   "acut.": "celeres vel acutae passiones", 
   "gyn. frg.": "fragmenta ('ex libris responsionum de mulieribus') de gynaeciis a Rose collecta", 
   "[acut. exc.]": "excerpta q. d. ex acutarum passionum libris (sc. Aurelius, de acutis passionibus)", 
   "gyn.": "gynaeciorum Sorani e graeco versorum et retractatorum quae exstant", 
   "salut. praec.": "de salutaribus praeceptis q. d. fragmentum (e libris medicinalium responsionum sumptum)"
  }, 
  [
   "350", 
   "450", 
   "medicus methodicus ex Numidia Siccensis", 
   ""
  ]
 ], 
 "APON.": [
  "Ap(p)onius", 
  {
   "in canticum canticorum expositio": "in canticum canticorum expositio"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "PS. SALL.": [
  "scripta Sallustii", 
  {
   "rep.": "epistulae ad Caesarem senem de re publica", 
   "in Tull.": "invectiva in M. Tullium Ciceronem"
  }, 
  [
   "-54", 
   "50", 
   "", 
   ""
  ]
 ], 
 "BALB. $1": [
  "Balbus <Gromaticus>", 
  {
   "expositio et ratio omnium formarum": "expositio et ratio omnium formarum"
  }, 
  [
   "50", 
   "150", 
   "gromaticus", 
   ""
  ]
 ], 
 "RETIC.": [
  "Reticius", 
  {
   "fragmenta": "fragmenta"
  }, 
  [
   "250", 
   "350", 
   "episcopus Augustodunensis", 
   "e. g. fragm. servatum apud AVG. c. Iulian. op. imperf."
  ]
 ], 
 "DIONYS.": [
  "Dionysius Halicarnasensis", 
  {
   "ant.": "antiquitates Romanae"
  }, 
  [
   "-54", 
   "7", 
   "rhetor et historicus", 
   ""
  ]
 ], 
 "BRVTTED.": [
  "Bruttedius Niger", 
  {
   "fragm. operis historici apud SEN. suas. servata": "fragm. operis historici apud SEN. suas. servata"
  }, 
  [
   "-50", 
   "50", 
   "rhetor et historicus", 
   ""
  ]
 ], 
 "VICTOR": [
  "Victor", 
  {
   "epist.": "epistula ad Fulgentium Ruspensem"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PELAGON.": [
  "Pelagonius", 
  {
   "ars veterinaria": "ars veterinaria"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "MANIL. $1": [
  "L. (?) Manilius", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "-200", 
   "-100", 
   "", 
   ""
  ]
 ], 
 "LVCIF.": [
  "Lucifer", 
  {
   "non conv.": "de non conveniendo cum haereticis", 
   "reg. apost.": "de regibus apostaticis", 
   "moriend.": "moriundum esse pro dei filio", 
   "non parc.": "de non parcendo in deum delinquentibus", 
   "epist. epistulae": "diverse", 
   "Athan.": "de Athanasio"
  }, 
  [
   "300", 
   "371", 
   "episcopus Caralitanus", 
   ""
  ]
 ], 
 "PS. BASS.": [
  "Pseudo-Bassus", 
  {
   "ars de metris": "ars de metris"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "HERACL.": [
  "Heraclius", 
  {
   "Alc. Avit. epist.": "epistulae ad Alcimum Avitum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SALL.": [
  "C. Sallustius Crispus", 
  {
   "epist.": "epistulae ex hist. excerptae", 
   "Mithr.": "epist. Mithridatis", 
   "Phil.": "or. Philippi", 
   "Catil.": "de coniuratione Catilinae", 
   "Pomp.": "epist. Cn. Pompei", 
   "Iug.": "de bello Iugurthino", 
   "Macri": "or. Macri trib. pleb.", 
   "or.": "orationes ex hist. excerptae", 
   "Lep.": "or. Lepidi consulis", 
   "hist.": "historiarum reliquiae", 
   "Cottae": "or. C. Cottae"
  }, 
  [
   "-86", 
   "-34", 
   "", 
   ""
  ]
 ], 
 "ALEX. TRALL.": [
  "Alexander <Trallianus>", 
  {
   "operum versio latina cum aliunde aucta tum contracta": "operum versio latina cum aliunde aucta tum contracta"
  }, 
  [
   "525", 
   "606", 
   "medicus graecus", 
   ""
  ]
 ], 
 "PS. PALAEM.": [
  "Q. Remmius Palaemon", 
  {
   "ars": "ars"
  }, 
  [
   "0", 
   "100", 
   "", 
   ""
  ]
 ], 
 "CELERIN.": [
  "Celerinus <Confessor>", 
  {
   "epistula ad Lucianum": "epistula ad Lucianum"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "[HIL. (?)]": [
  "", 
  {
   "[hymn. de Christo]": "[hymn. de Christo]"
  }, 
  [
   "", 
   "", 
   "", 
   "PS. HIL. hymn. de Christo"
  ]
 ], 
 "PRVD.": [
  "Aurelius Prudentius Clemens", 
  {
   "psych.": "psychomachia", 
   "praef.": "praefatio operum", 
   "cath.": "liber cathemerinon", 
   "perist.": "liber peristephanon", 
   "c. Symm.": "contra Symmachum", 
   "apoth.": "apotheosis", 
   "ham.": "hamartigenia", 
   "epil.": "epilogus operum", 
   "[ditt.]": "[ditt.]", 
   "tituli": "tituli historiarum (vulgo 'dittochaeon')"
  }, 
  [
   "348", 
   "405", 
   "", 
   ""
  ]
 ], 
 "AVF. NAM.": [
  "(P.) Aufidius Namusa", 
  {
   "fragm. servatum apud PRISC. gramm.": "fragm. servatum apud PRISC. gramm."
  }, 
  [
   "-100", 
   "-1", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "CORIPP.": [
  "Fl. Cresconius Corippus Afer", 
  {
   "Anast.": "panegyricus in laudem Anastasii quaestoris et magistri (traditus inter Iust. praef. et Iust.)", 
   "Ioh.": "Iohannis seu de bellis Libycis (sc. a Iohanne Troglita gestis; carmen praecipue in fine mutilum)", 
   "Iust.": "in laudem Iustini Augusti, sc. Minoris (carmen praecipue in fine mutilum; cf. Anast.)"
  }, 
  [
   "500", 
   "570", 
   "", 
   ""
  ]
 ], 
 "AQVILA": [
  "Iulius Aquila", 
  {
   "fragmenta in digesta servata": "fragmenta in digesta servata"
  }, 
  [
   "150", 
   "250", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "ANON. $11": [
  "", 
  {
   "Vales.": "anonymi Valesiani pars posterior q. d. (complectens cap. 7\u201416)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MET. NEP.": [
  "Q. Caecilius Metellus Nepos", 
  {
   "ad Ciceronem epistula": "ad Ciceronem epistula"
  }, 
  [
   "-100", 
   "-55", 
   "cos. 57", 
   ""
  ]
 ], 
 "AVR. $1": [
  "imp. M. Aurelius", 
  {
   "Fronto": "epistulae ad Frontonem magistrum una cum eiusdem operibus servatae"
  }, 
  [
   "121", 
   "180", 
   "", 
   ""
  ]
 ], 
 "FLOR.": [
  "Florus (aut plures Flori)", 
  {
   "anth.": "carmina in anthologia latina Floro cuidam tributa", 
   "carm.": "carmen ad Hadrianum", 
   "epit.": "L. (?) Annaeus Florus, epitoma de Tito Livio q. d.", 
   "Char. gramm.": "Annius Florus, fragmenta apud CHAR. gramm. servata", 
   "Verg.": "P. Annius Florus, Vergilius orator an poeta (fragmentum)"
  }, 
  [
   "50", 
   "150", 
   "", 
   ""
  ]
 ], 
 "VICTORIN.": [
  "Victorinus", 
  {
   "Christ.": "carmen de Iesu Christo deo et homine"
  }, 
  [
   "400", 
   "499", 
   "poeta", 
   ""
  ]
 ], 
 "LYD.": [
  "Iohannes Lydus", 
  {
   "mag.": "de magistratibus"
  }, 
  [
   "490", 
   "560", 
   "", 
   ""
  ]
 ], 
 "[SER. SAMM.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "SER. med."
  ]
 ], 
 "THEOD. MOPS.": [
  "Theodorus Mopsuestenus", 
  {
   "in Gal.": "commentarius in Pauli epistulas minores", 
   "[in psalm.]": "[in psalm.]", 
   "[epit. in psalm.]": "[epit. in psalm.]"
  }, 
  [
   "350", 
   "429", 
   "episcopus", 
   "IVLIAN. epit. in psalm."
  ]
 ], 
 "LIV. ANDR.": [
  "Livius Andronicus", 
  {
   "carm. frg.": "carmen epicum, sc. Odusia", 
   "trag.": "tragoediarum fragmenta", 
   "com.": "comoediarum fragmenta"
  }, 
  [
   "-300", 
   "-201", 
   "", 
   "Homeri Odyssea e graeco versa"
  ]
 ], 
 "IVLIAN. $2": [
  "Iulianus", 
  {
   "epit. novell.": "epitome novellarum Iustiniani"
  }, 
  [
   "300", 
   "399", 
   "iurisconsultus Constantinopolitanus", 
   ""
  ]
 ], 
 "MAECIAN.": [
  "L. Volusius Maecianus", 
  {
   "dig.": "fragmenta in digesta servata", 
   "distrib. 81": "distributio (opus metrologicum in fine mutilum)"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "LIC. TVR.": [
  "Licinius", 
  {
   "epist.": "epistula"
  }, 
  [
   "450", 
   "550", 
   "episcopus Turonensis", 
   ""
  ]
 ], 
 "FVLG.": [
  "Fabius Planciades Fulgentius Afer", 
  {
   "serm. ant.": "expositio sermonum antiquorum", 
   "Virg. cont.": "expositio Virgilianae continentiae secundum philosophos moralis", 
   "[Theb.]": "super Thebaiden (sc. Statii)", 
   "aet. mund.": "de aetatibus mundi et hominis (opus imperfectum?)", 
   "myth.": "mythologiae"
  }, 
  [
   "500", 
   "599", 
   "", 
   ""
  ]
 ], 
 "CAPER": [
  "Flavius Caper", 
  {
   "fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm.": "fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm.", 
   "libelli de orthographia et de verbis dubiis (qui in codicibus perperam Capro tribuuntur, sed fortasse nonnulla e Capro hausta servant)": "libelli de orthographia et de verbis dubiis (qui in codicibus perperam Capro tribuuntur, sed fortasse nonnulla e Capro hausta servant)"
  }, 
  [
   "150", 
   "250", 
   "grammaticus", 
   ""
  ]
 ], 
 "PS. BASIL.": [
  "Pseudo-Basilius", 
  {
   "cons.": "de consolatione in adversis", 
   "ad fil.": "admonitio ad filium spiritualem q. d."
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "SVLP. SEV.": [
  "Sulpicius Severus", 
  {
   "dial.": "dialogi", 
   "epist.": "epistulae", 
   "Mart.": "vita S. Martini", 
   "chron.": "chronica", 
   "[epist. app.]": "[epist. app.]"
  }, 
  [
   "363", 
   "425", 
   "", 
   ""
  ]
 ], 
 "PACVV.": [
  "M. Pacuvius", 
  {
   "praetext.": "fabularum praetextarum fragmenta", 
   "trag.": "tragoediarum fragmenta"
  }, 
  [
   "-220", 
   "-130", 
   "", 
   ""
  ]
 ], 
 "PHOEBAD.": [
  "Phoebadius", 
  {
   "c. Arian.": "contra Arianos liber"
  }, 
  [
   "320", 
   "392", 
   "episcopus Aginnensis", 
   ""
  ]
 ], 
 "QVODV.": [
  "Quodvultdeus", 
  {
   "cant. nov.": "de cantico novo", 
   "symb.": "de symbolo", 
   "temp. barb.": "de tempore barbarico sermones duo", 
   "prom.": "liber promissionum et praedictorum dei", 
   "haer.": "adversus quinque haereses", 
   "fer.": "de ultima quarta feria", 
   "catacl.": "de cataclysmo", 
   "grat.": "de accedentibus ad gratiam", 
   "Aug. epist.": "epistulae ad Augustinum", 
   "c. Iud. pag. Ar.": "contra Iudaeos, paganos et Arianos", 
   "virtut. carit.": "de quattuor virtutibus caritatis", 
   "cant. Is.": "sermo de cantico Isaiae"
  }, 
  [
   "350", 
   "454", 
   "episcopus Carthaginiensis", 
   ""
  ]
 ], 
 "PS. SOL.": [
  "Pseudo-Solinus (fragmenta Solino adiuncta)", 
  {
   "add.": "additamenta codicum aliquot ad Solinum", 
   "Pont.": "fragm. carminis 'Ponticon' inscripti"
  }, 
  [
   "600", 
   "699", 
   "", 
   ""
  ]
 ], 
 "TRIFOL.": [
  "Trifolius", 
  {
   "epist.": "epistula ad Faustum senatorem"
  }, 
  [
   "500", 
   "599", 
   "presbyter", 
   ""
  ]
 ], 
 "ENN.": [
  "Q. Ennius", 
  {
   "scaen.": "fragmenta scaenica", 
   "frg. inc.": "fragmenta incerti operis", 
   "frg. var.": "fragmenta varia (sc. et carminum et operum oratione soluta conscriptorum)", 
   "ann.": "annalium fragmenta", 
   "[trag.]": "tragoediarum fragmenta", 
   "[praetext.]": "praetextarum fragmenta", 
   "[com.]": "comoediarum (sc. palliatarum) fragmenta", 
   "sat.": "saturarum fragmenta"
  }, 
  [
   "-239", 
   "-169", 
   "", 
   ""
  ]
 ], 
 "BOETH.": [
  "Anicius Manlius Severinus Boethius", 
  {
   "mus.": "de institutione musica(e)", 
   "[in Porph. dial.]": "[in Porph. dial.]", 
   "syll. categ. introd.": "introductio ad syllogismos categoricos", 
   "in top. Cic.": "commentarii in Ciceronis topica", 
   "syll. hyp.": "de hypotheticis syllogismis", 
   "in categ. comm.": "in categorias Aristotelis commentarius", 
   "diff. top.": "de differentiis topicis", 
   "in Porph. comm.": "in Porphyrii isagogen commentarii", 
   "syll. categ.": "de syllogismo categorico", 
   "Porph. isag.": "Porphyrii isagoge e graeco versa", 
   "elench. soph.": "de sophisticis elenchis liber Aristotelis latine versus", 
   "subst. bon.": "quomodo substantiae in eo, quod sint, bonae sint", 
   "anal. pr.": "analytica priora Aristotelis latine versa", 
   "[anal. post.]": "analytica posteriora Aristotelis latine versa", 
   "divin.": "utrum pater et filius et spiritus sanctus de divinitate substantialiter praedicentur", 
   "top. Arist.": "topica Aristotelis latine versa", 
   "arithm.": "de institutione arithmetica", 
   "in herm. comm.": "in librum Aristotelis peri hermeneias commentarii", 
   "categ.": "categoriae Aristotelis latine versae", 
   "c. Eut.": "contra Eutychen et Nestorium", 
   "herm.": "peri hermeneias liber Aristotelis latine versus", 
   "trin.": "de trinitate", 
   "divis.": "de divisione", 
   "cons.": "philosophiae consolatio"
  }, 
  [
   "480", 
   "526", 
   "patricius", 
   ""
  ]
 ], 
 "MAXIM.": [
  "Maximianus", 
  {
   "eleg.": "elegiae"
  }, 
  [
   "450", 
   "550", 
   "poeta", 
   ""
  ]
 ], 
 "SIGISM.": [
  "Sigismundus", 
  {
   "Alc. Avit. epist.": "epistulae ad Symmachum papam, ad Vitalinum senatorem, ad imp. Anastasium I"
  }, 
  [
   "450", 
   "524", 
   "Burgundiae Rex\u00a0", 
   ""
  ]
 ], 
 "HEMINA": [
  "L. Cassius Hemina", 
  {
   "annalium fragmenta": "annalium fragmenta"
  }, 
  [
   "-199", 
   "-100", 
   "historicus", 
   ""
  ]
 ], 
 "AVSON.": [
  "D. Magnus Ausonius Burdigalensis", 
  {
   "Symm. epist.": "epistula ad Symmachum", 
   "carmina???": "carmina???", 
   "Mos.": "Mosella", 
   "rhop.": "oratio (sc. ad deum) versibus rhopalicis"
  }, 
  [
   "310", 
   "395", 
   "", 
   ""
  ]
 ], 
 "CALDON.": [
  "Caldonius", 
  {
   "epistulae ad Cyprianum": "epistulae ad Cyprianum"
  }, 
  [
   "200", 
   "250", 
   "", 
   ""
  ]
 ], 
 "PS. THEOPHIL.": [
  "Pseudo-Theophilus Antiochenus", 
  {
   "in Ioh.": "commentarius in quattuor euangelia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. CIC.": [
  "Pseudo-Cicero", 
  {
   "epist. ad Oct.": "epistula ad Octavianum", 
   "exil.": "oratio pridie quam in exilium iret", 
   "in Sall.": "in C. Sallustium Crispum invectiva"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "Q. SCAEV.": [
  "Q. Mucius Scaevola ('pontifex')", 
  {
   "dig.": "fragmenta in digesta servata", 
   "fragmenta alibi servata": "fragmenta alibi servata"
  }, 
  [
   "-140", 
   "-82", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "CLOD.": [
  "Ser. Clodius (vel Claudius)", 
  {
   "fragmenta grammatica a scriptoribus servata, e. g. fragm. quod affert VARRO ling.": "fragmenta grammatica a scriptoribus servata, e. g. fragm. quod affert VARRO ling."
  }, 
  [
   "-120", 
   "-60", 
   "", 
   ""
  ]
 ], 
 "HOST.": [
  "Hostius", 
  {
   "carm.": "carmen (bellum Histricum)"
  }, 
  [
   "-200", 
   "-101", 
   "", 
   ""
  ]
 ], 
 "VOLVMN.": [
  "Volumnius", 
  {
   "carm. frg.": "carminum fragm. servatum in DVB. NOM. gramm."
  }, 
  [
   "-100", 
   "-1", 
   "(fortasse P. Volumnius Eutrapelus Ciceronis familiaris)", 
   ""
  ]
 ], 
 "PAVL. NOL.": [
  "Pontius Meropius Paulinus Nolanus", 
  {
   "[app. exc. Bob.]": "[app. exc. Bob.]", 
   "epist.": "epistulae", 
   "[pass. Genes.]": "[pass. Genes.]", 
   "[carm. app.]": "[carm. app.]", 
   "[epist. app.]": "[epist. app.]", 
   "carm.": "carmina"
  }, 
  [
   "354", 
   "431", 
   "episcopus", 
   "PS. PAVL. NOL. exc. Bob."
  ]
 ], 
 "POMER.": [
  "Iulianus Pomerius", 
  {
   "de vita contemplativa": "de vita contemplativa"
  }, 
  [
   "450", 
   "550", 
   "presbyter Arelatensis", 
   ""
  ]
 ], 
 "MAR. AVENT.": [
  "Marius", 
  {
   "chron.": "chronica, quibus Prosperi opus ad ann. 581 producitur"
  }, 
  [
   "530", 
   "594", 
   "episcopus Aventicensis", 
   ""
  ]
 ], 
 "PARTHEN.": [
  "Parthenius", 
  {
   "epist.": "epistula ad Sigesteum comitem"
  }, 
  [
   "500", 
   "599", 
   "presbyter Africanus", 
   ""
  ]
 ], 
 "TAC.": [
  "(P.) Cornelius Tacitus", 
  {
   "Agr.": "de vita Iulii Agricolae", 
   "ann.": "annalium (ab excessu divi Augusti)", 
   "Germ.": "Germania (de origine et situ Germanorum)", 
   "hist.": "historiae", 
   "dial.": "dialogus de oratoribus"
  }, 
  [
   "58", 
   "120", 
   "", 
   ""
  ]
 ], 
 "FORTVN.": [
  "Atilius Fortunatianus", 
  {
   "ars (de metris Horatianis), vol. VI": "ars (de metris Horatianis), vol. VI"
  }, 
  [
   "300", 
   "399", 
   "grammaticus", 
   ""
  ]
 ], 
 "BACHIAR.": [
  "Bachiarius <Monachus>", 
  {
   "repar. laps.": "de reparatione lapsi", 
   "fid.": "de fide", 
   "[epist. Migne suppl.]": "[epist. Migne suppl.]"
  }, 
  [
   "350", 
   "450", 
   "scriptor ecclesiasticus (Gallaeciae?)", 
   ""
  ]
 ], 
 "TER.": [
  "P. Terentius Afer", 
  {
   "Phorm.": "Phormio", 
   "Haut.": "H(e)autontimorumenos", 
   "Eun.": "Eunuchus", 
   "Hec.": "Hecyra", 
   "Ad.": "Adelphoe", 
   "Andr.": "Andria"
  }, 
  [
   "-195", 
   "-158", 
   "", 
   ""
  ]
 ], 
 "ERACL.": [
  "Eraclius", 
  {
   "serm.": "sermones"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "NICET.": [
  "Nicetas <Remesianensis>", 
  {
   "appell.": "de diversis appellationibus Iesu Christo convenientibus", 
   "symb.": "explanatio symboli", 
   "spir.": "de spiritus sancti potentia", 
   "[symb. frg.]": "[symb. frg.]", 
   "vigil.": "de vigiliis servorum dei", 
   "[virg. laps. 52 p. 131,15 B.]": "[virg. laps. 52 p. 131,15 B.]", 
   "virg. laps.": "ad virginem lapsam", 
   "[hymn.]": "[hymn.]", 
   "fid.": "de ratione fidei", 
   "psalm.": "de psalmodiae bono sive de utilitate hymnorum", 
   "compet.": "librorum VI ad competentes fragmenta"
  }, 
  [
   "350", 
   "414", 
   "episcopus Dacus", 
   ""
  ]
 ], 
 "PS. ASPER": [
  "Pseudo-Asper (Aemilius Asper?)", 
  {
   "suppl.": "ars edita in supplemento Grammaticorum latinorum", 
   "artes grammaticae": "artes grammaticae"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "PONT.": [
  "Pontius", 
  {
   "vita Cypr.": "vita Cypriani"
  }, 
  [
   "200", 
   "299", 
   "diaconus Carthaginiensis", 
   ""
  ]
 ], 
 "[BALB. ET OPP.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "BALB. Cic. Att."
  ]
 ], 
 "MIN. FEL.": [
  "M. Minucius Felix", 
  {
   "Octavius": "Octavius"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "GANN.": [
  "Gannius (vel Gannii) quidam", 
  {
   "carm. frg.": "carminum fragmenta a Prisciano servata", 
   "fragm. servatum apud PAVL. FEST.": "fragm. servatum apud PAVL. FEST."
  }, 
  [
   "100", 
   "199", 
   "ev. mehrere Verfasser", 
   ""
  ]
 ], 
 "HYG. $1": [
  "C. Iulius Hyginus", 
  {
   "Char. gramm.": "operum reliquiae a scriptoribus servatae, e. g. fragm. apud CHAR. gramm."
  }, 
  [
   "-60", 
   "4", 
   "Augusti libertus", 
   ""
  ]
 ], 
 "HYG. $3": [
  "Hyginus minor", 
  {
   "lim. grom.": "de limitibus constituendis opus gromaticum"
  }, 
  [
   "50", 
   "150", 
   "gromaticus", 
   ""
  ]
 ], 
 "CORNELIA": [
  "Cornelia", 
  {
   "epist. frg.": "epistula"
  }, 
  [
   "-190", 
   "-100", 
   "mater Gracchorum", 
   ""
  ]
 ], 
 "PRIMAS.": [
  "Primasius", 
  {
   "in apoc.": "commentarius in apocalypsin"
  }, 
  [
   "500", 
   "599", 
   "episcopus Hadrumetinus", 
   ""
  ]
 ], 
 "IVL. VICT.": [
  "C. Iulius Victor", 
  {
   "rhet.": "ars rhetorica"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "PS. FVLG. RVSP.": [
  "Pseudo-Fulgentius Ruspensis", 
  {
   "[praedest.]": "[praedest.]", 
   "serm.": "sermones aut in codicibus aut ab editoribus perperam Fulgentio ascripti", 
   "pro fid.": "pro fide catholica (vel de trinitate)"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "PS. VIGIL. THAPS.": [
  "Pseudo-Vigilius Thapsensis", 
  {
   "solut. obi. Arian.": "solutiones obiectionum Arianorum", 
   "[c. Arian.]": "epitome operis q. e. VIGIL. THAPS. c. Arian.", 
   "trin.": "de trinitate", 
   "c. Marivad.": "contra Marivadum (Varimadum) Arianum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FERRAND.": [
  "(Fulgentius?) Ferrandus", 
  {
   "epist.": "epistulae", 
   "canon.": "breviatio canonum (sc. conciliorum Graecorum et Africae)"
  }, 
  [
   "500", 
   "547", 
   "diaconus Carthaginiensis", 
   ""
  ]
 ], 
 "IAVOL.": [
  "C. Octavius Tidius Tossianus L. Iavolenus Priscus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "0", 
   "99", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "TYCON.": [
  "Tyconius Afer Donatista", 
  {
   "in apoc.": "fragmenta Taurinensia commentarii in apocalypsin", 
   "reg.": "liber regularum"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "HYG. $2": [
  "Hyginus maior", 
  {
   "grom.": "operis gromatici de limitibus, de condicionibus agrorum, de generibus controversiarum fragmenta"
  }, 
  [
   "50", 
   "150", 
   "gromaticus", 
   ""
  ]
 ], 
 "DOM. MARS.": [
  "Domitius Marsus", 
  {
   "carm. frg.": "carminum reliquiae a Baehrens et Morel collectae", 
   "epigr. Bob.": "epigrammata duo servata inter epigrammata Bobiensia", 
   "fragmenta operis pedestris servata apud QVINT. inst.": "fragmenta operis pedestris servata apud QVINT. inst."
  }, 
  [
   "-50", 
   "25", 
   "poeta", 
   ""
  ]
 ], 
 "LONGIN.": [
  "Longinianus", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "408", 
   "paganus", 
   ""
  ]
 ], 
 "CELS.": [
  "A. Cornelius Celsus", 
  {
   "medicina": "medicina", 
   "artes": "artes", 
   "ceterarum operis partium fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.": "ceterarum operis partium fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst."
  }, 
  [
   "-25", 
   "50", 
   "", 
   ""
  ]
 ], 
 "POMP.": [
  "Cn. Pompeius Magnus", 
  {
   "epistulae fere ad Ciceronem": "epistulae fere ad Ciceronem"
  }, 
  [
   "106", 
   "48", 
   "", 
   "v. CIC. Att."
  ]
 ], 
 "AMBROSIAST.": [
  "Ambrosiaster", 
  {
   "in Gal.": "in epistulae ad Galatas", 
   "in Rom. prol.": "in epistulam ad Romanos, prologus vel argumentum"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "SIDON.": [
  "C. Sollius Apollinaris Sidonius Clarimontanus", 
  {
   "carm.": "carmen", 
   "epist.": "epistulae", 
   "epist. (carm. 22)": "epistula carmini 22 adnexa"
  }, 
  [
   "431", 
   "479", 
   "episcopus", 
   ""
  ]
 ], 
 "CASSIOD.": [
  "Flavius Magnus Aurelius Cassiodorus", 
  {
   "hist.": "historia ecclesiastica tripartita q. d.", 
   "var.": "variae (sc. epistulae, formulae sim. a Cassiodoro officiis variis fungente conscripta)", 
   "chron. II": "chronica, vol. II", 
   "praef.": "praefatio", 
   "not.": "index notarum", 
   "[Didym.]": "[Didym.]", 
   "anecd. Hold.": "anecdoton Holderi q. d., sc. excerpta ex Cassiodori libello de ordine generis Cassiodororum", 
   "prol. bibl.": "prologus (c. additamentis) Cassiodori ad librorum biblicorum codicem grandiorem q. d. codice Amiatino servatus", 
   "or. frg.": "orationum reliquiae", 
   "Ios. antiq.": "Flavii Iosephi antiquitates Iudaicae curis Cassiodori e graeco versae", 
   "[art. 7 p. 1220A]": "[art. 7 p. 1220A]", 
   "gramm.": "de orthographia", 
   "in psalm.": "expositio psalmorum", 
   "compl. in apoc.": "complexiones in epistolis apostolorum et actibus apostolorum et apocalypsi", 
   "praef. ord.": "praefatio, ordo dicendorum", 
   "[art. 7 p. 357 Mai]": "[art. 7 p. 357 Mai]", 
   "[rhet.]": "de rhetorica", 
   "inst.": "institutiones", 
   "Clem. Alex. adumbr.": "Clementis Alexandrini adumbrationes in epistulas canonicas", 
   "Ios. c. Ap.": "Flavii Iosephi de Iudaeorum vetustate sive contra Apionem (opus curis Cassiodori e graeco versum)", 
   "anim.": "de anima"
  }, 
  [
   "485", 
   "580", 
   "Senator", 
   ""
  ]
 ], 
 "EMPOR.": [
  "Emporius", 
  {
   "de ethopoeia al. quae exstant (excerpta?)": "de ethopoeia al. quae exstant (excerpta?)"
  }, 
  [
   "500", 
   "599", 
   "rhetor", 
   ""
  ]
 ], 
 "CHRYSOST.": [
  "Iohannes Chrysostomus", 
  {
   "ad neoph.": "sermo ad neophytos", 
   "hom.": "homiliae et alia opera in editione Basil. collecta", 
   "repar. laps.": "de reparatione lapsi"
  }, 
  [
   "349", 
   "407", 
   "Bischof von Konstantinopel, bedeutendster Homilet der griech. Kirche", 
   "operum versiones latinae anon."
  ]
 ], 
 "PETR. CHRYS.": [
  "Petrus Chrysologus", 
  {
   "[serm. de or.]": "[serm. de or.]", 
   "epist. Conc. S II": "epistula ad Eutychen presbyterum", 
   "serm.": "collectio sermonum Feliciana q. d."
  }, 
  [
   "380", 
   "451", 
   "episcopus Ravennas", 
   ""
  ]
 ], 
 "FRONTIN.": [
  "Sex. Iulius Frontinus", 
  {
   "grom.": "excerpta e Frontini opere quodam gromatico", 
   "aq.": "de aquaeductu urbis Romae commentarius", 
   "strat.": "strategemata"
  }, 
  [
   "35", 
   "103", 
   "", 
   ""
  ]
 ], 
 "GRACCH.": [
  "C. Sempronius Gracchus", 
  {
   "or. frg.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud GELL."
  }, 
  [
   "-153", 
   "-121", 
   "tribunus plebis", 
   ""
  ]
 ], 
 "PLIN.": [
  "C. Plinius Secundus (vulgo Plinius maior)", 
  {
   "dub. serm. frg. Char. gramm.": "dubii sermonis librorum fragmenta, e. g. fragm. servatum apud CHAR. gramm.", 
   "nat.": "naturalis historia"
  }, 
  [
   "23", 
   "79", 
   "", 
   ""
  ]
 ], 
 "PROB.": [
  "M. Valerius Probus?", 
  {
   "app. (gramm. IV)": "appendix Probi", 
   "[schol. Iuv.]": "scholia in IVV.", 
   "scripta Probiana": "scripta Probiana", 
   "litt. sing.": "de litteris singularibus fragmenta", 
   "inst. (gramm. IV)": "instituta artium", 
   "cath. (gramm. IV)": "catholica nominum et verborum", 
   "nom. (gramm. IV)": "de nomine", 
   "Verg.": "commentarius in VERG. ecl. et georg.", 
   "vita Pers.": "vita Persii de commentario Probi Valerii sublata"
  }, 
  [
   "0", 
   "99", 
   "grammaticus", 
   ""
  ]
 ], 
 "IGNAT.": [
  "Ignatius", 
  {
   "Rom. Colbert.": "epistula ad Romanos, quae graeca nondum interpolata martyrio Colbertino vel Antiocheno q. d. inserta una cum hoc martyrio latine versa est (sc. versio re vera vetus)", 
   "epistulae latine versae": "epistulae latine versae", 
   "[ad Rom. vel PS. IGNAT. Rom.]": "epistula ad Romanos (sc. versio vetus vel vetustior q. d. sequens recensionem graecam iam interpolatam)"
  }, 
  [
   "50", 
   "117", 
   "episcopus Antiochenus", 
   ""
  ]
 ], 
 "LENT.": [
  "P. Cornelius Lentulus Spinther", 
  {
   "epistulae": "epistulae"
  }, 
  [
   "-100", 
   "-46", 
   "", 
   ""
  ]
 ], 
 "EVSEB.": [
  "Eusebius Nicomediensis", 
  {
   "ad Paul.": "epistula ad Paulinum (conscripta fere 321) bis e graeco versa"
  }, 
  [
   "250", 
   "341", 
   "", 
   ""
  ]
 ], 
 "IOH. BICL.": [
  "Iohannes Biclarensis", 
  {
   "chron. II": "continuatio chronicorum Victoris Tonnennensis, vol. II"
  }, 
  [
   "550", 
   "620", 
   "abbas Biclarensis Hispanus", 
   ""
  ]
 ], 
 "PS. THEOD. PRISC.": [
  "Theodori Prisciani appendix", 
  {
   "add.": "additamenta ad THEOD. PRISC.", 
   "simpl. med.": "de simplici medicina liber", 
   "ves. vit.": "de vesicae vitiis capitulum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FASTID.": [
  "Fastidiosus Arianus", 
  {
   "serm.": "sermo additus epistulae Victoris ad Fulgentium Ruspensem"
  }, 
  [
   "500", 
   "599", 
   "", 
   ""
  ]
 ], 
 "CAEL. SAB.": [
  "Cn. Arulenus Caelius Sabinus", 
  {
   "Gell.": "fragmenta a scriptoribus servata, e. g. fragm. apud GELL."
  }, 
  [
   "0", 
   "99", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "[AEM. PAVL.]": [
  "L. Aemilius Paullus Macedonicus", 
  {
   "fragmentum orationis 167 a. Chr. habitae apud VAL. MAX. traditum": "fragmentum orationis 167 a. Chr. habitae apud VAL. MAX. traditum"
  }, 
  [
   "-228", 
   "-161", 
   "", 
   "VAL. MAX. 5,10,2"
  ]
 ], 
 "AVIT. BRAC.": [
  "Avitus <Bracarensis>", 
  {
   "Lucian. epist.": "epistulae, quam scripsit eodem tempore Lucianus presbyter de revelatione corporis sancti Stephani protomartyris, versiones latinae", 
   "ad. Palc.": "epistula ad Palconium episcopum Bracarensem, quam Avitus Luciani epistulae versioni suae addidit", 
   "rec. B": "recensio B (sc. altera versio a nescio quo confecta)", 
   "rec. A": "recensio (immo versio) A"
  }, 
  [
   "400", 
   "500", 
   "presbyter", 
   ""
  ]
 ], 
 "PS. PHOC.": [
  "Pseudo-Phocas", 
  {
   "de aspiratione liber": "de aspiratione liber"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALYP.": [
  "Alypius <Thagastenus>", 
  {
   "commonitorii fragmentum": "commonitorii fragmentum"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "GALL. $2": [
  "C. Aelius Gallus", 
  {
   "de significatione verborum, operis quae ad ius civile pertinent, fragmenta a scriptoribus servata, e. g. fragm. apud FEST.": "de significatione verborum, operis quae ad ius civile pertinent, fragmenta a scriptoribus servata, e. g. fragm. apud FEST."
  }, 
  [
   "-50", 
   "50", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "[GALLICAN.]": [
  "Vulcacius Gallicanus", 
  {}, 
  [
   "250", 
   "350", 
   "", 
   "HIST. AVG."
  ]
 ], 
 "GALL. $1": [
  "C. Asinius Gallus", 
  {
   "epigr.": "epigramma"
  }, 
  [
   "-41", 
   "33", 
   "", 
   ""
  ]
 ], 
 "SISENNA": [
  "L. Cornelius Sisenna", 
  {
   "[frg. inc.]": "[frg. inc.]", 
   "Miles. frg.": "Milesiarum latine versarum reliquiae", 
   "hist.": "historiae"
  }, 
  [
   "-118", 
   "-67", 
   "", 
   "hist."
  ]
 ], 
 "CHAR.": [
  "Aurelius Arcadius Charisius", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "250", 
   "350", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "ATHAN.": [
  "Athanasius", 
  {
   "Lucif. epist.": "epistula ad Luciferum", 
   "[epist. ad Epict.]": "epistula ad Epictetum", 
   "epist. ad Potam.": "epistulae ad Potamium (genuinae?) fragmentum ab Alcuino allatum"
  }, 
  [
   "298", 
   "373", 
   "episcopus Alexandrinus", 
   ""
  ]
 ], 
 "VERR. FL.": [
  "M. Verrius Flaccus", 
  {
   "frg.": "fragmenta fere grammatica, e. g. fragm. servatum apud GELL."
  }, 
  [
   "-60", 
   "37", 
   "", 
   ""
  ]
 ], 
 "VALENT.": [
  "Valentinus Hadrumetinus", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "abbas", 
   ""
  ]
 ], 
 "RVF. FEST.": [
  "Rufius (?) Festus", 
  {
   "breviarium (rerum gestarum populi Romani)": "breviarium (rerum gestarum populi Romani)"
  }, 
  [
   "300", 
   "380", 
   "", 
   ""
  ]
 ], 
 "CORNIF. $1": [
  "Cornificius Gallus", 
  {
   "de Verg. Cledon. gramm. V": "versus de Vergilio a CLEDON. gramm. V"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "APVL.": [
  "Apuleius Madaurensis Afer", 
  {
   "apol.": "apologia (pro se de magia liber)", 
   "Plat.": "de Platone et eius dogmate", 
   "flor.": "florida", 
   "mund.": "de mundo (sc. Pseudoaristotelis liber \u03a0\u03b5\u03c1\u1f76 \u039a\u03cc\u03c3\u03bc\u03bf\u03c5 latine versus ac retractatus)", 
   "carm. frg.": "carminum fragmenta", 
   "Socr.": "de deo Socratis", 
   "met.": "metamorphoses (vulgo asinus aureus)", 
   "frg.": "fragmenta post alios a Beaujeu collecta"
  }, 
  [
   "124", 
   "170", 
   "", 
   ""
  ]
 ], 
 "[BASS. GELL.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "GAV. BASS. Gell."
  ]
 ], 
 "PS. LACT. PLAC.": [
  "(Pseudo-) Lactantius Placidus", 
  {
   "fab. Ov.": "narrationes fabularum Ovidianarum"
  }, 
  [
   "200", 
   "299", 
   "", 
   ""
  ]
 ], 
 "CANNVT.": [
  "P. Cannutius", 
  {
   "orationum fragm. servatum apud PRISC. gramm.": "orationum fragm. servatum apud PRISC. gramm."
  }, 
  [
   "-106", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "COEL.": [
  "L. Coelius Antipater", 
  {
   "librorum de bello Punico secundo fragmenta": "librorum de bello Punico secundo fragmenta"
  }, 
  [
   "-200", 
   "-101", 
   "historicus", 
   ""
  ]
 ], 
 "TREBON.": [
  "C. Trebonius", 
  {
   "epistula ad Ciceronem": "epistula ad Ciceronem"
  }, 
  [
   "-90", 
   "-43", 
   "", 
   ""
  ]
 ], 
 "SYMM. $1": [
  "L. Aurelius Avianius Symmachus", 
  {
   "pater Symm. epist.": "epistula ad filium"
  }, 
  [
   "300", 
   "376", 
   "Q. pater", 
   ""
  ]
 ], 
 "CASS. PARM.": [
  "C. Cassius Parmensis", 
  {
   "epistula ad Ciceronem": "epistula ad Ciceronem", 
   "fragm. servatum apud SVET. Aug.": "fragm. servatum apud SVET. Aug."
  }, 
  [
   "-74", 
   "-31", 
   "poeta", 
   ""
  ]
 ], 
 "PS. ORIG.": [
  "Pseudo-Origenis", 
  {
   "hom. in Matth.": "homiliae in Matth. quattuor in homiliario Caroli Magni servatae", 
   "infant.": "homilia de infantibus ab Herode occisis", 
   "hom. Casin.": "homiliae in Matth. tres in cod. Casinensibus servatae", 
   "de Melch.": "sermo de Melchisedech", 
   "in psalm.": "expositio de psalmo", 
   "in Iob": "commentarii in Iob Ariani versio q. d.", 
   "tract.": "tractatus q. d. de libris sanctarum scripturarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[CASSIOD. (?)]": [
  "", 
  {
   "[epil. Esth.]": "[epil. Esth.]"
  }, 
  [
   "", 
   "", 
   "", 
   "EPIL. bibl. Esth."
  ]
 ], 
 "MOYS.": [
  "Moyses et socii", 
  {
   "epistula ad Cyprianum": "epistula ad Cyprianum"
  }, 
  [
   "200", 
   "299", 
   "presbyter Romanus", 
   ""
  ]
 ], 
 "IVLIAN. $1": [
  "Salvius Iulianus", 
  {
   "dig.": "fragmenta in digesta (et alibi) servata"
  }, 
  [
   "108", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "PHILVM.": [
  "Philumenus", 
  {
   "med.": "de medicina, versio Latina"
  }, 
  [
   "150", 
   "250", 
   "medicus", 
   ""
  ]
 ], 
 "AVR. OPIL.": [
  "Aurelius Opillus", 
  {
   "fragm. servatum apud GELL.": "fragm. servatum apud GELL."
  }, 
  [
   "-150", 
   "-50", 
   "grammaticus", 
   ""
  ]
 ], 
 "TVRRIB.": [
  "Turribius", 
  {
   "epist.": "epistula ad Idacium et Ceponium episcopos"
  }, 
  [
   "400", 
   "499", 
   "postea episcopus Asturicensis", 
   ""
  ]
 ], 
 "IORD.": [
  "Iordanes Gothus", 
  {
   "Rom.": "de summa temporum vel origine actibusque gentis Romanorum", 
   "Get.": "de origine actibusque Getarum (sc. Gothorum; sequitur Cassiodori opus deperditum)"
  }, 
  [
   "500", 
   "555", 
   "", 
   ""
  ]
 ], 
 "GELL.": [
  "A. Gellius", 
  {
   "noctes Atticae": "noctes Atticae"
  }, 
  [
   "130", 
   "180", 
   "scriptor ecclesia", 
   ""
  ]
 ], 
 "[PS. ANTON. MVSA] $1": [
  "", 
  {
   "[herb. bet.]": "[herb. bet.]"
  }, 
  [
   "", 
   "", 
   "", 
   "PS. MVSA herb. Vett."
  ]
 ], 
 "GREG. M.": [
  "Gregorius Magnus", 
  {
   "in I reg.": "expositiones in librum primum regum", 
   "epist.": "registrum epistularum, sc. epistulae et similia Gregorii scripta ea, quae olim in registrum Lateranense nunc deperditum recepta sunt", 
   "donat. Andr.": "donatio monasterio S. Andreae facta", 
   "in euang.": "in euangelia homiliae", 
   "resp. ad Aug.": "responsum ad Augustinum Anglorum episcopum", 
   "in Ezech.": "in Ezechielem homiliae", 
   "past.": "regula pastoralis (in quattuor partes digesta)", 
   "dial.": "dialogi (de miraculis patrum Italicorum)", 
   "mortal.": "oratio de mortalitate q. d., sc. denuntiatio pro septiformi letania", 
   "moral.": "moralia q. d., sc. expositio beati Iob", 
   "in cant.": "expositionis in canticum canticorum reliquiae"
  }, 
  [
   "540", 
   "504", 
   "papa", 
   ""
  ]
 ], 
 "MARVLL.": [
  "Marullus mimographus", 
  {
   "mim.": "fragmentum unicum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOD. PRISC.": [
  "Theodorus Priscianus", 
  {
   "log.": "lib. 2: logicus", 
   "phys.": "libri de physicis fragmentum", 
   "gyn.": "lib. 3: gynaecia", 
   "eup. faen.": "lib. 1: euporiston faenomenon"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "TVRPIL.": [
  "Sex. Turpilius", 
  {
   "com.": "comoediarum palliatarum fragmenta"
  }, 
  [
   "-200", 
   "-104", 
   "", 
   ""
  ]
 ], 
 "PVBLIL.": [
  "Publilius Syrus", 
  {
   "sent.": "sententiae", 
   "mim.": "mimorum fragmenta varia"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "[ORSIES.]": [
  "", 
  {
   "[doctr.]": "[doctr.]"
  }, 
  [
   "", 
   "", 
   "", 
   "HIER. Orsies. doctr."
  ]
 ], 
 "VEN. FORT.": [
  "Venantius Fortunatus", 
  {
   "expos. orat.": "expositio orationis dominicae", 
   "epist.": "epistulae libris carminum insertae", 
   "[vita Leob.]": "vita Leobini episcopi Carnotensis", 
   "expos. symb.": "expositio symboli", 
   "vita Sev.": "vita Severini episcopi Burdigalensis", 
   "vita Pat.": "vita Paterni episcopi Abrincensis", 
   "praef.": "praefatio carminum (epist. ad Gregorium Turonensem)", 
   "praef. I": "praefatio I (epist. ad Gregorium Turonensem)", 
   "vita Hil.": "vita Hilarii episcopi Pictaviensis", 
   "carm.": "carmina", 
   "laud. Mar.": "in laudem sanctae Mariae", 
   "vita Albin.": "vita Albini episcopi Andecavensis", 
   "Mart.": "vita Martini", 
   "vita Radeg.": "vita Radegundis reginae Francorum", 
   "virt. Hil.": "de virtutibus Hilarii episcopi Pictaviensis", 
   "vita Germ.": "vita Germani episcopi Parisiaci", 
   "carm. app.": "appendix carminum", 
   "vita Marcell.": "vita Marcelli"
  }, 
  [
   "540", 
   "610", 
   "episcopus Pictaviensis", 
   ""
  ]
 ], 
 "[PLIN. VAL.]": [
  "Plinius Valerianus", 
  {
   "medicina Plinii (Valeriani)": "medicina Plinii (Valeriani)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DRAC.": [
  "Blossius Aemilius Dracontius", 
  {
   "ros.": "de origine rosarum", 
   "Romul.": "Romulea", 
   "Orest.": "Orestis tragoedia", 
   "mens.": "de mensibus", 
   "laud. dei": "de laudibus dei", 
   "satisf.": "satisfactio"
  }, 
  [
   "400", 
   "499", 
   "iurisconsultus Carthaginiensis, poeta", 
   ""
  ]
 ], 
 "PS. ANATOL.": [
  "Anatolius  <Laodicensis>", 
  {
   "pasch.": "liber de ratione paschali"
  }, 
  [
   "", 
   "", 
   "episcopus", 
   ""
  ]
 ], 
 "TRACH.": [
  "P. Galerius Trachalus", 
  {
   "or. frg.": "orationum fragmenta, e. g. fragm. servatum apud QVINT. inst."
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "PS. SEN.": [
  "Pseudo-Seneca", 
  {
   "mon.": "monita", 
   "epist. Paul.": "epistulae Senecae ad Paulum et Pauli ad Senecam quae vocantur", 
   "mor.": "liber de moribus", 
   "extr. voc.": "sententiae Rufi q. d. sive Senecae morientis extremae voces"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "APRING.": [
  "Apringius", 
  {
   "in apoc.": "commentarius in apocalypsin"
  }, 
  [
   "500", 
   "599", 
   "episcopus Pacensis Hispanus", 
   ""
  ]
 ], 
 "CLOAT.": [
  "Cloatius Verus", 
  {
   "fragmenta grammatica a scriptoribus servata, e. g. fragm. apud MACR. Sat.": "fragmenta grammatica a scriptoribus servata, e. g. fragm. apud MACR. Sat."
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "GELL. $1": [
  "Cn. Gellius", 
  {
   "annales": "annales"
  }, 
  [
   "-200", 
   "-101", 
   "historicus", 
   ""
  ]
 ], 
 "MAR. VICTORIN.": [
  "C. Marius Victorinus", 
  {
   "homous.": "de homousio recipiendo", 
   "[ad Iust.]": "[ad Iust.]", 
   "in Phil.": "commentarius in epistulam Pauli ad Philippenses", 
   "hymn.": "hymni (quos olim inter spuria numerabamus)", 
   "in Eph.": "commentarius in epistulam Pauli ad Ephesios", 
   "in Gal.": "commentarius in epistulam Pauli ad Galatas", 
   "rhet.": "explanationes in rhetoricam Ciceronis (sc. CIC. inv.)", 
   "gramm.": "scripta ad grammaticam pertinentia", 
   "defin.": "de definitionibus", 
   "adv. Arium": "adversus Ar(r)ium libri IV", 
   "[verb. script.]": "[verb. script.]", 
   "[Boeth. in Porph. comm. pr.]": "[Boeth. in Porph. comm. pr.]", 
   "gen. div. verb.": "de generatione divini verbi (ad Candidum)", 
   "Porph. isag.": "Porphyrii isagoge e graeco versa"
  }, 
  [
   "281", 
   "363", 
   "rhetor urbis Romae", 
   ""
  ]
 ], 
 "POMP. RVF.": [
  "Q. Pompeius (Rufus)", 
  {
   "or. frg.": "orationum fragm. servatum apud PRISC. gramm. II"
  }, 
  [
   "", 
   "-88", 
   "consul 88 v. Chr.?", 
   ""
  ]
 ], 
 "ALF. AVIT.": [
  "Alfius <Avitus>", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "PAVL. FEST.": [
  "Paulus Diaconus", 
  {
   "excerpta ex libris Pompeii Festi de significatione verborum": "excerpta ex libris Pompeii Festi de significatione verborum"
  }, 
  [
   "725", 
   "799", 
   "", 
   ""
  ]
 ], 
 "SIGIST.": [
  "Sigisteus", 
  {
   "epist.": "epistula ad Parthenium presbyterum"
  }, 
  [
   "450", 
   "550", 
   "comes", 
   ""
  ]
 ], 
 "IVL. RVF.": [
  "Iulius Rufinianus", 
  {
   "de figuris sententiarum et elocutionis": "de figuris sententiarum et elocutionis"
  }, 
  [
   "250", 
   "350", 
   "rhetor", 
   ""
  ]
 ], 
 "VAL. FL.": [
  "C. Valerius Flaccus Setinus Balbus", 
  {
   "Argonautica": "Argonautica"
  }, 
  [
   "0", 
   "90", 
   "", 
   ""
  ]
 ], 
 "PS. GREG. TVR.": [
  "Pseudo-Gregorius Turonensis", 
  {
   "Thom.": "de miraculis Thomae apostoli"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TITIN.": [
  "Titinius", 
  {
   "com.": "comoediarum (fabularum togatarum) fragmenta"
  }, 
  [
   "-250", 
   "-150", 
   "", 
   ""
  ]
 ], 
 "SCAEV.": [
  "Q. Mucius Scaevola", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-170", 
   "-87", 
   "cos. 117", 
   ""
  ]
 ], 
 "AMPEL.": [
  "L. Ampelius", 
  {
   "liber memorialis": "liber memorialis"
  }, 
  [
   "200", 
   "299", 
   "", 
   ""
  ]
 ], 
 "GENNAD.": [
  "Gennadius <Massiliensis>", 
  {
   "[indic. de haer.]": "[indic. de haer.]", 
   "vir. ill.": "de viris illustribus", 
   "dogm.": "definitio ecclesiasticorum dogmatum (de ecclesiasticis dogmatibus)"
  }, 
  [
   "400", 
   "496", 
   "presbyter Massiliensis", 
   ""
  ]
 ], 
 "NIPS.": [
  "M. Iunius Nipsus", 
  {}, 
  [
   "100", 
   "199", 
   "gromaticus", 
   ""
  ]
 ], 
 "LABER.": [
  "D. Laberius", 
  {
   "mim.": "mimorum fragmenta"
  }, 
  [
   "-105", 
   "-43", 
   "eques", 
   ""
  ]
 ], 
 "VIVENTIOL.": [
  "Viventiolus", 
  {
   "epist.": "epistula ad episcopos provinciae Lugdunensis", 
   "Alc. Avit. epist.": "epistula ad Alcimum Avitum"
  }, 
  [
   "117", 
   "284", 
   "episcopus Lugdunensis", 
   ""
  ]
 ], 
 "MAT.": [
  "Cn. Matius", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "-150", 
   "-50", 
   "", 
   ""
  ]
 ], 
 "PORCAR.": [
  "Porcarius", 
  {
   "mon.": "monita"
  }, 
  [
   "650", 
   "732", 
   "abbas Lerinensis", 
   ""
  ]
 ], 
 "VICTORIN. $1": [
  "", 
  {
   "scripta quaedam grammatica, quae uni auctori (Victorino cuidam? vix Mario Victorino) tribuenda videntur esse": "scripta quaedam grammatica, quae uni auctori (Victorino cuidam? vix Mario Victorino) tribuenda videntur esse"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PELAG. I": [
  "Pelagius I", 
  {
   "defens.": "in defensione trium capitulorum", 
   "epistulas eius v. EPIST. pontif. Gass\u00f3\u2014Batlle": "epistulas eius v. EPIST. pontif. Gass\u00f3\u2014Batlle"
  }, 
  [
   "500", 
   "561", 
   "papa", 
   ""
  ]
 ], 
 "LICINIAN.": [
  "Licinianus", 
  {
   "epist.": "epistulae"
  }, 
  [
   "550", 
   "650", 
   "episcopus Carthaginis Novae", 
   ""
  ]
 ], 
 "SCAEV. MEM.": [
  "Scaevus Memor", 
  {
   "trag.": "tragoediarum fragmentum"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "ANTON. $1": [
  "M. Antonius", 
  {
   "fragmenta (fere orationis pro C. Norbano) servata apud CIC. de orat.": "fragmenta (fere orationis pro C. Norbano) servata apud CIC. de orat."
  }, 
  [
   "-143", 
   "-87", 
   "orator; cos. 99 v. Chr.", 
   ""
  ]
 ], 
 "DVLC.": [
  "Dulcitius", 
  {
   "quaestiones ad Augustinum missae": "quaestiones ad Augustinum missae"
  }, 
  [
   "300", 
   "399", 
   "tribunus et notarius", 
   "v. AVG. quaest. Dulc."
  ]
 ], 
 "RECCARED.": [
  "Reccaredus", 
  {
   "epist. ad Greg. M.": "epistula ad Gregorium Magnum papam"
  }, 
  [
   "550", 
   "601", 
   "rex Gothorum", 
   ""
  ]
 ], 
 "MAXIMIN.": [
  "Maximinus", 
  {
   "[c. pag.]": "[c. pag.]", 
   "[c. haer.]": "[c. haer.]", 
   "[c. Iud.]": "[c. Iud.]", 
   "c. Ambr.": "contra Ambrosium dissertatio, sc. scholiorum codicis Paris", 
   "[serm.]": "[serm.]", 
   "Aug. coll. c. Maximin.": "Maximini cum Augustino disputantis verba", 
   "[hom.]": "[hom.]"
  }, 
  [
   "350", 
   "450", 
   "Arianorum episcopus, Augustini adversarius", 
   ""
  ]
 ], 
 "OPTAT.": [
  "Optatus", 
  {
   "app.": "monumentorum ad Donatistarum historiam pertinentium, quae ab alio collecta Optatus appendicis instar libris suis addiderat, reliquiae", 
   "opus, quod contra Parmenianum Donatistam scripsit": "opus, quod contra Parmenianum Donatistam scripsit", 
   "serm.": "sermo in natali sanctorum innocentium infantum q. d. (minus certum, an genuinus)"
  }, 
  [
   "300", 
   "399", 
   "episcopus Milevitanus Afer", 
   ""
  ]
 ], 
 "PS. SVLP. SEV.": [
  "Pseudo-Sulpicius Severus", 
  {
   "epist.": "appendix VII epistularum Sulpicio Severo suppositarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IVST.": [
  "M. Iunian(i)us Iustinus", 
  {
   "epitoma historiarum Philippicarum Pompei Trogi": "epitoma historiarum Philippicarum Pompei Trogi"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "PLAVTIVS": [
  "Plautius", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "0", 
   "99", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "SEVERIAN.": [
  "Severianus", 
  {
   "hom. de pace": "homilia de pace", 
   "[hom. de python.]": "homilia de pythonibus et maleficiis"
  }, 
  [
   "380", 
   "408", 
   "episcopus Gabalensis", 
   ""
  ]
 ], 
 "IVVENT.": [
  "Iuventius", 
  {
   "com.": "comoediarum fragmenta"
  }, 
  [
   "-150", 
   "-50", 
   "poeta", 
   ""
  ]
 ], 
 "NEP.": [
  "Cornelius Nepos", 
  {
   "Epam.": "Epaminondas (XV)", 
   "Lys.": "Lysander (VI)", 
   "Hann.": "Hannibal (XXIII)", 
   "Cim.": "Cimon (V)", 
   "Cato": "Cato (XXIV)", 
   "reg.": "reges (XXI)", 
   "Ages.": "Agesilaus (XVII)", 
   "Att.": "Atticus (XXV)", 
   "Milt.": "Miltiades (I)", 
   "Timol.": "Timoleon (XX)", 
   "Thras.": "Thrasybulus (VIII)", 
   "frg.": "fragmenta", 
   "Phoc.": "Phocion (XIX)", 
   "Dion": "Dion (X)", 
   "Chabr.": "Chabrias (XII)", 
   "Ham.": "Hamilcar (XXII)", 
   "Con.": "Conon (IX)", 
   "Arist.": "Aristides (III)", 
   "Paus.": "Pausanias (IV)", 
   "praef.": "praefatio", 
   "Iph.": "Iphicrates (XI)", 
   "Pel.": "Pelopidas (XVI)", 
   "Timoth.": "Timotheus (XIII)", 
   "Them.": "Themistocles (II)", 
   "Alc.": "Alcibiades (VII)", 
   "Eum.": "Eumenes (XVIII)", 
   "Dat.": "Datames (XIV)"
  }, 
  [
   "-100", 
   "-28", 
   "", 
   ""
  ]
 ], 
 "DAR.": [
  "Darius", 
  {
   "epistula ad Augustinum": "epistula ad Augustinum"
  }, 
  [
   "400", 
   "499", 
   "Comes", 
   ""
  ]
 ], 
 "CVRT.": [
  "Q. Curtius Rufus", 
  {
   "historiarum Alexandri Magni quae exstant": "historiarum Alexandri Magni quae exstant"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "PAPIN.": [
  "Aemilius Papinianus", 
  {
   "dig.": "fragmenta in digestis aliisve collectionibus servata", 
   "resp. frg.": "responsorum fragmenta"
  }, 
  [
   "142", 
   "212", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "PROC.": [
  "Proculus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "0", 
   "99", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "CYRILL.": [
  "Cyrillus Alexandrinus", 
  {
   "hom. pasch.": "homilia, immo epistula paschalis septima decima", 
   "epist. Carth.": "epistula ad concilium Carthaginiense anno 419 habitum missa"
  }, 
  [
   "375", 
   "444", 
   "episcopus", 
   ""
  ]
 ], 
 "MACER $1": [
  "Aemilius Macer", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "150", 
   "250", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "MACER $2": [
  "C. Licinius Macer Calvi pater", 
  {
   "opus historicum, sc. annales": "opus historicum, sc. annales", 
   "or. frg.": "orationis pro Tuscis fragm. servatum apud PRISC. gramm."
  }, 
  [
   "-150", 
   "-66", 
   "historicus", 
   ""
  ]
 ], 
 "DOSITH.": [
  "Dositheus", 
  {
   "gramm.": "artis grammaticae"
  }, 
  [
   "300", 
   "399", 
   "", 
   "quam graece vertit, quae exstant"
  ]
 ], 
 "AVGVSTVS": [
  "imp. Augustus", 
  {
   "operum reliquiae a scriptoribus servatae (praeter EPIST. imp. Aug.), e. g. carmen apud MART.": "operum reliquiae a scriptoribus servatae (praeter EPIST. imp. Aug.), e. g. carmen apud MART."
  }, 
  [
   "-63", 
   "14", 
   "", 
   ""
  ]
 ], 
 "SIC. FLACC.": [
  "Siculus Flaccus", 
  {
   "grom.": "liber gromaticus de condicionibus agrorum"
  }, 
  [
   "100", 
   "199", 
   "", 
   ""
  ]
 ], 
 "IVL. SEV.": [
  "Iulius Severianus", 
  {
   "rhet.": "praecepta artis rhetoricae"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "PHAEDR.": [
  "Phaedrus", 
  {
   "fabulae": "fabulae"
  }, 
  [
   "-20", 
   "60", 
   "Augusti libertus", 
   ""
  ]
 ], 
 "TER. MAVR.": [
  "Terentianus Maurus", 
  {
   "carmina de litteris, de syllabis, de metris": "carmina de litteris, de syllabis, de metris"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "ARNOB.": [
  "Arnobius <Africanus>", 
  {
   "nat.": "adversus nationes (vel gentes)"
  }, 
  [
   "250", 
   "330", 
   "rhetor", 
   ""
  ]
 ], 
 "PS. BOETH.": [
  "Pseudo-Boethius", 
  {
   "[grom.]": "demonstratio artis geometricae vel geometria prima", 
   "fid. cath.": "de fide catholica", 
   "[geom.]": "geometria (sc. altera)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SER.": [
  "Q. Serenus", 
  {
   "med.": "liber medicinalis"
  }, 
  [
   "100", 
   "299", 
   "", 
   ""
  ]
 ], 
 "[NICET.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "PS. NICET. pasch."
  ]
 ], 
 "TIB.": [
  "Albius Tibullus", 
  {
   "elegiae": "elegiae"
  }, 
  [
   "-55", 
   "-18", 
   "", 
   ""
  ]
 ], 
 "FORT.": [
  "Fortunatus <Manichaeus>", 
  {
   "Aug. c. Fort.": "quae in disputatione contra Augustinum in medium protulit"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "VICTOR.": [
  "Victorius", 
  {
   "Alc. Avit. epist.": "epistula ad Alcimum Avitum"
  }, 
  [
   "450", 
   "550", 
   "episcopus Gratianopolitanus", 
   ""
  ]
 ], 
 "PS. IVL. RVF.": [
  "Pseudo-Iulius Rufinianus", 
  {
   "schem. dian.": "de schematis dianoeas", 
   "schem. lex.": "de schematis lexeos"
  }, 
  [
   "250", 
   "350", 
   "", 
   ""
  ]
 ], 
 "PS. ANTON.": [
  "", 
  {
   "orationis C. Antonio Hybridae (qui revera a. 64 a. Chr. contra Ciceronem dixerat) suppositae fragm. servatum apud QVINT. inst. 9,3,94": "orationis C. Antonio Hybridae (qui revera a. 64 a. Chr. contra Ciceronem dixerat) suppositae fragm. servatum apud QVINT. inst. 9,3,94"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIPHAN. $1": [
  "Epiphanius <Beneventanus>", 
  {
   "in euang.": "interpretatio euangeliorum (sc. Matth., Marc., Luc.)"
  }, 
  [
   "400", 
   "499", 
   "episcopus quidam latinus", 
   ""
  ]
 ], 
 "[ANATOL.]": [
  "Anatolius <Constantinopolitanus>", 
  {
   "ad Leonem Magnum inter eiusdem epistulas": "ad Leonem Magnum inter eiusdem epistulas"
  }, 
  [
   "400", 
   "458", 
   "episcopus", 
   ""
  ]
 ], 
 "FVR. ANT.": [
  "Furius Antias", 
  {
   "carm. frg.": "carmina"
  }, 
  [
   "-150", 
   "-50", 
   "", 
   ""
  ]
 ], 
 "ORIBAS.": [
  "Oribasius", 
  {
   "eup.": "ad Eunapium sive", 
   "syn.": "synopsis ad Eustathium", 
   "opera e graeco versa (exstant duae versiones)": "opera e graeco versa (exstant duae versiones)"
  }, 
  [
   "325", 
   "403", 
   "medicus", 
   ""
  ]
 ], 
 "BASS.": [
  "Caesius Bassus", 
  {
   "eiusdem libri fragm. allatum a RVFIN. gramm.": "eiusdem libri fragm. allatum a RVFIN. gramm.", 
   "fragmentum libri de metris sub nomine Atilii Fortunatiani traditum (postea contaminatum)": "fragmentum libri de metris sub nomine Atilii Fortunatiani traditum (postea contaminatum)", 
   "lyricorum fragm. allatum a PRISC. gramm.": "lyricorum fragm. allatum a PRISC. gramm."
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "VALG.": [
  "C. Valgius Rufus", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-65", 
   "-12", 
   "", 
   ""
  ]
 ], 
 "SYMM.": [
  "Q. Aurelius Symmachus", 
  {
   "or.": "orationes", 
   "epist.": "epistulae", 
   "rel.": "relationes", 
   "frg.": "variorum operum fragmenta"
  }, 
  [
   "342", 
   "403", 
   "", 
   ""
  ]
 ], 
 "ASPER": [
  "Vergilius Asper", 
  {
   "gramm. Verg.": "grammatica Vergiliana"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "HIL. $1": [
  "Hilarius Pictaviensis", 
  {
   "syn.": "de synodis (de fide orientalium)", 
   "frg. min.": "fragmenta minora a scriptoribus servata", 
   "[euang.]": "[euang.]", 
   "in Matth.": "commentarii in Matthaeum", 
   "[gen.]": "[gen.]", 
   "hymn.": "libri hymnorum reliquiae", 
   "myst.": "tractatus mysteriorum quae exstant", 
   "psalm. instr.": "instructio psalmorum, sc. praefatio tractatuum in psalm.", 
   "c. Const.": "contra Constantium imperatorem", 
   "[op. hist.]": "[op. hist.]", 
   "app.": "appendix", 
   "in psalm.": "tractatuum (commentariorum) in psalmos quae exstant", 
   "c. Aux.": "contra Auxentium episcopum Mediolanensem", 
   "[epist. ad fil.]": "[epist. ad fil.]", 
   "[Macc.]": "[Macc.]", 
   "coll. antiar.": "collectanea antiariana Parisina q. d., sc. fragmenta operis historici de controversia Ariana (= adversum Valentem et Vrsacium?), quibus plurimae synodorum epistulae sim. servantur", 
   "ad Const.": "ad Constantium imperatorem", 
   "trin.": "de trinitate (de fide, adversum Arianos)"
  }, 
  [
   "315", 
   "367", 
   "episcopus", 
   ""
  ]
 ], 
 "PS. ALEX.": [
  "Alexander <Magnus>", 
  {
   "c. Dind. coll.": "cum Dindimo, rege Bragmanorum, de philosophia per litteras facta collatio (ficta)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SVLP. APOLL.": [
  "C. Sulpicius Apollinaris", 
  {
   "Verg. Aen.": "hexasticha in Aeneidos libris", 
   "perioch. Ter. Andr.": "periochae comoediarum Terentii, e. g. Andriae"
  }, 
  [
   "50", 
   "150", 
   "grammaticus", 
   ""
  ]
 ], 
 "ALF.": [
  "P. Alfenus Varus <Cremonensis>", 
  {
   "fragmenta in digesta (et alibi) servata": "fragmenta in digesta (et alibi) servata"
  }, 
  [
   "-100", 
   "-1", 
   "iurisconsultus; cos 39 v. Chr.", 
   ""
  ]
 ], 
 "CRASS.": [
  "L. Licinius Crassus orator", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud CIC. orat.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud CIC. orat."
  }, 
  [
   "-140", 
   "-91", 
   "", 
   ""
  ]
 ], 
 "PHILO": [
  "Philo(n) Alexandrinus", 
  {
   "quaest. in gen.": "quaestiones in genesi et solutiones", 
   "vita contempl.": "de vita contemplativa sive de statu Essaeorum", 
   "opera latine versa": "opera latine versa"
  }, 
  [
   "-15", 
   "40", 
   "", 
   ""
  ]
 ], 
 "DIONYS. EXIG.": [
  "Dionysius Exiguus", 
  {
   "[paenit. Thaisis praef.]": "praefatio, quae in nonnullis codicibus vitae vel paenitentiae q. d. sanctae Thaisis meretricis anteposita est", 
   "inv. cap. Ioh.": "de inventione capitis Iohannis Baptistae relatio e graeco versa", 
   "pasch.": "argumenta paschalia", 
   "[vita Thaisis]": "vita vel paenitentia sanctae Thaisis meretricis", 
   "praef.": "praefationes, sc. epistulae dedicatoriae collectionum et versionum a Glorie collectae", 
   "epist. de pasch.": "epistulae duae de computo paschali (1: ad Petronium; 2: ad Bonifatium et Bonum),", 
   "Conc.": "eae Dionysii versiones vel versionum partes, quae actis conciliorum a Schwartz collectis continentur", 
   "Greg. Nyss. creat.": "Gregorii Nysseni liber \u03a0\u03b5\u03c1\u03af \u03ba\u03b1\u03c4\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae\u03c2 \u03b1\u03bd\u03b8\u03c1\u03ce\u03c0\u03bf\u03c5 e graeco versus (de conditione vel creatione hominis)", 
   "[reg. Pachom.]": "Pachomii abbatis regula (sc. regula angeli q. d.) e graeco versa", 
   "vita Pachom.": "vita Pachomii abbatis e graeco versa", 
   "cycl.": "cycli paschales", 
   "[Procl. fid.]": "[Procl. fid.]", 
   "Avell.": "libellus Dioscori et Chaeremonis apocrisiariorum a Dionysio versus", 
   "[Procl. or.]": "[Procl. or.]", 
   "epist. ad Eugipp.": "epistula ad Eugippium (qua dedicatur Greg. Nyss. creat.)", 
   "Proter. epist.": "Proterii episcopi Alexandrini epistula ad Leonem papam de pascha"
  }, 
  [
   "470", 
   "540", 
   "monachus Scythicus", 
   ""
  ]
 ], 
 "VARIVS": [
  "L. Varius Rufus", 
  {
   "carm. frg.": "carminum fragm.", 
   "trag.": "tragoediarum fragmenta"
  }, 
  [
   "-70", 
   "-15", 
   "Vergilii familiaris", 
   ""
  ]
 ], 
 "CVRIO PATER": [
  "C. Scribonius Curio pater", 
  {
   "orationis (?) cuiusdam fragm. servatum apud PRISC. gramm. II": "orationis (?) cuiusdam fragm. servatum apud PRISC. gramm. II"
  }, 
  [
   "-100", 
   "-53", 
   "90 v. Chr. Volkstribun; 76 v. Chr. cos.", 
   ""
  ]
 ], 
 "ATIL.": [
  "Atilius", 
  {
   "com.": "comoediarum fragmenta"
  }, 
  [
   "100", 
   "199", 
   "", 
   ""
  ]
 ], 
 "AGROEC.": [
  "Agroecius <Senonensis>", 
  {
   "ars de orthographia": "ars de orthographia"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "PASCHAS.": [
  "Paschasius", 
  {
   "epist.": "epistula ad Eugippium"
  }, 
  [
   "450", 
   "512", 
   "diaconus Romanus", 
   ""
  ]
 ], 
 "[CAPITOL.]": [
  "Iulius Capitolinus", 
  {}, 
  [
   "350", 
   "450", 
   "", 
   "HIST. AVG."
  ]
 ], 
 "PS. HIL.": [
  "Pseudo-Hilarius Pictaviensis", 
  {
   "euang.": "de euangelio", 
   "rec. A 394": "recensio A, vers. 394 (ceterum v. euang.)", 
   "[elench.]": "capitulorum elenchus commentariorum Hilarii in Matthaeum", 
   "hymn.": "hymni duo a Feder inter spuria editi", 
   "prat.": "de spiritali prato (fragmentum?)", 
   "hymn. de Christo": "hymnus de Christo", 
   "libell.": "epistula seu libellus apologeticus (sc. contra Arianos)", 
   "rec. B 389": "recensio B, vers. 389 (quam recensionem usque adhuc Victorino cuidam poetae tribuebamus)", 
   "gen.": "in genesin ad Leonem papam", 
   "balt. cast.": "de balteo castitatis (fragmentum?)", 
   "in psalm.": "tractatus in psalmos", 
   "epist. ad fil.": "epistula ad Abram filiam", 
   "[dedic. eccl.]": "sermo de dedicatione ecclesiae", 
   "Macc.": "carmen de martyrio Maccabaeorum", 
   "tract.": "tractatus tres a Mai editi"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "[VOPISC.]": [
  "Fl. Vopiscus Syracusius", 
  {}, 
  [
   "117", 
   "284", 
   "e numero scriptorum historiae Augustae fictorum", 
   "HIST. AVG."
  ]
 ], 
 "RVT. NAM.": [
  "Rutilius Claudius Namatianus", 
  {
   "de reditu suo sive iter Gallicum": "de reditu suo sive iter Gallicum"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "DAMAS.": [
  "Damasus", 
  {
   "carm.": "carmina, sc. epigrammata a Ferrua inter genuina recepta", 
   "epistulae duae ad Hieronymum (Epist. pontif. 239. 253) et tertiae fragmenta": "epistulae duae ad Hieronymum (Epist. pontif. 239. 253) et tertiae fragmenta"
  }, 
  [
   "305", 
   "384", 
   "papa", 
   ""
  ]
 ], 
 "PS. APVL.": [
  "Pseudo-Apuleius", 
  {
   "tit. morb.": "index titulorum morborum", 
   "praef.": "praefatio", 
   "herb.": "herbarium (de medicaminibus herbarum)", 
   "herm.": "\u03a0\u03b5\u03c1\u1f76 \u1f11\u03c1\u03bc\u03b7\u03bd\u03b5\u03af\u03b1\u03c2 (opusculum fortasse genuinum)", 
   "[rem. sal.]": "de remediis salutaribus q. d. fragmentum", 
   "app.": "appendix curarum, quae in codice uno vel altero additae sunt", 
   "Ascl.": "Asclepius", 
   "interpol.": "interpolationes (maxime e Dioscoride sumptae) ad nomina naturamque herbarum pertinentes, quibus et singulae codicum familiae et singuli codices aucti sunt (redduntur apud Howald/Sigerist aut litteris minoribus aut exulant in adnotatione critica)"
  }, 
  [
   "300", 
   "399", 
   "", 
   "(retractatio latina libri Hermetici graeci fere deperditi; sed non ita pauca exstant coptice)"
  ]
 ], 
 "AVF. BASS.": [
  "Aufidius Bassus", 
  {
   "fragm. apud SEN. suas. servata": "fragm. apud SEN. suas. servata"
  }, 
  [
   "-50", 
   "50", 
   "historicus", 
   ""
  ]
 ], 
 "PACON.": [
  "L. Sextilius Paconi(an)us", 
  {
   "carm. frg.": "carminis fragm."
  }, 
  [
   "", 
   "35", 
   "", 
   ""
  ]
 ], 
 "FELIX": [
  "Flavius Felix", 
  {
   "anth.": "carmina in anthologiam latinam recepta"
  }, 
  [
   "380", 
   "430", 
   "", 
   ""
  ]
 ], 
 "TIRO": [
  "M. Tullius Tiro", 
  {
   "variorum operum fragmenta, e. g. fragm. servatum apud GELL.": "variorum operum fragmenta, e. g. fragm. servatum apud GELL."
  }, 
  [
   "-103", 
   "-4", 
   "", 
   ""
  ]
 ], 
 "VERG.": [
  "P. Vergilius Maro", 
  {
   "catal.": "carmina kat\u00e0 lept\u00f3n", 
   "ecl.": "eclogae sive bucolica", 
   "epist.": "epistulae ad imp. Augustum fragm. (vix spurium) servatum apud MACR. Sat.", 
   "georg.": "georgica", 
   "Aen.": "Aeneis"
  }, 
  [
   "-70", 
   "-19", 
   "", 
   ""
  ]
 ], 
 "PETIL.": [
  "Petilianus", 
  {
   "fragmenta, e. g. fragm. servatum apud AVG. c. Petil.": "fragmenta, e. g. fragm. servatum apud AVG. c. Petil."
  }, 
  [
   "350", 
   "450", 
   "episcopus Donatista Cirtensis", 
   ""
  ]
 ], 
 "PAPIR.": [
  "Papirius Iustus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "130", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "ATTA": [
  "T. Quin(c)tius Atta", 
  {
   "carm. frg.": "carminum fragm. unicum (ex epigrammatibus)", 
   "com.": "comoediarum (sc. togatarum) fragmenta"
  }, 
  [
   "-150", 
   "-77", 
   "", 
   ""
  ]
 ], 
 "FAB. PICT.": [
  "Fabius Pictor", 
  {
   "iuris pontificii (operis a nonnullis FAB. MAX. tributi) fragmenta a scriptoribus servata, e. g. fragm. apud GELL.": "iuris pontificii (operis a nonnullis FAB. MAX. tributi) fragmenta a scriptoribus servata, e. g. fragm. apud GELL.", 
   "librorum historicorum (sc. annalium) fragmenta": "librorum historicorum (sc. annalium) fragmenta"
  }, 
  [
   "-254", 
   "-201", 
   "", 
   "vix Q. Fab. Pict., qui annales graecos conscripsit"
  ]
 ], 
 "PACAT.": [
  "Pacatus", 
  {
   "c. Porph. frg.": "contra Porphyrium fragmenta"
  }, 
  [
   "340", 
   "399", 
   "", 
   ""
  ]
 ], 
 "EVTR. VAL.": [
  "Eutropius Valentiae", 
  {
   "epist.": "epistulae"
  }, 
  [
   "550", 
   "610", 
   "episcopus Hispanus", 
   ""
  ]
 ], 
 "GALL.": [
  "C. Cornelius Gallus", 
  {
   "carm. frg.": "carminum fragmenta", 
   "geogr.": "fragm. servatum apud VIB. SEQ. geogr."
  }, 
  [
   "-70", 
   "-26", 
   "", 
   ""
  ]
 ], 
 "TRABEA": [
  "Trabea", 
  {
   "com.": "comoediarum palliatarum fragmenta"
  }, 
  [
   "-250", 
   "-150", 
   "", 
   ""
  ]
 ], 
 "TRAIAN.": [
  "imp. Traianus", 
  {
   "Plin. epist.": "epistulae ad Plinium"
  }, 
  [
   "53", 
   "117", 
   "", 
   ""
  ]
 ], 
 "[PVLCH.]": [
  "(Aelia) Pulcheria Augusta", 
  {
   "[Leo M. epist.]": "epistula ad Leonem Magnum latine versa"
  }, 
  [
   "", 
   "", 
   "", 
   "CONC. S II 3,1 p. 9,22"
  ]
 ], 
 "MET. MAC.": [
  "Q. Caecilius Metellus Macedonicus", 
  {
   "or. frg.": "orationis de prole augenda"
  }, 
  [
   "-190", 
   "-115", 
   "", 
   "fragmenta apud GELL. servata"
  ]
 ], 
 "ANTONIN. HONORAT.": [
  "Antoninus Honoratus", 
  {
   "epist. ad Arc.": "cohortatoria ad martyrium epistula ad Arcadium quendam"
  }, 
  [
   "400", 
   "450", 
   "episcopus Afer (sc. Constantinae civitatis)", 
   ""
  ]
 ], 
 "CINC.": [
  "L. Cincius", 
  {
   "\"fragmenta a scriptoribus servata, e. g. fragm. apud FEST. (De fastis; De commitiis; De consulum potestate; De re militari; De officio iurisconsulti; De verbis priscis; Mystagogica\"": "\"fragmenta a scriptoribus servata, e. g. fragm. apud FEST. (De fastis; De commitiis; De consulum potestate; De re militari; De officio iurisconsulti; De verbis priscis; Mystagogica\""
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "ACC.": [
  "Lucius Accius <Pisaurensis>", 
  {
   "carm. frg.": "carminum (praeter scaenica) fragmenta", 
   "praetext.": "praetextarum fragmenta", 
   "trag.": "tragoediarum fragmenta"
  }, 
  [
   "-170", 
   "90", 
   "", 
   ""
  ]
 ], 
 "AMBR.": [
  "Ambrosius <Mediolanensis>", 
  {
   "obit. Valent.": "de obitu Valentiniani (sc. iunioris imperatoris)", 
   "bon. mort.": "de bono mortis", 
   "virginit.": "de virginitate", 
   "incarn.": "de incarnationis dominicae sacramento", 
   "in psalm.": "explanatio XII psalmorum", 
   "Isaac": "de Isaac et anima", 
   "inst. virg.": "de institutione virginis (de S. Mariae virginitate perpetua)", 
   "fug. saec.": "de fuga saeculi", 
   "[Carm. epigr.]": "epigrammata, quae olim medii aevi auctoribus freti (lapides perierunt) plane Ambrosio ascribebamus, nunc a CE non segregare tutius esse censemus", 
   "virg.": "de virginibus", 
   "Noe": "de Noe", 
   "in Luc.": "expositio euangelii sec. Lucam", 
   "Hel.": "de Helia et ieiunio", 
   "Iob": "libri de interpellatione Iob et David", 
   "patr.": "de patriarchis", 
   "tituli": "tituli, qui in basilica Ambrosiana imaginibus quibusdam inscripti Ambrosii (aut Prudentii) esse traduntur", 
   "symb.": "explanatio symboli", 
   "obit. Theod.": "de obitu Theodosii (sc. imperatoris)", 
   "c. Aux.": "sermo contra Auxentium (Arianum) de basilicis tradendis", 
   "Iac.": "de Iacob et vita beata", 
   "parad.": "de paradiso", 
   "paenit.": "de paenitentia", 
   "sacr.": "de sacramentis", 
   "in psalm 118 serm. 22": "expositio in psalmum 118, sermo 22", 
   "exc. Sat.": "de excessu fratris (sc. Satyri)", 
   "Abr.": "de Abraham", 
   "off.": "de officiis ministrorum", 
   "Nab.": "de Nabuthae (i. Naboth)", 
   "vid.": "de viduis", 
   "myst.": "de mysteriis", 
   "hex.": "(h)exa(e)meron", 
   "exhort. virg.": "exhortatio virginitatis", 
   "spir.": "de spiritu sancto", 
   "Cain et Ab.": "de Cain et Abel", 
   "Tob.": "de Tobia", 
   "fid.": "de fide (ad Gratianum Augustum)", 
   "Ioseph": "de Ioseph (sc. patriarcha)", 
   "epist. epistulae": "diverse", 
   "apol. Dav.": "de apologia prophetae David ad Theodosium Augustum"
  }, 
  [
   "339", 
   "397", 
   "episcopus Mediolanensis", 
   ""
  ]
 ], 
 "[LAMPR.]": [
  "Aelius Lampridius (e numero scriptorum historiae Augustae fictorum, quos nunc una nota HIST. AVG. comprehendimus)", 
  {}, 
  [
   "350", 
   "450", 
   "", 
   "HIST. AVG."
  ]
 ], 
 "GAV. BASS.": [
  "Gavius Bassus", 
  {
   "operis de origine verborum et vocabulorum fragmenta a scriptoribus servata, e. g. fragm. apud GELL.": "operis de origine verborum et vocabulorum fragmenta a scriptoribus servata, e. g. fragm. apud GELL."
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "FAB. MAX.": [
  "Q. Fabius Maximus Servilianus", 
  {
   "fragmenta": "fragmenta"
  }, 
  [
   "-200", 
   "-201", 
   "historiarum scriptor", 
   ""
  ]
 ], 
 "ATT.": [
  "T. Pomponius Atticus", 
  {
   "epistularum ad Ciceronem amicum": "epistularum ad Ciceronem amicum"
  }, 
  [
   "-110", 
   "-32", 
   "Freund Ciceros", 
   "fragm. servata apud CIC. Att."
  ]
 ], 
 "FVLG. RVSP.": [
  "Fulgentius Ruspensis", 
  {
   "c. Arrian.": "contra Arianos (sc. dicta vel obiectiones regis Thrasamundi et contra ea responsiones)", 
   "epist.": "epistulae", 
   "ad Eugipp. frg.": "'ad Eugippium presbyterum contra sermonem cuiusdam Pelagiani opuscula' deperdita", 
   "rem. pecc.": "de remissione peccatorum", 
   "serm. sermones": "diverse", 
   "c. Fab. frg.": "fragmenta operis contra gesta falsa Fabiani Ariani", 
   "dub.": "sermones dubii in Corp. Christ. editi", 
   "incarn.": "de incarnatione ad Scarilam", 
   "praedest.": "de veritate praedestinationis et gratiae", 
   "fid.": "de fide ad Petrum", 
   "ad Tras.": "ad T(h)rasamundum regem Vandalorum", 
   "c. Fastid.": "contra Fastidiosum Arianum", 
   "ad Monim.": "ad Monimum", 
   "psalm. abeced.": "psalmus abecedarius (sc. contra Arianos)", 
   "trin.": "de trinitate"
  }, 
  [
   "462", 
   "533", 
   "in Byzacena episcopus", 
   ""
  ]
 ], 
 "SCRIB. LARG.": [
  "Scribonius Largus", 
  {
   "compositiones": "compositiones"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "VICTOR. $1": [
  "Victorius Aquitanus", 
  {
   "praef.": "praefatio", 
   "pasch.": "cursus paschalis", 
   "calc.": "calculus"
  }, 
  [
   "400", 
   "488", 
   "", 
   ""
  ]
 ], 
 "PS. MVSA": [
  "(Pseudo-) Antonius Musa", 
  {
   "app.": "appendix unius codicis", 
   "herb. Vett.": "libellus de herba Vettonica (betonica)"
  }, 
  [
   "400", 
   "499", 
   "Augusti medicus", 
   ""
  ]
 ], 
 "PENTAD.": [
  "Pentadius", 
  {
   "anth.": "carmina"
  }, 
  [
   "nicht datierbar", 
   "", 
   "", 
   ""
  ]
 ], 
 "[AGOR.]": [
  "M. Vettius Agorius Praetextatus", 
  {
   "[carm. epigr.]": "carmen nesciocuius persona M. Vettii Agorii Praetextati"
  }, 
  [
   "315", 
   "384", 
   "", 
   ""
  ]
 ], 
 "CATO NEP.": [
  "C. Porcius Cato", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud PRISC. gramm. II": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud PRISC. gramm. II"
  }, 
  [
   "-200", 
   "-99", 
   "Enkel des M. P. Cato Censorius, cos. 114 v. Chr.", 
   ""
  ]
 ], 
 "COLVMB. HYENS.": [
  "Columba (Columcille) <Hyensis>", 
  {
   "fabric.": "hymnus abecedarius de fabrica mundi"
  }, 
  [
   "521", 
   "597", 
   "abbas", 
   ""
  ]
 ], 
 "SCIP. MAI.": [
  "P. Cornelius Scipio Africanus maior", 
  {
   "or. frg.": "orationum fragmenta (dubia), e. g. fragm. servatum apud GELL."
  }, 
  [
   "-235", 
   "-183", 
   "", 
   ""
  ]
 ], 
 "NINN.": [
  "Ninnius Crassus", 
  {
   "carm. frg.": "Iliados fragmenta"
  }, 
  [
   "republikanische Zeit, keine Lebensdaten", 
   "", 
   "\u00dcbersetzer der Ilias", 
   ""
  ]
 ], 
 "TVRRAN.": [
  "Turranius (T. Turranius Niger)", 
  {
   "de agri cultura fragm. servatum apud DIOM. gramm.": "de agri cultura fragm. servatum apud DIOM. gramm."
  }, 
  [
   "-100", 
   "-1", 
   "Varronis amicus", 
   ""
  ]
 ], 
 "GERM.": [
  "Germanicus Caesar", 
  {
   "Aratea q. d. (sunt, qui opus ei abiudicent)": "Aratea q. d. (sunt, qui opus ei abiudicent)"
  }, 
  [
   "-25", 
   "19", 
   "", 
   ""
  ]
 ], 
 "EVGEN.": [
  "Eugenius <Carthaginiensis>", 
  {
   "epistula ad cives suos, v. GREG. TVR. Franc.": "epistula ad cives suos, v. GREG. TVR. Franc.", 
   "epistula ad magistratum quendam et liber fidei catholicae, v. VICT. VIT.": "epistula ad magistratum quendam et liber fidei catholicae, v. VICT. VIT."
  }, 
  [
   "450", 
   "505", 
   "episcopus Carthaginiensis", 
   ""
  ]
 ], 
 "SEDVL.": [
  "Sedulius", 
  {
   "[carm. app.]": "carminum appendix ad Sedulium spectantium", 
   "op. pasch.": "opus paschale", 
   "epist.": "epistulae ad Macedonium presbyterum", 
   "carm. pasch.": "carmen paschale", 
   "hymn.": "hymni"
  }, 
  [
   "350", 
   "450", 
   "presbyter", 
   "ANTH. 491\u2014493"
  ]
 ], 
 "RVT. MAX.": [
  "Rutilius Maximus", 
  {
   "dig.": "fragm. servatum in DIG."
  }, 
  [
   "200", 
   "299", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "LIV. $1": [
  "", 
  {
   "epit. Oxyrh.": "operis Liviani epitoma, cuius fragmenta servata sunt fere papyro Oxyrhynch. 668"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LIV. $2": [
  "", 
  {
   "perioch.": "operis Liviani integri periochae, quae codicibus servantur"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. CHRYSOST.": [
  "Pseudo-Chrysostomus", 
  {
   "serm. M\u00e9l. Geerard I": "sermo (de beato Ioseph) editus M\u00e9langes Geerard I", 
   "hom.": "homiliae in editione Basil. collectae", 
   "de solstit.": "de solstitia et aequinoctia conceptionis et nativitatis d. n. Iesu Christi et Iohannis Baptistae"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "HILARIAN.": [
  "Q. Iulius Hilarianus", 
  {
   "curs. temp.": "pars posterior, sc. de cursu temporum (de mundi duratione)", 
   "pasch.": "pars prior, sc. de die paschae et mensis"
  }, 
  [
   "350", 
   "420", 
   "episcopus Africanus", 
   ""
  ]
 ], 
 "SIL.": [
  "Ti. Catius Asconius Silius Italicus", 
  {
   "Punica": "Punica"
  }, 
  [
   "25", 
   "100", 
   "", 
   ""
  ]
 ], 
 "MAX. VICTORIN.": [
  "Maxim(ian)us Victorinus", 
  {
   "de ratione metrorum": "de ratione metrorum"
  }, 
  [
   "300", 
   "399", 
   "grammaticus", 
   ""
  ]
 ], 
 "MAX. $2": [
  "Maximus <Africanus>", 
  {
   "epist.": "epistula ad Theophilum episcopum Alexandrinum"
  }, 
  [
   "200", 
   "282", 
   "episcopus", 
   ""
  ]
 ], 
 "MAX. $1": [
  "Maximus presbyter et socii", 
  {
   "Cypr. epist.": "epistula ad Cyprianum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOM.": [
  "Diomedes", 
  {
   "ars grammatica (nunc decurtata), vol. I": "ars grammatica (nunc decurtata), vol. I"
  }, 
  [
   "300", 
   "399", 
   "grammaticus", 
   ""
  ]
 ], 
 "PASTOR": [
  "Pastor", 
  {
   "libell.": "libellus in modum symboli"
  }, 
  [
   "400", 
   "499", 
   "episcopus Gallaeciae", 
   ""
  ]
 ], 
 "[ATIL.]": [
  "", 
  {
   "[gramm.]": "[gramm.]"
  }, 
  [
   "", 
   "", 
   "", 
   "FORTVN. gramm."
  ]
 ], 
 "DOLAB.": [
  "P. Cornelius Dolabella", 
  {
   "epistula ad Ciceronem": "epistula ad Ciceronem"
  }, 
  [
   "-70", 
   "-43", 
   "", 
   ""
  ]
 ], 
 "VICTORIN. $2": [
  "Victorinus", 
  {
   "ad Ruric. epist.": "epistula 2 inter epistulas ad Ruricium scriptas"
  }, 
  [
   "450", 
   "550", 
   "(episcopus Foroiuliensis, ut vid.)", 
   ""
  ]
 ], 
 "MAX.": [
  "Maximus et Theodorus", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "PVBLIC.": [
  "Publicola", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SINN.": [
  "Sinnius Capito", 
  {
   "fragm. servatum apud GELL.": "fragm. servatum apud GELL."
  }, 
  [
   "-100", 
   "-1", 
   "grammaticus", 
   ""
  ]
 ], 
 "MARCELL.": [
  "Marcellinus", 
  {
   "chronica a fine Hieronymi chron.": "chronica a fine Hieronymi chron.", 
   "auct. chron.": "auctarium (in fine mutilum) a quodam Marcellini chronicis additum", 
   "chron.": "pars genuina (bis a Marcellino edita) ad ann. 534 producta"
  }, 
  [
   "450", 
   "534", 
   "comes Illyricianus", 
   ""
  ]
 ], 
 "VINCENT. LER.": [
  "Vincentius Lerinensis", 
  {
   "exc.": "excerpta ex AVG.", 
   "comm.": "commonitorium"
  }, 
  [
   "350", 
   "450", 
   "presbyter", 
   ""
  ]
 ], 
 "SEN. $1": [
  "L. Annaeus Seneca", 
  {
   "Ag.": "Agamemno", 
   "rem. fort.": "de remediis fortuitorum quae exstant", 
   "amic.": "de amicitia fragmenta Palatina", 
   "Herc. O.": "Hercules (Oetaeus)", 
   "Oed.": "Oedipus", 
   "frg.": "deperditorum operum fragmenta minora", 
   "Thy.": "Thyestes", 
   "Phaedr.": "Phaedra sive Hippolytus", 
   "benef.": "de beneficiis", 
   "1": "de\u00a0providentia\u00a0(opus\u00a0senectutis)", 
   "apocol.": "divi Claudii apocolocyntosis", 
   "2": "de\u00a0constantia\u00a0sapientis", 
   "7": "de\u00a0vita\u00a0beata", 
   "6": "consolatio\u00a0ad\u00a0Marciam\u00a0(aet. Calig.)", 
   "9": "de\u00a0tranquillitate\u00a0animi", 
   "8": "de\u00a0otio\u00a0(post\u00a062?)", 
   "11\u00a0(olim\u00a012)": "consolatio\u00a0ad\u00a0Polybium\u00a0(a. 41/44)", 
   "epist.": "epistulae morales ad Lucilium", 
   "Med.": "Medea", 
   "Herc. f.": "Hercules (furens)", 
   "vita patr.": "de vita patris quae exstant", 
   "dial.": "dialogi", 
   "Tro.": "Troades", 
   "10": "de\u00a0brevitate\u00a0vitae\u00a0(a. 48/50)", 
   "3\u20145": "de\u00a0ira\u00a0libri\u00a01\u20143\u00a0(Caligula\u00a0mortuo)", 
   "clem.": "de clementia (opus mutilum)", 
   "Phoen.": "Phoenissae", 
   "nat.": "naturales quaestiones", 
   "12\u00a0(olim\u00a011)": "consolatio\u00a0ad\u00a0Helviam\u00a0(fere\u00a0a. 42)"
  }, 
  [
   "1", 
   "65", 
   "(Seneca philosophus, rhetoris filius)", 
   ""
  ]
 ], 
 "PAPIR. $1": [
  "Q. Papiri(an)us", 
  {
   "de orthographia": "de orthographia"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "[EVG. TOLET.]": [
  "Eugenius <Toletanus>", 
  {
   "[carm.]": "carmina"
  }, 
  [
   "600", 
   "657", 
   "episcopus", 
   ""
  ]
 ], 
 "ALC. AVIT.": [
  "Alcimus Ecdicius Avitus", 
  {
   "c. Ar.": "librorum contra Arianos fragmenta", 
   "epist. epistulae": "diverse", 
   "carm.": "carmina", 
   "c. Eutych.": "contra Eutychianam haeresim", 
   "hom.": "homiliarum quae exstant"
  }, 
  [
   "470", 
   "519", 
   "episcopus Viennensis", 
   ""
  ]
 ], 
 "LVCAN.": [
  "M. Annaeus Lucanus", 
  {
   "frg.": "carminum fragmenta", 
   "bellum civile (Pharsalia; quod carmen epicum Lucanus imperfectum reliquit)": "bellum civile (Pharsalia; quod carmen epicum Lucanus imperfectum reliquit)"
  }, 
  [
   "39", 
   "65", 
   "", 
   ""
  ]
 ], 
 "IOH.": [
  "Iohannes", 
  {
   "epist. ad Sen.": "epistula ad Senarium (in fine mutila)"
  }, 
  [
   "", 
   "", 
   "diaconus", 
   ""
  ]
 ], 
 "IANVAR.": [
  "Ianuarianus", 
  {
   "epist.": "epistula ad Valentinum abbatem Hadrumetinum"
  }, 
  [
   "350", 
   "450", 
   "presbyter Africanus", 
   ""
  ]
 ], 
 "NAEV. IVN.": [
  "Naevius iunior", 
  {
   "Cypr. Il.": "Cypriae Iliados fragmenta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FRONTO": [
  "M. Cornelius Fronto Cirtensis", 
  {
   "operum (fere epistularum) reliquiae, quae in codicibus rescriptis (fere cod. Bobiensi) exstant": "operum (fere epistularum) reliquiae, quae in codicibus rescriptis (fere cod. Bobiensi) exstant", 
   "[adnot.]": "[adnot.]", 
   "Char. gramm.": "fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm."
  }, 
  [
   "100", 
   "170", 
   "", 
   ""
  ]
 ], 
 "CRESC.": [
  "Cresconius", 
  {
   "verba ab Augustino allata": "verba ab Augustino allata"
  }, 
  [
   "350", 
   "450", 
   "grammaticus partis Donati", 
   ""
  ]
 ], 
 "MANCIA": [
  "Helvius Mancia", 
  {
   "or. frg.": "orationis in Scribonium Libonem fragm. servatum apud VAL. MAX."
  }, 
  [
   "-120", 
   "-50", 
   "", 
   ""
  ]
 ], 
 "MACAR.": [
  "Macarius Aegyptius", 
  {
   "ad fil. dei": "epistula ad filios dei q. d. e graeco (inedito) versa"
  }, 
  [
   "300", 
   "391", 
   "", 
   ""
  ]
 ], 
 "PLAC.": [
  "Sex. Placitus Papyriensis", 
  {
   "med.": "liber medicinae"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "MAR. MERC.": [
  "Marius Mercator", 
  {
   "[comp.]": "comparatio dogmatum Pauli Samosateni et Nestorii", 
   "[Theod. exc.]": "Theodori Mopsuesteni al. excerpta", 
   "[Nest. serm.]": "Nestorii sermones XIII de incarnatione Christi", 
   "[Nest. adv. Pel.]": "Nestorii tractatus IV contra haeresim Pelagii", 
   "[Cyr. resp.]": "Cyrilli Alexandrini episcopi responsio ad ea, quae Theodoretus contra anathematismos dixit", 
   "[Cyr. epist. cler. comm.]": "commonitorium epistulae Cyrilli ad clericos subiunctum", 
   "[Theod. expos.]": "expositio pravae fidei Theodori Mopsuesteni (una cum praefatione)", 
   "[Theod. adv. Cyr.]": "excerpta ex libris Theodoreti adversus Cyrillum Alexandrinum episcopum", 
   "[Cyr. epist. syn.]": "Cyrilli Alexandrini episcopi epistula synodica ad Nestorium", 
   "[Nest. epist. Cyr.]": "Nestorii epistula ad Cyrillum Alexandrinum episcopum", 
   "[Cyr. incarn.]": "Cyrilli Alexandrini episcopi scholia de incarnatione unigeniti", 
   "[Cyr. epist. Nest.]": "Cyrilli Alexandrini episcopi epistulae duae ad Nestorium", 
   "[app.]": "appendix ad contradictionem duodecimi anathematismi Nestoriani", 
   "[Cael.]": "commonitorium super nomine Caelestii", 
   "[Theod. refut.]": "refutatio symboli Theodori Mopsuesteni", 
   "[Cyr. apol.]": "Cyrilli Alexandrini episcopi apologeticus pro XII capitibus adversus orientales episcopos", 
   "[Nest. Eph. synod.]": "excerpta antistitum quae recitata sunt contra Nestorium in synodo Ephesiorum", 
   "[Theod. epist.]": "excerpta fere ex epistulis Theodoreti", 
   "[Euther.]": "Eutherii episcopi haeretici fragmenta (una cum interpretis praefatione et epilogo)", 
   "[subnot.]": "liber subnotationum in verba Iuliani (commonitorium adversus haeresim Pelagii)", 
   "[Nest. exc.]": "de diversis Nestorii libris excerpta", 
   "[Cyr. epist. cler.]": "Cyrilli Alexandrini episcopi epistula ad clericos quosdam", 
   "[Nest. epist. Cael.]": "Nestorii epistula ad Caelestinum papam", 
   "[contrad.]": "contradictiones in blasphemias Nestorii XII"
  }, 
  [
   "390", 
   "451", 
   "monachus", 
   "CONC. S I 5 p. 84,17"
  ]
 ], 
 "CELS. $1": [
  "P. Iuventius Celsus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "50", 
   "150", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "OCTAVIA": [
  "Pseudo-Seneca", 
  {
   "Octavia praetexta": "Octavia praetexta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ISID.": [
  "Isidorus", 
  {
   "sent.": "sententiae (sc. Augustini, Gregorii Magni, al.)", 
   "Sueb.": "de regno Sueborum", 
   "[in gen.]": "[in gen.]", 
   "alleg.": "allegoriae quaedam sacrae scripturae (de nominibus legis et euangeliorum)", 
   "fid. cath.": "de fide catholica ex vetere et novo testamento (contra Iudaeos)", 
   "carm.": "carmina (sc. tituli)", 
   "[in Ios.]": "[in Ios.]", 
   "[in reg.]": "in librum quartum regum", 
   "chron.": "chronica (sc. maiora bis edita)", 
   "dedic. hist. chron. II": "dedicatio historiarum Gothorum Vandalorum Sueborum ad Sisenandum regem (genuina?), vol. II", 
   "praef. test.": "praefationes in libros veteris ac novi testamenti (prooemia)", 
   "[in Esdr.]": "[in Esdr.]", 
   "orig.": "origines (etymologiae; opus imperfectum)", 
   "diff.": "differentiae", 
   "lib. num.": "liber numerorum, qui in sanctis scripturis occurrunt", 
   "epist.": "epistulae", 
   "synon.": "synonyma (de lamentatione animae peccatricis)", 
   "Vand.": "de historia Vandalorum", 
   "[ord. creat.]": "de ordine creaturarum", 
   "[in num.]": "[in num.]", 
   "[in lev.]": "[in lev.]", 
   "eccl. off.": "officia (de ecclesiasticis officiis)", 
   "[in Macc.]": "[in Macc.]", 
   "Goth.": "de origine Gothorum", 
   "[in iud.]": "[in iud.]", 
   "[in exod.]": "[in exod.]", 
   "[diff. app.]": "[diff. app.]", 
   "vir. ill.": "de viris illustribus", 
   "expos. in gen.": "mysticorum expositiones sacramentorum (quaestiones in vetus testamentum, sc. in gen., exod., lev., num., deut., Ios., iud., reg., Esdr., Macc.), in genesin", 
   "reg. monach.": "regula monachorum", 
   "[in deut.]": "[in deut.]", 
   "nat.": "de natura rerum", 
   "ort. et obit.": "de ortu et obitu patrum", 
   "[quaest. test.]": "de vetere et novo testamento quaestiones"
  }, 
  [
   "560", 
   "636", 
   "episcopus Hispalensis", 
   ""
  ]
 ], 
 "SCARILA": [
  "Scarila", 
  {
   "Fulg. Rusp. epist.": "epistula ad Fulgentium Ruspensem"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "RVF.": [
  "Rufus Ephesius", 
  {}, 
  [
   "80", 
   "150", 
   "medicus", 
   ""
  ]
 ], 
 "MEROB.": [
  "Flavius Merobaudes", 
  {
   "Christ.": "de Christo", 
   "carm.": "carmina IV", 
   "pros. frg. 2B": "panegyricus prosa oratione conscriptus (paneg. 1, sc. dictus Aetio cos. II a. 437), fragm. 2B", 
   "poet.": "panegyricus poeticus"
  }, 
  [
   "400", 
   "499", 
   "ex Hispania", 
   ""
  ]
 ], 
 "SYMPH.": [
  "Symp(h)osius", 
  {
   "aenigmata": "aenigmata"
  }, 
  [
   "300", 
   "499", 
   "", 
   ""
  ]
 ], 
 "CAEPIO": [
  "Q. Servilius Caepio", 
  {
   "orationis (in M. Aemilium Scaurum lege Varia) fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm.": "orationis (in M. Aemilium Scaurum lege Varia) fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm."
  }, 
  [
   "-150", 
   "-90", 
   "", 
   ""
  ]
 ], 
 "MAT. $1": [
  "Cn. Matius", 
  {
   "epistulae ad Ciceronem": "epistulae ad Ciceronem"
  }, 
  [
   "-70", 
   "10", 
   "", 
   ""
  ]
 ], 
 "FIRMIL.": [
  "Firmilianus <Caesariensis>", 
  {
   "epistula ad Cyprianum e graeco versa": "epistula ad Cyprianum e graeco versa"
  }, 
  [
   "200", 
   "268", 
   "episcopus Caesareae Cappadociae", 
   ""
  ]
 ], 
 "AGENN.": [
  "Agen(ni)us Vrbicus", 
  {
   "de controversiis agrorum": "de controversiis agrorum"
  }, 
  [
   "400", 
   "499", 
   "gromaticus", 
   ""
  ]
 ], 
 "PHILIPP.": [
  "Philippus", 
  {
   "rec. long.": "recensio longior", 
   "rec. brev.": "recensio brevior", 
   "in Iob": "commentarius in Iob"
  }, 
  [
   "380", 
   "431", 
   "presbyter", 
   ""
  ]
 ], 
 "CENS.": [
  "Censorinus", 
  {
   "de die natali": "de die natali"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "CATO": [
  "M. Porcius Cato Censorius", 
  {
   "mor. frg.": "carmen (?) de moribus", 
   "iur. civ. Fest.": "commentariorum iuris civilis (suntne filii?) fragm. servatum apud FEST.", 
   "ad fil. frg.": "fragmenta, quae Iordan libris ad Marcum filium (sc. praeceptis, certe medicinam agriculturam rhetoricam complectentibus) tribuit", 
   "orat.": "orationum fragmenta", 
   "agr.": "de agri cultura", 
   "[frg. dub. ]": "fragmenta dubiae auctoritatis", 
   "frg. Colum.": "fragmenta in collectionibus a nobis adhibitis omissa e. g. fragm. servatum apud COLVM.", 
   "orig.": "origines", 
   "[dict.]": "Catonis dicta ab Iordan collecta (cave confundas haec cum aliorum dictis ab ipso Catone collectis aut cum PS. CATONE)", 
   "inc. libr. frg.": "incertorum librorum fragmenta", 
   "mil. frg.": "de re militari", 
   "epist. frg.": "epistularum fragmenta"
  }, 
  [
   "-234", 
   "-149", 
   "r\u00f6mischer Politiker und Schriftsteller", 
   ""
  ]
 ], 
 "PS. AMBR.": [
  "Pseudo-Ambrosius", 
  {
   "carm. de tern. num.": "carmen de ternarii numeri excellentia", 
   "spir. sanct.": "de spiritu sancto", 
   "exorc.": "exorcismus", 
   "dign. sacerd.": "de dignitate sacerdotali", 
   "serm.": "sermones", 
   "cond. human.": "de dignitate conditionis humanae", 
   "lib. fid.": "libellus fidei", 
   "symb.": "exhortatio ad neophytos de symbolo", 
   "in Phil.": "tractatus (immo sermo) in Pauli epistulam ad Philippenses 4,4\u20147", 
   "concord.": "de concordia Matthaei et Lucae in genealogia Christi", 
   "serm. Sess.": "sermones codice Sessoriano 55 traditi", 
   "Te deum": "hymnus ille celeberrimus 'Te deum laudamus'", 
   "de anima": "altercationis contra eos, qui animam non confitentur esse facturam aut ex traduce esse dicunt, fragmentum", 
   "in Luc.": "sermo q. d. in Lucam", 
   "[sacr.]": "AMBR. sacr.", 
   "mor. Brachm.": "Palladii operis de gentibus Indiae et Bragmanibus versio quae dicitur De moribus\u00a0Brachmanorum\u00a0 (i. e. Commonitorium Palladii et sqq.)", 
   "epist.": "epistulae", 
   "[epist. de monach.]": "epistulae duae de monacho energumeno", 
   "paenit.": "de paenitentia", 
   "tract. Gratian.": "tractatus de euangelio q. d. ad Gratianum Augustum", 
   "[philos. epist.]": "philosophorum epistulae", 
   "pudic.": "de pudicitia et castitate fragmentum", 
   "laps. virg.": "de lapsu Susannae sive de lapsu virginis consecratae", 
   "mans.": "de XLII mansionibus filiorum Israel", 
   "act. Seb.": "acta Sebastiani martyris", 
   "[prec.]": "precationes", 
   "[epist. de fid.]": "epistula de fide ad Hieronymum", 
   "apol. Dav. II": "apologia David altera", 
   "nat. rer.": "versus de naturis rerum", 
   "trin.": "de trinitate vel in symbolum apostolorum tractatus", 
   "ad virg. dev.": "ad virginem devotam"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "REN. FRIG.": [
  "Renatus Profuturus Frigeridus", 
  {
   "historiarum fragmenta servata apud GREG. TVR. Franc.": "historiarum fragmenta servata apud GREG. TVR. Franc."
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "VELL.": [
  "Velleius Paterculus", 
  {
   "historiae Romanae": "historiae Romanae"
  }, 
  [
   "-20", 
   "30", 
   "", 
   ""
  ]
 ], 
 "CAEL.": [
  "M. Caelius Rufus", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.", 
   "ad Ciceronem epistulae": "ad Ciceronem epistulae"
  }, 
  [
   "-88", 
   "-48", 
   "", 
   ""
  ]
 ], 
 "DICT.": [
  "Dictys <Cretensis>", 
  {
   "ephemeris belli Troiani": "ephemeris belli Troiani"
  }, 
  [
   "300", 
   "399", 
   "angeblicher Verfasser/Pseudonym", 
   "quam L. Septimius quidam e graeco latine vertit retractavitque"
  ]
 ], 
 "VAL.": [
  "Valerius", 
  {
   "com.": "comoediae (an mimi?) fragmentum unicum"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ]
};

let abkGrLaDGE = {
 "MAX. TYR.": [
  "Maximus Tyrius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "TIM. I ALEX.": [
  "Timotheus I Alexandrinus", 
  {
   "Resp": "Responsiones canonicae"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "DEM. AL.": [
  "Demetrius Alexandrinus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIPHAN.": [
  "Antiphanes Macedo", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ARISTO PHIL.": [
  "Aristo Ceus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "STHENEL.": [
  "Sthenelus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "MENECR.": [
  "Menecrates", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "CALLIPPUS": [
  "Callippus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "HYPER.": [
  "Hyperechius", 
  {
   "Mon": "Adhortatio ad monachos"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARCELLUS ANCYRANUS": [
  "Marcellus Ancyranus", 
  {
   "Fr": "Fragmenta", 
   "Ep": "Epistula al Iulium papam"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ANDRONIC. RHOD.": [
  "Andronicus Rhodius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "SIMM.": [
  "Simmias", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "elegiacus", 
   ""
  ]
 ], 
 "APOCR. EZ.": [
  "Apocryphon Ezechiel", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTOBUL. $2": [
  "Aristobulus Milesius", 
  {
   "Ital": "Italica"
  }, 
  [
   "a. Plu.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PHOT. TYR.": [
  "Photius Tyrius", 
  {
   "Libell": "Libellus", 
   "Supplic": "Supplicatio"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APUL.": [
  "Apuleius", 
  {
   "Soc": "de deo Socratis", 
   "Mund": "de mundo", 
   "Flor": "Florida", 
   "Apol": "Apologia", 
   "Plat": "de Platone", 
   "Met": "Metamorphoses"
  }, 
  [
   "II d. C.", 
   "", 
   "scriptor latinus", 
   ""
  ]
 ], 
 "CLITONYMUS": [
  "Clitonymus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "APOLLAS (APELLAS) PONTICUS": [
  "Apollas (Apellas) Ponticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "APOLLOD. ALEX.": [
  "Apollodorus Alexandrinus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "SAMUS": [
  "Samus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "TRANS. MARIAE": [
  "Transitus Mariae", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANDRO HAL.": [
  "Andro Halicarnassensis", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PHILITAS": [
  "Philitas", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMOCH.": [
  "Demochares", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "LIBER.": [
  "Liberius", 
  {
   "Ep. Ath": "Epistula ad Athanasium", 
   "Ep. Maced": "Epistula ad Macedonianos"
  }, 
  [
   "IV d. C.", 
   "", 
   "papa", 
   ""
  ]
 ], 
 "PHILOSTEPH. COM.": [
  "Philostephanus", 
  {}, 
  [
   "III/II a. C. ?", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "ARTEM. EPH.": [
  "Artemidorus Ephesius", 
  {
   "Geog": "Geographumena"
  }, 
  [
   "II a. C.", 
   "", 
   "historicus et geographus", 
   ""
  ]
 ], 
 "EU. MATTHIAE": [
  "Euangelium", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THDS. IMP.": [
  "Theodosius II", 
  {
   "Ep. Eph": "Epistula scripta ad CEph", 
   "Ep. Licin": "Epistula ad Liciniam Eudoxiam", 
   "Ep. Diosc": "Epistula ad Dioscurum", 
   "Syn": "Sacra ad synodum Ephesinam", 
   "Ep. Val": "Epistula ad Valentinianum", 
   "Ep. Gall": "Epistula ad Gallam Placidiam", 
   "Ep. Acac": "Epistula ad Acacium Berroeensem", 
   "Ep. Io. Ant": "Epistula ad Iohannem Antiochenum", 
   "Common": "Commonitorium ad Damascium", 
   "Ep. Cyr": "Epistulae ad Cyrillum", 
   "Sacr": "Epistulae sacrae", 
   "Ep. Sym": "Epistula ad Symeonem Stylitem", 
   "Ep. Flau": "Epistula ad Flauianum"
  }, 
  [
   "V d. C.", 
   "", 
   "imperator", 
   ""
  ]
 ], 
 "CLEONID.": [
  "Cleonides", 
  {
   "Harm": "Introductio harmonica"
  }, 
  [
   "II d. C.", 
   "", 
   "musicus", 
   ""
  ]
 ], 
 "FLACCUS, TULLIUS": [
  "Flaccus, Tullius", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ORIGENES": [
  "Origenes", 
  {
   "Fr. Incert. in Ier": "Fragmentum incertum in Ie", 
   "Dial": "Dialogus cum Heraclide", 
   "Fr. in Lam": "Fragmenta in La", 
   "Pasch": "de pascha", 
   "Hom": "in Ezech", 
   "Exc. in Ps": "Excerpta in Ps", 
   "Cels": "contra Celsum", 
   "Mart": "Exhortatio ad martyrium", 
   "Fr. in Mt": "Fragmenta in Eu. Matt", 
   "Fr": "in Io", 
   "Fr. in Is": "Fragmentum in Is", 
   "Comm. in Rom": "Fragmenta ex commentariis in Ep. Rom", 
   "Comm. Ser": "in Mt", 
   "Engast": "de engastrimytho", 
   "Comm. in Eph": "Fragmenta ex commentariis in Ep. Eph", 
   "Fr. in Dan": "Fragmenta in Da", 
   "Comm. in 1Cor": "Fragmenta ex commentariis in 1Ep. Cor", 
   "Fr. in Ps": "Fragmenta in Ps", 
   "Fr. Hom": "in Ier", 
   "Fr. in Ezech": "Fragmenta in Ez", 
   "Princ": "de principiis", 
   "Or": "de oratione", 
   "Ep. Gr. Thaum": "Epistula ad Gregorium Thaumaturgum", 
   "Hom. in": "Reg", 
   "Comm. in Mt": "Fragmenta ex commentariis in Eu. Matt", 
   "Cant": "Commentarius in Ca", 
   "Io": "Commentarii in Eu. Io"
  }, 
  [
   "III d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "T. SAL.": [
  "Testamentum Salomonis", 
  {
   "T. Sal. C": "recensio C", 
   "T. Sal": "recensiones A et B", 
   "T. Sal. D": "Vita Salomonis (e codice D)"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIOCH. AEG.": [
  "Antiochus Aegaeus", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CONST. DIAC.": [
  "Constantinus", 
  {
   "Laud": "Laudatio omnium martyrum"
  }, 
  [
   "V d. C.", 
   "", 
   "diaconus", 
   ""
  ]
 ], 
 "CALLICR. COM.": [
  "Callicrates", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "HERMESIAN.": [
  "Hermesianax", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "elegiacus", 
   ""
  ]
 ], 
 "SIMYL. $2": [
  "Simylus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "ANAPH. PIL.": [
  "Anaphora Pilati A, B", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HICES.": [
  "Hicesius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "ARISTID.": [
  "Aristides", 
  {
   "Apol": "Apologia"
  }, 
  [
   "II d. C.", 
   "", 
   "apologista", 
   ""
  ]
 ], 
 "AEN. HIST.": [
  "Aeneas", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ABLABIUS ILLUSTRIUS": [
  "Ablabius Illustrius", 
  {}, 
  [
   "V d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "MELIT. ANT.": [
  "Melitus", 
  {
   "Fr": "Fragmentum", 
   "Hom": "Homilia", 
   "Ep": "Epistula synodalis ad Iouianum imperatorem"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARTEMO": [
  "Artemo", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "APOLLON. MOL.": [
  "Apollonius Molo", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DIOX.": [
  "Dioxippus", 
  {}, 
  [
   "IV a. C. ?", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "POLEM. PHGN.": [
  "Pseudo Polemo", 
  {}, 
  [
   "II d. C.", 
   "", 
   "physiognomonicus", 
   ""
  ]
 ], 
 "THEODORUS ALEXANDRINUS": [
  "Theodorus Alexandrinus", 
  {
   "Libell": "Libellus"
  }, 
  [
   "V d. C.", 
   "", 
   "diaconus", 
   ""
  ]
 ], 
 "AESCHRIO PERG.": [
  "Aeschrio Pergamenus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "GNOM. OX.": [
  "Gnomica Oxoniensia", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTID.": [
  "Antidotus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "PTOL. MEGALOP.": [
  "Ptolemaeus Megalopolitanus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DIAGOR.": [
  "Diagoras", 
  {}, 
  [
   "V a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "ANON. BELLERM.": [
  "Anonyma de musica scripta Bellermanniana", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOC. ADAM": [
  "Apocalypsis Adam fragmenta", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "QUADRATUS ATHENIENSIS": [
  "Quadratus Atheniensis", 
  {
   "Fr": "Fragmentum ex apologia"
  }, 
  [
   "II d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PAPP.": [
  "Pappus", 
  {
   "in Alm": "in Ptolemaei Almagesto libri"
  }, 
  [
   "III d. C.", 
   "", 
   "mathematicus", 
   ""
  ]
 ], 
 "EPHR. SYR.": [
  "Ephraem Syrus", 
  {
   "El": "Sermo in Eliam", 
   "Enc. Bas": "Encomium in Basilium Magnum", 
   "Non rid": "non esse ridendum", 
   "Abr. et Is": "Sermo in Abraham et Isaac", 
   "Iudic": "Homilia de iudicio et pretiosa cruce", 
   "Ion": "Sermo in Ionam prophetam et de paenitentia Niniuitarum", 
   "Abr": "Sermo in Abraham", 
   "Mag": "oratio de natiuitate (\ufffdcum Magi uenerunt Hierosolymam\ufffd)", 
   "Poenit. Can": "Canones poenitentiales", 
   "Oct": "Fragmenta in Octateuchum"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "AFRIC. IUR.": [
  "Africanus, Sextus Caecilius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "AN. OX.": [
  "Anecdota Graeca e cod. MSS. Bibl. Oxon.", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DERCYL.": [
  "Dercylus", 
  {}, 
  [
   "a. Call.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EUPHANES": [
  "Euphanes", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "CYRIAC.": [
  "Cyriacus", 
  {
   "Laz": "Hymnus in Lazarum"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "DOSIAD. HIST.": [
  "Dosiades", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MESOM.": [
  "Mesomedes", 
  {}, 
  [
   "II d. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "LEONT. BYZ.": [
  "Leontius Byzantinus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "EUANGELIUM ANONYMUM": [
  "Euangelium Anonymum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PISO": [
  "Piso", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "LATERCULI ALEXANDRINI": [
  "Laterculi Alexandrini", 
  {}, 
  [
   "", 
   "", 
   "(Laterc. Alex. )", 
   ""
  ]
 ], 
 "ASIUS": [
  "Asius", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "epicus et lyricus", 
   ""
  ]
 ], 
 "ANTEO ARSINOENSIS": [
  "Anteo Arsinoensis", 
  {
   "Ep": "Epistula ad Petrum Fullonem"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "SALLUST.": [
  "Sallustius", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "EUMEDES": [
  "Eumedes", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "AGIAS": [
  "Agias", 
  {}, 
  [
   "IV/", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PHILAENIS SAMIA": [
  "Philaenis Samia", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "rerum eroticarum scriptor", 
   ""
  ]
 ], 
 "ARTEM.": [
  "Artemidorus Daldianus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "onirocriticus", 
   ""
  ]
 ], 
 "MITHR.": [
  "Mithridates", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epistolographus", 
   ""
  ]
 ], 
 "NUMENIUS": [
  "Numenius", 
  {}, 
  [
   "a. II d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "DEM. SER.": [
  "Demetrius Seriphius", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "TROPHIL.": [
  "Trophilus", 
  {}, 
  [
   "", 
   "", 
   "paradoxographus", 
   ""
  ]
 ], 
 "BIANOR": [
  "Bianor", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "epigramamaticus", 
   ""
  ]
 ], 
 "PSEUDO DIOPHANTUS": [
  "Pseudo Diophantus", 
  {}, 
  [
   "", 
   "", 
   "mathematicus (Ps. Dioph. )", 
   ""
  ]
 ], 
 "FEST.": [
  "Festus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "grammaticus latinus", 
   ""
  ]
 ], 
 "HERMOCL.": [
  "Hermocles", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "FORTUNATIANUS, CONSULTIUS": [
  "Fortunatianus, Consultius", 
  {
   "Rh": "Ars Rhetorica"
  }, 
  [
   "IV d. C.", 
   "", 
   "rhetor latinus", 
   ""
  ]
 ], 
 "MARGITES": [
  "Margites", 
  {}, 
  [
   "VII/", 
   "", 
   "", 
   ""
  ]
 ], 
 "THDT.": [
  "Theodoretus Cyrensis", 
  {
   "Qu. in": "Pa", 
   "H. Rel": "Historia religiosa", 
   "Fr": "Fragmentum in Ps", 
   "Trin": "de Sancta Trinitate", 
   "Is": "Interpretatio in Isaiam", 
   "Qu. in Ge. , Ex. , Le. , Nu. , De. , Io. , Id. , Ru": "Quaestiones in Octateuchum", 
   "Eran": "Eranistes", 
   "Ep. Conc": "Epistulae", 
   "Hom": "Homilia Chalcedoni habita", 
   "Char": "de diuina charitate", 
   "Ep. Sirm": "Epistulae", 
   "Orth": "Quaestiones et responsiones ad orthodoxos", 
   "Affect": "Graecarum affectionum curatio", 
   "Ep": "Epistulae", 
   "Inc": "de incarnatione domini"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "DEMOCR. EPH.": [
  "Democritus Ephesius", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PH. HERACL.": [
  "Philo Heracleensis", 
  {}, 
  [
   "III a. C.", 
   "", 
   "paradoxographus", 
   ""
  ]
 ], 
 "EUANGELIA": [
  "Euangelia", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MEMN. EPH.": [
  "Memno Ephesinus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "DID.": [
  "Didymus", 
  {
   "Fr. Lex": "Fragmenta", 
   "OH": "Opuscula historica", 
   "Diorth": "de aristarchea diorthosi", 
   "Plat": "de dubiis apud Platonem lectionibus", 
   "OG": "Opuscula grammatica", 
   "Fr. Dub": "Dubiae sedis fragmenta", 
   "CP": "Commentarii poetarumque recensiones", 
   "in D": "in Demosthenem"
  }, 
  [
   "I a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "AEL. HIST.": [
  "Aelius Dius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HERMODORUS SYRACUSANUS": [
  "Hermodorus Syracusanus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "biographus (Hermod. Syr. )", 
   ""
  ]
 ], 
 "ANTIG. $2": [
  "Antigonus Carystius", 
  {
   "Mir": "Mirabilia"
  }, 
  [
   "", 
   "", 
   "paradoxographus", 
   ""
  ]
 ], 
 "ANTIG. $3": [
  "Antigonus Carystius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "poeta", 
   ""
  ]
 ], 
 "ERYC.": [
  "Erycius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "CYPR. $2": [
  "Cyprianus Carthaginiensis", 
  {
   "Ep. Sept": "Epistula septuagesima", 
   "Fr. El": "Fragmentum de eleemosyna", 
   "Testim": "ad Quirinum testimoniorum libri III", 
   "Ep": "Epistulae", 
   "Fr. Fi": "Fragmentum ex epistula ad Fidonem"
  }, 
  [
   "III d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ANTID. LONDON, ETC.": [
  "Antidotum London, Bamber, Reichenau", 
  {}, 
  [
   "", 
   "", 
   ", etc.", 
   ""
  ]
 ], 
 "XENOCL.": [
  "Xenocles", 
  {}, 
  [
   "V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "PHILONID. II": [
  "Philonides II", 
  {}, 
  [
   "", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "SIMYLUS": [
  "Simylus", 
  {}, 
  [
   "III/I a. C.", 
   "", 
   "poeta didacticus", 
   ""
  ]
 ], 
 "ANTHEM.": [
  "Anthemius", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "paradoxographus", 
   ""
  ]
 ], 
 "AMASIS": [
  "Amasis", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "epistolographus", 
   ""
  ]
 ], 
 "STESICH.": [
  "Stesichorus", 
  {}, 
  [
   "VII/", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "DIODOR. T.": [
  "Diodorus Tarsensis", 
  {
   "Comm. Ps": "Commentarii in Psalmos", 
   "Rom": "Fragmenta in Ep. Rom", 
   "Ps": "Fragmenta in Ps", 
   "Iud": "Fragmenta in Iud", 
   "Fat": "Excerpta de opere contra fatum", 
   "Gen": "Fragmenta in Ge", 
   "Ex": "Fragmenta in Ex", 
   "Dt": "Fragmenta in De", 
   "Synous": "Fragmenta ex libris contra Synousiastas", 
   "Oct": "Fragmenta in Octateuchum", 
   "Reg": "Fragmenta in Reges"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ANDROETAS": [
  "Androetas", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DIOG. APOLL.": [
  "Diogenes Apolloniates", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHOTINUS": [
  "Photinus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "IV d. C.", 
   "", 
   "et alii", 
   ""
  ]
 ], 
 "MACED.": [
  "Macedonicus Amphipolites", 
  {}, 
  [
   "I a. C. ?", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "ANECD. LUDW.": [
  "Anecdota Graeca Orthographica", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICARCH.": [
  "Nicarchus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "LYC. HIST.": [
  "Lycus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PHYLARCH. $2": [
  "Phylarchus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "THOM. SCHOL.": [
  "Thomas Scholasticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "CAI. R.": [
  "Caius Romanus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II/III d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "VALENT. IMP.": [
  "Valentinianus III Imperator", 
  {
   "Ep. Episc": "Epistula ad episcopos Asiae et Phrygiae", 
   "Ep. Thds": "Epistula ad Theodosium", 
   "Ep. Nic": "Epistulae ad Nicomedenses"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ABAS": [
  "Abas", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "D. S.": [
  "Diodorus Siculus", 
  {
   "Fr. inc": "Fragmenta incertae sedis"
  }, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CRITO": [
  "Crito", 
  {}, 
  [
   "III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "LYSIM. $2": [
  "Lysimachus Alexandrinus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ARISTEAS IUDAEUS": [
  "Aristeas Iudaeus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "epistolographus", 
   ""
  ]
 ], 
 "TI. LOCR.": [
  "Timaeus Locrus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "CONSTANTIUS IMP.": [
  "Constantius I", 
  {
   "Them": "Epistula ad senatum pro Themistio"
  }, 
  [
   "IV d. C.", 
   "", 
   "imperator", 
   ""
  ]
 ], 
 "LAUD. AGRIPP.": [
  "Laudatio funebris Agrippae", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAX. GRAMM.": [
  "Maximus", 
  {
   "Aug. Epist": "Augustini epistulae"
  }, 
  [
   "a. IV/", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "PERS.": [
  "Perses", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "V. METROPH.": [
  "Vita Metrophanis et Alexandri episcoporum Constantinopolis", 
  {}, 
  [
   "V d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZOILUS": [
  "Zoilus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HEGESIN.": [
  "Hegesinus", 
  {}, 
  [
   "", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "TRAIANUS": [
  "Traianus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "imperator epigrammaticus", 
   ""
  ]
 ], 
 "MONIMUS": [
  "Monimus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "paradoxographus", 
   ""
  ]
 ], 
 "PLB.": [
  "Polybius", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ALEXINUS ELEUS": [
  "Alexinus Eleus", 
  {}, 
  [
   "IV a. C. ?", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "HESIANAX": [
  "Hesianax", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "BATR.": [
  "Batrachomyomachia", 
  {}, 
  [
   "I a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "MEGES": [
  "Meges", 
  {}, 
  [
   "I d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "ANONYMI": [
  "Anonymi", 
  {
   "Trop": "de tropis"
  }, 
  [
   "", 
   "", 
   "(Anon. )", 
   ""
  ]
 ], 
 "EUPHRO": [
  "Euphro", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "HABRO": [
  "Habro", 
  {}, 
  [
   "I d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "NEANTHES CYZICENUS IUNIOR": [
  "Neanthes Cyzicenus Iunior", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "historicus (Neanth. Cyz. Iun. )", 
   ""
  ]
 ], 
 "BIO PROC.": [
  "Bio Proconnesius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DEMETRIUS": [
  "Demetrius", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "ANONYMUS DE L. VERI BELLO PARTHICO": [
  "Anonymus de L. Veri bello parthico", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CHRYSOGONUS": [
  "Chrysogonus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "NAUSIPH.": [
  "Nausiphanes", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "PHRYN. TRAG.": [
  "Phrynichus", 
  {
   "Fr. Lyr": "Fragmentum lyricum"
  }, 
  [
   "VI/V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "IO SAM.": [
  "Io Samius", 
  {}, 
  [
   "V a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "COLL. AUELL.": [
  "Collectio Auellana", 
  {}, 
  [
   "IV/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VIT. PROPHET.": [
  "Vitae Prophetarum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HYMN.": [
  "Hymni Anonymi", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPARCH. COM.": [
  "Hipparchus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "MEN. EPH.": [
  "Menander Ephesius", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SM.": [
  "Symmachus", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "interpres Veteris Testamenti", 
   ""
  ]
 ], 
 "HIERON.": [
  "Hieronymus Eusebius Stridonensis", 
  {
   "A. Ruf": "Aduersus libros Rufini", 
   "Is": "Commentarius in Is", 
   "A. Iouin": "Aduersus Iouinianum", 
   "Pelag": "Aduersus Pelagianos", 
   "V. Paul. A, B": "Vita Pauli eremitae.", 
   "Mt": "Commentarius in Eu. Matt", 
   "Ep": "Epistulae", 
   "Vir. Ill": "de uiris illustribus"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "EXC. CAS.": [
  "Excerptum Casanatense", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYSIUS RHODIUS": [
  "Dionysius Rhodius", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PHYSIOG.": [
  "Physiognomonici", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZENOD. TRAG.": [
  "Zenodotus", 
  {}, 
  [
   "", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "XANTH. LYR.": [
  "Xanthus", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "RUF.": [
  "Rufus", 
  {
   "Anat": "Anatomia", 
   "Sch": "Scholia", 
   "Syn. Puls": "Synopsis de pulsibus", 
   "Oss": "de ossibus", 
   "Fr": "Fragmenta", 
   "Ren. Ves": "de renum et uessicae affectionibus", 
   "Onom": "de onomasia", 
   "Interrog": "Interrogationes", 
   "Sat. Gon": "de satyriasmo et gonorrhoea", 
   "Podagr": "de podagra"
  }, 
  [
   "I/II d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "PYTHEAS MASSILIENSIS": [
  "Pytheas Massiliensis", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "geographus", 
   ""
  ]
 ], 
 "XENO": [
  "Xeno", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "A\u00cbT.": [
  "A\u00ebtius", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "DEMODAMAS": [
  "Demodamas", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "COMMOD.": [
  "Commodianus", 
  {
   "Apol": "Carmen apologeticum", 
   "Instr": "Instructiones per litteras uersuum primas"
  }, 
  [
   "III d. C.", 
   "", 
   "poeta latinus christianus", 
   ""
  ]
 ], 
 "BELL. SYR. ANN.": [
  "Belli Syrii Annales", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SULP. MAX.": [
  "Sulpicius Maximus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "STEPH. G.": [
  "Stephanus Gobarus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PAMPHIL. $2": [
  "Pamphilus", 
  {}, 
  [
   "", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "POL. SILU.": [
  "Polemius, Siluius", 
  {
   "Laterc": "Laterculus"
  }, 
  [
   "V d. C.", 
   "", 
   "chronographus", 
   ""
  ]
 ], 
 "CEREAL.": [
  "Cerealius", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "SEXT.": [
  "Sextus", 
  {
   "Sent": "Sententiae"
  }, 
  [
   "II d. C. ?", 
   "", 
   "pythagoricus", 
   ""
  ]
 ], 
 "BUCOLICORUM FRAGMENTA PAPYRACEA": [
  "Bucolicorum Fragmenta Papyracea", 
  {
   "Vind": "Fragmentum Bucolicum Vindobonense"
  }, 
  [
   "", 
   "", 
   "(Bucol. Fr. Pap. )", 
   ""
  ]
 ], 
 "LUCIL.": [
  "Lucilius, Gaius", 
  {}, 
  [
   "II a. C.", 
   "", 
   "poeta latinus", 
   ""
  ]
 ], 
 "NAEU.": [
  "Naeuius", 
  {
   "Poet": "Carminum epicorum fragmenta", 
   "Praet": "Praetextarum fragmenta", 
   "Trag": "Tragoediarum fragmenta", 
   "Com": "Palliatarum fragmenta"
  }, 
  [
   "III d. C.", 
   "", 
   "poeta latinus", 
   ""
  ]
 ], 
 "SCYL.": [
  "Scylax", 
  {
   "Per": "Periplus"
  }, 
  [
   "VI/V a. C.", 
   "", 
   "geographus", 
   ""
  ]
 ], 
 "IUST. PHIL.": [
  "Iustinus Martyr", 
  {
   "Coh. Gr": "Cohortatio ad Graecos", 
   "Dial": "Dialogus", 
   "Qu. Gr": "Quaestiones Graecae", 
   "Res": "de resurrectione (fragmenta)", 
   "Apol": "Apologiae", 
   "Fr": "Fragmenta", 
   "Or. Gr": "Oratio ad Graecos", 
   "Ep. Zen. et Ser": "Epistula ad Zenam et Serenum", 
   "Monarch": "De Monarchia", 
   "Confut": "Confutatio quorundam Aristotelis dogmatum", 
   "Qu. et Resp": "Quaestiones et responsiones ad orthodoxos", 
   "Qu. Chr": "Quaestiones Christianae", 
   "C. Gr": "contra Graecos"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGLAOSTHENES": [
  "Aglaosthenes", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ORAC. CHALD.": [
  "Oracula Chaldaica", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUTOC.": [
  "Eutocius", 
  {
   "in Con": "Commentaria in Conica", 
   "in Sph. Cyl": "in libros de sphaera et cylindro", 
   "in Aequil": "in libros de planorum aequilibri", 
   "in Circ": "in dimensionem circuli"
  }, 
  [
   "VI d. C.", 
   "", 
   "mathematicus", 
   ""
  ]
 ], 
 "CHARINUS": [
  "Charinus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "NICOSTR.": [
  "Nicostratus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "IREN. HARP.": [
  "Irenaeus Harpasianus", 
  {
   "Fr": "Fragmentum"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "MARC. ER.": [
  "Marcus", 
  {
   "Fr": "Fragmentum", 
   "Temp": "Capitula de temperantia (Opusc. 6)", 
   "Leg": "de lege spirituali (Opusc. 1)", 
   "Paen": "de paenitentia (Opusc. 3)", 
   "Nic": "ad Nicolaum praecepta animae salutaria (Opusc. 5)", 
   "Nest": "aduersus Nestorianos", 
   "Iei": "de ieiunio (Opusc. 9)", 
   "Consult": "Consultatio intellectu cum sua ipsius anima (Opusc. 8)", 
   "Melch": "de Melchisedech (Opusc. 10)", 
   "Bapt": "de baptismo (Opusc. 4)", 
   "Iustif": "de his qui putant se ex operibus iustificari (Opusc. 2)", 
   "Causid": "Disputatio cum quodam causidico (Opusc. 7)", 
   "Inc": "de incarnatione siue aduersus Nestorianos (Opusc. 11)"
  }, 
  [
   "V d. C.", 
   "", 
   "eremita", 
   ""
  ]
 ], 
 "IUST. IMP.": [
  "Iustinus II", 
  {
   "Edict": "Edictum"
  }, 
  [
   "VI d. C.", 
   "", 
   "imperator", 
   ""
  ]
 ], 
 "DEMOCH. $2": [
  "Democlides", 
  {}, 
  [
   "a. Ath.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EPIL.": [
  "Epilycus", 
  {}, 
  [
   "", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "THGN. TRAG.": [
  "Theognis", 
  {}, 
  [
   "V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "PHAN. $2": [
  "Phanias", 
  {
   "Fr. Hist": "Fragmenta historica"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "IUL. EPIGR.": [
  "Iulianus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "HADR.": [
  "Hadrianus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "imperator epigrammaticus", 
   ""
  ]
 ], 
 "IUL. PAP.": [
  "Iulius", 
  {
   "Ep. Alex": "Epistula ad Alexandrinos", 
   "Fr": "Fragmentum de homoousio", 
   "Ep. encycl": "Epistula encyclica", 
   "Ep. Dian": "Epistula ad Dianium et Flacillum", 
   "Corp. et Diu": "de unione corporis et diuinitatis in Christo"
  }, 
  [
   "IV d. C.", 
   "", 
   "papa", 
   ""
  ]
 ], 
 "TIM.": [
  "Timaeus", 
  {
   "Lex": "Lexicum platonicum"
  }, 
  [
   "III d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "PROU. BODL.": [
  "Prouerbia Bodleiana", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMO": [
  "Hermo", 
  {}, 
  [
   "II a. C. ?", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "PHILYLL.": [
  "Philyllius", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "IAMBL.": [
  "Iamblichus", 
  {
   "Sch": "Scholia", 
   "Comm. Math": "de communi mathematica scientia", 
   "Myst": "de mysteriis", 
   "in Nic": "in Nicomachi arithmeticam introductionem", 
   "Protr": "Protrepticus", 
   "de An": "de anima"
  }, 
  [
   "IV d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "PAMPH. ABYD.": [
  "Pamphilus Abydenus", 
  {
   "Ep. Petr": "Epistula ad Petrum episcopum Antiochiae", 
   "Ep. Io": "Fragmentum epistulae ad Iohannem Antiochenum"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PHOEN.": [
  "Phoenix", 
  {}, 
  [
   "III a. C.", 
   "", 
   "iambographus", 
   ""
  ]
 ], 
 "POLYAEN.": [
  "Polyaenus", 
  {
   "Fr": "Fragmenta", 
   "Exc": "Excerpta"
  }, 
  [
   "II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "BACIS": [
  "Bacis", 
  {}, 
  [
   "VI/V a. C. ?", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ANAT. CP": [
  "Anatolius Constantinopolitanus", 
  {
   "Ep": "Epistulae"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "MENESTH.": [
  "Menesthenes", 
  {}, 
  [
   "a. Ath.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "THEOT. $2": [
  "Theotimus", 
  {
   "Ital": "Italica"
  }, 
  [
   "d. Plu.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANON. FLOR.": [
  "Anonymus Florentinus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHAMAEL.": [
  "Chamaeleo", 
  {}, 
  [
   "III a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "DION. ALEX.": [
  "Dionysius Alexandrinus", 
  {
   "Ep. Can": "Epistula Canonica", 
   "Fr. Gen": "Fragmenta in Ge", 
   "Fr. 1-4 in Iob": "Fragmenta 1-4 in Iob", 
   "Fr": "Fragmenta", 
   "Ep. Paul. Sam": "Epistula ad Paulum Samosatenum", 
   "Fr. Cant": "Fragmentum in Ca", 
   "Fr. Eccl": "Fragmenta in Ec", 
   "Fr. in Lc. 22": "Fragmenta in Eu. Luc. 22"
  }, 
  [
   "III d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "HERILL. STOIC.": [
  "Herillus Carthaginiensis", 
  {}, 
  [
   "III a. C.", 
   "", 
   "stoicus", 
   ""
  ]
 ], 
 "NICOL. MON.": [
  "Nicolaus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "V d. C.", 
   "", 
   "monachus", 
   ""
  ]
 ], 
 "EU. NAASS.": [
  "Euangelium Naassenorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAMPHILUS ALEXANDRINUS": [
  "Pamphilus Alexandrinus", 
  {}, 
  [
   "", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "THEO AL.": [
  "Theo Alexandrinus", 
  {
   "in Ptol": "in Ptolemaei Almagesto libri", 
   "Can. Paru": "in Ptolemaei canones commentarium paruum", 
   "Can. Magn": "in Ptolemaei canones commentarium magnum", 
   "Opt. Rec": "Opticorum recensio"
  }, 
  [
   "IV d. C.", 
   "", 
   "mathematicus", 
   ""
  ]
 ], 
 "ALCMAEO": [
  "Alcmaeo", 
  {}, 
  [
   "V a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "CHRESTUS ROMANUS": [
  "Chrestus Romanus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "POSIDONIUS": [
  "Posidonius", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "NICOD.": [
  "Nicodemus Heracleensis", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "THEOD.": [
  "Theodorus Illustrius", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "AESOP.": [
  "Aesopus", 
  {
   "Prou": "Prouerbia", 
   "Sent": "Sententiae"
  }, 
  [
   "", 
   "", 
   "fabularum scriptor", 
   ""
  ]
 ], 
 "VINDIC.": [
  "Vindicianus Afer", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "CREO": [
  "Creo", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ALCIN.": [
  "Alcinous", 
  {}, 
  [
   "I d. C. ?", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "STADIAS.": [
  "Stadiasmus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMOD.": [
  "Demodocus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "ZEN. SID.": [
  "Zeno Sidonius", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "NICARCHUS": [
  "Nicarchus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "epigrammaticus uetus", 
   ""
  ]
 ], 
 "DAMASTES": [
  "Damastes", 
  {}, 
  [
   "V a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MART. ANT.": [
  "Martyrius Antiochenus", 
  {
   "Pan": "Panegyricus Iohannis Chrysostomi"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARET.": [
  "Aretaeus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "HIPPOTHOO": [
  "Hippothoo", 
  {}, 
  [
   "", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "ACHILLES TATIUS": [
  "Achilles Tatius", 
  {
   "Vit. Arat": "de Arati uita", 
   "Phaen": "de phaenomenorum interpretatione", 
   "Intr. Arat": "Introductio in Aratum"
  }, 
  [
   "III d. C.", 
   "", 
   "astronomus (Ach. Tat. )", 
   ""
  ]
 ], 
 "EP. PAUL. APOCR.": [
  "Epistulae Pauli et Corinthiorum apocryphae", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "QUEROL.": [
  "Querolus", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "comoedia latina", 
   ""
  ]
 ], 
 "AUTOM.": [
  "Automedo", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "DIUS": [
  "Dius", 
  {}, 
  [
   "", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "STESIMBR.": [
  "Stesimbrotus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "APIO": [
  "Apio", 
  {
   "Fr. Hist": "Fragmenta historica", 
   "ad Hom": "Apionis quae ad Homerum pertinent fragmenta"
  }, 
  [
   "I d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "TZ. $2": [
  "Tzetzes, Isaac", 
  {
   "Metr. Pind": "de metris Pindaricis"
  }, 
  [
   "XII d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "DEM. $3": [
  "Demetrius", 
  {
   "Pamph": "de Pamphylia"
  }, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DEM. $2": [
  "Demetrius", 
  {
   "Iud": "de Iudaeae regibus"
  }, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "RUFIN.": [
  "Rufinianus, Iulius", 
  {
   "Fig": "de figuris"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "rhetor latinus", 
   ""
  ]
 ], 
 "MONIMUS SYRACUSANUS": [
  "Monimus Syracusanus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "philosophus (Monim. )", 
   ""
  ]
 ], 
 "HORM.": [
  "Hormisdas", 
  {
   "Ep. Cler": "Epistula ad Clerum Syrum", 
   "Ep. Epiph": "Epistula ad Epiphanium"
  }, 
  [
   "VI d. C.", 
   "", 
   "papa", 
   ""
  ]
 ], 
 "IO. NOT.": [
  "Iohannes Notarius", 
  {
   "V. Eus": "Vita Eusebii Alexandrini"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "SYNESIUS SCHOLASTICUS": [
  "Synesius Scholasticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "MEGILLUS": [
  "Megillus", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MELIT. FR. PAP.": [
  "Melitianorum", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PANAET.": [
  "Panaetius Rhodius", 
  {}, 
  [
   "II a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "DOROTHEUS TYRIUS": [
  "Dorotheus Tyrius", 
  {}, 
  [
   "", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ANACR. IUN.": [
  "Anacreo Iunior", 
  {}, 
  [
   "IV/II a. C.", 
   "", 
   "phaenomenorum scriptor", 
   ""
  ]
 ], 
 "ANTIP. SID.": [
  "Antipater Sidonius", 
  {}, 
  [
   "II a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "HERACLID. SINOP.": [
  "Heraclides Sinopensis", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "CAN. APP.": [
  "Canones Apostolorum", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SIMYL.": [
  "Simylus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "APOL. PHIL.": [
  "Apologia Phileae episcopi", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ISCH.": [
  "Ischyrionus", 
  {
   "Libell": "Libellus contra Dioscurum"
  }, 
  [
   "V d. C.", 
   "", 
   "diaconus", 
   ""
  ]
 ], 
 "ARETE": [
  "Arete", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "philosopha", 
   ""
  ]
 ], 
 "H. MON.": [
  "Historia Monachorum in Aegypto", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEODOTUS": [
  "Theodotus", 
  {}, 
  [
   "a. Alex.", 
   "", 
   "poeta historicus", 
   ""
  ]
 ], 
 "EUDOX.": [
  "Eudoxus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV a. C.", 
   "", 
   "astronomus", 
   ""
  ]
 ], 
 "TURP.": [
  "Turpilius, Sextus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "comicus latinus", 
   ""
  ]
 ], 
 "MARCELL. EMP.": [
  "Marcellus Empiricus", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "medicus latinus", 
   ""
  ]
 ], 
 "BABR. $2": [
  "Babrius", 
  {}, 
  [
   "I d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANONYMUS IAMBLICHI": [
  "Anonymus Iamblichi", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUSTIC.": [
  "Iusticinus Siciliensis", 
  {
   "Ep": "Epistula ad Petrum Fullonem"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "MARC. DIAD.": [
  "Marcus Diadochus", 
  {
   "Ar": "Sermo contra Arianos"
  }, 
  [
   "IV d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "ONOMARCHUS ANDRIUS": [
  "Onomarchus Andrius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "ASTRAMPS.": [
  "Astrampsychus", 
  {
   "Resp": "Decades Responsorum", 
   "Ep": "Epistulae ad Ptolemaeum regem", 
   "Onir": "Onirocriticon", 
   "Quaest": "Quaestiones"
  }, 
  [
   "III d. C.", 
   "", 
   "diuinus et onirocriticus", 
   ""
  ]
 ], 
 "SOPH. ATHEN.": [
  "Sophocles Atheniensis", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "DIPHILUS": [
  "Diphilus", 
  {}, 
  [
   "", 
   "", 
   "iambographus", 
   ""
  ]
 ], 
 "CLEOPATRA": [
  "Cleopatra", 
  {}, 
  [
   "I a. C.", 
   "", 
   "medica", 
   ""
  ]
 ], 
 "SIDON.": [
  "Sidonius Apollinaris", 
  {
   "Epist": "Epistulae", 
   "Carm": "Carmina"
  }, 
  [
   "V d. C.", 
   "", 
   "episcopus Aruernicus", 
   ""
  ]
 ], 
 "NIC.": [
  "Nicander Colophonius", 
  {
   "Fr. Hist": "Fragmenta historica", 
   "Fr": "Fragmenta", 
   "Al": "Alexipharmaca", 
   "Th": "Theriaca", 
   "Sch": "Scholia uetera"
  }, 
  [
   "II a. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "ABERC.": [
  "Abercius Hieropolitanus", 
  {
   "Epitaph": "Epitaphium Abercii"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PARMENO": [
  "Parmeno", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "THDT. EBION.": [
  "Theodotus Ebionites", 
  {}, 
  [
   "II d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PHANOCL.": [
  "Phanocles", 
  {}, 
  [
   "III a. C.", 
   "", 
   "elegiacus", 
   ""
  ]
 ], 
 "ARISTONIC. TARENT.": [
  "Aristonicus Tarentinus", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ASCLEP. AR.": [
  "Asclepiades Arius", 
  {}, 
  [
   "a. Ath.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "IAMBL. ALCH.": [
  "Iamblichus", 
  {}, 
  [
   "", 
   "", 
   "alchemista", 
   ""
  ]
 ], 
 "HERACLID.": [
  "Heraclides Tarentinus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "POSIDIPP. EPIGR.": [
  "Posidippus", 
  {
   "Fr. Pap": "Fragmenta Papyracea"
  }, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "NOUUM TESTAMENTUM": [
  "Nouum Testamentum", 
  {
   "Ep. Eph": "Epistula ad Ephesios", 
   "Ep. Petr": "Epistulae Petri", 
   "Ep. Gal": "Epistula ad Galatas", 
   "Apoc": "Apocalypsis Iohannis", 
   "Ep. Rom": "Epistula ad Romanos", 
   "Ep. Tit": "Epistula ad Titum", 
   "Ep. Hebr": "Epistula ad Hebraeos", 
   "Eu. Marc": "Euangelium secundum Marcum", 
   "Eu. Io": "Euangelium secundum Iohannem", 
   "Ep. Phil": "Epistula ad Philippenses", 
   "Ep. Col": "Epistula ad Colossenses", 
   "Ep. Io": "Epistula Iohannis", 
   "Ep. Cor": "Epistula ad Corinthios", 
   "Ep. Iac": "Epistula Iacobi", 
   "Ep. Ti": "Epistulae ad Timotheum", 
   "Eu. Matt": "Euangelium secundum Matthaeum", 
   "Ep. Philem": "Epistula ad Philemonem", 
   "Eu. Luc": "Euangelium secundum Lucam", 
   "Ep. Iud": "Epistula Iudae", 
   "Ep. Thess": "Epistulae ad Thessalonicenses", 
   "Act. Ap": "Acta apostolorum"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SPART.": [
  "Spartianus, Aelius", 
  {
   "Seu": "Septimius Seuerus", 
   "Hadr": "Hadrianus", 
   "Did": "Didius Iulianus", 
   "Geta": "Antoninus Geta", 
   "Pesc": "Pescennius Niger", 
   "Carac": "Antoninus Caracalla", 
   "Ael": "Aelius"
  }, 
  [
   "IV d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EUSTR.": [
  "Eustratius", 
  {
   "in APo": "in analyticorum posteriorum librum secundum commentarium"
  }, 
  [
   "XI/", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "THEOPHANES": [
  "Theophanes", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "IUBA": [
  "Iuba", 
  {
   "Epigr": "Epigramma"
  }, 
  [
   "I a. C. /", 
   "", 
   "rex Mauretaniae historicus", 
   ""
  ]
 ], 
 "ANNICERIS CYRENAICUS": [
  "Anniceris Cyrenaicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "SOL.": [
  "Solo", 
  {
   "Lg": "Leges", 
   "Ep": "Epistulae"
  }, 
  [
   "VII/VI a. C.", 
   "", 
   "lyricus et legislator", 
   ""
  ]
 ], 
 "LYCOPHRONID.": [
  "Lycophronides", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "ANDROCLES": [
  "Androcles", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "LYCUS": [
  "Lycus", 
  {}, 
  [
   "", 
   "", 
   "pythagoricus", 
   ""
  ]
 ], 
 "FULG.": [
  "Fulgentius", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "mythographus", 
   ""
  ]
 ], 
 "HERODES IUD.": [
  "Herodes Iudaeus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EPIT. HEIDEL.": [
  "Epitome Heidelbergensis historiae Diadochorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHESTR. TRAG.": [
  "Archestratus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "PROTEU.": [
  "Proteuangelium Iacobi", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SILUIA": [
  "Siluia", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "peregrina", 
   ""
  ]
 ], 
 "AGATHOCL.": [
  "Agathocles", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CHRYSIPP.": [
  "Chrysippus", 
  {
   "Prou": "de prouidentia liber secundus", 
   "Log": "Quaestiones logicae"
  }, 
  [
   "III a. C.", 
   "", 
   "stoicus", 
   ""
  ]
 ], 
 "THEODECT.": [
  "Theodectas", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "ALC.": [
  "Alcaeus", 
  {}, 
  [
   "VII/", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "FR. PS. GR.": [
  "Fragmenta Pseudepigraphorum Graecorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ERATOSTH. $1": [
  "Eratosthenes Scholasticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "AR. BYZ.": [
  "Aristophanes Byzantius", 
  {
   "Fr": "Fragmenta", 
   "Epit": "Historiae Animalium epitome subiunctis Aeliani"
  }, 
  [
   "III/II a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "ALEX. AET.": [
  "Alexander Aetolus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "elegiacus", 
   ""
  ]
 ], 
 "PHILOCR.": [
  "Philocrates", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ARCHEMACH.": [
  "Archemachus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "NICO": [
  "Nico", 
  {}, 
  [
   "IV/", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "MAR. MERC.": [
  "Marius Mercator", 
  {
   "Nest. Serm": "Nestorii sermones", 
   "Eph. Syn": "Synodi Ephesianae actio sexta", 
   "Sub": "Liber subnotationum in uerbo Iuliani", 
   "Cyr. Apol": "Cyrilli Alexandrini apologeticus"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "LUCAN.": [
  "Lucanus, M. Annaeus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "poeta latinus", 
   ""
  ]
 ], 
 "TELES": [
  "Teles", 
  {}, 
  [
   "III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "ATH. MECH.": [
  "Athenaeus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "mechanicus", 
   ""
  ]
 ], 
 "SEUTHES": [
  "Seuthes", 
  {}, 
  [
   "a. II d. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "HERMIPP.": [
  "Hermippus", 
  {
   "Iamb": "Fragmenta iambica"
  }, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "BAS. SEL.": [
  "Basilius Seleuciensis", 
  {
   "V. Thecl": "de vita ac miraculis Theclae", 
   "Pent": "Sermo in Pentecosten", 
   "Pasch": "Homilia in Sanctum Pascha", 
   "Or": "Orationes", 
   "Laz": "Homilia in Lazarum"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "DIOSC. HIST.": [
  "Dioscorides", 
  {}, 
  [
   "IV a. C. /", 
   "", 
   "historicus (varios autores del mismo nombre)", 
   ""
  ]
 ], 
 "PHIDALIUS": [
  "Phidalius", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AGATHIN.": [
  "Agathinus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "OEN. LYR.": [
  "Oeniades", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "ACAC. CP": [
  "Acacius Constantinopolitanus", 
  {
   "Ep": "Epistula ad Petrum Fullonem"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTEAS HIST.": [
  "Aristeas", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PH. TARS.": [
  "Philo Tarsensis", 
  {}, 
  [
   "", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "CARNEISC.": [
  "Carneiscus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "HARP.": [
  "Harpocratio", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "lexicographus", 
   ""
  ]
 ], 
 "DIOG. $3": [
  "Diogenes Sinopensis", 
  {
   "Fr": "Fragmenta tragica", 
   "Ep": "Epistulae"
  }, 
  [
   "IV a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "DIOG. $2": [
  "Diogenes", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "ECHEPHYLIDAS": [
  "Echephylidas", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANON.": [
  "Anonymi", 
  {
   "Com": "de Comoedia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIP. CAP.": [
  "Antipater Cappadox", 
  {
   "Ep": "Epistula ad Basilium"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "NICANOR": [
  "Nicanor", 
  {
   "Od": "\"<FONT FACE=\"\"SPIonic\"\">peri\\ 7)Odusseiakh=j stigmh=j</FONT> \""
  }, 
  [
   "I/II d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "CALLISTR. ARIST.": [
  "Callistratus Aristophanius", 
  {}, 
  [
   "II a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "ANAN.": [
  "Ananius", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "CONST. II IMP.": [
  "Constantinus II", 
  {
   "Ep": "Epistula ad Alexandrinos"
  }, 
  [
   "IV d. C.", 
   "", 
   "imperator", 
   ""
  ]
 ], 
 "EUMACH.": [
  "Eumachus Corcyraeus", 
  {}, 
  [
   "", 
   "", 
   "rerum naturalium scriptor", 
   ""
  ]
 ], 
 "STRATO LAMPS.": [
  "Strato Lampsacenus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "AMPHIS": [
  "Amphis", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "ACTA PHIL.": [
  "Acta Phileae", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AN. BOISS.": [
  "Anecdota Graeca e cod. Regiis", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEOM.": [
  "Cleomedes", 
  {}, 
  [
   "II d. C.", 
   "", 
   "astronomus", 
   ""
  ]
 ], 
 "POLYAEN. $2": [
  "Polyaenus, Iulius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "AMPHIO": [
  "Amphio", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "VICT.": [
  "Victor Antiochenus", 
  {
   "Oct": "Fragmenta in Octateuchum et Reges", 
   "Mc": "Catena in Marcum"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "EPIPH. CONST.": [
  "Epiphanius Constantiensis", 
  {
   "Hom": "Homiliae", 
   "Mens": "de mensuris et ponderibus", 
   "Exp. Fid": "Expositio fidei", 
   "Ep. Fr": "Epistulae Fragmentum", 
   "Lat. Mens": "de mensuris et ponderibus uersio latina", 
   "Inhum": "de diuina inhumanatione", 
   "Exc. Mens": "Excerpta de mensuris et ponderibus", 
   "Fr": "Fragmenta", 
   "Patr": "de praegressionibus patriarcharum", 
   "Gemm. Fr": "Fragmentum ex opere de XII gemmis ad Diodorum", 
   "Gemm": "Epitomae duae ex opere de XII gemmis ad Diodorum", 
   "V. Proph": "de uitis prophetarum", 
   "Rescr": "Rescriptum ad Acacium et Paulum", 
   "Ep. Arab": "Epistula ad Arabes", 
   "Interpr": "de LXX interpretibus", 
   "Num. Myst": "de numerorum mysteriis", 
   "Anac": "Anacephalaioses", 
   "Haer": "Panarion seu aduersus LXXX haereses", 
   "Anc": "Ancoratus", 
   "Anc. Syn": "Ancorati synopsis", 
   "Ep. Io": "Fragmentum epistulae ad Iohannem Hierosolymitanum", 
   "Epit. Haer": "Haereseum", 
   "Inc": "de incarnatione Christi"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PS.": [
  "Pseudo", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TROILUS $1": [
  "Troilus", 
  {
   "Prol": "Prolegomena Rhetoricae"
  }, 
  [
   "IV d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "AGATHYLLUS": [
  "Agathyllus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "elegiacus", 
   ""
  ]
 ], 
 "SYMEO": [
  "Symeo", 
  {}, 
  [
   "XI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLAUT.": [
  "Plautus", 
  {
   "Ps": "Pseudolus", 
   "Amph": "Amphitruo", 
   "Mos": "Mostellaria", 
   "Cur": "Curculio", 
   "Vid": "Vidularia", 
   "Capt": "Captiui", 
   "Cist": "Cistellaria", 
   "Men": "Menaechmi", 
   "Aul": "Aulularia", 
   "Per": "Persa", 
   "Rud": "Rudens", 
   "Cas": "Casina", 
   "As": "Asinaria", 
   "Trin": "Trinummus", 
   "Bac": "Bacchides", 
   "Mer": "Mercator", 
   "Truc": "Truculentus", 
   "St": "Stichus", 
   "Epid": "Epidicus", 
   "Poen": "Poenulus", 
   "Mil": "Miles gloriosus"
  }, 
  [
   "III/II a. C.", 
   "", 
   "comicus latinus", 
   ""
  ]
 ], 
 "PH. HIST.": [
  "Philo", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "GR. THAUM.": [
  "Gregorius Thaumaturgus", 
  {
   "Ep. Can": "Epistula canonica", 
   "Anim": "ad Tatianum de anima", 
   "Fr": "Fragmenta", 
   "Sanct": "in omnes sanctos", 
   "Fid. Cap": "de fide capitula", 
   "Ep. Philagr": "Epistula ad Philagrium", 
   "Theoph": "in sancta theophania", 
   "Eccl": "Metaphrasis in Ecclesiastem", 
   "Annunt": "Homiliae in annuntiationem", 
   "Pan. Or": "in Origenem oratio panegyrica"
  }, 
  [
   "III d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "NOSS.": [
  "Nossis", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammatica", 
   ""
  ]
 ], 
 "PHERECYD. LER.": [
  "Pherecydes Lerius", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MENECR. EPH.": [
  "Menecrates Ephesius", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "poeta philosophus", 
   ""
  ]
 ], 
 "HYMN. CURET.": [
  "Hymnus Curetum", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "OENOM.": [
  "Oenomaus", 
  {}, 
  [
   "I a. C. ?", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "THEM.": [
  "Themistius", 
  {
   "in APo": "Analyticorum Posteriorum paraphrasis", 
   "in Ph": "in Aristotelis Physica paraphrasis", 
   "An": "Fragmenta de anima", 
   "Philop": "Praefatio in Philopolin", 
   "ad Lib": "Epistulae ad Libanium", 
   "in APr": "in Aristotelis Analyticorum Priorum librum I paraphrasis", 
   "Prud": "Fragmentum de prudentia", 
   "in de An": "in libros Aristotelis de Anima paraphrasis", 
   "Or": "Orationes"
  }, 
  [
   "IV d. C.", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "LYC. RHEG.": [
  "Lycus Rheginus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ARISTIPP. HIST.": [
  "Aristippus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CONSENTIUS": [
  "Consentius", 
  {}, 
  [
   "V d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "VAL. MAX.": [
  "Valerius Maximus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "VLP. $2": [
  "Vlpianus, Domitius", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "MICHAELIUS": [
  "Michaelius", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "SCLERIAS": [
  "Sclerias", 
  {}, 
  [
   "", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "XENARCH.": [
  "Xenarchus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "SABINIAN.": [
  "Sabinianus Perrhanus", 
  {
   "Supplic": "Supplicationes"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ALB.": [
  "Albinus", 
  {
   "Intr": "Introductio in Platonem"
  }, 
  [
   "II d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "RUFINUS": [
  "Rufinus", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "grammaticus latinus", 
   ""
  ]
 ], 
 "ANTON. ARG.": [
  "Antonius Argiuus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "XUTHOS": [
  "Xuthos", 
  {}, 
  [
   "a. Arist.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "PHILISTID.": [
  "Philistides", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "IO. DIAC.": [
  "Iohannes Diaconus", 
  {}, 
  [
   "", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "AGESILAUS": [
  "Agesilaus", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HELLAD.": [
  "Helladius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "THYMOCL.": [
  "Thymocles", 
  {}, 
  [
   "III a. C. ?", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "MYRSIL.": [
  "Myrsilus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HISTORIA ALEXANDRI MAGNI": [
  "Historia Alexandri Magni", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIT. BOST.": [
  "Titus Bostrensis", 
  {
   "Palm": "in ramos palmarum", 
   "Man": "aduersus Manichaeos", 
   "Fr. Dan": "Fragmenta in Da", 
   "Fr. Luc": "Fragmenta in Lucam", 
   "Arg": "Argumenta in libros IV aduersus Manichaeos"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "EUTOLM.": [
  "Eutolmius", 
  {}, 
  [
   "V d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "DEM. ANT.": [
  "Demetrius Antigonius", 
  {}, 
  [
   "a. St. Byz.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ROMAN.": [
  "Romanus", 
  {}, 
  [
   "V d. C. ?", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "PHLD.": [
  "Philodemus", 
  {
   "Lib": "de libertate dicendi", 
   "Prou": "de prouidentia", 
   "Hom": "de bono rege secundum Homerum", 
   "Mort": "de morte liber quartus", 
   "Socr": "de secta socratica", 
   "Diu": "de diuitiis liber primus", 
   "Sens": "de sensibus", 
   "Epicur. Tract": "Tractatus de Epicuro et aliis", 
   "Rh": "Volumina rhetorica", 
   "Log. Libr": "logicorum librorum fragmenta", 
   "Herc": "uaria opera aliubi non edita", 
   "Acad. Hist": "Academicorum Historia", 
   "Oec": "de oeconomia", 
   "Stoic. Hist": "Stoicorum Historia", 
   "Epicur. Fr": "Fragmenta incertorum operum de Epicuro", 
   "D": "de diis liber primus et tertius", 
   "Epicur": "de Epicuro liber primus (?) et secundus", 
   "Sto": "de Stoicis", 
   "Grat": "de grato animo", 
   "Elect": "de electionibus et fugis", 
   "Piet": "de pietate", 
   "Sign": "de signis", 
   "Rh. Fr": "Fragmenta uoluminum rhetoricorum", 
   "Cont": "ad contubernales", 
   "Adul": "de adulatione", 
   "Inu": "de inuidia", 
   "Ir": "de ira", 
   "Ins": "de insania", 
   "Coll": "de colloquio", 
   "Vit": "de uitiis liber decimus (de superbia)"
  }, 
  [
   "I a. C.", 
   "", 
   "epicureus", 
   ""
  ]
 ], 
 "HEROPYTHUS": [
  "Heropythus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ARCHEL. HIST.": [
  "Archelaus Cappadocius", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "VRSAC.": [
  "Vrsacius", 
  {
   "Ep. Ath": "Epistula ad Athanasium", 
   "Ep. Iul": "Epistula ad Iulium papam"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptores ecclesiastici", 
   ""
  ]
 ], 
 "ANAXIC.": [
  "Anaxicrates", 
  {}, 
  [
   "III d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DIOPH. HIST.": [
  "Diophantus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PS. DEMOCR.": [
  "Pseudo Democritus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTODIC.": [
  "Aristodicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "HIEROCL. GR.": [
  "Hierocles", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "OENOM. $2": [
  "Oenomaus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "EXC. VAT.": [
  "Excerptum Vaticanum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTO STOIC.": [
  "Aristo Chius", 
  {}, 
  [
   "III a. C.", 
   "", 
   "stoicus", 
   ""
  ]
 ], 
 "DEMONAX": [
  "Demonax", 
  {}, 
  [
   "", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "APOCALYPSIS ELIAE": [
  "Apocalypsis Eliae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYS.": [
  "Dionysius", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PRATIN.": [
  "Pratinas", 
  {}, 
  [
   "VI/V a. C.", 
   "", 
   "lyricus et tragicus", 
   ""
  ]
 ], 
 "GAL.": [
  "Galenus", 
  {
   "Urin": "de signis ex urinis", 
   "Vict. Att": "de uictu attenuante", 
   "Alim": "Fragmentum in Hippocratis De Alimento", 
   "Exp. Med": "de experientia medica", 
   "Ins. Log": "Institutio logica", 
   "Septim. Part": "de septimestri partu", 
   "Subf. Emp": "Subfiguratio empirica", 
   "Caus. Affect": "de causa affectionum", 
   "in Pl. Tim": "in Platonis Timaeum commentaria", 
   "Propr. Placit": "de propriis placitis", 
   "Consuet": "de consuetudinibus", 
   "Sch": "Scholia"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGATHO EPIGR.": [
  "Agatho", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ANON. HER.": [
  "Anonymus apud Herodianum historicum", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CORN.": [
  "Cornutus", 
  {
   "Rh": "Ars rhetorica"
  }, 
  [
   "I d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "PHILIPPID.": [
  "Philippides", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "COMETAS SCHOLASTICUS": [
  "Cometas Scholasticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ACAC. CAES.": [
  "Acacius Caesariensis", 
  {
   "Fr. Marcell": "Fragmenta contra Marcellum", 
   "Fr. Rom": "Fragmenta in Ep. Romanos", 
   "Oct": "Fragmenta in Octateuchum"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CEB.": [
  "Cebes", 
  {}, 
  [
   "I d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "DION. ROM.": [
  "Dionysius Romanus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "MAEC.": [
  "Maecius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PERIPLUS MARIS MAGNI": [
  "Periplus Maris Magni", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TULL. FLACC.": [
  "Tullius Flaccus", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "CIC.": [
  "Cicero, Marcus Tullius", 
  {
   "Acad": "Academici", 
   "Off": "de officiis", 
   "Sest": "pro Sestio", 
   "Arat": "Arati Phaenomena", 
   "Orat": "Orator", 
   "Fam": "Epistulae familiares", 
   "Resp": "de respublica", 
   "Brut": "Brutus", 
   "Att": "Epistulae ad Atticum", 
   "Ep. Fr": "Fragmenta epistularum", 
   "Tusc": "Tusculanae", 
   "Verr": "in Verrem (actio prima, actio secunda)", 
   "Ep. Brut": "Epistulae ad M. Brutum", 
   "QF": "Epistulae ad Quintum fratrem", 
   "Diu": "de diuinatione", 
   "Phil": "Philippicae", 
   "Pis": "in Pisonem", 
   "Fin": "de finibus", 
   "Top": "Topica", 
   "Rab. Post": "pro C. Rabirio Postumo", 
   "Cael": "pro Caelio"
  }, 
  [
   "I a. C.", 
   "", 
   "orator et philosophus", 
   ""
  ]
 ], 
 "RES GESTAE DIUI AUGUSTI": [
  "Res gestae diui Augusti", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ORIB. LAT.": [
  "Oribasii uersio latina", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAUS. GR.": [
  "Pausanias", 
  {}, 
  [
   "II a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "THYM.": [
  "Thymaridas", 
  {}, 
  [
   "", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "VARRO, M. TERENTIUS": [
  "Varro, M. Terentius", 
  {
   "Sat. Men": "Saturae Menippeae"
  }, 
  [
   "I a. C.", 
   "", 
   "historicus et grammaticus latinus", 
   ""
  ]
 ], 
 "MART. IUL.": [
  "Martyrium sanctae Iulianae", 
  {}, 
  [
   "V d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHRYN.": [
  "Phrynicus", 
  {
   "PS Fr": "Fragmenta", 
   "PS": "Praeparatio Sophistica"
  }, 
  [
   "II d. C.", 
   "", 
   "atticista", 
   ""
  ]
 ], 
 "GILDAS": [
  "Gildas", 
  {
   "Brit": "de excidio e conquestu Britanniae"
  }, 
  [
   "VI d. C.", 
   "", 
   "monachus Britannus", 
   ""
  ]
 ], 
 "IUL. APOLL.": [
  "Iulianus Apollinarista", 
  {
   "Ep": "Epistula"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "GNOMOL. VAT.": [
  "Gnomologium Vaticanum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APHTH.": [
  "Aphthonius", 
  {
   "Fab": "Fabulae", 
   "Prog": "Progymnasmata"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "ANAST. ANT.": [
  "Anastasius Antiochenus", 
  {
   "Anec": "Anecdota", 
   "Fr": "Fragmenta", 
   "Sac": "de sacerdotio", 
   "Trib": "Sermo de tribus quadragesimis", 
   "Fid": "Explicatio breuis fidei orthodoxae", 
   "Serm": "Sermones", 
   "Vit. Exced": "Sermo de iis qui uita excedunt"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "TEUCER CYZ.": [
  "Teucer Cyzicenus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SERENUS, QUINTUS": [
  "Serenus, Quintus", 
  {}, 
  [
   "II/IV d. C.", 
   "", 
   "medicus latinus", 
   ""
  ]
 ], 
 "GR. AGR.": [
  "Gregorius Agrigentinus", 
  {
   "Eccl": "Explanatio supra Eccl"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ACAD. IND.": [
  "Academicorum Philosophorum index Herculanensis", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. PARIS.": [
  "Anonyma Collectio Synonymica Parisina", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMESIAN. HIST.": [
  "Hermesianax Cyprius", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "VIT. FR. PAP.": [
  "Vitarum Fragmenta Papyracea", 
  {
   "Pol": "politicorum uitae", 
   "Phil": "philosophorum uitae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "XENOCRITUS": [
  "Xenocritus", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "COM. ADESP.": [
  "Comica Adespota", 
  {
   "Dor": "Comica Adespota Dorica"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMOLAUS MACEDO": [
  "Timolaus Macedo", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "poeta", 
   ""
  ]
 ], 
 "LEONT. H.": [
  "Leontius Hierosolymitanus", 
  {
   "Nest": "aduersus nestorianos", 
   "Monoph": "Contra monophysitas"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "MARTYRIUM PANSOPHII": [
  "Martyrium Pansophii", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUAGO SAMIUS": [
  "Euago Samius", 
  {}, 
  [
   "V a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AUTOL.": [
  "Autolycus", 
  {
   "Ort": "de ortibus et occasibus", 
   "Sphaer": "de sphaera", 
   "Sch": "Scholia"
  }, 
  [
   "IV a. C.", 
   "", 
   "astronomus", 
   ""
  ]
 ], 
 "TIM. GAZ.": [
  "Timotheus Gazaeus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "HP.": [
  "Hippocrates", 
  {
   "Vict": "de uictus ratione I-IV", 
   "Iusi": "Iusiurandum", 
   "Epid Epidemiorum libri&nbsp": "V, VII", 
   "Decent": "de decenti habitu", 
   "Aff": "de affectionibus", 
   "Medic": "de medico", 
   "Or. Thess": "Orati Thessali", 
   "Iudic": "de iudicationibus", 
   "Superf": "de superfoetatione", 
   "Fract": "de fractis", 
   "Decret": "Decretum", 
   "de Arte": "de Arte", 
   "Nat. Puer": "de natura pueri", 
   "Morb": "de morbis liber IV", 
   "Mul": "de morbis mulierum", 
   "Or. ad ar": "Oratio ad aram", 
   "Epid": "Epidemiorum liber VI", 
   "Oct": "de octimestri partu", 
   "Hebd": "de hebdomadis", 
   "Cord": "de corde", 
   "Flat": "de flatibus", 
   "Loc. Hom": "de locis in homine", 
   "Hum": "de humoribus", 
   "Vlc": "de ulceribus", 
   "Aph": "Aphorismi", 
   "Prog": "Prognosticum", 
   "Septim": "de septimestri partu", 
   "Liqu": "de liquidorum usu", 
   "Carn": "de carnibus", 
   "Test": "Testamentum", 
   "Lex": "Lex", 
   "Nat. Mul": "de natura muliebri", 
   "Steril": "de sterilibus", 
   "Anat": "de anatome", 
   "Haem": "de haemorrho\u00efdibus", 
   "Off": "de officina medici", 
   "Alim": "de alimento", 
   "Genit": "de genitura", 
   "VM": "de uetere medicina", 
   "Acut": "de uictu acutorum", 
   "Salubr": "de uictu salubri", 
   "Nat. Hom": "de natura hominis", 
   "Prorrh": "Prorrheticus I", 
   "Praec": "Praeceptiones", 
   "Remed": "de remediis", 
   "Dent": "de dentitione", 
   "Vid. Ac": "de videndi acie", 
   "Coac": "Coacae praenotiones", 
   "Mochl": "Mochlicum (uectiarius)", 
   "Dieb. Iudic": "de diebus iudicatoris", 
   "Art": "de articulis", 
   "Sch": "Scholia", 
   "Int": "de internis affectionibus", 
   "Oss": "de ossium natura", 
   "Morb. Sacr": "de morbo sacro", 
   "Gland": "de glandulis", 
   "Foet. Exsect": "de foetus in utero mortui exsectione", 
   "Acut. (Sp. )": "de uictu acutorum (spuria)", 
   "Fist": "de fistulis", 
   "A\u00ebr": "de a\u00ebre, aquis, locis", 
   "Virg": "de his quae ad uirgines spectant", 
   "Ep": "Epistulae"
  }, 
  [
   "V a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "TAC.": [
  "Tacitus, Cornelius", 
  {
   "Hist": "Historiae", 
   "Ann": "Annales"
  }, 
  [
   "I d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "LEON. HIST.": [
  "Leonidas", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EU. THOM.": [
  "Euangelium Thomae", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MNASALC.": [
  "Mnasalces", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "THEODORUS CYRENAICUS": [
  "Theodorus Cyrenaicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "HIEROCL. HIST.": [
  "Hierocles", 
  {}, 
  [
   "III d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HEROD. MED.": [
  "Herodotus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "OECUM.": [
  "Oecumenius Triccaeus", 
  {
   "Apoc": "Commentarius in Apocalypsin", 
   "Rom. -Heb": "Fragmenta in epistulas Pauli"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "SYN. ALCH.": [
  "Synesius", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "alchemista", 
   ""
  ]
 ], 
 "LYR. ALEX. ADESP.": [
  "Lyrica Alexandrina adespota", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THDR. MOPS.": [
  "Theodorus Mopsuestenus", 
  {
   "Ps": "Commentarii in Psalmos", 
   "Act. Proem": "Proemium in Act. Ap", 
   "Heb": "Commentarius in Ep. Hebr", 
   "Symb": "Symbolum", 
   "Rom. -2 Cor": "Fragmenta commentarii in Ep. Rom. -2 Ep. Cor", 
   "Mt": "Fragmenta in Eu. Matt", 
   "Luc": "Fragmenta in Eu. Luc", 
   "Io": "Fragmenta in Eu. Io", 
   "Resp. Chrys": "Responsio ad Chrysostomum", 
   "Oct": "Fragmenta in Octateuchum et Reges"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "THEOD. HIST.": [
  "Theodorus Panages", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PION.": [
  "Pionius", 
  {
   "V. Polyc": "Vita Polycarpi"
  }, 
  [
   "III d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "DAMIG.": [
  "Damigero-Evax", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "scriptores de lapidibus", 
   ""
  ]
 ], 
 "A. AL.": [
  "Acta Alexandrinorum", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EU. HEB.": [
  "Euangelium Hebraeorum", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TERP.": [
  "Terpander", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "THEODORUS PRISCIANUS": [
  "Theodorus Priscianus", 
  {
   "Gyn": "Gynaecia", 
   "Phys": "de Physicis", 
   "Eup": "Euporiston", 
   "Log": "Logicus"
  }, 
  [
   "IV/V d. C.", 
   "", 
   ") medicus (Theod. Prisc. )", 
   ""
  ]
 ], 
 "DANAIS": [
  "Danais", 
  {}, 
  [
   "VI a. C. ?", 
   "", 
   "poema epicum", 
   ""
  ]
 ], 
 "AEL. DION.": [
  "Aelius Dionysius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "IL. PERS.": [
  "Iliu Persis", 
  {}, 
  [
   "VIII a. C. ?", 
   "", 
   "poema epicum", 
   ""
  ]
 ], 
 "THEOGNOST.": [
  "Theognostus", 
  {
   "Can": "Canones"
  }, 
  [
   "IX d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "ASCLEP. $2": [
  "Asclepiades Prusensis", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "POSSIS": [
  "Possis", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DIOGENIAN.": [
  "Diogenianus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "paroemiographus", 
   ""
  ]
 ], 
 "ARESA(S)": [
  "Aresa(s)", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. EUDOX.": [
  "Pseudo Eudoxus", 
  {}, 
  [
   "", 
   "", 
   "astronomus", 
   ""
  ]
 ], 
 "MEN. PROT.": [
  "Menander Protector", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PLIN.": [
  "Plinius", 
  {}, 
  [
   "I d. C.", 
   "", 
   "rerum naturalium scriptor latinus", 
   ""
  ]
 ], 
 "AESCHRIO": [
  "Aeschrio", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "HELLANIC.": [
  "Hellanicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANASTASIUS TRAULUS": [
  "Anastasius Traulus", 
  {}, 
  [
   "biz.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "AGRAPH.": [
  "Agrapha", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATH. $2": [
  "Athenaeus", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ARISTOPHO": [
  "Aristopho", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "EUDEM. $2": [
  "Eudemus", 
  {}, 
  [
   "a. I a. C.", 
   "", 
   "poeta medicus", 
   ""
  ]
 ], 
 "CRATER.": [
  "Craterus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HIPPIAS ERYTH.": [
  "Hippias Erythraeus", 
  {}, 
  [
   "helen\u00edst. ?", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "LEO PHIL.": [
  "Leo Philosophus", 
  {}, 
  [
   "IX/X d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PS. SOR.": [
  "Pseudo Soranus", 
  {
   "Quaest": "Quaestiones medicinales"
  }, 
  [
   "", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "CONCILIA": [
  "Concilia", 
  {
   "CBeryt": "Concilium Berytense", 
   "CSard": "Can", 
   "CAnc": "Can", 
   "CHier": "Concilium Hierosolymitanum", 
   "CNeocaes": "Can", 
   "CEph. Orient": "Concilium orientalium Ephesi habitum", 
   "CChalc": "Can", 
   "Can. = Canon, -es": "Ep. = Epistula, -ae. ) (C)", 
   "CCP": "Can", 
   "CLaod": "Can", 
   "CEph": "Can", 
   "CAnt": "Can", 
   "CSyr": "Concilium Syrium", 
   "CNic": "Can", 
   "Act. = Actio, actiones": "Anath. = Anathema, -ta", 
   "CTyr": "Concilium Tyrium", 
   "CGangr": "Can", 
   "CCarth": "Act"
  }, 
  [
   "", 
   "", 
   "(Las cifras entre par\u00e9ntesis se refieren al a\u00f1o en que se celebr\u00f3 el concilio", 
   ""
  ]
 ], 
 "DICAEARCH. PHIL.": [
  "Dicaearchus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "CONO": [
  "Cono", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CAEL. AUR.": [
  "Caelius Aurelianus", 
  {
   "Gyn": "Gynaecia"
  }, 
  [
   "V d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "EUTYCH.": [
  "Eutychianus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANONYMUS $11": [
  "Anonymus", 
  {
   "in Prm": "Commentarius in Platonis Parmenidem"
  }, 
  [
   "", 
   "", 
   "(Anon. )", 
   ""
  ]
 ], 
 "ERIPH.": [
  "Eriphus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "LICIN.": [
  "Licinia Eudoxia Augusta", 
  {
   "Ep": "Epistula ad Theodosium"
  }, 
  [
   "V d. C.", 
   "", 
   "imperatrix", 
   ""
  ]
 ], 
 "PHERECR.": [
  "Pherecrates", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "PAULIN. TYR.": [
  "Paulinus Tyrius", 
  {
   "Symb": "Symbolum", 
   "Ep": "Epistula"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ATH. PRESB.": [
  "Athanasius Alexandrinus", 
  {
   "Libell": "Libellus contra Dioscorum"
  }, 
  [
   "V d. C.", 
   "", 
   "presbyter", 
   ""
  ]
 ], 
 "HERMOG. HIST.": [
  "Hermogenes", 
  {
   "Phryg": "de Phrygia"
  }, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PISAND.": [
  "Pisander Camirensis", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "ANACREONT.": [
  "Anacreontea", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ISCHYRAS AEGYPTIUS": [
  "Ischyras Aegyptius", 
  {
   "Ep. Ath": "Epistula ad Athanasium"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "DOSIAD.": [
  "Dosiadas", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ANONYMUS SEGUERIANUS": [
  "Anonymus Seguerianus", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "rhetor (Anon. Seg. )", 
   ""
  ]
 ], 
 "DEMETRIUS SCEPSIUS": [
  "Demetrius Scepsius", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "VIT. PHILONID.": [
  "Vita Philonidis Epicurei", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGLAIAS": [
  "Aglaias", 
  {}, 
  [
   "I d. C.", 
   "", 
   "elegiacus", 
   ""
  ]
 ], 
 "LAMPRID.": [
  "Lampridius, Aelius", 
  {
   "Heliog": "Heliogabalus", 
   "Diad": "Diadumenos Antoninus", 
   "Comm": "Commodus Antoninus", 
   "Seuer": "Alexander Seuerus"
  }, 
  [
   "IV d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CALLIPHO": [
  "Callipho", 
  {}, 
  [
   "", 
   "", 
   "pythagoricus", 
   ""
  ]
 ], 
 "SEUERUS ALEXANDRINUS": [
  "Seuerus Alexandrinus", 
  {
   "Eth": "Ethopoeiae", 
   "Narr": "Narrationes"
  }, 
  [
   "IV d. C.", 
   "", 
   "rhetor (Seuer. Alex. )", 
   ""
  ]
 ], 
 "DURIS $1": [
  "Duris", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "LEX. SEG.": [
  "Lexicon Seguerianum", 
  {}, 
  [
   "XI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. STEPH.": [
  "Pseudo Stephanus Alexandrinus", 
  {}, 
  [
   "VI/", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEX. SAL.": [
  "Alexander Salaminus", 
  {
   "Cruc. epit": "Epitome encomii crucis", 
   "Cruc": "de inuentione crucis", 
   "Barn": "Laudatio in apostolum Barnabam"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PAUL. AEG.": [
  "Paulus Aegineta", 
  {}, 
  [
   "VII d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "CHIRURG. FR. PAP.": [
  "De Re Chirurgica Fragmenta Papyracea", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERM.": [
  "Hermas", 
  {
   "Mand. Lat": "Mandatio", 
   "Vis": "Visio", 
   "Mand": "Mandatio", 
   "Sim": "Similitudo"
  }, 
  [
   "II d. C.", 
   "", 
   "pater apostolicus", 
   ""
  ]
 ], 
 "DIONYS. COM.": [
  "Dionysius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "IUL. GRAMM.": [
  "Iulianus", 
  {}, 
  [
   "VII d. C.", 
   "", 
   "grammaticus latinus", 
   ""
  ]
 ], 
 "ADAM.": [
  "Adamantius", 
  {
   "Dial": "Dialogus"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "EUGENES": [
  "Eugenes", 
  {}, 
  [
   "d. III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "LEX. RHET. CANT.": [
  "Lexicon Rhetoricum Cantabrigiense", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "S.": [
  "Sophocles", 
  {
   "El": "Electra", 
   "Fr": "Fragmenta", 
   "Sch": "Scholia", 
   "Ai": "Aiax", 
   "Tr": "Trachiniae", 
   "OC": "Oedipus Coloneus", 
   "Ant": "Antigone", 
   "Pae": "Paean", 
   "Fr. Eleg": "Fragmenta elegiaca", 
   "Ph": "Philoctetes", 
   "OT": "Oedipus Tyrannus"
  }, 
  [
   "V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "M. ANT.": [
  "Marcus Aurelius Antoninus", 
  {
   "Ep. Eux": "Epistula ad Euxenianum", 
   "Ep. Sen": "Epistula ad senatum"
  }, 
  [
   "II d. C.", 
   "", 
   "imperator", 
   ""
  ]
 ], 
 "MUSAE. $2": [
  "Musaeus", 
  {}, 
  [
   "", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "CHAEREMO": [
  "Chaeremo", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "IDOM.": [
  "Idomeneus Lampsacenus", 
  {
   "Hist": "Fragmenta historica"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "historicus et philosophus", 
   ""
  ]
 ], 
 "LIU.": [
  "Liuius, Titus", 
  {
   "Fr": "Fragmenta", 
   "Per": "Periochae"
  }, 
  [
   "I a. C. /", 
   "", 
   "historicus latinus", 
   ""
  ]
 ], 
 "IO. ANT.": [
  "Iohannes Antiochenus", 
  {
   "Relat. imp": "Relationes ad imperatorem seu imperatores seu imperatrices", 
   "Fr. Hist": "Fragmenta ex Historia chronica", 
   "Hom": "Homilia", 
   "Exc. Salm": "Excerpta Salmasiana ex altera Archaeologia", 
   "Ep": "Epistulae", 
   "Sent": "Sententia", 
   "Propos": "Propositio"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "EUCLIDES": [
  "Euclides", 
  {}, 
  [
   "V a. C.", 
   "", 
   "iambographus", 
   ""
  ]
 ], 
 "NEPOS, CORNELIUS": [
  "Nepos, Cornelius", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "I a. C.", 
   "", 
   "historicus latinus", 
   ""
  ]
 ], 
 "EUMEL. HIST.": [
  "Eumelus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "APOC. BAR.": [
  "Apocalypsis Baruch", 
  {}, 
  [
   "a. III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LUCILL.": [
  "Lucillius", 
  {}, 
  [
   "I d. C. ?", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "CTES.": [
  "Ctesias", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "historicus et medicus", 
   ""
  ]
 ], 
 "HERACLID. PONT. GR.": [
  "Heraclides Ponticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "grammaticus et poeta", 
   ""
  ]
 ], 
 "LIBER DUB. NOM.": [
  "Liber de dubiis nominibus", 
  {}, 
  [
   "IX d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "OD. XI SALOM.": [
  "Oda XI Salomonis", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MNASEAS": [
  "Mnaseas", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANUBIO": [
  "Anubio", 
  {}, 
  [
   "I d. C.", 
   "", 
   "elegiacus et astrologus (Anub. )", 
   ""
  ]
 ], 
 "TIMOCRATES": [
  "Timocrates", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "FIRM. CAES.": [
  "Firmus Caesariensis", 
  {
   "Ep": "Epistulae"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PTOLEMAEUS PHILADELPHUS": [
  "Ptolemaeus Philadelphus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "rex, epistolographus", 
   ""
  ]
 ], 
 "AENESIDAMUS": [
  "Aenesidamus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HISP. ANON.": [
  "Hispani Anonymi", 
  {}, 
  [
   "a Str.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CONST.": [
  "Constantinus I", 
  {
   "Ep": "Epistulae", 
   "Or. S. C": "Oratio ad sanctorum coetum"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "imperator", 
   ""
  ]
 ], 
 "ANTIOCH.": [
  "Antiochus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "CHAEREM.": [
  "Chaeremo", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "HERMARCHUS": [
  "Hermarchus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "epicureus", 
   ""
  ]
 ], 
 "D. T.": [
  "Dionysius Thrax", 
  {
   "Supp": "Supplementa artis Dionysianae vetusta", 
   "Fr": "Fragmenta", 
   "Sch": "Scholia"
  }, 
  [
   "II/I a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "EPIN.": [
  "Epinicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "CARM. NAUP.": [
  "Carmen Naupactium", 
  {}, 
  [
   "VI a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "CERCOP.": [
  "Cercopes", 
  {}, 
  [
   "", 
   "", 
   "poema epicum", 
   ""
  ]
 ], 
 "EPIG. $1": [
  "Epigonus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "GLOSS.": [
  "Glossaria", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NAASS. CARM.": [
  "Naassenorum Carmina", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOT. MIL.": [
  "Diotimus Milesius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "MENODOT. NIC.": [
  "Menodotus Nicomedensis", 
  {}, 
  [
   "II d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "NEOPHR.": [
  "Neophro", 
  {}, 
  [
   "V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "MACARIUS AEGYPTIUS": [
  "Macarius Aegyptius", 
  {
   "Ep. magn": "Epistula Magna", 
   "Op": "Opera uaria false Ephraemi adscripta"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus (Mac. Aeg. )", 
   ""
  ]
 ], 
 "TIMOSTR.": [
  "Timostratus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "APOLLONID. HOR.": [
  "Apollonides Horapius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "BIO SOL.": [
  "Bio Soleus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANONYMUS $7": [
  "Anonymus", 
  {}, 
  [
   "", 
   "", 
   "(Anon. )", 
   ""
  ]
 ], 
 "ANONYMUS $6": [
  "Anonymus", 
  {
   "in Cat": "in Aristotelis Categorias paraphrasis"
  }, 
  [
   "", 
   "", 
   "(Anon. )", 
   ""
  ]
 ], 
 "ANONYMUS $5": [
  "Anonymus", 
  {}, 
  [
   "", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ANONYMUS $4": [
  "Anonymus", 
  {
   "Geog. Comp": "Geographiae expositio compendiaria"
  }, 
  [
   "", 
   "", 
   "(Anon. )", 
   ""
  ]
 ], 
 "ANONYMUS $3": [
  "Anonymus", 
  {
   "Gent. Ind": "de gentibus Indiae et Bragmanibus"
  }, 
  [
   "II d. C. ?", 
   "", 
   "(Anon. )", 
   ""
  ]
 ], 
 "EPICR.": [
  "Epicrates", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "ANONYMUS $1": [
  "Anonymus", 
  {}, 
  [
   "", 
   "", 
   "de scientia politica scriptor", 
   ""
  ]
 ], 
 "LYC. $2": [
  "Lycophro", 
  {
   "Fr": "Fragmenta tragica", 
   "Com": "de comoedia fragmenta", 
   "Sch": "Scholia uetera", 
   "Par": "Paraphrases (Par"
  }, 
  [
   "IV a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "HEROPHIL.": [
  "Herophilus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "ANONYMUS $9": [
  "Anonymus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "philosophus (Anon. )", 
   ""
  ]
 ], 
 "ANONYMUS $8": [
  "Anonymus", 
  {
   "in Gal. Sect": "Commentarium in Galeni De Sectis"
  }, 
  [
   "V d. C. ?", 
   "", 
   "philosophus (Anon. )", 
   ""
  ]
 ], 
 "VITA SANCTI MARCELLI": [
  "Vita sancti Marcelli", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LIMEN.": [
  "Limenius", 
  {}, 
  [
   "II a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "COMARCHUS": [
  "Comarchus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "BLAES.": [
  "Blaesus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "CLEMENTINA": [
  "Clementina", 
  {
   "Hom. Clem": "Homiliae Clementinae", 
   "Clem. Ep. Petr": "Epistula Petri ad Iacobum", 
   "Clem. Contest": "Contestatio pro iis qui librum accipiunt", 
   "Clem. Ep": "Epistula Clementis", 
   "Clem. Recogn": "Recognitiones Clementinae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERACLIT. $2": [
  "Heraclitus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "EUCRAT.": [
  "Eucrates", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "BENEDICTUS": [
  "Benedictus", 
  {
   "Reg": "Regula"
  }, 
  [
   "VI d. C.", 
   "", 
   "abbas", 
   ""
  ]
 ], 
 "A. XANTHIPP.": [
  "Acta Xanthippae et Polyxenae", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. EXEG.": [
  "Anonymus Exegeticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIG.": [
  "Antigonus Carystius", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "III a. C.", 
   "", 
   "biographus", 
   ""
  ]
 ], 
 "HERACLID. COM.": [
  "Heraclides", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "EUPHRON.": [
  "Euphronius", 
  {}, 
  [
   "III a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "DEXIPP. $2": [
  "Dexippus", 
  {
   "in Cat": "in Aristotelis Categorias commentarium"
  }, 
  [
   "IV d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "EUTHYCL.": [
  "Euthycles", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "ARTEMO PERG.": [
  "Artemo Pergamenus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "VIT. IS.": [
  "Vita Isaei", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GEM.": [
  "Geminus", 
  {
   "Opt": "Optica", 
   "Calend": "Calendarium"
  }, 
  [
   "I a. C.", 
   "", 
   "astronomus", 
   ""
  ]
 ], 
 "DIOD. COM.": [
  "Diodorus Sinopensis", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "CLIDEM.": [
  "Clidemus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MELINNO": [
  "Melinno", 
  {}, 
  [
   "II a. C. ?", 
   "", 
   "lyrica", 
   ""
  ]
 ], 
 "CAES.": [
  "Caesar, Iulius", 
  {
   "Gal": "de bello Gallico", 
   "Ciu": "De bello ciuili"
  }, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SEUER. $2": [
  "Seuerus", 
  {
   "Clyst": "de clysteribus"
  }, 
  [
   "d. Gal.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "POSSID.": [
  "Possidius", 
  {}, 
  [
   "V d. C.", 
   "", 
   "episcopus", 
   ""
  ]
 ], 
 "CRATES COM.": [
  "Crates", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "TELLIS": [
  "Tellis", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CHOERILUS IASIUS": [
  "Choerilus Iasius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "SECUNDUS": [
  "Secundus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "NICOSTR. HIST.": [
  "Nicostratus", 
  {}, 
  [
   "a. I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MATRO PITANEUS": [
  "Matro Pitaneus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "parodius", 
   ""
  ]
 ], 
 "PS. PTOL.": [
  "Pseudo Ptolemaeus", 
  {
   "Centil": "Centiloquium"
  }, 
  [
   "a. V d. C.", 
   "", 
   "gnomologus", 
   ""
  ]
 ], 
 "PHOC.": [
  "Phocylides", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "EUS. NIC.": [
  "Eusebius Nicomediensis", 
  {
   "Libell": "Libellus poenitentiae", 
   "Ep. Ar": "Fragmenta epistulae ad Arium", 
   "Ep. Paulin": "Epistula ad Paulinum"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ANAXIPP.": [
  "Anaxippus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "DIOM.": [
  "Diomedes", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "HIPPON.": [
  "Hipponax", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "iambographus", 
   ""
  ]
 ], 
 "METAG.": [
  "Metagenes", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "HERACLIT.": [
  "Heraclitus", 
  {
   "All": "Allegoriae"
  }, 
  [
   "I d. C.", 
   "", 
   "allegorista", 
   ""
  ]
 ], 
 "POMP. MAC. IUN.": [
  "Pompeius Macer Iunior", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PS. DICAEARCH.": [
  "Pseudo Dicaearchus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHITIM.": [
  "Architimus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DIONYSIUS AIGAEUS": [
  "Dionysius Aigaeus", 
  {}, 
  [
   "", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "LEXICON QUOD UOCATUR ANTIATTICISTA": [
  "Lexicon quod uocatur Antiatticista", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ACERAT.": [
  "Aceratus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "SOPAT. RH.": [
  "Sopater", 
  {
   "Par": "Paraphrases", 
   "ad Hermog": "ad Hermogenis status", 
   "Fr": "Fragmenta", 
   "Tract": "Tractatio causarum"
  }, 
  [
   "V d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "ATH. AL.": [
  "Athanasius Alexandrinus", 
  {
   "Apol. Sec": "Apologia secunda contra Arianos", 
   "Diab": "Homilia in diabolum", 
   "Theopasch": "Contra Theopaschitas", 
   "V. Anton": "Vita Antonii", 
   "H. Ar": "Historia Arianorum ad monachos", 
   "Syn": "Epistula de synodis Arimini et Seleuciae", 
   "H. Ar. Ep": "ad historiam Arianorum ad monachos epistula", 
   "Dio": "de sententia Dionysii", 
   "Gent": "Oratio contra gentes", 
   "Interpr": "Interpretatio symboli", 
   "Fug": "Apologia de fuga sua", 
   "Ep. Encycl": "Epistula encyclica", 
   "Ep. Mort. Ar": "Epistula ad Serapionem de morte Arii", 
   "Fr. Ps": "Fragmenta in Ps", 
   "Res. Bapt": "Oratio in resurrectionem et in recens baptizatos", 
   "Ep. Fest": "Epistularum festiualium fragmenta", 
   "Apol. Const": "Apologia ad Constantium", 
   "Serm. Fid": "Sermo maior de fide", 
   "Poenit. can": "Canones poenitentiales", 
   "Virg": "de uirginitate", 
   "Ep": "Epistulae uariae", 
   "Decr": "de decretis Nicaenae synodi", 
   "Inc": "de incarnatione"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHAL.": [
  "Chalcidius", 
  {
   "Comm": "Commentarius in Platonis Timaeum"
  }, 
  [
   "II/IV d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "DIOGENIAN. EPICUR.": [
  "Diogenianus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "epicureus", 
   ""
  ]
 ], 
 "EPIST. CHAR.": [
  "Characteres epistolici", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VIT. HES.": [
  "Vitae Hesiodi", 
  {
   "Vit. Hes. Sud": "Vita Hesiodi Sudae", 
   "Vit. Hes. Tz": "Vita Hesiodi Tzetzae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "BARDES.": [
  "Bardesanes", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SABINUS, TULLIUS": [
  "Sabinus, Tullius", 
  {}, 
  [
   "I d. C. ?", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ENOMIDES": [
  "Enomides", 
  {}, 
  [
   "V a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ZALEUC.": [
  "Zaleucus Locrus", 
  {}, 
  [
   "", 
   "", 
   "pythagoricus et legislator", 
   ""
  ]
 ], 
 "ANTIP. STOIC.": [
  "Antipater Tarsensis", 
  {}, 
  [
   "II a. C.", 
   "", 
   "stoicus", 
   ""
  ]
 ], 
 "THDS. AL.": [
  "Theodosius Alexandrinus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PHOEN. ANON.": [
  "Phoenicii", 
  {}, 
  [
   "", 
   "", 
   "anonymi", 
   ""
  ]
 ], 
 "PHILOL.": [
  "Philolaus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "HOROI": [
  "Horoi anonymi Samii", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZENO STOIC.": [
  "Zeno Citieus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "stoicus", 
   ""
  ]
 ], 
 "LEUCO": [
  "Leuco", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "EUMEL.": [
  "Eumelus", 
  {}, 
  [
   "VIII/", 
   "", 
   "epicus et lyricus", 
   ""
  ]
 ], 
 "EPIPH. CONSTANT.": [
  "Epiphanius Constantinopolitanus", 
  {
   "Sent": "Sententiae contra Seuerum et Patrum"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "IO. CAES.": [
  "Iohannes Caesariensis", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "scriptor eclesiasticus", 
   ""
  ]
 ], 
 "IREN. TYR.": [
  "Irenaeus Tyrius", 
  {
   "Ep": "Epistula ad Orientales"
  }, 
  [
   "V d. C.", 
   "", 
   "comes", 
   ""
  ]
 ], 
 "ANTIOCHUS ASCALONIUS": [
  "Antiochus Ascalonius", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "HIPPARCH. $2": [
  "Hipparchus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "philosophus pythagoricus", 
   ""
  ]
 ], 
 "HIPPARCH. $1": [
  "Hipparchus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "ARISTOCRITUS": [
  "Aristocritus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PROTAG.": [
  "Protagoras", 
  {}, 
  [
   "V a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "ACILIUS": [
  "Acilius", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ARTEMO CLAZ.": [
  "Artemo Clazomenius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ZONAE.": [
  "Zonaeus", 
  {}, 
  [
   "", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "GR. NAZ.": [
  "Gregorius Nazianzenus", 
  {
   "Test. Add": "de testamentis et adventu Christi (additamentum ad carmen dogmaticum 9", 
   "Mul. Orn": "carmen aduersus mulieres se nimis ornantes", 
   "Ep": "Epistulae"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PARTH.": [
  "Parthenius", 
  {
   "Fr": "Fragmenta poetica"
  }, 
  [
   "I a. C.", 
   "", 
   "mythographus", 
   ""
  ]
 ], 
 "ANTIOCH. HIST.": [
  "Antiochus Syracusanus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "GREG. COR.": [
  "Gregorius Corinthius", 
  {
   "de comp": "de compositione", 
   "in meth": "in methodi Hermogenis grauitatem", 
   "Fig": "de Figuris"
  }, 
  [
   "X/XI d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "PANYAS.": [
  "Panyasis", 
  {}, 
  [
   "V a. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "SOR.": [
  "Soranus", 
  {
   "Fasc": "de fasciis", 
   "V. Hp": "Vita Hippocratis", 
   "Fract": "de fracturis"
  }, 
  [
   "I/II d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "PHORMUS": [
  "Phormus", 
  {}, 
  [
   "VI/V a. C.", 
   "", 
   "comicus (Phorm. )", 
   ""
  ]
 ], 
 "PINNES": [
  "Pinnes", 
  {
   "Ep": "Epistula"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "POLYSTR.": [
  "Polystratus", 
  {
   "Contempt": "de irrationali contemptu"
  }, 
  [
   "III a. C.", 
   "", 
   "epicureus", 
   ""
  ]
 ], 
 "EUSTATHIUS ANTIOCHENUS": [
  "Eustathius Antiochenus", 
  {
   "Fr": "Fragmenta", 
   "Hex": "Commentarius in hexaemeron", 
   "Laz": "Homilia spuria de Lazaro, Maria et Martha", 
   "Engast": "de engastrimytho contra Origenem"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "scriptor ecclesiasticus (Eust. Ant. )", 
   ""
  ]
 ], 
 "TULL. LAUR.": [
  "Tullius Laurea", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "HEGEM. HIST.": [
  "Hegemo Alexandrinus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PHOENICID.": [
  "Phoenicides", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "CAPITO": [
  "Capito", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AMOMETUS": [
  "Amometus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANAXARCH.": [
  "Anaxarchus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "ANAXAG.": [
  "Anaxagoras", 
  {}, 
  [
   "V a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "CERCIDEA": [
  "Cercidea", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EP. DIOG.": [
  "Epistula ad Diognetum", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SIMO ATHENIENSIS": [
  "Simo Atheniensis", 
  {
   "Fr": "Fragmenta", 
   "Eq": "de forma de delectu equorum"
  }, 
  [
   "V/IV a. C.", 
   "", 
   "de re equestri scriptor", 
   ""
  ]
 ], 
 "POLEMAEUS EPHESIUS": [
  "Polemaeus Ephesius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "BOETH.": [
  "Boethius", 
  {
   "Mus": "de institutione musica"
  }, 
  [
   "VI d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "DEMONIC.": [
  "Demonicus", 
  {}, 
  [
   "IV a. C. ?", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "AN. ATHEN.": [
  "Anecdota Atheniensia", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOSTHENES": [
  "Sosthenes", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "FIRM.": [
  "Firmicus Maternus", 
  {
   "Err. prof. relig": "de errore profanarum religionum"
  }, 
  [
   "IV d. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "DEMOCR. $2": [
  "Democritus", 
  {
   "Fr. O": "Fragmentum Orth"
  }, 
  [
   "V a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "PYTHOCL.": [
  "Pythocles", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MOSCHIO HIST.": [
  "Moschio", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PHILOCLES": [
  "Philocles", 
  {}, 
  [
   "II a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "APOC. PAUL.": [
  "Apocalypsis Pauli", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. ARIAN.": [
  "Anonymi Varii Ariani", 
  {
   "Virg": "Sermo de virginitate", 
   "Hom. Oct": "Homiliae duae ad octauas Paschae"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MNESIM.": [
  "Mnesimachus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "ANTON. AB.": [
  "Antonius", 
  {
   "Ep": "Epistula"
  }, 
  [
   "IV d. C.", 
   "", 
   "abbas", 
   ""
  ]
 ], 
 "PHILOSTEPH. HIST.": [
  "Philostephanus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DIOPH.": [
  "Diophantus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "mathematicus", 
   ""
  ]
 ], 
 "TIMOCHARES": [
  "Timochares", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DICTYS CRETENSIS": [
  "Dictys Cretensis", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAMPREPIUS PANOPOLITANUS": [
  "Pamprepius Panopolitanus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "poeta", 
   ""
  ]
 ], 
 "PAULIN.": [
  "Paulinus Nolanus", 
  {
   "V. Ambr": "Vita Ambrosii", 
   "Ep": "Epistulae"
  }, 
  [
   "V d. C.", 
   "", 
   "episcopus", 
   ""
  ]
 ], 
 "CLAU. AP.": [
  "Claudius Apollinarius", 
  {
   "Fr. Pasch": "Fragmenta de Paschate"
  }, 
  [
   "II d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "DOMN.": [
  "Domninus Syrus", 
  {
   "Prop": "de deductione in proportionibus facienda", 
   "Man": "manuale arithmeticae introductionis"
  }, 
  [
   "V d. C.", 
   "", 
   "philosophus et mathematicus", 
   ""
  ]
 ], 
 "PLB. RH.": [
  "Polybius Sardianus", 
  {}, 
  [
   "", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "THGN. HIER.": [
  "Theognis", 
  {}, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "CHRY. HIE.": [
  "Chrysippus Hierosolymitanus", 
  {
   "Enc. Io. B": "Encomium in Iohannem Baptistam", 
   "Enc. in Mich": "Encomium in Michaelem archangelum", 
   "Enc. in Thdr": "Encomium in Theodorum", 
   "Enc. in M": "Encomium in Mariam Deiparam"
  }, 
  [
   "V d. C.", 
   "", 
   "presbyter", 
   ""
  ]
 ], 
 "SOTAD. COM.": [
  "Sotades", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "BUTAS": [
  "Butas", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "IPHICRATES": [
  "Iphicrates", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "IO. COM.": [
  "Iohannes Comes", 
  {
   "Relat": "Sacrarum largitionum relatio"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ANTIST.": [
  "Antistius", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ARIGNOTE": [
  "Arignote", 
  {}, 
  [
   "", 
   "", 
   "philosopha pythagorica", 
   ""
  ]
 ], 
 "STEPH. HIER.": [
  "Stephanus Hierapolitanus", 
  {
   "Agn": "contra Agno\u00ebtas"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "AFRIC.": [
  "Africanus, Sextus Iulius", 
  {
   "Pers": "Narratio de rebus Persicis", 
   "Ep. Arist": "Epistula ad Aristidem", 
   "Cest": "Cesti", 
   "Ep. Orig": "Epistula ad Origenem", 
   "Chron": "Chronicon"
  }, 
  [
   "II/III d. C.", 
   "", 
   "uariae scientiae scriptor", 
   ""
  ]
 ], 
 "DOR. AB.": [
  "Dorotheus Gazaeus", 
  {
   "V. Dosith": "Vita Sancti Dosithei", 
   "Ep": "Epistulae", 
   "Doct": "Doctrinae diversae", 
   "Sent": "Sententiae"
  }, 
  [
   "VI d. C.", 
   "", 
   "abbas", 
   ""
  ]
 ], 
 "NIC. DAM.": [
  "Nicolaus Damascenus", 
  {
   "Vit. Caes": "Vita Caesaris"
  }, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "THPHR.": [
  "Theophrastus", 
  {
   "Vent": "de uentis", 
   "Fr": "Fragmenta", 
   "Lass": "de lassitudine", 
   "Vert": "de uertigine", 
   "Od": "de odoribus", 
   "Sign": "de signis tempestatum", 
   "Char": "Characteres", 
   "Metaph": "Metaphysica", 
   "Sud": "de sudore", 
   "Fr. Pap": "Fragmenta papyracea", 
   "Ign": "de igne", 
   "Lex": "\"<FONT FACE=\"\"SPIonic\"\">peri\\ le/cewj</FONT> \"", 
   "Sens": "de sensu", 
   "Lap": "de lapidibus", 
   "De elig. magistr": "de eligendis magistratibus"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "POEN. APP.": [
  "Poenae Apostolorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARC. SID.": [
  "Marcellus Sidetes", 
  {}, 
  [
   "II d. C.", 
   "", 
   "poeta medicus", 
   ""
  ]
 ], 
 "VEL. LONG.": [
  "Velius Longus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "grammaticus latinus", 
   ""
  ]
 ], 
 "DION. AR.": [
  "Pseudo Dionysius Areopagita", 
  {
   "Myst": "de mystica theologia", 
   "CH": "de coelesti hierarchia", 
   "EH": "de ecclesiastica hierarchia", 
   "Ep": "Epistulae"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "HIPPOCR. CH.": [
  "Hippocrates Chius", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "A\u00cbTHLIUS": [
  "A\u00ebthlius", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "STEPH.": [
  "Stephanus", 
  {
   "in Hp. Aph": "in Hippocratis Aphorismos I-VI", 
   "in Hp. Fract": "in librum Hippocratis de fracturis", 
   "in Hp. Progn": "in Hippocratis Prognostica", 
   "in Gal. Glauc": "in Galeni ad Glauconem de medendi methodo librum primum", 
   "Ur": "de urina"
  }, 
  [
   "VI d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "SOCR.": [
  "Socrates", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "LEANDR(I)US": [
  "Leandr(i)us", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HYPERMENES": [
  "Hypermenes", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CYPR.": [
  "Cypria", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "poema epicum", 
   ""
  ]
 ], 
 "TIMOSTHENES RHODIUS": [
  "Timosthenes Rhodius", 
  {}, 
  [
   "III a. C.", 
   "", 
   "geographus", 
   ""
  ]
 ], 
 "MIM. FR. PAP.": [
  "Mimorum Fragmenta Papyracea", 
  {
   "Adult": "Mimus Adulterae", 
   "Charit": "Mimus Charitionis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOCR. SCH.": [
  "Socrates Scholasticus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIDYM.": [
  "Didymus Alexandrinus", 
  {
   "Eun": "contra Eunomium libri", 
   "Rom": "Fragmenta in Ep. Rom", 
   "Io": "Fragmenta in Eu. Io", 
   "in Eccl": "in Ecclesiasten", 
   "Trin": "de Trinitate", 
   "in Ps": "in Psalmos", 
   "in Zach": "in Zachariam", 
   "Cor": "Fragmenta in 1, 2Ep. Cor", 
   "Heb": "Fragmenta in Ep. Hebr", 
   "in Ps. cat": "Fragmenta in Psalmos e catenis", 
   "Gen": "in Genesin"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "X.": [
  "Xenopho", 
  {
   "HG": "Historia Graeca (Hellenica)", 
   "Cyr": "Cyropaedia", 
   "Ep": "Epistulae", 
   "Smp": "Symposium", 
   "Mem": "Memorabilia", 
   "Ages": "Agesilaus", 
   "Ath": "Atheniensium respublica", 
   "An": "Anabasis", 
   "Ap": "Apologia Socratis", 
   "Vect": "de uectigalibus", 
   "Hier": "Hiero", 
   "Oec": "Oeconomicus", 
   "Lac": "de republica Lacedaemoniorum", 
   "Eq": "de equitandi ratione", 
   "Cyn": "Cynegeticus", 
   "Eq. Mag": "de equitum magistro"
  }, 
  [
   "V/IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "NAUMACH.": [
  "Naumachius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "GABRIEL.": [
  "Gabrielius", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PHILET.": [
  "Philetas", 
  {
   "Fr. Poet": "Fragmenta poetica", 
   "Fr. Gramm": "Fragmenta grammatica"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "grammaticus et poeta", 
   ""
  ]
 ], 
 "MICH.": [
  "Michael Ephesius", 
  {}, 
  [
   "XI/", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "NIGER, SEXTIUS": [
  "Niger, Sextius", 
  {}, 
  [
   "", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "RUF(IN)US DOMESTICUS": [
  "Ruf(in)us Domesticus", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "RHOD.": [
  "Rhodo", 
  {}, 
  [
   "II d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "LEX M. VIP.": [
  "Lex Metalli Vipascensis", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIP. THESS.": [
  "Antipater Thessalonicensis", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ARISTARCH. SAM.": [
  "Aristarchus Samius", 
  {
   "Hyp": "Hypotheses"
  }, 
  [
   "III a. C.", 
   "", 
   "astronomus", 
   ""
  ]
 ], 
 "LOBO ARGIUUS": [
  "Lobo Argiuus", 
  {}, 
  [
   "III a. C. ?", 
   "", 
   "poeta", 
   ""
  ]
 ], 
 "LOLLIAN.": [
  "Lollianus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "scriptor eroticus", 
   ""
  ]
 ], 
 "ERGIAS": [
  "Ergias", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AR. DID.": [
  "Arius Didymus", 
  {
   "Stoic": "Epitome de morali philosophiae parte (ethica stoica)"
  }, 
  [
   "I a. C.", 
   "", 
   "doxographus", 
   ""
  ]
 ], 
 "NOT. TIR.": [
  "Notae Tironianae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "BIO HIST.": [
  "Bio", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "IL. PARU.": [
  "Iliades Paruae", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "poemata epica", 
   ""
  ]
 ], 
 "MENNIPUS": [
  "Mennipus", 
  {}, 
  [
   "", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "AMMON. $3": [
  "Ammonius", 
  {
   "in APr": "in Aristotelis analyticorum Priorum librum I commentarium", 
   "in Porph": "in Porphyrii Isagogen siue V uoces", 
   "in Cat": "in Aristotelis Categorias commentarius", 
   "in Int": "in Aristotelis de Interpretatione commentarius"
  }, 
  [
   "V d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "IO. D.": [
  "Iohannes Damascenus", 
  {
   "Dial": "dialectica", 
   "Natiu. M": "Oratio in natiuitatem sanctae dei genitricis Mariae", 
   "Trisag": "epistula de hymno Trisagio", 
   "Iac": "contra Iacobitas", 
   "Fic": "Oratio in ficum arefactam et in parabolam uineae", 
   "Elias": "Commentarius in sanctum prophetam Eliam", 
   "Fid": "expositio fidei", 
   "Occurs": "Oratio in occursum domini", 
   "Imag": "Orationes de imaginibus tres", 
   "Inst": "institutio elementaris", 
   "Dorm": "In dormitionem sanctae dei genitricis Mariae orationes tres", 
   "Man": "contra Manichaeos", 
   "Natiu. Dom": "Homilia in natiuitatem domini", 
   "Phil": "fragmenta philosophica e cod. Oxon. Bodl. Auct. T. 1. 6", 
   "Aceph": "de natura composita contra acephalos", 
   "Laud. Chrys": "Laudatio sancti Iohannis Chrysostomi", 
   "Artem": "Passio magni martyris Artemii", 
   "Volunt": "de duabus in Christo uoluntatis", 
   "Haer": "de haeresibus", 
   "Disp": "disputatio christiani et saraceni", 
   "Fid. Nest": "de fide contra Nestorianos", 
   "Sabbat": "Oratio in sabbatum sanctum", 
   "Anast": "Laudatio sanctae martyris Anastasiae", 
   "Barb": "Laudatio sanctae martyris Barbarae", 
   "Palm": "Oratio in palmas", 
   "Transfig": "Homilia in transfigurationem saluatoris nostri Iesu Christi", 
   "Nest": "contra Nestorianos"
  }, 
  [
   "VIII d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "POSIDIPP.": [
  "Posidippus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "ERINN.": [
  "Erinna", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "lyrica", 
   ""
  ]
 ], 
 "EUN. NIC.": [
  "Eunomius Nicomedensis", 
  {
   "Supplic": "Supplicatio"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PHILINUS COUS": [
  "Philinus Cous", 
  {}, 
  [
   "III a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "THESSAL.": [
  "Thessalus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "DISP. PHOT.": [
  "Disputatio Photini Manichaei cum Paulo", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "S. E.": [
  "Sextus Empiricus", 
  {
   "P": "Pyrrhonianae institutiones", 
   "M": "aduersus mathematicos"
  }, 
  [
   "II/III d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "ORIO": [
  "Orio", 
  {}, 
  [
   "V d. C.", 
   "", 
   "lexicographus", 
   ""
  ]
 ], 
 "BESANT.": [
  "Besantinus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PHAEDO ELIDENSIS": [
  "Phaedo Elidensis", 
  {}, 
  [
   "", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "DEMETR. LAC.": [
  "Demetrius Laco", 
  {
   "Geom": "de geometria", 
   "Po": "de poematis"
  }, 
  [
   "II a. C.", 
   "", 
   "epicureus", 
   ""
  ]
 ], 
 "ARIUS": [
  "Arius", 
  {
   "Thal. Fr": "de Thalia fragmenta ex Athanasio", 
   "Ep. Alex": "Epistula ad Alexandrum Alexandrinum", 
   "Ep. Const": "Epistula ad Constantinum", 
   "Ep. Eus": "Epistula ad Eusebium Nicomediensem"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "CREOPHYLUS": [
  "Creophylus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HIPPAS.": [
  "Hippasus", 
  {}, 
  [
   "VI/V a. C.", 
   "", 
   "pythagoricus", 
   ""
  ]
 ], 
 "PHILOCL.": [
  "Philocles", 
  {}, 
  [
   "V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "IND. APOST.": [
  "Indices apostolorum discipulorumque", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOX.": [
  "Philoxenus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "FLAU. ANT.": [
  "Flauianus Antiochenus", 
  {
   "Fr": "Fragmenta", 
   "Anath": "de non anathematizandis"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ANON. IUD.": [
  "Anonymus Dialogus cum Iudaeis", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "COMETAS CHARTULARIUS": [
  "Cometas Chartularius", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "MYRIN.": [
  "Myrinus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "FR. HIST.": [
  "Fragmenta historica ecclesiastica", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATHENA.": [
  "Athenaco", 
  {}, 
  [
   "a. helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "OLYMP.": [
  "Olympiodorus", 
  {
   "in Cat": "in Categorias commentarium", 
   "in Mete": "in Aristotelis Meteora commentaria", 
   "in Alc": "in Platonis Alcibiadem commentaria", 
   "in Phd": "in Platonis Phaedonem commentaria", 
   "Prol": "Prolegomena", 
   "in Grg": "in Platonis Gorgiam commentaria"
  }, 
  [
   "VI d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "MUC. SCAEU.": [
  "Mucius Scaeuola", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "GALL. PLAC.": [
  "Galla Placidia", 
  {
   "Ep. Pulch": "Epistula ad Pulcheriam", 
   "Ep. Thds": "Epistula ad Theodosium"
  }, 
  [
   "V d. C.", 
   "", 
   "imperatrix", 
   ""
  ]
 ], 
 "DAMOX.": [
  "Damoxenus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "THEOD. TRAG.": [
  "Theodorus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "H. HOM.": [
  "Hymni Homerici", 
  {
   "h. Ap": "hymnus ad Apollinem", 
   "h. Pan": "hymnus ad Panem", 
   "h. Mart": "hymnus ad Martem", 
   "h. Cer": "hymnus ad Cererem", 
   "h. Bacch": "hymnus ad Bacchum", 
   "h. Ven": "hymnus ad Venerem", 
   "h. Merc": "hymnus ad Mercurium"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEBA\u00cfS": [
  "Theba\u00efs", 
  {}, 
  [
   "VIII a. C.", 
   "", 
   "poema epicum", 
   ""
  ]
 ], 
 "ALCMAEONIS": [
  "Alcmaeonis", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "poema epicum", 
   ""
  ]
 ], 
 "ARSEN. HYPS.": [
  "Arsenius Hypselites", 
  {
   "Ep": "Epistulae ad Athanasium"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ANTICL.": [
  "Anticlides", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SCH.": [
  "Scholia", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOPAT.": [
  "Sopater", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "LIB.": [
  "Libanius", 
  {
   "Arg. D": "Argumenta orationum Demosthenicarum", 
   "Decl": "Declamationes", 
   "Enc": "Encomia", 
   "Vit": "Vituperationes", 
   "Descr": "Descriptiones", 
   "Loc": "Loci communes", 
   "Comp": "Comparationes", 
   "Thes": "Theses", 
   "Narr": "Narrationes", 
   "Chr": "Chriae", 
   "Sch": "Scholia", 
   "Sent": "Sententiae", 
   "Conf": "Confirmationes", 
   "Def. Leg": "Defensio legis", 
   "Fab": "Fabulae", 
   "Eth": "Ethopoeiae", 
   "Ref": "Refutationes", 
   "Ep": "Epistulae", 
   "Or": "Orationes", 
   "Ep. Basil": "Epistulae ad Basilium"
  }, 
  [
   "IV d. C.", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "MACAREUS": [
  "Macareus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "THEODORUS": [
  "Theodorus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "CRATES MALLOTES": [
  "Crates Mallotes", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II a. C.", 
   "", 
   "grammaticus (Crates Gr. )", 
   ""
  ]
 ], 
 "DION. COM. B": [
  "Dionysius Comes B", 
  {}, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "DION. COM. A": [
  "Dionysius Comes A", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "CLAUDIANUS": [
  "Claudianus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ET. PARU.": [
  "Etymologicum Paruum", 
  {}, 
  [
   "IX d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRAXAG. COUS": [
  "Praxagoras Cous", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "POLIOCH.": [
  "Poliochus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "PARM.": [
  "Parmenides", 
  {}, 
  [
   "VI/V a. C.", 
   "", 
   "poeta philosophus", 
   ""
  ]
 ], 
 "ACHAE.": [
  "Achaeus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "ONESICRITUS": [
  "Onesicritus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANDRIS. HIST.": [
  "Andriscus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DEMETR. TROEZ.": [
  "Demetrius Troezenius", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "poeta philosophus", 
   ""
  ]
 ], 
 "SOSIB.": [
  "Sosibius", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MACEDON.": [
  "Macedonius Thessalonicensis II", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "CANON.": [
  "Codex Canonum ecclesiasticorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEX. VIND.": [
  "Lexicon Vindobonense", 
  {}, 
  [
   "XIV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MOER.": [
  "Moeris", 
  {}, 
  [
   "II d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "MATI.": [
  "Matidius, Tarsinus et alii", 
  {
   "Ep": "Epistula ad Epiphanium"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptores ecclesiastici", 
   ""
  ]
 ], 
 "IOB. MON.": [
  "Iobius", 
  {
   "Inc": "Quaestio quare filius incarnatus sit"
  }, 
  [
   "VI d. C.", 
   "", 
   "monachus", 
   ""
  ]
 ], 
 "AGAP. PAPA": [
  "Agapetus", 
  {
   "Ep. Syn": "Epistula Synodica"
  }, 
  [
   "VI d. C.", 
   "", 
   "papa", 
   ""
  ]
 ], 
 "THEODORID. TRAG.": [
  "Theodorides", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "HYG.": [
  "Hyginus", 
  {
   "Fab": "Fabulae", 
   "Astr": "de astronomia"
  }, 
  [
   "I a. C. ?", 
   "", 
   "fabularum scriptor latinus", 
   ""
  ]
 ], 
 "SYNES.": [
  "Synesius Cyrenensis", 
  {
   "Hymn": "Hymni", 
   "Astrolab": "Sermo de dono astrolabii", 
   "Dio": "Dio", 
   "Catast": "Catastasis", 
   "Hom": "Homiliae", 
   "Insomn": "de insomniis", 
   "Calu": "Caluitii encomium", 
   "Regn": "oratio de regno", 
   "Prouid": "de prouidentia siue Aegyptii", 
   "Ep": "Epistulae"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "DION. MIL. $2": [
  "Dionysius Milesius", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "PRISCIAN.": [
  "Priscianus", 
  {
   "Inst": "Institutio"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "CORINN.": [
  "Corinna", 
  {}, 
  [
   "V a. C.", 
   "", 
   "lyrica", 
   ""
  ]
 ], 
 "CLEOBUL.": [
  "Cleobulus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "VI a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "THEOS.": [
  "Theosophorum Graecorum Fragmenta", 
  {
   "Sib": "Theosophia Sibyllarum", 
   "Tub": "Theosophia Tubingensis", 
   "Min": "Thesauri minores"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AESOP. HIST.": [
  "Aesopus", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "THGN. HIST.": [
  "Theognis Rhodius", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "IO. DIACR.": [
  "Iohannes Diacrinomenus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "HAGIAS": [
  "Hagias", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SYRIAN.": [
  "Syrianus", 
  {
   "in Metaph": "in Metaphysica commentaria", 
   "in Hermog": "in Hermogenem commentaria"
  }, 
  [
   "V d. C.", 
   "", 
   "philosophus et rhetor", 
   ""
  ]
 ], 
 "SOTIO": [
  "Sotio", 
  {}, 
  [
   "I d. C.", 
   "", 
   "paradoxographus", 
   ""
  ]
 ], 
 "METROPHANES": [
  "Metrophanes", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HERACLEO $1": [
  "Heracleo", 
  {}, 
  [
   "II d. C.", 
   "", 
   "gnosticus", 
   ""
  ]
 ], 
 "MARC. ARG.": [
  "Marcus Argentarius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "GLAUCI.": [
  "Glaucias", 
  {}, 
  [
   "II a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "LIU. ANDR.": [
  "Liuius Andronicus", 
  {
   "Carm": "Carminum epicorum fragmenta"
  }, 
  [
   "III a. C.", 
   "", 
   "epicus latinus", 
   ""
  ]
 ], 
 "TIM. $2": [
  "Timotheus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "PHYLOTIM.": [
  "Phylotimus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "ARISTOXENUS SELINUNTIUS": [
  "Aristoxenus Selinuntius", 
  {}, 
  [
   "VI a C.", 
   "", 
   "comicus (Aristox. Sel. )", 
   ""
  ]
 ], 
 "LOLL.": [
  "Lollius Bassus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "FRAGMENTUM HYMNI": [
  "Fragmentum Hymni", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PYTHAEN.": [
  "Pythaenetus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DEMETR. COM. NOU.": [
  "Demetrius", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus nouae comoediae", 
   ""
  ]
 ], 
 "CRITOL.": [
  "Critolaus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "APOLLON. HIST.": [
  "Apollonius", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "LEO MAG.": [
  "Leo I", 
  {
   "Ep": "Epistula"
  }, 
  [
   "V d. C.", 
   "", 
   "papa", 
   ""
  ]
 ], 
 "MENEMACH.": [
  "Menemachus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "ISYLL.": [
  "Isyllus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "LEONT. CONST.": [
  "Leontius Constatinopolitanus", 
  {
   "Hom": "Homiliae"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "AMPHITHEUS": [
  "Amphitheus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PHILO BYBLIUS": [
  "Philo Byblius", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PHILOSTR.": [
  "Philostratus", 
  {
   "VA": "Vita Apollonii", 
   "Dial": "Dialexeis", 
   "Gym": "de gymnastica", 
   "Ep": "Epistulae", 
   "Her": "Heroicus"
  }, 
  [
   "II/III d. C.", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "BAETON": [
  "Baeton", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CHARIS. $2": [
  "Charisius", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "ALEX. HIST.": [
  "Alexis Samius", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANON. ANTIMONTAN.": [
  "Anonymus Antimontanista", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERENN. PHIL.": [
  "Herennius Philo Byblius", 
  {
   "Hist": "Fragmenta historica", 
   "Diff": "\ufffdEranii\ufffd de differentia significationis", 
   "Aet": "de aetatum cognitione", 
   "Propr": "de propria dictione", 
   "Sign": "de diuersis uerborum significationibus"
  }, 
  [
   "I/II d. C.", 
   "", 
   "historicus et grammaticus", 
   ""
  ]
 ], 
 "TEUCER BABYLONIUS": [
  "Teucer Babylonius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "CHRYS.": [
  "Chrysostomus, Iohannes", 
  {
   "Serm. Ascens": "Sermones in Ascensionem", 
   "Serm. Gen": "Sermones in Genesim", 
   "Nat. Christ": "in natiuitatem Christi", 
   "Catech. Illum": "catecheses ad illuminandos", 
   "Res": "Homilia in resurrectionem Domini", 
   "in Eccl": "in Ecclesiasten", 
   "Laud. Thecl": "Fragmentum laudationis Theclae", 
   "Nat": "de natiuitate", 
   "Laed": "quod nemo laeditur nisi a se ipso", 
   "Educ. Lib": "de educandis liberis", 
   "Laud. Paul": "de laudibus Pauli", 
   "Regr": "de regressu", 
   "Scand": "ad eos qui scandalizati sunt", 
   "Pan. Polyc": "Fragmenta ex panegyrico in Polycarpum", 
   "Hom. Ps": "Homiliae Pseudo-Chrysostomicae", 
   "Temp": "de temperantia", 
   "Epiph": "de epiphania", 
   "Ep. Thdr": "Epistula ad Theodorum", 
   "Subintr": "contra eos qui subintroductas habent uirgines", 
   "Thom": "in sanctum Thomam et in oeconomiam domini nostri", 
   "Anom": "contra anomoeos", 
   "Fr. Ier": "Fragmentum in Ieremiam", 
   "in cat. Petr": "in catenas S. Petri", 
   "Serm. Pasch": "Sermo in Pascha", 
   "Bapt. Tent": "in Baptismum et Tentationem", 
   "Transfig": "in transfigurationem", 
   "Fem. Reg": "quod regulares feminae uiris cohabitare non debeant", 
   "Vid": "ad uiduam iuniorem", 
   "Hom. Oz": "Homiliae", 
   "Sac": "de sacerdotio", 
   "Ordin": "Sermo cum presbyter fuit ordinatus", 
   "Is. interp": "Interpretatio in Isaiam", 
   "Poenit. can": "Canones poenitentiales", 
   "Virg": "de uirginitate", 
   "Thdr": "ad Theodorum lapsum libri", 
   "Incomprehens": "de incomprehensibili dei natura"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GEL. CAES.": [
  "Gelasius Caesariensis", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "XENOPH.": [
  "Xenophanes", 
  {}, 
  [
   "VI/V a. C.", 
   "", 
   "poeta philosophus", 
   ""
  ]
 ], 
 "ERATOSTH. AG.": [
  "Eratosthenes Agacleus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AMIPS.": [
  "Amipsias", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "HECAT. ABD.": [
  "Hecateus Abderita", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CALL. $2": [
  "Callimachus", 
  {
   "Dian": "Hymnus in Dianam", 
   "Fr": "Fragmenta", 
   "Sch": "Scholia", 
   "Epigr": "Epigrammata", 
   "Iou": "Hymnus in Iouem", 
   "Ap": "Hymnus in Apollinem", 
   "Del": "Hymnus in Delum", 
   "Cer": "Hymnus in Cererem", 
   "Lau. Pall": "Lauacrum Palladis", 
   "Dieg": "Diegeseis"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "poeta", 
   ""
  ]
 ], 
 "ARISTOCRATES": [
  "Aristocrates", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AUGEAS": [
  "Augeas", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "APHROD.": [
  "Aphrodisius Thespiensis", 
  {}, 
  [
   "helen\u00edst. ?", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "NECT.": [
  "Nectarius Constantinopolitanus", 
  {
   "Thdr": "de festo Theodori"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "FABIUS PICTOR": [
  "Fabius Pictor", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PHILETAS SAMIUS": [
  "Philetas Samius", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "METROD. CHIUS": [
  "Metrodorus Chius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "ANTIMACHUS TEIUS": [
  "Antimachus Teius", 
  {}, 
  [
   "", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "ARIAETHUS TEGEATA": [
  "Ariaethus Tegeata", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CASSIAN.": [
  "Cassianus, Iohannes", 
  {
   "Conl": "Conlatio"
  }, 
  [
   "IV/V d. C.", 
   "", 
   ", abbas Massiliensis", 
   ""
  ]
 ], 
 "DIONYSOPHANES": [
  "Dionysophanes", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "THRASYL. HIST.": [
  "Thrasylus", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "GR. ANT.": [
  "Gregorius Antiochenus", 
  {
   "Exerc": "Oratio ad exercitum", 
   "Bapt. 2": "de baptismo Christi", 
   "Mul. Ung": "in mulieres unguentiferas"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "IO. BERYT.": [
  "Iohannes Berytensis", 
  {
   "Hom": "Homilia in resurrectionem salvatoris"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ARISTARCH. TRAG.": [
  "Aristarchus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "ARISTOCL.": [
  "Aristocles", 
  {}, 
  [
   "II d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "THEAET. SCHOL.": [
  "Theaetetus Scholasticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PS. ARCHYT.": [
  "Pseudo Archytas", 
  {}, 
  [
   "I a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "DINO": [
  "Dino", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AGATH. SAM.": [
  "Agatho Samius", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "VAL. GN.": [
  "Valentinus Gnosticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II d. C.", 
   "", 
   "et discipuli", 
   ""
  ]
 ], 
 "POLYCRITUS": [
  "Polycritus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "APOLLON.": [
  "Apollonius", 
  {
   "Vit. Aeschin": "Vita Aeschinis"
  }, 
  [
   "a. 200 d. C.", 
   "", 
   "biographus", 
   ""
  ]
 ], 
 "MENOPH. DAM.": [
  "Menophilus Damascenus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "PTOL. EUERG.": [
  "Ptolemaeus Euergetes II", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANDRONIC.": [
  "Andronicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ADAM. $2": [
  "Adamantius", 
  {
   "Vent": "de uentis", 
   "Epit. Matr": "Epitomae Adamantianae codicis Matritensis"
  }, 
  [
   "IV d. C.", 
   "", 
   "physiognomonicus", 
   ""
  ]
 ], 
 "POLYCHRON.": [
  "Polychronius Apameensis", 
  {
   "Fr. Ezech": "Fragmenta in Ez", 
   "Fr. Dan": "Fragmenta in Da"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "BAS. ANC.": [
  "Basilius Ancyranus", 
  {
   "Virg": "Liber de uera uirginitate"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "APOC. ESD.": [
  "Apocalypsis Esdrae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHEL. AEG.": [
  "Archelaus Aegyptius", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "paradoxographus et epigrammaticus", 
   ""
  ]
 ], 
 "BEM.": [
  "Bemarchius Caesareus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SCHEM. DIAN.": [
  "Schemata dianoeae quae ad rhetores pertinent", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VITAL.": [
  "Vitalis Apollinarista", 
  {
   "Fr": "Fragmentum de fide"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICOCRATES": [
  "Nicocrates", 
  {}, 
  [
   "III a. C. ?", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HIPPARCH.": [
  "Hipparchus", 
  {
   "Fr. Geog": "Fragmenta Geographica"
  }, 
  [
   "II a. C.", 
   "", 
   "astronomus", 
   ""
  ]
 ], 
 "CINEAS": [
  "Cineas", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AMMONIDES": [
  "Ammonides", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "THEOGENES": [
  "Theogenes", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "THGN.": [
  "Theognis", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "elegiacus", 
   ""
  ]
 ], 
 "ISIG.": [
  "Isigonus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "paradoxographus", 
   ""
  ]
 ], 
 "ANONYMUS": [
  "Anonymus", 
  {
   "Decl. Par": "declamatio Paridis ad Senatum Troianum"
  }, 
  [
   "V d. C. ?", 
   "", 
   "(Anon. )", 
   ""
  ]
 ], 
 "LEX. BARBER.": [
  "Lexicon Synonymicum Barberinianum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOT.": [
  "Theotimus", 
  {
   "Cyr": "de Cyrene"
  }, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "THEMISO HIST.": [
  "Themiso", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "RHEG.": [
  "Rheginus Constantiensis", 
  {
   "Serm": "Sermo Ephesi habitus", 
   "Libell": "Libellus"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "THALLUS, ANTONIUS": [
  "Thallus, Antonius", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "DAMIAN.": [
  "Damianus", 
  {
   "Opt": "Optica"
  }, 
  [
   "IV d. C.", 
   "", 
   "opticus", 
   ""
  ]
 ], 
 "EPHIPP. HIST.": [
  "Ephippus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PHAED.": [
  "Phaedrus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "fabularum scriptor", 
   ""
  ]
 ], 
 "ARISTID. QUINT.": [
  "Aristides Quintilianus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "musicus", 
   ""
  ]
 ], 
 "DIOSCOR. ALEX.": [
  "Dioscorus Alexandrinus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ANON. LOND.": [
  "Anonymus Londinensis", 
  {
   "Fr": "Fragmentum"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THDL.": [
  "Theodulus", 
  {
   "Fr": "Fragmentum", 
   "Id": "Fragmenta in Iudices"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "AMEL.": [
  "Amelius Apamensis", 
  {
   "Ep": "Epistula"
  }, 
  [
   "III d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "DIN.": [
  "Dinarchus", 
  {
   "Fr": "Fragmenta", 
   "Fr. Inc": "Fragmenta incertae sedis"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "orator", 
   ""
  ]
 ], 
 "APOLLOD. COM.": [
  "Apollodorus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "comicus (Carystius an Gelous incertum)", 
   ""
  ]
 ], 
 "COQUIN. FR. PAP.": [
  "De Re Coquinaria Fragmentum Papyraceum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THDT. ANC.": [
  "Theodotus Ancyranus", 
  {
   "Fr. Act": "Fragmenta in Act. Ap", 
   "Fr": "Fragmentum", 
   "Exp. symb": "Expositio symboli Nicaeni", 
   "Hom": "Homiliae", 
   "Hom. SMV et Sym": "Homilia in SMV et Symeonem"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "SOTAD.": [
  "Sotades", 
  {}, 
  [
   "III a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "LASUS": [
  "Lasus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "AMELESAGORAS": [
  "Amelesagoras", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "APOLL.": [
  "Apollinaris Laodicenus", 
  {
   "Pr": "Fragmenta in Pr", 
   "Lc": "Fragmenta in Lucam", 
   "Ep. Iou": "Epistula ad Iouianum", 
   "Ezech": "Fragmenta in Ez", 
   "Ep. Dion": "Epistula ad Dionysium", 
   "Fid. Inc": "de fide et incarnatione fragmentum", 
   "Luc": "Fragmenta in Eu. Luc", 
   "Oct": "Fragmenta in Octateuchum et Reges", 
   "Fr": "Fragmenta", 
   "Dan": "Fragmenta in Danielem", 
   "Met. Ps": "Metaphrases in Ps", 
   "Fr. Lam": "Fragmenta in Lamentationes", 
   "Fr. Ep. Cath": "Fragmenta in epistulas Catholicas", 
   "Corp. et Diu": "De unione corporis et diuinitatis in Christo", 
   "Io": "Fragmenta in Eu. Io", 
   "Ep. Seb": "Epistula Sebastiani", 
   "Mt": "Fragmenta in Eu. Matt", 
   "Fr. Ier": "Fragmenta in Ieremiam", 
   "Ep. Bas": "Epistulae ad Basilium", 
   "Fid. Sec. Pt": "Fides secundum partem", 
   "Rom": "Fragmenta in Ep. Rom", 
   "Is": "Fragmenta in Is", 
   "Ep. Diocaes": "Epistula ad Diocaesarienses", 
   "quod un": "quod unus sit Christus", 
   "Fr. Act. Ap": "Fragmentum in Actus Apostolorum", 
   "Conf": "Confessio Antiochena", 
   "Tom. Syn": "Tomus synodalis", 
   "Inc": "de incarnatione Dei uerbi", 
   "Anac": "Anacephalaeosis"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ARISTAEUS": [
  "Aristaeus", 
  {}, 
  [
   "III/II a. C. ?", 
   "", 
   "pythagoricus", 
   ""
  ]
 ], 
 "IOHANNES PHILOPONUS": [
  "Iohannes Philoponus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AN. MATR.": [
  "Anecdota Graeca", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DON.": [
  "Donatus, Tiberius Claudius", 
  {
   "Int. Verg": "Interpretationes Vergilianae"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. $2": [
  "Anonymus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOD. LECT.": [
  "Theodorus Lector", 
  {
   "Fr": "Fragmenta", 
   "Epit": "Epitome"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "EUENUS ATHENIENSIS": [
  "Euenus Atheniensis", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "GALLICAN.": [
  "Gallicanus, Vulcacius", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "NECH.": [
  "Nechepso", 
  {}, 
  [
   "II a. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "LYSIM.": [
  "Lysimachus", 
  {
   "Aegypt": "Aegyptiaca"
  }, 
  [
   "I a. C. /", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ATILIUS FORTUNATIANUS": [
  "Atilius Fortunatianus", 
  {}, 
  [
   "", 
   "", 
   "grammaticus latinus", 
   ""
  ]
 ], 
 "RES GESTAE SAPORIS": [
  "Res gestae diui Saporis", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DE RE MEDICA FRAGMENTA PAPYRACEA": [
  "De Re Medica Fragmenta Papyracea", 
  {}, 
  [
   "", 
   "", 
   "(Medic. Fr. Pap. )", 
   ""
  ]
 ], 
 "AESCHIN. $2": [
  "Aeschines", 
  {
   "Ep": "Epistulae", 
   "Sch": "Scholia"
  }, 
  [
   "IV a. C.", 
   "", 
   "orator", 
   ""
  ]
 ], 
 "AGIS": [
  "Agis", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "MEGASTH.": [
  "Megasthenes", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CRATIN. IUN.": [
  "Cratinus Iunior", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "DIDACHE": [
  "Didache", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASINIUS QUADRATUS": [
  "Asinius Quadratus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANTIP. MAG.": [
  "Antipater Magnesius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HOSIUS CORDUBENSIS": [
  "Hosius Cordubensis", 
  {
   "Ep": "Epistula ad Constantium imperatorem"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "GR. NYSS.": [
  "Gregorius Nyssenus", 
  {
   "Eun": "contra Eunomium", 
   "Nat": "in diem natalem saluatoris", 
   "Deit": "de deitate filii et spiritus sancti et in Abraham", 
   "Hom. in Cant": "in Canticum canticorum homiliae 15", 
   "Res": "in Christi resurrectionem", 
   "Or. Dom": "de oratione dominica orationes V", 
   "Suppl": "Hom. Par", 
   "Bapt. Diff": "aduersus eos qui baptismum differunt", 
   "Mart": "in XL martyres Ia-b, II", 
   "Prof. Chr": "de professione christiana ad Harmoniam", 
   "Maced": "aduersus Macedonianos de Spiritu Sancto", 
   "Engast": "de Pythonissa ad Theodosium episcopum (= de engastrimytho", 
   "Fid": "ad Simplicium de fide", 
   "Ref. Eun": "Refutatio confessionis Eunomii", 
   "Perf": "de perfectione christiana ad Olympium monachum", 
   "Spir": "de spiritu sancto siue in Pentecosten", 
   "Bapt. Chr": "in baptismum Christi uel in diem luminum", 
   "Beat": "de beatitudinibus", 
   "Fat": "contra Fatum", 
   "Pulch": "Oratio consolatoria in Pulcheriam", 
   "Hom. in 1Cor": "in illud: Tunc et ipse Filius", 
   "Inu. Imag": "Inuentio imaginis in Camulianis", 
   "Hom. in Eccl": "in Ecclesiasten homiliae 8", 
   "Pss": "in inscriptiones psalmorum", 
   "Annunt": "in annuntiationem", 
   "Usur": "contra usurarios", 
   "V. Gr. Thaum": "de vita Gregorii Thaumaturgi", 
   "Ep. Can": "Epistula canonica ad Letoium", 
   "Apoll": "Antirrheticus aduersus Apollinarium", 
   "Bas": "in Basilium fratrem", 
   "Diff. Ess": "de differentia essentiae et hypostaseos", 
   "Ps. 6": "in sextum psalmum", 
   "Thphl": "ad Theophilum aduersus Apollinaristas", 
   "Steph": "in sanctum Stephanum I, II", 
   "Or. Catech": "Oratio catechetica", 
   "Mort": "de mortuis non esse dolendum", 
   "Hex": "Apologia in hexaemeron", 
   "Hom. Opif": "de opificio hominis", 
   "Flacill": "oratio funebris in Flacillam imperatricem", 
   "Instit": "de instituto christiano", 
   "V. Macr": "Vita S. Macrinae", 
   "Melet": "Oratio funebris in Meletium episcopum", 
   "Tres dei": "ad Ablabium quod non sint tres dei", 
   "Infant": "de infantibus praemature abreptis", 
   "Castig": "aduersus eos qui castigationes aegre ferunt", 
   "Paup": "de pauperibus amandis", 
   "V. Mos": "de vita Mo(y)sis", 
   "Xen": "Tractatus ad Xenodorum", 
   "Ordin": "in suam ordinationem", 
   "Trin": "ad Eustathium de Sancta Trinitate", 
   "Comm. Not": "ad Graecos ex communibus notionibus", 
   "Ar. et Sab": "Aduersus Arium et Sabellium", 
   "Virg": "de uirginitate", 
   "Ascens": "in ascensionem Christi", 
   "Ep": "Epistulae", 
   "Thdr": "de sancto Theodoro"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "CHRONICUM ROMANUM": [
  "Chronicum Romanum", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POMP. GRAM.": [
  "Pompeius", 
  {}, 
  [
   "a. VI d. C.", 
   "", 
   "grammaticus latinus", 
   ""
  ]
 ], 
 "PERIANDER": [
  "Periander", 
  {}, 
  [
   "VII/", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "PLOT.": [
  "Plotinus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "MENODOT. PERINTH.": [
  "Menodotus Perinthius", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "COLUM.": [
  "Columella, L. Iunius", 
  {}, 
  [
   "I d. C.", 
   "", 
   "scriptor rei rusticae latinus", 
   ""
  ]
 ], 
 "HEGEMON.": [
  "Hegemonius", 
  {
   "Arch": "Acta Archelai"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "X. EPH.": [
  "Xenopho Ephesius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "scriptor eroticus", 
   ""
  ]
 ], 
 "HYP.": [
  "Hyperides", 
  {
   "Fr": "Fragmenta", 
   "Phil": "aduersus Philippidem", 
   "Epit": "Epitaphius", 
   "Ath": "aduersus Athenogenem", 
   "Dem": "aduersus Demosthenem", 
   "Lyc": "pro Lycophrone", 
   "Eux": "pro Euxenippo"
  }, 
  [
   "IV a. C.", 
   "", 
   "orator", 
   ""
  ]
 ], 
 "HEROPHANES": [
  "Herophanes", 
  {}, 
  [
   "imper.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AMMIAN.": [
  "Ammianus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "DION. CYZ.": [
  "Dionysius Cyzicenus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "DIOCL. COM.": [
  "Diocles", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "VAL. APOLL.": [
  "Valentinus Apollinarista", 
  {
   "Apol": "Capita Apologiae"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAXIMAND.": [
  "Anaximander", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "ATHANADAS": [
  "Athanadas", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "IS.": [
  "Isaeus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "V/IV a. C.", 
   "", 
   "orator", 
   ""
  ]
 ], 
 "IUL. AR.": [
  "Iulianus Arianus", 
  {}, 
  [
   "IV d. C. ?", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "SATRIUS": [
  "Satrius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "DIOPHAN.": [
  "Diophanes", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "HEPH. ASTR.": [
  "Hephaestio", 
  {
   "App": "Appendix", 
   "Epit": "Epitomae"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "EPIM. HOM.": [
  "Epimerismi Homerici", 
  {
   "Alph": "Epimerismi ordine alphabetico traditi", 
   "Il": "Epimerismi ad Iliadis librum A pertinentes"
  }, 
  [
   "VI/", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOX. GRAMM.": [
  "Philoxenus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "ARISTODEM. EL.": [
  "Aristodemus Eleus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HERACLIAN.": [
  "Heraclianus Chalcedoniensis", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTARCH.": [
  "Aristarchus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "III/II a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "HERACL.": [
  "Heraclas", 
  {}, 
  [
   "II d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "ZON.": [
  "Diodorus Zonas", 
  {}, 
  [
   "I a. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "CLYTUS": [
  "Clytus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DIPH.": [
  "Diphilus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "COMARIUS": [
  "Comarius", 
  {}, 
  [
   "", 
   "", 
   "alchemista", 
   ""
  ]
 ], 
 "ARCESIL. $2": [
  "Arcesilaus", 
  {
   "Fr": "Fragmenta", 
   "Ep": "Epistula"
  }, 
  [
   "III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "EUC. MEG.": [
  "Euclides Megareus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "DEM. PHAL.": [
  "Demetrius Phalereus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "LYR. ELEG. ADESP.": [
  "Lyrica elegiaca adespota", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLEM.": [
  "Polemo", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "IREN. LUGD.": [
  "Irenaeus Lugdunensis", 
  {
   "Ep. Flor": "Epistula ad Florinum", 
   "Fr": "Fragmenta deperditorum operum", 
   "Haer": "aduersus haereses", 
   "Fr. Jena": "Fragmentum libri 5 in PJena seruatum", 
   "Ep. Vict": "Epistula ad Victorem"
  }, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SYMB.": [
  "Symbola", 
  {
   "Caes": "Symbolum Caesariense", 
   "Rom": "Symbolum Romanum", 
   "App": "Symboli apostolorum uersiones uariae", 
   "Nic. CP": "Symbolum Nicaenum Constantinopolitanum", 
   "Sirm": "anath", 
   "Ant": "Symbolum Antiochenorum anno", 
   "Hier": "Symbolum Hierosolymitanum", 
   "Chalc": "Symbolum synodi Chalcedonensis anno", 
   "Sel": "Symbolum synodi Seleucensis anno"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EU. EBION.": [
  "Euangelium Ebionitum", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTUS SAL.": [
  "Aristus Salaminius", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PTOL. GNOST.": [
  "Ptolemaeus", 
  {
   "Ep": "Epistula ad Floram"
  }, 
  [
   "II d. C.", 
   "", 
   "gnosticus", 
   ""
  ]
 ], 
 "MAMERC.": [
  "Mamercus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "elegiacus", 
   ""
  ]
 ], 
 "SYLU. P.": [
  "Syluester I papa", 
  {
   "Fr": "Fragmentum operis contra Iudaeos"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOG. BAB. STOIC.": [
  "Diogenes Babylonius", 
  {}, 
  [
   "II a. C.", 
   "", 
   "stoicus", 
   ""
  ]
 ], 
 "ACESTORIDES": [
  "Acestorides", 
  {}, 
  [
   "d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "THEODORUS $1": [
  "Theodorus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "PTOL.": [
  "Ptolemaeus", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ZENOD. HIST.": [
  "Zenodotus", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CINAETHO": [
  "Cinaetho", 
  {}, 
  [
   "VII/", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "PROCH.": [
  "Prochorus Diaconus", 
  {
   "A. Io": "Acta Iohannis"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ALCIB.": [
  "Alcibiades", 
  {}, 
  [
   "V a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "THEO GYMN.": [
  "Theo Gymnasiarcha", 
  {}, 
  [
   "II d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "PS. CAES.": [
  "Pseudo Caesarius", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "SUS.": [
  "Susario Megarensis", 
  {}, 
  [
   "", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "ANAXIL.": [
  "Anaxilas", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "PHILAGR.": [
  "Philagrius", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "EUETES": [
  "Euetes", 
  {}, 
  [
   "", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "PTOL. $3": [
  "Ptolemaeus", 
  {
   "Fr": "Fragmenta", 
   "Alm": "Almagesto (= Syntaxis mathematica)", 
   "Mus": "Musica", 
   "Tetr": "Tetrabiblos", 
   "Phas": "Phaseis", 
   "Harm": "Harmonica", 
   "Iudic": "de iudicio", 
   "Hyp": "Hypotheses", 
   "Pseph": "Psephophoria", 
   "Planisph": "Planisphaerium", 
   "Inscr. Can": "Inscriptio Canobi", 
   "Anal": "de analemmate", 
   "Geog": "Geographia"
  }, 
  [
   "II d. C.", 
   "", 
   "mathematicus", 
   ""
  ]
 ], 
 "APOLLOD. TRAG.": [
  "Apollodorus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "THDR.": [
  "Theodorus Heracleensis", 
  {
   "Mt": "Fragmenta in Eu. Matt"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "D.": [
  "Demosthenes", 
  {
   "Prooem": "Prooemia", 
   "Fr": "Fragmenta", 
   "Ep": "Epistulae", 
   "Sch": "Scholia"
  }, 
  [
   "IV a. C.", 
   "", 
   "orator", 
   ""
  ]
 ], 
 "HERACLIT. $3": [
  "Heraclitus", 
  {
   "Ep": "Epistulae"
  }, 
  [
   "VI/V a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "CALL.": [
  "Calleas", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "Q. S.": [
  "Quintus Smyrnaeus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "PHAENNIS": [
  "Phaennis", 
  {}, 
  [
   "III a. C.", 
   "", 
   "uates", 
   ""
  ]
 ], 
 "GLOSS. INT.": [
  "Glossematum interpretes", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "grammatici", 
   ""
  ]
 ], 
 "HSCH. MIL.": [
  "Hesychius Milesius", 
  {
   "V. Arist": "Vita Aristotelis"
  }, 
  [
   "VI d. C.", 
   "", 
   "historicus et biographus", 
   ""
  ]
 ], 
 "ARISTOBUL.": [
  "Aristobulus Cassandreus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MAN. HIST.": [
  "Manetho", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "T. RUFIN.": [
  "Turranius", 
  {
   "Ad": "Adamantii libri contra haereticos a Rufino translati"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "presbyter", 
   ""
  ]
 ], 
 "DIOTOG.": [
  "Diotogenes", 
  {}, 
  [
   "", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "HILARIUS": [
  "Hilarius", 
  {
   "Fr": "Fragmenta", 
   "Const": "Contra Constantium imperatorem"
  }, 
  [
   "IV d. C.", 
   "", 
   "episcopus Pictauorum", 
   ""
  ]
 ], 
 "HYPSICRATES": [
  "Hypsicrates", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ASSUMPTIO MOSIS": [
  "Assumptio Mosis", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHARES": [
  "Chares", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "IULIANUS ASCALONITA": [
  "Iulianus Ascalonita", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "architectus et iurisconsultus (Iul. Ascal. )", 
   ""
  ]
 ], 
 "HECAT.": [
  "Hecataeus Milesius", 
  {}, 
  [
   "VI/V a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PHILIADES MEGAREUS": [
  "Philiades Megareus", 
  {}, 
  [
   "", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "THDT. ANT.": [
  "Theodotus Antiochenus", 
  {
   "Fr": "Fragmentum"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "AUIEN.": [
  "Auienus, R. Festus", 
  {
   "Orb": "Orbis terrae", 
   "Arat": "Aratea", 
   "Ora": "Ora Maritima"
  }, 
  [
   "IV d. C.", 
   "", 
   "poeta latinus", 
   ""
  ]
 ], 
 "ARISTARCH. EL.": [
  "Aristarchus Eleus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HECAT. THAS.": [
  "Hecataeus Thasius", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "DIODORUS": [
  "Diodorus", 
  {
   "Co": "Corinthiaca"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "scriptor Corinthiacorum", 
   ""
  ]
 ], 
 "EUPHRON. HIST.": [
  "Euphronius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "LEXICA SYNTACTICA GRAECA": [
  "Lexica Syntactica Graeca", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARIO": [
  "Ario", 
  {
   "Epigr": "Epigramma"
  }, 
  [
   "VI a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "DIOSC. GLOSS.": [
  "Dioscorides", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "glossator", 
   ""
  ]
 ], 
 "ALCETAS": [
  "Alcetas", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "IOPHO": [
  "Iopho", 
  {}, 
  [
   "V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "ANTIG. HIST.": [
  "Antigonus", 
  {
   "Mac": "Macedoniae descriptio"
  }, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "GEO. LAOD.": [
  "Georgius Laodicenus", 
  {
   "Ep. Maced": "Epistula ad Macedonium", 
   "Ep. Dogm": "Epistula dogmatica"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "HIPPIATR.": [
  "Hippiatrica", 
  {
   "Hippiatr": "Hippiatrica", 
   "Hippiatr. Paris": "Hippiatrica Parisina", 
   "Hippiatr. Lond": "Hippiatrica Londinensia", 
   "Hippiatr. Lugd": "Hippiatrica Lugdunensia", 
   "Hippiatr. Cant": "Hippiatrica Cantabrigiensia"
  }, 
  [
   "X d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHOEB.": [
  "Phoebammo", 
  {
   "Fig": "de figuris"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "BRYSO HERACLEOTA": [
  "Bryso Heracleota", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "PAUL. EM.": [
  "Paulus Emesenus", 
  {
   "Hom": "Homiliae", 
   "Ep": "Epistula"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "MUSON.": [
  "Musonius Rufus", 
  {
   "Fr": "Fragmentum", 
   "Ep": "Epistulae spuriae"
  }, 
  [
   "I d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "SIBYLL. TIB.": [
  "Sibylla Tiburtina", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMAEUS": [
  "Timaeus", 
  {}, 
  [
   "a. I a. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "FORTUNAT. $2": [
  "Fortunatianus, Atilius", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "grammaticus latinus", 
   ""
  ]
 ], 
 "IUST.": [
  "Iustinianus", 
  {
   "Edict": "Edicta", 
   "Nou": "Nouellae"
  }, 
  [
   "VI d. C.", 
   "", 
   "imperator", 
   ""
  ]
 ], 
 "POLL. $2": [
  "Pollux", 
  {}, 
  [
   "II d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "HELIOD.": [
  "Heliodorus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "VEG.": [
  "Vegetius", 
  {
   "Mul": "Mulomedicina"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "ueterinarius", 
   ""
  ]
 ], 
 "HECATO": [
  "Hecato", 
  {}, 
  [
   "I a. C.", 
   "", 
   "stoicus", 
   ""
  ]
 ], 
 "NARR. IOS.": [
  "Narratio Iosephi Arimathiensis", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLOD. LYR.": [
  "Apollodorus", 
  {}, 
  [
   "VI a. C?", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "MAC. AL.": [
  "Macarius Alexandrinus", 
  {
   "Fr": "Fragmenta", 
   "Serm": "Sermo de animae exitu", 
   "Apocr": "Apocriticus ad Graecos"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ACAC. B.": [
  "Acacius Beroeensis", 
  {
   "Ep. Alex": "Epistula ad Alexandrum Hierapolitanum", 
   "Ep. Max": "Epistula ad Maximianum Constantinopolitanum", 
   "Ep. Cyr": "Epistula ad Cyrillum Alexandrinum"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LXX": [
  "Vetus Testamentum Graece redditum", 
  {
   "Pr": "Prouerbia", 
   "Ps": "Psalmi", 
   "Le": "Leuiticus", 
   "Abd": "Abdias", 
   "La": "Lamentationes", 
   "Iu": "Iudith", 
   "Al": "\" <FONT FACE=\"\"SPIonic\"\">7)/Alloi</FONT> \"", 
   "Re": "Reges", 
   "Pa": "Paralipomena", 
   "Heb": "Hebraeus", 
   "Nu": "Numeri", 
   "Ba": "Baruch", 
   "De": "Deuteronomium", 
   "Da": "Daniel", 
   "Syr": "Syrus", 
   "Auct": "Auctarium ad Origenis Hexapla", 
   "Sext": "Sexta", 
   "Na": "Nahum", 
   "Hb": "Habacuc", 
   "Soph": "Sophonias", 
   "Quint": "Quinta", 
   "Ex": "Exodus", 
   "Od": "Odae", 
   "Ma": "Machabaeorum", 
   "Bel": "Bel et Draco", 
   "Agg": "Aggaeus", 
   "Ez": "Ezechiel", 
   "Mi": "Michaeas", 
   "Su": "Susanna", 
   "Si": "Siracides (Ecclesiasticus)", 
   "Ch": "Chronica", 
   "Sm": "Symmachus", 
   "Sa": "Samuel", 
   "Thd": "Theodotio", 
   "Os": "Oseas", 
   "Psalm. Salom": "Psalmi Salomonis", 
   "Sap": "Sapientia", 
   "Ep. Ie": "Epistula Ieremiae", 
   "Sam": "\"<FONT FACE=\"\"SPIonic\"\">to\\ Samaritiko/n</FONT> \"", 
   "To": "Tobias", 
   "Is": "Isaias", 
   "Am": "Amos", 
   "Za": "Zacharias", 
   "Ec": "Ecclesiastes", 
   "Id": "Iudicum", 
   "Aq": "Aquila", 
   "Ge": "Genesis", 
   "Luc": "Lucianus", 
   "Ru": "Ruth", 
   "Il": "Ioel", 
   "Io": "Iosue", 
   "In": "Ionas", 
   "Ib": "Iob", 
   "Ie": "Ieremias", 
   "Ca": "Canticum", 
   "Es": "Esdras"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOT. ATHEN.": [
  "Diotimus Atheniensis", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "SYMM. PAPA": [
  "Symmachus", 
  {
   "Ep": "fragmentum epistulae contra Petrum Fullonem"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "papa", 
   ""
  ]
 ], 
 "SOPHR. ALEX.": [
  "Sophronius Alexandrinus", 
  {
   "Libell": "Libellus contra Dioscurum"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PYRGIO": [
  "Pyrgio", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HERM. HIST.": [
  "Hermias", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PTOL. LAG.": [
  "Ptolemaeus Lagus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HLD. GR.": [
  "Heliodorus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "AGATHARCH.": [
  "Agatharchides", 
  {
   "Fr. Hist": "Fragmenta historica"
  }, 
  [
   "II a. C.", 
   "", 
   "geographus", 
   ""
  ]
 ], 
 "PISAND. MYTH.": [
  "Pisander", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "mythographus", 
   ""
  ]
 ], 
 "MELISSA": [
  "Melissa", 
  {}, 
  [
   "", 
   "", 
   "pythagorica", 
   ""
  ]
 ], 
 "ANDRO ALEX.": [
  "Andro Alexandrinus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CORP. HERM.": [
  "Corpus Hermeticum", 
  {
   "Fr. Min": "Fragmenta Minora", 
   "Fr": "Fragmenta", 
   "Fr. Vind": "Fragmenta Vindobonensia", 
   "Fr. Ox": "Fragmenta Oxoniensia", 
   "ad Amm": "ad Ammonem"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEON. ALEX.": [
  "Leonidas Alexandrinus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "HEGESIPP. COM.": [
  "Hegesippus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "APOCALYPSIS ESDRAE QUARTA": [
  "Apocalypsis Esdrae quarta", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLOD. CAR.": [
  "Apollodorus Carystius", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "SCYTHIN.": [
  "Scythinus Teius", 
  {
   "Hist": "Fragmenta historica"
  }, 
  [
   "IV a. C.", 
   "", 
   "poeta philosophus", 
   ""
  ]
 ], 
 "PRUD.": [
  "Prudentius Clemens, Aurelius", 
  {
   "Ham": "Hamartigenia", 
   "Cath": "Cathemerinon hymnus", 
   "Apoth": "Apotheosis", 
   "Psych": "Psychomachia", 
   "Perist": "Peristephanon hymnus", 
   "C. Sym": "contra Symmachum"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "poeta hispanus", 
   ""
  ]
 ], 
 "EUAGR. SCHOL.": [
  "Euagrius Scholasticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DAMOCH.": [
  "Damocharis", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "NONIUS MARCELLUS": [
  "Nonius Marcellus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "grammaticus latinus", 
   ""
  ]
 ], 
 "PIER.": [
  "Pierius Alexandrinus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "III d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "POSIDIPP. HIST.": [
  "Posidippus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HESTIAEUS": [
  "Hestiaeus", 
  {}, 
  [
   "a. I d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "GLOSS. BOT. GR.": [
  "Glossaria Botanica Graeca", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NAUTARUM CANTIUNCULA": [
  "Nautarum cantiuncula", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUL. HAL.": [
  "Iulianus Halicarnassensis", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "SOS.": [
  "Sosicrates", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "poeta", 
   ""
  ]
 ], 
 "CHOERIL. TRAG.": [
  "Choerilus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "PS. SOTAD.": [
  "Pseudo Sotades", 
  {}, 
  [
   "", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "GAURADAS": [
  "Gauradas", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PAMPHIL. $3": [
  "Pamphilus Siculus", 
  {}, 
  [
   "a. IV a. C.", 
   "", 
   "iambographus", 
   ""
  ]
 ], 
 "COLOT.": [
  "Colotes", 
  {
   "in Ly": "in Lysin Platonis", 
   "in Euthd": "in Euthydemum Platonis"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "epicureus", 
   ""
  ]
 ], 
 "ACAC. MEL.": [
  "Acacius Melitenus", 
  {
   "Hom": "Homilia Ephesina"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ORPH. PAR.": [
  "Orpheus", 
  {}, 
  [
   "", 
   "", 
   "paradoxographus", 
   ""
  ]
 ], 
 "B. ALEX.": [
  "Bello Alexandrino, Liber de", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGATHO $1": [
  "Agatho", 
  {}, 
  [
   "V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "DEMETR. IX.": [
  "Demetrius Ixio", 
  {}, 
  [
   "II a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "ANTIOCH. ASTR.": [
  "Antiochus Atheniensis", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "ONESTES": [
  "Onestes", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MELISS.": [
  "Melissus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "LEO I IMP.": [
  "Leo I", 
  {
   "Ep": "Epistula"
  }, 
  [
   "V d. C.", 
   "", 
   "imperator", 
   ""
  ]
 ], 
 "ALCAMEN.": [
  "Alcamenes Abydenus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "ANDROM.": [
  "Andromachus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "poeta medicus", 
   ""
  ]
 ], 
 "PETRON.": [
  "Petronius Arbiter", 
  {}, 
  [
   "I d. C.", 
   "", 
   "scriptor latinus", 
   ""
  ]
 ], 
 "CALL. HIST.": [
  "Callias", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CLAUDIAN.": [
  "Claudianus Alexandrinus, Claudius", 
  {
   "Gig": "Gigantomachia"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PALL.": [
  "Palladas", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "CYRAN.": [
  "Cyranides", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMAG.": [
  "Hermagoras Temnites", 
  {}, 
  [
   "II d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "DEXICRATES": [
  "Dexicrates", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "EP. ABGAR.": [
  "Epistula Abgari cum Christi responso", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGATHEM.": [
  "Agathemerus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "geographus", 
   ""
  ]
 ], 
 "HADR. MON.": [
  "Hadrianus Antiochenus", 
  {
   "Introd": "Introductio in sacras scripturas"
  }, 
  [
   "II d. C.", 
   "", 
   "monachus", 
   ""
  ]
 ], 
 "APOLLON. CIT.": [
  "Apollonius Citiensis", 
  {}, 
  [
   "I a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "EUS. HIST.": [
  "Eusebius", 
  {}, 
  [
   "III d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "TIBUL.": [
  "Tibullus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "poeta latinus", 
   ""
  ]
 ], 
 "NICOBULE": [
  "Nicobule", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historica", 
   ""
  ]
 ], 
 "ARCHESTR.": [
  "Archestratus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "CALLISTR. LYR.": [
  "Callistratus", 
  {}, 
  [
   "", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "LYSIMACHID.": [
  "Lysimachides", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "OSTANES": [
  "Ostanes", 
  {}, 
  [
   "", 
   "", 
   "magus", 
   ""
  ]
 ], 
 "ANAXIO MYTILENAEUS": [
  "Anaxio Mytilenaeus", 
  {}, 
  [
   "", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "SALL.": [
  "Sallustius, Gaius", 
  {
   "Fr": "Fragmenta ampliora", 
   "Iug": "de bello Iugurthino", 
   "Cat": "de coniuratione Catilinae"
  }, 
  [
   "I a. C.", 
   "", 
   "historicus latinus", 
   ""
  ]
 ], 
 "HERACL. MIL.": [
  "Heraclides Milesius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "PANCRAT. $2": [
  "Pancrates", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ANON. TERR. MOT.": [
  "Anonymi de terrae motibus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTOPH. BOEOT.": [
  "Aristophanes Boeotus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "TIM. ANT.": [
  "Timotheus Antiochenus", 
  {
   "Caec": "in caecum a natiuitate", 
   "Natiu": "in natiuitatem praecursoris", 
   "Cruc": "in crucem et transfigurationem", 
   "Sym": "Oratio in Symeonem", 
   "Descr": "de descriptione deiparae"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "SILEN. CEIUS": [
  "Silenus Ceius", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CARM. DE POND.": [
  "Carmen de ponderibus et mensuris", 
  {}, 
  [
   "III/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYCEAS NAUC.": [
  "Lyceas Naucratites", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "THEAET.": [
  "Theaetetus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "IL.": [
  "Ilias", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZOS. ALCH.": [
  "Zosimus", 
  {
   "Comm. Gen": "Commentaria genuina"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "alchemista", 
   ""
  ]
 ], 
 "HERACLIDES CRETICUS": [
  "Heraclides Creticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DAMOCRIT.": [
  "Damocritus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EURYTUS MEL.": [
  "Eurytus Lacedaemonius", 
  {}, 
  [
   "", 
   "", 
   "melicus", 
   ""
  ]
 ], 
 "SOCR. ARG.": [
  "Socrates Argiuus", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANT. PTOL.": [
  "Antiochus Ptolemaeus", 
  {
   "Natiu": "Homilia de natiuitate", 
   "Fr": "Fragmenta"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "APOC. MOS.": [
  "Apocalypsis Mosis", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TH.": [
  "Thucydides", 
  {
   "Sch": "Scholia"
  }, 
  [
   "V a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "A. IO. BAPT.": [
  "Acta Iohannis Baptistae", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPYS": [
  "Hippys", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MULOMEDICINA CHIRONIS": [
  "Mulomedicina Chironis", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AENESIDAMUS CNOSSIUS": [
  "Aenesidamus Cnossius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "HEDYLE": [
  "Hedyle", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "epigrammatica", 
   ""
  ]
 ], 
 "PALL. SUED.": [
  "Palladius Suedrenus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ENN.": [
  "Ennius", 
  {
   "Var": "Varia", 
   "Ann": "Annales", 
   "Trag": "Tragoedia"
  }, 
  [
   "III/II a. C.", 
   "", 
   "poeta latinus", 
   ""
  ]
 ], 
 "CRIT. HIST.": [
  "Crito", 
  {
   "Fr. Hist": "Fragmenta historica"
  }, 
  [
   "I/II d. C.", 
   "", 
   "medicus et historicus", 
   ""
  ]
 ], 
 "BOEO": [
  "Boeo", 
  {}, 
  [
   "II a. C. ?", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "TYMN.": [
  "Tymnes", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "SANNYR.": [
  "Sannyrio", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "ANTIP. ACANTH.": [
  "Antipater Acanthius", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "APOLLOD. ARTEM.": [
  "Apollodorus Artemita", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ARCHIPP.": [
  "Archippus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "DIOPHANTUS": [
  "Diophantus", 
  {}, 
  [
   "", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "MOSCHIO": [
  "Moschio", 
  {
   "Hyp": "Hypothecae", 
   "Gnom": "Gnomae"
  }, 
  [
   "", 
   "", 
   "gnomologus", 
   ""
  ]
 ], 
 "HEROD.": [
  "Herodas", 
  {}, 
  [
   "III a. C.", 
   "", 
   "mimographus", 
   ""
  ]
 ], 
 "CAEM.": [
  "Caemaro", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANTISTH. HIST.": [
  "Antisthenes", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANTIGEN. LYR.": [
  "Antigenes Atheniensis", 
  {}, 
  [
   "V a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "I.": [
  "Iosephus", 
  {
   "AI": "Antiquitates Iudaicae", 
   "Ap": "contra Apionem", 
   "BI": "Bellum Iudaicum", 
   "Vit": "Vita"
  }, 
  [
   "I d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MENEDEMUS ERETRIUS": [
  "Menedemus Eretrius", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "MIMN.": [
  "Mimnermus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "APOC. PETR.": [
  "Apocalypsis Petri", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APHAR.": [
  "Aphareus", 
  {
   "Epigr": "Epigramma"
  }, 
  [
   "IV a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "APOLLON. ANTIMONTAN.": [
  "Apollonius Antimontanista", 
  {}, 
  [
   "III d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "EP. BARN.": [
  "Barnabae epistula", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHIN.": [
  "Archinus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DEMAD.": [
  "Demades", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "orator", 
   ""
  ]
 ], 
 "CLITOPHO": [
  "Clitopho", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANAT. LAOD.": [
  "Anatolius Laodicenus", 
  {
   "Decad": "de decade", 
   "Arith": "Fragmenta ex libris arithmeticorum", 
   "Can. Pasch": "Fragmentum ex canone paschali"
  }, 
  [
   "III d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "IO": [
  "Io Chius", 
  {
   "Hist": "Fragmenta historica", 
   "Trag": "Fragmenta tragica", 
   "Phil": "Fragmenta philosophica", 
   "Lyr": "Fragmenta lyrica", 
   "Eleg": "Fragmenta elegiaca"
  }, 
  [
   "V a. C.", 
   "", 
   "poeta et historicus", 
   ""
  ]
 ], 
 "PROTAGORID.": [
  "Protagorides", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CASS. MED.": [
  "Cassius", 
  {}, 
  [
   "I d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "VIT. PI.": [
  "Vitae Pindari et varia de Pindaro", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEMEROLOG. FLOR.": [
  "Hemerologium Florentinum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LONGIN.": [
  "Longinus", 
  {}, 
  [
   "I d. C. ?", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "GEORGIUS": [
  "Georgius", 
  {
   "Anacr": "Anacreontea"
  }, 
  [
   "", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "HEDYL.": [
  "Hedylus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PAEAN.": [
  "Paeanius", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "Eutropii interpres", 
   ""
  ]
 ], 
 "CASSIOD.": [
  "Cassiodorus", 
  {
   "Ort": "de orthographia", 
   "C. Ap": "Flauii Iosephi contra Apionem", 
   "Hist": "Historia Tripertita", 
   "Var": "Variae", 
   "in Psalm": "Expositio in Ps", 
   "Act. Syn": "Acta Synodorum Romae", 
   "Inst. Diu": "de institutione diuinarum litterarum"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ANON. INED. VAT.": [
  "Anonymus ineditus Vaticanus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "OLYMPICUS MILESIUS": [
  "Olympicus Milesius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "HERODOR.": [
  "Herodorus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "IO. SCHOLAST.": [
  "Iohannes Scholasticus", 
  {
   "Nomoc": "Collectio canonum", 
   "Coll. Cap": "Collectio 87 capitulorum", 
   "Suppl": "Supplementum 22 capitulorum"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ACRO": [
  "Acro", 
  {}, 
  [
   "V a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "ZOPYR.": [
  "Zopyrus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "SACERD.": [
  "Sacerdos, Marius Plotius", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "grammaticus latinus", 
   ""
  ]
 ], 
 "THRASYLLUS ALEXANDRINUS": [
  "Thrasyllus Alexandrinus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "PHILETAER.": [
  "Philetaerus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "ZENO TARS. STOIC.": [
  "Zeno Tarsensis", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "stoicus", 
   ""
  ]
 ], 
 "ICCUS": [
  "Iccus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "pythagoricus", 
   ""
  ]
 ], 
 "ALYP.": [
  "Alypius", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "musicus", 
   ""
  ]
 ], 
 "PHALAR.": [
  "Phalaris", 
  {
   "Ep": "Epistulae"
  }, 
  [
   "VI a. C.", 
   "", 
   "epistolographus", 
   ""
  ]
 ], 
 "IASO": [
  "Iaso", 
  {
   "Alex": "de Alexandri fanis"
  }, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PAUL. AL.": [
  "Paulus Alexandrinus", 
  {
   "Sch": "Scholia"
  }, 
  [
   "IV d. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "CHRON. ALEX.": [
  "Chronicum Alexandrinum", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "XENOPHILUS": [
  "Xenophilus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ROM. MEL.": [
  "Romanus Melodus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ALEXARCHUS": [
  "Alexarchus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DSC.": [
  "Dioscorides", 
  {
   "Alex": "Alexipharmaca", 
   "Eup": "Euporista (= de simplicibus medicinis)", 
   "Ther": "Theriaca"
  }, 
  [
   "I d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "CRATES THEB.": [
  "Crates Thebanus", 
  {
   "Ep": "Epistulae"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "poeta et philosophus", 
   ""
  ]
 ], 
 "PHANODICUS": [
  "Phanodicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "POLYZEL. HIST.": [
  "Polyzelus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "LESB. GRAMM.": [
  "Lesbonax", 
  {}, 
  [
   "I d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "LEXICON QUOD UOCATUR": [
  "\"Lexicon quod uocatur <FONT FACE=\"\"SPIonic\"\">Sunagwgh\\ le/cewn xrhsi/mwn</FONT>\"", 
  {
   "Syn. Lex": "uersio codicis B"
  }, 
  [
   "VIII/IX d. C.", 
   "", 
   "(Syn. Lex. )", 
   ""
  ]
 ], 
 "HEREAS": [
  "Hereas", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EUSTRAT.": [
  "Eustratius Constantinopolitanus", 
  {
   "V. Eutych": "Vita Eutychii"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "GEL. PA.": [
  "Gelasius I", 
  {
   "Ep": "Epistula ad episcopos Syrios"
  }, 
  [
   "V d. C.", 
   "", 
   "papa", 
   ""
  ]
 ], 
 "A\u00cbT. $2": [
  "A\u00ebtius Antiochenus", 
  {
   "Fr": "Fragmenta", 
   "Synt": "Syntagmation"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VITAE AESCHINIS": [
  "Vitae Aeschinis", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "STEPH. COM.": [
  "Stephanus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "EXC. BAROCC.": [
  "Excerpta Barocciana", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEODORETUS": [
  "Theodoretus", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "LOGIA IESU": [
  "Logia Iesu", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTENOR": [
  "Antenor", 
  {}, 
  [
   "a. II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CARC. ATH.": [
  "Carcinus Atheniensis", 
  {}, 
  [
   "V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "ACAC. ET PAUL.": [
  "Acacius et Paulus", 
  {
   "Ep": "Epistula ad Epiphanium"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptores ecclesiastici", 
   ""
  ]
 ], 
 "PS. C. C.": [
  "Pseudo Caecilius", 
  {}, 
  [
   "", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "LAP. NAUT.": [
  "Lapidarium Nauticum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERACLID. CUM.": [
  "Heraclides Cumaeus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AMMON. HIST.": [
  "Ammonius", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PAR.": [
  "Paradoxographi Anonymi", 
  {
   "Par. Flor": "Paradoxographus Florentinus", 
   "Par. Vat": "Paradoxographus Vaticanus", 
   "Par. Pal": "Paradoxographus Palatinus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PIUS": [
  "Pius", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "ORUS": [
  "Orus", 
  {
   "Att": "Atticarum vocum collectio", 
   "Eth": "de ethnicis", 
   "Orth": "de orthographia"
  }, 
  [
   "V d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "AUTOCLIDES": [
  "Autoclides", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANON. PHIL.": [
  "Anonymus Philosophus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PAUL. EL.": [
  "Paulus Eleusensis", 
  {
   "V. Thgn": "Vita Theognii"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "HERACLID. LEMB.": [
  "Heraclides Lembus", 
  {
   "Epit": "Epitome Hermippi"
  }, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CAPITOL.": [
  "Capitolinus, Iulius", 
  {
   "Ver": "Verus", 
   "Macr": "Opimius Macrinus", 
   "Anton": "Antoninus Pius", 
   "Alb": "Claudius Albinus", 
   "Maxim": "Maximini duo", 
   "Max. Balb": "Maximus et Balbinus", 
   "Aur": "Marcus Aurelius Antoninus", 
   "Gord": "Gordiani tres", 
   "Pert": "Heluius Pertinax"
  }, 
  [
   "IV d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "THEONAS": [
  "Theonas", 
  {
   "Ep": "Epistula contra Manichaeos"
  }, 
  [
   "III d. C.", 
   "", 
   "episcopus Alexandriae", 
   ""
  ]
 ], 
 "PHILOSTR. HIST.": [
  "Philostratus Atheniensis", 
  {}, 
  [
   "III d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANDREAS": [
  "Andreas", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DIOSCORUS": [
  "Dioscorus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "CHOR.": [
  "Choricius", 
  {
   "Decl": "Declamationes", 
   "Dial": "Dialexeis", 
   "Fr": "Fragmenta", 
   "Or": "Orationes"
  }, 
  [
   "VI d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "MEDEIUS": [
  "Medeius", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HISTORICORUM FRAGMENTA PAPYRACEA": [
  "Historicorum Fragmenta Papyracea", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIT. LAUR.": [
  "Epitome Synonymica Laurentiana", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IOU.": [
  "Iouianus", 
  {
   "Ep": "Epistula ad Athanasium Alexandrinum"
  }, 
  [
   "IV d. C.", 
   "", 
   "imperator", 
   ""
  ]
 ], 
 "DIONYS. STOIC.": [
  "Dionysius Heracleota", 
  {}, 
  [
   "III a. C.", 
   "", 
   "stoicus", 
   ""
  ]
 ], 
 "ARISTIDES": [
  "Aristides", 
  {
   "Milesiac": "Milesiaca"
  }, 
  [
   "II/I a. C.", 
   "", 
   "historicus (Aristid. )", 
   ""
  ]
 ], 
 "PETR. FULL.": [
  "Petrus Antiochenus Fullo", 
  {
   "Ep. Ac": "Epistula ad Acacium Constantinopolitanum"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "BOLUS": [
  "Bolus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "paradoxographus", 
   ""
  ]
 ], 
 "POLYPHRAS.": [
  "Polyphrasmo", 
  {}, 
  [
   "V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "DIPHILUS ATHENIENSIS": [
  "Diphilus Atheniensis", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PHILIPP. MACED.": [
  "Philippus Macedoniae Rex", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "epistolographus", 
   ""
  ]
 ], 
 "ANTIPH. IUN.": [
  "Antiphanes", 
  {
   "Fr": "Fragmenta historica"
  }, 
  [
   "III/II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "STRATT.": [
  "Strattis", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "AMER.": [
  "Amerias", 
  {}, 
  [
   "III a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "HYMN. EPID.": [
  "Hymni Epidauri", 
  {
   "Fr": "Fragmenta", 
   "Matr": "in Matrem deorum", 
   "Omn": "in omnes deos", 
   "Pan": "in Panem", 
   "Pall": "in Palladem"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUDOC.": [
  "Eudocia Augusta", 
  {
   "Hom": "Homerocentones", 
   "Pr. Hom. = Proemium in Homerocentones": "Pr. Hom. = Proemium in Homerocentones", 
   "Epigr": "Epigramma", 
   "Cypr": "Carmen de Cypriano"
  }, 
  [
   "V d. C.", 
   "", 
   "epica", 
   ""
  ]
 ], 
 "MEGETHIUS": [
  "Megethius", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "ANON. ASTR.": [
  "Anonymi Astrologi", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLAC.": [
  "Placitus Sextus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "SELEUC. LYR.": [
  "Seleucus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "ZENO IMP.": [
  "Zeno", 
  {
   "Henot": "Fragmentum edicti \ufffdhenoticon\ufffd dicti"
  }, 
  [
   "V d. C.", 
   "", 
   "imperator", 
   ""
  ]
 ], 
 "CYRILL.": [
  "Cyrillus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "LYCEAS ARGIUUS": [
  "Lyceas Argiuus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DOSITH.": [
  "Dositheus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "grammaticus latinus", 
   ""
  ]
 ], 
 "PROU. ATH.": [
  "Prouerbiorum collectio Athoa quinta", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CTESICLES": [
  "Ctesicles", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ORPHEUS": [
  "Orpheus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TERT.": [
  "Tertullianus, Q. S. F.", 
  {
   "Orat": "de oratione", 
   "Coron": "de Corona", 
   "Cult. fem": "de cultu feminarum", 
   "Apol": "Apologeticus", 
   "Praescr": "de praescriptione haereticorum", 
   "Adu. Val": "Aduersus Valentinianos", 
   "Adu. Marc": "Aduersus Marcionem"
  }, 
  [
   "II/III d. C.", 
   "", 
   "scriptor christianus", 
   ""
  ]
 ], 
 "ANTISTH. PAPH.": [
  "Antisthenes Paphius", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "DEMETR.": [
  "Demetrius", 
  {}, 
  [
   "", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "ANONYMUS VATICANUS": [
  "Anonymus Vaticanus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLONID.": [
  "Apollonides", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "THALASSIUS CONSTANTINOPOLITANUS": [
  "Thalassius Constantinopolitanus", 
  {
   "Thds": "Libellus ad Theodosium"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptores ecclesiastici (Thal. CP)", 
   ""
  ]
 ], 
 "AP": [
  "Anthologia Graeca", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAR. VICT.": [
  "Marius Victorinus", 
  {
   "Rh": "Explanationes in rhetoricam M. Tulli Ciceronis"
  }, 
  [
   "III d. C.", 
   "", 
   "grammaticus latinus", 
   ""
  ]
 ], 
 "EPIMENID.": [
  "Epimenides", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "HEGESIAN.": [
  "Hegesianax", 
  {}, 
  [
   "II a. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "ENOCH IUDAEUS": [
  "Enoch Iudaeus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUTHAL.": [
  "Euthalius", 
  {
   "Epp. Cath": "Editio epistularum catholicarum", 
   "Epp. Paul": "Editio epistularum Pauli", 
   "Act": "Editio Actuum Apostolorum"
  }, 
  [
   "IV d. C.", 
   "", 
   "diaconus", 
   ""
  ]
 ], 
 "ANTIOCHUS $1": [
  "Antiochus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "epistolographus", 
   ""
  ]
 ], 
 "PHILOMNEST.": [
  "Philomnestus", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PETR. I AL.": [
  "Petrus I Alexandrinus", 
  {
   "Ep. Can": "Epistula canonica", 
   "Ep. Fest": "Epistula Festalis", 
   "Pasch": "Fragmentum de Paschate", 
   "D": "Fragmenta de deitate", 
   "Fr": "Fragmenta", 
   "An": "Fragmentum de anima", 
   "Ep. Cler": "Epistula ad clericos suos"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "AN. BACHM.": [
  "Anecdota Graeca e cod. MSS. Bibl. Reg. Parisin.", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUU.": [
  "Iuuenalis, D. Iunius", 
  {
   "Sch": "Scholia"
  }, 
  [
   "I/II d. C.", 
   "", 
   "poeta latinus", 
   ""
  ]
 ], 
 "GEMINUS": [
  "Geminus", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PAUL. SAM.": [
  "Paulus Samosatenus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "DIYLL.": [
  "Diyllus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "TIMONIDES": [
  "Timonides", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DYNAMID.": [
  "Dynamidia", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOCL.": [
  "Diocles", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "ANONYMUS $24": [
  "Anonymus", 
  {
   "Strat": "de re strategica"
  }, 
  [
   "VI d. C.", 
   "", 
   "tacticus (Anon. )", 
   ""
  ]
 ], 
 "T. ABR.": [
  "Testamentum Abrahae", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EURYT.": [
  "Eurytus", 
  {}, 
  [
   "", 
   "", 
   "pythagoricus", 
   ""
  ]
 ], 
 "ISTER": [
  "Ister", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PANCRAT.": [
  "Pancrates", 
  {}, 
  [
   "II d. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "THAL.": [
  "Thales", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "CALL. COM.": [
  "Callias", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "NICOM. COM.": [
  "Nicomachus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "XYSTUS III": [
  "Xystus III", 
  {
   "Opif": "de mundi opificio", 
   "Fr": "Fragmenta contra Manichaeos", 
   "Ep. Flau": "Epistula ad Flauianum", 
   "Ep. Cyr": "Epistula ad Cyrillum", 
   "Tract": "Epistula tractatoria"
  }, 
  [
   "V d. C.", 
   "", 
   "papa", 
   ""
  ]
 ], 
 "ANONYMUS $23": [
  "Anonymus", 
  {
   "Sol": "de soloecismo"
  }, 
  [
   "", 
   "", 
   "(Anon. )", 
   ""
  ]
 ], 
 "ARISTO": [
  "Aristo", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "DORIO": [
  "Dorio", 
  {}, 
  [
   "I a. C.", 
   "", 
   "rerum naturalium scriptor", 
   ""
  ]
 ], 
 "IUL. VICT.": [
  "Iulius Victor", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "ARISTO PELL.": [
  "Aristo Pellaeus", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DEMIOPRATA": [
  "Demioprata", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ISID. $2": [
  "Isidorus Scholasticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "OD.": [
  "Odyssea", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERACLID. PONT.": [
  "Heraclides Ponticus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EPARCHIDES": [
  "Eparchides", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DIONYS. SAM.": [
  "Dionysius Samius", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HOM. CLEM.": [
  "Homilia Clementinae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. APUL.": [
  "Pseudo Apuleius", 
  {
   "Ascl": "Asclepius", 
   "Herb": "Liber herbarius"
  }, 
  [
   "IV d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "INTERR. TERTULL.": [
  "Interrogatio Tertulli", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHIL.": [
  "Philippus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "CLITOM.": [
  "Clitomachus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "HERMONAX": [
  "Hermonax", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ABYD.": [
  "Abydenus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANECD. ERM.": [
  "Anecdota Medica Graeca", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HELIOD. $3": [
  "Heliodorus Atheniensis", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "poeta", 
   ""
  ]
 ], 
 "HELIOD. $2": [
  "Heliodorus", 
  {}, 
  [
   "", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "BOISCUS CYZICENUS": [
  "Boiscus Cyzicenus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "THEOPHILUS": [
  "Theophilus", 
  {}, 
  [
   "a. Alex.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EUMACHUS": [
  "Eumachus", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ZENODOTUS STOICUS": [
  "Zenodotus Stoicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "SOT.": [
  "Sotio", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "biographus", 
   ""
  ]
 ], 
 "NICOM. $2": [
  "Nicomachus Gerasenus", 
  {
   "Harm": "Harmonicum enchiridion", 
   "Ar": "Arithmetica introductio", 
   "Exc": "Excerpta"
  }, 
  [
   "I/II d. C.", 
   "", 
   "mathematicus", 
   ""
  ]
 ], 
 "THESEUS": [
  "Theseus", 
  {}, 
  [
   "imper.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CAT.": [
  "Catenae", 
  {
   "Cat. Ex": "catenae in Exodum", 
   "Cat. Ps": "Pal", 
   "Cat. Gen. Coisl": "catenae in Genesim (collectio coisliniana)", 
   "Cat. Eccl. Haun": "catena Hauniensis in Ecclesiasten", 
   "Cat. Gen": "catenae in Genesim", 
   "Cat. Gen. Sin": "Ex. Sin", 
   "Cat. Ex. Coisl": "catenae in Exodum (collecio Coisliniana)", 
   "Cat. Ib": "catenae in Iob"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LAMYN. LYR.": [
  "Lamynthius", 
  {}, 
  [
   "V a. C. ?", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "MAX.": [
  "Maximus", 
  {
   "Epit": "Epitome"
  }, 
  [
   "II d. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "PORPHYRIO, POMPONIUS": [
  "Porphyrio, Pomponius", 
  {
   "Comm": "Commentum in Horatium"
  }, 
  [
   "III d. C.", 
   "", 
   "Horatii commentator", 
   ""
  ]
 ], 
 "ALPH.": [
  "Alpheus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "FIRMINUS": [
  "Firminus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PHILTEAS": [
  "Philteas", 
  {}, 
  [
   "IV a. C. ?", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HIERONYM. HIST.": [
  "Hieronymus Cardianus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HSCH. H.": [
  "Hesychius Hierosolymitanus", 
  {
   "Hom": "Homiliae", 
   "Fr. Ps": "Fragmenta in Psalmos e catenis"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "LEX. DE SPIR.": [
  "Lexicon de Spiritibus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOST.": [
  "Philostorgius", 
  {}, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "MYRTIL.": [
  "Myrtilus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "ECPHANTID.": [
  "Ecphantides", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "POLYIDUS $1": [
  "Polyidus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "tragicus et lyricus", 
   ""
  ]
 ], 
 "SERAP.": [
  "Serapio Thmuitanus", 
  {
   "Euch": "Euchologium", 
   "Oct": "Fragmenta in Octateuchum", 
   "Ep. Mon": "Epistula ad Monachos", 
   "Ep. Eud": "Epistula ad Eudoxium", 
   "Man": "aduersus Manichaeos"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "HYMN. MAG.": [
  "Hymni Magici", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASCLEP. NIC.": [
  "Asclepiades Nicaeus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "GREG. TUR.": [
  "Gregorius Turonensis", 
  {
   "Gl": "Liber in gloria confessorum", 
   "Iul": "de uirtutibus Iuliani"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PETR. MONG.": [
  "Petrus Mongus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "LONGIN. $2": [
  "Longinus, Cassius", 
  {
   "Fr": "Fragmenta", 
   "Prol. Heph": "Prolegomena ad Hephaestionis Enchiridion", 
   "Rh": "Ars rhetorica", 
   "Fr. Fin": "Fragmentum de argumentis finalibus", 
   "Fr. Mem": "Fragmentum de memoria"
  }, 
  [
   "III d. C.", 
   "", 
   "rhetor et philosophus", 
   ""
  ]
 ], 
 "APOLLOD. PERG.": [
  "Apollodorus Pergamenus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "SEMON.": [
  "Semonides", 
  {}, 
  [
   "VII/", 
   "", 
   "iambographus", 
   ""
  ]
 ], 
 "EPICURUS": [
  "Epicurus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ELEUSIS": [
  "Eleusis", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANON. HIST.": [
  "Anonymi Historici", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENETOR": [
  "Menetor", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CENS.": [
  "Censorinus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "III d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "PHILISTIO LOCRIUS": [
  "Philistio Locrius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "THDR. SCYTH.": [
  "Theodorus Scythopolitanus", 
  {
   "Libell": "Libellus de erroribus Origenianis"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ARISTODEM. ALEX.": [
  "Aristodemus Alexandrinus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PHILISC. COM.": [
  "Philiscus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "CHILO": [
  "Chilo", 
  {
   "Ep": "Epistula"
  }, 
  [
   "VI a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "APOLLON. PERG.": [
  "Apollonius Pergaeus", 
  {
   "Fr": "Fragmenta", 
   "Con": "Conica"
  }, 
  [
   "III/II a. C.", 
   "", 
   "geometra", 
   ""
  ]
 ], 
 "ARCHIM.": [
  "Archimedes", 
  {
   "Quadr": "Quadratura parabola", 
   "Spir": "de lineis spiralibus", 
   "Fr": "Fragmenta", 
   "Con. Sph": "de conoidibus et sphaeroidibus", 
   "Aren": "Arenarius", 
   "Bou": "Problema bouinum", 
   "Fluit": "de corporibus fluitantibus", 
   "Circ": "Dimensio circuli", 
   "Sph. Cyl": "de sphaera et cylindro", 
   "Eratosth": "ad Eratosthenem methodus", 
   "Aequil": "de planorum aequilibriis", 
   "Stom": "Stomachion"
  }, 
  [
   "III a. C.", 
   "", 
   "geometra", 
   ""
  ]
 ], 
 "ANAXIMEN. $2": [
  "Anaximenes Lampsacenus", 
  {
   "Rh": "Ars rhetorica"
  }, 
  [
   "IV a. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "LEX. MESS.": [
  "Lexicon Messanense", 
  {}, 
  [
   "XIII d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MUND.": [
  "Mundus Munatius", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "MEN.": [
  "Menander", 
  {
   "Her": "Heros", 
   "DE": "Dis Exapaton (fragmenta aliunde nota)", 
   "Epit": "Epitrepontes", 
   "Per": "Perinthia", 
   "Georg": "Georgus", 
   "Sic": "Sicyonius", 
   "Pc": "Periciromene", 
   "Th": "Theophorumene", 
   "Mis": "Misumenus", 
   "Fr": "Fragmenta", 
   "Asp": "Aspis", 
   "Comp": "Menandri comparationes", 
   "Phasm": "Phasma", 
   "Mon": "Gnomae monostichoi", 
   "Car": "Carchedonius", 
   "Col": "Colax", 
   "Con": "Coneazomenae", 
   "Cith": "Citharista", 
   "Dysc": "Dyscolus", 
   "Sam": "Samia", 
   "Mon. Pap": "Gnomai monostichoi e papyris", 
   "Fr. Didot": "Fragmenta Didotiana", 
   "Fab. Incert": "Fabula incerta"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "MOSCHIO TRAG.": [
  "Moschio", 
  {}, 
  [
   "III a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "AGROETAS": [
  "Agroetas", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PAC.": [
  "Pacuuius", 
  {}, 
  [
   "II a. C.", 
   "", 
   "tragicus latinus", 
   ""
  ]
 ], 
 "ARCHED. STOIC.": [
  "Archedemus Tarsensis", 
  {}, 
  [
   "III a. C.", 
   "", 
   "stoicus", 
   ""
  ]
 ], 
 "CONSTANTIUS ANT.": [
  "Constantius Antiochenus", 
  {
   "Ep": "Epistulae"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ZENO MED.": [
  "Zeno", 
  {}, 
  [
   "", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "ACESTODORUS": [
  "Acestodorus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "NEARCH.": [
  "Nearchus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EUEMERUS": [
  "Euemerus", 
  {}, 
  [
   "", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "CLAUD. IOL.": [
  "Claudius Iolaus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "THPHL. AL.": [
  "Theophilus Alexandrinus", 
  {
   "Fr": "Fragmenta", 
   "Ep. Pasch. Proem": "Proemium ad epistulas Paschales", 
   "Fr. Ep": "Fragmenta ex epistulis uariis", 
   "Men": "ad Menam", 
   "Or": "Fragmentum ex epistula contra Origenem", 
   "Mt": "Fragmenta in Eu. Matt", 
   "Poenit": "Fragmentum de poenitentia", 
   "Agath": "ad Agathonem", 
   "Common": "Commonitorium ad Ammonem", 
   "Io": "Fragmenta in Eu. Io", 
   "Theoph": "Prosphonesis in sancta Theophania", 
   "Cathar": "Narratio de iis qui dicuntur cathari", 
   "Fr. Ep. Pasch": "Fragmenta ex epistulis Paschalibus"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ARISTOMBROTUS": [
  "Aristombrotus", 
  {}, 
  [
   "IV a. C. ?", 
   "", 
   "pythagoricus", 
   ""
  ]
 ], 
 "CRIN.": [
  "Crinagoras", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "MORSIMUS": [
  "Morsimus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "DIONYSIUS $1": [
  "Dionysius", 
  {}, 
  [
   "II d. C. ?", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "CREPEREIUS CALPURNIANUS": [
  "Crepereius Calpurnianus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ALEX. EPH.": [
  "Alexander Ephesius", 
  {}, 
  [
   "I a C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "PHILIPP. COM.": [
  "Philippus", 
  {
   "Fr": "Fragmenta historica"
  }, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "PETR. MYR.": [
  "Petrus Myrensis", 
  {
   "Apoll": "Fragmentum orationis contra Apollinarem Laodicenum"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ALCID.": [
  "Alcidamas", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "TIM. TRAG.": [
  "Timotheus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "GALLUS": [
  "Gallus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "IUST. GN.": [
  "Iustinus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "gnosticus", 
   ""
  ]
 ], 
 "TELESILL.": [
  "Telesilla", 
  {}, 
  [
   "V a. C.", 
   "", 
   "lyrica", 
   ""
  ]
 ], 
 "CHARES GRAMM.": [
  "Chares", 
  {}, 
  [
   "d. A. R.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "PHAEST.": [
  "Phaestus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "THRASYM.": [
  "Thrasymachus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "sophista et rhetor", 
   ""
  ]
 ], 
 "BRUT.": [
  "Brutus", 
  {
   "Ep": "Epistulae"
  }, 
  [
   "I a. C.", 
   "", 
   "epistolographus", 
   ""
  ]
 ], 
 "LUC. $2": [
  "Lucianus", 
  {
   "Prom. Es": "Prometheus es in uerbis", 
   "Asin": "Asinus", 
   "Par": "de parasito", 
   "Eun": "Eunuchus", 
   "Abd": "Abdicatus", 
   "Herod": "Herodotus", 
   "Deor. Con": "Deorum Concilium", 
   "Apol": "Apologia", 
   "Nau": "Nauigium", 
   "Symp": "Symposium siue Lapithae", 
   "Nec": "Necyomantia", 
   "Bacch": "Bacchus", 
   "Pisc": "Piscator", 
   "DMar": "Dialogi marini", 
   "Tim": "Timo", 
   "Prom": "Prometheus", 
   "DMort": "Dialogi mortuorum", 
   "Hist. Cons": "Quomodo historia conscribenda sit", 
   "Laps": "pro lapsu inter salutandum", 
   "Electr": "Electrum", 
   "Rh. Pr": "Rhetorum praeceptor", 
   "Astr": "de astrologia", 
   "Ner": "Nero", 
   "Zeux": "Zeuxis", 
   "Ind": "aduersus indoctum", 
   "Vit. Auct": "Vitarum auctio", 
   "Luct": "de luctu", 
   "Macr": "Macrobii", 
   "Herm": "Hermotimus", 
   "Herc": "Hercules", 
   "Salt": "de Saltatione", 
   "Dips": "Dipsades", 
   "Hes": "Hesiodus", 
   "Icar": "Icaromenippus", 
   "Halc": "Halcyon", 
   "Musc. Enc": "Muscae encomium", 
   "Pseudol": "Pseudologista", 
   "Lex": "Lexiphanes", 
   "Scyth": "Scytha", 
   "Cyn": "Cynicus", 
   "Tyr": "Tyrannicida", 
   "Iud. Voc": "Iudicium uocalium", 
   "Trag": "Tragodopodagra", 
   "Alex": "Alexander", 
   "Dom": "de domo", 
   "VH": "Verae Historiae", 
   "Tox": "Toxaris", 
   "Philopatr": "Philopatris", 
   "DIud": "Dearum iudicium", 
   "Cat": "Cataplus", 
   "Fug": "Fugitiui", 
   "Phal": "Phalaris", 
   "Dem. Enc": "Demosthenis encomium", 
   "Bis Acc": "Bis accusatus", 
   "Philops": "Philopseudes", 
   "Cal": "Calumniae non temere credendum", 
   "DMeretr": "Dialogi meretricii", 
   "Syr. D": "de Syria Dea", 
   "Merc. Cond": "de mercede conductis", 
   "ITr": "Iuppiter tragoedus", 
   "Hipp": "Hippias", 
   "Anach": "Anacharsis", 
   "Ocyp": "Ocypus", 
   "Harm": "Harmonides", 
   "Sol": "Soloecista", 
   "Cont": "Contemplantes", 
   "Sch": "Scholia", 
   "Somn": "Somnium siue uita Luciani", 
   "Pr. Im": "pro imaginibus", 
   "Demon": "Demonax", 
   "Am": "Amores", 
   "Patr. Enc": "Patriae encomium", 
   "Charid": "Charidemus", 
   "Peregr": "de morte Peregrini", 
   "IConf": "Iuppiter confutatus", 
   "Pr. Merc. Cond": "pro mercede conductis", 
   "Im": "Imagines", 
   "Sacr": "de sacrificiis", 
   "Gall": "Gallus", 
   "Sat": "Saturnalia", 
   "Nigr": "Nigrinus", 
   "DDeor": "Dialogi deorum"
  }, 
  [
   "II d. C.", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "XENOCRITUS COUS": [
  "Xenocritus Cous", 
  {}, 
  [
   "", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "DIONYS. OLB.": [
  "Dionysius Olbius", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MENO": [
  "Meno", 
  {
   "Iatr": "Iatrica"
  }, 
  [
   "IV a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "COLLUTHUS": [
  "Colluthus", 
  {
   "Fr": "Fragmenta uaria"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ANACH.": [
  "Anacharsis", 
  {
   "Apoph": "Apophthegmata"
  }, 
  [
   "", 
   "", 
   "epistolographus et philosophus", 
   ""
  ]
 ], 
 "MODERATUS GADITANUS": [
  "Moderatus Gaditanus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "ARCHED.": [
  "Archedicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "STAT. FLACC.": [
  "Statyllius Flaccus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "SERAP. ANTIOCH.": [
  "Serapio Antiochenus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "AMYNTIANUS": [
  "Amyntianus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SENECA, L. ANNAEUS $1": [
  "Seneca, L. Annaeus", 
  {
   "Contr": "Controuersiae"
  }, 
  [
   "I a. C. /", 
   "", 
   "rhetor latinus", 
   ""
  ]
 ], 
 "DONAT.": [
  "Donatus, Aelius", 
  {
   "Ter": "Commentum Terentii"
  }, 
  [
   "IV d. C.", 
   "", 
   "grammaticus latinus", 
   ""
  ]
 ], 
 "CLAUD. HERM.": [
  "Hermerius, Claudius", 
  {
   "Mul": "Mulomedicina Chironis"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAGN.": [
  "Magnes", 
  {}, 
  [
   "V d. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "MENECR. HIST.": [
  "Menecrates", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MOSES": [
  "Moses", 
  {}, 
  [
   "II d. C.", 
   "", 
   "alchemista", 
   ""
  ]
 ], 
 "PAMPHIL.": [
  "Pamphilus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PISANDER LAR.": [
  "Pisander Larandeus", 
  {}, 
  [
   "imper.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "ARISTAG. HIST.": [
  "Aristagoras", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SOCRATES ET DIONYSIUS": [
  "Socrates et Dionysius", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CADMUS MILESIUS": [
  "Cadmus Milesius", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ALEX. APHR.": [
  "Alexander Aphrodisiensis", 
  {
   "Pr": "Problemata", 
   "Febr": "de febribus", 
   "in APo": "in Analytica posteriora commentariorum fragmenta", 
   "Mixt": "de mixtione", 
   "Quaest": "Quaestiones", 
   "in Top": "in Aristotelis Topicorum libros octo commentaria", 
   "Fat": "de fato", 
   "in Metaph": "in Aristotelis Metaphysica commentaria", 
   "in Mete": "in Aristotelis Meteorologicorum libros commentaria", 
   "in APr": "in Aristotelis Analyticorum Priorum librum I commentarium.", 
   "de An": "de anima", 
   "in Sens": "in librum de Sensu commentarium", 
   "Pr. Anec": "Problemata anecdota"
  }, 
  [
   "III d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "POLYCHARM.": [
  "Polycharmus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ORD. ECCL. APP.": [
  "Ordo Ecclesiasticus Apostolorum", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TELEPHUS": [
  "Telephus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HLD.": [
  "Heliodorus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "scriptor eroticus", 
   ""
  ]
 ], 
 "POMPONIUS": [
  "Pomponius", 
  {}, 
  [
   "", 
   "", 
   "geographus latinus", 
   ""
  ]
 ], 
 "THDR. HERACL.": [
  "Theodorus Heracleensis", 
  {
   "Fr. Is": "Fragmenta in Isaiam", 
   "Mt": "Fragmenta in Eu. Matt", 
   "Luc": "Fragmenta in Eu. Luc", 
   "Io": "Fragmenta in Eu. Io"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "TIMOCR.": [
  "Timocreo", 
  {}, 
  [
   "V a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "BOETH. STOIC.": [
  "Boethus Sidonius", 
  {}, 
  [
   "II a. C.", 
   "", 
   "stoicus", 
   ""
  ]
 ], 
 "FLAUIANUS CP": [
  "Flauianus Constantinopolitanus", 
  {
   "Ep. Thds": "Epistula ad Theodosium imperatorem", 
   "Ep. Leon": "Epistulae ad Leonem"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PAMPHILA": [
  "Pamphila", 
  {}, 
  [
   "I d. C.", 
   "", 
   "historica", 
   ""
  ]
 ], 
 "DALIO": [
  "Dalio", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ALC. COM.": [
  "Alcaeus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "DRACO CORCYRAEUS": [
  "Draco Corcyraeus", 
  {}, 
  [
   "a. Ath.", 
   "", 
   "scriptor de lapidibus", 
   ""
  ]
 ], 
 "EP. COR. APOCR.": [
  "Epistula Corinthiorum apocrypha", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIAD.": [
  "Diadochus Photicensis", 
  {
   "Vis": "Visio", 
   "Ascens": "Sermo de ascensione Domini", 
   "Perf": "de perfectione spirituali"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PLISTONICUS": [
  "Plistonicus", 
  {}, 
  [
   "III a. c.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "PSEUDO ANTHIMUS NICOMEDIENSIS": [
  "Pseudo Anthimus Nicomediensis", 
  {
   "Eccl. fr": "de Sancta Ecclesia fragmentum"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus (Anth. )", 
   ""
  ]
 ], 
 "LEONT. $2": [
  "Leontius", 
  {
   "in Arat": "in Aratum"
  }, 
  [
   "VII d. C.", 
   "", 
   "mathematicus", 
   ""
  ]
 ], 
 "SEMUS": [
  "Semus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PITTAC.": [
  "Pittacus", 
  {}, 
  [
   "VII/", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "ACT. AP. APOCR.": [
  "Acta Apostolorum Apocrypha", 
  {
   "A. Thadd": "Acta Thaddaei", 
   "A. Petr": "Acta Petri", 
   "A. Pass. Andr": "Passio Andreae", 
   "A. Barn": "Acta Barnabae", 
   "A. Petr. c. Sim": "Acta Petri cum Simone", 
   "A. Pass. Petr. et Paul": "Passio Petri et Pauli", 
   "A. Phil": "Acta Philippi", 
   "A. Io. Oxy": "Acta Iohannis e POxy", 
   "A. Pass. Paul": "Passio Pauli", 
   "A. Andr. Gr": "Acta Andreae Graeca", 
   "A. Tit": "Acta Titi", 
   "AA. Thom. consumm": "Actorum Thomae consummatio", 
   "A. Thom. A": "Acta Thomae A", 
   "A. Thom. B": "Acta Thomae B", 
   "A. Tim": "Actorum Timothei fragmentum", 
   "A. Petr. et Paul": "Acta Petri et Pauli", 
   "A. Io. Rom": "Acta Iohannis Romae (recensiones", 
   "A. Barth": "Acta Bartholomaei", 
   "A. Andr. et Matt": "Acta Andreae et Matthiae", 
   "A. Phil. Epit": "Actorum Philippi epitome", 
   "Mart. Andr. Pr": "Martyrium Andreae prius", 
   "A. Petr. et Andr": "Acta Petri et Andreae", 
   "Tr. Phil": "Translatio Philippi", 
   "A. Io": "Acta Iohannis", 
   "A. Paul. et Thecl": "Acta Pauli et Theclae", 
   "A. Paul": "Acta Pauli", 
   "A. Matt": "Acta Matthaei", 
   "Mart. Phil": "Martyrium Philippi"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYR. IAMB. ADESP.": [
  "Lyrica iambica adespota", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROXEN.": [
  "Proxenus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SIMON.": [
  "Simonides", 
  {
   "Eleg": "Fragmenta elegiaca"
  }, 
  [
   "VI/V a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "HEPH.": [
  "Hephaestio", 
  {
   "Metr": "Introductio metrica de po\u00ebmatis", 
   "p. 79: Sch": "Scholia", 
   "Fr": "Fragmenta", 
   "Po\u00ebm": "de po\u00ebmatis", 
   "Sign": "de signis"
  }, 
  [
   "II d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "TIMOCL.": [
  "Timocles", 
  {
   "Trag": "Fragmenta tragica"
  }, 
  [
   "IV a. C.", 
   "", 
   "comicus et tragicus", 
   ""
  ]
 ], 
 "MALCH.": [
  "Malchio Antiochenus", 
  {
   "Fr": "Fragmenta", 
   "Ep": "Fragmentum epistulae"
  }, 
  [
   "III d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "MEL.": [
  "Meleager", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "THEO $1": [
  "Theo", 
  {
   "Prog": "Progymnasmata"
  }, 
  [
   "I/II d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "CARM. AUR.": [
  "Carmen Aureum", 
  {}, 
  [
   "II d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMAG. ALEX.": [
  "Timagenes Alexandrinus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EUBULID.": [
  "Eubulides Milesius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOCL. MATH.": [
  "Diocles", 
  {}, 
  [
   "II a. C. ?", 
   "", 
   "mathematicus", 
   ""
  ]
 ], 
 "CAPITO $1": [
  "Capito", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "HADR. RH.": [
  "Hadrianus Tyrius", 
  {
   "Epigr": "Epigramma"
  }, 
  [
   "II d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "MEN. RH.": [
  "Menander", 
  {}, 
  [
   "III d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "VIT. AESOP.": [
  "Vita Aesopi", 
  {
   "Vita Aesopi Westermanniana": "Vita Aesopi Westermanniana"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THDR. IC.": [
  "Theodorus Iconiensis", 
  {
   "V. Cyric": "Vita Cyricii"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "STEPH. $2": [
  "Stephanus", 
  {
   "in Rh": "in Artem Rhetoricam commentaria", 
   "in Int": "in librum Aristotelis de Interpretatione commentarium"
  }, 
  [
   "VIII d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "HYB. LYR.": [
  "Hybrias", 
  {}, 
  [
   "V a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "IOLAUS, CLAUDIUS": [
  "Iolaus, Claudius", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HELLAD. $2": [
  "Helladius", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "THALL. HIST.": [
  "Thallus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "POLL.": [
  "Pollianus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "CELS. PHIL.": [
  "Celsus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "EUARETUS": [
  "Euaretus", 
  {}, 
  [
   "", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "SERAPIO $1": [
  "Serapio", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "SILEN.": [
  "Silenus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "NEMES.": [
  "Nemesius Emesenus", 
  {
   "Nat. Hom": "de natura hominis"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "STILPO MEGAREUS": [
  "Stilpo Megareus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "ARISTOTELES CYRENAICUS": [
  "Aristoteles Cyrenaicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "LEX. A.": [
  "Lexicon", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FELIX III": [
  "Felix III", 
  {
   "Ep. Zen": "Epistula ad Zenonem imperatorem", 
   "Ep. P": "Epistulae ad Petrum Fullonem"
  }, 
  [
   "V d. C.", 
   "", 
   "papa", 
   ""
  ]
 ], 
 "OU.": [
  "Ouidius", 
  {
   "AA": "Ars amatoria", 
   "Pont": "Epistulae ex Ponto", 
   "Tr": "Tristia", 
   "Am": "Amores", 
   "Fast": "Fasti", 
   "Met": "Metamorphoses", 
   "Rem": "Remedia amoris", 
   "Ib": "Ibis", 
   "Ep": "Epistulae (Heroides)"
  }, 
  [
   "I a. C. /", 
   "", 
   "poeta latinus", 
   ""
  ]
 ], 
 "ISID.": [
  "Isidorus Hispalensis", 
  {
   "Etym": "Etymologiae"
  }, 
  [
   "VI/", 
   "", 
   "episcopus", 
   ""
  ]
 ], 
 "PEMPEL.": [
  "Pempelus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "A. PIL.": [
  "Acta Pilati", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PL. IUN.": [
  "Plato Iunior", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "CHARITO": [
  "Charito", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "scriptor eroticus", 
   ""
  ]
 ], 
 "SATYR. HIST.": [
  "Satyrus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "THEODOS. BITH.": [
  "Theodosius Bithynius", 
  {
   "Sph": "Sphaera", 
   "Die": "de diebus et noctibus", 
   "Sch": "Scholia", 
   "Habit": "de habitationibus"
  }, 
  [
   "II/I a. C.", 
   "", 
   "mathematicus et astronomus", 
   ""
  ]
 ], 
 "AEL.": [
  "Aelianus", 
  {
   "Fr": "Fragmenta", 
   "Ep": "Epistulae"
  }, 
  [
   "II/III d. C.", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "VOPISCUS SYRACUSIUS, FLAVIUS": [
  "Vopiscus Syracusius, Flavius", 
  {
   "Quadr": "Quadriga tyrannorum", 
   "Car": "Carus et Carinus et Numerianus", 
   "Aur": "Aurelianus", 
   "Prob": "Probus", 
   "Tac": "Tacitus"
  }, 
  [
   "IV d. C.", 
   "", 
   "biographus", 
   ""
  ]
 ], 
 "MART.": [
  "Martialis", 
  {
   "Sp": "Spectacula"
  }, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus latinus", 
   ""
  ]
 ], 
 "EUTROPIUS": [
  "Eutropius", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMOG.": [
  "Hermogenes", 
  {
   "Prog": "Progymnasmata", 
   "Inu": "de inuentione", 
   "Meth": "de methodi grauitate", 
   "Stat": "de statibus", 
   "Id": "de ideis"
  }, 
  [
   "II d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "MON. ANC. GR.": [
  "Monumentum Ancyranum Graecum", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "RHIAN.": [
  "Rhianus", 
  {
   "Sch": "Scholia"
  }, 
  [
   "III a. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "VITR.": [
  "Vitruuius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "scriptor de architectura latinus", 
   ""
  ]
 ], 
 "MACHO": [
  "Macho", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "PETRO": [
  "Petro", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "pythagoricus", 
   ""
  ]
 ], 
 "IUL. LAOD.": [
  "Iulianus Laodicenus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "XENOPH. MED.": [
  "Xenopho", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "ARISTOCREO": [
  "Aristocreo", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "VIGIL. PAPA": [
  "Vigilius", 
  {
   "Ep. Decr": "Epistula decretalis", 
   "Ep. Eutych": "Epistula ad Eutychium"
  }, 
  [
   "VI d. C.", 
   "", 
   "papa", 
   ""
  ]
 ], 
 "EUDOX. HIST.": [
  "Eudoxus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CHARIXEN.": [
  "Charixenes", 
  {}, 
  [
   "II d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "CHRISTOD.": [
  "Christodorus Coptites", 
  {
   "Fr. Hist": "Fragmenta historica"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "historicus et poeta", 
   ""
  ]
 ], 
 "PROTAGORAS NICAEENSIS": [
  "Protagoras Nicaeensis", 
  {}, 
  [
   "III a. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "AMYNT.": [
  "Amyntas", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANON. HERM.": [
  "Anonymus Hermupolitanus", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "MACR.": [
  "Macrobius", 
  {
   "Comm": "Commentarii ad Somnium Scipionis", 
   "Exc": "Excerpta", 
   "Sat": "Saturnalia"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "THEOL. AR.": [
  "Theologumena Arithmeticae", 
  {}, 
  [
   "", 
   "", 
   "(Iamblicho adscripta)", 
   ""
  ]
 ], 
 "CASSIANUS SABAITA": [
  "Cassianus Sabaita", 
  {}, 
  [
   "", 
   "", 
   "abbas", 
   ""
  ]
 ], 
 "A. MART.": [
  "Acta Martyrum", 
  {}, 
  [
   "imper.", 
   "", 
   "", 
   ""
  ]
 ], 
 "QUINT. AS.": [
  "Quintianus Asculanus", 
  {
   "Ep": "Epistula ad Petrum Fullonem"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "SPEUS.": [
  "Speusippus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "SECUND.": [
  "Secundus", 
  {
   "Vit": "Vita secundi Philosophi", 
   "Sent": "Sententiae"
  }, 
  [
   "II d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "CLEOMACHUS": [
  "Cleomachus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "A. R.": [
  "Apollonius Rhodius", 
  {
   "Fr": "Fragmenta", 
   "Sch": "Scholia"
  }, 
  [
   "III a. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "CALLICTER": [
  "Callicter", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "BARS.": [
  "Barsanuphius et Iohannes", 
  {
   "Resp": "Quaestiones et responsiones siue Epistulae"
  }, 
  [
   "VI d. C.", 
   "", 
   "monachi", 
   ""
  ]
 ], 
 "PHILOX. LEUC.": [
  "Philoxenus Leucadius", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "PRONOMUS": [
  "Pronomus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "CHAERIO": [
  "Chaerio", 
  {}, 
  [
   "II a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "MINUC.": [
  "Minucianus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "MENECR. XANTH.": [
  "Menecrates Xanthius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CINCIUS ALIMENTUS, LUCIUS": [
  "Cincius Alimentus, Lucius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ALEX. AL.": [
  "Alexander Alexandrinus", 
  {
   "Ep. Alex": "Epistula ad Alexandrum Constantinopolitanum", 
   "Ep. encycl": "Epistula encyclica", 
   "Depos": "de Arii depositione", 
   "Ep. Aegl": "Fragmenta epistulae ad Aeglonem"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "CHAERIS": [
  "Chaeris", 
  {}, 
  [
   "II a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "EUPH.": [
  "Euphorio", 
  {
   "Dub": "Fragmenta dubia", 
   "Epigr": "Epigrammata"
  }, 
  [
   "III a. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "RUF. RH.": [
  "Rufus Perinthius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "MAGNUS HIST.": [
  "Magnus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EPIPH. TYR.": [
  "Epiphanius Tyrius", 
  {
   "Ep": "Epistula ad synodum Constantinopolitanam"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "NUMEN. HER.": [
  "Numenius Heracleota", 
  {}, 
  [
   "III a. C.", 
   "", 
   "poeta didacticus", 
   ""
  ]
 ], 
 "TIMO": [
  "Timo Phliasius", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "poeta philosophus", 
   ""
  ]
 ], 
 "EUPITHIUS": [
  "Eupithius", 
  {}, 
  [
   "III d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "CYLLEN.": [
  "Cyllenius", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "XENAG.": [
  "Xenagoras", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "THRASYLL. MEND.": [
  "Thrasyllus Mendius", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ARTAPANUS": [
  "Artapanus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MARCIAN. IMP.": [
  "Marcianus", 
  {
   "Edict": "Edictum", 
   "Const. Flau": "Constitutio de Flauiano", 
   "Ep. Leo": "Epistula ad Leonem", 
   "Adloc": "Adlocutio ad synodum Chalcedonensem", 
   "Const. Eut": "Constitutio de Eutyche", 
   "Ep. Al": "Epistula ad monachos Alexandrinos", 
   "Ep. Hier": "Epistula ad archimandritas Hierosolymitanos", 
   "Ep. Nic": "Epistulae ad synodum Nicaenam", 
   "Ep. Chalc": "Epistula ad synodum Chalcedonensem", 
   "Ep. Episc": "Epistula ad episcopos omnes", 
   "Ep. Pal": "Epistula ad Synodum Palestinam", 
   "Const. Chalc": "Constitutio de confirmatione gestorum Chalcedonensis synodi", 
   "Ep. Mac": "Epistula ad Macarium", 
   "Decr": "Decretum"
  }, 
  [
   "V d. C.", 
   "", 
   "imperator", 
   ""
  ]
 ], 
 "DAMAG.": [
  "Damagetus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PETR. II AL.": [
  "Petrus II Alexandrinus", 
  {
   "Encycl": "Fragmentum epistulae encyclicae"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "CHR. PAT.": [
  "Christus patiens", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRITODEM.": [
  "Critodemus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "LEO BYZ.": [
  "Leo Byzantinus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HDN. $2": [
  "Herodianus", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AUS.": [
  "Ausonius", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "poeta latinus", 
   ""
  ]
 ], 
 "ZENOBIUS": [
  "Zenobius", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ALCH. FR. PAP.": [
  "Fragmenta alchemica e Papyris", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FAUORIN.": [
  "Fauorinus", 
  {
   "de Ex": "de exilio", 
   "Fr": "Fragmenta", 
   "Cor": "Corinthiaca", 
   "Fort": "de fortuna"
  }, 
  [
   "II d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "FELIX I": [
  "Felix I", 
  {
   "Fr": "Fragmentum epistulae"
  }, 
  [
   "III d. C.", 
   "", 
   "papa", 
   ""
  ]
 ], 
 "ECPHANT.": [
  "Ecphantus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "pythagoricus", 
   ""
  ]
 ], 
 "EUPHANTUS": [
  "Euphantus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PHILISC. TRAG.": [
  "Philiscus Aegineta", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "EUST. MON.": [
  "Eustathius", 
  {
   "Ep": "Epistula de duabus naturis"
  }, 
  [
   "VI d. C.", 
   "", 
   "monachus", 
   ""
  ]
 ], 
 "PHILOCH.": [
  "Philochorus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "IAMBULUS": [
  "Iambulus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PTOLEMAIS CYRENAICA": [
  "Ptolemais Cyrenaica", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "philosopha", 
   ""
  ]
 ], 
 "HIPPOL.": [
  "Hippolytus", 
  {
   "Pasch": "Fragmenta ex libro de Paschate", 
   "Ben. Iac": "de benedictione Iacobi", 
   "Narr": "Narratio de uirgine Corinthiaca", 
   "Fr. Cant": "Fragmentum in C", 
   "No\u00ebt": "contra haeresin No\u00ebti", 
   "Fr": "Fragmenta", 
   "Antichr": "Demostratio de Christo et Antichristo", 
   "Ep. Reg": "Fragmenta epistulae ad reginam", 
   "Iud": "Demonstratio aduersus Iudaeos", 
   "Engast": "Fragmentum de engastrimytho", 
   "Fr. in Gen. , in Ruth. , in 1Reg": "Fragmenta in Ge. , in Ruth. , in 1Re", 
   "Laz": "Homilia in quatriduanum Lazarum", 
   "Theoph": "de theophania", 
   "Chron": "Chronicon", 
   "in S. Pasch": "in Sanctum Pascha", 
   "Can": "Canones", 
   "Artem": "contra Artemonem", 
   "Bal": "de benedictione Balaam", 
   "Haer": "Refutatio omnium haeresium", 
   "Trad. Ap": "Traditio apostolica", 
   "Consumm": "de consummatione mundi", 
   "Fr. Res": "Fragmentum de resurrectione et incorruptione", 
   "Dan": "Commentarium in Da", 
   "Cant. Mos": "Canticum Mosis"
  }, 
  [
   "III d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "THDR. PETR.": [
  "Theodorus Petranus", 
  {
   "V. Thds": "Vita Theodosii"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ARCHIL.": [
  "Archilochus", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "PLU.": [
  "Plutarchus", 
  {
   "Eum": "Eumenes", 
   "Lib": "de libidine et aegritudine", 
   "Marc": "Marcellus", 
   "Prou": "Prouerbia", 
   "Brut": "Brutus", 
   "Fluu": "de fluuiis", 
   "Per": "Pericles", 
   "Cat. Ma. , Mi": "Cato Maior, Minor", 
   "Pel": "Pelopidas", 
   "Tim": "Timoleo", 
   "Dio": "Dio", 
   "Caes": "Caesar", 
   "Sull": "Sulla", 
   "Them": "Themistocles", 
   "Mar": "Marius", 
   "Pomp": "Pompeius", 
   "Arat": "Aratus", 
   "Vit. Hom": "de vita et poesi Homeri", 
   "Pars. An": "Parsne an facultas animi sit uita passiua", 
   "Comp": "Comparatio", 
   "Sol": "Solo", 
   "Nob": "pro nobilitate", 
   "Publ": "Publicola", 
   "Num": "Numa", 
   "Demetr": "Demetrius", 
   "Fab": "Fabius Maximus", 
   "TG": "Tiberius Gracchus", 
   "Thes": "Theseus", 
   "Crass": "Crassus", 
   "Cic": "Cicero", 
   "Oth": "Otho", 
   "Sert": "Sertorius", 
   "Cor": "Coriolanus", 
   "Alex": "Alexander", 
   "Pyrrh": "Pyrrhus", 
   "Phil": "Philopoemen", 
   "CG": "Caius Gracchus", 
   "Fr": "Fragmenta", 
   "Cim": "Cimo", 
   "Flam": "Flamininus", 
   "Phoc": "Phocio", 
   "Dem": "Demosthenes", 
   "Cam": "Camillus", 
   "Aem": "Aemilius Paulus", 
   "Metr": "de metris", 
   "Art": "Artaxerxes", 
   "Rom": "Romulus", 
   "Arist": "Aristides", 
   "Lys": "Lysander", 
   "Ages": "Agesilaus", 
   "Alc": "Alcibiades", 
   "Ant": "Antonius", 
   "Nic": "Nicias", 
   "Luc": "Lucullus", 
   "Galb": "Galba", 
   "Lyc": "Lycurgus", 
   "Agis": "Agis", 
   "Cleom": "Cleomenes"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MELANIPP.": [
  "Melanippides", 
  {}, 
  [
   "V a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "CHIO HERACLEOTA": [
  "Chio Heracleota", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAETUS": [
  "Paetus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "HEGESIPP.": [
  "Hegesippus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "COSM. IND.": [
  "Cosmas Indicopleustes", 
  {
   "Top": "Topographia christiana"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ZOS.": [
  "Zosimus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PHILOX. CYTH.": [
  "Philoxenus Cytherius", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "PHLP.": [
  "Philoponus, Iohannes", 
  {
   "in Arith. Intr": "in Nicomachi Arithmeticam Introductionem", 
   "in Cat": "Philoponi (olim Ammonii) in Aristotelis Categorias commentarium", 
   "in APo": "in Aristotelis Analytica Posteriora commentaria", 
   "in GC": "in Aristotelis libros de Generatione et Corruptione commentaria", 
   "Comp": "Compendium", 
   "in GA": "Philoponi (olim Michaelis Ephesii) in libros de Generatione Animalium commentaria", 
   "Opif": "de opificio mundi", 
   "in Mete": "in Aristotelis Meteorologicorum librum primum commentarium", 
   "Ton": "Tonica praetexta", 
   "Astrol": "de usu astrolabii", 
   "in APr": "in Aristotelis Analytica Priora commentaria", 
   "in de An": "in Aristotelis de Anima libros commentaria", 
   "in Ph": "in Aristotelis Physica commentaria", 
   "Aet": "de aeternitate mundi"
  }, 
  [
   "VI d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "HDN.": [
  "Herodianus", 
  {
   "Exc. Verb": "excerpta de verbis", 
   "Fig. Epit": "de figuris (epitome)", 
   "Philet": "Philetaerus", 
   "Fr. Philet": "Fragmenta Philetaeri", 
   "Fr": "Fragmenta", 
   "Schem": "Schematismi Homerici", 
   "Epim": "Partitiones", 
   "Vers": "de uersibus", 
   "Sol": "De soloecismo et barbarismo", 
   "Nu": "de numeris", 
   "Fig": "de figuris"
  }, 
  [
   "II d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "METROD. SCEPS.": [
  "Metrodorus Scepsius", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "LYC. MAC.": [
  "Lycus Macedonius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "POLYSTR. $2": [
  "Polystratus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "SOSIP.": [
  "Sosipater", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "DIOD. MED.": [
  "Diodorus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "PLIN. $2": [
  "Plinius Caecilius Secundus", 
  {
   "Paneg": "Panegyricus Traiani", 
   "Ep": "Epistulae"
  }, 
  [
   "I/II d. C.", 
   "", 
   "epistolographus latinus", 
   ""
  ]
 ], 
 "DORIEUS": [
  "Dorieus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "THEOC.": [
  "Theocritus", 
  {
   "Syr": "Syrinx", 
   "Fr": "Fragmenta", 
   "Adon": "ad Adonidem mortuum", 
   "Ep": "Epigrammata", 
   "Sch": "Scholia"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "poeta bucolicus", 
   ""
  ]
 ], 
 "NONNOS.": [
  "Nonnosus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CHRYSERMUS": [
  "Chrysermus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EPIPH. GN.": [
  "Epiphanes Gnosticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "CALLIX.": [
  "Callixenus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "LYR. ADESP.": [
  "Lyrica adespota", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHYLARCH.": [
  "Phylarchus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MNESITH. CYZ.": [
  "Mnesitheus Cyzicenus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "ANAT.": [
  "Anatol(i)us", 
  {
   "Bub": "de bubus", 
   "Equ": "de equis", 
   "Exc": "Excerpta"
  }, 
  [
   "V d. C.", 
   "", 
   "ueterinarius", 
   ""
  ]
 ], 
 "DICAEOG.": [
  "Dicaeogenes", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "LEX. PATM.": [
  "Lexicon Patmense", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIL.": [
  "Antileo", 
  {}, 
  [
   "helen\ufffdst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "THUGEN.": [
  "Thugenides", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "PTOL. CHENN.": [
  "Ptolemaeus Chennus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "EU. EUAE": [
  "Euangelium Euae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALLIMORPHUS": [
  "Callimorphus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "E.": [
  "Euripides", 
  {
   "Tr": "Troades", 
   "Heracl": "Heraclidae", 
   "Hec": "Hecuba", 
   "Hel": "Helena", 
   "Ph": "Phoenissae", 
   "Rh": "Rhesus", 
   "Andr": "Andromacha", 
   "Med": "Medea", 
   "Fr": "Fragmenta", 
   "Ba": "Bacchae.", 
   "HF": "Hercules furens", 
   "Or": "Orestes", 
   "Cyc": "Cyclops", 
   "Supp": "Supplices", 
   "IT": "Iphigenia Taurica", 
   "IA": "Iphigenia Aulidensis", 
   "Hipp": "Hippolytus", 
   "Sch": "Scholia", 
   "El": "Electra", 
   "Lyr": "Fragmenta Lyrica", 
   "Epigr": "Epigrammata", 
   "Alc": "Alcestis", 
   "Io": "Io", 
   "Ep": "Epistulae"
  }, 
  [
   "V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "EUEN.": [
  "Euenus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "elegiacus", 
   ""
  ]
 ], 
 "ARISTIPP.": [
  "Aristippus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "ARAT.": [
  "Aratus", 
  {
   "Comm": "Commentaria", 
   "Sch": "Scholia"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "STRATO ALEX.": [
  "Strato Alexandrinus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "NICOM.": [
  "Nicomachus", 
  {
   "Aeg": "de Aegyptorum festibus"
  }, 
  [
   "II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MACED. $2": [
  "Macedonius Thessalonicensis I", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PRODIC.": [
  "Prodicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "THPHL. ANT.": [
  "Theophilus Antiochenus", 
  {
   "Fr": "Fragmentum", 
   "Autol": "ad Autolycum"
  }, 
  [
   "II d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "EM": [
  "Etymologicum Magnum", 
  {}, 
  [
   "XII/", 
   "", 
   "", 
   ""
  ]
 ], 
 "VAL. FLAC.": [
  "Valerius Flaccus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "poeta latinus", 
   ""
  ]
 ], 
 "DIOSC.": [
  "Dioscorides", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "THEOCL.": [
  "Theocles", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "DURIS": [
  "Duris", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "APP. VERG.": [
  "Appendix Vergiliana", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PULCH. AUG.": [
  "Pulcheria Augusta", 
  {
   "Ep. Strat": "Epistula ad Strategium Bithyniae", 
   "Ep. Leon": "Epistula ad Leonem", 
   "Ep. Bass": "Epistula ad Bassam", 
   "Ep. Hier": "Epistula ad monachos Hierosolymitanos"
  }, 
  [
   "V d. C.", 
   "", 
   "epistolographa", 
   ""
  ]
 ], 
 "PHILOD. SCARPH.": [
  "Philodamus Scarpheus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "ENNOD.": [
  "Ennodius Magnus, Felix", 
  {
   "Epist": "Epistulae"
  }, 
  [
   "VI d. C.", 
   "", 
   "episcopus", 
   ""
  ]
 ], 
 "IAMBL. $2": [
  "Iamblichus", 
  {
   "Fr": "Fragmenta", 
   "Epit": "Epitome"
  }, 
  [
   "II d. C.", 
   "", 
   "scriptor eroticus", 
   ""
  ]
 ], 
 "HERMOCR.": [
  "Hermocreo", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PHRYN. ATHEN.": [
  "Phrynichus Atheniensis", 
  {}, 
  [
   "", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "PHAN.": [
  "Phanias", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "TIB. II": [
  "Tiberius II", 
  {
   "Nou": "Nouella"
  }, 
  [
   "VI d. C.", 
   "", 
   "imperator", 
   ""
  ]
 ], 
 "IBAS ED.": [
  "Ibas Edessenus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "DEMETR. $2": [
  "Demetrius", 
  {
   "Eloc": "de elocutione"
  }, 
  [
   "III/I a. C. ?", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "ARTEMID.": [
  "Artemidorus Tarsensis", 
  {}, 
  [
   "I a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "BRYSO": [
  "Bryso", 
  {}, 
  [
   "III a. C. ?", 
   "", 
   "pythagoricus", 
   ""
  ]
 ], 
 "CALLICRAT.": [
  "Callicratidas", 
  {}, 
  [
   "", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "FACUND.": [
  "Facundus Hermianensis", 
  {}, 
  [
   "III d. C.", 
   "", 
   "episcopus Africanus", 
   ""
  ]
 ], 
 "SEUERIAN.": [
  "Seuerianus Gabalensis", 
  {
   "Rom. Heb": "Fragmenta in Pauli epistolas", 
   "Fr": "Fragmenta", 
   "Creat": "Orationes in mundi creationem", 
   "Serp": "de serpente aeneo", 
   "Cruc": "in Crucem", 
   "Sigill": "de sigillis librorum", 
   "Cent": "in centurionem et contra Manichaeos et Apollinaristas", 
   "Hom. in Matt": "Homilia in Eu. Matt", 
   "Fic": "de ficu arefacta", 
   "Abr": "in Abrahae dictum", 
   "Pac": "de pace", 
   "Appar": "in dei apparitionem", 
   "Tent": "in tentationem domini nostri Iesu Christi", 
   "Haer": "Fragmenta sermonis contra haereses", 
   "Inc": "in incarnationem Christi"
  }, 
  [
   "", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "EUTECNIUS": [
  "Eutecnius", 
  {
   "Th. Par": "Paraphrasis in Nicandri Theriaca", 
   "C. Par": "Paraphrasis in Oppiani Cynegetica", 
   "Al. Par": "Paraphrasis in Nicandri Alexipharmaca"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "PHACELLUS": [
  "Phacellus", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "THEOPOMP. COM.": [
  "Theopompus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "DIOPH. $2": [
  "Diophilus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "epicus uel epica", 
   ""
  ]
 ], 
 "GORG.": [
  "Gorgias", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "rhetor et sophista", 
   ""
  ]
 ], 
 "NICOMACHUS": [
  "Nicomachus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ANT. LIB.": [
  "Antoninus Liberalis", 
  {}, 
  [
   "II d. C.", 
   "", 
   "mythographus", 
   ""
  ]
 ], 
 "GLAUC. $3": [
  "Glaucus Atheniensis", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "BITO": [
  "Bito", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "mechanicus", 
   ""
  ]
 ], 
 "EUTYCH. CONST.": [
  "Eutychius Constantinopolitanus", 
  {
   "Pasch": "Sermo de Paschate et de Eucharistia", 
   "Ep. Vigil": "Epistula ad Vigilium papam"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "CHOEROB.": [
  "Choeroboscus", 
  {
   "Rh": "de figuris", 
   "in Heph": "in Hephaestionem", 
   "in Theod": "in Theodosii canones"
  }, 
  [
   "VIII/", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "CALLIN.": [
  "Callinus", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "elegiacus", 
   ""
  ]
 ], 
 "CHARICLID.": [
  "Chariclides", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "ANTIPHO": [
  "Antipho", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "V a. C.", 
   "", 
   "orator", 
   ""
  ]
 ], 
 "DINIAS": [
  "Dinias", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "THEAGENES RHEGINUS": [
  "Theagenes Rheginus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "THEOPHIL.": [
  "Theophilus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "IO. MAL.": [
  "Iohannes Malalas", 
  {
   "Chron": "Chronographia"
  }, 
  [
   "VI d. C.", 
   "", 
   "chronographus", 
   ""
  ]
 ], 
 "ARISTEAS EPIC.": [
  "Aristeas", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "ANTIPHO SOPH.": [
  "Antipho", 
  {}, 
  [
   "V a. C.", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "HANNO": [
  "Hanno", 
  {
   "Peripl": "Periplus"
  }, 
  [
   "V a. C. ?", 
   "", 
   "geographus", 
   ""
  ]
 ], 
 "DION. MIL.": [
  "Dionysius Milesius", 
  {}, 
  [
   "V a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PHILONID. $2": [
  "Philonides Dyrrachinus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "CHARIS.": [
  "Charisius", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "grammaticus latinus", 
   ""
  ]
 ], 
 "AGAP.": [
  "Agapetus Constantinopolitanus", 
  {
   "Cap": "Capitula admonitoria"
  }, 
  [
   "VI d. C.", 
   "", 
   "diaconus", 
   ""
  ]
 ], 
 "ANTIPH.": [
  "Antiphanes", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "GLYCO": [
  "Glyco", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ERASISTR.": [
  "Erasistratus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "CORN. LONG.": [
  "Cornelius Longus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "DEMETR. COM. VET.": [
  "Demetrius", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "comicus ueteris comoediae", 
   ""
  ]
 ], 
 "POLYBIUS": [
  "Polybius", 
  {}, 
  [
   "IX d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "POET.": [
  "Poeta", 
  {
   "de herb": "de herbis"
  }, 
  [
   "", 
   "", 
   "anonymus", 
   ""
  ]
 ], 
 "DIOG. CYZ.": [
  "Diogenes Cyzicenus", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CLEOPHANTUS": [
  "Cleophantus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "CLEODEMUS": [
  "Cleodemus", 
  {}, 
  [
   "a. I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PHILIPP. SID.": [
  "Philippus Sidetes", 
  {
   "Fr": "Fragmenta christianae historiae"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEUD.": [
  "Theudotus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "GORGO": [
  "Gorgo", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "TER. SCAUR.": [
  "Terentius Scaurus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "ANTIG. HIST. $2": [
  "Antigonus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "TABULAE CERATAE ASSENDELFTIANAE": [
  "Tabulae Ceratae Assendelftianae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "BALBILL.": [
  "Balbilla", 
  {}, 
  [
   "II d. C.", 
   "", 
   "lyrica", 
   ""
  ]
 ], 
 "ASCLEP. MYRL.": [
  "Asclepiades Myrleanus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EU. BARTH.": [
  "Euangelium Bartholomaei", 
  {}, 
  [
   "IV d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. PER.": [
  "Anonyma Periegesis", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARUS. MESS.": [
  "Arusianus Messius", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "SCYMN.": [
  "Pseudo Scymnus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II a. C.", 
   "", 
   "geographus", 
   ""
  ]
 ], 
 "HERAS CAPPADOX": [
  "Heras Cappadox", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "EPIGR. ADESP.": [
  "Epigrammata adespota", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "D. P.": [
  "Dionysius Periegeta", 
  {
   "p. 409: Par": "Paraphrasis", 
   "p. 427: Sch": "Scholia", 
   "Au": "de Aucupio"
  }, 
  [
   "I/II d. C.", 
   "", 
   "geographus", 
   ""
  ]
 ], 
 "PETR. PATR.": [
  "Petrus Patricius", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANTIP. BOST.": [
  "Antipater Bostrensis", 
  {
   "Fr": "Fragmenta", 
   "Io. Bapt": "Homilia in Iohannem Baptistam", 
   "Annunt": "Homilia in annuntiationem deiparae"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "EUN. CYZ.": [
  "Eunomius Cyzicenus", 
  {
   "Apol": "Apologia", 
   "Fr": "Fragmenta", 
   "Fid": "Confessio fidei"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "TITANOMACH.": [
  "Titanomachia", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "poema epicum", 
   ""
  ]
 ], 
 "ARISTAG.": [
  "Aristagoras", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "C. C.": [
  "Caecilius Calactinus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "SOLIN.": [
  "Solinus, C. Iulius", 
  {}, 
  [
   "III d. C.", 
   "", 
   "geographus latinus", 
   ""
  ]
 ], 
 "CALLINIC. RH.": [
  "Callinicus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "LIBER ELD.": [
  "Liber Eldad et Modad", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARC. DIAC.": [
  "Marcus", 
  {
   "V. Porph": "Vita Porphyrii episcopi Gazae"
  }, 
  [
   "V d. C.", 
   "", 
   "diaconus", 
   ""
  ]
 ], 
 "MINYAS": [
  "Minyas", 
  {}, 
  [
   "V a. C. ?", 
   "", 
   "poema epicum", 
   ""
  ]
 ], 
 "AQUILA ROMANUS": [
  "Aquila Romanus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "DEMOCEDES": [
  "Democedes", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "pythagoricus", 
   ""
  ]
 ], 
 "POLEM. AP.": [
  "Polemo", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMOSTR.": [
  "Demostratus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "uariae scientiae scriptor", 
   ""
  ]
 ], 
 "PALL. $2": [
  "Palladius", 
  {
   "Ep. Laus": "Epistula ad Lausum", 
   "V. Chrys": "Dialogus de uita Iohannis Chrysostomi", 
   "H. Laus": "Historia Lausiaca", 
   "Gent. Ind": "de gentibus Indiae et Bragmanibus"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "episcopus Helenopolitanus", 
   ""
  ]
 ], 
 "RUFIN. $2": [
  "Rufinus", 
  {}, 
  [
   "III d. C. ?", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "MENEST.": [
  "Menestor", 
  {}, 
  [
   "V a. C.", 
   "", 
   "pythagoricus", 
   ""
  ]
 ], 
 "LEX. THT.": [
  "Lexicon quod Theaeteti uocatur", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EP. PAUL. APOCR. $1": [
  "Epistula Pauli apocrypha", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HYMEN.": [
  "Hymenaeus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "III d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "DEXIPP.": [
  "Dexippus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "NICOPHO": [
  "Nicopho", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "CALLICR. HIST.": [
  "Callicrates", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "APIC.": [
  "Apicius, C.", 
  {}, 
  [
   "III. d. C.", 
   "", 
   "rei coquinariae scriptor", 
   ""
  ]
 ], 
 "EPIC. ALEX. ADESP.": [
  "Epica Alexandrina Adespota", 
  {
   "Inc": "Incerta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VERG.": [
  "Vergilius Maro, Publius", 
  {
   "B": "Bucolica", 
   "G": "Georgica", 
   "Aen": "Aeneis"
  }, 
  [
   "I a. C.", 
   "", 
   "poeta latinus", 
   ""
  ]
 ], 
 "HEGETOR": [
  "Hegetor", 
  {}, 
  [
   "II a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "APOLLON. $2": [
  "Apollonius", 
  {}, 
  [
   "I d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "APOLLON. $3": [
  "Apollonius", 
  {
   "Mir": "Mirabilia"
  }, 
  [
   "II a. C.", 
   "", 
   "paradoxographus", 
   ""
  ]
 ], 
 "APOLLON. $4": [
  "Apollonius", 
  {
   "Lex": "Lexicon Homericum"
  }, 
  [
   "I/II d. C.", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "APP.": [
  "Appianus", 
  {
   "Fr": "Fragmenta", 
   "Hann": "Hannibalica", 
   "Sam": "Samnitica", 
   "Ill": "Illyrica", 
   "Ital": "Italica", 
   "Pun": "Punica", 
   "Reg": "Regia", 
   "Sic": "Sicula", 
   "Syr": "Syriaca", 
   "Mac": "Macedonica", 
   "Num": "Numidica", 
   "Hisp": "Hispanica", 
   "Mith": "Mithridatica", 
   "Gall": "Gallica", 
   "Ep": "Epistula ad Frontonem", 
   "Praef": "Praefatio"
  }, 
  [
   "II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SYM. STYL.": [
  "Symeo Stylites", 
  {
   "Serm": "Sermo de animae exitu", 
   "Ep": "Epistula ad Basilium Antiochenum"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PHILIST.": [
  "Philistus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HIPPAGORAS": [
  "Hippagoras", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PORPH.": [
  "Porphyrius Tyrius", 
  {
   "Abst": "de abstinentia", 
   "Plot": "Vita Plotini", 
   "Chr. Pap": "aduersus Christianos (fragmenta papyracea)", 
   "in Cat": "in Aristotelis Categorias commentarium", 
   "Marc": "Epistula ad Marcellam", 
   "in Ptol": "in Ptolemaei Tetrabiblon", 
   "Fr": "Fragmenta", 
   "Gaur": "ad Gaurum", 
   "Antr": "de antro nympharum", 
   "VP": "Vita Pythagorae", 
   "Chr": "aduersus Christianos", 
   "in Prm": "in Platonis Parmenidem", 
   "Ep. Aneb": "Epistula ad Anebonem", 
   "in Harm": "in Ptolemaei Harmonica", 
   "Intr": "Isagoge siue quinque uoces", 
   "in Tim": "in Platonis Timaeum commentariorum fragmenta", 
   "Sent": "Sententiae ad intelligibilia ducentes", 
   "Hist. Phil": "Historiae Philosophicae fragmenta"
  }, 
  [
   "III d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "LEONT.": [
  "Leontius", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ZENOTH.": [
  "Zenothemis", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "poeta", 
   ""
  ]
 ], 
 "ARCHIBIUS": [
  "Archibius", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "DIEUCH.": [
  "Dieuches", 
  {}, 
  [
   "III a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "CYR. AL.": [
  "Cyrillus Alexandrinus", 
  {
   "Dial. Trin": "de trinitate dialogi", 
   "Dogm": "de dogmatum solutione", 
   "Apol. Orient": "XII capitum defensio aduersus orientales episcopos", 
   "Luc": "Fragmenta in Eu. Luc", 
   "Ep. Calos": "Epistula ad Calosyrium", 
   "Heb": "Fragmenta explanationum in Ep. Hebr", 
   "Expl. 12 cap": "Explicatio XII capitum", 
   "Diod": "Fragmenta contra Diodorum Tarsensem", 
   "Thdr. Mops": "Fragmenta coantra Theodorum Mopsuestenum", 
   "Fr": "Fragmenta uaria", 
   "Fr. 1Io": "Fragmenta in 1Ep. Io", 
   "Inc. Unigen": "de incarnatione unigeniti dialogus", 
   "Nest": "contra Nestorium", 
   "Hom. Diu": "Homilia de incarnatione", 
   "Arcad": "de recta fide ad Arcadiam et Marinam", 
   "Pulch": "de recta fide ad Pulcheriam et Eudociam", 
   "Chr. Un": "quod unus sit Christus", 
   "Synous": "contra synousiastas", 
   "Defunct": "advuersus negantes offerendum esse pro defunctis (fragmenta)", 
   "Cor": "Explanatio in 1, 2Ep. Cor", 
   "Pr. Ps": "Prooemium in Psalmos", 
   "Ep. Phot": "Epistula ad Photium presbyterum", 
   "Fr. Iac": "Fragmenta in Iacobum", 
   "Io": "Fragmenta in Eu. Io", 
   "Ep. Thds": "Epistula ad Theodosium imperatorem", 
   "Fr. 1, 2Petr": "Fragmenta in 1, 2Ep. Petr", 
   "Ep. Euopt": "Epistula ad Euoptium", 
   "Ep. Lib": "ad episcopos Libyae", 
   "Fr. Iudae": "Fragmentum in Ep. Iud", 
   "Libell": "Libellus", 
   "Fr. Ps": "Fragmentum in Ps", 
   "Ep. Fest": "Epistulae Festales", 
   "Rom": "Explanatio in Ep. Rom", 
   "Ep. Domn": "ad Domnum", 
   "Resp": "Responsio ad Tiberium", 
   "Ep": "Epistulae", 
   "Fr. Ps. Laud": "Fragmenta in Psalmos ex codice Laudiano", 
   "Fr. Act. Ap": "Commentarii in Act. Ap", 
   "Mt": "Fragmenta in Eu. Matt", 
   "Deip. M": "quod Maria sit deipara", 
   "Apol. Thdt": "Apologeticus contra Theodoretum", 
   "Inc": "De incarnatione", 
   "Apol. Thds": "Apologeticus ad imperatorem Theodosium", 
   "Thds": "de recta fide ad Theodosium"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PH.": [
  "Philo", 
  {
   "Mech": "Mechanica", 
   "Bel": "Belopoeica"
  }, 
  [
   "III/II a. C.", 
   "", 
   "mechanicus", 
   ""
  ]
 ], 
 "SEUER.": [
  "Seuerus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "ARSEN.": [
  "Arsenius", 
  {
   "Doct": "Doctrina et exhortatio", 
   "Tent": "in nomicum tentatorem"
  }, 
  [
   "V d. C.", 
   "", 
   "eremita", 
   ""
  ]
 ], 
 "EROT. FR. PAP.": [
  "Eroticorum Fragmenta Papyracea", 
  {
   "Apoll": "de Apollonio", 
   "Nin": "de Nino", 
   "Amen": "de Amenophi", 
   "Parth": "Metiochus et Parthenope", 
   "Staph": "de Staphylo", 
   "Tefn": "de Tefnuti", 
   "Tin": "de Tinouphi", 
   "Iol": "de Iolao", 
   "Call": "de Calligone", 
   "Anth": "de Antheia", 
   "Chion": "de Chione", 
   "Ses": "de Sesonchoside", 
   "Nect": "Somnium Nectanebi", 
   "Daul": "de Daulide", 
   "Thean": "de Theano"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ELEG. ALEX. ADESP.": [
  "Elegiaca Alexandrina adespota", 
  {
   "Halic": "de Halicarnassi gloria"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PH. EPIC.": [
  "Philo", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "DIALEX.": [
  "Dialexeis", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POMP. MAC.": [
  "Pompeius Macer", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "EPAENETUS": [
  "Epaenetus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "de re coquinaria scriptor", 
   ""
  ]
 ], 
 "ARCHIMEL.": [
  "Archimelus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "D. H.": [
  "Dionysius Halicarnassensis", 
  {
   "Din": "de Dinarcho", 
   "Amm": "Epistulae ad Ammaeum", 
   "Lys": "de Lysia", 
   "Comp": "de compositione uerborum", 
   "Is": "de Isaeo", 
   "Fr": "Fragmenta", 
   "Isoc": "de Isocrate", 
   "Imit": "de imitatione", 
   "Dem": "de Demosthene", 
   "Th": "de Thucydide", 
   "Orat. Vett": "de oratibus ueteribus", 
   "Pomp": "Epistula ad Pompeium", 
   "Rh": "Ars rhetorica"
  }, 
  [
   "I a. C.", 
   "", 
   "rhetor et historicus", 
   ""
  ]
 ], 
 "PS. MUSA": [
  "Pseudo Musa, Antonius", 
  {}, 
  [
   "I d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "CEPHISOD.": [
  "Cephisodorus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "SISYPHUS": [
  "Sisyphus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EP. PR. GR.": [
  "Epistulae priuatae Graecae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GREG. CYPR.": [
  "Gregorius Cyprius", 
  {}, 
  [
   "XIII d. C.", 
   "", 
   "paroemiographus", 
   ""
  ]
 ], 
 "DOROTH. ATH.": [
  "Dorotheus Atheniensis", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "GEL. CYZ.": [
  "Gelasius Cyzicenus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "SOPHIL.": [
  "Sophilus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "PSALMUS NAASSENUS": [
  "Psalmus Naassenus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAMPH. MON.": [
  "Pamphilus", 
  {
   "Soter": "Encomium S. Soteridis", 
   "Solut": "Capitulorum diuersorum seu dubitationum solutio"
  }, 
  [
   "VI/", 
   "", 
   "monachus", 
   ""
  ]
 ], 
 "THEAGEN.": [
  "Theagenes", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DAIM.": [
  "Daimachus", 
  {
   "Ind": "Indica"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "historiae Indicae scriptor", 
   ""
  ]
 ], 
 "PLIN. MED.": [
  "Plinius", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "CODEX VISIONUM": [
  "Codex Visionum", 
  {
   "Pat": "ad patientes", 
   "Laud": "Laudatio domini Iesu", 
   "Abr": "ad Abraham", 
   "Cain": "Cainis uerba", 
   "Abel": "Abelis uerba", 
   "Iust": "ad Iustos", 
   "Inc": "poema incertum"
  }, 
  [
   "IV d. C.", 
   "", 
   "(Cod. Vis. )", 
   ""
  ]
 ], 
 "SEPTEM": [
  "Septem Sapientes", 
  {
   "Par": "uersio Parisina", 
   "Mon": "uersio Monacensis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CIN. LYR.": [
  "Cinesias", 
  {}, 
  [
   "V a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "T. IOB": [
  "Testamentum Iob", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "STAPHYL.": [
  "Staphylus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DROMO": [
  "Dromo", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "CLITARCH. $2": [
  "Clitarchus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "LAMPROCL.": [
  "Lamprocles", 
  {}, 
  [
   "V a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "PHERECYD. SYR.": [
  "Pherecydes Syrius", 
  {
   "Ep": "Epistula"
  }, 
  [
   "VI a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "SOSITH.": [
  "Sositheus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "HENIOCH.": [
  "Heniochus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "A\u00cbTIUS": [
  "A\u00ebtius", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "doxographus", 
   ""
  ]
 ], 
 "MARCELLIN. $2": [
  "Marcellinus", 
  {
   "Puls": "de pulsibus"
  }, 
  [
   "II d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "DIOD.": [
  "Diodorus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ADAEUS": [
  "Adaeus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "EPAPHR.": [
  "Epaphroditus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "POLYC. SM.": [
  "Polycarpus Smyrnaeus", 
  {
   "Ep": "Epistula ad Philippenses"
  }, 
  [
   "I/II d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "CINNA, HELUIUS": [
  "Cinna, Heluius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "poeta latinus", 
   ""
  ]
 ], 
 "POLEM. HIST.": [
  "Polemo", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HIPPOLOCHUS": [
  "Hippolochus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "rei coquinariae scriptor", 
   ""
  ]
 ], 
 "PHYS.": [
  "Physiologus Graecus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILIC.": [
  "Philicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "MARIA ALCH.": [
  "Maria", 
  {}, 
  [
   "II d. C.", 
   "", 
   "alchemista", 
   ""
  ]
 ], 
 "COMPOSITIONES": [
  "Compositiones ad tingenda musiua", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LUCR.": [
  "Lucretius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "rerum naturalium scriptor", 
   ""
  ]
 ], 
 "CHRYSIPPUS": [
  "Chrysippus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "CORPUS PALMOMANTICUM GRAECUM": [
  "Corpus Palmomanticum Graecum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENECL.": [
  "Menecles Barcaeus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ASCLEP. MEND.": [
  "Asclepiades Mendesius", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ARCHYT.": [
  "Archytas Tarentinus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "HIPPARCHUS": [
  "Hipparchus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "filius Pisistrati tyrannus", 
   ""
  ]
 ], 
 "CARCINUS": [
  "Carcinus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "PHILIPP. PERG.": [
  "Philippus Pergameus", 
  {}, 
  [
   "d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EUT.": [
  "Eutyches", 
  {
   "Ep. Thds": "Epistula ad Theodosium", 
   "Conf": "Libellus confessionis", 
   "Supplic": "Supplicatio"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEGESIPPUS": [
  "Hegesippus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "SENECA, L. ANNAEUS": [
  "Seneca, L. Annaeus", 
  {
   "Ep": "Epistulae", 
   "Apocol": "Apocolocyntosis"
  }, 
  [
   "I d. C.", 
   "", 
   "philosophus latinus", 
   ""
  ]
 ], 
 "NOSTI": [
  "Nosti", 
  {}, 
  [
   "VII a. C. ?", 
   "", 
   "poema epicum", 
   ""
  ]
 ], 
 "EPHR. ANT.": [
  "Ephraem Antiochenus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ABR. EPH.": [
  "Abraham Ephesinus", 
  {
   "Occurs": "in occursum domini", 
   "Annunt": "in annuntiationem deiparae"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYS. SCYMN.": [
  "Dionysius Scymnaeus", 
  {}, 
  [
   "", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "ALCIMENES": [
  "Alcimenes", 
  {}, 
  [
   "III a C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPICH.": [
  "Epicharmus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "AEMIL.": [
  "Aemilianus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ANDRO TEIUS": [
  "Andro Teius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HIST. HAN.": [
  "Historicus anonymus Hannibalis", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUOD.": [
  "Euodus", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "TYRANNIO": [
  "Tyrannio", 
  {}, 
  [
   "I a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "RHETOR.": [
  "Rhetorius", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "PROCL.": [
  "Proclus", 
  {
   "Phil. Chal": "de Philosophia Chaldaica", 
   "Sch": "Scholia (cit", 
   "in Euc": "in primum Euclidis Elementorum librum commentarii", 
   "Vit. Hom": "Vita Homeri", 
   "Sacr": "de arte sacro apud Graecos", 
   "H": "Hymni", 
   "in R": "in Platonis Rempublicam commentaria", 
   "Theol. Plat": "Theologia Platonica", 
   "in Alc": "in Platonis Alcibiadem", 
   "Hyp": "Hypotyposis", 
   "Cycl": "Cycli epitomae", 
   "Chr": "Chrestomathia", 
   "in Prm": "in Platonis Parmenidem commentarius", 
   "Inst. Phys": "Institutio physica", 
   "in Ti": "in Platonis Timaeum commentaria", 
   "Opusc": "Opuscula", 
   "Inst": "Institutio theologica", 
   "ad Hes. Op": "ad Hesiodi Opera et Dies", 
   "Par. Ptol": "Paraphrasis in Ptolemaei Tetrabiblon", 
   "in Cra": "in Platonis Cratylum commentaria"
  }, 
  [
   "V d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "ARISTODEM.": [
  "Aristodemus", 
  {}, 
  [
   "a. II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AEN. TACT.": [
  "Aeneas", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "tacticus", 
   ""
  ]
 ], 
 "EUB.": [
  "Eubulus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "CRITIAS": [
  "Critias", 
  {
   "Fr. Trag": "Fragmenta tragica", 
   "Eleg": "Fragmenta elegiaca"
  }, 
  [
   "V a. C.", 
   "", 
   "philosophus tragicus elegiacus", 
   ""
  ]
 ], 
 "IREN.": [
  "Irenaeus Referendarius", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRISC. LYD.": [
  "Priscianus Lydus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "ALC. MESS.": [
  "Alcaeus Messenius", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ANTIM.": [
  "Antimachus Colophonius", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "elegiacus et epicus", 
   ""
  ]
 ], 
 "SOCR. RHOD.": [
  "Socrates Rhodius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CHARAX": [
  "Charax", 
  {}, 
  [
   "II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CAT. $3": [
  "Catullus, C. Valerius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "poeta latinus", 
   ""
  ]
 ], 
 "CEPHALIO": [
  "Cephalio", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MYRTIS": [
  "Myrtis", 
  {}, 
  [
   "V a. C. ?", 
   "", 
   "lyrica", 
   ""
  ]
 ], 
 "NICOL.": [
  "Nicolaus", 
  {
   "Prog": "Progymnasmata"
  }, 
  [
   "V d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "NYMPHOD.": [
  "Nymphodorus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "THEOLYT.": [
  "Theolytus", 
  {
   "Fr": "Fragmentum"
  }, 
  [
   "", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "CHAEREM. HIST.": [
  "Chaeremo", 
  {}, 
  [
   "I d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANTAG.": [
  "Antagoras", 
  {}, 
  [
   "III a. C.", 
   "", 
   "elegiacus", 
   ""
  ]
 ], 
 "ARCHEB.": [
  "Archebulus Thebaeus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMO": [
  "Demo", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "APOLLON. APHR.": [
  "Apollonius Aphrodisiensis", 
  {}, 
  [
   "imper.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "METROD.": [
  "Metrodorus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "IOB. EP.": [
  "Iobius", 
  {
   "Symb": "Symbolum"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "episcopus", 
   ""
  ]
 ], 
 "HIPPOD.": [
  "Hippodamus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "pythagoricus", 
   ""
  ]
 ], 
 "DIONYS. IAMB.": [
  "Dionysius Iambus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "grammaticus et poeta", 
   ""
  ]
 ], 
 "DIOD. TARS.": [
  "Diodorus Tarsensis", 
  {}, 
  [
   "I a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "ANON. ARGENT.": [
  "Anonymus Argentinensis", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUST. EPIPH.": [
  "Eustathius Epiphaniensis", 
  {}, 
  [
   "V d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MYIA": [
  "Myia", 
  {}, 
  [
   "", 
   "", 
   "pythagorica", 
   ""
  ]
 ], 
 "V. HERACL.": [
  "Vita sancti Heraclidis", 
  {}, 
  [
   "V d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "EU. MARIAE": [
  "Euangelium Mariae", 
  {}, 
  [
   "II d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMIPP. HIST.": [
  "Hermippus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "IGN.": [
  "Ignatius Antiochenus", 
  {
   "Fr": "Fragmenta", 
   "Sm": "Epistula ad Smyrnaeos", 
   "Rom": "Epistula ad Romanos", 
   "Phil": "Epistula ad Philadelphios", 
   "Tr": "Epistula ad Trallianos", 
   "Pol": "Epistula ad Polycarpum", 
   "Magn": "Epistula ad Magnesios", 
   "Eph": "Epistula ad Ephesios", 
   "Ep": "Epistulae uariae apocryphae"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "STRATON.": [
  "Stratonicus Atheniensis", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "TREB.": [
  "Trebelius Pollio", 
  {
   "Gall": "Gallieni duo", 
   "Claud": "Claudius", 
   "Val": "Valeriani duo", 
   "Tyr": "Triginta tyranni"
  }, 
  [
   "IV d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ARCHEL. PHIL.": [
  "Archelaus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "SUD.": [
  "Suda", 
  {}, 
  [
   "X d. C.", 
   "", 
   "lexicon", 
   ""
  ]
 ], 
 "BIO BOR.": [
  "Bio Borysthenita", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "APOCALYPSIS BARUCH RELIQUIAE": [
  "Apocalypsis Baruch reliquiae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SENT. AP.": [
  "Sententiae Apostolorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "BEROS.": [
  "Berosus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PHILISC. EPIGR.": [
  "Philiscus Milesius", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ZENO LAOD.": [
  "Zeno Laodicenus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "SERAPIO MED.": [
  "Serapio Alexandrinus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "DEMETR. CALL.": [
  "Demetrius Callatinus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CARYST.": [
  "Carystius", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SIMP.": [
  "Simplicius", 
  {
   "in de An": "in libros Aristotelis de Anima commentaria", 
   "in Ph": "in Aristotelis Physica commentaria", 
   "in Cat": "in Aristotelis Categorias commentarium", 
   "in Epict": "in Epictetum commentarius", 
   "in Cael": "in Aristotelis de Caelo commentaria"
  }, 
  [
   "VI d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "ATTIC. CONST.": [
  "Atticus Constantinopolitanus", 
  {
   "Trin. Fr": "Fragmentum in Trinitatem", 
   "Ep. Call": "Epistula ad Calliopium", 
   "Ep. Eups. Fr": "Fragmentum epistulae ad Eupsychium", 
   "Ep. Cyr": "Epistula ad Cyrillum", 
   "Ep. Petr. et Aides": "Epistula ad Petrum et Aidesium", 
   "Ep. Afr": "Epistula ad episcopos Africanos"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ASCLEP. TRALL.": [
  "Asclepiades Trallensis", 
  {
   "Ep": "Epistula ad Petrum Fullonem"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PHILEM. III": [
  "Philemo III", 
  {}, 
  [
   "II a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "GNOM. BASIL.": [
  "Gnomica Basileensia", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MALCH. $2": [
  "Malchus Philadelphensis", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DIOD. SARD.": [
  "Diodorus Sardensis", 
  {}, 
  [
   "I a. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "NEANTHES CYZICENUS": [
  "Neanthes Cyzicenus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus (Neanth. Cyz. )", 
   ""
  ]
 ], 
 "TIMONAX": [
  "Timonax", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CHARES IAMB.": [
  "Chares", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "iambographus", 
   ""
  ]
 ], 
 "CHIONID.": [
  "Chionides", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "MELANTH. EPIGR.": [
  "Melanthius", 
  {}, 
  [
   "V a. C.", 
   "", 
   "elegiacus", 
   ""
  ]
 ], 
 "PHILOSTR. $2": [
  "Philostratus Maior", 
  {
   "Im": "Imagines"
  }, 
  [
   "III d. C.", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "DEM.": [
  "Demetrius", 
  {
   "Aegyp": "de rebus Aegyptiis"
  }, 
  [
   "a. Apio", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "LEONID.": [
  "Leonidas", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "DAPH.": [
  "Daphitas Telmessensis", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "CLEOBULINA": [
  "Cleobulina", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "lyrica", 
   ""
  ]
 ], 
 "LEX. RHET.": [
  "Lexicon Rhetoricum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PERICT.": [
  "Perictione", 
  {}, 
  [
   "III a. C. ?", 
   "", 
   "philosopha pythagorica", 
   ""
  ]
 ], 
 "EUEN. $2": [
  "Euenus Ascalonius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "MAX. RH.": [
  "Maximus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "PIGRES CARIUS": [
  "Pigres Carius", 
  {}, 
  [
   "", 
   "", 
   "elegiacus", 
   ""
  ]
 ], 
 "HELLANIC. GRAMM.": [
  "Hellanicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "TULL. SAB.": [
  "Tullius Sabinus", 
  {}, 
  [
   "I d. C. ?", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "SCIP. AFRIC.": [
  "Scipio Africanus, P. Cornelius", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "APS.": [
  "Apsines", 
  {
   "Rh": "Ars rhetorica", 
   "Contr. Fig": "de controuersiis figuratis"
  }, 
  [
   "III d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "MENODOT. SAM.": [
  "Menodotus Samius", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "STATIUS, PUBLIUS PAPINIUS": [
  "Statius, Publius Papinius", 
  {
   "Silu": "Siluae", 
   "Theb": "Thebais"
  }, 
  [
   "I d. C.", 
   "", 
   "epicus latinus", 
   ""
  ]
 ], 
 "PHILIPP. THEANG.": [
  "Philippus Theangelius", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PHAEDIM.": [
  "Phaedimus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "HYPEROCHUS": [
  "Hyperochus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ARISTONYM. $2": [
  "Aristonymus", 
  {}, 
  [
   "a. 200 d. C.", 
   "", 
   "gnomologus", 
   ""
  ]
 ], 
 "AUDAX": [
  "Audax", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "grammaticus latinus", 
   ""
  ]
 ], 
 "MUSAE.": [
  "Musaeus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "VETT. VAL.": [
  "Vettius Valens", 
  {}, 
  [
   "II d. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "PS. DSC.": [
  "Pseudo Dioscorides", 
  {
   "Lap": "de lapidibus", 
   "Herb. Fem": "de herbis femininis"
  }, 
  [
   "", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "ANACR.": [
  "Anacreo", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "ASCLEP. CYP.": [
  "Asclepiades Cyprius", 
  {}, 
  [
   "imper.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ST. BYZ.": [
  "Stephanus Byzantius", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "lexicographus", 
   ""
  ]
 ], 
 "ASTYD.": [
  "Astydamas", 
  {
   "Eleg": "Fragmentum elegiacum"
  }, 
  [
   "IV a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "TER.": [
  "Terentius Afer, Publius", 
  {
   "Ad": "Adelphoe", 
   "An": "Andria", 
   "Heau": "Heauton timorumenos", 
   "Hec": "Hecyra", 
   "Eu": "Eunuchus", 
   "Ph": "Phormio", 
   "Sch": "Scholia"
  }, 
  [
   "II a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "CANTHAR.": [
  "Cantharus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "VIT. HOM.": [
  "Vitae Homeri", 
  {
   "Vit. Hom. Sud": "Vita Homeri Sudae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASCLEP. TRAGIL.": [
  "Asclepiades Tragilensis", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "THEMISO": [
  "Themiso", 
  {}, 
  [
   "I d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "ANON. ALCH.": [
  "Anonymi Alchemistae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEREN. $2": [
  "Serenus", 
  {}, 
  [
   "", 
   "", 
   "gnomologus", 
   ""
  ]
 ], 
 "ZOPYR. HIST. $2": [
  "Zopyrus Magnes", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AGAM.": [
  "Agamestor Pharsalius", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "NICIAS": [
  "Nicias", 
  {}, 
  [
   "V a. C.", 
   "", 
   "epistolographus", 
   ""
  ]
 ], 
 "CYR. S.": [
  "Cyrillus Scythopolitanus", 
  {
   "V. Io": "Vita Iohannis Hesychastis", 
   "V. Euthym": "Vita Euthymii", 
   "V. Sab": "vita Sabae", 
   "V. Cyriac": "Vita Cyriaci", 
   "V. Thds": "Vita Theodosii", 
   "V. Abr": "Vita Abramii", 
   "V. Thgn": "Vita Theognii"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "HIEROCL.": [
  "Hierocles", 
  {
   "Facet": "Facetiae"
  }, 
  [
   "IV d. C.", 
   "", 
   "facetiarum scriptor", 
   ""
  ]
 ], 
 "CARN.": [
  "Carneades Cyrenaeus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "QUADRATUS, ASINIUS": [
  "Quadratus, Asinius", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PYTHERMUS": [
  "Pythermus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HERMOL. LYR.": [
  "Hermolochus", 
  {}, 
  [
   "IV a. C. ?", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "POMP.": [
  "Pompeius", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "INNOC.": [
  "Innocentius", 
  {
   "Fr. Ep": "Fragmentum epistulae ad Theophilum", 
   "Ep. Chrys": "Cler"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "papa", 
   ""
  ]
 ], 
 "DEMOPH.": [
  "Demophilus", 
  {
   "Sim": "Similitudines", 
   "Sent": "Sententiae"
  }, 
  [
   "", 
   "", 
   "gnomologus", 
   ""
  ]
 ], 
 "HIPPIAS ELEUS": [
  "Hippias Eleus", 
  {
   "Hist": "Fragmenta historica"
  }, 
  [
   "V a. C.", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "SOPHR.": [
  "Sophro", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "PSEUDO EUPOLEMUS": [
  "Pseudo Eupolemus", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "APOLLOD. PONT.": [
  "Apollodorus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "Ponticorum auctor", 
   ""
  ]
 ], 
 "MARC. HIST.": [
  "Marcellus", 
  {}, 
  [
   "imper.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PAULUS": [
  "Paulus", 
  {}, 
  [
   "", 
   "", 
   "grammaticus latinus", 
   ""
  ]
 ], 
 "ARC.": [
  "Pseudo Arcadius", 
  {}, 
  [
   "biz.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "LEONTIUS ET IOHANNES": [
  "Leontius et Iohannes", 
  {
   "Sacr": "Rerum sacrarum liber"
  }, 
  [
   "", 
   "", 
   "scriptores ecclesiastici", 
   ""
  ]
 ], 
 "LINUS": [
  "Linus", 
  {}, 
  [
   "", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "AEN. GAZ.": [
  "Aeneas Gazaeus", 
  {
   "Thphr": "Theophrastus", 
   "Ep": "Epistulae"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "RHETORES GRAECI": [
  "Rhetores Graeci", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICOCH.": [
  "Nicochares", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "THEOGNET.": [
  "Theognetus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "VEN. FORT.": [
  "Venantius Fortunatus", 
  {
   "V. Rad": "Vita S. Radegundae"
  }, 
  [
   "VI/", 
   "", 
   "episcopus", 
   ""
  ]
 ], 
 "XENOCRATES": [
  "Xenocrates", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "RHETOR BRANCATIANUS": [
  "Rhetor anonymus Brancatianus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZELOT.": [
  "Zelotus", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PS. PHOC.": [
  "Pseudo Phocylides", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TRYPHIODORUS": [
  "Tryphiodorus", 
  {}, 
  [
   "", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "PHILIPPUS . . . P.": [
  "Philippus V Macedoniae rex", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ANTIP. HIER.": [
  "Antipater Hierapolitanus", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANYT.": [
  "Anyte", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "epigrammatica", 
   ""
  ]
 ], 
 "CLEOPHO": [
  "Cleopho", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "PARTH. GR.": [
  "Parthenius", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "AST. SOPH.": [
  "Asterius", 
  {
   "Hom": "Homiliae in Ps", 
   "Fr. Theol": "Fragmenta theologica", 
   "Fr. Ps": "Fragmenta in Ps"
  }, 
  [
   "IV d. C.", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "PH. CARP.": [
  "Philo Carpasianus", 
  {
   "Cant": "Enarratio in Ca", 
   "Ep": "Epistula ad Eucarpium"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PHOCAS": [
  "Phocas", 
  {}, 
  [
   "", 
   "", 
   "diaconus", 
   ""
  ]
 ], 
 "TIM. COM.": [
  "Timotheus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "XENOMEDES": [
  "Xenomedes", 
  {}, 
  [
   "V a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PI.": [
  "Pindarus", 
  {
   "Fr": "Fragmenta", 
   "Sch": "Scholia uetera", 
   "I": "Isthmia", 
   "O": "Olympia", 
   "N": "Nemea", 
   "P": "Pythia"
  }, 
  [
   "VI/V a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "HERACLIT. PAR.": [
  "Heraclitus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "paradoxographus", 
   ""
  ]
 ], 
 "NICOSTR. COM.": [
  "Nicostratus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "DIONYS. ARG.": [
  "Dionysius Argiuus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PALL. $3": [
  "Palladius", 
  {
   "in Hp": "in Hippocratem", 
   "Febr": "de febribus", 
   "in Gal. Sect": "Scholia in Galeni De Sectis", 
   "in Hp. Fract": "in librum Hippocratis de fracturis"
  }, 
  [
   "VI d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "BIAS": [
  "Bias", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "Philosophus", 
   ""
  ]
 ], 
 "PANTELEIUS": [
  "Panteleius", 
  {}, 
  [
   "", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "VLPIANUS EMESENUS": [
  "Vlpianus Emesenus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ZEUXIS": [
  "Zeuxis", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PYTHEAS PHIGALIENSIS": [
  "Pytheas Phigaliensis", 
  {
   "Epigr": "Epigramma"
  }, 
  [
   "helen\u00edst.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ZOPYR. TRAG.": [
  "Zopyrus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "APOLL. S.": [
  "Apollinarius Laodicenus Syrus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "BABR.": [
  "Babriana", 
  {
   "Paraphrasis Bodleiana": "Paraphrasis Bodleiana", 
   "Dact": "Fabulae dactylicae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEXANDER MAGNUS": [
  "Alexander Magnus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "rex, epistolographus", 
   ""
  ]
 ], 
 "EUDOR. ACAD.": [
  "Eudorus Academicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GLAUC. NIC.": [
  "Glaucus Nicopolitanus", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "DEM. BITH.": [
  "Demosthenes Bithynus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "POSIDON. $2": [
  "Posidonius Apamensis", 
  {
   "in Ti": "in Timaeum commentarii epitome"
  }, 
  [
   "II/I a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "MANES": [
  "Manes", 
  {
   "Ep. Cond": "Fragmentum epistulae ad Condarum", 
   "Ep. Zeb": "Fragmentum epistulae ad Zebinam", 
   "Ep. Add": "Fragmentum epistulae ad Addam", 
   "Ep. Scyth": "Fragmentum epistulae ad Scythianum"
  }, 
  [
   "III d. C.", 
   "", 
   "haeresiarca", 
   ""
  ]
 ], 
 "CLEOM. LYR.": [
  "Cleomenes", 
  {}, 
  [
   "V a. C. ?", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "TIMAE.": [
  "Timaeus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANAXIMEN.": [
  "Anaximenes", 
  {
   "Ep": "Epistulae"
  }, 
  [
   "VI a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "PARAL. IER.": [
  "Paraleipomena Ieremiou", 
  {}, 
  [
   "II d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEX. LYC.": [
  "Alexander Lycopolitanus", 
  {
   "Man": "contra Manichaei opiniones disputatio"
  }, 
  [
   "IV d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "DEM. SAL.": [
  "Demetrius Salaminius", 
  {}, 
  [
   "a. St. Byz.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "GENNAD.": [
  "Gennadius I Constantinopolitanus", 
  {
   "Fr": "Fragmenta", 
   "Fr. Gen": "Fragmenta in Ge", 
   "Fr. 2Thess": "Fragmenta in 2Ep. Thess", 
   "Fr. Rom": "Fragmenta in Ep. Rom", 
   "Fr. 1, 2Cor": "Fragmenta in 1, 2Ep. Cor", 
   "Fr. Ex": "Fragmentum in Ex", 
   "Fr. Heb": "Fragmenta in Ep. Hebr", 
   "Encycl": "Epistula encyclica", 
   "Fr. Gal": "Fragmenta in Ep. Gal", 
   "Oct": "Fragmenta in Octateuchum", 
   "Fr. Ps. 1": "Fragmenta in Ps. 1"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ARISTOX.": [
  "Aristoxenus", 
  {
   "Fr": "Fragmenta", 
   "Harm": "Harmonica", 
   "Fr. Temp": "Fragmentum de primo tempore", 
   "Fr. Neap": "Fragmenta Neapolitana (olim Parisina)", 
   "Psell. Intr": "Michaelis Pselli introductio in Rhytmica", 
   "Harm. Ox": "Harmonica", 
   "Rhyth": "Elementa rythmica", 
   "Rhyth. Ox": "Rhythmica"
  }, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TRAD. PIL.": [
  "Traditio Pilati", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROCOPIUS GAZAEUS": [
  "Procopius Gazaeus", 
  {
   "Decl": "Declamationes", 
   "Imag": "Ecphrasis imaginis", 
   "Ecphr": "Ecphrasis horologii", 
   "in Eccl": "in Ecclesiasten", 
   "Ep": "Epistulae", 
   "Pan": "Panegyricus in Anastasium imperatorem"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HELIOD. NEOP.": [
  "Heliodorus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "neoplatonicus", 
   ""
  ]
 ], 
 "ACH. TAT. $2": [
  "Achilles Tatius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "scriptor eroticus", 
   ""
  ]
 ], 
 "BACCH. $2": [
  "Bacchius Tanagraeus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "ANON. SUMM.": [
  "Anonymi Summaria ratio geographiae in sphaera intelligendae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLINAR.": [
  "Apollinarius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ARR.": [
  "Arrianus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "ANECD. HELU.": [
  "Anecdota Heluetica", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMETR. MAGN.": [
  "Demetrius Magnesius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EUS. ALEX.": [
  "Eusebius Alexandrinus", 
  {
   "Fr": "Fragmenta", 
   "Serm": "Sermones"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "CRATES IUN.": [
  "Crates Iunior", 
  {}, 
  [
   "V/IV a. C. ?", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "OPHEL.": [
  "Ophelio", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "PROCOP.": [
  "Procopius Caesariensis", 
  {
   "Pers": "de bello Persico", 
   "Goth": "de bello Gothico", 
   "Arc": "Historia arcana", 
   "Aed": "de aedificiis", 
   "Vand": "de bello Vandalico"
  }, 
  [
   "VI d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SCIRAS": [
  "Sciras", 
  {}, 
  [
   "III a. C. ?", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "CAEC. TREB.": [
  "Caecilia Trebulla", 
  {}, 
  [
   "", 
   "", 
   "lyrica", 
   ""
  ]
 ], 
 "ASENETH, CONFESSIO": [
  "Aseneth, Confessio", 
  {}, 
  [
   "", 
   "", 
   "(Asen. A, B)", 
   ""
  ]
 ], 
 "ATH. SCHOLAST.": [
  "Athanasius", 
  {
   "Coll": "Collectio nouellarum constitutionum"
  }, 
  [
   "VI d. C.", 
   "", 
   "scholasticus", 
   ""
  ]
 ], 
 "AMMON. $4": [
  "Ammonius Alexandrinus", 
  {
   "Ps": "Fragmenta in Ps", 
   "Ac": "Fragmenta in Act. Ap", 
   "Mat": "Fragmenta in Eu. Matt", 
   "Dan": "Fragmenta in Da", 
   "Io": "Fragmenta in Eu. Io", 
   "Petr": "Homilia in Ep. Petr"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "AESAR.": [
  "Aesara", 
  {}, 
  [
   "III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "AMMON. $2": [
  "Ammonius", 
  {
   "Impr": "de impropriis", 
   "Diff": "de adfinium vocabulorum differentia"
  }, 
  [
   "I/II d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "ARNOB.": [
  "Arnobius", 
  {
   "Nat": "Aduersus nationes"
  }, 
  [
   "IV d. C.", 
   "", 
   "rhetor africanus", 
   ""
  ]
 ], 
 "CASS. FEL.": [
  "Cassius Felix", 
  {}, 
  [
   "V d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "DALMAT.": [
  "Dalmatius", 
  {
   "Ep. Eph": "Epistulae ad synodum Ephesinam", 
   "Apol": "Apologia"
  }, 
  [
   "V d. C.", 
   "", 
   "archimandrita", 
   ""
  ]
 ], 
 "ET. CASS.": [
  "Etymologicum Cassulanum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HYPAT.": [
  "Hypatius", 
  {
   "Fr. in Os. -Zach": "Fragmenta in XII prophetas", 
   "Fr": "Fragmenta", 
   "Fr. Luc": "Fragmenta in Eu. Luc", 
   "Fr. in Ps. 77": "Fragmentum in Ps. 77"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "CRATEUAS": [
  "Crateuas", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II/I a. C.", 
   "", 
   "botanicus", 
   ""
  ]
 ], 
 "SEU. ANT.": [
  "Seuerus Antiochenus", 
  {
   "Res": "Oratio in resurrectionem", 
   "Fr": "Fragmenta", 
   "Fr. Luc": "Fragmenta in Eu. Luc", 
   "Fr. Ex": "Fragmenta in Exodum e catenis"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ARCH.": [
  "Archias", 
  {}, 
  [
   "I. a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "HERODES ATTICUS": [
  "Herodes Atticus", 
  {
   "Pol": "de republica"
  }, 
  [
   "II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SOPHAENETUS": [
  "Sophaenetus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SYMM.": [
  "Symmachus, Quintus Aurelius", 
  {
   "Ep": "Epistulae"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "epistolographus et rhetor latinus", 
   ""
  ]
 ], 
 "EU. PHIL.": [
  "Euangelium Philippi", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIODORUS CRONUS": [
  "Diodorus Cronus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "EROT.": [
  "Erotianus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "I d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "AGATH. ALCH.": [
  "Agathodaemo", 
  {}, 
  [
   "", 
   "", 
   "alchemista", 
   ""
  ]
 ], 
 "SOZ.": [
  "Sozomenus Salaminius", 
  {}, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PAUSANIAS": [
  "Pausanias", 
  {}, 
  [
   "V a. C.", 
   "", 
   "rex, epistolographus", 
   ""
  ]
 ], 
 "EUC.": [
  "Euclides", 
  {
   "Catoptr": "Catoptrica", 
   "Opt": "Optica", 
   "Fr": "Fragmenta", 
   "Cor": "Corollarium", 
   "Sch": "Scholia", 
   "Elementa": "Elementa", 
   "Dat": "Data", 
   "Phaen": "Phaenomena", 
   "Comm": "Communes Conceptiones", 
   "Def": "Definitiones", 
   "Post": "Postulata", 
   "Sect. Can": "Sectio Canonis"
  }, 
  [
   "III a. C.", 
   "", 
   "geometra", 
   ""
  ]
 ], 
 "CALLISTR. TRAG.": [
  "Callistratus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "MENECR. $2": [
  "Menecrates Smyrnaeus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "CALAN.": [
  "Calanus", 
  {}, 
  [
   "", 
   "", 
   "epistolographus", 
   ""
  ]
 ], 
 "PHERENICUS": [
  "Pherenicus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "ZOPYR. HIST.": [
  "Zopyrus", 
  {
   "Thes": "Theseis et alia"
  }, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SOCR. $2": [
  "Socrates", 
  {
   "Dict": "Dicta Socratis", 
   "Ep": "Socratis et Socraticorum epistulae"
  }, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARM. PAR.": [
  "Marmor Parium", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIUS HIST.": [
  "Dius", 
  {
   "Phoen": "de rebus Phoenicum"
  }, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CASTORIO SOLEUS": [
  "Castorio Soleus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "ATHENIO": [
  "Athenio", 
  {}, 
  [
   "II a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "SOSTRAT.": [
  "Sostratus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SYRUS": [
  "Syrus", 
  {}, 
  [
   "II d. C. ?", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "PTOL. PHIL.": [
  "Ptolemaeus Philopator", 
  {}, 
  [
   "III a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "AUG.": [
  "Augustinus", 
  {
   "Gen. ad Litt": "de Genesi ad litteram", 
   "C. Epist": "contra epistulam quam uocant fundamenti", 
   "C. Faust": "contra Faustum Manichaeum", 
   "Fr": "Fragmenta", 
   "Gest. Pelag": "de gestis Pelagii", 
   "Ciu": "de ciuitate dei", 
   "Serm": "Sermones", 
   "Haer": "de haeresibus ad Quoduultdeum", 
   "Ep": "Epistulae"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "episcopus Hipponensis", 
   ""
  ]
 ], 
 "ARAR.": [
  "Araros", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "ASOKA MAURYA": [
  "Asoka Maurya", 
  {
   "Edict": "Edictum"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMAGORAS": [
  "Timagoras", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ARISTONOUS": [
  "Aristonous", 
  {
   "Ap": "Paean in Apollinem", 
   "Hest": "Hymnus in Hestiam"
  }, 
  [
   "III a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "IO. GAZ.": [
  "Iohannes Gazaeus", 
  {
   "Anacr": "Anacreontea"
  }, 
  [
   "VI d. C.", 
   "", 
   "exegeta", 
   ""
  ]
 ], 
 "OLYMP. ALCH.": [
  "Olympiodorus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "alchemista", 
   ""
  ]
 ], 
 "IULIUS": [
  "Iulius", 
  {}, 
  [
   "imper.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "EUTHYDEMUS ATHENIENSIS": [
  "Euthydemus Atheniensis", 
  {}, 
  [
   "II a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "EUDEM.": [
  "Eudemus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "CERTAMEN": [
  "Certamen Homeri et Hesiodi", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILINN.": [
  "Philinna Thessala", 
  {}, 
  [
   "a. I a. C.", 
   "", 
   "poeta", 
   ""
  ]
 ], 
 "CLEOMENES REX SPARTANORUM": [
  "Cleomenes rex Spartanorum", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HIEROCL. $3": [
  "Hierocles Stoicus", 
  {
   "Fr": "Fragmenta (apud Suidam)", 
   "Exc": "Excerpta (apud Stobaeum)"
  }, 
  [
   "II d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "FR. LEX.": [
  "Fragmenta Lexicorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIEROCL. $2": [
  "Hierocles Platonicus", 
  {
   "Prou": "De prouidentia"
  }, 
  [
   "V d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "PAPIAS HIEROPOLITANUS": [
  "Papias Hieropolitanus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "EUTHYMENES MASSILIENSIS": [
  "Euthymenes Massiliensis", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PHAL.": [
  "Phalaecus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "HEGESAND.": [
  "Hegesander", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AMBR.": [
  "Ambrosius Mediolaniensis", 
  {
   "Tob": "de Tobia", 
   "Hex": "Hexameron", 
   "Fr": "Fragmenta", 
   "Exhort": "Exhortatio", 
   "Ep": "Epistulae"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PH. BYZ.": [
  "Philo Byzantius", 
  {
   "Mir": "de septem miraculis"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "paradoxographus", 
   ""
  ]
 ], 
 "XENIO": [
  "Xenio", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SCRIB. LARG.": [
  "Scribonius Largus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "TULL. GEM.": [
  "Tullius Geminus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "NUMEN.": [
  "Numenius Apamensis", 
  {}, 
  [
   "II d. C.", 
   "", 
   "platonicus", 
   ""
  ]
 ], 
 "OPHTH. FR. PAP.": [
  "De Re Ophthalmica Fragmenta Papyracea", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EMP.": [
  "Empedocles", 
  {
   "Sphaer": "Sphaera", 
   "Fr. Pap": "Fragmenta Papyracea"
  }, 
  [
   "V a. C.", 
   "", 
   "poeta philosophus", 
   ""
  ]
 ], 
 "SIMON. HIST.": [
  "Simonides", 
  {}, 
  [
   "V a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "METH.": [
  "Methodius Olympius", 
  {
   "Fr": "in Iob", 
   "Creat": "de creatis", 
   "Res": "de resurrectione mortuorum", 
   "Lepr": "de lepra", 
   "Fr. Mart": "Fragmenta ex sermone de martyribus", 
   "Symp": "Symposium", 
   "Palm": "Sermo in ramos palmarum", 
   "Gen": "Fragmentum in Ge", 
   "Arbitr": "de libero arbitrio", 
   "Porph": "contra Porphyrium de cruce", 
   "Sym. et Ann": "Sermo de Symeone et Anna"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ARIST.": [
  "Aristoteles", 
  {
   "Pr": "Problemata", 
   "Aud": "de audibilibus", 
   "Top": "Topica", 
   "Long": "de longaeuitate", 
   "Ep. Fr": "Epistularum Fragmenta", 
   "Sens": "de sensu", 
   "Ph": "Physica", 
   "Mir": "Mirabilia", 
   "Rh": "Rhetorica", 
   "Po": "Poetica", 
   "Spir": "de Spiritu", 
   "Fr": "Fragmenta", 
   "Phgn": "Physiognomonica", 
   "Mem": "de memoria", 
   "LI": "de lineis insecabilibus", 
   "Oec": "Oeconomica", 
   "Iuu": "de iuuentute et senectute", 
   "Cael": "de caelo", 
   "Mech": "Mechanica", 
   "APr": "Analytica priora", 
   "Ath": "Atheniensium respublica", 
   "Cat": "Categoriae", 
   "Mu": "de mundo", 
   "Metaph": "Metaphysica", 
   "APo": "Analytica posteriora", 
   "Fr. Lyr": "Fragmenta lyrica", 
   "Diu": "Diuisiones aristoteleae", 
   "Col": "de coloribus", 
   "Vent": "de uentis", 
   "Sch": "Scholia", 
   "Int": "de interpretatione", 
   "Xen": "de Melisso Xenophane Gorgia", 
   "Diu. Som": "de diuinatione per somnum", 
   "Insomn": "de insomniis", 
   "Pol": "Politica", 
   "Mete": "Meteorologica", 
   "Somn. Vig": "de somno et uigilia", 
   "de An": "de anima", 
   "Ep": "Epistulae", 
   "SE": "Sophistici elenchi"
  }, 
  [
   "IV a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "MEMN.": [
  "Memno", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PETOS.": [
  "Petosiris", 
  {}, 
  [
   "", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "CLEANTH.": [
  "Cleanthes", 
  {
   "Fr. Poet": "Fragmenta poetica"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "stoicus", 
   ""
  ]
 ], 
 "NICIAS GRAMM.": [
  "Nicias", 
  {}, 
  [
   "I a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "GLAUC.": [
  "Glaucus", 
  {
   "Pont": "Locorum sitorum in sinistra Ponti descriptio", 
   "Ar": "Archaeologia arabica."
  }, 
  [
   "a. II/", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "LEPIDUS": [
  "Lepidus", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "BASSIAN.": [
  "Bassianus Ephesinus", 
  {
   "Suppl": "Supplicatio"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "IUL. SEU. RH.": [
  "Iulius Seuerianus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "CANDIDUS": [
  "Candidus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "NEOPTOL.": [
  "Neoptolemus Parianus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "epicus et grammaticus", 
   ""
  ]
 ], 
 "MELAMP.": [
  "Melampus", 
  {
   "Naeu": "diuinatio ex naeuis corporis", 
   "Lun": "Lunarium"
  }, 
  [
   "", 
   "", 
   "scriptor de diuinatione", 
   ""
  ]
 ], 
 "HDT.": [
  "Herodotus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ORATIO MANASSIS": [
  "Oratio Manassis", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "A.": [
  "Aeschylus", 
  {
   "A": "Agamemnon", 
   "Pr": "Prometheus uinctus", 
   "Fr": "Fragmenta", 
   "Ch": "Choephori", 
   "Sch": "Scholia", 
   "Epigr": "Epigrammata", 
   "Eleg": "Fragmenta elegiaca", 
   "Supp": "Supplices", 
   "Pers": "Persae", 
   "Th": "Septem contra Thebas", 
   "Eu": "Eumenides"
  }, 
  [
   "VI/V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "NICOMEDES": [
  "Nicomedes", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AMPH. HIST.": [
  "Amphicrates", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "TYN.": [
  "Tynnichus", 
  {}, 
  [
   "VI/V a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "SOSIPH.": [
  "Sosiphanes Syracusanus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "DEI(L)OCH.": [
  "Dei(l)ochus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AB": [
  "Anecdota Graeca", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MACAR.": [
  "Macarius", 
  {}, 
  [
   "XV d. C.", 
   "", 
   "paroemiographus", 
   ""
  ]
 ], 
 "ALEX. THESS.": [
  "Alexander Thessalonicensis", 
  {
   "Ep. Ath": "Epistula ad Athanasium", 
   "Ep. Dion": "Epistula ad Dionysium comitem"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "CERC.": [
  "Cercidas", 
  {}, 
  [
   "III a. C.", 
   "", 
   "iambographus", 
   ""
  ]
 ], 
 "LEX. GR. NAZ.": [
  "Lexica in S. Gregorii Nazianzeni Carmina", 
  {
   "Cas": "Lexicon Casinense", 
   "Vers": "Lexicon ordine uersuum", 
   "Lexicon ordine alphabetico": "Lexicon ordine alphabetico"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERM. IAMB.": [
  "Hermias", 
  {}, 
  [
   "III a. C.", 
   "", 
   "iambographus", 
   ""
  ]
 ], 
 "AL": [
  "Anthologia Latina", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "T.": [
  "Testamenta XII patriarchum", 
  {
   "Reub": "Testamentum Reuben", 
   "Aser": "Testamentum Aser", 
   "Dan": "Testamentum Dan", 
   "Ios": "Testamentum Iosephi", 
   "Iud": "Testamentum Iudae", 
   "Sym": "Testamentum Symeonis", 
   "Zab": "Testamentum Zabulon", 
   "Isach": "Testamentum Isachar", 
   "Nephth": "Testamentum Nephthalim", 
   "Beni": "Testamentum Beniamin", 
   "Gad": "Testamentum Gad", 
   "Leu": "Testamentum Leui"
  }, 
  [
   "II a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLON. ACHAR.": [
  "Apollonius Acharniensis", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PETR. TRAI.": [
  "Petrus Traianopolitanus", 
  {
   "Poenit": "Libellus poenitentiae"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "IO. III H.": [
  "Iohannes III Hierosolymitanus", 
  {
   "Ep": "Epistula ad Iohannem Constantinopolitanum"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "FAUST.": [
  "Faustus Byzantinus", 
  {
   "Ep": "Epistula ad Petrum Fullonem"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "FRONT.": [
  "Frontinus, Sextus Iulius", 
  {
   "Aq": "de aquaeductu urbis Romae", 
   "Strat": "Strategemata"
  }, 
  [
   "I d. C.", 
   "", 
   "scriptor latinus", 
   ""
  ]
 ], 
 "EUNIC.": [
  "Eunicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "LICYMN.": [
  "Licymnius", 
  {}, 
  [
   "V a. C.", 
   "", 
   "rhetor et lyricus", 
   ""
  ]
 ], 
 "EUST.": [
  "Eustathius Thessalonicensis", 
  {
   "in D. P": "Commentarii in Dionysium Periegetam", 
   "Pind": "Prooemium commentariorum Pindaricorum", 
   "Op": "Opuscula"
  }, 
  [
   "XII d. C.", 
   "", 
   "episcopus", 
   ""
  ]
 ], 
 "STOB.": [
  "Stobaeus, Iohannes", 
  {
   "App": "Appendix", 
   "Sch": "Scholia"
  }, 
  [
   "V d. C.", 
   "", 
   "anthologus", 
   ""
  ]
 ], 
 "TUDICIUS GALLUS": [
  "Tudicius Gallus", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "CLAUD. CASIL.": [
  "Claudius Casilo", 
  {}, 
  [
   "", 
   "", 
   "lexicographus", 
   ""
  ]
 ], 
 "MNESITH. ATH.": [
  "Mnesitheus Atheniensis", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "DAMIPPUS": [
  "Damippus", 
  {}, 
  [
   "III a. C. ?", 
   "", 
   "pythagoricus", 
   ""
  ]
 ], 
 "DIDASC. PATR.": [
  "Didascalia CCCXVIII Patrum Nicaenorum", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CROBYL.": [
  "Crobylus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "NICOM. ATHEN.": [
  "Nicomachus Atheniensis", 
  {}, 
  [
   "V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "NEILUS": [
  "Neilus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ATHENOD.": [
  "Athenodorus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "III d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "AXIONIC.": [
  "Axionicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "PHOT.": [
  "Photius", 
  {
   "Bibl": "Bibliotheca"
  }, 
  [
   "IX d. C.", 
   "", 
   "lexicographus", 
   ""
  ]
 ], 
 "TIM. IV ALEX.": [
  "Timotheus IV Alexandrinus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "TIMESITH.": [
  "Timesitheus", 
  {}, 
  [
   "", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "ALEXAND. COM.": [
  "Alexander", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "CALLISTH. OLYNTH.": [
  "Callisthenes Olynthius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AESCHRIO HIST.": [
  "Aeschrio Mytilenius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "LACT.": [
  "Lactantius", 
  {
   "Inst": "Diuinae institutiones", 
   "Epit": "Epitome diuinarum institutionum"
  }, 
  [
   "IV d. C.", 
   "", 
   "rhetor Africanus", 
   ""
  ]
 ], 
 "PH. MET.": [
  "Philo Metapontius", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "poeta", 
   ""
  ]
 ], 
 "SYR. AGR.": [
  "Syriae Agrimensor", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "anonymus", 
   ""
  ]
 ], 
 "PERS. STOIC.": [
  "Persaeus Citieus", 
  {
   "Fr. Hist": "Fragmenta historica"
  }, 
  [
   "III a. C.", 
   "", 
   "stoicus", 
   ""
  ]
 ], 
 "IO. ALCH.": [
  "Iohannes", 
  {}, 
  [
   "", 
   "", 
   "alchemista", 
   ""
  ]
 ], 
 "CLEOSTRATUS": [
  "Cleostratus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "MISC. TIR.": [
  "Miscellanea Tironiana", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "BARB.": [
  "Barbucallus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "MALACUS": [
  "Malacus", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ZONAR.": [
  "Pseudo Zonaras", 
  {}, 
  [
   "XIII d. C.", 
   "", 
   "lexicographus", 
   ""
  ]
 ], 
 "HERMOD.": [
  "Hermodorus", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "SERAPIO $2": [
  "Serapio", 
  {
   "Off. Med": "carmen de officiis medici moralibus", 
   "Fr": "Fragmentum tragicum"
  }, 
  [
   "I d. C.", 
   "", 
   "poeta medicus tragicus", 
   ""
  ]
 ], 
 "POLYIDUS": [
  "Polyidus", 
  {}, 
  [
   "", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "SYMEO MESOPOTAMIUS": [
  "Symeo Mesopotamius", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENAECHM.": [
  "Menaechmus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EUPREP.": [
  "Euprepius et Cyrillus Thraces", 
  {
   "Libell": "Libellus"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptores ecclesiastici", 
   ""
  ]
 ], 
 "CASS.": [
  "Cassius", 
  {
   "Pr": "Problemata"
  }, 
  [
   "III d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "DIEUCHID.": [
  "Dieuchidas", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "STRATO COM.": [
  "Strato", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "BRONTINUS": [
  "Brontinus", 
  {}, 
  [
   "III/II a. C. ?", 
   "", 
   "pythagoricus", 
   ""
  ]
 ], 
 "CHARO LAMPS.": [
  "Charo Lampsacenus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PS. AGENN.": [
  "Pseudo Agennius Urbicus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "gromaticus", 
   ""
  ]
 ], 
 "EUDEMUS": [
  "Eudemus", 
  {}, 
  [
   "", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "ARCTINUS": [
  "Arctinus", 
  {}, 
  [
   "VIII a. C. ?", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "ZEUXIS MAIOR TARENTINUS": [
  "Zeuxis Maior Tarentinus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "NAUSICR.": [
  "Nausicrates", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "MAN.": [
  "Manetho", 
  {
   "Hyp": "Hypotheses"
  }, 
  [
   "IV d. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "CHOERIL.": [
  "Choerilus Samius", 
  {}, 
  [
   "V a. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "SCAEN. ROMAN.": [
  "Scaenicae Romanorum Poesis Fragmenta", 
  {
   "Trag": "Tragoediae", 
   "Mim": "Mimi", 
   "Prae": "Fabulae praetextae", 
   "At": "Fabulae atellanae", 
   "Tog": "Fabulae togatae", 
   "Pall": "Fabulae palliatae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LAO": [
  "Lao", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "NICOM. TRAG.": [
  "Nicomachus Alexandrinus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "MAGNUS": [
  "Magnus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "MENAS CONSTANTINOPOLITANUS": [
  "Menas Constantinopolitanus", 
  {
   "Ep. Petr": "Epistula ad Petrum Hierosolymitanum", 
   "Ep. Anth": "Epistula ad Anthimum"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "SCH. IN LIB. MED. COD. AUGUST.": [
  "Scholia in librum medicum ex codice Augustano", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUTHER.": [
  "Eutherius Tyanensis", 
  {
   "Fr": "Fragmenta", 
   "Confut": "Confutationes"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "HIPPOSTRATUS": [
  "Hippostratus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "VITA ADAM ET EUAE": [
  "Vita Adam et Euae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "BASIL. $2": [
  "Basilius Caesariensis", 
  {
   "Spir": "De Spiritu sancto", 
   "H. Myst": "Historia mystagogica", 
   "Eunom": "Aduersus Eunomium libri tres", 
   "Gent": "de legendis gentilium libris", 
   "Fr": "Fragmenta", 
   "Hex": "Homiliae in Hexaemeron", 
   "Exp. Fid. Nic": "Expositio fidei Nicaenae", 
   "Poenit. Can": "Canones poenitentiales", 
   "Inc": "de incarnatione", 
   "Ep": "Epistulae", 
   "Bapt": "de baptismo"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PS. ASCON.": [
  "Pseudo Asconius", 
  {
   "in Verr": "in Verres"
  }, 
  [
   "I d. C.", 
   "", 
   "scholiasta", 
   ""
  ]
 ], 
 "VETUS LATINA": [
  "Vetus Latina", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MELA, POMPONIUS": [
  "Mela, Pomponius", 
  {}, 
  [
   "I d. C.", 
   "", 
   "geographus latinus", 
   ""
  ]
 ], 
 "ISID. TRAG.": [
  "Isidorus", 
  {}, 
  [
   "", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "BASILIDES": [
  "Basilides", 
  {}, 
  [
   "II d. C.", 
   "", 
   "gnosticus", 
   ""
  ]
 ], 
 "AMMON. AEG.": [
  "Ammonius Aegyptius", 
  {
   "Ep": "Epistulae de Sanctis Pachomio et Theodoro"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "DIOD. ATH.": [
  "Diodorus Atheniensis", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "periegeta", 
   ""
  ]
 ], 
 "APP. PROU.": [
  "Appendix prouerbiorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLL. CHAER.": [
  "Apollonius Chaeris", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEX. MYND.": [
  "Alexander Myndius", 
  {}, 
  [
   "I d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HIM.": [
  "Himerius", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV d. C.", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "PROMATHIO": [
  "Promathio", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANTISTH.": [
  "Antisthenes", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "philosophus et rhetor", 
   ""
  ]
 ], 
 "DIONYS. TRAG.": [
  "Dionysius Syracusius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "LYSISTRATUS ATHENIENSIS": [
  "Lysistratus Atheniensis", 
  {}, 
  [
   "V a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "CHERSIAS": [
  "Chersias", 
  {}, 
  [
   "", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "LAEU.": [
  "Laeuius", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "poeta latinus", 
   ""
  ]
 ], 
 "NIC. MAL.": [
  "Nicias Maleotes", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CRATES": [
  "Crates", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "MATRES THEBANUS": [
  "Matres Thebanus", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DEMARATUS": [
  "Demaratus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MELANTH. TRAG.": [
  "Melanthius Rhodius", 
  {}, 
  [
   "II a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "SOPHON.": [
  "Sophonias", 
  {
   "in de An": "in libros Aristotelis de Anima paraphrasis"
  }, 
  [
   "XIII/", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "FRONTO, M. CORNELIUS": [
  "Fronto, M. Cornelius", 
  {
   "Ep": "Epistula"
  }, 
  [
   "II d. C.", 
   "", 
   "scriptor latinus", 
   ""
  ]
 ], 
 "OENOPIDES": [
  "Oenopides", 
  {}, 
  [
   "V a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "HYMN. IS.": [
  "Hymni ad Isim", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLUS": [
  "Polus", 
  {}, 
  [
   "", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "APP. ANTH.": [
  "Appendix noua epigrammatum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PET. AR.": [
  "Petitiones Arianorum", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CYR. H.": [
  "Cyrillus Hierosolymitanus", 
  {
   "Fr": "Fragmenta", 
   "Hom": "Homilia in paralyticum", 
   "Myst": "Mystagogiae", 
   "Ep. Const": "Epistula ad Constantium", 
   "Catech": "Catecheses ad illuminandos", 
   "Procatech": "Procatechesis", 
   "Ep. Iul": "Epistula ad Iulium papam", 
   "Occurs": "In occursum domini"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "SCAMO": [
  "Scamo", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "COD. IUST.": [
  "Codex Iustinianus", 
  {}, 
  [
   "IV/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GAETULICUS II": [
  "Gaetulicus II", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "LEX. HEROD.": [
  "Lexicon Herodoteum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DAM. PAPA": [
  "Damasus", 
  {
   "Ep. Orient": "Epistula ad episcopos orientales", 
   "Ep. Illyr": "Epistula ad Illyricos", 
   "Anath": "Anathemata"
  }, 
  [
   "IV d. C.", 
   "", 
   "papa", 
   ""
  ]
 ], 
 "ASCLEP.": [
  "Asclepiades", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ARISTOMEN.": [
  "Aristomenes", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "PALCH.": [
  "Palchus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "PHORONIS": [
  "Phoronis", 
  {}, 
  [
   "VII/VI a. C.", 
   "", 
   "poema epicum", 
   ""
  ]
 ], 
 "ANDROT.": [
  "Androtio", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "OROS.": [
  "Orosius Paulus", 
  {
   "Hist": "Historiarum adversus Paganos libri septem", 
   "Apol": "Liber apologeticus adversus Pelagianos", 
   "Comm": "Commonitorium de errore Priscillianistarum"
  }, 
  [
   "V d. C.", 
   "", 
   "presbyter Hispanus", 
   ""
  ]
 ], 
 "PELAG. ALCH.": [
  "Pelagius", 
  {}, 
  [
   "III d. C.", 
   "", 
   "alchemista", 
   ""
  ]
 ], 
 "HES.": [
  "Hesiodus", 
  {
   "Fr": "Fragmenta", 
   "Sch": "Scholia", 
   "Fr. Sel": "Fragmenta selecta", 
   "Th": "Theogonia", 
   "Sc": "Scutum", 
   "Op": "Opera et dies"
  }, 
  [
   "a. VI a. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "DEMO HOM.": [
  "Demo", 
  {}, 
  [
   "V d. C.", 
   "", 
   "homerica", 
   ""
  ]
 ], 
 "DEMEAS": [
  "Demeas", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ECCELUS LUCANUS": [
  "Eccelus Lucanus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "BIO(T)TUS": [
  "Bio(t)tus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "tragicus et comicus", 
   ""
  ]
 ], 
 "ANON. MIL.": [
  "Anonymus Milesius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ISID. CHAR.": [
  "Isidorus Characenus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "geographus", 
   ""
  ]
 ], 
 "CALP.": [
  "Calpurnius Siculus", 
  {
   "B": "Bucolica", 
   "Pis": "de laude Pisonis"
  }, 
  [
   "", 
   "", 
   "bucolicus", 
   ""
  ]
 ], 
 "PHANOD.": [
  "Phanodemus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AMMONAS": [
  "Ammonas", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DELLIUS, QUINTUS": [
  "Dellius, Quintus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "THEOC. CHIUS": [
  "Theocritus Chius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "sophista et elegiacus", 
   ""
  ]
 ], 
 "NEST.": [
  "Nestorius Constantinopolitanus", 
  {
   "Fr": "Fragmenta", 
   "Ep. Ant": "Epistula ad Antiochum praefectum", 
   "Ep. Thds": "Epistula ad Theodosium", 
   "Ep. Cyr": "Epistulae ad Cyrillum", 
   "Hom. Tent": "Homiliae in tentationes", 
   "Hom. in Heb": "Homilia in Ep. Heb"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "THEODORID.": [
  "Theodoridas", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "CRATIN.": [
  "Cratinus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "PECT. EPITAPH.": [
  "Pectorii epitaphium", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TRYPHO": [
  "Trypho", 
  {}, 
  [
   "I d. C. ?", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ANTYLL.": [
  "Antyllus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "THEOSEBEIA": [
  "Theosebeia", 
  {}, 
  [
   "V d. C.", 
   "", 
   "epigrammatica", 
   ""
  ]
 ], 
 "TELEGON.": [
  "Telegonia", 
  {}, 
  [
   "VI a. C. ?", 
   "", 
   "poema epicum", 
   ""
  ]
 ], 
 "THESPIS": [
  "Thespis", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "EU. AEG.": [
  "Euangelium Aegyptium", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOC. EN.": [
  "Apocalypsis Enoch", 
  {
   "Sync": "Syncelli epitome"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CYRUS, FLAUIUS": [
  "Cyrus, Flauius", 
  {}, 
  [
   "V d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "NEPUALIUS": [
  "Nepualius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "THEOPHIL. $2": [
  "Theophilus", 
  {
   "Sic": "Descriptio Siciliae"
  }, 
  [
   "II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "TIM. MET.": [
  "Timotheus Metapontinus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "SATYR. $2": [
  "Satyrus", 
  {
   "Vit. Eur": "Vita Euripidis", 
   "Fr. Hist": "Fragmenta historica"
  }, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SATYR. $3": [
  "Satyrus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "SUET.": [
  "Suetonius", 
  {
   "Blasph": "de blasphemiis", 
   "Vesp": "Vespasianus", 
   "Otho": "Otho", 
   "Iul": "Iulius Caesar", 
   "Aug": "Augustus", 
   "Dom": "Domitianus", 
   "Vit": "Vitelius", 
   "Galba": "Galba", 
   "Lud": "de ludis Graecis", 
   "Nero": "Nero", 
   "Cal": "Caligula", 
   "Gram. Rhet": "de grammatica et rhetorica", 
   "Claud": "Claudius", 
   "Tib": "Tiberius"
  }, 
  [
   "II d. C.", 
   "", 
   "historicus et grammaticus latinus", 
   ""
  ]
 ], 
 "SODAMUS": [
  "Sodamus", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "AESCHIN. SOCR.": [
  "Aeschines Socraticus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "CARM. POP.": [
  "Carmina Popularia", 
  {}, 
  [
   "arc.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. AULOD.": [
  "Anonymi Aulodia", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOCALYPSIS SOPHONIAE": [
  "Apocalypsis Sophoniae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTID. $3": [
  "Aristides", 
  {
   "Pro": "Prolegomena", 
   "Rh": "Libri rhetorici", 
   "Or": "Orationes", 
   "Sch": "Scholia"
  }, 
  [
   "II d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "ARISTID. $2": [
  "Aristides", 
  {
   "Cnid": "de Cnido"
  }, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "TELEST.": [
  "Telestes", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "MARSYAS PELLAEUS": [
  "Marsyas Pellaeus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historici", 
   ""
  ]
 ], 
 "TYRT.": [
  "Tyrtaeus", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "LEX. SABB.": [
  "Lexicon Sabbaiticum", 
  {}, 
  [
   "XIV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NESSAS": [
  "Nessas", 
  {}, 
  [
   "V a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "ASP.": [
  "Aspasius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "MENECRATES SAMIUS": [
  "Menecrates Samius", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "HARMOD.": [
  "Harmodius", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EPICT.": [
  "Epictetus", 
  {
   "Fr": "Fragmenta", 
   "Gnom": "Gnomologium", 
   "Ench": "Enchiridion", 
   "Sent": "Gnom. D (Sententiae codicis Vaticani)"
  }, 
  [
   "I/II d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "EUGEN.": [
  "Eugenius", 
  {
   "Exp. Fid": "Expositio fidei"
  }, 
  [
   "IV d. C.", 
   "", 
   "diaconus", 
   ""
  ]
 ], 
 "GAET.": [
  "Gaetulicus, Cn. Lentulus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "MOLPIS": [
  "Molpis", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AGATHO": [
  "Agatho", 
  {
   "Pont": "Ponti periplus"
  }, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MELISSEUS": [
  "Melisseus", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DIONYS. SCYT.": [
  "Dionysius Scytobrachio", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PARMENISCUS": [
  "Parmeniscus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "PS. DOSITH.": [
  "Pseudo Dositheus", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EU. FR. PAP.": [
  "Euangeliorum incertorum Fragmenta Papyracea", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HOM.": [
  "Homerus", 
  {
   "Fr": "Fragmenta", 
   "Od": "Odyssea", 
   "Il": "Ilias", 
   "Sch": "Scholia"
  }, 
  [
   "VIII a. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "CLEARCH. COM.": [
  "Clearchus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "ASCLEP. IUN.": [
  "Asclepiades Iunior", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "BASIL.": [
  "Basilis", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ESAIAS": [
  "Esaias", 
  {
   "Fr": "Fragmenta", 
   "Cap. spir": "Capitula de exercitatione spirituali"
  }, 
  [
   "V d. C.", 
   "", 
   "abbas", 
   ""
  ]
 ], 
 "ECHEMENES": [
  "Echemenes", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "LIBER IANN.": [
  "Liber Iannes et Iambre", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAXIMAND. HIST.": [
  "Anaximander", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HERODICUS": [
  "Herodicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "THEOPOMP. COLOPH.": [
  "Theopompus Colophonius", 
  {}, 
  [
   "", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "CLITARCH.": [
  "Clitarchus", 
  {
   "Sent": "Sententiae"
  }, 
  [
   "", 
   "", 
   "gnomologus", 
   ""
  ]
 ], 
 "PANARCES": [
  "Panarces", 
  {}, 
  [
   "V a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "ANONYMUS $2": [
  "Anonymus", 
  {
   "Fig": "de figuris"
  }, 
  [
   "", 
   "", 
   "(Anon. )", 
   ""
  ]
 ], 
 "APOC. SEDR.": [
  "Apocalypsis Sedrach", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMAGORAS MINOR": [
  "Hermagoras Minor", 
  {}, 
  [
   "", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "PHAENN.": [
  "Phaennus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "HSCH.": [
  "Hesychius", 
  {}, 
  [
   "V d. C. ?", 
   "", 
   "lexicographus", 
   ""
  ]
 ], 
 "PH. $2": [
  "Philo Iudaeus", 
  {
   "Fr": "Fragmenta", 
   "Fr. Gen": "Quaestiones in Ge", 
   "Prou": "de prouidentia", 
   "Hypoth": "Hypothetica", 
   "Fr. Ex": "Fragmenta in Ex", 
   "Qu. Gen": "Quaestiones in Ge", 
   "Fr. D": "Fragmenta de Deo"
  }, 
  [
   "I a. C. /", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "CLITODEMUS": [
  "Clitodemus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHIG.": [
  "Archigenes", 
  {}, 
  [
   "II d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "DSC. LAT.": [
  "Dioscorides Longobardus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AUTOCR. HIST.": [
  "Autocrates", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MART. IGN.": [
  "Martyrium Ignatii", 
  {
   "Ant": "Martyrium Ignatii Antiochenum", 
   "Rom": "Martyrium Ignatii Romanum"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOTIMUS": [
  "Diotimus", 
  {}, 
  [
   "", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "PS. CALLISTH.": [
  "Pseudo Callisthenes", 
  {}, 
  [
   "d. II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "LEON.": [
  "Leonidas", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ARISTIAS": [
  "Aristias", 
  {}, 
  [
   "V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "ECHEM.": [
  "Echembrotus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "MART. CAP.": [
  "Martianus Capella", 
  {}, 
  [
   "V d. C.", 
   "", 
   "grammaticus latinus", 
   ""
  ]
 ], 
 "MARCIAN.": [
  "Marcianus", 
  {
   "Peripl": "Periplus Maris Exteri", 
   "Pro\u00ebm": "Pro\u00ebmium Peripli Menippei", 
   "Epit. Menipp": "Peripli Menippei epitome", 
   "Epit": "Artemidori epitome"
  }, 
  [
   "III/V d. C.", 
   "", 
   "geographus", 
   ""
  ]
 ], 
 "PROCL. CP": [
  "Proclus Constantinopolitanus", 
  {
   "Pasch": "in sanctum Pascha", 
   "Res": "in resurrectionem", 
   "Hom": "Homiliae", 
   "Caed. Inn": "de caede innocentium et de uidua", 
   "Fr. an": "Fragmenta anonyma", 
   "Laud. Mar": "laudatio sanctae dei genitricis Mariae", 
   "Bapt": "Mystagogia in baptisma", 
   "Fr": "Fragmenta", 
   "Inc. Dom": "de incarnatione domini", 
   "Cruc": "in crucifixionem", 
   "Nat. Dom": "in natalem diem domini", 
   "Tract": "Tractatus de traditione diuinae missae", 
   "Theoph": "in theophania", 
   "Annunt": "Oratio in Deiparae annuntiationem", 
   "Sanct": "encomium in omnes sanctos", 
   "Or. Laud. M": "oratio de laudibus Mariae", 
   "Thom": "in sanctum apostolum Thomam", 
   "Or": "Orationes", 
   "Arm": "Tomus ad Armenios", 
   "Circum": "de circumcisione domini", 
   "Virg": "in s. uirginem ac dei genitricem", 
   "Ascens": "de ascensione domini", 
   "Ep": "Epistula", 
   "Inc": "de incarnatione"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "EUAGR. PONT.": [
  "Euagrius Ponticus", 
  {
   "Fr": "Fragmenta", 
   "Schol": "Scholion in pipi", 
   "Gnost": "Gnosticus", 
   "Cap": "Capitula", 
   "Cap. Pract": "Capitula Practica uel monachus", 
   "Or": "de oratione", 
   "Cogit": "de cogitationibus", 
   "Sent. Virg": "Sententiae ad uirgines", 
   "Rer. Mon": "Rerum monachalium rationes", 
   "Schol. Pr": "Scholia in Prouerbia", 
   "Eulog": "Tractatus ad Eulogium (false Nilo adscriptus)", 
   "Schol. Ec": "Scholia in Ecclesiasten", 
   "Ep": "Epistula", 
   "Sent": "Sententiae", 
   "Sent. Mon": "Sententiae ad monachos"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "TRAG. ADESP.": [
  "Tragica Adespota", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ISID. AEG.": [
  "Isidorus Aegeates", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "THEMIST.": [
  "Themistocles", 
  {
   "Ep": "Epistulae"
  }, 
  [
   "a. C.", 
   "", 
   "epistolographus", 
   ""
  ]
 ], 
 "AESCHIN.": [
  "Aeschines", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "LYNC.": [
  "Lynceus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "MANIL.": [
  "Manilius, M.", 
  {}, 
  [
   "I d. C.", 
   "", 
   "poeta latinus", 
   ""
  ]
 ], 
 "AMPH. SID.": [
  "Amphilochius Sidensis", 
  {
   "Ep": "Epistulae fragmentum"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ARISTODEM. MYTH.": [
  "Aristodemus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "mythographus historicus", 
   ""
  ]
 ], 
 "DIOGENES": [
  "Diogenes", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "episcopus", 
   ""
  ]
 ], 
 "DION. CORIN.": [
  "Dionysius Corinthius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "EUN.": [
  "Eunapius", 
  {
   "Hist": "Fragmenta historica"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ASCL. $2": [
  "Asclepius", 
  {
   "in Metaph": "in Aristotelis Metaphysicorum libros A-Z commentaria", 
   "in Introd": "Commentaria in Nicomachi Geraseni Pythagorei Introductionem Arithmeticam"
  }, 
  [
   "VI d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "EU. PETR.": [
  "Euangelium Petri", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LAETUS": [
  "Laetus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CTESIPPUS": [
  "Ctesippus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PROP.": [
  "Propertius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "poeta latinus", 
   ""
  ]
 ], 
 "AMYNTAS": [
  "Amyntas", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "NICANOR HERMIUS": [
  "Nicanor Hermius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PALAEPH.": [
  "Palaephatus", 
  {}, 
  [
   "IV a. C. ?", 
   "", 
   "paradoxographus", 
   ""
  ]
 ], 
 "TH. CYCL.": [
  "Theogonia Cyclica", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMIPPUS BERYTENSIS": [
  "Hermippus Berytensis", 
  {}, 
  [
   "", 
   "", 
   "historicus (Hermipp. Beryt. )", 
   ""
  ]
 ], 
 "LEO AL.": [
  "Leo Alabandeus", 
  {}, 
  [
   "II a. C. /", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ADRIANUS": [
  "Adrianus", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ZOS. AB.": [
  "Zosimus", 
  {
   "All": "Alloquia"
  }, 
  [
   "VI d. C.", 
   "", 
   "abbas", 
   ""
  ]
 ], 
 "ANTIOCHUS": [
  "Antiochus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "COLLUTH.": [
  "Colluthus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "AMPH.": [
  "Amphilochius Iconiensis", 
  {
   "Fr": "Fragmenta", 
   "Poenit": "Homilia de poenitentia", 
   "Fr. Sp": "Fragmenta spuria", 
   "Non. Desp": "Homilia de non desperando", 
   "Exerc": "aduersus exercitationem falsam = contra haereticos", 
   "Circ": "Homilia in circumcisionem", 
   "Seleuc": "Iambi ad Seleucum", 
   "V. Bas": "Vita Basilii Caesariensis", 
   "Or. in Res": "Oratio in resurrectionem domini", 
   "Ep. Syn": "Epistula synodalis", 
   "Or": "Orationes 1-9", 
   "Mesopent": "Oratio in mesopentecosten"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ORAC. FIG.": [
  "Oraculum Figuli", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRAXILL.": [
  "Praxilla", 
  {}, 
  [
   "V a. C.", 
   "", 
   "lyrica", 
   ""
  ]
 ], 
 "PERITAS": [
  "Peritas", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "AGATH.": [
  "Agathias", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "historicus atque epigrammaticus", 
   ""
  ]
 ], 
 "PRAEC. SALUBR.": [
  "Praecepta Salubria", 
  {}, 
  [
   "imper.", 
   "", 
   "poema medicum", 
   ""
  ]
 ], 
 "ANAPHORARUM FRAGMENTA PAPYRACEA": [
  "Anaphorarum Fragmenta Papyracea", 
  {}, 
  [
   "", 
   "", 
   "(Anaph. Fr. Pap. )", 
   ""
  ]
 ], 
 "PARRHAS.": [
  "Parrhasius", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "elegiacus et pictor", 
   ""
  ]
 ], 
 "ET. SYM.": [
  "Etymologicum Symeonis", 
  {}, 
  [
   "XII d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYCLIT.": [
  "Polyclitus Sicyonius", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "ORAC. SIB.": [
  "Oracula Sibyllina", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VRAN.": [
  "Vranius", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DIOG.": [
  "Diogenes", 
  {
   "Pers": "Persica"
  }, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PL. COM.": [
  "Plato", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "ANON. IAMB.": [
  "Anonymorum Iambi", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUL. ANTEC.": [
  "Iulianus Antecessor", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "HIPPO": [
  "Hippo", 
  {}, 
  [
   "V a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "AMMON.": [
  "Ammonius", 
  {}, 
  [
   "V d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "IO. II CP": [
  "Iohannes II Constantinopolitanus", 
  {
   "Ep. Io. H": "Epistula ad Iohannem III Hierosolymitanum", 
   "Ep. Epiph": "Epistula ad Epiphanium Tyrium"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "POLYCHARMUS NAUCRATICUS": [
  "Polycharmus Naucraticus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AN. PAR.": [
  "Anecdota Graeca e cod. MSS. Bibl. Reg. Parisiensis", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PALLADIUS": [
  "Palladius", 
  {
   "Ins": "de insitione", 
   "Vet. Med": "de ueterinaria medicina", 
   "Agric": "Opus agriculturae"
  }, 
  [
   "II d. C.", 
   "", 
   "auctor latinus", 
   ""
  ]
 ], 
 "PHILUM.": [
  "Philumenus", 
  {
   "Ven": "de uenenatis animalibus"
  }, 
  [
   "II d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "THYILL.": [
  "Thyillus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ALEX. MAGN.": [
  "Alexander Magnes", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "SUIDAS": [
  "Suidas", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ARMEN.": [
  "Armenidas", 
  {}, 
  [
   "V a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "POLYAEN. EPICUR.": [
  "Polyaenus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "epicureus", 
   ""
  ]
 ], 
 "SOSICR.": [
  "Sosicrates", 
  {}, 
  [
   "III a. C. ?", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "PETR. SEB.": [
  "Petrus Sebastenus", 
  {
   "Ep": "Epistula ad Gregorium Nyssenum fratrem"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "TIM. II ALEX.": [
  "Timotheus II Alexandrinus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ALCM.": [
  "Alcman", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "HEGESIAS": [
  "Hegesias", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ORTHAGORAS": [
  "Orthagoras", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DINOL.": [
  "Dinolochus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "AP. TY.": [
  "Apollonius Tyanensis", 
  {
   "Fr": "Fragmenta", 
   "Ep": "Epistulae"
  }, 
  [
   "I d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "DEMETR. APAM.": [
  "Demetrius Apamensis", 
  {}, 
  [
   "II a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "RHINTH.": [
  "Rhintho", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "ALEX. H.": [
  "Alexander Hierosolymitanus", 
  {
   "Fr": "Fragmenta epistularum"
  }, 
  [
   "III d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PLATON.": [
  "Platonius", 
  {
   "Diff": "de differentia comoediarum"
  }, 
  [
   "", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "ARR. $2": [
  "Arrianus", 
  {
   "Post Alex": "Post Alexandrum", 
   "Phys": "Fragmenta de rebus physicis", 
   "Peripl. M. Eux": "Periplus Maris Euxini", 
   "Epigr": "Epigramma", 
   "Bith": "Bithynica", 
   "Parth": "Parthica", 
   "Ep. Gell": "Epistula ad Gellium", 
   "Epict. Fr": "Epicteti dissertationum fragmenta", 
   "Tact": "Tactica", 
   "Alan": "Expeditio contra Alanos", 
   "An": "Anabasis", 
   "Fr. Alan": "Fragmentum ex Historia Alanica", 
   "Fr. Hist. inc": "Fragmenta quae utrum. . . incertum est", 
   "Ind": "Indica", 
   "Epict": "Epicteti dissertationes", 
   "Cyn": "Cynegeticus"
  }, 
  [
   "II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "BASILISC.": [
  "Basiliscus", 
  {
   "Encycl": "Encyclica", 
   "Antencycl": "Antencyclica"
  }, 
  [
   "V d. C.", 
   "", 
   "imperator", 
   ""
  ]
 ], 
 "DIG.": [
  "Digesta", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AESCH. ALEX.": [
  "Aeschylus Alexandrinus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "EP. CLEM.": [
  "Clemens Romanus", 
  {
   "Ep. Clem. Virg": "Epistulae duae de virginitate", 
   "Ep. Clem": "Epistulae Clementis"
  }, 
  [
   "I d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ONOMACRITUS": [
  "Onomacritus", 
  {}, 
  [
   "VI/V a. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "PRISC.": [
  "Priscus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PHIL. THM.": [
  "Phileas Thmuitanus", 
  {
   "Ep": "Epistula ad Thmuitas"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PS. RUFIN.": [
  "Pseudo Rufinus", 
  {
   "Fid": "Tractatus de fide"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ARAT. SIC.": [
  "Aratus Sicyonius", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ZENO ELEAT.": [
  "Zeno Eleaticus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "LAC. PL.": [
  "Lactantius Placidus", 
  {
   "Stat. Theb": "Commentarius in Statii Thebaida"
  }, 
  [
   "VI d. C. ?", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "A. D.": [
  "Apollonius Dyscolus", 
  {
   "Coni": "de coniunctionibus", 
   "Synt": "de syntaxi", 
   "Adu": "de aduerbiis", 
   "Pron": "de pronominibus"
  }, 
  [
   "II d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "NYMPHIS": [
  "Nymphis", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PISISTRATUS": [
  "Pisistratus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "epistolographus", 
   ""
  ]
 ], 
 "HIL.": [
  "Hilarius", 
  {
   "Ep. P": "Epistula ad Pulcheriam"
  }, 
  [
   "V d. C.", 
   "", 
   "papa", 
   ""
  ]
 ], 
 "IASO BYZ.": [
  "Iaso Byzantius", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "NIL.": [
  "Nilus Ancyranus", 
  {
   "Magistr": "de magistris et discipulis", 
   "Epict": "Epicteti Encheiridion ad Christianorum usum accomodatum (spurium)", 
   "in Cant": "in Canticum canticorum", 
   "Narr": "Narratio"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "DIPH. SIPH.": [
  "Diphilus Siphnius", 
  {}, 
  [
   "III a. C.", 
   "", 
   "rerum naturalium scriptor", 
   ""
  ]
 ], 
 "PHILOSTR. IUN.": [
  "Philostratus Iunior", 
  {
   "Im": "Imagines"
  }, 
  [
   "III d. C.", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "LEUCIPP.": [
  "Leucippus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "RUTILIUS RUFUS, P.": [
  "Rutilius Rufus, P.", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANONYMUS $19": [
  "Anonymus", 
  {
   "V. Thecl": "Vita Theclae", 
   "Mirac. Thecl": "Miracula Theclae"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus (Anon. )", 
   ""
  ]
 ], 
 "ANONYMUS $18": [
  "Anonymus", 
  {}, 
  [
   "", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "NICAENET.": [
  "Nicaenetus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "epicus et epigrammaticus", 
   ""
  ]
 ], 
 "CAPR.": [
  "Capreolus Carthaginiensis", 
  {
   "Ep. Eph": "Epistula ad synodum Ephesinam"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ANONYMUS $13": [
  "Anonymus", 
  {
   "in Ptol": "in Ptolemaei Tetrabiblon"
  }, 
  [
   "", 
   "", 
   "(Anon. )", 
   ""
  ]
 ], 
 "ANONYMUS $12": [
  "Anonymus", 
  {
   "in Ps": "homilia in Psalmos"
  }, 
  [
   "III d. C. ?", 
   "", 
   "scriptor ecclesiasticus (Anon. )", 
   ""
  ]
 ], 
 "ANDR. SAM.": [
  "Andreas Samosatenus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ANONYMUS $10": [
  "Anonymus", 
  {
   "in Pl. Phd": "Commentarium in Platonis Phaedonem"
  }, 
  [
   "III a. C.", 
   "", 
   "philosophus (Anon. )", 
   ""
  ]
 ], 
 "ANONYMUS $17": [
  "Anonymus", 
  {
   "Incred": "de incredibilibus"
  }, 
  [
   "II d. C.", 
   "", 
   "(Anon. )", 
   ""
  ]
 ], 
 "ANONYMUS $16": [
  "Anonymus", 
  {
   "in Tht": "Commentarium in Platonis Theaetetum"
  }, 
  [
   "I/II d. C.", 
   "", 
   "philosophus (Anon. )", 
   ""
  ]
 ], 
 "ANONYMUS $15": [
  "Anonymus", 
  {}, 
  [
   "", 
   "", 
   "(Anon. )", 
   ""
  ]
 ], 
 "ANONYMUS $14": [
  "Anonymus", 
  {
   "in Rh": "in Aristotelis Artem Rhetoricam commentaria"
  }, 
  [
   "", 
   "", 
   "(Anon. )", 
   ""
  ]
 ], 
 "EUPOLEMUS": [
  "Eupolemus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "LIBER IUBIL.": [
  "Liber Iubilaeorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYSIUS ANDRIUS": [
  "Dionysius Andrius", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "MENIPPUS": [
  "Menippus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "I a. C.", 
   "", 
   "geographus", 
   ""
  ]
 ], 
 "COD. THEOD.": [
  "Codex Theodosianus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEX.": [
  "Alexander", 
  {
   "Rh": "de materiis rhetoricis", 
   "Fig": "de figuris"
  }, 
  [
   "II d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "DAMOCR.": [
  "Damocrates", 
  {}, 
  [
   "I d. C.", 
   "", 
   "poeta medicus", 
   ""
  ]
 ], 
 "CORN. PA.": [
  "Cornelius", 
  {
   "Ep. Fr": "Fragmenta ex epistula ad Fabium"
  }, 
  [
   "III d. C.", 
   "", 
   "papa", 
   ""
  ]
 ], 
 "CHRYSIPP. TYAN.": [
  "Chrysippus Tyanensis", 
  {}, 
  [
   "I d. C.", 
   "", 
   "rei coquinariae scriptor", 
   ""
  ]
 ], 
 "DEMOCR.": [
  "Democritus", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ALEX. $2": [
  "Alexis", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "ARAB.": [
  "Arabius", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "VLP.": [
  "Vlpianus", 
  {
   "Prol. in D": "Prolegomena in Demosthenis orationes Olynthiacas et Philippicas"
  }, 
  [
   "IV d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "EPIG.": [
  "Epigenes", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "HYPSICL.": [
  "Hypsicles", 
  {
   "Disp": "Disputatio de dodecaedro et icosaedro", 
   "Sch": "Scholia"
  }, 
  [
   "II a. C.", 
   "", 
   "astronomus", 
   ""
  ]
 ], 
 "TIMAG. MIL.": [
  "Timagenes", 
  {}, 
  [
   "imper.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "NICAND. THYAT.": [
  "Nicander Thyatirius", 
  {}, 
  [
   "II a. C. ?", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "THD.": [
  "Theodotio", 
  {}, 
  [
   "II d. C.", 
   "", 
   "interpres Veteris Testamenti", 
   ""
  ]
 ], 
 "CAPER, FLAUIUS": [
  "Caper, Flauius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "grammaticus latinus", 
   ""
  ]
 ], 
 "THDR. SAMOTHR.": [
  "Theodorus Samothracenus", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "GLOSSARIUM IN PAULI EPISTULAS": [
  "Glossarium in Pauli epistulas", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FLAU. HIM.": [
  "Flauius Himerius", 
  {
   "Ep": "Epistula ad exactorem Mareotae"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "SPEC. LEX. INED. COD. AUGUST.": [
  "Specimen lexici inediti ex cod. Augustano s. XIV", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IO. SCYTH.": [
  "Iohannes Scythopolitanus", 
  {
   "Fr": "Fragmentum"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "HERO": [
  "Hero", 
  {
   "Metr": "Metrica", 
   "Spir": "(Spiritalia) Pneumatica", 
   "Fr": "Fragmenta", 
   "Bel": "Belopoeica", 
   "Stereom": "Stereometrica", 
   "Lib. Geep": "Liber geeponicus", 
   "Tab. H": "Tabulae Heronianae", 
   "Mens": "de mensuris", 
   "Geom": "Geometrica", 
   "Aut": "Automatopoetica", 
   "Cheir": "Cheiroballistra", 
   "Dioptr": "Dioptra", 
   "Geod": "Geodaesia", 
   "Def": "Definitiones"
  }, 
  [
   "II/I a. C.", 
   "", 
   "mechanicus", 
   ""
  ]
 ], 
 "LYS.": [
  "Lysias", 
  {
   "Fr": "Fragmenta", 
   "Fr. A": "Fragmenta aparasema", 
   "Fr. Ep": "Fragmenta epistolarum"
  }, 
  [
   "V/IV a. C.", 
   "", 
   "orator", 
   ""
  ]
 ], 
 "POLYCLIT. HIST.": [
  "Polyclitus Larissaeus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DIOG. ATH.": [
  "Diogenes Atheniensis", 
  {}, 
  [
   "V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "HIEROCLES": [
  "Hierocles", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "ZOROASTRES": [
  "Zoroastres", 
  {}, 
  [
   "", 
   "", 
   "magus", 
   ""
  ]
 ], 
 "BOETH. $2": [
  "Boethus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "QUINT.": [
  "Quintilianus", 
  {
   "Inst": "Institutio oratoria"
  }, 
  [
   "I d. C.", 
   "", 
   "rhetor latinus", 
   ""
  ]
 ], 
 "ASCL.": [
  "Asclepiodotus", 
  {
   "Tact": "Tactica"
  }, 
  [
   "I a. C.", 
   "", 
   "tacticus", 
   ""
  ]
 ], 
 "BUTHER.": [
  "Butherus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "CRATIPP.": [
  "Cratippus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MENIPP.": [
  "Menippus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "MELIT.": [
  "Melito Sardensis", 
  {
   "Fr": "Fragmenta", 
   "Pasch": "de pascha", 
   "Fr. Hymn": "Fragmentum Hymni"
  }, 
  [
   "II d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "IUNC.": [
  "Iuncus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "EUST. SEB.": [
  "Eustathius Sebastenus", 
  {
   "Ep": "Epistula ad Liberium papam"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "NONN.": [
  "Nonnus", 
  {
   "Par. Eu. Io": "Paraphrasis Euangelii Iohannis", 
   "D": "Dionysiaca"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "HOR.": [
  "Horatius Flaccus, Quintus", 
  {
   "C": "Carmina", 
   "Ep": "Epistulae", 
   "Sat": "Saturae"
  }, 
  [
   "I a. C.", 
   "", 
   "poeta latinus", 
   ""
  ]
 ], 
 "ALEX. COT.": [
  "Alexander Cotiaeus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "APOLLON. MYS": [
  "Apollonius Mys", 
  {}, 
  [
   "I a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "TELECL.": [
  "Teleclides", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "EUDOX. COM.": [
  "Eudoxus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "HERM. $4": [
  "Hermias Alexandrinus", 
  {
   "in Phdr": "in Platonis Phaedrum scholia"
  }, 
  [
   "V d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "AMARANT.": [
  "Amarantus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "ANON. PS. EUP.": [
  "Anonymus (Pseudo Eupolemus)", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "GARG. MART.": [
  "Gargilius Martialis", 
  {}, 
  [
   "III d. C.", 
   "", 
   "scriptor de hortis", 
   ""
  ]
 ], 
 "EUS.": [
  "Eusebius Caesariensis", 
  {
   "Fr": "Fragmenta", 
   "Ep. Flacc": "Epistula ad Flaccum", 
   "Onomast": "Onomasticon", 
   "Hierocl": "contra Hieroclem", 
   "Is": "Commentarius in Isaiam", 
   "Ep. Euphrat": "Fragmenta epistulae ad Euphrationem", 
   "Mens": "Fragmentum de mensuribus et ponderibus", 
   "Ep. Caes": "Epistula ad Caesarienses", 
   "Ep. Carp": "Epistula ad Carpianum", 
   "E. Th": "de ecclesiastica theologia", 
   "Ep. Alex. Al": "Fragmenta epistulae ad Alexandrum Alexandrinum", 
   "Theoph": "Theophania", 
   "Marcell": "contra Marcellum"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "HERM. $2": [
  "Hermes Trismegistos", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERM. $3": [
  "Hermias", 
  {
   "Irris": "Irrisio gentilium philosophorum"
  }, 
  [
   "II/III d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "MAIIST.": [
  "Maiistas", 
  {}, 
  [
   "III a. C.", 
   "", 
   "hymnologus", 
   ""
  ]
 ], 
 "MANTISS. PROU.": [
  "Mantissa prouerbiorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NIC. $3": [
  "Nicias", 
  {
   "Arc": "Arcadica"
  }, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "NIC. $2": [
  "Nicias", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PAUS. DAM.": [
  "Pausanias Damascenus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "LEX. AN. OX.": [
  "Lexicon Anonymi Oxoniensis in orationes Gregorii Naziazeni", 
  {}, 
  [
   "XI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEM. OPHTH.": [
  "Demosthenes", 
  {}, 
  [
   "I d. C.", 
   "", 
   "ophthalmicus", 
   ""
  ]
 ], 
 "MUSIC.": [
  "Musicius", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "SERU.": [
  "Seruius", 
  {
   "Buc": "Commentarii in Bucolica", 
   "Georg": "Commentarii in Georgica", 
   "Aen": "Commentarii in Aeneidem"
  }, 
  [
   "IV d. C.", 
   "", 
   "grammaticus latinus", 
   ""
  ]
 ], 
 "PYTHO": [
  "Pytho", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "BIO": [
  "Bio", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II a. C.", 
   "", 
   "bucolicus", 
   ""
  ]
 ], 
 "ACESAND.": [
  "Acesander", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ET. GUD.": [
  "Etymologicum Gudianum", 
  {}, 
  [
   "XII d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEGESIPP. HIST.": [
  "Hegesippus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PTOL. ASCAL.": [
  "Ptolemaeus Ascalonita", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "I a. C. /", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "ANECD. STUD.": [
  "Anecdota Graeca et Latina", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. PAROD.": [
  "Anonymi Parodici", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IULIUS RUFINIANUS": [
  "Iulius Rufinianus", 
  {}, 
  [
   "", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "TIB.": [
  "Tiberius", 
  {
   "Fig": "de figuris"
  }, 
  [
   "III/IV a. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "GLOSS. MED.": [
  "Glossae medicinales", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MIMN. TRAG.": [
  "Mimnermus", 
  {}, 
  [
   "", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "DINARCHUS": [
  "Dinarchus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ZON. $1": [
  "Zonas", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "EURYPHO CNIDIUS": [
  "Eurypho Cnidius", 
  {}, 
  [
   "V a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "FR. TEL.": [
  "Fragmentum Teliambicum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ET. GEN.": [
  "Etymologicum Genuinum", 
  {}, 
  [
   "IX d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUL. AEGYPT.": [
  "Iulianus Aegyptus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "SOSYL.": [
  "Sosylus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PHILEM. IUN.": [
  "Philemo Iunior", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "ARCHYT. AMPH.": [
  "Archytas Amphissensis", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "DERCYL. HIST.": [
  "Dercylus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HERACLEO": [
  "Heracleo", 
  {}, 
  [
   "I d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "ETRUSC.": [
  "Etruscus", 
  {}, 
  [
   "I d. C. ?", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "EPHOR.": [
  "Ephorus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MART. POL.": [
  "Martyrium Polycarpi", 
  {
   "Epil. Mosq": "epilogus alter e codice Mosquensi"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALCIPHR.": [
  "Alciphro", 
  {
   "Fr": "Fragmentum"
  }, 
  [
   "IV d. C.", 
   "", 
   "epistolographus", 
   ""
  ]
 ], 
 "ARISTOBUL. ALEX.": [
  "Aristobulus Alexandrinus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "Iudaeus", 
   ""
  ]
 ], 
 "PYTHERMUS TEIUS": [
  "Pythermus Teius", 
  {}, 
  [
   "a. Hippon.", 
   "", 
   "poeta", 
   ""
  ]
 ], 
 "THEOPH. ET NARC.": [
  "Theophilus et Narcissus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "scriptores ecclesiastici", 
   ""
  ]
 ], 
 "AMMO": [
  "Ammo", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "AGATHARCH. HIST.": [
  "Agatharchides Samius", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "APOC.": [
  "Apocalypsis Iohannis", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MOSCH.": [
  "Moschus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "bucolicus", 
   ""
  ]
 ], 
 "LACO": [
  "Laco", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "CLEAENET.": [
  "Cleaenetus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "SIL. ITAL.": [
  "Silius Italicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epicus latinus", 
   ""
  ]
 ], 
 "MARCELLIN.": [
  "Marcellinus", 
  {
   "Vit. Thuc": "Vita Thucydidis"
  }, 
  [
   "IV d. C.", 
   "", 
   "biographus", 
   ""
  ]
 ], 
 "GP.": [
  "Geoponica", 
  {}, 
  [
   "X d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MOERO": [
  "Moero", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "epica", 
   ""
  ]
 ], 
 "POLEM. $2": [
  "Polemo", 
  {
   "Call": "Callimachus", 
   "Cyn": "Cynegirus"
  }, 
  [
   "I/II d. C.", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "ZEN.": [
  "", 
  {
   "Ath": "recensio Athoa"
  }, 
  [
   "II d. C. ?", 
   "", 
   "paroemiographus", 
   ""
  ]
 ], 
 "CHRYSIPP. HIST.": [
  "Chrysippus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "NARCISSUS HIEROSOLYMITANUS": [
  "Narcissus Hierosolymitanus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMOPHILUS": [
  "Demophilus", 
  {}, 
  [
   "II/V d. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "LYSIPP.": [
  "Lysippus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "SCIP. NASIC.": [
  "Scipio Nasica, P. Cornelius", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EUDOX. CONST.": [
  "Eudoxius Constantinopolitanus", 
  {
   "Exp. Fid": "Expositio fidei"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "APOPH.": [
  "Apophthegmata", 
  {
   "Apoph. Patr": "Apophthegmata patrum (Collectio alphabetica)", 
   "Apoph. Patr. Al": "Apophthegmata patrum alia", 
   "Apoph. Patr. Sys": "Apophthegmata Patrum (Collectio systematica)", 
   "Apoph. Mac. Aeg": "Apophthegmata Macarii Aegyptii"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MYRO": [
  "Myro", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MARIAN.": [
  "Marianus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ANDRO": [
  "Andro", 
  {}, 
  [
   "d. III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EUBOEUS PARIUS": [
  "Euboeus Parius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "METROD. $2": [
  "Metrodorus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "BASSUS, LOLLIUS": [
  "Bassus, Lollius", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "THEM. DIAC.": [
  "Themistius Alexandrinus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "VI d. C.", 
   "", 
   "diaconus", 
   ""
  ]
 ], 
 "PAMPH. H.": [
  "Pamphilus Hierosolymitanus", 
  {
   "Panopl": "Panoplia dogmatica", 
   "Can": "Canones ex Apostolorum in Antiochia synodo"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "HONEST.": [
  "Honestus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "APOLLINARIUS": [
  "Apollinarius", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "EUN. BERRH.": [
  "Eunomius Berrhoeensis", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "HERMAPIO": [
  "Hermapio", 
  {}, 
  [
   "I d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "TROILUS": [
  "Troilus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "TZ.": [
  "Tzetzes, Iohannes", 
  {
   "ad Lyc": "ad Lycophronem", 
   "ad. Hes. Op": "ad Hesiodi Opera et Dies", 
   "AH": "Antehomerica", 
   "Hom": "Homerica", 
   "Diff. Poet": "de differentia poetarum", 
   "Alleg. Od": "Allegoriae Odyseae", 
   "Ex": "Exegesis in Homeri Iliadem", 
   "Alleg. Il": "Allegoriae Iliadis", 
   "H": "Historiarum uariarum Chiliades", 
   "Prol. Com": "Prolegomena de comoedia", 
   "PH": "Posthomerica", 
   "Ep": "Epistulae", 
   "Trag. Poes": "de tragica poesi"
  }, 
  [
   "XII d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "DEMETR. TRAG.": [
  "Demetrius", 
  {}, 
  [
   "V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "PETR. RAU.": [
  "Petrus Rauennensis", 
  {
   "Ep": "Epistula ad Eutychen"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "THEODORUS BITHYNIUS": [
  "Theodorus Bithynius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "NICARCH. HIST.": [
  "Nicarchus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PSEUDO ARISTIDES": [
  "Pseudo Aristides", 
  {}, 
  [
   "", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "IREN. GR.": [
  "Irenaeus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "EUS. DOR.": [
  "Eusebius Dorylaeensis", 
  {
   "Ep. Chalc": "Epistula ad synodum Chalcedonensem", 
   "Libell": "Libellus contra Eutychen", 
   "Ep. Imp": "Epistula ad imperatores", 
   "Contest": "Contestatio"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "CALLISTR.": [
  "Callistratus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "MELANTH. HIST.": [
  "Melanthius", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANAXANDR. HIST.": [
  "Anaxandrides", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CLIN.": [
  "Clinias", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "ALYP. CONST.": [
  "Alypius Constatinopolitanus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "presbyter", 
   ""
  ]
 ], 
 "LEXICON AMBROSIANUM UOCABULORUM PLURA SIGNIFICANTIUM": [
  "Lexicon Ambrosianum uocabulorum plura significantium", 
  {}, 
  [
   "VIII/IX d. C.", 
   "", 
   "(Lex. Ambr. )", 
   ""
  ]
 ], 
 "EUS. MYND.": [
  "Eusebius Myndius", 
  {}, 
  [
   "", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "LUCIUS SEPTIMIUS": [
  "Lucius Septimius", 
  {}, 
  [
   "IV d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "STR.": [
  "Strabo", 
  {
   "Chr": "Chrestomathiae", 
   "Fr. Hist": "Fragmenta historica", 
   "Sch": "Scholia"
  }, 
  [
   "I a. C. /", 
   "", 
   "geographus", 
   ""
  ]
 ], 
 "TIB. ILL.": [
  "Tiberius Illustrius", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "DEMETR. BITH.": [
  "Demetrius Bithynius", 
  {}, 
  [
   "II a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PHLEG.": [
  "Phlego Trallianus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "paradoxographus", 
   ""
  ]
 ], 
 "ANECD. PLANT.": [
  "Anecdota Plantarum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AETH.": [
  "Aethiopis", 
  {}, 
  [
   "VIII a. C. ?", 
   "", 
   "poema epicum", 
   ""
  ]
 ], 
 "CYDIAS": [
  "Cydias", 
  {}, 
  [
   "VI/V a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "ZENO RHODIUS": [
  "Zeno Rhodius", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANTIPHIL.": [
  "Antiphilus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "MART. NOT.": [
  "Martyrium sanctorum notariorum Marciani et Martyrii", 
  {}, 
  [
   "V d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOD. RH.": [
  "Diodorus", 
  {}, 
  [
   "", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "PERIPL. M. EUX.": [
  "Periplus Maris Euxini", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "XENOCR.": [
  "Xenocrates", 
  {
   "Lap": "de lapidibus"
  }, 
  [
   "I d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "LESB. RH.": [
  "Lesbonax", 
  {}, 
  [
   "II d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "CRATES HIST.": [
  "Crates", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "BACCH.": [
  "Bacchius", 
  {
   "Harm": "Harmonica introductio"
  }, 
  [
   "IV d. C.", 
   "", 
   "musicus", 
   ""
  ]
 ], 
 "AEL. PROM.": [
  "Aelius Promotus", 
  {}, 
  [
   "d. II d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "THGN. $2": [
  "Theognostus Alexandrinus", 
  {
   "Fr": "Fragmenta ex libris VII hypotyposeon"
  }, 
  [
   "III d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "LOLLIAN. EPH.": [
  "Lollianus Ephesius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "TRIPH.": [
  "Triphiodorus", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "ATH. MED.": [
  "Athenaeus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "ATHANIS": [
  "Athanis", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PATROCL.": [
  "Patrocles Thurius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "ONAS.": [
  "Onasander", 
  {}, 
  [
   "I d. C.", 
   "", 
   "tacticus", 
   ""
  ]
 ], 
 "SPHAER. STOIC.": [
  "Sphaerus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "stoicus", 
   ""
  ]
 ], 
 "CARM. CONU.": [
  "Carmina Conuiuialia", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PYTHAG.": [
  "Pythagoras", 
  {
   "Sim": "Pythagoreorum similitudines", 
   "Ep": "Pythagorae et Pythagoreorum epistulae", 
   "Sent": "Sententiae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLOPH.": [
  "Apollophanes", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "THEOPOMP. HIST.": [
  "Theopompus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SERAPIO": [
  "Serapio", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "EPHR. CHERS.": [
  "Ephraem Chersonensis", 
  {
   "Mir. Clem": "de miraculo Clementis"
  }, 
  [
   "", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "DIDYMUS": [
  "Didymus", 
  {
   "Mens": "Mensurae marmorum ac lignorum"
  }, 
  [
   "", 
   "", 
   "scriptor de mensuris (Didym. )", 
   ""
  ]
 ], 
 "STHENID.": [
  "Sthenidas", 
  {}, 
  [
   "", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "THEO": [
  "Theo", 
  {
   "Pind": "Fragmentum commentariorum de Pythiis Pindari"
  }, 
  [
   "I d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "BALAGRUS": [
  "Balagrus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MONTANUS": [
  "Montanus", 
  {
   "Orac": "Oracula"
  }, 
  [
   "II d. C.", 
   "", 
   "(Montan. )", 
   ""
  ]
 ], 
 "RUTIL.": [
  "Rutilius Lupus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "PRAXIPH.": [
  "Praxiphanes", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "PHILEM.": [
  "Philemo", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "SATYR.": [
  "Satyrus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PL.": [
  "Plato", 
  {
   "Sis": "Sisyphus", 
   "Lg": "Leges", 
   "Men": "Meno", 
   "Min": "Minos", 
   "Phlb": "Philebus", 
   "Smp": "Symposium", 
   "Grg": "Gorgias", 
   "Euthd": "Euthydemus", 
   "Epin": "Epinomis", 
   "Ti": "Timaeus", 
   "Criti": "Critias", 
   "Chrm": "Charmides", 
   "Iust": "de iusto", 
   "Ly": "Lysis", 
   "Plt": "Politicus", 
   "Prt": "Protagoras", 
   "Hp. Ma. , Mi": "Hippias Maior, Minor", 
   "La": "Laches", 
   "Phd": "Phaedo", 
   "Amat": "Amatores", 
   "Euthphr": "Euthyphro", 
   "Fr. Trag": "Fragmenta Tragoediarum", 
   "Tht": "Theaetetus", 
   "Erx": "Eryxias", 
   "Cra": "Cratylus", 
   "Thg": "Theages", 
   "Cri": "Crito", 
   "Mx": "Menexenus", 
   "Def": "Definitiones", 
   "Sch": "Scholia", 
   "Clit": "Clitopho", 
   "Epigr": "Epigrammata", 
   "Demod": "Demodocus", 
   "Prm": "Parmenides", 
   "Virt": "de uirtute", 
   "Alc": "Alcibiades", 
   "Sph": "Sophista", 
   "Ap": "Apologia", 
   "Phdr": "Phaedrus", 
   "R": "Respublica", 
   "Hipparch": "Hipparchus", 
   "Io": "Io", 
   "Ax": "Axiochus", 
   "Ep": "Epistulae"
  }, 
  [
   "V/IV a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "LUC.": [
  "Lucianus", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "interpres Veteris Testamenti", 
   ""
  ]
 ], 
 "ALCIMUS": [
  "Alcimus Siceliota", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANTON. HAG.": [
  "Antonius", 
  {
   "V. Sym. Styl": "Vita Symeonis Stylitis"
  }, 
  [
   "V d. C.", 
   "", 
   "hagiographus", 
   ""
  ]
 ], 
 "ANON. MED.": [
  "Anonymi Medici", 
  {
   "Acut. Chron": "de morbis acutis et chroniis", 
   "Ferr": "Ferramentorum nomina"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PERS. $2": [
  "Persicis, Narratio de Rebus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PERS. $3": [
  "Persius", 
  {}, 
  [
   "I d. C.", 
   "", 
   "poeta latinus", 
   ""
  ]
 ], 
 "D. L.": [
  "Diogenes Laertius", 
  {}, 
  [
   "III d. C.", 
   "", 
   "biographus", 
   ""
  ]
 ], 
 "ERANIUS PHILO": [
  "Eranius Philo", 
  {}, 
  [
   "", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "ANONYMUS $25": [
  "Anonymus", 
  {
   "Trag": "de Tragoedia"
  }, 
  [
   "biz.", 
   "", 
   "(Anon. )", 
   ""
  ]
 ], 
 "ANONYMUS $22": [
  "Anonymus", 
  {
   "Prol": "Prolegomena in Platonis Philosophiam"
  }, 
  [
   "VI d. C.", 
   "", 
   "philosophus (Anon. )", 
   ""
  ]
 ], 
 "DAMO": [
  "Damo", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANONYMUS $20": [
  "Anonymus", 
  {
   "Mul": "Tractatus de mulieribus claris in bello"
  }, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANONYMUS $21": [
  "Anonymus", 
  {
   "Paneg. Iul. Imp": "Panegyricus in Iulianum imperatorem"
  }, 
  [
   "IV d. C.", 
   "", 
   "rhetor (Anon. )", 
   ""
  ]
 ], 
 "THEANO": [
  "Theano", 
  {}, 
  [
   "", 
   "", 
   "pythagorica", 
   ""
  ]
 ], 
 "METROD. PHIL.": [
  "Metrodorus Lampsacenus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "D. CHR.": [
  "Dio Chrysostomus", 
  {
   "Fr": "Deperditae orationis fragmenta"
  }, 
  [
   "I/II d. C.", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "CAT. COD. ASTR.": [
  "Catalogus Codicum Astrologorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILONID.": [
  "Philonides", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "AND.": [
  "Andocides", 
  {
   "Fr": "Fragmenta", 
   "Myst": "de mysteriis"
  }, 
  [
   "V/IV a. C.", 
   "", 
   "orator", 
   ""
  ]
 ], 
 "IUL. SERD.": [
  "Iulianus Serdicensis", 
  {
   "Poenit": "Libellus poenitentiae"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PAUL. SIL.": [
  "Paulus Silentiarius", 
  {
   "Soph": "descriptio Sanctae Sophiae", 
   "Ambo": "Descriptio Ambonis", 
   "Therm. Pyth": "in thermas Pythicas"
  }, 
  [
   "VI d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ALEX. TRALL.": [
  "Alexander Trallianus", 
  {
   "Oc": "de oculis"
  }, 
  [
   "VI d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "DOROTH.": [
  "Dorotheus", 
  {
   "Vis": "Visio", 
   "Abr": "ad Abramo"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "ERECTH.": [
  "Erecthius Antiochenus Pisida", 
  {
   "Theoph": "Fragmentum ex homilia in theophaniam"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "AUTOCR.": [
  "Autocrates", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "DAM.": [
  "Damascius", 
  {
   "Pr": "de principiis", 
   "Hist. Phil": "Historiae Philosophicae fragmenta", 
   "in Prm": "in Platonis Parmenidem", 
   "in Phlb": "in Platonis Philebum", 
   "in Phd": "in Platonis Phaedonem"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "AST. AM.": [
  "Asterius Amasenus", 
  {
   "Prod": "in filium prodigum", 
   "Fr": "Fragmenta homiliarum deperditarum", 
   "Hom": "Homiliae", 
   "Phar": "Homilia de pharisaeo et publicano"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "THEAG.": [
  "Theages", 
  {}, 
  [
   "III a. C. ?", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "PAE. DELPH.": [
  "Paean Delphicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMIURGUS": [
  "Demiurgus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "SPINTH.": [
  "Spintharus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "LYD.": [
  "Lydus, Iohannes Laurentius", 
  {
   "Ost": "de ostentis", 
   "Mag": "de magistratibus", 
   "Mens": "de mensibus"
  }, 
  [
   "VI d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "TIMOMACH.": [
  "Timomachus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PHILEMO": [
  "Philemo", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "lexicographus", 
   ""
  ]
 ], 
 "ISOC.": [
  "Isocrates", 
  {
   "Fr": "Fragmenta", 
   "Ep": "Epistulae", 
   "Sch": "Scholia"
  }, 
  [
   "V/IV a. C.", 
   "", 
   "orator", 
   ""
  ]
 ], 
 "POLYCR. EPH.": [
  "Polycrates Ephesius", 
  {}, 
  [
   "II d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "OLYMP. $2": [
  "Olympiodorus Alexandrinus", 
  {
   "Iob": "commentarii in Iob"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ANT. DIOG.": [
  "Antonius Diogenes", 
  {
   "Fr": "Fragmenta", 
   "Fr. Pap. Dub": "Fragmentum papyraceum dubium", 
   "Fr. Pap": "Fragmenta papyracea"
  }, 
  [
   "I d. C.", 
   "", 
   "scriptor eroticus", 
   ""
  ]
 ], 
 "CRINIS": [
  "Crinis", 
  {}, 
  [
   "II a. C.", 
   "", 
   "stoicus", 
   ""
  ]
 ], 
 "EUS. EM.": [
  "Eusebius Emesenus", 
  {
   "Fr. Dogm": "Fragmenta duo de Iesu Christi persona", 
   "Oct": "Fragmenta in Octateuchum et Reges", 
   "Fr. Io. , Act. , 2Petr": "Fragmenta in Eu. Io. , Act. Ap. , 2Ep. Petr", 
   "Fr. Rom. , Cor. , Gal": "Fragmenta in Ep. Rom. , 1Ep. Cor. , Ep. Gal"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PAEO": [
  "Paeo", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ERATOSTH.": [
  "Eratosthenes Cyrenaeus", 
  {
   "Fr. Geog": "Fragmenta Geographica", 
   "Fr. Hist": "Fragmenta historica", 
   "Cat": "Catasterismi"
  }, 
  [
   "III a. C.", 
   "", 
   "uariae scientiae scriptor", 
   ""
  ]
 ], 
 "APOLLOD. STOIC.": [
  "Apollodorus Seleuciensis", 
  {}, 
  [
   "II a. C.", 
   "", 
   "stoicus", 
   ""
  ]
 ], 
 "MAXIM.": [
  "Maximianus Constantinopolitanus", 
  {
   "Ep. Tened": "Epistula ad Tenedios", 
   "Ep. Syn": "Epistula synodica", 
   "Ep. Cyr": "Epistula ad Cyrillum Alexandrinum"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ASCENSIO ISAIAE": [
  "Ascensio Isaiae", 
  {
   "Ascens. Is": "Fragmentum graecum", 
   "Ascens. Is. Leg": "Legenda graeca"
  }, 
  [
   "", 
   "", 
   "(Ascens. Is. )", 
   ""
  ]
 ], 
 "CLEO SIC.": [
  "Cleo Siculus", 
  {
   "Sch": "Scholia"
  }, 
  [
   "IV a. C. ?", 
   "", 
   "lyricus et epicus", 
   ""
  ]
 ], 
 "XENOCRATES $1": [
  "Xenocrates", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "CREOPH. EP.": [
  "Creophylus Samius", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "AR.": [
  "Aristophanes", 
  {
   "Fr": "Fragmenta", 
   "Lys": "Lysistrata", 
   "Pax": "Pax", 
   "Ach": "Acharnenses", 
   "Ec": "Ecclesiazusae", 
   "Argum": "Argumenta", 
   "Au": "Aues", 
   "Ra": "Ranae", 
   "Th": "Thesmophoriazusae", 
   "V": "Vespae", 
   "Eq": "Equites", 
   "Nu": "Nubes", 
   "Pl": "Plutus"
  }, 
  [
   "V/IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "ATTAL.": [
  "Attalus", 
  {
   "in Arat": "Commentariorum in Aratum reliquiae"
  }, 
  [
   "II a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "OEDIPODIA": [
  "Oedipodia", 
  {}, 
  [
   "VIII a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAT. $2": [
  "Cato", 
  {
   "Agr": "de agricultura"
  }, 
  [
   "III/II a. C.", 
   "", 
   "scriptor rei rusticae latinus", 
   ""
  ]
 ], 
 "EUP.": [
  "Eupolis", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "HERMAEUS": [
  "Hermaeus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PAE. ERYTHR.": [
  "Paeanes Erythraei", 
  {
   "Pae. Erythr. Seleuc": "Paean Erythraeus in Seleucum", 
   "Pae. Erythr. Dium": "Paean Erythraeus ad urbem Dium repertus"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOCL. $2": [
  "Diocles", 
  {}, 
  [
   "I d. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "TRYPHO $1": [
  "Trypho", 
  {
   "Fr": "Fragmenta", 
   "Trop": "de tropis", 
   "Pass": "Excerpta de passionibus"
  }, 
  [
   "I a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "ARIPHRO": [
  "Ariphro", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "AEL. $2": [
  "Aelianus", 
  {
   "Tact": "Tactica"
  }, 
  [
   "I/II d. C.", 
   "", 
   "tacticus", 
   ""
  ]
 ], 
 "SAPPH.": [
  "Sappho", 
  {}, 
  [
   "VII/", 
   "", 
   "lyrica", 
   ""
  ]
 ], 
 "THOM.": [
  "Thomas", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PHILINUS": [
  "Philinus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PTOL. MEND.": [
  "Ptolemaeus Mendesius", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ARISTID. MIL.": [
  "Aristides Milesius", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PRAXAG.": [
  "Praxagoras", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "LYSIS": [
  "Lysis", 
  {}, 
  [
   "", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "METOPUS": [
  "Metopus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "pythagoricus", 
   ""
  ]
 ], 
 "THEOD. GAD.": [
  "Theodorus Gadareus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "rhetor", 
   ""
  ]
 ], 
 "HYMN. ID. DACT.": [
  "Hymnus ad Idaeos Dactylos", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHAROND.": [
  "Charondas", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "PHINT.": [
  "Phintys", 
  {}, 
  [
   "III a. C.", 
   "", 
   "pythagorica", 
   ""
  ]
 ], 
 "ANAXANDR.": [
  "Anaxandrides", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "SABIN.": [
  "Sabinus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "CELS.": [
  "Celsus", 
  {
   "Fr": "Fragmentum"
  }, 
  [
   "I d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "ZENOD. TROEZ.": [
  "Zenodotus Troezenius", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "GAIUS ROM.": [
  "Gaius Romanus", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PHILAGRIUS": [
  "Philagrius", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUHEM.": [
  "Euhemerus Messenius", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "AXIOP.": [
  "Axiopistus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "gnomologus", 
   ""
  ]
 ], 
 "DOSITH. HIST.": [
  "Dositheus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "LYCO $1": [
  "Lyco", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "PHERECYD.": [
  "Pherecydes Atheniensis", 
  {}, 
  [
   "VI/V a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DSC. PH.": [
  "Dioscorides Phacas", 
  {}, 
  [
   "I a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "ANT. EP.": [
  "Antiochus Eparches", 
  {
   "Ep": "Epistula ad Nestorium."
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PTOL. $4": [
  "Ptolemaeus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "rex Aegypti epigrammaticus", 
   ""
  ]
 ], 
 "CALLISTR. HIST.": [
  "Callistratus Domitius", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SEUER. $3": [
  "Seuerus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "DION. BYZ.": [
  "Dionysius Byzantius", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "geographus", 
   ""
  ]
 ], 
 "GAUD.": [
  "Gaudentius", 
  {
   "Harm": "Harmonica"
  }, 
  [
   "II/V d. C.", 
   "", 
   "musicus", 
   ""
  ]
 ], 
 "CHAR.": [
  "Charisius Philadelphenus", 
  {
   "Libell": "Libellus"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ASCLEP. AEG.": [
  "Asclepiades Aegyptius", 
  {}, 
  [
   "V d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PRISCILLIANUS": [
  "Priscillianus", 
  {
   "Tract": "Tractatus"
  }, 
  [
   "IV d. C.", 
   "", 
   "episcopus hispanus", 
   ""
  ]
 ], 
 "DIOTIM.": [
  "Diotimus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "PARMEN.": [
  "Parmenio", 
  {}, 
  [
   "I a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "CALLINIC. MON.": [
  "Callinicus", 
  {
   "V. Hyp": "Vita Hypatii"
  }, 
  [
   "V d. C.", 
   "", 
   "monachus", 
   ""
  ]
 ], 
 "EUANG.": [
  "Euangelus", 
  {}, 
  [
   "III a. C. ?", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "POLYZEL.": [
  "Polyzelus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "ARCESIL.": [
  "Arcesilaus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "1, 2, 3APOC.": [
  "Apocalypses Iohannis apocryphae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUSTUS": [
  "Iustus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AGATHAN.": [
  "Agathangelus", 
  {
   "V. Gr. Ill": "Vita Gregorii Illuminatoris"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "ALEXIO": [
  "Alexio", 
  {}, 
  [
   "I d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "THRASYBULUS": [
  "Thrasybulus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "epistolographus", 
   ""
  ]
 ], 
 "ARISTONYM.": [
  "Aristonymus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "HORAP.": [
  "Horapollo", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "hieroglyphicorum exegeta", 
   ""
  ]
 ], 
 "HIST. AUG.": [
  "Historiae Augustae scriptores", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "BARBILLUS": [
  "Barbillus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "GELL.": [
  "Gellius, Aulus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "grammaticus latinus", 
   ""
  ]
 ], 
 "POLYB. RH.": [
  "Polybius Rhinocolurensis", 
  {}, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "EPHEM. ALEX.": [
  "Ephemerides Alexandri", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATHENODOR. TARS.": [
  "Athenodorus Tarsensis", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "IO. IEI.": [
  "Iohannes IV Constantinopolitanus Ieiunator", 
  {
   "Paraen": "Paraenesis", 
   "Liturg": "de sacra liturgia", 
   "Serm": "Sermo de poenitentia", 
   "Pseud": "de pseudoprophetis", 
   "Doct": "Doctrina monialium", 
   "Exc. Poenit": "Excerpta ex poenitentiali", 
   "Poenit": "Poenitentiale", 
   "Can": "Syntagma canonum", 
   "Poenit. Cont. Virg": "de poenitentia, continentia et uirginitate", 
   "Canonar": "Canonaria"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PTOL. $2": [
  "Ptolemaeus", 
  {
   "Vocab": "de differentia vocabulorum"
  }, 
  [
   "", 
   "", 
   "lexicographus", 
   ""
  ]
 ], 
 "ATH.": [
  "Athenaeus", 
  {
   "Epit": "Epitome"
  }, 
  [
   "II/III d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "GREG.": [
  "Gregentius Tapharensis", 
  {
   "Disp": "Disputatio", 
   "Leg. Hom": "Leges Homeritarum"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "OPP. $2": [
  "Oppianus Apamensis", 
  {
   "C": "Cynegetica", 
   "Sch": "Scholia"
  }, 
  [
   "III d. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "EPIGONI": [
  "Epigoni", 
  {}, 
  [
   "VII a. C. ?", 
   "", 
   "poema epicum", 
   ""
  ]
 ], 
 "CTESIBIUS CHALCIDENSIS": [
  "Ctesibius Chalcidensis", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DOROTH. $2": [
  "Dorotheus Sidonius", 
  {}, 
  [
   "I d. C.", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "HELIOD. HIST.": [
  "Heliodorus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "periegeta", 
   ""
  ]
 ], 
 "OPP.": [
  "Oppianus Anazarbensis", 
  {
   "H": "Halieutica", 
   "H. Par": "Halieuticorum paraphrasis", 
   "Sch": "Scholia"
  }, 
  [
   "II d. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "INC. LESB.": [
  "Incerti auctoris Lesbii fragmenta", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANDROSTH.": [
  "Androsthenes", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "NESTOR": [
  "Nestor", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "B.": [
  "Bacchylides", 
  {
   "Fr": "Fragmenta", 
   "p. 118: Sch": "Scholia"
  }, 
  [
   "V a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "PARMENO $1": [
  "Parmeno", 
  {}, 
  [
   "III a. C.", 
   "", 
   "iambographus", 
   ""
  ]
 ], 
 "PINYTUS": [
  "Pinytus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "CLEM. AL.": [
  "Clemens Alexandrinus", 
  {
   "Paed. Hymn": "Hymnus", 
   "Ecl": "Eclogae", 
   "Sch": "Scholia", 
   "Prot": "Protrepticus", 
   "Fr": "Fragmenta", 
   "Ex. Thdot": "Excerpta ex Theodoto", 
   "QDS": "quis diues saluetur", 
   "Strom": "Stromateis", 
   "Paed": "Paedagogus"
  }, 
  [
   "II/III d. C.", 
   "", 
   "theologus", 
   ""
  ]
 ], 
 "PHRYN. COM.": [
  "Phrynichus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "SOPAT. $2": [
  "Sopater", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "gnomologus", 
   ""
  ]
 ], 
 "AMM. MARC.": [
  "Ammianus Marcellinus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MEROPIS": [
  "Meropis", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "poema epicum", 
   ""
  ]
 ], 
 "IOHANNES ALEXANDRINUS": [
  "Iohannes Alexandrinus", 
  {
   "in Hp. Nat. Puer": "in librum Hippocratis de natura pueri", 
   "in Hp. Epid": "in Hippocratis Epidemiorum librum VI"
  }, 
  [
   "VI/VII d. C.", 
   "", 
   "medicus (Io. Alex. )", 
   ""
  ]
 ], 
 "ARISTOCL. HIST.": [
  "Aristocles", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus et epigrammaticus", 
   ""
  ]
 ], 
 "PS. NONN.": [
  "Pseudo Nonnus", 
  {
   "Comm. in Or": "in IV orationes Gregorii Nazianzeni commentarii"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "BATO": [
  "Bato", 
  {}, 
  [
   "III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "TESTAMENTUM ADAE": [
  "Testamentum Adae", 
  {}, 
  [
   "III d. C. ?", 
   "", 
   "(T. Ad. A, B)", 
   ""
  ]
 ], 
 "ARISTAEN.": [
  "Aristaenetus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "APOLLOD. GEL.": [
  "Apollodorus Gelous", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "LONGUS": [
  "Longus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "scriptor eroticus", 
   ""
  ]
 ], 
 "DIONYS. ELEG.": [
  "Dionysius Chalcus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "elegiacus", 
   ""
  ]
 ], 
 "CALLISTH. SYB.": [
  "Callisthenes Sybarus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PEDIASIM.": [
  "Pediasimus", 
  {}, 
  [
   "", 
   "", 
   "mythographus", 
   ""
  ]
 ], 
 "HEGEM.": [
  "Hegemo", 
  {
   "Phil": "Philinna"
  }, 
  [
   "V a. C.", 
   "", 
   "comicus et parodus", 
   ""
  ]
 ], 
 "APOLLOD.": [
  "Apollodorus", 
  {
   "Hist": "Fragmenta historica", 
   "Fr": "Fragmenta", 
   "Epit": "Epitome", 
   "Bibliotheca": "Bibliotheca"
  }, 
  [
   "II a. C.", 
   "", 
   "mythographus", 
   ""
  ]
 ], 
 "CLEARCH.": [
  "Clearchus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "APOLLOPH. STOIC.": [
  "Apollophanes", 
  {}, 
  [
   "III a. C.", 
   "", 
   "stoicus", 
   ""
  ]
 ], 
 "ATHENAG.": [
  "Athenagoras Atheniensis", 
  {
   "Res": "de resurrectione mortuorum", 
   "Leg": "Legatio pro Christianis"
  }, 
  [
   "II d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "MAEANDRIUS": [
  "Maeandrius", 
  {}, 
  [
   "a. Call.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CYR.": [
  "Cyrilli glossarium", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DAUID": [
  "Dauid", 
  {
   "in Porph": "in Porphyrii Isagogen commentarium", 
   "Prol": "Prolegomena Philosophiae"
  }, 
  [
   "VI d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "ALEX. POLYH.": [
  "Alexander Polyhistor", 
  {}, 
  [
   "I a C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EURYPH.": [
  "Euryphamus", 
  {}, 
  [
   "", 
   "", 
   "pythagoricus", 
   ""
  ]
 ], 
 "ATTIC.": [
  "Atticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "ZENODORUS": [
  "Zenodorus", 
  {}, 
  [
   "d. D. H.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "CAEL. P.": [
  "Caelestinus", 
  {
   "Ep. Thds": "Epistula ad Theodosium", 
   "Ep. CP": "Epistulae ad Constantinopolitanos", 
   "Ep. Io. Ant": "Epistula ad Iohannem Antiochenum", 
   "Ep. Cyr": "Epistula ad Cyrillum", 
   "Ep. Episc": "Epistula ad episcopos", 
   "Ep. Syn": "Epistula ad synodum Ephesinam", 
   "Ep. Nest": "Epistula ad Nestorium", 
   "Ep. Flau": "Epistula ad Fauianum"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "papa", 
   ""
  ]
 ], 
 "LUC. AL.": [
  "Lucius Alexandrinus", 
  {
   "Fr. Pasch": "Fragmentum sermonis in Pascha"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "CURT.": [
  "Curtius Rufus, Quintus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "rhetor e historicus", 
   ""
  ]
 ], 
 "LYCURG.": [
  "Lycurgus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV a. C.", 
   "", 
   "orator", 
   ""
  ]
 ], 
 "ANTIG. NIC.": [
  "Antigonus Nicaenus", 
  {}, 
  [
   "imper. ,", 
   "", 
   "astrologus", 
   ""
  ]
 ], 
 "POSIDON.": [
  "Posidonius", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "VIT. A.": [
  "Vitae Aeschyli", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SERUIUS": [
  "Seruius", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ISID. PEL.": [
  "Isidorus Pelusiota", 
  {
   "Ep": "Epistulae reliquae"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "CTESIPHO": [
  "Ctesipho", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EUGEO": [
  "Eugeo", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PS. HDT.": [
  "Pseudo Herodotus", 
  {
   "Vit. Hom": "Vita Homeri"
  }, 
  [
   "", 
   "", 
   "biographus", 
   ""
  ]
 ], 
 "TER. MAUR.": [
  "Terentianus Maurus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "grammaticus latinus", 
   ""
  ]
 ], 
 "ANONYMI IN HERCULANENSIBUS PAPYRIS": [
  "Anonymi in Herculanensibus papyris", 
  {
   "Herc": "uaria opera aliubi non edita"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PATROCLES": [
  "Patrocles", 
  {}, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "APOLLOD. $2": [
  "Apollodorus Damascenus", 
  {
   "Poliorc": "Commentarius poliorceticus"
  }, 
  [
   "II d. C.", 
   "", 
   "mechanicus", 
   ""
  ]
 ], 
 "THEODOS.": [
  "Theodosius Alexandrinus", 
  {
   "Sp": "Spuria", 
   "Exc. Dial": "Excerptum", 
   "Can": "Canones"
  }, 
  [
   "IV d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "EPIGRAMMATUM FRAGMENTA PAPYRACEA": [
  "Epigrammatum Fragmenta Papyracea", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SYM. STYL. IUN.": [
  "Symeo Stylites Iunior", 
  {
   "Ep. Iust": "Epistula ad Iustinum Iuniorem", 
   "Ascet": "Sermones ascetici", 
   "Imag": "de sacris imaginibus"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "DIONYSIUS": [
  "Dionysius", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "PARTHAX": [
  "Parthax", 
  {}, 
  [
   "II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ORIB.": [
  "Oribasius", 
  {
   "ad loc": "ad loc", 
   "Collectionum medicarum reliquiae": "Collectionum medicarum reliquiae", 
   "Syn": "Synopsis", 
   "Ec": "Eclogae", 
   "Eup": "Euporista", 
   "Inc": "Libri incerti"
  }, 
  [
   "IV d. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "LYSANIAS": [
  "Lysanias", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "BLEMYOM.": [
  "Blemyomachia", 
  {}, 
  [
   "V d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHARO NAUCR.": [
  "Charo Naucratius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ARISTO HIST.": [
  "Aristo", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ANTIPHO TRAG.": [
  "Antipho", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "HEGEMO": [
  "Hegemo", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ANON. HIER.": [
  "Anonymus Hierosolymitanus", 
  {
   "Luc": "Fragmenta in Eu. Luc"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "TAT.": [
  "Tatianus", 
  {
   "Diat": "Diatessaron (fragmentum)", 
   "Orat": "Oratio ad Graecos", 
   "Fr": "Fragmenta"
  }, 
  [
   "II d. C.", 
   "", 
   "apologeta", 
   ""
  ]
 ], 
 "COMANUS": [
  "Comanus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "ORPH.": [
  "Orphica", 
  {
   "A": "Argonautica", 
   "h. ad Mus": "Hymnus ad Musaeum", 
   "Fr": "Fragmenta", 
   "L. Ker": "Lithica Kerygmata", 
   "H": "Hymni", 
   "L": "Lithica", 
   "Comm": "Commentaria in Theogoniam Orphicam", 
   "Th": "Theogonia apud papyrum in Derveni repertam"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYS. CHAL.": [
  "Dionysius Chalcidensis", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "NICOCL.": [
  "Nicocles Laco", 
  {}, 
  [
   "a. I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "DIALOGI": [
  "Dialogi", 
  {
   "Dial. Tim. et Aquil": "Dialogus Timothei et Aquilae", 
   "Dial. Mont. et Orth": "Dialogus montanistae et orthodoxi", 
   "Dial. Ath. et Zacch": "Dialogus Athanasii et Zacchaei"
  }, 
  [
   "IV d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHRYSERUS": [
  "Chryserus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "AGACLYT.": [
  "Agaclytus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HELL. OXY.": [
  "Hellenica Oxyrhynchia", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIGEN.": [
  "Antigenes", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ONAT.": [
  "Onatas", 
  {}, 
  [
   "III a. C.", 
   "", 
   "pythagoricus", 
   ""
  ]
 ], 
 "DIOG. OEN.": [
  "Diogenes Oenoandensis", 
  {}, 
  [
   "II d. C.", 
   "", 
   "epicureus", 
   ""
  ]
 ], 
 "EPHIPP.": [
  "Ephippus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "THEO SM.": [
  "Theo Smyrnaeus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "GALL.": [
  "Gallus Caesar", 
  {
   "Ep": "Epistula ad Iulianum imperatorem"
  }, 
  [
   "IV d. C.", 
   "", 
   "epistolographus", 
   ""
  ]
 ], 
 "PACH.": [
  "Pachomius Tabennensis", 
  {
   "Poen": "Poenae monachorum", 
   "Ep": "Epistulae", 
   "Reg": "Excerpta e regula"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "APOLLONID. TRAG.": [
  "Apollonides", 
  {}, 
  [
   "II a. C.", 
   "", 
   "tragicus", 
   ""
  ]
 ], 
 "ATH. HIST.": [
  "Athenaeus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SEMERONIUS": [
  "Semeronius", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "HARP. ASTR.": [
  "Harpocratio", 
  {}, 
  [
   "I d. C.", 
   "", 
   "medicus et astrologus", 
   ""
  ]
 ], 
 "ARISTON.": [
  "Aristonicus Alexandrinus", 
  {
   "Fr. Hist": "Fragmenta historica", 
   "Od": "de signis Odysseae", 
   "Il": "de signis Iliadis"
  }, 
  [
   "I d. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "HEGESIAS CYR.": [
  "Hegesias Cyrenaeus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "TIM. BERYT.": [
  "Timotheus Berytensis", 
  {
   "Ep. Homon": "Epistula ad Homonium", 
   "Fr": "Fragmenta", 
   "Ep. Prosd": "Fragmentum epistulae ad Prosdocium"
  }, 
  [
   "IV d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "IUL.": [
  "Iulianus", 
  {
   "Caes": "Caesares", 
   "Fr": "Fragmentum", 
   "ad Ath": "Epistula ad Athenienses", 
   "Ep": "Epistulae", 
   "ad Them": "Epistula ad Themistium", 
   "Gal": "contra Galilaeos", 
   "Mis": "Misopogo", 
   "Or": "Orationes"
  }, 
  [
   "IV d. C.", 
   "", 
   "imperator", 
   ""
  ]
 ], 
 "PROXEN. $2": [
  "Proxenus", 
  {
   "Chal": "Chalcidica"
  }, 
  [
   "III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "NICOL. COM.": [
  "Nicolaus", 
  {}, 
  [
   "II a. C. ?", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "PHILOXEN.": [
  "Philoxenus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "PLACIT.": [
  "Placita Philosophorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMENEUMATA GRAECOLATINA": [
  "Hermeneumata Graecolatina", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "OLYMP. HIST.": [
  "Olympiodorus", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "ISIDORUS": [
  "Isidorus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "hymnologus", 
   ""
  ]
 ], 
 "GERM.": [
  "Germanicus Caesar", 
  {
   "Arat": "Aratea"
  }, 
  [
   "I a. C. /", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "ARETAD.": [
  "Aretades Cnidius", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "PERIPL. M. RUBRI": [
  "Periplus Maris Rubri", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYC. MED.": [
  "Lycus Neapolitanus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "CRITO COM.": [
  "Crito", 
  {}, 
  [
   "II a. C.", 
   "", 
   "comicus", 
   ""
  ]
 ], 
 "PELAGON.": [
  "Pelagonius", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "ueterinarius", 
   ""
  ]
 ], 
 "LEONT. MON.": [
  "Leontius Monachus", 
  {
   "Nat": "Encomium in natale sancti Iohannis prophetae"
  }, 
  [
   "VI d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "CONST. APP.": [
  "Constitutiones apostolorum", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMACHIDAS RHODIUS": [
  "Timachidas Rhodius", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "historicus et epicus", 
   ""
  ]
 ], 
 "ARTAXERXES REX PERSARUM": [
  "Artaxerxes rex Persarum", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "epistolographus", 
   ""
  ]
 ], 
 "ELIAS": [
  "Elias", 
  {
   "in APr": "Commentarium in Analytica Priora", 
   "in Porph": "in Porphyrii Isagogen commentarium", 
   "in Cat": "in Aristotelis categorias commentarium"
  }, 
  [
   "VI d. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "ATHENAEUS": [
  "Athenaeus", 
  {}, 
  [
   "", 
   "", 
   "geographus", 
   ""
  ]
 ], 
 "IOHANNES EPIPHANIENSIS": [
  "Iohannes Epiphaniensis", 
  {
   "Hist": "Fragmentum historicum"
  }, 
  [
   "VI d. C.", 
   "", 
   "historicus (Io. Epiph. )", 
   ""
  ]
 ], 
 "EPILOGUS MOSQUENSIS": [
  "Epilogus Mosquensis", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PTOL. CYR.": [
  "Ptolemaeus Cyrenaeus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "D. C.": [
  "Dio Cassius", 
  {
   "Epit. Xiph": "Epitome Xiphilini", 
   "Epit": "Epitome Zonarae"
  }, 
  [
   "II/III d. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "IASO CYR.": [
  "Iaso Cyrenaeus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "APOSTOL.": [
  "Apostolius", 
  {}, 
  [
   "XV d. C.", 
   "", 
   "paroemiographus", 
   ""
  ]
 ], 
 "MENELAUS AEGAEUS": [
  "Menelaus Aegaeus", 
  {}, 
  [
   "d. III a. C.", 
   "", 
   "epicus", 
   ""
  ]
 ], 
 "PAUS.": [
  "Pausanias", 
  {
   "Sch": "Scholia"
  }, 
  [
   "II d. C.", 
   "", 
   "periegeta", 
   ""
  ]
 ], 
 "ZENOD.": [
  "Zenodotus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "ACUS.": [
  "Acusilaus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "IBYC.": [
  "Ibycus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "lyricus", 
   ""
  ]
 ], 
 "LYC.": [
  "Lycophro", 
  {}, 
  [
   "III a. C.", 
   "", 
   "sophista", 
   ""
  ]
 ], 
 "CILLACTOR": [
  "Cillactor", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARINUS": [
  "Marinus", 
  {}, 
  [
   "", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "GALEOM.": [
  "Galeomyomachia", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SELEUC.": [
  "Seleucus", 
  {
   "Fr. Hist": "Fragmenta historica", 
   "Fr": "Fragmenta"
  }, 
  [
   "I d. C.", 
   "", 
   "grammaticus et historicus", 
   ""
  ]
 ], 
 "DIONYS. MINOR": [
  "Dionysius Syracusius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "elegiacus", 
   ""
  ]
 ], 
 "SOSICR. HIST.": [
  "Sosicrates", 
  {}, 
  [
   "II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "MARIN.": [
  "Marinus", 
  {
   "Procl": "Vita Procli"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "biographus", 
   ""
  ]
 ], 
 "CARPH.": [
  "Carphyllides", 
  {}, 
  [
   "III a. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "THOM. MAG.": [
  "Thomas Magister", 
  {}, 
  [
   "XIII/", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "SABIN. $2": [
  "Sabinus Constantiensis", 
  {
   "Ep": "Epistula"
  }, 
  [
   "V d. C.", 
   "", 
   "scriptor ecclesiasticus", 
   ""
  ]
 ], 
 "LYCO": [
  "Lyco", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "pythagoricus", 
   ""
  ]
 ], 
 "PTOL. EPITH.": [
  "Ptolemaeus Epithetes", 
  {}, 
  [
   "II a. C.", 
   "", 
   "grammaticus", 
   ""
  ]
 ], 
 "AQ.": [
  "Aquila", 
  {}, 
  [
   "II d. C.", 
   "", 
   "interpres Veteris Testamenti", 
   ""
  ]
 ], 
 "ARISTO AL.": [
  "Aristo Alexandrinus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "CASTOR": [
  "Castor", 
  {}, 
  [
   "", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "EREN(N)IUS": [
  "Eren(n)ius", 
  {}, 
  [
   "", 
   "", 
   "lexicographus", 
   ""
  ]
 ], 
 "PSEUDO ACRO": [
  "Pseudo Acro", 
  {
   "C": "Carmina", 
   "Ep": "Epistulae", 
   "Sat": "Saturae"
  }, 
  [
   "VI/", 
   "", 
   "scholiasta", 
   ""
  ]
 ], 
 "SEREN.": [
  "Serenus", 
  {
   "Sect. Con": "Sectio coni", 
   "Sect. Cyl": "Sectio cylindri"
  }, 
  [
   "IV d. C.", 
   "", 
   "geometra", 
   ""
  ]
 ], 
 "PROMATHID.": [
  "Promathidas", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "SEXTIUS": [
  "Sextius", 
  {}, 
  [
   "", 
   "", 
   "medicus", 
   ""
  ]
 ], 
 "LEX. PAR. GR.": [
  "Lexique de botanique. Parisinus Graecus 1419", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "STRAT.": [
  "Strato", 
  {}, 
  [
   "II d. C.", 
   "", 
   "epigrammaticus", 
   ""
  ]
 ], 
 "BATO SINOP.": [
  "Bato Sinopensis", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "historicus", 
   ""
  ]
 ], 
 "CRANTOR": [
  "Crantor", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "philosophus academicus", 
   ""
  ]
 ], 
 "DION. CALLIPH.": [
  "Dionysius Calliphontis filius", 
  {}, 
  [
   "I a. C. ?", 
   "", 
   "geographus", 
   ""
  ]
 ], 
 "DAM. MUS.": [
  "Damo", 
  {}, 
  [
   "V a. C.", 
   "", 
   "musicus", 
   ""
  ]
 ], 
 "HIERONYM. PHIL.": [
  "Hieronymus Rhodius", 
  {}, 
  [
   "III a. C.", 
   "", 
   "philosophus", 
   ""
  ]
 ], 
 "ARISTAENET.": [
  "Aristaenetus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "epistolographus", 
   ""
  ]
 ]
};

let abkAWgrkl = {
 "MAX. TYR.": [
  "Maximos Tyrios", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAKR.": [
  "Anakreon", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DION CHRYS.": [
  "Dion Chrysostomos", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLAT.": [
  "Platon", 
  {
   "Lys.": "Lysis", 
   "Hipparch.": "Hipparchos", 
   "rep.": "de re publica", 
   "Kleit.": "Kleitophon", 
   "Hipp. min.": "Hippias minor", 
   "Ax.": "Axiochos", 
   "Eryx.": "Eryxias", 
   "Phaid.": "Phaidon", 
   "apol.": "apologia", 
   "Phil.": "Philebos", 
   "Min.": "Minos", 
   "Krit.": "Kriton", 
   "Dem.": "Demodokos", 
   "Tim.": "Timaios", 
   "soph.": "sophista", 
   "def.": "definitiones", 
   "Ion": "Ion", 
   "Thg.": "Theages", 
   "epin.": "epinomis", 
   "epist.": "epistulae", 
   "Prot.": "Protagoras", 
   "Parm.": "Parmenides", 
   "Tht.": "Theaitetos", 
   "Euthyphr.": "Euthyphron", 
   "Men.": "Menon", 
   "Phaidr.": "Phaidros", 
   "Kritias": "Kritias", 
   "Krat.": "Kratylos", 
   "Sis.": "Sisyphos", 
   "leg.": "leges", 
   "Euthyd.": "Euthydemos", 
   "Alk. 2": "Alkibiades 2", 
   "Alk. 1": "Alkibiades 1 (Stephanus)", 
   "symp.": "symposium", 
   "Lach.": "Laches", 
   "Mx.": "Menexenos", 
   "Gorg.": "Gorgias", 
   "polit.": "politicus", 
   "Hipp. mai.": "Hippias maior", 
   "Charm.": "Charmides", 
   "erast.": "erastae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DION. HAL.": [
  "Dionysios Halicarnasseus", 
  {
   "rhet.": "ars rhetorica", 
   "ant.": "antiquitates Romanae", 
   "comp.": "de compositione verborum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIK.": [
  "Epikuros", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HOM. $1": [
  "Homeros", 
  {
   "Il.": "Ilias", 
   "Od.": "Odyssee"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MEN.": [
  "Menandros", 
  {
   "Sam.": "Samia", 
   "Pk.": "Perikeiromene", 
   "Epitr.": "Epitrepontes", 
   "Dysk.": "Dyskolos", 
   "fr.": "fragmentum (K\u00f6rte)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYKURG.": [
  "Lykurgos", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOSTR.": [
  "Philostratos", 
  {
   "imag.": "imagines", 
   "Ap.": "vita Apollonii", 
   "soph.": "vitae sophistarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHOT.": [
  "Photios", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APUL.": [
  "Apuleius", 
  {
   "apol.": "apologia", 
   "met.": "metamorphoses", 
   "flor.": "florida"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOKR.": [
  "Theokritos", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AISCHIN.\u00a0": [
  "Aischines", 
  {
   "Tim.": "in Timarchum", 
   "Ctes.": "in Ctesiphontem", 
   "leg.": "de falsa legatione"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAXAG.": [
  "Anaxagoras", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLUT.": [
  "Plutarchos", 
  {
   "de Pyth. or.": "de Pythiae oraculis", 
   "am.": "amatorius", 
   "qu.Gr.": "quaestiones Graecae", 
   "symp.": "quaestiones convivales", 
   "de E": "de E apud Delphos", 
   "mor.": "moralia", 
   "Is.": "de Iside et Osiride", 
   "vitae parallelae": "vitae parallelae", 
   "de sera": "de sera numinis vindicta", 
   "qu.R.": "quaestiones Romanae", 
   "de def. or.": "de defectu oraculorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "XEN.": [
  "Xenophon", 
  {
   "hipp.": "hipparchicus", 
   "Ag.": "Agesilaos", 
   "Lak. pol.": "Lakedaimonion politeia", 
   "Kyr.": "Cyrupaideia", 
   "equ.": "de equitandi ratione", 
   "vect.": "de vectigalibus", 
   "an.": "anabasis", 
   "mem.": "memorabilia", 
   "oik.": "oeconomicus", 
   "symp.": "symposium", 
   "apol.": "apologia", 
   "kyn.": "cynegeticus", 
   "Hier.": "Hieron", 
   "hell.": "Hellenica", 
   "Ath. pol.": "Athenaion politeia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYKOPHR.": [
  "Lykophron", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IOS.": [
  "Iosephos", 
  {
   "vita": "de sua vita", 
   "ant. Iud.": "antiquitates Iudaicae", 
   "c. Ap.": "contra Apionem", 
   "bell. Iud.": "bellum Iudaicum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTOPH.": [
  "Aristophanes", 
  {
   "Eccl.": "Ecclesiazusae", 
   "Lys.": "Lysistrata", 
   "Equ.": "Equites", 
   "Pax": "Pax", 
   "Ran.": "Ranae", 
   "Av.": "Aves", 
   "Plut.": "Plutus", 
   "Vesp.": "Vespae", 
   "Thesm.": "Thesmophoriazusae", 
   "Ach.": "Acharnenses", 
   "Nub.": "Nubes"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOPHR.": [
  "Theophrastos", 
  {
   "c. plant.": "de causis plantarum", 
   "h. plant.": "historia plantarum", 
   "char.": "characteres"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "STRAB.": [
  "Strabon", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NIKOM.": [
  "Nikomachos", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAXIMEN.": [
  "Anaximenes", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTOX.": [
  "Aristoxenos", 
  {
   "harm.": "harmonica"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AIN.": [
  "Aineias", 
  {
   "takt.": "Taktikos"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLOD.": [
  "Apollodoros", 
  {
   "bibliotheke": "bibliotheke"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOL.": [
  "Solon", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUKL.": [
  "Eukleides", 
  {
   "elem.": "elementa"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "XENOPHAN.": [
  "Xenophanes", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PIND.": [
  "Pindar", 
  {
   "O.": "Olympien", 
   "P.": "Pythien", 
   "fr.": "Fragmente (Snell/Maehler)", 
   "N.": "Nemeen", 
   "I.": "Isthmien"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IAMBL.": [
  "Iamblichos", 
  {
   "protr.": "protrepticus in philosophiam", 
   "de myst.": "de mysteriis", 
   "v. P.": "de vita Pythagorica"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEM.": [
  "Themistios", 
  {
   "or.": "orationes"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "OREIB.": [
  "Oreibasios", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARNOB.": [
  "Arnobius", 
  {
   "adversus nationes": "adversus nationes"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GREG. NYSS.": [
  "Gregorius Nyssenus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AISCHYL.": [
  "Aischylos", 
  {
   "Ag.": "Agamemnon", 
   "Eum.": "Eumenides", 
   "Prom.": "Prometheus", 
   "Suppl.": "Supplices", 
   "Sept.": "Septem adversus Thebas", 
   "Pers.": "Persae", 
   "Choeph.": "Choephoroi"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATHEN.": [
  "Athenaios", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HES.": [
  "Hesiodos", 
  {
   "theog.": "Theogonia", 
   "erg.": "opera et dies", 
   "scut.": "scutum", 
   "cat.": "catalogus feminarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "STESICH.": [
  "Stesichoros", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHRYN.": [
  "Phrynichos", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERAKL. PONT.": [
  "Herakleides Pontikos", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUS.": [
  "Eusebios", 
  {
   "vita Const.": "de vita Constantini", 
   "Dem. Ev.": "Demonstratio Evangelica", 
   "Pr. Ev.": "Praeparatio Evangelica", 
   "On.": "Eusebios, Onomastikon (Klostermann 1904)", 
   "HE": "Historia Ecclesiastica"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NIK.": [
  "Nikandros", 
  {
   "Ther.": "Theriaka", 
   "Alex.": "Alexipharmaka"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROK.": [
  "Prokopios", 
  {
   "aed.": "de aedificiis", 
   "BV": "bellum Vandalicum", 
   "BG": "bellum Gothicum", 
   "BP": "bellum Persicum", 
   "HA": "historia arcana"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARTEM.": [
  "Artemidoros", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ORPH.": [
  "Orpheus", 
  {
   "h.": "hymni", 
   "fr.": "fragmentum (Kern)", 
   "Arg.": "Argonautika"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DION. PER.": [
  "Dionysios Periegetes", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POSEID.": [
  "Poseidonios", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GORG.": [
  "Gorgias", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMOSTH.": [
  "Demosthenes", 
  {
   "or.": "orationes"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AIL.": [
  "Ailianos", 
  {
   "var.": "varia historia", 
   "nat.": "de natura animalium"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SKYMN.": [
  "Skymnos", 
  {
   "periegesis": "periegesis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEKAT.": [
  "Hekataios", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOPH.": [
  "Sophokles", 
  {
   "Ichn.": "Ichneutae", 
   "Trach.": "Trachiniae", 
   "El.": "Electra", 
   "Phil.": "Philoctetes", 
   "Oid. K.": "Oedipus Coloneus", 
   "Ai.": "Aias", 
   "Ant.": "Antigone", 
   "Oid. T.": "Oedipus Rex"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AUTOR ABK\u00fcRZUNG": [
  "Autor", 
  {
   "Werk Abk\u00fcrzung": "Werk", 
   "Unterwerke \u2013 Abk\u00fcrzung": "Unterwerke"
  }, 
  [
   "Datierung: start_year", 
   "Datierung: end_year", 
   "Notizen", 
   "Zusatz"
  ]
 ], 
 "EUR.": [
  "Euripides", 
  {
   "Alc.": "Alcestis", 
   "Hipp.": "Hippolytus", 
   "El.": "Electra", 
   "Tro.": "Troades", 
   "Heraclid.": "Heraclidae", 
   "Bacch.": "Bacchae", 
   "Med.": "Medea", 
   "Phoen.": "Phoenissae", 
   "Herc.": "Hercules", 
   "Or.": "Orestes", 
   "Ion": "Ion", 
   "Iph. T.": "Iphigenia Taurica", 
   "Cycl.": "Cyclops", 
   "Hec.": "Hecuba", 
   "Suppl.": "Supplices", 
   "Andr.": "Andromacha", 
   "Hel.": "Helena", 
   "Rhes.": "Rhesus", 
   "Iph. A.": "Iphigenia Aulidensis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLL. RHOD.": [
  "Apollonios Rhodios", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AND.": [
  "Andokides", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SUDA": [
  "Suda = Suidas", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYS.": [
  "Lysias", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOM.": [
  "Diomedes", 
  {
   "ars grammatica": "ars grammatica"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APP.": [
  "Appianos", 
  {
   "It.": "Italica", 
   "Samn.": "Samnitica", 
   "Mithr.": "Mithridatius", 
   "Lib.": "Libyca", 
   "Ib.": "Iberica", 
   "Ill.": "Illyrica", 
   "civ.": "bella civilia", 
   "Celt.": "Celtica", 
   "reg.": "regia", 
   "Hann.": "Hannibalica", 
   "Sic.": "Sicula", 
   "Mac.": "Macedonica", 
   "Num.": "Numidica", 
   "Syr.": "Syriaca"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GREG. NAZ.": [
  "Gregorius Nazianzenus", 
  {
   "or.": "orationes", 
   "epist.": "epistulae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HESYCH.": [
  "Hesychios", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IOH. MAL.": [
  "Iohannes Malalas", 
  {
   "chronographia": "chronographia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAXIMAND.": [
  "Anaximandros", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOD.": [
  "Diodorus Siculus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EMP.": [
  "Empedokles", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOP.": [
  "Theopompos", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NONN.": [
  "Nonnos", 
  {
   "Dion.": "Dionysiaka"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LUKIAN.": [
  "Lukianos", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HOM.": [
  "", 
  {
   "h.": "hymni Homerici"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYD.": [
  "Lydos", 
  {
   "mens.": "de mensibus", 
   "mag.": "de magistratibus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POL.": [
  "Polybios", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMOG.": [
  "Hermogenes", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ISOKR.": [
  "Isokrates", 
  {
   "or.": "orationes"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SKYL.": [
  "Skylax", 
  {
   "periplus": "periplus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASCON.": [
  "Asconius", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CASS. DIO": [
  "Cassius Dio", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPOKR.": [
  "Hippokrates", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTOT.": [
  "Aristoteles", 
  {
   "div.": "de divinatione", 
   "mir.": "mirabilia", 
   "metaph.": "metaphysica", 
   "eth. Eud.": "ethica Eudemia", 
   "rhet.": "rhetorica", 
   "top.": "topica", 
   "an. post.": "analytica posteriora", 
   "gen. an.": "de generatione animalium", 
   "mot. an.": "de motu animalium", 
   "poet.": "poetica", 
   "phgn.": "physiognomica", 
   "gen. corr.": "de generatione et corruptione", 
   "eth. Nic.": "ethica Nicomachea", 
   "meteor.": "meteorologica", 
   "Ath. pol.": "Athenaion politeia", 
   "soph. el.": "sophistici elenchi", 
   "m. mor.": "magna moralia", 
   "an.": "de anima", 
   "mund.": "de mundo", 
   "col.": "de coloribus", 
   "hist. an.": "historia animalium", 
   "aud.": "de audibilibus", 
   "pol.": "politica", 
   "sens.": "de sensu", 
   "cael.": "de caelo", 
   "part. an.": "de partibus animalium", 
   "somn.": "de somno et vigilia", 
   "spir.": "de spiritu", 
   "phys.": "physica", 
   "cat.": "categoriae", 
   "rhet. Alex.": "rhetorica ad Alexandrum", 
   "an. pr.": "analytica priora", 
   "oec.": "oeconomica", 
   "probl.": "problemata"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ERATOSTH.": [
  "Eratosthenes", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMM.": [
  "Ammianus Marcellinus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERAKL.": [
  "Herakleitos", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOG. LAERT.": [
  "Diogenes Laertios", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HDT.": [
  "Herodotos", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MELANIPP.": [
  "Melanippides", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MIMN.": [
  "Mimnermos", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIKT.": [
  "Epiktetos", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "STEPH. BYZ.": [
  "Stephanos Byzantios", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PTOL.": [
  "Ptolemaios", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARR.": [
  "Arrianos", 
  {
   "succ.": "historia successorum Alexandri", 
   "an.": "anabasis", 
   "takt.": "taktika", 
   "cyn.": "cynegeticus", 
   "per. p. E.": "periplus ponti Euxini", 
   "Ind.": "Indica"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AISOP.": [
  "Aisopos", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THUK.": [
  "Thukydides", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUST.": [
  "Eustathios", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "STOB.": [
  "Stobaios", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUN.": [
  "Eunapios", 
  {
   "vit. soph.": "vitae sophistarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPHOR.": [
  "Ephoros von Kyme", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYAIN.": [
  "Polyainos", 
  {
   "strategemata": "strategemata"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PORPH.": [
  "Porphyrios", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ]
};

let abkAW = {
 "NECTAR.": [
  "Nectarius", 
  {
   "Aug. epist.": "epistulae ad Augustinum"
  }, 
  [
   "300", 
   "397", 
   "episcopus Constantinopolitani?", 
   ""
  ]
 ], 
 "PS. VAL. CEM.": [
  "Pseudo-Valerianus Cemenelensis", 
  {
   "hom.": "homilia in dedicatione ecclesiae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GAVD.": [
  "Gaudentius", 
  {
   "Aug. c. Gaud.": "epistularum fragmenta"
  }, 
  [
   "350", 
   "450", 
   "Donatistarum episcopus", 
   ""
  ]
 ], 
 "CHRON.": [
  "", 
  {
   "Alex. chron. I": "chronicum Alexandrinum q. d."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. CENS.": [
  "", 
  {
   "frg.": "fragmentum Censorini quod vocatur (perperam erat librariis genuini opusculi pars)"
  }, 
  [
   "200", 
   "299", 
   "", 
   ""
  ]
 ], 
 "OV.": [
  "P. Ovidius Naso", 
  {
   "medic.": "medicaminum faciei femineae quae exstant", 
   "epist.": "epistulae (heroides)", 
   "trist.": "tristia", 
   "Ib.": "Ibis", 
   "am.": "amores", 
   "Med. frg.": "Medeae tragoediae fragmenta", 
   "Pont.": "epistulae ex Ponto", 
   "carm. frg.": "carminum fragmenta", 
   "ars": "ars amatoria", 
   "fast.": "fasti (opus imperfectum)", 
   "rem.": "remedia amoris", 
   "met.": "metamorphoses", 
   "hal.": "halieutica"
  }, 
  [
   "-43", 
   "17", 
   "", 
   ""
  ]
 ], 
 "VAL. SORAN.": [
  "Q. Valerius Soranus", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-140", 
   "-82", 
   "", 
   ""
  ]
 ], 
 "EXVP.": [
  "Iulius Exuperantius", 
  {
   "opusculum (sc. de Mario; sequitur Sallustium)": "opusculum (sc. de Mario; sequitur Sallustium)"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "EDICT. $6": [
  "", 
  {
   "Aur. dig.": "M. Aurelii edictum servatum DIG.", 
   "Carac. (Inscr. Maroc. Gascou 100)": "Caracallae", 
   "Aug. (CIL X 4842)": "Augusti de aquaeductu Venafrano", 
   "Diocl.": "Diocletiani aliorumque de pretiis rerum venalium; exstant fragmenta latina et graeca", 
   "inc. (Chart. lat. ant. X 415)": "incerti de temporibus accusationum", 
   "Iust. de fide": "Iustiniani edictum de recta fide (a. 551) e graeco versum", 
   "imp.": "edicta imperatorum (exempla selecta)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MEN.": [
  "Arrius Menander", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "150", 
   "213", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "EPIT.": [
  "", 
  {
   "Alex.": "epitome rerum gestarum Alexandri Magni"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POL. SILV.": [
  "Polemius Silvius", 
  {
   "laterculus": "laterculus"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "OPP.": [
  "C. Oppius", 
  {
   "hist.": "vitarum fragmenta"
  }, 
  [
   "-100", 
   "-30", 
   "", 
   ""
  ]
 ], 
 "PS. GARG. MART.": [
  "Pseudo-Gargilius Martialis", 
  {
   "fragmenta, quae in codicibus quibusdam subiunguntur": "fragmenta, quae in codicibus quibusdam subiunguntur", 
   "med.": "GARG. MART. med."
  }, 
  [
   "200", 
   "299", 
   "", 
   ""
  ]
 ], 
 "GEST.": [
  "", 
  {
   "Liber.": "gesta Liberii papae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SALV.": [
  "Salvianus", 
  {
   "eccl.": "ad ecclesiam", 
   "epist.": "epistulae", 
   "gub.": "de gubernatione dei"
  }, 
  [
   "400", 
   "475", 
   "presbyter Massiliensis", 
   ""
  ]
 ], 
 "EXPOS.": [
  "", 
  {
   "fid. Caspari Anecd.": "expositiones fidei vel symboli variae anon., e. g. fragm. editum a Caspari, Anecd."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DONATIO": [
  "", 
  {
   "Tiburt.": "a Fl. Valila ecclesiae cuidam Tiburtinae facta", 
   "Monim. (CIL VI 10231)": "Iuliae Monimes"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. TER.": [
  "Pseudo-Terentius", 
  {
   "Andr. alt. exit.": "Andria alter exitus"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "EVTYCH.": [
  "Eutyches", 
  {
   "gramm.": "ars de verbo"
  }, 
  [
   "380", 
   "456", 
   "grammaticus", 
   ""
  ]
 ], 
 "PS. OV.": [
  "Pseudo-Ovidius", 
  {
   "Aen. 12,10": "argumenta decasticha Aeneidos, lib. 12 vers. 10", 
   "buc. georg. 28": "argumenta tetrasticha bucolicon et georgicon, vers. 28 Shackleton Bailey (usque adhuc 24 Riese)", 
   "argum.": "argumenta Vergilii carminum", 
   "epist.": "versus, qui multis Ovidii epistulis heroid. anteponuntur", 
   "Aen. 12 monost.": "eidem argumento praepositum monostichum"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "NOT. $1": [
  "", 
  {
   "or.": "in partibus orientis", 
   "dign.": "notitia dignitatum omnium, tam civilium quam militarium", 
   "occ.": "in partibus occidentis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAVL. $1": [
  "Paulinus", 
  {
   "epigr.": "epigramma"
  }, 
  [
   "400", 
   "499", 
   "(episcopus Baeterrensis?)", 
   ""
  ]
 ], 
 "PAVL. $3": [
  "Paulinus quidam", 
  {
   "paenit.": "sermo de paenitentia ad monachos"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAVL. $2": [
  "Paulinus quidam", 
  {
   "Faust. Rei. epist.": "epistula ad Faustum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LVCR.": [
  "T. Lucretius Carus", 
  {
   "de rerum natura": "de rerum natura"
  }, 
  [
   "-99", 
   "-53", 
   "", 
   ""
  ]
 ], 
 "DIG.": [
  "", 
  {
   "tit. libr.": "tituli librorum, sc. index librorum ad digesta compilanda adhibitorum (graece conscriptus, sed librorum nomina plurima latine redduntur)", 
   "de conc. dig.": "constitutio 'Omnem' (const. de conceptione digestorum altera)", 
   "digesta seu pandectae Iustiniani Augusti, sc. ius iurisconsultorum ex eorum scriptis iussu Iustiniani collectum, mutatum, in novum ordinem redactum, ab Iustiniano confirmatum": "digesta seu pandectae Iustiniani Augusti, sc. ius iurisconsultorum ex eorum scriptis iussu Iustiniani collectum, mutatum, in novum ordinem redactum, ab Iustiniano confirmatum", 
   "de confirm. dig.": "constitutio 'Tanta' (const. de confirmatione digestorum [= COD. Iust. 1,17,2]; recensio graeca: D\u00e9dohken)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ORAT.": [
  "", 
  {
   "Claud. (CIL XIII 1668)": "Claudii de iure honorum Gallis dando", 
   "imp.": "orationes imperatorum inscriptionibus papyrisve traditae", 
   "Hadr. (CIL XIV 3579)": "laudatio funebris ab imp. Hadriano in honorem Matidiae socrus habita", 
   "Vesp. (CIL XIV 3608)": "fragmentum orationis imp. Vespasiani in honorem Ti. Plautii Silvani Aeliani"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GALBA": [
  "Ser. Sulpicius Galba", 
  {
   "Cic. fam.": "ad Ciceronem epistula"
  }, 
  [
   "-100", 
   "-1", 
   "Pr\u00e4tor 54 v. Chr.", 
   ""
  ]
 ], 
 "IVST.": [
  "M. Iunian(i)us Iustinus", 
  {
   "epitoma historiarum Philippicarum Pompei Trogi": "epitoma historiarum Philippicarum Pompei Trogi"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "MET. CEL.": [
  "Q. Caecilius Metellus Celer", 
  {
   "Cic. fam.": "ad Ciceronem epistula"
  }, 
  [
   "-100", 
   "-59", 
   "", 
   ""
  ]
 ], 
 "ORIG.": [
  "Origenis", 
  {
   "in I reg.": "homilia in librum I regum", 
   "in Matth.": "commentariorum in Matthaeum quae exstant"
  }, 
  [
   "185", 
   "254", 
   "scriptor ecclesia", 
   "opera ab anonymis e graeco versa"
  ]
 ], 
 "SVPERSCR.": [
  "", 
  {
   "praef. bibl. monarch. in Marc. cod. A": "superscriptiones in codicibus antiquis, e. g. quae antecedit PRAEF. bibl. monarch. in Marc. in codice A"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TERT.": [
  "Tertullianus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "150", 
   "250", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "CASS.": [
  "C. Cassius Longinus", 
  {
   "ad Ciceronem epistulae": "ad Ciceronem epistulae"
  }, 
  [
   "-85", 
   "-42", 
   "Caesaris interfector", 
   ""
  ]
 ], 
 "PLAVTIVS": [
  "Plautius", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "0", 
   "99", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "EPISC.": [
  "", 
  {
   "Gall. Leo M. epist.": "episcoporum Galliae quorundam epistulae ad Leonem Magnum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALP. $1": [
  "L. Calpurnius Piso Frugi (Censorius)", 
  {
   "hist.": "annalium fragmenta"
  }, 
  [
   "-180", 
   "-120", 
   "historicus", 
   ""
  ]
 ], 
 "NIL.": [
  "N(e)ilus von Ankyra", 
  {
   "magist.": "de magistris et discipulis", 
   "octo vit. vers. A": "de octo vitiis generalibus, versio A"
  }, 
  [
   "399", 
   "499", 
   "", 
   "operum, quae Nilo cuidam (Ancyrano?) aut Euagrio Pontico ascribuntur, versiones lat."
  ]
 ], 
 "PS. MAR. VICTORIN.": [
  "Pseudo-Marius Victorinus", 
  {
   "gramm.": "Aelius Festus Apthonius (Asmonius?), opus grammaticum (initium periit), quod iam saec. V, ut videtur, cum Marii Victorini artis genuinae fragmento", 
   "[hymn.]": "[hymn.]", 
   "ad Iust.": "ad Iustinum Manichaeum", 
   "verb. script.": "de verbis scripturae", 
   "phys.": "de physicis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CONST. $2": [
  "", 
  {
   "veteran.": "constitutiones veteranorum sive diplomata militaria"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHIRON": [
  "", 
  {
   "mulomedicina Chironis q. d.": "mulomedicina Chironis q. d."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "QVADRIG.": [
  "Q. Claudius Quadrigarius", 
  {
   "hist.": "annalium fragm."
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "CONST. $1": [
  "", 
  {
   "Sirmond.": "constitutiones Sirmondianae q. d., sc. principum constitutiones codice Theodosiano nondum edito collectae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRAEF. $2": [
  "", 
  {
   "Salv. eccl.": "praefatio recensionis Bernensis in SALV. eccl."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. $10": [
  "anonymus (AMBROSIAST. ?)", 
  {
   "de trib. mensur.": "de tribus mensuris (sc. Matth. 13,33 memoratis) fragmentum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SCHOL.": [
  "", 
  {
   "Ter.": "scholia in Terentium", 
   "Strozz.": "Strozziana", 
   "Bemb. Ad.": "Bembina", 
   "Veron. Aen.": "codicis rescripti Veronensis bibl. capit. 38 (saec. V/VI) in VERG. Aen., ecl., georg.", 
   "Theb.": "Lactantii Placidi quae feruntur scholia in STAT. Theb.", 
   "Sang.": "Sangermanensia", 
   "Pers.": "scholia Bernensia in PERS.", 
   "Gron. A": "Gronoviana codicis Voss. lat. Q", 
   "Ambr. rec.": "Ambrosiana recentiora codicis rescripti Bobiensis", 
   "Sinait.": "fragmenta Sinaitica scholiorum in Vlpiani libros ad Sabinum", 
   "Iuv.": "scholia in IVV. vetustiora", 
   "Cic.": "scholia in orationes Ciceronis", 
   "ed. Web. 10,546": "edita a Weber", 
   "Basilic.": "scholia graeca in Basilicorum libros", 
   "Hor.": "scholia in Horatium", 
   "Prud. epil.": "scholia in Prudentium", 
   "B 3,283": "scholia codicis Bernensis 45 (saec. X) ab Usener omissa", 
   "Vat.": "codicis Vaticani rescripti", 
   "Ov. Ib.": "scholia in OV. Ib.", 
   "Bern. ecl.": "Bernensia in VERG. ecl. et georg.", 
   "Vet. Lat. Ezech.": "scholia in VET. LAT., e. g. codicis 175 in Ezech.", 
   "Germ.": "scholia in Germanici Aratea", 
   "Clun.": "codicum Cluniacensis et Ambrosiani", 
   "Arat.": "Aratus latinus cum scholiis", 
   "scholia": "scholia", 
   "Suet. Iul.": "scholia (adhuc minus apte 'glossae') codicis Memmiani in SVET. Iul.", 
   "Stat.": "scholia in Statium", 
   "Bob.": "codicis rescripti Bobiensis", 
   "gloss. G carm. 4,15,21": "scholia glossarum G appendicis in HOR., e. g. in carm. 4,15,21", 
   "Opt. Porf. carm.": "scholia in OPT. PORF. carm.", 
   "Vind. ars": "codicis Vindobonensis (saec. X/XI) in HOR. ars", 
   "Verg.": "scholia in Vergilium", 
   "Ach.": "in STAT. Ach.", 
   "carm. 4,15,31sq.": "in HOR. pseudacroniana, e. g. in carm. 4,15,31sq.", 
   "Bas.": "Basileensia", 
   "Medic. ecl.": "codicis Medicei (Laurent. 39. 1) in VERG. ecl.", 
   "Lucan.": "scholia in Lucanum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TARQVIT. PRISC.": [
  "Tarquitius Priscus", 
  {
   "Macr. Sat.": "ostentarii arborarii fragmenta servata apud MACR. Sat."
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "AVX. $1": [
  "Auxentius", 
  {
   "Maximin. c. Ambr.": "epistulae de Vlfila episcopo quae exstant"
  }, 
  [
   "400", 
   "499", 
   "episcopus Durostorensis Arianus", 
   ""
  ]
 ], 
 "ELOG.": [
  "", 
  {
   "Inscr. Ital. XIII": "clarorum virorum elogia (praeter INSCR. column. rostr., v. infra), Inscr. Ital. XIII"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. AGENN.": [
  "Pseudo-Agennius", 
  {
   "commenta gromatica": "commenta gromatica"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POMP. TROG.": [
  "Pompeius Trogus", 
  {
   "hist.": "historiae Philippicae", 
   "prol.": "prologi", 
   "Iust.": "fragmenta varia, e. g. fragm. servatum apud IVST.", 
   "anim. Plin. nat.": "de animalibus"
  }, 
  [
   "-50", 
   "50", 
   "", 
   "fragmentum servatum apud PLIN. nat."
  ]
 ], 
 "PASCENT.": [
  "Pascentius", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "[DESCR.]": [
  "", 
  {
   "[Ierus.]": "descriptio parrochiae Ierusalem"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAECIN.": [
  "A. Caecina", 
  {
   "ad Ciceronem epistula": "ad Ciceronem epistula"
  }, 
  [
   "-100", 
   "-1", 
   "A. fil.", 
   ""
  ]
 ], 
 "[FAVSTIN.]": [
  "Faustinus", 
  {
   "[pass. dom.]": "homilia de passione domini"
  }, 
  [
   "", 
   "", 
   "", 
   "EVSEB. GALLIC. hom. 13,9"
  ]
 ], 
 "TVRN.": [
  "Turnus", 
  {
   "sat. frg.": "saturarum fragm."
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "FRG. $8": [
  "", 
  {
   "de iudic.": "fragmenta Berolinensia de iudiciis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAROCH.": [
  "", 
  {
   "Suev.": "parochiale Suevum sive divisio Theodemiri sive concilium Lucense"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[EGID. MESS.]": [
  "", 
  {
   "[libell.]": "libellus vel epistula petitoria ab (A)egidio et Messiano oblata Symmacho papae"
  }, 
  [
   "", 
   "", 
   "", 
   "EPIST. Arel. 29"
  ]
 ], 
 "[ANON.] $1": [
  "anonymus", 
  {
   "[in psalm.]": "glossae in psalm."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EVSEB. VERC.": [
  "Eusebius <Vercellensis>", 
  {
   "epist.": "epistulae"
  }, 
  [
   "283", 
   "371", 
   "episcopus", 
   ""
  ]
 ], 
 "FIRM.": [
  "Iulius Firmicus Maternus Siculus", 
  {
   "err.": "de errore profanarum religionum", 
   "math.": "mathesis"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "VIGIL. THAPS.": [
  "Vigilius Thapsensis", 
  {
   "c. Eutych.": "contra Eutychetem", 
   "c. Arian.": "contra Arianos, Sabellianos et Photinianos dialogus"
  }, 
  [
   "400", 
   "480", 
   "episcopus", 
   ""
  ]
 ], 
 "IVL. VAL.": [
  "Iulius Valerius Alexander Polemius", 
  {
   "Pseudocallisthenis historia Alexandri Magni e graeco versa": "Pseudocallisthenis historia Alexandri Magni e graeco versa"
  }, 
  [
   "250", 
   "350", 
   "", 
   ""
  ]
 ], 
 "THEOPHIL. ALEX.": [
  "Theophilus Alexandrinus", 
  {
   "praef.": "praefatio in computum paschalem (de observatione sanctae paschae)", 
   "epist.": "epistula ad imp. Theodosium"
  }, 
  [
   "350", 
   "412", 
   "episcopus", 
   ""
  ]
 ], 
 "PS. CASSIOD.": [
  "Pseudo-Cassiodorus", 
  {
   "rhet.": "rhetorica excerpta", 
   "de orat.": "de oratione et de octo partibus orationis", 
   "pasch.": "computus paschalis"
  }, 
  [
   "500", 
   "599", 
   "", 
   ""
  ]
 ], 
 "VVLG.": [
  "", 
  {
   "Philem.": "Pauli epistula ad Philemonem", 
   "Ioel": "Io(h)el", 
   "Phil.": "Pauli epistula ad Philippenses", 
   "thren.": "threni sive lamentationes Hieremiae", 
   "apoc.": "apocalypsis Iohannis apostoli", 
   "Agg.": "Agg(a)eus propheta", 
   "Mal.": "Malachi(as)", 
   "Dan.": "Dani(h)el propheta", 
   "Esth.": "Esther (Hester)", 
   "Soph.": "Sophonias (Sof\u2014)", 
   "Eph.": "Pauli epistula ad Ephesios", 
   "Is.": "Isaias", 
   "Luc.": "euangelium sec. Lucam", 
   "Ruth": "Ruth", 
   "num.": "numeri", 
   "I. II Tim.": "Pauli epistulae ad Timotheum", 
   "Col.": "Pauli epistula ad Colossenses", 
   "eccles.": "ecclesiastes", 
   "I\u2014IV reg.": "libri regum", 
   "I. II par.": "paralipomenon sive verba dierum", 
   "exod.": "exodus", 
   "[I. II Macc.]": "libri Macc(h)ab(a)eorum", 
   "Nah.": "Na(h)um", 
   "[Sirach]": "liber Iesu filii Sirach sive eccle\u00adsiasticus", 
   "gen.": "genesis", 
   "Ier.": "Ieremias (Hieremias)", 
   "Ioh.": "euangelium sec. Iohannem", 
   "I. II. III Ioh.": "epistulae Iohannis", 
   "Gal.": "Pauli epistula ad Galatas", 
   "psalm.": "psalmi (cf. HIER. psalt. sec. Hebr., PSALT. Rom.)", 
   "Ion.": "Iona(s)", 
   "Iob": "Iob", 
   "iud.": "liber iudicum", 
   "I. II Esdr.": "Esdras (Ezras), lib. 1 et 2", 
   "Tit.": "Pauli epistula ad Titum", 
   "Ezech.": "Ezechiel (Hiezechiel) propheta", 
   "Matth.": "euangelium sec. Matth(a)eum", 
   "lev.": "leviticus", 
   "I. II Petr.": "epistulae Petri", 
   "biblia sacra iuxta vulgatam": "biblia sacra iuxta vulgatam", 
   "Os.": "Osea (Osee)", 
   "Hebr.": "Pauli epistula ad Hebraeos", 
   "Iac.": "Iacobi epistula", 
   "Zach.": "Za(c)charias", 
   "[III. IV Esdr.]": "Esdras (Ezras), lib. 3 et 4 (apocr.)", 
   "Rom.": "Pauli epistula ad Romanos", 
   "[sap.]": "sapientia Salomonis", 
   "[Bar.]": "Baruch", 
   "I. II Thess.": "Pauli epistulae ad Thessalonicenses", 
   "Marc.": "euangelium sec. Marcum", 
   "I. II Cor.": "Pauli epistulae ad Corinthios", 
   "Am.": "Amos propheta", 
   "cant.": "canticum canticorum", 
   "Ios.": "Iosue", 
   "prov.": "proverbia Salomonis", 
   "Tob.": "Tobias", 
   "Hab.": "Habacuc (Abacuc) propheta", 
   "Mich.": "Micha(eas)", 
   "act.": "actus apostolorum", 
   "Iudas": "epistula Iudae", 
   "deut.": "deuteronomium", 
   "Iudith": "Iudith", 
   "[or. Man.]": "oratio Manasse (apocr.)", 
   "Abd.": "Abdias propheta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VEREC.": [
  "Verecundus", 
  {
   "in cant.": "commentarii super cantica ecclesiastica", 
   "satisfact.": "carmen de satisfactione paenitentiae"
  }, 
  [
   "500", 
   "552", 
   "episcopus Iuncensis", 
   ""
  ]
 ], 
 "[EXC.]": [
  "", 
  {
   "[Cassiod. inst. app.]": "[Cassiod. inst. app.]"
  }, 
  [
   "", 
   "", 
   "", 
   "CASSIOD. inst. app."
  ]
 ], 
 "PRAEDEST.": [
  "", 
  {
   "liber praedestinatus": "liber praedestinatus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VIB. SEQ.": [
  "Vibius Sequester", 
  {
   "geogr.": "de fluminibus, fontibus, lacubus eqs. libellus geographicus"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "PS. ASCON.": [
  "Pseudo-Asconius", 
  {
   "div. in Caec.": "in divinationem in Q. Caecilium", 
   "Verr.": "in Verrinas (sc. Verr. I. II 1. 2)"
  }, 
  [
   "400", 
   "499", 
   "", 
   "commentarii vel scholia Ciceronis orationum tradita una cum ASCON., sed non ab eo confecta"
  ]
 ], 
 "DECRET.": [
  "", 
  {
   "Ostr. (CIL XI 5750)": "Ostrensium", 
   "Lun. (CIL XI 1354)": "Lunensium", 
   "centon.": "decreta centonariorum (sc. de patronis cooptandis; cf. DECRET. fabr. Reg.)", 
   "Sentin. (CIL XI 5749)": "Sentinatium"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AEDIT.": [
  "Valerius Aedituus", 
  {
   "epigr.": "epigrammata"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "PS. VARRO": [
  "Pseudo-Varro", 
  {
   "sent.": "sententiae"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "CVRIVS": [
  "M'. Curius Patrensis (?)", 
  {
   "ad Ciceronem epistula": "ad Ciceronem epistula"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "PARIS": [
  "Iulius Paris", 
  {
   "epitome Valerii Maximi": "epitome Valerii Maximi"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "LAEL.": [
  "C. Laelius Sapiens", 
  {
   "or. frg. Fest.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud FEST."
  }, 
  [
   "-200", 
   "-123", 
   "", 
   ""
  ]
 ], 
 "HYD.": [
  "Hydatius Lemicus in Gallaecia", 
  {
   "chron. II": "continuatio chronicorum Hieronymianorum (v. HIER. chron.), vol. II"
  }, 
  [
   "400", 
   "469", 
   "", 
   ""
  ]
 ], 
 "FVR. ANT.": [
  "Furius Antias", 
  {
   "carm. frg.": "carmina"
  }, 
  [
   "-150", 
   "-50", 
   "", 
   ""
  ]
 ], 
 "POTAM.": [
  "Potamius", 
  {
   "tract. 2": "tractatus 2 (de martyrio Isaiae prophetae)", 
   "tract. 1": "tractatus 1 (de Lazaro)", 
   "epist. ad Athan.": "epistula ad Athanasium", 
   "[Lazar.]": "[Lazar.]", 
   "subst.": "epistula de substantia patris et filii et spiritus sancti"
  }, 
  [
   "300", 
   "399", 
   "episcopus Olisiponensis", 
   ""
  ]
 ], 
 "ADNOT.": [
  "", 
  {
   "Fronto": "Fronto adnotatus, sc. adnotationes cod. Frontoniani Bobiensis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NOVIVS": [
  "Novius", 
  {
   "Atell.": "Atellanarum fragmenta"
  }, 
  [
   "-150", 
   "-50", 
   "", 
   ""
  ]
 ], 
 "NOT. $6": [
  "", 
  {
   "Tir.": "commentarii notarum Tironianarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NOT. $7": [
  "", 
  {
   "urb. Const.": "notitia urbis Constantinopolitanae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIST. AVG.": [
  "", 
  {
   "Diad.": "Diadumenus Antoninus (vita XVI)", 
   "quatt. tyr.": "quattuor tyranni (sc. Firmus, Saturninus, Proculus, Bonosus; vita XXIX)", 
   "Geta": "Antoninus Geta (vita XIV)", 
   "Did.": "Didius Iulianus (vita IX)", 
   "Valer.": "Valeriani duo (vita XXII)", 
   "Pius": "Antoninus Pius (vita III)", 
   "Max. Balb.": "Maximus et Balbinus (vita XXI)", 
   "Aur.": "M. Aurelius Antoninus philosophus (vita IV)", 
   "Prob.": "Probus (vita XXVIII)", 
   "Ael.": "Aelius (olim Helius; vita II)", 
   "Alb.": "Clodius Albinus (vita XII)", 
   "Opil.": "Opilius Macrinus (vita XV)", 
   "Aurelian.": "Aurelianus (vita XXVI)", 
   "Hadr.": "Hadrianus (vita I)", 
   "Avid.": "Avidius Cassius (vita VI)", 
   "Comm.": "Commodus Antoninus (vita VII)", 
   "Pesc.": "Pescennius Niger (vita XI)", 
   "Heliog.": "Antoninus Heliogabalus (vita XVII)", 
   "Claud.": "Claudius (vita XXV)", 
   "Pert.": "Helvius Pertinax (vita VIII)", 
   "Sept. Sev.": "Septimius Severus (vita X)", 
   "Gall.": "Gallieni duo (vita XXIII)", 
   "Gord.": "Gordiani tres (vita XX)", 
   "Alex.": "Alexander Severus (vita XVIII)", 
   "Maximin.": "Maximini duo (vita XIX)", 
   "Carac.": "Antoninus Caracallus (vita XIII)", 
   "Car.": "Carus et Carinus et Numerianus (vita XXX)", 
   "Tac.": "Tacitus (vita XXVII)", 
   "trig. tyr.": "triginta tyranni (vita XXIV)", 
   "Ver.": "Verus (vita V)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NOT. $5": [
  "", 
  {
   "Suet. gramm.": "notarum, quae versibus apponi consuerunt, laterculus fortasse e Suetonio excerptus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LABEO": [
  "M. Antistius Labeo", 
  {
   "dig.": "fragmenta in digesta (et alibi) servata"
  }, 
  [
   "-54", 
   "11", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "INTERPR.": [
  "", 
  {
   "Gai": "interpretationis institutionum Gai fragmenta, quae in cod. Augustodunensi leguntur"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CASCELL.": [
  "A. Cascellius", 
  {
   "dicta (ex eius libro bene dictorum?) a scriptoribus servata, e. g. dictum apud MACR. Sat.": "dicta (ex eius libro bene dictorum?) a scriptoribus servata, e. g. dictum apud MACR. Sat."
  }, 
  [
   "-100", 
   "-1", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "EVAGR. PONT.": [
  "Euagrius Ponticus", 
  {
   "rec. W": "versio vel recensio W a Wilmart edita", 
   "sent. virg.": "sententiae ad virginem", 
   "rec. H": "versio vel recensio H iam diu nota", 
   "sent. mon.": "sententiae ad monachos", 
   "rec. A": "recensio A, sc. versio nondum contaminata"
  }, 
  [
   "345", 
   "399", 
   "", 
   "opera e graeco versa"
  ]
 ], 
 "FAST. $16": [
  "", 
  {
   "Vind.": "fasti Vindobonenses, sc. epitomae duae chronicorum Italicorum (annalium Ravennatium) mutilae", 
   "II chron. I": "fasti posteriores, vol. I", 
   "I chron. I": "fasti priores, vol. I"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGREST.": [
  "Agrestius", 
  {
   "carm.": "carminis de fide ad Avitum episcopum quae exstant"
  }, 
  [
   "400", 
   "499", 
   "episcopus (Lucensis?)", 
   ""
  ]
 ], 
 "RADEGVND.": [
  "Radegundis", 
  {
   "epist. Greg. Tur. Franc.": "epistula ad episcopos"
  }, 
  [
   "520", 
   "587", 
   "", 
   "v. GREG. TVR. Franc."
  ]
 ], 
 "LIBERAT.": [
  "Liberatus", 
  {
   "breviarium causae Nestorianorum et Eutychianorum": "breviarium causae Nestorianorum et Eutychianorum"
  }, 
  [
   "500", 
   "599", 
   "archidiaconus Carthaginiensis", 
   ""
  ]
 ], 
 "SACR. $1": [
  "", 
  {
   "Gelas.": "liber sacramentorum Romanae ecclesiae sive 'sacramentarium Gelasianum vetus'", 
   "Greg.": "sacr. Gregorianum sive Hadrianum", 
   "sacramentaria": "sacramentaria", 
   "Leon.": "sacr. Veronense sive 'Leonianum'"
  }, 
  [
   "", 
   "", 
   "", 
   "(in quibus textus liturgici cum vetustiores tum recentiores collecti sunt, quare tres collectiones notabiliores afferre satis habemus)"
  ]
 ], 
 "[LVCVLENT.]": [
  "Luculentius", 
  {
   "commentarii in aliquot novi testamenti partes (immo collectio homiliarum de lectionibus liturgicis)": "commentarii in aliquot novi testamenti partes (immo collectio homiliarum de lectionibus liturgicis)"
  }, 
  [
   "850", 
   "950", 
   "", 
   ""
  ]
 ], 
 "MONTAN.": [
  "Iulius Montanus", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "VAL. MAX.": [
  "Valerius Maximus", 
  {
   "facta et dicta memorabilia": "facta et dicta memorabilia"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "VIGIL. TRID.": [
  "Vigilius Tridentinus", 
  {
   "ad Simplic.": "epistula ad Simplicianum episcopum Mediolanensem", 
   "ad Ioh.": "epistula ad Iohannem Chrysostomum"
  }, 
  [
   "350", 
   "405", 
   "episcopus", 
   ""
  ]
 ], 
 "SATVRN.": [
  "Claudius Saturninus", 
  {
   "dig.": "fragm. servatum in DIG."
  }, 
  [
   "450", 
   "550", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "AGNELL.": [
  "Agnellus", 
  {
   "epist.": "epistula ad Arminium de ratione fidei"
  }, 
  [
   "487", 
   "570", 
   "episcopus Ravennas", 
   ""
  ]
 ], 
 "AFRIC.": [
  "Sex. Caecilius Africanus", 
  {
   "dig": "fragmenta in digesta servata"
  }, 
  [
   "100", 
   "175", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "CAPREOL.": [
  "Capreolus", 
  {
   "[epist. 1]": "epistula prior, sc. ad concilium Ephesium", 
   "epist. 2": "epistula altera, sc. ad Vitalem et Tonantium"
  }, 
  [
   "350", 
   "437", 
   "episcopus Carthaginiensis", 
   ""
  ]
 ], 
 "LABEO $1": [
  "Attius Labeo", 
  {
   "Homer. frg. schol. Pers. 1,4": "(qui vertit) Homeri carmina, fragmentum servatum in SCHOL. Pers. 1,4"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "IVLIAN.": [
  "Iulianus Aeclanensis", 
  {
   "epit. in psalm.": "in psalmos epitome q. d.", 
   "Aug.": "verba Iuliani ab Augustino allata", 
   "in Os.": "commentarius in Osee prophetam", 
   "praef. in proph.": "praefatio in prophetas", 
   "frg. VIII": "fragmenta apud Bedam servata (sc. series VIIsq.; cetera fragmenta v. IVLIAN. Aug.), series VIII", 
   "in Am.": "commentarius in Amos prophetam", 
   "in psalm.": "versionis latinae commentarii Theodori Mopsuesteni in psalmos, quam nunc fere omnes Iuliano tribuunt, reliquiae", 
   "in Iob": "commentarius in Iob", 
   "in Ioel": "commentarius in Ioel prophetam"
  }, 
  [
   "385", 
   "455", 
   "episcopus Pelagianus", 
   ""
  ]
 ], 
 "THEODERIC.": [
  "Theodericus", 
  {
   "praecept.": "praeceptum (sive edictum contra sacerdotes substantiae ecclesiae alienatores)"
  }, 
  [
   "451", 
   "526", 
   "rex Ostrogothorum", 
   ""
  ]
 ], 
 "FAST. $12": [
  "", 
  {
   "scrib. quaest. a. 81": "fasti scribarum quaestoriorum (sc. sex primorum?) ad ann. 81"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIBERIAN.": [
  "Tiberianus (fortasse C. Annius Tiberianus praef. praet. a. 336)", 
  {
   "carm.": "carmina"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "GRATT.": [
  "Grattius", 
  {
   "cynegetica": "cynegetica"
  }, 
  [
   "-60", 
   "20", 
   "", 
   ""
  ]
 ], 
 "LAVRENT.": [
  "Laurentius (Mellifluus)", 
  {
   "eleem.": "homilia de eleemosyna", 
   "Chan.": "Iohannis Chrysostomi de muliere Chananaea homilia e graeco versa", 
   "paen.": "de paenitentia (de duobus temporibus)"
  }, 
  [
   "400", 
   "499", 
   "episcopus quidam (Novarum in Moesia?)", 
   ""
  ]
 ], 
 "PS. PRISC.": [
  "Pseudo-Priscianus", 
  {
   "de accentibus liber": "de accentibus liber"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "PSALT.": [
  "", 
  {
   "Rom.": "Romanum", 
   "psalterium": "psalterium", 
   "[Cas.]": "Casinense nunc ut ceteri Veteris Latinae textus allatum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HESYCH. $1": [
  "Hesychius <Hierosolymitanus>", 
  {
   "in lev.": "commentarius in leviticum e graeco versus et retractatus"
  }, 
  [
   "400", 
   "450", 
   "presbyter Hierosolymitanus", 
   ""
  ]
 ], 
 "TARRA": [
  "Tarra Hispanus", 
  {
   "epist.": "epistula ad Reccaredum I regem Visigothorum"
  }, 
  [
   "550", 
   "650", 
   "monachus", 
   ""
  ]
 ], 
 "CENTO": [
  "", 
  {
   "de eccl.": "cento de ecclesia versibus Vergilianis compositus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLLIO": [
  "C. Asinius Pollio", 
  {
   "carm. frg. Char. gramm.": "carminum fragm. servatum apud CHAR. gramm.", 
   "or. frg. Char. gramm.": "orationum fragmenta, e. g. fragm. servatum apud CHAR. gramm.", 
   "Cic. fam.": "epistulae ad Ciceronem", 
   "hist.": "historiae"
  }, 
  [
   "-76", 
   "5", 
   "", 
   ""
  ]
 ], 
 "ABLAB.": [
  "Ablabius", 
  {
   "epigr.": "epigramma"
  }, 
  [
   "250", 
   "338", 
   "Constantini Magni Familiaris", 
   ""
  ]
 ], 
 "IVL. HON.": [
  "Iulius Honorius", 
  {
   "cosmogr.": "cosmographia, sc. explanatio orbis terrarum depicti a discipulo quodam edita"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "CYPR.": [
  "Thascius Caecilius Cyprianus", 
  {
   "laps.": "de lapsis", 
   "eleem.": "de opere et eleemosynis", 
   "domin. orat.": "de dominica oratione", 
   "patient.": "de bono patientiae", 
   "idol.": "quod idola dii non sint (opusculum vix genuinum)", 
   "zel.": "de zelo et livore", 
   "testim.": "ad Quirinum vel testimonia (sc. e scripturis sacris excerpta)", 
   "sent. episc.": "sententiae episcoporum de haereticis baptizandis (sc. acta concilii Carthaginiensis kal. Sept. a. 256 habiti, quae postea versa sunt graece)", 
   "praef.": "praefatio", 
   "mortal.": "de mortalitate", 
   "epist. Silvan": "epistula ad Silvanum al.", 
   "ad Donat.": "ad Donatum", 
   "hab. virg.": "de habitu virginum (ad virgines)", 
   "unit. eccl.": "de  catholicae ecclesiae unitate", 
   "Demetr.": "ad Demetrianum (sc. paganum)", 
   "epist. epistulae collectae": "diverse", 
   "Fort.": "ad Fortunatum (de exhortatione martyrii)"
  }, 
  [
   "200", 
   "258", 
   "episcopus Carthaginiensis", 
   ""
  ]
 ], 
 "EGNAT.": [
  "Egnatius", 
  {
   "carm. frg.": "carminis de rerum natura fragmenta"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "[GLOSS.] $3": [
  "", 
  {
   "[Suet.]": "[Suet.]"
  }, 
  [
   "", 
   "", 
   "", 
   "SCHOL. Suet."
  ]
 ], 
 "EPIGR.": [
  "", 
  {
   "Bob.": "epigrammata Bobiensia q. d. (nonnulla sunt Naucellii)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIRAE": [
  "", 
  {
   "dirae, carmen appendicis Vergilianae": "dirae, carmen appendicis Vergilianae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIDYM.": [
  "Didymus Claudius", 
  {
   "metrol. II": "fragmentum operis \u03a0\u03b5\u03c1\u1f76 \u03c4\u1fc6\u03c2 \u03c0\u03b1\u03c1\u1f70 \u1fec\u03c9\u03bc\u03b1\u03af\u03bf\u03b9\u03c2 \u1f00\u03bd\u03b1\u03bb\u03bf\u03b3\u03af\u03b1\u03c2 apud PRISC. fig. num. gramm. III 411sq. servatum"
  }, 
  [
   "-65", 
   "10", 
   "grammaticus graecus", 
   ""
  ]
 ], 
 "ALTERC.": [
  "", 
  {
   "Hadr. et Epict.": "altercatio Hadriani Augusti et Epicteti philosophi"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAVL. QVAEST.": [
  "Paulus Quaestor", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "nicht datierbar", 
   "", 
   "", 
   ""
  ]
 ], 
 "MART.": [
  "M. Valerius Martialis", 
  {
   "epigr.": "epigrammaton (vel spectaculorum) liber"
  }, 
  [
   "40", 
   "104", 
   "ex Hispania Tarraconensi Bilbilitanus", 
   ""
  ]
 ], 
 "ANTON.": [
  "Marcus Antonius", 
  {
   "epistulae ad Ciceronem datae": "epistulae ad Ciceronem datae", 
   "orationum edictorumque fragm. servata apud CIC. Phil.": "orationum edictorumque fragm. servata apud CIC. Phil."
  }, 
  [
   "-86", 
   "-30", 
   "triumvir", 
   ""
  ]
 ], 
 "GILD.": [
  "Gildas Sapiens Britannus", 
  {
   "paenit.": "praefatio de paenitentia", 
   "Brit.": "de excidio et conquestu Britanniae", 
   "epist.": "fragmenta epistularum"
  }, 
  [
   "500", 
   "570", 
   "", 
   ""
  ]
 ], 
 "GLOSS. $8": [
  "", 
  {
   "interpr. nom. p. 189,340": "interpretatio nominum, p. 189 glossa 340", 
   "L Corp.": "glossarium codicis 144 collegii Cantabrigiensis q. d. Corpus Christi editum a Lindsay", 
   "Z 7": "glossarum a littera Z incipientium glossa 7"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LVCIL. IVN.": [
  "Lucilius Iunior", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "6", 
   "99", 
   "", 
   ""
  ]
 ], 
 "VITAE": [
  "", 
  {
   "patr.": "vitae patrum sive historia eremitica"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "RVFIN.": [
  "Tyrannius (Turranius) Rufinus", 
  {
   "apol. Orig.": "apologeticus Pamphili martyris pro Origene latine versus", 
   "Clement.": "Clementis Romani quae feruntur recognitiones latine versae", 
   "Orig. in Rom.": "Origenis commentarius in Pauli epistulam ad Romanos latine versus", 
   "Adamant.": "libri Adamantii Origenis adversus haereticos latine versi", 
   "sent. Sext.": "Sexti quae feruntur sententiae latine versae", 
   "Orig. princ.": "Origenis libri de principiis latine versi", 
   "symb.": "expositio symboli", 
   "hist. mon.": "de vita sanctorum, i. historia monachorum latine versa", 
   "Orig. in psalm.": "Origenis homiliae in psalmos 36\u201438 latine versae", 
   "apol. adv. Hier.": "apologia adversus Hieronymum", 
   "hist.": "Eusebii historia ecclesiastica translata et continuata", 
   "epil.": "epilogus ipsius Rufini", 
   "Basil. reg.": "Basilii regula latine versa", 
   "patr.": "de benedictionibus patriarcharum", 
   "Basil. hom.": "Basilii homiliae aliquot latine versae", 
   "Orig. in gen.": "Origenis homiliae in heptateuchon (praeter deut.) latine versae", 
   "apol. ad Anast.": "apologia ad Anastasium papam", 
   "epist. Clement.": "epistula Clementis ad Iacobum latine versa", 
   "praef. Rufin.": "praefatio ipsius Rufini", 
   "Hier. adv. Rufin.": "epistulae ad Hieronymum partes apud HIER. adv. Rufin. 3 servatae", 
   "praef. Orig.": "praefatio Origenis", 
   "Greg. Naz. orat.": "Gregorii Nazianzeni orationes latine versae", 
   "Orig. in cant.": "Origenis commentarius in canticum canticorum latine versus"
  }, 
  [
   "345", 
   "412", 
   "presbyter Aquileiensis", 
   ""
  ]
 ], 
 "EVGIPP.": [
  "Eugippius", 
  {
   "reg.": "regula (sc. cento cod. Paris. 12634 traditus, qui nunc Eugippio ascribitur)", 
   "Sev.": "vita Severini (commemoratorium)", 
   "epist. ad Prob.": "epistula ad Probam", 
   "exc. Aug.": "excerpta ex operibus S. Augustini", 
   "epist. ad Pasch.": "epistula ad Paschasium"
  }, 
  [
   "465", 
   "533", 
   "abbas castelli Lucullani prope Neapolim", 
   ""
  ]
 ], 
 "GLOSS. $1": [
  "", 
  {
   "biling.": "glossaria bilinguia (sc. graeca et latina) in papyris et membranis non post saec. VIIin.  scriptis reperta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GLOSS. $3": [
  "", 
  {
   "Leid. Hessels": "Leid. Hessels"
  }, 
  [
   "", 
   "", 
   "", 
   "GLOSS. LI Ansil. ZO 16 (med. p. 96)"
  ]
 ], 
 "GLOSS. $2": [
  "", 
  {
   "iurispr.": "glossarium iurisprudentiae incipiens a voce $Ladet (= habet), sc. lexicon vocum latinarum temporibus Byzantinis fere e THEOPHIL. inst. Iust. excerptum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GLOSS. $5": [
  "", 
  {
   "Vatic. Reg. 203": "glossae codicis Vaticani Regin. 203"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GLOSS. $4": [
  "", 
  {
   "Paul.": "glossarii bilinguis fere in Pauli apostoli epistulas reliquiae servatae papyro saec. IV/V (respiciuntur II Cor., Eph., Gal., Rom.)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GLOSS. $7": [
  "", 
  {
   "PA 25 (cod. Paris.)": "glossa PA 25 allata ex ipso codice Parisino in duo volumina diviso (A\u2014E: cod. 11529; F\u2014Z: cod. 11530; Lowe 611)", 
   "ZO 16 (med. p. 96)": "glossa ZO 16 integra una cum ceteris, quae e medicorum scriptis sumptae sunt, ab Heiberg edita, p. 96 (usque adhuc nota propria utebamur indicantes paginam et lineam sec. Heiberg)", 
   "LI Ansil. ZI 1": "glossaria latina a Lindsay al. collecta, vol. I, glossarium Ansileubi q. d. (vel liber glossarum), glossarum quae incipiunt a litteris ZI glossa 1 (olim et hoc et alia huius collectionis glossaria afferebamus sec. collectionem vetustiorem, quae tamen etiam nunc non raro adhibenda est)", 
   "UD 3 (diff. p. 113)": "glossa UD 3 integra una cum aliis, quae e differentiis q. d. sumptae sunt, ab Uhlfelder edita, p. 113 (quae glossae apud Lindsay plerumque nota 'Diff. ' distinctae sunt)", 
   "SI 617 (mens. p. 114)": "glossa SI 617 integra una cum ceteris, quibus mensium nomina tractantur, a Mountford edita, p. 114 (quae glossae apud Lindsay notis 'Mens. ' vel 'mens. ' distinctae sunt)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GLOSS. $6": [
  "", 
  {
   "Zeitschr. Pap. Epigr. 47,1982 p. 293": "glossaria nonnulla"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SORAN.": [
  "Soranus", 
  {
   "app.": "appendix de pessariis", 
   "gynaecia a Mustione latine versa": "gynaecia a Mustione latine versa"
  }, 
  [
   "50", 
   "150", 
   "medicus", 
   ""
  ]
 ], 
 "[BRVT. ET CASS.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "CASS. Cic. fam."
  ]
 ], 
 "TARR. PAT.": [
  "Tarruntenus (Tarrutenius) Paternus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "OROS.": [
  "Paulus(?) Orosius", 
  {
   "apol.": "liber apologeticus, sc. contra Iohannem episcopum Hierosolymitanum et contra Pelagium", 
   "comm.": "commonitorium ad Augustinum de errore Priscillianistarum et Origenistarum", 
   "hist.": "historiae adversum paganos"
  }, 
  [
   "385", 
   "418", 
   "presbyter Hispanus", 
   ""
  ]
 ], 
 "SORT.": [
  "", 
  {
   "sortes versibus hexametris scriptae": "sortes versibus hexametris scriptae"
  }, 
  [
   "", 
   "", 
   "", 
   "(CE 331)"
  ]
 ], 
 "COD.": [
  "", 
  {
   "Visig.": "epitome Visigothica (sc. breviarii Alarici),", 
   "Greg.": "codex Gregorianus (sc. principum constitutiones a Gregorio quodam collectae) deperditus, cuius tamen fragmenta alia alibi servata sunt"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMEN.": [
  "", 
  {
   "Celtis coll.": "hermeneumata codicis Conradi Celtis, colloquia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VOLVS.": [
  "Rufius Antonius Agrypnius Volusianus", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "ORIGO $1": [
  "", 
  {
   "Rom. chron.": "origo gentis Romanorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPHR.": [
  "Ephraem Syrus", 
  {
   "iudic. et resurr.": "de iudicio dei et resurrectione ... vel de extremo iudicio", 
   "beat.": "de beatitudine animae", 
   "paenit.": "de paenitentia", 
   "de die iudic.": "de die iudicii", 
   "Ioseph": "sermo in Ioseph (sc. patriarcham)", 
   "luctam.": "de luctamine spiritali vel de luctationibus", 
   "compunct.": "de compunctione cordis vel monita"
  }, 
  [
   "306", 
   "373", 
   "", 
   ""
  ]
 ], 
 "ELOG. $1": [
  "", 
  {
   "Scip. (CE 958)": "elogia Scipionum q. d., e. g. Cn. Cornelii Cn. f. Hispani"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALP.": [
  "T. Calpurnius Siculus", 
  {
   "ecl.": "eclogae (bucolica)"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "LACT.": [
  "L. Cae(ci)lius Firmianus Lactantius", 
  {
   "opif.": "de opificio dei (vel formatione hominis)", 
   "mort. pers.": "de mortibus persecutorum", 
   "Phoen.": "de ave Phoenice (carmen nonnullis spurium)", 
   "epit.": "divinarum institutionum (sc. LACT. inst.) epitome", 
   "ira": "de ira dei", 
   "interpol.": "interpolationes", 
   "inst.": "divinae institutiones", 
   "frg.": "fragmenta operum deperditorum"
  }, 
  [
   "250", 
   "320", 
   "rhetor Africanus", 
   ""
  ]
 ], 
 "PS. LACT. PLAC.": [
  "(Pseudo-) Lactantius Placidus", 
  {
   "fab. Ov.": "narrationes fabularum Ovidianarum"
  }, 
  [
   "200", 
   "299", 
   "", 
   ""
  ]
 ], 
 "VENVL.": [
  "Venuleius Saturninus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "RVFIN. $1": [
  "Rufinus", 
  {
   "gramm.": "commentarii in metra Terentiana et de numeris oratorum"
  }, 
  [
   "400", 
   "499", 
   "grammaticus Antiochensis", 
   ""
  ]
 ], 
 "MARCIVS": [
  "(Cn.) Marcius vates", 
  {
   "carm. frg.": "fragmenta carminum, sc. quae inter praecepta numerantur"
  }, 
  [
   "-270", 
   "-200", 
   "", 
   ""
  ]
 ], 
 "EPIST. $45": [
  "", 
  {
   "Syner. (Pap. Oxyrh. XLIV 3208)": "epistula Synerotos cuiusdam ad Chium"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CREMVT.": [
  "A. Cremutius Cordus", 
  {
   "hist.": "annalium fragmenta"
  }, 
  [
   "-50", 
   "25", 
   "historicus", 
   ""
  ]
 ], 
 "VERS.": [
  "", 
  {
   "metr. Bass. gramm.": "versus a Caesio Basso aliisque metricis ficti, e. g. apud BASS. gramm."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VITR.": [
  "Vitruvius", 
  {
   "de architectura": "de architectura"
  }, 
  [
   "-80", 
   "-15", 
   "", 
   ""
  ]
 ], 
 "HIER.": [
  "Hieronymus Stridonensis", 
  {
   "in Ioel.": "commentarii in Ioel prophetam", 
   "in Hab.": "commentarii in Habacuc prophetam (divisi in libros duos)", 
   "in eccles.": "commentarii in ecclesiasten", 
   "in Is.": "tractatus duo in Isaiam", 
   "Aug. epist. Divj.": "epistula ad Aurelium episcopum Carthaginiensem nuper reperta", 
   "in psalm. I": "series prior", 
   "interpr. Iob": "interpretatio vetustior libri Iob emendata ab Hieronymo sec. hexapla Origenis (distinguenda a VVLG. Iob)", 
   "in Gal.": "commentarii in epistulam Pauli ad Galatas (divisi in libros tres)", 
   "in psalm. II": "series altera", 
   "in Philem.": "commentarii in epistulam Pauli ad Philemonem", 
   "epist. epistularum corpus ab editoribus compositum": "diverse", 
   "[monogr.]": "[monogr.]", 
   "a. Abr.": "ad annum post natum Abraham 2394 (anni indicantur kat\u00e0 denos in margine sinistra numeris Romanis linea subscripta insignibus)", 
   "epist.": "Hieronymi epistula operi anteposita", 
   "in Mich.": "commentarii in Michaeam prophetam (divisi in libros duos)", 
   "in Zach.": "commentarii in Zachariam prophetam (divisi in libros tres)", 
   "in Soph.": "commentarii in Sophoniam prophetam", 
   "vita": "vitae trium monachorum", 
   "nom. hebr.": "hebraica nomina (liber interpretationis hebraicorum nominum)", 
   "c. Vigil.": "contra Vigilantium presbyterum Gallum", 
   "adv. Iovin.": "adversus Iovinianum", 
   "chron.": "chronicon omnimodae historiae, sc. Eusebii Caesariensis chronicorum pars altera e graeco versa, retractata", 
   "in Os.": "commentarii in Osee prophetam (divisi in libros tres)", 
   "quaest. hebr. in gen.": "quaestiones hebraicae in genesim", 
   "epist. Theod.": "epistula Theodori monachi Tabennensis de pascha e graeco (quod periit) versa", 
   "interpr. Salom. praef.": "interpretatio vetustior librorum Salomonis ab Hieronymo emendata (distinguenda a VVLG.), praefatio Hieronymi (cetera perierunt)", 
   "in Ezech.": "homiliae XIV in Ezechielem (graeca perierunt)", 
   "interpr. par. praef.": "interpretatio vetustior librorum paralipomenon ab Hieronymo emendata (distinguenda a VVLG. par.), praefatio Hieronymi (cetera perierunt)", 
   "in Luc.": "homiliae XXXIX in Lucam (exstant fragmenta graeca)", 
   "in psalm.": "tractatus in psalmos", 
   "adv. Rufin.": "adversus Rufinum libri tres", 
   "Pauli": "vita Pauli Thebaei", 
   "Malchi": "vita Malchi (captivus monachus)", 
   "Orsies. doctr.": "(H)orsiesii abbatis Tabennensis doctrina latine versa", 
   "in Ier.": "commentarii in Ieremiam prophetam imperfecti", 
   "in Am.": "commentarii in Amos prophetam (divisi in libros tres)", 
   "in Matth.": "commentarii in Matthaeum (divisi in libros IV)", 
   "in Nah.": "commentarii in Nahum prophetam", 
   "praef.": "Hieronymi praefatio (non solum regulae, sed totius Pachomianorum corporis)", 
   "virg. Mar.": "adversus Helvidium de Mariae virginitate perpetua", 
   "prol.": "prologus totius operis", 
   "in Marc.": "tractatus in Marci euangelium", 
   "epist. Pachom.": "epistulae Pachomii abbatis Tabennensis e graeco versae", 
   "in Dan.": "commentarii in Danielem prophetam", 
   "Hilar.": "vita Hilarionis", 
   "in Tit.": "commentarii in epistulam Pauli ad Titum", 
   "tract.": "tractatus vel sermones ab Hieronymo habiti", 
   "[prol. gal.]": "prologus galeatus q. d.", 
   "psalt. sec. Hebr.": "psalterium sec. (iuxta) Hebraeos, sc. psalmi ex hebr. versi", 
   "lib. 3 praef.": "praefatio libri tertii", 
   "c. Ioh.": "contra Iohannem Hierosolymitanum episcopum", 
   "vir. ill.": "de illustribus viris (de scriptoribus ecclesiasticis)", 
   "c. Lucif.": "altercatio Luciferiani et orthodoxi (dialogus contra Luciferianos)", 
   "euang.": "ad euangelium", 
   "in Eph.": "commentarii in epistulam Pauli ad Ephesios (divisi in libros tres)", 
   "in Ion.": "commentarii in Ionam prophetam", 
   "reg. Pachom.": "regula Pachomii abbatis Tabennensis aliorumque (?) versa e graeco una cum aliis Pachomianis", 
   "Victorin. Poetov. in apoc.": "Victorini Poetovionensis commentarius in apocalypsin ab Hieronymo retractatus", 
   "praef. Vulg. Dan.": "praefationes ad singulas Vulgatae partes conscriptae", 
   "sit. et. nom.": "de locis (de situ et nominibus locorum hebraicorum)", 
   "in Agg.": "commentarii in Aggaeum prophetam", 
   "in Mal.": "commentarii in Malachiam prophetam", 
   "hom. Orig.": "homiliae Origenis quot e graeco vertit Hieronymus", 
   "in Abd.": "commentarii (sc. alteri) in Abdiam prophetam", 
   "[mon. Pachom.]": "[mon. Pachom.]", 
   "in cant.": "homiliae duae in canticum canticorum (graeca perierunt)", 
   "Didym. spir.": "Didymi Alexandrini liber de spiritu sancto latine versus", 
   "adv. Pelag.": "dialogus adversus Pelagianos"
  }, 
  [
   "347", 
   "420", 
   "presbyter et abbas Bethlehemiticus", 
   ""
  ]
 ], 
 "CHALC.": [
  "C(h)alcidius", 
  {
   "praef.": "praefatio operis (sc. epistula ad Osium)", 
   "comm.": "commentarius (in Platonis Timaeum)", 
   "transl.": "(Platonis Timaei) translatio"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "ANTHIM.": [
  "Anthimus", 
  {
   "praef.": "praefatio", 
   "de observatione ciborum epistula ad Theodoricum regem Francorum": "de observatione ciborum epistula ad Theodoricum regem Francorum"
  }, 
  [
   "450", 
   "550", 
   "medicus", 
   ""
  ]
 ], 
 "PONTIAN.": [
  "Pontianus", 
  {
   "epist.": "epistula ad imp. Iustinianum"
  }, 
  [
   "500", 
   "599", 
   "episcopus Africanus", 
   ""
  ]
 ], 
 "QVEROL.": [
  "incerti auctoris", 
  {
   "Querolus sive Aulularia": "Querolus sive Aulularia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FERREOL.": [
  "Ferreolus", 
  {
   "reg.": "regula monastica"
  }, 
  [
   "530", 
   "581", 
   "episcopus Vceticensis Gallus", 
   ""
  ]
 ], 
 "CORNIF. $1": [
  "Cornificius Gallus", 
  {
   "de Verg. Cledon. gramm. V": "versus de Vergilio a CLEDON. gramm. V"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "TAB. $1": [
  "", 
  {
   "Vel.": "Veleias", 
   "Baeb.": "Ligurum Baebianorum", 
   "aliment.": "tabula alimentaria"
  }, 
  [
   "", 
   "", 
   "", 
   "(CIL IX 1455)"
  ]
 ], 
 "PAMMACH.": [
  "Pammachius et Oceanus", 
  {
   "Hier. epist.": "epistula ad Hieronymum"
  }, 
  [
   "350", 
   "409", 
   "", 
   ""
  ]
 ], 
 "CLOD. LIC.": [
  "C. Clodius Licinus", 
  {
   "hist.": "fragmenta librorum rerum Romanarum"
  }, 
  [
   "-50", 
   "50", 
   "historicus", 
   ""
  ]
 ], 
 "CASS. FEL.": [
  "Cassius Felix", 
  {
   "de medicina ex Graecis logicae sectae auctoribus liber translatus": "de medicina ex Graecis logicae sectae auctoribus liber translatus"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "HEGES.": [
  "Hegesippus", 
  {
   "historia, sc. Flavii Iosephi de bello Iudaico opus e graeco versum atque retractatum": "historia, sc. Flavii Iosephi de bello Iudaico opus e graeco versum atque retractatum"
  }, 
  [
   "100", 
   "180", 
   "", 
   ""
  ]
 ], 
 "EPITAPH.": [
  "", 
  {
   "Plaut. Gell. 1,24,3": "epitaphia Naevii, Pacuvii, Plauti, quae GELL. 1,24 tradit (ipsis poetis tribuit)", 
   "Mar. Avent.": "epitaphium Marii Aventicensis episcopi", 
   "All. Potest. (CE 1988)": "epitaphium Alliae Potestatis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TAB. $2": [
  "", 
  {
   "cens. Varro ling.": "tabularum censoriarum fragmenta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NAEV.": [
  "Cn. Naevius", 
  {
   "carm. frg.": "carminum praeter scaenica (sc. fere belli Punici) fragmenta", 
   "praetext.": "praetextarum fragmenta", 
   "trag.": "tragoediarum fragmenta", 
   "[ep.]": "[ep.]", 
   "com.": "comoediarum fragmenta"
  }, 
  [
   "-265", 
   "-201", 
   "", 
   ""
  ]
 ], 
 "TICID.": [
  "Ticidas", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-100", 
   "-46", 
   "", 
   ""
  ]
 ], 
 "[IVS]": [
  "", 
  {
   "[colleg. eborar.]": "[colleg. eborar.]"
  }, 
  [
   "", 
   "", 
   "", 
   "LEX colleg. eborar."
  ]
 ], 
 "NOVAT.": [
  "Novatus", 
  {
   "sententia de humilitate et oboedientia et de calcanda superbia": "sententia de humilitate et oboedientia et de calcanda superbia"
  }, 
  [
   "100", 
   "151", 
   "catholicus", 
   ""
  ]
 ], 
 "PS. DIOSC.": [
  "Pseudo-Dioscurides", 
  {
   "[Vind.]": "[Vind.]", 
   "herb. fem.": "de herbis femininis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PACVV.": [
  "M. Pacuvius", 
  {
   "praetext.": "fabularum praetextarum fragmenta", 
   "trag.": "tragoediarum fragmenta"
  }, 
  [
   "-220", 
   "-130", 
   "", 
   ""
  ]
 ], 
 "P. SCAEV.": [
  "P. Mucius Scaevola", 
  {
   "Cic. dom.": "fragm. servatum apud CIC. dom."
  }, 
  [
   "-180", 
   "-115", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "AVDAX $1": [
  "Audax", 
  {
   "gramm.": "de Scauri et Palladii libris excerpta"
  }, 
  [
   "300", 
   "399", 
   "grammaticus", 
   ""
  ]
 ], 
 "PS. HIPPOCR.": [
  "Pseudo-Hippocrates", 
  {
   "ad Antioch.": "epistula (e graeco versa) ad Antiochum regem (epist. Dioclis ad Antigonum regem sec. Paulum Aeginetam al.)", 
   "ad Maecen.": "epistula ad Maecenatem"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TAB. $5": [
  "", 
  {
   "fund. Volceian.": "tabula fundorum Volceianorum"
  }, 
  [
   "", 
   "", 
   "", 
   "(CIL X 407)"
  ]
 ], 
 "FRG. $14": [
  "", 
  {
   "med. Tolet.": "fragmentum (?) medicum codice Toletano"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FRG. $15": [
  "", 
  {
   "Mur.": "fragmentum Muratorianum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FRG. $16": [
  "", 
  {
   "Vat.": "iuris anteiustiniani fragmenta Vaticana"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MVTIAN.": [
  "Mutianus", 
  {
   "Chrysost. hom.": "Iohannis Chrysostomi homiliae in epistulam ad Hebraeos iussu Cassiodori e graeco versae"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "FRG. $10": [
  "", 
  {
   "iur. publ.": "fragmentum Vindobonense de iure publico"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FRG. $11": [
  "", 
  {
   "liturg.": "fragmenta liturgica (sc. series duae quodammodo pertinentes ad liturgiam Gallicanam)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FRG. $12": [
  "", 
  {
   "liturg. (Pap. Corp. 48)": "alia fragmenta liturgica, e. g. fragm. papyraceum quoddam"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FRG. $13": [
  "", 
  {
   "Manich.": "fragmenta Manichaea vel de Manichaeis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "BASS.": [
  "Caesius Bassus", 
  {
   "gramm.": "fragmentum libri de metris sub nomine Atilii Fortunatiani traditum (postea contaminatum)", 
   "eiusdem libri fragm. allatum a RVFIN. gramm.": "eiusdem libri fragm. allatum a RVFIN. gramm.", 
   "lyricorum fragm. allatum a PRISC. gramm.": "lyricorum fragm. allatum a PRISC. gramm."
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "FEST.": [
  "Sex. Pompeius Festus", 
  {
   "epitomae operis de verborum significatu Verrii Flacci (aet. Augusti et Tiberii) quae exstant": "epitomae operis de verborum significatu Verrii Flacci (aet. Augusti et Tiberii) quae exstant"
  }, 
  [
   "150", 
   "199", 
   "", 
   ""
  ]
 ], 
 "PS. PRIMAS.": [
  "Pseudo-Primas", 
  {
   "in Rom.": "commentarius in epistulas Paulinas Primasio perperam attributus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TAB. $3": [
  "", 
  {
   "cer.": "tabulae ceratae; exempla selecta", 
   "Herculan.": "Herculanenses", 
   "Pomp.": "Pompeianae", 
   "Dac.": "Dacicae"
  }, 
  [
   "", 
   "", 
   "", 
   "(CIL III p. 959)"
  ]
 ], 
 "CONSTANT. PORPH.": [
  "Constantinus Porphyrogenitus", 
  {
   "caer. aul. Byz.": "de caerimoniis aulae Byzantinae, ex quo opere graeco (postea retractato) afferimus interdum voces latinas in formulis vetustioribus servatas"
  }, 
  [
   "905", 
   "959", 
   "imperator Byzantinus", 
   ""
  ]
 ], 
 "TAVRENT.": [
  "Taurentius", 
  {
   "ad Ruric. epist.": "epistula 3 inter epistulas ad Ruricium scriptas"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "FAVST. REI.": [
  "Faustus Reiensis", 
  {
   "grat.": "de gratia quae exstant", 
   "[symb.]": "homiliae de symbolo duae", 
   "epist.": "epistulae", 
   "spir.": "de spiritu sancto (opus iam antiquitus etiam Paschasio diacono Romano ascriptum)", 
   "rat. fid.": "de ratione fidei (opusculum olim Fausto ascriptum, nunc plerisque dubium aut spurium)"
  }, 
  [
   "400", 
   "495", 
   "in Gallia Narbonensi civitatis episcopus", 
   ""
  ]
 ], 
 "RVSTIC.": [
  "Rusticus", 
  {
   "[synod. ...]": "synodicon, pars ab ipso Rustico latine versa", 
   "c. aceph.": "contra acephalos disputatio"
  }, 
  [
   "500", 
   "599", 
   "diaconus Romanus", 
   ""
  ]
 ], 
 "LEP.": [
  "M. Aemilius Lepidus", 
  {
   "Cic. fam.": "epistulae"
  }, 
  [
   "-90", 
   "-12", 
   "IIIvir", 
   ""
  ]
 ], 
 "CONSVLT.": [
  "", 
  {
   "consultatio veteris cuiusdam iurisconsulti q. d.": "consultatio veteris cuiusdam iurisconsulti q. d."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IVSTINVS": [
  "imp. Iustinus", 
  {
   "novell. Iust.": "novellae Iustiniani"
  }, 
  [
   "450", 
   "527", 
   "", 
   ""
  ]
 ], 
 "HIPPIATR.": [
  "", 
  {
   "gr. II": "corpus hippiatricorum graecorum, sc. fragmenta ex operibus antiquitate vergente de mulomedicina sim. conscriptis excerpta tempore Byzantino collecta, vol. II"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TITIN.": [
  "Titinius", 
  {
   "com.": "comoediarum (fabularum togatarum) fragmenta"
  }, 
  [
   "-250", 
   "-150", 
   "", 
   ""
  ]
 ], 
 "PS. HYG.": [
  "Pseudo-Hyginus", 
  {
   "mun. castr.": "liber de munitionibus (vel metatione) castrorum q. d. (mutilus)"
  }, 
  [
   "200", 
   "299", 
   "", 
   ""
  ]
 ], 
 "NEMES.": [
  "M. Aurelius Olympius Nemesianus", 
  {
   "cyn.": "cynegeticon quae supersunt", 
   "auc.": "carminis Nemesiano ascripti de aucupio fragmenta", 
   "ecl.": "eclogae (bucolica)", 
   "frg. 1": "fragmentum 1"
  }, 
  [
   "200", 
   "299", 
   "poeta Carthaginiensis", 
   ""
  ]
 ], 
 "AVSPIC.": [
  "Auspicius", 
  {
   "ad Arbog.": "epistula ad Arbogastem comitem Treverorum"
  }, 
  [
   "400", 
   "499", 
   "episcopus ecclesiae Tullensis", 
   ""
  ]
 ], 
 "VERAN.": [
  "Veranius", 
  {
   "Macr. Sat.": "de rebus sacris"
  }, 
  [
   "0", 
   "58", 
   "", 
   ""
  ]
 ], 
 "APRISS.": [
  "Aprissius (?)", 
  {
   "Atellanarum(?) poeta": "Atellanarum(?) poeta"
  }, 
  [
   "-150", 
   "-50", 
   "", 
   "fragmentum, quod servavit VARRO ling."
  ]
 ], 
 "SCAEV.": [
  "Q. Mucius Scaevola", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-170", 
   "-87", 
   "cos. 117", 
   ""
  ]
 ], 
 "VLFILA": [
  "Vlfila", 
  {
   "Maximin. c. Ambr.": "fides (ab Auxentio allata)"
  }, 
  [
   "311", 
   "383", 
   "episcopus Arianus Gothorum", 
   ""
  ]
 ], 
 "POMPON. $2": [
  "P. Pomponius Secundus", 
  {
   "praetext.": "fabularum praetextarum fragm. Unicum", 
   "trag.": "tragoediarum fragmenta"
  }, 
  [
   "0", 
   "60", 
   "", 
   ""
  ]
 ], 
 "POMPON. $1": [
  "Sex. Pomponius", 
  {
   "dig.": "fragmenta in digesta servata", 
   "reg. frg.": "fragm. quoddam operis incerti (fortasse regularum)"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "MART. BRAC.": [
  "Martinus <Bracarensis>", 
  {
   "form. vit.": "formula vitae honestae (sequitur Martinus Senecam philosophum)", 
   "superb.": "de superbia", 
   "pasch.": "de pascha", 
   "humil.": "exhortatio humilitatis", 
   "epitaph.": "epitaphium Martini Bracarensis", 
   "sent. patr.": "sententiae patrum Aegyptiorum e graeco collectae et versae", 
   "iact.": "pro repellenda iactantia", 
   "canon.": "canones quorundam conciliorum maximam partem e graeco versi, quos Martinus collegit et retractavit", 
   "refect.": "versus in refectorio", 
   "ira": "de ira", 
   "in bas.": "versus in basilica sancti Martini Turonensis", 
   "corr.": "de correctione rusticorum (epistula ad Polemium)", 
   "trin. mers.": "de trina mersione"
  }, 
  [
   "510", 
   "589", 
   "episcopus primo Dumiensis, postea Bracarensis in Gallaecia", 
   ""
  ]
 ], 
 "ANAST.": [
  "Anastasius I", 
  {
   "epistula ad Simplicianum (Epist. pontif. 276)": "epistula ad Simplicianum (Epist. pontif. 276)"
  }, 
  [
   "350", 
   "401", 
   "papa", 
   ""
  ]
 ], 
 "GAETVL.": [
  "Cn. Cornelius Lentulus Gaetulicus", 
  {
   "carm. frg.": "carminum fragmentum"
  }, 
  [
   "-20", 
   "39", 
   "cos. 26", 
   ""
  ]
 ], 
 "NIGID.": [
  "P. Nigidius Figulus", 
  {
   "Prisc. gramm.": "fragmenta a scriptoribus servata, e. g. fragm. apud PRISC. gramm."
  }, 
  [
   "-100", 
   "-45", 
   "", 
   ""
  ]
 ], 
 "AETNA": [
  "", 
  {
   "Aetna, carmen appendicis Vergilianae": "Aetna, carmen appendicis Vergilianae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FILASTR.": [
  "Filastrius (vel Filaster)", 
  {
   "diversarum haereseon liber (de haeresibus)": "diversarum haereseon liber (de haeresibus)"
  }, 
  [
   "330", 
   "397", 
   "episcopus Brixiensis", 
   ""
  ]
 ], 
 "SVLP. VICT.": [
  "Sulpicius Victor", 
  {
   "rhet.": "institutiones oratoriae"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "MACER": [
  "Aemilius Macer Veronensis", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "-100", 
   "-16", 
   "", 
   ""
  ]
 ], 
 "EDICT. $8": [
  "", 
  {
   "praef. urb. (CIL VI 1770)": "edictum Turcii Aproniani praefecti urbis de pecoribus vendendis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EDICT. $9": [
  "", 
  {
   "dig.": "fragmenta a scriptoribus vel in collectionibus tradita, e. g. fragm. servatum DIG.", 
   "praet.": "edicta praetorum", 
   "de camp. Esquil. (CIL I2 839)": "edictum L. Sentii C. f. praetoris de campo Esquilino"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ADNOT. $1": [
  "", 
  {
   "bell. p. 4,17": "de bello civili inter Caesarem et Pompeium, p. 4 lin. 17", 
   "10,545": "ad libr. 10 vers. 545", 
   "argum. 10": "argumentum libri 10", 
   "Lucan.": "adnotationes super Lucanum medio aevo in hanc formam redactae, quarum tamen fundamentum est Vaccae q. d. in Lucanum commentarius"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EDICT. $7": [
  "", 
  {
   "leg. pr. pr. (Ann\u00e9e \u00c9pigr. 1976 n. 653)": "edicta legatorum pro praetore, e. g. Sex. Sotidii Strabonis Libuscidiani de cursu publico"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EDICT. $4": [
  "", 
  {
   "Gunthr.": "edictum Gunthramni regis Francorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DOM. AF.": [
  "Cn. Domitius Afer", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst."
  }, 
  [
   "0", 
   "59", 
   "", 
   ""
  ]
 ], 
 "EDICT. $2": [
  "", 
  {
   "cens. de rhet. Suet. rhet.": "edictum censorum de rhetoribus traditum apud SVET. rhet."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EDICT. $3": [
  "", 
  {
   "Childeb.": "fragmentum edicti Childeberti I regis Francorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CARBO": [
  "C. Papirius Carbo", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud CIC. de orat.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud CIC. de orat."
  }, 
  [
   "-250", 
   "-119", 
   "", 
   ""
  ]
 ], 
 "EDICT. $1": [
  "", 
  {
   "Caes. Oct. (Chart. lat. ant. X 416)": "edictum Caesaris Octaviani triumviri de privilegiis veteranorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEONIAN.": [
  "Leonianus", 
  {
   "Alc. Avit. epist.": "epistula ad Sapaudum"
  }, 
  [
   "450", 
   "550", 
   "archidiaconus", 
   ""
  ]
 ], 
 "[TRACT.] $3": [
  "", 
  {
   "[de trin.]": "[de trin.]"
  }, 
  [
   "", 
   "", 
   "", 
   "PELAG. frg."
  ]
 ], 
 "EPIST.": [
  "", 
  {
   "de aedif. (CIL VI 1585b)": "epistulae rationalium (praecedit petitio Adrasti lib.) de aedificio post columnam divi Marci exstruendo"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[CAEL.]": [
  "", 
  {
   "[hist.]": "[hist.]"
  }, 
  [
   "", 
   "", 
   "", 
   "COEL. hist."
  ]
 ], 
 "LIB.": [
  "", 
  {
   "de asse": "liber de asse (olim perperam Balbo gromatico adscriptus)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[TRACT.] $2": [
  "", 
  {
   "[in Matth.]": "tractatus in Matthaeum nunc Chromatio tributi"
  }, 
  [
   "", 
   "", 
   "", 
   "CHROMAT. in Matth."
  ]
 ], 
 "COLL.": [
  "", 
  {
   "Mos.": "lex dei sive Mosaicarum et Romanarum legum collatio (fragmentum)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CONSTANTIVS": [
  "Constantius", 
  {
   "epist.": "epistulae, quae vitae praemittuntur", 
   "vita Germ.": "vita Germani episcopi Autissiodorensis", 
   "praef.": "vitae praefatio"
  }, 
  [
   "420", 
   "497", 
   "clericus Lugdunensis", 
   ""
  ]
 ], 
 "NOM. $1": [
  "", 
  {
   "mart.": "nomina martyrum Lugdunensium"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IVDICIVM $1": [
  "", 
  {
   "Pictav. Greg. Tur. Franc.": "iudicium de monasterio Pictaviensi, v. GREG. TVR. Franc."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. DOSITH.": [
  "", 
  {
   "frg. iur.": "fragmentum Dositheanum vel de manumissionibus q. d. iurisconsulti cuiusdam graece et latine servatum inter Pseudodositheana hermeneumata (sc. quae interdum una cum DOSITH. traduntur)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[LIC. EVDOX.]": [
  "Licinia Eudoxia Augusta", 
  {
   "[Leo M. epist.]": "ad Theodosium imperatorem inter Leonis Magni epistulas"
  }, 
  [
   "422", 
   "462", 
   "", 
   "CONC. S II 3,1 p. 15,29"
  ]
 ], 
 "[PS. LACT.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "LACT."
  ]
 ], 
 "LAEV.": [
  "Laevius", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "100", 
   "99", 
   "poeta", 
   ""
  ]
 ], 
 "VICT. TONN.": [
  "Victor Tonnennensis", 
  {
   "chron.": "chronica"
  }, 
  [
   "500", 
   "599", 
   "episcopus", 
   ""
  ]
 ], 
 "[PS. HIL. AREL.]": [
  "Pseudo-Hilarius Arelatensis", 
  {
   "[in epist. canon.]": "tractatus in septem epistulas canonicas"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "PHYSIOL.": [
  "", 
  {
   "Physiologus latinus": "Physiologus latinus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIPHAN. $1": [
  "Epiphanius", 
  {
   "in euang.": "interpretatio euangeliorum (sc. Matth., Marc., Luc.)"
  }, 
  [
   "", 
   "", 
   "episcopus quidam latinus", 
   ""
  ]
 ], 
 "ORIENT.": [
  "Orientius", 
  {
   "comm.": "commonitorium", 
   "carm. app.": "carminum minorum, quae Orientio vix recte adscripta sunt, appendix"
  }, 
  [
   "370", 
   "450", 
   "poeta christianus (fortasse episcopus Ausciorum, civitatis Aquitaniae)", 
   ""
  ]
 ], 
 "PACIAN.": [
  "Pacianus", 
  {
   "bapt.": "sermo de baptismo", 
   "epist.": "epistulae contra Novatianos", 
   "paraen.": "paraenesis ad paenitentiam"
  }, 
  [
   "300", 
   "393", 
   "episcopus Barcinonensis", 
   ""
  ]
 ], 
 "EXC. $4": [
  "", 
  {
   "Sang. chron. I": "excerpta Sangallensia (immo excerptorum illorum ad FAST. Vind. pertinentium partes eae, quas Mommsen sub hoc titulo edidit), vol. I"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EXC. $3": [
  "", 
  {
   "not. urb. chron. I": "excerpta de montibus et aquis urbis Romae, tradita una cum Notitia urbis Romae q. d. (sc. REG. urb.), vol. I"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EXC. $2": [
  "", 
  {
   "metrol. chron. I": "excerpta metrologica (sc. de mensuris et ponderibus; servata sunt in cod. Vind. 89), vol. I"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EXC. $1": [
  "", 
  {
   "Bob. gramm. I": "excerpta Bobiensia q. d. (non 'ex Charisii arte grammatica') vel anonymus Bobiensis, vol. I"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. PETR. CHRYS.": [
  "Pseudo-Petrus Chrysologus", 
  {
   "serm. Migne suppl. 3": "sermones alibi editi, e. g. apud Migne suppl. 3", 
   "serm.": "sermones collectionis Felicianae spurii"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PARM.": [
  "Parmenianus", 
  {
   "Aug. c. Parm.": "fragmenta servata apud AVG. c. Parm."
  }, 
  [
   "300", 
   "399", 
   "episcopus Carthaginiensis", 
   ""
  ]
 ], 
 "PS. CYPR.": [
  "Pseudo-Cyprianus", 
  {
   "pudic.": "de bono pudicitiae", 
   "adv. Iud.": "adversus Iudaeos", 
   "laud. mart.": "de laude martyrii", 
   "pasch.": "de pascha computus", 
   "Iud. incred.": "ad Vigilium episcopum de Iudaica incredulitate (i. Celsi cuiusdam epistula)", 
   "singul. cler.": "de singularitate clericorum", 
   "or.": "orationes (sc. preces, quae sec. exempla quaedam graeca confectae sunt)", 
   "epist. 4": "epistulae quattuor ab Hartel collectae", 
   "aleat.": "de aleatoribus", 
   "mont.": "de montibus Sina et Sion", 
   "exhort. paen.": "exhortatio de paenitentia (sc. collectio locorum e sacris scripturis excerptorum)", 
   "[merced.]": "[merced.]", 
   "[abus.]": "de duodecim abusivis saeculi", 
   "cena": "cena Cypriani q. d.", 
   "ad Novat.": "ad Novatianum", 
   "spect.": "de spectaculis", 
   "tract.": "tractatus de centesima, de sexagesima, de tricesima (sc. mercede; respicitur Matth. 13,8)", 
   "rebapt.": "de rebaptismate"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[CASSIOD. (?)]": [
  "", 
  {
   "[epil. Esth.]": "[epil. Esth.]"
  }, 
  [
   "", 
   "", 
   "", 
   "EPIL. bibl. Esth."
  ]
 ], 
 "[GLOSS.]": [
  "", 
  {
   "[Journ. Rom. Stud. 72,1982,105 cap. 77]": "[Journ. Rom. Stud. 72,1982,105 cap. 77]"
  }, 
  [
   "", 
   "", 
   "", 
   "HERMEN. Celtis coll. 77"
  ]
 ], 
 "PS. SORAN.": [
  "Pseudo-Soranus (scripta perperam Sorano tributa)", 
  {
   "puls.": "de pulsibus (\u03c0\u03b5\u03c1\u1f76 \u03c3\u03c6\u03c5\u03b3\u03bc\u1f78\u03bd) libellus", 
   "praef.": "praefatio", 
   "quaest. med.": "quaestiones medicinales", 
   "epit.": "epitome SORANI in cod. Laurent", 
   "dol. matric.": "capitulum de dolore matricis", 
   "[isag.]": "in artem medendi isagoge"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ADDIT.": [
  "", 
  {
   "Prosp. chron. I p. 497": "additamenta varia ad PROSP. chron., vol. I p. 497 Mommsen"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TAB. $7": [
  "", 
  {
   "legion.": "tabula legionum"
  }, 
  [
   "", 
   "", 
   "", 
   "(CIL VI 3492)"
  ]
 ], 
 "TAB. $8": [
  "", 
  {
   "Peut.": "tabula Peutingeriana"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. CHROMAT.": [
  "epistulae Chromatio et Heliodoro suppositae", 
  {
   "[Ps. Hier. epist.]": "inter epistulas Hieronymo suppositas epist."
  }, 
  [
   "600", 
   "625", 
   "", 
   ""
  ]
 ], 
 "CHAR. $1": [
  "Flavius Sosipater Charisius", 
  {
   "gramm.": "artis grammaticae quae exstant"
  }, 
  [
   "300", 
   "399", 
   "grammaticus", 
   ""
  ]
 ], 
 "VICTORIN. $2": [
  "Victorinus", 
  {
   "ad Ruric. epist.": "epistula 2 inter epistulas ad Ruricium scriptas"
  }, 
  [
   "450", 
   "550", 
   "(episcopus Foroiuliensis, ut vid.)", 
   ""
  ]
 ], 
 "AVDAX": [
  "Audax", 
  {
   "epistula ad Augustinum": "epistula ad Augustinum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MACEDON.": [
  "Macedonius", 
  {
   "Aug. epist.": "epistulae ad Augustinum"
  }, 
  [
   "400", 
   "499", 
   "vicarius Africae", 
   ""
  ]
 ], 
 "[RAVENN.]": [
  "", 
  {
   "Ravennatis anonymi cosmographia": "Ravennatis anonymi cosmographia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARGVM.": [
  "", 
  {
   "Plaut. Amph.": "argumenta Plauti comoediarum, e. g. argum. Amphitruonis alterum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[TRACT.] $1": [
  "", 
  {
   "[c. Arian.]": "[c. Arian.]"
  }, 
  [
   "", 
   "", 
   "", 
   "PELAG. frg."
  ]
 ], 
 "CANON.": [
  "", 
  {
   "canones, sc. decreta sim. conciliorum synodorumque et alia ecclesiae antiquae monumenta apost.": "canones apostolorum ecclesiastici e graeco versi", 
   "[Caes. Arel. II]": "[Caes. Arel. II]"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VATIN.": [
  "P. Vatinius", 
  {
   "Cic. fam.": "epistulae ad Ciceronem"
  }, 
  [
   "-95", 
   "-42", 
   "", 
   ""
  ]
 ], 
 "PS. ATHAN.": [
  "Pseudo-Athanasius", 
  {
   "in symb.": "enarratio in symbolum apostolorum", 
   "Lucif. epist.": "epistulae ad Luciferum", 
   "[pasch.]": "[pasch.]", 
   "ad mon.": "exhortatio ad monachos vel de observationibus monachorum", 
   "epist. Pers.": "epistula ad Persarum episcopum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TRAG.": [
  "", 
  {
   "inc.": "incertorum fragmenta tragica"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEM. $1": [
  "Terentius Clemens", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "COMMENT. $4": [
  "", 
  {
   "quaestor. Varro ling.": "commentarii anquisitionis Sergii quaestoris fragmenta, quae servavit VARRO ling."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRAEF.": [
  "", 
  {
   "bibl.": "praefationes, argumenta sim. librorum  biblicorum; notae selectae", 
   "Marcion. in I Cor.": "Marcionensis q. d. in Pauli epistulam ad Corinthios priorem", 
   "in epist. Paul.": "in epistulas Paulinas", 
   "monarch. in Marc.": "monarchianae q. d., e. g. in euang. Marci", 
   "Pelag. in I Cor.": "Pelagiana in Pauli epistulam ad Corinthios priorem"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COMMENT. $2": [
  "", 
  {
   "in Don. gramm. V": "fragmenta, quae e commentariis in Donatum servatis in codicibus excerpsit Keil, vol. V"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COMMENT. $3": [
  "", 
  {
   "Lucan.": "Lucani commenta Bernensia q. d."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAENIT.": [
  "", 
  {
   "Hibern.": "paenitentialia Hiberniae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COMMENT. $1": [
  "", 
  {
   "cons. Varro ling.": "commentariorum consularium fragmentum, quod servavit VARRO ling."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[EPIST.] $2": [
  "", 
  {
   "[ed. Morin (RevB\u00e9n. 40)]": "[ed. Morin (RevB\u00e9n. 40)]"
  }, 
  [
   "", 
   "", 
   "", 
   "EPIST. Bachiar. 2"
  ]
 ], 
 "[EPIST.] $3": [
  "", 
  {
   "[Patern.]": "[Patern.]"
  }, 
  [
   "", 
   "", 
   "", 
   "EPIST. procur."
  ]
 ], 
 "[EPIST.] $1": [
  "", 
  {
   "[ed. Morin (RevB\u00e9n. 34)]": "[ed. Morin (RevB\u00e9n. 34)]"
  }, 
  [
   "", 
   "", 
   "", 
   "EPIST. Pelag. Vindob."
  ]
 ], 
 "ALBINVS": [
  "Albinus", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "-200", 
   "-101", 
   "Aulus Postumius Albinus cos. 151?", 
   ""
  ]
 ], 
 "SCAVR.": [
  "Q. Terentius Scaurus", 
  {
   "gramm.": "de orthographia liber", 
   "app. gramm.": "appendix sive fragmenta Scauro adiuncta"
  }, 
  [
   "50", 
   "150", 
   "", 
   ""
  ]
 ], 
 "[EPIST.] $4": [
  "", 
  {
   "[Paul. et Cor.]": "[Paul. et Cor.]"
  }, 
  [
   "", 
   "", 
   "", 
   "ACT. Pauli Cor."
  ]
 ], 
 "[EPIST.] $5": [
  "", 
  {
   "[Sapph.]": "epistula Sapphus"
  }, 
  [
   "", 
   "", 
   "", 
   "OV. epist. 15"
  ]
 ], 
 "MACR.": [
  "Macrobius Ambrosius Theodosius", 
  {
   "somn.": "commentarii in Ciceronis somnium Scipionis", 
   "exc. gramm.": "excerpta quaedam ex opere grammatico de differentiis et societatibus graeci latinique verbi", 
   "Sat.": "Saturnaliorum quae exstant"
  }, 
  [
   "385", 
   "430", 
   "vir clarissimus et inlustris", 
   ""
  ]
 ], 
 "PROP.": [
  "Sex. Propertius", 
  {
   "elegiae": "elegiae"
  }, 
  [
   "-48", 
   "-15", 
   "", 
   ""
  ]
 ], 
 "MAX. TAVR.": [
  "Maximus (sc. maior) Taurinensis", 
  {
   "[hom. app.]": "homiliae tres appendicis", 
   "[serm. app.]": "[serm. app.]", 
   "[serm. 17]": "[serm. 17]", 
   "serm. Rev. B\u00e9n\u00e9d. 97,1987 p. 40": "sermonis genuini (?) fragm. nunc initio donatum, p. 40 Rev. B\u00e9n\u00e9d.", 
   "[cap. euang.]": "[cap. euang.]", 
   "[c. pag.]": "[c. pag.]", 
   "[serm. 113]": "[serm. 113]", 
   "[c. Iud.]": "[c. Iud.]", 
   "sermones (a Mutzenbecher collecti)": "sermones (a Mutzenbecher collecti)", 
   "[bapt.]": "[bapt.]", 
   "[hom.]": "[hom.]"
  }, 
  [
   "350", 
   "420", 
   "episcopus", 
   ""
  ]
 ], 
 "COD. $3": [
  "", 
  {
   "Theod.": "codex Theodosianus (sc. principum inde a Constantino constitutiones iussu Theodosii II collectae)", 
   "gest. in sen.": "gesta in senatu Romano de codice Theodosiano publicando", 
   "const. de constit.": "constitutio de constitutionariis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COD. $2": [
  "", 
  {
   "de cod. confirm.": "constitutio 'Summa' de Iustiniano codice confirmando", 
   "de cod. comp.": "constitutio 'Haec' de novo codice componendo", 
   "de emend. cod.": "constitutio 'Cordi' de emendatione codicis Iustiniani et secunda eius editione", 
   "Iust.": "codex Iustinianus (sc. principum inde ab Hadriano constitutiones iussu Iustiniani collectae) retractatus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COD. $1": [
  "", 
  {
   "Herm.": "codex Hermogenianus (sc. principum constitutiones ab Hermogeniano quodam [HERMOG. ?] collectae) deperditus, cuius tamen fragmenta alia alibi servata sunt", 
   "Visig.": "epitome Visigothica (sc. breviarii Alarici)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[IMP. AVG.]": [
  "", 
  {
   "[Mart.]": "imperatorum Romanorum reliquiae, e. g. Augustus, carmen servatum apud MART."
  }, 
  [
   "-63", 
   "14", 
   "", 
   "AVGVSTVS Mart."
  ]
 ], 
 "[CONSENS.]": [
  "", 
  {
   "[mon.]": "regula consensoria monachorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FORMVLA": [
  "", 
  {
   "Baet. (CIL II 5406)": "formula Baetica ad rem fiducialem pertinens"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[EVSEB.]": [
  "Eusebius Pamphili", 
  {
   "[epist. Athan.]": "epistulae duae (sc. ad Alexandrum et ad Euphrationem) e graeco versae (fragmenta), vol. III Opitz"
  }, 
  [
   "260", 
   "340", 
   "episcopus Caesariensis", 
   ""
  ]
 ], 
 "CANDID.": [
  "Candidus", 
  {
   "gen. div.": "liber de generatione divina (sc. epistula prior sec. Henry/Hadot)"
  }, 
  [
   "350", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. ORSIES.": [
  "Pseudo-(H)orsiesius", 
  {
   "cogit.": "de sex cogitationibus sanctorum libellus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EXC.": [
  "", 
  {
   "barb.": "excerpta barbari vel ex barbaro, sc. eae barbari Scaligeri q. d. partes, quae non sub nota CHRON. Alex. afferuntur"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EVSEB. EMES.": [
  "Eusebius <Emesenus>", 
  {
   "serm.": "sermones", 
   "[mart.]": "sermo de martyribus"
  }, 
  [
   "295", 
   "359", 
   "episcopus", 
   "serm. 6,32"
  ]
 ], 
 "POMPIL.": [
  "Pompilius", 
  {
   "trag.": "tragoediae", 
   "[epigr.]": "[epigr.]"
  }, 
  [
   "0", 
   "99", 
   "grammaticus?", 
   "PAPIN. epigr. Varro ling. 7,28 et VARRO Men. 356"
  ]
 ], 
 "TIMAS.": [
  "Timasius et Iacobus", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "FRG.": [
  "", 
  {
   "apoc.": "fragmentum fort. ex apocalypsi quadam e graeco versa sumptum (afferuntur signa Antichristi)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CONFESS.": [
  "", 
  {
   "confessorum epistula ad Cyprianum": "confessorum epistula ad Cyprianum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "INTERLOC.": [
  "", 
  {
   "praef. vig. (CIL VI 266)": "interlocutiones Aelii Floriani, Herennii Modestini, Faltonii Restitutiani praefectorum vigilum de lite fullonum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VAGELL.": [
  "Vagellius", 
  {
   "carm. frg. Sen. nat.": "carminum fragm. servatum apud SEN. nat."
  }, 
  [
   "0", 
   "100", 
   "", 
   ""
  ]
 ], 
 "MART. CAP.": [
  "Martianus Minneius Felix Capella Carthaginiensis", 
  {
   "de nuptiis Philologiae et Mercurii": "de nuptiis Philologiae et Mercurii"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "MARCIAN.": [
  "Aelius Marcianus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "150", 
   "250", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "IVST. VRGELL.": [
  "Iustus Vrgellitanus", 
  {
   "ad Serg.": "epistula ad Sergium episcopum", 
   "epist.": "epistulae", 
   "ad Iust.": "epistula ad Iustum diaconum", 
   "in cant.": "in cantica canticorum explicatio mystica (expositio)", 
   "serm.": "sermo in natale sancti Vincentii"
  }, 
  [
   "450", 
   "550", 
   "episcopus Vrgellitanus Hispanus", 
   ""
  ]
 ], 
 "[EVANG.]": [
  "", 
  {
   "[de nativ. Mar.]": "euangelium apocryphum de nativitate Mariae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CIC.": [
  "M. Tullius Cicero", 
  {
   "div.": "de divinatione", 
   "rep. frg.": "librorum de re publica incertorum fragm.", 
   "Arch.": "pro A. Licinio Archia poeta oratio", 
   "Rab. perd.": "pro C. Rabirio perduellionis reo orationis quae exstant", 
   "dom.": "de domo sua ad pontifices oratio", 
   "Rab. Post.": "pro C. Rabirio Postumo oratio", 
   "Planc.": "pro Cn. Plancio oratio", 
   "Q. Rosc.": "pro Q. Roscio Gallo comoedo oratio (mutila)", 
   "orat.": "orator (ad M. Brutum)", 
   "Pis.": "in L. Calpurnium Pisonem oratio", 
   "div. in Caec.": "in Q. Caecilium Nigrum oratio, quae divinatio dicitur", 
   "frg. inc.": "incertorum librorum fragmenta", 
   "Cato": "Cato maior de senectute", 
   "Balb.": "pro L. Cornelio Balbo oratio", 
   "rep.": "librorum de re publica quae exstant", 
   "Quinct.": "pro P. Quinctio oratio", 
   "Vatin.": "in P. Vatinium testem interrogatio", 
   "Deiot.": "pro rege Deiotaro oratio", 
   "Font.": "pro M. Fonteio orationis quae exstant", 
   "Att.": "epistulae ad Atticum", 
   "de orat.": "de oratore", 
   "opt. gen.": "de optimo genere oratorum", 
   "Lael.": "Laelius de amicitia", 
   "Verr.": "in C. Verrem orationes sex", 
   "epist. frg.": "epistularum fragmenta a scriptoribus servata", 
   "Tull.": "pro M. Tullio orationis quae exstant", 
   "ad Q. fr.": "epistulae ad Quintum fratrem", 
   "Phil.": "in M. Antonium orationes Philippicae", 
   "Mur.": "pro L. Murena oratio", 
   "Arat. frg.": "Arateorum fragm.", 
   "Lig.": "pro Q. Ligario oratio", 
   "ac.": "Academici libri ab ipso Cicerone postea retractati", 
   "top.": "topica", 
   "[facet. dict.]": "Ciceronis facete dicta ab aliis collecta", 
   "Marcell.": "pro M. Claudio Marcello oratio", 
   "Flacc.": "pro L. Valerio Flacco oratio", 
   "Mil.": "pro T. Annio Milone oratio", 
   "Caecin.": "pro A. Caecina oratio", 
   "frg.": "incertae sedis fragmenta", 
   "leg. agr.": "de lege agraria orationum quae exstant", 
   "Cluent.": "pro A. Cluentio Habito oratio", 
   "Brut.": "Brutus (sc. de claris oratoribus)", 
   "ad Brut.": "epistulae ad M. Iunium Brutum", 
   "Catil.": "in L. Sergium Catilinam orationes", 
   "Arat.": "Arati Phain\u00f3mena versa atque retractata", 
   "parad.": "paradoxa Stoicorum", 
   "fat.": "de fato quae exstant", 
   "progn. frg.": "prognostica", 
   "p. red. ad Quir.": "post reditum ad Quirites (cum populo gratias egit) oratio", 
   "Tim.": "Timaei Platonici versionis fragmenta", 
   "or. frg.": "orationum deperditarum fragmenta", 
   "fam.": "epistulae ad familiares", 
   "fin.": "de finibus bonorum et malorum", 
   "Manil.": "pro lege Manilia (de imperio Cn. Pompei) oratio", 
   "Cael.": "pro M. Caelio Rufo oratio", 
   "nat. deor.": "de natura deorum", 
   "phil. frg.": "librorum philosophicorum (et aliorum quorundam oratione soluta conscriptorum) deperditorum fragmenta", 
   "Tusc.": "Tusculanae disputationes", 
   "off.": "de officiis", 
   "S. Rosc.": "pro Sex. Roscio Amerino oratio", 
   "Scaur.": "pro M. Aemilio Scauro orationis quae exstant", 
   "leg.": "librorum de legibus quae exstant", 
   "har. resp.": "de haruspicum responso oratio", 
   "Sest.": "pro P. Sestio oratio", 
   "prov.": "de provinciis consularibus oratio", 
   "part.": "partitiones oratoriae", 
   "carm. frg.": "carminum (praeter Aratea) fragmenta vel quae exstant", 
   "inv.": "rhetorici libri qui vocantur de inventione", 
   "Sull.": "pro P. Cornelio Sulla oratio", 
   "p. red. in sen.": "post reditum in senatu (cum senatui gratias egit) oratio", 
   "frg. Hier. epist.": "fragmenta, quibus lacuna inter \u00a75 et 6 hians ex parte saltem expletur, e. g. fragm. servatum apud HIER. epist."
  }, 
  [
   "-106", 
   "-43", 
   "", 
   ""
  ]
 ], 
 "CLEDON.": [
  "Cledonius", 
  {
   "gramm.": "ars grammatica (in Donati artes exstantes)"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "VAL.": [
  "Valerius", 
  {
   "com.": "comoediae (an mimi?) fragmentum unicum"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "LVP.": [
  "Lupus", 
  {
   "epist.": "epistula ad Thalasium episcopum Andecavensem"
  }, 
  [
   "383", 
   "487", 
   "episcopus Trecensis et Euphronius episcopus Augustodunensis", 
   ""
  ]
 ], 
 "[ITALA]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "VET. LAT."
  ]
 ], 
 "PAVL. MED.": [
  "Paulinus Mediolanensis", 
  {
   "vita Ambr.": "vita Ambrosii episcopi Mediolanensis", 
   "adv. Cael.": "libellus adversum Caelestium Zosimo papae datus", 
   "[bened. 11,2]": "de benedictionibus patriarcharum libellus"
  }, 
  [
   "350", 
   "450", 
   "diaconus", 
   ""
  ]
 ], 
 "DIDASC. $2": [
  "", 
  {
   "Ter. Hec.": "didascaliae Terentii comoediarum, e. g. didasc. Hecyrae altera"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SERM.": [
  "", 
  {
   "Arian. frg.": "Arianorum sermonum fragmenta Bobiensia", 
   "Anal. Bolland. 96": "editus in Anal. Bolland. vol. 96", 
   "Bibl. Cas. III 118": "editi in florilegio Bibliothecae Casinensis", 
   "[Caspari Anecd.]": "ed. Caspari", 
   "de conf. diab.": "de confusione diaboli et inferni", 
   "Caspari p. 220,12": "ed. Caspari", 
   "sermo, sermones (sc. incertae attributionis)": "sermo, sermones (sc. incertae attributionis)", 
   "Arian.": "Arianus quidam", 
   "Migne suppl.": "sermones duo Fausti Reiensis qui feruntur", 
   "[Journ. Theol. Stud. 17,1916 p. 232,27]": "sermones Ariani, quos Spagnolo et Turner in Journ. Theol. Stud. ediderunt", 
   "[de vita Genes. 7]": "de vita S. Genesii", 
   "Corp. Vind. 21": "editi in Corporis Vindobonensis vol. 21", 
   "Mediol. frg.": "fragmenta Mediolanensia (olim perperam Arrianorum sermonum series altera)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIDASC. $1": [
  "", 
  {
   "Plaut. Stich.": "didascaliae Plauti comoediarum (fere Stichi)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[EPIST.] $6": [
  "", 
  {
   "[synod. ... (Hil. ...)]": "[synod. ... (Hil. ...)]"
  }, 
  [
   "", 
   "", 
   "", 
   "HIL. coll. antiar."
  ]
 ], 
 "LVCID.": [
  "Lucidus", 
  {
   "Faust. Rei. epist.": "epistula ad Faustum Reiensem et alios"
  }, 
  [
   "400", 
   "499", 
   "presbyter", 
   ""
  ]
 ], 
 "HILARVS": [
  "Hilarus", 
  {
   "ad Pulch.": "epistula, quam scripsit Hilarus tunc diaconus ad Pulcheriam Augustam (exstat versio graeca)", 
   "Victor. pasch.": "epistula, quam scripsit Hilarus tunc archidiaconus ad Victorium Aquitanum"
  }, 
  [
   "400", 
   "468", 
   "papa", 
   ""
  ]
 ], 
 "LVCIAN.": [
  "Lucianus", 
  {
   "Cypr. epist.": "epistula ad Celerinum"
  }, 
  [
   "350", 
   "395", 
   "", 
   ""
  ]
 ], 
 "FORMVL.": [
  "", 
  {
   "Andecav.": "formulae Andecavenses, sc. exempla instrumentorum variorum (e. g. venditionis) Andecavis collecta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LVCC.": [
  "L. Lucceius", 
  {
   "Cic. fam.": "epistula ad Ciceronem"
  }, 
  [
   "-100", 
   "-43", 
   "", 
   ""
  ]
 ], 
 "TAB. $9": [
  "", 
  {
   "Sulis": "tabulae Aquis Sulis (nunc Bath) in Sulis Minervae templo repertae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "RHET.": [
  "", 
  {
   "Her.": "rhetorica ad C. Herennium"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[SISEBVT.]": [
  "Sisebutus", 
  {
   "carmen de eclipsibus solis et lunae": "carmen de eclipsibus solis et lunae"
  }, 
  [
   "550", 
   "621", 
   "rex Gothorum", 
   ""
  ]
 ], 
 "ANIAN.": [
  "An(n)ianus Celedensis", 
  {
   "Chrysost. laud. Paul.": "versio homiliarum 7 Iohannis Chrysostomi super Pauli apostoli laudibus", 
   "Chrysost. hom.": "versio homiliarum 25 priorum Iohannis Chrysostomi in Matthaeum"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "MESSALLA $1": [
  "M. Valerius Messalla Corvinus", 
  {
   "or. frg. Fest.": "orationum fragmenta a scriptoribus servata"
  }, 
  [
   "-64", 
   "8", 
   "", 
   "e. g. fragm. apud FEST."
  ]
 ], 
 "IOVIN.": [
  "Iovinianus", 
  {
   "Hier. adv. Iovin.": "verba ab Hieronymo allata"
  }, 
  [
   "330", 
   "399", 
   "haereticus", 
   ""
  ]
 ], 
 "CLOD.": [
  "Ser. Clodius (vel Claudius)", 
  {
   "fragmenta grammatica a scriptoribus servata, e. g. fragm. quod affert VARRO ling.": "fragmenta grammatica a scriptoribus servata, e. g. fragm. quod affert VARRO ling."
  }, 
  [
   "-120", 
   "-60", 
   "", 
   ""
  ]
 ], 
 "CAELEST.": [
  "Caelestius Pelagianus", 
  {
   "Aug. perf. iust.": "operum reliquiae ab Augustino servatae"
  }, 
  [
   "350", 
   "431", 
   "", 
   ""
  ]
 ], 
 "MALL. THEOD.": [
  "Flavius Mallius Theodorus", 
  {
   "gramm.": "de metris"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "[VICTORIN.]": [
  "", 
  {
   "[leg. dom.]": "versus Victorini cuiusdam de lege domini"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EVFRAS.": [
  "Eufrasius", 
  {
   "epistula ad Ruricium": "epistula ad Ruricium"
  }, 
  [
   "450", 
   "515", 
   "episcopus Arvernus", 
   ""
  ]
 ], 
 "CHRON. $1": [
  "", 
  {
   "Caesaraug. chron. II": "chronicorum Caesaraugustanorum q. d. reliquiae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[REG. FRANC.]": [
  "", 
  {
   "[reg. Franc.]": "generatio regum (Francorum; vulgo 'Fr\u00e4nkische V\u00f6lkertafel')"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MOD. $1": [
  "Herennius Modestinus", 
  {
   "dig.": "fragmenta in collectionibus antiquis (praecipue DIG.) servata", 
   "frg.": "fragmenta aliter servata"
  }, 
  [
   "185", 
   "250", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "CHRON. $2": [
  "", 
  {
   "Gall. chron. I": "chronica Gallica varia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VARRO AT.": [
  "P. Terentius Varro Atacinus", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-82", 
   "-35", 
   "", 
   ""
  ]
 ], 
 "CALL.": [
  "Callistratus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "50", 
   "150", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "LAVS": [
  "", 
  {
   "Pis.": "laus Pisonis (sc. C. Calpurnii Pisonis)"
  }, 
  [
   "", 
   "", 
   "incertus poeta", 
   ""
  ]
 ], 
 "SIC. FLACC.": [
  "Siculus Flaccus", 
  {
   "grom.": "liber gromaticus de condicionibus agrorum"
  }, 
  [
   "100", 
   "199", 
   "", 
   ""
  ]
 ], 
 "SEPT. SER.": [
  "Septimius Serenus", 
  {
   "carm. frg.": "opuscula (ruralia)"
  }, 
  [
   "100", 
   "199", 
   "", 
   ""
  ]
 ], 
 "EPIST. $14": [
  "", 
  {
   "episc. Greg. Tur. Franc.": "epistulae episcoporum quorundam a Gregorio Turonensi traditae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FLORENT.": [
  "Florentinus", 
  {
   "dig.": "fragmenta in digesta (et alibi) servata"
  }, 
  [
   "100", 
   "200", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "[PS. MATTH.]": [
  "Pseudo-Mattheus", 
  {
   "[euang.]": "euangelium apocryphum, sc. liber de ortu beatae Mariae et infantia salvatoris"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRESB.": [
  "presbyteri Romani", 
  {
   "Cypr. epist.": "epistula ad Cyprianum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GRACCHAN.": [
  "M. Iunius Gracchanus", 
  {
   "Plin. nat.": "de potestatibus, fragm. servatum apud PLIN. nat."
  }, 
  [
   "-150", 
   "-50", 
   "", 
   ""
  ]
 ], 
 "HYMN.": [
  "", 
  {
   "Walpole": "hymni a Walpole collecti", 
   "[Ambros. I]": "hymnorum olim Ambrosio ascriptorum series prior", 
   "Ambros. II": "hymnorum olim Ambrosio ascriptorum series altera"
  }, 
  [
   "", 
   "", 
   "", 
   "HYMN. Walpole"
  ]
 ], 
 "MARCELL. $1": [
  "Flavius Marcellinus", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "413", 
   "tribunus et notarius", 
   ""
  ]
 ], 
 "MARIAN.": [
  "Marianus", 
  {
   "carm. frg.": "carminis, sc. Lupercalium (?), fragmentum"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "MARCELL. $3": [
  "Vlpius Marcellus", 
  {
   "dig.": "fragmenta in digesta (et alibi) servata"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "MARCELL. $2": [
  "M. Claudius Marcellus", 
  {
   "Cic. fam.": "epistula ad Ciceronem"
  }, 
  [
   "-95", 
   "-45", 
   "cos. 51 v. Chr.", 
   ""
  ]
 ], 
 "[ANON.]": [
  "", 
  {
   "[de grad.]": "[de grad.]"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIRT.": [
  "A. Hirtius", 
  {
   "Cic. Att.": "epistula ad Ciceronem", 
   "Gall.": "liber 8 Caesaris commentariorum belli Gallici libris septem ab Hirtio additus"
  }, 
  [
   "-90", 
   "-43", 
   "Caesaris familiaris", 
   ""
  ]
 ], 
 "MAR. VICTOR": [
  "Claudius Marius Victor(ius)", 
  {
   "praef.": "praefatio (precatio)", 
   "aleth.": "alethia"
  }, 
  [
   "400", 
   "499", 
   "rhetor Massiliensis", 
   ""
  ]
 ], 
 "PERS.": [
  "A. Persius Flaccus", 
  {
   "saturae": "saturae"
  }, 
  [
   "34", 
   "62", 
   "", 
   ""
  ]
 ], 
 "EPIST. $17": [
  "", 
  {
   "Iulian. (CIL III 141658)": "epistulae Iuliani (praefecti annonae?) ad navicularios marinos Arelatenses et ad procuratorem quendam Augg."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANNIVS": [
  "T. Annius Luscus", 
  {
   "orationis in Ti. Gracchum fragm. servatum apud FEST.": "orationis in Ti. Gracchum fragm. servatum apud FEST."
  }, 
  [
   "-200", 
   "-101", 
   "cos. 153?", 
   ""
  ]
 ], 
 "ACT.": [
  "acta \u00a0pagana\u00a0 inscriptionibus tradita", 
  {
   "Arv.": "fratrum Arvalium", 
   "Aug. (CIL VI 32323) 168": "quintorum (imp. Augusti), lin. 168", 
   "lud. saec.": "ludorum saecularium", 
   "a. 105 (CIL VI 2075) II 7": "ad ann. 105, col. II lin. 7", 
   "Sept. Sev. 9 (CIL VI 32334) 12 vel 5a,92 Pighi": "septimorum (imp. Septimii Severi), fragm. 9 Mommsen lin. 12 vel n. 5a lin. 92 Pighi", 
   "a. 27 (CIL VI 2024) f 8": "ad ann. 27, fragm. f lin. 8", 
   "Dom. (CIL VI 2071) I 5": "aetatis imp. Domitiani, (fragm. D) col. I lin. 5", 
   "[Claud.] inc. (CIL VI 32325) c 6": "aetatis incertae (quae ad ludos Claudii vel Domitiani perti\u00adnent), fragm. c lin. 6"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LIV.": [
  "T. Livius Patavinus", 
  {
   "operis maximi historici ('ab urbe condita') quae exstant": "operis maximi historici ('ab urbe condita') quae exstant"
  }, 
  [
   "-59", 
   "17", 
   "", 
   ""
  ]
 ], 
 "HERMOG.": [
  "Hermogenianus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "250", 
   "350", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "EPIST. $10": [
  "", 
  {
   "Chlodov.": "epistula Chlodovechi regis Francorum ad episcopos regionum nuper expugnatarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VINC. VICT.": [
  "Vincentius Victor", 
  {
   "Aug. anim.": "fragmenta servata apud AVG. anim."
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "IVVENC.": [
  "C. Vettius Aquilinus Iuvencus", 
  {
   "euangelia": "euangelia"
  }, 
  [
   "250", 
   "350", 
   "presbyter Hispanus", 
   ""
  ]
 ], 
 "CHRONOGR.": [
  "", 
  {
   "a. 354 chron. I": "chronographus anni 354 q. d."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $11": [
  "", 
  {
   "Claud. Terent. (Pap. Corp. 254)": "epistula Claudii Terentiani ad Claudium Tiberianum patrem"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[FRG.] $2": [
  "", 
  {
   "[Sinait.]": "[Sinait.]"
  }, 
  [
   "", 
   "", 
   "", 
   "SCHOL. Sinait."
  ]
 ], 
 "[FRG.] $1": [
  "", 
  {
   "[Berol.]": "[Berol.]"
  }, 
  [
   "", 
   "", 
   "", 
   "FRG. de iudic."
  ]
 ], 
 "EPIST. $12": [
  "", 
  {
   "decur. Forosempron. (CIL XI 6123)": "epistula duumvirorum et decurionum Forosemproniensium ad C. Hedium C. f. Verum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PACTIO": [
  "", 
  {
   "reg. Greg. Tur. Franc.": "pactio Gunthchramni et Childeberthi regum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VAL. ANT.": [
  "Valerius Antias", 
  {
   "hist.": "annales"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "TAB. $10": [
  "", 
  {
   "Aemil.": "L. Aemilii M. f. cos.", 
   "Acil. Glabr.": "Acilii Glabrionis", 
   "[Gracch.]": "Ti. Sempronii Gracchi cos.", 
   "triumph.": "tabula triumphatoria"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILO": [
  "Philo(n) Alexandrinus", 
  {
   "quaest. in gen.": "quaestiones in genesi et solutiones", 
   "vita contempl.": "de vita contemplativa sive de statu Essaeorum", 
   "opera latine versa": "opera latine versa"
  }, 
  [
   "-15", 
   "40", 
   "", 
   ""
  ]
 ], 
 "CONSENT.": [
  "Consentius", 
  {
   "epistulae ad Augustinum": "epistulae ad Augustinum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AVR.": [
  "Aurelius Carthaginiensis", 
  {
   "epist.": "epistula ad omnes episcopos per Byzacenam et Arzugitanam provinciam constitutos"
  }, 
  [
   "350", 
   "430", 
   "episcopus", 
   ""
  ]
 ], 
 "PS. VEN. FORT.": [
  "Pseudo-Venantius Fortunatus", 
  {
   "[vita Remed.]": "vita Remedii", 
   "carm. app.": "carminum spuriorum appendix", 
   "vita Med.": "vita Medardi"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CET. FAV.": [
  "M. Cetius Faventinus", 
  {
   "artis architectonicae privatis usibus adbreviatus liber (sc. epitome Vitruvii)": "artis architectonicae privatis usibus adbreviatus liber (sc. epitome Vitruvii)"
  }, 
  [
   "200", 
   "299", 
   "", 
   ""
  ]
 ], 
 "FEL.": [
  "Felix Manichaeus", 
  {
   "Aug. c. Fel.": "verba ab Augustino allata"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "PS. PROSP.": [
  "Pseudo-Prosper", 
  {
   "vocat. gent.": "de vocatione omnium gentium libri", 
   "carm. de prov.": "carmen de providentia dei", 
   "conf.": "confessio", 
   "[prom.]": "[prom.]"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[GALL. PLAC.]": [
  "Aelia Galla Placidia Augusta", 
  {
   "[Leo M. epist.]": "epistulae duae, sc. inter Leonis Magni epistulas"
  }, 
  [
   "390", 
   "450", 
   "", 
   "CONC. S II 3,1"
  ]
 ], 
 "MET. NVM.": [
  "Q. Caecilius Metellus Numidicus", 
  {
   "or. frg. Gell.": "orationum fragmenta a scriptoribus servata"
  }, 
  [
   "-150", 
   "-91", 
   "", 
   "e. g. fragm. apud GELL."
  ]
 ], 
 "PHILARG.": [
  "Iunius Philargyrius (Filagrius?)", 
  {
   "praef. rec. I": "praefatio sive vita Vergiliana (recensio I)", 
   "Verg. ecl.": "explanatio in bucolica Vergilii"
  }, 
  [
   "400", 
   "499", 
   "grammaticus", 
   ""
  ]
 ], 
 "AQVILA $1": [
  "Aquila Romanus", 
  {
   "rhet.": "de figuris sententiarum et elocutionis"
  }, 
  [
   "200", 
   "299", 
   "rhetor", 
   ""
  ]
 ], 
 "[PS. PHOEBAD.]": [
  "", 
  {
   "[fid.]": "[fid.]"
  }, 
  [
   "", 
   "", 
   "", 
   "GREG. ILIB. fid."
  ]
 ], 
 "COMPVT. $3": [
  "", 
  {
   "cod. Col.": "computorum paschalium fragmenta codice Coloniensi servata (pertinent ad supputationem Romanam q. d.)", 
   "prol.": "prologus Coloniensis q. d. (exstat etiam in cod. Oxoniensi)", 
   "frg.": "fragmenta Coloniensia q. d."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COMPVT. $2": [
  "", 
  {
   "cod. Ambr.": "computi paschalis fragmentum codice Ambrosiano servatum (pertinet ad supputationem Romanam q. d.)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COMPVT. $1": [
  "", 
  {
   "Carth.": "computus Carthaginiensis q. d. (de ratione paschae)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FAST. $4": [
  "", 
  {
   "cos.": "fasti consulares", 
   "Antiat. mai. a. 84 a. Chr.": "Antiates maiores (olim non distincti a minoribus) ad ann. 84 a. Chr.", 
   "Capitol. a. 13": "Capitolini ad ann. 13 p. Chr. (=ann. urbis conditae 766)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FAST. $5": [
  "", 
  {
   "fer. lat. a. 109": "fasti feriarum latinarum ad ann. 109"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FAST. $6": [
  "", 
  {
   "mag. Ost. a. 146": "fasti magistratuum municipalium sim., e. g. Ostienses ad ann. 154"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FAST. $7": [
  "", 
  {
   "mag. vici": "fasti magistrorum vici", 
   "Pomp. a. 46 a. Chr.": "Pompeiani ad ann. 46 a. Chr.", 
   "urb. a. 21": "urbani ad ann. 21 p. Chr."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FAST. $1": [
  "", 
  {
   "ann. Num. Antiat. Interkal. 23": "fasti anni Numani Antiates (sive Antiates maiores) ad diem 23 mensis Interkalaris"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FAST. $2": [
  "", 
  {
   "augur. a. 7": "fasti augurum ad ann. 7"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FAST. $3": [
  "", 
  {
   "inc. Lun. a. 19": "collegii incerti (lapicidarum?) Lunenses ad ann. 19 p. Chr. (=ann. urbis conditae 772)", 
   "sepulcr. a. 3 a. Chr.": "collegii sepulcralis urbani ad ann. 3 a. Chr.", 
   "colleg.": "fasti consulares collegiorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $18": [
  "", 
  {
   "leg. iurid. (CIL II 2959)": "epistula Claudii Quartini legati iuridici ad duumviros Pompelonensium"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEO M.": [
  "Leo Magnus", 
  {
   "epist. epistulae": "diverse", 
   "serm. app.": "sermonum (sc. spuriorum) appendix", 
   "[epist. app. 8]": "appendix ad Leonis epistulas a Migne editas, pars octava (de conc. Constantinop. a. 450)", 
   "serm.": "sermones"
  }, 
  [
   "400", 
   "461", 
   "papa", 
   ""
  ]
 ], 
 "FAST. $8": [
  "", 
  {
   "Merseb. a. 454": "fasti Merseburgenses, sc. epitomae cuiusdam chronicorum Italicorum (annalium Ravennatium) fragmenta, ad ann. 454"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FAST. $9": [
  "", 
  {
   "min. dom. Aug. Antiat. a. 51": "fasti ministrorum domus Augustae, e. g. Antiates ad ann. 51"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CVRIO AVUS": [
  "C. Scribonius Curio avus", 
  {
   "orationis pro Fulvio fragm. servatum apud CIC. inv.": "orationis pro Fulvio fragm. servatum apud CIC. inv."
  }, 
  [
   "-90", 
   "-49", 
   "", 
   ""
  ]
 ], 
 "EPIST. $19": [
  "", 
  {
   "leg. pr. pr. (CIL XIII 3162)": "epistulae legatorum pro praetore, e. g. Cl. Paulini ad Sennium Sollemnem"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FORTVN.": [
  "Atilius Fortunatianus", 
  {
   "gramm.": "ars (de metris Horatianis), vol. VI"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "VICT. VIT.": [
  "Victor Vitensis", 
  {
   "historia persecutionis Africanae provinciae": "historia persecutionis Africanae provinciae", 
   "[not.]": "[not.]"
  }, 
  [
   "400", 
   "490", 
   "episcopus", 
   ""
  ]
 ], 
 "PHILOCAL.": [
  "Furius Dionysius Philocalus (Fil-)", 
  {
   "fast. Dec. 31": "fasti ad diem 31 mensis Decembris (codicibus traditi)"
  }, 
  [
   "300", 
   "399", 
   "", 
   "(Inscr. Ital. XIII 2 p. 261)"
  ]
 ], 
 "PSALM.": [
  "", 
  {
   "resp. ed. Roca\u2014Puig": "psalmus responsorius sive hymnus a Roca\u2014Puig editus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CEREAL.": [
  "Cerealis", 
  {
   "contra Maximinum Arianum": "contra Maximinum Arianum"
  }, 
  [
   "400", 
   "480", 
   "episcopus Castelloripensis", 
   ""
  ]
 ], 
 "VARIVS": [
  "L. Varius Rufus", 
  {
   "carm. frg.": "carminum fragm.", 
   "trag.": "tragoediarum fragmenta"
  }, 
  [
   "-70", 
   "-15", 
   "Vergilii familiaris", 
   ""
  ]
 ], 
 "BIBAC.": [
  "M. Furius Bibaculus", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "-103", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "VERVS": [
  "imp. Verus", 
  {
   "Fronto": "epistulae ad Frontonem"
  }, 
  [
   "150", 
   "219", 
   "", 
   ""
  ]
 ], 
 "[PS. MACAR.]": [
  "Pseudo-Macarius Aegyptius", 
  {
   "[reg.]": "[reg.]", 
   "[epist.]": "epistula ad monachos"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SCROFA": [
  "Cn. Tremelius Scrofa", 
  {
   "Colum.": "de agri cultura"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   "cuiusdam de agri cultura operis fragm. servatum apud COLVM."
  ]
 ], 
 "PRVD.": [
  "Aurelius Prudentius Clemens", 
  {
   "psych.": "psychomachia", 
   "praef.": "praefatio operum", 
   "cath.": "liber cathemerinon", 
   "perist.": "liber peristephanon", 
   "c. Symm.": "contra Symmachum", 
   "apoth.": "apotheosis", 
   "ham.": "hamartigenia", 
   "epil.": "epilogus operum", 
   "[ditt.]": "[ditt.]", 
   "tituli": "tituli historiarum (vulgo 'dittochaeon')"
  }, 
  [
   "348", 
   "405", 
   "", 
   ""
  ]
 ], 
 "[EVTYCH.]": [
  "", 
  {
   "epistulae, quam Eutyches haereticus ad Leonem Magnum miserat,versio altera": "epistulae, quam Eutyches haereticus ad Leonem Magnum miserat,versio altera"
  }, 
  [
   "", 
   "", 
   "", 
   "CONC. S II 4 p. 150,33"
  ]
 ], 
 "[IVLIAN.]": [
  "Iulianus", 
  {
   "[Leo M. epist. app. 6 p. 1244B]": "epistula ad Leonem imperatorem e graeco versa, edita in appendice ad Leonis Magni epistulas"
  }, 
  [
   "400", 
   "499", 
   "episcopus Coensis", 
   "CONC. S II 5 p. 66,39"
  ]
 ], 
 "MAVRIC.": [
  "Iunius Mauricianus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "CASSIAN.": [
  "Iohannes Cassianus", 
  {
   "c. Nest.": "de incarnatione domini contra Nestorium", 
   "inst.": "de institutis coenobiorum et de octo principalium vitiorum remediis", 
   "conl.": "conlationes (sc. dialogi cum monachis Aegyptiis)"
  }, 
  [
   "360", 
   "435", 
   "presbyter Massiliensis", 
   ""
  ]
 ], 
 "PETRON. BONON.": [
  "Petronius", 
  {
   "serm.": "sermones duo"
  }, 
  [
   "350", 
   "450", 
   "episcopus Bononiensis (an Veronensis?)", 
   ""
  ]
 ], 
 "LVTAT.": [
  "Q. Lutatius Catulus pater", 
  {
   "epigr.": "epigrammata"
  }, 
  [
   "-150", 
   "-87", 
   "", 
   ""
  ]
 ], 
 "SVLPICIA $1": [
  "Sulpicia", 
  {
   "sat.": "satira q. d. sive conquestio de statu rei publicae et temporibus Domitiani"
  }, 
  [
   "401", 
   "500", 
   "<Satirica>", 
   ""
  ]
 ], 
 "SVLPICIA $2": [
  "Sulpicia", 
  {
   "Tib.": "elegiae una cum TIB. traditae"
  }, 
  [
   "-100", 
   "-1", 
   "Dichterin im Corpus Tibullianum", 
   ""
  ]
 ], 
 "AVGVRIN.": [
  "Sentius Augurinus", 
  {
   "carm.": "carmen"
  }, 
  [
   "50", 
   "150", 
   "", 
   ""
  ]
 ], 
 "LIB. $2": [
  "", 
  {
   "geneal. chron. I": "liber genealogus (confectus saec. Vin. , progrediente saec. non semel tantum retractatus), vol. I"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EVOD.": [
  "Euodius", 
  {
   "fid.": "de fide contra Manichaeos", 
   "Aug. epist.": "epistulae ad Augustinum datae", 
   "epist. ad Val.": "epistula ad Valentinum abbatem Hadrumetinum"
  }, 
  [
   "350", 
   "424", 
   "episcopus Vzalitanus Africae proconsularis", 
   ""
  ]
 ], 
 "ADDIT. $1": [
  "", 
  {
   "Prosp. Havn. chron. I p. 333,523 vel p. 339,24": "additamenta Havniensia ad PROSP. chron. (immo excerptorum cod. Havniensi servatorum pars ea, quam ad chronica Italica q. d. revocavit Mommsen), vol. I p. 333 ad ann. 523 vel p. 339 \u00a724"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LIB. $5": [
  "", 
  {
   "pontif.": "liber pontificalis (gesta pontificum Romanorum), sc. pars prima, cuius recensionem priorem nunc plurimi a. 530/532 confectam esse censent"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LIB. $6": [
  "", 
  {
   "pontif. frg. Veron.": "fragm. Veronense operis cuiusdam libro pontificali similis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LIB. $7": [
  "", 
  {
   "de praen.": "liber de praenominibus q. d. (fragm. ex C. Titi Probi opere grammatico servatum)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SERG.": [
  "Sergius (?)", 
  {
   "gramm.": "de littera, de syllaba, de pedibus, de accentibus, de distinctione"
  }, 
  [
   "400", 
   "499", 
   "grammaticus", 
   ""
  ]
 ], 
 "CONSENT. $1": [
  "Consentius", 
  {
   "gramm.": "artis grammaticae quae exstant"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "DIMENS.": [
  "", 
  {
   "provinc.": "demensuratio (olim dimensuratio) provinciarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TAB. $11": [
  "", 
  {
   "Vindol.": "tabulae, quae Vindolandae in Britannia repertae sunt"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PATR.": [
  "", 
  {
   "Nic.": "patrum concilii Nicaeni nomina"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANVLIN.": [
  "Anul(l)inus", 
  {
   "epistula ad Constantinum Magnum": "epistula ad Constantinum Magnum"
  }, 
  [
   "150", 
   "250", 
   "procos. Africae", 
   ""
  ]
 ], 
 "EPIST. $32": [
  "", 
  {
   "praef. praet. (CIL IX 2438)": "epistulae praefectorum praetorio, e. g. Bassaei Rufi et Macrinii Vindicis ad magistratus Saepinatium"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $33": [
  "", 
  {
   "praet. ad Tiburt. (CIL I2 586)": "epistula L. Cornelii Cn. f. praetoris ad Tiburtes"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $30": [
  "", 
  {
   "pontif.": "epistulae (earumve fragmenta) genuinae pontificum Romanorum, quae latine conscriptae sunt"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CONSTANT.": [
  "imp. Constantinus Magnus", 
  {
   "epist. ad Opt. Porf.": "epistula ad Optatianum Porfyrium (spuria sec. Polara)"
  }, 
  [
   "270", 
   "337", 
   "", 
   ""
  ]
 ], 
 "EPIST. $36": [
  "", 
  {
   "ad procur. (CIL VIII 25943)": "epistula (petitio) colonorum ad procuratores"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $37": [
  "", 
  {
   "promag. pontif. (CIL VI 2120)": "epistula Velii Fidi promagistri pontificum ad Iubentium Celsum collegam"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $34": [
  "", 
  {
   "procos. (CIL III 13651)": "epistulae proconsulum, e. g. Pauli Fabii Maximi procos. Asiae de anni Asiani ordinatione"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $35": [
  "", 
  {
   "procur. (CIL X 7024)": "epistulae procuratorum, e. g. Iulii Paterni procuratoris (ad imp. M. Aurelium et L. Verum, ut vid.)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHOC.": [
  "Phocas (Focas)", 
  {
   "carm. de Verg.": "carmen de vita Vergilii", 
   "gramm.": "ars (sive de nomine et verbo)"
  }, 
  [
   "547", 
   "610", 
   "grammaticus", 
   ""
  ]
 ], 
 "EPIST. $38": [
  "", 
  {
   "prox. tabul. (CIL VI 10233)": "epistula Martialis lib. proximi tabulariorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $39": [
  "", 
  {
   "quattuorvir. (CIL V 1978)": "epistula M. Laetorii M. f. Patercliani quattuorviri iure dicundo ad collegium quoddam Opiterginum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FRONTO $1": [
  "", 
  {
   "carm. frg. gramm. V": "Frontonis cuiusdam fragm. carminis servatum apud CONSENT. gramm. V"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LAVREA": [
  "Tullius Laurea", 
  {
   "epigr.": "epigramma in fontes salubres Ciceronianos"
  }, 
  [
   "-100", 
   "-1", 
   "Ciceronis libertus", 
   ""
  ]
 ], 
 "IOH. TOMIT.": [
  "Iohannes Tomitanus", 
  {
   "haer.": "de duabus haeresibus Nestorianorum et Eutychianistarum"
  }, 
  [
   "450", 
   "550", 
   "episcopus Scytha", 
   ""
  ]
 ], 
 "STAT.": [
  "P. Papinius Statius", 
  {
   "Theb.": "Thebais", 
   "Ach.": "Achilleis", 
   "bell. Germ. frg.": "de bello Germanico fragm.", 
   "silv.": "silvae"
  }, 
  [
   "40", 
   "96", 
   "", 
   ""
  ]
 ], 
 "EVSEB. CAES.": [
  "Eusebius Pamphili Caesariensis", 
  {
   "ad Carp.": "epistula ad Carpianum bis e graeco versa"
  }, 
  [
   "260", 
   "340", 
   "episcopus", 
   ""
  ]
 ], 
 "HADR.": [
  "imp. Hadrianus", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "76", 
   "138", 
   "", 
   ""
  ]
 ], 
 "TRACT. $4": [
  "", 
  {
   "de trin. fid.": "tractatus de trinitate fidei catholicae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DYNAM.": [
  "Dynamius", 
  {
   "vita Max.": "vita sancti Maximi episcopi Reiensis"
  }, 
  [
   "450", 
   "550", 
   "patricius", 
   ""
  ]
 ], 
 "PLIN. $3": [
  "", 
  {
   "phys.": "physica Plinii q. d."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PALLAD. $1": [
  "Palladius", 
  {
   "c. Ambr. fol.": "contra Ambrosium fragmenta"
  }, 
  [
   "330", 
   "399", 
   "episcopus Ratiarensis", 
   ""
  ]
 ], 
 "PS. CAES. AREL.": [
  "", 
  {
   "vid.": "de viduitate servanda"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "HIPPOCR.": [
  "Hippocrates Cos corpusque Hippocratici", 
  {
   "[cib.]": "[cib.]", 
   "mul.": "de morbis mulierum", 
   "progn.": "prognosticum", 
   "aer.": "de aere aquis locis", 
   "[diaet.]": "[diaet.]", 
   "num. sept.": "de numeris septenariis", 
   "aphor.": "aphorismi", 
   "vict.": "de victu"
  }, 
  [
   "-460", 
   "-370", 
   "medicus", 
   "scripta e graeco versa"
  ]
 ], 
 "[PAPYR.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "PAP."
  ]
 ], 
 "PS. AVR. VICT.": [
  "Pseudo-Aurelius Victor", 
  {
   "orig.": "origo gentis Romanae"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "CAES. AREL.": [
  "Caesarius Arelatensis", 
  {
   "reg. mon.": "regula monachorum", 
   "testam.": "testamentum", 
   "epist. de hum.": "epistula de humilitate ad monachos", 
   "reg. virg.": "regula virginum", 
   "[suggest.]": "suggestio", 
   "[libell.]": "libellus Symmacho papae oblatus (sc. epistula altera petitoria) nunc non nisi altera nota notatur", 
   "grat.": "sententia de gratia (contra eos, qui dicunt quare aliis det deus gratiam, aliis non det)", 
   "serm.": "sermones (quos Caesarius magna ex parte e scriptoribus vetustioribus excerpsit)", 
   "serm. Misc. Dekkers": "sermo, quem praebent Miscellanea Dekkers", 
   "in apoc.": "in Iohannis apocalypsim expositio", 
   "epist. ad virg.": "epistulae ad virgines (sc. sanctimoniales)", 
   "brev.": "breviarium adversus haereticos", 
   "serm. app.": "sermonum appendix (frustula dubia)", 
   "trin.": "de mysterio sanctae trinitatis (opusculum in fine mutilum)", 
   "epist. ad Ruric.": "epistula ad Ruricium episcopum"
  }, 
  [
   "470", 
   "542", 
   "episcopus", 
   ""
  ]
 ], 
 "DECRET. $11": [
  "", 
  {
   "Strabon. (CIL VI 37045)": "decreta duo Cn. Pompeii Sex. f. Strabonis cos."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DECRET. $10": [
  "", 
  {
   "pontif. (CIL X 8259)": "decretum collegii pontificum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VITAL.": [
  "Vitalis et Tonantius (vix Constantius)", 
  {
   "epist.": "epistula ad Capreolum episcopum Carthaginiensem"
  }, 
  [
   "350", 
   "450", 
   "monachi Hispani", 
   ""
  ]
 ], 
 "PROSP.": [
  "Prosper Tiro Aquitanus", 
  {
   "epigr.": "epigrammata ex sententiis Augustini", 
   "sent.": "liber sententiarum (sc. ex Augustini operibus delibatarum)", 
   "chron. I": "epitoma chronicorum, vol. I", 
   "auct. de grat.": "praeteritorum sedis apostolicae episcoporum auctoritates de gratia dei", 
   "resp. ad Gall.": "pro Augustino responsiones ad capitula obiectionum Gallorum calumniantium", 
   "epitaph.": "epitaphium Nestorianae et Pelagianae haereseon", 
   "in psalm.": "expositio in psalmos 100\u2014150", 
   "resp. ad Vinc.": "pro Augustino responsiones ad capitula obiectionum Vincentianarum", 
   "c. coll.": "de gratia dei et libero arbitrio contra collatorem", 
   "epist. 2,20": "epistula ad Rufinum quendam", 
   "carm. de ingrat.": "carmen de ingratis", 
   "epist. 1,9": "epistula ad Augustinum", 
   "resp. ad Gen.": "pro Augustino responsiones ad excerpta Genuensium", 
   "epigr. in obtrect. Aug.": "epigrammata in obtrectatorem Augustini"
  }, 
  [
   "390", 
   "455", 
   "", 
   ""
  ]
 ], 
 "APP. CLAVD.": [
  "Appius Claudius Caecus", 
  {
   "carm. frg.": "carminum (sc. sententiarum) fragmenta"
  }, 
  [
   "-340", 
   "-273", 
   "", 
   ""
  ]
 ], 
 "MANICH.": [
  "Manichaeus", 
  {
   "Aug. c. epist. fund.": "sc. operum a Mani eiusque sectatoribus anon. conscriptorum vel versorum fragmenta a scriptoribus servata, e. g. fragm. apud AVG. c. epist. fund."
  }, 
  [
   "216", 
   "277", 
   "", 
   ""
  ]
 ], 
 "EPIST. $47": [
  "", 
  {
   "Visig.": "inter epistulas Visigothicas"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $46": [
  "", 
  {
   "Vinisii": "epistula Vinisii Britannici cuiusdam ad Nigram"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALTERC. $1": [
  "", 
  {
   "Heracl.": "altercatio Heracliani laici (sc. orthodoxi) cum Germinio episcopo Sirmiensi (sc. Ariano)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $44": [
  "", 
  {
   "Secundi (CIL XII 4393)": "epistula Sex. Fadii Secundi Musae ad collegium fabrum Narbonense,"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $43": [
  "", 
  {
   "Salpens. (CIL II 1282)": "epistula sive decretum municipum municipii Salpensani de Aemilio Papo commendando"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $42": [
  "", 
  {
   "ad quinquennal. (CIL VI 33840)": "epistula (petitio) Geminii Eutychetis coloni ad quinquen-nales"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $41": [
  "", 
  {
   "quinquennal. (CIL VI 33840)": "epistula Euphratae et Salvii quinquennalium ad quaestores de petitione Geminii Eutychetis coloni"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $40": [
  "", 
  {
   "quindecimvir. (CIL X 3698)": "epistula XVvirum sacris faciundis ad praetores et magistratus Cumanorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLIN. $2": [
  "Plinius Secundus <Iunior>", 
  {
   "med.": "de medicina libri III"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRISC.": [
  "Priscianus", 
  {
   "rhet.": "praeexercitamina (praeexercitamenta?), sc. progymn\u00e1smata Hermogenis latine versa", 
   "III\u00a0430\u2014440": "=\u00a0PRISC. rhet.", 
   "II. \u00a0III\u00a01\u2014377:\u00a0": "institutiones grammaticae (interpolationes aliquot afferuntur nota PS. PRISC., e. g. PS. PRISC. gramm. II 193)", 
   "periheg.": "\u03c0\u03b5\u03c1\u03b9\u03ae\u03b3\u03b7\u03c3\u03b9\u03c2 Dionysii latine versa", 
   "Anast.": "carmen de laude Anastasii imperatoris", 
   "III\u00a0418\u2014429:": "de metris fabularum Terentii", 
   "III\u00a0443\u2014456:": "institutio de nomine et pronomine et verbo", 
   "III\u00a0459\u2014515:": "partitiones XII versuum Aeneidos prin\u00ad", 
   "gramm.": "gramm.", 
   "[metrol. II 86,1]": "[metrol. II 86,1]", 
   "III\u00a0405:": "epistula ad Symmachum", 
   "[fig. num. gramm. III 417]": "[fig. num. gramm. III 417]", 
   "III\u00a0406\u2014417:": "de figuris numerorum (olim PRISC. fig. num. vel PRISC. metrol.)"
  }, 
  [
   "450", 
   "550", 
   "grammaticus", 
   ""
  ]
 ], 
 "SORT. $1": [
  "", 
  {
   "Sangall.": "sortes codicis rescripti Sangallensis 908"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIT. $1": [
  "", 
  {
   "Gai": "Gai iurisconsulti institutionum epitome"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "L. CAES.": [
  "L. Iulius Caesar", 
  {
   "Prisc. gramm.": "de auguralibus, fragmenta servata apud PRISC., e. g. gramm."
  }, 
  [
   "-110", 
   "-43", 
   "", 
   ""
  ]
 ], 
 "AVFVST.": [
  "Aufustius", 
  {
   "fragmenta a scriptoribus servata, e. g. fragm. apud PAVL. FEST.": "fragmenta a scriptoribus servata, e. g. fragm. apud PAVL. FEST."
  }, 
  [
   "-100", 
   "-1", 
   "grammaticus", 
   ""
  ]
 ], 
 "AVG.": [
  "Aurelius Augustinus", 
  {
   "gen. ad litt. imperf.": "de genesi ad litteram imperfectus liber", 
   "c. Iulian.": "contra Iulianum (sc. Aeclanensem episcopum Pelagianum eiusque libros ad Turbantium)", 
   "quaest. Dulc.": "de octo Dulcitii quaestionibus", 
   "in Gal.": "expositio epistulae ad Galatas", 
   "c. Priscill.": "ad Orosium contra Priscillianistas et Origenistas", 
   "c. Gaud.": "contra Gaudentium Donatistarum episcopum", 
   "un. eccl.": "epistula ad catholicos de secta Donatistarum (vulgo: de unitate ecclesiae)", 
   "serm.": "sermones genuini", 
   "c. Pelag.": "contra duas epistulas Pelagianorum (sc. Iuliani Aeclanensis episcopi et sociorum eius)", 
   "c. Iulian. op. imperf.": "opus imperfectum contra Iulianum (sc. Aeclanensem episcopum Pelagianum eiusque libros ad Florum)", 
   "catech. rud.": "de catechizandis rudibus", 
   "c. Faust.": "contra Faustum Manichaeum", 
   "in Rom.": "expositio quarundam propositionum ex epistula ad Romanos", 
   "c. Parm.": "contra epistulam Parmeniani", 
   "c. Arian.": "contra sermonem Arianorum", 
   "psalm. c. Don.": "psalmus contra partem Donati (sc. psalmus abecedarius)", 
   "urb. exc.": "de excidio urbis Romae", 
   "in Matth.": "quaestiones XVI in Matthaeum (sc. quae in codicibus sequuntur quaest. euang.)", 
   "fid. et symb.": "de fide et symbolo", 
   "util. cred.": "de utilitate credendi", 
   "bon. viduit.": "de bono viduitatis (epistula ad Iulianam viduam)", 
   "grat. Christ.": "de gratia Christi  (= contra Pelagium et Caelestium de gratia Christi et de peccato originali)", 
   "nupt. et concup.": "de nuptiis et concupiscentia ad Valerium", 
   "gen. ad litt.": "de genesi ad litteram", 
   "corrept.": "de correptione et gratia", 
   "immort.": "de immortalitate animae", 
   "nat. et grat.": "de natura et gratia", 
   "epist. Divj.": "epistulae collectionis a Divjak repertae", 
   "trin.": "de trinitate", 
   "op monach.": "de opere monachorum", 
   "perf. iust.": "de perfectione iustitiae hominis", 
   "mag.": "de magistro", 
   "cur. mort.": "de cura pro mortuis gerenda", 
   "c. Secundin.": "contra Secundinum Manichaeum eiusque epistulam", 
   "pat.": "de patientia", 
   "adv. Iud.": "adversus Iudaeos", 
   "in Rom. imperf.": "epistulae ad Romanos inchoata expositio (sc. imperfecta)", 
   "[bapt. c. Don.]": "de baptismo contra Donatistas tractatus", 
   "soliloq.": "soliloquia", 
   "pecc. mer.": "de peccatorum meritis et remissione", 
   "praed. sanct.": "de praedestinatione sanctorum", 
   "anim.": "de anima et eius origine (vel de natura et origine animae, sc. contra Vincentium Victorem)", 
   "spec.": "speculum (sc. praecepta e scripturis sacris excerpta; incipit: Quis ignorat)", 
   "cons. euang.": "de consensu euangelistarum", 
   "mor. Manich.": "de moribus Manichaeorum", 
   "contin.": "de continentia", 
   "pecc. orig.": "de peccato originali (= contra Pelagium et Caelestium de gratia Christi et de peccato originali)", 
   "c. Adim.": "contra Adimantum Manichaei discipulum", 
   "retract.": "retractationes", 
   "de mend.": "de mendacio", 
   "ord.": "de ordine", 
   "c. Maximin.": "contra Maximinum Arianorum episcopum", 
   "c. Emer.": "gesta cum Emerito Donatistarum episcopo", 
   "quaest. hept.": "quaestionum in heptateuchum", 
   "fid. et op.": "de fide et operibus", 
   "dialect.": "de dialectica", 
   "divers. quaest.": "de diversis quaestionibus", 
   "quaest. euang.": "quaestiones euangeliorum (sc. sec. Matthaeum et Lucam)", 
   "mus.": "de musica", 
   "epist. epistularum corpus ab editoribus compositum paulatimque auctum, a Maurinis in hunc ordinem redactum": "diverse", 
   "un. bapt.": "de unico baptismo contra Petilianum", 
   "c. epist. fund.": "contra epistulam Manichaei, quam vocant fundamenti", 
   "grat.": "de gratia et libero arbitrio", 
   "coll. c. Maximin.": "collatio cum Maximino Arianorum episcopo", 
   "conf.": "confessiones", 
   "mor. eccl.": "de moribus ecclesiae catholicae", 
   "spir. et litt.": "de spiritu et littera", 
   "c. mend.": "contra mendacium (sc. ad Consentium)", 
   "virg.": "de sancta virginitate", 
   "coll. c. Don.": "breviculus collationis cum Donatistis", 
   "bon. coniug.": "de bono coniugali", 
   "serm ad. Caesar.": "sermo ad Caesareensis ecclesiae plebem", 
   "de duab. anim.": "de duabus animabus (sc. contra Manichaeos)", 
   "lib. arb.": "de libero arbitrio", 
   "bapt.": "de baptismo (sc. contra Donatistas)", 
   "quaest. Simpl.": "de diversis quaestionibus ad Simplicianum", 
   "haer.": "de haeresibus ad Quodvultdeum", 
   "enchir.": "enchiridion vel ad Laurentium de fide, spe et caritate", 
   "in euang. Ioh.": "in Iohannis euangelium tractatus", 
   "gramm.": "ars sancti Augustini pro fratrum mediocritate breviata", 
   "vera relig.": "de vera religione", 
   "anth.": "anthologiae latinae carmina ea, quae non sine causa Augustino ascribuntur", 
   "adv. Don.": "post collationem adversus Donatistas (vel contra partem Donati post gesta)", 
   "loc. hept.": "locutiones in heptateuchum", 
   "rhet.": "de rhetorica", 
   "c. Cresc.": "contra Cresconium grammaticum partis Donati", 
   "c. Petil.": "contra litteras Petiliani (sc. Donatistae)", 
   "c. acad.": "contra academicos", 
   "mor.": "libri duo de moribus contra Manichaeos conscripti", 
   "octo quaest.": "de octo quaestionibus ex veteri testamento", 
   "persev.": "de dono perseverantiae", 
   "gest. Pelag.": "de gestis Pelagii", 
   "in psalm.": "in psalmos enarrationes (sc. sermones) quot in unum collectae sunt (aliae latent inter serm.)", 
   "beat. vit.": "de beata vita", 
   "div. daem.": "de divinatione daemonum", 
   "util. ieiun.": "de utilitate ieiunii", 
   "symb.": "de symbolo sermo ad catechumenos", 
   "doctr. christ.": "de doctrina christiana", 
   "adult. coniug.": "ad Pollentium de adulterinis coniugiis", 
   "nat. bon.": "de natura boni (sc. adversus Manichaeos)", 
   "quant. anim.": "de animae quantitate", 
   "gramm. V 524,36": "regulae (excerptae ex Augustini de grammatica libro deperdito?), vol. V p. 524 lin. 36 Keil", 
   "civ.": "de civitate dei", 
   "in epist. Ioh.": "in epistulam Iohannis ad Parthos tractatus", 
   "fid. invis.": "de fide rerum invisibilium", 
   "c. Fel.": "contra Felicem Manichaeum", 
   "in Iob": "adnotationes in Iob", 
   "de serm. dom.": "de sermone domini in monte", 
   "c. Fort.": "contra Fortunatum Manichaeum disputatio", 
   "gen. c. Manich.": "de genesi contra Manichaeos", 
   "c. adv. leg.": "contra adversarium legis et prophetarum", 
   "discipl.": "de disciplina christiana", 
   "agon.": "de agone christiano"
  }, 
  [
   "354", 
   "430", 
   "episcopus Hipponensis", 
   ""
  ]
 ], 
 "[BAVDON.]": [
  "Baudonivia", 
  {
   "vita S. Radegundis": "vita S. Radegundis"
  }, 
  [
   "550", 
   "650", 
   "", 
   ""
  ]
 ], 
 "DIOSC.": [
  "Pedianius Dioscurides", 
  {
   "gr.": "voces latinae, quae Dioscuridi graeco interpositae sunt", 
   "Vind.": "recensio Vindobonensis", 
   "epist.": "epistula Dioscuridis libro 1 praemissa", 
   "de materia medica (opus graece conscriptum) versio (immo retractatio) latina integra (Dioscorides Longobardus q. d.)": "de materia medica (opus graece conscriptum) versio (immo retractatio) latina integra (Dioscorides Longobardus q. d.)"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "HYG.": [
  "Hyginus", 
  {
   "astr.": "astronomica", 
   "fab.": "fabulae", 
   "geneal.": "genealogiae"
  }, 
  [
   "100", 
   "199", 
   "mythographus", 
   ""
  ]
 ], 
 "ANNIAN.": [
  "Annianus", 
  {
   "carm. frg.": "Faliscorum carminum fragmenta"
  }, 
  [
   "100", 
   "199", 
   "", 
   ""
  ]
 ], 
 "SEV.": [
  "Severus", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "episcopus Milevitanus", 
   ""
  ]
 ], 
 "PS. EPHR.": [
  "Pseudo-Ephraem Syrus", 
  {
   "paenit.": "de paenitentia", 
   "serm. Cas. III": "sermo in transfigurationem domini, editus in Bibliothecae Casinensis vol. 3"
  }, 
  [
   "600", 
   "699", 
   "", 
   ""
  ]
 ], 
 "EVCHER.": [
  "Eucherius", 
  {
   "form.": "formulae spiritalis intellegentiae", 
   "instr.": "instructiones", 
   "epist. ad Val.": "epistula paraenetica ad Valerianum cognatum de contemptu mundi et saecularis philosophiae", 
   "laud. her.": "de laude (h)eremi", 
   "[hom.]": "homiliae apud Migne 50 Eucherio tributae", 
   "epist. ad Salv.": "epistula ad Salvium episcopum", 
   "pass. Acaun.": "passio Acaunensium martyrum (sc. legionis Thebaeorum)"
  }, 
  [
   "400", 
   "450", 
   "episcopus Lugdunensis", 
   ""
  ]
 ], 
 "GRAEC.": [
  "Graecus", 
  {
   "ad Ruric. epist.": "epistula ad Ruricium"
  }, 
  [
   "400", 
   "499", 
   "episcopus Massiliensis", 
   ""
  ]
 ], 
 "PRISCILL.": [
  "Priscillianus", 
  {
   "can.": "canones in epistulas Paulinas (a Peregrino quodam episcopo retractati)", 
   "epist. Oros. comm.": "epistulae fragm. servatum apud OROS. comm.", 
   "tract.": "tractatus"
  }, 
  [
   "340", 
   "385", 
   "episcopus haereticus Abilensis", 
   ""
  ]
 ], 
 "CLEM.": [
  "Clemens Romanus", 
  {
   "ad. Cor.": "epistula ad Corinthios genuina (sc. prior) e graeco versa"
  }, 
  [
   "50", 
   "97", 
   "papa", 
   ""
  ]
 ], 
 "[FRG.]": [
  "", 
  {
   "[c. Arrian.]": "fragmentum contra Arrianos"
  }, 
  [
   "", 
   "", 
   "", 
   "SYAGR. reg."
  ]
 ], 
 "CENTO $1": [
  "", 
  {
   "de incarn.": "cento de verbi incarnatione versibus Vergilianis compositus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLIN. $1": [
  "C. Plinius Caecilius Secundus (vulgo Plinius minor)", 
  {
   "epist.": "epistulae", 
   "paneg.": "panegyricus"
  }, 
  [
   "61", 
   "115", 
   "", 
   ""
  ]
 ], 
 "HIL.": [
  "Hilarius", 
  {
   "Aug. epist.": "epistulae ad Augustinum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[PAVL. STEPH.]": [
  "", 
  {
   "[reg.]": "[reg.]"
  }, 
  [
   "", 
   "", 
   "", 
   "REGVLA Paul. Steph."
  ]
 ], 
 "CLAVD. MAM.": [
  "Mamertus Claudianus", 
  {
   "epist.": "epistulae duae", 
   "anim.": "de statu animae"
  }, 
  [
   "400", 
   "473", 
   "presbyter Viennensis", 
   ""
  ]
 ], 
 "ENNOD.": [
  "Magnus Felix Ennodius", 
  {
   "carm.": "carmina", 
   "dict.": "dictiones", 
   "opusc.": "opuscula miscella", 
   "epist.": "epistulae"
  }, 
  [
   "473", 
   "521", 
   "episcopus Ticinensis", 
   ""
  ]
 ], 
 "NIPS.": [
  "M. Iunius Nipsus", 
  {
   "grom.": "grom."
  }, 
  [
   "100", 
   "199", 
   "gromaticus", 
   ""
  ]
 ], 
 "DIDYM. $1": [
  "Didymus Alexandrinus", 
  {
   "theophan.": "opus quoddam de theophania (fragmentum; graecum periit)"
  }, 
  [
   "310", 
   "398", 
   "", 
   "opera latine versa"
  ]
 ], 
 "EPIST. $2": [
  "", 
  {
   "Ann.": "fragmentum epistulae Annae ad Senecam q. d."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $3": [
  "", 
  {
   "apost.": "epistulae apostolorum q. d. e graeco (quod periit) versae fragmenta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $1": [
  "", 
  {
   "Alex.": "epistula Alexandri Macedonis ad Aristotelem magistrum suum de itinere suo et de situ Indiae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $6": [
  "", 
  {
   "Bachiar.": "epistulae duae Bachiario a Morin tributae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $7": [
  "", 
  {
   "canon.": "epistula canonica q. d. (de presbyteris, diaconis, sub-diaconis)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $4": [
  "", 
  {
   "Arel.": "epistulae collectionis Arelatensis q. d., sc. quae non a pontificibus Romanis conscriptae sunt"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $5": [
  "", 
  {
   "Austras.": "epistulae Austrasicae q. d."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EXPOS. $1": [
  "", 
  {
   "mundi": "expositio totius mundi et gentium (e graeco versa retrac\u00adtataque)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $8": [
  "", 
  {
   "ed. Caspari": "epistulae a Caspari editae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $9": [
  "", 
  {
   "Chart. lat. ant.": "minoris momenti epistulae, e. g. CHART. lat. ant."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "BASILIC.": [
  "", 
  {
   "Basilik\u00e1, sc. Leonis imperatoris recensio legum Iustinianarum (sc. COD. Iust., DIG., INST. Iust., NOVELL. Iust.) graeca, quae integra non exstat": "Basilik\u00e1, sc. Leonis imperatoris recensio legum Iustinianarum (sc. COD. Iust., DIG., INST. Iust., NOVELL. Iust.) graeca, quae integra non exstat"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTHIAN.": [
  "Furius Anthianus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "200", 
   "299", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "THEOD.": [
  "imp. Theodosius I", 
  {
   "epist. ad Auson.": "epistula ad Ausonium"
  }, 
  [
   "347", 
   "395", 
   "", 
   ""
  ]
 ], 
 "Q. CIC.": [
  "Q. Tullius Cicero", 
  {
   "carm. frg.": "carminis fragm.", 
   "pet.": "commentariolum petitionis (sive de petitione consulatus) ad M. fratrem", 
   "Cic. fam.": "epistulae ad Tironem et ad M. fratrem"
  }, 
  [
   "-102", 
   "-43", 
   "Marci frater", 
   ""
  ]
 ], 
 "BITHYN.": [
  "Pompeius Bithynicus", 
  {
   "ad Ciceronem epistula": "ad Ciceronem epistula"
  }, 
  [
   "-108", 
   "-48", 
   "", 
   ""
  ]
 ], 
 "TERT. $1": [
  "Q. Septimius Florens Tertullianus Carthaginiensis", 
  {
   "scorp.": "scorpiace", 
   "virg. vel.": "de virginibus velandis", 
   "idol.": "de idololatria", 
   "monog.": "de monogamia", 
   "orat.": "de oratione", 
   "ieiun.": "de ieiunio adversus psychicos", 
   "Scap.": "ad Scapulam", 
   "uxor.": "ad uxorem", 
   "coron.": "de corona", 
   "adv. Iud.": "adversus Iudaeos", 
   "cult. fem.": "de cultu feminarum", 
   "patient.": "de patientia", 
   "spect.": "de spectaculis", 
   "frg. Fulg. serm.": "deperditorum operum fragmenta, e. g. fragm. servatum apud FVLG. serm. ant.", 
   "mart.": "ad martyras", 
   "bapt.": "de baptismo", 
   "anim.": "de anima", 
   "nat.": "ad nationes", 
   "adv. Prax.": "adversus Praxean", 
   "apol.": "apologeticum", 
   "resurr.": "de resurrectione mortuorum", 
   "paenit.": "de paenitentia", 
   "pall.": "de pallio", 
   "pudic.": "de pudicitia", 
   "carn.": "de carne Christi", 
   "praescr.": "de praescriptione haereticorum", 
   "test. anim.": "de testimonio animae", 
   "castit.": "de exhortatione castitatis", 
   "adv. Hermog.": "adversus Hermogenem", 
   "adv. Marc.": "adversus Marcionem", 
   "adv. Val.": "adversus Valentinianos", 
   "fug.": "de fuga in persecutione"
  }, 
  [
   "150", 
   "220", 
   "", 
   ""
  ]
 ], 
 "TRACH.": [
  "P. Galerius Trachalus", 
  {
   "or. frg. Quint. inst.": "orationum fragmenta, e. g. fragm. servatum apud QVINT. inst."
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "VINDIC.": [
  "Vindicianus (Afer)", 
  {
   "epit. alt.": "expositionis membrorum epitome anonyma altera uberior", 
   "epist. ad Valent.": "epistula ad imp. Valentinianum", 
   "gyn.": "eiusdem expositionis epitome anonyma (quae gynaecia vocatur)", 
   "med.": "medicorum placita", 
   "epist. ad Pentad.": "epistula ad Pentadium nepotem suum"
  }, 
  [
   "350", 
   "450", 
   "medicus", 
   ""
  ]
 ], 
 "LIC. IMBR.": [
  "Licinius Imbrex", 
  {
   "com.": "comoediarum fragmentum"
  }, 
  [
   "-200", 
   "-101", 
   "", 
   ""
  ]
 ], 
 "EVSTATH.": [
  "Eustathius", 
  {
   "Basil. hex.": "Basilii Magni in hexaemeron homiliarum versio latina"
  }, 
  [
   "250", 
   "350", 
   "", 
   ""
  ]
 ], 
 "ARIVS": [
  "Ar(r)ius", 
  {
   "ad Euseb.": "ad Eusebium Nicomediensem epistula ter latine versa"
  }, 
  [
   "256", 
   "336", 
   "haeresiarcha", 
   ""
  ]
 ], 
 "DON.": [
  "Aelius Donatus", 
  {
   "Phorm.": "in Phormionis", 
   "Ter.": "commentum Terentii certe non ita a Donato conscriptum", 
   "mai.": "ars maior q. d.", 
   "epist.": "epistula ad L. Munatium vitae Vergilii in cod. Paris. praemissa", 
   "min.": "ars minor q. d.", 
   "vita Verg.": "vita Vergilii", 
   "Verg. ecl. praef.": "praefatio commentarii in Vergilii eclogas deperditi, quae sequitur in codicibus vitam Vergilii", 
   "gramm.": "ars, sc. grammatica", 
   "de com.": "excerpta de comoedia q. d.", 
   "vita Ter.": "vita Terentii in codicibus commento Terentii praemissa", 
   "Phorm. praef.": "in Phormionem commenti praefatio"
  }, 
  [
   "320", 
   "380", 
   "grammaticus", 
   ""
  ]
 ], 
 "ANON. $1": [
  "anonymus", 
  {
   "de decem virg.": "quaestionum de euangeliis fragmentum de decem virginibus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. $2": [
  "anonymus (AMBROSIAST. ?)", 
  {
   "de mach. bell.": "de machinis bellicis (immo de rebus bellicis)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. $3": [
  "anonymus", 
  {
   "in Matth.": "fragmentum Matth. 24,20\u201444 exponens"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. $4": [
  "anonymus", 
  {
   "med. ed. Piechotta": "fragmentum operis ad medicinam pertinentis codice Vossiano Q. 9 saec. VI servatum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. $5": [
  "", 
  {
   "in Rom.": "in epistulam ad Romanos", 
   "in Hebr.": "in epistulam ad Hebraeos"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. $6": [
  "anonymus (AMBROSIAST. ?)", 
  {
   "de Petro apost.": "de Petro apostolo Christum negante fragmentum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. $7": [
  "anonymus", 
  {
   "c. philos.": "contra philosophos (i. e. altercationes Augustini et philosophorum paganorum)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. $8": [
  "anonymus", 
  {
   "proph.": "prophetiae ex omnibus libris (fere veteris et novi testamenti) collectae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. $9": [
  "anonymus", 
  {
   "de taxone": "de taxone"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. TERT.": [
  "Pseudo-Tertullianus", 
  {
   "execr.": "de execrandis gentium diis fragmentum", 
   "haer.": "adversus omnes haereses"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AVR. VICT.": [
  "Sex. Aurelius Victor Afer", 
  {
   "Caes.": "historiae abbreviatae (vulgo: liber de Caesaribus)"
  }, 
  [
   "320", 
   "390", 
   "", 
   ""
  ]
 ], 
 "LVX.": [
  "Luxurius", 
  {
   "anth.": "carmina in anthologiam latinam recepta"
  }, 
  [
   "500", 
   "599", 
   "poeta Carthaginiensis", 
   ""
  ]
 ], 
 "ELEG.": [
  "", 
  {
   "in Maecen.": "elegiae in Maecenatem, carmen vel carmina appendicis Vergilianae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[L. CRASS.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "CRASS."
  ]
 ], 
 "EPIST. $31": [
  "", 
  {
   "praef. Aeg. (Chart. lat. ant. III 215)": "epistula Minicii Itali praefecti Aegypti ad Celsianum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POSTVM.": [
  "A. Postumius Albinus", 
  {
   "hist.": "annales"
  }, 
  [
   "-200", 
   "-101", 
   "", 
   ""
  ]
 ], 
 "FAVSTIN.": [
  "Faustinus Luciferianus", 
  {
   "fid.": "fides Theodosio imperatori oblata", 
   "trin.": "de trinitate (de fide contra Arianos)"
  }, 
  [
   "250", 
   "304", 
   "presbyter Romanus", 
   ""
  ]
 ], 
 "LAEL. FEL.": [
  "Laelius Felix", 
  {
   "Gell.": "fragm. servatum apud GELL."
  }, 
  [
   "50", 
   "150", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "PS. QVINT.": [
  "Pseudo-Quintilianus", 
  {
   "decl.": "declamationes maiores"
  }, 
  [
   "100", 
   "199", 
   "", 
   ""
  ]
 ], 
 "MONTAN. $1": [
  "Montanus Toletanus", 
  {
   "epist.": "epistulae"
  }, 
  [
   "450", 
   "531", 
   "episcopus", 
   ""
  ]
 ], 
 "PS. IVVENC.": [
  "Pseudo-Iuvencus", 
  {
   "praef. pr.": "praefatio (sc. prior)"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "CONSVLT. $1": [
  "", 
  {
   "Zacch.": "consultationes Zacchaei christiani et Apollonii philosophi"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IVNIL.": [
  "Iunil(li)us Africanus", 
  {
   "instituta regularia divinae legis": "instituta regularia divinae legis"
  }, 
  [
   "500", 
   "553", 
   "", 
   ""
  ]
 ], 
 "FANN.": [
  "C. Fannius M. f.", 
  {
   "orationis c. C. Gracchum fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm.": "orationis c. C. Gracchum fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm.", 
   "hist.": "librorum historicorum (sc. annalium; vix attribuendi sunt alteri C. Fannio) fragmenta"
  }, 
  [
   "-170", 
   "-120", 
   "", 
   ""
  ]
 ], 
 "OPT. PORF.": [
  "Publilius Optatianus Porfyrius", 
  {
   "[epigr. frg.]": "[epigr. frg.]", 
   "carm.": "carmen", 
   "[schol. carm.]": "[schol. carm.]", 
   "epist. ad Constant.": "epistula ad Constantinum Magnum"
  }, 
  [
   "260", 
   "335", 
   "", 
   "qui carmina figurata q. d. vel technopaegnia composuit"
  ]
 ], 
 "PATRIC.": [
  "Magonus Sucatus Patricius", 
  {
   "epist.": "epistula ad milites Corotici sive epistularum", 
   "dict.": "dicta Patricii", 
   "conf.": "confessio sive epistularum", 
   "frg. 3": "epistularum deperditarum fragm. 3"
  }, 
  [
   "400", 
   "461", 
   "apostolus Hibernorum", 
   ""
  ]
 ], 
 "POSSID.": [
  "Possidius", 
  {
   "indic.": "indiculum operum Augustini", 
   "vita Aug.": "vita Augustini"
  }, 
  [
   "370", 
   "437", 
   "episcopus Calamensis", 
   ""
  ]
 ], 
 "VERAN. $1": [
  "Veranus", 
  {
   "sententia de castitate sacerdotum": "sententia de castitate sacerdotum"
  }, 
  [
   "550", 
   "600", 
   "episcopus (sive Cabellitanus sive Lugdunensis)", 
   ""
  ]
 ], 
 "QVINT.": [
  "M. Fabius Quintilianus", 
  {
   "inst.": "institutio oratoria", 
   "decl.": "declamationes minores"
  }, 
  [
   "35", 
   "96", 
   "", 
   ""
  ]
 ], 
 "[PS. ANTON. MVSA]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "PS. HIPPOCR. ad Maecen."
  ]
 ], 
 "[ZACCH.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "CONSVLT. Zacch."
  ]
 ], 
 "MOD.": [
  "Modestinus", 
  {
   "anth.": "carmen in anthologiam latinam receptum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOPHIL.": [
  "Theophilus", 
  {
   "inst. Iust.": "institutionum Iustiniani (INST. Iust.) paraphrasis graeca"
  }, 
  [
   "500", 
   "550", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "HIST.": [
  "", 
  {
   "Apoll.": "historia Apollonii regis Tyri"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NOVELL.": [
  "", 
  {
   "Theod.": "Theodosius II", 
   "Marc.": "Marcianus", 
   "Valent.": "Valentinianus III", 
   "Sev.": "Severus", 
   "Max. frg.": "Maximus, fragm. suspectum", 
   "Maior.": "Maiorianus", 
   "Anth.": "Anthemius"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IVV.": [
  "D. Iunius Iuvenalis", 
  {
   "saturarum libri V": "saturarum libri V"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "NOT. $4": [
  "", 
  {
   "laterc. gramm.": "notarum iuris laterculi"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. RVFIN.": [
  "Pseudo-Rufinus (scripta Rufino vix recte tributa)", 
  {
   "[praef. in\u00a0proph.]": "[praef. in\u00a0proph.]", 
   "Ios. bell. Iud.": "Flavii Iosephi libri de bello Iudaico latine versi", 
   "[in\u00a0Am.]": "commentarii in prophetas minores iam Iuliano episcopo Aeclanensi ascribuntur", 
   "Clement.": "incerti interpretis additamentum ad RVFIN. Clement.", 
   "[in\u00a0Ioel]": "[in\u00a0Ioel]", 
   "[in psalm.]": "commentarius in psalmos", 
   "fid.": "liber de fide", 
   "[in\u00a0Os.]": "[in\u00a0Os.]"
  }, 
  [
   "350", 
   "450", 
   "", 
   "IVLIAN. in Am."
  ]
 ], 
 "VIRG.": [
  "Virgilius Maro", 
  {
   "epist.": "epistulae", 
   "epit.": "epitomae"
  }, 
  [
   "600", 
   "699", 
   "grammaticus", 
   ""
  ]
 ], 
 "[SPART.]": [
  "Aelius Spartianus, e numero scriptorum historiae Augustae fictorum", 
  {}, 
  [
   "117", 
   "284", 
   "", 
   "HIST. AVG."
  ]
 ], 
 "SACERD.": [
  "Marius Plotius Sacerdos", 
  {
   "gramm.": "artes grammaticae"
  }, 
  [
   "250", 
   "350", 
   "", 
   ""
  ]
 ], 
 "MORET.": [
  "", 
  {
   "moretum, carmen appendicis Vergilianae": "moretum, carmen appendicis Vergilianae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NOT. $2": [
  "", 
  {
   "episc.": "notitia provinciarum et civitatum Africae sive nomina episcoporum vel sedium illius regionis", 
   "Tripol.": "provinciae Tripolitanae", 
   "Sard.": "insulae Sardiniae", 
   "proc. Afr.": "provinciae proconsularis Africae", 
   "Maur. Caes.": "provinciae Mauretaniae Caesariensis", 
   "Num.": "provinciae Numidiae", 
   "Maur. Sitif.": "provinciae Mauretaniae Sitifensis", 
   "Byz.": "provinciae Byzacenae"
  }, 
  [
   "", 
   "", 
   "", 
   "(opusculum olim Victori Vitensi ascriptum)"
  ]
 ], 
 "RVRIC.": [
  "Ruricius", 
  {
   "epist.": "epistulae"
  }, 
  [
   "450", 
   "508", 
   "episcopus Lemovicinus", 
   ""
  ]
 ], 
 "[TREB.]": [
  "Trebellius Pollio, e numero scriptorum historiae Augustae fictorum", 
  {}, 
  [
   "117", 
   "285", 
   "", 
   "HIST. AVG."
  ]
 ], 
 "ARNOB. IVN.": [
  "Arnobius iunior", 
  {
   "in Luc.": "expositiunculae in euangelium (Iohannis Matthaei Lucae)", 
   "in psalm.": "commentarii in psalmos", 
   "ad Greg.": "liber ad Gregoriam in palatio constitutam", 
   "confl.": "conflictus (sc. altercatio) Arnobii catholici cum Serapione Aegyptio haeretico"
  }, 
  [
   "300", 
   "355", 
   "", 
   ""
  ]
 ], 
 "EVGRAPH.": [
  "Eugraphius", 
  {
   "Ter. Ad.": "commentum Terentii, in Adelphorum"
  }, 
  [
   "500", 
   "599", 
   "", 
   ""
  ]
 ], 
 "[FLAVIAN. ]": [
  "Flavianus", 
  {
   "Leo M. epist.": "epistulae duae ad Leonem Magnum bis e graeco versae, sc. inter illius epistulas"
  }, 
  [
   "400", 
   "449", 
   "episcopus Constantinopolitani", 
   "CONC. S II ..."
  ]
 ], 
 "STILO": [
  "L. Aelius Stilo Praeconinus", 
  {
   "Fest.": "fragmenta, e. g. fragm. servatum apud FEST."
  }, 
  [
   "-154", 
   "-74", 
   "grammaticus", 
   ""
  ]
 ], 
 "CLAVD. DON.": [
  "Ti. Claudius Donatus", 
  {
   "epil.": "epilogi fragmentum", 
   "Aen.": "interpretationes Vergilianae, sc. Aeneidos", 
   "prooem.": "prooemium"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "PS. MAVRIC.": [
  "(Pseudo-) Mauricius", 
  {
   "strat.": "strategicon"
  }, 
  [
   "539", 
   "602", 
   "vix imperator Byzantinus", 
   ""
  ]
 ], 
 "AVELL.": [
  "", 
  {
   "app.": "appendices editioni collectionis Avellanae aliunde additae", 
   "collectio Avellana q. d., qua continentur fere epistulae imperatorum pontificum (maxime Romanorum) aliorum aut latine conscriptae aut e graeco versae": "collectio Avellana q. d., qua continentur fere epistulae imperatorum pontificum (maxime Romanorum) aliorum aut latine conscriptae aut e graeco versae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. CYRILL.": [
  "", 
  {
   "rec. II 8": "recensio II cap. 8", 
   "prol.": "prologus vel praefatio de ratione paschae Cyrillo Alexandrino perperam ascripta", 
   "rec. I 6": "recensio I cap. 6"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IND. $1": [
  "", 
  {
   "A": "index A, sc. anon. de ortu et obitu prophetarum et apostolorum", 
   "H": "index H, sc. de XII apostolis, qui Hippolyto tribuitur", 
   "E": "index E, sc. libellus sancti Epiphanii", 
   "proph. apost.": "indices prophetarum et/aut apostolorum (agitur praecipue de eorum nominibus, ortu, obitu, sepulchris) varii variis modis et cum exemplaribus graecis et inter se coniuncti"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HESYCH.": [
  "Hesychius", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "433", 
   "episcopus Salonitanus", 
   ""
  ]
 ], 
 "VRAN.": [
  "Vranius", 
  {
   "epist.": "epistula de obitu Paulini Nolani"
  }, 
  [
   "350", 
   "450", 
   "presbyter", 
   ""
  ]
 ], 
 "FAV. EVL.": [
  "Favonius Eulogius", 
  {
   "disputatio de somnio Scipionis": "disputatio de somnio Scipionis"
  }, 
  [
   "350", 
   "450", 
   "rhetor Carthaginiensis", 
   ""
  ]
 ], 
 "FORTVN. AQVIL.": [
  "Fortunatianus", 
  {
   "in euang.": "commentarii in euangelia (usque adhuc: in Matthaeum)"
  }, 
  [
   "300", 
   "400", 
   "episcopus Aquileiensis", 
   ""
  ]
 ], 
 "AVRELIAN.": [
  "Aurelianus", 
  {
   "reg. mon.": "regula ad monachos", 
   "reg. virg.": "regula ad virgines", 
   "app.": "appendix"
  }, 
  [
   "523", 
   "551", 
   "episcopus Arelatensis", 
   ""
  ]
 ], 
 "MESSALLA": [
  "M. Valerius Messalla Rufus", 
  {
   "fam. frg. Plin. nat.": "de familiis", 
   "ausp. frg. Macr. Sat.": "de auspiciis"
  }, 
  [
   "-103", 
   "-26", 
   "augur", 
   "fragmenta a scriptoribus servata, e. g. fragm. apud MACR. Sat."
  ]
 ], 
 "NOM.": [
  "", 
  {
   "Gall. chron. I": "de nominibus (urbibus?) Gallicis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GREG. ANTIOCH.": [
  "Gregorius Antiochenus", 
  {
   "bapt.": "sermo de baptismo Christi e graeco versus"
  }, 
  [
   "300", 
   "399", 
   "presbyter", 
   ""
  ]
 ], 
 "VICTOR CAP.": [
  "Victor Capuanus", 
  {
   "frg. Spicil. Solesm. I": "fragmenta, e. g. fragm. editum apud Pitra, Spicilegium Solesmense I", 
   "harm. euang. praef.": "in harmoniam euangeliorum q. d. praefatio"
  }, 
  [
   "500", 
   "599", 
   "episcopus", 
   ""
  ]
 ], 
 "PASCHAS. $1": [
  "Paschasius Dumiensis", 
  {
   "verba patr.": "verba sive apopthegmata patrum"
  }, 
  [
   "500", 
   "584", 
   "", 
   ""
  ]
 ], 
 "MVMM.": [
  "Mummius", 
  {
   "Atell.": "Atellanarum fragmenta"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "HOR.": [
  "Q. Horatius Flaccus", 
  {
   "carm. saec.": "carmen saeculare", 
   "ars": "de arte poetica (epistula ad Pisones)", 
   "carm.": "carmina", 
   "epist.": "epistulae", 
   "epod.": "epodi (iambi)", 
   "sat.": "saturae (sermones)"
  }, 
  [
   "-65", 
   "-8", 
   "", 
   ""
  ]
 ], 
 "VESPA": [
  "Vespa", 
  {
   "iudicium coci et pistoris iudice Vulcano": "iudicium coci et pistoris iudice Vulcano"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "BENED.": [
  "Benedictus Nursinus", 
  {
   "reg.": "regula monachorum"
  }, 
  [
   "480", 
   "547", 
   "", 
   ""
  ]
 ], 
 "PASSIEN.": [
  "C. Sallustius Crispus Passienus", 
  {
   "or. frg. Quint. inst.": "orationis fragm. servatum apud QVINT. inst."
  }, 
  [
   "-86", 
   "-34", 
   "", 
   ""
  ]
 ], 
 "SEV. MINOR.": [
  "Severus Minoricensis", 
  {
   "epistula ad omnem ecclesiam": "epistula ad omnem ecclesiam"
  }, 
  [
   "350", 
   "450", 
   "episcopus", 
   ""
  ]
 ], 
 "SVLLA": [
  "L. Cornelius Sulla", 
  {
   "hist.": "commentarii rerum gestarum"
  }, 
  [
   "-138", 
   "-78", 
   "", 
   ""
  ]
 ], 
 "PS. THOM.": [
  "Pseudo-Thomas", 
  {
   "apoc.": "apocalypsis", 
   "euang.": "euangelium sive tractatus de pueritia Iesu"
  }, 
  [
   "", 
   "", 
   "apostolus", 
   ""
  ]
 ], 
 "NOT.": [
  "", 
  {
   "cod. Vat. Bas. D. 182 (Lowe 1a)": "notae codicibus ante saec. VII exaratis ascriptae, e. g. nota (manu FVLG. RVSP. ?) cod. Vat. Bas. D. 182 (Lowe, Cod. lat. ant. 1a; servat HIL. trin. al. )"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PANEG.": [
  "", 
  {
   "collectio panegyricorum latinorum": "collectio panegyricorum latinorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GARG. MART.": [
  "Gargilius Martialis", 
  {
   "med.": "medicinae ex oleribus et pomis", 
   "cur. boum": "curae boum", 
   "fragmenta ex eius opere vel operibus excerpta": "fragmenta ex eius opere vel operibus excerpta", 
   "pom.": "de arboribus pomiferis fragmenta codice Neapolitano rescripto servata (vel de hortis)"
  }, 
  [
   "200", 
   "299", 
   "", 
   ""
  ]
 ], 
 "EVAGR. GALL.": [
  "Euagrius Gallus", 
  {
   "alterc.": "altercatio legis inter Simonem Iudaeum et Theophilum Christianum"
  }, 
  [
   "538", 
   "600", 
   "", 
   ""
  ]
 ], 
 "LIC. MVC.": [
  "C. Licinius Mucianus", 
  {
   "Plin. nat.": "operis, quo mirabilia et al. narrantur, fragm. servatum apud PLIN. nat."
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "VOLCAC.": [
  "Volcacius Sedigitus", 
  {
   "carm. frg.": "liber de poetis"
  }, 
  [
   "-200", 
   "-101", 
   "", 
   ""
  ]
 ], 
 "[PS. MAR. MERC.]": [
  "Pseudo-Marius Mercator", 
  {
   "[Nest. epist.]": "Nestorii epistulae tres"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PASCASIN.": [
  "Pasc(h)asinus", 
  {
   "epist.": "epistula ad Leonem Magnum"
  }, 
  [
   "400", 
   "499", 
   "episcopus Lilybaetanus", 
   ""
  ]
 ], 
 "FAVST.": [
  "Faustus Manichaeus", 
  {
   "Aug. c. Faust.": "verba ab Augustino allata"
  }, 
  [
   "350", 
   "399", 
   "", 
   ""
  ]
 ], 
 "FLORENT. $1": [
  "Florentius", 
  {
   "Lucif. epist.": "epistula ad Luciferum"
  }, 
  [
   "350", 
   "450", 
   "magister officiorum", 
   ""
  ]
 ], 
 "TESTIM.": [
  "", 
  {
   "Corp. Christ.": "testimonia de patre et filio et spiritu sancto"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASCON.": [
  "Q. Asconius Pedianus", 
  {
   "tog. cand.": "orationum Ciceronis enarrationis quae exstant (sc. in exstantes orationes Mil., Pis., Scaur.; in deperditas Corn(elianas duas), tog. cand.), in orationem in toga candida deperditam"
  }, 
  [
   "-9", 
   "76", 
   "", 
   ""
  ]
 ], 
 "PAVLA": [
  "Paula et Eustochium", 
  {
   "Hier. epist.": "epistula ad Marcellam"
  }, 
  [
   "368", 
   "420", 
   "", 
   ""
  ]
 ], 
 "SVRA": [
  "Aemilius Sura", 
  {
   "hist.": "de annis populi Romani"
  }, 
  [
   "-250", 
   "-150", 
   "", 
   ""
  ]
 ], 
 "PS. VICT. VIT.": [
  "Pseudo-Victor Vitensis", 
  {
   "hom.": "homilia de Cypriano episcopo", 
   "pass.": "passio septem monachorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COTTA": [
  "C. Aurelius Cotta", 
  {
   "orationis cuiusdam fragm. servatum apud CHAR. gramm.": "orationis cuiusdam fragm. servatum apud CHAR. gramm."
  }, 
  [
   "-124", 
   "-73", 
   "", 
   ""
  ]
 ], 
 "ANTH.": [
  "", 
  {
   "anthologiae latinae q. d. pars prior (partem posteriorem v. CE), sc. collectio carminum saec. VI facta, codice Salmasiano partim servata, a Riese post alios carminibus aliunde collectis aucta (carmina non ita pauca recentiora sunt quam ut afferantur": "anthologiae latinae q. d. pars prior (partem posteriorem v. CE), sc. collectio carminum saec. VI facta, codice Salmasiano partim servata, a Riese post alios carminibus aliunde collectis aucta (carmina non ita pauca recentiora sunt quam ut afferantur"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "S. C.": [
  "", 
  {
   "de sumpt. lud. glad.": "de sumptibus ludorum gladiatoriorum minuendis", 
   "Frontin. aq.": "senatus consulta apud scriptores tradita, e. g. apud FRONTIN. aq.", 
   "de Bacch.": "de Bacchanalibus", 
   "de Germ.": "de honoribus Germanico defuncto tribuendis", 
   "Rubr.": "Rubrianum", 
   "Larin.": "Larini repertum", 
   "senatus consulta": "senatus consulta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEXTIL.": [
  "Sextilius Ena", 
  {
   "carm. frg. Sen. suas.": "carminum fragm. servatum apud SEN. suas."
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "[HIL.]": [
  "", 
  {
   "[Leo M. epist.]": "[Leo M. epist.]"
  }, 
  [
   "", 
   "", 
   "", 
   "HILARVS ad Pulch."
  ]
 ], 
 "AMM.": [
  "Ammianus Marcellinus Antiochenus", 
  {
   "res gestae": "res gestae"
  }, 
  [
   "325", 
   "400", 
   "", 
   ""
  ]
 ], 
 "PIVS": [
  "imp. Antoninus Pius", 
  {
   "Fronto": "epistulae ad Frontonem"
  }, 
  [
   "86", 
   "161", 
   "", 
   ""
  ]
 ], 
 "GRAN. LIC.": [
  "Granius Licinianus", 
  {
   "operis historici fragmenta codice rescripto servata": "operis historici fragmenta codice rescripto servata"
  }, 
  [
   "100", 
   "199", 
   "", 
   ""
  ]
 ], 
 "PS. MAX. TAVR.": [
  "Pseudo-Maximus", 
  {
   "bapt. 3": "de baptismo tractatus III", 
   "serm. app. 31": "sermones appendicis apud Migne 57 exstantis", 
   "serm. 113": "sermones CXVI apud Migne collecti", 
   "hom.": "homiliae", 
   "serm. Rev. B\u00e9n\u00e9d. 97,1987": "sermones III, quos edidit \u00c9taix", 
   "[serm. 7,4 M.]": "[serm. 7,4 M.]", 
   "sermones (a Mutzenbecher editi)": "sermones (a Mutzenbecher editi)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EVAGR.": [
  "Euagrius Antiochenus", 
  {
   "vita Anton.": "versio vel retractatio vitae Antonii monachi ab Athanasio"
  }, 
  [
   "300", 
   "393", 
   "", 
   ""
  ]
 ], 
 "SYMB.": [
  "", 
  {
   "Corp. Christ.": "editum in Corporis Christianorum", 
   "Athan.": "symbolum Athanasii", 
   "Nicaen. Canon. Turner I": "symboli Nicaeni (a. 325) versiones latinae, e. g. quae edita est CANON. Turner I", 
   "symbola fidei": "symbola fidei"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAVL. PETRIC.": [
  "Paulinus Petricordiae", 
  {
   "praef.": "praefatio", 
   "visit. nepot.": "de visitatione nepotuli sui", 
   "carm. praef.": "praefatio ad carmina minora", 
   "orant.": "de orantibus", 
   "Mart.": "de vita Martini episcopi"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "ARBON.": [
  "Arb(r)onius Silo (sc. pater)", 
  {
   "carm. frg.": "carminum fragmentum"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "VICTORIN. POETOV.": [
  "Victorinus Poetovionensis", 
  {
   "in apoc.": "commentarius in apocalypsin", 
   "fabr. mund.": "tractatus de fabrica mundi"
  }, 
  [
   "250", 
   "304", 
   "episcopus", 
   ""
  ]
 ], 
 "CYPR. GALL.": [
  "Cyprianus Gallus", 
  {
   "iud.": "heptateuchos q. d., sc. veteris testamenti libri nonnulli versibus redditi (servatus est heptateuchos, sc. gen., exod., lev., num., deut., Ios., iud. [mutil. in fine])", 
   "frg.": "deperditorum carminum fragmenta, quae quidem Peiper Cypriano Gallo ascripsit (partim falso)", 
   "[cena]": "cena Cypriani q. d. (v. PS. CYPR. cena) versibus reddita"
  }, 
  [
   "350", 
   "450", 
   "poeta", 
   ""
  ]
 ], 
 "PETR.": [
  "Petrus diaconus et alii", 
  {
   "Fulg. Rusp. epist.": "epistula ad Fulgentium et coepiscopos"
  }, 
  [
   "1107", 
   "1159", 
   "", 
   ""
  ]
 ], 
 "[PROCOP.]": [
  "", 
  {
   "[Ps. Hier. epist.]": "versio lat. epistulae Procopii Gazaei ad Hieronymum quendam (inter S. Hieronymi epistulas perperam receptae) olim iuxta textum gr. edita non iam affertur"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PORC. LIC.": [
  "Porcius Licinus", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-150", 
   "-50", 
   "", 
   ""
  ]
 ], 
 "EVCLID.": [
  "Euclides", 
  {
   "elem.": "elementa e graeco versa"
  }, 
  [
   "-299", 
   "-200", 
   "geometres", 
   ""
  ]
 ], 
 "EDICT. $5": [
  "", 
  {
   "Hunir. Vict. Vit.": "edicta Hunirici (Hunerici) regis Vandalorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DVB. NOM.": [
  "", 
  {
   "gramm.": "de dubiis nominibus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[VICTORIN.] $2": [
  "", 
  {
   "[vita dom.]": "carmen de nativitate, vita, passione et resurrectione domini"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAESELL.": [
  "L. Caesellius Vindex", 
  {
   "fragmenta a scriptoribus servata, e. g. fragm. apud GELL.": "fragmenta a scriptoribus servata, e. g. fragm. apud GELL."
  }, 
  [
   "50", 
   "150", 
   "grammaticus", 
   ""
  ]
 ], 
 "MARTYR.": [
  "Martyrius", 
  {
   "gramm.": "de B muta et V vocali"
  }, 
  [
   "450", 
   "550", 
   "Adamantii filius", 
   ""
  ]
 ], 
 "[VICTORIN.] $1": [
  "", 
  {
   "[Macc.]": "[Macc.]"
  }, 
  [
   "", 
   "", 
   "", 
   "PS. HIL. Macc. rec. B"
  ]
 ], 
 "GREG. ILIB.": [
  "Gregorius Iliberritanus", 
  {
   "de arca": "de arca Noe", 
   "in eccles.": "fragmenta duo praebentia explanationes in ecclesiasten", 
   "in gen.": "fragmenta praebentia expositiones in genesim", 
   "in cant.": "explanatio in canticum canticorum", 
   "fid.": "de fide"
  }, 
  [
   "330", 
   "393", 
   "episcopus (Luciferianus?)", 
   ""
  ]
 ], 
 "SOL.": [
  "C. Iulius Solinus", 
  {
   "collectanea rerum memorabilium": "collectanea rerum memorabilium"
  }, 
  [
   "250", 
   "350", 
   "", 
   ""
  ]
 ], 
 "COPA": [
  "", 
  {
   "copa, elegia appendicis Vergilianae": "copa, elegia appendicis Vergilianae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEV. NICAN.": [
  "Sevius Nicanor", 
  {
   "sat. frg. Suet. gramm.": "saturae fragm. servatum apud SVET. gramm."
  }, 
  [
   "-300", 
   "-101", 
   "", 
   ""
  ]
 ], 
 "SASERN.": [
  "Sasernae", 
  {
   "Varro rust.": "de agri cultura fragmenta, quae servavit VARRO rust."
  }, 
  [
   "-200", 
   "-101", 
   "pater et filius", 
   ""
  ]
 ], 
 "R. GEST.": [
  "", 
  {
   "div. Aug.": "res gestae divi Augusti"
  }, 
  [
   "", 
   "", 
   "", 
   "olim ex monumento Ancyrano solo allatae"
  ]
 ], 
 "CASS. SEV.": [
  "Cassius Severus", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst."
  }, 
  [
   "-50", 
   "32", 
   "", 
   ""
  ]
 ], 
 "THESS. TRALL.": [
  "Thessalus <Trallianus>", 
  {
   "plant.": "de plantis duodecim signis et septem planetis subiectis (qui floruit aet. Neronis) tributi versio lat. antiqua"
  }, 
  [
   "0", 
   "99", 
   "medicus", 
   ""
  ]
 ], 
 "TRACT. $1": [
  "", 
  {
   "in Luc.": "tractatus Ariani cuiusdam in euangelium sec. Lucam"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TRACT. $3": [
  "", 
  {
   "de sepulchr. grom.": "tractatus de sepulchris"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TRACT. $2": [
  "", 
  {
   "Pelag.": "epistulae et tractatus Pelagiani"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. DIONYS. ALEX.": [
  "(Pseudo-) Dionysius Alexandrinus", 
  {
   "epist.": "epistula"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLANC.": [
  "L. Munatius Plancus", 
  {
   "Cic. fam.": "epistulae fere ad Ciceronem"
  }, 
  [
   "-87", 
   "-15", 
   "", 
   "v. CIC. fam."
  ]
 ], 
 "APIC.": [
  "Apicius", 
  {
   "exc.": "excerpta a Vinidario quodam (sed non e nostra decem librorum collectione) servata codice Salmasiano", 
   "pim.": "brevis pimentorum", 
   "de re coquinaria": "de re coquinaria", 
   "cib.": "brevis ciborum"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "TITVLVS": [
  "", 
  {
   "Hor. carm. 1,16 rec. Ps": "titulus recensionis Ps ad HOR. carm. 1,16", 
   "Mart.": "titulus vel lemma ad MART."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GEST. $3": [
  "", 
  {
   "Xyst.": "gesta de Xysti (sc. Sixti III papae) purgatione"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FAST.": [
  "", 
  {
   "ann. Iul. Arv. Nov. 14": "fasti anni Iuliani, e. g. fratrum Arvalium ad diem 14 mensis Novembris"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GEST. $1": [
  "", 
  {
   "Melet.": "gesta Meletii schismatici Aegyptii"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILAGR.": [
  "Philagrius", 
  {
   "med.": "de medicina, versio Latina"
  }, 
  [
   "200", 
   "299", 
   "<Epirotes> medicus", 
   "fragmenta latina in Alexandri Tralliani versione latina"
  ]
 ], 
 "CHROMAT.": [
  "Chromatius", 
  {
   "serm.": "sermones", 
   "in Matth.": "tractatus in Matthaeum", 
   "[beat.]": "sermo de octo beatitudinibus"
  }, 
  [
   "345", 
   "407", 
   "episcopus Aquileiensis", 
   ""
  ]
 ], 
 "VET. LAT.": [
  "", 
  {
   "II Macc.": "libri Maccabaeorum", 
   "Am.": "Amos", 
   "apoc.": "apocalypsis", 
   "Esth. H": "liber  Esther, e. g. additamentum H", 
   "Iac.": "epistula Iacobi", 
   "Vetus Latina": "Vetus Latina", 
   "Bar.": "Baruch"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "RABIR.": [
  "Rabirius", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "COMM.": [
  "Commodianus", 
  {
   "apol.": "carmen apologeticum q. d. (carmen de duobus populis)", 
   "instr.": "instructiones per litteras versuum primas (sc. acrostichidibus ornatae)"
  }, 
  [
   "200", 
   "299", 
   "poeta", 
   ""
  ]
 ], 
 "AVIAN.": [
  "Avianus", 
  {
   "praef.": "fabularum praefatio, sc. epistula dedicatoria", 
   "fab.": "fabulae", 
   "[apol.]": "fabularum apologi (olim etiam prologi nominabantur)"
  }, 
  [
   "250", 
   "350", 
   "", 
   ""
  ]
 ], 
 "VISIO": [
  "", 
  {
   "Pauli": "visio Pauli apostoli apocrypha latine versa"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HORTENS.": [
  "Q. Hortensius Hortalus", 
  {
   "or. frg. Char. gramm.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm."
  }, 
  [
   "-114", 
   "-50", 
   "orator", 
   ""
  ]
 ], 
 "PS. IOH. MED.": [
  "(Pseudo-) Iohannes <Mediocris>", 
  {
   "hom.": "collectio homiliarum 31 per Chrysostomicarum editiones dispersarum"
  }, 
  [
   "", 
   "", 
   "episcopus Neapolitanus", 
   ""
  ]
 ], 
 "PAVL.": [
  "Iulius Paulus", 
  {
   "dig.": "fragmenta in digestis aliisve collectionibus servata", 
   "sent.": "sententiae"
  }, 
  [
   "150", 
   "250", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "CATO $1": [
  "M. Porcius Cato (sc. Vticensis)", 
  {
   "ad Ciceronem epistula": "ad Ciceronem epistula"
  }, 
  [
   "-95", 
   "-46", 
   "", 
   ""
  ]
 ], 
 "CORN. SEV.": [
  "Cornelius Severus", 
  {
   "carm. frg.": "carminum vel carminis fragmenta"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "CAES.": [
  "C. Iulius Caesar", 
  {
   "anal. frg. Char. gramm.": "de analogia, fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm.", 
   "civ.": "commentarii belli civilis", 
   "carm. in Ter.": "carminum fragmentum, sc. versus in Terentium Afrum", 
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud GELL.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud GELL.", 
   "Anticat. frg. Gell.": "Anticato, fragmenta a scriptoribus servata, e. g. fragm. apud GELL.", 
   "epistulae una cum Ciceronis ad Atticum epistulis servatae": "epistulae una cum Ciceronis ad Atticum epistulis servatae", 
   "Gall.": "commentarii belli Gallici"
  }, 
  [
   "-100", 
   "-44", 
   "", 
   ""
  ]
 ], 
 "NERAT.": [
  "L. Neratius Priscus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "50", 
   "133", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "PS. PAVL. NOL.": [
  "Pseudo-Paulinus Nolanus", 
  {
   "exc. Bob.": "excerpta Bobiensia", 
   "epist. app.": "appendix epistularum Paulino Nolano suppositarum", 
   "carm.": "carmina spuria inter PAVL. NOL. carm.", 
   "carm. app.": "appendix carminum Paulino Nolano suppositorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IOH. MAXENT.": [
  "Iohannes Maxentius", 
  {
   "[c. Nest.]": "contra Nestorianos capitula", 
   "[fid.]": "professio brevissima catholicae fidei", 
   "[profess.]": "de Christo professio, sc. libelli fidei pars posterior (pars prior notabatur 'epist. ')", 
   "[ad Horm.]": "ad epistulam Hormisdae papae responsio", 
   "[epist.]": "epistula ad legatos sedis apostolicae, sc. libelli fidei pars prior (pars posterior notabatur 'profess. ')", 
   "[adunat.]": "adunationis ratio verbi dei ad propriam carnem", 
   "[dial.]": "dialogus contra Nestorianos", 
   "[c. Aceph.]": "contra Acephalos"
  }, 
  [
   "450", 
   "550", 
   "monachus Scytha", 
   "Conc. S IV 2 p. 14,22"
  ]
 ], 
 "HOS. GETA": [
  "Hosidius Geta", 
  {
   "Med.": "Medea tragoedia (cento Vergilianus)"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "NVMITOR.": [
  "Numitorius", 
  {
   "carm. frg.": "carminum (antibucolicon) fragmenta"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "PS. SVLP. SEV.": [
  "Pseudo-Sulpicius Severus", 
  {
   "epist.": "appendix VII epistularum Sulpicio Severo suppositarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. HIER.": [
  "Pseudo-Hieronymus", 
  {
   "[expos. in Ioh.]": "expositio (in) quattuor euangel., in Iohannem", 
   "chron. exord.": "exordium q. d. in uno alterove codice post HIER. chron. praef. insertum", 
   "praef. com.": "epistula ad Constantium, sc. praefatio lectionarii cuiusdam", 
   "[ad mon.]": "homilia ad monachos", 
   "tract.": "tractatus de psalm. 50", 
   "in Rom.": "ad Pelagii commentarium in Pauli apostoli epistulam ad Romanos", 
   "[in Iob]": "[in Iob]", 
   "Salom.": "explanatio de Salomone", 
   "doctr.": "homilia, 'in qua corruptio Doctrinae Apostolorum vituperatur'", 
   "Victorin. Poetov. in apoc.": "Victorini Poetovionensis commentarius in apocalypsin ab Hieronymo retractatus, recensio posterior", 
   "[in Marc.]": "commentarius in euangelium secundum Marcum", 
   "fid.": "fides Hieronymi", 
   "mon. Pachom.": "monita sancti Pachomii", 
   "epist. epistulae": "diverse", 
   "indic. de haer.": "indiculus de haeresibus", 
   "[expos. interl. in Ioh.]": "[expos. interl. in Ioh.]", 
   "monogr.": "de monogramma Christi"
  }, 
  [
   "400", 
   "599", 
   "", 
   ""
  ]
 ], 
 "PORPH.": [
  "Pomponius Porphyrio", 
  {
   "vita Hor.": "vita Horatii", 
   "Hor. sat.": "commentum in HOR., e. g. in sat."
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "ASELL.": [
  "Sempronius Asellio", 
  {
   "hist.": "rerum gestarum fragmenta"
  }, 
  [
   "-159", 
   "-91", 
   "", 
   ""
  ]
 ], 
 "SEVERIN.": [
  "Severinus", 
  {
   "doctr.": "doctrina de sapientia"
  }, 
  [
   "301", 
   "399", 
   "episcopus (von K\u00f6ln?)", 
   ""
  ]
 ], 
 "DORCAT.": [
  "Dorcatius", 
  {
   "carm. frg.": "carminum fragmentum unicum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MIM.": [
  "", 
  {
   "inc.": "mimographi incerti"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. PHILO": [
  "Pseudo-Philo", 
  {
   "antiq.": "libri antiquitatum biblicarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VIVENTIOL.": [
  "Viventiolus", 
  {
   "epist.": "epistula ad episcopos provinciae Lugdunensis", 
   "Alc. Avit. epist.": "epistula ad Alcimum Avitum"
  }, 
  [
   "117", 
   "284", 
   "episcopus Lugdunensis", 
   ""
  ]
 ], 
 "[LEG. ...]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "LEX ..."
  ]
 ], 
 "AT. CAP.": [
  "C. Ateius Capito", 
  {
   "fragmenta": "fragmenta"
  }, 
  [
   "-50", 
   "22", 
   "iurisconsultus", 
   "quibus scriptores ea tradentes Atei nomen addunt, e. g. fragm. apud MACR. Sat."
  ]
 ], 
 "LEPOR.": [
  "Leporius", 
  {
   "libellus emendationis (satisfactionis)": "libellus emendationis (satisfactionis)"
  }, 
  [
   "350", 
   "450", 
   "monachus Gallus", 
   ""
  ]
 ], 
 "ALBINOV.": [
  "Albinovanus Pedo", 
  {
   "carm.": "carminis fragmentum"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "NEPOTIAN.": [
  "Ianuarius Nepotianus", 
  {
   "epitomae Valerii Maximi quae exstant": "epitomae Valerii Maximi quae exstant"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "SEN.": [
  "L. Annaeus Seneca", 
  {
   "contr.": "controversiae", 
   "suas.": "suasoriarum liber"
  }, 
  [
   "-55", 
   "39", 
   "(Seneca rhetor, philosophi pater)", 
   ""
  ]
 ], 
 "BRVT. $1": [
  "D. Iunius Brutus Albinus", 
  {
   "epistulae ad Ciceronem, Brutum et Cassium": "epistulae ad Ciceronem, Brutum et Cassium"
  }, 
  [
   "-81", 
   "-43", 
   "", 
   ""
  ]
 ], 
 "BRVT. $2": [
  "M. Iunius Brutus", 
  {
   "de iure civili, fragm. servatum apud CIC. de orat.": "de iure civili, fragm. servatum apud CIC. de orat."
  }, 
  [
   "0", 
   "-101", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "SCIP. MIN.": [
  "P. Cornelius Scipio Aemilianus Africanus minor", 
  {
   "or. frg. Isid. orig.": "orationum fragmenta, e. g. fragm. servatum apud ISID. orig."
  }, 
  [
   "-185", 
   "-129", 
   "", 
   ""
  ]
 ], 
 "GAV. BASS.": [
  "Gavius Bassus", 
  {
   "Gell.": "operis de origine verborum et vocabulorum fragmenta a scriptoribus servata, e. g. fragm. apud GELL."
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "GAIVS": [
  "Gaius", 
  {
   "dig.": "fragmenta operum (praeter inst.) in digesta servata", 
   "inst.": "institutiones", 
   "[epit.]": "[epit.]"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "TRYPH.": [
  "Claudius Tryphoninus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "150", 
   "250", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "[PS. THEOD.]": [
  "", 
  {
   "[hom.]": "homiliarum 5 et 6 Theodoto episcopo Ancyrano ascriptarum versio latina"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NEMES. $1": [
  "Nemesianus et socii", 
  {
   "Cypr. epist.": "epistula ad Cyprianum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COMMENT.": [
  "", 
  {
   "augur. Varro ling.": "commentariorum auguralium fragmentum, quod servavit VARRO ling."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. HOR.": [
  "Pseudo-Horaz", 
  {
   "sat.": "versus spurii HOR. sat."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALV.": [
  "C. Licinius Macer Calvus", 
  {
   "carm. frg.": "carminum fragmenta", 
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst."
  }, 
  [
   "-82", 
   "-47", 
   "", 
   ""
  ]
 ], 
 "EVSEB. MED.": [
  "Eusebius <Mediolanensis>", 
  {
   "epistula ad Leonem Magnum": "epistula ad Leonem Magnum"
  }, 
  [
   "400", 
   "475", 
   "episcopus", 
   ""
  ]
 ], 
 "AVIEN.": [
  "Rufius Festus Avien(i)us", 
  {
   "orb. terr.": "orbis terrae descriptio", 
   "carm. ad Flav.": "carmen ad Flavianum Myrmeicum", 
   "carm. ad Nort.": "carmen de se ad deam Nortiam", 
   "Arat.": "Arati Phain\u00f3mena latine versa et retractata", 
   "ora": "de ora maritima"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "FAST. $14": [
  "", 
  {
   "sodal. Augustal. a. 91": "fasti sodalium Augustalium Claudialium (olim partim 'acta' vel 'fasti collegiorum sacerdotalium incertorum') ad ann. 91"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FAST. $15": [
  "", 
  {
   "Capitol. a. 19 a. Chr.": "Capitolini ad ann. 19 a. Chr. (=ann. urbis conditae 735)", 
   "Barberin. a. 21 a. Chr.": "Barberiniani ad ann. 21 a. Chr. (olim saxum V)", 
   "triumph.": "fasti triumphales, sc. laterculi triumphorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARRVNT.": [
  "L. Arruntius", 
  {
   "hist.": "belli Punici historiarum fragmenta"
  }, 
  [
   "-100", 
   "-1", 
   "cos. 22?", 
   ""
  ]
 ], 
 "FAST. $13": [
  "", 
  {
   "sodal. Antoninian. a. 236": "fasti sodalium Antoninianorum (?) ad ann. 236"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FAST. $10": [
  "", 
  {
   "sacerd. Iov. a. 238": "fasti sacerdotum in aede Iovis Propugnatoris consistentium ad ann. 238"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FAST. $11": [
  "", 
  {
   "Sal. Palat. a. 201": "fasti Saliorum Palatinorum ad ann. 201"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LVCIL.": [
  "C. Lucilius", 
  {
   "saturarum fragmenta": "saturarum fragmenta"
  }, 
  [
   "-180", 
   "-103", 
   "", 
   ""
  ]
 ], 
 "RVST. HELP.": [
  "Rustic(i)us Helpidius (Domnulus)", 
  {
   "benef.": "carmen de Christi Iesu beneficiis", 
   "hist. testam.": "historiarum testamenti veteris et novi tristicha"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "PELAG.": [
  "scripta nonnulla Pelagio haeretico tributa", 
  {
   "[in Rom. prol.]": "[in Rom. prol.]", 
   "frg. Migne suppl. 1": "operum deperditorum fragm. apud Migne suppl. 1", 
   "Aug. grat. Christ.": "operum deperditorum fragmenta apud scriptores servata, e. g. fragm. servatum apud AVG. grat. Christ.", 
   "in Rom.": "expositio in epistulam Pauli ad Romanos", 
   "epist. ad Demetr.": "epistula ad Demetriadem", 
   "[in I Cor. argum.]": "[in I Cor. argum.]", 
   "[in Tit. argum.]": "[in Tit. argum.]", 
   "[indur.]": "[indur.]", 
   "[argum.]": "[argum.]"
  }, 
  [
   "", 
   "", 
   "", 
   "PRAEF. bibl. in epist. Paul."
  ]
 ], 
 "VAL. $1": [
  "C. Aburnius Valens", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "LICENT.": [
  "Licentius", 
  {
   "carm. ad Aug.": "carmen ad Augustinum"
  }, 
  [
   "370", 
   "450", 
   "Augustini familiaris", 
   ""
  ]
 ], 
 "POLYCARP.": [
  "Polycarpus", 
  {
   "ad Philipp.": "epistula ad Philippenses latine versa"
  }, 
  [
   "69", 
   "155", 
   "episcopus Smyrnaei", 
   ""
  ]
 ], 
 "CATVLL.": [
  "C. Valerius Catullus Veronensis", 
  {
   "carmina": "carmina"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "BALB.": [
  "L. Cornelius Balbus Gaditanus (sc. maior)", 
  {
   "ad Ciceronem epistulae": "ad Ciceronem epistulae"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "LIB. $4": [
  "", 
  {
   "iubil.": "libri iubilaeorum fere a. 100 a. Chr. hebraice conscripti e versione graeca latine versi quae exstant"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SVLP. ALEX.": [
  "Sulpicius Alexander", 
  {
   "Greg. Tur. Franc.": "historia, fragm. servatum apud GREG. TVR. Franc."
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "DIOSC. $1": [
  "Dioscorus", 
  {
   "epistula ad Augustinum": "epistula ad Augustinum"
  }, 
  [
   "500", 
   "599", 
   "", 
   ""
  ]
 ], 
 "CASSIVS": [
  "Cassius quidam (Cassius Severus?)", 
  {
   "verba servata apud QVINT. inst.": "verba servata apud QVINT. inst."
  }, 
  [
   "-50", 
   "32", 
   "", 
   ""
  ]
 ], 
 "FELIX $1": [
  "Felix et socii", 
  {
   "epistula ad Cyprianum": "epistula ad Cyprianum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. OROS.": [
  "Pseudo-Orosius", 
  {
   "epist.": "epistula ad Augustinum de haeresibus"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "TREBAT.": [
  "C. Trebatius Testa", 
  {
   "Gell.": "de religionibus, de civili iure al. , fragmenta, e. g. fragm. servatum apud GELL."
  }, 
  [
   "-84", 
   "4", 
   "", 
   ""
  ]
 ], 
 "COMPVT.": [
  "", 
  {
   "a. 452 chron. I": "computatio anni 452, vol. I"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASCENS.": [
  "", 
  {
   "Is.": "ascensio Isaiae apocrypha, fragmenta versionis latinae antiquae (exstant 2,14\u20143,13. 7,1\u201419)"
  }, 
  [
   "250", 
   "350", 
   "", 
   ""
  ]
 ], 
 "BASIL.": [
  "Basilius Magnus", 
  {
   "hom.": "homiliae duae codicis Paris", 
   "[ad fil.]": "[ad fil.]", 
   "ad mon.": "admonitio ad monachos"
  }, 
  [
   "330", 
   "379", 
   "", 
   "PS. BASIL. ad fil."
  ]
 ], 
 "VICTOR. $1": [
  "Victorius Aquitanus", 
  {
   "praef.": "praefatio", 
   "pasch.": "cursus paschalis", 
   "calc.": "calculus"
  }, 
  [
   "400", 
   "488", 
   "", 
   ""
  ]
 ], 
 "SVBSCR.": [
  "", 
  {
   "Verg. cod. M": "subscriptiones in codicibus antiquis, e. g. in codice Vergiliano Mediceo"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GVNDOB.": [
  "Gundobadus", 
  {
   "Alc. Avit. epist.": "epistula ad Alcimum Avitum"
  }, 
  [
   "474", 
   "516", 
   "Burgundionum rex", 
   ""
  ]
 ], 
 "EDICT.": [
  "", 
  {
   "aed. cur. Gell.": "edictum aedilium curulium, fragmenta a scriptoribus servata, e. g. fragm. apud GELL."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ROMVL.": [
  "Romulus (fiktiver Verfasser)", 
  {
   "Aesopus latinus": "Aesopus latinus", 
   "epist. Romul.": "epistula Romuli", 
   "epist. Aesop.": "epistula Aesopi", 
   "fab. 98,6 rec. vet.": "fabula 98 \u00a76 recensionis veteris"
  }, 
  [
   "399", 
   "499", 
   "", 
   ""
  ]
 ], 
 "ANON.": [
  "anonymus", 
  {
   "epistula ad Augustinum": "epistula ad Augustinum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TVBERO": [
  "Q. Aelius Tubero", 
  {
   "Gell.": "ad C. Oppium libri fragm. servatum apud GELL.", 
   "hist.": "historiae"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "GRACCH. $1": [
  "Gracchus", 
  {
   "trag.": "tragoediarum fragmenta"
  }, 
  [
   "-50", 
   "50", 
   "poeta", 
   ""
  ]
 ], 
 "FACVND.": [
  "Facundus Hermianensis", 
  {
   "defens.": "pro defensione trium capitulorum vel ad Iustinianum", 
   "c. Moc.": "contra Mocianum", 
   "fid.": "epistola fidei catholicae in defensione trium capitulorum"
  }, 
  [
   "500", 
   "599", 
   "episcopus Africanus", 
   ""
  ]
 ], 
 "PS. NICET.": [
  "", 
  {
   "pasch.": "operis de ratione paschae recensio A"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENOL.": [
  "", 
  {
   "Colot. Dec. (Inscr. Ital. XIII 2 p. 290)": "menologium sive kalendarium rusticum Colotianum, sc. ad mensem Decembrem"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[DECRET.]": [
  "", 
  {
   "colleg. fam. Simitth.": "colleg. fam. Simitth."
  }, 
  [
   "", 
   "", 
   "", 
   "LEX cur. Iov. Simitth."
  ]
 ], 
 "PS. PHOC.": [
  "Pseudo-Phocas", 
  {
   "gramm.": "de aspiratione liber"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SVPPL.": [
  "", 
  {
   "Lucan.": "supplementum ad ADNOT. Lucan., scholion in LVCAN."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COSMOGR.": [
  "", 
  {
   "cosmographia anon. (Aethico in libris recentioribus tributa)": "cosmographia anon. (Aethico in libris recentioribus tributa)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DICTVM": [
  "", 
  {
   "dicta clarorum virorum a scriptoribus servata, e. g. Ciceronis dictum apud QVINT. inst.": "dicta clarorum virorum a scriptoribus servata, e. g. Ciceronis dictum apud QVINT. inst."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VEG.": [
  "P. (Flavius) Vegetius Renatus", 
  {
   "mil.": "epitoma rei militaris", 
   "mulom.": "digesta artis mulomedicinae"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "PS. VERG.": [
  "", 
  {
   "Aen.": "versus Vergilii Aeneidos libro 1 praefixi"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "AVX.": [
  "Auxentius", 
  {
   "Hil. c. Aux.": "epistula ad imperatores Valentinianum et Valentem"
  }, 
  [
   "300", 
   "374", 
   "episcopus Mediolanensis", 
   ""
  ]
 ], 
 "VEL.": [
  "Velius Longus", 
  {
   "gramm.": "de orthographia"
  }, 
  [
   "50", 
   "150", 
   "", 
   ""
  ]
 ], 
 "BELL.": [
  "", 
  {
   "Hisp.": "de bello Hispaniensi", 
   "Alex.": "de bello Alexandrino", 
   "Afr.": "de bello Africo"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GRILL.": [
  "Grillius", 
  {
   "rhet.": "commentarii in CIC. inv. quae exstant", 
   "frg. Courc.": "fragmentum a Courcelle Grillio ascriptum"
  }, 
  [
   "400", 
   "499", 
   "scriptor rhetoricus", 
   ""
  ]
 ], 
 "CONSVL.": [
  "", 
  {
   "Constant. chron. I": "consularia Constantinopolitana vel Hydatiana q. d. (e partibus alias alibi scriptis composita; recensio nondum decurtata versa est graece), vol. I"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CINNA": [
  "C. Helvius Cinna", 
  {
   "carm.": "carmina"
  }, 
  [
   "-100", 
   "-44", 
   "", 
   ""
  ]
 ], 
 "CIRIS": [
  "", 
  {
   "Ciris, carmen appendicis Vergilianae": "Ciris, carmen appendicis Vergilianae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PALLAD. $2": [
  "Palladius", 
  {
   "hist. mon.": "historiae monachorum sive Lausiacae latine versae"
  }, 
  [
   "364", 
   "430", 
   "episcopus Helenopolitanus", 
   ""
  ]
 ], 
 "PS. CELS.": [
  "Pseudo-Celsus", 
  {
   "epist.": "epistula ad Pullium Natalem"
  }, 
  [
   "-25", 
   "50", 
   "", 
   ""
  ]
 ], 
 "FAV.": [
  "Favorinus", 
  {
   "orationis fragm. servatum apud GELL.": "orationis fragm. servatum apud GELL."
  }, 
  [
   "50", 
   "150", 
   "quidam vetus orator (de nomine certatur)", 
   ""
  ]
 ], 
 "NERO": [
  "imp. Nero", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "37", 
   "68", 
   "", 
   ""
  ]
 ], 
 "PS. PACIAN.": [
  "PS.-Pacianus", 
  {
   "sim. carn.": "liber de similitudine carnis peccati"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEP. $1": [
  "M. Aemilius Lepidus Porcina", 
  {
   "or. frg. Prisc. gramm. II": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud PRISC. gramm. II"
  }, 
  [
   "-200", 
   "-101", 
   "", 
   ""
  ]
 ], 
 "VLT. SYLL.": [
  "", 
  {
   "de ultimis syllabis liber ad Caelestinum": "de ultimis syllabis liber ad Caelestinum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLIN.": [
  "Apollinaris <Valentinus>", 
  {
   "epistulae ad Alcimum Avitum": "epistulae ad Alcimum Avitum"
  }, 
  [
   "453", 
   "520", 
   "Valentiae episcopus frater Aviti", 
   ""
  ]
 ], 
 "GERM.": [
  "Germanicus Caesar", 
  {
   "Aratea q. d. (sunt, qui opus ei abiudicent)": "Aratea q. d. (sunt, qui opus ei abiudicent)"
  }, 
  [
   "-25", 
   "19", 
   "", 
   ""
  ]
 ], 
 "EPIST. $27": [
  "", 
  {
   "Paul. Laod.": "epistula apocrypha Pauli apostoli ad Laodicenses"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. HOS.": [
  "", 
  {
   "sent.": "sententiae (doctrina) de observatione disciplinae dominicae Hosio (Ossio) episcopo suppositae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VLP.": [
  "Domitius Vlpianus", 
  {
   "reg.": "liber singularis regularum", 
   "dig.": "fragmenta in digestis aliisve collectionibus servata", 
   "frg. Spicil. Solesm. I": "fragmenta varia, e. g. fragm. editum apud Pitra, Spicilegium Solesmense I", 
   "frg. Vind.": "institutionum fragmenta Vindobonensia", 
   "disp. frg. IIB": "disputationum fragmenta Argentoratensia"
  }, 
  [
   "150", 
   "228", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "EPIPHAN.": [
  "Epiphanius", 
  {
   "[in cant.]": "[in cant.]", 
   "Avell.": "operis de XII gemmis rationalis summi sacerdotis epitoma latina (ne graecum quidem opus integrum exstat) magna ex parte servata in collect. Avellana", 
   "de mensur.": "de mensuris et ponderibus quae latine exstant"
  }, 
  [
   "315", 
   "403", 
   "episcopus Salaminis Cypri", 
   ""
  ]
 ], 
 "[GLOSS.] $2": [
  "", 
  {
   "[med. ed. Heiberg]": "[med. ed. Heiberg]"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CORNVT.": [
  "L. Annaeus Cornutus", 
  {
   "fragmenta grammatica a scriptoribus servata, e. g. fragm. apud GELL.": "fragmenta grammatica a scriptoribus servata, e. g. fragm. apud GELL."
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "SECVNDIN.": [
  "Secundinus Manichaeus", 
  {
   "epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "[GLOSS.] $1": [
  "", 
  {
   "[Itala]": "[Itala]"
  }, 
  [
   "", 
   "", 
   "", 
   "SCHOL. Vet. Lat."
  ]
 ], 
 "PS. AVG.": [
  "Pseudo-Augustinus", 
  {
   "or. trin.": "oratio in librum de trinitate", 
   "solut.": "solutiones diversarum quaestionum ab haereticis (sc. Arianis) obiectarum", 
   "sent.": "liber sententiarum XXI", 
   "[dial. quaest.]": "dialogus quaestionum", 
   "alterc.": "altercatio ecclesiae et synagogae", 
   "c. Fulg.": "contra Fulgentium Donatistam", 
   "[temp. barb.]": "[temp. barb.]", 
   "orat.": "sermo de oratione et eleemosyna", 
   "c. Felician.": "contra Felicianum Arianum de unitate trinitatis", 
   "reg.": "regulae monasticae", 
   "[catacl.]": "[catacl.]", 
   "frg. Migne": "fragmenta operis cuiusdam de unitate patris et filii et spiritus sancti servata ab Hincmaro", 
   "serm.": "sermones Augustino suppositi, qui ante a. 600 ab anonymis conscripti sunt", 
   "symb. Caspari Anecd.": "expositio super symbolum", 
   "[de esu agni]": "sermo de esu agni", 
   "epist. app.": "epistularum spuriarum appendix", 
   "[de Rustic.]": "sermo de Rusticiano subdiacono", 
   "quaest. test.": "quaestionum veteris et novi testamenti conscriptarum ab AMBROSIAST. recensiones duae (utraque contaminata; recensio q. d. tertia medii est aevi)", 
   "[de IV. fer.]": "[de IV. fer.]", 
   "[neoph. 4 ]": "ad neophytos sermones 2\u20144", 
   "[carit.]": "sermonis de caritate fragmentum", 
   "[neoph. 1]": "ad neophytos sermo primus", 
   "un. trin.": "de unitate sanctae trinitatis", 
   "[in Matth.]": "[in Matth.]", 
   "spec.": "de divinis scripturis sive speculum (incipit: In deuteronomio: audi Israhel, dominus deus tuus)", 
   "hypomn.": "hypomnesticon (vulgo hypognosticon) contra Pelagianos sive Caelestianos haereticos", 
   "praed. dei": "de praedestinatione dei", 
   "haer. app.": "appendix Augustini operis genuini de haeresibus", 
   "test. fid.": "testimonia fidei", 
   "[c. Iud. pag. Ar.]": "[c. Iud. pag. Ar.]", 
   "[in apoc.]": "[in apoc.]", 
   "comm.": "commonitorium, quomodo sit agendum cum Manichaeis qui convertuntur", 
   "[eleem.]": "sermo de generalitate eleemosynarum", 
   "categ.": "categoriae decem ex Aristotele decerptae vel tractatus de categoriis Aristotelis (paraphrasis q. d. Themistiana)", 
   "vit. christ.": "de vita christiana (Pelagii?)", 
   "praed. et grat.": "de praedestinatione et gratia", 
   "coll. c. Pasc.": "collatio cum Pascentio Ariano", 
   "[haer.]": "[haer.]", 
   "[symb.]": "[symb.]", 
   "[cant. nov.]": "[cant. nov.]", 
   "cons. mort.": "sermones de consolatione mortuorum", 
   "sobr.": "de sobrietate et castitate"
  }, 
  [
   "1050", 
   "1150", 
   "", 
   ""
  ]
 ], 
 "CAVTIO": [
  "", 
  {
   "Phaonis": "cautio L. Domitii Phaonis"
  }, 
  [
   "", 
   "", 
   "", 
   "(CIL X 444)"
  ]
 ], 
 "PAPIN. $1": [
  "Papinius", 
  {
   "epigr. Varro ling.": "epigrammation quod servavit VARRO ling."
  }, 
  [
   "40", 
   "96", 
   "", 
   ""
  ]
 ], 
 "CARM.": [
  "", 
  {
   "de fig.": "de figuris vel schematibus", 
   "de Alcest.": "de Alcestide (= Pap. Barcinon. inv. n. 158\u2014161)", 
   "de aegr. Perd.": "de aegritudine Perdicae", 
   "[de alphab.]": "versus cuiusdam Scoti de alphabeto (vel versus de nominibus litterarum)", 
   "devot. Macr. Sat.": "carmen devotionis, sc. formula 'in cuiusdam Furii vetustissimo libro' reperta, qua urbes exercitusque devoventur, servata apud MACR. Sat.", 
   "pop. Suet. Iul.": "versus populares, quot Morel ita nominavit, e. g. versus servati apud SVET. Iul.", 
   "laud. dom.": "laudes domini", 
   "app. Maxim.": "carmina appendicis Maximiniani q. d. (sc. tradita una cum MAXIM. eleg.)", 
   "Fronto": "versus (?), quem servavit FRONTO", 
   "de sept. sap.": "de septem sapientibus (carmen servatum apud HYG. fab. 221,2, quem auctorem olim addebamus)", 
   "[in Plaut.]": "carmina sepulcralia in Plautum et al. facta", 
   "de pond.": "de ponderibus et mensuris", 
   "de mens.": "carmina tria de mensibus", 
   "pass. dom.": "de passione domini (carmen aut Lactantio aut Cypriano suppositum, quod aliquamdiu spernebamus)", 
   "de bell. Aeg.": "de Augusti bello Aegyptiaco vel Actiaco (fragmenta Herculanensia interdum Rabirio ascripta)", 
   "cod. Petav.": "carmina (sc. epigraphica) fere codice Petaviano (Paris. lat. 2832) servata", 
   "c. pag.": "contra paganos (vel contra Flavianum)", 
   "evoc. Macr. Sat.": "carmen evocationis, sc. formula 'in cuiusdam Furii vetustissimo libro' reperta, qua di ex urbe oppugnata evocantur, servata apud MACR. Sat.", 
   "de Sod.": "de Sodoma (carmen in codicibus aut Tertulliano aut Cypriano suppositum, ab eodem poeta conscriptum ac CARM. de Iona)", 
   "ad senat.": "ad quendam senatorem (carmen in codicibus Cypriano suppositum)", 
   "Arv. (CE 1)": "carmen Arvale (= Act. Arv. a. 218 [CIL VI 2104] a 32sqq.)", 
   "de Iona": "de Iona (carmen in codicibus aut Tertulliano aut Cypriano suppositum, ab eodem poeta conscriptum ac CARM. de Sod.)", 
   "Sibyll.": "carmen Sibyllinum, quod incipit a verbis 'Mundus origo mea est'", 
   "de pascha": "de pascha (vel de ligno crucis; carmen in codicibus praecipue Cypriano suppositum)", 
   "Priami Varro ling.": "carminis Priami fragmentum, quod servavit VARRO ling.", 
   "[inc. 41 (Quint. inst. 9,2,26)]": "inter incertorum versus a Morel collectos fragm. 41 servatum apud QVINT. inst. 9,2,26", 
   "[poet. min. V 71,10]": "inter carmina a Baehrens (PLM) collecta carm. 71 vol. V editum vers. 10", 
   "Nelei Fest.": "carminis Nelei q. d. (tragoediae?) fragmenta a scriptoribus servata, e. g. fragm. apud FEST", 
   "Sal. Varro ling.": "carminum Saliarium fragmenta, e. g. fragm., quod servavit VARRO ling.", 
   "adv. Marc.": "adversus Marcionem vel Marcionitas (carmen Tertulliano suppositum)", 
   "de resurr.": "de resurrectione mortuorum et de iudicio domini (carmen in codicibus Cypriano aut Tertulliano suppositum)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SIGISM.": [
  "Sigismundus", 
  {
   "Alc. Avit. epist.": "epistulae ad Symmachum papam, ad Vitalinum senatorem, ad imp. Anastasium I"
  }, 
  [
   "450", 
   "524", 
   "Burgundiae Rex\u00a0", 
   ""
  ]
 ], 
 "ORAC.": [
  "", 
  {
   "Sibyll.": "oraculorum Sibyllinorum versiones lat. variae varie traditae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LECT.": [
  "", 
  {
   "eccl. cod. Fuld.": "index lectionum ecclesiasticarum ex epistulis Paulinis sumptarum, quem Victor Capuanus ex titulis marginalibus compositum codici Fuldensi addidit"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DARES": [
  "Dares Phrygius", 
  {
   "de excidio Troiae historia e graeco (quod periit) versa atque retractata": "de excidio Troiae historia e graeco (quod periit) versa atque retractata"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "PROCL.": [
  "Proclus", 
  {
   "laud. Mar.": "oratio de laudibus Mariae latine versa"
  }, 
  [
   "390", 
   "447", 
   "episcopus Constantinopolis", 
   ""
  ]
 ], 
 "OP.": [
  "Arianus qu\u012bdam???", 
  {
   "imperf. in Matth.": "opus imperfectum in Matthaeum, quod Iohannis Chrysostomi nomine traditum est (vix e graeco versum)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "INST.": [
  "", 
  {
   "aliment. (CIL II 1174)": "institutio alimentaria Hispalensis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GAVDENT.": [
  "Gaudentius", 
  {
   "serm. praef.": "sermonum ab ipso Gaudentio collectorum praefatio ad Benivolum", 
   "serm.": "sermones et tractatus"
  }, 
  [
   "350", 
   "406", 
   "episcopus Brixiensis", 
   ""
  ]
 ], 
 "EVANTH.": [
  "Euanthius", 
  {
   "de com.": "de comoedia vel de fabula"
  }, 
  [
   "250", 
   "350", 
   "", 
   ""
  ]
 ], 
 "INTERPR. $1": [
  "", 
  {
   "Paul. sent.": "interpretationes constitutionum et sententiarum, quas e collectionibus variis (sc. COD. Greg. Visig., COD. Herm. Visig., COD. Theod., NOVELL.) et e Pauli sententiis excerpsit breviarium Alarici"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FORTVN. $1": [
  "Consult(i)us Fortunatianus", 
  {
   "rhet.": "ars rhetorica"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "ABK\u00fcRZUNG TLL": [
  "Name", 
  {
   "Abk\u00fcrzung Werk": "Werk", 
   "Unterwerke - Abk\u00fcrzung": "Unterwerke"
  }, 
  [
   "Datierung: start_year", 
   "Datierung: end_year", 
   "Notizen", 
   "Zusatz"
  ]
 ], 
 "VIB. CRISP.": [
  "Q. Vibius Crispus", 
  {
   "or. frg. Quint. inst.": "orationum fragmenta, e. g. fragm. servatum apud QVINT. inst."
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "BREV.": [
  "", 
  {
   "de Hier.": "breviarius de Hierosolyma"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[GLOSS.] $4": [
  "", 
  {
   "[Verg. ed. Hagen E 287]": "glossae Vergilianae editae ab Hagen, glossarum ab E incipientium glossa 287"
  }, 
  [
   "", 
   "", 
   "", 
   "GLOSS. LI Ansil. EX 1437"
  ]
 ], 
 "CONC. $1": [
  "", 
  {
   "acta conciliorum oecumenicorum (sc. Epheseni a. 431 [tom. I], Chalcedonensis a. 451 [tom. II], Constantinopolitani a. 553 [tom. IV]) et sim. a Schwartz edita (versa magnam partem aut e graeco aut in graecum)": "acta conciliorum oecumenicorum (sc. Epheseni a. 431 [tom. I], Chalcedonensis a. 451 [tom. II], Constantinopolitani a. 553 [tom. IV]) et sim. a Schwartz edita (versa magnam partem aut e graeco aut in graecum)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPICED.": [
  "", 
  {
   "Drusi": "epicedion Drusi vel consolatio ad Liviam (carmen Ovidio perperam adscriptum)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GRAMM. $1": [
  "", 
  {
   "de specieb. locut.": "grammaticus quidam, de speciebus locutionis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "M'. MANIL.": [
  "M'. Manilius", 
  {
   "Varro rust.": "fragm. quod servavit VARRO rust."
  }, 
  [
   "-200", 
   "-100", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "[EPIST.]": [
  "", 
  {
   "[Arr. ad Euseb.]": "[Arr. ad Euseb.]"
  }, 
  [
   "", 
   "", 
   "", 
   "ARIVS ad Euseb. vers. g"
  ]
 ], 
 "LYDIA": [
  "Lydia", 
  {
   "carmen appendicis Vergilianae": "carmen appendicis Vergilianae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[MYTHOGR.]": [
  "", 
  {
   "mythographi Vaticani": "mythographi Vaticani"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GALEN.": [
  "Gal(i)enus", 
  {
   "alfab.": "alfabetum q. d. ad Patern(ian)um (inscribitur etiam liber pigmentorum, de qualitate herbarum aromatum seu animalium, Galeni de simplicibus medicinis ad Paternianum, al. )"
  }, 
  [
   "129", 
   "215", 
   "", 
   ""
  ]
 ], 
 "EPIST. $21": [
  "", 
  {
   "de Melch.": "epistula de Melchisedech Damaso papae supposita"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $20": [
  "", 
  {
   "Maxim. Aug. in psalm.": "epistula Maximianistarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $23": [
  "", 
  {
   "Migne suppl.": "epistulae quaedam christianae, quarum verba praebet Migne suppl."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $22": [
  "", 
  {
   "Merov.": "epistulae aevi Merovingici (praecipue paparum et episcoporum) a Gundlach collectae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $25": [
  "", 
  {
   "Pacon.": "epistula Paconii cuiusdam ad Macedonem"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $24": [
  "", 
  {
   "Orcist. (CIL III 7000)": "epistula (preces) Orcistanorum ad imp. Constantinum Magnum aliosque"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. CATO": [
  "Pseudo-Cato", 
  {
   "monost.": "monosticha", 
   "praef.": "praefatio (epistula)", 
   "dist.": "disticha (sc. hexametrorum paria) vel dicta Catonis", 
   "Mus.": "de Musis", 
   "brev. sent.": "breves sententiae"
  }, 
  [
   "500", 
   "599", 
   "", 
   ""
  ]
 ], 
 "EPIST. $26": [
  "", 
  {
   "Pap. Corp.": "minoris momenti epistulae, e. g. PAP. Corp."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $29": [
  "", 
  {
   "Philer. (Chart. lat. ant. X 428)": "epistula Philerotos cuiusdam ad conservos"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $28": [
  "", 
  {
   "Pelag. Vindob.": "epistularum (?) Pelagianarum fragmenta Vindobonensia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GRAMM. $2": [
  "", 
  {
   "suppl.": "opuscula quaedam grammatica supplemento collectionis Keilianae edita, quae non afferuntur notis propriis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[SALON.]": [
  "Salonius", 
  {
   "[in eccles.]": "in ecclesiasten", 
   "[in prov.]": "in proverbia Salomonis expositiones"
  }, 
  [
   "400", 
   "499", 
   "episcopus Viennensis", 
   ""
  ]
 ], 
 "ARATOR": [
  "Arator", 
  {
   "ad Parth.": "epistula ad Parthenium", 
   "ad Flor.": "epistula ad Florianum", 
   "act.": "historia apostolica (de actibus apostolorum)", 
   "ad Vigil.": "epistula ad Vigilium papam"
  }, 
  [
   "450", 
   "550", 
   "poeta", 
   ""
  ]
 ], 
 "CAECIL.": [
  "Caecilius Statius Insuber Gallus", 
  {
   "com.": "comoediarum (sc. palliatarum) fragmenta"
  }, 
  [
   "-220", 
   "-168", 
   "", 
   ""
  ]
 ], 
 "ORIGO": [
  "", 
  {
   "Const.": "origo Constantini (sc. Magni) imperatoris"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SYAGR.": [
  "Syagrius Gallaeciae", 
  {
   "reg.": "regulae definitionum prolatae contra haereticos"
  }, 
  [
   "400", 
   "487", 
   "episcopus", 
   ""
  ]
 ], 
 "COLVM.": [
  "L. Iunius Moderatus Columella", 
  {
   "arb.": "de arboribus", 
   "de re rustica": "de re rustica"
  }, 
  [
   "0", 
   "99", 
   "ex Hispania Baetica Gaditanus", 
   ""
  ]
 ], 
 "SAB.": [
  "Mas(s)urius Sabinus", 
  {
   "dig.": "fragmenta in digesta servata", 
   "Gell.": "fragmenta varia, e. g. fragm. servatum apud GELL."
  }, 
  [
   "-50", 
   "50", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "IREN.": [
  "Irenaeus", 
  {
   "opus adversus haereses (sc. gnosticas) e graeco versum": "opus adversus haereses (sc. gnosticas) e graeco versum"
  }, 
  [
   "135", 
   "200", 
   "episcopus Lugdunensis", 
   ""
  ]
 ], 
 "OPPIVS": [
  "Oppius", 
  {
   "Macr. Sat.": "de silvestribus arboribus librum, fragmenta servata apud MACR. Sat."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SVLPICIA": [
  "Sulpicia", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "0", 
   "99", 
   "Caleni uxor", 
   ""
  ]
 ], 
 "MEMM.": [
  "C. Memmius", 
  {
   "carm. frg.": "carminum fragmentum", 
   "or. frg. Prisc. gramm. II": "orationum fragmenta a scriptoribus servata"
  }, 
  [
   "-150", 
   "-99", 
   "praet. 104.", 
   ""
  ]
 ], 
 "MARCELL. $4": [
  "Marcellus <Empiricus>; Marcellus Burdigalensis", 
  {
   "med. praef.": "Marcelli praefatio", 
   "med.": "de medicamentis", 
   "med. carm.": "carmen in fine operis positum", 
   "med. de mens.": "de mensuris et ponderibus medicinalibus"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "GREG. TVR.": [
  "(Georgius Florentius) Gregorius Turonensis", 
  {
   "Franc.": "historiae, sc. historia Francorum", 
   "glor. conf.": "in gloria confessorum (e numero librorum 7 miraculorum)", 
   "[Thom.]": "[Thom.]", 
   "vit. patr.": "de vita patrum", 
   "in psalm.": "tractatus psalterii (commentarii in psalmos) fragmenta", 
   "glor. mart.": "in gloria martyrum (e numero librorum 7 miraculorum)", 
   "Mart.": "de virtutibus Martini (sc. episcopi Turonensis; opus e numero librorum 7 miraculorum)", 
   "Iul.": "de virtutibus Iuliani (e numero librorum 7 miraculorum)", 
   "Andr.": "de miraculis Andreae apostoli", 
   "stell.": "de cursu stellarum ratio, qualiter ad officium (sc. monasticum) implendum debeat observari", 
   "dorm.": "passio martyrum VII dormientium apud Ephesum"
  }, 
  [
   "538", 
   "594", 
   "episcopus", 
   ""
  ]
 ], 
 "COLLECT.": [
  "", 
  {
   "c. pag.": "contra paganos", 
   "Arian.": "collectio Ariana codicis Veronensis LI (scripti fere 500)", 
   "c. Iud.": "contra Iudaeos", 
   "hom.": "homiliae vel homiliarum fragmenta (de lectionibus sanctorum euangeliorum; collectae sunt e variis scriptoribus)", 
   "serm.": "sermones (sc. de sollemnitatibus)", 
   "nom. apost.": "de nominibus apostolorum (opusculum in fronte mutilum; e graeco versum?)", 
   "c. haer.": "contra haereticos (i. orthodoxos)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VERGIN.": [
  "L. Verginius Rufus", 
  {
   "epigr.": "epigramma"
  }, 
  [
   "14", 
   "97", 
   "", 
   ""
  ]
 ], 
 "POSTVL.": [
  "", 
  {
   "ap. procos. Aug. c. Cresc.": "postulatio apud Herodem proconsulem servata apud AVG. c. Cresc."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIL. AREL.": [
  "Hilarius Arelatensis", 
  {
   "epist. ad Eucher.": "epistula ad Eucherium episcopum Lugdunensem", 
   "vita Honorat.": "sermo de vita Honorati episcopi Arelatensis"
  }, 
  [
   "401", 
   "449", 
   "episcopus", 
   ""
  ]
 ], 
 "LIC. RVF.": [
  "(M. Cn.) Licin(n)ius Rufinus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "185", 
   "235", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "HILARIAN.": [
  "Q. Iulius Hilarianus", 
  {
   "curs. temp.": "pars posterior, sc. de cursu temporum (de mundi duratione)", 
   "pasch.": "pars prior, sc. de die paschae et mensis"
  }, 
  [
   "350", 
   "420", 
   "episcopus Africanus", 
   ""
  ]
 ], 
 "COMMON.": [
  "", 
  {
   "patr.": "commonitiones sanctorum patrum (sc. monachorum) e graeco versae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[ROG.]": [
  "", 
  {
   "[de Germ.]": "[de Germ.]"
  }, 
  [
   "", 
   "", 
   "", 
   "LEX de Germ."
  ]
 ], 
 "ASTER.": [
  "Asterius", 
  {
   "ad Renat.": "liber ad Renatum monachum"
  }, 
  [
   "350", 
   "431", 
   "episcopus Hieronymi familiaris", 
   ""
  ]
 ], 
 "BREV. EXPOS.": [
  "", 
  {
   "Verg. georg.": "brevis expositio Vergilii georgicorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAVL. PELL.": [
  "Paulinus Pellaeus", 
  {
   "praef.": "praefatio", 
   "orat.": "oratio", 
   "[praef.]": "[praef.]", 
   "euch.": "carmen, Eucharisticos deo sub ephemeridis meae textu"
  }, 
  [
   "376", 
   "459", 
   "", 
   ""
  ]
 ], 
 "PS. DAMAS.": [
  "Pseudo-Damasus", 
  {
   "epigr.": "epigrammata"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "CLAVD.": [
  "Claudius Claudianus", 
  {
   "carm. min": "carmina minora", 
   "carm. min. app.": "carminum minorum appendix (sc. qua spuria vel suspecta continentur)", 
   "rapt. Pros.": "de raptu Proserpinae fragmentum", 
   "carminum maiorum series": "carminum maiorum series"
  }, 
  [
   "370", 
   "404", 
   "", 
   ""
  ]
 ], 
 "CALID.": [
  "M. Calidius", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud FEST.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud FEST."
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "[FORTVN.]": [
  "", 
  {
   "[in Matth.]": "[in Matth.]"
  }, 
  [
   "", 
   "", 
   "", 
   "FORTVN. AQVIL. in euang."
  ]
 ], 
 "MELA": [
  "Pomponius Mela", 
  {
   "de chorographia": "de chorographia"
  }, 
  [
   "0", 
   "99", 
   "ex Hispania Tingenteritanus", 
   ""
  ]
 ], 
 "[MIRAC.]": [
  "", 
  {
   "[Theclae]": "miracula sanctae Theclae virginis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POMPON.": [
  "L. Pomponius Bononiensis", 
  {
   "Atell.": "fabularum Atellanarum fragmenta", 
   "[sat. frg.]": "[sat. frg.]"
  }, 
  [
   "-150", 
   "-50", 
   "", 
   ""
  ]
 ], 
 "[EDICT.]": [
  "", 
  {
   "[Ved. Poll.]": "[Ved. Poll.]"
  }, 
  [
   "", 
   "", 
   "", 
   "EDICT. procos."
  ]
 ], 
 "[PS. FAVST. REI.]": [
  "", 
  {
   "[symb.]": "tractatus de symbolo in codice vix recte Fausto vel Faustino tributus"
  }, 
  [
   "500", 
   "599", 
   "", 
   "EVSEB. GALLIC. hom. app."
  ]
 ], 
 "PLAVT.": [
  "Titus Macc(i)us Plautus", 
  {
   "Aul.": "Aulularia", 
   "Cas.": "Casina", 
   "Cist.": "Cistellaria", 
   "Pseud.": "Pseudolus", 
   "frg. inc.": "incertarum fabularum fragmenta", 
   "Truc.": "Truculentus", 
   "Merc.": "Mercator", 
   "Capt.": "Captivi", 
   "Mil.": "Miles gloriosus", 
   "Poen.": "Poenulus", 
   "Vid.": "Vidularia", 
   "Bacch.": "Bacchides", 
   "Curc.": "Curculio", 
   "Men.": "Menaechmi", 
   "Persa": "Persa", 
   "Trin.": "Trinummus", 
   "Epid.": "Epidicus", 
   "Asin.": "Asinaria", 
   "Rud.": "Rudens", 
   "Stich.": "Stichus", 
   "Most.": "Mostellaria", 
   "Amph.": "Amphitruo", 
   "Achar. frg.": "Acharistio (fragmentum)"
  }, 
  [
   "-254", 
   "-184", 
   "", 
   ""
  ]
 ], 
 "LEANDER": [
  "", 
  {
   "reg.": "regula (de institutione virginum et contemptu mundi)", 
   "hom.": "homilia in concilio Toletano III dicta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NOVATIAN.": [
  "Novatianus", 
  {
   "Cypr. epist.": "epistulae ad Cyprianum", 
   "cib. Iud.": "de cibis Iudaicis", 
   "trin.": "de trinitate"
  }, 
  [
   "200", 
   "258", 
   "presbyter Romanus", 
   ""
  ]
 ], 
 "CAES. STRAB.": [
  "C. Iulius Caesar Strabo (Vopiscus?)", 
  {
   "trag.": "tragoediarum fragmenta", 
   "orationum fragm. servatum apud PRISC. gramm.": "orationum fragm. servatum apud PRISC. gramm."
  }, 
  [
   "-130", 
   "-87", 
   "", 
   ""
  ]
 ], 
 "[EVG. TOLET.]": [
  "Eugenius <Toletanus>", 
  {
   "[carm.]": "carmina"
  }, 
  [
   "600", 
   "657", 
   "episcopus", 
   ""
  ]
 ], 
 "SVLP. RVF.": [
  "Ser. Sulpicius Rufus", 
  {
   "or. frg. Quint. inst.": "orationis fragm. servatum apud QVINT. inst.", 
   "Cic. fam.": "epistulae ad Ciceronem, v. CIC. fam.", 
   "frg. Gell.": "fragmenta varia, e. g. fragm. servatum apud GELL."
  }, 
  [
   "-106", 
   "-43", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "AFRAN.": [
  "L. Afranius", 
  {
   "com.": "comoediarum (sc. togatarum) fragmenta"
  }, 
  [
   "-150", 
   "-51", 
   "", 
   ""
  ]
 ], 
 "[EXPOS.]": [
  "", 
  {
   "[fid. Migne]": "expositio fidei edita Migne"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[VIGIL.]": [
  "", 
  {
   "[reg.]": "[reg.]"
  }, 
  [
   "", 
   "", 
   "", 
   "REGVLA orient."
  ]
 ], 
 "CHART.": [
  "", 
  {
   "lat. ant.": "chartae latinae antiquiores"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EVSEB. GALLIC.": [
  "Eusebius Gallicanus", 
  {
   "app.": "appendix, sc. 'sermones extravagantes, qui eundem ortum habere videntur'", 
   "hom.": "sc. collectio Gallicana homiliarum, quae in nonnullis codicibus variis Eusebiis ascribitur"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "BRVT.": [
  "M. Iunius Brutus", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.", 
   "epistulae servatae inter epistulas Ciceronis ad Brutum datas": "epistulae servatae inter epistulas Ciceronis ad Brutum datas"
  }, 
  [
   "-85", 
   "-42", 
   "Caesaris interfector", 
   ""
  ]
 ], 
 "MAXIMIN.": [
  "Maximinus", 
  {
   "[c. pag.]": "[c. pag.]", 
   "[c. haer.]": "[c. haer.]", 
   "[c. Iud.]": "[c. Iud.]", 
   "c. Ambr.": "contra Ambrosium dissertatio, sc. scholiorum codicis Paris", 
   "[serm.]": "[serm.]", 
   "Aug. coll. c. Maximin.": "Maximini cum Augustino disputantis verba", 
   "[hom.]": "[hom.]"
  }, 
  [
   "350", 
   "450", 
   "Arianorum episcopus, Augustini adversarius", 
   ""
  ]
 ], 
 "SCAEV. $1": [
  "(Q.) Cervidius Scaevola", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "CIC. FIL.": [
  "M. Tullius Cicero", 
  {
   "epistulae inter patris epistulas servatae, v. CIC. fam.": "epistulae inter patris epistulas servatae, v. CIC. fam."
  }, 
  [
   "-65", 
   "-1", 
   "M. filius", 
   ""
  ]
 ], 
 "CHILP.": [
  "Chilpericus", 
  {
   "hymn. Medard.": "hymnus in S. Medardum"
  }, 
  [
   "535", 
   "584", 
   "rex Merovingorum", 
   ""
  ]
 ], 
 "[IVS] $1": [
  "", 
  {
   "[hosp.]": "[hosp.]"
  }, 
  [
   "", 
   "", 
   "", 
   "TAB. hosp."
  ]
 ], 
 "[MAXIM.]": [
  "", 
  {
   "[ad Theoph.]": "[ad Theoph.]"
  }, 
  [
   "", 
   "", 
   "", 
   "MAX. epist."
  ]
 ], 
 "ARVS.": [
  "Arusianus Messius", 
  {
   "gramm.": "opus grammaticum, sc. exempla elocutionum ex Vergilio Sallustio Terentio Cicerone digesta per litteras alphabeti"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "OBSEQ.": [
  "Iulius Obsequens", 
  {
   "prodigiorum libri quae exstant": "prodigiorum libri quae exstant"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "NEBRID.": [
  "Nebridius", 
  {
   "Aug. epist.": "epistulae ad Augustinum"
  }, 
  [
   "300", 
   "390", 
   "grammaticus, Augustinus amicus", 
   ""
  ]
 ], 
 "PRISC. LYD.": [
  "Priscianus Lydus", 
  {
   "solut.": "solutionum ad Chosroem liber latine versus"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "CORNIF.": [
  "Q. Cornificius", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "-100", 
   "-42", 
   "", 
   ""
  ]
 ], 
 "TAB.": [
  "", 
  {
   "Albertini": "tabulae ligneae atramento inscriptae (quas E. Albertini primus perscrutatus est) respicientes fere fundorum Africanorum emptiones"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOD. MOPS.": [
  "Theodorus Mopsuestenus", 
  {
   "in Gal.": "commentarius in Pauli epistulas minores", 
   "[in psalm.]": "[in psalm.]", 
   "[epit. in psalm.]": "[epit. in psalm.]"
  }, 
  [
   "350", 
   "429", 
   "episcopus", 
   "IVLIAN. epit. in psalm."
  ]
 ], 
 "TAB. $6": [
  "", 
  {
   "hosp.": "tabulae patronatus, tesserae hospitii"
  }, 
  [
   "", 
   "", 
   "", 
   "(CIL V 4919)"
  ]
 ], 
 "ACAC.": [
  "Acacius <Constantinopolitanus>", 
  {
   "epist. Ver.": "ad Simplicium papam epistula, cuius versio latina collectione Veronensi servatur"
  }, 
  [
   "400", 
   "489", 
   "Patriarch von Konstantinopel", 
   ""
  ]
 ], 
 "CAEL. AVR.": [
  "Caelius Aurelianus", 
  {
   "diaet. pass.": "de speciali significatione diaeticarum passionum fragmentum", 
   "chron.": "tardae vel chronicae passiones", 
   "acut.": "celeres vel acutae passiones", 
   "gyn. frg.": "fragmenta ('ex libris responsionum de mulieribus') de gynaeciis a Rose collecta", 
   "[acut. exc.]": "excerpta q. d. ex acutarum passionum libris (sc. Aurelius, de acutis passionibus)", 
   "gyn.": "gynaeciorum Sorani e graeco versorum et retractatorum quae exstant", 
   "salut. praec.": "de salutaribus praeceptis q. d. fragmentum (e libris medicinalium responsionum sumptum)"
  }, 
  [
   "350", 
   "450", 
   "medicus methodicus ex Numidia Siccensis", 
   ""
  ]
 ], 
 "APON.": [
  "Ap(p)onius", 
  {
   "in canticum canticorum expositio": "in canticum canticorum expositio"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "PS. SALL.": [
  "scripta Sallustii", 
  {
   "rep.": "epistulae ad Caesarem senem de re publica", 
   "in Tull.": "invectiva in M. Tullium Ciceronem"
  }, 
  [
   "-54", 
   "50", 
   "", 
   ""
  ]
 ], 
 "BALB. $1": [
  "Balbus", 
  {
   "grom.": "expositio et ratio omnium formarum"
  }, 
  [
   "50", 
   "150", 
   "gromaticus", 
   ""
  ]
 ], 
 "RETIC.": [
  "Reticius", 
  {
   "Aug. c. Iulian. op. imperf.": "fragmenta"
  }, 
  [
   "250", 
   "350", 
   "episcopus Augustodunensis", 
   "e. g. fragm. servatum apud AVG. c. Iulian. op. imperf."
  ]
 ], 
 "PS. LEO M.": [
  "Pseudo-Leo Magnus", 
  {
   "humil.": "epistula ad Demetriadem virginem de vera humilitate"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "INDEX": [
  "", 
  {
   "person. Plaut. Capt.": "index personarum, quae in singulis comoediarum Plautin. et Terent. partibus prodeunt"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYS.": [
  "Dionysius Halicarnasensis", 
  {
   "ant.": "antiquitatum Romanarum"
  }, 
  [
   "-54", 
   "7", 
   "rhetor et historicus", 
   ""
  ]
 ], 
 "[MON. ANCYR.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "R. GEST. div. Aug."
  ]
 ], 
 "BRVTTED.": [
  "Bruttedius Niger", 
  {
   "hist.": "fragm. operis historici apud SEN. suas. servata"
  }, 
  [
   "-50", 
   "50", 
   "rhetor et historicus", 
   ""
  ]
 ], 
 "PHYSIOGN.": [
  "anonymus", 
  {
   "de physiognomonia liber": "de physiognomonia liber"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LVSC. LANVV.": [
  "Luscius Lanuvinus", 
  {
   "com.": "Thensauri palliatae fragmentum"
  }, 
  [
   "-200", 
   "-100", 
   "comicus", 
   ""
  ]
 ], 
 "PELAGON.": [
  "Pelagonius", 
  {
   "ars veterinaria": "ars veterinaria"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "MANIL. $1": [
  "L. (?) Manilius", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "-200", 
   "-100", 
   "", 
   ""
  ]
 ], 
 "MANIL.": [
  "M. Manilius", 
  {
   "astronomica": "astronomica"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "LVCIF.": [
  "Lucifer", 
  {
   "non conv.": "de non conveniendo cum haereticis", 
   "reg. apost.": "de regibus apostaticis", 
   "moriend.": "moriundum esse pro dei filio", 
   "non parc.": "de non parcendo in deum delinquentibus", 
   "epist. epistulae": "diverse", 
   "Athan.": "de Athanasio"
  }, 
  [
   "300", 
   "371", 
   "episcopus Caralitanus", 
   ""
  ]
 ], 
 "PS. BASS.": [
  "Pseudo-Bassus", 
  {
   "gramm.": "ars de metris"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "HERACL.": [
  "Heraclius", 
  {
   "Alc. Avit. epist.": "epistulae ad Alcimum Avitum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CODICILL.": [
  "", 
  {
   "codicilli C. Popilii Heraclae": "codicilli C. Popilii Heraclae"
  }, 
  [
   "", 
   "", 
   "", 
   "Ann\u00e9e \u00c9pigr. 1945 n. 136"
  ]
 ], 
 "SALL.": [
  "C. Sallustius Crispus", 
  {
   "epist.": "epistulae ex hist. excerptae", 
   "Mithr.": "epist. Mithridatis", 
   "Phil.": "or. Philippi", 
   "Catil.": "de coniuratione Catilinae", 
   "Pomp.": "epist. Cn. Pompei", 
   "Iug.": "de bello Iugurthino", 
   "Macri": "or. Macri trib. pleb.", 
   "or.": "orationes ex hist. excerptae", 
   "Lep.": "or. Lepidi consulis", 
   "hist.": "historiarum reliquiae", 
   "Cottae": "or. C. Cottae"
  }, 
  [
   "-86", 
   "-34", 
   "", 
   ""
  ]
 ], 
 "ALEX. TRALL.": [
  "Alexander <Trallianus>", 
  {
   "operum versio latina cum aliunde aucta tum contracta": "operum versio latina cum aliunde aucta tum contracta"
  }, 
  [
   "525", 
   "606", 
   "medicus graecus", 
   ""
  ]
 ], 
 "CE": [
  "", 
  {
   "carmina latina epigraphica": "carmina latina epigraphica"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. PALAEM.": [
  "Q. Remmius Palaemon", 
  {
   "ars": "ars"
  }, 
  [
   "0", 
   "100", 
   "", 
   ""
  ]
 ], 
 "CELERIN.": [
  "Celerinus", 
  {
   "epistula ad Lucianum": "epistula ad Lucianum"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "[HIL. (?)]": [
  "", 
  {
   "[hymn. de Christo]": "[hymn. de Christo]"
  }, 
  [
   "", 
   "", 
   "", 
   "PS. HIL. hymn. de Christo"
  ]
 ], 
 "PAP.": [
  "", 
  {
   "Rainer.": "in Corpore Papyrorum Raineri archiducis Austriae (C. P. R.) editae", 
   "Marini": "ed. Marini", 
   "Tj\u00e4der": "ed. Tj\u00e4der (cf. PAP. Marini)", 
   "Wessely": "ed. Wessely", 
   "Rylands": "Mancunii in bibliotheca, cui nomen est John Rylands Library, asservatae (P. Ryl.)", 
   "Sammelb.": "editae apud Preisigke/Bilabel/alios, Sammelbuch", 
   "Oxyrh.": "Oxyrhynchi repertae (P. Oxy.)", 
   "Berol.": "Berolinenses (B. G. U.)", 
   "Soc. Ital.": "ed. Societ\u00e0 italiana per la ricerca dei Papiri greci e latini (P. S. I.)", 
   "Michig.": "in Vniversitatis Michiganae collectione asservatae (P. Mich.)", 
   "Genav.": "Genavienses (P. Gen. lat.)", 
   "papyri\u00a0 (notae selectae)": "papyri\u00a0 (notae selectae)", 
   "Journ. Rom. Stud. 67,1977,52 l. 50": "in ephemeridibus editae, e. g. in Journ. Rom. Stud. 67 (1977) p. 52, lin. 50", 
   "Amherst": "in collectione Amherst de Hackney nobilis viri asservatae (P. Amh.)", 
   "mil. Fink": "militares ed. Fink (R. M. R.)", 
   "Corp.": "in Corpore Papyrorum Latinarum (C. P. L.) editae praeter eas, quae notis suis afferuntur, ut e. g. EPIST. Claud.", 
   "Britann.": "Londinienses in Museo Britannico asservatae (P. Lond.)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. ORIG.": [
  "Pseudo-Origenis", 
  {
   "hom. in Matth.": "homiliae in Matth. quattuor in homiliario Caroli Magni servatae", 
   "infant.": "homilia de infantibus ab Herode occisis", 
   "hom. Casin.": "homiliae in Matth. tres in cod. Casinensibus servatae", 
   "de Melch.": "sermo de Melchisedech", 
   "in psalm.": "expositio de psalmo", 
   "in Iob": "commentarii in Iob Ariani versio q. d.", 
   "tract.": "tractatus q. d. de libris sanctarum scripturarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AVF. NAM.": [
  "(P.) Aufidius Namusa", 
  {
   "fragm. servatum apud PRISC. gramm.": "fragm. servatum apud PRISC. gramm."
  }, 
  [
   "-100", 
   "-1", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "SYMM. $1": [
  "L. Aurelius Avianius Symmachus", 
  {
   "pater Symm. epist.": "epistula ad filium"
  }, 
  [
   "300", 
   "376", 
   "Q. pater", 
   ""
  ]
 ], 
 "[BREV.]": [
  "", 
  {
   "[fid. adv. Arian.]": "[fid. adv. Arian.]"
  }, 
  [
   "", 
   "", 
   "", 
   "CAES. AREL. brev."
  ]
 ], 
 "APPEND.": [
  "", 
  {
   "Visig.": "appendices duae legis Romanae Visigothorum (i. e. breviarii Alarici)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AQVILA": [
  "Iulius Aquila", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "150", 
   "250", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "ANON. $11": [
  "", 
  {
   "Vales.": "anonymi Valesiani pars posterior q. d. (complectens cap. 7\u201416)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FIN. METR.": [
  "", 
  {
   "gramm.": "quae sub inscriptione 'De finalibus metrorum' a Keil edita sunt"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MET. NEP.": [
  "Q. Caecilius Metellus Nepos", 
  {
   "Cic. fam.": "ad Ciceronem epistula"
  }, 
  [
   "-100", 
   "-55", 
   "cos. 57", 
   ""
  ]
 ], 
 "AVR. $1": [
  "imp. M. Aurelius", 
  {
   "Fronto": "epistulae ad Frontonem magistrum una cum eiusdem operibus servatae"
  }, 
  [
   "121", 
   "180", 
   "", 
   ""
  ]
 ], 
 "FLOR.": [
  "Florus (aut plures Flori)", 
  {
   "anth.": "carmina in anthologia latina Floro cuidam tributa", 
   "carm.": "carmen ad Hadrianum", 
   "epit.": "L. (?) Annaeus Florus, epitoma de Tito Livio q. d.", 
   "Char. gramm.": "Annius Florus, fragmenta apud CHAR. gramm. servata", 
   "Verg.": "P. Annius Florus, Vergilius orator an poeta (fragmentum)"
  }, 
  [
   "50", 
   "150", 
   "", 
   ""
  ]
 ], 
 "VICTORIN.": [
  "Victorinus", 
  {
   "Christ.": "carmen de Iesu Christo deo et homine"
  }, 
  [
   "400", 
   "499", 
   "poeta", 
   ""
  ]
 ], 
 "LYD.": [
  "Iohannes Lydus", 
  {
   "mag.": "de magistratibus"
  }, 
  [
   "490", 
   "560", 
   "", 
   ""
  ]
 ], 
 "[SER. SAMM.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "SER. med."
  ]
 ], 
 "FLAV.": [
  "Flavius", 
  {
   "hymn.": "hymnus"
  }, 
  [
   "500", 
   "591", 
   "episcopus Cabilonensis?", 
   ""
  ]
 ], 
 "LIV. ANDR.": [
  "Livius Andronicus", 
  {
   "carm. frg.": "carmen epicum, sc. Odusia", 
   "trag.": "tragoediarum fragmenta", 
   "com.": "comoediarum fragmenta"
  }, 
  [
   "-300", 
   "-201", 
   "", 
   "Homeri Odyssea e graeco versa"
  ]
 ], 
 "GLOSS.": [
  "", 
  {
   "Thesaurus glossarum emendatarum, sc. index alphabeticus glossarum coactarum in Corpus glossariorum latinorum": "Thesaurus glossarum emendatarum, sc. index alphabeticus glossarum coactarum in Corpus glossariorum latinorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IVLIAN. $2": [
  "Iulianus", 
  {
   "epit. novell.": "epitome novellarum Iustiniani"
  }, 
  [
   "300", 
   "399", 
   "iurisconsultus Constantinopolitanus", 
   ""
  ]
 ], 
 "MAECIAN.": [
  "L. Volusius Maecianus", 
  {
   "dig.": "fragmenta in digesta servata", 
   "distrib. 81": "distributio (opus metrologicum in fine mutilum)"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "LIC. TVR.": [
  "Licinius", 
  {
   "epist.": "epistula"
  }, 
  [
   "450", 
   "550", 
   "episcopus Turonensis", 
   ""
  ]
 ], 
 "FVLG.": [
  "Fabius Planciades Fulgentius Afer", 
  {
   "serm. ant.": "expositio sermonum antiquorum", 
   "Virg. cont.": "expositio Virgilianae continentiae secundum philosophos moralis", 
   "[Theb.]": "super Thebaiden (sc. Statii)", 
   "aet. mund.": "de aetatibus mundi et hominis (opus imperfectum?)", 
   "myth.": "mythologiae"
  }, 
  [
   "500", 
   "599", 
   "", 
   ""
  ]
 ], 
 "CAPER": [
  "Flavius Caper", 
  {
   "gramm.": "libelli de orthographia et de verbis dubiis (qui in codicibus perperam Capro tribuuntur, sed fortasse nonnulla e Capro hausta servant)", 
   "fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm.": "fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm."
  }, 
  [
   "150", 
   "250", 
   "grammaticus", 
   ""
  ]
 ], 
 "OSTRAC.": [
  "", 
  {
   "hac nota (sc. insuper indicata editione) afferri possunt ostraca (i. testae inscriptae), sed cum fere una cum inscriptionibus papyrisve edantur, saepius invenientur sub aliis notis": "hac nota (sc. insuper indicata editione) afferri possunt ostraca (i. testae inscriptae), sed cum fere una cum inscriptionibus papyrisve edantur, saepius invenientur sub aliis notis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. BASIL.": [
  "Pseudo-Basilius", 
  {
   "cons.": "de consolatione in adversis", 
   "ad fil.": "admonitio ad filium spiritualem q. d."
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "SVLP. SEV.": [
  "Sulpicius Severus", 
  {
   "dial.": "dialogi", 
   "epist.": "epistulae", 
   "Mart.": "vita S. Martini", 
   "chron.": "chronica", 
   "[epist. app.]": "[epist. app.]"
  }, 
  [
   "363", 
   "425", 
   "", 
   ""
  ]
 ], 
 "ACT. $1": [
  "acta \u00a0christiana", 
  {
   "Carp.": "acta martyrum Carpi, Pamfili (Papyli), Agathonicae (sub Marco Aurelio aut Decio; BHL 1622m), quae sequuntur exemplar quoddam graecum", 
   "Archel.": "Hegemonii cuiusdam (saec. IV1) acta Archelai (sc. disputatio Archelai episcopi adversus Manen haeresiarcham) e graeco versa", 
   "Phileae": "acta martyris Phileae Thmuitarum episcopi (fere 306; BHL 6799) sequentia exemplar graecum (cuius  fragmenta praebet Pap. Chester Beatty)", 
   "Petr.": "actorum Petri apostoli quae e graeco versa exstant (actus Petri cum Simone vel actus Vercellenses; BHL 6656)", 
   "Achat.": "acta Achatii (immo Acacii, qui vixit sub Decio; BHL 25), quae sequuntur exemplar quoddam graecum", 
   "Pauli": "actorum Pauli apostoli graecorum (fragmenta tan\u00adtum sunt servata) quae exstant latine", 
   "Iul.": "acta martyris Iulii veterani (sub Diocletiano; BHL 4555)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHOEBAD.": [
  "Phoebadius", 
  {
   "c. Arian.": "contra Arianos liber"
  }, 
  [
   "320", 
   "392", 
   "episcopus Aginnensis", 
   ""
  ]
 ], 
 "QVODV.": [
  "Quodvultdeus", 
  {
   "cant. nov.": "de cantico novo", 
   "symb.": "de symbolo", 
   "temp. barb.": "de tempore barbarico sermones duo", 
   "prom.": "liber promissionum et praedictorum dei", 
   "haer.": "adversus quinque haereses", 
   "fer.": "de ultima quarta feria", 
   "catacl.": "de cataclysmo", 
   "grat.": "de accedentibus ad gratiam", 
   "Aug. epist.": "epistulae ad Augustinum", 
   "c. Iud. pag. Ar.": "contra Iudaeos, paganos et Arianos", 
   "virtut. carit.": "de quattuor virtutibus caritatis", 
   "cant. Is.": "sermo de cantico Isaiae"
  }, 
  [
   "350", 
   "454", 
   "episcopus Carthaginiensis", 
   ""
  ]
 ], 
 "PS. SOL.": [
  "Pseudo-Solinus (fragmenta Solino adiuncta)", 
  {
   "add.": "additamenta codicum aliquot ad Solinum", 
   "Pont.": "fragm. carminis 'Ponticon' inscripti"
  }, 
  [
   "600", 
   "699", 
   "", 
   ""
  ]
 ], 
 "TRIFOL.": [
  "Trifolius", 
  {
   "epist.": "epistula ad Faustum senatorem"
  }, 
  [
   "500", 
   "599", 
   "presbyter", 
   ""
  ]
 ], 
 "DOCTR.": [
  "", 
  {
   "apost.": "doctrina apostolorum e graeco (sed non illius libri exstantis, qui Didach\u00e9h inscribitur) versa"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ENN.": [
  "Q. Ennius", 
  {
   "scaen.": "fragmenta scaenica", 
   "frg. inc.": "fragmenta incerti operis", 
   "frg. var.": "fragmenta varia (sc. et carminum et operum oratione soluta conscriptorum)", 
   "ann.": "annalium fragmenta", 
   "[trag.]": "tragoediarum fragmenta", 
   "[praetext.]": "praetextarum fragmenta", 
   "[com.]": "comoediarum (sc. palliatarum) fragmenta", 
   "sat.": "saturarum fragmenta"
  }, 
  [
   "-239", 
   "-169", 
   "", 
   ""
  ]
 ], 
 "BOETH.": [
  "Anicius Manlius Severinus Boethius", 
  {
   "mus.": "de institutione musica(e)", 
   "[in Porph. dial.]": "[in Porph. dial.]", 
   "syll. categ. introd.": "introductio ad syllogismos categoricos", 
   "in top. Cic.": "commentarii in Ciceronis topica", 
   "syll. hyp.": "de hypotheticis syllogismis", 
   "in categ. comm.": "in categorias Aristotelis commentarius", 
   "diff. top.": "de differentiis topicis", 
   "in Porph. comm.": "in Porphyrii isagogen commentarii", 
   "syll. categ.": "de syllogismo categorico", 
   "Porph. isag.": "Porphyrii isagoge e graeco versa", 
   "elench. soph.": "de sophisticis elenchis liber Aristotelis latine versus", 
   "subst. bon.": "quomodo substantiae in eo, quod sint, bonae sint", 
   "anal. pr.": "analytica priora Aristotelis latine versa", 
   "[anal. post.]": "analytica posteriora Aristotelis latine versa", 
   "divin.": "utrum pater et filius et spiritus sanctus de divinitate substantialiter praedicentur", 
   "top. Arist.": "topica Aristotelis latine versa", 
   "arithm.": "de institutione arithmetica", 
   "in herm. comm.": "in librum Aristotelis peri hermeneias commentarii", 
   "categ.": "categoriae Aristotelis latine versae", 
   "c. Eut.": "contra Eutychen et Nestorium", 
   "herm.": "peri hermeneias liber Aristotelis latine versus", 
   "trin.": "de trinitate", 
   "divis.": "de divisione", 
   "cons.": "philosophiae consolatio"
  }, 
  [
   "480", 
   "526", 
   "patricius", 
   ""
  ]
 ], 
 "MAXIM.": [
  "Maximianus", 
  {
   "eleg.": "elegiae"
  }, 
  [
   "450", 
   "550", 
   "poeta", 
   ""
  ]
 ], 
 "ISAAC": [
  "Isaac Iudaeus", 
  {
   "fid.": "de trinitate (fides Isatis; opusculum mutilum)"
  }, 
  [
   "840", 
   "932", 
   "Isaak (ben Salomon) Israeli, medicus et philosopus", 
   ""
  ]
 ], 
 "HOMER.": [
  "Homerus latinus vel Ilias latina (Baebio) Italico cuidam ascripta (sc. Iliados epitome latina)", 
  {}, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "HEMINA": [
  "L. Cassius Hemina", 
  {
   "hist.": "annalium fragmenta"
  }, 
  [
   "-199", 
   "-100", 
   "historicus", 
   ""
  ]
 ], 
 "AVSON.": [
  "D. Magnus Ausonius Burdigalensis", 
  {
   "Symm. epist.": "epistula ad Symmachum", 
   "carmina???": "carmina???", 
   "Mos.": "Mosella", 
   "rhop.": "oratio (sc. ad deum) versibus rhopalicis"
  }, 
  [
   "310", 
   "395", 
   "", 
   ""
  ]
 ], 
 "CALDON.": [
  "Caldonius", 
  {
   "epistulae ad Cyprianum": "epistulae ad Cyprianum"
  }, 
  [
   "200", 
   "250", 
   "", 
   ""
  ]
 ], 
 "PS. THEOPHIL.": [
  "Pseudo-Theophilus Antiochenus", 
  {
   "in Ioh.": "commentarius in quattuor euangelia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. CIC.": [
  "Pseudo-Cicero", 
  {
   "epist. ad Oct.": "epistula ad Octavianum", 
   "exil.": "oratio pridie quam in exilium iret", 
   "in Sall.": "in C. Sallustium Crispum invectiva"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "NVX": [
  "", 
  {
   "nux elegia pseudovidiana": "nux elegia pseudovidiana"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "Q. SCAEV.": [
  "Q. Mucius Scaevola ('pontifex')", 
  {
   "dig.": "fragmenta in digesta servata", 
   "Gell.": "fragmenta alibi servata"
  }, 
  [
   "-140", 
   "-82", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "ANTIDOT.": [
  "", 
  {
   "app.": "antidotariorum appendix", 
   "Brux.": "antidotaria duo codicis Bruxellensis 1342\u201450", 
   "frg. phys.": "fragmentum physicum q. d. una cum antidotariis traditum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COLLECT. $1": [
  "", 
  {
   "ad psalm.": "collectae, i. orationes dictae ad (sc. post) singulos psalmos", 
   "A 150": "Africana series, ad psalm. 150", 
   "R 150": "Romana series, ad psalm. 150", 
   "H 134": "Hispana series, ad psalm. 134"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IND.": [
  "", 
  {
   "Paul. Pelag.": "index Pelagianus epistularum Paulinarum", 
   "II Cor. A": "indices librorum novi testamenti, e. g. epistulae II ad Corinthios, series codicis A et al.", 
   "bibl.": "indices libris biblicis singulis vel librorum seriei cuidam antepositi", 
   "Paul. antipelag. Hebr.": "indices antipelagiani epistularum Paulinarum, epist. ad Hebraeos", 
   "Lucr.": "capitulorum indices aliorum scriptorum operibus antepositi, e. g. index Lucretii", 
   "capp.": "indices capitulorum sim., qui ab anonymis ante saec. VII confecti in codicibus quibusdam antepositi sunt operibus nonnullis", 
   "psalm. I": "indices libri psalmorum, series I", 
   "Iob": "indices librorum veteris testamenti, e. g. libri Iob"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "REG. $1": [
  "", 
  {
   "urb.": "de regionibus urbis Romae libelli recensio altera"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DECL.": [
  "", 
  {
   "in Catil.": "declamatio in L. Sergium Catilinam Ciceroni subdita"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HOST.": [
  "Hostius", 
  {
   "carm.": "carmen (bellum Histricum)"
  }, 
  [
   "-200", 
   "-101", 
   "", 
   ""
  ]
 ], 
 "PASCH.": [
  "", 
  {
   "Vat. chron. I": "Vaticanum", 
   "paschale": "paschale", 
   "Ciz. chron. I": "Cizense", 
   "Camp. chron. I": "Campanum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAVL. NOL.": [
  "Pontius Meropius Paulinus Nolanus", 
  {
   "[app. exc. Bob.]": "[app. exc. Bob.]", 
   "epist.": "epistulae", 
   "[pass. Genes.]": "[pass. Genes.]", 
   "[carm. app.]": "[carm. app.]", 
   "[epist. app.]": "[epist. app.]", 
   "carm.": "carmina"
  }, 
  [
   "354", 
   "431", 
   "episcopus", 
   "PS. PAVL. NOL. exc. Bob."
  ]
 ], 
 "POMER.": [
  "Iulianus Pomerius", 
  {
   "de vita contemplativa": "de vita contemplativa"
  }, 
  [
   "450", 
   "550", 
   "presbyter Arelatensis", 
   ""
  ]
 ], 
 "[PVP.]": [
  "Pupius", 
  {
   "[epigr.]": "epigramma"
  }, 
  [
   "", 
   "", 
   "", 
   "CARM. Schol. Hor. epist."
  ]
 ], 
 "MAR. AVENT.": [
  "Marius", 
  {
   "chron.": "chronica, quibus Prosperi opus ad ann. 581 producitur"
  }, 
  [
   "530", 
   "594", 
   "episcopus Aventicensis", 
   ""
  ]
 ], 
 "PARTHEN.": [
  "Parthenius", 
  {
   "epist.": "epistula ad Sigesteum comitem"
  }, 
  [
   "500", 
   "599", 
   "presbyter Africanus", 
   ""
  ]
 ], 
 "TAC.": [
  "(P.) Cornelius Tacitus", 
  {
   "Agr.": "de vita Iulii Agricolae", 
   "ann.": "annalium (ab excessu divi Augusti)", 
   "Germ.": "Germania (de origine et situ Germanorum)", 
   "hist.": "historiae", 
   "dial.": "dialogus de oratoribus"
  }, 
  [
   "58", 
   "120", 
   "", 
   ""
  ]
 ], 
 "EDICT. $10": [
  "", 
  {
   "procos. (Inscr. Ephes. Wankel 19A)": "edicta proconsulum, e. g. Paulli Fabii Persici procos. Asiae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EDICT. $11": [
  "", 
  {
   "reg. Goth. de pecor. (CIL IX 2826)": "edictum regis Gothorum de pecoribus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EDICT. $12": [
  "", 
  {
   "de salut. et sport. Num. (CIL VIII 17896)": "edictum Vlpii Marisciani consularis provinciae Numidiae de ordine salutationis sportularumque"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EDICT. $13": [
  "", 
  {
   "Theodor.": "edictum Theodorici q. d., sc. Theoderico Magno ascriptum (rectene?)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "BACHIAR.": [
  "Bachiarius", 
  {
   "repar. laps.": "de reparatione lapsi", 
   "fid.": "de fide", 
   "[epist. Migne suppl.]": "[epist. Migne suppl.]"
  }, 
  [
   "350", 
   "450", 
   "scriptor ecclesiasticus (Gallaeciae?)", 
   ""
  ]
 ], 
 "TITIVS": [
  "C. Titius", 
  {
   "or. frg. Macr. Sat.": "fragm. orationis de lege Fannia servatum apud MACR. Sat."
  }, 
  [
   "-200", 
   "-100", 
   "", 
   ""
  ]
 ], 
 "PRAEF. $1": [
  "", 
  {
   "pasch.": "prologus computi paschalis codicis Coloniensis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ERACL.": [
  "Eraclius", 
  {
   "serm.": "sermones"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICET.": [
  "Nicetas <Remesianensis>", 
  {
   "appell.": "de diversis appellationibus Iesu Christo convenientibus", 
   "symb.": "explanatio symboli", 
   "spir.": "de spiritus sancti potentia", 
   "[symb. frg.]": "[symb. frg.]", 
   "vigil.": "de vigiliis servorum dei", 
   "[virg. laps. 52 p. 131,15 B.]": "[virg. laps. 52 p. 131,15 B.]", 
   "virg. laps.": "ad virginem lapsam", 
   "[hymn.]": "[hymn.]", 
   "fid.": "de ratione fidei", 
   "psalm.": "de psalmodiae bono sive de utilitate hymnorum", 
   "compet.": "librorum VI ad competentes fragmenta"
  }, 
  [
   "350", 
   "414", 
   "episcopus Dacus", 
   ""
  ]
 ], 
 "PS. ASPER": [
  "Pseudo-Asper (Aemilius Asper?)", 
  {
   "suppl.": "ars edita in supplemento Grammaticorum latinorum", 
   "artes grammaticae": "artes grammaticae"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "PONT.": [
  "Pontius", 
  {
   "vita Cypr.": "vita Cypriani"
  }, 
  [
   "200", 
   "299", 
   "diaconus Carthaginiensis", 
   ""
  ]
 ], 
 "DAMIG.": [
  "", 
  {
   "lapid.": "liber Damigeronis (vel Euacis) de lapidibus q. d. (sequitur exempla graeca)"
  }, 
  [
   "100", 
   "199", 
   "", 
   ""
  ]
 ], 
 "ATELL.": [
  "", 
  {
   "inc.": "Atellanarum poetae incerti"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[BALB. ET OPP.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "BALB. Cic. Att."
  ]
 ], 
 "MIN. FEL.": [
  "M. Minucius Felix", 
  {
   "Octavius": "Octavius"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "GANN.": [
  "Gannius (vel Gannii) quidam", 
  {
   "carm. frg.": "carminum fragmenta a Prisciano servata", 
   "Paul. Fest.": "fragm. servatum apud PAVL. FEST."
  }, 
  [
   "100", 
   "199", 
   "", 
   ""
  ]
 ], 
 "HYG. $1": [
  "C. Iulius Hyginus", 
  {
   "Char. gramm.": "operum reliquiae a scriptoribus servatae, e. g. fragm. apud CHAR. gramm."
  }, 
  [
   "-60", 
   "4", 
   "Augusti libertus", 
   ""
  ]
 ], 
 "HYG. $3": [
  "Hyginus minor", 
  {
   "lim. grom.": "de limitibus constituendis opus gromaticum"
  }, 
  [
   "50", 
   "150", 
   "gromaticus", 
   ""
  ]
 ], 
 "CORNELIA": [
  "Cornelia", 
  {
   "epist. frg.": "epistula"
  }, 
  [
   "-190", 
   "-100", 
   "mater Gracchorum", 
   ""
  ]
 ], 
 "PRIMAS.": [
  "Primasius", 
  {
   "in apoc.": "commentarius in apocalypsin"
  }, 
  [
   "500", 
   "599", 
   "episcopus Hadrumetinus", 
   ""
  ]
 ], 
 "IVL. VICT.": [
  "C. Iulius Victor", 
  {
   "rhet.": "ars rhetorica"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "PS. FVLG. RVSP.": [
  "Pseudo-Fulgentius Ruspensis", 
  {
   "[praedest.]": "[praedest.]", 
   "serm.": "sermones aut in codicibus aut ab editoribus perperam Fulgentio ascripti", 
   "pro fid.": "pro fide catholica (vel de trinitate)"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "PS. VIGIL. THAPS.": [
  "Pseudo-Vigilius Thapsensis", 
  {
   "solut. obi. Arian.": "solutiones obiectionum Arianorum", 
   "[c. Arian.]": "epitome operis q. e. VIGIL. THAPS. c. Arian.", 
   "trin.": "de trinitate", 
   "c. Marivad.": "contra Marivadum (Varimadum) Arianum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FERRAND.": [
  "(Fulgentius?) Ferrandus", 
  {
   "epist.": "epistulae", 
   "canon.": "breviatio canonum (sc. conciliorum Graecorum et Africae)"
  }, 
  [
   "500", 
   "547", 
   "diaconus Carthaginiensis", 
   ""
  ]
 ], 
 "TRACT.": [
  "", 
  {
   "de indur. cord. Phar.": "tractatus de induratione cordis Pharaonis (vix Pelagio tribuendus)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IAVOL.": [
  "C. Octavius Tidius Tossianus L. Iavolenus Priscus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "0", 
   "99", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "TYCON.": [
  "Tyconius Afer Donatista", 
  {
   "in apoc.": "fragmenta Taurinensia commentarii in apocalypsin", 
   "reg.": "liber regularum"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "HYG. $2": [
  "Hyginus maior", 
  {
   "grom.": "operis gromatici de limitibus, de condicionibus agrorum, de generibus controversiarum fragmenta"
  }, 
  [
   "50", 
   "150", 
   "gromaticus", 
   ""
  ]
 ], 
 "DOM. MARS.": [
  "Domitius Marsus", 
  {
   "carm. frg.": "carminum reliquiae a Baehrens et Morel collectae", 
   "epigr. Bob.": "epigrammata duo servata inter epigrammata Bobiensia", 
   "fragmenta operis pedestris servata apud QVINT. inst.": "fragmenta operis pedestris servata apud QVINT. inst."
  }, 
  [
   "-50", 
   "25", 
   "poeta", 
   ""
  ]
 ], 
 "LONGIN.": [
  "Longinianus", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "408", 
   "paganus", 
   ""
  ]
 ], 
 "VELL.": [
  "Velleius Paterculus", 
  {
   "historiae Romanae": "historiae Romanae"
  }, 
  [
   "-20", 
   "30", 
   "", 
   ""
  ]
 ], 
 "CELS.": [
  "A. Cornelius Celsus", 
  {
   "medicina": "medicina", 
   "artes": "artes", 
   "ceterarum operis partium fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.": "ceterarum operis partium fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst."
  }, 
  [
   "-25", 
   "50", 
   "", 
   ""
  ]
 ], 
 "POMP.": [
  "Cn. Pompeius Magnus", 
  {
   "Cic. Att.": "epistulae fere ad Ciceronem"
  }, 
  [
   "106", 
   "48", 
   "", 
   "v. CIC. Att."
  ]
 ], 
 "AMBROSIAST.": [
  "Ambrosiaster", 
  {
   "in Gal.": "in epistulae ad Galatas", 
   "in Rom. prol.": "in epistulam ad Romanos, prologus vel argumentum"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "SIDON.": [
  "C. Sollius Apollinaris Sidonius Clarimontanus", 
  {
   "carm.": "carmen", 
   "epist.": "epistulae", 
   "epist. (carm. 22)": "epistula carmini 22 adnexa"
  }, 
  [
   "431", 
   "479", 
   "episcopus", 
   ""
  ]
 ], 
 "RVT. LVP.": [
  "P. Rutilius Lupus", 
  {
   "schemata dianoeas et lexeos": "schemata dianoeas et lexeos"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "CASSIOD.": [
  "Flavius Magnus Aurelius Cassiodorus", 
  {
   "hist.": "historia ecclesiastica tripartita q. d.", 
   "var.": "variae (sc. epistulae, formulae sim. a Cassiodoro officiis variis fungente conscripta)", 
   "chron. II": "chronica, vol. II", 
   "praef.": "praefatio", 
   "not.": "index notarum", 
   "[Didym.]": "[Didym.]", 
   "anecd. Hold.": "anecdoton Holderi q. d., sc. excerpta ex Cassiodori libello de ordine generis Cassiodororum", 
   "prol. bibl.": "prologus (c. additamentis) Cassiodori ad librorum biblicorum codicem grandiorem q. d. codice Amiatino servatus", 
   "or. frg.": "orationum reliquiae", 
   "Ios. antiq.": "Flavii Iosephi antiquitates Iudaicae curis Cassiodori e graeco versae", 
   "[art. 7 p. 1220A]": "[art. 7 p. 1220A]", 
   "gramm.": "de orthographia", 
   "in psalm.": "expositio psalmorum", 
   "compl. in apoc.": "complexiones in epistolis apostolorum et actibus apostolorum et apocalypsi", 
   "praef. ord.": "praefatio, ordo dicendorum", 
   "[art. 7 p. 357 Mai]": "[art. 7 p. 357 Mai]", 
   "[rhet.]": "de rhetorica", 
   "inst.": "institutiones", 
   "Clem. Alex. adumbr.": "Clementis Alexandrini adumbrationes in epistulas canonicas", 
   "Ios. c. Ap.": "Flavii Iosephi de Iudaeorum vetustate sive contra Apionem (opus curis Cassiodori e graeco versum)", 
   "anim.": "de anima"
  }, 
  [
   "485", 
   "580", 
   "Senator", 
   ""
  ]
 ], 
 "RVSTIC. $1": [
  "Rusticus", 
  {
   "epist. ad Eucher.": "epistula ad Eucherium"
  }, 
  [
   "", 
   "", 
   "presbyter", 
   ""
  ]
 ], 
 "EMPOR.": [
  "Emporius", 
  {
   "rhet.": "de ethopoeia al.  quae exstant (excerpta?)"
  }, 
  [
   "500", 
   "599", 
   "rhetor", 
   ""
  ]
 ], 
 "CHRYSOST.": [
  "Iohannes Chrysostomus", 
  {
   "ad neoph.": "sermo ad neophytos", 
   "hom.": "homiliae et alia opera in editione Basil. collecta", 
   "repar. laps.": "de reparatione lapsi"
  }, 
  [
   "349", 
   "407", 
   "", 
   "operum versiones latinae anon."
  ]
 ], 
 "PETR. CHRYS.": [
  "Petrus Chrysologus", 
  {
   "[serm. de or.]": "[serm. de or.]", 
   "epist. Conc. S II": "epistula ad Eutychen presbyterum", 
   "serm.": "collectio sermonum Feliciana q. d."
  }, 
  [
   "380", 
   "451", 
   "episcopus Ravennas", 
   ""
  ]
 ], 
 "FRONTIN.": [
  "Sex. Iulius Frontinus", 
  {
   "grom.": "excerpta e Frontini opere quodam gromatico", 
   "aq.": "de aquaeductu urbis Romae commentarius", 
   "strat.": "strategemata"
  }, 
  [
   "35", 
   "103", 
   "", 
   ""
  ]
 ], 
 "GRACCH.": [
  "C. Sempronius Gracchus", 
  {
   "or. frg. Gell.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud GELL."
  }, 
  [
   "-153", 
   "-121", 
   "", 
   ""
  ]
 ], 
 "[CONCORD.]": [
  "", 
  {
   "[Paul. epist. Vulg. (cod. Fuld. al. )]": "[Paul. epist. Vulg. (cod. Fuld. al. )]"
  }, 
  [
   "", 
   "", 
   "", 
   "IND. capp. bibl. Paul. Pelag. 56"
  ]
 ], 
 "CVLEX": [
  "", 
  {
   "culex, carmen appendicis Vergilianae": "culex, carmen appendicis Vergilianae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLIN.": [
  "C. Plinius Secundus (vulgo Plinius maior)", 
  {
   "dub. serm. frg. Char. gramm.": "dubii sermonis librorum fragmenta, e. g. fragm. servatum apud CHAR. gramm.", 
   "nat.": "naturalis historia"
  }, 
  [
   "23", 
   "79", 
   "", 
   ""
  ]
 ], 
 "PROB.": [
  "M. Valerius Probus?", 
  {
   "app. (gramm. IV)": "appendix Probi", 
   "[schol. Iuv.]": "scholia in IVV.", 
   "scripta Probiana": "scripta Probiana", 
   "litt. sing.": "de litteris singularibus fragmenta", 
   "inst. (gramm. IV)": "instituta artium", 
   "cath. (gramm. IV)": "catholica nominum et verborum", 
   "nom. (gramm. IV)": "de nomine", 
   "Verg.": "commentarius in VERG. ecl. et georg.", 
   "vita Pers.": "vita Persii de commentario Probi Valerii sublata"
  }, 
  [
   "0", 
   "99", 
   "grammaticus", 
   ""
  ]
 ], 
 "STAT. $1": [
  "", 
  {
   "eccl. ant.": "statuta ecclesiae antiqua"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IGNAT.": [
  "Ignatius", 
  {
   "Rom. Colbert.": "epistula ad Romanos, quae graeca nondum interpolata martyrio Colbertino vel Antiocheno q. d. inserta una cum hoc martyrio latine versa est (sc. versio re vera vetus)", 
   "epistulae latine versae": "epistulae latine versae", 
   "[ad Rom. vel PS. IGNAT. Rom.]": "epistula ad Romanos (sc. versio vetus vel vetustior q. d. sequens recensionem graecam iam interpolatam)"
  }, 
  [
   "50", 
   "117", 
   "episcopus Antiochenus", 
   ""
  ]
 ], 
 "LENT.": [
  "P. Cornelius Lentulus Spinther", 
  {
   "Cic. fam.": "epistulae"
  }, 
  [
   "-100", 
   "-46", 
   "", 
   ""
  ]
 ], 
 "EVSEB.": [
  "Eusebius Nicomediensis", 
  {
   "ad Paul.": "epistula ad Paulinum (conscripta fere 321) bis e graeco versa"
  }, 
  [
   "250", 
   "341", 
   "", 
   ""
  ]
 ], 
 "IOH. BICL.": [
  "Iohannes Biclarensis", 
  {
   "chron. II": "continuatio chronicorum Victoris Tonnennensis, vol. II"
  }, 
  [
   "550", 
   "620", 
   "abbas Biclarensis Hispanus", 
   ""
  ]
 ], 
 "PS. THEOD. PRISC.": [
  "Theodori Prisciani appendix", 
  {
   "add.": "additamenta ad THEOD. PRISC.", 
   "simpl. med.": "de simplici medicina liber", 
   "ves. vit.": "de vesicae vitiis capitulum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FASTID.": [
  "Fastidiosus Arianus", 
  {
   "serm.": "sermo additus epistulae Victoris ad Fulgentium Ruspensem"
  }, 
  [
   "500", 
   "599", 
   "", 
   ""
  ]
 ], 
 "CAEL. SAB.": [
  "Cn. Arulenus Caelius Sabinus", 
  {
   "Gell.": "fragmenta a scriptoribus servata, e. g. fragm. apud GELL."
  }, 
  [
   "0", 
   "99", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "[AEM. PAVL.]": [
  "L. Aemilius Paullus Macedonicus", 
  {
   "fragmentum orationis 167 a. Chr. habitae apud VAL. MAX. traditum": "fragmentum orationis 167 a. Chr. habitae apud VAL. MAX. traditum"
  }, 
  [
   "-229", 
   "-160", 
   "", 
   "VAL. MAX. 5,10,2"
  ]
 ], 
 "AVIT. BRAC.": [
  "Avitus <Bracarensis>", 
  {
   "Lucian. epist.": "epistulae, quam scripsit eodem tempore Lucianus presbyter de revelatione corporis sancti Stephani protomartyris, versiones latinae", 
   "ad. Palc.": "epistula ad Palconium episcopum Bracarensem, quam Avitus Luciani epistulae versioni suae addidit", 
   "rec. B": "recensio B (sc. altera versio a nescio quo confecta)", 
   "rec. A": "recensio (immo versio) A"
  }, 
  [
   "450", 
   "550", 
   "presbyter", 
   ""
  ]
 ], 
 "FORMA": [
  "", 
  {
   "urbis (CIL VI 29844)": "forma urbis Romae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALYP.": [
  "Alypius", 
  {
   "commonitorii fragmentum": "commonitorii fragmentum"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "GALL. $2": [
  "C. Aelius Gallus", 
  {
   "Fest.": "operis de significatione verborum, quae ad ius civile pertinent, fragmenta a scriptoribus servata, e. g. fragm. apud FEST."
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "RVT. RVF.": [
  "P. Rutilius Rufus", 
  {
   "or. frg. Diom. gramm.": "orationum fragmenta, e. g. fragm. servatum apud DIOM. gramm.", 
   "hist.": "de vita sua"
  }, 
  [
   "-158", 
   "-78", 
   "", 
   ""
  ]
 ], 
 "[GALLICAN.]": [
  "Vulcacius Gallicanus", 
  {}, 
  [
   "250", 
   "350", 
   "", 
   "HIST. AVG."
  ]
 ], 
 "GALL. $1": [
  "C. Asinius Gallus", 
  {
   "epigr.": "epigramma"
  }, 
  [
   "-41", 
   "33", 
   "", 
   ""
  ]
 ], 
 "SISENNA": [
  "L. Cornelius Sisenna", 
  {
   "[frg. inc.]": "[frg. inc.]", 
   "Miles. frg.": "Milesiarum latine versarum reliquiae", 
   "hist.": "historiae"
  }, 
  [
   "-118", 
   "-67", 
   "", 
   "hist."
  ]
 ], 
 "CHAR.": [
  "Aurelius Arcadius Charisius", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "250", 
   "350", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "PANEG. $1": [
  "", 
  {
   "in Mess.": "panegyricus in Messallam Corvinum Tibullo suppositus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATHAN.": [
  "Athanasius", 
  {
   "Lucif. epist.": "epistula ad Luciferum", 
   "[epist. ad Epict.]": "epistula ad Epictetum", 
   "epist. ad Potam.": "epistulae ad Potamium (genuinae?) fragmentum ab Alcuino allatum"
  }, 
  [
   "298", 
   "373", 
   "episcopus Alexandrinus", 
   ""
  ]
 ], 
 "VERR. FL.": [
  "M. Verrius Flaccus", 
  {
   "frg. Gell.": "fragmenta fere grammatica, e. g. fragm. servatum apud GELL."
  }, 
  [
   "-60", 
   "37", 
   "", 
   ""
  ]
 ], 
 "VALENT.": [
  "Valentinus Hadrumetinus", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "abbas", 
   ""
  ]
 ], 
 "RVF. FEST.": [
  "Rufius (?) Festus", 
  {
   "breviarium (rerum gestarum populi Romani)": "breviarium (rerum gestarum populi Romani)"
  }, 
  [
   "300", 
   "380", 
   "", 
   ""
  ]
 ], 
 "EVTR.": [
  "Eutropius", 
  {
   "breviarium ab urbe condita": "breviarium ab urbe condita"
  }, 
  [
   "300", 
   "390", 
   "", 
   ""
  ]
 ], 
 "APVL.": [
  "Apuleius Madaurensis Afer", 
  {
   "apol.": "apologia (pro se de magia liber)", 
   "Plat.": "de Platone et eius dogmate", 
   "flor.": "florida", 
   "mund.": "de mundo (sc. Pseudoaristotelis liber \u03a0\u03b5\u03c1\u1f76 \u039a\u03cc\u03c3\u03bc\u03bf\u03c5 latine versus ac retractatus)", 
   "carm. frg.": "carminum fragmenta", 
   "Socr.": "de deo Socratis", 
   "met.": "metamorphoses (vulgo asinus aureus)", 
   "frg.": "fragmenta post alios a Beaujeu collecta"
  }, 
  [
   "123", 
   "170", 
   "", 
   ""
  ]
 ], 
 "[BASS. GELL.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "GAV. BASS. Gell."
  ]
 ], 
 "SCAVR. $1": [
  "M. Aemilius Scaurus", 
  {
   "or. frg. Char. gramm.": "orationum fragmenta, e. g. fragm. servatum apud CHAR. gramm.", 
   "hist.": "de vita sua"
  }, 
  [
   "-50", 
   "34", 
   "", 
   ""
  ]
 ], 
 "[IVS] $2": [
  "", 
  {
   "[magistr. Pompel.]": "[magistr. Pompel.]"
  }, 
  [
   "", 
   "", 
   "", 
   "EPIST. leg. iurid."
  ]
 ], 
 "CONC.": [
  "", 
  {
   "Aquil. a. 381": "acta concilii Aquileiensis anno 381 habiti", 
   "Carth. a. 416 Aug. epist.": "concilii Carthaginiensis anno 416 habiti epistula, v. AVG. epist.", 
   "Arel. a. 314": "acta concilii Arelatensis anno 314 habiti", 
   "Bagai. a. 394": "fragmenta sententiarum concilii Bagaiensis anno 394 a Donatistis habiti ab Augustino tradita", 
   "Carth. a. 411": "acta concilii Carthaginiensis anno 411 habiti, immo gesta collationis episcoporum catholicorum cum Donatistis (in fine mutila, sed exstant tituli et Augustini breviculus [AVG. coll. c. Don.])", 
   "Carth. a. 345/348": "acta concilii Carthaginiensis inter annos 345 et 348 habiti (?)", 
   "Rom. subdit. a. 325": "acta concilii Romani subditivi anni 325", 
   "Milevit. a. 416 Aug. epist.": "concilii Milevitani anno 416 habiti epistula, v. AVG. epist.", 
   "Rom. a. 595": "concilii Romani anno 595 habiti decretum", 
   "acta sim. conciliorum synodorum sim., sive oecumenicarum sive particularium": "acta sim. conciliorum synodorum sim., sive oecumenicarum sive particularium", 
   "[Rom. a. 381]": "concilii Romani anno 381 (immo 378) habiti epistula", 
   "Rom. a. 531": "acta concilii Romani anno 531 habiti", 
   "Rom. a. 465": "acta concilii Romani anno 465 habiti (decretum synodale Hilari papae)", 
   "Aurel. a. 511": "acta concilii Aurelianensis anno 511 habiti", 
   "Rom. a. 502": "acta conciliorum Romanorum annis 499, 501, 502 habitorum, conc. anni 502", 
   "Brac. a. 561": "acta conciliorum Bracarensium, conc. anno 561 habitum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CANNVT.": [
  "P. Cannutius", 
  {
   "orationum fragm. servatum apud PRISC. gramm.": "orationum fragm. servatum apud PRISC. gramm."
  }, 
  [
   "-106", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "COEL.": [
  "L. Coelius Antipater", 
  {
   "hist.": "librorum de bello Punico secundo fragmenta"
  }, 
  [
   "-200", 
   "-101", 
   "historicus", 
   ""
  ]
 ], 
 "TREBON.": [
  "C. Trebonius", 
  {
   "Cic. fam.": "epistula ad Ciceronem"
  }, 
  [
   "-90", 
   "-43", 
   "", 
   ""
  ]
 ], 
 "BVC.": [
  "", 
  {
   "Eins.": "bucolica Einsidlensia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IVS IVR.": [
  "", 
  {
   "milit. Gell.": "ius iurandum militare servatum apud GELL", 
   "ius iurandum": "ius iurandum", 
   "Arit. (CIL II 172)": "ius iurandum, quo cives Aritienses in verba imp. Caligulae iuraverunt"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "STEMMA": [
  "", 
  {
   "agn.": "stemma agnationis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CASS. PARM.": [
  "C. Cassius Parmensis", 
  {
   "epistula ad Ciceronem": "epistula ad Ciceronem", 
   "fragm. servatum apud SVET. Aug.": "fragm. servatum apud SVET. Aug."
  }, 
  [
   "-74", 
   "-31", 
   "poeta", 
   ""
  ]
 ], 
 "LVCAN.": [
  "M. Annaeus Lucanus", 
  {
   "frg.": "carminum fragmenta", 
   "bellum civile (Pharsalia; quod carmen epicum Lucanus imperfectum reliquit)": "bellum civile (Pharsalia; quod carmen epicum Lucanus imperfectum reliquit)"
  }, 
  [
   "39", 
   "65", 
   "", 
   ""
  ]
 ], 
 "CORIPP.": [
  "Fl. Cresconius Corippus Afer", 
  {
   "Anast.": "panegyricus in laudem Anastasii quaestoris et magistri (traditus inter Iust. praef. et Iust.)", 
   "Ioh.": "Iohannis seu de bellis Libycis (sc. a Iohanne Troglita gestis; carmen praecipue in fine mutilum)", 
   "Iust.": "in laudem Iustini Augusti, sc. Minoris (carmen praecipue in fine mutilum; cf. Anast.)"
  }, 
  [
   "500", 
   "570", 
   "", 
   ""
  ]
 ], 
 "MOYS.": [
  "Moyses et socii", 
  {
   "Cypr. epist.": "epistula ad Cyprianum"
  }, 
  [
   "200", 
   "299", 
   "presbyter Romanus", 
   ""
  ]
 ], 
 "IVLIAN. $1": [
  "Salvius Iulianus", 
  {
   "dig.": "fragmenta in digesta (et alibi) servata"
  }, 
  [
   "108", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "PHILVM.": [
  "Philumenus", 
  {
   "med.": "de medicina, versio Latina"
  }, 
  [
   "150", 
   "250", 
   "medicus", 
   ""
  ]
 ], 
 "AVR. OPIL.": [
  "Aurelius Opillus", 
  {
   "fragm. servatum apud GELL.": "fragm. servatum apud GELL."
  }, 
  [
   "-150", 
   "-50", 
   "grammaticus", 
   ""
  ]
 ], 
 "TVRRIB.": [
  "Turribius", 
  {
   "epist.": "epistula ad Idacium et Ceponium episcopos"
  }, 
  [
   "400", 
   "499", 
   "postea episcopus Asturicensis", 
   ""
  ]
 ], 
 "IORD.": [
  "Iordanes Gothus", 
  {
   "Rom.": "de summa temporum vel origine actibusque gentis Romanorum", 
   "Get.": "de origine actibusque Getarum (sc. Gothorum; sequitur Cassiodori opus deperditum)"
  }, 
  [
   "500", 
   "555", 
   "", 
   ""
  ]
 ], 
 "LYGD.": [
  "Lygdamus (pseudon.)", 
  {
   "elegiae, quae sunt corporis Tibulliani": "elegiae, quae sunt corporis Tibulliani"
  }, 
  [
   "-43", 
   "50", 
   "", 
   ""
  ]
 ], 
 "GELL.": [
  "A. Gellius", 
  {
   "noctes Atticae": "noctes Atticae"
  }, 
  [
   "130", 
   "180", 
   "", 
   ""
  ]
 ], 
 "SIL.": [
  "Ti. Catius Asconius Silius Italicus", 
  {
   "Punica": "Punica"
  }, 
  [
   "25", 
   "100", 
   "", 
   ""
  ]
 ], 
 "[PS. ANTON. MVSA] $1": [
  "", 
  {
   "[herb. bet.]": "[herb. bet.]"
  }, 
  [
   "", 
   "", 
   "", 
   "PS. MVSA herb. Vett."
  ]
 ], 
 "REGVLA": [
  "", 
  {
   "Macar.": "Mac(h)arii abbatis quae fertur (fortasse Porcarii)", 
   "Paul. Steph.": "Pauli et Stephani abbatum", 
   "patr. II": "patrum secunda", 
   "mag.": "magistri", 
   "orient.": "orientalis (vix Vigilii diaconi)", 
   "regulae monachorum": "regulae monachorum", 
   "Tarnat.": "monasterii Tarna(n)tensis", 
   "patr. I": "patrum prima", 
   "patr. III": "patrum tertia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GREG. M.": [
  "Gregorius Magnus", 
  {
   "in I reg.": "expositiones in librum primum regum", 
   "epist.": "registrum epistularum, sc. epistulae et similia Gregorii scripta ea, quae olim in registrum Lateranense nunc deperditum recepta sunt", 
   "donat. Andr.": "donatio monasterio S. Andreae facta", 
   "in euang.": "in euangelia homiliae", 
   "resp. ad Aug.": "responsum ad Augustinum Anglorum episcopum", 
   "in Ezech.": "in Ezechielem homiliae", 
   "past.": "regula pastoralis (in quattuor partes digesta)", 
   "dial.": "dialogi (de miraculis patrum Italicorum)", 
   "mortal.": "oratio de mortalitate q. d., sc. denuntiatio pro septiformi letania", 
   "moral.": "moralia q. d., sc. expositio beati Iob", 
   "in cant.": "expositionis in canticum canticorum reliquiae"
  }, 
  [
   "540", 
   "504", 
   "papa", 
   ""
  ]
 ], 
 "MARVLL.": [
  "Marullus mimographus", 
  {
   "mim.": "fragmentum unicum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOD. PRISC.": [
  "Theodorus Priscianus", 
  {
   "log.": "lib. 2: logicus", 
   "phys.": "libri de physicis fragmentum", 
   "gyn.": "lib. 3: gynaecia", 
   "eup. faen.": "lib. 1: euporiston faenomenon"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "VICTRIC.": [
  "Victricius", 
  {
   "de laude sanctorum": "de laude sanctorum"
  }, 
  [
   "340", 
   "407", 
   "episcopus Rotomagensis", 
   ""
  ]
 ], 
 "PETRON.": [
  "Petronius (Arbiter)", 
  {
   "satyrica": "satyrica"
  }, 
  [
   "14", 
   "66", 
   "", 
   ""
  ]
 ], 
 "TVRPIL.": [
  "Sex. Turpilius", 
  {
   "com.": "comoediarum palliatarum fragmenta"
  }, 
  [
   "-200", 
   "-104", 
   "", 
   ""
  ]
 ], 
 "PVBLIL.": [
  "Publilius Syrus", 
  {
   "sent.": "sententiae", 
   "mim.": "mimorum fragmenta varia"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "[ORSIES.]": [
  "", 
  {
   "[doctr.]": "[doctr.]"
  }, 
  [
   "", 
   "", 
   "", 
   "HIER. Orsies. doctr."
  ]
 ], 
 "VEN. FORT.": [
  "Venantius Fortunatus", 
  {
   "expos. orat.": "expositio orationis dominicae", 
   "epist.": "epistulae libris carminum insertae", 
   "[vita Leob.]": "vita Leobini episcopi Carnotensis", 
   "expos. symb.": "expositio symboli", 
   "vita Sev.": "vita Severini episcopi Burdigalensis", 
   "vita Pat.": "vita Paterni episcopi Abrincensis", 
   "praef.": "praefatio carminum (epist. ad Gregorium Turonensem)", 
   "praef. I": "praefatio I (epist. ad Gregorium Turonensem)", 
   "vita Hil.": "vita Hilarii episcopi Pictaviensis", 
   "carm.": "carmina", 
   "laud. Mar.": "in laudem sanctae Mariae", 
   "vita Albin.": "vita Albini episcopi Andecavensis", 
   "Mart.": "vita Martini", 
   "vita Radeg.": "vita Radegundis reginae Francorum", 
   "virt. Hil.": "de virtutibus Hilarii episcopi Pictaviensis", 
   "vita Germ.": "vita Germani episcopi Parisiaci", 
   "carm. app.": "appendix carminum", 
   "vita Marcell.": "vita Marcelli"
  }, 
  [
   "540", 
   "610", 
   "episcopus Pictaviensis", 
   ""
  ]
 ], 
 "PS. IVL. RVF.": [
  "Pseudo-Iulius Rufinianus", 
  {
   "schem. dian.": "de schematis dianoeas", 
   "schem. lex.": "de schematis lexeos"
  }, 
  [
   "250", 
   "350", 
   "", 
   ""
  ]
 ], 
 "STEPHAN.": [
  "Stephanus Larissenus et alii", 
  {
   "libelli tres ad Bonifatium papam": "libelli tres ad Bonifatium papam"
  }, 
  [
   "450", 
   "550", 
   "episcopus", 
   ""
  ]
 ], 
 "DRAC.": [
  "Blossius Aemilius Dracontius", 
  {
   "ros.": "de origine rosarum", 
   "Romul.": "Romulea", 
   "Orest.": "Orestis tragoedia", 
   "mens.": "de mensibus", 
   "laud. dei": "de laudibus dei", 
   "satisf.": "satisfactio"
  }, 
  [
   "400", 
   "499", 
   "iurisconsultus Carthaginiensis, poeta", 
   ""
  ]
 ], 
 "PS. ANATOL.": [
  "Anatolius  Laodicensis", 
  {
   "pasch.": "liber de ratione paschali"
  }, 
  [
   "", 
   "", 
   "episcopus", 
   ""
  ]
 ], 
 "MIRAC.": [
  "", 
  {
   "Steph.": "de miraculis sancti Stephani protomartyris"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. TIT.": [
  "Pseudo-Titus", 
  {
   "epist.": "epistula de dispositione sancti\u00admonii"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "SOMN.": [
  "", 
  {
   "Neron.": "somnium Neronis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EXPLAN.": [
  "Sergius vel Servius q. d.", 
  {
   "in Don.": "explanationes in artem Donati (sc. min. et mai.)"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "[IDIOM.]": [
  "", 
  {
   "[gen. gramm.]": "de idiomatibus generum"
  }, 
  [
   "", 
   "", 
   "", 
   "CHAR. gramm."
  ]
 ], 
 "APRING.": [
  "Apringius", 
  {
   "in apoc.": "commentarius in apocalypsin"
  }, 
  [
   "500", 
   "599", 
   "episcopus Pacensis Hispanus", 
   ""
  ]
 ], 
 "MARTYROL.": [
  "", 
  {
   "Hier.": "martyrologium Hieronymianum q. d. (recensio Gallica), sc. fasti ecclesiae perperam Hieronymo adscripti", 
   "9 Kal. Ian.": "a. diem 9 Kal. Ian.", 
   "isag.": "isagogica (sc. epist. Chromatii et Heliodori, epist. Hieronymi, breviarium apostolorum, al.)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERM.": [
  "", 
  {
   "vulg.": "versio vulgata", 
   "mand.": "mandata", 
   "vis.": "visiones", 
   "sim.": "similitudines", 
   "Pal.": "versio Palatina"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GELL. $1": [
  "Cn. Gellius", 
  {
   "hist.": "annales"
  }, 
  [
   "-200", 
   "-101", 
   "historicus", 
   ""
  ]
 ], 
 "GRAMM.": [
  "", 
  {
   "VI": "opuscula quaedam grammatica (fere fragmenta et excerpta) vol. VI collectionis Keilianae edita, quae non afferuntur notis propriis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MISC.": [
  "", 
  {
   "Tir.": "miscellanea Tironiana"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POMP. RVF.": [
  "Q. Pompeius (Rufus)", 
  {
   "or. frg. Prisc. gramm. II": "orationum fragm. servatum apud PRISC. gramm. II"
  }, 
  [
   "", 
   "-88", 
   "consul 88 v. Chr.?", 
   ""
  ]
 ], 
 "ALF. AVIT.": [
  "Alfius (vel Alphius) Avitus", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "PAVL. FEST.": [
  "Paulus Diaconus", 
  {
   "excerpta ex libris Pompeii Festi de significatione verborum": "excerpta ex libris Pompeii Festi de significatione verborum"
  }, 
  [
   "725", 
   "799", 
   "", 
   ""
  ]
 ], 
 "SIGIST.": [
  "Sigisteus", 
  {
   "epist.": "epistula ad Parthenium presbyterum"
  }, 
  [
   "450", 
   "550", 
   "comes", 
   ""
  ]
 ], 
 "IVL. RVF.": [
  "Iulius Rufinianus", 
  {
   "rhet.": "de figuris sententiarum et elocutionis"
  }, 
  [
   "250", 
   "350", 
   "rhetor", 
   ""
  ]
 ], 
 "TEST.": [
  "", 
  {
   "(CIL XIII 5708)": "civis cuiusdam Romani Gallicae nationis", 
   "porcelli": "porcelli", 
   "Pap. Corp. 221,64": "Antonii Silvani"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FERIAL.": [
  "", 
  {
   "Duran. Iul. 23": "militare Duranum ad diem 23 mensis Iulii", 
   "Cum. Mai. 24": "titulis servata, e. g. Cumanum ad diem 24 mensis Maii"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VAL. FL.": [
  "C. Valerius Flaccus Setinus Balbus", 
  {
   "Argonautica": "Argonautica"
  }, 
  [
   "0", 
   "90", 
   "", 
   ""
  ]
 ], 
 "PS. GREG. TVR.": [
  "Pseudo-Gregorius Turonensis", 
  {
   "Thom.": "de miraculis Thomae apostoli"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PORCAR.": [
  "Porcarius", 
  {
   "mon.": "monita"
  }, 
  [
   "650", 
   "732", 
   "abbas Lerinensis", 
   ""
  ]
 ], 
 "TAB. $4": [
  "", 
  {
   "devot.": "tabulae devotionum sive defixionum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ITIN.": [
  "", 
  {
   "Theod.": "itin. Theodosii cuiusdam (de situ terrae sanctae)", 
   "Anton. Aug.": "itineraria Antonini Augusti q. d. duo (sc. itin. provin-ciarum et itin. maritimum)", 
   "[rec. B]": "recensio B", 
   "rec. A": "recensio A, sc. prior", 
   "Alex.": "itin. (immo breviarium) Alexandri Magni Traianique contra Persas profectorum", 
   "Anton. Plac.": "itin. Antonini Placentini q. d.", 
   "Burdig.": "itin. Burdigalense", 
   "Eucher.": "itin. Eucherii, sc. de situ Hierosolymae vel Iudaeae ad Faustum (opusculum a plerisque EVCHER. abiudicatum)", 
   "Tungr. (CIL XIII 9158)": "itin. in civitate Tungrorum repertum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMPEL.": [
  "L. Ampelius", 
  {
   "liber memorialis": "liber memorialis"
  }, 
  [
   "200", 
   "299", 
   "", 
   ""
  ]
 ], 
 "GENNAD.": [
  "Gennadius", 
  {
   "[indic. de haer.]": "[indic. de haer.]", 
   "vir. ill.": "de viris illustribus", 
   "dogm.": "definitio ecclesiasticorum dogmatum (de ecclesiasticis dogmatibus)"
  }, 
  [
   "400", 
   "496", 
   "presbyter Massiliensis", 
   ""
  ]
 ], 
 "EPIPHAN. SCHOL.": [
  "Epiphanius Scholasticus", 
  {
   "Phil. Carp. in cant.": "Philonis Carpasiotae commentarius in canticum canticorum e graeco versus", 
   "Didym. in Iudam": "Didymi Alexandrini in epistulas canonicas (sc. catholicas q. d.) brevis enarratio e graeco versa atque retractata, in epistulae Iudae"
  }, 
  [
   "500", 
   "599", 
   "", 
   "versiones librorum graecorum iussu Cassiodori factae"
  ]
 ], 
 "LABER.": [
  "D. Laberius", 
  {
   "mim.": "mimorum fragmenta"
  }, 
  [
   "-105", 
   "-43", 
   "eques", 
   ""
  ]
 ], 
 "PREC.": [
  "", 
  {
   "Terr.": "Terrae matris", 
   "precatio": "precatio", 
   "herb.": "omnium herbarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAT.": [
  "Cn. Matius", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "-150", 
   "-50", 
   "", 
   ""
  ]
 ], 
 "SANTRA": [
  "Santra", 
  {
   "trag.": "tragoediarum fragmenta", 
   "frg. Non.": "pedestrium operum fragmenta"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   "e. g. fragm. servatum apud NON."
  ]
 ], 
 "GREG. NYSS.": [
  "Gregorius Nyssenus", 
  {
   "ad Phil.": "epistula ad Philippum monachum de Arianorum oppositionibus e graeco versa"
  }, 
  [
   "335", 
   "394", 
   "", 
   ""
  ]
 ], 
 "VICTORIN. $1": [
  "", 
  {
   "gramm.": "scripta quaedam grammatica, quae uni auctori (Victorino cuidam? vix Mario Victorino) tribuenda videntur esse"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SVLP. APOLL.": [
  "C. Sulpicius Apollinaris", 
  {
   "Verg. Aen.": "hexasticha in Aeneidos libris", 
   "perioch. Ter. Andr.": "periochae comoediarum Terentii, e. g. Andriae"
  }, 
  [
   "50", 
   "150", 
   "grammaticus", 
   ""
  ]
 ], 
 "PELAG. I": [
  "Pelagius I", 
  {
   "defens.": "in defensione trium capitulorum", 
   "epistulas eius v. EPIST. pontif. Gass\u00f3\u2014Batlle": "epistulas eius v. EPIST. pontif. Gass\u00f3\u2014Batlle"
  }, 
  [
   "500", 
   "561", 
   "papa", 
   ""
  ]
 ], 
 "LICINIAN.": [
  "Licinianus", 
  {
   "epist.": "epistulae"
  }, 
  [
   "550", 
   "650", 
   "episcopus Carthaginis Novae", 
   ""
  ]
 ], 
 "SACR.": [
  "", 
  {
   "Arg. Varro ling.": "sacra Argeorum (sc. laterculus sacrariorum quorundam), v. VARRO ling."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LVCIVS": [
  "Lucius episcopus et socii", 
  {
   "Cypr. epist.": "epistula ad Cyprianum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTON. $1": [
  "M. Antonius", 
  {
   "fragmenta (fere orationis pro C. Norbano) servata apud CIC. de orat.": "fragmenta (fere orationis pro C. Norbano) servata apud CIC. de orat."
  }, 
  [
   "-143", 
   "-87", 
   "orator", 
   ""
  ]
 ], 
 "NON.": [
  "Nonius Marcellus", 
  {
   "de compendiosa doctrina": "de compendiosa doctrina"
  }, 
  [
   "250", 
   "350", 
   "ex Africa Thubursicensis", 
   ""
  ]
 ], 
 "DVLC.": [
  "Dulcitius", 
  {
   "Aug. quaest. Dulc.": "quaestiones ad Augustinum missae"
  }, 
  [
   "300", 
   "399", 
   "tribunus et notarius", 
   "v. AVG. quaest. Dulc."
  ]
 ], 
 "SVET.": [
  "C. Suetonius Tranquillus", 
  {
   "Otho": "de vita Caesarum lib. VII 2: Otho", 
   "Claud.": "de vita Caesarum lib. V: divus Claudius", 
   "Aug.": "de vita Caesarum lib. II: divus Augustus", 
   "Dom.": "de vita Caesarum lib. VIII 3: Domitianus", 
   "vita Crispi": "vita Passieni Crispi", 
   "vita Hor.": "vita Horatii", 
   "Nero": "de vita Caesarum lib. VI: Nero", 
   "Tit.": "de vita Caesarum lib. VIII 2: divus Titus", 
   "gramm.": "de grammaticis et rhetoribus cap. 1\u201424", 
   "vita Lucani": "vita Lucani", 
   "Vesp.": "de vita Caesarum lib. VIII 1: divus Vespasianus", 
   "rhet.": "de grammaticis et rhetoribus", 
   "Galba": "de vita Caesarum lib. VII 1: Galba", 
   "Vit.": "de vita Caesarum lib. VII 3: Vitellius", 
   "Cal.": "de vita Caesarum lib. IV: C. Caligula", 
   "vita Plin.": "vita Plinii maioris", 
   "Iul.": "de vita Caesarum lib. I: divus Iulius", 
   "[vita Verg.]": "[vita Verg.]", 
   "Tib.": "de vita Caesarum lib. III: Tiberius", 
   "vita Ter.": "vita Terentii", 
   "frg.": "fragmenta varia"
  }, 
  [
   "70", 
   "122", 
   "", 
   ""
  ]
 ], 
 "RECCARED.": [
  "Reccaredus", 
  {
   "epist. ad Greg. M.": "epistula ad Gregorium Magnum papam"
  }, 
  [
   "550", 
   "601", 
   "rex Gothorum", 
   ""
  ]
 ], 
 "LIB. $1": [
  "", 
  {
   "col.": "liber (sc. gromaticus) coloniarum q. d. (sequitur quodammodo Balbum quendam al.)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "OPTAT.": [
  "Optatus", 
  {
   "app.": "monumentorum ad Donatistarum historiam pertinentium, quae ab alio collecta Optatus appendicis instar libris suis addiderat, reliquiae", 
   "opus, quod contra Parmenianum Donatistam scripsit": "opus, quod contra Parmenianum Donatistam scripsit", 
   "serm.": "sermo in natali sanctorum innocentium infantum q. d. (minus certum, an genuinus)"
  }, 
  [
   "300", 
   "399", 
   "episcopus Milevitanus Afer", 
   ""
  ]
 ], 
 "MAR. VICTORIN.": [
  "C. Marius Victorinus", 
  {
   "homous.": "de homousio recipiendo", 
   "[ad Iust.]": "[ad Iust.]", 
   "in Phil.": "commentarius in epistulam Pauli ad Philippenses", 
   "hymn.": "hymni (quos olim inter spuria numerabamus)", 
   "in Eph.": "commentarius in epistulam Pauli ad Ephesios", 
   "in Gal.": "commentarius in epistulam Pauli ad Galatas", 
   "rhet.": "explanationes in rhetoricam Ciceronis (sc. CIC. inv.)", 
   "gramm.": "scripta ad grammaticam pertinentia", 
   "defin.": "de definitionibus", 
   "adv. Arium": "adversus Ar(r)ium libri IV", 
   "[verb. script.]": "[verb. script.]", 
   "[Boeth. in Porph. comm. pr.]": "[Boeth. in Porph. comm. pr.]", 
   "gen. div. verb.": "de generatione divini verbi (ad Candidum)", 
   "Porph. isag.": "Porphyrii isagoge e graeco versa"
  }, 
  [
   "281", 
   "363", 
   "rhetor urbis Romae", 
   ""
  ]
 ], 
 "INST. $1": [
  "", 
  {
   "de inst. promulg.": "constitutio 'Imperatoriam' (const. de institutionibus promulgandis)", 
   "Iust.": "institutiones Iustiniani Augusti, sc. iuris elementa vel praecepta iussu Iustiniani a Theophilo al. composita"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FRG. $2": [
  "", 
  {
   "V 566,9": "de nomine et pronomine, vol. V p. 566 lin. 9 Keil", 
   "VI 629,22": "de versibus, de finalibus syllabis, de structuris, de metris, vol. VI p. 629 lin. 22 Keil", 
   "Bob. gramm.": "fragmenta et frustula nonnulla codicibus olim Bobiensibus servata, quae ad grammaticam pertinent", 
   "VII 544,44": "de arte grammatica Sergii et de littera, de accentibus, de propriis nominibus, de nomine, vol. VII p. 544 lin. 44 Keil"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FRG. $3": [
  "", 
  {
   "Enoch": "fragmentum versionis latinae libri (vel libri 1) Enoch (sc. cap. 106)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FRG. $1": [
  "", 
  {
   "Ps. Apul. herb.": "fragmentum (antidotum) traditum una cum PS. APVL. herb."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FRG. $6": [
  "", 
  {
   "de grad. cogn.": "fragmentum de gradibus cognationum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FRG. $7": [
  "", 
  {
   "in Hebr.": "commentarius in epist. ad Hebraeos, qui ANON. in Hebr. adhibuit"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FRG. $4": [
  "", 
  {
   "fab. (Pap. Corp. 40)": "fragmenta fabularum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FRG. $5": [
  "", 
  {
   "de form. Fab.": "fragmentum Vindobonense de formula Fabiana"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEVERIAN.": [
  "Severianus", 
  {
   "hom. de pace": "homilia de pace", 
   "[hom. de python.]": "homilia de pythonibus et maleficiis"
  }, 
  [
   "380", 
   "408", 
   "episcopus Gabalensis", 
   ""
  ]
 ], 
 "IVVENT.": [
  "Iuventius", 
  {
   "com.": "comoediarum fragmenta"
  }, 
  [
   "-150", 
   "-50", 
   "poeta", 
   ""
  ]
 ], 
 "ADVERS.": [
  "", 
  {
   "Aug. c. adv. leg.": "adversarii verba, contra quem scripsit Augustinus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FRG. $9": [
  "", 
  {
   "de iure fisci": "fragmenta Veronensia de iure fisci"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NEP.": [
  "Cornelius Nepos", 
  {
   "Epam.": "Epaminondas (XV)", 
   "Lys.": "Lysander (VI)", 
   "Hann.": "Hannibal (XXIII)", 
   "Cim.": "Cimon (V)", 
   "Cato": "Cato (XXIV)", 
   "reg.": "reges (XXI)", 
   "Ages.": "Agesilaus (XVII)", 
   "Att.": "Atticus (XXV)", 
   "Milt.": "Miltiades (I)", 
   "Timol.": "Timoleon (XX)", 
   "Thras.": "Thrasybulus (VIII)", 
   "frg.": "fragmenta", 
   "Phoc.": "Phocion (XIX)", 
   "Dion": "Dion (X)", 
   "Chabr.": "Chabrias (XII)", 
   "Ham.": "Hamilcar (XXII)", 
   "Con.": "Conon (IX)", 
   "Arist.": "Aristides (III)", 
   "Paus.": "Pausanias (IV)", 
   "praef.": "praefatio", 
   "Iph.": "Iphicrates (XI)", 
   "Pel.": "Pelopidas (XVI)", 
   "Timoth.": "Timotheus (XIII)", 
   "Them.": "Themistocles (II)", 
   "Alc.": "Alcibiades (VII)", 
   "Eum.": "Eumenes (XVIII)", 
   "Dat.": "Datames (XIV)"
  }, 
  [
   "-100", 
   "-28", 
   "", 
   ""
  ]
 ], 
 "[PLIN. VAL.]": [
  "Plinius Valerianus", 
  {
   "medicina Plinii (Valeriani)": "medicina Plinii (Valeriani)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DAR.": [
  "Darius", 
  {
   "epistula ad Augustinum": "epistula ad Augustinum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CVRT.": [
  "Q. Curtius Rufus", 
  {
   "historiarum Alexandri Magni quae exstant": "historiarum Alexandri Magni quae exstant"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "PAPIN.": [
  "Aemilius Papinianus", 
  {
   "dig.": "fragmenta in digestis aliisve collectionibus servata", 
   "resp. frg.": "responsorum fragmenta"
  }, 
  [
   "142", 
   "212", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "PROC.": [
  "Proculus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "0", 
   "99", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "CYRILL.": [
  "Cyrillus Alexandrinus", 
  {
   "hom. pasch.": "homilia, immo epistula paschalis septima decima", 
   "epist. Carth.": "epistula ad concilium Carthaginiense anno 419 habitum missa"
  }, 
  [
   "375", 
   "444", 
   "episcopus", 
   ""
  ]
 ], 
 "MACER $1": [
  "Aemilius Macer", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "150", 
   "250", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "MACER $2": [
  "C. Licinius Macer Calvi pater", 
  {
   "or. frg. Prisc. gramm.": "orationis pro Tuscis fragm. servatum apud PRISC. gramm.", 
   "hist.": "opus historicum, sc. annales"
  }, 
  [
   "-150", 
   "-66", 
   "", 
   ""
  ]
 ], 
 "DOSITH.": [
  "Dositheus", 
  {
   "gramm.": "artis grammaticae"
  }, 
  [
   "300", 
   "399", 
   "", 
   "quam graece vertit, quae exstant"
  ]
 ], 
 "AVGVSTVS": [
  "imp. Augustus", 
  {
   "operum reliquiae a scriptoribus servatae (praeter EPIST. imp. Aug.), e. g. carmen apud MART.": "operum reliquiae a scriptoribus servatae (praeter EPIST. imp. Aug.), e. g. carmen apud MART."
  }, 
  [
   "-63", 
   "14", 
   "", 
   ""
  ]
 ], 
 "POMP. $1": [
  "Pompeius (Maurus)", 
  {
   "commentum artis Donati": "commentum artis Donati"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "PROVERB.": [
  "", 
  {
   "Graec. B": "proverbia Graecorum, series B"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IVL. SEV.": [
  "Iulius Severianus", 
  {
   "rhet.": "praecepta artis rhetoricae"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "PHAEDR.": [
  "Phaedrus", 
  {
   "fabulae": "fabulae"
  }, 
  [
   "-20", 
   "60", 
   "Augusti libertus", 
   ""
  ]
 ], 
 "RHET. $1": [
  "", 
  {
   "min.": "rhetores latini minores ab Halm collecti"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TER. MAVR.": [
  "Terentianus Maurus", 
  {
   "carmina de litteris, de syllabis, de metris": "carmina de litteris, de syllabis, de metris"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "ARNOB.": [
  "Arnobius <Africanus>", 
  {
   "nat.": "adversus nationes (vel gentes)"
  }, 
  [
   "250", 
   "330", 
   "rhetor", 
   ""
  ]
 ], 
 "PS. BOETH.": [
  "Pseudo-Boethius", 
  {
   "[grom.]": "demonstratio artis geometricae vel geometria prima", 
   "fid. cath.": "de fide catholica", 
   "[geom.]": "geometria (sc. altera)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SER.": [
  "Q. Serenus", 
  {
   "med.": "liber medicinalis"
  }, 
  [
   "100", 
   "299", 
   "", 
   ""
  ]
 ], 
 "VITA": [
  "", 
  {
   "Lucani": "vita Lucani ex Vaccae q. d. commentario sublata", 
   "vitae scriptorum paganorum": "vitae scriptorum paganorum", 
   "Hippocr.": "vita Hippocratis", 
   "Iuv.": "vita Iuvenalis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[NICET.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "PS. NICET. pasch."
  ]
 ], 
 "TIB.": [
  "Albius Tibullus", 
  {
   "elegiae": "elegiae"
  }, 
  [
   "-55", 
   "-18", 
   "", 
   ""
  ]
 ], 
 "FORT.": [
  "Fortunatus Manichaeus", 
  {
   "Aug. c. Fort.": "quae in disputatione contra Augustinum in medium protulit"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "REPOS.": [
  "Reposianus", 
  {
   "concubitus Martis et Veneris": "concubitus Martis et Veneris"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "VICTOR.": [
  "Victorius", 
  {
   "Alc. Avit. epist.": "epistula ad Alcimum Avitum"
  }, 
  [
   "450", 
   "550", 
   "episcopus Gratianopolitanus", 
   ""
  ]
 ], 
 "EPIL.": [
  "", 
  {
   "bibl. Esth.": "epilogi vel subscriptiones anon. in codicibus additae libris biblicis, e. g. epilogus libri Esth."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. ANTON.": [
  "", 
  {
   "orationis C. Antonio Hybridae (qui revera a. 64 a. Chr. contra Ciceronem dixerat) suppositae fragm. servatum apud QVINT. inst. 9,3,94": "orationis C. Antonio Hybridae (qui revera a. 64 a. Chr. contra Ciceronem dixerat) suppositae fragm. servatum apud QVINT. inst. 9,3,94"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIDASC.": [
  "", 
  {
   "apost.": "didascaliae apostolorum latine versae quae exstant"
  }, 
  [
   "250", 
   "299", 
   "", 
   ""
  ]
 ], 
 "DESCENS.": [
  "", 
  {
   "rec. A": "recensio A", 
   "rec. B": "recensio B", 
   "Christi": "descensus Christi ad inferos, sc. euangelii Nicodemi pars posterior e graeco versa et retractata"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[ANATOL.]": [
  "Anatolius Constantinopolitanus", 
  {
   "ad Leonem Magnum inter eiusdem epistulas": "ad Leonem Magnum inter eiusdem epistulas"
  }, 
  [
   "400", 
   "458", 
   "episcopus", 
   ""
  ]
 ], 
 "CONST.": [
  "", 
  {
   "abb.": "constitutum (fragmentum) abbatissae cuiusdam monasterii a Caesario Arel. conditi de iure sepulturae servando"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VITAE $1": [
  "", 
  {
   "patr. Iurens.": "vitae patrum Iurensium"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FENEST.": [
  "Fenestella", 
  {
   "hist.": "fragmenta a scriptoribus servata"
  }, 
  [
   "-52", 
   "35", 
   "historicus", 
   ""
  ]
 ], 
 "ORIBAS.": [
  "Oribasius", 
  {
   "eup.": "ad Eunapium sive", 
   "syn.": "synopsis ad Eustathium", 
   "opera e graeco versa (exstant duae versiones)": "opera e graeco versa (exstant duae versiones)"
  }, 
  [
   "325", 
   "403", 
   "medicus", 
   ""
  ]
 ], 
 "REG.": [
  "", 
  {
   "eccl. Carth.": "registri ecclesiae Carthaginiensis excerpta anonyma"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[PS. EVSEB. CAES.]": [
  "Pseudo-Eusebius", 
  {
   "[hom.]": "homiliae"
  }, 
  [
   "400", 
   "599", 
   "", 
   "EVSEB. EMES. serm. 29,40"
  ]
 ], 
 "SEV. MALAC.": [
  "Severus (Malacitanus?)", 
  {
   "euang.": "euangelia"
  }, 
  [
   "500", 
   "599", 
   "episcopus", 
   ""
  ]
 ], 
 "SYMM.": [
  "Q. Aurelius Symmachus", 
  {
   "or.": "orationes", 
   "epist.": "epistulae", 
   "rel.": "relationes", 
   "frg.": "variorum operum fragmenta"
  }, 
  [
   "342", 
   "403", 
   "", 
   ""
  ]
 ], 
 "ASPER": [
  "Vergilius Asper", 
  {
   "gramm. Verg.": "grammatica Vergiliana"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "IDIOM.": [
  "", 
  {
   "cas. gramm.": "de idiomatibus casuum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PEREGR.": [
  "", 
  {
   "Aeth.": "peregrinatio Aetheriae sive potius itinerarium Egeriae (vix Silviae)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIL. $1": [
  "Hilarius Pictaviensis", 
  {
   "syn.": "de synodis (de fide orientalium)", 
   "frg. min.": "fragmenta minora a scriptoribus servata", 
   "[euang.]": "[euang.]", 
   "in Matth.": "commentarii in Matthaeum", 
   "[gen.]": "[gen.]", 
   "hymn.": "libri hymnorum reliquiae", 
   "myst.": "tractatus mysteriorum quae exstant", 
   "psalm. instr.": "instructio psalmorum, sc. praefatio tractatuum in psalm.", 
   "c. Const.": "contra Constantium imperatorem", 
   "[op. hist.]": "[op. hist.]", 
   "app.": "appendix", 
   "in psalm.": "tractatuum (commentariorum) in psalmos quae exstant", 
   "c. Aux.": "contra Auxentium episcopum Mediolanensem", 
   "[epist. ad fil.]": "[epist. ad fil.]", 
   "[Macc.]": "[Macc.]", 
   "coll. antiar.": "collectanea antiariana Parisina q. d., sc. fragmenta operis historici de controversia Ariana (= adversum Valentem et Vrsacium?), quibus plurimae synodorum epistulae sim. servantur", 
   "ad Const.": "ad Constantium imperatorem", 
   "trin.": "de trinitate (de fide, adversum Arianos)"
  }, 
  [
   "315", 
   "367", 
   "episcopus", 
   ""
  ]
 ], 
 "MET.": [
  "", 
  {
   "in Naev. Bass. gramm.": "versus in Naevium, quo Metelli poetae versu lacessiti respondisse dicebantur"
  }, 
  [
   "", 
   "", 
   "", 
   "servatus apud BASS. gramm. VI"
  ]
 ], 
 "SERV.": [
  "Servius", 
  {
   "vita Verg.": "vita Vergilii", 
   "gramm.": "scripta grammatica varia", 
   "auct. ...": "additamenta alterius recensionis (maxime ex Ael. Donato suppletae, ut vid.), quae Servius Danielis sive auctus vocatur", 
   "Aen.": "commentarius in Vergilii opera"
  }, 
  [
   "350", 
   "450", 
   "grammaticus", 
   ""
  ]
 ], 
 "GEST. $2": [
  "", 
  {
   "Pilat.": "gesta Pilati, sc. euangelii Nicodemi pars prior e graeco versa"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. ALEX.": [
  "Alexander <Magnus>", 
  {
   "c. Dind. coll.": "cum Dindimo, rege Bragmanorum, de philosophia per litteras facta collatio (ficta)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $15": [
  "", 
  {
   "Ibae Facund. defens.": "epistula Ibae episcopi, fragm. versionis cuiusdam a Facundo servatum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $16": [
  "", 
  {
   "rec. g": "recensio g (sc. versio apud CASSIOD. hist. 2,15)", 
   "rec. b": "recensio b (sc. codicis Veronensis, versa e graeco)", 
   "Constant. ad eccl. Alex.": "Constantini Magni epistula ad ecclesiam Alexandrinam", 
   "rec. a": "recensio a (sc. authentica?)", 
   "Iulian. de postul.": "Iuliani epistula ad Apronianum de postulando", 
   "Honorii": "Honorii epistula ad milites", 
   "inc. (CIL II 5368)": "incerti de iudiciis privatis", 
   "Aur. (Inscr. Maroc. Gascou 94)": "M. Aurelii et Commodi ad Vallium Maximianum", 
   "rec. Ver.": "recensio cod. Veronensis", 
   "Aug. Suet. Claud.": "Augusti epistularum fragmenta a scriptoribus servata, e. g. fragm. apud SVET. Claud.", 
   "rec. Par.": "recensio cod. Parisini", 
   "imp.": "epistulae imperatorum vel imperatricum (exempla selecta)", 
   "Constant. in Arium": "Constantini Magni in Arium", 
   "Grat. ad Ambr.": "Gratiani epistula ad Ambrosium"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALF.": [
  "P. Alfenus Varus Cremonensis", 
  {
   "dig.": "fragmenta in digesta (et alibi) servata"
  }, 
  [
   "1", 
   "99", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "DECRET. $9": [
  "", 
  {
   "Paulli (CIL I2 614)": "decretum L. Aemilii L. f. Paulli procos. Hispaniae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DECRET. $8": [
  "", 
  {
   "patron.": "decreta patronatus selecta", 
   "Amitern. (Ann\u00e9e \u00c9pigr. 1937 n. 119)": "a decurionibus Amiterninis C. Sallio Pompeiano Sofronio oblati", 
   "Naunit. (CIL IX 10)": "ab universo populo emporii Naunitani M. Sal. Balerio oblati"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRASS.": [
  "L. Licinius Crassus orator", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud CIC. orat.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud CIC. orat."
  }, 
  [
   "-140", 
   "-91", 
   "", 
   ""
  ]
 ], 
 "EPIST. $13": [
  "", 
  {
   "donat.": "epistulae (acta sim.) donatoriae", 
   "Artemid. (CIL VI 10241)": "T. Flavii Artemidori", 
   "Candid. (CIL VI 10242)": "C. Iulii Candidi ad libertos Samiarii Quintiani", 
   "Iren. (CIL VI 10247)": "Statiae Irenes", 
   "Syntroph. (CIL VI 10239)": "T. Flavii Syntrophi"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DECRET. $5": [
  "", 
  {
   "Gelas.": "decretum Gelasianum de libris recipiendis et non recipiendis q. d."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DECRET. $4": [
  "", 
  {
   "Pisaur. (CIL XI 6335)": "Pisaurensium", 
   "fabr.": "decreta fabrum (sc. de patronis cooptandis)", 
   "Volsin. (CIL XI 2702)": "Volsiniensium", 
   "Sentin. (CIL XI 5748)": "Sentinatium", 
   "Reg. (CIL XI 970)": "f. et centonariorum Regiensium"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DECRET. $7": [
  "", 
  {
   "de past. pec. (CIL VIII 23956)": "decretum municipale aliquod, ut vid., de pastu pecorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DECRET. $6": [
  "", 
  {
   "Herculan. Truent. (Ephem. Epigr. VIII 210 p. 52)": "decretum Herculaniorum (i. cultorum Herculis) Truentinorum (?)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DECRET. $1": [
  "", 
  {
   "centumvir. Veient. (CIL XI 3805)": "decretum centumvirorum municipii Augusti Veientis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYS. EXIG.": [
  "Dionysius Exiguus", 
  {
   "[paenit. Thaisis praef.]": "praefatio, quae in nonnullis codicibus vitae vel paenitentiae q. d. sanctae Thaisis meretricis anteposita est", 
   "inv. cap. Ioh.": "de inventione capitis Iohannis Baptistae relatio e graeco versa", 
   "pasch.": "argumenta paschalia", 
   "[vita Thaisis]": "vita vel paenitentia sanctae Thaisis meretricis", 
   "praef.": "praefationes, sc. epistulae dedicatoriae collectionum et versionum a Glorie collectae", 
   "epist. de pasch.": "epistulae duae de computo paschali (1: ad Petronium; 2: ad Bonifatium et Bonum),", 
   "Conc.": "eae Dionysii versiones vel versionum partes, quae actis conciliorum a Schwartz collectis continentur", 
   "Greg. Nyss. creat.": "Gregorii Nysseni liber \u03a0\u03b5\u03c1\u03af \u03ba\u03b1\u03c4\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae\u03c2 \u03b1\u03bd\u03b8\u03c1\u03ce\u03c0\u03bf\u03c5 e graeco versus (de conditione vel creatione hominis)", 
   "[reg. Pachom.]": "Pachomii abbatis regula (sc. regula angeli q. d.) e graeco versa", 
   "vita Pachom.": "vita Pachomii abbatis e graeco versa", 
   "cycl.": "cycli paschales", 
   "[Procl. fid.]": "[Procl. fid.]", 
   "Avell.": "libellus Dioscori et Chaeremonis apocrisiariorum a Dionysio versus", 
   "[Procl. or.]": "[Procl. or.]", 
   "epist. ad Eugipp.": "epistula ad Eugippium (qua dedicatur Greg. Nyss. creat.)", 
   "Proter. epist.": "Proterii episcopi Alexandrini epistula ad Leonem papam de pascha"
  }, 
  [
   "470", 
   "540", 
   "monachus Scythicus", 
   ""
  ]
 ], 
 "DECRET. $3": [
  "", 
  {
   "dendr.": "decreta dendrophororum", 
   "Pol. (Inscr. Ital. X 1,84)": "Polensium", 
   "Puteol. (CIL X 1786)": "Puteolanorum in honorem Q. Octavii Agathae patroni"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DECRET. $2": [
  "", 
  {
   "Salens. (Inscr. Maroc. Gascou 307)": "Salensium in honorem M. Sulpicii M. f. Felicis", 
   "Aquil. (CIL V 875)": "Aquileiensium, e. g. in honorem C. Minicii Itali", 
   "Hercul. (CIL X 1453)": "Herculanensium in honorem MM. Remmiorum Ruforum patris et filii", 
   "decur.": "decreta decurionum\u00a0selecta", 
   "[Ferent. Prisc.]": "mentio fit alicuius decreti senatus Ferentinatium, verba eius tamen non perscribuntur", 
   "Tiburt. (CIL XIV 3679a)": "Tiburtinorum in honorem C. Sextilii Ephebi", 
   "Pis. (CIL XI 1420)": "Pisanorum de sacris faciundis L. Caesari, Augusti f."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CVRIO PATER": [
  "C. Scribonius Curio pater", 
  {
   "orationis (?) cuiusdam fragm. servatum apud PRISC. gramm. II": "orationis (?) cuiusdam fragm. servatum apud PRISC. gramm. II"
  }, 
  [
   "-150", 
   "-53", 
   "", 
   ""
  ]
 ], 
 "ATIL.": [
  "Atilius", 
  {
   "com.": "comoediarum fragmenta"
  }, 
  [
   "100", 
   "199", 
   "", 
   ""
  ]
 ], 
 "AGROEC.": [
  "Agroecius", 
  {
   "gramm.": "ars de orthographia"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "PASCHAS.": [
  "Paschasius", 
  {
   "epist.": "epistula ad Eugippium"
  }, 
  [
   "450", 
   "512", 
   "diaconus Romanus", 
   ""
  ]
 ], 
 "VARRO": [
  "M. Terentius Varro Reatinus", 
  {
   "carm. frg. Gell.": "carminum fragmenta, e. g. fragm. servatum apud GELL.", 
   "Men.": "saturarum Menippearum fragmenta", 
   "rust.": "res rusticae", 
   "frg. Non.": "operum pedestrium deperditorum fragmenta, e. g. fragm. servatum apud NON.", 
   "ling.": "de lingua latina"
  }, 
  [
   "-116", 
   "-27", 
   "", 
   ""
  ]
 ], 
 "[CAPITOL.]": [
  "Iulius Capitolinus", 
  {}, 
  [
   "350", 
   "450", 
   "", 
   "HIST. AVG."
  ]
 ], 
 "PS. HIL.": [
  "Pseudo-Hilarius Pictaviensis", 
  {
   "euang.": "de euangelio", 
   "rec. A 394": "recensio A, vers. 394 (ceterum v. euang.)", 
   "[elench.]": "capitulorum elenchus commentariorum Hilarii in Matthaeum", 
   "hymn.": "hymni duo a Feder inter spuria editi", 
   "prat.": "de spiritali prato (fragmentum?)", 
   "hymn. de Christo": "hymnus de Christo", 
   "libell.": "epistula seu libellus apologeticus (sc. contra Arianos)", 
   "rec. B 389": "recensio B, vers. 389 (quam recensionem usque adhuc Victorino cuidam poetae tribuebamus)", 
   "gen.": "in genesin ad Leonem papam", 
   "balt. cast.": "de balteo castitatis (fragmentum?)", 
   "in psalm.": "tractatus in psalmos", 
   "epist. ad fil.": "epistula ad Abram filiam", 
   "[dedic. eccl.]": "sermo de dedicatione ecclesiae", 
   "Macc.": "carmen de martyrio Maccabaeorum", 
   "tract.": "tractatus tres a Mai editi"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "[VOPISC.]": [
  "Fl. Vopiscus Syracusius", 
  {}, 
  [
   "117", 
   "284", 
   "e numero scriptorum historiae Augustae fictorum", 
   "HIST. AVG."
  ]
 ], 
 "RVT. NAM.": [
  "Rutilius Claudius Namatianus", 
  {
   "de reditu suo sive iter Gallicum": "de reditu suo sive iter Gallicum"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "DAMAS.": [
  "Damasus", 
  {
   "carm.": "carmina, sc. epigrammata a Ferrua inter genuina recepta", 
   "epistulae duae ad Hieronymum (Epist. pontif. 239. 253) et tertiae fragmenta": "epistulae duae ad Hieronymum (Epist. pontif. 239. 253) et tertiae fragmenta"
  }, 
  [
   "305", 
   "384", 
   "papa", 
   ""
  ]
 ], 
 "PS. APVL.": [
  "Pseudo-Apuleius", 
  {
   "tit. morb.": "index titulorum morborum", 
   "praef.": "praefatio", 
   "herb.": "herbarium (de medicaminibus herbarum)", 
   "herm.": "\u03a0\u03b5\u03c1\u1f76 \u1f11\u03c1\u03bc\u03b7\u03bd\u03b5\u03af\u03b1\u03c2 (opusculum fortasse genuinum)", 
   "[rem. sal.]": "de remediis salutaribus q. d. fragmentum", 
   "app.": "appendix curarum, quae in codice uno vel altero additae sunt", 
   "Ascl.": "Asclepius", 
   "interpol.": "interpolationes (maxime e Dioscoride sumptae) ad nomina naturamque herbarum pertinentes, quibus et singulae codicum familiae et singuli codices aucti sunt (redduntur apud Howald/Sigerist aut litteris minoribus aut exulant in adnotatione critica)"
  }, 
  [
   "300", 
   "399", 
   "", 
   "(retractatio latina libri Hermetici graeci fere deperditi; sed non ita pauca exstant coptice)"
  ]
 ], 
 "AVF. BASS.": [
  "Aufidius Bassus", 
  {
   "hist.": "fragm. apud SEN. suas. servata"
  }, 
  [
   "-50", 
   "50", 
   "historicus", 
   ""
  ]
 ], 
 "PACON.": [
  "L. Sextilius Paconi(an)us", 
  {
   "carm. frg.": "carminis fragm."
  }, 
  [
   "", 
   "35", 
   "", 
   ""
  ]
 ], 
 "VAL. CEM.": [
  "Valerianus Cemenelensis", 
  {
   "hom.": "homiliae", 
   "epist.": "epistula ad monachos"
  }, 
  [
   "400", 
   "460", 
   "episcopus", 
   ""
  ]
 ], 
 "FELIX": [
  "Flavius Felix", 
  {
   "anth.": "carmina in anthologiam latinam recepta"
  }, 
  [
   "380", 
   "430", 
   "", 
   ""
  ]
 ], 
 "TIRO": [
  "M. Tullius Tiro", 
  {
   "Gell.": "variorum operum fragmenta, e. g. fragm. servatum apud GELL."
  }, 
  [
   "-103", 
   "-4", 
   "", 
   ""
  ]
 ], 
 "VERG.": [
  "P. Vergilius Maro", 
  {
   "catal.": "carmina kat\u00e0 lept\u00f3n", 
   "ecl.": "eclogae sive bucolica", 
   "epist. Macr. Sat.": "epistulae ad imp. Augustum fragm. (vix spurium) servatum apud MACR. Sat.", 
   "georg.": "georgica", 
   "Aen.": "Aeneis"
  }, 
  [
   "-70", 
   "-19", 
   "", 
   ""
  ]
 ], 
 "SEN. $1": [
  "L. Annaeus Seneca", 
  {
   "Ag.": "Agamemno", 
   "rem. fort.": "de remediis fortuitorum quae exstant", 
   "amic.": "de amicitia fragmenta Palatina", 
   "Herc. O.": "Hercules (Oetaeus)", 
   "Oed.": "Oedipus", 
   "frg.": "deperditorum operum fragmenta minora", 
   "Thy.": "Thyestes", 
   "Phaedr.": "Phaedra sive Hippolytus", 
   "benef.": "de beneficiis", 
   "1": "de\u00a0providentia\u00a0(opus\u00a0senectutis)", 
   "apocol.": "divi Claudii apocolocyntosis", 
   "2": "de\u00a0constantia\u00a0sapientis", 
   "7": "de\u00a0vita\u00a0beata", 
   "6": "consolatio\u00a0ad\u00a0Marciam\u00a0(aet. Calig.)", 
   "9": "de\u00a0tranquillitate\u00a0animi", 
   "8": "de\u00a0otio\u00a0(post\u00a062?)", 
   "11\u00a0(olim\u00a012)": "consolatio\u00a0ad\u00a0Polybium\u00a0(a. 41/44)", 
   "epist.": "epistulae morales ad Lucilium", 
   "Med.": "Medea", 
   "Herc. f.": "Hercules (furens)", 
   "vita patr.": "de vita patris quae exstant", 
   "dial.": "dialogi", 
   "Tro.": "Troades", 
   "10": "de\u00a0brevitate\u00a0vitae\u00a0(a. 48/50)", 
   "3\u20145": "de\u00a0ira\u00a0libri\u00a01\u20143\u00a0(Caligula\u00a0mortuo)", 
   "clem.": "de clementia (opus mutilum)", 
   "Phoen.": "Phoenissae", 
   "nat.": "naturales quaestiones", 
   "12\u00a0(olim\u00a011)": "consolatio\u00a0ad\u00a0Helviam\u00a0(fere\u00a0a. 42)"
  }, 
  [
   "1", 
   "65", 
   "(Seneca philosophus, rhetoris filius)", 
   ""
  ]
 ], 
 "PETIL.": [
  "Petilianus", 
  {
   "Aug. c. Petil.": "fragmenta, e. g. fragm. servatum apud AVG. c. Petil."
  }, 
  [
   "350", 
   "450", 
   "episcopus Donatista Cirtensis", 
   ""
  ]
 ], 
 "PAPIR.": [
  "Papirius Iustus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "130", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "ATTA": [
  "T. Quin(c)tius Atta", 
  {
   "carm. frg.": "carminum fragm. unicum (ex epigrammatibus)", 
   "com.": "comoediarum (sc. togatarum) fragmenta"
  }, 
  [
   "-150", 
   "-77", 
   "", 
   ""
  ]
 ], 
 "FAB. PICT.": [
  "Fabius Pictor", 
  {
   "iuris pontificii (operis a nonnullis FAB. MAX. tributi) fragmenta a scriptoribus servata, e. g. fragm. apud GELL.": "iuris pontificii (operis a nonnullis FAB. MAX. tributi) fragmenta a scriptoribus servata, e. g. fragm. apud GELL.", 
   "hist.": "librorum historicorum (sc. annalium) fragmenta"
  }, 
  [
   "-254", 
   "-201", 
   "", 
   "vix Q. Fab. Pict., qui annales graecos conscripsit"
  ]
 ], 
 "MAX. MADAVR.": [
  "Maximus Madaurensis", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "grammaticus paganus", 
   ""
  ]
 ], 
 "DIFF.": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PACAT.": [
  "Pacatus", 
  {
   "c. Porph. frg.": "contra Porphyrium fragmenta"
  }, 
  [
   "340", 
   "399", 
   "", 
   ""
  ]
 ], 
 "EVTR. VAL.": [
  "Eutropius Valentiae", 
  {
   "epist.": "epistulae"
  }, 
  [
   "350", 
   "610", 
   "episcopus Hispanus", 
   ""
  ]
 ], 
 "GALL.": [
  "C. Cornelius Gallus", 
  {
   "carm. frg.": "carminum fragmenta", 
   "Vib. Seq. geogr.": "fragm. servatum apud VIB. SEQ. geogr."
  }, 
  [
   "-70", 
   "-26", 
   "", 
   ""
  ]
 ], 
 "TRABEA": [
  "Trabea", 
  {
   "com.": "comoediarum palliatarum fragmenta"
  }, 
  [
   "-250", 
   "-150", 
   "", 
   ""
  ]
 ], 
 "TRAIAN.": [
  "imp. Traianus", 
  {
   "Plin. epist.": "epistulae ad Plinium"
  }, 
  [
   "53", 
   "117", 
   "", 
   ""
  ]
 ], 
 "[PVLCH.]": [
  "(Aelia) Pulcheria Augusta", 
  {
   "[Leo M. epist.]": "epistula ad Leonem Magnum latine versa"
  }, 
  [
   "", 
   "", 
   "", 
   "CONC. S II 3,1 p. 9,22"
  ]
 ], 
 "MET. MAC.": [
  "Q. Caecilius Metellus Macedonicus", 
  {
   "or. frg. Gell.": "orationis de prole augenda"
  }, 
  [
   "-190", 
   "-115", 
   "", 
   "fragmenta apud GELL. servata"
  ]
 ], 
 "COM.": [
  "", 
  {
   "pall. inc.": "comoediae palliatae poetarum incertorum fragmenta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTONIN. HONORAT.": [
  "Antoninus Honoratus", 
  {
   "epist. ad Arc.": "hortatoria ad martyrium epistula ad Arcadium quendam"
  }, 
  [
   "400", 
   "450", 
   "episcopus Afer (sc. Constantinae civitatis)", 
   ""
  ]
 ], 
 "VICTOR": [
  "Victor", 
  {
   "Fulg. Rusp. epist.": "epistula ad Fulgentium Ruspensem"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CINC.": [
  "L. Cincius", 
  {
   "fragmenta a scriptoribus servata, e. g. fragm. apud FEST": "fragmenta a scriptoribus servata, e. g. fragm. apud FEST"
  }, 
  [
   "-250", 
   "-150", 
   "", 
   ""
  ]
 ], 
 "TER.": [
  "P. Terentius Afer", 
  {
   "Phorm.": "Phormio", 
   "Haut.": "H(e)autontimorumenos", 
   "Eun.": "Eunuchus", 
   "Hec.": "Hecyra", 
   "Ad.": "Adelphoe", 
   "Andr.": "Andria"
  }, 
  [
   "-195", 
   "-158", 
   "", 
   ""
  ]
 ], 
 "ACC.": [
  "Lucius Accius <Pisaurensis>", 
  {
   "carm. frg.": "carminum (praeter scaenica) fragmenta", 
   "praetext.": "praetextarum fragmenta", 
   "trag.": "tragoediarum fragmenta"
  }, 
  [
   "-170", 
   "90", 
   "", 
   ""
  ]
 ], 
 "AMBR.": [
  "Ambrosius", 
  {
   "obit. Valent.": "de obitu Valentiniani (sc. iunioris imperatoris)", 
   "bon. mort.": "de bono mortis", 
   "virginit.": "de virginitate", 
   "incarn.": "de incarnationis dominicae sacramento", 
   "in psalm.": "explanatio XII psalmorum", 
   "Isaac": "de Isaac et anima", 
   "inst. virg.": "de institutione virginis (de S. Mariae virginitate perpetua)", 
   "fug. saec.": "de fuga saeculi", 
   "[Carm. epigr.]": "epigrammata, quae olim medii aevi auctoribus freti (lapides perierunt) plane Ambrosio ascribebamus, nunc a CE non segregare tutius esse censemus", 
   "virg.": "de virginibus", 
   "Noe": "de Noe", 
   "in Luc.": "expositio euangelii sec. Lucam", 
   "Hel.": "de Helia et ieiunio", 
   "Iob": "libri de interpellatione Iob et David", 
   "patr.": "de patriarchis", 
   "tituli": "tituli, qui in basilica Ambrosiana imaginibus quibusdam inscripti Ambrosii (aut Prudentii) esse traduntur", 
   "symb.": "explanatio symboli", 
   "obit. Theod.": "de obitu Theodosii (sc. imperatoris)", 
   "c. Aux.": "sermo contra Auxentium (Arianum) de basilicis tradendis", 
   "Iac.": "de Iacob et vita beata", 
   "parad.": "de paradiso", 
   "paenit.": "de paenitentia", 
   "sacr.": "de sacramentis", 
   "in psalm 118 serm. 22": "expositio in psalmum 118, sermo 22", 
   "exc. Sat.": "de excessu fratris (sc. Satyri)", 
   "Abr.": "de Abraham", 
   "off.": "de officiis ministrorum", 
   "Nab.": "de Nabuthae (i. Naboth)", 
   "vid.": "de viduis", 
   "myst.": "de mysteriis", 
   "hex.": "(h)exa(e)meron", 
   "exhort. virg.": "exhortatio virginitatis", 
   "spir.": "de spiritu sancto", 
   "Cain et Ab.": "de Cain et Abel", 
   "Tob.": "de Tobia", 
   "fid.": "de fide (ad Gratianum Augustum)", 
   "Ioseph": "de Ioseph (sc. patriarcha)", 
   "epist. epistulae": "diverse", 
   "apol. Dav.": "de apologia prophetae David ad Theodosium Augustum"
  }, 
  [
   "339", 
   "397", 
   "episcopus Mediolanensis", 
   ""
  ]
 ], 
 "[LAMPR.]": [
  "Aelius Lampridius (e numero scriptorum historiae Augustae fictorum, quos nunc una nota HIST. AVG. comprehendimus)", 
  {}, 
  [
   "350", 
   "450", 
   "", 
   "HIST. AVG."
  ]
 ], 
 "FVLG. RVSP.": [
  "Fulgentius Ruspensis", 
  {
   "c. Arrian.": "contra Arianos (sc. dicta vel obiectiones regis Thrasamundi et contra ea responsiones)", 
   "epist.": "epistulae", 
   "ad Eugipp. frg.": "'ad Eugippium presbyterum contra sermonem cuiusdam Pelagiani opuscula' deperdita", 
   "rem. pecc.": "de remissione peccatorum", 
   "serm. sermones": "diverse", 
   "c. Fab. frg.": "fragmenta operis contra gesta falsa Fabiani Ariani", 
   "dub.": "sermones dubii in Corp. Christ. editi", 
   "incarn.": "de incarnatione ad Scarilam", 
   "praedest.": "de veritate praedestinationis et gratiae", 
   "fid.": "de fide ad Petrum", 
   "ad Tras.": "ad T(h)rasamundum regem Vandalorum", 
   "c. Fastid.": "contra Fastidiosum Arianum", 
   "ad Monim.": "ad Monimum", 
   "psalm. abeced.": "psalmus abecedarius (sc. contra Arianos)", 
   "trin.": "de trinitate"
  }, 
  [
   "462", 
   "533", 
   "in Byzacena episcopus", 
   ""
  ]
 ], 
 "FAB. MAX.": [
  "Q. Fabius Maximus Servilianus", 
  {
   "hist.": "fragmenta"
  }, 
  [
   "-200", 
   "-201", 
   "historiarum scriptor", 
   ""
  ]
 ], 
 "ATT.": [
  "T. Pomponius Atticus", 
  {
   "epistularum ad Ciceronem amicum": "epistularum ad Ciceronem amicum"
  }, 
  [
   "-110", 
   "-32", 
   "", 
   "fragm. servata apud CIC. Att."
  ]
 ], 
 "SEDAT.": [
  "Sedatus", 
  {
   "ad Ruric. epist.": "epistula 8 inter epistulas ad Ruricium scriptas", 
   "serm.": "sermones tres"
  }, 
  [
   "450", 
   "550", 
   "episcopus Nemausensis", 
   ""
  ]
 ], 
 "SCRIB. LARG.": [
  "Scribonius Largus", 
  {
   "compositiones": "compositiones"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "SCHEM.": [
  "incerti auctoris", 
  {
   "dian.": "sc(h)emata dianoeas"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. MVSA": [
  "(Pseudo-) Antonius Musa", 
  {
   "app.": "appendix unius codicis", 
   "herb. Vett.": "libellus de herba Vettonica (betonica)"
  }, 
  [
   "400", 
   "499", 
   "Augusti medicus", 
   ""
  ]
 ], 
 "PENTAD.": [
  "Pentadius", 
  {
   "anth.": "carmina"
  }, 
  [
   "nicht datierbar", 
   "", 
   "", 
   ""
  ]
 ], 
 "[AGOR.]": [
  "M. Vettius Agorius Praetextatus", 
  {
   "[carm. epigr.]": "carmen nesciocuius persona M. Vettii Agorii Praetextati"
  }, 
  [
   "315", 
   "384", 
   "", 
   ""
  ]
 ], 
 "CATO NEP.": [
  "M. Porcius Cato", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud PRISC. gramm. II": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud PRISC. gramm. II"
  }, 
  [
   "-200", 
   "-118", 
   "Censorii nepos", 
   ""
  ]
 ], 
 "COLVMB. HYENS.": [
  "Columba (Columcille) <Hyensis>", 
  {
   "fabric.": "hymnus abecedarius de fabrica mundi"
  }, 
  [
   "521", 
   "597", 
   "abbas", 
   ""
  ]
 ], 
 "SCIP. MAI.": [
  "P. Cornelius Scipio Africanus maior", 
  {
   "or. frg. Gell.": "orationum fragmenta (dubia), e. g. fragm. servatum apud GELL."
  }, 
  [
   "-235", 
   "-183", 
   "", 
   ""
  ]
 ], 
 "NINN.": [
  "Ninnius Crassus", 
  {
   "carm. frg.": "Iliados fragmenta"
  }, 
  [
   "republikanische Zeit, keine Lebensdaten", 
   "", 
   "\u00dcbersetzer der Ilias", 
   ""
  ]
 ], 
 "TVRRAN.": [
  "Turranius (T. Turranius Niger)", 
  {
   "Diom. gramm.": "de agri cultura fragm. servatum apud DIOM. gramm."
  }, 
  [
   "-100", 
   "-1", 
   "Varronis amicus", 
   ""
  ]
 ], 
 "DIVISIO": [
  "", 
  {
   "orb.": "divisio orbis terrarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROVINC.": [
  "", 
  {
   "laterc. Veron.": "provinciarum laterculus codicis Veronensis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EVGEN.": [
  "Eugenius", 
  {
   "epistula ad cives suos, v. GREG. TVR. Franc.": "epistula ad cives suos, v. GREG. TVR. Franc.", 
   "epistula ad magistratum quendam et liber fidei catholicae, v. VICT. VIT.": "epistula ad magistratum quendam et liber fidei catholicae, v. VICT. VIT."
  }, 
  [
   "450", 
   "505", 
   "episcopus Carthaginiensis", 
   ""
  ]
 ], 
 "SEDVL.": [
  "Sedulius", 
  {
   "[carm. app.]": "carminum appendix ad Sedulium spectantium", 
   "op. pasch.": "opus paschale", 
   "epist.": "epistulae ad Macedonium presbyterum", 
   "carm. pasch.": "carmen paschale", 
   "hymn.": "hymni"
  }, 
  [
   "350", 
   "450", 
   "presbyter", 
   "ANTH. 491\u2014493"
  ]
 ], 
 "RVT. MAX.": [
  "Rutilius Maximus", 
  {
   "dig.": "fragm. servatum in DIG."
  }, 
  [
   "200", 
   "299", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "PRIAP.": [
  "", 
  {
   "Priapea": "Priapea"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LIV. $1": [
  "", 
  {
   "epit. Oxyrh.": "operis Liviani epitoma, cuius fragmenta servata sunt fere papyro Oxyrhynch. 668"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LIV. $2": [
  "", 
  {
   "perioch.": "operis Liviani integri periochae, quae codicibus servantur"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. CHRYSOST.": [
  "Pseudo-Chrysostomus", 
  {
   "serm. M\u00e9l. Geerard I": "sermo (de beato Ioseph) editus M\u00e9langes Geerard I", 
   "hom.": "homiliae in editione Basil. collectae", 
   "de solstit.": "de solstitia et aequinoctia conceptionis et nativitatis d. n. Iesu Christi et Iohannis Baptistae"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "LEX": [
  "", 
  {
   "Iul. de adult. (dig. 48,5,13)": "lex Iulia de adulteriis", 
   "cur. Iov. Simitth. (CIL VIII 14683)": "lex curiae Iovis (vix decretum collegii familiaris) Simitthensis", 
   "Tarent. (CIL I2 590)": "lex municipii Tarentini", 
   "Mamil. (grom. p. 266,4)": "lex Mamilia Roscia Peducaea Alliena Fabia", 
   "Iul. Pap. (dig. 23,2,44 pr.)": "lex vel leges Iulia (sc. de maritandis ordinibus) et Papia Poppaea", 
   "Plaetor. (Cens. 24,3)": "lex Plaetoria (de iurisdictione), fragm. servatum apud CENS. 24,3", 
   "Irnit.": "lex Irnitana", 
   "Papir. (Fest. p. 344)": "lex Papiria, fragm. servatum apud FEST. p. 344", 
   "[epil. p. 410 E.]": "epilogus post tit. 93 editus", 
   "lib. const.": "liber constitutionum (lex Gundobada)", 
   "Salpens. (CIL II 1963)": "lex municipii Salpensani", 
   "arae Aug. Narb. (CIL XII 4333)": "leges arae, e. g. Augusti Narbonensis", 
   "de Germ.": "lex (rogata) Valeria Aurelia de honoribus Germanico Caesari defuncto tribuendis", 
   "Manc. (CIL VIII 25902)": "lex (epistula?) de villae Magnae colonis ad exemplum legis Mancianae data", 
   "inc. Tarent. (CIL I2 2924)": "lex incerta (repetundarum?) tabulae Tarentinae", 
   "Rom.": "lex Romana (Papianus q. d.)", 
   "met. Vipasc.": "leges metalli Vipascensis", 
   "Rom. ind. capp.": "index capitulorum legi Romanae antepositus", 
   "agr. (CIL I2 585)": "lex (Baebia?) agraria, lin. CIV", 
   "Aquilia (dig. 9,2,27,5)": "lex Aquilia de damno, e. g. fragm. servatum in DIG. 9,2,27,5", 
   "reg. (Fest. p. 230)": "fragmenta legum, quae regibus Romanis ascribuntur, e. g. lex (Romuli) servata apud FEST. p. 230", 
   "[Sal.]": "lex Salica", 
   "eborar. (CIL VI 33885)": "collegii eborariorum et citriariorum", 
   "[extr.]": "lex extravagans", 
   "app.": "appendix (ita nominata a Zeumer1), sc. fragmen-torum Gaudenzianorum pars posterior", 
   "decr. Child.": "decretus Childeberto [II] rege'", 
   "[capit. 7,12 p. 456 E.]": "capitulorum additorum series VII, \u00a712 p. 456 Eckhardt1", 
   "Rubr. (CIL I2 592)": "lex (Rubria q. d.) de Gallia cisalpina", 
   "XII tab.": "lex vel leges XII tabularum", 
   "Hadr. (CIL VIII 25943)": "lex Hadriana q. d. ('sermo procuratorum')", 
   "Atinia (Gell. 17,7,1)": "lex Atinia de usucapione, fragm. servatum apud GELL. 17,7,1", 
   "prol.": "prologus (sc. II brevior q. d.)", 
   "Falcid. (dig. 35,2,1 pr.)": "lex Falcidia, fragmenta servata in DIG. 35,2,1 pr.", 
   "Sal. Merov.": "legis Salicae partes vel recensiones vetustiores (pactus legis Salicae), quae aetate Merovingorum", 
   "locat. Puteol. (Ann\u00e9e \u00c9pigr. 1971 n. 88) 3,25": "leges locationis, e. g. Puteolana", 
   "[Rubr. (?) frg. Atest.]": "[Rubr. (?) frg. Atest.]", 
   "luci": "leges lucorum", 
   "Spolet. (CIL I2 366)": "luci Spoletini", 
   "lib. const. ind. capp.": "index capitulorum libro constitutionum antepositus", 
   "Cic. Att.": "legum, quae non propria nota distinguuntur, fragmenta a scriptoribus servata, e. g. fragm. legis (promulgatae tantum) apud CIC. Att.", 
   "extr.": "constitutiones extravagantes", 
   "[Tarent. repetund.]": "[Tarent. repetund.]", 
   "praef.": "praefatio libri constitutionum ('prima constitutio')", 
   "Malac. (CIL II 1964)": "lex municipii Malacitani", 
   "Iun. Vell. (dig. 28,2,29,12)": "lex Iunia Vellaea", 
   "Bant. (CIL I2 582)": "lex latina tabulae Bantinae", 
   "horr. (CIL VI 33747)": "lex horreorum", 
   "suppl.": "supplementa ex lege Romana (sc. breviario Alarici) excepta", 
   "[chron.]": "chronica regum Visigothorum", 
   "vic. Furf. (CIL I2 756)": "lex a vicanis Furfensibus templo Iovis dicta", 
   "repetund. (CIL I2 583)": "lex (Acilia?) repetundarum", 
   "salut. Dian. et Antin. (CIL XIV 2112)": "collegii salutaris Dianae et Antinoi", 
   "Burg.": "leges Burgundionum (a Gundobado rege vel eius successoribus collectae, datae, retractatae)", 
   "Gabin. Calp. (CIL I2 2500)": "lex Gabinia Calpurnia de Delo insula", 
   "Iul. munic. (CIL I2 593)": "lex tabulae Heracleensis (Iulia municipalis q. d.)", 
   "colleg.": "leges collegiorum", 
   "Lucer. (CIL I2 401)": "luci Lucerini", 
   "Tappula (Inscr. suppl. Ital. 898)": "lex convivalis Tappula", 
   "Visig.": "leges Visigothorum a Zeumer collectae, sc. fere codicis Euriciani fragmenta nec non liber iudiciorum", 
   "Anton. de Term. (CIL I2 589)": "Antonia de Termessibus", 
   "Quinctia (Frontin. aq. 129,11)": "lex Quinctia de aquaeductibus servata apud FRONTIN. aq. 129", 
   "Iul. de vi (coll. Mos. 9,2,2)": "lex (vel leges) Iulia de vi publica et privata", 
   "tab. Heb.": "tabula Hebana", 
   "Corn. de XX quaest. (CIL I2 587)": "lex Cornelia de XX quaestoribus", 
   "conviv. (Querol.)": "lex convivalis (decretum parasiticum) ioci causa ficta, cuius fragm. traditum est una cum QVEROL.", 
   "aq. Tiburt. (CIL XIV 3676)": "aquarum, e. g. aquae Tiburtinae", 
   "par. fac. Puteol. (CIL I2 698)": "lex parieti faciendo Puteolana", 
   "tab. Siar. II": "tabula Siarensis, fragm. II", 
   "Cincia (frg. Vat. 307)": "lex Cincia de donationibus, fragmenta inter FRG. Vat. servata", 
   "Eur.": "codex Eurici regis (466\u2014484) nondum a Leovigildo rege (568\u2014586) retractatus, fragmenta in codice saec. VI servata", 
   "caus.": "septem causas'", 
   "Corn. (Cic. Cluent. 148)": "lex Cornelia de sicariis et veneficis, e. g. fragmenta servata apud CIC. Cluent. 148", 
   "Vrson. (CIL I2 594)": "lex coloniae Genetivae Iuliae sive Vrsonensis", 
   "Atest. (CIL I2 600) 20": "fragmentum Atestinum legis cuiusdam (legi Rubriae similis, sed vix illuc pertinentis), lin. 20", 
   "Sil.": "lex Silia de ponderibus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[DECRET.] $6": [
  "", 
  {
   "[de via Caecil.]": "locatio operum in via Caecilia, vix decretum"
  }, 
  [
   "", 
   "", 
   "", 
   "CIL I2 808"
  ]
 ], 
 "[DECRET.] $5": [
  "", 
  {
   "[navic.]": "[navic.]"
  }, 
  [
   "", 
   "", 
   "", 
   "EPIST. Iulian."
  ]
 ], 
 "[DECRET.] $4": [
  "", 
  {
   "[mens.]": "dedicatio statuae a mensoribus Portuensibus facta, vix decretum"
  }, 
  [
   "", 
   "", 
   "", 
   "CIL VI 1759"
  ]
 ], 
 "[DECRET.] $3": [
  "", 
  {
   "[leg. de substit.]": "decretum quoddam legionis de substitutionibus nota propria non iam distinguitur"
  }, 
  [
   "", 
   "", 
   "", 
   "INSCR. Dessau 9100"
  ]
 ], 
 "[DECRET.] $2": [
  "", 
  {
   "[Herculan. Tiburt.]": "[Herculan. Tiburt.]"
  }, 
  [
   "", 
   "", 
   "", 
   "DECRET. decur. Tiburt."
  ]
 ], 
 "[DECRET.] $1": [
  "", 
  {
   "colleg. inc. Pol.": "colleg. inc. Pol."
  }, 
  [
   "", 
   "", 
   "", 
   "DECRET. dendr. Pol."
  ]
 ], 
 "SYNON.": [
  "", 
  {
   "Cic.": "synonyma Ciceronis quae feruntur"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAX. VICTORIN.": [
  "Maxim(ian)us Victorinus", 
  {
   "gramm.": "de ratione metrorum"
  }, 
  [
   "300", 
   "399", 
   "grammaticus", 
   ""
  ]
 ], 
 "MAX. $2": [
  "Maximus <Africanus>", 
  {
   "epist.": "epistula ad Theophilum episcopum Alexandrinum"
  }, 
  [
   "200", 
   "282", 
   "episcopus", 
   ""
  ]
 ], 
 "MAX. $1": [
  "Maximus presbyter et socii", 
  {
   "Cypr. epist.": "epistula ad Cyprianum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NOVELL. $1": [
  "", 
  {
   "app.": "appendix constitutionum dispersarum", 
   "Iust.": "leges novellae, sc. constitutiones, quas post COD. Iust. editum tulit imp. Iustinianus (plurimae sunt primitus graece scriptae; Iuliani epitome v. IVLIAN. epit. novell.; v. etiam EDICT. imp. Iust. de fide)", 
   "edict.": "verba latina in sylloge q. d. Authenticum servata illius edicti"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOM.": [
  "Diomedes", 
  {
   "gramm.": "ars grammatica (nunc decurtata), vol. I"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "PASTOR": [
  "Pastor", 
  {
   "libell.": "libellus in modum symboli"
  }, 
  [
   "400", 
   "499", 
   "episcopus Gallaeciae", 
   ""
  ]
 ], 
 "[ATIL.]": [
  "", 
  {
   "[gramm.]": "[gramm.]"
  }, 
  [
   "", 
   "", 
   "", 
   "FORTVN. gramm."
  ]
 ], 
 "DOLAB.": [
  "P. Cornelius Dolabella", 
  {
   "epistula ad Ciceronem": "epistula ad Ciceronem"
  }, 
  [
   "-70", 
   "-43", 
   "", 
   ""
  ]
 ], 
 "PS. SEN.": [
  "Pseudo-Seneca", 
  {
   "mon.": "monita", 
   "epist. Paul.": "epistulae Senecae ad Paulum et Pauli ad Senecam quae vocantur", 
   "mor.": "liber de moribus", 
   "extr. voc.": "sententiae Rufi q. d. sive Senecae morientis extremae voces"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "PASS.": [
  "", 
  {
   "Quirin.": "passio Quirini episcopi", 
   "Caesar.": "passio Caesarii diaconi et Iuliani presbyteri", 
   "Petr. Paul.": "passiones apostolorum Petri et Pauli", 
   "Mar. Iac.": "passio Mariani et Iacobi", 
   "Thom.": "passio Thomae apostoli", 
   "19": "recensio longior", 
   "Iulian.": "passio Iuliani", 
   "Perp.": "passio Perpetuae et Felicitatis", 
   "Isaac": "passio Isaac et Maximiani", 
   "Lucian.": "acta Luciani et Marciani", 
   "brev.": "passio brevior", 
   "Typas.": "passio Typasii", 
   "[Tarach.]": "passio Tarachi sociorumque", 
   "coron.": "passio IV coronatorum", 
   "Genes.": "passio Genesii Arelatensis Paulino Nolano supposita", 
   "Petr. Andr.": "acta Petri, Pauli, Andreae et Dionysiae latine versa", 
   "Fabii": "passio Fabii vexilliferi", 
   "Polycarp.": "passio Polycarpi e graeco versa", 
   "Fructuos.": "passio Fructuosi episcopi et Augurii et Eulogii diaconorum", 
   "Sus.": "passio Susannae", 
   "Caecil.": "passio Caeciliae", 
   "Clem.": "passio Clementis", 
   "Theclae": "acta Pauli et Theclae latine versa", 
   "Georg.": "passionis Georgii versiones lat. antiquiores", 
   "Andr.": "passiones Andreae apostolic", 
   "Macc.": "passio Macchabaeorum", 
   "Cyriac.": "acta Cyriaci latine versa", 
   "Ignat.": "passio Ignatii episcopi Antiocheni", 
   "Matth.": "martyrium Matthaei apostoli latine versum", 
   "Firm.": "passio et translatio Firmi et Rustici", 
   "Barth.": "passio Bartholomaei apostoli", 
   "Arcad.": "passio Arcadii", 
   "Iren. Sirm.": "passio Irenaei episcopi Sirmiensis", 
   "Donat.": "sermo de passione Donati et Advocati", 
   "Paul.": "passio Pauli apostolic", 
   "Petr.": "passio Petri apostoli", 
   "passiones sanctorum martyrum": "passiones sanctorum martyrum", 
   "Max.": "acta Maximi", 
   "long.": "passio longior", 
   "Crispin.": "passio Crispinae", 
   "Rogat.": "passio Rogatiani et Donatiani", 
   "Marcell.": "acta Marcelli centurionis", 
   "Anastas.": "passio Chrysogoni et Anastasiae", 
   "Scill.": "passio Scil(l)itanorum martyrum", 
   "Stephan.": "passio Stephani papae", 
   "Saturnin.": "passio Saturnini episcopi Tolosani", 
   "Felicit.": "passio Felicitatis cum VII filiis suis", 
   "frg. 3": "recensionis brevioris fragmentum", 
   "Cassian.": "passio Cassiani Tingitani", 
   "Placid.": "passio Eustachii vel Placidae", 
   "Fel.": "passio Felicis episcopi Thibiucensis", 
   "Pont. Cim.": "passio Pontii Cimellensis", 
   "Claud. Ast.": "acta Claudii, Asterii aliorumque", 
   "Saturn. Dat.": "passio Saturnini, Dativi, Felicis, Ampelii sociorumque", 
   "Max. Secund. Donat.": "passio Maximae et Secundae et Donatillae", 
   "Maximil.": "acta Maximiliani", 
   "Montan.": "passio (sive actus et visio) Montani et Lucii", 
   "Cypr. rec. I": "acta proconsularia Cypriani episcopi, recensio I"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "METROL.": [
  "", 
  {
   "tabulae metrologicae variae": "tabulae metrologicae variae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAX.": [
  "Maximus et Theodorus", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "PVBLIC.": [
  "Publicola", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SINN.": [
  "Sinnius Capito", 
  {
   "Gell.": "fragm. servatum apud GELL."
  }, 
  [
   "-100", 
   "-1", 
   "grammaticus", 
   ""
  ]
 ], 
 "VIR.": [
  "incerti auctoris", 
  {
   "ill.": "liber de viris illustribus urbis Romae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARCELL.": [
  "Marcellinus", 
  {
   "chronica a fine Hieronymi chron.": "chronica a fine Hieronymi chron.", 
   "auct. chron.": "auctarium (in fine mutilum) a quodam Marcellini chronicis additum", 
   "chron.": "pars genuina (bis a Marcellino edita) ad ann. 534 producta"
  }, 
  [
   "450", 
   "534", 
   "comes Illyricianus", 
   ""
  ]
 ], 
 "DONATIST.": [
  "", 
  {
   "Aug. un. eccl.": "Donatistarum verba ab Augustino in epistula ad catholicos relata"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VINCENT. LER.": [
  "Vincentius Lerinensis", 
  {
   "exc.": "excerpta ex AVG.", 
   "comm.": "commonitorium"
  }, 
  [
   "350", 
   "450", 
   "presbyter", 
   ""
  ]
 ], 
 "NOT. $3": [
  "", 
  {
   "Gall.": "notitia Galliarum (i. e. provinciarum et civitatum Gallicanarum)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TRANSIT.": [
  "", 
  {
   "Mar.": "transitus Mariae apocryphus latine versus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LAVD.": [
  "", 
  {
   "Murdiae (CIL VI 10230)": "Murdiae L. f. cuiusdam", 
   "Turiae": "Turiae q. d.", 
   "laudatio funebris": "laudatio funebris"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IVDICIVM": [
  "", 
  {
   "Contreb. (CIL I2 2951a)": "iudicium, quod senatus Contrebiensis de controversia inter Salluienses et Allavonenses dedit"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VITA $1": [
  "", 
  {
   "Fulg. Rusp.": "vita Fulgentii Ruspensis", 
   "Abr. B II": "vita Abrahae eremitae latine versa, versio B pars altera (sc. vita Mariae meretricis)", 
   "Caes. Arel.": "vita Caesarii episcopi Arelatensis", 
   "Nicet.": "vita Nicetii episcopi Lugdunensis", 
   "Hil. Arel.": "vita Hilarii Arelatensis", 
   "Anton.": "vitae Antonii monachi ab Athanasio episcopo Alexandrino conscriptae versio lat.", 
   "Amator.": "vita Amatoris episcopi Autissiodorensis", 
   "Genov.": "vita Genovefae virginis Parisiensis", 
   "Eugen.": "vita Eugeniae", 
   "Athan.": "vitae Athanasii historia acephala e graeco versa", 
   "Adae": "vita Adae et Evae apocrypha latine versa"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PALLAD.": [
  "Palladius Rutilius Taurus Aemilianus", 
  {
   "opus agriculturae": "opus agriculturae"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "PAPIR. $1": [
  "Q. Papiri(an)us", 
  {
   "de orthographia": "de orthographia"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "CLOAT.": [
  "Cloatius Verus", 
  {
   "fragmenta grammatica a scriptoribus servata, e. g. fragm. apud MACR. Sat.": "fragmenta grammatica a scriptoribus servata, e. g. fragm. apud MACR. Sat."
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "SVEIVS": [
  "Sueius", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "INVENT.": [
  "", 
  {
   "cruc.": "inventio sanctae crucis (sc. passionis Cyriaci pars prior; e graeco versa)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALC. AVIT.": [
  "Alcimus Ecdicius Avitus", 
  {
   "c. Ar.": "librorum contra Arianos fragmenta", 
   "epist. epistulae": "diverse", 
   "carm.": "carmina", 
   "c. Eutych.": "contra Eutychianam haeresim", 
   "hom.": "homiliarum quae exstant"
  }, 
  [
   "470", 
   "519", 
   "episcopus Viennensis", 
   ""
  ]
 ], 
 "LIB. $3": [
  "", 
  {
   "chron. I": "Lib. gen. I", 
   "a. 334 chron. I": "Lib. gen. II a. 334", 
   "gener.": "liber generationis uterque, qui ex eadem stirpe (Hippolyti chronicis graecis) ac CHRON. Alex. ortus iuxta hoc opusculum a Mommsen editus est"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IOH.": [
  "Iohannes", 
  {
   "epist. ad Sen.": "epistula ad Senarium (in fine mutila)"
  }, 
  [
   "", 
   "", 
   "diaconus", 
   ""
  ]
 ], 
 "IANVAR.": [
  "Ianuarianus", 
  {
   "epist.": "epistula ad Valentinum abbatem Hadrumetinum"
  }, 
  [
   "350", 
   "450", 
   "presbyter Africanus", 
   ""
  ]
 ], 
 "NAEV. IVN.": [
  "Naevius iunior", 
  {
   "Cypr. Il.": "Cypriae Iliados fragmenta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FRONTO": [
  "M. Cornelius Fronto Cirtensis", 
  {
   "operum (fere epistularum) reliquiae, quae in codicibus rescriptis (fere cod. Bobiensi) exstant": "operum (fere epistularum) reliquiae, quae in codicibus rescriptis (fere cod. Bobiensi) exstant", 
   "[adnot.]": "[adnot.]", 
   "Char. gramm.": "fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm."
  }, 
  [
   "100", 
   "170", 
   "", 
   ""
  ]
 ], 
 "BARNAB.": [
  "", 
  {
   "epistulae Barnabae Pauli socio perperam ascriptae (saec. IImed. ) versio latina": "epistulae Barnabae Pauli socio perperam ascriptae (saec. IImed. ) versio latina"
  }, 
  [
   "300", 
   "499", 
   "", 
   ""
  ]
 ], 
 "SCAEV. MEM.": [
  "Scaevus Memor", 
  {
   "trag.": "tragoediarum fragmentum"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "CRESC.": [
  "Cresconius", 
  {
   "Aug. c. Cresc.": "verba ab Augustino allata"
  }, 
  [
   "350", 
   "450", 
   "grammaticus partis Donati", 
   ""
  ]
 ], 
 "MANCIA": [
  "Helvius Mancia", 
  {
   "or. frg. Val. Max.": "orationis in Scribonium Libonem fragm. servatum apud VAL. MAX."
  }, 
  [
   "-120", 
   "-50", 
   "", 
   ""
  ]
 ], 
 "MACAR.": [
  "Macarius Aegyptius", 
  {
   "ad fil. dei": "epistula ad filios dei q. d. e graeco (inedito) versa"
  }, 
  [
   "300", 
   "391", 
   "", 
   ""
  ]
 ], 
 "SENT.": [
  "", 
  {
   "Minuc.": "Q. et M. Minuciorum Q. ff. Ruforum", 
   "centur.": "P. Matii centurionis legionis III Cyrenaicae", 
   "procos. Sard.": "L. Helvii Agrippae proconsulis Sardiniae", 
   "Helvidii Prisci": "C. Helvidii Prisci arbitri ex compromisso", 
   "leg. Aug. pr. pr.": "C. Avidii Nigrini legati Augusti pro praetore de controversia inter Delphos et Anticyrenses", 
   "subpraef.": "Alfenii Senecionis subpraefecti classis praetoriae Misenatis", 
   "sententiae magistratuum sim. Romanorum de litibus": "sententiae magistratuum sim. Romanorum de litibus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CVRIOS.": [
  "", 
  {
   "urb.": "curiosum urbis Romae, sc. libelli de regionibus urbis Romae recensio altera"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLAC.": [
  "Sex. Placitus Papyriensis", 
  {
   "med.": "liber medicinae"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "MAR. MERC.": [
  "Marius Mercator", 
  {
   "[comp.]": "comparatio dogmatum Pauli Samosateni et Nestorii", 
   "[Theod. exc.]": "Theodori Mopsuesteni al. excerpta", 
   "[Nest. serm.]": "Nestorii sermones XIII de incarnatione Christi", 
   "[Nest. adv. Pel.]": "Nestorii tractatus IV contra haeresim Pelagii", 
   "[Cyr. resp.]": "Cyrilli Alexandrini episcopi responsio ad ea, quae Theodoretus contra anathematismos dixit", 
   "[Cyr. epist. cler. comm.]": "commonitorium epistulae Cyrilli ad clericos subiunctum", 
   "[Theod. expos.]": "expositio pravae fidei Theodori Mopsuesteni (una cum praefatione)", 
   "[Theod. adv. Cyr.]": "excerpta ex libris Theodoreti adversus Cyrillum Alexandrinum episcopum", 
   "[Cyr. epist. syn.]": "Cyrilli Alexandrini episcopi epistula synodica ad Nestorium", 
   "[Nest. epist. Cyr.]": "Nestorii epistula ad Cyrillum Alexandrinum episcopum", 
   "[Cyr. incarn.]": "Cyrilli Alexandrini episcopi scholia de incarnatione unigeniti", 
   "[Cyr. epist. Nest.]": "Cyrilli Alexandrini episcopi epistulae duae ad Nestorium", 
   "[app.]": "appendix ad contradictionem duodecimi anathematismi Nestoriani", 
   "[Cael.]": "commonitorium super nomine Caelestii", 
   "[Theod. refut.]": "refutatio symboli Theodori Mopsuesteni", 
   "[Cyr. apol.]": "Cyrilli Alexandrini episcopi apologeticus pro XII capitibus adversus orientales episcopos", 
   "[Nest. Eph. synod.]": "excerpta antistitum quae recitata sunt contra Nestorium in synodo Ephesiorum", 
   "[Theod. epist.]": "excerpta fere ex epistulis Theodoreti", 
   "[Euther.]": "Eutherii episcopi haeretici fragmenta (una cum interpretis praefatione et epilogo)", 
   "[subnot.]": "liber subnotationum in verba Iuliani (commonitorium adversus haeresim Pelagii)", 
   "[Nest. exc.]": "de diversis Nestorii libris excerpta", 
   "[Cyr. epist. cler.]": "Cyrilli Alexandrini episcopi epistula ad clericos quosdam", 
   "[Nest. epist. Cael.]": "Nestorii epistula ad Caelestinum papam", 
   "[contrad.]": "contradictiones in blasphemias Nestorii XII"
  }, 
  [
   "390", 
   "451", 
   "monachus", 
   "CONC. S I 5 p. 84,17"
  ]
 ], 
 "GROM.": [
  "", 
  {
   "scripta gromatica, sc. ad artem agrimensorum pertinentia, quorum plurima iam antiquitatis vergentis temporibus in corpus collata sunt (saepe fragmenta, excerpta sim., de quorum aetate nimirum non raro parum constat": "scripta gromatica, sc. ad artem agrimensorum pertinentia, quorum plurima iam antiquitatis vergentis temporibus in corpus collata sunt (saepe fragmenta, excerpta sim., de quorum aetate nimirum non raro parum constat"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[LEMMA]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "TITVLVS"
  ]
 ], 
 "CELS. $1": [
  "P. Iuventius Celsus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "50", 
   "118", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "OCTAVIA": [
  "Pseudo-Seneca", 
  {
   "Octavia praetexta": "Octavia praetexta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROBA": [
  "", 
  {
   "cento": "Proba, cento Vergilianus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[TRACT.]": [
  "", 
  {
   "[de agr. insp. grom.]": "tractatus de agrorum inspectione"
  }, 
  [
   "", 
   "", 
   "", 
   "HYG. grom."
  ]
 ], 
 "ISID.": [
  "Isidorus", 
  {
   "sent.": "sententiae (sc. Augustini, Gregorii Magni, al.)", 
   "Sueb.": "de regno Sueborum", 
   "[in gen.]": "[in gen.]", 
   "alleg.": "allegoriae quaedam sacrae scripturae (de nominibus legis et euangeliorum)", 
   "fid. cath.": "de fide catholica ex vetere et novo testamento (contra Iudaeos)", 
   "carm.": "carmina (sc. tituli)", 
   "[in Ios.]": "[in Ios.]", 
   "[in reg.]": "in librum quartum regum", 
   "chron.": "chronica (sc. maiora bis edita)", 
   "dedic. hist. chron. II": "dedicatio historiarum Gothorum Vandalorum Sueborum ad Sisenandum regem (genuina?), vol. II", 
   "praef. test.": "praefationes in libros veteris ac novi testamenti (prooemia)", 
   "[in Esdr.]": "[in Esdr.]", 
   "orig.": "origines (etymologiae; opus imperfectum)", 
   "diff.": "differentiae", 
   "lib. num.": "liber numerorum, qui in sanctis scripturis occurrunt", 
   "epist.": "epistulae", 
   "synon.": "synonyma (de lamentatione animae peccatricis)", 
   "Vand.": "de historia Vandalorum", 
   "[ord. creat.]": "de ordine creaturarum", 
   "[in num.]": "[in num.]", 
   "[in lev.]": "[in lev.]", 
   "eccl. off.": "officia (de ecclesiasticis officiis)", 
   "[in Macc.]": "[in Macc.]", 
   "Goth.": "de origine Gothorum", 
   "[in iud.]": "[in iud.]", 
   "[in exod.]": "[in exod.]", 
   "[diff. app.]": "[diff. app.]", 
   "vir. ill.": "de viris illustribus", 
   "expos. in gen.": "mysticorum expositiones sacramentorum (quaestiones in vetus testamentum, sc. in gen., exod., lev., num., deut., Ios., iud., reg., Esdr., Macc.), in genesin", 
   "reg. monach.": "regula monachorum", 
   "[in deut.]": "[in deut.]", 
   "nat.": "de natura rerum", 
   "ort. et obit.": "de ortu et obitu patrum", 
   "[quaest. test.]": "de vetere et novo testamento quaestiones"
  }, 
  [
   "560", 
   "636", 
   "episcopus Hispalensis", 
   ""
  ]
 ], 
 "SCARILA": [
  "Scarila", 
  {
   "Fulg. Rusp. epist.": "epistula ad Fulgentium Ruspensem"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "RVF.": [
  "Rufus Ephesius", 
  {}, 
  [
   "80", 
   "150", 
   "medicus", 
   ""
  ]
 ], 
 "MEROB.": [
  "Flavius Merobaudes", 
  {
   "Christ.": "de Christo", 
   "carm.": "carmina IV", 
   "pros. frg. 2B": "panegyricus prosa oratione conscriptus (paneg. 1, sc. dictus Aetio cos. II a. 437), fragm. 2B", 
   "poet.": "panegyricus poeticus"
  }, 
  [
   "400", 
   "499", 
   "ex Hispania", 
   ""
  ]
 ], 
 "ASSVMPT.": [
  "", 
  {
   "Moys.": "assumptionis Moysi e graeco fere deperdito latine versae quae exstant (sc. testamentum Mosis)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SYMPH.": [
  "Symp(h)osius", 
  {
   "aenigmata": "aenigmata"
  }, 
  [
   "300", 
   "499", 
   "", 
   ""
  ]
 ], 
 "CAEPIO": [
  "Q. Servilius Caepio", 
  {
   "orationis (in M. Aemilium Scaurum lege Varia) fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm.": "orationis (in M. Aemilium Scaurum lege Varia) fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm."
  }, 
  [
   "-150", 
   "-90", 
   "", 
   ""
  ]
 ], 
 "MAT. $1": [
  "Cn. Matius", 
  {
   "fam.": "epistula inter Ciceronis epistulas ad familiares servata", 
   "Cic. Att.": "epistula, quam scripsit una cum Trebatio", 
   "epistulae ad Ciceronem": "epistulae ad Ciceronem"
  }, 
  [
   "-70", 
   "10", 
   "", 
   ""
  ]
 ], 
 "FIRMIL.": [
  "Firmiliani", 
  {
   "epistula ad Cyprianum e graeco versa": "epistula ad Cyprianum e graeco versa"
  }, 
  [
   "200", 
   "268", 
   "episcopi Caesareae Cappadociae", 
   ""
  ]
 ], 
 "AGENN.": [
  "Agen(ni)us Vrbicus", 
  {
   "de controversiis agrorum": "de controversiis agrorum"
  }, 
  [
   "400", 
   "499", 
   "gromaticus", 
   ""
  ]
 ], 
 "VOLVMN.": [
  "Volumnius", 
  {
   "carm. frg. gramm.": "carminum fragm. servatum in DVB. NOM. gramm."
  }, 
  [
   "-100", 
   "-1", 
   "(fortasse P. Volumnius Eutrapelus Ciceronis familiaris)", 
   ""
  ]
 ], 
 "PHILIPP.": [
  "Philippus", 
  {
   "rec. long.": "recensio longior", 
   "rec. brev.": "recensio brevior", 
   "in Iob": "commentarius in Iob"
  }, 
  [
   "380", 
   "431", 
   "presbyter", 
   ""
  ]
 ], 
 "VALG.": [
  "C. Valgius Rufus", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-65", 
   "-12", 
   "", 
   ""
  ]
 ], 
 "CENS.": [
  "Censorinus", 
  {
   "de die natali": "de die natali"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "CATO": [
  "M. Porcius Cato Censorius", 
  {
   "mor. frg.": "carmen (?) de moribus", 
   "iur. civ. Fest.": "commentariorum iuris civilis (suntne filii?) fragm. servatum apud FEST.", 
   "ad fil. frg.": "fragmenta, quae Iordan libris ad Marcum filium (sc. praeceptis, certe medicinam agriculturam rhetoricam complectentibus) tribuit", 
   "orat.": "orationum fragmenta", 
   "agr.": "de agri cultura", 
   "[frg. dub. ]": "fragmenta dubiae auctoritatis", 
   "frg. Colum.": "fragmenta in collectionibus a nobis adhibitis omissa e. g. fragm. servatum apud COLVM.", 
   "orig.": "origines", 
   "[dict.]": "Catonis dicta ab Iordan collecta (cave confundas haec cum aliorum dictis ab ipso Catone collectis aut cum PS. CATONE)", 
   "inc. libr. frg.": "incertorum librorum fragmenta", 
   "mil. frg.": "de re militari", 
   "epist. frg.": "epistularum fragmenta"
  }, 
  [
   "-234", 
   "-149", 
   "", 
   ""
  ]
 ], 
 "MAECEN.": [
  "C. Cilnius Maecenas", 
  {
   "carm. frg.": "carminum fragmenta", 
   "Sen. epist.": "fragmenta operum oratione soluta conscriptorum a scrip\u00actoribus servata, e. g. fragm. apud SEN. epist."
  }, 
  [
   "-70", 
   "-8", 
   "", 
   ""
  ]
 ], 
 "PS. AMBR.": [
  "Pseudo-Ambrosius", 
  {
   "carm. de tern. num.": "carmen de ternarii numeri excellentia", 
   "spir. sanct.": "de spiritu sancto", 
   "exorc.": "exorcismus", 
   "dign. sacerd.": "de dignitate sacerdotali", 
   "serm.": "sermones", 
   "cond. human.": "de dignitate conditionis humanae", 
   "lib. fid.": "libellus fidei", 
   "symb.": "exhortatio ad neophytos de symbolo", 
   "in Phil.": "tractatus (immo sermo) in Pauli epistulam ad Philippenses 4,4\u20147", 
   "concord.": "de concordia Matthaei et Lucae in genealogia Christi", 
   "serm. Sess.": "sermones codice Sessoriano 55 traditi", 
   "Te deum": "hymnus ille celeberrimus 'Te deum laudamus'", 
   "de anima": "altercationis contra eos, qui animam non confitentur esse facturam aut ex traduce esse dicunt, fragmentum", 
   "in Luc.": "sermo q. d. in Lucam", 
   "[sacr.]": "AMBR. sacr.", 
   "mor. Brachm.": "Palladii operis de gentibus Indiae et Bragmanibus versio quae dicitur De moribus\u00a0Brachmanorum\u00a0 (i. e. Commonitorium Palladii et sqq.)", 
   "epist.": "epistulae", 
   "[epist. de monach.]": "epistulae duae de monacho energumeno", 
   "paenit.": "de paenitentia", 
   "tract. Gratian.": "tractatus de euangelio q. d. ad Gratianum Augustum", 
   "[philos. epist.]": "philosophorum epistulae", 
   "pudic.": "de pudicitia et castitate fragmentum", 
   "laps. virg.": "de lapsu Susannae sive de lapsu virginis consecratae", 
   "mans.": "de XLII mansionibus filiorum Israel", 
   "act. Seb.": "acta Sebastiani martyris", 
   "[prec.]": "precationes", 
   "[epist. de fid.]": "epistula de fide ad Hieronymum", 
   "apol. Dav. II": "apologia David altera", 
   "nat. rer.": "versus de naturis rerum", 
   "trin.": "de trinitate vel in symbolum apostolorum tractatus", 
   "ad virg. dev.": "ad virginem devotam"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "REN. FRIG.": [
  "Renatus Profuturus Frigeridus", 
  {
   "Greg. Tur. Franc.": "historiarum fragmenta servata apud GREG. TVR. Franc."
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "PERVIG.": [
  "", 
  {
   "Ven.": "pervigilium Veneris"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAEL.": [
  "M. Caelius Rufus", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.", 
   "ad Ciceronem epistulae": "ad Ciceronem epistulae"
  }, 
  [
   "-88", 
   "-48", 
   "", 
   ""
  ]
 ], 
 "DICT.": [
  "Dictys Cretensis", 
  {
   "ephemeris belli Troiani": "ephemeris belli Troiani"
  }, 
  [
   "300", 
   "399", 
   "", 
   "quam L. Septimius quidam e graeco latine vertit retractavitque"
  ]
 ], 
 "INSCR.": [
  "", 
  {
   "column. rostr. (Inscr. Ital. XIII 3,69)": "inscr. columnae rostratae sive elogium C. Duilii", 
   "Plin. nat.": "apud scriptores antiquos traditae, e. g. apud PLIN. nat.", 
   "Muratori": "ed. Muratori", 
   "ocul. (CIL XIII 10021)": "in signaculis medicorum oculariorum incisae, e. g. inscr. edita CIL XIII 10021", 
   "Hisp. Vives": "Hispaniae ed. Vives", 
   "numm. Sydenham": "nummorum ed. Sydenham (cf. INSCR. numm. lib. rei publ.)", 
   "Alger.": "Algeriae in Africa", 
   "christ. Karth.": "christianae Karthaginis (I. C. Karth.)", 
   "christ. Ital.": "christianae Italiae septimo saeculo antiquiores (I. C. I.)", 
   "tess. lusor. (CIL IX 6728) 23": "in tesseris lusoriis incisae, e. g. CIL IX 6728 n. 23", 
   "Dessau": "ed. Dessau (I. L. S.)", 
   "christ. vet. mus. Vat.": "christianae veteres musei Vaticani", 
   "Baiuar. Vollmer": "Baiuariae ed. Vollmer", 
   "Rhen. Bramb.": "Rhenanae ed. Brambach", 
   "inscriptio(nes); notae selectae": "inscriptio(nes); notae selectae", 
   "Ephem. Epigr.": "editae in Ephemeride Epigraphica, Corporis Inscr. Latinarum supplemento", 
   "christ. Hisp.": "christianae Hispaniae (cf. INSCR. christ. Hisp. Vives)", 
   "Gruter": "ed. Gruter", 
   "Gall. Wuilleumier": "trium Galliarum ed. Wuilleumier", 
   "Tarr. Alf\u00f6ldy": "Tarraconis ed. Alf\u00f6ldy", 
   "Esp\u00e9randieu, Cachets d'oculistes": "ed. Esp\u00e9randieu", 
   "Iugosl. Hoffiller\u2014Saria": "Iugoslaviae ed. Hoffiller/Saria", 
   "Haug et Sixt": "ed. Haug et Sixt (v. nunc CIL XIII)", 
   "Brit.": "Britanniae ed. Collingwood/Wright (R. I. B.)", 
   "Tun. Merlin": "Tunetanae (additamenta ad CIL VIII) ed. Merlin", 
   "numm. lib. rei publ.": "nummorum liberae rei publicae (R. R. C.)", 
   "Sherk, Rom. docum.": "ed. Sherk", 
   "lib. rei p. Degrassi": "liberae rei publicae ed. Degrassi (I. L. L. R. P.)", 
   "numm. Cohen": "nummorum ed. Cohen", 
   "Scyth. Min.": "Scythiae Minoris", 
   "suppl. Ital.": "supplementa Italica (sc. ad CIL V)", 
   "numm. Babelon": "nummorum ed. Babelon (v. nunc fere INSCR. numm. lib. rei publ.)", 
   "Gall. Narb. Esp\u00e9\u00adrandieu": "Galliae Narbonensis (additamenta ad CIL XII) ed. Esp\u00e9randieu", 
   "Hung.": "Hungariae (R. I. U.)", 
   "Maroc. Gascou": "Marocenses ed. Gascou et alii", 
   "for. Rom. (CIL I2 1)": "in foro Romano sub lapide nigro reperta", 
   "Dac.": "Daciae", 
   "lat. Graec. Sasel Kos": "latinae Graeciae (additamenta ad CIL III) ed. Sasel Kos", 
   "numm. Eckhel": "nummorum ed. Eckhel", 
   "Tripol.": "Tripolitaniae ed. Reynolds/Ward Perkins", 
   "Schneider": "ed. Schneider", 
   "christ. Diehl": "christianae ed. Diehl (I. L. C. V.)", 
   "christ. Brit.": "christianae Britanniae", 
   "Gall. Narb.": "Galliae Narbonensis (I. L. N.)", 
   "Ital.": "Italiae (I. I.)", 
   "graec. Rom. Cagnat": "graecae ad res Romanas pertinentes ed. Cagnat (I. G. R. [R.])", 
   "inscriptionum  genera  vel  corpora  (inter uncinos addidimus notas quasdam sollemnes):": "inscriptionum  genera  vel  corpora  (inter uncinos addidimus notas quasdam sollemnes):", 
   "christ. Gall.": "christianae Galliae (R. I. C. G.)", 
   "Iugosl. Sasel": "Iugoslaviae ed. A. et J. Sasel (additamenta ad CIL III)", 
   "numm. Mionnet": "nummorum ed. Mionnet", 
   "suppl. Ital. n. s.": "supplementa Italica, nova series", 
   "lat. Corinth.": "latinae Corinthi (additamenta ad CIL III)", 
   "Notiz. Scavi 1903 p. 256": "editae in Notiz. Scavi, e. g. p. 256 anno 1903", 
   "christ. Hisp. Vives": "christianae Hispaniae ed. Vives", 
   "Afr. Cagnat": "Africae (additamenta ad CIL VIII) ed. Cagnat/Merlin/Chatelain", 
   "christ. Le Blant": "christianae ed. Le Blant (cf. INSCR. christ. Gall.)", 
   "Hermet, La Graufesenque": "ed. Hermet", 
   "gland. plumb. (Ephem. Epigr. VI 124)": "in glandibus plumbeis incisae, e. g. inscr. 124 edita in Ephemeridis Epigraphicae vol. VI", 
   "Moes. Sup.": "Moesiae Superioris (I. M. S.)", 
   "christ. Rossi": "christianae ed. de Rossi", 
   "pariet. Palat.": "parietariae montis Palatini", 
   "Marichal, La Graufesenque": "ed. Marichal", 
   "Ann\u00e9e \u00c9pigr. 1903 n. 386": "editae in Ann\u00e9e \u00c9pigr. (olim loco appendicis ad Revue arch\u00e9ologi\u00acque), e. g. n. 386 anno 1903", 
   "numm. imp.": "nummorum aetatis imperatorum (R. I. C.)", 
   "christ. urb. Rom.": "christianae urbis Romae septimo saeculo antiquiores (I. C. U. R.)", 
   "Orelli\u2014Henzen": "ed. Orelli/Henzen"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ]
};


//-----------------KNOWLEDEBASE FKT

function mergeAKlists(){
    let keysfirst = Object.keys(abkAW);
    
    console.log("AbkRueckerMighty",  keysfirst.length, "realy distinkt", len(set(keysfirst))==keysfirst.length);
    let conflict1 = 0;
    let keykonf1 = [];
    for( Aabk in abkAWgrkl ){
        if( !abkAW[ Aabk ] ){
            abkAW[ Aabk ] = abkAWgrkl[ Aabk ];
        } else {
            conflict1 += 1;
            keykonf1.push( Aabk );
        }
    }
    let conflict2 = 0;
    let keykonf2 = [];
    for( Aabk in abkGrLaDGE ){
        if( !abkAW[Aabk] ){
            abkAW[Aabk] = abkGrLaDGE[Aabk];
        } else {
            conflict2 += 1;
            keykonf2.push( Aabk );
        }
    }
    let conflict3 = 0;
    let keykonf3 = [];
    for( Aabk in abkAWtlg ){
        if( !abkAW[Aabk] ){
            abkAW[Aabk] = abkAWtlg[Aabk];
        } else {
            conflict3 += 1;
            keykonf3.push( Aabk );
        }
    }
    console.log("Newlen", Object.keys(abkAW).length,  "abkAWgrkl", Object.keys(abkAWgrkl).length, "Konflikte", conflict1,  "abkGrLaDGE", Object.keys(abkGrLaDGE).length, "Konflikte", conflict2,  "abkAWtlg", Object.keys(abkAWtlg).length, "Konflikte", conflict3 );
    console.log(keykonf1, keykonf2, keykonf3);
    console.log("knowledgebase merged!");
}

function normAKlists(){
    abkAW = normarrayk( abkAW ) ;
    for( let abk in abkAW ){
        abkAW[ abk ][1] = normarrayk( abkAW[ abk ][1] );
    }

    ruecker2020 = normarrayk( ruecker2020 ) ;
    for( let abk in ruecker2020 ){
        ruecker2020[ abk ][1] = normarrayk( ruecker2020[ abk ][1] );
    }

    abkAWgrkl = normarrayk( abkAWgrkl );
    for( let abk in abkAWgrkl ){
        abkAWgrkl[ abk ][1] = normarrayk( abkAWgrkl[ abk ][1] );
    }

    abkGrLaDGE = normarrayk( abkGrLaDGE );
    for( let abk in abkGrLaDGE ){
        abkGrLaDGE[ abk ][1] = normarrayk( abkGrLaDGE[ abk ][1] );
    }

    abkAWtlg = normarrayk( abkAWtlg );
    for( let abk in abkAWtlg ){
        abkAWtlg[ abk ][1] = normarrayk( abkAWtlg[ abk ][1] );
    }
    console.log("knowledgebase normed!");
}

function rueckervergl(){
    console.log("Differenz: ", Object.keys(abkAW).length - Object.keys(ruecker2020).length);
    let newauth = 0;
    let aendAnem = 0;
    let aendWname = 0;
    let aendWK = 0;
    for( let abk in ruecker2020 ){
        if( abkAW[ abk ] ){
            if( abkAW[ abk ][0] !== ruecker2020[ abk ][0] ){
                aendAnem+=1;
                console.log(abkAW[ abk ][0], "->",ruecker2020[ abk ][0]);
            }
            if( abkAW[ abk ][1].toString() !== ruecker2020[ abk ][1].toString() ){
                aendWname+=1;
                console.log(abkAW[ abk ][1], "->",ruecker2020[ abk ][1]);
            }
        } else {
            newauth+=1;
        }
    }
    console.log("New Authorabk: ", newauth, "Änderungen Autornamen ", aendAnem, "Änderungen Werk ", aendWname );
    /*for( let abk in abkAW ){
        if( !ruecker2020[ abk ] ){
            console.log(abk, abkAW[abk].toString())
        } 
    }*/
}

//call on load
normAKlists( );
mergeAKlists( );
//rueckervergl( );
