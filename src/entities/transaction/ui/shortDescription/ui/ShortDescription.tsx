import { Box, Stack, Typography } from "@mui/material";
import {
  formatDate,
  formatTime,
  formatCurrency,
} from "../../../../../shared/lib/validation/formatters"
import { useTranslation } from "react-i18next";
import {
  statusStylesMap,
  statusIconsMap,
  statusCreditMap,
} from "../helpers.ts/shortDescriptionMaps";
import { TransactionStatus } from "@/entities/transaction/model/transactionStatus";
import { TransactionDirection } from "@/entities/transaction/model/transactionDirection";
import styles from "./ShortDescription.module.css";

type ShortDescriptionProps = {
  icon: string;
  name: string;
  createdAt: string;
  status: TransactionStatus;
  amount: number;
  currency: string;
  category: string;
  type: TransactionDirection;
};

const ShortDescription = ({
  icon,
  name,
  status,
  createdAt,
  amount,
  category,
  type,
  currency,
}: ShortDescriptionProps) => {
  const { t, i18n } = useTranslation();
  const date = formatDate(createdAt, i18n.language);
  const time = formatTime(createdAt, i18n.language);
  const formattedCurrency = formatCurrency(amount, currency, i18n.language);
  const StatusIcon = statusIconsMap[status];
  const StatusiconStyle = statusStylesMap[status];
  return (
    <Stack className={styles.container} direction="row">
      <Box className={styles.icon}>
        <Box
          className={`${styles.icon}${statusIconsMap || ""}`}
          component="img"
          src={icon}
        ></Box>
      </Box>

      <Stack direction="column">
        <Typography>
          {t(`transactionItem.name.${name}`, { defaultValue: name })}
        </Typography>
        <Typography>{t(`transactionDetails.category.${category}`)}</Typography>
        <Stack direction="row">
          <Typography>{date}</Typography>
          <Typography>{time}</Typography>
        </Stack>
      </Stack>
      <Stack direction="row">
        <Box>
          <StatusIcon className={`${StatusiconStyle || ""}`}></StatusIcon>
        </Box>

        <Typography className={statusStylesMap[status]}>
          {t(`transactionDetails.status.${status}`)}
        </Typography>
      </Stack>
      <Stack direction="row">
        <Typography>{statusCreditMap[type]}</Typography>
        <Typography className={styles.amount}>{formattedCurrency}</Typography>
      </Stack>
    </Stack>
  );
};

export { ShortDescription };
