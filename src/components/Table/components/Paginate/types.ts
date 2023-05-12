export interface IPropsPaginate {
    onPageActive?(selectedItem: { selected: number }): void;
    onPageChange?(selectedItem: { selected: number }): void;
    numberpages: number;
    atualpage?: number;
  }