export interface IResponseGetComponents {
    recordsets?: Recordset[][]
    recordset?: Recordset2[]
    rowsAffected?: number[]
  }
  
export interface Recordset {
    cd_Componente: number
    cd_PN: string
    ds_Nome: string
    ds_Modelo: string
    ds_Fabricante: string
    vl_Preco: number
    ds_Dimensao: string
    ds_TipoDesenho: string
    ds_Lpp: string
    nr_Padronizacao: string
    ds_Imagem: string
  }
  
export interface Recordset2 {
    cd_Componente: number
    cd_PN: string
    ds_Nome: string
    ds_Modelo: string
    ds_Fabricante: string
    vl_Preco: number
    ds_Dimensao: string
    ds_TipoDesenho: string
    ds_Lpp: string
    nr_Padronizacao: string
    ds_Imagem: string
  }