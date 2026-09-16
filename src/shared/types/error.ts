import { ToastTypeEnum } from "@/shared/types/enums";
export interface ToastMessage {
  type: ToastTypeEnum;
  message: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}
