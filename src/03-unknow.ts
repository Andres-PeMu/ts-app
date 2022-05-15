let unknowVar: unknown;

unknowVar = true;
unknowVar = 2;
unknowVar= [];
unknowVar= {};


if (typeof unknowVar === 'string'){
  unknowVar.toLowerCase();
}
