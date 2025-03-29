/****************** 
 * Cltandfle *
 ******************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.1.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'CLTandFLE';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'group': '',
};

// Start code blocks for 'Before Experiment'
document.addEventListener('contextmenu',event => event.preventDefault());
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(AlfaRoutineBegin());
flowScheduler.add(AlfaRoutineEachFrame());
flowScheduler.add(AlfaRoutineEnd());
flowScheduler.add(ITIRoutineBegin());
flowScheduler.add(ITIRoutineEachFrame());
flowScheduler.add(ITIRoutineEnd());
flowScheduler.add(B_consensoinformatoRoutineBegin());
flowScheduler.add(B_consensoinformatoRoutineEachFrame());
flowScheduler.add(B_consensoinformatoRoutineEnd());
const exp_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(exp_loopLoopBegin(exp_loopLoopScheduler));
flowScheduler.add(exp_loopLoopScheduler);
flowScheduler.add(exp_loopLoopEnd);































flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // libraries:
    {'surveyLibrary': true},
    // resources:
    {'name': 'resources/ufficio.PNG', 'path': 'resources/ufficio.PNG'},
    {'name': 'resources/schermo.PNG', 'path': 'resources/schermo.PNG'},
    {'name': 'resources/intensity.PNG', 'path': 'resources/intensity.PNG'},
    {'name': 'resources/valence.PNG', 'path': 'resources/valence.PNG'},
    {'surveyId': 'bce5cca0-13a4-484c-a07b-411acf5db430'},
    {'surveyId': '40b420d2-e19d-430b-8813-8e013919a7c2'},
    {'surveyId': '879b6633-72d7-4726-b69f-0ae804b9dc76'},
    {'surveyId': '954bdd0c-2d30-4af4-b478-6f868f500e3c'},
    {'name': 'resources/intensity.PNG', 'path': 'resources/intensity.PNG'},
    {'name': 'resources/valence.PNG', 'path': 'resources/valence.PNG'},
    {'name': 'dataNO.xlsx', 'path': 'dataNO.xlsx'},
    {'name': 'schedafinale.xlsx', 'path': 'schedafinale.xlsx'},
    {'name': 'datanoMINUSCOLO.xlsx', 'path': 'datanoMINUSCOLO.xlsx'},
    {'name': 'datanoMAIUSCOLO.xlsx', 'path': 'datanoMAIUSCOLO.xlsx'},
    {'name': 'formdueW.csv', 'path': 'formdueW.csv'},
    {'name': 'formuno.xlsx', 'path': 'formuno.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var AlfaClock;
var coin_flip_group;
var var_colore;
var estita;
var esteng;
var var_testo;
var conditionFile;
var alfa_linea;
var alfa_testo2;
var alfa_testo1;
var alfa_image2;
var alfa_image1;
var alfa_mask;
var alfa_clicca;
var alfa_mouse;
var ITIClock;
var ITI_fig;
var B_consensoinformatoClock;
var cons_tit;
var cons_indietro;
var cons_avanti;
var cons_avvio;
var cons_noavvio;
var cons_avviotext;
var cons_avviotext_3;
var cons_text;
var cons_nr_pag;
var cons_nr_pag_2;
var cons_nr_pag_3;
var cons_av_text;
var cons_in_text;
var cons_mouse;
var A_benvenutoClock;
var ben_testo1;
var ben_testo2;
var ben_testo_1;
var ben_testo_2;
var ben_qdr_2;
var ben_qdr_1;
var ben_qdrtno_1;
var ben_qdrtno_2;
var ben_qdrtno_3;
var ben_qdrtno_4;
var ben_mouse;
var ben_linea_sx;
var ben_linea_dx;
var B2_istruzioniClock;
var titoloistruzioni;
var tastoavanti;
var tastoindietro;
var tastocontinua;
var cons_tit_2;
var cons_indietro_2;
var cons_avanti_2;
var cons_avvio_2;
var cons_avviotext_2;
var cons_text_2;
var cons_nr_pag_4;
var cons_nr_pag_5;
var cons_nr_pag_6;
var cons_av_text_2;
var cons_in_text_2;
var cons_mouse_2;
var SAMevaluationClock;
var coin_flip;
var dom_sam;
var istr_saa;
var conf_sam;
var P1;
var P2;
var P3;
var P4;
var istr_sam;
var intensity;
var valence;
var cercvalence;
var cerchvalence2;
var Rett_slider_valence;
var titoloSAM;
var istr_SAM;
var istr_sam2;
var rettsliderintensity;
var cercintensity;
var cercintensity2;
var sliderintensity;
var rettoksam;
var slidervalence;
var ok_3;
var mouse_sam;
var LoadingClock;
var text22;
var loadreload;
var C_associative_taskClock;
var tempo_tasktot;
var tastosi;
var tastono;
var ate;
var linea;
var cerchio_2;
var cerchio;
var ass_r1_3;
var ass_r1_4;
var ass_r1_2;
var ass_r1;
var ass_psi;
var ass_pno;
var ass_primo;
var ass_secondo;
var ass_si;
var ass_no;
var ass_terzo;
var maskuno;
var mouse;
var D_VDClock;
var taconferma;
var tadomanda;
var tasp;
var tasp2;
var taconf;
var tadom;
var cerch1;
var rett;
var cerch1_2;
var vd;
var feedback;
var rettok;
var ok;
var istr_vd;
var istr_vd_3;
var istr_vd_2;
var vd_titolo;
var mouse_vd;
var PreviousClock;
var taconferma1;
var tadomanda1;
var tasp1;
var tasp21;
var taconf1;
var tadom1;
var cerch1_3;
var rett_2;
var cerch1_4;
var previous;
var feedback_3;
var rettok_2;
var ok_4;
var istr_vd_4;
var istr_vd_5;
var istr_vd_6;
var vd_titolo_2;
var mouse_vd_2;
var PFClock;
var ch_istr2;
var cer;
var cer_2;
var ret;
var processfluency;
var mouse_ch;
var rettoki;
var ok_2;
var check_titolo;
var ch_istr;
var ch_istr_2;
var Ant_lastquestionClock;
var textino;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Alfa"
  AlfaClock = new util.Clock();
  // Run 'Begin Experiment' code from alfa_code
  coin_flip_group = Math.random();
  if ((coin_flip_group < 0.5)) {
      expInfo["group"] = 1;
  } else {
      if ((coin_flip_group > 0.5)) {
          expInfo["group"] = 2;
      }
  }
  if ((Number.parseInt(expInfo["group"]) === 1)) {
      var_colore = [(- 1), (- 1), (- 1)];
      estita = 1;
      esteng = 0;
      var_testo = "Arial";
      conditionFile = "dataNO.xlsx";
  } else {
      var_testo = "Arial";
      estita = 0;
      esteng = 1;
      var_colore = [(- 1), (- 1), (- 1)];
      conditionFile = "datanoMINUSCOLO.xlsx";
  }
  
  alfa_linea = new visual.Rect ({
    win: psychoJS.window, name: 'alfa_linea', 
    width: [0.005, 0.8][0], height: [0.005, 0.8][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  alfa_testo2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'alfa_testo2',
    text: 'Cerca di operare in un ambiente che sia: \n(1) al chiuso \n(2) sufficientemente illuminato \n(3) senza fonti di luce dirette sullo schermo',
    font: 'Arial',
    units: undefined, 
    pos: [0.4, 0.2], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  alfa_testo1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'alfa_testo1',
    text: "Assicurati che lo schermo su cui hai avviato \nl'esperimento sia in modalità schermo intero.\n Mantieni questa modalità per tutta\n la durata dell'esperimento.",
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.4), 0.2], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  alfa_image2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'alfa_image2', units : undefined, 
    image : 'resources/ufficio.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.4, (- 0.2)], size : [0.35, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  alfa_image1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'alfa_image1', units : undefined, 
    image : 'resources/schermo.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.4), (- 0.2)], size : [0.45, 0.45],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  alfa_mask = new visual.Rect ({
    win: psychoJS.window, name: 'alfa_mask', 
    width: [0.3, 0.2][0], height: [0.3, 0.2][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  alfa_clicca = new visual.TextStim({
    win: psychoJS.window,
    name: 'alfa_clicca',
    text: 'Clicca QUI per cominciare',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -7.0 
  });
  
  alfa_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  alfa_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "ITI"
  ITIClock = new util.Clock();
  ITI_fig = new visual.ShapeStim ({
    win: psychoJS.window, name: 'ITI_fig', 
    vertices: [[-[0, 0][0]/2.0, -[0, 0][1]/2.0], [+[0, 0][0]/2.0, -[0, 0][1]/2.0], [0, [0, 0][1]/2.0]],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "B_consensoinformato"
  B_consensoinformatoClock = new util.Clock();
  cons_tit = new visual.TextStim({
    win: psychoJS.window,
    name: 'cons_tit',
    text: 'Consenso informato',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.39], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  cons_indietro = new visual.Rect ({
    win: psychoJS.window, name: 'cons_indietro', 
    width: [0.2, 0.1][0], height: [0.2, 0.1][1],
    ori: 0.0, pos: [(- 0.3), 0.25],
    anchor: 'center',
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  cons_avanti = new visual.Rect ({
    win: psychoJS.window, name: 'cons_avanti', 
    width: [0.2, 0.1][0], height: [0.2, 0.1][1],
    ori: 0.0, pos: [0.3, 0.25],
    anchor: 'center',
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  cons_avvio = new visual.Rect ({
    win: psychoJS.window, name: 'cons_avvio', 
    width: [0.2, 0.1][0], height: [0.2, 0.1][1],
    ori: 0.0, pos: [0.2, (- 0.4)],
    anchor: 'center',
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  cons_noavvio = new visual.Rect ({
    win: psychoJS.window, name: 'cons_noavvio', 
    width: [(- 0.2), 0.1][0], height: [(- 0.2), 0.1][1],
    ori: 0.0, pos: [(- 0.2), (- 0.4)],
    anchor: 'center',
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: 1.0, depth: -5, interpolate: true,
  });
  
  cons_avviotext = new visual.TextStim({
    win: psychoJS.window,
    name: 'cons_avviotext',
    text: 'Accetta',
    font: 'Arial',
    units: undefined, 
    pos: [0.2, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 0.0039, (- 1.0)]),  opacity: 1.0,
    depth: -6.0 
  });
  
  cons_avviotext_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cons_avviotext_3',
    text: 'Rifiuta',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.2), (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([0.0902, (- 1.0), (- 1.0)]),  opacity: 1.0,
    depth: -7.0 
  });
  
  cons_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'cons_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -8.0 
  });
  
  cons_nr_pag = new visual.TextStim({
    win: psychoJS.window,
    name: 'cons_nr_pag',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.02), 0.25], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -9.0 
  });
  
  cons_nr_pag_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cons_nr_pag_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  cons_nr_pag_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cons_nr_pag_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.02, 0.25], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  cons_av_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'cons_av_text',
    text: 'Avanti',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.25], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: 1.0,
    depth: -12.0 
  });
  
  cons_in_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'cons_in_text',
    text: 'Indietro',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), 0.25], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: 1.0,
    depth: -13.0 
  });
  
  cons_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  cons_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "A_benvenuto"
  A_benvenutoClock = new util.Clock();
  // Run 'Begin Experiment' code from ben_code
  if ((Number.parseInt(expInfo["group"]) === 1)) {
      ben_testo1 = "Benvenuta/o all'esperimento!";
      ben_testo2 = "Clicca per iniziare";
  } else {
      ben_testo1 = "Welcome to the experiment!";
      ben_testo2 = "Click to start";
  }
  
  ben_testo_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ben_testo_1',
    text: ben_testo1,
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: -1.0 
  });
  
  ben_testo_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ben_testo_2',
    text: ben_testo2,
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  ben_qdr_2 = new visual.Rect ({
    win: psychoJS.window, name: 'ben_qdr_2', 
    width: [0.025, 0.025][0], height: [0.025, 0.025][1],
    ori: 45.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('black'),
    fillColor: undefined,
    fillColor: undefined,
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  ben_qdr_1 = new visual.Rect ({
    win: psychoJS.window, name: 'ben_qdr_1', 
    width: [0.015, 0.015][0], height: [0.015, 0.015][1],
    ori: 45.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  ben_qdrtno_1 = new visual.Rect ({
    win: psychoJS.window, name: 'ben_qdrtno_1', 
    width: [0.01, 0.01][0], height: [0.01, 0.01][1],
    ori: 45.0, pos: [(- 0.03), 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: 1.0, depth: -5, interpolate: true,
  });
  
  ben_qdrtno_2 = new visual.Rect ({
    win: psychoJS.window, name: 'ben_qdrtno_2', 
    width: [0.01, 0.01][0], height: [0.01, 0.01][1],
    ori: 45.0, pos: [0.03, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: 1.0, depth: -6, interpolate: true,
  });
  
  ben_qdrtno_3 = new visual.Rect ({
    win: psychoJS.window, name: 'ben_qdrtno_3', 
    width: [0.01, 0.01][0], height: [0.01, 0.01][1],
    ori: 45.0, pos: [0.05, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: 1.0, depth: -7, interpolate: true,
  });
  
  ben_qdrtno_4 = new visual.Rect ({
    win: psychoJS.window, name: 'ben_qdrtno_4', 
    width: [0.01, 0.01][0], height: [0.01, 0.01][1],
    ori: 45.0, pos: [(- 0.05), 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: 1.0, depth: -8, interpolate: true,
  });
  
  ben_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  ben_mouse.mouseClock = new util.Clock();
  ben_linea_sx = new visual.Rect ({
    win: psychoJS.window, name: 'ben_linea_sx', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [(- 0.35), 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: 1.0, depth: -10, interpolate: true,
  });
  
  ben_linea_dx = new visual.Rect ({
    win: psychoJS.window, name: 'ben_linea_dx', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0.35, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: [(- 1.0), (- 1.0), (- 1.0)],
    opacity: undefined, depth: -11, interpolate: true,
  });
  
  // Initialize components for Routine "B2_istruzioni"
  B2_istruzioniClock = new util.Clock();
  // Run 'Begin Experiment' code from cons_code_2
  if ((Number.parseInt(expInfo["group"]) === 1)) {
      titoloistruzioni = "Istruzioni";
      tastoavanti = "Avanti";
      tastoindietro = "Indietro";
      tastocontinua = "Continua";
  } else {
      titoloistruzioni = "Instructions";
      tastoavanti = "Next";
      tastoindietro = "Back";
      tastocontinua = "Continue";
  }
  
  cons_tit_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cons_tit_2',
    text: titoloistruzioni,
    font: var_testo,
    units: undefined, 
    pos: [0, 0.39], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: undefined,
    depth: -1.0 
  });
  
  cons_indietro_2 = new visual.Rect ({
    win: psychoJS.window, name: 'cons_indietro_2', 
    width: [0.2, 0.1][0], height: [0.2, 0.1][1],
    ori: 0.0, pos: [(- 0.3), 0.25],
    anchor: 'center',
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  cons_avanti_2 = new visual.Rect ({
    win: psychoJS.window, name: 'cons_avanti_2', 
    width: [0.2, 0.1][0], height: [0.2, 0.1][1],
    ori: 0.0, pos: [0.3, 0.25],
    anchor: 'center',
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  cons_avvio_2 = new visual.Rect ({
    win: psychoJS.window, name: 'cons_avvio_2', 
    width: [0.2, 0.1][0], height: [0.2, 0.1][1],
    ori: 0.0, pos: [0, (- 0.4)],
    anchor: 'center',
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  cons_avviotext_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cons_avviotext_2',
    text: tastocontinua,
    font: var_testo,
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: 1.0,
    depth: -5.0 
  });
  
  cons_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cons_text_2',
    text: '',
    font: var_testo,
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: undefined,
    depth: -6.0 
  });
  
  cons_nr_pag_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cons_nr_pag_4',
    text: '',
    font: var_testo,
    units: undefined, 
    pos: [(- 0.02), 0.25], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: undefined,
    depth: -7.0 
  });
  
  cons_nr_pag_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cons_nr_pag_5',
    text: '',
    font: var_testo,
    units: undefined, 
    pos: [0, 0.25], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: undefined,
    depth: -8.0 
  });
  
  cons_nr_pag_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cons_nr_pag_6',
    text: '',
    font: var_testo,
    units: undefined, 
    pos: [0.02, 0.25], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: undefined,
    depth: -9.0 
  });
  
  cons_av_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cons_av_text_2',
    text: tastoavanti,
    font: var_testo,
    units: undefined, 
    pos: [0.3, 0.25], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: 1.0,
    depth: -10.0 
  });
  
  cons_in_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cons_in_text_2',
    text: tastoindietro,
    font: var_testo,
    units: undefined, 
    pos: [(- 0.3), 0.25], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: 1.0,
    depth: -11.0 
  });
  
  cons_mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  cons_mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "SAMevaluation"
  SAMevaluationClock = new util.Clock();
  // Run 'Begin Experiment' code from code_6
  coin_flip = Math.random();
  if ((Number.parseInt(expInfo["group"]) === 1)) {
      dom_sam = "Domanda";
      istr_saa = "Come ti sei sentita/o nel leggere questa storia che ti \u00e8 stata presentata?";
      conf_sam = "Conferma";
  } else {
      dom_sam = "Question";
      istr_saa = "How did you feel while reading this story that was presented to you?";
      conf_sam = "Confirm";
  }
  P1 = 0.2;
  P2 = 0;
  P3 = 0.15;
  P4 = 0.05;
  if ((coin_flip < 0.5)) {
      P1 = [0, 0.2];
      P2 = [0, 0];
      P3 = [0, 0.14];
      P4 = [0, (- 0.06)];
      if ((Number.parseInt(expInfo["group"]) === 1)) {
          istr_sam = (((("Utilizza gli slider qui sopra per fornire una risposta." + " Il primo slider chiede quale emozione stai provando (da triste a felice).") + " Il secondo slider chiede quanto ti senti attivata/o (da calma/o ad attivata/o).") + " Quando avrai selezionato una risposta per entrambi gli") + " slider apparir\u00e0 il tasto Conferma per proseguire.");
      } else {
          istr_sam = ((("Use the sliders above to provide an answer." + " The first slider asks which emotion you are feeling (from sad to happy).") + " The second slider asks how activated you feel (from calm to activated).") + " Once you have selected an answer for both sliders, the Confirm button will appear to continue.");
      }
  } else {
      if ((coin_flip > 0.5)) {
          P1 = [0, 0];
          P2 = [0, 0.2];
          P3 = [0, (- 0.06)];
          P4 = [0, 0.14];
          if ((Number.parseInt(expInfo["group"]) === 1)) {
              istr_sam = (((("Utilizza gli slider qui sopra per fornire una risposta." + " Il primo slider chiede quanto ti senti attivata/o (da calma/o ad attivata/o).") + " Il secondo slider chiede quale emozione stai provando (da triste a felice).") + " Quando avrai selezionato una risposta per entrambi gli") + " slider apparir\u00e0 il tasto Conferma per proseguire.");
          } else {
              istr_sam = ((("Use the sliders above to provide an answer." + " The first slider asks how activated you feel (from calm to activated).") + " The second slider asks which emotion you are feeling (from sad to happy).") + " Once you have selected an answer for both sliders, the Confirm button will appear to continue.");
          }
      }
  }
  
  intensity = new visual.ImageStim({
    win : psychoJS.window,
    name : 'intensity', units : undefined, 
    image : 'resources/intensity.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : P4, size : [1, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  valence = new visual.ImageStim({
    win : psychoJS.window,
    name : 'valence', units : undefined, 
    image : 'resources/valence.PNG', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : P3, size : [1, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  cercvalence = new visual.Polygon({
    win: psychoJS.window, name: 'cercvalence', 
    edges: 100, size:[0.07, 0.07],
    ori: 0.0, pos: [(- 0.4), 0.2],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: [0.6549, 0.6549, 0.6549],
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  cerchvalence2 = new visual.Polygon({
    win: psychoJS.window, name: 'cerchvalence2', 
    edges: 100, size:[0.07, 0.07],
    ori: 0.0, pos: [0.4, 0.2],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: [0.6549, 0.6549, 0.6549],
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  Rett_slider_valence = new visual.Rect ({
    win: psychoJS.window, name: 'Rett_slider_valence', 
    width: [0.8, 0.07][0], height: [0.8, 0.07][1],
    ori: 0.0, pos: [0, 0.2],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: [0.6549, 0.6549, 0.6549],
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  titoloSAM = new visual.TextStim({
    win: psychoJS.window,
    name: 'titoloSAM',
    text: dom_sam,
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.42], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  istr_SAM = new visual.TextStim({
    win: psychoJS.window,
    name: 'istr_SAM',
    text: istr_saa,
    font: var_testo,
    units: undefined, 
    pos: [0, 0.3], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: undefined,
    depth: -7.0 
  });
  
  istr_sam2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'istr_sam2',
    text: istr_sam,
    font: var_testo,
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: undefined,
    depth: -8.0 
  });
  
  rettsliderintensity = new visual.Rect ({
    win: psychoJS.window, name: 'rettsliderintensity', 
    width: [0.8, 0.07][0], height: [0.8, 0.07][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: [0.6549, 0.6549, 0.6549],
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  cercintensity = new visual.Polygon({
    win: psychoJS.window, name: 'cercintensity', 
    edges: 100, size:[0.07, 0.07],
    ori: 0.0, pos: [(- 0.4), 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: [0.6549, 0.6549, 0.6549],
    opacity: undefined, depth: -10, interpolate: true,
  });
  
  cercintensity2 = new visual.Polygon({
    win: psychoJS.window, name: 'cercintensity2', 
    edges: 100, size:[0.07, 0.07],
    ori: 0.0, pos: [0.4, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: [0.6549, 0.6549, 0.6549],
    opacity: undefined, depth: -11, interpolate: true,
  });
  
  sliderintensity = new visual.Slider({
    win: psychoJS.window, name: 'sliderintensity',
    startValue: 0.5,
    size: [0.8, 0.05], pos: P2, ori: 0.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.05, ticks: [0, 0.5, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('white'), lineColor: new util.Color([0.5216, 0.5216, 0.5216]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -12, 
    flip: false,
  });
  
  rettoksam = new visual.Rect ({
    win: psychoJS.window, name: 'rettoksam', 
    width: [0.2, 0.1][0], height: [0.2, 0.1][1],
    ori: 0.0, pos: [0, (- 0.21)],
    anchor: 'center',
    lineWidth: 4.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: undefined, depth: -13, interpolate: true,
  });
  
  slidervalence = new visual.Slider({
    win: psychoJS.window, name: 'slidervalence',
    startValue: 0.5,
    size: [0.8, 0.05], pos: P1, ori: 0.0, units: psychoJS.window.units,
    labels: undefined, fontSize: 0.05, ticks: [0, 0.5, 1],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('white'), lineColor: new util.Color([0.5216, 0.5216, 0.5216]), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -14, 
    flip: false,
  });
  
  ok_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ok_3',
    text: conf_sam,
    font: var_testo,
    units: undefined, 
    pos: [0, (- 0.21)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: undefined,
    depth: -15.0 
  });
  
  mouse_sam = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_sam.mouseClock = new util.Clock();
  // Initialize components for Routine "Loading"
  LoadingClock = new util.Clock();
  text22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text22',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from code_7
  loadreload = "L";
  if ((Number.parseInt(expInfo["group"]) === 1)) {
      loadreload = "Caricamento delle cartelle cliniche dei pazienti...";
  } else {
      loadreload = "Loading the patients' medical records...";
  }
  
  // Initialize components for Routine "C_associative_task"
  C_associative_taskClock = new util.Clock();
  // Run 'Begin Experiment' code from code_ass
  tempo_tasktot = 0;
  if ((Number.parseInt(expInfo["group"]) === 1)) {
      tastosi = "S\u00ec";
      tastono = "No";
      ate = "Pensi che il paziente superer\u00e0 la crisi?";
  } else {
      tastosi = "Yes";
      tastono = "No";
      ate = "Do you think the patient will overcome the crisis?";
  }
  
  linea = new visual.ShapeStim ({
    win: psychoJS.window, name: 'linea', 
    vertices: [[-[1.1, 0.52][0]/2.0, 0], [+[1.1, 0.52][0]/2.0, 0]],
    ori: 0.0, pos: [0, 0.26],
    anchor: 'center',
    lineWidth: 5.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: [0.6549, 0.6549, 0.6549],
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  cerchio_2 = new visual.Polygon({
    win: psychoJS.window, name: 'cerchio_2', 
    edges: 100, size:[0.02, 0.02],
    ori: 0.0, pos: [0.55, 0.26],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: [0.6549, 0.6549, 0.6549],
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cerchio = new visual.Polygon({
    win: psychoJS.window, name: 'cerchio', 
    edges: 100, size:[0.02, 0.02],
    ori: 0.0, pos: [(- 0.55), 0.26],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: [0.6549, 0.6549, 0.6549],
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  ass_r1_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'ass_r1_3', 
    vertices: [[-[0.01, 0.01][0]/2.0, -[0.01, 0.01][1]/2.0], [+[0.01, 0.01][0]/2.0, -[0.01, 0.01][1]/2.0], [0, [0.01, 0.01][1]/2.0]],
    ori: 0.0, pos: [0, (- 0.45)],
    anchor: 'center',
    lineWidth: 4.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([1.0, 1.0, 1.0]),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  ass_r1_4 = new visual.Rect ({
    win: psychoJS.window, name: 'ass_r1_4', 
    width: [1, 0.15][0], height: [1, 0.15][1],
    ori: 0.0, pos: [0, (- 0.175)],
    anchor: 'center',
    lineWidth: 4.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: 1.0, depth: -5, interpolate: true,
  });
  
  ass_r1_2 = new visual.Rect ({
    win: psychoJS.window, name: 'ass_r1_2', 
    width: [1, 0.2][0], height: [1, 0.2][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 4.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: 1.0, depth: -6, interpolate: true,
  });
  
  ass_r1 = new visual.Rect ({
    win: psychoJS.window, name: 'ass_r1', 
    width: [1, 0.15][0], height: [1, 0.15][1],
    ori: 0.0, pos: [0, 0.175],
    anchor: 'center',
    lineWidth: 4.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: 1.0, depth: -7, interpolate: true,
  });
  
  ass_psi = new visual.Rect ({
    win: psychoJS.window, name: 'ass_psi', 
    width: [0.15, 0.06][0], height: [0.15, 0.06][1],
    ori: 0.0, pos: [(- 0.2), (- 0.04)],
    anchor: 'center',
    lineWidth: 4.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: 1.0, depth: -8, interpolate: true,
  });
  
  ass_pno = new visual.Rect ({
    win: psychoJS.window, name: 'ass_pno', 
    width: [0.15, 0.06][0], height: [0.15, 0.06][1],
    ori: 0.0, pos: [0.2, (- 0.04)],
    anchor: 'center',
    lineWidth: 4.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: 1.0, depth: -9, interpolate: true,
  });
  
  ass_primo = new visual.TextStim({
    win: psychoJS.window,
    name: 'ass_primo',
    text: '',
    font: var_testo,
    units: undefined, 
    pos: [0, 0.175], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: 1.0,
    depth: -10.0 
  });
  
  ass_secondo = new visual.TextStim({
    win: psychoJS.window,
    name: 'ass_secondo',
    text: ate,
    font: var_testo,
    units: undefined, 
    pos: [0, 0.04], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: 1.0,
    depth: -11.0 
  });
  
  ass_si = new visual.TextStim({
    win: psychoJS.window,
    name: 'ass_si',
    text: tastosi,
    font: var_testo,
    units: undefined, 
    pos: [(- 0.2), (- 0.04)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: 1.0,
    depth: -12.0 
  });
  
  ass_no = new visual.TextStim({
    win: psychoJS.window,
    name: 'ass_no',
    text: tastono,
    font: var_testo,
    units: undefined, 
    pos: [0.2, (- 0.04)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: 1.0,
    depth: -13.0 
  });
  
  ass_terzo = new visual.TextStim({
    win: psychoJS.window,
    name: 'ass_terzo',
    text: '',
    font: var_testo,
    units: undefined, 
    pos: [0, (- 0.175)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: 1.0,
    depth: -14.0 
  });
  
  maskuno = new visual.Rect ({
    win: psychoJS.window, name: 'maskuno', 
    width: [1.06, 0.51][0], height: [1.06, 0.51][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 0.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: undefined, depth: -15, interpolate: true,
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "D_VD"
  D_VDClock = new util.Clock();
  // Run 'Begin Experiment' code from code_vd
  if ((Number.parseInt(expInfo["group"]) === 1)) {
      taconferma = "Conferma";
      tadomanda = "In che misura pensi che il Batatrim sia stato efficace nel guarire la crisi dei pazienti che hai visto?";
      tasp = "(la scala va da 0 a 100: con 0 che significa decisamente no, e 100 che significa decisamente s\u00ec)";
      tasp2 = "Clicca sulla barra sopra, e vedrai apparire uno slider. Puoi trascinare questo slider su qualsiasi punto della scala. Una volta che sei soddisfatta/o della tua risposta, clicca il pulsante Conferma.";
      taconf = "Conferma";
      tadom = "Domanda";
  } else {
      taconferma = "Confirm";
      tadomanda = "To what extent do you think that Batatrim has been effective in healing the crises of the patients you have seen?";
      tasp = "(the scale ranges from 0 to 100: with 0 being definitely no, and 100 being definitely yes)";
      tasp2 = "Click on the bar above, and you will see a slider appear. You can drag this slider to any point on the scale. Once you are satisfied with your answer, click the Confirm button.";
      taconf = "Confirm";
      tadom = "Question";
  }
  
  cerch1 = new visual.Polygon({
    win: psychoJS.window, name: 'cerch1', 
    edges: 100, size:[0.07, 0.07],
    ori: 0.0, pos: [(- 0.4), 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: [0.6549, 0.6549, 0.6549],
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  rett = new visual.Rect ({
    win: psychoJS.window, name: 'rett', 
    width: [0.8, 0.07][0], height: [0.8, 0.07][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: [0.6549, 0.6549, 0.6549],
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cerch1_2 = new visual.Polygon({
    win: psychoJS.window, name: 'cerch1_2', 
    edges: 100, size:[0.07, 0.07],
    ori: 0.0, pos: [0.4, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: [0.6549, 0.6549, 0.6549],
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  vd = new visual.Slider({
    win: psychoJS.window, name: 'vd',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: [0, 100], fontSize: 0.03, ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color(var_colore), markerColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), lineColor: new util.Color([0.6549, 0.6549, 0.6549]), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback',
    text: '',
    font: var_testo,
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: undefined,
    depth: -5.0 
  });
  
  rettok = new visual.Rect ({
    win: psychoJS.window, name: 'rettok', 
    width: [0.2, 0.1][0], height: [0.2, 0.1][1],
    ori: 0.0, pos: [0, (- 0.2)],
    anchor: 'center',
    lineWidth: 4.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  ok = new visual.TextStim({
    win: psychoJS.window,
    name: 'ok',
    text: taconferma,
    font: var_testo,
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: undefined,
    depth: -7.0 
  });
  
  istr_vd = new visual.TextStim({
    win: psychoJS.window,
    name: 'istr_vd',
    text: tadomanda,
    font: var_testo,
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: undefined,
    depth: -8.0 
  });
  
  istr_vd_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'istr_vd_3',
    text: tasp,
    font: var_testo,
    units: undefined, 
    pos: [0, 0.14], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: undefined,
    depth: -9.0 
  });
  
  istr_vd_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'istr_vd_2',
    text: tasp2,
    font: var_testo,
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: undefined,
    depth: -10.0 
  });
  
  vd_titolo = new visual.TextStim({
    win: psychoJS.window,
    name: 'vd_titolo',
    text: tadom,
    font: var_testo,
    units: undefined, 
    pos: [0, 0.42], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: undefined,
    depth: -11.0 
  });
  
  mouse_vd = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_vd.mouseClock = new util.Clock();
  // Initialize components for Routine "Previous"
  PreviousClock = new util.Clock();
  // Run 'Begin Experiment' code from code_vd_3
  if ((Number.parseInt(expInfo["group"]) === 1)) {
      taconferma1 = "Conferma";
      tadomanda1 = "Al di l\u00e0 del caso specifico del Batatrim, nella tua esperienza PERSONALE, quanto i farmaci sono efficaci IN GENERALE nel curare le malattie?";
      tasp1 = "(la scala va da 0 a 100: con 0 che significa decisamente no, e 100 che significa decisamente s\u00ec)";
      tasp21 = "Clicca sulla barra sopra, e vedrai apparire uno slider. Puoi trascinare questo slider su qualsiasi punto della scala. Una volta soddisfatta/o della tua risposta, clicca il pulsante Conferma.";
      taconf1 = "Conferma";
      tadom1 = "Domanda";
  } else {
      taconferma1 = "Confirm";
      tadomanda1 = "Beyond the specific case of Batatrim, in your PERSONAL experience, how effective are medications in treating diseases IN GENERAL?";
      tasp1 = "(the scale ranges from 0 to 100: with 0 being definitely no, and 100 being definitely yes)";
      tasp21 = "Click on the bar above, and you will see a slider appear. You can drag this slider to any point on the scale. Once you are satisfied with your answer, click the Confirm button.";
      taconf1 = "Confirm";
      tadom1 = "Question";
  }
  
  cerch1_3 = new visual.Polygon({
    win: psychoJS.window, name: 'cerch1_3', 
    edges: 100, size:[0.07, 0.07],
    ori: 0.0, pos: [(- 0.4), 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: [0.6549, 0.6549, 0.6549],
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  rett_2 = new visual.Rect ({
    win: psychoJS.window, name: 'rett_2', 
    width: [0.8, 0.07][0], height: [0.8, 0.07][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: [0.6549, 0.6549, 0.6549],
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cerch1_4 = new visual.Polygon({
    win: psychoJS.window, name: 'cerch1_4', 
    edges: 100, size:[0.07, 0.07],
    ori: 0.0, pos: [0.4, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: [0.6549, 0.6549, 0.6549],
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  previous = new visual.Slider({
    win: psychoJS.window, name: 'previous',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: [0, 100], fontSize: 0.03, ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color(var_colore), markerColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), lineColor: new util.Color([0.6549, 0.6549, 0.6549]), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  feedback_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_3',
    text: '',
    font: var_testo,
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: undefined,
    depth: -5.0 
  });
  
  rettok_2 = new visual.Rect ({
    win: psychoJS.window, name: 'rettok_2', 
    width: [0.2, 0.1][0], height: [0.2, 0.1][1],
    ori: 0.0, pos: [0, (- 0.2)],
    anchor: 'center',
    lineWidth: 4.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  ok_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ok_4',
    text: taconferma1,
    font: var_testo,
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: undefined,
    depth: -7.0 
  });
  
  istr_vd_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'istr_vd_4',
    text: tadomanda1,
    font: var_testo,
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: undefined,
    depth: -8.0 
  });
  
  istr_vd_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'istr_vd_5',
    text: tasp1,
    font: var_testo,
    units: undefined, 
    pos: [0, 0.14], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: undefined,
    depth: -9.0 
  });
  
  istr_vd_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'istr_vd_6',
    text: tasp21,
    font: var_testo,
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: undefined,
    depth: -10.0 
  });
  
  vd_titolo_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'vd_titolo_2',
    text: tadom1,
    font: var_testo,
    units: undefined, 
    pos: [0, 0.42], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color(var_colore),  opacity: undefined,
    depth: -11.0 
  });
  
  mouse_vd_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_vd_2.mouseClock = new util.Clock();
  // Initialize components for Routine "PF"
  PFClock = new util.Clock();
  ch_istr2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ch_istr2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  cer = new visual.Polygon({
    win: psychoJS.window, name: 'cer', 
    edges: 100, size:[0.07, 0.07],
    ori: 0.0, pos: [0.4, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: [0.6549, 0.6549, 0.6549],
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  cer_2 = new visual.Polygon({
    win: psychoJS.window, name: 'cer_2', 
    edges: 100, size:[0.07, 0.07],
    ori: 0.0, pos: [(- 0.4), 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: [0.6549, 0.6549, 0.6549],
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  ret = new visual.Rect ({
    win: psychoJS.window, name: 'ret', 
    width: [0.8, 0.07][0], height: [0.8, 0.07][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: [0.6549, 0.6549, 0.6549],
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  processfluency = new visual.Slider({
    win: psychoJS.window, name: 'processfluency',
    startValue: undefined,
    size: [0.8, 0.05], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: [1, 2, 3, 4, 5, 6, 7], fontSize: 0.03, ticks: [1, 2, 3, 4, 5, 6, 7],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), markerColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]), lineColor: new util.Color([0.6549, 0.6549, 0.6549]), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -5, 
    flip: false,
  });
  
  mouse_ch = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_ch.mouseClock = new util.Clock();
  rettoki = new visual.Rect ({
    win: psychoJS.window, name: 'rettoki', 
    width: [0.2, 0.1][0], height: [0.2, 0.1][1],
    ori: 0.0, pos: [0, (- 0.22)],
    anchor: 'center',
    lineWidth: 4.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.6549, 0.6549, 0.6549]),
    fillColor: new util.Color('white'),
    fillColor: 'white',
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  ok_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ok_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.22)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -8.0 
  });
  
  check_titolo = new visual.TextStim({
    win: psychoJS.window,
    name: 'check_titolo',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.42], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -9.0 
  });
  
  ch_istr = new visual.TextStim({
    win: psychoJS.window,
    name: 'ch_istr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -10.0 
  });
  
  ch_istr_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ch_istr_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.14], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -11.0 
  });
  
  // Initialize components for Routine "Ant_lastquestion"
  Ant_lastquestionClock = new util.Clock();
  textino = new visual.TextStim({
    win: psychoJS.window,
    name: 'textino',
    text: 'Attendi qualche secondo per essere reindirizzata/o alla pagina finale.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var AlfaComponents;
function AlfaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Alfa' ---
    t = 0;
    AlfaClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Alfa.started', globalClock.getTime());
    // setup some python lists for storing info about the alfa_mouse
    alfa_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    AlfaComponents = [];
    AlfaComponents.push(alfa_linea);
    AlfaComponents.push(alfa_testo2);
    AlfaComponents.push(alfa_testo1);
    AlfaComponents.push(alfa_image2);
    AlfaComponents.push(alfa_image1);
    AlfaComponents.push(alfa_mask);
    AlfaComponents.push(alfa_clicca);
    AlfaComponents.push(alfa_mouse);
    
    for (const thisComponent of AlfaComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function AlfaRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Alfa' ---
    // get current time
    t = AlfaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *alfa_linea* updates
    if (t >= 0.0 && alfa_linea.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      alfa_linea.tStart = t;  // (not accounting for frame time here)
      alfa_linea.frameNStart = frameN;  // exact frame index
      
      alfa_linea.setAutoDraw(true);
    }
    
    
    // *alfa_testo2* updates
    if (t >= 0.0 && alfa_testo2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      alfa_testo2.tStart = t;  // (not accounting for frame time here)
      alfa_testo2.frameNStart = frameN;  // exact frame index
      
      alfa_testo2.setAutoDraw(true);
    }
    
    
    // *alfa_testo1* updates
    if (t >= 0.0 && alfa_testo1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      alfa_testo1.tStart = t;  // (not accounting for frame time here)
      alfa_testo1.frameNStart = frameN;  // exact frame index
      
      alfa_testo1.setAutoDraw(true);
    }
    
    
    // *alfa_image2* updates
    if (t >= 0.0 && alfa_image2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      alfa_image2.tStart = t;  // (not accounting for frame time here)
      alfa_image2.frameNStart = frameN;  // exact frame index
      
      alfa_image2.setAutoDraw(true);
    }
    
    
    // *alfa_image1* updates
    if (t >= 0.0 && alfa_image1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      alfa_image1.tStart = t;  // (not accounting for frame time here)
      alfa_image1.frameNStart = frameN;  // exact frame index
      
      alfa_image1.setAutoDraw(true);
    }
    
    
    // *alfa_mask* updates
    if (t >= 0.0 && alfa_mask.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      alfa_mask.tStart = t;  // (not accounting for frame time here)
      alfa_mask.frameNStart = frameN;  // exact frame index
      
      alfa_mask.setAutoDraw(true);
    }
    
    
    if (alfa_clicca.status === PsychoJS.Status.STARTED){ // only update if being drawn
      alfa_clicca.setColor(new util.Color([Math.sin(t), (- 1.0), (- 1.0)]), false);
    }
    
    // *alfa_clicca* updates
    if (t >= 0 && alfa_clicca.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      alfa_clicca.tStart = t;  // (not accounting for frame time here)
      alfa_clicca.frameNStart = frameN;  // exact frame index
      
      alfa_clicca.setAutoDraw(true);
    }
    
    // *alfa_mouse* updates
    if (t >= 0.0 && alfa_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      alfa_mouse.tStart = t;  // (not accounting for frame time here)
      alfa_mouse.frameNStart = frameN;  // exact frame index
      
      alfa_mouse.status = PsychoJS.Status.STARTED;
      alfa_mouse.mouseClock.reset();
      prevButtonState = alfa_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (alfa_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = alfa_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [alfa_mask]) {
            if (obj.contains(alfa_mouse)) {
              gotValidClick = true;
              alfa_mouse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of AlfaComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function AlfaRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Alfa' ---
    for (const thisComponent of AlfaComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Alfa.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = alfa_mouse.getPos();
    _mouseButtons = alfa_mouse.getPressed();
    psychoJS.experiment.addData('alfa_mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('alfa_mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('alfa_mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('alfa_mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('alfa_mouse.rightButton', _mouseButtons[2]);
    if (alfa_mouse.clicked_name.length > 0) {
      psychoJS.experiment.addData('alfa_mouse.clicked_name', alfa_mouse.clicked_name[0]);}
    // the Routine "Alfa" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ITIComponents;
function ITIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ITI' ---
    t = 0;
    ITIClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ITI.started', globalClock.getTime());
    // keep track of which components have finished
    ITIComponents = [];
    ITIComponents.push(ITI_fig);
    
    for (const thisComponent of ITIComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ITIRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ITI' ---
    // get current time
    t = ITIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ITI_fig* updates
    if (t >= 0 && ITI_fig.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ITI_fig.tStart = t;  // (not accounting for frame time here)
      ITI_fig.frameNStart = frameN;  // exact frame index
      
      ITI_fig.setAutoDraw(true);
    }
    
    if (ITI_fig.status === PsychoJS.Status.STARTED && frameN >= 60) {
      ITI_fig.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ITIComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ITIRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ITI' ---
    for (const thisComponent of ITIComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ITI.stopped', globalClock.getTime());
    // the Routine "ITI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var consenso;
var cons_go;
var cons_hid;
var cons_msg;
var cons_opaav;
var cons_opain;
var go_on;
var tempo_consenso;
var B_consensoinformatoComponents;
function B_consensoinformatoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'B_consensoinformato' ---
    t = 0;
    B_consensoinformatoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('B_consensoinformato.started', globalClock.getTime());
    // Run 'Begin Routine' code from cons_code
    consenso = 2;
    cons_go = 1;
    cons_hid = 0;
    cons_msg = null;
    cons_opaav = 1;
    cons_opain = 0.5;
    cons_text.setAlignHoriz("left");
    go_on = 0;
    tempo_consenso = t;
    
    // setup some python lists for storing info about the cons_mouse
    cons_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    B_consensoinformatoComponents = [];
    B_consensoinformatoComponents.push(cons_tit);
    B_consensoinformatoComponents.push(cons_indietro);
    B_consensoinformatoComponents.push(cons_avanti);
    B_consensoinformatoComponents.push(cons_avvio);
    B_consensoinformatoComponents.push(cons_noavvio);
    B_consensoinformatoComponents.push(cons_avviotext);
    B_consensoinformatoComponents.push(cons_avviotext_3);
    B_consensoinformatoComponents.push(cons_text);
    B_consensoinformatoComponents.push(cons_nr_pag);
    B_consensoinformatoComponents.push(cons_nr_pag_2);
    B_consensoinformatoComponents.push(cons_nr_pag_3);
    B_consensoinformatoComponents.push(cons_av_text);
    B_consensoinformatoComponents.push(cons_in_text);
    B_consensoinformatoComponents.push(cons_mouse);
    
    for (const thisComponent of B_consensoinformatoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function B_consensoinformatoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'B_consensoinformato' ---
    // get current time
    t = B_consensoinformatoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from cons_code
    if ((cons_hid > 0)) {
        cons_hid = (cons_hid - 0.05);
    }
    if ((cons_hid <= 0)) {
        if (cons_mouse.isPressedIn(cons_avanti)) {
            cons_go = (cons_go + 1);
            cons_hid = 1;
        } else {
            if (cons_mouse.isPressedIn(cons_indietro)) {
                cons_go = (cons_go - 1);
                cons_hid = 1;
            }
        }
    }
    if ((cons_go > 3)) {
        cons_go = 3;
    }
    if ((cons_go < 1)) {
        cons_go = 1;
    }
    if ((cons_go === 2)) {
        cons_msg = (((("    Dichiari:" + "\n\n- Di essere maggiorenne.") + "\n\n- Di essere a conoscenza che lo studio \u00e8 conforme alle leggi vigenti (Decreto Legislativo 196/2003 e GDPR UE 679/2016) riguardo la protezione dei dati, e che acconsenti al trattamento e alla comunicazione dei dati personali,") + " nei limiti, per le finalit\u00e0 e per la durata specificate dalla normativa vigente (Decreto Legislativo 196/2003 e GDPR UE 679/2016). Il responsabile della ricerca si impegna a rispettare gli obblighi previsti dalla legislazione") + " riguardo la raccolta, il trattamento e la conservazione dei dati sensibili.");
        cons_opaav = 1;
        cons_opain = 1;
    } else {
        if ((cons_go === 3)) {
            cons_msg = ((("- Di essere a conoscenza che puoi ritirarti dallo studio in qualsiasi momento senza dover fornire spiegazioni, senza alcuna penalit\u00e0, e garantendo che i tuoi dati non vengano utilizzati." + "\n\n- Di essere a conoscenza che i dati saranno raccolti in modo anonimo e associati a un codice che permetter\u00e0 solo al partecipante di accedere ai propri dati.") + "\n\n- Di essere a conoscenza che i tuoi dati saranno utilizzati esclusivamente per scopi scientifici e statistici, nel rispetto delle regole di riservatezza.") + "\n\n  Premi 'Accetta' per acconsentire e proseguire. Premi 'Rifiuta' altrimenti.");
            cons_opaav = 0.5;
            cons_opain = 1;
        } else {
            if ((cons_go === 1)) {
                cons_msg = ((("    Gentile partecipante, chiediamo il tuo consenso per prendere parte a questa ricerca.\n\n" + "Lo scopo di questa ricerca \u00e8 capire l'effetto che il contesto ha sulle nostre decisioni.") + "\n\nLa durata totale dell'esperimento sar\u00e0 di circa 20 minuti.") + "\n\nTi verranno presentati dei paragrafi e delle frasi da leggere a cui dovrai rispondere.");
                cons_opaav = 1;
                cons_opain = 0.5;
            }
        }
    }
    if ((cons_avvio.status === PsychoJS.Status.STARTED)) {
        if (cons_mouse.isPressedIn(cons_avvio)) {
            consenso = 1;
            continueRoutine = false;
        } else {
            if (cons_mouse.isPressedIn(cons_noavvio)) {
                consenso = 0;
                continueRoutine = false;
            }
        }
    }
    tempo_consenso = t;
    
    
    // *cons_tit* updates
    if (t >= 0.0 && cons_tit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_tit.tStart = t;  // (not accounting for frame time here)
      cons_tit.frameNStart = frameN;  // exact frame index
      
      cons_tit.setAutoDraw(true);
    }
    
    
    if (cons_indietro.status === PsychoJS.Status.STARTED){ // only update if being drawn
      cons_indietro.setOpacity(cons_opain, false);
    }
    
    // *cons_indietro* updates
    if (t >= 0.0 && cons_indietro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_indietro.tStart = t;  // (not accounting for frame time here)
      cons_indietro.frameNStart = frameN;  // exact frame index
      
      cons_indietro.setAutoDraw(true);
    }
    
    
    if (cons_avanti.status === PsychoJS.Status.STARTED){ // only update if being drawn
      cons_avanti.setOpacity(cons_opaav, false);
    }
    
    // *cons_avanti* updates
    if (t >= 0.0 && cons_avanti.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_avanti.tStart = t;  // (not accounting for frame time here)
      cons_avanti.frameNStart = frameN;  // exact frame index
      
      cons_avanti.setAutoDraw(true);
    }
    
    
    // *cons_avvio* updates
    if (((cons_go == 3)) && cons_avvio.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_avvio.tStart = t;  // (not accounting for frame time here)
      cons_avvio.frameNStart = frameN;  // exact frame index
      
      cons_avvio.setAutoDraw(true);
    }
    
    
    // *cons_noavvio* updates
    if (((cons_go == 3)) && cons_noavvio.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_noavvio.tStart = t;  // (not accounting for frame time here)
      cons_noavvio.frameNStart = frameN;  // exact frame index
      
      cons_noavvio.setAutoDraw(true);
    }
    
    
    // *cons_avviotext* updates
    if (((cons_go == 3)) && cons_avviotext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_avviotext.tStart = t;  // (not accounting for frame time here)
      cons_avviotext.frameNStart = frameN;  // exact frame index
      
      cons_avviotext.setAutoDraw(true);
    }
    
    
    // *cons_avviotext_3* updates
    if (((cons_go == 3)) && cons_avviotext_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_avviotext_3.tStart = t;  // (not accounting for frame time here)
      cons_avviotext_3.frameNStart = frameN;  // exact frame index
      
      cons_avviotext_3.setAutoDraw(true);
    }
    
    
    if (cons_text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      cons_text.setText(cons_msg, false);
    }
    
    // *cons_text* updates
    if (t >= 0.0 && cons_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_text.tStart = t;  // (not accounting for frame time here)
      cons_text.frameNStart = frameN;  // exact frame index
      
      cons_text.setAutoDraw(true);
    }
    
    
    if (cons_nr_pag.status === PsychoJS.Status.STARTED){ // only update if being drawn
      cons_nr_pag.setText(cons_go, false);
    }
    
    // *cons_nr_pag* updates
    if (t >= 0.0 && cons_nr_pag.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_nr_pag.tStart = t;  // (not accounting for frame time here)
      cons_nr_pag.frameNStart = frameN;  // exact frame index
      
      cons_nr_pag.setAutoDraw(true);
    }
    
    
    if (cons_nr_pag_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      cons_nr_pag_2.setText('/', false);
    }
    
    // *cons_nr_pag_2* updates
    if (t >= 0.0 && cons_nr_pag_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_nr_pag_2.tStart = t;  // (not accounting for frame time here)
      cons_nr_pag_2.frameNStart = frameN;  // exact frame index
      
      cons_nr_pag_2.setAutoDraw(true);
    }
    
    
    if (cons_nr_pag_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      cons_nr_pag_3.setText('3', false);
    }
    
    // *cons_nr_pag_3* updates
    if (t >= 0.0 && cons_nr_pag_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_nr_pag_3.tStart = t;  // (not accounting for frame time here)
      cons_nr_pag_3.frameNStart = frameN;  // exact frame index
      
      cons_nr_pag_3.setAutoDraw(true);
    }
    
    
    if (cons_av_text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      cons_av_text.setOpacity(cons_opaav, false);
    }
    
    // *cons_av_text* updates
    if (t >= 0.0 && cons_av_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_av_text.tStart = t;  // (not accounting for frame time here)
      cons_av_text.frameNStart = frameN;  // exact frame index
      
      cons_av_text.setAutoDraw(true);
    }
    
    
    if (cons_in_text.status === PsychoJS.Status.STARTED){ // only update if being drawn
      cons_in_text.setOpacity(cons_opain, false);
    }
    
    // *cons_in_text* updates
    if (t >= 0.0 && cons_in_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_in_text.tStart = t;  // (not accounting for frame time here)
      cons_in_text.frameNStart = frameN;  // exact frame index
      
      cons_in_text.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of B_consensoinformatoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var loop1;
function B_consensoinformatoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'B_consensoinformato' ---
    for (const thisComponent of B_consensoinformatoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('B_consensoinformato.stopped', globalClock.getTime());
    // Run 'End Routine' code from cons_code
    if ((go_on > 40)) {
        loop1 = 1;
    }
    if ((go_on <= 40)) {
        loop1 = 0;
    }
    psychoJS.experiment.addData("tempo_consenso", tempo_consenso);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = cons_mouse.getPos();
    _mouseButtons = cons_mouse.getPressed();
    psychoJS.experiment.addData('cons_mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('cons_mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('cons_mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('cons_mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('cons_mouse.rightButton', _mouseButtons[2]);
    if (cons_mouse.clicked_name.length > 0) {
      psychoJS.experiment.addData('cons_mouse.clicked_name', cons_mouse.clicked_name[0]);}
    // the Routine "B_consensoinformato" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp_loop;
function exp_loopLoopBegin(exp_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    exp_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: consenso, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'exp_loop'
    });
    psychoJS.experiment.addLoop(exp_loop); // add the loop to the experiment
    currentLoop = exp_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisExp_loop of exp_loop) {
      snapshot = exp_loop.getSnapshot();
      exp_loopLoopScheduler.add(importConditions(snapshot));
      exp_loopLoopScheduler.add(ITIRoutineBegin(snapshot));
      exp_loopLoopScheduler.add(ITIRoutineEachFrame());
      exp_loopLoopScheduler.add(ITIRoutineEnd(snapshot));
      exp_loopLoopScheduler.add(A_benvenutoRoutineBegin(snapshot));
      exp_loopLoopScheduler.add(A_benvenutoRoutineEachFrame());
      exp_loopLoopScheduler.add(A_benvenutoRoutineEnd(snapshot));
      exp_loopLoopScheduler.add(ITIRoutineBegin(snapshot));
      exp_loopLoopScheduler.add(ITIRoutineEachFrame());
      exp_loopLoopScheduler.add(ITIRoutineEnd(snapshot));
      exp_loopLoopScheduler.add(B2_istruzioniRoutineBegin(snapshot));
      exp_loopLoopScheduler.add(B2_istruzioniRoutineEachFrame());
      exp_loopLoopScheduler.add(B2_istruzioniRoutineEnd(snapshot));
      exp_loopLoopScheduler.add(ITIRoutineBegin(snapshot));
      exp_loopLoopScheduler.add(ITIRoutineEachFrame());
      exp_loopLoopScheduler.add(ITIRoutineEnd(snapshot));
      exp_loopLoopScheduler.add(SAMevaluationRoutineBegin(snapshot));
      exp_loopLoopScheduler.add(SAMevaluationRoutineEachFrame());
      exp_loopLoopScheduler.add(SAMevaluationRoutineEnd(snapshot));
      exp_loopLoopScheduler.add(ITIRoutineBegin(snapshot));
      exp_loopLoopScheduler.add(ITIRoutineEachFrame());
      exp_loopLoopScheduler.add(ITIRoutineEnd(snapshot));
      exp_loopLoopScheduler.add(LoadingRoutineBegin(snapshot));
      exp_loopLoopScheduler.add(LoadingRoutineEachFrame());
      exp_loopLoopScheduler.add(LoadingRoutineEnd(snapshot));
      exp_loopLoopScheduler.add(ITIRoutineBegin(snapshot));
      exp_loopLoopScheduler.add(ITIRoutineEachFrame());
      exp_loopLoopScheduler.add(ITIRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      exp_loopLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      exp_loopLoopScheduler.add(trialsLoopScheduler);
      exp_loopLoopScheduler.add(trialsLoopEnd);
      exp_loopLoopScheduler.add(ITIRoutineBegin(snapshot));
      exp_loopLoopScheduler.add(ITIRoutineEachFrame());
      exp_loopLoopScheduler.add(ITIRoutineEnd(snapshot));
      exp_loopLoopScheduler.add(D_VDRoutineBegin(snapshot));
      exp_loopLoopScheduler.add(D_VDRoutineEachFrame());
      exp_loopLoopScheduler.add(D_VDRoutineEnd(snapshot));
      exp_loopLoopScheduler.add(ITIRoutineBegin(snapshot));
      exp_loopLoopScheduler.add(ITIRoutineEachFrame());
      exp_loopLoopScheduler.add(ITIRoutineEnd(snapshot));
      exp_loopLoopScheduler.add(PreviousRoutineBegin(snapshot));
      exp_loopLoopScheduler.add(PreviousRoutineEachFrame());
      exp_loopLoopScheduler.add(PreviousRoutineEnd(snapshot));
      exp_loopLoopScheduler.add(ITIRoutineBegin(snapshot));
      exp_loopLoopScheduler.add(ITIRoutineEachFrame());
      exp_loopLoopScheduler.add(ITIRoutineEnd(snapshot));
      const itaestLoopScheduler = new Scheduler(psychoJS);
      exp_loopLoopScheduler.add(itaestLoopBegin(itaestLoopScheduler, snapshot));
      exp_loopLoopScheduler.add(itaestLoopScheduler);
      exp_loopLoopScheduler.add(itaestLoopEnd);
      const ingestaLoopScheduler = new Scheduler(psychoJS);
      exp_loopLoopScheduler.add(ingestaLoopBegin(ingestaLoopScheduler, snapshot));
      exp_loopLoopScheduler.add(ingestaLoopScheduler);
      exp_loopLoopScheduler.add(ingestaLoopEnd);
      exp_loopLoopScheduler.add(ITIRoutineBegin(snapshot));
      exp_loopLoopScheduler.add(ITIRoutineEachFrame());
      exp_loopLoopScheduler.add(ITIRoutineEnd(snapshot));
      exp_loopLoopScheduler.add(PFRoutineBegin(snapshot));
      exp_loopLoopScheduler.add(PFRoutineEachFrame());
      exp_loopLoopScheduler.add(PFRoutineEnd(snapshot));
      exp_loopLoopScheduler.add(ITIRoutineBegin(snapshot));
      exp_loopLoopScheduler.add(ITIRoutineEachFrame());
      exp_loopLoopScheduler.add(ITIRoutineEnd(snapshot));
      exp_loopLoopScheduler.add(Questionario_LinguaRoutineBegin(snapshot));
      exp_loopLoopScheduler.add(Questionario_LinguaRoutineEachFrame());
      exp_loopLoopScheduler.add(Questionario_LinguaRoutineEnd(snapshot));
      exp_loopLoopScheduler.add(ITIRoutineBegin(snapshot));
      exp_loopLoopScheduler.add(ITIRoutineEachFrame());
      exp_loopLoopScheduler.add(ITIRoutineEnd(snapshot));
      exp_loopLoopScheduler.add(ProvaIngleseRoutineBegin(snapshot));
      exp_loopLoopScheduler.add(ProvaIngleseRoutineEachFrame());
      exp_loopLoopScheduler.add(ProvaIngleseRoutineEnd(snapshot));
      exp_loopLoopScheduler.add(Ant_lastquestionRoutineBegin(snapshot));
      exp_loopLoopScheduler.add(Ant_lastquestionRoutineEachFrame());
      exp_loopLoopScheduler.add(Ant_lastquestionRoutineEnd(snapshot));
      exp_loopLoopScheduler.add(exp_loopLoopEndIteration(exp_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: conditionFile,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(C_associative_taskRoutineBegin(snapshot));
      trialsLoopScheduler.add(C_associative_taskRoutineEachFrame());
      trialsLoopScheduler.add(C_associative_taskRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var itaest;
function itaestLoopBegin(itaestLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    itaest = new TrialHandler({
      psychoJS: psychoJS,
      nReps: estita, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'itaest'
    });
    psychoJS.experiment.addLoop(itaest); // add the loop to the experiment
    currentLoop = itaest;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisItaest of itaest) {
      snapshot = itaest.getSnapshot();
      itaestLoopScheduler.add(importConditions(snapshot));
      itaestLoopScheduler.add(EstITARoutineBegin(snapshot));
      itaestLoopScheduler.add(EstITARoutineEachFrame());
      itaestLoopScheduler.add(EstITARoutineEnd(snapshot));
      itaestLoopScheduler.add(itaestLoopEndIteration(itaestLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function itaestLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(itaest);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function itaestLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var ingesta;
function ingestaLoopBegin(ingestaLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    ingesta = new TrialHandler({
      psychoJS: psychoJS,
      nReps: esteng, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'ingesta'
    });
    psychoJS.experiment.addLoop(ingesta); // add the loop to the experiment
    currentLoop = ingesta;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisIngesta of ingesta) {
      snapshot = ingesta.getSnapshot();
      ingestaLoopScheduler.add(importConditions(snapshot));
      ingestaLoopScheduler.add(EstENGRoutineBegin(snapshot));
      ingestaLoopScheduler.add(EstENGRoutineEachFrame());
      ingestaLoopScheduler.add(EstENGRoutineEnd(snapshot));
      ingestaLoopScheduler.add(ingestaLoopEndIteration(ingestaLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function ingestaLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(ingesta);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function ingestaLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function exp_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(exp_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function exp_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var ben_linea;
var A_benvenutoComponents;
function A_benvenutoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'A_benvenuto' ---
    t = 0;
    A_benvenutoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('A_benvenuto.started', globalClock.getTime());
    // Run 'Begin Routine' code from ben_code
    ben_linea = 0;
    
    // setup some python lists for storing info about the ben_mouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    A_benvenutoComponents = [];
    A_benvenutoComponents.push(ben_testo_1);
    A_benvenutoComponents.push(ben_testo_2);
    A_benvenutoComponents.push(ben_qdr_2);
    A_benvenutoComponents.push(ben_qdr_1);
    A_benvenutoComponents.push(ben_qdrtno_1);
    A_benvenutoComponents.push(ben_qdrtno_2);
    A_benvenutoComponents.push(ben_qdrtno_3);
    A_benvenutoComponents.push(ben_qdrtno_4);
    A_benvenutoComponents.push(ben_mouse);
    A_benvenutoComponents.push(ben_linea_sx);
    A_benvenutoComponents.push(ben_linea_dx);
    
    for (const thisComponent of A_benvenutoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function A_benvenutoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'A_benvenuto' ---
    // get current time
    t = A_benvenutoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from ben_code
    if ((ben_linea >= 0.4)) {
        ben_linea = 0.4;
    } else {
        ben_linea = (t / 8);
    }
    
    
    if (ben_testo_1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ben_testo_1.setOpacity(0+t/2, false);
    }
    
    // *ben_testo_1* updates
    if (t >= 0 && ben_testo_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ben_testo_1.tStart = t;  // (not accounting for frame time here)
      ben_testo_1.frameNStart = frameN;  // exact frame index
      
      ben_testo_1.setAutoDraw(true);
    }
    
    
    if (ben_testo_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ben_testo_2.setColor(new util.Color([Math.sin(t), (- 1.0), (- 1.0)]), false);
      ben_testo_2.setOpacity(0+t/2, false);
    }
    
    // *ben_testo_2* updates
    if (t >= 0 && ben_testo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ben_testo_2.tStart = t;  // (not accounting for frame time here)
      ben_testo_2.frameNStart = frameN;  // exact frame index
      
      ben_testo_2.setAutoDraw(true);
    }
    
    
    if (ben_qdr_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ben_qdr_2.setOpacity(0+t/2, false);
    }
    
    // *ben_qdr_2* updates
    if (t >= 0.0 && ben_qdr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ben_qdr_2.tStart = t;  // (not accounting for frame time here)
      ben_qdr_2.frameNStart = frameN;  // exact frame index
      
      ben_qdr_2.setAutoDraw(true);
    }
    
    
    if (ben_qdr_1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ben_qdr_1.setOpacity(0+t/2, false);
    }
    
    // *ben_qdr_1* updates
    if (t >= 0.0 && ben_qdr_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ben_qdr_1.tStart = t;  // (not accounting for frame time here)
      ben_qdr_1.frameNStart = frameN;  // exact frame index
      
      ben_qdr_1.setAutoDraw(true);
    }
    
    
    if (ben_qdrtno_1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ben_qdrtno_1.setOpacity(0+t/2, false);
    }
    
    // *ben_qdrtno_1* updates
    if (t >= 0 && ben_qdrtno_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ben_qdrtno_1.tStart = t;  // (not accounting for frame time here)
      ben_qdrtno_1.frameNStart = frameN;  // exact frame index
      
      ben_qdrtno_1.setAutoDraw(true);
    }
    
    
    if (ben_qdrtno_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ben_qdrtno_2.setOpacity(0+t/2, false);
    }
    
    // *ben_qdrtno_2* updates
    if (t >= 0 && ben_qdrtno_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ben_qdrtno_2.tStart = t;  // (not accounting for frame time here)
      ben_qdrtno_2.frameNStart = frameN;  // exact frame index
      
      ben_qdrtno_2.setAutoDraw(true);
    }
    
    
    if (ben_qdrtno_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ben_qdrtno_3.setOpacity(0+t/2, false);
    }
    
    // *ben_qdrtno_3* updates
    if (t >= 0.0 && ben_qdrtno_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ben_qdrtno_3.tStart = t;  // (not accounting for frame time here)
      ben_qdrtno_3.frameNStart = frameN;  // exact frame index
      
      ben_qdrtno_3.setAutoDraw(true);
    }
    
    
    if (ben_qdrtno_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ben_qdrtno_4.setOpacity(0+t/2, false);
    }
    
    // *ben_qdrtno_4* updates
    if (t >= 0.0 && ben_qdrtno_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ben_qdrtno_4.tStart = t;  // (not accounting for frame time here)
      ben_qdrtno_4.frameNStart = frameN;  // exact frame index
      
      ben_qdrtno_4.setAutoDraw(true);
    }
    
    // *ben_mouse* updates
    if (t >= 2.0 && ben_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ben_mouse.tStart = t;  // (not accounting for frame time here)
      ben_mouse.frameNStart = frameN;  // exact frame index
      
      ben_mouse.status = PsychoJS.Status.STARTED;
      ben_mouse.mouseClock.reset();
      prevButtonState = ben_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (ben_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = ben_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    
    if (ben_linea_sx.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ben_linea_sx.setSize([ben_linea, 0.005], false);
    }
    
    // *ben_linea_sx* updates
    if (t >= 0.0 && ben_linea_sx.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ben_linea_sx.tStart = t;  // (not accounting for frame time here)
      ben_linea_sx.frameNStart = frameN;  // exact frame index
      
      ben_linea_sx.setAutoDraw(true);
    }
    
    
    if (ben_linea_dx.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ben_linea_dx.setSize([ben_linea, 0.005], false);
    }
    
    // *ben_linea_dx* updates
    if (t >= 0.0 && ben_linea_dx.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ben_linea_dx.tStart = t;  // (not accounting for frame time here)
      ben_linea_dx.frameNStart = frameN;  // exact frame index
      
      ben_linea_dx.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of A_benvenutoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function A_benvenutoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'A_benvenuto' ---
    for (const thisComponent of A_benvenutoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('A_benvenuto.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = ben_mouse.getPos();
    _mouseButtons = ben_mouse.getPressed();
    psychoJS.experiment.addData('ben_mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('ben_mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('ben_mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('ben_mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('ben_mouse.rightButton', _mouseButtons[2]);
    // the Routine "A_benvenuto" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var tempo_istru;
var B2_istruzioniComponents;
function B2_istruzioniRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'B2_istruzioni' ---
    t = 0;
    B2_istruzioniClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('B2_istruzioni.started', globalClock.getTime());
    // Run 'Begin Routine' code from cons_code_2
    cons_go = 1;
    cons_hid = 0;
    cons_msg = null;
    cons_opaav = 1;
    cons_opain = 0.5;
    cons_text_2.setAlignHoriz("left");
    go_on = 0;
    tempo_istru = t;
    
    // setup some python lists for storing info about the cons_mouse_2
    cons_mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    B2_istruzioniComponents = [];
    B2_istruzioniComponents.push(cons_tit_2);
    B2_istruzioniComponents.push(cons_indietro_2);
    B2_istruzioniComponents.push(cons_avanti_2);
    B2_istruzioniComponents.push(cons_avvio_2);
    B2_istruzioniComponents.push(cons_avviotext_2);
    B2_istruzioniComponents.push(cons_text_2);
    B2_istruzioniComponents.push(cons_nr_pag_4);
    B2_istruzioniComponents.push(cons_nr_pag_5);
    B2_istruzioniComponents.push(cons_nr_pag_6);
    B2_istruzioniComponents.push(cons_av_text_2);
    B2_istruzioniComponents.push(cons_in_text_2);
    B2_istruzioniComponents.push(cons_mouse_2);
    
    for (const thisComponent of B2_istruzioniComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function B2_istruzioniRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'B2_istruzioni' ---
    // get current time
    t = B2_istruzioniClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from cons_code_2
    tempo_istru = t;
    if ((cons_hid > 0)) {
        cons_hid = (cons_hid - 0.05);
    }
    if ((cons_hid <= 0)) {
        if (cons_mouse.isPressedIn(cons_avanti)) {
            cons_go = (cons_go + 1);
            cons_hid = 1;
        } else {
            if (cons_mouse.isPressedIn(cons_indietro)) {
                cons_go = (cons_go - 1);
                cons_hid = 1;
            }
        }
    }
    if ((cons_go > 3)) {
        cons_go = 3;
    }
    if ((cons_go < 1)) {
        cons_go = 1;
    }
    if ((cons_go === 2)) {
        if ((Number.parseInt(expInfo["group"]) === 1)) {
            cons_msg = ((((((("Le crisi indotte da questa malattia possono essere fermate immediatamente con un farmaco chiamato 'Batatrim'," + " che \u00e8 ancora in fase di sperimentazione. La sua affidabilit\u00e0 non \u00e8 stata ancora completamente provata.") + " Inoltre, questo farmaco pu\u00f2 produrre molti effetti collaterali, che possono essere gravi, quindi non pu\u00f2 essere sempre utilizzato.") + "\n\nIn seguito, ti verranno presentate una serie di cartelle cliniche di pazienti che soffrono della Sindrome di Lindsay.") + " In ogni cartella, prima vedrai se il paziente ha preso il Batatrim, e ti verr\u00e0 chiesto di indicare se pensi che il paziente si riprender\u00e0 dalla crisi.") + " Poi, vedrai se il paziente si \u00e8 effettivamente ripreso dalla crisi.") + "\n\nCerca di scoprire in che misura il Batatrim \u00e8 realmente efficace. Una volta che avrai visto un certo numero di cartelle cliniche,") + " ti verranno fatte alcune domande.");
        } else {
            cons_msg = ((((((("Crises induced by this disease can be stopped immediately with a medicine called 'Batatrim'," + " which is still in the testing stage. Its reliability has not yet been completely proven.") + " In addition, this medicine may produce several side effects, which can be severe, so it cannot always be used.") + "\n\nNext, you will be presented with a series of medical records of patients suffering from Lindsay Syndrome.") + " In each record, you will first see whether the patient had taken Batatrim, and you will be asked to indicate whether you think the patient will recover from the crisis.") + " Then, you will see whether the patient actually recovered from the crisis.") + "\n\nTry to find out the extent to which Batatrim is actually effective. Once you have seen a number of medical records,") + " you will be asked a few questions.");
        }
        cons_opaav = 1;
        cons_opain = 1;
    } else {
        if ((cons_go === 3)) {
            if ((Number.parseInt(expInfo["group"]) === 1)) {
                cons_msg = (("Prima di iniziare l\u2019osservazione di queste cartelle cliniche ti verr\u00e0 presentata una domanda relativa alla storia che hai appena letto." + "\n\nSe hai capito le istruzioni e sei pronto per iniziare, premi il pulsante 'Continua' qui sotto.") + "\n\nAltrimenti, premi 'Indietro' per leggere di nuovo.");
            } else {
                cons_msg = (("Before you begin reviewing these medical records, you will be asked a question related to the story you have just read." + "\n\nIf you have understood the instructions and are ready to begin, press the 'Continue' button below.") + "\n\nOtherwise, press 'Back' to read again.");
            }
            cons_opaav = 0.5;
            cons_opain = 1;
        } else {
            if ((cons_go === 1)) {
                if ((Number.parseInt(expInfo["group"]) === 1)) {
                    cons_msg = (((("Immagina di essere un medico che lavora nel pronto soccorso di un ospedale." + " Sei uno specialista in una malattia rara e pericolosa chiamata 'Sindrome di Lindsay', che deve essere trattata rapidamente in pronto soccorso.") + "\n\nLe crisi indotte da questa malattia possono essere fermate immediatamente con un farmaco chiamato 'Batatrim',") + " che \u00e8 ancora in fase di sperimentazione. La sua affidabilit\u00e0 non \u00e8 stata ancora completamente provata.") + " Inoltre, questo farmaco pu\u00f2 produrre molti effetti collaterali, che possono essere gravi, quindi non pu\u00f2 essere sempre utilizzato.");
                } else {
                    cons_msg = (((("Imagine you are a doctor working in the emergency room of a hospital." + " You are a specialist in a rare and dangerous disease called 'Lindsay Syndrome', which must be treated quickly in the emergency room.") + "\n\nCrises induced by this disease can be stopped immediately with a medicine called 'Batatrim',") + " which is still in the testing stage. Its reliability has not yet been completely proven.") + " In addition, this medicine may produce several side effects, which can be severe, so it cannot always be used.");
                }
                cons_opaav = 1;
                cons_opain = 0.5;
            }
        }
    }
    if ((cons_avvio_2.status === PsychoJS.Status.STARTED)) {
        if (cons_mouse.isPressedIn(cons_avvio_2)) {
            continueRoutine = false;
        }
    }
    tempo_istru = t;
    if ((cons_hid > 0)) {
        cons_hid = (cons_hid - 0.05);
    }
    if ((cons_hid <= 0)) {
        if (cons_mouse.isPressedIn(cons_avanti)) {
            cons_go = (cons_go + 1);
            cons_hid = 1;
        } else {
            if (cons_mouse.isPressedIn(cons_indietro)) {
                cons_go = (cons_go - 1);
                cons_hid = 1;
            }
        }
    }
    if ((cons_go > 3)) {
        cons_go = 3;
    }
    if ((cons_go < 1)) {
        cons_go = 1;
    }
    if ((cons_go === 2)) {
        if ((Number.parseInt(expInfo["group"]) === 1)) {
            cons_msg = (((("In seguito, ti verranno presentate una serie di cartelle cliniche di pazienti che soffrono della Sindrome di Lindsay." + " In ogni cartella, prima vedrai se il paziente ha preso il Batatrim, e ti verr\u00e0 chiesto di indicare se pensi che il paziente si riprender\u00e0 dalla crisi.") + " Poi, vedrai se il paziente si \u00e8 effettivamente ripreso dalla crisi.") + "\n\nCerca di scoprire in che misura il Batatrim \u00e8 realmente efficace. Una volta che avrai visto un certo numero di cartelle cliniche,") + " ti verranno fatte alcune domande.");
        } else {
            cons_msg = (((("Next, you will be presented with a series of medical records of patients suffering from Lindsay Syndrome." + " In each record, you will first see whether the patient had taken Batatrim, and you will be asked to indicate whether you think the patient will recover from the crisis.") + " Then, you will see whether the patient actually recovered from the crisis.") + "\n\nTry to find out the extent to which Batatrim is actually effective. Once you have seen a number of medical records,") + " you will be asked a few questions.");
        }
        cons_opaav = 1;
        cons_opain = 1;
    } else {
        if ((cons_go === 3)) {
            if ((Number.parseInt(expInfo["group"]) === 1)) {
                cons_msg = (("Prima di iniziare l\u2019osservazione di queste cartelle cliniche ti verr\u00e0 presentata una domanda relativa alla storia che hai appena letto." + "\n\nSe hai capito le istruzioni e sei pronto per iniziare, premi il pulsante 'Continua' qui sotto.") + "\n\nAltrimenti, premi 'Indietro' per leggere di nuovo.");
            } else {
                cons_msg = (("Before you begin reviewing these medical records, you will be asked a question related to the story you have just read." + "\n\nIf you have understood the instructions and are ready to begin, press the 'Continue' button below.") + "\n\nOtherwise, press 'Back' to read again.");
            }
            cons_opaav = 0.5;
            cons_opain = 1;
        } else {
            if ((cons_go === 1)) {
                if ((Number.parseInt(expInfo["group"]) === 1)) {
                    cons_msg = (((("Immagina di essere un medico che lavora nel pronto soccorso di un ospedale." + " Sei uno specialista in una malattia rara e pericolosa chiamata 'Sindrome di Lindsay', che deve essere trattata rapidamente in pronto soccorso.") + "\n\nLe crisi indotte da questa malattia possono essere fermate immediatamente con un farmaco chiamato 'Batatrim',") + " che \u00e8 ancora in fase di sperimentazione. La sua affidabilit\u00e0 non \u00e8 stata ancora completamente provata.") + " Inoltre, questo farmaco pu\u00f2 produrre molti effetti collaterali, che possono essere gravi, quindi non pu\u00f2 essere sempre utilizzato.");
                } else {
                    cons_msg = (((("Imagine you are a doctor working in the emergency room of a hospital." + " You are a specialist in a rare and dangerous disease called 'Lindsay Syndrome', which must be treated quickly in the emergency room.") + "\n\nCrises induced by this disease can be stopped immediately with a medicine called 'Batatrim',") + " which is still in the testing stage. Its reliability has not yet been completely proven.") + " In addition, this medicine may produce several side effects, which can be severe, so it cannot always be used.");
                }
                cons_opaav = 1;
                cons_opain = 0.5;
            }
        }
    }
    if ((cons_avvio_2.status === PsychoJS.Status.STARTED)) {
        if (cons_mouse.isPressedIn(cons_avvio_2)) {
            continueRoutine = false;
        }
    }
    
    
    // *cons_tit_2* updates
    if (t >= 0.0 && cons_tit_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_tit_2.tStart = t;  // (not accounting for frame time here)
      cons_tit_2.frameNStart = frameN;  // exact frame index
      
      cons_tit_2.setAutoDraw(true);
    }
    
    
    if (cons_indietro_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      cons_indietro_2.setOpacity(cons_opain, false);
    }
    
    // *cons_indietro_2* updates
    if (t >= 0.0 && cons_indietro_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_indietro_2.tStart = t;  // (not accounting for frame time here)
      cons_indietro_2.frameNStart = frameN;  // exact frame index
      
      cons_indietro_2.setAutoDraw(true);
    }
    
    
    if (cons_avanti_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      cons_avanti_2.setOpacity(cons_opaav, false);
    }
    
    // *cons_avanti_2* updates
    if (t >= 0.0 && cons_avanti_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_avanti_2.tStart = t;  // (not accounting for frame time here)
      cons_avanti_2.frameNStart = frameN;  // exact frame index
      
      cons_avanti_2.setAutoDraw(true);
    }
    
    
    // *cons_avvio_2* updates
    if (((cons_go == 3)) && cons_avvio_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_avvio_2.tStart = t;  // (not accounting for frame time here)
      cons_avvio_2.frameNStart = frameN;  // exact frame index
      
      cons_avvio_2.setAutoDraw(true);
    }
    
    
    // *cons_avviotext_2* updates
    if (((cons_go == 3)) && cons_avviotext_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_avviotext_2.tStart = t;  // (not accounting for frame time here)
      cons_avviotext_2.frameNStart = frameN;  // exact frame index
      
      cons_avviotext_2.setAutoDraw(true);
    }
    
    
    if (cons_text_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      cons_text_2.setText(cons_msg, false);
    }
    
    // *cons_text_2* updates
    if (t >= 0.0 && cons_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_text_2.tStart = t;  // (not accounting for frame time here)
      cons_text_2.frameNStart = frameN;  // exact frame index
      
      cons_text_2.setAutoDraw(true);
    }
    
    
    if (cons_nr_pag_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      cons_nr_pag_4.setText(cons_go, false);
    }
    
    // *cons_nr_pag_4* updates
    if (t >= 0.0 && cons_nr_pag_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_nr_pag_4.tStart = t;  // (not accounting for frame time here)
      cons_nr_pag_4.frameNStart = frameN;  // exact frame index
      
      cons_nr_pag_4.setAutoDraw(true);
    }
    
    
    if (cons_nr_pag_5.status === PsychoJS.Status.STARTED){ // only update if being drawn
      cons_nr_pag_5.setText('/', false);
    }
    
    // *cons_nr_pag_5* updates
    if (t >= 0.0 && cons_nr_pag_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_nr_pag_5.tStart = t;  // (not accounting for frame time here)
      cons_nr_pag_5.frameNStart = frameN;  // exact frame index
      
      cons_nr_pag_5.setAutoDraw(true);
    }
    
    
    if (cons_nr_pag_6.status === PsychoJS.Status.STARTED){ // only update if being drawn
      cons_nr_pag_6.setText('3', false);
    }
    
    // *cons_nr_pag_6* updates
    if (t >= 0.0 && cons_nr_pag_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_nr_pag_6.tStart = t;  // (not accounting for frame time here)
      cons_nr_pag_6.frameNStart = frameN;  // exact frame index
      
      cons_nr_pag_6.setAutoDraw(true);
    }
    
    
    if (cons_av_text_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      cons_av_text_2.setOpacity(cons_opaav, false);
    }
    
    // *cons_av_text_2* updates
    if (t >= 0.0 && cons_av_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_av_text_2.tStart = t;  // (not accounting for frame time here)
      cons_av_text_2.frameNStart = frameN;  // exact frame index
      
      cons_av_text_2.setAutoDraw(true);
    }
    
    
    if (cons_in_text_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      cons_in_text_2.setOpacity(cons_opain, false);
    }
    
    // *cons_in_text_2* updates
    if (t >= 0.0 && cons_in_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cons_in_text_2.tStart = t;  // (not accounting for frame time here)
      cons_in_text_2.frameNStart = frameN;  // exact frame index
      
      cons_in_text_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of B2_istruzioniComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function B2_istruzioniRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'B2_istruzioni' ---
    for (const thisComponent of B2_istruzioniComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('B2_istruzioni.stopped', globalClock.getTime());
    // Run 'End Routine' code from cons_code_2
    psychoJS.experiment.addData("tempo_istru", tempo_istru);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = cons_mouse_2.getPos();
    _mouseButtons = cons_mouse_2.getPressed();
    psychoJS.experiment.addData('cons_mouse_2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('cons_mouse_2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('cons_mouse_2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('cons_mouse_2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('cons_mouse_2.rightButton', _mouseButtons[2]);
    if (cons_mouse_2.clicked_name.length > 0) {
      psychoJS.experiment.addData('cons_mouse_2.clicked_name', cons_mouse_2.clicked_name[0]);}
    // the Routine "B2_istruzioni" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var SAMM;
var temposam;
var colorSAMvalence;
var colorSAMintensity;
var SAMevaluationComponents;
function SAMevaluationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'SAMevaluation' ---
    t = 0;
    SAMevaluationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('SAMevaluation.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_6
    SAMM = 0;
    temposam = 0;
    colorSAMvalence = [(- 1), (- 1), (- 1)];
    colorSAMintensity = [(- 1), (- 1), (- 1)];
    
    sliderintensity.reset()
    slidervalence.reset()
    // setup some python lists for storing info about the mouse_sam
    // current position of the mouse:
    mouse_sam.x = [];
    mouse_sam.y = [];
    mouse_sam.leftButton = [];
    mouse_sam.midButton = [];
    mouse_sam.rightButton = [];
    mouse_sam.time = [];
    mouse_sam.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    SAMevaluationComponents = [];
    SAMevaluationComponents.push(intensity);
    SAMevaluationComponents.push(valence);
    SAMevaluationComponents.push(cercvalence);
    SAMevaluationComponents.push(cerchvalence2);
    SAMevaluationComponents.push(Rett_slider_valence);
    SAMevaluationComponents.push(titoloSAM);
    SAMevaluationComponents.push(istr_SAM);
    SAMevaluationComponents.push(istr_sam2);
    SAMevaluationComponents.push(rettsliderintensity);
    SAMevaluationComponents.push(cercintensity);
    SAMevaluationComponents.push(cercintensity2);
    SAMevaluationComponents.push(sliderintensity);
    SAMevaluationComponents.push(rettoksam);
    SAMevaluationComponents.push(slidervalence);
    SAMevaluationComponents.push(ok_3);
    SAMevaluationComponents.push(mouse_sam);
    
    for (const thisComponent of SAMevaluationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function SAMevaluationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'SAMevaluation' ---
    // get current time
    t = SAMevaluationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_6
    if ((isNaN(slidervalence.rating) || isNaN(sliderintensity.rating))) {
        SAMM = 0;
    } else {
        SAMM = 1;
    }
    if ((rettoksam.status === PsychoJS.Status.STARTED)) {
        if (mouse_vd.isPressedIn(rettoksam)) {
            continueRoutine = false;
        }
    }
    temposam = t;
    
    
    // *intensity* updates
    if (t >= 0.0 && intensity.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intensity.tStart = t;  // (not accounting for frame time here)
      intensity.frameNStart = frameN;  // exact frame index
      
      intensity.setAutoDraw(true);
    }
    
    
    // *valence* updates
    if (t >= 0.0 && valence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      valence.tStart = t;  // (not accounting for frame time here)
      valence.frameNStart = frameN;  // exact frame index
      
      valence.setAutoDraw(true);
    }
    
    
    // *cercvalence* updates
    if (t >= 0.0 && cercvalence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cercvalence.tStart = t;  // (not accounting for frame time here)
      cercvalence.frameNStart = frameN;  // exact frame index
      
      cercvalence.setAutoDraw(true);
    }
    
    
    // *cerchvalence2* updates
    if (t >= 0.0 && cerchvalence2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cerchvalence2.tStart = t;  // (not accounting for frame time here)
      cerchvalence2.frameNStart = frameN;  // exact frame index
      
      cerchvalence2.setAutoDraw(true);
    }
    
    
    // *Rett_slider_valence* updates
    if (t >= 0.0 && Rett_slider_valence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Rett_slider_valence.tStart = t;  // (not accounting for frame time here)
      Rett_slider_valence.frameNStart = frameN;  // exact frame index
      
      Rett_slider_valence.setAutoDraw(true);
    }
    
    
    // *titoloSAM* updates
    if (t >= 0.0 && titoloSAM.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      titoloSAM.tStart = t;  // (not accounting for frame time here)
      titoloSAM.frameNStart = frameN;  // exact frame index
      
      titoloSAM.setAutoDraw(true);
    }
    
    
    // *istr_SAM* updates
    if (t >= 0.0 && istr_SAM.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      istr_SAM.tStart = t;  // (not accounting for frame time here)
      istr_SAM.frameNStart = frameN;  // exact frame index
      
      istr_SAM.setAutoDraw(true);
    }
    
    
    // *istr_sam2* updates
    if (t >= 0.0 && istr_sam2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      istr_sam2.tStart = t;  // (not accounting for frame time here)
      istr_sam2.frameNStart = frameN;  // exact frame index
      
      istr_sam2.setAutoDraw(true);
    }
    
    
    // *rettsliderintensity* updates
    if (t >= 0.0 && rettsliderintensity.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rettsliderintensity.tStart = t;  // (not accounting for frame time here)
      rettsliderintensity.frameNStart = frameN;  // exact frame index
      
      rettsliderintensity.setAutoDraw(true);
    }
    
    
    // *cercintensity* updates
    if (t >= 0.0 && cercintensity.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cercintensity.tStart = t;  // (not accounting for frame time here)
      cercintensity.frameNStart = frameN;  // exact frame index
      
      cercintensity.setAutoDraw(true);
    }
    
    
    // *cercintensity2* updates
    if (t >= 0.0 && cercintensity2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cercintensity2.tStart = t;  // (not accounting for frame time here)
      cercintensity2.frameNStart = frameN;  // exact frame index
      
      cercintensity2.setAutoDraw(true);
    }
    
    
    if (sliderintensity.status === PsychoJS.Status.STARTED){ // only update if being drawn
      sliderintensity.setFillColor(new util.Color(colorSAMintensity), false);
    }
    
    // *sliderintensity* updates
    if (t >= 0.0 && sliderintensity.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderintensity.tStart = t;  // (not accounting for frame time here)
      sliderintensity.frameNStart = frameN;  // exact frame index
      
      sliderintensity.setAutoDraw(true);
    }
    
    
    // *rettoksam* updates
    if (((SAMM == 1)) && rettoksam.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rettoksam.tStart = t;  // (not accounting for frame time here)
      rettoksam.frameNStart = frameN;  // exact frame index
      
      rettoksam.setAutoDraw(true);
    }
    
    
    if (slidervalence.status === PsychoJS.Status.STARTED){ // only update if being drawn
      slidervalence.setFillColor(new util.Color(colorSAMvalence), false);
    }
    
    // *slidervalence* updates
    if (t >= 0.0 && slidervalence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slidervalence.tStart = t;  // (not accounting for frame time here)
      slidervalence.frameNStart = frameN;  // exact frame index
      
      slidervalence.setAutoDraw(true);
    }
    
    
    // *ok_3* updates
    if (((SAMM == 1)) && ok_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ok_3.tStart = t;  // (not accounting for frame time here)
      ok_3.frameNStart = frameN;  // exact frame index
      
      ok_3.setAutoDraw(true);
    }
    
    // *mouse_sam* updates
    if (t >= 0.0 && mouse_sam.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_sam.tStart = t;  // (not accounting for frame time here)
      mouse_sam.frameNStart = frameN;  // exact frame index
      
      mouse_sam.status = PsychoJS.Status.STARTED;
      mouse_sam.mouseClock.reset();
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (mouse_sam.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_sam.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [slidervalence, sliderintensity, rettoksam]) {
            if (obj.contains(mouse_sam)) {
              gotValidClick = true;
              mouse_sam.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_sam.getPos();
          mouse_sam.x.push(_mouseXYs[0]);
          mouse_sam.y.push(_mouseXYs[1]);
          mouse_sam.leftButton.push(_mouseButtons[0]);
          mouse_sam.midButton.push(_mouseButtons[1]);
          mouse_sam.rightButton.push(_mouseButtons[2]);
          mouse_sam.time.push(mouse_sam.mouseClock.getTime());
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SAMevaluationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SAMevaluationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'SAMevaluation' ---
    for (const thisComponent of SAMevaluationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('SAMevaluation.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_6
    psychoJS.experiment.addData("temposam", temposam);
    
    psychoJS.experiment.addData('sliderintensity.response', sliderintensity.getRating());
    psychoJS.experiment.addData('sliderintensity.rt', sliderintensity.getRT());
    psychoJS.experiment.addData('slidervalence.response', slidervalence.getRating());
    psychoJS.experiment.addData('slidervalence.rt', slidervalence.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_sam.x', mouse_sam.x);
    psychoJS.experiment.addData('mouse_sam.y', mouse_sam.y);
    psychoJS.experiment.addData('mouse_sam.leftButton', mouse_sam.leftButton);
    psychoJS.experiment.addData('mouse_sam.midButton', mouse_sam.midButton);
    psychoJS.experiment.addData('mouse_sam.rightButton', mouse_sam.rightButton);
    psychoJS.experiment.addData('mouse_sam.time', mouse_sam.time);
    psychoJS.experiment.addData('mouse_sam.clicked_name', mouse_sam.clicked_name);
    
    // the Routine "SAMevaluation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var LoadingComponents;
function LoadingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Loading' ---
    t = 0;
    LoadingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(7.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Loading.started', globalClock.getTime());
    text22.setText(loadreload);
    // keep track of which components have finished
    LoadingComponents = [];
    LoadingComponents.push(text22);
    
    for (const thisComponent of LoadingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function LoadingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Loading' ---
    // get current time
    t = LoadingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text22* updates
    if (t >= 0.0 && text22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text22.tStart = t;  // (not accounting for frame time here)
      text22.frameNStart = frameN;  // exact frame index
      
      text22.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text22.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text22.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of LoadingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function LoadingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Loading' ---
    for (const thisComponent of LoadingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Loading.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ass;
var assMo2;
var assMo;
var tempo_trial;
var hapremutosi;
var hapremutono;
var contatore;
var C_associative_taskComponents;
function C_associative_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'C_associative_task' ---
    t = 0;
    C_associative_taskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('C_associative_task.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_ass
    ass = 0;
    assMo2 = 1;
    assMo = 0;
    tempo_trial = t;
    hapremutosi = 0;
    hapremutono = 0;
    contatore = 0;
    
    ass_primo.setText(causa);
    ass_terzo.setText(effetto);
    // setup some python lists for storing info about the mouse
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    C_associative_taskComponents = [];
    C_associative_taskComponents.push(linea);
    C_associative_taskComponents.push(cerchio_2);
    C_associative_taskComponents.push(cerchio);
    C_associative_taskComponents.push(ass_r1_3);
    C_associative_taskComponents.push(ass_r1_4);
    C_associative_taskComponents.push(ass_r1_2);
    C_associative_taskComponents.push(ass_r1);
    C_associative_taskComponents.push(ass_psi);
    C_associative_taskComponents.push(ass_pno);
    C_associative_taskComponents.push(ass_primo);
    C_associative_taskComponents.push(ass_secondo);
    C_associative_taskComponents.push(ass_si);
    C_associative_taskComponents.push(ass_no);
    C_associative_taskComponents.push(ass_terzo);
    C_associative_taskComponents.push(maskuno);
    C_associative_taskComponents.push(mouse);
    
    for (const thisComponent of C_associative_taskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function C_associative_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'C_associative_task' ---
    // get current time
    t = C_associative_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_ass
    if ((t >= 1)) {
        assMo = (assMo - 0.02);
    }
    if ((t < 1.5)) {
        if (mouse.isPressedIn(ass_psi)) {
            ass = 0;
        }
        if (mouse.isPressedIn(ass_pno)) {
            ass = 0;
        }
    }
    if ((t >= 1.5)) {
        if (mouse.isPressedIn(ass_psi)) {
            ass = 1;
        }
        if (mouse.isPressedIn(ass_pno)) {
            ass = 1;
        }
    }
    if (((contatore <= 0) && (t >= 1.5))) {
        if (mouse.isPressedIn(ass_psi)) {
            hapremutosi = 1;
            contatore = (contatore + 2);
        }
        if (mouse.isPressedIn(ass_pno)) {
            hapremutono = 1;
            contatore = (contatore + 2);
        }
    }
    if ((ass_r1_3.status === PsychoJS.Status.FINISHED)) {
        assMo2 = (assMo2 - 0.05);
    }
    if ((assMo2 <= 0)) {
        continueRoutine = false;
    }
    tempo_trial = t;
    
    
    // *linea* updates
    if (t >= 0.0 && linea.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      linea.tStart = t;  // (not accounting for frame time here)
      linea.frameNStart = frameN;  // exact frame index
      
      linea.setAutoDraw(true);
    }
    
    
    // *cerchio_2* updates
    if (t >= 0.0 && cerchio_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cerchio_2.tStart = t;  // (not accounting for frame time here)
      cerchio_2.frameNStart = frameN;  // exact frame index
      
      cerchio_2.setAutoDraw(true);
    }
    
    
    // *cerchio* updates
    if (t >= 0.0 && cerchio.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cerchio.tStart = t;  // (not accounting for frame time here)
      cerchio.frameNStart = frameN;  // exact frame index
      
      cerchio.setAutoDraw(true);
    }
    
    
    if (ass_r1_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ass_r1_3.setOpacity(assMo2, false);
    }
    
    // *ass_r1_3* updates
    if (((ass == 1)) && ass_r1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ass_r1_3.tStart = t;  // (not accounting for frame time here)
      ass_r1_3.frameNStart = frameN;  // exact frame index
      
      ass_r1_3.setAutoDraw(true);
    }
    
    if (ass_r1_3.status === PsychoJS.Status.STARTED && t >= (ass_r1_3.tStart + 2.0)) {
      ass_r1_3.setAutoDraw(false);
    }
    
    
    if (ass_r1_4.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ass_r1_4.setOpacity(assMo2, false);
    }
    
    // *ass_r1_4* updates
    if (((ass > 0)) && ass_r1_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ass_r1_4.tStart = t;  // (not accounting for frame time here)
      ass_r1_4.frameNStart = frameN;  // exact frame index
      
      ass_r1_4.setAutoDraw(true);
    }
    
    
    if (ass_r1_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ass_r1_2.setOpacity(assMo2, false);
    }
    
    // *ass_r1_2* updates
    if (t >= 0.0 && ass_r1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ass_r1_2.tStart = t;  // (not accounting for frame time here)
      ass_r1_2.frameNStart = frameN;  // exact frame index
      
      ass_r1_2.setAutoDraw(true);
    }
    
    
    if (ass_r1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ass_r1.setOpacity(assMo2, false);
    }
    
    // *ass_r1* updates
    if (t >= 0.0 && ass_r1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ass_r1.tStart = t;  // (not accounting for frame time here)
      ass_r1.frameNStart = frameN;  // exact frame index
      
      ass_r1.setAutoDraw(true);
    }
    
    
    if (ass_psi.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ass_psi.setOpacity(assMo2, false);
    }
    
    // *ass_psi* updates
    if (t >= 0 && ass_psi.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ass_psi.tStart = t;  // (not accounting for frame time here)
      ass_psi.frameNStart = frameN;  // exact frame index
      
      ass_psi.setAutoDraw(true);
    }
    
    
    if (ass_pno.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ass_pno.setOpacity(assMo2, false);
    }
    
    // *ass_pno* updates
    if (t >= 0 && ass_pno.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ass_pno.tStart = t;  // (not accounting for frame time here)
      ass_pno.frameNStart = frameN;  // exact frame index
      
      ass_pno.setAutoDraw(true);
    }
    
    
    if (ass_primo.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ass_primo.setOpacity(assMo2, false);
    }
    
    // *ass_primo* updates
    if (t >= 0.0 && ass_primo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ass_primo.tStart = t;  // (not accounting for frame time here)
      ass_primo.frameNStart = frameN;  // exact frame index
      
      ass_primo.setAutoDraw(true);
    }
    
    
    if (ass_secondo.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ass_secondo.setOpacity(assMo2, false);
    }
    
    // *ass_secondo* updates
    if (t >= 0.0 && ass_secondo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ass_secondo.tStart = t;  // (not accounting for frame time here)
      ass_secondo.frameNStart = frameN;  // exact frame index
      
      ass_secondo.setAutoDraw(true);
    }
    
    
    if (ass_si.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ass_si.setOpacity(assMo2, false);
    }
    
    // *ass_si* updates
    if (t >= 0 && ass_si.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ass_si.tStart = t;  // (not accounting for frame time here)
      ass_si.frameNStart = frameN;  // exact frame index
      
      ass_si.setAutoDraw(true);
    }
    
    
    if (ass_no.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ass_no.setOpacity(assMo2, false);
    }
    
    // *ass_no* updates
    if (t >= 0 && ass_no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ass_no.tStart = t;  // (not accounting for frame time here)
      ass_no.frameNStart = frameN;  // exact frame index
      
      ass_no.setAutoDraw(true);
    }
    
    
    if (ass_terzo.status === PsychoJS.Status.STARTED){ // only update if being drawn
      ass_terzo.setOpacity(assMo2, false);
    }
    
    // *ass_terzo* updates
    if (((ass == 1)) && ass_terzo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ass_terzo.tStart = t;  // (not accounting for frame time here)
      ass_terzo.frameNStart = frameN;  // exact frame index
      
      ass_terzo.setAutoDraw(true);
    }
    
    
    if (maskuno.status === PsychoJS.Status.STARTED){ // only update if being drawn
      maskuno.setFillColor(new util.Color([1.0, 1.0, 1.0]), false);
      maskuno.setPos([0, assMo], false);
      maskuno.setLineColor(new util.Color([1.0, 1.0, 1.0]), false);
    }
    
    // *maskuno* updates
    if (t >= 0.0 && maskuno.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      maskuno.tStart = t;  // (not accounting for frame time here)
      maskuno.frameNStart = frameN;  // exact frame index
      
      maskuno.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (maskuno.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      maskuno.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of C_associative_taskComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function C_associative_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'C_associative_task' ---
    for (const thisComponent of C_associative_taskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('C_associative_task.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_ass
    psychoJS.experiment.addData("tempo_trial", tempo_trial);
    psychoJS.experiment.addData("hapremutosi", hapremutosi);
    psychoJS.experiment.addData("hapremutono", hapremutono);
    tempo_tasktot = (tempo_tasktot + tempo_trial);
    psychoJS.experiment.addData("tempo_tasktot", tempo_tasktot);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse.getPos();
    _mouseButtons = mouse.getPressed();
    psychoJS.experiment.addData('mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse.rightButton', _mouseButtons[2]);
    if (mouse.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0]);}
    // the Routine "C_associative_task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var punt_int;
var tempo_vd;
var D_VDComponents;
function D_VDRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'D_VD' ---
    t = 0;
    D_VDClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('D_VD.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_vd
    punt_int = 0;
    tempo_vd = t;
    
    vd.reset()
    // setup some python lists for storing info about the mouse_vd
    mouse_vd.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    D_VDComponents = [];
    D_VDComponents.push(cerch1);
    D_VDComponents.push(rett);
    D_VDComponents.push(cerch1_2);
    D_VDComponents.push(vd);
    D_VDComponents.push(feedback);
    D_VDComponents.push(rettok);
    D_VDComponents.push(ok);
    D_VDComponents.push(istr_vd);
    D_VDComponents.push(istr_vd_3);
    D_VDComponents.push(istr_vd_2);
    D_VDComponents.push(vd_titolo);
    D_VDComponents.push(mouse_vd);
    
    for (const thisComponent of D_VDComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var msg;
function D_VDRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'D_VD' ---
    // get current time
    t = D_VDClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_vd
    if (isNaN(vd.rating)) {
        if ((Number.parseInt(expInfo["group"]) === 1)) {
            msg = "Seleziona un valore tra 0 e 100";
        } else {
            msg = "Select a value from 0 to 100";
        }
    } else {
        punt_int = Number.parseInt(vd.rating);
        if ((Number.parseInt(expInfo["group"]) === 1)) {
            msg = ("Hai selezionato: " + punt_int);
        } else {
            msg = ("You selected: " + punt_int);
        }
    }
    if ((rettok.status === PsychoJS.Status.STARTED)) {
        if (mouse_vd.isPressedIn(rettok)) {
            continueRoutine = false;
        }
    }
    tempo_vd = t;
    
    
    // *cerch1* updates
    if (t >= 0.0 && cerch1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cerch1.tStart = t;  // (not accounting for frame time here)
      cerch1.frameNStart = frameN;  // exact frame index
      
      cerch1.setAutoDraw(true);
    }
    
    
    // *rett* updates
    if (t >= 0.0 && rett.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rett.tStart = t;  // (not accounting for frame time here)
      rett.frameNStart = frameN;  // exact frame index
      
      rett.setAutoDraw(true);
    }
    
    
    // *cerch1_2* updates
    if (t >= 0.0 && cerch1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cerch1_2.tStart = t;  // (not accounting for frame time here)
      cerch1_2.frameNStart = frameN;  // exact frame index
      
      cerch1_2.setAutoDraw(true);
    }
    
    
    // *vd* updates
    if (t >= 0.0 && vd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vd.tStart = t;  // (not accounting for frame time here)
      vd.frameNStart = frameN;  // exact frame index
      
      vd.setAutoDraw(true);
    }
    
    
    if (feedback.status === PsychoJS.Status.STARTED){ // only update if being drawn
      feedback.setText(msg, false);
    }
    
    // *feedback* updates
    if (t >= 0 && feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback.tStart = t;  // (not accounting for frame time here)
      feedback.frameNStart = frameN;  // exact frame index
      
      feedback.setAutoDraw(true);
    }
    
    
    // *rettok* updates
    if ((vd.rating) && rettok.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rettok.tStart = t;  // (not accounting for frame time here)
      rettok.frameNStart = frameN;  // exact frame index
      
      rettok.setAutoDraw(true);
    }
    
    
    // *ok* updates
    if ((vd.rating) && ok.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ok.tStart = t;  // (not accounting for frame time here)
      ok.frameNStart = frameN;  // exact frame index
      
      ok.setAutoDraw(true);
    }
    
    
    // *istr_vd* updates
    if (t >= 0.0 && istr_vd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      istr_vd.tStart = t;  // (not accounting for frame time here)
      istr_vd.frameNStart = frameN;  // exact frame index
      
      istr_vd.setAutoDraw(true);
    }
    
    
    // *istr_vd_3* updates
    if (t >= 0.0 && istr_vd_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      istr_vd_3.tStart = t;  // (not accounting for frame time here)
      istr_vd_3.frameNStart = frameN;  // exact frame index
      
      istr_vd_3.setAutoDraw(true);
    }
    
    
    // *istr_vd_2* updates
    if (t >= 0.0 && istr_vd_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      istr_vd_2.tStart = t;  // (not accounting for frame time here)
      istr_vd_2.frameNStart = frameN;  // exact frame index
      
      istr_vd_2.setAutoDraw(true);
    }
    
    
    // *vd_titolo* updates
    if (t >= 0.0 && vd_titolo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vd_titolo.tStart = t;  // (not accounting for frame time here)
      vd_titolo.frameNStart = frameN;  // exact frame index
      
      vd_titolo.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of D_VDComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function D_VDRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'D_VD' ---
    for (const thisComponent of D_VDComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('D_VD.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_vd
    psychoJS.experiment.addData("tempo_vd", tempo_vd);
    
    psychoJS.experiment.addData('vd.response', vd.getRating());
    psychoJS.experiment.addData('vd.rt', vd.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_vd.getPos();
    _mouseButtons = mouse_vd.getPressed();
    psychoJS.experiment.addData('mouse_vd.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_vd.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_vd.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_vd.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_vd.rightButton', _mouseButtons[2]);
    if (mouse_vd.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_vd.clicked_name', mouse_vd.clicked_name[0]);}
    // the Routine "D_VD" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var punt_int1;
var tempo_vd1;
var PreviousComponents;
function PreviousRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Previous' ---
    t = 0;
    PreviousClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Previous.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_vd_3
    punt_int1 = 0;
    tempo_vd1 = t;
    
    previous.reset()
    // setup some python lists for storing info about the mouse_vd_2
    mouse_vd_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    PreviousComponents = [];
    PreviousComponents.push(cerch1_3);
    PreviousComponents.push(rett_2);
    PreviousComponents.push(cerch1_4);
    PreviousComponents.push(previous);
    PreviousComponents.push(feedback_3);
    PreviousComponents.push(rettok_2);
    PreviousComponents.push(ok_4);
    PreviousComponents.push(istr_vd_4);
    PreviousComponents.push(istr_vd_5);
    PreviousComponents.push(istr_vd_6);
    PreviousComponents.push(vd_titolo_2);
    PreviousComponents.push(mouse_vd_2);
    
    for (const thisComponent of PreviousComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var msg1;
function PreviousRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Previous' ---
    // get current time
    t = PreviousClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_vd_3
    if (isNaN(previous.rating)) {
        if ((Number.parseInt(expInfo["group"]) === 1)) {
            msg1 = "Seleziona un valore tra 0 e 100";
        } else {
            msg1 = "Select a value from 0 to 100";
        }
    } else {
        punt_int1 = Number.parseInt(previous.rating);
        if ((Number.parseInt(expInfo["group"]) === 1)) {
            msg1 = ("Hai selezionato: " + punt_int1);
        } else {
            msg1 = ("You selected: " + punt_int1);
        }
    }
    if ((rettok_2.status === PsychoJS.Status.STARTED)) {
        if (mouse_vd.isPressedIn(rettok_2)) {
            continueRoutine = false;
        }
    }
    tempo_vd1 = t;
    
    
    // *cerch1_3* updates
    if (t >= 0.0 && cerch1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cerch1_3.tStart = t;  // (not accounting for frame time here)
      cerch1_3.frameNStart = frameN;  // exact frame index
      
      cerch1_3.setAutoDraw(true);
    }
    
    
    // *rett_2* updates
    if (t >= 0.0 && rett_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rett_2.tStart = t;  // (not accounting for frame time here)
      rett_2.frameNStart = frameN;  // exact frame index
      
      rett_2.setAutoDraw(true);
    }
    
    
    // *cerch1_4* updates
    if (t >= 0.0 && cerch1_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cerch1_4.tStart = t;  // (not accounting for frame time here)
      cerch1_4.frameNStart = frameN;  // exact frame index
      
      cerch1_4.setAutoDraw(true);
    }
    
    
    // *previous* updates
    if (t >= 0.0 && previous.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      previous.tStart = t;  // (not accounting for frame time here)
      previous.frameNStart = frameN;  // exact frame index
      
      previous.setAutoDraw(true);
    }
    
    
    if (feedback_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      feedback_3.setText(msg1, false);
    }
    
    // *feedback_3* updates
    if (t >= 0 && feedback_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_3.tStart = t;  // (not accounting for frame time here)
      feedback_3.frameNStart = frameN;  // exact frame index
      
      feedback_3.setAutoDraw(true);
    }
    
    
    // *rettok_2* updates
    if ((previous.rating) && rettok_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rettok_2.tStart = t;  // (not accounting for frame time here)
      rettok_2.frameNStart = frameN;  // exact frame index
      
      rettok_2.setAutoDraw(true);
    }
    
    
    // *ok_4* updates
    if ((previous.rating) && ok_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ok_4.tStart = t;  // (not accounting for frame time here)
      ok_4.frameNStart = frameN;  // exact frame index
      
      ok_4.setAutoDraw(true);
    }
    
    
    // *istr_vd_4* updates
    if (t >= 0.0 && istr_vd_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      istr_vd_4.tStart = t;  // (not accounting for frame time here)
      istr_vd_4.frameNStart = frameN;  // exact frame index
      
      istr_vd_4.setAutoDraw(true);
    }
    
    
    // *istr_vd_5* updates
    if (t >= 0.0 && istr_vd_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      istr_vd_5.tStart = t;  // (not accounting for frame time here)
      istr_vd_5.frameNStart = frameN;  // exact frame index
      
      istr_vd_5.setAutoDraw(true);
    }
    
    
    // *istr_vd_6* updates
    if (t >= 0.0 && istr_vd_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      istr_vd_6.tStart = t;  // (not accounting for frame time here)
      istr_vd_6.frameNStart = frameN;  // exact frame index
      
      istr_vd_6.setAutoDraw(true);
    }
    
    
    // *vd_titolo_2* updates
    if (t >= 0.0 && vd_titolo_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vd_titolo_2.tStart = t;  // (not accounting for frame time here)
      vd_titolo_2.frameNStart = frameN;  // exact frame index
      
      vd_titolo_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PreviousComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PreviousRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Previous' ---
    for (const thisComponent of PreviousComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Previous.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_vd_3
    psychoJS.experiment.addData("tempo_vd1", tempo_vd1);
    
    psychoJS.experiment.addData('previous.response', previous.getRating());
    psychoJS.experiment.addData('previous.rt', previous.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_vd_2.getPos();
    _mouseButtons = mouse_vd_2.getPressed();
    psychoJS.experiment.addData('mouse_vd_2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_vd_2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_vd_2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_vd_2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_vd_2.rightButton', _mouseButtons[2]);
    if (mouse_vd_2.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_vd_2.clicked_name', mouse_vd_2.clicked_name[0]);}
    // the Routine "Previous" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EstITA;
var EstITAClock;
function EstITARoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'EstITA' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    //--- Starting Routine 'EstITA' ---
    EstITA = new visual.Survey({
        win: psychoJS.window,
        name: 'EstITA',
        surveyId: 'bce5cca0-13a4-484c-a07b-411acf5db430',
    });
    EstITAClock = new util.Clock();
    EstITA.setAutoDraw(true);
    EstITA.status = PsychoJS.Status.STARTED;
    EstITA.isFinished = false;
    EstITA.tStart = t;  // (not accounting for frame time here)
    EstITA.frameNStart = frameN;  // exact frame index
    return Scheduler.Event.NEXT;
  }
}


function EstITARoutineEachFrame() {
  return async function () {
    t = EstITAClock.getTime();
    frameN = frameN + 1;  // number of completed frames (so 0 is the first frame)
    // if EstITA is completed, move on
    if (EstITA.isFinished) {
      EstITA.setAutoDraw(false);
      EstITA.status = PsychoJS.Status.FINISHED;
      // survey routines are not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      return Scheduler.Event.NEXT;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    return Scheduler.Event.FLIP_REPEAT;
  }
}


function EstITARoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'EstITA' ---
    // get data from EstITA
    const EstITAResponse =  EstITA.getResponse();
    function addRecursively(resp, name) {
        if (resp.constructor === Object) {
            // if resp is an object, add each part as a column
            for (let subquestion in resp) {
                addRecursively(resp[subquestion], `${name}.${subquestion}`);
            }
        } else {
            psychoJS.experiment.addData(name, resp);
        }
    }
    // recursively add survey responses
    addRecursively(EstITAResponse, 'EstITA');
    await EstITA.save();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EstENG;
var EstENGClock;
function EstENGRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'EstENG' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    //--- Starting Routine 'EstENG' ---
    EstENG = new visual.Survey({
        win: psychoJS.window,
        name: 'EstENG',
        surveyId: '40b420d2-e19d-430b-8813-8e013919a7c2',
    });
    EstENGClock = new util.Clock();
    EstENG.setAutoDraw(true);
    EstENG.status = PsychoJS.Status.STARTED;
    EstENG.isFinished = false;
    EstENG.tStart = t;  // (not accounting for frame time here)
    EstENG.frameNStart = frameN;  // exact frame index
    return Scheduler.Event.NEXT;
  }
}


function EstENGRoutineEachFrame() {
  return async function () {
    t = EstENGClock.getTime();
    frameN = frameN + 1;  // number of completed frames (so 0 is the first frame)
    // if EstENG is completed, move on
    if (EstENG.isFinished) {
      EstENG.setAutoDraw(false);
      EstENG.status = PsychoJS.Status.FINISHED;
      // survey routines are not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      return Scheduler.Event.NEXT;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    return Scheduler.Event.FLIP_REPEAT;
  }
}


function EstENGRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'EstENG' ---
    // get data from EstENG
    const EstENGResponse =  EstENG.getResponse();
    function addRecursively(resp, name) {
        if (resp.constructor === Object) {
            // if resp is an object, add each part as a column
            for (let subquestion in resp) {
                addRecursively(resp[subquestion], `${name}.${subquestion}`);
            }
        } else {
            psychoJS.experiment.addData(name, resp);
        }
    }
    // recursively add survey responses
    addRecursively(EstENGResponse, 'EstENG');
    await EstENG.save();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var punt_sam;
var t1aconferma;
var t1adomanda;
var t1asp;
var t1asp2;
var t1aconf;
var t1adom;
var PFComponents;
function PFRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PF' ---
    t = 0;
    PFClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('PF.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_vd_2
    punt_sam = 0;
    tempo_pf;
    if ((Number.parseInt(expInfo["group"]) === 1)) {
        t1aconferma = "Conferma";
        t1adomanda = "Quanto hai trovato difficile l'attivit\u00e0 di lettura e di comprensione durante questo esperimento?";
        t1asp = "(La scala va da 1 a 7: con 1 che indica Molto Facile e 7 che indica Molto Difficile)";
        t1asp2 = "Clicca sulla barra sopra, e vedrai apparire uno slider. Puoi trascinare questo slider su qualsiasi punto della scala. Una volta soddisfatta/o della tua risposta, clicca il pulsante Conferma.";
        t1aconf = "Conferma";
        t1adom = "Domanda";
    } else {
        t1aconferma = "Confirm";
        t1adomanda = "How difficult did you find the reading and comprehension activity during this experiment?";
        t1asp = "(The scale goes from 1 to 7: with 1 indicating Very Easy and 7 indicating Very Difficult)";
        t1asp2 = "Click on the bar above, and you will see a slider appear. You can drag this slider to any point on the scale. Once you are satisfied with your answer, click the Confirm button.";
        t1aconf = "Confirm";
        t1adom = "Question";
    }
    
    ch_istr2.setText(t1asp2);
    processfluency.reset()
    // setup some python lists for storing info about the mouse_ch
    mouse_ch.clicked_name = [];
    gotValidClick = false; // until a click is received
    ok_2.setText(t1aconferma);
    check_titolo.setText(t1adom);
    ch_istr.setText(t1adomanda);
    ch_istr_2.setText(t1asp);
    // keep track of which components have finished
    PFComponents = [];
    PFComponents.push(ch_istr2);
    PFComponents.push(cer);
    PFComponents.push(cer_2);
    PFComponents.push(ret);
    PFComponents.push(processfluency);
    PFComponents.push(mouse_ch);
    PFComponents.push(rettoki);
    PFComponents.push(ok_2);
    PFComponents.push(check_titolo);
    PFComponents.push(ch_istr);
    PFComponents.push(ch_istr_2);
    
    for (const thisComponent of PFComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var tempo_pf;
function PFRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PF' ---
    // get current time
    t = PFClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_vd_2
    tempo_pf = t;
    if ((rettoki.status === PsychoJS.Status.STARTED)) {
        if (mouse_vd.isPressedIn(rettoki)) {
            continueRoutine = false;
        }
    }
    
    
    // *ch_istr2* updates
    if (t >= 0.0 && ch_istr2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ch_istr2.tStart = t;  // (not accounting for frame time here)
      ch_istr2.frameNStart = frameN;  // exact frame index
      
      ch_istr2.setAutoDraw(true);
    }
    
    
    // *cer* updates
    if (t >= 0.0 && cer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cer.tStart = t;  // (not accounting for frame time here)
      cer.frameNStart = frameN;  // exact frame index
      
      cer.setAutoDraw(true);
    }
    
    
    // *cer_2* updates
    if (t >= 0.0 && cer_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cer_2.tStart = t;  // (not accounting for frame time here)
      cer_2.frameNStart = frameN;  // exact frame index
      
      cer_2.setAutoDraw(true);
    }
    
    
    // *ret* updates
    if (t >= 0.0 && ret.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ret.tStart = t;  // (not accounting for frame time here)
      ret.frameNStart = frameN;  // exact frame index
      
      ret.setAutoDraw(true);
    }
    
    
    // *processfluency* updates
    if (t >= 0.0 && processfluency.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      processfluency.tStart = t;  // (not accounting for frame time here)
      processfluency.frameNStart = frameN;  // exact frame index
      
      processfluency.setAutoDraw(true);
    }
    
    
    // *rettoki* updates
    if ((processfluency.rating) && rettoki.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rettoki.tStart = t;  // (not accounting for frame time here)
      rettoki.frameNStart = frameN;  // exact frame index
      
      rettoki.setAutoDraw(true);
    }
    
    
    // *ok_2* updates
    if ((processfluency.rating) && ok_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ok_2.tStart = t;  // (not accounting for frame time here)
      ok_2.frameNStart = frameN;  // exact frame index
      
      ok_2.setAutoDraw(true);
    }
    
    
    // *check_titolo* updates
    if (t >= 0.0 && check_titolo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      check_titolo.tStart = t;  // (not accounting for frame time here)
      check_titolo.frameNStart = frameN;  // exact frame index
      
      check_titolo.setAutoDraw(true);
    }
    
    
    // *ch_istr* updates
    if (t >= 0.0 && ch_istr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ch_istr.tStart = t;  // (not accounting for frame time here)
      ch_istr.frameNStart = frameN;  // exact frame index
      
      ch_istr.setAutoDraw(true);
    }
    
    
    // *ch_istr_2* updates
    if (t >= 0.0 && ch_istr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ch_istr_2.tStart = t;  // (not accounting for frame time here)
      ch_istr_2.frameNStart = frameN;  // exact frame index
      
      ch_istr_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PFComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PFRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PF' ---
    for (const thisComponent of PFComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('PF.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_vd_2
    psychoJS.experiment.addData("tempo_pf", tempo_pf);
    
    psychoJS.experiment.addData('processfluency.response', processfluency.getRating());
    psychoJS.experiment.addData('processfluency.rt', processfluency.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_ch.getPos();
    _mouseButtons = mouse_ch.getPressed();
    psychoJS.experiment.addData('mouse_ch.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_ch.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_ch.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_ch.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_ch.rightButton', _mouseButtons[2]);
    if (mouse_ch.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouse_ch.clicked_name', mouse_ch.clicked_name[0]);}
    // the Routine "PF" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Questionario_Lingua;
var Questionario_LinguaClock;
function Questionario_LinguaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Questionario_Lingua' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    //--- Starting Routine 'Questionario_Lingua' ---
    Questionario_Lingua = new visual.Survey({
        win: psychoJS.window,
        name: 'Questionario_Lingua',
        surveyId: '879b6633-72d7-4726-b69f-0ae804b9dc76',
    });
    Questionario_LinguaClock = new util.Clock();
    Questionario_Lingua.setAutoDraw(true);
    Questionario_Lingua.status = PsychoJS.Status.STARTED;
    Questionario_Lingua.isFinished = false;
    Questionario_Lingua.tStart = t;  // (not accounting for frame time here)
    Questionario_Lingua.frameNStart = frameN;  // exact frame index
    return Scheduler.Event.NEXT;
  }
}


function Questionario_LinguaRoutineEachFrame() {
  return async function () {
    t = Questionario_LinguaClock.getTime();
    frameN = frameN + 1;  // number of completed frames (so 0 is the first frame)
    // if Questionario_Lingua is completed, move on
    if (Questionario_Lingua.isFinished) {
      Questionario_Lingua.setAutoDraw(false);
      Questionario_Lingua.status = PsychoJS.Status.FINISHED;
      // survey routines are not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      return Scheduler.Event.NEXT;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    return Scheduler.Event.FLIP_REPEAT;
  }
}


function Questionario_LinguaRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Questionario_Lingua' ---
    // get data from Questionario_Lingua
    const Questionario_LinguaResponse =  Questionario_Lingua.getResponse();
    function addRecursively(resp, name) {
        if (resp.constructor === Object) {
            // if resp is an object, add each part as a column
            for (let subquestion in resp) {
                addRecursively(resp[subquestion], `${name}.${subquestion}`);
            }
        } else {
            psychoJS.experiment.addData(name, resp);
        }
    }
    // recursively add survey responses
    addRecursively(Questionario_LinguaResponse, 'Questionario_Lingua');
    await Questionario_Lingua.save();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ProvaInglese;
var ProvaIngleseClock;
function ProvaIngleseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ProvaInglese' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    //--- Starting Routine 'ProvaInglese' ---
    ProvaInglese = new visual.Survey({
        win: psychoJS.window,
        name: 'ProvaInglese',
        surveyId: '954bdd0c-2d30-4af4-b478-6f868f500e3c',
    });
    ProvaIngleseClock = new util.Clock();
    ProvaInglese.setAutoDraw(true);
    ProvaInglese.status = PsychoJS.Status.STARTED;
    ProvaInglese.isFinished = false;
    ProvaInglese.tStart = t;  // (not accounting for frame time here)
    ProvaInglese.frameNStart = frameN;  // exact frame index
    return Scheduler.Event.NEXT;
  }
}


function ProvaIngleseRoutineEachFrame() {
  return async function () {
    t = ProvaIngleseClock.getTime();
    frameN = frameN + 1;  // number of completed frames (so 0 is the first frame)
    // if ProvaInglese is completed, move on
    if (ProvaInglese.isFinished) {
      ProvaInglese.setAutoDraw(false);
      ProvaInglese.status = PsychoJS.Status.FINISHED;
      // survey routines are not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      return Scheduler.Event.NEXT;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    return Scheduler.Event.FLIP_REPEAT;
  }
}


function ProvaIngleseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ProvaInglese' ---
    // get data from ProvaInglese
    const ProvaIngleseResponse =  ProvaInglese.getResponse();
    function addRecursively(resp, name) {
        if (resp.constructor === Object) {
            // if resp is an object, add each part as a column
            for (let subquestion in resp) {
                addRecursively(resp[subquestion], `${name}.${subquestion}`);
            }
        } else {
            psychoJS.experiment.addData(name, resp);
        }
    }
    // recursively add survey responses
    addRecursively(ProvaIngleseResponse, 'ProvaInglese');
    await ProvaInglese.save();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Ant_lastquestionComponents;
function Ant_lastquestionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Ant_lastquestion' ---
    t = 0;
    Ant_lastquestionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(7.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Ant_lastquestion.started', globalClock.getTime());
    // keep track of which components have finished
    Ant_lastquestionComponents = [];
    Ant_lastquestionComponents.push(textino);
    
    for (const thisComponent of Ant_lastquestionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Ant_lastquestionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Ant_lastquestion' ---
    // get current time
    t = Ant_lastquestionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textino* updates
    if (t >= 0.0 && textino.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textino.tStart = t;  // (not accounting for frame time here)
      textino.frameNStart = frameN;  // exact frame index
      
      textino.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textino.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textino.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Ant_lastquestionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Ant_lastquestionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Ant_lastquestion' ---
    for (const thisComponent of Ant_lastquestionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Ant_lastquestion.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
