export interface IPropsInputFile {
  // eslint-disable-next-line no-unused-vars
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  error?:boolean;
  accept?: string;
  value?: FileList
}