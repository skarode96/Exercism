enum RNAComplement {
  "C" = "G",
  "G" = "C",
  "T"= "A",
  "A" = "U",
}

const getComplementRNA = (nucleotide:string) => {
  return RNAComplement[nucleotide as keyof typeof RNAComplement];
}


export function toRna(sequence: string) {
  let RNA: string = "";
  [...sequence].forEach( nucleotide => {
    if(!(nucleotide in RNAComplement))
      throw new Error('Invalid input DNA.');
    RNA = RNA.concat(getComplementRNA(nucleotide))
  })
  return RNA;
}
