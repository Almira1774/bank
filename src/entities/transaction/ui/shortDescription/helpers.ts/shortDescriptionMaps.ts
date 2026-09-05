import { TransactionDirection } from "@/entities/transaction/model/transactionDirection";
import { TransactionStatus } from "@/entities/transaction/model/transactionStatus";
import type { SvgIconProps } from "@mui/material";
import type { ComponentType } from "react";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import ErrorIcon from "@mui/icons-material/Error";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import styles from "../ui/ShortDescription.module.css";

export const statusStylesMap: Record<TransactionStatus, string> = {
  [TransactionStatus.COMPLETED]: styles.statusCompleted,
  [TransactionStatus.PENDING]: styles.statusPending,
  [TransactionStatus.FAILED]: styles.statusFailed,
  [TransactionStatus.COMPENSATED]: styles.statusCompensaited,
};

export const statusIconsMap: Record<TransactionStatus, ComponentType<SvgIconProps>> = {
  [TransactionStatus.COMPLETED]: ExpandCircleDownIcon,
  [TransactionStatus.PENDING]: HistoryToggleOffIcon,
  [TransactionStatus.COMPENSATED]: ChangeCircleIcon,
  [TransactionStatus.FAILED]: ErrorIcon,
};
export const statusCreditMap: Record<TransactionDirection, string> = {
  [TransactionDirection.DEBIT]: "-",
  [TransactionDirection.CREDIT]: "",
};
