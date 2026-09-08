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
} from "../../../lib/transactionDescriptionMaps";
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
      <Box className={styles.iconContainer}>
        <Box
          className={styles.brandLogo}
          component="img"
          alt="brand logo"
          src={icon}
        ></Box>
      </Box>

      <Stack direction="column">
        <Typography className={styles.text}>
          {t(`transactionItem.name.${name}`, { defaultValue: name })}
        </Typography>
        <Typography>{t(`transactionDetails.category.${category}`)}</Typography>
        <Box className = {styles.date}>
          <Typography>{date}</Typography>
          <Typography>{time}</Typography>
        </Box>
      </Stack>

      <Box  className={styles.statusContainer}>
        <StatusIcon
          className={`${styles.statusIcon} ${styles[StatusiconStyle]}`}></StatusIcon>
        <Typography className={styles[statusStylesMap[status]]}>
          {t(`transactionDetails.status.${status}`)}
        </Typography>
      </Box>
      <Box className={styles.amountContainer}>
        <Typography className={styles.amount}>
          {statusCreditMap[type]} {formattedCurrency}
        </Typography>
      </Box>
    </Stack>
  );
};

export { ShortDescription };
