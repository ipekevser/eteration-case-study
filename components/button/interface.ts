export interface ICustomButton {
  externalClass?: string;
  label: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}
