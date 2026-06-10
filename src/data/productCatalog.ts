export type ProductRecord = {
  id: number;
  slNo: number;
  apiName: string;
  impurityName: string;
  catNo: string;
  casNo: string;
  iupac: string;
  molecularFormula: string;
  molecularWeight: string;
  storage: string;
  inventoryStatus: string;
  synonyms: string;
  structure: string;
  isFeatured: boolean;
};

export const productFieldLabels: Record<keyof ProductRecord, string> = {
  id: "ID",
  slNo: "Sl No",
  apiName: "API Name",
  impurityName: "Impurity Name",
  catNo: "CAT NO",
  casNo: "CAS No",
  iupac: "IUPAC Name",
  molecularFormula: "Molecular Formula",
  molecularWeight: "Molecular Weight",
  storage: "Storage",
  inventoryStatus: "Inv Status",
  synonyms: "Synonyms",
  structure: "Structure",
  isFeatured: "Featured",
};
