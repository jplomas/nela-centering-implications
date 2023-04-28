$(document).ready(()=> {

let risk = {
  "asa": 4,
  "gender": 1,
  "number": 4,
  "ecg": 0,
  "gcs": 15,
  "respiratory": 2,
  "age": 65,
  "cardiac": 2,
  "cepod": 2,
  "severity": 0,
  "cancer": 2,
  "creatinine": 45,
  "potassium": 5.5,
  "sodium": 153, 
  "bp": 123,
  "pulse": 84, 
  "wcc": 16.1, 
  "urea": 4.8, 
  "soiling": 0,
  "severity": 0, 
  "blood": 0
}

function NelaASA(asa) {
	switch (asa) {
		case 3:
			return 4;
		case 4:
			return 8;
		case 5:
			return 16;
		default:
			return asa;
	}
}

function NelaGender(gender) {
	switch (gender) {
		case 1:
			return 2;
		case 2:
			return 1;
		default:
			return gender;
	}
}



function NelaNumber(number) {
	switch (number) {
		case 4:
			return 2;
		case 8:
			return 4;
		default:
			return number;
	}
}

function NelaEcg(ecg) {
	switch (ecg) {
		case 4:
			return 2;
		case 8:
			return 4;
		default:
			return ecg;
	}
}

function NelaGCS(gcs) {
	if (gcs <= 8) {
		return 4;
	} else if (gcs <= 12) {
		return 2;
	} else {
		return 1;
	}
}

const Intercept = -4.3488269;     // Previous : -4.079478
const Asa3 = 1.0573609;     // Previous : 0.8959784
const Asa4 = 1.854601;     // Previous :1.822416
const Asa5 = 2.6489194;     // Previous :2.606994
const AgeCentered = 0.0572932;     // Previous : 0.0556509
const AgeSquared = 0.0001274;     // Previous :0.0003635
const RespPreOpMild = 0.5395227;     // Previous :0.7285072 
const RespPreOpDyspnoea = 1.2601628;     // Previous :1.251223
const FemaleCoefficient = 0.0280548;     // Previous : 0.0319972 
const Glasgow3_8 = 0.7842625;     // Previous : 0.8295203
const Glasgow9_12 = 0.6355512;     // Previous : 0.6055811
const CardiacPreopCat2 = 0.1054722;     // Previous : 0.0893796
const CardiacPreopCat4 = 0.2655433;     // Previous : 0.3259647
const CardiacPreopCat8 = 0.3017798;     // Previous : 0.2444367
const PeritonealSoilingSerousFluid = 0.1727508;     // Previous : 0.195923
const PeritonealSoilingLocalizedPus = -0.083714;     // Previous : -0.0096394
const PeritonealSoilingBowelContentPusBlood = 0.4387634;     // Previous : 0.3513096
const PredBloodLoss101_500 = 0.0563362;     // Previous : 0.0114858
const PredBloodLoss501_999 = 0.3148512;     // Previous : 0.0476965
const PredBloodLoss1000 = -0.0278452;     // Previous : -0.1231749
const MalignancyPrimary = 0.0332072;     // Previous : 0.0995358
const MalignancyNodalMetastases = 0.3666088;     // Previous : 0.4416856
const MalignancyDistantMetastases = 0.9988459;     // Previous : 1.176124
const OpSeverityMajorPlus = 0.2043578;     // Previous : 0.1455086
const NumOpPreopTwo = -0.2888454;     // Previous : -0.3064644
const NumOpPreopThreePlus = -0.1316191;     // Previous : -0.312474
const EcgPreopAFRate60_90 = 0.3375291;     // Previous : 0.165503
const EcgPreopAFRate90PlusOther = 0.1411111;     // Previous : 0.2100931
const Urgency6_18Hrs = -0.0617987;     // Previous : -0.1148433
const Urgency2_6Hrs = 0.0787992;     // Previous : 0.0132196
const UrgencyUnder2hrs = 0.4708663;     // Previous : 0.4247453
const LogCreatWins = -0.3093507;     // Previous : -0.2518047
const LogCreatSqWins = 0.2428102;     // Previous : 0.2250538
const LogUreaWins = 0.4227387;     // Previous : 0.323096
const LogUreaSqWins = -0.0542346;     // Previous : -0.0406424
const WbcWins = -0.0072917;     // Previous : -0.0006156
const WbcSqWins = 0.0013263;     // Previous : 0.0009041
const PulseWins = 0.0132113;     // Previous := 0.011922
const PulseSqWins = -0.0001264;     // Previous : -0.0001129
const SysBPWins = -0.0090343;     // Previous : -0.008065
const SysBPSqWins = 0.0001137;     // Previous : 0.0001201
const PotassiumWins = -0.0994759;     // Previous : -0.1140542
const PotassiumSqWins = 0.1699467;     // Previous : 0.2394057
const SodiumCubedWins = -0.0007271;     // Previous : -0.000816
const LogSodiumTimescuWins = 0.0002304;     // Previous : 0.0002584
const Asa3AgeCentred = -0.0235901;     // Previous : -0.0163981
const Asa4AgeCentred = -0.0276586;     // Previous :-0.0253105
const Asa5AgeCentred = -0.0337041;     // Previous :-0.0270848
const Asa3AgeSquared = -0.0001441;     // Previous :-0.0002042
const Asa4AgeSquared = 0.0000669;     // Previous :-0.0000425
const Asa5AgeSquared = 0.0002500;     // Previous :-0.0002982
const Asa3RespPreopMildCOAD = -0.1807609;     // Previous :0.3464632
const Asa4RespPreopMildCOAD = -0.3157025;     // Previous : 0.1954411
const Asa5RespPreopMildCOAD = -0.3012922;     // Previous :-0.1005167
const Asa3RespPreopDyspnoeaLimiting = -0.5437609;     // Previous :0.653518
const Asa4RespPreopDyspnoeaLimiting = -0.8688040;     // Previous :0.3856067
const Asa5RespPreopDyspnoeaLimiting = -0.9052032;     // Previous :0.144061

//End Functions to convert parameters to work with JP calculation code
function Nela(risk) {
	//IE 11 doesn't like console.log commands here for some reason so they are commented out'
	//console.log(JSON.stringify(risk));

	// creatinine
	var cr = parseInt(risk.creatinine) + 1;
	let creatinine = Math.log(cr);
	if (creatinine > 6) { creatinine = 6 }
	if (creatinine < 3.3) { creatinine = 3.3 }
	const cr1 = LogCreatWins * (creatinine - 4);
	const cr2 = LogCreatSqWins * Math.pow((creatinine - 4), 2);
	creatinine = cr1 + cr2;

	// sodium
	var sodium = parseInt(risk.sodium);
	if (sodium > 148) { sodium = 148 }
	if (sodium < 124) { sodium = 124 }
	const na1 = SodiumCubedWins * (Math.pow((sodium - 123), 3));
	const na2 = LogSodiumTimescuWins * Math.pow((sodium - 123), 3) * Math.log((sodium - 123));
	sodium = na1 + na2;

	// bp
	var bp = parseInt(risk.bp);
	if (bp > 190) { bp = 190 }
	if (bp < 70) { bp = 70 }
	const b1 = SysBPWins * (bp - 127);
	const b2 = SysBPSqWins * Math.pow((bp - 127), 2);
	bp = b1 + b2;


	// pulse
	var pulse = parseInt(risk.pulse);
	if (pulse > 145) { pulse = 145 }
	if (pulse < 55) { pulse = 55 }
	const p1 = PulseWins * (pulse - 91);
	const p2 = PulseSqWins * Math.pow((pulse - 91), 2);
	pulse = p1 + p2;

	// wcc
	var wcc = parseFloat(risk.wcc);
	if (wcc > 42.7) { wcc = 42.7 }
	if (wcc < 1) { wcc = 1 }
	const w1 = WbcWins * (wcc - 13);
	const w2 = WbcSqWins * Math.pow((wcc - 13), 2);
	wcc = w1 + w2;

	// urea
	var urea = parseFloat(risk.urea);
	urea = Math.log(urea);
	if (urea > 3.7) { urea = 3.7 }
	if (urea < 0) { urea = 0 }
	const u1 = LogUreaWins * (urea - 1.9);
	const u2 = LogUreaSqWins * Math.pow((urea - 1.9), 2);
	urea = u1 + u2;

	// potassium
	let potassium = parseFloat(risk.potassium);
	if (potassium > 5.9) { potassium = 5.9 }
	if (potassium < 2.8) { potassium = 2.8 }
	let k1 = PotassiumWins * (potassium - 4);
	let k2 = PotassiumSqWins * Math.pow((potassium - 4), 2);
	potassium = p1 + p2;

	// now display grabbed data from form

	// asa into numbers (for other lookups)
	// resp here too...
	var asa = 1;
	var asanum;
	var resp = 0;
	switch (risk.asa) {
		case 1:
			asanum = 1;
			if (risk.respiratory === 2) { resp = RespPreOpMild }
			if (risk.respiratory > 3) { resp = RespPreOpDyspnoea }
			break;
		case 2:
			asanum = 2;
			if (risk.respiratory === 2) { resp = RespPreOpMild}
			if (risk.respiratory > 3) { resp = RespPreOpDyspnoea }
			break;
		case 4:
			asanum = 3;
			if (risk.respiratory === 2) { resp = RespPreOpMild + Asa3RespPreopMildCOAD }
			if (risk.respiratory > 3) { resp = RespPreOpDyspnoea + Asa3RespPreopDyspnoeaLimiting }
			break;
		case 8:
			asanum = 4;
			if (risk.respiratory === 2) { resp = RespPreOpMild + Asa4RespPreopMildCOAD }
			if (risk.respiratory > 3) { resp = RespPreOpDyspnoea + Asa4RespPreopDyspnoeaLimiting }
			break;
		case 16:
			asanum = 5;
			if (risk.respiratory === 2) { resp = RespPreOpMild + Asa5RespPreopMildCOAD }
			if (risk.respiratory > 3) { resp = RespPreOpDyspnoea + Asa5RespPreopDyspnoeaLimiting }
			break;
	}

	// age correction, from lookup table, for ASA 3-5 (it's 0 for 1-2):
	// asa factor done here for speed too...
	lookup = 0;
	second_lookup = 0;
	asa = 0;
	switch (asanum) {
		case 3:
			lookup = Asa3AgeCentred;
			second_lookup = Asa3AgeSquared;
			asa = Asa3;
			break;
		case 4:
			lookup = Asa4AgeCentred;
			second_lookup = Asa4AgeSquared;
			asa = Asa4;
			break;
		case 5:
			lookup = Asa5AgeCentred;
			second_lookup = Asa5AgeSquared;
			asa = Asa5;
			break;
	}
	a1 = (AgeCentered + lookup) * (risk.age - 64);

	// now do 2nd age lookup
	a2 = (AgeSquared + second_lookup) * (Math.pow((risk.age - 64), 2));
	age = a1 + a2;


	// gender
	gender = 0; // male default, 0
	if (risk.gender === 1) { gender = FemaleCoefficient } // females have this factor

	// cardiac
	cardiac = 0;
	switch (risk.cardiac) {
		case 2: // Diuretic, digoxin, antianginal or antihypertensive therapy
			cardiac = CardiacPreopCat2;
			break;
		case 4: // Peripheral oedema, warfarin therapy or CXR: borderline cardiomegaly
			cardiac = CardiacPreopCat4;
			break;
		case 8: // Raised jugular venous pressure or CXR: cardiomegaly
			cardiac = CardiacPreopCat8;
			break;
	}

	// urgency/CEPOD
	urgency = 0;
	switch (risk.cepod) {
		case 2: // 6-18 hours
			urgency = Urgency6_18Hrs;
			break;
		case 3: // 2-6 hours
			urgency = Urgency2_6Hrs;
			break;
		case 8: // <2 hours
			urgency = UrgencyUnder2hrs;
			break;
	}

	// ECG
	ecg = 0;
	switch (risk.ecg) {
		case 2:  //NELA 4: 60-90
			ecg = EcgPreopAFRate60_90;
			break;
		case 4:  //NELA 8: > 90
			ecg = EcgPreopAFRate90PlusOther;
			break;
	}

	// Number of ops
	number = 0;
	switch (risk.number) {
		case 2: // NELA 4 : 2 Ops
			number = NumOpPreopTwo;
			break;
		case 4: // NELA 8 : > 2 Ops
			number = NumOpPreopThreePlus;
			break;
	}

	// severity - only if Major+
	severity = 0;
	if (risk.severity == 8) { severity = OpSeverityMajorPlus; }

	// blood
	blood = 0;
	switch (risk.blood) {
		case 2:  // 101-500
			blood = PredBloodLoss101_500;
			break;
		case 4: // 501-999
			blood = PredBloodLoss501_999;
			break;
		case 8: // >= 1000
			blood = PredBloodLoss1000;
			break;
	}

	// soiling
	soiling = 0;
	switch (risk.soiling) {
		case 2: // Serous fluid
			soiling = PeritonealSoilingSerousFluid;
			break;
		case 4: // Localised pus
			soiling = PeritonealSoilingLocalizedPus;
			break;
		case 8: //Free bowel content, pus or blood
			soiling = PeritonealSoilingBowelContentPusBlood;
			break;
	}

	// cancer
	cancer = 0;
	switch (risk.cancer) {
		case 2: // Primary only
			cancer = MalignancyPrimary;
			break;
		case 4: // Nodal metastases
			cancer = MalignancyNodalMetastases;
			break;
		case 8: // Distant metastases
			cancer = MalignancyDistantMetastases;
			break;
	}

	// gcs
	gcs = 0;
	switch (risk.gcs) {
		case 4: // <=8
			gcs = Glasgow3_8;
			break;
		case 2: // <=12
			gcs = Glasgow9_12;
			break;
	}

	section_three = Intercept + asa + age + gender + cardiac + resp + ecg + bp + pulse + wcc +
		urea + sodium + potassium + gcs + severity + number + blood +
		soiling + cancer + urgency + creatinine; // - 0.0388465;

	section_three = Math.exp(section_three);
	section_three = section_three / (1 + section_three);

	mortality = section_three;
	mortality = Math.round(mortality * 1000) / 10;

	//IE 11 doesn't like console.log commands here for some reason so they are commented out'
	// console.log("NELA Risk");
	// console.log("mortality = " + mortality);
	// console.log("asa = " + asa);
	// console.log("lookup = " + lookup);
	// console.log("second_lookup = " + second_lookup);
	// console.log("a1 = " + a1);
	// console.log("a2 = " + a2);
	// console.log("age = " + age);
	// console.log("gender = " + gender);
	// console.log("risk.cepod = " + risk.cepod);
	// console.log("urgency = " + urgency);
	// console.log("cardiac = " + cardiac);
	// console.log("respiratory = " + resp);
	// console.log("ecg = " + ecg);
	// console.log("bp = " + bp);
	// console.log("pulse = " + pulse);
	// console.log("wcc = " + wcc);
	// console.log("urea = " + urea);
	// console.log("sodium = " + sodium);
	// console.log("potassium = " + potassium);
	// console.log("gcs = " + gcs);
	// console.log("severity = " + severity);
	// console.log("number = " + number);
	// console.log("blood = " + blood);
	// console.log("soiling = " + soiling);
	// console.log("cancer = " + cancer);
	// console.log("cepod = " + urgency);
	// console.log("creatinine = " + creatinine);

	return { mortality: mortality, error: { state: false, message: 'PASSED' } }

}

function NelaAdj(risk) {
  //IE 11 doesn't like console.log commands here for some reason so they are commented out'
  //console.log(JSON.stringify(risk));

  // creatinine
  var cr = parseInt(risk.creatinine) + 1;
  let creatinine = Math.log(cr);
  if (creatinine > 6) {
    creatinine = 6;
  }
  if (creatinine < 3.3) {
    creatinine = 3.3;
  }
  const cr1 = LogCreatWins * (creatinine - 4);
  const cr2 = LogCreatSqWins * Math.pow(creatinine - 4, 2);
  creatinine = cr1 + cr2;

  // sodium
  var sodium = parseInt(risk.sodium);
  if (sodium > 148) {
    sodium = 148;
  }
  if (sodium < 124) {
    sodium = 124;
  }
  const na1 = SodiumCubedWins * Math.pow(sodium - 123, 3);
  const na2 =
    LogSodiumTimescuWins * Math.pow(sodium - 123, 3) * Math.log(sodium - 123);
  sodium = na1 + na2;

  // bp
  var bp = parseInt(risk.bp);
  if (bp > 190) {
    bp = 190;
  }
  if (bp < 70) {
    bp = 70;
  }
  const b1 = SysBPWins * (bp - 127);
  const b2 = SysBPSqWins * Math.pow(bp - 128, 2);
  bp = b1 + b2;

  // pulse
  var pulse = parseInt(risk.pulse);
  if (pulse > 145) {
    pulse = 145;
  }
  if (pulse < 55) {
    pulse = 55;
  }
  const p1 = PulseWins * (pulse - 91);
  const p2 = PulseSqWins * Math.pow(pulse - 92, 2);
  pulse = p1 + p2;

  // wcc
  var wcc = parseFloat(risk.wcc);
  if (wcc > 42.7) {
    wcc = 42.7;
  }
  if (wcc < 1) {
    wcc = 1;
  }
  const w1 = WbcWins * (wcc - 13);
  const w2 = WbcSqWins * Math.pow(wcc - 13, 2);
  wcc = w1 + w2;

  // urea
  var urea = parseFloat(risk.urea);
  urea = Math.log(urea);
  if (urea > 3.7) {
    urea = 3.7;
  }
  if (urea < 0) {
    urea = 0;
  }
  const u1 = LogUreaWins * (urea - 1.9);
  const u2 = LogUreaSqWins * Math.pow(urea - 1.9, 2);
  urea = u1 + u2;

  // potassium
  let potassium = parseFloat(risk.potassium);
  if (potassium > 5.9) {
    potassium = 5.9;
  }
  if (potassium < 2.8) {
    potassium = 2.8;
  }
  let k1 = PotassiumWins * (potassium - 4);
  let k2 = PotassiumSqWins * Math.pow(potassium - 4, 2);
  potassium = p1 + p2;

  // now display grabbed data from form

  // asa into numbers (for other lookups)
  // resp here too...
  var asa = 1;
  var asanum;
  var resp = 0;
  switch (risk.asa) {
    case 1:
      asanum = 1;
      if (risk.respiratory === 2) {
        resp = RespPreOpMild;
      }
      if (risk.respiratory > 3) {
        resp = RespPreOpDyspnoea;
      }
      break;
    case 2:
      asanum = 2;
      if (risk.respiratory === 2) {
        resp = RespPreOpMild;
      }
      if (risk.respiratory > 3) {
        resp = RespPreOpDyspnoea;
      }
      break;
    case 4:
      asanum = 3;
      if (risk.respiratory === 2) {
        resp = RespPreOpMild + Asa3RespPreopMildCOAD;
      }
      if (risk.respiratory > 3) {
        resp = RespPreOpDyspnoea + Asa3RespPreopDyspnoeaLimiting;
      }
      break;
    case 8:
      asanum = 4;
      if (risk.respiratory === 2) {
        resp = RespPreOpMild + Asa4RespPreopMildCOAD;
      }
      if (risk.respiratory > 3) {
        resp = RespPreOpDyspnoea + Asa4RespPreopDyspnoeaLimiting;
      }
      break;
    case 16:
      asanum = 5;
      if (risk.respiratory === 2) {
        resp = RespPreOpMild + Asa5RespPreopMildCOAD;
      }
      if (risk.respiratory > 3) {
        resp = RespPreOpDyspnoea + Asa5RespPreopDyspnoeaLimiting;
      }
      break;
  }

  // age correction, from lookup table, for ASA 3-5 (it's 0 for 1-2):
  // asa factor done here for speed too...
  lookup = 0;
  second_lookup = 0;
  asa = 0;
  switch (asanum) {
    case 3:
      lookup = Asa3AgeCentred;
      second_lookup = Asa3AgeSquared;
      asa = Asa3;
      break;
    case 4:
      lookup = Asa4AgeCentred;
      second_lookup = Asa4AgeSquared;
      asa = Asa4;
      break;
    case 5:
      lookup = Asa5AgeCentred;
      second_lookup = Asa5AgeSquared;
      asa = Asa5;
      break;
  }
  a1 = (AgeCentered + lookup) * (risk.age - 64);

  // now do 2nd age lookup
  a2 = (AgeSquared + second_lookup) * Math.pow(risk.age - 64, 2);
  age = a1 + a2;

  // gender
  gender = 0; // male default, 0
  if (risk.gender === 1) {
    gender = FemaleCoefficient;
  } // females have this factor

  // cardiac
  cardiac = 0;
  switch (risk.cardiac) {
    case 2: // Diuretic, digoxin, antianginal or antihypertensive therapy
      cardiac = CardiacPreopCat2;
      break;
    case 4: // Peripheral oedema, warfarin therapy or CXR: borderline cardiomegaly
      cardiac = CardiacPreopCat4;
      break;
    case 8: // Raised jugular venous pressure or CXR: cardiomegaly
      cardiac = CardiacPreopCat8;
      break;
  }

  // urgency/CEPOD
  urgency = 0;
  switch (risk.cepod) {
    case 2: // 6-18 hours
      urgency = Urgency6_18Hrs;
      break;
    case 3: // 2-6 hours
      urgency = Urgency2_6Hrs;
      break;
    case 8: // <2 hours
      urgency = UrgencyUnder2hrs;
      break;
  }

  // ECG
  ecg = 0;
  switch (risk.ecg) {
    case 2: //NELA 4: 60-90
      ecg = EcgPreopAFRate60_90;
      break;
    case 4: //NELA 8: > 90
      ecg = EcgPreopAFRate90PlusOther;
      break;
  }

  // Number of ops
  number = 0;
  switch (risk.number) {
    case 2: // NELA 4 : 2 Ops
      number = NumOpPreopTwo;
      break;
    case 4: // NELA 8 : > 2 Ops
      number = NumOpPreopThreePlus;
      break;
  }

  // severity - only if Major+
  severity = 0;
  if (risk.severity == 8) {
    severity = OpSeverityMajorPlus;
  }

  // blood
  blood = 0;
  switch (risk.blood) {
    case 2: // 101-500
      blood = PredBloodLoss101_500;
      break;
    case 4: // 501-999
      blood = PredBloodLoss501_999;
      break;
    case 8: // >= 1000
      blood = PredBloodLoss1000;
      break;
  }

  // soiling
  soiling = 0;
  switch (risk.soiling) {
    case 2: // Serous fluid
      soiling = PeritonealSoilingSerousFluid;
      break;
    case 4: // Localised pus
      soiling = PeritonealSoilingLocalizedPus;
      break;
    case 8: //Free bowel content, pus or blood
      soiling = PeritonealSoilingBowelContentPusBlood;
      break;
  }

  // cancer
  cancer = 0;
  switch (risk.cancer) {
    case 2: // Primary only
      cancer = MalignancyPrimary;
      break;
    case 4: // Nodal metastases
      cancer = MalignancyNodalMetastases;
      break;
    case 8: // Distant metastases
      cancer = MalignancyDistantMetastases;
      break;
  }

  // gcs
  gcs = 0;
  switch (risk.gcs) {
    case 4: // <=8
      gcs = Glasgow3_8;
      break;
    case 2: // <=12
      gcs = Glasgow9_12;
      break;
  }

  section_three =
    Intercept +
    asa +
    age +
    gender +
    cardiac +
    resp +
    ecg +
    bp +
    pulse +
    wcc +
    urea +
    sodium +
    potassium +
    gcs +
    severity +
    number +
    blood +
    soiling +
    cancer +
    urgency +
    creatinine; // - 0.0388465;

  section_three = Math.exp(section_three);
  section_three = section_three / (1 + section_three);

  mortality = section_three;
  mortality = Math.round(mortality * 1000) / 10;

  //IE 11 doesn't like console.log commands here for some reason so they are commented out'
  // console.log("NELA Risk");
  // console.log("mortality = " + mortality);
  // console.log("asa = " + asa);
  // console.log("lookup = " + lookup);
  // console.log("second_lookup = " + second_lookup);
  // console.log("a1 = " + a1);
  // console.log("a2 = " + a2);
  // console.log("age = " + age);
  // console.log("gender = " + gender);
  // console.log("risk.cepod = " + risk.cepod);
  // console.log("urgency = " + urgency);
  // console.log("cardiac = " + cardiac);
  // console.log("respiratory = " + resp);
  // console.log("ecg = " + ecg);
  // console.log("bp = " + bp);
  // console.log("pulse = " + pulse);
  // console.log("wcc = " + wcc);
  // console.log("urea = " + urea);
  // console.log("sodium = " + sodium);
  // console.log("potassium = " + potassium);
  // console.log("gcs = " + gcs);
  // console.log("severity = " + severity);
  // console.log("number = " + number);
  // console.log("blood = " + blood);
  // console.log("soiling = " + soiling);
  // console.log("cancer = " + cancer);
  // console.log("cepod = " + urgency);
  // console.log("creatinine = " + creatinine);

  return { mortality: mortality, error: { state: false, message: "PASSED" } };
}

console.log('Using 91/127 for HR/BP centering:');
console.log(`Mortality = ${Nela(risk).mortality}%`);
  $('#a').text(`Mortality = ${Nela(risk).mortality}%`);
    if (Nela(risk).mortality >= 5) {
    $('#a').text(`Mortality = ${Nela(risk).mortality}% - POST OP CRITICAL CARE ADVISED`); 
  }
console.log('===');
console.log("Using 92/128 for HR/BP centering:");
console.log(`Mortality = ${NelaAdj(risk).mortality}%`);
 $('#b').text(`Mortality = ${NelaAdj(risk).mortality}%`);
  
  if (NelaAdj(risk).mortality >= 5) {
    $('#b').text(`Mortality = ${NelaAdj(risk).mortality}% - POST OP CRITICAL CARE ADVISED`); 
  }
  $('#risk').val(JSON.stringify(risk));
})